import type { AxiosRequestConfig } from 'axios'
import url from 'url'
import axios from 'axios'
import moment from 'moment'

export let agentKey = ''

export const tractionBaseUrl = process.env.TRACTION_BASE_URL ?? ''

// Retrieve the wallet ID from the environment variables
const walletId = process.env.WALLET_ID ?? ''

// Retrieve the wallet secret from the environment variables
const walletSecret = process.env.WALLET_SECRET ?? ''

/**
 * Initializes the Traction API key updater.
 * This function retrieves the Traction API key using the wallet secret and sets it to the agentKey variable.
 */
export const tractionApiKeyUpdaterInit = async () => {
  console.log('Initializing Traction API key updater...')
  const url = new URL(`/multitenancy/wallet/${walletId}/token`, tractionBaseUrl).toString()

  // Retrieve the Traction API key using the wallet ID and wallet secret
  const response = await axios.post(url, { wallet_key: walletSecret })
  const apiKey = response?.data?.token
  
  // Set the retrieved API key to the agentKey variable
  if (apiKey) {
    agentKey = apiKey
  }
  
  // Refresh agent key every hour
  setInterval(async () => {
    agentKey =
      (await axios.post(url, { wallet_key: walletSecret })).data
        ?.token ?? agentKey
  }, 3600000)
}

/**
 * Sends a Traction API request with the specified method, URL, data, and configuration.
 * This function adds the Traction API key to the request headers.
 */
export const sendTractionRequest = async (method: string, path: string, data?: any, config?: AxiosRequestConfig<any>) => {
  const headers = { ...config?.headers, Authorization: `Bearer ${agentKey}` }
  const timeout = config?.timeout ?? 80000
  const url = new URL(path, tractionBaseUrl).toString()

  const response = await axios.request({
    method,
    url,
    data,
    headers,
    timeout,
  })
  
  return response
}

/**
 * Traction API request methods (CRUD)
 */
export const tractionRequest = {
  post: (url: string, data: any, config?: AxiosRequestConfig<any>) => sendTractionRequest('post', url, data, config),
  get: (url: string, config?: AxiosRequestConfig<any>) => sendTractionRequest('get', url, undefined, config),
  delete: (url: string, config?: AxiosRequestConfig<any>) => sendTractionRequest('delete', url, undefined, config),
}

/**
 * Deletes inactive connections that are older than 12 hours,
 * except for the endorser connections.
 */
export const cleanupConnections = async () => {
  const maxAgeHours = 12
  const excludedAliases = ['endorser', 'bcovrin-test-endorser']
  
  const connectionsResponse = await tractionRequest.get('/connections')
  const connections = connectionsResponse.data.results
  
  const now = moment()
  
  for (const conn of connections) {
    const ageHours = now.diff(moment(conn.created_at), 'hours')
    
    if (ageHours >= maxAgeHours && !excludedAliases.includes(conn.alias)) {
      await tractionRequest.delete(`/connections/${conn.connection_id}`)
    }
  }
}

/**
 * Deletes records that are older than the specified maximum age, 
 * using the specified endpoint path and ID field name.
 */
const deleteOldRecords = async (endpointPath: string, idFieldName: string, maxAgeHours: number) => {
  const response = await tractionRequest.get(endpointPath)
  const records = response.data.results
  
  const now = moment()
  
  for (const record of records) {
    const ageHours = now.diff(moment(record.created_at), 'hours')
    
    if (ageHours >= maxAgeHours) {
      const recordId = record[idFieldName]
      await tractionRequest.delete(`${endpointPath}/${recordId}`)
    }
  }
}

// /**
//  * Deletes inactive connections that are older than 12 hours,
//  * except for the endorser and bcovrin-test-endorser connections.
//  */
// export const cleanupConnections = async () => {
//   const excludedAliases = ['endorser', 'bcovrin-test-endorser']
//   await deleteOldRecords('/connections', 'connection_id', 12, excludedAliases)
// }

/**
 * Deletes exchange records that are older than 12 hours.
 */
export const cleanupExchangeRecords = async () => {
  const maxAgeHours = 12
  await deleteOldRecords('/issue-credential/records', 'credential_exchange_id', maxAgeHours)
}

/**
 * Deletes proof records that are older than 12 hours.
 */
export const cleanupProofRecords = async () => {
  const maxAgeHours = 12
  await deleteOldRecords('/present-proof/records', 'presentation_exchange_id', maxAgeHours)
}

export const tractionGarbageCollection = async () => {
  const intervalInMs = 6 * 60 * 60 * 1000
  
  cleanupConnections()
  cleanupExchangeRecords()
  cleanupProofRecords()

  setInterval(async () => {
    cleanupConnections()
    cleanupExchangeRecords()
    cleanupProofRecords()
  }, intervalInMs)
}

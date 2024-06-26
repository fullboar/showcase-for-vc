export const isConnected = (state: string) => {
  return state === 'complete' || state === 'response' || state === 'active'
}

export const isDataUrl = (value?: string) => {
  return value && value.startsWith('data:image/')
}

export const isCredIssued = (state: string) => {
  return state === 'done' || state === 'credential_issued'
}

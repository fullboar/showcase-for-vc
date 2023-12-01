export const isConnected = (state: string) => {
  return state === 'complete' || state === 'response' || state === 'active'
}

export const isDataUrl = (value?: string) => {
  return value && value.startsWith('data:image/')
}

export const isCredIssued = (state: string) => {
  return state === 'credential_issued' || state === 'done' || state === 'credential_acked'
}

export const getDateInt = (offsetYear?: number) => {
  const pastDate = new Date()
  pastDate.setFullYear(pastDate.getFullYear() + (offsetYear ?? 0))
  return parseInt(pastDate.toISOString().split('T')[0].replace(/-/g, ''))
}

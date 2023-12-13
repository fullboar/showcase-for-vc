export interface Credential {
  name: string
  icon: string
  version: string
  attributes: {
    name: string
    value: string
  }[]
}

export interface OnboardingStep {
  screenId: string
  title: string
  text: string
  image?: string
  issuer_name?: string
  credentials?: Credential[]
}

export interface CredentialRequest {
  name: string
  icon?: string
  predicates?: { name: string; value?: string | number | (() => string | number); type: string }
  properties?: string[]
  nonRevoked?: { to: number; from?: number }
}

export interface CustomRequestOptions {
  title: string
  text: string
  requestedCredentials: CredentialRequest[]
}

export interface UseCaseScreen {
  screenId: string
  title: string
  text: string
  image?: string
  verifier?: { name: string; icon?: string }
  requestOptions?: CustomRequestOptions
}

export interface CustomUseCase {
  id: string
  name: string
  screens: UseCaseScreen[]
}

export interface ProgressBarStep {
  name: string
  onboardingStep: string
  iconLight: string
  iconDark: string
}

export interface RevocationInfoItem {
  credentialName: string
  credentialIcon: string
  title: string
  description: string
}

export interface CustomCharacter {
  name: string
  type: string
  image: string
  description?: string
  progressBar: ProgressBarStep[]
  onboarding: OnboardingStep[]
  useCases: CustomUseCase[]
  revocationInfo?: RevocationInfoItem[]
}

export interface UseCaseCard {
  title: string
  image?: string
  description: string
}

export interface CredentialData {
  id: string
  name: string
  icon: string
  credentialDefinition?: string
  attributes: Attribute[]
  connectionId: string
}

export interface Attribute {
  name: string
  value: string | number | (() => string | number)
}

export interface StepperItem {
  id: string
  name: string
  description: string
  steps: number
  section: number
}

export interface Overlay {
  header?: string
  subheader?: string
  footer?: string
}

export interface EndStepperItem {
  id: string
  title: string
  description: string
  image: string
}

export interface Colors {
  primary: string
  secondary: string
}

export interface RequestOptions {
  name?: string
  comment?: string
}

export interface Wallet {
  id: number
  name: string
  organization: string
  recommended: boolean
  icon: string
  url: string
  apple: string
  android: string
  ledgerImage?: string
}

export interface ConnectionParams {
  my_label?: string
  image_url?: string
}

export interface CredentialParams {
  connection_id?: string
  cred_def_id?: string
  revocation_registry_size?: number
  schema_id?: string
  support_revocation?: boolean
  tag?: string
  attributes?: string[]
  schema_name?: string
  schema_version?: string | number
  credential_proposal?: {
    '@type'?: string
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    attributes?: any[]
  }
}

export interface ProofParams {
  connection_id: string
  comment?: string
  proof_request?: {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    requested_attributes?: any
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    requested_predicates?: any
    version?: string
    name?: string
  }
  auto_verify?: boolean
}

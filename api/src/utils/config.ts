import dotenv from 'dotenv'
import nconf from 'nconf'
// import path from 'path';
// import { fileURLToPath } from 'url';

// const dirName = path.dirname(fileURLToPath(import.meta.url));
// const configFileName = 'config.json';
const env = process.env.NODE_ENV ?? 'development'

if (env === 'development') {
  dotenv.config()
}

/**
 * These settings contain sensitive information and should not be
 * stored in the repo. They are extracted from environment variables
 * and added to the config.
 */

// overrides are always as defined
nconf.overrides({
  environment: env,
  host: process.env.HOST ?? '0.0.0.0',
  port: process.env.PORT ?? 3100,
  traction: {
    tenantId: process.env.TENANT_ID,
    walletId: process.env.WALLET_ID,
    walletSecret: process.env.WALLET_SECRET,
    tractionBaseUrl: process.env.TRACTION_BASE_URL,
    tractionDid: process.env.TRACTION_DID,
  },
})

// load other properties from file.
nconf.argv().env()
// .file({ file: path.join(dirName, '../', configFileName) });

// if nothing else is set, use defaults. This will be set if
// they do not exist in overrides or the config file.
nconf.defaults({
  appUrl: process.env.APP_URL ?? 'http://localhost:3100',
})

export default nconf

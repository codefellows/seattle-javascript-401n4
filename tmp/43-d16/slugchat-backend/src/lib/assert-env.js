let required = [
  'PORT',
  'SECRET',
  'API_URL',
  'NODE_ENV',
  'CLIENT_URL',
  'MONGODB_URI',
  'CORS_ORIGINS',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
]

try {
  required.forEach(key => {
    if(!process.env[key])
      throw new Error(`ENVIRONMNET ERROR: slugchat requires process.env.${key} to be set`)
  })
} catch (e) {
  console.error(e.message)
  process.exit(1)
}



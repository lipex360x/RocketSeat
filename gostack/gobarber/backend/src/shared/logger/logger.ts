import tracer from 'tracer'

const level = process.env.LOG_LEVEL || 'log'

const logger = global.logger = tracer.colorConsole({
  level: level,
  format: '{{path}}:{{line}} -> {{message}}'
})

export default logger

import tracer from 'tracer'

const logger = tracer.colorConsole({
  level: 'log',
  format: '{{path}}:{{line}} -> {{message}}'
})

export default logger

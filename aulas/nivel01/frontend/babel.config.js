module.exports = {
  presets: [
    '@babel/preset-env', // Conversão de ES5/6 para CommonJS
    '@babel/preset-react' // Conversão de react para CommonJS
  ],
  plugins:[
    '@babel/plugin-transform-runtime'
  ]
}
const express = require('express')
const graphQLHTTP = require('express-graphql')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const { renderToString } = require('react-dom/server')
const config = require('./webpack.config.js')
const schema = require('./data/schema')
const App = require('./src/containers/App')

const APP_PORT = 8080;
const GRAPHQL_PORT = 4000;

const graphQLServer = express()

graphQLServer.use('/', graphQLHTTP({schema, graphiql: true}))
graphQLServer.listen(GRAPHQL_PORT, () => {
    console.log('GraphQL server is running on port', GRAPHQL_PORT)
})

const compiler = webpack(config)

const app = new WebpackDevServer(compiler, 
    {
        ...config.devServer,
        proxy: {'/graphql': `http://localhost:${GRAPHQL_PORT}`},
    }
)

// Creating a single index route to server our React application from.
graphQLServer.get('/', (req, res) => {
    const body = renderToString(<App />)
    res.send()
})

app.listen(APP_PORT, () => {
    console.log('App server is running on port', APP_PORT)
})


import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'

const Root = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(<Root/>, document.getElementById('app'))
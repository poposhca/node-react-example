import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/components/app'
import config from './config'
import axios from 'axios'

const serverRender = () =>
    axios.get(`${config.serverURL}/api/contests`)
    .then(data => {
        ReactDOMServer.renderToString(<App data={data} />)
    })

export default serverRender
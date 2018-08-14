import React from 'react'
import data from './testData'
import reactDOM from 'react-dom'
import App from './components/app'

//El JSON lo carga automatico el Web Pack
console.log(data)

reactDOM.render(
    //react.createElement('h2', null, 'Hello from REACT'),
    <App contests={data.contests}/>,
    document.getElementById('root')
)
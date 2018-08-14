import express from 'express'
import data from '../src/testData.json'

const router = express.Router()

router.get('/contests', (req, res) => {
    res.send(data)
})

router.get('/', (req, res) => {
    res.send( {data:[] } )
})

export default router
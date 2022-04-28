const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
const { response } = require('express')

const app = express()
app.use(cors())
app.use(express.json())

const url = 'https://89d5e088-403e-4f3d-996d-bffb1bdd98a7-europe-west1.apps.astra.datastax.com/api/rest/v2/namespaces/tickets/collections/tasks'
const token = 'AstraCS:IXNHZSGuAYAcEJMztbXmxxbA:2c116de9f2eb4e8ae9d1ff7d4cf889e6f277c864935b86a579b63570e2b440cb'

// Get all the tickets
app.get('/tickets', async (req, res) => {
    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
        }
    }
    try {
        const response = await axios(`${url}?page-size=20`, options)
        res.status(200).json(response.data)
    } catch(err){
        console.log(err)
        res.status(500).json({message:err})
    }
})

// Get one ticket
app.get('/tickets/:documentId', async (req,res) => {
    const id = req.params.documentId

    const options = {
        method: 'GET',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        }
    }
    try{
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err){
        console.log(err)
        res.status(500).json({message: err})
    }
})


app.post('/tickets', async (req, res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json',
        },
        data: formData,
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err})
    }
})

app.put('/tickets/:documentId', async (req,res) => {
    const id = req.params.documentId
    const data = req.body.data

    const options = {
        method: 'PUT',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        },
        data
    }
    try{
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err){
        console.log(err)
        res.status(500).json({message: err})
    }
})



app.delete('/tickets/:documentId', async (req,res) => {
    const id = req.params.documentId
    const options = {
        method : 'DELETE',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token
        }
    }
    try{
        const response = await axios(`${url}/${id}`, options)
        res.status(200).json(response.data)
    } catch (err){
        console.log(err)
        res.status(500).json({message: err})
    }
})





app.listen(PORT, () => console.log('server running on PORT ' + PORT))
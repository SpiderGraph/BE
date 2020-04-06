const router = require('express').Router()

const Graphs = require('../../models/Graphs')


router.get('/', (req, res ) => {
    const graphs = Graphs.find()
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => res.status(500).json('Error occured'))
})

router.post('/', (req, res) => {
    const body = req.body
    const graph = new Graphs(body)
    graph.save()
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => res.status(500).json('Error occured'))
})

module.exports = router



const router = require('express').Router()

const Graphs = require('../models/Graphs')

// router.get('/', (req, res) => {
//     Graphs.find({}).exec(function(err, r){
//         if(!err){
//             res.status(201).json(r)
//         }else{
//             res.status(500).json('Error occured')
//         }
//     })
// })

router.get('/', (req, res ) => {
    const graphs = Graphs.find({})
    .then(data => {
        res.status(200).json(data)
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

router.put('/:id', (req, res) => {
    let id = req.params.id
    let graph = req.body
    console.log('ID ', id)
    console.log('GRAPH ', graph)
    Graphs.updateMany({_id: id}, graph)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json('Error occured'))
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    Graphs.deleteOne({_id: id})
        .then(data => res.status(200).json(data))
        .catch(data => res.status(500).json('Error occured'))
})

module.exports = router



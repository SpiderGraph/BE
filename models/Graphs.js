const mongoose = require('mongoose')

const GraphSchema = mongoose.Schema({
    graphName: String,
    dataSets: [{
            radius: [Number],
            dataSetName: String,
            points: String,
            color: String,
    }],
    legs:  [{
        legName: String,
        rotation: Number,
        points: [{
            pointName: String,
        }]
    }],
    date: {
        type: Date,
        defalt: Date.now
    }
})

// const GraphSchema = mongoose.Schema({
//     graphId: Number,
//     graphName: {
//         type: String,
//         required: true,
//     },
//     dataSets: [DataSet],
//     legs: {
//         type: [Leg],
//         required: true
//     },
//     date: {
//         type: Date,
//         defalt: Date.now
//     }
// })

// const DataSet = [{
//     dataSetId: Number,
//     radius: [Number],
//     dataSetName: {
//         type: String,
//         required: true 
//     },
//     points: {
//         type: String,
//         required: true,
//     },
//     color: {
//         type: String,
//         required: true,
//     },
// }]

// const Leg = {
//     legId: Number,
//     legName: {
//         type: String,
//         required: true,
//     },
//     rotation: {
//         type: Number,
//         required: true
//     },
//     points: [Point]
// }

// const Point = {
//     pointId: Number,
//     pointName: {
//         type: String,
//         required: true,
//     },
//     completed: Boolean,
// }

module.exports = mongoose.model('Graphs ', GraphSchema)
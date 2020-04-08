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


module.exports = mongoose.model('Graphs ', GraphSchema)
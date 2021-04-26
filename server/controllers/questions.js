const Question = require('../models/Question');

exports.getAllQuestions = async (req, res) => {

    res.status(201).json({
        status: 'success',
        // data: {
        //     question: newQuestion
        // }
    });
}

exports.createQuestion = async (req, res) => {
    try {
        const newQuestion = await Question.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                question: newQuestion
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            err
        });
    }
}
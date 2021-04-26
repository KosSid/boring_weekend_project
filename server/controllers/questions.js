const Question = require('../models/Question');

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
};

// localhost:5000/api/questions?&perPage=1&startPage=1
exports.getAllQuestions = async (req, res) => {
    const perPage = Number(req.query.perPage) || 1;
    const startPage = Number(req.query.startPage) || 1;

    try {
        const questions = await Question.find()
            .skip(startPage * perPage - perPage)
            .limit(perPage)

        if(questions.length === 0 ) {
            return res.status(200).json({
                status: 'success',
                message: 'no data',
                data: null
            })
        }
        res.status(200).json({
            status: 'success',
            data: {
                questions
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            err
        });
    }
}
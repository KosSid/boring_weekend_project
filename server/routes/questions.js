const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
    getAllQuestions,
    createQuestion
} = require("../controllers/questions");

router
    .route('/')
    .get(getAllQuestions)
    .post(createQuestion);

module.exports = router;

import Ajax from "./Ajax";

class QuestionService {

    async getQuestions(query) {
        return await Ajax.get(`/questions${query}`);
    }

}

export default new QuestionService();
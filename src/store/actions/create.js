import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from "./actionsType";
import axios from "../../axios/axios-quiz";

export function createQuizHandler(item) {
    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_CREATION
    }
}

export function finishCreateQuiz() {
    return  async (dispatch, getState) => {
        await axios.post('/quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}
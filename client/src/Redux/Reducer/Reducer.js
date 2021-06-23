import { ADD_ANSWER, GET_QUESTIONS_LIST, NEXT_QUESTON } from '../ActionsTypes/ActionsTypes';

const Reducer = (state, action) => {
  switch (action.type) {

    case GET_QUESTIONS_LIST:
      return {
        ...state,
        questionList: action.payload,
        currentQuestion: action.payload[0]
      };

    case NEXT_QUESTON:
      return {
        ...state,
        currentQuestionOrder: state.currentQuestionOrder += 1,
        currentQuestion: state.questionList[state.currentQuestionOrder]
      }

    case ADD_ANSWER:
      return {
        ...state,
        answersList: [...state.answersList, action.payload]
      };

    default:
      return state;
  };
};

export default Reducer;
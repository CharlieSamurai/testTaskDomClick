import { useDispatch, useSelector } from "react-redux";
import { ADD_ANSWER, NEXT_QUESTON } from '../../../Redux/ActionsTypes/ActionsTypes';
import { useHistory } from "react-router";


const BooleanQuestion = ({ props }) => {

  const history = useHistory();

  const compareLength = useSelector(state => {
    const trivia = {
      questionList: state.questionList,
      answersList: state.answersList
    };
    return trivia;
  });

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    dispatch({
      type: ADD_ANSWER,
      payload: {
        question: props.question,
        userAnswer: e.target.innerText,
        correctAnswer: props.correct_answer,
        questionDifficulty: props.difficulty
      }
    });
    if (compareLength.answersList.length === compareLength.questionList.length - 1) {
      history.push('/results');
    } else {
      dispatch({
        type: NEXT_QUESTON
      });
    }
  };

  return (
    <>
      <button onClick={submitHandler} >True</button>
      <button onClick={submitHandler} >False</button>
    </>
  );
};

export default BooleanQuestion;
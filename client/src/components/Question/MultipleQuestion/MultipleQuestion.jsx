import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ANSWER, NEXT_QUESTON } from '../../../Redux/ActionsTypes/ActionsTypes';
import { useHistory } from "react-router";


const MultipleQuestion = ({ props }) => {

  const history = useHistory();

  const compareLength = useSelector(state => {
    const trivia = {
      questionList: state.questionList,
      answersList: state.answersList
    };
    return trivia;
  });

  const dispatch = useDispatch();
  const possibleAnswers = [...props.incorrect_answers, props.correct_answer].sort((a, b) => a - b);

  const [userAnswers, setUserAnswers] = useState([]);

  const checkhandler = (e) => {
    return e.target.checked
      ?
      setUserAnswers(prev => [...prev, e.target.value])
      :
      setUserAnswers(prev => prev.filter(el => el !== e.target.value));
  };

  const submitHandler = () => {
    dispatch({
      type: ADD_ANSWER,
      payload: {
        question: props.question,
        userAnswer: userAnswers,
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
      document.querySelectorAll('input')?.forEach(el => el.checked = false);
      setUserAnswers([]);
    };
  };

  return (
    <>
      {possibleAnswers.map(el => {
        return (
          <>
            <input type="checkbox" value={el} onClick={(e) => checkhandler(e)} />{el}<br />
          </>
        )
      })}
      <button onClick={submitHandler}>Next</button>
    </>
  );
};

export default MultipleQuestion;
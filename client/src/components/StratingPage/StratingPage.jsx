import { useState, useEffect } from 'react';
import { categoriesList, difficultyList, typeList } from './categoriesList';
import { useDispatch, useSelector } from 'react-redux';
import getQuestionsListThunk from '../../Redux/ReduxThunks/getQuestionsListThunk';
import { useHistory } from 'react-router';
import './StartingPage.module.css';


const StartingPage = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const currentQustionsList = useSelector(state => state.questionList);

  useEffect(() => {
    if (currentQustionsList?.length) {
      history.push('/trivia');
    };
  }, [currentQustionsList])

  const [numberInput, setNumberInput] = useState(10);
  const [categorySelect, setcategorySelect] = useState(null);
  const [difficultySelect, setDifficultySelect] = useState(null);
  const [typeSelect, setTypeSelect] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getQuestionsListThunk(numberInput, categorySelect, difficultySelect, typeSelect))
  };

  return (
    <form onSubmit={submitHandler}>
      <span>Category: </span>
      <select onChange={e => setcategorySelect(e.target.value)}>
        <option>Any Category</option>
        {categoriesList.map((el, i) => <option key={Math.random() + Date.now()}>{el.categoryName}</option>)}
      </select>
      <br />
      <span>Difficulty: </span>
      <select onChange={e => setDifficultySelect(e.target.value)}>
        <option>Any Difficulty</option>
        {difficultyList.map((el, i) => <option key={Math.random() + Date.now()}>{el}</option>)}
      </select>
      <br />
      <span>Type: </span>
      <select onChange={e => setTypeSelect(e.target.value)}>
        <option>Any Type</option>
        {typeList.map((el, i) => <option key={Math.random() + Date.now()}>{el}</option>)}
      </select>
      <br />
      <span>Quantity: </span>
      <input type='number' placeholder='Number of Questions' onChange={e => setNumberInput(e.target.value)} value={numberInput}></input>
      <br />
      <button>Start!</button>
    </form>
  );
};

export default StartingPage;
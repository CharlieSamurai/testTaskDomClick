import { GET_QUESTIONS_LIST } from '../ActionsTypes/ActionsTypes';
import { categoriesList } from '../../../src/components/StratingPage/categoriesList';
import { stingFixer } from './stringFixer';

const getQuestionsListAction = (list) => {
  return {
    type: GET_QUESTIONS_LIST,
    payload: list
  };
};

const getQuestionsListThunk = (length, category, difficulty, type) => async (dispatch, getState) => {
  try {

    const categoryQuery = (() => {
      if (category && category !== 'Any Category') {
        return `&category=${categoriesList.findIndex(el => el.categoryName === category) + 9}`;
      } else {
        return '';
      }
    })();

    const difficultyQuery = (() => {
      if (difficulty && difficulty !== 'Any Difficulty') {
        return `&difficulty=${difficulty.toLowerCase()}`;
      } else {
        return '';
      }
    })();

    const typeQuery = (() => {
      if (type && type !== 'Any Type') {
        return type.includes('Multiple') ? `&type=multiple` : `&type=boolean`;
      } else {
        return '';
      }
    })();

    const response = await fetch(`https://opentdb.com/api.php?amount=${length}${categoryQuery}${difficultyQuery}${typeQuery}`);
    const apiResponse = await response.json();
    if (response.status === 200 && apiResponse.results?.length) {
      apiResponse.results.forEach(el => {
        el.question = stingFixer(el.question);
        el.correct_answer = stingFixer(el.correct_answer);
        el.incorrect_answers = stingFixer(el.incorrect_answers);
        dispatch(getQuestionsListAction(apiResponse.results));
      });
    } else {
      alert('С API ничего не пришло. Выберите настройки еще раз.');
    }
  }
  catch (e) {
    console.log(e);
  }
};

export default getQuestionsListThunk;
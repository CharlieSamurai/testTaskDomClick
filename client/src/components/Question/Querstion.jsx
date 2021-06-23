import { useSelector } from "react-redux";
import MultipleQuestion from './MultipleQuestion/MultipleQuestion';
import BooleanQuestion from './BooleanQuestion/BooleanQuestion';

const QuestionPage = () => {

  const currentQuestion = useSelector(state => state.currentQuestion);

  return (
    <>
      <p>{currentQuestion?.question}</p>
      {
        currentQuestion.type === 'multiple'
          ?
          <MultipleQuestion props={currentQuestion} />
          :
          <BooleanQuestion props={currentQuestion} />
      }
    </>
  );
};

export default QuestionPage;
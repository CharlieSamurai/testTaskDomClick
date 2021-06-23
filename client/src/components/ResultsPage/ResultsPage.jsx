import { useSelector } from "react-redux";
import styles from './ResultsPage.module.css';

const ResultsPage = () => {

  const statistic = useSelector(state => state.answersList);

  return (
    <>
      {statistic.map(el => {
        return (
          <div key={Math.random() + Date.now()}>
            <p>{el.question}</p>
            <p className={
              el.userAnswer === el.correctAnswer || el.userAnswer.includes(el.correctAnswer)
                ?
                styles.rightAnswer
                :
                styles.wrongAnswer
            }
            >
              Your answer: {
                typeof (el.userAnswer) === 'object'
                  ?
                  el.userAnswer.join(' / ')
                  :
                  el.userAnswer
              }
            </p>
            <p>Correct Answer: {el.correctAnswer}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
};

export default ResultsPage;
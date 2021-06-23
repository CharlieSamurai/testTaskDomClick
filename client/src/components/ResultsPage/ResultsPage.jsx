import { useSelector } from "react-redux";
import styles from './ResultsPage.module.css';

const ResultsPage = () => {

  const statistic = useSelector(state => state.answersList).sort((a,b) => b.questionDifficultyNubmer - a.questionDifficultyNubmer);

  const classChecker = (parameter) => {
    switch (parameter) {

      case 'easy':
        return styles.difficultyEasy;

      case 'medium':
        return styles.difficultyMedium;

      case 'hard':
        return styles.difficultyHard;
    };
  };

  return (
    <>
      {statistic.map(el => {
        return (
          <div className={styles.resultsDiv} key={Math.random() + Date.now()}>
            <span className={classChecker(el.questionDifficulty)}>{el.questionDifficulty}</span>
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
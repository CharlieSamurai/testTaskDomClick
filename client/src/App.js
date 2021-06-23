import StartingPage from './components/StratingPage/StratingPage';
import QuestionPage from './components/Question/Querstion';
import ResultsPage from './components/ResultsPage/ResultsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
        <StartingPage />
        </Route>
        <Route path='/trivia'>
          <QuestionPage />
        </Route>
        <Route path='/results'>
          <ResultsPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

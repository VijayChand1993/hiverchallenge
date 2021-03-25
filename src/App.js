import EmailView from './views/email/EmailView';
import LabelView from './views/label/LabelView';
import LoginView from './views/login/LoginView';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/email">
          <EmailView />
        </Route>
        <Route path="/label">
          <LabelView />
        </Route>
        <Route path="/">
          <LoginView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

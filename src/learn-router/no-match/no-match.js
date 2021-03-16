import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

export default function NoMatchExample() {
  return <Router>
    <div>
      <ul>
        <li>
          <Link to="/404">Home</Link>
        </li>
        <li>
          <Link to="/404/old-match">Old Match,to be redirected</Link>
        </li>
        <li>
          <Link to="/404/will-match">Will Match</Link>
        </li>
        <li>
          <Link to="/404/will-not-match">Will Not Match</Link>
        </li>
        <li>
          <Link to="/404/also/will/not/match">Also Will Not Match</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/404">
          <Home />
        </Route>

        <Route path="/404/old-match">
          <Redirect to="/404/will-match" />
        </Route>
        <Route path="/404/will-match">
          <WillMatch />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </div>
  </Router>
}

function Home() {
  return <h3>Home</h3>;
}

function WillMatch() {
  return <h3>Matched!</h3>;
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

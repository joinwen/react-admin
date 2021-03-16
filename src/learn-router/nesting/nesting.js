import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/nesting">Home</Link>
          </li>
          <li>
            <Link to="/nesting/topics">Topics</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/nesting">
            <Home />
          </Route>
          <Route path="/nesting/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function Topics() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  )
}


function Topic() {
  let params = useParams();
  console.log(params);
  return <div>
    <h2>{params.topicId}</h2>
  </div>
}

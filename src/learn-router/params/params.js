import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/params/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/params/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/params/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/params/modus-create">Modus Create</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/params/:id" children={<Child />}></Route>
        </Switch>
      </div>
    </Router>
  )
}

function Child() {
  let params = useParams();
  return (
    <div>
      <h3>{params.id}</h3>
    </div>
  )
}

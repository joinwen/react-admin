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
          <Route path="/params/:id" component={Child}>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

/**
 * 使用 props 获取 match,location,history
 * 使用 useParams 方式
 */
function Child(props) {
  console.log(props);
  let { match } = props;
  let params = useParams();
  return (
    <div>
      <h3>{ params.id }</h3>
      <h3>{ match.params.id }</h3>
    </div>
  )
}

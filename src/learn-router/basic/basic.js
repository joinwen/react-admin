import { BrowserRouter as Router, Switch, Route, Link, useLocation} from "react-router-dom";
import qs from "query-string";

export default function BasicExample() {
  return (
    <div>
      <Router>
      <h2>
        <Link to="/basic?switch=true">With Switch</Link>
      </h2>
      <h2>
        <Link to="/basic">No Switch</Link>
      </h2>
      <App />
      </Router>
    </div>
  )
}
function App(props) {
  console.log(props);
  let location = useLocation();
  let isSwitch = qs.parse(location.search).switch;
  return (
      <div>
        <Router>
        <ul>
          <li>
            <Link to="/basic">Home</Link>
          </li>
          <li>
            <Link to="/basic/about">About</Link>
          </li>
          <li>
            <Link to="/basic/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr/>
        <W isSwitch={isSwitch}/>
        </Router>
      </div>
  )
}

function W(props) {
  let isSwitch = props.isSwitch;
  return (
      isSwitch
      ?
      <Switch>

        <Route path="/basic/about">
          <About />
        </Route>
        <Route path="/basic/dashboard">
          <Dashboard />
        </Route>
        <Route path="/basic">
          <Home />
        </Route>
      </Switch>
      :
      <div>
        <Route path="/basic/about">
          <About />
        </Route>
        <Route path="/basic/dashboard">
          <Dashboard />
        </Route>
        <Route path="/basic">
          <Home />
        </Route>
      </div>
  )
}

function Home() {
  return <h2>Home</h2>
}
function About() {
  return <h2>About</h2>
}
function Dashboard() {
  return <h2>Dashboard</h2>
}

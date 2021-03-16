import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <div>
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
      </div>
    </Router>
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

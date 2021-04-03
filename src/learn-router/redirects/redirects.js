import { BrowserRouter as Router, Redirect, Switch, Route,Link} from "react-router-dom";

export default function RedirectsExample() {
  return (
    <Router>
      <Link to="/redirects/home">主页</Link>
      <Switch>
        <Route path="/redirects/home">
          <Redirect to="/redirects/login" from="/redirects/home"></Redirect>
        </Route>
        <Route path="/redirects/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  )
}

function Login() {
  return (
    <h2>login</h2>
  )
}


import { BrowserRouter as Router, Link, Route, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default function QueryParametersExample() {
  return (
    <Router>
      <Query />
    </Router>
  )
}
function Query() {
  let query = useQuery();
  return (
    <div>
      <Link to="/qs?nickname=bytewen">bytewen</Link>
      <Link to="/qs?nickname=flywen">flywen</Link>
      <Child nickname={query.get("nickname")}></Child>
    </div>
  )
}
function Child(props) {
  let nickname = props.nickname;
  return (
    <h3>{nickname}</h3>
  )
}

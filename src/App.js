import "./App.css";
import BasicLayout from "./layouts/basic-layout/BasicLayout";
import BasicExample from "./learn-router/basic/basic";
import ParamsExample from "./learn-router/params/params";
import NestingExample from "./learn-router/nesting/nesting";
import CustomLinkExample from "./learn-router/custom-link/custom-link";
import NoMatchExample from "./learn-router/no-match/no-match";
import { Tabs } from "antd";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
const { TabPane } = Tabs;
function App() {
  return (
    <div className="App">
      <Router>
        <Tabs>
          <TabPane tab="Basic" key="1">
            <Link to="/basic">Link</Link>
          </TabPane>

          <TabPane tab="URL Parameters" key="2">
            <Link to="/params">Link</Link>
          </TabPane>

          <TabPane tab="Nesting" key="3">
            <Link to="/nesting">Link</Link>
          </TabPane>

          <TabPane tab="Redirects" key="4">
            <Link to="/redirects">Link</Link>
          </TabPane>

          <TabPane tab="Custom Link" key="5">
            <Link to="/custom">Link</Link>
          </TabPane>

          <TabPane tab="Preventing Transitions" key="6">
            <Link to="/transitions">Link</Link>
          </TabPane>

          <TabPane tab="No Match" key="7">
            <Link to="/404">Link</Link>
          </TabPane>

          <TabPane tab="Recursive Paths" key="8">
            <Link to="/recursive">Link</Link>
          </TabPane>

          <TabPane tab="Sidebar" key="9">
            <Link to="/sidebar">Link</Link>
          </TabPane>

          <TabPane tab="Animated Transitions" key="10">
            <Link to="/animated">Link</Link>
          </TabPane>

          <TabPane tab="Route Config" key="11">
            <Link to="/config">Link</Link>
          </TabPane>

          <TabPane tab="Modal Gallery" key="12">
            <Link to="/modal">Link</Link>
          </TabPane>

          <TabPane tab="StaticRouter Context" key="13">
            <Link to="/context">Link</Link>
          </TabPane>

          <TabPane tab="Query Parameters" key="14">
            <Link to="/query">Link</Link>
          </TabPane>

          <TabPane tab="Dashboard" key="20">
            <Link to="/dashboard">Link</Link>
          </TabPane>
        </Tabs>

        <Route path="/basic">
          <BasicExample />
        </Route>

        <Route path="/params">
          <ParamsExample />
        </Route>

        <Route path="/nesting">
          <NestingExample />
        </Route>

        <Route path="/custom">
          <CustomLinkExample />
        </Route>

        <Route path="/404">
          <NoMatchExample />
        </Route>
        <Route path="/dashboard">
          <BasicLayout/>
        </Route>



      </Router>

    </div>
  );
}
export default App;

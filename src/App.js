import "./App.css";
import { Tabs } from "antd";
import BasicLayout from "./layouts/basic-layout/BasicLayout";
import BasicExample from "./learn-router/basic/basic";
import ParamsExample from "./learn-router/params/params";
import NestingExample from "./learn-router/nesting/nesting";
import CustomLinkExample from "./learn-router/custom-link/custom-link";
import NoMatchExample from "./learn-router/no-match/no-match";
import RefExample from "./learn-react/advanced/ref-example/ref-example";
import QueryParametersExample from "./learn-router/query-parameters/query-parameters";
import AuthExample from "./learn-router/redirects/redirects";
import SidebarExample from "./learn-router/sidebar/sidebar";
import RouteConfigExample from "./learn-router/route-config/route-config";
import AnimationExample from "./learn-router/animated-transitions/animated-transitions";

import ReduxCounterExample from "./learn-redux/counter-example/redux-counter-example";
const { TabPane } = Tabs;
function App() {
  return (
    <div className="App">
        <Tabs>
          <TabPane tab="Basic" key="1">
            <BasicExample />
          </TabPane>

          <TabPane tab="URL Parameters" key="2">
            <ParamsExample />
          </TabPane>

          <TabPane tab="Nesting" key="3">
            <NestingExample />
          </TabPane>

          <TabPane tab="Redirects" key="4">
            <AuthExample />
          </TabPane>

          <TabPane tab="Custom Link" key="5">
            <CustomLinkExample />
          </TabPane>

          <TabPane tab="Preventing Transitions" key="6">
            <h3>待开发</h3>
          </TabPane>

          <TabPane tab="No Match" key="7">
            <NoMatchExample />
          </TabPane>

          <TabPane tab="Recursive Paths" key="8">
            <h3>待开发</h3>
          </TabPane>

          <TabPane tab="Sidebar" key="9">
            <SidebarExample />
          </TabPane>

          <TabPane tab="Animated Transitions" key="10">
            <AnimationExample />
          </TabPane>

          <TabPane tab="Route Config" key="11">
            <RouteConfigExample />
          </TabPane>

          <TabPane tab="Modal Gallery" key="12">
            <h3>待开发</h3>
          </TabPane>

          <TabPane tab="StaticRouter Context" key="13">
            <h3>待开发</h3>
          </TabPane>

          <TabPane tab="Query Parameters" key="14">
            <QueryParametersExample />
          </TabPane>

          <TabPane tab="Dashboard" key="20">
            <BasicLayout />
          </TabPane>

          <TabPane tab="Ref" key="21">
            <RefExample />
          </TabPane>
          <TabPane tab="Redux" key="22">
            <ReduxCounterExample />
          </TabPane>
        </Tabs>`
    </div>
  );
}
export default App;

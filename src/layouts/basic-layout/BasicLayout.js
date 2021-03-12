import { Layout, Menu } from "antd";
import React from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import "./index.css";
import Home from "../../components/test/home";
import LuoShenFu from "../../components/test/luoshenfu";
import DengTuZi from "../../components/test/dengtuzi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Router>
      <Layout id="basic-layout">
          <Sider
            className="slider"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />

            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/">出师表</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/deng">登徒子好色赋</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <Link to="/luo">洛神赋</Link>
              </Menu.Item>
              <SubMenu key="4" icon={<UserOutlined />} title="User">
                <Menu.Item key="41">Tom</Menu.Item>
                <Menu.Item key="42">Bill</Menu.Item>
                <Menu.Item key="43">Alex</Menu.Item>
              </SubMenu>
              <SubMenu key="5" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="51">option5</Menu.Item>
                <Menu.Item key="52">option6</Menu.Item>
                <Menu.Item key="53">option7</Menu.Item>
                <Menu.Item key="54">option8</Menu.Item>
                <Menu.Item key="55">option9</Menu.Item>
                <Menu.Item key="56">option10</Menu.Item>
                <Menu.Item key="57">option11</Menu.Item>
                <Menu.Item key="58">option12</Menu.Item>
                <Menu.Item key="59">option13</Menu.Item>
                <Menu.Item key="60">option14</Menu.Item>
                <Menu.Item key="61">option15</Menu.Item>
                <Menu.Item key="62">option16</Menu.Item>
                <Menu.Item key="63">option17</Menu.Item>
                <Menu.Item key="64">option18</Menu.Item>
                <Menu.Item key="65">option19</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout
            className={`site-layout ${
              this.state.collapsed ? "main-full" : "main-half"
            }`}
          >
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content className="site-layout-background m-2 p-2">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/deng">
                  <DengTuZi />
                </Route>
                <Route path="/luo">
                  <LuoShenFu />
                </Route>

              </Switch>
            </Content>
          </Layout>
      </Layout>
      </Router>
    );
  }
}
export default BasicLayout;

"use client";
import { Breadcrumb, Layout, theme } from "antd";
import DashboardFooter from "./Footer";

const { Header, Content } = Layout;

const DashboardMain = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer }} />
      <Content style={{ margin: "0 16px" }}>
        {/* <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[{ title: "User" }, { title: "Bill" }]}
        /> */}
        <div>{children}</div>
      </Content>
      <DashboardFooter />
    </Layout>
  );
};

export default DashboardMain;

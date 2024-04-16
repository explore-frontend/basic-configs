import { Layout } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { Outlet } from "react-router-dom";

import HeaderContent from "@/components/Header";
import SiderContent from "@/components/Sider";

const { Header, Sider, Content } = Layout;

export default function RootLayout() {
  return (
    <Layout className="h-screen">
      <Sider>
        <SiderContent />
      </Sider>
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
        <Content>
          <ErrorBoundary message="出错啦，请联系开发人员排查！">
            <Outlet />
          </ErrorBoundary>
        </Content>
      </Layout>
    </Layout>
  );
}

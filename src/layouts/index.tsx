import React, { useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import GlobalProvider from '@/contexts/GlobalProvider'
import SideMenu from './SideMenu'
import './index.less'

const { Header, Content, Footer, Sider } = Layout;


export default function SiderDemo (props: FuncPropsWithChildren) {
  const [ collapsed, setCollapse ] = useState(false)

  return (
    <GlobalProvider>
      <Layout className="base-layout" style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapse(value)}>
          <div className="logo" />
          <SideMenu></SideMenu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {
                props.children
              }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>publish system</Footer>
        </Layout>
      </Layout>
    </GlobalProvider>
  );
}

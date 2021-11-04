import React from 'react'
import store from '@/redux/store'
import { Provider } from 'react-redux'
import { Layout, ConfigProvider } from 'antd';
import { history, useModel } from 'umi'
import zhCN from 'antd/lib/locale/zh_CN';
import Header from '@/components/header'
import Sider from '@/components/sider'
import './index.less'
const { Content } = Layout;

export default function Index(props: any) {
  const token = sessionStorage.getItem('token');
  React.useEffect(() => {
    if (!token) {
      history.push('/login')
    }
  }, [token])
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Layout style={{ padding: '10px 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              height: '75vh',
            }}
          >
            <ConfigProvider locale={zhCN}>
              <Provider store={store}>
                {props.children}
              </Provider>
            </ConfigProvider>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}


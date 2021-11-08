import React from 'react'
import { Layout, Menu } from 'antd';
import { history, useLocation } from 'umi'
import { NotificationOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
export default function Index() {
    const location = useLocation();
    const click = ({ key }: Record<string, any>) => {
        switch (key) {
            case '/':
                history.push('/')
                break;
            case '/xiazai':
                history.push('/xiazai')
                break;
            case '/upload':
                history.push('/upload')
                break;
            case '/testModal':
                history.push('/testModal')
            case '/testStyle':
                history.push('/testStyle')
            default:
                break;
        }

    }
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                onClick={click}
                selectedKeys={[location.pathname]}
            >
                <SubMenu key="sub1" icon={<NotificationOutlined />} title="开发功能测试">
                    <Menu.Item key="/">JSON格式化</Menu.Item>
                    <Menu.Item key="/xiazai">文件下载功能</Menu.Item>
                    <Menu.Item key="/upload">文件上传功能</Menu.Item>
                    <Menu.Item key="/testModal">模态框复用</Menu.Item>
                    <Menu.Item key="/testStyle">测试样式</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

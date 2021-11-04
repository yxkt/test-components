import React from 'react'
import { Layout, Menu, } from 'antd';
import { history } from 'umi'
const { Header } = Layout;
export default function Index() {
    const handleTq = ({ key }: any) => {
        if (key === '2') {
            history.push('/login')
            sessionStorage.removeItem('token')
        }
    }
    return (
        <Header className="header">
            <div className="logo" />
            <Menu onClick={handleTq} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">开发功能测试</Menu.Item>
                <Menu.Item style={{ float: 'right' }} key="2">退出登录</Menu.Item>
            </Menu>
        </Header>
    )
}

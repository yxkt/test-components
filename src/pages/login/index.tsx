import * as React from 'react';
import { history, useModel } from 'umi';
import { Form, Input, Button, message } from 'antd';
import { login } from '@/utils/api'
import './index.less';
export default () => {
  const { setUser } = useModel('useAuthModel');
  const onFinish = async (value: any) => {
    let res = await login(value)
    if (res.sessionToken) {
      setUser(res.username)
      sessionStorage.setItem('token', res.sessionToken)
      history.push('/')
    } else {
      message.error('账号或者密码错误')
    }

  }
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 18,
    },
  };
  const tailLayout = {
    wrapperCol: {
      // offset: 8,
      span: 24,
    },
  };

  return (
    <div className="login">
      <div className='form'>
        <h1 >欢迎登录</h1>
        <Form
          size="large"
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item

            label="账号"
            name="username"
            rules={[
              {
                required: true,
                message: '请输入你的账号!',
              },
            ]}
          >
            <Input placeholder="请输入登录账号" />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入你的密码!',
              },
            ]}
          >
            <Input.Password placeholder="请输入登录密码" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              立即登录
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
};

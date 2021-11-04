import React from 'react'
import { Button, Form, Input, message, Table, Tooltip, Typography } from 'antd';
import TestModal from '@/components/modal'
import { useSelector, useDispatch } from 'react-redux'

import './index.less'
export default function Index() {
    const count = useSelector((state: any) => { //redux
        return state.count
    });
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const onFinish = (values: any) => {
        if (values.username === 'admin' && values.password === '123456') {
            setIsModalVisible(false)
            return
        }
        message.error('账号或密码错误')
    };
    const add = () => {
        return {
            type: 'add',
            paload: 1
        }
    }

    return (
        <>
            <Button type='primary' onClick={() => { setIsModalVisible(true) }}>点击显示模态框</Button>
            <br />
            <br />
            <div>
                <Button type='text'>reduxHooksApi测试:</Button>
                <Button >{count}</Button>
                <Button type='text' onClick={() => { dispatch(add()) }}>+</Button>
            </div>
            {
                isModalVisible &&
                <TestModal
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    form={form}
                >
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 14 }}
                        onFinish={onFinish}
                        form={form}
                        preserve={false}
                    >
                        <Form.Item
                            label="姓名"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Form>
                </TestModal>
            }
        </>
    )
}

import React from 'react'
import { Form, Input, message } from 'antd';
interface Iprops {
    form: any,
    setIsModalVisible: (prams: boolean) => void,
    modalNum: number
}
export default function Index({ form, modalNum, setIsModalVisible }: Iprops) {
    const onFinish = (values: Record<string, string>) => {
        if (modalNum) {
            if (values.username === '重庆第一帅' && values.password === '123456') {
                setIsModalVisible(false)
                message.success('编辑成功')
                return
            }
            message.error('账号或密码错误')
        } else {
            message.success('新增成功')
            setIsModalVisible(false)
        }
    };
    return (
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
    )
}

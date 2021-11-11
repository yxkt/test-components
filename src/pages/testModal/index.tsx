import React from 'react'
import { Button, Form, Space } from 'antd';
import TestModal from '@/components/modal'
import NewForm from './form'
import { useSelector, useDispatch } from 'react-redux'
import './index.less'
export default function Index() {
    const count = useSelector((state: any) => { //redux
        return state.count
    });
    const dispatch = useDispatch();
    const [modalNum, setModalNum] = React.useState(0)//控制模态框title的变量
    const [isModalVisible, setIsModalVisible] = React.useState(false);//控制模态框显示的变量
    const [form] = Form.useForm();
    const add = () => {
        return {
            type: 'add',
            paload: 1
        }
    }
    const click = (value: number) => {
        if (value === 0) {
            setModalNum(0)
        } else {
            form.setFieldsValue({ username: '重庆第一帅', password: '123456' })
            setModalNum(1)
        }
        setIsModalVisible(true)
    }
    return (
        <>
            <Space size='middle'>
                <Button type='primary' onClick={() => click(0)}>新建</Button>
                <Button type='primary' onClick={() => click(1)}>编辑</Button>
            </Space>
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
                    modalNum={modalNum}
                    form={form}
                >
                    <NewForm
                        form={form}
                        setIsModalVisible={setIsModalVisible}
                        modalNum={modalNum}
                    />
                </TestModal>
            }
        </>
    )
}

import React from 'react'
import { Table, Popconfirm, Space, Input, Form, Button } from 'antd';
import Modal from '@/components/modal'
import { getData, deleteData, updateData, getPresentData, addData } from '@/utils/api'


export default function Index() {
    const [form] = Form.useForm()
    const [dataSource, setDataSoure] = React.useState<any[]>([])
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const [modalNum, setModalNum] = React.useState(false)
    const [objectId, setObjectId] = React.useState('')
    const handleGetAllData = async () => {
        const res = await getData()
        const newDataSource = res.results.map((item: any) => {
            return {
                ...item,
                key: item.objectId
            }
        })
        setDataSoure(newDataSource)
    }
    React.useEffect(() => {
        handleGetAllData()
    }, [])
    const handleDelete = async (key: string) => {
        await deleteData(key)
        const newdataSource = [...dataSource];
        setDataSoure(newdataSource.filter(item => item.key !== key));
    };
    const handleUpdate = async (key: string) => {
        setIsModalVisible(true)
        setModalNum(true)
        setObjectId(key)
        const res = await getPresentData(key)
        if (res) {
            form.setFieldsValue(res)
        }
    }
    const handleAdd = async () => {
        setIsModalVisible(true)
        setModalNum(false)
    }
    const onFinish = async (values: Record<string, any>) => {
        if (modalNum) {
            const res = await updateData(objectId, values)
            if (res) {
                await setIsModalVisible(false)
                handleGetAllData()
            }
        } else {
            const res = await addData(values)
            if (res) {
                setIsModalVisible(false)
                handleGetAllData()
            }
        }
    }
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '操作',
            key: 'action',
            render: (text: string, record: Record<string, any>) => (
                <Space size="middle">
                    <a onClick={() => { handleUpdate(record.key) }}>编辑</a>
                    <Popconfirm title="确定删除吗?" onConfirm={() => handleDelete(record.key)}>
                        <a>删除</a>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    return (
        <>
            <Button type='primary' onClick={handleAdd}>新增数据</Button>
            <Table dataSource={dataSource} columns={columns} />
            {
                isModalVisible &&
                <Modal form={form} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} modalNum={modalNum}>
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
                            name="name"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="年龄"
                            name="age"
                            rules={[{ required: true, message: 'Please input your age!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="地址"
                            name="address"
                            rules={[{ required: true, message: 'Please input your address!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
            }
        </>
    )
}

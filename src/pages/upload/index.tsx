import React, { useState } from "react";
import { Form, Button, Upload, message, Modal } from "antd";
import { UploadOutlined } from '@ant-design/icons';
interface Ipros {
    isLoading: boolean;
}

const UpdataModel = ({ isLoading = false, }: Ipros) => {


    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        form.submit()
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const uploadProps = {
        maxCount: 1,
        beforeUpload: async (file: any, fileList: any) => {
            if (file.type !== 'application/zip') {
                message.error(`${file.name}不是zip格式的文件`);
                return file.type === 'application/zip' ? true : Upload.LIST_IGNORE;
            }
            setFileList(fileList);
            return false;
        },
        onRemove: () => {
            setFileList([]);
        },
        fileList,
    };
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const onFinish = (values: any) => {
        console.log(values);
        //以流的形式发送给后端
        const formData = new FormData();
        values.upload.forEach((file: any) => {
            formData.append('apiName', file);
        });
    };
    return (
        <>
            <Button type='primary' onClick={showModal}>文件上传功能模态框</Button>
            <Modal
                width={500}
                title="文件手动上传"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                destroyOnClose={true}
            >
                <Form
                    onFinish={onFinish}
                    form={form}
                    preserve={false}
                >
                    <Form.Item
                        name="upload"
                        label="Upload"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{ required: true, message: '请选择zip格式文件' }]}
                    >
                        <Upload {...uploadProps}>
                            <Button icon={<UploadOutlined />}>文件上传</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default UpdataModel;

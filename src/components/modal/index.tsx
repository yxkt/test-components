import React, { ReactNode } from 'react';
import { Modal } from 'antd';
interface Iprops {
    isModalVisible: boolean;
    setIsModalVisible: (prams: boolean) => void;
    children: ReactNode;
    modalNum: number,
    form?: Record<string, any>;
}

const Index = (props: Iprops) => {
    const { isModalVisible, modalNum, form } = props
    const { setIsModalVisible } = props

    const handleOk = () => {
        form?.submit()
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Modal title={modalNum ? '编辑数据' : '新增数据'} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {props.children}
            </Modal>
        </>
    );
};
export default Index;
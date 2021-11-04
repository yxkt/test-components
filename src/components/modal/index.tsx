import React, { ReactNode, useState } from 'react';
import { Modal } from 'antd';
interface Iprops {
    isModalVisible: boolean;
    setIsModalVisible: (prams: boolean) => void;
    children: ReactNode;
    form?: Record<any, any>;
}

const Index = (props: Iprops) => {
    const { isModalVisible, setIsModalVisible, form } = props

    const handleOk = () => {
        form?.submit()
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Modal title="模态框复用测试" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {props.children}
            </Modal>
        </>
    );
};
export default Index;
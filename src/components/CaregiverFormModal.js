import React, { useState } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const CaregiverFormModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                console.log('Form Values:', values);
                setIsModalOpen(false);
                form.resetFields();
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Caregiver Form
            </Button>
            <Modal
                title="Caregiver Information"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Submit"
                cancelText="Cancel"
            >
                <Form form={form} layout="vertical" name="caregiverForm">
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input the caregiver name!' }]}
                    >
                        <Input placeholder="Enter caregiver name" />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            { required: true, message: 'Please input the phone number!' },
                            { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number!' }
                        ]}
                    >
                        <Input placeholder="Enter phone number" />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please input the address!' }]}
                    >
                        <Input.TextArea placeholder="Enter address" rows={3} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default CaregiverFormModal;

import React from "react"
import { Modal, Form, Input, Button } from "antd"

const CaregiverFormModal = ({ visible, onCancel, onSubmit }) => {
  const [form] = Form.useForm()

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values) // Pass the form values to the parent component
        form.resetFields()
      })
      .catch((info) => {
        console.log("Validate Failed:", info)
      })
  }

  return (
    <Modal
      title="Caregiver Information"
      visible={visible}
      onOk={handleOk}
      onCancel={onCancel}
      okText="Submit"
      cancelText="Cancel"
    >
      <Form form={form} layout="vertical" name="caregiverForm">
        <Form.Item
          label="Name"
          name="name"
          rules={[
            { required: true, message: "Please input the caregiver name!" },
          ]}
        >
          <Input placeholder="Enter caregiver name" />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please input the phone number!" },
            {
              pattern: /^[0-9]{10}$/,
              message: "Please enter a valid 10-digit phone number!",
            },
          ]}
        >
          <Input placeholder="Enter phone number" />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input the address!" }]}
        >
          <Input.TextArea placeholder="Enter address" rows={3} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CaregiverFormModal

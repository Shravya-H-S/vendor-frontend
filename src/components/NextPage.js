// NextPage.js
import React from 'react';
import { Form , Input, Button, InputNumber } from 'antd';
import '../App.css';

function NextPage() {
  return (
    <div className='addproductdetails' style={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <h1 align='center'>Product Details</h1>
      <Form style={{ maxWidth: 600 }}>
        <Form.Item label="Product Name" rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Product Description" rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Product Price" rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}>
          <InputNumber />
        </Form.Item>
        <Form.Item label="Blockchain Address" rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}>
          <Input />
        </Form.Item>
        
        <Form.Item
      label="Blockchain ABI"
      name="TextArea"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NextPage;




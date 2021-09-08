import React from 'react';
import { Form, Input } from 'antd';
import './style.css';
function Delivery() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='formdiv'>
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Street'
          name='street'
          rules={[
            {
              required: true,
              message: 'Please input your street!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='House'
          name='house'
          rules={[
            {
              required: true,
              message: 'Please input your House!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Area'
          name='area'
          rules={[
            {
              required: true,
              message: 'Please input your Area!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='City'
          name='city'
          rules={[
            {
              required: true,
              message: 'Please input your City!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Phone '
          name='number'
          rules={[
            {
              required: true,
              message: 'Please input your Area!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
}

export default Delivery;

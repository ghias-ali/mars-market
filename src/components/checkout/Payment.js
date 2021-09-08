import React from 'react';
import './style.css';
import { Avatar, Form, Input } from 'antd';

function Payment() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='formdiv'>
      <div>
        <h2>Cards Applicable</h2>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Avatar
            src='https://www.investopedia.com/thmb/1IVupa7WPkyjIVLKezgBowB52DM=/800x450/filters:fill(auto,1)/full-color-800x450-cee226a48bed4177b90351075b332227.jpg'
            alt=''
            size={50}
            shape='square'
          />
          <Avatar
            src='https://www.investopedia.com/thmb/1IVupa7WPkyjIVLKezgBowB52DM=/800x450/filters:fill(auto,1)/full-color-800x450-cee226a48bed4177b90351075b332227.jpg'
            alt=''
            size={50}
            shape='square'
          />
          <Avatar
            src='https://www.investopedia.com/thmb/1IVupa7WPkyjIVLKezgBowB52DM=/800x450/filters:fill(auto,1)/full-color-800x450-cee226a48bed4177b90351075b332227.jpg'
            alt=''
            size={50}
            shape='square'
          />
        </div>
        <Form
          style={{ marginTop: '1rem' }}
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
            label='Name On card'
            name='nameOncard'
            rules={[
              {
                required: true,
                message: 'Please input your Name On card!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Card Number'
            name='number'
            rules={[
              {
                required: true,
                message: 'Please input your Card Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Expirey Date'
            name='expirydate'
            rules={[
              {
                required: true,
                message: 'Please input your Expirey Date!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='CVV'
            name='cvv'
            rules={[
              {
                required: true,
                message: 'Please input your CVV!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Payment;

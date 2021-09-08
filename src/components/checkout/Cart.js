import React from 'react';
import { Table, Tag, Space, Avatar } from 'antd';
import './style.css';
const columns = [
  {
    title: 'Image',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => (
      <Avatar
        src='https://static-01.daraz.pk/p/04a86cb2ecb24298fe1c12765d8df6d3.jpg'
        alt=''
        size={50}
        shape='square'
      />
    ),
  },
  {
    title: 'Name',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Sku',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Seller',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        <p>Jhon Doe</p>
      </>
    ),
  },
  {
    title: 'Color',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        <Tag color='green'>Green</Tag>
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <a href='as'>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
function cart() {
  return (
    <div className='tablediv'>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
}

export default cart;

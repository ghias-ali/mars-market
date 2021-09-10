import React from "react";
import { Layout, Menu } from "antd";
import Navbar from "../../components/navbar/index";
import {
  BarChartOutlined,
  CloudOutlined,

  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Upload, message, Button } from 'antd';
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const { Header, Content, Sider } = Layout;
function UserDashboard() {
  return (
    <div>
      <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%',height: '1rem' }} >
      <div className="logo" className="" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
         
      </Menu>
      
     <div  className="a4">
     
      <div classname="a5"><Avatar size="small" icon={<UserOutlined />} />
      <Upload {...props}>
    <p style={{color:"white"}} icon={<UploadOutlined />}>Click to Upload</p>
  </Upload></div>
      <h1 style={{color:"white"}} >Account:</h1>
       <h1 style={{color:"white"}}>Username</h1>
        <h1 style={{color:"white"}}>Rating</h1>
        <h1 style={{color:"white"}}>Status</h1>
        <h1 style={{color:"white"}}>Date Created</h1>
        </div> 
    </Header>
        <div className="a">
        <Sider
        
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo" className="a" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
              Details
            </Menu.Item>
            <Menu.Item key="2" icon={<UploadOutlined />}>
              Orders
            </Menu.Item>
            <Menu.Item key="3" icon={<BarChartOutlined />}>
              My Listing
            </Menu.Item>
            <Menu.Item key="4" icon={<CloudOutlined />}>
              Messages
            </Menu.Item>
          </Menu>
          
        </Sider>
        </div>
        <Layout >
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <div className="a1">Dashboard</div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default UserDashboard;

import React from 'react';
import { Layout } from 'antd';
import Navbar from '../../components/navbar/index';
import Promotion from '../../components/promotion/Promotion';
import SingleProduct from '../../components/singleProduct/singleProduct';
import './style.css';
const { Header, Content } = Layout;
function Home() {
  return (
    <div>
      {' '}
      <Layout>
        <Header className='headerrrcss'>
          <Navbar />
        </Header>
        <Content>
          <Promotion />
          <SingleProduct />
        </Content>
      </Layout>
    </div>
  );
}

export default Home;

import React from 'react';
import { Layout } from 'antd';
import Navbar from '../../components/navbar/index';
// import Promotion from '../../components/promotion/Promotion';
// import SingleProduct from '../../components/singleProduct/singleProduct';
import Checkout from '../../components/checkout/Checkout';
// import Products from '../../components/products/Products';
import './style.css';
const { Header, Content } = Layout;
function Checkouta() {
  return (
    <div>
      {' '}
      <Layout>
        <Header className='headerrrcss'>
          <Navbar />
        </Header>
        <Content>
          <Checkout />
        </Content>
      </Layout>
    </div>
  );
}

export default Checkouta;

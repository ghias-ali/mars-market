import React from 'react';
import { Row, Col } from 'antd';
import { Container } from '@material-ui/core';

function Complete() {
  return (
    <div>
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Container>
            <p style={{ textAlign: 'center' }}>ORDER DETAILS</p>
            <div style={{ color: '#9FA19F' }}>
              <div className='ordersdetaolsdata'>
                <p>Purse</p>
                <p>
                  Quantity : <b>12</b>
                </p>
                <p>Price : 25$</p>
              </div>
              <div className='ordersdetaolsdata'>
                <p>Purse</p>
                <p>
                  Quantity : <b>12</b>
                </p>
                <p>Price : 25$</p>
              </div>{' '}
              <div className='ordersdetaolsdata'>
                <p>Purse</p>
                <p>
                  Quantity : <b>12</b>
                </p>
                <p>Price : 25$</p>
              </div>{' '}
              <div className='ordersdetaolsdata'>
                <p>Purse</p>
                <p>
                  Quantity : <b>12</b>
                </p>
                <p>Price : 25$</p>
              </div>
              <div style={{ float: 'right' }}>
                <h4 style={{ color: '#F57224' }}>SubTotal : 199$</h4>
                <h4 style={{ color: '#F57224' }}>Deleivery : 199$</h4>

                <h4 style={{ color: '#F57224' }}>Total : 199$</h4>
              </div>
            </div>
          </Container>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Container>
            <p style={{ textAlign: 'center' }}>PERSONAL DETAILS</p>
            <div style={{ color: '#9FA19F' }}>
              <div className='ordersdetaolsdata'>
                <p>Name</p>
                <p>
                  <b>Jhone Doe</b>
                </p>
              </div>
              <div className='ordersdetaolsdata'>
                <p>Address</p>
                <p>
                  <b>12B Mughalpura Lahore</b>
                </p>
              </div>{' '}
              <div className='ordersdetaolsdata'>
                <p>Card Number</p>
                <p>
                  <b>xxxx-xxxx-xxxx-1208</b>
                </p>
              </div>{' '}
              <div className='ordersdetaolsdata'>
                <p>CVV</p>
                <p>
                  <b>886</b>
                </p>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default Complete;

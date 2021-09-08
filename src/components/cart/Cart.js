import React from 'react';
import { Avatar } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './style.css';
function Cart() {
  return (
    <div>
      <div className='cartdetails'>
        <Avatar
          shape='square'
          src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/12271-BEAUTY_-_PRODUCTS_7_products_to_avoid_BAD-body4-1296x728-1.png?w=315&h=840'
          size={50}
        />
        <div className='lineheightofp'>
          <p>
            <b>Shampoo</b>
          </p>
          <p>
            Price:
            <b>24$</b>
          </p>
        </div>
        <CloseOutlined style={{ color: 'red', fontSize: '18px' }} />
      </div>
      <div className='cartdetails'>
        <Avatar
          shape='square'
          src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/12271-BEAUTY_-_PRODUCTS_7_products_to_avoid_BAD-body4-1296x728-1.png?w=315&h=840'
          size={50}
        />
        <div className='lineheightofp'>
          <p>
            <b>Shampoo</b>
          </p>
          <p>
            Price:
            <b>24$</b>
          </p>
        </div>
        <CloseOutlined style={{ color: 'red', fontSize: '18px' }} />
      </div>
      <div className='cartdetails'>
        <Avatar
          shape='square'
          src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/12271-BEAUTY_-_PRODUCTS_7_products_to_avoid_BAD-body4-1296x728-1.png?w=315&h=840'
          size={50}
        />
        <div className='lineheightofp'>
          <p>
            <b>Shampoo</b>
          </p>
          <p>
            Price:
            <b>24$</b>
          </p>
        </div>
        <CloseOutlined style={{ color: 'red', fontSize: '18px' }} />
      </div>
      <div className='cartdetails'>
        <Avatar
          shape='square'
          src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/12271-BEAUTY_-_PRODUCTS_7_products_to_avoid_BAD-body4-1296x728-1.png?w=315&h=840'
          size={50}
        />
        <div className='lineheightofp'>
          <p>
            <b>Shampoo</b>
          </p>
          <p>
            Price:
            <b>24$</b>
          </p>
        </div>
        <CloseOutlined style={{ color: 'red', fontSize: '18px' }} />
      </div>
      <div className='cartdetails'>
        <Avatar
          shape='square'
          src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/12271-BEAUTY_-_PRODUCTS_7_products_to_avoid_BAD-body4-1296x728-1.png?w=315&h=840'
          size={50}
        />
        <div className='lineheightofp'>
          <p>
            <b>Shampoo</b>
          </p>
          <p>
            Price:
            <b>24$</b>
          </p>
        </div>
        <CloseOutlined style={{ color: 'red', fontSize: '18px' }} />
      </div>
      <div className='cartdetails'>
        <Avatar
          shape='square'
          src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/12271-BEAUTY_-_PRODUCTS_7_products_to_avoid_BAD-body4-1296x728-1.png?w=315&h=840'
          size={50}
        />
        <div className='lineheightofp'>
          <p>
            <b>Shampoo</b>
          </p>
          <p>
            Price:
            <b>24$</b>
          </p>
        </div>
        <CloseOutlined style={{ color: 'red', fontSize: '18px' }} />
      </div>
      <div className='cartdetails'>
        <Avatar
          shape='square'
          src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/12271-BEAUTY_-_PRODUCTS_7_products_to_avoid_BAD-body4-1296x728-1.png?w=315&h=840'
          size={50}
        />
        <div className='lineheightofp'>
          <p>
            <b>Shampoo</b>
          </p>
          <p>
            Price:
            <b>24$</b>
          </p>
        </div>
        <CloseOutlined style={{ color: 'red', fontSize: '18px' }} />
      </div>
      <div className='cartdetails'>
        <Avatar
          shape='square'
          src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/05/12271-BEAUTY_-_PRODUCTS_7_products_to_avoid_BAD-body4-1296x728-1.png?w=315&h=840'
          size={50}
        />
        <div className='lineheightofp'>
          <p>
            <b>Shampoo</b>
          </p>
          <p>
            Price:
            <b>24$</b>
          </p>
        </div>
        <CloseOutlined style={{ color: 'red', fontSize: '18px' }} />
      </div>
      <div className='footer12'>
        <Link to='/checkout'>
          <button className='checkoutbuttonn'>Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;

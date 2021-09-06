import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Rating from '@material-ui/lab/Rating';
import { Row, Col } from 'antd';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { Container } from '@material-ui/core';

import './style.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function SingleProduct() {
  const classes = useStyles();
  const [count, setcount] = useState(0);
  return (
    <div>
      <div>
        <Container className='fullpageview'>
          <Row className='imageContainer'>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Carousel>
                <div>
                  <img
                    src='https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                    alt=''
                  />
                  <p className='legend'>Legend 1</p>
                </div>
                <div>
                  <img
                    src='https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
                    alt=''
                  />
                  <p className='legend'>Legend 2</p>
                </div>
                <div>
                  <img
                    src='https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
                    alt=''
                  />
                  <p className='legend'>Legend 3</p>
                </div>
              </Carousel>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Container>
                <h1 className='priceheading1'>Ladies Purse</h1>
                <div className='ratingdic'>
                  <Rating name='read-only' value={5} readOnly />
                  <p style={{ color: '#1A9CBE' }}>123 Ratings</p>
                </div>
                <div className='ratingdic'>
                  <p style={{ color: '#9EAAC7' }}>Brand: </p>
                  <p style={{ color: '#1A9CBE' }}>Gillette</p>
                </div>
                <hr style={{ color: '#9EAAC7' }} />
                <div>
                  <h1 className='priceheading'>25$</h1>
                  <div className='displayflexdiv'>
                    <div style={{ marginTop: '10px' }}>
                      <p>Quantity</p>
                    </div>
                    <div>
                      <IconButton onClick={() => setcount(count - 1)}>
                        <RemoveIcon />
                      </IconButton>
                      <input className='inputnumber' value={count} />
                      <IconButton onClick={() => setcount(count + 1)}>
                        <AddIcon />
                      </IconButton>
                    </div>
                  </div>
                  <div className='buttonsdiv'>
                    <Button className='buttoncarts'>Add to Wishlist</Button>
                    <Button className='buttoncarts1'> Add to Cart</Button>
                  </div>
                </div>
              </Container>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <Container>
                <h1 style={{ textAlign: 'center' }}>Seller Details </h1>
                <div>
                  <List className={classes.root}>
                    <ListItem alignItems='center'>
                      <ListItemIcon>
                        <TrendingUpIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='Positive Seller Rating'
                        secondary={
                          <React.Fragment>
                            <h1 style={{ color: 'green' }}>98%</h1>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant='inset' component='li' />
                    <ListItem alignItems='center'>
                      <ListItemIcon>
                        <TrendingUpIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='Ships On Time'
                        secondary={
                          <React.Fragment>
                            <h1 style={{ color: 'red' }}>44%</h1>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant='inset' component='li' />
                    <ListItem alignItems='center'>
                      <ListItemIcon>
                        <TrendingUpIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary='Status'
                        secondary={
                          <React.Fragment>
                            <h1 style={{ color: 'green' }}>Verified</h1>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant='inset' component='li' />
                  </List>
                </div>
              </Container>
            </Col>
          </Row>
          <Row className='imageContainer'>
            <Col xs={24} sm={12} md={8} lg={18}>
              <Container>
                <div>
                  <h3 style={{ fontWeight: 'bold' }}>Product Details</h3>
                </div>
                <div>
                  <p style={{ fontSize: '12px' }}>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32. The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced below for those interested. Sections
                    1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                    Cicero are also reproduced in their exact original form,
                    accompanied by English versions from the 1914 translation by
                    H. Rackham.
                  </p>
                </div>
                <hr />
                <div>
                  <h3 style={{ fontWeight: 'bold' }}>Product Specifications</h3>
                </div>
                <div>
                  <p>
                    Brand: <b> Gillet</b>
                  </p>
                  <p>
                    Delivery From: <b> UK</b>
                  </p>
                  <p>
                    What is in the box: <b> 1 ladies Purse</b>
                  </p>
                  <p>
                    Sku: <b> GI662HBEKTKDPKFAS-453451</b>
                  </p>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SingleProduct;

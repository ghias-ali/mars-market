import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Row, Col } from 'antd';
import { products } from '../../utility/products';
import { Container } from '@material-ui/core';

import './style.css';
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Container>
      <Row className='themainrow'>
        {products.map((user) => (
          <Col xs={20} sm={8} md={8} lg={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Contemplative Reptile'
                  height='140'
                  image={user?.image}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <div className='cardactionn'>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {user?.name}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {user?.price}
                    </Typography>
                  </div>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    {user?.description.slice(0, 15)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className='cardactionn'>
                <IconButton>
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

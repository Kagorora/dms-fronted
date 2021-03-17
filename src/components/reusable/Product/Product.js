import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={`https://dms-back-end.herokuapp.com/${product.image}`} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              rating={product.rating}
              numReview={`| Reviews ${product.reviews.length}`}
              color='#f8e825'
            />
          </div>
        </Card.Text>
        <Card.Text as='h3'>FRW {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

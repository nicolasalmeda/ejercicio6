import React from 'react';
import {ListGroup } from 'react-bootstrap';


const ColorList = ({ colors }) => {
  return (
    <ListGroup>
      {colors.map((color, index) => (
        <ListGroup.Item  key={index} className='w-75 mx-auto my-2' style={{ backgroundColor: color }}>
          {color}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ColorList;
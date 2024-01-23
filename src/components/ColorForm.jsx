import React, { useState} from 'react';
import {Form, Button } from 'react-bootstrap';

const ColorForm = ({ onSaveColor }) => {
  const [color, setColor] = useState('');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSaveColor = () => {
    if (color.trim() !== '') {
      onSaveColor(color);
      setColor('');
    }
  };

  return (
    <Form>
      <Form.Group controlId="colorInput">
        <Form.Label className='my-2'>Ingrese un color:</Form.Label>
        <Form.Control
        className='my-2 w-75 mx-auto'
          type="text"
          placeholder="Ej: #ffffff"
          value={color}
          onChange={handleColorChange}
        />
      </Form.Group>
      <Button className='my-2' variant="primary" onClick={handleSaveColor}>
        Guardar Color
      </Button>
    </Form>
  );
};

export default ColorForm;
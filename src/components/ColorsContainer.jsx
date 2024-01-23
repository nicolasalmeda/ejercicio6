import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import  ColorForm from './ColorForm.jsx'
import ColorList from './ColorList.jsx'
import '../css/colorContainer.css'

export const ColorsContainer = () => {
  const [colors, setColors] = useState(() => {
    const storedColors = localStorage.getItem('colors');
    return storedColors ? JSON.parse(storedColors) : [];
  });

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const handleSaveColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <Container className='ColorContainer'>
      <Row className='container-fluid'>
        <Col md={6} lg={12}>
          <h1>Administrar Colores</h1>
          <ColorForm onSaveColor={handleSaveColor} />
        </Col>
        <Col md={6} lg={12}>
          <h2>Colores Guardados</h2>
          <ColorList colors={colors} />
        </Col>
      </Row>
    </Container>
  );
};

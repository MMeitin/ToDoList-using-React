import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px auto; // Cambia el margen a auto para centrar el botón
  cursor: pointer;
  display: block; // Añade esta propiedad para que el botón sea un elemento de bloque
  max-width: 200px; // Añade esta propiedad para limitar el ancho máximo del botón
`;

export default Button;
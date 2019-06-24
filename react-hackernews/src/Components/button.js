import React from 'react';
import '../styles/button.css'

const Button = ({ 
  onDismiss, 
  item, 
  children, 
  className 
}) =>
  <button 
    onClick={()=>onDismiss(item)}
    className={className}
    >
    {children}
  </button>

export default Button;
import React from 'react';

const ColorPicker = ({ color, setColor }) => {
    
  const handleColorChange = (e) => {
    
    if (typeof setColor === 'function') {
      setColor(e.target.value);
    }
  };

  return <input type="color"  className='colorpicker' value={color} onChange={handleColorChange} />;
};

export default ColorPicker;
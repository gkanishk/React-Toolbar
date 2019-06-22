import React from 'react';
import './Backdrop.css';
const BackDrop=props=>
(
    <div className='backcss' onClick={props.click}></div>
);
export default BackDrop;
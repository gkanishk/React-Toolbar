import React from 'react';
import './toglebtton.css';
import './Toolbar';

const Togle=props=>
(
    <button className='tButton' onClick={props.click}>
        <div className='innerLine'></div>
        <div className='innerLine'></div>
        <div className='innerLine'></div>
    </button>
    
);
export default Togle;
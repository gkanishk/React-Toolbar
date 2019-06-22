import React from 'react';
import './sideSection.css';

const Sidesect=props=>
(
    <nav className='side-section'>
        <button className='sideButton'
        onClick={props.click}>Home</button>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Feature</a></li>
        </ul>
    </nav>
);
export default Sidesect;
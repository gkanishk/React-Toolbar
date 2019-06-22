import React from 'react';
import './Toolbar.css'
import Togle from './toglebutton';
import Inboxbutton from './inboxButton';
import {Nav,NavDropdown} from 'react-bootstrap';
function homeClicked()
{
    console.log("home");
}
const Tooolbar=props=>(
    <header className='toolbarH'>
        <nav className='navItems'>
            <div><Togle click={props.draweCLickHandler} /></div>
            <div></div>
            <div className='navIcon'>#React</div>
            <div className='seperator'></div>
            <div className='navPart'>
                <ul className='navCategory'>
                    <li><button href='' onClick={props.tabHomeContentHandler}>home</button></li>
                    <li><button href='' onClick={props.tabFeatureContentHandler}>feature</button></li>

                    

                </ul>
            </div>
            <div className="inboxButton"><Inboxbutton/></div>
        </nav>
        {/* <div className="inboxButton"><Inboxbutton/></div> */}
    </header>
);
export default Tooolbar;

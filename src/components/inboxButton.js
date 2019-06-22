import React,{Component} from 'react';
import './inboxbutton.css';
import {Nav,NavDropdown,Badge,Button} from 'react-bootstrap';


class Inboxbutton extends Component{
    state={
        color: "wheat",
        title:"Message"+"(4)"
      }
      readAll=()=>{
          this.setState({color:"transparent"});
          this.setState({title:"Message"+"(0)"});
      }
      unreadAll=()=>{
        this.setState({color:"wheat"});
        this.setState({title:"Message"+"(4)"});
    }
    render() {
    return (
    <div className='navClass'>
        
    <NavDropdown title={this.state.title} id="collasible-nav-dropdown" >
    <button className='dropButton' onClick={this.readAll}>Read all</button>
    <button className='dropButton' onClick={this.unreadAll}>Unread all</button>
    <NavDropdown.Divider />
    <NavDropdown.Item href="/" style={{background: this.state.color}}>Item 1</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="/" style={{background: this.state.color}}>Item 2</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="/" style={{background: this.state.color}}>Item 3</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="/" style={{background: this.state.color}}>Item 4</NavDropdown.Item>
    
  </NavDropdown>
  

  </div>);
                    
        }}
export default Inboxbutton;
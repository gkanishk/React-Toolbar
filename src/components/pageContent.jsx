import React,{Component} from 'react';
import Image from 'react-bootstrap/Image';
import iamges from './assests/img.jpg';
import ListGroup from 'react-bootstrap/ListGroup'
class PageContent extends Component{
    state={
        listState:false,
        text:"Show Task"
    }
    showListItem=()=>{
        this.setState({listState:true,text:"Hide Task"});
    }
    hideListItem=()=>{
        this.setState({listState:false,text:"Show Task"});
    }
    render()
    {
        let listItems;
        let changeButton;
        changeButton=<button onClick={this.showListItem} >{this.state.text}</button>
        if(this.state.listState)
        {
            listItems=<ListGroup variant="flush">
            <ListGroup.Item>1. Make Proper Cart App</ListGroup.Item>
            <ListGroup.Item>2. Show/Hide toggle using React</ListGroup.Item>
            <ListGroup.Item>3. Facebook Notification button</ListGroup.Item>
            <ListGroup.Item>4. Read All Mailbox</ListGroup.Item>
            <ListGroup.Item>5. Tabs on React</ListGroup.Item>
          </ListGroup>;
          changeButton=<button onClick={this.hideListItem} >{this.state.text}</button>
        }
        if(this.state.listState===false)
        {
            listItems="";
        }


        return (
    <div>
   <Image src={iamges} fluid />
   {changeButton}
   {listItems}
  </div>);
    };
}
export default PageContent;

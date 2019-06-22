import React, { Component } from 'react';
import Tooolbar from './components/Toolbar';
import Sidesect from './components/SideSection';
import BackDrop from './components/Backdrop';
import PageContent from './components/pageContent';
import FeatureContent from './components/featureContent';
import Image from 'react-bootstrap/Image'


class App extends Component {
  state={
    sideDrawerOpen:false,
    mainContent:true,
    featureContent:false
  };
  drawerToggleHandler=()=>
  {
    this.setState((prevState)=>{
      return {sideDrawerOpen:!prevState.sideDrawerOpen};
    });
  };
  removeToggleHandler=()=>
  {
this.setState({sideDrawerOpen:false});
}
tabToggleHandler=()=>
{
  this.setState({mainContent:true,featureContent:false});
  

};
tabFeatureToggleHandler=()=>
{
  this.setState({featureContent:true,mainContent:false});

};
  render() {

  let sideDrawer;
  let backdrop;
  let mainPage;
  if(this.state.sideDrawerOpen){
    sideDrawer=<Sidesect click={this.removeToggleHandler}/>;
    backdrop=<BackDrop  click={this.removeToggleHandler}/>;
  }
  if(this.state.mainContent){
mainPage=<PageContent />;
  }
  else if (this.state.featureContent) {
    mainPage=<FeatureContent/>
  }
    return (
      <div style={{height:'100%'}}>
       
       
        <Tooolbar draweCLickHandler={this.drawerToggleHandler} tabHomeContentHandler={this.tabToggleHandler} tabFeatureContentHandler={this.tabFeatureToggleHandler} />
        {sideDrawer};
        {backdrop};
        <main style={{marginTop: '64px'}}>
          {mainPage};
        </main>
   
        </div>
    );
  }
}

export default App;

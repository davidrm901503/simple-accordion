import React, { Component } from 'react';
import Menu from './components/Menu'


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      activo:this.props.active
     
    }
  }
  setActivo (name) {
    this.setState({
      activo: name
    });
  }
  render() {
    
    return (
      <div className="menu-acordion">
       <ul>
         <Menu index = "1" onActive={this.setActivo.bind(this)} menu={{name:"Menu 1",submenu:['Enlace 1','Enlace 2']}} activo={this.state.activo} visible ={this.props.active === "1"} collasible= {this.props.collasible}></Menu>
         <Menu index = "2" onActive={this.setActivo.bind(this)} menu={{name:"Menu 2",submenu:['Enlace 1','Enlace 2']}} activo={this.state.activo} visible ={this.props.active === "2"} collasible= {this.props.collasible}></Menu>
         <Menu index = "3" onActive={this.setActivo.bind(this)} menu={{name:"Menu 3",submenu:['Enlace 1','Enlace 2']}} activo={this.state.activo} visible ={this.props.active === "3"} collasible= {this.props.collasible}></Menu>         
       </ul>
      </div>
    );
  }
}
App.defaultProps= {
  collasible :true 
};
export default App;

import React, { Component } from 'react';
import MenuItem from './MenuItem'
import '../css/menu.css';


class Menu extends Component {
  constructor(props){
    super(props);
     this.state = {
      visible:this.props.visible
    }
    console.log(props);
  
  }
  handleClick(e){
    e.preventDefault();

    this.props.onActive(this.props.index)
    this.setState({
      visible: !this.state.visible
    });
   
  }
  render() {
    return (
      <div className="menu">
       <li>
        <h3 onClick= {this.handleClick.bind(this)} >{this.props.menu.name}</h3>
        {this.props.collasible ? (
          <ul className = {this.state.visible ? 'visible' : 'no-visible'}>
          {this.props.menu.submenu.map((item) =>{
            return <MenuItem name ={item} key = {item}/>    
            }
          )}
        </ul>
        ) : (
          <ul className = {this.props.activo === this.props.index ? 'visible' : 'no-visible'}>
          {this.props.menu.submenu.map((item) =>{
            return <MenuItem name ={item} key = {item}/>    
            }
          )}
        </ul>
        )}
       

        

       </li>
      </div>
    );
  }
}

export default Menu;

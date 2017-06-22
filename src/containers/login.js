import React from 'react';
import {connect} from "react-redux";
import { push } from 'react-router-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
	
constructor(props){
  super(props);
  
  this.state={
  username:'',
  password:''
  }
 }

handleClick = (nextState, replace) => {
	 
	 console.log(this.state.username);
	 console.log(this.state.password);
	 
	 if(this.state.username == "abhishek" && this.state.password == "pathak"){
		 this.props.history.push('/barchart');
	 } else {
		 alert("Error");
	 }
}

render() {
    return (
      <div>
      <MuiThemeProvider>
      <div>
      <AppBar
         title="Login"
       />
       <TextField
         hintText="Enter your Username"
         floatingLabelText="Username"
         onChange = {(event,newValue) => this.setState({username:newValue})}
         />
       <br/>
         <TextField
           type="password"
           hintText="Enter your Password"
           floatingLabelText="Password"
           onChange = {(event,newValue) => this.setState({password:newValue})}
           />
         <br/>
         <RaisedButton label="Submit" primary={true}  onClick={(event) => this.handleClick(event)}/>
     </div>
     </MuiThemeProvider>
      </div>
    );
  }
}

	 
const style = {
 margin: 15,
};

export default Login ;
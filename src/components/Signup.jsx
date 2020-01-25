import React from "react";
import Header from './Header';

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            username:"",
            email:"",
            password:""
        };
    }

handleChange = event =>{
    let {name,value} = event.target;
    this.setState({[name]:value})
    }

handleSubmit = e =>{
    e.preventDefault();
    fetch("http://localhost:3000/api/v1/users/signup",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        })
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.success){
            console.log(data);
            alert("success");
            this.props.history.push('/signin');
          }else{
              alert("enter valid details");
          }
    })
}
    
render(){
    return(
        
            
            <div>
                <Header/>
                <div id="login-box">
          <div className="left">
          <h1 className="reg">Register</h1>
          <form className="form1"onClick={this.handleSubmit} >
          <p className="names">Username</p>
          <input type="text" className="use" name="username" onChange={this.handleChange} value={this.state.username}
           placeholder="Username" />
          <p className="names">Email</p>
          <input type="email" className="use" name="email"  onChange={this.handleChange} value={this.state.email}
          placeholder="E-mail" />
          <p className="names">Password</p>
          <input type="password" className="use" name="password" onChange={this.handleChange} value={this.state.password}
          placeholder="Password" />
         
          
          <input type="submit" className="sub" value="Sign me up" />
          </form>
          </div>
        </div>
        </div>
    )
    }
    
}
export default Signup;
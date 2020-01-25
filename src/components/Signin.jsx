import React from "react";
import Header from './Header';

class Signin extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
    }

handleChange = event =>{
    let {name ,value} = event.target;
    this.setState({[name]:value})
}

handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:3006/api/v1/users/signin",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
 },
 body: JSON.stringify({
    email: this.state.email,
    password: this.state.password
  })
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
        if (data.email) {
            alert(data.message);
          } else if (!data.success) {
            alert(data.message);
          } else if (data.success) {
            alert('successfully loggedin');
            localStorage.setItem('quizuserToken', data.token);
            localStorage.setItem('quizuserName', data.username);
            this.props.history.push('/');
          }
    })
}

    render(){
        return(
            <div>
                <Header/>
                    <div className="loginBox">
                
                <img src="https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"alt="" className="user"/>
                <h2>Login</h2>
                <form >
                    <p className="para-1">Email</p>
                    <input type="email" name="email"  placeholder="Enter Email" value={this.state.email} onChange={this.handleChange}/>
                    <p className="para-1">Password</p>
                    <input type="password" name="password"  placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}  />
                    <input type="submit" name="" value="sign In" onClick={this.handleSubmit} /> 
                </form>
            </div>
            </div>
        )
    }
    
}
export default Signin;
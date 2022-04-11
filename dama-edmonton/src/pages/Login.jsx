
import React, {Component, useEffect} from 'react'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

class Login extends Component{

    state = {
        email: '',
        password: '',
        error_list: [],
        error:'',
    }

    loginForm = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://dama.web.dmitcapstone.ca/api/signin', this.state);
        if(res.data.validate_err)
        {
            this.setState({
                error_list: res.data.validate_err,
                
           }); 

           console.log(res.data.validate_err)
           
           if(res.data.validate_err === "Your email or password are incorrect.") {
                Swal.fire({  
                    icon: 'error',  
                    title: 'Unsuccessful!',  
                    text: res.data.validate_err,  
                }); 
           }
            
        } else {

            let result = await fetch("http://dama.web.dmitcapstone.ca/api/signin", {
                method:'POST',
                body:JSON.stringify(this.state),
                headers:{
                    "Content-Type":'application/json',
                    "Accept":'application/json'
                }
            })
            result = await result.json();
            localStorage.setItem("user-info",JSON.stringify(result))

            Swal.fire({  
                icon: 'success',  
                title: 'Successful!',  
                text: 'You are Logged in',  
              }); 
            window.location.reload();
            console.log(res.data.message)

            
        }
    }


    render(){
        
        return(
            
            <form onSubmit={this.loginForm} className="login-form-container">
                <h1>Sign in to Your Account</h1>
                <div class="form">
                    <label for="email">Email</label>
                    <input type="text" onChange={(item) => {this.setState({email:item.target.value})}} name="email" placeholder='Your email'/>
                    <span className='error'>{this.state.error_list.email}</span>
                    <label for="name">Password</label>
                    <input type="password" onChange={(item) => {this.setState({password:item.target.value})}} name="password" placeholder='Password'/>
                    <span className='error'>{this.state.error_list.password}</span>
                    <div className='optional-info'>
                        <input type="checkbox" name="keeploggedin" value="keeploggedin"/>
                        <label for="keeploggedin" className='keeploggedin'>Keep me logged in</label>
                        <Link to="/#">Forgot Password?</Link>
                    </div>
                    <Link to="/register">Create a New Account</Link>
                    <button type='submit'>Sign In</button>
                    
                </div>
            </form>  
        );
    }
}

export default function (){

    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            navigate("/dashboard")
        }
    })

    return (
        <Login/>
    )
}




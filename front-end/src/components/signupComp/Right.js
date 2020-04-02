import React  from 'react'
import firebase from '../../firebase';
// import { Link } from 'react-router-dom'

class Right extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password :'',
            err:null
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)   
    //this.sendEmail = this.sendEmail.bind(this) 
    }
    handleChange(event){
        const { name , value } = event.target
        this.setState({
            [name] : value
        })
    }
    /*sendEmail(){
        let user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function() {
            console.log('Email Have been Sent ')
          }).catch(function(err){
              console.log(err)
        })
    } */
    handleSubmit(event){
        event.preventDefault();
        const { email, password } = this.state;
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch(error => { this.setState({err:error.message })
        });
    }
    render (){
        return ( 
            <div className={this.props.checked?"hide flex-signup":'flex-signup'}>
                <h3>SIGN UP</h3>  
                <div >
                    <form onSubmit={this.handleSubmit} action="/profile" method="POST">
                    <div className={this.state.err===null?"hide-alert":"alert alert-danger"}>{this.state.err}</div>
                    <input 
                    name="email"
                    type="email"
                    value={this.state.Email}
                    placeholder=" * Email"
                    onChange={this.handleChange}
                    required
                    autoFocus="on"
                    />
                    <br></br>
                    <input
                    name="password"
                    type="password"
                    value={this.state.Password}
                    placeholder=" * Password"
                    onChange={this.handleChange}
                    required
                     />
                     <br></br>
                    <button className="btn">SIGN UP</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Right;
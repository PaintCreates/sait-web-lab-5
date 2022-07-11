import React, {Component} from 'react';
import axios from "axios";

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoId: '',
            title: ''
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {albumId, title} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className='part-two'>
                        <b>Enter Album ID:</b>
                        <br></br>
                        <input type="text" name="albumId" value={albumId} onChange={this.changeHandler}/>
                        <br></br>
                        <b>Enter Title:</b>
                        <br></br>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                        <br></br>
                        <button className='submit' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;
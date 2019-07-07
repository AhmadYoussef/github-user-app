import React from 'react';
import './form.scss'

class Form extends React.Component{
    state={
        inputText : '',
    }
    saveInput = (e)=>{
        this.setState({inputText : e.target.value})
    }
    formSubmit = async (e) =>{
        e.preventDefault()
        const gitData = await fetch(`https://api.github.com/users/${this.state.inputText}`);
        const resp = await gitData.json();
        this.props.onSubmitHandler(resp);
        this.setState({inputText : ''});
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <input type="text"  value={this.state.inputText} onChange ={this.saveInput}/>
                <input type='submit' value="Add Profile" />
                {this.props.isExists ? <p className="message">This account is exist</p> : null}
            </form>
        );
    }
}


export default Form;
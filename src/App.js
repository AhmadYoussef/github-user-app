import React from 'react';
import './App.css';
import CardList from './Components/cardList';
import Form  from './Components/form';

class App extends React.Component {
    state = {
        data : [],
        isExists: false,
    }
    addNewProfile = (profileData)=>{
        const index = this.state.data.findIndex(item => item.id === profileData.id);
        if(index === -1){
            this.setState(prevState => ({
                data : [...prevState.data, profileData,]
            }));
        }else{
            this.setState({isExists : true}, ()=>{
                setTimeout(()=> this.setState({isExists: false}), 2000);
            })
        }
        
    }
    deleteCard = (id)=>{
        let data = this.state.data;
        data.splice(id,1);
        this.setState({data});
    }
    render(){
        return (
            <div className="App">
                <Form isExists={this.state.isExists} onSubmitHandler ={this.addNewProfile} />
                <CardList click={this.deleteCard} Profile={this.state.data} />
            </div>
        );
    }
}

export default App;

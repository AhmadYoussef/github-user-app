import React from 'react';
import './card.scss';

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <img src={this.props.avatar_url} alt='Random'/>
                <div>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.company}</p>
                </div>
                <div onClick={()=>{this.props.click(this.props.index)}} className="close">X</div>
            </div>
        );
    }
}

export default Card;
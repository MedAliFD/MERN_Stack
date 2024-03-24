import React, {Component} from "react";
 class PersonalCard extends Component{
    render (){
        return (
            <div>
                <h1> {this.props.lastname}, {this.props.firstname}</h1>
                <p> Age:{this.props.age} </p>
                <p>Hair Coloe: {this.props.hairColor}</p>


            </div>
        )
    }
}
export default PersonalCard;
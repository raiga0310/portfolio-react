import React from "react";
import Icon from "./Icon";
import './Card.css'



class Card extends React.Component {
    render() {
        return (
            <div className={"Card"}>
                <Icon name={this.props.name} />
                <h3>{this.props.name}</h3>
            </div>
        )
    }
}

export default Card;
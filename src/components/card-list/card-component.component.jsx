import { Component } from "react";
class CardList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Hello I am a CardList component</h1>
            </div>
        )
    }
}

export default CardList
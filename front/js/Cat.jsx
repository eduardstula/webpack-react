import React, {Component} from "react";

class Cat extends Component {

    render() {
        return (
            <h1 id="cat">
                {this.props.cat}
            </h1>
        );
    }
}

export default Cat;
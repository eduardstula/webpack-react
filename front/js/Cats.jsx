import React, {Component} from "react";
import Cat from "Cat";

class Cats extends Component {

    constructor() {
        super();
        this.state = {
            cats: [
                "Micinka",
                "Cleuška"
            ]
        };
    }

    render() {
        return this.state.cats.map((cat) => {
            return <Cat cat={cat}/>
        });
    }
}

export default Cats;
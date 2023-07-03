import { Component} from "react";

class ClasEvent extends Component{

    handleClick = () => {
            console.log("Class based event handler");
        }

    render() {
        return (
            <div>
                This is a class based component
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
}

export default ClasEvent;
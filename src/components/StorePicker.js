import React, { Component } from "react";
import {getFunName} from '../helpers';

class StorePicker extends Component{
    myInput = React.createRef();

    goToStore = event => {
        //1, Stop the form from submitting
        event.preventDefault();
        //2. Get the text from input        
        const storeName = this.myInput.current.value;
        //3. Change the page to /store/user-entered-name
        this.props.history.push(`/store/${storeName}`)
    }
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" 
                ref={this.myInput}
                placeholder="Store name" 
                defaultValue={getFunName()} 
                required/>
                <button type="submit">Visit Store</button>
            </form>
        )
    }
}
export default StorePicker;
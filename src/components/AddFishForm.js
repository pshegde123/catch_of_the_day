import React, { Component } from "react";

class AddFishForm extends Component{
    nameRef = React.createRef(); 
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event)=>{
        //1. Stop the form from submitting
        event.preventDefault()
        //console.log(this.nameRef.current.value)
        const fish = {
            name:this.nameRef.current.value,
            price:parseFloat(this.priceRef.current.value),
            status:this.statusRef.current.value,
            desc:this.descRef.current.value,
            image:this.imageRef.current.value
        }
        //console.log("Adding fish:",fish)
        this.props.addFish(fish)
        //Refresh the form
        event.currentTarget.reset()
    }
    render(){
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" name="name" ref={this.nameRef} placeholder="Name"/>
                <input type="text" name="price" ref={this.priceRef} placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea type="text" name="desc" ref={this.descRef} placeholder="Desc"/>
                <input type="text" name="image" ref={this.imageRef} placeholder="Image"/>
                <button type="submit">+ Add Fish</button>
            </form>
          )
    } 
}

export default AddFishForm

import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import fishes from '../sample-fishes'
import Fish from "./Fish";
import base from "../Base";

class App extends Component{
    constructor(){
        super();
        this.state={
            fishes:{},
            order:{}
        };
    }
    componentDidMount(){
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId)
        if(localStorageRef){
            this.setState({order:JSON.parse(localStorageRef)})
        }
         this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`,{
             context:this,
             state:"fishes"
         });
        //console.log("Mounted")
    }
    componentDidUpdate(){        
        localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))
    }
    componentWillUnmount(){
        base.removeBinding(this.ref)
    }
    addFish=(fish)=>{
        //1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        //2. Add new fish to fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3. Set new fishes object to state
        this.setState({
            fishes:fishes
        });
    }
    updateFish = (key,updatedFish)=>{
        const fishes={...this.state.fishes}
        fishes[key] = updatedFish
        this.setState({fishes})
    }
    loadSampleFishes=()=>{  
        //console.log("Loading fishes")
        this.setState({fishes:fishes})
    }    
    addToOrder = (key)=>{
        //1. Take a copy of the existing state
        const order = {...this.state.order};
        //2. Add/update an order
        order[key]=order[key] + 1 || 1;
        //3. Set new fishes object to state
        this.setState({
            order:order
        });

    }
    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => 
                        <Fish 
                        key={key} 
                        index={key}
                        details={this.state.fishes[key]} 
                        addToOrder={this.addToOrder} />)}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                    addFish={this.addFish} 
                    updateFish={this.updateFish}
                    loadSampleFishes={this.loadSampleFishes} 
                    fishes={this.state.fishes}/>
            </div>
        )
    }
}
export default App;
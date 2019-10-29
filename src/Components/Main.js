import React, {Component} from 'react'
import Title from './Title'
import Header from './Header'
import Footer from './Footer'
import CoffeeWall from './CoffeeWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'


class Main extends  Component {
    
    constructor(){
        super()
        this.state = {
            coffees: [{
                id: 0,
                name: "Mocha", 
                price: 5, 
                imageLink: "https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_960_720.jpg"
            }, {
                id: 1,
                name: "Latte", 
                price: 3, 
                imageLink: "https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_960_720.jpg"
            }, {
                id: 2,
                name: "Espresso", 
                price: 2, 
                imageLink: "https://cdn.pixabay.com/photo/2015/07/12/14/26/coffee-842020_960_720.jpg"
            }, {
                id: 3,
                name: "Cappuccino", 
                price: 4, 
                imageLink: "https://cdn.pixabay.com/photo/2014/12/11/02/56/coffee-563797_960_720.jpg"
            }, {
                id: 4,
                name: "Macchiato", 
                price: 8, 
                imageLink: "https://cdn.pixabay.com/photo/2016/01/02/04/59/coffee-1117933_960_720.jpg"
        }],
    }
    this.removePhoto = this.removePhoto.bind(this);
}

    removePhoto(coffeeRemoved){
        // console.log(coffeeRemoved.name);
        this.setState((state) => ({
            // filtering out the removed coffees from array and returning the update state prop
            coffees: state.coffees.filter(coffee => coffee !==  coffeeRemoved)
        }))
    }

    addPhoto(coffeeSubmited){
        this.setState((state) => ({
            coffees: state.coffees.concat([coffeeSubmited])
        }))
    }
   

    // lifecycle method invoked immediatly after the component is being inserted into DOM
    componentDidMount(){

    }
    
    //lifecycle method whenever a copmonent is re-render 
    componentDidUpdate(prevProps, prevState) {
        // console.log(prevState.coffees);
        // console.log(this.state);
    }

    render() {
        
      return (
            <div> 
                <Route exact path = "/" render={() => (
                    <div>
                        <Header />
                        <Title title={'Coffee Billboard'}/>
                        {/* passen array props to coffee wall */}
                        <CoffeeWall coffees={ this.state.coffees } onRemovePhoto={ this.removePhoto } onNavigate={ this.navigate }/>
                        <Footer />
                    </div>
                )}/>
                
                <Route path = "/AddPhoto" render={({history}) => (
                    <div>
                        <Header />
                        <AddPhoto onAddPhoto={(addedCoffee) => {
                                this.addPhoto(addedCoffee);        
                                history.push('/');                       
                            }}/>
                        <Footer />
                    </div>
                )}/>   
            </div>
            )
    }
}

export default Main
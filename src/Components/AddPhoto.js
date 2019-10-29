import React, {Component} from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const imageLink = event.target.elements.link.value
        const coffee = {
            id: Number(new Date()),
            name: name,
            price: price,
            imageLink: imageLink
        }
        if (name && price && imageLink) {
            this.props.onAddPhoto(coffee)
        }  
    }

    render() {
        return (
        <div>
            <h1>Coffee Billboard</h1>
            {/* form start */}
            <div className="coffeeForm">
                <form onSubmit={ this.handleSubmit } >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="coffe name" name="name"/>
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control" placeholder="price" name="price"/>
                    </div>
                    <div class="form-group">
                        <input type="text" className="form-control" placeholder="link" name="link"/>
                    </div>            
                    <button className="addPhotoButton btn">Submit</button>
                </form> 
            </div> 
            {/* form end */}
        </div>        
        )
    }
}

export default AddPhoto
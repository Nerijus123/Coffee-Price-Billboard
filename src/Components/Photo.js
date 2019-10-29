import React from 'react'
import PropTypes from 'prop-types'

function Photo(props){
        const coffee = props.coffee
        return <figure className="figure">
                <img className="photo" src={ coffee.imageLink } alt={ coffee.name }/>
                <figcaption><p>Coffe name: { coffee.name }</p></figcaption>
                <figcaption><p>Coffe price: { coffee.price } Eur</p></figcaption>
                <div className="button-div">
                    <button onClick={ () => {
                           props.onRemovePhoto(coffee) 
                        } } className="remove-button btn btn-primary btn-danger">Remove</button>
                </div>
            </figure>
}
 
Photo.propTypes = {
    coffee: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo
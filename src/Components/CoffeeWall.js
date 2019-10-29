import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function CoffeeWall(props) {
    return  <div>
                <Link className="addCoffeeIcon" to="/AddPhoto"></Link>
                <div className="photoGrid">
                    {/* instance passes in a array of coffees and mapping throught that array to render out photo component instance */}
                    {props.coffees
                    .sort(function(x,y) {
                        return y.id - x.id
                    })
                    .map((coffee, index) => <Photo key={ index } coffee={ coffee } onRemovePhoto={ props.onRemovePhoto }/>)}
                </div>
            </div>    
}

CoffeeWall.propTypes = {
    coffees: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default CoffeeWall   
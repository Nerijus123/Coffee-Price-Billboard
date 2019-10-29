import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
        <header>
            <nav className="navbar navbar-default">  
                <div className="container">		    
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Coffee</a>
                    </div>	
                    	    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">Sign Up <i className="fas fa-user-plus"></i></a></li>
                            <li><a href="/">Login <i className="fas fa-user"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </header> 
        );
    }
}

export default Header

import React, {Component} from 'react';
import { Navbar,NavbarBrand,Jumbotron, Nav, NavbarToggler,Collapse,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';
//reasons for adding a header or footer is so that all our applications can use this common header and footer
//ekhane amra nav-bar banabo
//AMRA keno class component korlam instead of function component will become clear in a short while
//use of REACT FRAGMENT to group together bunch of react element and 
//return it and we are using the short form of react fragment
//and the reason specified as to returnthe element without the use of an extra div tag
class Header extends Component {
    
    constructor(props) {
         super(props);
         this.state={
             isNavOpen:false
         };
         this.toggleNav=this.toggleNav.bind(this);
    }

//toggleNav e switching er kaj hocche false thakle true true thakle false
// to make the toggleNav available as "this.toggleNav" we have to bind this in a method
/////////////////////////////////////////////////////////////////////IMPORTANT STH NEW OVER HERE
///NORMALLY KEMNE KORTAM
    toggleNav(){
       this.setState({
           isNavOpen: !this.state.isNavOpen
       })
    }

    render(){
        return(
            <> 
            <Navbar dark expand="md">
                {/* expand when in medium screen */}
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        {/* NabvarTOggler works with the collapse tag */}
                        {/* adds a button to various grid systems */}
                        <NavbarBrand className="mr-auto"  href="/" >
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            {/* isOpen boolean depends on a boolean variable */}
                                <Nav navbar>
                                    <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                    </NavItem>
                                </Nav>
                        </Collapse>
                    </div>
            </Navbar> 
            <Jumbotron>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        {/* col-sm-6 small to extra large */}
                        <h1>Ristorante Con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, ,and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>

                    </div>
                </div>
            </div>
            </Jumbotron>
            </>
        );
    }
}
export default Header;
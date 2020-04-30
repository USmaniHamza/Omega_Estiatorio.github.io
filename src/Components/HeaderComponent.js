import React, {Component} from 'react';
import { Navbar,NavbarBrand,Jumbotron } from 'reactstrap';
//reasons for adding a header or footer is so that all our applications can use this common header and footer
//ekhane amra nav-bar banabo
//AMRA keno class component korlam instead of function component will become clear in a short while
//use of REACT FRAGMENT to group together bunch of react element and 
//return it and we are using the short form of react fragment
//and the reason specified as to returnthe element without the use of an extra div tag
class Header extends Component {
    render(){
        return(
                <> 
                <Navbar dark>
                        <div className="container">
                            <NavbarBrand  href="/" >Ristorante Con Fusion</NavbarBrand>
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
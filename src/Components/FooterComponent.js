import React from 'react';
import { Link } from 'react-router-dom';
//props na thakleo cholbe
// instead of a href we are using Link not even navlink
function Footer(props) {
    return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactus">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
                            Makrigianni 19<br />
                             Athinia 117 42, Athens  <br />
                            GREECE <br />
                            <i className="fa fa-phone"> </i>: +852 1234 5678
                            <br />
                            <i className="fa fa-fax"> </i>: +852 8765 4321
                            <br />
                            <i className="fa fa-envelope"> </i>:{" "}
                            <a href="mailto:hamzahusmani00@gmail.com">hamzahusmani00@gmail.com</a>
                        </address>{" "}
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2018 Omega Estiatorio</p>
                </div>
            </div>
        </div>
    </div>

    );
}
export default Footer;
import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand,
	Jumbotron,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Modal,
	Button,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
//reasons for adding a header or footer is so that all our applications can use this common header and footer
//ekhane amra nav-bar banabo
//AMRA keno class component korlam instead of function component will become clear in a short while
//use of REACT FRAGMENT to group together bunch of react element and
//return it and we are using the short form of react fragment
//and the reason specified as to returnthe element without the use of an extra div tag
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false, //this boolean variable will track the state of whether the modal is open or not
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	//toggleNav e switching er kaj hocche false thakle true true thakle false
	// to make the toggleNav available as "this.toggleNav" we have to bind this in a method
	/////////////////////////////////////////////////////////////////////IMPORTANT STH NEW OVER HERE
	///NORMALLY KEMNE KORTAM
	toggleNav() {
		//khali toggle korbe agey
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}
	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleLogin(event) {
		this.toggleModal();
		alert(
			"Username : " +
				this.username.value +
				"Password : " +
				this.password.value +
				"Remember" +
				this.remember.checked,
		);
		event.preventDefault();
	}

	render() {
		return (
			<>
				<Navbar dark expand="md">
					{/* expand when in medium screen */}
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						{/* NabvarTOggler works with the collapse tag */}
						{/* adds a button to various grid systems */}
						<NavbarBrand className="mr-auto" href="/">
							<img
								src="assets/images/logo.png"
								height="30"
								width="41"
								alt="Ristorante Con Fusion"
							/>
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
										<span className="fa fa-info fa-lg"></span> About
										Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/menu">
										<span className="fa fa-list fa-lg"></span> Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/contactus">
										<span className="fa fa-address-card fa-lg"></span>{" "}
										Contact Us
									</NavLink>
								</NavItem>
							</Nav>
							{/* pushing the button as right as possible */}
							<Nav className="ml-auto" navbar>
								<NavItem>
									{/* when clicked invoke the toggle modal */}
									<Button outline onClick={this.toggleModal}>
										<span className="fa fa-sign-in fa-lg"></span>
										Log in
									</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Jumbotron>
					<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
						{/* set up korlam modal ekhon invoke er pala */}
						{/* to invoke this we need a button in the navbar */}
						<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
						<ModalBody>
							<Form onSubmit={this.handleLogin}>
								<FormGroup>
									<Label htmlFor="uersname">Username</Label>
									<Input
										type="text"
										id="username"
										name="username"
										innerRef={(input) => (this.username = input)}
									/>
									{/* why not this.username.value */}
									{/* //method of extraction to make the values available to the react applications */}
								</FormGroup>
								<FormGroup>
									<Label htmlFor="password">Password</Label>
									<Input
										type="password"
										id="password"
										name="password"
										innerRef={(input) => (this.password = input)}
									/>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input
											type="checkbox"
											name="remember"
											innerRef={(input) => (this.remember = input)}
										/>
										Remember me
									</Label>
								</FormGroup>
								<Button
									type="submit"
									value="submit"
									colors="bg-primary"
								>
									Login
								</Button>
							</Form>
						</ModalBody>
					</Modal>
					<div className="container">
						<div className="row row-header">
							<div className="col-12 col-sm-6 header-title">
								{/* col-sm-6 small to extra large */}
								<h1>Omega Estiatorio</h1>
								<p>
									We take inspiration from the Greece's best cuisines,
									,and create a unique fusion experience. Our
									lipsmacking creations will render you speechless
								</p>
							</div>
							<img
								className="GreekLogo"
								src="assets/images/logo.png"
								height="200"
								width="200"
								alt="Omega Estiatorio"
							/>
						</div>
					</div>
				</Jumbotron>
			</>
		);
	}
}
export default Header;

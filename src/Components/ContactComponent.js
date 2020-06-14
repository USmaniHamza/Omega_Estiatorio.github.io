import React, {
	Component
} from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Label,
	Col,
	Row,
} from "reactstrap";
import {
	Link
} from "react-router-dom";
import {
	Control,
	Form,
	Errors,
	actions
} from "react-redux-form";

// function to class component converted
const required = (val) => val && val.length; //to see if the value is greater than zero
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
	/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

//NEED TO UNDERSTAND THESE !!

class Contact extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(values) {
		console.log("Current State is: " + JSON.stringify(values));
		alert("Current State is: " + JSON.stringify(values));
		this.props.postFeedback(values);
		this.props.resetFeedbackForm();

		// event.preventDefault();
	}
	render() {
		return ( <
			div className = "container" >
			<
			div className = "row" >
			<
			Breadcrumb >
			<
			BreadcrumbItem > {
				" "
			} <
			Link to = "/home" > Home < /Link> < /
			BreadcrumbItem > <
			BreadcrumbItem active > Contact Us < /BreadcrumbItem>{" "} < /
			Breadcrumb > {
				" "
			} <
			div className = "col-12" >
			<
			h3 > Contact Us < /h3> <hr / >
			<
			/div>{" "} < /
			div > {
				" "
			} <
			div className = "row row-content" >
			<
			div className = "col-12" >
			<
			h3 > Location Information < /h3>{" "} 

			<
			/
			div > {
				" "
			}

			<
			div className = "col-12 col-sm-4 offset-sm-1" > {
				" "
			} {
				/* offset-sm-1 shift korse arki */
			} < h5 > Our Address < /h5>{" "} <
			address >
			Makrigianni 19 < br / >
			Athinia 117 42, Athens < br / >
			GREECE < br / >
			<
			i className = "fa fa-phone" > < /i>: +852 1234 5678 <
			br / >
			<
			i className = "fa fa-fax" > < /i>: +852 8765 4321 <
			br / >
			<
			i className = "fa fa-envelope" > < /i>:{" "} <
			a href = "mailto:hamzahusmani00@gmail.com" > hamzahusmani00 @gmail.com < /a> < /
			address > {
				" "
			} <
			/div>{" "}  <
			div className = "col-12 col-sm-6 offset-sm-1" >
			<
			h5 > Map of our Location < /h5>{" "}  <
			iframe frameBorder = "0"
			style = {
				{
					width: "50%",
					height: "450"
				}
			}
			src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.3745323491544!2d23.72734431496798!3d37.9683879087702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd173103825d%3A0xfb6b0bda7128570f!2sMakrigianni%2019%2C%20Athina%20117%2042%2C%20Greece!5e0!3m2!1sen!2sbd!4v1592141262396!5m2!1sen!2sbd" >
			<
			/iframe>  < /
			div > {
				" "
			} <
			div className = "col-12 col-sm-11 offset-sm-1" >
			<
			div className = "btn-group"
			role = "group" >
			<
			a role = "button"
			className = "btn btn-primary"
			href = "tel:+85212345678" > {
				" "
			} <
			i className = "fa fa-phone" > < /i> Call < /
			a > <
			a role = "button"
			className = "btn btn-info" > {
				" "
			} <
			i className = "fa fa-skype" > < /i> Skype < /
			a > <
			a role = "button"
			className = "btn btn-success"
			href = "mailto:confusion@food.net" > {
				" "
			} <
			i className = "fa fa-envelope-o" > < /i> Email < /
			a > <
			/div>{" "} < /
			div > {
				" "
			} <
			/div>{" "} <
			div className = "row row-content" >
			<
			div className = "col-12" >
			<
			h3 > Send Us Your Feedback < /h3>{" "} < /
			div >

			<
			div className = "col-12 col-md-9" >
			<
			Form model = "feedback"
			onSubmit = {
				(values) => this.handleSubmit(values)
			} > {
				" "
			} {
				/* //FORMS PRESERVE HOYE THAKE EVEN IF WE GO TO ANOTHER PAGE */
			} {
				" "
			} <
			Row className = "form-group" >
			<
			Label htmlFor = "firstname"
			md = {
				2
			} > {
				" "
			}
			First Name {
				" "
			} <
			/Label>{" "} <
			Col md = {
				10
			} >
			<
			Control.text model = ".firstname"
			id = "firstname"
			name = "firstname"
			placeholder = "First Name"
			className = "form-control"
			validators = {
				{
					required,
					minLength: minLength(3),
					maxLength: maxLength(15),
				}
			}
			/>{" "} <
			Errors className = "text-danger"
			model = ".firstname"
			show = "touched"
			messages = {
				{
					required: "Required",
					minLength: "Must be greater than 2 characters",
					maxLength: "Must be 15 characters or less",
				}
			}
			/>{" "} < /
			Col > {
				" "
			} <
			/Row>{" "} <
			Row className = "form-group" >
			<
			Label htmlFor = "lastname"
			md = {
				2
			} > {
				" "
			}
			Last Name {
				" "
			} <
			/Label>{" "} <
			Col md = {
				10
			} >
			<
			Control.text model = ".lastname"
			id = "lastname"
			name = "lastname"
			placeholder = "Last Name"
			className = "form-control"
			validators = {
				{
					required,
					minLength: minLength(3),
					maxLength: maxLength(15),
				}
			}
			/>{" "} <
			Errors className = "text-danger"
			model = ".lastname"
			show = "touched"
			messages = {
				{
					required: "Required",
					minLength: "Must be greater than 2 characters",
					maxLength: "Must be 15 characters or less",
				}
			}
			/>{" "} < /
			Col > {
				" "
			} <
			/Row>{" "} <
			Row className = "form-group" >
			<
			Label htmlFor = "telnum"
			md = {
				2
			} > {
				" "
			}
			Contact Tel. {
				" "
			} <
			/Label>{" "} <
			Col md = {
				10
			} >
			<
			Control.text model = ".telnum"
			id = "telnum"
			name = "telnum"
			placeholder = "Tel. Number"
			className = "form-control"
			validators = {
				{
					required,
					minLength: minLength(3),
					maxLength: maxLength(15),
					isNumber,
				}
			}
			/>{" "} <
			Errors className = "text-danger"
			model = ".telnum"
			show = "touched"
			messages = {
				{
					required: "Required",
					minLength: "Must be greater than 2 numbers",
					maxLength: "Must be 15 numbers or less",
					isNumber: "Must be a number",
				}
			}
			/>{" "} < /
			Col > {
				" "
			} <
			/Row>{" "} <
			Row className = "form-group" >
			<
			Label htmlFor = "email"
			md = {
				2
			} > {
				" "
			}
			Email {
				" "
			} <
			/Label>{" "} <
			Col md = {
				10
			} >
			<
			Control.text model = ".email"
			id = "email"
			name = "email"
			placeholder = "Email"
			className = "form-control"
			validators = {
				{
					required,
					validEmail,
				}
			}
			/>{" "} <
			Errors className = "text-danger"
			model = ".email"
			show = "touched"
			messages = {
				{
					required: "Required",
					validEmail: "Invalid Email Address",
				}
			}
			/> < /
			Col > {
				" "
			} <
			/Row>{" "} <
			Row className = "form-group" >
			<
			Col md = {
				{
					size: 6,
					offset: 2,
				}
			} >
			<
			div className = "form-check" >
			<
			Label check >
			<
			Control.checkbox model = ".agree"
			name = "agree"
			className = "form-check-input" /
			>
			{
				" "
			} <
			strong > May we contact you ? < /strong>{" "} < /
			Label > {
				" "
			} <
			/div>{" "} < /
			Col > {
				" "
			} <
			Col md = {
				{
					size: 3,
					offset: 1,
				}
			} >
			<
			Control.select model = ".contactType"
			name = "contactType"
			className = "form-control" >
			<
			option > Tel. < /option> <option> Email </option > {
				" "
			} <
			/Control.select>{" "} < /
			Col > {
				" "
			} <
			/Row>{" "} <
			Row className = "form-group" >
			<
			Label htmlFor = "message"
			md = {
				2
			} > {
				" "
			}
			Your Feedback {
				" "
			} <
			/Label>{" "} <
			Col md = {
				10
			} >
			<
			Control.textarea model = ".message"
			id = "message"
			name = "message"
			rows = "12"
			className = "form-control" /
			>
			<
			/Col>{" "} < /
			Row > {
				" "
			} <
			Row className = "form-group" >
			<
			Col md = {
				{
					size: 10,
					offset: 2,
				}
			} >
			<
			Button type = "submit"
			color = "primary" >
			Send Feedback {
				" "
			} <
			/Button>{" "} < /
			Col > {
				" "
			} <
			/Row>{" "} < /
			Form > <
			/div> < /
			div > {
				" "
			} <
			/div>
		);
	}
}

export default Contact;
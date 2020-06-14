import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	Card,
	CardBody,
	CardHeader,
	Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderLeaders({ lead }) {
	//isLoading ekhono dei  nai
	//errMess ekhono dei nai
	return (
		<Media tag="li">
			<Media left middle>
				<br></br>
				<Media object src={baseUrl + lead.image} alt={lead.name} />
			</Media>
			<Media body className="ml-5">
				<br></br>
				<Media heading>{lead.name}</Media>
				<h5>{lead.designation}</h5>
				<p>Leader {lead.description}</p>
			</Media>
		</Media>
	);
}

function About(props) {
	const leaders = props.leaders.leaders.map((leader) => {
		return (
			<RenderLeaders lead={leader} />
			//using the renderleaders method
			// ekta ekta niye kore dicche
		);
	});

	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/home">Home</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>About Us</BreadcrumbItem>
				</Breadcrumb>
				<div className="col-12">
					<h3>About Us</h3>
					<hr />
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12 col-md-6">
					<h2>Our History</h2>
					<p>
						Started in 2010, Omega Estatorio quickly established
						itself as a culinary icon par excellence in Athinia, Greece. With
						its unique brand of world fusion cuisine that can be found
						nowhere else, it enjoys patronage from the A-list clientele in
						Greece. Featuring four of the best three-star Michelin
						chefs in the world, you never know what will arrive on your
						plate the next time you visit us.
					</p>
					<p>
						The restaurant traces its humble beginnings to{" "}
						<em>The Frying Pan</em>, a successful chain started by our
						CEO, Jason Momoa, that featured for the first time the
						world's best cuisines in a pan.
					</p>
				</div>
				<div className="col-12 col-md-5">
					<Card>
						<CardHeader className="bg-primary text-white">
							Facts At a Glance
						</CardHeader>
						<CardBody>
							<dl className="row p-1">
								<dt className="col-6">Started</dt>
								<dd className="col-6">3 Feb. 2018</dd>
								<dt className="col-6">Major Stake Holder</dt>
								<dd className="col-6">Telemachis.ltd</dd>
								<dt className="col-6">Last Year's Turnover</dt>
								<dd className="col-6">$1,250,375</dd>
								<dt className="col-6">Employees</dt>
								<dd className="col-6">40</dd>
							</dl>
						</CardBody>
					</Card>
				</div>
				<div className="col-12">
					<Card>
						<CardBody className="bg-faded">
							<blockquote className="blockquote">
								<p className="mb-0">
									You better cut the pizza in four pieces because I'm
									not hungry enough to eat six.
								</p>
								<footer className="blockquote-footer">
									Yogi Berra,
									<cite title="Source Title">
										The Wit and Wisdom of Yogi Berra, P. Pepe,
										Diversion Books, 2018
									</cite>
								</footer>
							</blockquote>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className="row row-content">
				<div className="col-12">
					<h2>Corporate Leadership</h2>
				</div>
				<div className="col-12">
					<Media list>
						{leaders}
						{/* <RenderDish dish={props.dish} /> */}
					</Media>
				</div>
			</div>
		</div>
	);
}

export default About;


import { Card, CardImg, CardText, CardBody, CardTitle ,BreadcrumbItem, Breadcrumb,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {Control,LocalForm,Errors} from 'react-redux-form';
import { Modal,ModalHeader,ModalBody,Label,Row,Col } from 'reactstrap';

const required = (val) => val && val.length; //to see if the value is greater than zero
const maxLength =(len) => (val) => !(val) || (val.length <= len);
const minLength =(len) => (val) => (val) && (val.length >= len);


class Commentform extends Component{
    constructor(props) {
        super(props);
        this.state={            
            isModalOpen: false //this boolean variable will track the state of whether the modal is open or not
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);       
   }      

   toggleModal(){
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
    }

    
    handleSubmit(values){
        console.log("Current state is: "+ JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
        
    }

    render(){ 
        return(
            <>
                
            <div className="col-12">
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
                <ModalBody >
                    <LocalForm onSubmit={this.handleSubmit} >
                        <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        placeholder="Rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option> 
                                    </Control.select>
                                </Col>
                        </Row>
                        {/* HERE */}
                        <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                         <Errors 
                                          className="text-danger"
                                          model=".author"
                                          show="touched"
                                          messages={{
                                              required: 'Required',
                                              minLength:'Must be greater than 2 characters',
                                              maxLength:'Must be 15 characters or less'
                                          }}
                                         />                                       
                                        
                                </Col>
                        </Row>   
                        {/* HERE */}
                        <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="9"
                                        className="form-control" />
                                </Col>
                        </Row>                      
                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </LocalForm>
                </ModalBody>
                
            </Modal>
            </div>
            
            
            <Button type="submit" color="outline-dark" onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg"></span>Submit Comment
            </Button>
            </>
            
        );
    }
}

////////////////////////DISHDETAIL PART



function RenderComments({comments}){  
        if(comments!=null){
           
            const dishComments=comments.map( (comment) => { 
            return( 
                    <ul key={comment.id} className = "list-unstyled">
                    <p>{comment.comment}</p>
                    <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                    </ul>
                  );

        }); //chorami BUDDHI EI RENDER OCMMENTS TA PLEASE TAKE A LOOK
        return(
            <div>

                <h4>Comments</h4>
                {dishComments}
                
                    <Commentform /> 
                
                
{/* the button appearance */}

            </div>
        )
    }
        else{
            return(
                <div></div>
            );
        }
    }

function RenderDish({dish}){ //not used yet
                if(dish!=null){
  
                        return(
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%"  src={dish.image} alt={dish.name}  />
                            <CardBody>                                    
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                        );

                    }
                    else{
                        return(
                            <div></div>
                        );
                    }
                        }


            const DishDetail =(props) => { // we have dish which is a size of 1 index array from the Main
                return(

                <div className="container">

                        <div className="row">
                                <Breadcrumb>                                    
                                    <BreadcrumbItem><Link to='/menu'>huhahuahuh</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                                </Breadcrumb>
                            <div className="col-12">
                                <h3>{props.dish.name}</h3>
                                <hr />
                            </div>
                        </div>

                        <div className="row">
                                <RenderDish dish={props.dish} />
                                <RenderComments comments={props.comments} /> 
                                {/* sender receiver same value thakte hobe as paramen */}
                                
                                
                        </div>
                        
                            
        
                
                </div> //{/*duita bhagabhagi korte hobe*/}
                    
                
            );
                }

export default DishDetail;
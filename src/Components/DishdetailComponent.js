
import { Card, CardImg, CardText, CardBody, CardTitle ,BreadcrumbItem, Breadcrumb,Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {Control,LocalForm,Errors} from 'react-redux-form';
import { Modal,ModalHeader,ModalBody,Label,Row,Col } from 'reactstrap';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

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
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
       //WHERE THE VALUES ARE ADDED
       //EKHANEI KHELA TA HOY
        
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



function RenderComments({comments, postComment, dishId}) { 
      
           
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
                
                    <Commentform dishId={dishId} postComment={postComment}/> 
                
                
{/* the button appearance */}

            </div>
        );
    }
        
    

function RenderDish({dish}){ //not used yet
               
  
                        return(
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%"  src={baseUrl + dish.image} alt={dish.name}  />
                            <CardBody>                                    
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                        );

                    }
                   


            const DishDetail =(props) => { // we have dish which is a size of 1 index array from the Main
               
               
                if (props.isLoading) {
                    return(
                        <div className="container">
                            <div className="row">            
                                <Loading />
                            </div>
                        </div>
                    );
                }
                else if (props.errMess) {
                    return(
                        <div className="container">
                            <div className="row">            
                                <h4>{props.errMess}</h4>
                            </div>
                        </div>
                    );
                }
                else if(props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                <div className="row">
                    </div>
                        <RenderDish dish = {props.dish} />
                        <RenderComments comments = {props.comments} postComment ={props.postComment}
                                dishId={props.dish.id} />
                    </div>
            </div>
        );
    }
        
    else {
        return(
            <div></div>
        );
    }
}

                

export default DishDetail;
import React, {Component} from 'react';
import {Control,LocalForm,Errors} from 'react-redux-form';
import { Jumbotron,Modal,Button,ModalHeader,ModalBody,Form,FormGroup,Input,Label,Row,Col } from 'reactstrap';

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
export default Commentform;

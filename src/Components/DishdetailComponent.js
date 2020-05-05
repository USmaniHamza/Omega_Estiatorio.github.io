import React  from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Col ,BreadcrumbItem, Breadcrumb,Button} from 'reactstrap';
import {Link} from 'react-router-dom';

import Commentform from './CommentformComponent';



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
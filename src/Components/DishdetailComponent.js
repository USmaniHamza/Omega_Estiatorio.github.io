import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Col } from 'reactstrap';

class DishDetail extends React.Component{
    constructor(props){
        super(props); //immediate parent class constructor
        //no state variables yet
    } //selected dish ami props e catch korlam jeta menucomponents e pathalo amake
   //PRESENTATIONAL COOOMPONENTS
   


//renderDIsh
//renderCOmments 
//i used it but all in one

renderComments(dishes){
     //accessing array inside the array
        if(dishes!=null){
           
            const dishComments=dishes.comments.map( (dish) => { 
            return( //to avoid return without div
                
                 
                    <ul key={dish.id} className = "list-unstyled">
                    <p>{dish.comment}</p>
                    <p>--{dish.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dish.date)))} </p>
                    </ul>
                  );

        }); //chorami BUDDHI EI RENDER OCMMENTS TA PLEASE TAKE A LOOK
        return(
            <div>
                <h4>Comments</h4>
            {dishComments}
            </div>
        )
    }
        else{
            return(
                <div></div>
            );

        }
    }
    ////////////////////////////////////
    //selectedDish to dish
    renderDish(dishes){
if(this.props.dish!=null){
    // {new Intl.DateTimeFormat('en-US',{year: 'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse {dish.date})</p>
    return(

        <CardBody>
                <CardImg width="100%"  src={this.props.dish.image} alt={this.props.dish.name}  />
                <CardTitle>{dishes.name}</CardTitle>
                <CardText>{dishes.description}</CardText>
        </CardBody>

);

}
else{
    return(
        <div></div>
    );

}
                    }
////////////////////////////////////////

    render(){ //this is like another constructor
   

        return(

<div className="container">
    <div className="row">

        <div className="col-12 col-md-5 m-1">
                 {this.renderDish(this.props.dish)}
        </div>
        {/*nicher ta comment section*/}

        <div className="col-12 col-md-5 m-1">
                
            
                    <CardBody> 
                    {this.renderComments(this.props.dish)}
                    </CardBody>            
                
        </div>
            
    </div> {/*row*/}
           
</div> //{/*duita bhagabhagi korte hobe*/}
            
          
       );
   }
   
}
export default DishDetail;
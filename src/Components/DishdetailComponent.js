import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Col } from 'reactstrap';

class DishDetail extends React.Component{
    constructor(props){
        super(props); //immediate parent class constructor
        //no state variables yet
    } //selected dish ami props e catch korlam jeta menucomponents e pathalo amake
   


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
                    <p>--{dish.author},{dish.date}</p>
                    </ul>
                  );

        });
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
    renderDish(dish){
if(this.props.SelectedDishes!=null){

    return(

        <CardBody>
                <CardImg width="100%"  src={this.props.SelectedDishes.image} alt={this.props.SelectedDishes.name}  />
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
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
                 {this.renderDish(this.props.SelectedDishes)}
              

        </div>
        {/*nicher ta comment section*/}

        <div className="col-12 col-md-5 m-1">
                
            
                    <CardBody> 
                    {this.renderComments(this.props.SelectedDishes)}
                    </CardBody>            
                
        </div>
            
    </div> {/*row*/}
           
</div> //{/*duita bhagabhagi korte hobe*/}
            
          
       );
   }
   
}
export default DishDetail;
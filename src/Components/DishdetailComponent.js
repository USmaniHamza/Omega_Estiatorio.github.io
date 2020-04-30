import React  from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Col } from 'reactstrap';

function RenderComments({dish}){  
        if(dish!=null){
           
            const dishComments=dish.comments.map( (dish) => { 
            return( 
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
function RenderDish({dish}){ //not used yet
        if(dish!=null){
  
                        return(

                            <CardBody>
                                    <CardImg width="100%"  src={dish.image} alt={dish.name}  />
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


    const DishDetail =(props) => { // we have dish which is a size of 1 index array from the Main
         return(

<div className="container">
    <div className="row">

        <div className="col-12 col-md-5 m-1">
                 <RenderDish dish={props.dish} />
        </div>
        {/*nicher ta comment section*/}

        <div className="col-12 col-md-5 m-1">
                    <CardBody> 
                    <RenderComments dish={props.dish} /> 
                    {/* sender receiver same value thakte hobe as parameters */}
                    </CardBody>            
                
        </div>
            
    </div> {/*row*/}
           
</div> //{/*duita bhagabhagi korte hobe*/}
            
          
       );
        }

export default DishDetail;
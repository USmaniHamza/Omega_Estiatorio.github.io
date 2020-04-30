import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

 
function RenderMenuItem({dish, onClick}){  //specifying the props and the starting of the RenderMenuItem function
return(
    <Card onClick={() => onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}  />
                                      
                        <CardImgOverlay body className="ml-4">
                            <CardTitle>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
              </Card>
);
} //RenderMenuItem ending
const Menu = (props) => { //starting of the Menu function
    const menu=props.dishes.map( (dish) => {  
        return(
             <div key={dish.id} className="col-12 col-md-5 m-1">             
               <RenderMenuItem dish={dish} onClick={props.onClick} /> 
               {/* this onClick is paving a path to the place it was first called which is the Main component */}
             </div>
               );
     }) ; 
         return(
             <div className="container">
                 <div className="row"> 
                      {menu} 
                     
                 </div>
             </div>
             );  //
}
  
export default Menu;

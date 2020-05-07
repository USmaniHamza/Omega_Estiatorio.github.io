import React from 'react';
import {Card, CardImg,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';
import { Loading } from "./LoadingComponent";

function RenderCard({item,isLoading,errMess}){
if (isLoading)    {
    return(
        <Loading />
    );
} else if(errMess){
    return(
        <h4>{errMess}</h4>
    );
}
  else
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                {/* if item desination is not null then render it as CardSubtitle but if it is null then show null */}
                <CardText>{item.description}</CardText>
            </CardBody>
            
        </Card>
    );
}

function Home(props) {
  return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess} />  {/*so 3times call kora hoise ei method ta*/}
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotions} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leaders} />
                </div>

            </div>

        </div>
  );

}
export default Home;
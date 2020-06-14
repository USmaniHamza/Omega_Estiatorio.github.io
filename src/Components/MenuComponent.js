import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

    function RenderMenuItem ({dish}) {
        return ( //eta hocche before click display
            <Card>
                <Link to={`/menu/${dish.id}`}> 
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} /> 
                {/* FETCHING THE IMAGE */}
                <CardImgOverlay>
                    <CardTitle className="topnav-right">{dish.name}</CardTitle> 
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {
//ekta jodi already array hoye thake tahole ki amra ki amra abar re-map korte parbo?
        const menu = props.dishes.dishes.map((dish) => { //ONCLICK muche disi
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        });
        if(props.dishes.isLoading)
        {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
    
        else if(props.dishes.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Menu</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
        );
    }

export default Menu;
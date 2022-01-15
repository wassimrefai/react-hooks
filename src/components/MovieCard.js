import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";

function MovieCard ({movie}) {

    
    return (
    <div >
        {

        <Card style={{width: '18rem', margin :'30px' ,height:'45rem'}} >
           <Card.Img variant="top" src= {movie.posterURL} alt="mriguel" style={{minHeight : '30rem'}}/>
             <Card.Body style ={{display :'flex', flexDirection:'column'}}>
                    <Card.Title style ={{height : '25px', width:'auto', overflowY:'auto'}}>{movie.title}</Card.Title>
                    <ReactStars
                        count={5}
                        size={20}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="blue"
                        value={movie.rating}
                        edit={false}
                    />
                    <Card.Text style ={{width:'255px', height:'100px', overflow :'auto'}}>
                     {movie.description}
                    </Card.Text>
                    
                     <Button variant="outline-secondary" style ={{alignSelf:'center'}}>See trailer</Button>
                     
              </Card.Body>
              
        </Card>
        }
        
    </div>
    )
}
export default MovieCard
import React from "react";
import './App.css'

function BookItem({title, image, rating, onRate}) {
    const stars = [1,2,3,4,5];

    const handleStarClick = (star) => {
        if(rating == star) {
            onRate(0);
        }else {
            onRate(star);
        }
    }
 
    return (
        <div class="booklist">
            <img src={image} alt={title} width={130} style={{marginRight:15}}></img>    
            <div style={{textAlign:"center"}}>
                <h3>{title}</h3>
                {stars.map((star) => (
                    <span
                        key = {star}
                        style={{
                            color: star <= rating ? 'red' : 'lightgray',
                            fontSize:27,
                        }}
                        onClick={() => handleStarClick(star)}
                        >
                        ★
                    </span>
                ))}
            </div>
        </div>
    );o
}

export default BookItem;
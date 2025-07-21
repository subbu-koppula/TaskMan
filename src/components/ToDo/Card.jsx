import React from 'react';
import './Card.css';

function Card(props) {
    // const [hide, sethide] = useState(true);

    function done(){
        props.handleDone(props.id);
    }
    function Delete(){
        props.handleDelete(props.id);
    }
    function swapUp(){
        props.handleSwapUp(props.id);
    }
    return (
        // hide ?
        // (
        <div className='card-container'>
            {/* <div className='checkbox'> */}
            {/* </div> */}
            <div className='details'>
                <input
                    type="checkbox"
                    id={`checkbox-${props.id}`}
                    className='checkbox'
                    onChange={done}
                    checked={props.done}
                    // style={{ display: 'none' }} // Hide the checkbox visually
                />
                <label htmlFor={`checkbox-${props.id}`} className='details-title'>{props.title}</label>
            </div>
            {props.done ? 
                <button className="card-button" onClick={Delete}>Delete</button> 
                : 
                <button className='card-button' onClick={swapUp}>UP</button>
            }
        </div>
   
        // ) : null 
    );
}

export default Card;


        // <div className="card">
        // <div className="card-content">
        //     <p className="card-title">{props.title}</p>
        //     {/* <p className="card-description">{props.description}</p> */}
        // </div>
        // <button className="card-button" onClick={done}>Done</button>
        // </div>          
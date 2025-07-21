import React, {useState} from "react";
import Card from "./Card";
import './Card.css';

export default function FinishedCard({Todos, handleDone, handleDelete}){
    const [expanded, setExpanded] = useState(false);
    const toggleVisibility = () => {
        setExpanded(!expanded);
        console.log("this button is triggered");
    }

    return(
    <>  
        <div className="card" >
            <div className="card-content" onClick={toggleVisibility}>
                <label className="card-title">Finished Tasks <span style={{color : "#acacac"}}>{`Click to ${expanded ? 'condense' : 'expand'}`}</span></label>
            </div>
            {expanded&&Todos.length ? 
            Todos.map((index) => (                
                index.done ? <Card key={index.id} id={index.id} handleDelete={handleDelete} done={index.done} handleDone={handleDone} title={index.title} /> : null
            )) : null }       
        </div>
    </>
    )
}
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Storiesdetails from './Storiesdetails';
import axios from "axios";

function Stories() {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:5000/api/stories')
        .then(response => {
            setStories(response.data); 
        }) 
        .catch(error => {
            console.log("There was an error with your request", error)
        });
    }, []);

    return (
        <div>            
            {stories.map((story) => ( 
                <div>
                <Storiesdetails key={story.id} title={story.title} author={story.author} myStory={story.myStory}/>                
                <Link to={`/stories/${story.id}`}>READ MORE </Link> 
                </div>            
            ))}
        </div>
    )
}

export default Stories;
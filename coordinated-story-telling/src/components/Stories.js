import React, { useState, useEffect } from "react";
import StoriesDetails from './StoriesDetails';
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
                    <StoriesDetails key={story.id} storyDetails = {story} />              
                </div>            
            ))}
        </div>
    )
}

export default Stories;
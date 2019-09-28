import React, { useState, useEffect } from "react";
import axios from "axios";

function Stories(props) {
    const [stories, setStories] = useState([]);
    console.log('Stories props is', props);
    useEffect(() => {
        axios.get('http://localhost:5000/api/stories')
        .then(response => {
            setStories(response.data);
            console.log('THIS STORIES IS', response.data);
        }) 
        .catch(error => {
            console.log("There was an error with your request", error)
        });
    });
    return(
        <div>
            <h1> This is the stories component</h1>
        </div>
    )
}

export default Stories;
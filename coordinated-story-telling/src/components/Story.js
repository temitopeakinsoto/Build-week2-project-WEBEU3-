import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Storiesdetails from './Storiesdetails';
import styled  from 'styled-components';
import axios from "axios";

const storyCard = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;

`;
function Story(props) {
    const id = props.match.params.id;
    const [story, setStory] = useState([]);
    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/stories/${id}`)
        .then(response => {
            setStory(response.data); 
        }) 
        .catch(error => {
            console.log("There was an error with your request", error)
        });
    }, []);

    return ( 
        <div> 
            <Link to="/stories">back</Link>           
            <Storiesdetails key={story.id} title={story.title} author={story.author} myStory={story.myStory}/>             
        </div>            
    )
}

export default Story;
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styled  from 'styled-components';
import axios from "axios";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-item: flex-end;
    background-color: #c5d8e1;
    color: black;
    border: 1px solid gray;
    margin: 10px;
    padding: 0 20px;
`;

const Paragraph = styled.p`
    font-size: 12px;
    text-align: justify;
`

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
            <StoryDetails key={story.id} storyDetails={story} />             
        </div>            
    )
}

function StoryDetails(props) {
    const { storyDetails } = props;
    const { title, author, myStory } = storyDetails;
    return(
        <StyledDiv>
            <h2> {author} </h2>           
            <div>
             <h4> {title} </h4>   
             <Paragraph> {myStory} </Paragraph>
             <Link style={{fontSize:'12px', textDecoration:'none'}} to="/stories">BACK</Link>  
            </div>
        </StyledDiv>
    )
}

export default Story;
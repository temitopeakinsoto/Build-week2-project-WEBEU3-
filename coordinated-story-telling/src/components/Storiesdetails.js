import React from "react";
import {Link} from "react-router-dom"
import styled  from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-item: flex-end;
    background-color: white;
    color: black;
    border: 1px solid gray;
    margin: 10px;
    padding: 0 20px;
`;

const Paragraph = styled.p`
    font-size: 12px;
    text-align: justify;
`;

function StoriesDetails(props) {
    const { storyDetails } = props;
    const { id, title, author, myStory } = storyDetails;
    return(
        <StyledDiv>
            <h2> {author} </h2>           
            <div>
             <h4>{title}</h4>   
             <Paragraph> {myStory} </Paragraph>
             <Link to={`/stories/${id}`} style={{fontSize:'12px', textDecoration:'none'}}>
                <span>READ MORE</span>
             </Link> 
            </div>
        </StyledDiv>

    )
}

export default StoriesDetails;
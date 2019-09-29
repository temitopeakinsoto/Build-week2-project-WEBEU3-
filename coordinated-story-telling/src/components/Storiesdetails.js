import React from "react";
import styled  from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-item: flex-end;
    background-color: #c5d8e1;
    border: 1px solid gray;
    margin: 10px;
    padding: 0 20px;
`;

function Storiesdetails(props) {
    const { storyDetails } = props;
    const { title, author, myStory } = storyDetails;
    return(
        <StyledDiv className="story-card">
            <h2> {author} </h2>           
            <div className="mystory">
             <h5>{title}</h5>   
             <p> {myStory} </p>
            </div>
        </StyledDiv>

    )
}

export default Storiesdetails;
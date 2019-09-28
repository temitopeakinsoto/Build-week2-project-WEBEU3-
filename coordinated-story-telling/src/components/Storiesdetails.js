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
    return(
        <StyledDiv className="story-card">
            <h2> {props.author} </h2>           
            <div className="mystory">
             <h5>{props.title}</h5>   
             <p> {props.myStory} </p>
            </div>
        </StyledDiv>

    )
}

export default Storiesdetails;
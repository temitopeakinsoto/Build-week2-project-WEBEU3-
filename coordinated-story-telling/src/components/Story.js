import React from "react";

function Story(props) {
    console.log('Story id is', props.match.params.id);
    return(
        <div>
            <h2>This the individual story page</h2>
        </div>
    )
}

export default Story;
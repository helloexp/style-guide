import React from 'react';
import {Jumbotron} from 'reactstrap';
import ContentTemplate from '../ContentTemplate';


const Components = (props) => {
    console.log("components page",props)
    return (
        <div>
            <Jumbotron>
                <h1>Components</h1>
            </Jumbotron>
            <ContentTemplate>
                    <div>
                        <h3>Basic Snippets</h3>
                        <p>Most popular items</p>
                        <h1>{Object.keys(props.components)[0]}</h1>
                        <p>{ props.components[Object.keys(props.components)[0]].slides}</p>
                    </div>
            </ContentTemplate>
        </div>
    )
}

export default Components;
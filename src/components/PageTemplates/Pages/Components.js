import React from 'react';
import {Jumbotron} from 'reactstrap';
import ContentTemplate from '../ContentTemplate';


const Components = (props) => {
    
    return (
        <div>
            <Jumbotron>
                <h1>Components</h1>
            </Jumbotron>
            <ContentTemplate contents={props.components} type="component">
                    <div>
                        <h3>Basic Snippets</h3>
                        <p>Most popular items</p>
                     
                    </div>
            </ContentTemplate>
        </div>
    )
}

export default Components;
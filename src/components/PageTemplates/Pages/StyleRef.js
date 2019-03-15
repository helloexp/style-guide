import React from 'react';
import {Jumbotron} from 'reactstrap'
import ContentTemplate from '../ContentTemplate';

const StyleRef = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1>CSS Style</h1>
            </Jumbotron>
            <ContentTemplate>
                {props.Layout ? props.Layout :
                    <div>
                        <h1>Basic Snippets</h1>
                        <p>Most popular items</p>
                    </div>
                
                }
            </ContentTemplate>
        </div>
    )
}

export default StyleRef;
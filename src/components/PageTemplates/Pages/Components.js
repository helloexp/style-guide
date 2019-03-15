import React from 'react';
import {Jumbotron} from 'reactstrap';
import ContentTemplate from '../ContentTemplate';


const Components = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1>Components</h1>
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

export default Components;
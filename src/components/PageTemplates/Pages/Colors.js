import React from 'react';
import {Jumbotron} from 'reactstrap'
import ContentTemplate from '../ContentTemplate';


const ColorsPage = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1>Colors</h1>
            </Jumbotron>
            {/* <ContentTemplate> */}
                    <div>
                        <h3>Basic Snippets</h3>
                        <p>Most popular items</p>
                    </div>
            {/* </ContentTemplate> */}
        </div>
    )
}

export default ColorsPage;
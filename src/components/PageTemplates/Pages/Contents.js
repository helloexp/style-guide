import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import ContentTemplate from '../ContentTemplate';
import ErrorPage from '../Error';


class Contents extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    render(){
        const {
            match,
            contents
        } = this.props;

        const  slug  = match.params.slug;
        const type = match.params.type;
        const getData = contents.contents[type];
        if(!getData){
            return <ErrorPage />
        }
       console.log(typeof(getData[slug]))
        let content = null;
        if(getData[slug]){

            content = Object.values(getData[slug]).map((content,i) => {
                console.log(content)
                    let getSectionData = Object.keys(content.contents).map((data, i) => {
                        let sectionData = content.contents[data];
                        let sectionContent = Object.keys(sectionData.contents).map((contentData, i) =>{
                            return (
                                <div>
                                    <p>{sectionData.contents[contentData]}</p>
                                </div>
                            )
                        })
                        return(
                            <div key={i}>
                                <p className="text-cap"><b>{sectionData.section}</b></p>
                                {sectionContent}
                            </div>
                        )
                    })
                    return(
                        <div className="section-container" key={i}>
                            <h2 className="text-cap">{content.title}</h2>
                            <h3>{getSectionData}</h3>
                        </div>
                    )
            })
        }
        return (
            <div>
                <Jumbotron>
                    <h1 className="text-cap">{this.props.match.params.type}</h1>
                </Jumbotron>
                <ContentTemplate contents={getData}  type={type}>
                        { slug ?
                            <div>
                                <h1 className="text-cap">{slug}</h1>
                                {content}
                            </div>
                        : 
                        <div>
                            <h3>Basic Snippets</h3>
                            <p>Most popular items</p>
                            {slug}
                        </div>
                        }
                </ContentTemplate>
            </div>
        )
    }
}

export default Contents;
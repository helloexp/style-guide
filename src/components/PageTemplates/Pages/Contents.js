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



        let content = '';
        if(getData != null){
            content = Object.values(getData).map((content,i) => {
                let getSectionData = Object.keys(content).map((sectionData, i) => {
                    let dataSet = content[sectionData].contents;
                    let sectionTitle = content[sectionData].title;
                    let sectionContent = Object.keys(dataSet).map((contentData, i) =>{
                        let dataSection =  dataSet[i].contents;
                        let sectionContentData =  Object.keys(dataSection).map(data => {
                            console.log("data",dataSection[data])
                            return (
                                <div>
                                    <p>{dataSection[data]}</p>
                                </div>
                            )
                        })
                        
                        let sectionContentTitle = dataSet[i].section;
                       
                        return (
                            <div>
                                <p>{sectionContentTitle}</p>
                                <p>{sectionContent}</p>
                            </div>
                        )
                    })
                    return(
                        <div key={i}>
                            <p><b>{sectionTitle}</b></p>
                            {sectionContent}
                        </div>
                    )
                })
                return(
                    <div className="section-container" key={i}>
                        {/* <h2>{contentData.title}</h2> */}
                        <h3>{getSectionData}</h3>
                    </div>
                )
            })
        }
        return (
            <div>
                <Jumbotron>
                    <h1>{this.props.match.params.type}</h1>
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
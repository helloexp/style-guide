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
        const  slug  = this.props.match.params.slug;
        if(slug != null){
            if( !this.props.components[slug] ){
                return (<ErrorPage />)
            }
        }

        // let getData = this.props.components[slug]
        // console.log("render",slug)

        // let content = '';
        // if(getData != null){
        //     content = Object.values(getData).map((content,i) => {
        //         let contentData =content
        //         console.log(content)
        //         console.log(contentData)
        //         let contentSection = contentData.contents;
        //         let getSectionData = Object.keys(contentSection).map((sectionData, i) => {
        //             let dataSet = contentSection[sectionData]
        //             let sectionTitle = dataSet.section;
        //             let sectionContent = Object.keys(dataSet.contents).map(contentData =>{
        //                 return dataSet.contents[contentData];
        //             })
        //             return(
        //                 <div key={i}>
        //                     <h3>{sectionTitle}</h3>
        //                     <p>{sectionContent}</p>
        //                 </div>
        //             )
        //         })
        //         return(
        //             <div className="section-container" key={i}>
        //                 <h2>{contentData.title}</h2>
        //                 <h3>{getSectionData}</h3>
        //             </div>
        //         )
        //     })
        // }
        return (
            <div>
                <Jumbotron>
                    <h1>Components</h1>
                </Jumbotron>
                <ContentTemplate  type="components">
                        { slug ?
                            <div>
                                <h1 className="text-cap">{slug}</h1>
                                {/* {content} */}
                            </div>
                           
                        : 
                        <div>
                            <h3>Basic Snippets</h3>
                            <p>Most popular items</p>
                        </div>
                        }

                        
                </ContentTemplate>
            </div>
        )
    }
    

}

export default Contents;
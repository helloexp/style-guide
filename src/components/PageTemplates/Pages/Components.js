import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import ContentTemplate from '../ContentTemplate';
import ErrorPage from '../Error';


class Components extends Component {
    constructor(props){
        super(props);
        this.state={
            slug: ''
        }
    }
    componentDidMount(){
        const slug = this.props.match.params.slug;
        this.setState({
            slug
        })

    }
    render(){
        const { slug } = this.state;
        console.log(this.props.match)
        if(!this.props.components[slug]){
            return (<ErrorPage />)
        }
        let getData = Object.keys(this.props.components).map( section => {
            return this.props.components[slug]
        })

        let content = Object.values(getData).map((content,i) => {
            let contentData =content[Object.keys(content)]
            let contentSection = contentData.contents;
            console.log(contentSection)
            let getSectionData = Object.keys(contentSection).map(sectionData => {
                let sectionTitle = contentSection[sectionData].section;
                let sectionContent;
                return(
                    <div>
                        <h3>SectionTitle</h3>
                       
                    </div>
                )

            })
       

            return(
                <div className="section-container">
                    <h2>{contentData.title}</h2>
                    <h3>{getSectionData}</h3>
                </div>
            )
        })


        


        return (
            <div>
                <Jumbotron>
                    <h1>Components</h1>
                </Jumbotron>
                <ContentTemplate contents={this.props.components} type="components">
                        { slug  && this.props.match.url == `/components/${slug}`?
                            <div>
                                <h1 className="text-cap">{slug}</h1>
                                {content}
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

export default Components;
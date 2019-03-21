import React from 'react';
import { Link } from 'react-router-dom';




const AdminContent = (props) =>{
        const type = props.match.params.type;
        const slug = props.match.params.slug;
        const sections = props.contents.contents[type]
        const sectionsCard = Object.keys(sections).map( data => {
            const section = sections[data];
            
            return(
                <div>
                    <p>{data}</p>
                </div>
            )
        })
      
        return(
            <div>
                <h1 className="text-cap">{type}</h1>
                    <button><Link className="nav-link" to = {`/dashboard/${type}/add`} >Add New</Link></button>
                <div>
                    {sectionsCard}


                </div>

            </div>
        )
}

export default AdminContent;
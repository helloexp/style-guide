import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap'




const AdminContent = (props) =>{
        const type = props.match.params.type;
        const slug = props.match.params.slug;
        const sections = props.contents.contents[type]
        const sectionsCard = Object.keys(sections).map( data => {
            return(
                <Link className="content-card" to={`/dashboard/${type}/${data}/edit`}>
                    <Card className="flex flex-center">
                        <h5 className="text-center text-cap">{data}</h5>
                    </Card>
                </Link>
            )
        })
      
        return(
            <div className="admin-content-container">
                <h1 className="text-cap">{type}</h1>
                    <button><Link className="nav-link" to = {`/dashboard/${type}/add`} >Add New</Link></button>
                <div className="content-card-container flex">
                    {sectionsCard}
                </div>

            </div>
        )
}

export default AdminContent;
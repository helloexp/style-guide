import React from 'react';
import { Link } from 'react-router-dom';


const AdminContent = (props) =>{
        const type = props.match.params.type;
        const slug = props.match.params.slug;

        console.log("admin content",props)
        return(
            <div>
                <h1 className="text-cap">{type}</h1>
                <button><Link className="nav-link" to = {`/dashboard/${type}/add`} >Add New</Link></button>

            </div>
        )
}

export default AdminContent;
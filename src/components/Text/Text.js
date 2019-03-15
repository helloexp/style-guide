import React from 'react'


const text = () => {
    return(
        <div>
        <h1 className="bold">Text Styles</h1>
        <h3>Headers</h3>
        <div className='display-container'>
            <h1>Heading {`<h1>`} - 36px </h1>
            <h2>Heading {`<h2>`} - 32px </h2>
            <h3>Heading {`<h3>`} - 28px </h3>
            <h4>Heading {`<h4>`} - 24px</h4>
            <h5>Heading {`<h5>`} - 20px </h5>
            <h6>Heading {`<h6>`} - 16px </h6>
        </div>
      
      </div>
    )
}

export default text;
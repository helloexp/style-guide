import React from 'react';
import {Jumbotron, Col, Row, Card} from 'reactstrap';
import { Link } from 'react-router-dom'


const Home = () => {
    return(
        <div>
            <Jumbotron>
                <h1>Style Guide</h1>
            </Jumbotron>
            <div className="section-divide">
                <h3>
                    Download Style Assets
                </h3>
                <button>Default Stylesheet</button>
                <button>Desktop Stylesheet</button>
                <button>Mobile Stylesheet</button>
            </div>
            <div className="section-divide">
                <h3>
                    Quick Guide
                </h3>
                <Row>
                    <Col sm={4} >
                        <Link to="/components">
                            <Card className="flex flex-center">
                                    <h5 className="text-center">Components</h5>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm={4}>
                        <Link to="/style">
                            <Card className="flex flex-center">
                                <h5 className="text-center">Style Reference</h5>
                            </Card>
                        </Link>
                    </Col>
                    <Col sm={4}>
                        <Link to="/colors">
                            <Card className="flex flex-center">
                                <h5 className="text-center ">Colors</h5>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </div>
            <Link className="nav-link"  to="/login">Login</Link>
 
        </div>
    )
}

export default Home;
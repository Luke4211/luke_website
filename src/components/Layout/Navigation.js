import React from 'react';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
 
const Navigation = () => {
    return (
        <Nav defaultActiveKey="/" className="flex_column">
            <Nav.Link href="/">Active</Nav.Link>


        </Nav>
     );
}
 
export default Navigation;
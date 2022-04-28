import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css'
 
const Navigation = () => {
    return (
        <Nav defaultActiveKey="/" className="nav_bar">
            <Nav.Link href="/" className="nav_item">Home</Nav.Link>
            <Nav.Link href="/technology" className="nav_item">Technology</Nav.Link>
            <Nav.Link href="/entertainment" className="nav_item">Entertainment</Nav.Link>
        </Nav>
     );
}
 
export default Navigation;
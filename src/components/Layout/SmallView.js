import React from 'react';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';
import Postcards from '../Postcards/Postcards';
import Navigation from './Navigation';

const SmallView = () => {
    return (
        <div style={{
            display: "grid",
            height: "100vh",
            gridTemplateRows: "10vh 80vh 10vh",
            overflowY:"scroll"
        }}>
            <div style={{
                boxShadow: "3px 0px 7px 2px rgba(121, 121, 121, .2)",
                zIndex:"1"
            }}>
                Top Bar
            </div>

            <div style={{
                maxHeight:"80vh",
                overflowY:"scroll"
            }}>
                <Postcards/>
            </div>

            <div style={{
                boxShadow: "3px 0px 7px 2px rgba(121, 121, 121, .2)",
                zIndex:"1"
            }}>
                Bottom Panel
            </div>
        </div>
    )

}

export default SmallView;
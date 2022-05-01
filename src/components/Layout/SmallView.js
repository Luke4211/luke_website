import React from 'react';
import Postcards from '../Postcards/Postcards';
import BottomBar from './BottomBar';

const SmallView = ({onFetchPosts}) => {
    return (
        <div style={{
            overflowY:"scroll"
        }}>
            <div style={{
                boxShadow: "3px 0px 7px 2px rgba(121, 121, 121, .2)",
                position: "fixed",
                width: "100vw",
                minHeight:"70px",
                top: "0",
                zIndex:"1"
            }}>
                Top Bar
            </div>

            <div style={{
                maxHeight:"calc(100vh - 140px)",
                overflowY:"scroll",
                marginTop: "70px",
                marginBottom: "70px",
                zIndex: "0"
            }}>
                <Postcards onFetchPosts={onFetchPosts} />
            </div>

            <div style={{
                boxShadow: "3px 0px 7px 2px rgba(121, 121, 121, .2)",
                position: "fixed",
                width: "100vw",
                minHeight: "70px",
                height: "70px",
                bottom:"0",
                zIndex:"1"
                
            }}>
                <BottomBar/>
            </div>
        </div>
    )

}

export default SmallView;
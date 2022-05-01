import React from 'react';
import Postcards from '../Postcards/Postcards';
import Navigation from './Navigation';

const LargeView = ({onFetchPosts}) => {
    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            height: "100%"
        }}>
            <div>
                <Navigation />
            </div>

            <div >

                <Postcards onFetchPosts={onFetchPosts} />
            </div>

            <div>
                <p>Right panel</p>
            </div>

        </div>

    );
}

export default LargeView;
import React from 'react';
import Postcards from '../Postcards/Postcards';
import Navigation from './Navigation';

const LargeView = () => {
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

                <Postcards />
            </div>

            <div>
                <p>Right panel</p>
            </div>

        </div>

    );
}

export default LargeView;
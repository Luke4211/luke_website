import React from 'react';
import Postcards from '../../Postcards/Postcards';
import Navigation from '../Navigation';
import './LargeView.css'

const LargeView = () => {
    return (
        <div className='large_screen_container'>
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
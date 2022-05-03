import React from 'react';
import PropTypes from 'prop-types';
import Postcards from '../Postcards/Postcards';
import Navigation from './Navigation';
import AboutPanel from './AboutPanel';
import DesktopHeader from './DesktopHeader';

function LargeView({ onFetchPosts }) {
  LargeView.propTypes = {
    onFetchPosts: PropTypes.func.isRequired,
  };
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '25vw 50vw 25vw',
      height: '100%',
    }}
    >
      <div>
        <Navigation />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateRows: '20vh 80vh',
      }}
      >
        <div style={{
          position: 'fixed',
          top: '0',
          minHeight: '150px',
          width: '50vw',
          zIndex: '1',
          backgroundColor: 'white',
          borderLeft: '0 ',
        }}
        >
          <DesktopHeader />

        </div>

        <div style={{
          marginTop: '170px',
          height: '100vh',
          zIndex: '0',
        }}
        >
          <Postcards onFetchPosts={onFetchPosts} />
        </div>
      </div>

      <div>
        <AboutPanel />
      </div>

    </div>

  );
}

export default LargeView;

import React, { useEffect } from 'react';
import './AboutPanel.css';

function AboutPanel() {
  useEffect(() => {
    const linkedInScript = document.createElement('script');
    linkedInScript.src = 'https://platform.linkedin.com/badges/js/profile.js';
    linkedInScript.async = true;
    linkedInScript.defer = true;

    document.body.appendChild(linkedInScript);
    return () => {
      document.body.removeChild(linkedInScript);
    };
  }, []);

  return (
    <div className="about_container">
      <div className="about_name">

        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="VERTICAL" data-vanity="lucas-gorski-09686b173" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/lucas-gorski-09686b173?trk=profile-badge">{}</a></div>

      </div>
    </div>
  );
}

export default AboutPanel;

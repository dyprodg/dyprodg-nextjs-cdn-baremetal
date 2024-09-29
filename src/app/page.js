// Home.js

import './Home.css';

export default function Home() {
  return (
    <div className="container">
      {/* Oben links kleiner Text */}
      <div className="top-left-text">
        ChangeCorb GmbH
      </div>

      {/* Oben rechts gerundeter Menü-Button */}
      <button className="menu-button">
        Menü
      </button>

      {/* Mitte extra fette Überschrift */}
      <div className="center-heading">
        minimalistic webdesign
      </div>

      {/* Unten kleiner Text */}
      <div className="bottom-text">
        Wir gestalten Ihre digitale Zukunft.
      </div>
    </div>
  );
}

import React from 'react';

const Popup = (props) => {
  const { togglePopup, error } = props;
  return (
    <div className="popup">
      <button className="popup__exit" onClick={() => togglePopup('')}>
        <i className="fas fa-times popup__exit-icon"></i>
      </button>
      <h2>{error}</h2>
    </div>
  );
};
export default Popup;

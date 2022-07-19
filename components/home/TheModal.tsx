import React, { useState } from "react";

const TheModal = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    console.log("run showModal");
    setShow(!show);
  };

  return (
    <>
      <button
        className="toggle-button"
        id="centered-toggle-button"
        onClick={showModal}
      >
        {" "}
        show Modal{" "}
      </button>
      {show && (
        <div className="modal" id="modal">
          <h2>Modal Window</h2>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus
            non fuga omnis a sed impedit explicabo accusantium nihil doloremque
            consequuntur.
          </div>
          <div className="actions">
            <button className="toggle-button" onClick={showModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TheModal;

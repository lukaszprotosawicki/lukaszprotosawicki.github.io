import React from "react";

function Textcontact() {
  return (
    <div className="readme">
      <div className="contener-contact">
        <form id="contact-form">
          <input type="text" name="user_name" placeholder="Name" />
          <br />
          <input type="email" name="user_email" placeholder="Email" />
          <br />
          <textarea name="message" placeholder="Message" />
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default Textcontact;

import React from "react";
import { useForm } from "react-hook-form";

function Textcontact() {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="readme">
      <div className="contener-contact">
        <div>Contact: </div>

        <br></br>

        <p className="email">
          email: <br />
          <a href="mailto:lukaszprotosawicki@gmail.com">Lukasz Protosawicki</a>
        </p>
      </div>
    </div>
  );
}

export default Textcontact;

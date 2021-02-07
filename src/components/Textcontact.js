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
          <a href="mailto:lukaszprotosawicki@gmail.com">
            <img
              className="email-img"
              src="https://img.shields.io/badge/Email-lukaszprotosawicki@gmail.com-blue?style=flat-square&logo=gmail"
              alt=""
            />
          </a>
        </p>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input name="firstname" ref={register} /> 
          <input name="lastname" ref={register({ required: true })} />
          {errors.lastname && "Last name is required."}
          <input name="age" ref={register({ pattern: /\d+/ })} />
          {errors.age && "Please enter number for age."}
          <input type="submit" />
        </form> */}
      </div>
    </div>
  );
}

export default Textcontact;

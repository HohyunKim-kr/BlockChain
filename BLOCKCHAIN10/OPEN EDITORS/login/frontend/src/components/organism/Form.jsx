import React from "react";
import styled from "styled-components";
import { InputLogin } from "../atoms";

const Form = ({ submitName }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phoneNumber = e.target.phoneNumber.value;
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(phoneNumber);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <InputLogin />
        <button type="submit">{submitName}</button>
      </form>
    </>
  );
};

export default Form;

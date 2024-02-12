import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import CustomInput from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputHandler = (inputIdentifier, value) => {
    if (inputIdentifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  };

  const handleLogin = () => {
    console.log("signed in");
    setSubmitted(true);
  };

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        
          <CustomInput
            label="Email"
            $invalid={emailNotValid}
            type="email"
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputHandler("email", event.target.value)
            }
          />

        
          <CustomInput
            label="Password"
            $invalid={passwordNotValid}
            type="password"
            // className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputHandler("password", event.target.value)
            }
          />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button type="button" onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

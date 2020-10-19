import React, {
  useState,
  useRef,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Textarea from "../../components/Textarea";
import Checkbox from "../../components/Checkbox";
import Radio from "../../components/Radio";
import Button from "../../components/Button";

import { reducer, initReducer } from "../../store/form/reducer";
import * as actions from "../../store/form/action";
import { initUserInfo } from "../../constants";

const Form = () => {
  const [formState, dispatch] = useReducer(reducer, initUserInfo, initReducer);
  let history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const nameRef = useRef({});
  const emailRef = useRef({});

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const changeFormValueHandler = useCallback((e) => {
    const target = e.target.id;
    const value = e.target.value;

    if (target === "name" && value) {
      handleNameError();
    }

    if (target === "name" && !value) {
      handleNameError(true);
    }

    if (target === "email" && value) {
      handleEmailError();
    }

    if (target === "email" && !value) {
      handleEmailError(true);
    }
    dispatch(actions.setCommonField({ [target]: value }));
  }, []);

  const changeCheckboxFormValueHandler = useCallback((e) => {
    const target = e.target.id;
    const isChecked = e.target.checked;

    if (isChecked) {
      dispatch(actions.addJob(target));
    } else {
      dispatch(actions.removeJob(target));
    }
  }, []);

  const changeRadioFormValueHandler = useCallback((e) => {
    const target = e.target.id;
    const stateName = e.target.name;
    dispatch(actions.setCommonField({ [stateName]: target }));
  }, []);

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { name, email } = formState;

      if (!email) {
        handleEmailError(true);
        emailRef.current.focus();
      }

      if (!name) {
        handleNameError(true);
        nameRef.current.focus();
      }

      if (email && name) {
        console.log(formState);
        history.push({ pathname: "/result", state: formState });
      }
    },
    [formState, history]
  );

  const handleEmailError = (error = false) => {
    if (error) {
      setEmailError("Please enter your email");
    } else {
      setEmailError("");
    }
  };

  const handleNameError = (error = false) => {
    if (error) {
      setNameError("Please enter your name");
    } else {
      setNameError("");
    }
  };

  return (
    <form className="form">
      <div className="form-item">
        <Input
          placeholder="Enter your name"
          label="name"
          value={formState.name}
          onChange={changeFormValueHandler}
          type="text"
          required={true}
          error={nameError}
          ref={nameRef}
        />
      </div>
      <div className="form-item">
        <Input
          placeholder="Enter your email"
          label="email"
          value={formState.email}
          onChange={changeFormValueHandler}
          type="text"
          required={true}
          error={emailError}
          ref={emailRef}
        />
      </div>
      <div className="form-item">
        <Input
          placeholder="yyyy-mm-dd"
          label="dob"
          value={formState.dob}
          onChange={changeFormValueHandler}
          type="date"
        />
      </div>
      <div className="form-item">
        <Select
          label="language"
          placeholder="Select your language"
          value={formState.language}
          onChange={changeFormValueHandler}
        />
      </div>
      <div className="form-item">
        <Textarea
          label="bio"
          placeholder="Describe who you are"
          value={formState.bio}
          onChange={changeFormValueHandler}
          row={6}
        />
      </div>
      <div className="form-item">
        <p className="form-item__label">Are you a ...</p>
        <Checkbox
          label="front-end"
          onChange={changeCheckboxFormValueHandler}
          value={formState.jobs.includes("front-end")}
          name="jobs"
        >
          Frontend Developer
        </Checkbox>
        <Checkbox
          label="back-end"
          onChange={changeCheckboxFormValueHandler}
          value={formState.jobs.includes("back-end")}
          name="jobs"
        >
          Backend Developer
        </Checkbox>
      </div>
      <div className="form-item">
        <p className="form-item__label">Gender</p>
        <Radio
          label="male"
          name="gender"
          value={formState.gender}
          onChange={changeRadioFormValueHandler}
        >
          Male
        </Radio>

        <Radio
          label="female"
          name="gender"
          value={formState.gender}
          onChange={changeRadioFormValueHandler}
        >
          Female
        </Radio>

        <Radio
          label="other"
          name="gender"
          value={formState.gender}
          onChange={changeRadioFormValueHandler}
        >
          Other
        </Radio>
      </div>
      <div className="form-item button-container">
        <Button type="submit" onClick={onFormSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
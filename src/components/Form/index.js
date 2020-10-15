import React, { Component, createRef } from "react";
import Input from "../Input";
import Select from "../Select";
import Textarea from "../Textarea";
import Checkbox from "../Checkbox";
import Radio from "../Radio";
import Button from "../Button";

import { initUserInfo } from "../../constants";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initUserInfo,
      isSubmit: false,
      emailError: "",
      nameError: "",
    };

    this.nameRef = createRef();
    this.emailRef = createRef();
    this.userInfoRef = createRef();

    this.changeFormValueHandler = this.changeFormValueHandler.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.changeCheckboxFormValueHandler = this.changeCheckboxFormValueHandler.bind(
      this
    );
    this.changeRadioFormValueHandler = this.changeRadioFormValueHandler.bind(
      this
    );
    this.setEmailError = this.setEmailError.bind(this);
    this.setNameError = this.setNameError.bind(this);
  }

  componentDidMount() {
    if (this.nameRef.current) {
      this.nameRef.current.focus();
    }
  }

  changeFormValueHandler(e) {
    const target = e.target.id;
    const value = e.target.value;

    if (target === "name" && value) {
      this.setNameError();
    }

    if (target === "name" && !value) {
      this.setNameError(true);
    }

    if (target === "email" && value) {
      this.setEmailError();
    }

    if (target === "email" && !value) {
      this.setEmailError(true);
    }

    this.setState({
      [target]: value,
    });
  }

  changeCheckboxFormValueHandler(e) {
    const target = e.target.id;
    const isChecked = e.target.checked;
    const stateName = e.target.name;

    if (isChecked) {
      this.setState({ [stateName]: [...this.state[stateName], target] });
    } else {
      this.setState({
        [stateName]: [...this.state[stateName]].filter(
          (state) => state !== target
        ),
      });
    }
  }

  changeRadioFormValueHandler(e) {
    const target = e.target.id;
    const stateName = e.target.name;

    this.setState({ [stateName]: target });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { name, email, dob, language, bio, jobs, gender } = this.state;

    if (!email) {
      this.setEmailError(true);
      this.emailRef.current.focus();
    }

    if (!name) {
      this.setNameError(true);
      this.nameRef.current.focus();
    }

    if (email && name) {
      const userInfo = { name, email, dob, language, bio, jobs, gender };
      this.userInfoRef.current = userInfo;

      this.setState({ isSubmit: true, ...initUserInfo });
      this.nameRef.current.focus();
    }
  }

  setEmailError(error = false) {
    if (error) {
      this.setState({ emailError: "Please enter your email" });
    } else {
      this.setState({ emailError: "" });
    }
  }

  setNameError(error) {
    if (error) {
      this.setState({ nameError: "Please enter your name" });
    } else {
      this.setState({ nameError: "" });
    }
  }

  render() {
    const {
      name,
      email,
      dob,
      language,
      bio,
      jobs,
      gender,
      isSubmit,
      nameError,
      emailError,
    } = this.state;
    return (
      <form className="form">
        <div className="form-item">
          <Input
            placeholder="Enter your name"
            label="name"
            value={name}
            onChange={this.changeFormValueHandler}
            type="text"
            required={true}
            error={nameError}
            ref={this.nameRef}
          />
        </div>
        <div className="form-item">
          <Input
            placeholder="Enter your email"
            label="email"
            value={email}
            onChange={this.changeFormValueHandler}
            type="text"
            required={true}
            error={emailError}
            ref={this.emailRef}
          />
        </div>
        <div className="form-item">
          <Input
            placeholder="yyyy-mm-dd"
            label="dob"
            value={dob}
            onChange={this.changeFormValueHandler}
            type="date"
          />
        </div>
        <div className="form-item">
          <Select
            label="language"
            placeholder="Select your language"
            value={language}
            onChange={this.changeFormValueHandler}
          />
        </div>
        <div className="form-item">
          <Textarea
            label="bio"
            placeholder="Describe who you are"
            value={bio}
            onChange={this.changeFormValueHandler}
            row={6}
          />
        </div>
        <div className="form-item">
          <p className="form-item__label">Are you a ...</p>
          <Checkbox
            label="front-end"
            onChange={this.changeCheckboxFormValueHandler}
            value={jobs.includes("front-end")}
            name="jobs"
          >
            Frontend Developer
          </Checkbox>
          <Checkbox
            label="back-end"
            onChange={this.changeCheckboxFormValueHandler}
            value={jobs.includes("back-end")}
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
            value={gender}
            onChange={this.changeRadioFormValueHandler}
          >
            Male
          </Radio>

          <Radio
            label="female"
            name="gender"
            value={gender}
            onChange={this.changeRadioFormValueHandler}
          >
            Female
          </Radio>

          <Radio
            label="other"
            name="gender"
            value={gender}
            onChange={this.changeRadioFormValueHandler}
          >
            Other
          </Radio>
        </div>
        <div className="form-item button-container">
          <Button type="submit" onClick={this.onFormSubmit}>
            Submit
          </Button>
        </div>
        {isSubmit && <code>{JSON.stringify(this.userInfoRef.current)}</code>}
      </form>
    );
  }
}

export default Form;

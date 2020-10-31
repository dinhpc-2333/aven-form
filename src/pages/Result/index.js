import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../../components/Button";

import * as actions from "../../store/form/actions";
import { mappingLabel } from "../../constants";
import Layout from "../../components/Layout";

const Result = () => {
  const dispatch = useDispatch();
  const formState = useSelector((store) => store.form.formState);
  const history = useHistory();

  const goBackForm = () => {
    dispatch(actions.resetForm());
    history.push("/");
  };

  return (
    <Layout>
      <h1>Result</h1>
      <div className="result-wrapper">
        <ul>
          {Object.keys(formState).map((key, i) => {
            const value = formState[key];
            if (!value || (Array.isArray(value) && value.length < 1))
              return null;

            return (
              <li key={i} className="result">
                <span>{mappingLabel[key]}</span>
                {Array.isArray(value) ? (
                  <span>{value.join(", ")}</span>
                ) : (
                  <span>{value}</span>
                )}
              </li>
            );
          })}
        </ul>

        <Button onClick={goBackForm}>Go back homepage</Button>
      </div>
    </Layout>
  );
};

export default Result;

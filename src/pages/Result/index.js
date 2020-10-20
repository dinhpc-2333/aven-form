import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";

import { mappingLabel } from "../../constants";

const Result = () => {
  const history = useHistory();
  const {
    location: { state },
  } = history;

  const goBackForm = () => {
    history.push("/");
  };

  return (
    <div className="result-wrapper">
      <h1>Result</h1>
      <ul>
        {Object.keys(state).map((key, i) => {
          const value = state[key];
          if (!value || (Array.isArray(value) && value.length < 1)) return null;

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

      <Button onClick={goBackForm}>Go back</Button>
    </div>
  );
};

export default Result;

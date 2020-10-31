import React, { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Radio from "../../components/Radio";
import Button from "../../components/Button";

import * as actions from "../../store/marriage-form/actions";

const MarriageForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const marriageFormData = useSelector(
    (store) => store.marriageForm.marriageFormData
  );
  const marriageFormState = useSelector(
    (store) => store.marriageForm.marriageFormState
  );
  const marriageFormLoading = useSelector(
    (store) => store.marriageForm.marriageFormLoading
  );
  useEffect(() => {
    if (!marriageFormData) {
      dispatch(actions.fetchMarriageFormStart());
    }
  }, [dispatch, marriageFormData]);

  const getFields = useMemo(() => {
    if (marriageFormData) {
      return marriageFormData.map((field) => {
        return {
          name: field.name,
          isRequired: field.isRequired,
          id: field.id,
          type: field.type,
        };
      });
    }
  }, [marriageFormData]);

  const changeFormValueHandler = useCallback(
    (e) => {
      const target = e.target.id;
      const value = e.target.value;

      dispatch(actions.setCommonField({ [target]: value }));
    },
    [dispatch]
  );

  const changeCheckboxFormValueHandler = useCallback(
    (e) => {
      const target = e.target.id;
      const isChecked = e.target.checked;

      if (isChecked) {
        dispatch(actions.addCheckboxValue(target));
      } else {
        dispatch(actions.removeCheckboxValue(target));
      }
    },
    [dispatch]
  );

  const changeRadioFormValueHandler = useCallback(
    (e) => {
      const target = e.target.id;
      const stateName = e.target.name;
      dispatch(actions.setCommonField({ [stateName]: target }));
    },
    [dispatch]
  );

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push({ pathname: "/result" });
    },
    [marriageFormState, history]
  );

  console.log(getFields);

  return (
    <Layout>
      <h1>Marriage Form</h1>

      {marriageFormLoading ? (
        <p>Loading ...</p>
      ) : (
        <form className="form">
          {getFields.map((field) => {
            const fieldData = marriageFormData.find(
              (item) => item.id === field.id
            );

            switch (field.type) {
              case "input":
                return (
                  <div className="form-item" key={fieldData.id}>
                    <Input
                      placeholder="Your answer"
                      label={fieldData.description}
                      value={marriageFormState[fieldData.name]}
                      onChange={changeFormValueHandler}
                      type="text"
                      required={true}
                    />
                  </div>
                );

              case "checkbox":
                return (
                  <div className="form-item" key={fieldData.id}>
                    <p className="form-item__label">{fieldData.description}</p>
                    {fieldData.fields.map((checkboxField) => (
                      <Checkbox
                        label={checkboxField}
                        onChange={changeCheckboxFormValueHandler}
                        value={marriageFormState[fieldData.name].includes(
                          checkboxField
                        )}
                        name={fieldData.name}
                        key={checkboxField}
                      >
                        {checkboxField}
                      </Checkbox>
                    ))}
                  </div>
                );

              case "radio":
                return (
                  <div className="form-item" key={fieldData.id}>
                    <p className="form-item__label radio">
                      {fieldData.description}
                    </p>
                    {fieldData.fields.map((radioField) => (
                      <Radio
                        label={radioField}
                        name={radioField}
                        value={marriageFormState[fieldData.name]}
                        onChange={changeRadioFormValueHandler}
                        key={radioField}
                      >
                        {radioField}
                      </Radio>
                    ))}
                  </div>
                );

              case "date":
                return (
                  <div className="form-item" key={fieldData.id}>
                    <Input
                      placeholder="yyyy-mm-dd"
                      label={fieldData.description}
                      value={marriageFormState[fieldData.name]}
                      onChange={changeFormValueHandler}
                      type="date"
                    />
                  </div>
                );

              default:
                return null;
            }
          })}
          <div className="form-item button-container">
            <Button type="submit" onClick={onFormSubmit}>
              Submit
            </Button>
          </div>
        </form>
      )}
    </Layout>
  );
};

export default MarriageForm;

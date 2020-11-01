import React, { useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Radio from "../../components/Radio";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";

import * as actions from "../../store/form/actions";

const MarriageForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const formState = useSelector((store) => store.form.marriageFormState);

  const marriageFormData = useSelector((store) => store.form.marriageFormData);

  const marriageFormLoading = useSelector(
    (store) => store.form.marriageFormLoading
  );

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

  useEffect(() => {
    if (!marriageFormData) {
      dispatch(actions.fetchMarriageFormStart());
    }
  }, [dispatch, marriageFormData]);

  const changeFormValueHandler = useCallback(
    (e) => {
      const target = e.target.id;
      const value = e.target.value;
      dispatch(
        actions.setCommonField({
          data: { [target]: value },
          state: "marriageFormState",
        })
      );
    },
    [dispatch]
  );

  const changeCheckboxFormValueHandler = useCallback(
    (e) => {
      const value = e.target.id;
      const isChecked = e.target.checked;
      const name = e.target.name;

      if (isChecked) {
        dispatch(
          actions.addCheckboxValue({
            data: { name, value },
            state: "marriageFormState",
          })
        );
      } else {
        dispatch(
          actions.removeCheckboxValue({
            data: { name, value },
            state: "marriageFormState",
          })
        );
      }
    },
    [dispatch]
  );

  const changeRadioFormValueHandler = useCallback(
    (e) => {
      const target = e.target.id;
      const stateName = e.target.name;
      dispatch(
        actions.setCommonField({
          data: {
            [stateName]: target,
          },
          state: "marriageFormState",
        })
      );
    },
    [dispatch]
  );

  const onFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      history.push({ pathname: "/result", state: "marriage-form" });
    },
    [history]
  );

  return (
    <Layout>
      <h1>Marriage Form</h1>

      {marriageFormLoading || !formState ? (
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
                      value={formState[fieldData.name]}
                      onChange={changeFormValueHandler}
                      type="text"
                      id={fieldData.name}
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
                        value={formState[fieldData.name]?.includes(
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
                        name={fieldData.name}
                        value={formState[fieldData.name]}
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
                      value={formState[fieldData.name]}
                      onChange={changeFormValueHandler}
                      type="date"
                      id={fieldData.name}
                    />
                  </div>
                );

              case "textarea":
                return (
                  <div className="form-item" key={fieldData.id}>
                    <Textarea
                      label={fieldData.description}
                      placeholder="Your answer"
                      value={formState[fieldData.name]}
                      onChange={changeFormValueHandler}
                      row={6}
                      id={fieldData.name}
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

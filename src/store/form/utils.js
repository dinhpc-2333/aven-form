export const selectState = (state) => {
  try {
    return state === "form" ? "formState" : "marriageFormState";
  } catch (error) {
    return "marriageFormState";
  }
};

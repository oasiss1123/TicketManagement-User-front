export const useFormState = () => {
  const defaultValues = {
    firstName: '',
    lastName: '',
    job: '',
    gender: '',
    file_upload: [],
    image_upload: [],
  };

  return {
    defaultValues,
  };
};

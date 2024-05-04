import * as Yup from "yup";

export const checkSchema = Yup.object().shape({
  amount: Yup.number().required("Amount is required"),
  description: Yup.string().required("Description is required"),
  picture: Yup.mixed().required("File is required"),
});

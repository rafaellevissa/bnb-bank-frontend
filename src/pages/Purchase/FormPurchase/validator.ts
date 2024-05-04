import * as Yup from "yup";

export const purchaseSchema = Yup.object().shape({
  amount: Yup.number().required("Amount is required"),
  description: Yup.string().required("Description is required"),
  date: Yup.date().required("Date is required"),
});

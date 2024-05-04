import React from "react";
import { Grid, TextField, Button, Container } from "@mui/material";
import Layout from "../../../layouts/dashboard";

import { useDispatch } from "react-redux";
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikValues,
} from "formik";
import { store } from "../../../store/modules/purchase/actions";
import { purchaseSchema } from "./validator";

export const FormPurchasesPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (
    values: FormikValues,
    { resetForm }: FormikHelpers<FormikValues>
  ) => {
    dispatch(store(values));

    resetForm();
  };

  const formikConfig: FormikConfig<FormikValues> = {
    initialValues: {
      amount: "",
      description: "",
      date: "",
    },
    validationSchema: purchaseSchema,
    onSubmit: handleSubmit,
  };

  return (
    <Layout>
      <Container sx={{ mt: 2 }}>
        <Formik {...formikConfig}>
          {({ handleSubmit, errors, setFieldValue, values }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Field
                    label="Amount"
                    name="amount"
                    value={values.amount}
                    type="number"
                    fullWidth
                    component={TextField}
                    helperText={errors?.amount}
                    error={errors?.amount}
                    onChange={({
                      target,
                    }: React.ChangeEvent<HTMLInputElement>) =>
                      setFieldValue("amount", target.value)
                    }
                  />
                </Grid>
                <Grid item>
                  <Field
                    type="date"
                    name="date"
                    component={TextField}
                    value={values.date}
                    fullWidth
                    helperText={errors?.date}
                    error={errors?.date}
                    onChange={({
                      target,
                    }: React.ChangeEvent<HTMLInputElement>) =>
                      setFieldValue("date", target.value)
                    }
                  />
                </Grid>
                <Grid item>
                  <Field
                    type="text"
                    name="description"
                    component={TextField}
                    label="Description"
                    value={values.description}
                    fullWidth
                    helperText={errors?.description}
                    error={errors?.description}
                    onChange={({
                      target,
                    }: React.ChangeEvent<HTMLInputElement>) =>
                      setFieldValue("description", target.value)
                    }
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Add Purchase
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Layout>
  );
};

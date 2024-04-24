import React from "react";
import { Typography, Grid, TextField, Button, Container } from "@mui/material";
import Layout from "../../../layouts/dashboard";

import { useDispatch } from "react-redux";
import { store } from "../../../store/modules/check/actions";
import { Field, FieldProps, Form, Formik } from "formik";
import { DepositCheck } from "../../../store/modules/check/types";

export const FormCheckPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    amount: 0,
    description: "",
    picture: null,
  } as any;

  const handleSubmit = (values: DepositCheck) => {
    const formData = new FormData();

    formData.append("amount", values.amount.toString());
    formData.append("description", values.description);
    formData.append("picture", values.picture);

    dispatch(store(formData));
  };

  return (
    <Layout>
      <Container sx={{ mt: 2 }}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Field name="amount">
                    {(fieldProps: FieldProps) => (
                      <TextField
                        {...fieldProps.field}
                        label="Amount"
                        type="number"
                        fullWidth
                        required
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="description">
                    {(fieldProps: FieldProps) => (
                      <TextField
                        {...fieldProps.field}
                        label="Description"
                        fullWidth
                        required
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Typography variant="body1">Upload File</Typography>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(event) => {
                      const selectedFile = (
                        event.currentTarget.files as FileList
                      )[0];
                      setFieldValue("picture", selectedFile);
                    }}
                    required
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Deposit check
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

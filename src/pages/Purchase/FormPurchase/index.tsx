import React from "react";
import { Grid, TextField, Button, Container } from "@mui/material";
import Layout from "../../../layouts/dashboard";

import { useDispatch } from "react-redux";
import { Field, FieldProps, Form, Formik } from "formik";
import { store } from "../../../store/modules/purchase/actions";

export const FormPurchasesPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    amount: 0,
    date: "",
    description: "",
  } as any;

  const handleSubmit = (values: any) => {
    dispatch(store(values));
  };

  return (
    <Layout>
      <Container sx={{ mt: 2 }}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Field name="amount">
                    {({ field }: FieldProps<any>) => (
                      <TextField
                        {...field}
                        label="Amount"
                        type="number"
                        fullWidth
                        required
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="date">
                    {({ field }: FieldProps<any>) => (
                      <TextField
                        {...field}
                        label="Date"
                        type="date"
                        fullWidth
                        required
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item>
                  <Field name="description">
                    {({ field }: FieldProps<any>) => (
                      <TextField
                        {...field}
                        label="Description"
                        fullWidth
                        required
                      />
                    )}
                  </Field>
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

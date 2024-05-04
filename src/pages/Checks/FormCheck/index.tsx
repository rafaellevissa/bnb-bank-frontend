import React from "react";
import { Grid, TextField, Button, Container } from "@mui/material";
import Layout from "../../../layouts/dashboard";

import { useDispatch } from "react-redux";
import { store } from "../../../store/modules/check/actions";
import {
  Field,
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikValues,
} from "formik";
import { checkSchema } from "./validator";

export const FormCheckPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (
    values: FormikValues,
    { resetForm }: FormikHelpers<FormikValues>
  ) => {
    const formData = new FormData();

    formData.append("amount", values.amount.toString());
    formData.append("description", values.description);
    formData.append("picture", values.picture);

    dispatch(store(formData));

    resetForm();
  };

  const formikConfig: FormikConfig<FormikValues> = {
    initialValues: {
      amount: "",
      description: "",
      picture: null,
    },
    validationSchema: checkSchema,
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
                  <Field
                    name="picture"
                    type="file"
                    component={TextField}
                    fullWidth
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(event: any) => {
                      const selectedFile = (
                        event.currentTarget.files as FileList
                      )[0];
                      setFieldValue("picture", selectedFile);
                    }}
                    helperText={errors?.picture}
                    error={errors?.picture}
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

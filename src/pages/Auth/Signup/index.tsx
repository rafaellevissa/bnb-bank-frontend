import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { Signup } from "../../../store/modules/auth/types";
import { signupSchema } from "./validator";
import { signup } from "../../../store/modules/auth/actions";
import { useDispatch } from "react-redux";

export const SignupPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (payload: FormikValues) => {
    const form = payload as Signup;

    dispatch(signup(form));
  };

  const formikConfig: FormikConfig<FormikValues> = {
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: handleSubmit,
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#2799fb"
      sx={{ margin: 0, padding: 0 }}
    >
      <Formik {...formikConfig}>
        {({ handleSubmit, errors, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Paper
              elevation={3}
              style={{ padding: 20, maxWidth: 400, backgroundColor: "white" }}
            >
              <Typography variant="h5" gutterBottom align="center">
                Sign up
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    sx={{ marginTop: 0 }}
                    name="name"
                    margin="normal"
                    placeholder="name"
                    required
                    fullWidth
                    component={TextField}
                    helperText={errors.name as string}
                    error={errors?.name}
                    size="small"
                    onChange={({
                      target,
                    }: React.ChangeEvent<HTMLInputElement>) =>
                      setFieldValue("name", target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    sx={{ marginTop: 0 }}
                    name="email"
                    type="email"
                    margin="normal"
                    placeholder="email"
                    required
                    fullWidth
                    component={TextField}
                    helperText={errors.email as string}
                    error={errors?.email}
                    size="small"
                    onChange={({
                      target,
                    }: React.ChangeEvent<HTMLInputElement>) =>
                      setFieldValue("email", target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    sx={{ marginTop: 0 }}
                    type="password"
                    name="password"
                    margin="normal"
                    placeholder="password"
                    required
                    fullWidth
                    component={TextField}
                    helperText={errors.password as string}
                    error={errors?.password}
                    size="small"
                    onChange={({
                      target,
                    }: React.ChangeEvent<HTMLInputElement>) =>
                      setFieldValue("password", target.value)
                    }
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={1}>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Sign up
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Link href="/login" variant="body2" align="center">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

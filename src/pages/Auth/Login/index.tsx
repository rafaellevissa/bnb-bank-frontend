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
import { Login } from "../../../store/modules/auth/types";
import { loginSchema } from "./validator";
import { login } from "../../../store/modules/auth/actions";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (payload: FormikValues) => {
    const form = payload as Login;

    dispatch(login(form));
  };

  const formikConfig: FormikConfig<FormikValues> = {
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
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
                Sign in
              </Typography>
              <Grid container spacing={2}>
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
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Link href="/signup" variant="body2" align="center">
                    Do not have an account? Sign up
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

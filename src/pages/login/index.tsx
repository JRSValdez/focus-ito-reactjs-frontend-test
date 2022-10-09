import React, { useState } from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import { useNavigate } from "react-router-dom";
import api from "../../apis/authAPI";
import { AxiosResponse } from "../../utils/commonTypes";
import { Grid, TextField, Box, Card, CardContent } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { PageTitle } from "../../components/Texts";
import { PrimaryButton } from "../../components/Buttoms";
import { ErrorAlert } from "../../components/Alerts";
import HeadTtile from "../../components/HeadTitle";

interface LoginFormInterface {
  email: string;
  password: string;
}

const Login = () => {
  const initialValues: LoginFormInterface = { email: "", password: "" };
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    setError(null);
    const {
      data,
      error: responseError,
      success,
    } = await api.post<never, AxiosResponse>("/login", values);

    console.log({ data, responseError, success });

    if (success) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setError(responseError.error);
    }
  };

  const handleValidate = (values: LoginFormInterface) => {
    let errors: any = {};

    if (!values.email) {
      errors.email = "Required";
    }

    if (!values.password) {
      errors.password = "Required";
    }

    return errors;
  };

  return (
    <Grid container justifyContent="center">
      <HeadTtile pageName="Login" />
      <Grid item xs={10} md={4}>
        <Box>
          <Card>
            <CardContent>
              <PageTitle text="Login" />

              {error && <ErrorAlert text={error} />}
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validate={handleValidate}
              >
                {(props) => {
                  const { values, touched, errors, handleChange, handleBlur } =
                    props;
                  return (
                    <Form>
                      <Field name={"email"}>
                        {({ field }: FieldProps) => (
                          <Grid container>
                            <TextField
                              sx={{ m: 1 }}
                              label="Email"
                              name={field.name}
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              helperText={
                                errors.email && touched.email
                                  ? errors.email
                                  : ""
                              }
                              error={Boolean(errors.email && touched.email)}
                              fullWidth
                              autoComplete="off"
                              hiddenLabel
                            />
                          </Grid>
                        )}
                      </Field>

                      <Field name={"password"}>
                        {({ field }: FieldProps) => (
                          <Grid container>
                            <TextField
                              sx={{ m: 1 }}
                              label="Password"
                              name={field.name}
                              value={values.password}
                              onChange={handleChange}
                              error={Boolean(
                                errors.password && touched.password
                              )}
                              onBlur={handleBlur}
                              helperText={
                                errors.password && touched.password
                                  ? errors.password
                                  : ""
                              }
                              inputProps={{
                                type: "password",
                              }}
                              fullWidth
                              autoComplete="off"
                              hiddenLabel
                            />
                          </Grid>
                        )}
                      </Field>

                      <PrimaryButton
                        type="submit"
                        text="Login"
                        icon={<LoginIcon />}
                      />
                    </Form>
                  );
                }}
              </Formik>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { Formik } from "formik";

import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const dispatch = useDispatch();

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
    console.log("Google");
  };
  return (
    <AuthLayout title="Acceso">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(valores) => {
          dispatch(startLoginWithEmailPassword(valores));
          console.log(valores);
        }}
      >
        {({
          isAuthenticating,
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="animate__animated animate__fadeIn animate__faster"
          >
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo electrónico"
                  type="email"
                  fullWidth
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contraseña"
                  type="password"
                  fullWidth
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                {/* <Grid item xs={12}>
                  <Alert
                    severity="error"
                    display={!!errorMessage ? "" : "none"}
                  >
                    {errorMessage}
                  </Alert>
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <Button
                    disabled={isAuthenticating}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Acceder
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    disabled={isAuthenticating}
                    variant="contained"
                    fullWidth
                    onClick={onGoogleSignIn}
                  >
                    <Google />
                    <Typography xs={{ ml: 1 }}> Google</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};

import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

import { Formik } from "formik";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  return (
    <AuthLayout title="Registro">
      <Formik
        initialValues={{
          displayName: "",
          email: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!valores.displayName) {
            errores.displayName = "Por favor ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.displayName)) {
            errores.displayName =
              "El nombre solo puede contener letras y espacios";
          }
          if (!valores.email) {
            errores.email = "Por favor ingrese un correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El email solo puede contener letras, numeros, puntos, guiones";
          }

          if (!valores.password) {
            errores.password = "Por favor ingrese una contraseña ";
          } else if (valores.password.length <= 6) {
            errores.password =
              "Por favor ingrese una contraseña de almenos 6 carácteres";
          }

          return errores;
        }}
        onSubmit={(valores) => {
          console.log(valores);

          dispatch(startCreatingUserWithEmailPassword(valores));
          setFormularioEnviado(true);
          setTimeout(() => setFormularioEnviado(false), 5000);
        }}
      >
        {({
          isCheckingAuthentication,
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
                  label="Nombre completo"
                  type="text"
                  fullWidth
                  name="displayName"
                  value={values.displayName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.displayName && errors.displayName && (
                  <div className="error">{errors.displayName}</div>
                )}
              </Grid>
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
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}
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
                {touched.password && errors.password && (
                  <div className="error">{errors.password}</div>
                )}
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
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={isCheckingAuthentication}
                  >
                    Crear cuenta
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Typography sx={{ mr: 1 }}> ¿Ya tienes cuenta?</Typography>
                <Link component={RouterLink} color="inherit" to="/auth/login">
                  Ingresar
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </AuthLayout>
  );
};

import React from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "100vh",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  fonts: {
    fontSize: 40,
  },
  badge: {
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: 30,
  },
}));

const Pro = () => {
  const classes = useStyles();
  const [field, setField] = React.useState("");
  const [pass, setPass] = React.useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    // event.preventDefault();
    return navigate("/home");
  };
  const handleInput = (event) => {
    setField(event.target.value);
  };
  const handleInputPass = (event) => {
    setPass(event.target.value);
  };

  const LoginSchema = Yup.object({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters at minimum")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      handleSubmit();
      console.log(values);
    },
  });

  const { errors, touched, getFieldProps } = formik;

  return (
    <div className={classes.root}>
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        textAlign="center"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Avatar className={classes.badge}>PRO</Avatar>
          <Typography
            align="center"
            color="textPrimary"
            variant="h1"
            className={classes.fonts}
          >
            Login Pro+
          </Typography>
          <FormikProvider value={formik}>
            <Form>
              <Box p={3}>
                <Box p={2}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    variant="outlined"
                    // onChange={handleInput}
                    // value={field}
                    required
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Box>
                <Box p={2}>
                  <TextField
                    fullWidth
                    id="password"
                    required
                    label="Password"
                    variant="outlined"
                    type="password"
                    // onChange={handleInputPass}
                    // value={pass}
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Box>
                <Box p={2}>
                  <Button
                    fullWidth
                    size="large"
                    //used for to disabled when value is not given of textfields
                    // disabled={!field || !pass}
                    type="submit"
                    color="secondary"
                    variant="contained"
                    disableElevation
                  >
                    Login Pro
                  </Button>
                </Box>

                <Box p={2}>
                  <Typography color="textSecondary" variant="body1">
                    Don't have an account?
                    <Link to="/auth/reg" variant="h6">
                      Sign up
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Form>
          </FormikProvider>
        </Container>
      </Box>
    </div>
  );
};

export default Pro;

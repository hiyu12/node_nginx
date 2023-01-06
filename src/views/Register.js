import React from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  Avatar,
  makeStyles,
  Radio,
  FormControlLabel,
  RadioGroup,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useFormik, Form, FormikProvider } from "formik";
import * as Yup from "yup";

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

const Register = () => {
  const classes = useStyles();

  const RegisterSchema = Yup.object({
    username: Yup.string().required("User name is required"),
    surname: Yup.string().required("Surname is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    country: Yup.string()
      .oneOf(["india", "usa", "canada", "singapore"], "Invalid Country Type")
      .required(),
    mobileno: Yup.string()
      .min(10, "Enter Mobile number properly")
      .required("Mobile number is required"),
    gender: Yup.string().required("gender is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    //file: Yup.array().min(1, "please select at least one file"),
    acceptedTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      surname: "",
      gender: "male",
      country: "",
      mobileno: "",
      email: "",
      password: "",
      confirmpassword: "",
      file: [],
      acceptedTerms: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { errors, touched, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <div className={classes.root}>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          textAlign="center"
          justifyContent="center"
        >
          <Container maxWidth="sm">
            <Avatar className={classes.badge}>R</Avatar>
            <Typography
              align="center"
              color="textPrimary"
              variant="h1"
              className={classes.fonts}
            >
              Register
            </Typography>

            <Box p={2}>
              <Form>
                <Box p={1}>
                  <TextField
                    fullWidth
                    id="username"
                    label="User Name"
                    variant="outlined"
                    {...getFieldProps("username")}
                    error={Boolean(touched.username && errors.username)}
                    helperText={touched.username && errors.username}
                  />
                </Box>
                <Box p={1}>
                  <TextField
                    fullWidth
                    id="surname"
                    label="Surname"
                    variant="outlined"
                    {...getFieldProps("surname")}
                    error={Boolean(touched.surname && errors.surname)}
                    helperText={touched.surname && errors.surname}
                  />
                </Box>

                <Box p={1} style={{ border: 1 }}>
                  <RadioGroup
                    row
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                    {...getFieldProps("gender")}
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </Box>

                <Box p={1}>
                  <TextField
                    fullWidth
                    select
                    // label="--SELECT COUNTRY--"
                    SelectProps={{ native: true }}
                    {...getFieldProps("country")}
                    error={Boolean(touched.country && errors.country)}
                    helperText={touched.country && errors.country}
                  >
                    <option selected name="country">
                      --Select Country--
                    </option>
                    <option value="india" name="country">
                      India
                    </option>
                    <option value="usa" name="country">
                      USA
                    </option>
                    <option value="canada" name="country">
                      Canada
                    </option>
                    <option value="singapore" name="country">
                      Singapore
                    </option>
                  </TextField>
                </Box>

                <Box p={1}>
                  <TextField
                    fullWidth
                    id="mobileno"
                    label="Mobile No"
                    variant="outlined"
                    type="number"
                    {...getFieldProps("mobileno")}
                    error={Boolean(touched.mobileno && errors.mobileno)}
                    helperText={touched.mobileno && errors.mobileno}
                  />
                </Box>
                <Box p={1}>
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Box>

                <Box p={1}>
                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    {...getFieldProps("password")}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                  />
                </Box>

                <Box p={1}>
                  <TextField
                    fullWidth
                    id="confirmpassword"
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    {...getFieldProps("confirmpassword")}
                    error={Boolean(
                      touched.confirmpassword && errors.confirmpassword
                    )}
                    helperText={
                      touched.confirmpassword && errors.confirmpassword
                    }
                  />
                </Box>
                <Box p={1}>
                  <TextField
                    fullWidth
                    id="file"
                    variant="outlined"
                    type="file"
                    {...getFieldProps("file")}
                    error={Boolean(touched.file && errors.file)}
                    helperText={touched.file && errors.file}
                  />
                </Box>
                <Box p={1}>
                  <FormGroup>
                    <FormControlLabel
                      value={true}
                      control={<Checkbox />}
                      label="Accept Terms & Conditions"
                      {...getFieldProps("acceptedTerms")}
                    />
                    <h5
                      style={{
                        color: "red",
                        alignSelf: "start",
                        fontFamily: "inherit",
                      }}
                    >
                      {touched.acceptedTerms && errors.acceptedTerms}
                    </h5>
                  </FormGroup>
                </Box>
                <Box p={1}>
                  <Button
                    fullWidth
                    size="large"
                    type="submit"
                    color="secondary"
                    variant="contained"
                  >
                    <Link to="/auth/login" variant="sh6"></Link>
                    Register
                  </Button>
                </Box>
              </Form>
              <Box p={1}>
                <Typography color="textSecondary" variant="body1">
                  Already have an Account ? &nbsp;
                  <Link to="/auth/login" variant="h6">
                    Login
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </FormikProvider>
  );
};

export default Register;













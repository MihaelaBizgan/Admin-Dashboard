import * as React from "react";
import "./register.scss";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, firestore } from "../../firebase"; // Assuming you have already set up your Firebase configuration and imported the necessary modules
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://skov.com/">
        Skov A/S
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Register() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password, company, code)
      .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;
        console.log(user);

        // Store the user data in Firestore
        const userCollectionRef = collection(firestore, "users");
        const userData = {
          email: user.email,
          company: company,
          code: code,
        };
        addDoc(userCollectionRef, userData)
          .then(() => {
            console.log("User data stored in Firestore");
          })
          .catch((error) => {
            console.error("Error storing user data in Firestore: ", error);
          });
        dispatch({ type: "REGISTER", payload: user });
        toast.success(
          "Registration successful! You will now be redirected to the login page.",
          {
            onClose: () => {
              navigate("/");
            },
          }
        );
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        setError(true);
      });
  };

  return (
    <div className="register">
      <div onSubmit={handleRegister}>
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: "100vh" }}>
            <CssBaseline />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "#004370" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Register
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    type="email"
                    placeholder="email"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <Typography color="error">
                      Please enter a valid email address.
                    </Typography>
                  )}

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="company"
                    label="Company"
                    type="text"
                    id="company"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="code"
                    label="Email code referral"
                    type="text"
                    id="code"
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Keep this device signed in"
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onSubmit={handleRegister}
                  >
                    Register
                  </Button>

                  <Grid container>
                    <Grid item style={{ textAlign: "center" }}>
                      <span style={{ fontSize: "15px", textAlign: "center" }}>
                        {"Do you have an account?"}
                        {"   "}
                        <Link to="/login" style={{ textAlign: "center" }}>
                          <a href="/login">Sign in here!</a>
                        </Link>
                      </span>
                    </Grid>
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: "url(../images/house-overview-full.png)",
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "left",
              }}
            />
          </Grid>
        </ThemeProvider>
      </div>
    </div>
  );
}

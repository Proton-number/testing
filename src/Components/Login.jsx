import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login({ userName, setUserName, handleSignIn, authenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate("/Home");
    }
  }, [authenticated, navigate]);

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1 }}
      sx={{
        background:
          "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,253,123,1) 100%)",
        padding: "40px",
        borderRadius: "10px",
      }}
    >
      <Stack spacing={4}>
        <Typography variant="h4"> LOGIN</Typography>
        <TextField
          type="name"
          placeholder="Type in name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <Button
          onClick={handleSignIn}
          variant="contained"
          endIcon={<GoogleIcon />}
        >
          {" "}
          Sign in with{" "}
        </Button>
      </Stack>
    </Box>
  );
}

export default Login;

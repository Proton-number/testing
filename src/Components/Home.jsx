import React, { useState, useEffect } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./config/firebase";
import { motion } from "framer-motion";

function Home({ displayedValue, setAuthenticated }) {
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      setAuthenticated(false);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1 }}
    >
      <Typography variant="h5">
        Hi, <b>{displayedValue}</b> you are logged in as:
      </Typography>

      <Stack direction="row" sx={{ alignItems: "center" }} spacing={4}>
        <Typography variant="h6">{localStorage.getItem("email")}</Typography>{" "}
        <Box
          component="img"
          src={localStorage.getItem("profilePic")}
          sx={{ borderRadius: "50%" }}
        />
      </Stack>
      <Button variant="contained" color="error" onClick={logOut}>
        Logout
      </Button>
    </Box>
  );
}

export default Home;

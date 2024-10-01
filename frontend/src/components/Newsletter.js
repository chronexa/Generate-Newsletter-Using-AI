import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Button, TextField } from "@mui/material";

const Newsletter = () => {
  const [responseText, setResponseText] = useState("");
  const [message, setMessage] = useState("");

  // Fetch response from the backend
  const fetchResponse = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    };

    try {
      const response = await fetch("/api/chatbot/", requestOptions);
      const data = await response.json();
      setResponseText(data.outputs[0].outputs[0].results.message.data.text);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  useEffect(() => {
    // Optionally fetch on component mount
    fetchResponse();
  }, []);

  return (
    <Container
      sx={{
        width: "100%", // Set the width to 70% of the page
        marginTop: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1e1e1e",
          padding: 3,
          borderRadius: 3,
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#ffffff", fontWeight: "bold", textAlign: "center" }}
        >
          Response from Server
        </Typography>

        {/* Text field for message input */}
        <TextField
          label="Enter your message"
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)} // Update the message state
          sx={{
            backgroundColor: "#2b2b2b",
            borderRadius: 2,
            marginBottom: 3,
            input: { color: "#ffffff" },
          }}
          InputProps={{
            style: { color: "#ffffff" },
          }}
        />

        {/* Displaying the response text */}
        <Typography
          variant="body1"
          sx={{ color: "#ffffff", textAlign: "center", marginTop: 2 }}
        >
          {responseText || "Loading response..."}
        </Typography>

        {/* Refresh Button */}
        <Button
          onClick={fetchResponse}
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#007BFF",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
            borderRadius: 2,
            paddingY: 1.5,
            fontWeight: "bold",
            marginTop: "15px",
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Newsletter;

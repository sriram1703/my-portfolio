import { Box, Container, Grid, Typography, Divider, Paper } from "@mui/material";
import React from "react";
import Techstack from "./Techstack";
import "aos/dist/aos.css";
import AOS from "aos";
import Particles from "../librabryCode/Particles";

function Skills() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: "ease-in-out", // Type of animation
      once: true, // Run animation only once
    });
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Particles Background */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#FF416C", "#ffffff"]}
          particleCount={150}
          particleSpread={8}
          speed={0.2}
          particleBaseSize={90}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </Box>

      {/* Main Content */}
      <Container sx={{ position: "relative", zIndex: 1, textAlign: "start" }}>
        <Paper
          elevation={4}
          sx={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            padding: { xs: 4, md: 6 },
            borderRadius: "15px",
            textAlign: "start",
            color: "white",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              background: "linear-gradient(90deg, #FF416C, #FF4B2B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
              mb: 3,
              textTransform: "uppercase",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
            }}
          >
            Skills & Technologies
          </Typography>

          <Divider
            sx={{
              width: { xs: "100px", lg: "280px" },
              height: "4px",
              backgroundColor: "#FF416C",
              // mx: "auto",
              mb: 4,
            }}
          />

          {/* Introduction */}
          <Typography
            data-aos="zoom-in"
            variant="h6"
            sx={{
              color: "white",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.2rem" },
              mb: 3,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Hi, I'm{" "}
            <span
              style={{
                color: "#FF416C",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              Sriram 👋
            </span>
            , a passionate React.js Developer dedicated to building modern, scalable, and high-performing web applications.
          </Typography>

          {/* Skills Section */}
          <Grid container spacing={3} justifyContent="start">
            <Grid item xs={12} md={12}>
              <Box data-aos="zoom-in">
                {[
                  {
                    icon: "🚀",
                    title: "Responsive UI Development",
                    desc: "I craft pixel-perfect, mobile-friendly designs that adapt seamlessly across devices using MUI, CSS, and modern design principles.",
                  },
                  {
                    icon: "⚡",
                    title: "Efficient State Management",
                    desc: "I leverage Redux to efficiently manage application state, ensuring scalability and maintainability.",
                  },
                  {
                    icon: "🔗",
                    title: "Advanced React Functionality",
                    desc: "I have deep expertise in React Hooks, optimizing performance, and handling complex UI logic efficiently.",
                  },
                  {
                    icon: "🛠️",
                    title: "Problem-Solving in JavaScript",
                    desc: "Whether it's API integrations, asynchronous operations, or dynamic data handling, I bring robust JavaScript solutions to the table.",
                  },
                ].map((skill, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      color: "white",
                      lineHeight: 1.6,
                      mb: 2,
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    <span
                      style={{
                        color: "#FF416C",
                        fontFamily: "cursive",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                      }}
                    >
                      {skill.icon} {skill.title}
                    </span>{" "}
                    – {skill.desc}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Techstack Section */}
        <Box sx={{ mt: 5 }} data-aos="fade-up">
          <Techstack />
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;

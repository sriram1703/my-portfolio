import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Typography, Box, Grid } from "@mui/material";
import pic from "../Images/pic.jpg";
import "../csscomponents/Home.css";
import ShinyText from "../librabryCode/ShinyText";
import content from "../AllContents/contents.json";

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    // Function to scroll down by 20% of the viewport height
    const scrollDown = () => {
        window.scrollBy({
            top: window.innerHeight * 3, // 20% of the viewport height
            behavior: "smooth", // Smooth scrolling effect
        });
    };

    return (
        <Container
            sx={{
                textAlign: "start",
                minHeight: { xs: "70vh", sm: "90vh", md: "90vh", lg: "90vh" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: { xs: "50px", md: "80px" },
                padding: { xs: "20px", md: "0px" },
            }}
        >
            <Grid container spacing={4} alignItems="center">
                {/* Left Side: Text Content */}
                <Grid item lg={6} xs={12}>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            color: "white",
                            fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "55px" },
                            textAlign: { xs: "start", lg: "start" },
                        }}
                    >
                        {content.name}
                    </Typography>

                    <Box data-aos="fade-left">
                        <ShinyText text=" A Passionate React.js Developer ⚡" disabled={false} speed={3} className="custom-class" />
                    </Box>

                    <Typography
                        data-aos="fade-right"
                        variant="body1"
                        sx={{
                            color: "lightgray",
                            mt: 2,
                            lineHeight: "30px",
                            textAlign: { xs: "start", lg: "start" },
                        }}
                    >
                        I build scalable and high-performing web applications using modern
                        technologies like React, 🎨{" "}
                        <span style={{ color: "orange", fontWeight: "bold" }}>UI Frameworks</span>{" "}
                        – Expertise in Material-UI, and Bootstrap. Let's create something amazing together!
                    </Typography>

                    <Box mt={3} sx={{ textAlign: { xs: "start", lg: "start" } }}>
                        <button className="cta" onClick={scrollDown}> {/* Attach function here */}
                            <span>{content.contact} &nbsp;&nbsp;&nbsp; &nbsp;</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </Box>
                </Grid>

                {/* Right Side: Image */}
                <Grid item lg={6} xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    <Box
                        sx={{
                            borderRadius: "50%",
                            overflow: "hidden",
                            width: { xs: "180px", sm: "250px", md: "300px", lg: "400px" },
                            height: { xs: "180px", sm: "250px", md: "300px", lg: "400px" },
                        }}
                    >
                        <img src={pic} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Home;

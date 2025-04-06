import { Box, Typography, Stack, IconButton, Container } from "@mui/material";
import { Phone, Email, WhatsApp, LocationOn } from "@mui/icons-material";
import Noise from "../librabryCode/Noise";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                py: 8,
                color: "white",
                textAlign:{xs:'start',lg:'center'},
            }}
        >
            <div style={{ width: '100%', height: 'auto', position: 'relative', overflow: 'hidden', textAlign:{xs:'center',lg:'center'}, padding: '50px 0px' }}>
                <Noise
                    patternSize={250}
                    patternScaleX={1}
                    patternScaleY={1}
                    patternRefreshInterval={2}
                    patternAlpha={15}
                />
                {/* Title and Subtitle */}
                <Container maxWidth="md">
                    <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem",textAlign:'center' } }}>
                        <span style={{ color: 'rgb(255, 65, 108' }}>C</span>ontact
                    </Typography>
                    <Typography fontWeight="bold" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
                        Looking for New Opportunities!
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.8, mb: 4, fontSize: { xs: "1rem", md: "1.25rem" } }}>
                        I'm actively seeking exciting opportunities where I can contribute my skills and grow as a developer.
                        If you're hiring or know of a great opportunity, let's connect!
                    </Typography>

                </Container>

                {/* Contact Details */}
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={4}
                        justifyContent="center"
                        alignItems="center"
                    >
                        {/* Phone */}
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <IconButton sx={{ color: "#4CAF50", fontSize: "1rem", "&:hover": { color: "#66BB6A" } }}>
                                <Phone fontSize="large" />
                            </IconButton>
                            <Typography variant="h6">+91 8124738291</Typography>
                        </Stack>

                        {/* Email */}
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <IconButton sx={{ color: "#FF5722", fontSize: "1rem", "&:hover": { color: "#FF7043" } }}>
                                <Email fontSize="large" />
                            </IconButton>
                            <Typography variant="h6">mmpsriram@gmail.com</Typography>
                        </Stack>

                        {/* WhatsApp */}
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <IconButton sx={{ color: "#25D366", fontSize: "2rem", "&:hover": { color: "#4CAF50" } }}>
                                <WhatsApp fontSize="large" />
                            </IconButton>
                            <Typography variant="h6">+91 8124738291</Typography>
                        </Stack>

                        {/* Location */}
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <IconButton sx={{ color: "#03A9F4", fontSize: "2rem", "&:hover": { color: "#29B6F6" } }}>
                                <LocationOn fontSize="large" />
                            </IconButton>
                            <Typography variant="h6">Rajapalayam</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <IconButton sx={{ color: "#03A9F4", fontSize: "2rem", "&:hover": { color: "#29B6F6" } }}>
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                            <Typography variant="h6">LinkedIn</Typography>
                        </Stack>
                    </Stack>
                </Container>
            </div>

        </Box>
    );
};

export default ContactSection;

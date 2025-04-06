import { Box, Typography, Stack, IconButton, Container, Grid } from "@mui/material";
import { Phone, Email, WhatsApp, LocationOn } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Noise from "../librabryCode/Noise";

const ContactSection = () => {
    return (
        <Box sx={{ width: "99%", color: "white", position: "relative" }}>
            <Noise
                patternSize={250}
                patternScaleX={1}
                patternScaleY={1}
                patternRefreshInterval={2}
                patternAlpha={20}
            />

            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        fontSize: { xs: "2rem", md: "3.5rem" },
                        textAlign: { xs: "center", md: "center" },
                        color: "#FF416C",
                        paddingTop:'30px'
                    }}
                >
                    Contact
                </Typography>

                <Typography
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        fontSize: { xs: "1.8rem", md: "2.5rem" },
                        textAlign: { xs: "center", md: "center" },
                        color: "#ffffff"
                    }}
                >
                    Looking for New Opportunities!
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        opacity: 0.8,
                        mb: 6,
                        maxWidth: "auto",
                        textAlign: { xs: "center", md: "center" },
                        fontSize: { xs: "1rem", md: "1.25rem" }
                    }}
                >
                    I'm actively seeking exciting opportunities where I can contribute my skills and grow as a developer.
                    If you're hiring or know of a great opportunity, let's connect!
                </Typography>

                <Box
                    sx={{
                        backdropFilter: "blur(10px)",
                        borderRadius: 4,
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        background: "rgba(255, 255, 255, 0.05)",
                        px: { xs: 3, md: 5 },
                        py: { xs: 4, md: 5 },
                        maxWidth: 'auto'
                    }}
                >
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <ContactItem icon={<Phone />} label="+91 8124738291" color="#4CAF50" />
                            <ContactItem icon={<Email />} label="mmpsriram@gmail.com" color="#FF5722" />
                            <ContactItem icon={<WhatsApp />} label="+91 8124738291" color="#25D366" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <ContactItem icon={<LocationOn />} label="Rajapalayam" color="#03A9F4" />
                            <ContactItem icon={<LinkedInIcon />} label="LinkedIn" color="#0A66C2" />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

const ContactItem = ({ icon, label, color }) => (
    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
        <IconButton sx={{ color, fontSize: "1.5rem", "&:hover": { color } }}>
            {icon}
        </IconButton>
        <Typography variant="h6" sx={{ color: "white" }}>{label}</Typography>
    </Stack>
);

export default ContactSection;

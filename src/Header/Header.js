import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Toolbar, Typography, Button } from '@mui/material';
const navItems = ['Home', 'Skills',"Projects"];

function DrawerAppBar({ scrollToSection, homeRef, skillRef,contactRef }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    if (section === 'Home') {
      scrollToSection(homeRef);
    } else if (section === 'Skills') {
      scrollToSection(skillRef);
    }
    else if(section==='Contact')
    {
      scrollToSection(contactRef)
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "rgba(34, 34, 34, 0.95)" : "transparent",
        transition: "all 0.3s ease-in-out",
        boxShadow: scrolled ? "0px 4px 10px rgba(0, 0, 0, 0.3)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <CssBaseline />
      <Box sx={{paddingLeft:{xs:'10px',sm:'40px',md:'40px',lg:'40px'},paddingRight:'40px'}}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Side - Logo */}
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "24px", sm: "30px" },
              fontWeight: "bold",
              color: 'rgb(215, 51, 122)',
            }}
          >
            Sriram
          </Typography>

          {/* Right Side - Navigation */}
          <Box sx={{ display: "flex", gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "white",
                  fontSize: { xs: "14px", sm: "16px" },
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  transition: "0.3s",
                  "&:hover": { color: "rgb(215, 51, 122)" },
                }}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

DrawerAppBar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  homeRef: PropTypes.object.isRequired,
  aboutRef: PropTypes.object.isRequired,
};

export default DrawerAppBar;

import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'Skills', 'Contact'];

function DrawerAppBar({ scrollToSection, homeRef, skillRef, contactRef }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (section) => {
    if (section === 'Home') {
      scrollToSection(homeRef);
    } else if (section === 'Skills') {
      scrollToSection(skillRef);
    } else if (section === 'Contact') {
      scrollToSection(contactRef);
    }
    setMobileOpen(false); // close drawer
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'left',
        width: 250,
        height: '100%',
        backgroundColor: '#000',
        color: 'white',
        px: 2,
        py: 4,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: 'rgb(215, 51, 122)' }}>
        Sriram
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => handleNavClick(item)}
              sx={{
                color: 'white',
                '&:hover': { color: 'rgb(215, 51, 122)' },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          backgroundColor: scrolled ? 'rgba(34, 34, 34, 0.95)' : 'transparent',
          transition: 'all 0.3s ease-in-out',
          boxShadow: scrolled ? '0px 4px 10px rgba(0, 0, 0, 0.3)' : 'none',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 5 } }}>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '24px', sm: '30px' },
              fontWeight: 'bold',
              color: 'rgb(215, 51, 122)',
            }}
          >
            Sriram
          </Typography>

          {/* Hamburger Menu Icon - visible only on mobile */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Menu Items */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: 'white',
                  fontSize: { xs: '14px', sm: '16px' },
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  transition: '0.3s',
                  '&:hover': { color: 'rgb(215, 51, 122)' },
                }}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { backgroundColor: '#000' } }} // makes drawer black
      >
        {drawer}
      </Drawer>
    </>
  );
}

DrawerAppBar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  homeRef: PropTypes.object.isRequired,
  skillRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};

export default DrawerAppBar;

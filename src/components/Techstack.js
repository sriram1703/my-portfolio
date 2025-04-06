import React from "react";
import { Container, Grid, useMediaQuery, useTheme, Box, IconButton } from "@mui/material";
import { SiMui, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Techstack() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const sliderRef = React.useRef(null);
  
  const allIcons = [
    { Icon: FaHtml5, key: "html", color: "#E34F26", bg: "rgba(227, 79, 38, 0.15)" },
    { Icon: FaCss3, key: "css", color: "#1572B6", bg: "rgba(21, 114, 182, 0.15)" },
    { Icon: SiMui, key: "mui", color: "#007FFF", bg: "rgba(0, 127, 255, 0.15)" },
    { Icon: IoLogoJavascript, key: "js", color: "#F7DF1E", bg: "rgba(247, 223, 30, 0.15)" },
    { Icon: SiTypescript, key: "ts", color: "#3178C6", bg: "rgba(49, 120, 198, 0.15)" },
    { Icon: RiReactjsLine, key: "react", color: "#61DAFB", bg: "rgba(97, 218, 251, 0.15)" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px"
  };

  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();

  if (isMobile) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
        <Box sx={{
          width: '100%',
          borderRadius: 4,
          p: 3,
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.18)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          position: 'relative'
        }}>
          <IconButton 
            onClick={previous}
            sx={{
              position: 'absolute',
              left: -16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              color: 'white',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(4px)',
              '&:hover': { background: 'rgba(255,255,255,0.3)' },
              width: 40,
              height: 40
            }}
          >
            <RiArrowLeftSLine size={24} />
          </IconButton>
          
          <Slider ref={sliderRef} {...settings}>
            {allIcons.map(({ Icon, key, color, bg }) => (
              <Box key={key} sx={{ p: 1, display: 'flex', justifyContent: 'center' }}>
                <Box sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  background: bg,
                  backdropFilter: 'blur(4px)',
                  boxShadow: `0 6px 20px ${color}20`,
                  border: `1px solid ${color}30`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    boxShadow: `0 12px 24px ${color}40`
                  }
                }}>
                  <Icon 
                    size={36} 
                    color={color} 
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }} 
                  />
                </Box>
              </Box>
            ))}
          </Slider>
          
          <IconButton 
            onClick={next}
            sx={{
              position: 'absolute',
              right: -16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              color: 'white',
              background: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(4px)',
              '&:hover': { background: 'rgba(255,255,255,0.3)' },
              width: 40,
              height: 40
            }}
          >
            <RiArrowRightSLine size={24} />
          </IconButton>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{
        width: '100%',
        borderRadius: 4,
        p: 4,
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.18)',
        border: '1px solid rgba(255, 255, 255, 0.12)'
      }}>
        <Grid container spacing={3} justifyContent="center">
          {allIcons.map(({ Icon, key, color, bg }) => (
            <Grid item xs={4} sm={2} key={key} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{
                width: 120,
                height: 120,
                borderRadius: '50%',
                background: bg,
                backdropFilter: 'blur(4px)',
                boxShadow: `0 6px 20px ${color}20`,
                border: `1px solid ${color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.15)',
                  boxShadow: `0 16px 32px ${color}40`,
                  '& svg': {
                    transform: 'scale(1.2)'
                  }
                }
              }}>
                <Icon 
                  size={44} 
                  color={color} 
                  style={{ 
                    transition: 'all 0.3s ease',
                    filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.2))' 
                  }} 
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Techstack;
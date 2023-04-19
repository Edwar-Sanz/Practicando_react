import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";

const particlesConfig = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 200,
      },
    },
    color: {
      value: "#000000",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 3,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: false,
        speed: 3.5,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 7,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 4569.7,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 350,
        duration: 0.6,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

function Home() {
  useEffect(() => {
    window.particlesJS("particles-js", particlesConfig);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Grid
        container
        justifyContent={"center"}
        position={"fixed"}
        marginTop={"340px"}
      >
        <Grid
          item
          style={{ boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.75)" }}
          xs={10}
          backgroundColor={"#fff"}
          padding={"0px 24px"}
          textAlign={"center"}
        >
          <h1 style={{ marginTop: "30px", fontSize: "42px" }}>
            Bienvenido, Soy Edwar.
          </h1>
          <br />
          <h2 style={{ marginBottom: "30px" }}>
            
            Apasionado de la tecnología y las inversiones.
          </h2>
        </Grid>
      </Grid>
      <div id="particles-js" style={{ width: "99.8vw", height: "150vh" }}></div>
    </div>
  );
}
export default Home;

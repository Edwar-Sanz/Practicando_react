import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function DrawerAppBar({ children }) {
  const { window } = children;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
 
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const buttonStyles = {
    transition: "background-Color 0.5s",
    color: "#ffff",
    height: "100%",
    width: "100%",
    textDecoration: "none",
    outline: "none",
    '&:hover': {
      backgroundColor: 'red',
    },
    '&:active': {
      backgroundColor: 'yellow',
    }
  };

  const [activeButton, setActiveButton] = React.useState("");
  const handleActiveButton = (button) => {
    setActiveButton(button);
  };
  

  return (
    <Box
      sx={{
        display: "flex",
        height: "3vw",
        width: "100%",
        marginTop: { xs: "25vw", sm: "15vw", md: "9vw" }
        
      }}
    >
      <AppBar
        component="nav"
        position="fixed"
        sx={{ height: "3vw", width: "100%" }}
        
      >
        <Toolbar
          sx={{ height: "3vw", width: "100%", backgroundColor: "#2c3e50" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: { xs: "none", sm: "grid" },
              gridTemplateColumns: "repeat(4, 1fr)",
              height: "100%",
              width: "100%",
              
            }}
          >
            <Button sx={{ ...buttonStyles, backgroundColor: activeButton === "home" ? "#16a085" : "" }} component={Link} to="/" onClick={() => handleActiveButton("home")}>
              Home
            </Button>

            <Button sx={{ ...buttonStyles, backgroundColor: activeButton === "portfolio" ? "#16a085" : "" }} component={Link} to="/portfolio" onClick={() => handleActiveButton("portfolio")}>
              Portfolio
            </Button>

            <Button sx={{ ...buttonStyles, backgroundColor: activeButton === "contact" ? "#16a085" : "" }} component={Link} to="/contact" onClick={() => handleActiveButton("contact")}>
              Contact
            </Button>

            <Button sx={{ ...buttonStyles, backgroundColor: activeButton === "about" ? "#16a085" : "" }} component={Link} to="/about" onClick={() => handleActiveButton("about")}>
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ height: "7vw" }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Divider />
            <List>
              <ListItem disablePadding component={Link} to="/">
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"home"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding component={Link} to="/portfolio">
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Portfolio"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding component={Link} to="/contact">
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"Contact"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding component={Link} to="/about">
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={"About"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
      {children}
    </Box>
  );
}

export default DrawerAppBar;

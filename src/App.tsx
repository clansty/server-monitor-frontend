import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  LightMode as LightModeIcon,
  Nightlight as NightlightIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

import ThemeModeContext from "./store/theme";
import routes from "./routes";
import CPU from "./views/CPU";
import Memory from "./views/Memory";
import Network from "./views/Network";
import { Main, AppBar, DrawerHeader, HeaderArea } from "./App.styles";

const drawerWidth = 240;

export default function App() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const theme = useTheme();
  const themeMode = React.useContext(ThemeModeContext);

  // 切换 Drawer 的开关
  const toggleDrawer = (tmp: boolean) => {
    setOpen(tmp);
  };

  // 编程式导航，并且切换样式表示选中当前导航
  const handleListItemClick = (
    e: React.MouseEvent<HTMLDivElement>,
    path: string,
    index: number
  ) => {
    setSelectedIndex(index);
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => toggleDrawer(true)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <HeaderArea>
            <Typography variant="h6" noWrap component="div">
              Server monitor
            </Typography>
            <IconButton
              sx={{ ml: 1 }}
              onClick={themeMode.toggleThemeMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <NightlightIcon />
              ) : (
                <LightModeIcon />
              )}
            </IconButton>
          </HeaderArea>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={() => toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map((item, index) => (
            <ListItemButton
              key={item.path}
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, item.path, index)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<CPU />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/network" element={<Network />} />
        </Routes>
      </Main>
    </Box>
  );
}

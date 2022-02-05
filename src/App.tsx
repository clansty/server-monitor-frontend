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
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import routes from "./routes";
import CPU from "./views/CPU";
import Memory from "./views/Memory";
import Network from "./views/Network";
import { Main, AppBar, DrawerHeader } from "./App.styles";

const drawerWidth = 240;

export default function App() {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
          {/* <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography> */}
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

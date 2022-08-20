import { Divider, Drawer, List, Toolbar, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { SideBarItems } from "./SideBarItems";

export const SideBar = () => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  return (
    <Box component="nav" sx={{ width: { sm: "240px" }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {notes.map((note) => (
            <SideBarItems key={note.id} {...note} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
import { Box } from "@mui/system";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, py: 12, px: 4 }}>
        {children}
      </Box>
    </Box>
  );
};

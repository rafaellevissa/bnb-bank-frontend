import { Divider, List, Toolbar, Typography } from "@mui/material";
import { Group } from "@mui/icons-material";
import ListItemLink from "../../ListItemLink";
import LogOut from "../Logout";

import { DrawerProps } from "./types";
import { CustomDrawer } from "./styles";

export default function SideBar(props: DrawerProps) {
  return (
    <CustomDrawer width={props.width} variant="permanent" anchor="left">
      <Toolbar sx={{ alignItems: "center" }}>
        <Typography align="center" variant="subtitle1" sx={{ mt: 1, ml: 5 }}>
          BNB Bank
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItemLink to="/" primary="Balance" icon={<Group />} isCollapsed />
        <ListItemLink
          to="/purchases"
          primary="Expenses"
          icon={<Group />}
          isCollapsed
        />
        <ListItemLink
          to="/checks"
          primary="Checks"
          icon={<Group />}
          isCollapsed
        />
      </List>
      <Divider />
      <Toolbar sx={{ flexGrow: 1 }} />
      <Divider />
      <LogOut />
    </CustomDrawer>
  );
}

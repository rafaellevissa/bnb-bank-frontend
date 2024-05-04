import { Divider, List, Toolbar, Typography } from "@mui/material";
import { Balance, Savings, ShoppingBasket } from "@mui/icons-material";
import ListItemLink from "../../ListItemLink";
import LogOut from "../Logout";

import { DrawerProps } from "./types";
import { CustomDrawer } from "./styles";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function SideBar(props: DrawerProps) {
  const { item } = useSelector<any, any>((item) => item.auth);

  const permissions = useMemo(() => {
    if (!Array.isArray(item?.permissions)) {
      return [];
    }

    return item?.permissions.map((permission: any) => permission.name);
  }, [item]);

  const can = (targetPermission: string) =>
    permissions.find((permission: string) => permission === targetPermission);

  return (
    <CustomDrawer width={props.width} variant="permanent" anchor="left">
      <Toolbar sx={{ alignItems: "center" }}>
        <Typography align="center" variant="subtitle1" sx={{ mt: 1, ml: 5 }}>
          BNB Bank
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {can("transactions.view") && (
          <ListItemLink
            to="/"
            primary="Balance"
            icon={<Balance />}
            isCollapsed
          />
        )}
        {can("purchase.view") && (
          <ListItemLink
            to="/purchases"
            primary="Expenses"
            icon={<ShoppingBasket />}
            isCollapsed
          />
        )}
        {can("checks.view") && (
          <ListItemLink
            to="/checks"
            primary="Checks"
            icon={<Savings />}
            isCollapsed
          />
        )}
        {can("checks.list") && (
          <ListItemLink
            to="/checks-control"
            primary="Checks"
            icon={<Savings />}
            isCollapsed
          />
        )}
      </List>
      <Divider />
      <Toolbar sx={{ flexGrow: 1 }} />
      <Divider />
      <LogOut />
    </CustomDrawer>
  );
}

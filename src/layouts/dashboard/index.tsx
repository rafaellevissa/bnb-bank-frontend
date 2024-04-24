import * as React from "react";

import { Box } from "@mui/material";
import { Appbar, Sidebar } from "../../components/Dashboard";

interface DashboardLayoutProps {}
const Layout: React.FunctionComponent<DashboardLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Box style={{ display: "flex" }}>
      <Appbar width={240} />
      <Sidebar width={240} />
      <Box sx={{ flex: 1, mt: 8 }}>
        <>{children}</>
      </Box>
    </Box>
  );
};

export default Layout;

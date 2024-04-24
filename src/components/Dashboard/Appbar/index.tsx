import { Toolbar } from "@mui/material";

import { CustomAppBar } from "./styles";
import { AppBarProps } from "./types";

export default function Appbar(props: AppBarProps) {
  return (
    <CustomAppBar width={props.width}>
      <Toolbar />
    </CustomAppBar>
  );
}

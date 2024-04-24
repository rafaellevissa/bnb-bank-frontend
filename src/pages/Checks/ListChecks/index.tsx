import React, { useEffect, useState } from "react";
import {
  Divider,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Fab,
  Box,
  Tab,
  Grid,
  ListItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Layout from "../../../layouts/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../../store/modules/check/actions";
import { Check } from "../../../store/modules/check/types";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Link } from "react-router-dom";
import { fDate } from "../../../utils/date";

export const ListChecksPage = () => {
  const dispatch = useDispatch();
  const { item, error, loading } = useSelector<any, any>((item) => item.check);
  const [tab, setTab] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  useEffect(() => {
    dispatch(list());
  }, []);

  const NotFound = () => {
    return (
      <Grid container justifyContent="center" p={2}>
        <Grid item>
          <Box>
            <ListItem>
              <ListItemText primary="No Records Found" />
            </ListItem>
          </Box>
        </Grid>
      </Grid>
    );
  };

  const getTabByStatus = (status: string) => {
    if (!item?.length) {
      return <NotFound />;
    }

    return (
      <List>
        {item
          ?.filter((check: Check) => check.status === status)
          .map((check: Check, index: number) => (
            <Box key={index}>
              <Divider />
              <ListItemButton>
                <ListItemText
                  primary={check.description}
                  secondary={fDate(check.created_at)}
                />
                <ListItemText
                  secondary={
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      ${check.amount}
                    </Typography>
                  }
                  sx={{ textAlign: "right" }}
                />
              </ListItemButton>
              <Divider />
            </Box>
          ))}
      </List>
    );
  };

  return (
    <Layout>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Pending" value="1" />
            <Tab label="Accepted" value="2" />
            <Tab label="Rejected" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">{getTabByStatus("pending")}</TabPanel>
        <TabPanel value="2">{getTabByStatus("accepted")}</TabPanel>
        <TabPanel value="3">{getTabByStatus("rejected")}</TabPanel>
      </TabContext>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
        }}
      >
        <Link to="/new-check">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
    </Layout>
  );
};

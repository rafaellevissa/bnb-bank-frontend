import React, { useEffect } from "react";
import {
  Divider,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Fab,
  Box,
  ListItem,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Layout from "../../../layouts/dashboard";

import { useDispatch, useSelector } from "react-redux";
import { list } from "../../../store/modules/purchase/actions";
import { Purchase } from "../../../store/modules/purchase/types";
import { Link } from "react-router-dom";
import { fDate } from "../../../utils/date";

export const ListPurchasesPage = () => {
  const dispatch = useDispatch();
  const { item, error, loading } = useSelector<any, any>(
    (item) => item.purchase
  );

  useEffect(() => {
    dispatch(list());
  }, []);

  const Purchases = () => {
    return (
      <List>
        {item?.map((purchase: Purchase, index: number) => (
          <Box key={index}>
            <Divider />
            <ListItemButton>
              <ListItemText
                primary={purchase.description}
                secondary={fDate(purchase.created_at)}
              />
              <ListItemText
                secondary={
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "red" }}
                  >
                    ${purchase.amount}
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

  return (
    <Layout>
      {!item?.length && <NotFound />}

      {!!item?.length && <Purchases />}

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
        }}
      >
        <Link to="/new-purchase">
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </Link>
      </div>
    </Layout>
  );
};

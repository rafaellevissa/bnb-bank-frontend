import React, { useEffect } from "react";
import {
  Divider,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Fab,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Layout from "../../../layouts/dashboard";

import { useDispatch, useSelector } from "react-redux";
import { list } from "../../../store/modules/purchase/actions";
import { Purchase } from "../../../store/modules/purchase/types";
import { Link } from "react-router-dom";

export const ListPurchasesPage = () => {
  const dispatch = useDispatch();
  const { item, error, loading } = useSelector<any, any>(
    (item) => item.purchase
  );

  useEffect(() => {
    dispatch(list());
  }, []);

  return (
    <Layout>
      <List>
        {item?.map((purchase: Purchase, index: number) => (
          <Box key={index}>
            <Divider />
            <ListItemButton>
              <ListItemText
                primary={purchase.description}
                secondary="2024-04-21"
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

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
        }}
      >
        <Link to="/new-purchase">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
    </Layout>
  );
};

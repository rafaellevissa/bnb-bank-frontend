import React, { useEffect } from "react";
import {
  Divider,
  Typography,
  Box,
  IconButton,
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Grid,
  ListItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Layout from "../../../layouts/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../../store/modules/transaction/actions";
import { Transaction } from "../../../store/modules/transaction/types";
import { fDate } from "../../../utils/date";
import { Link } from "react-router-dom";

export const ListTransactionsPage = () => {
  const dispatch = useDispatch();
  const { item, error, loading } = useSelector<any, any>(
    (item) => item.transaction
  );

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

  const Transactions = () => {
    if (!item?.transactions) {
      return <NotFound />;
    }

    return item?.transactions?.map((transaction: Transaction) => (
      <>
        <Divider />
        <ListItemButton>
          <ListItemText
            primary={transaction.description}
            secondary={fDate(transaction.created_at)}
          />
          <ListItemText
            secondary={
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  color: transaction.type === "incoming" ? "black" : "red",
                }}
              >
                $
                {transaction.type === "incoming"
                  ? transaction.amount
                  : -transaction.amount}
              </Typography>
            }
            sx={{ textAlign: "right" }}
          />
        </ListItemButton>
        <Divider />
      </>
    ));
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#2799fb",
          padding: 2,
        }}
      >
        <Box>
          <Typography variant="h6">Balance</Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            ${item?.balance || 0}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#daefff",
            padding: 2,
          }}
        >
          <Box>
            <Typography variant="h6">Incomes</Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              ${item?.incomingAmount | 0}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/new-check">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Link>
            <Typography variant="subtitle1">Deposit a Check</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f1f9fe",
            padding: 2,
          }}
        >
          <Box>
            <Typography variant="h6">Expenses</Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              ${item?.outcomingAmount | 0}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Link to="/new-purchase">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Link>
            <Typography variant="subtitle1">Purchase</Typography>
          </Box>
        </Box>
      </Box>

      <List
        subheader={
          <ListSubheader component="h1" id="nested-list-subheader">
            List Transactions
          </ListSubheader>
        }
      >
        <Transactions />
      </List>
    </Layout>
  );
};

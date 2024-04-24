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
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Layout from "../../../layouts/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { list } from "../../../store/modules/transaction/actions";
import { Transaction } from "../../../store/modules/transaction/types";

export const ListTransactionsPage = () => {
  const dispatch = useDispatch();
  const { item, error, loading } = useSelector<any, any>(
    (item) => item.transaction
  );

  useEffect(() => {
    dispatch(list());
  }, []);

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
            ${item?.blance || 0}
          </Typography>
        </Box>
        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"pt"}>
            <DatePicker views={["month", "year"]} />
          </LocalizationProvider>
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
            <IconButton>
              <AddIcon />
            </IconButton>
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
            <IconButton>
              <AddIcon />
            </IconButton>
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
        {Array.isArray(item) ||
          item?.transactions?.map((transaction: Transaction) => (
            <>
              <Divider />
              <ListItemButton>
                <ListItemText
                  primary={transaction.description}
                  secondary="2024-04-21"
                />
                <ListItemText
                  secondary={
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "bold",
                        color:
                          transaction.type === "incoming" ? "black" : "red",
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
          ))}
      </List>
      {/* <Snackbar open={error} autoHideDuration={300}>
        <Alert severity="error" sx={{ width: "100%" }}>
          error
        </Alert>
      </Snackbar> */}
    </Layout>
  );
};

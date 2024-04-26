import React from "react";
import {
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import Layout from "../../../layouts/dashboard";
import { styled } from "@mui/system";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const data = [
  {
    id: 1,
    customer: "John Doe",
    customerEmail: "john@example.com",
    account: "123456",
    reportedAmount: "$100",
    image: "https://via.placeholder.com/50",
  },
  {
    id: 2,
    customer: "Jane Smith",
    customerEmail: "jane@example.com",
    account: "654321",
    reportedAmount: "$200",
    image: "https://via.placeholder.com/50",
  },
];

const UserDetailsContainer = styled(Box)`
  padding: 20px;
`;

interface ActionButtonProps {
  reject?: boolean;
}

const ActionButton = styled(Button)<ActionButtonProps>`
  && {
    margin-right: 10px;
    border: 1px solid blue;
    color: ${(props) => (props.reject ? "blue" : "white")};
    background-color: ${(props) => (props.reject ? "white" : "blue")};
  }
`;

export function ChecksApprovePage() {
  const id = "1";

  const selectedItem = data.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <Typography variant="h6">Item not found!</Typography>;
  }

  const { customer, customerEmail, account, reportedAmount, image } =
    selectedItem;

  return (
    <Layout>
      <UserDetailsContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {customer}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Customer: ${customer}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={`Customer Email: ${customerEmail}`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Account: ${account}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={`Reported Amount: ${reportedAmount}`}
                    />
                  </ListItem>
                </List>
                <Box mt={2} mb={2}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4D-WMxOXg_-sTs7LpoLrJp7Z4GxV03_H1MxeOdMOyg&s"
                    width={500}
                    height={200}
                  />
                </Box>
                <Divider style={{ margin: "20px 0" }} />
                <div>
                  <ActionButton
                    variant="contained"
                    reject
                    startIcon={<CancelOutlinedIcon />}
                  >
                    Reject
                  </ActionButton>
                  <ActionButton
                    variant="contained"
                    color="primary"
                    startIcon={<CheckCircleOutlineIcon />}
                  >
                    Accept
                  </ActionButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </UserDetailsContainer>
    </Layout>
  );
}

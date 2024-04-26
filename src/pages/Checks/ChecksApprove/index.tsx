import React, { useEffect } from "react";
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
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { find } from "../../../store/modules/check/actions";

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
  const params = useParams();

  const dispatch = useDispatch();
  const { item, error, loading } = useSelector<any, any>((item) => item.check);

  useEffect(() => {
    dispatch(find(params.id ?? ""));
  }, [params]);

  const NotFound = () => {
    return (
      <Grid container justifyContent="center" p={2}>
        <Grid item>
          <Box>
            <ListItem>
              <ListItemText primary="Item not Found" />
            </ListItem>
          </Box>
        </Grid>
      </Grid>
    );
  };

  console.log(item);

  return (
    <Layout>
      {!item && <NotFound />}

      {item && (
        <UserDetailsContainer>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {item?.user?.name}
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Customer: ${item?.user?.name}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={`Customer Email: ${item?.user?.email}`}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <AccountCircleIcon />
                      </ListItemIcon>
                      <ListItemText primary={`Account: ${item?.user?.id}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <MonetizationOnIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={`Reported Amount: ${item?.amount}`}
                      />
                    </ListItem>
                  </List>
                  <Box mt={2} mb={2}>
                    <img
                      src={`data:image/png;base64, ${item?.pictureBase64}`}
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
      )}
    </Layout>
  );
}

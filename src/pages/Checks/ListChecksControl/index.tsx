import React, { useEffect } from "react";
import {
  Divider,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Grid,
  ListItem,
  styled,
} from "@mui/material";
import Layout from "../../../layouts/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { listControl } from "../../../store/modules/check/actions";
import { Check } from "../../../store/modules/check/types";

import { fDate } from "../../../utils/date";
import { Link } from "react-router-dom";

export const ListChecksControlPage = () => {
  const dispatch = useDispatch();
  const { item, error, loading } = useSelector<any, any>((item) => item.check);

  useEffect(() => {
    dispatch(listControl());
  }, []);

  const Redirect = styled(Link)`
    text-decoration: none;
    color: inherit;
  `;

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

      {!!item?.length && (
        <List>
          {item?.map((check: Check, index: number) => (
            <Redirect to={`/checks-approve/${check.id}`} key={index}>
              <Box>
                <Divider />
                <ListItemButton>
                  <ListItemText
                    primary={check.description}
                    secondary={fDate(check.created_at)}
                  />
                  <ListItemText
                    secondary={
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        ${check.amount}
                      </Typography>
                    }
                    sx={{ textAlign: "right" }}
                  />
                </ListItemButton>
                <Divider />
              </Box>
            </Redirect>
          ))}
        </List>
      )}
    </Layout>
  );
};

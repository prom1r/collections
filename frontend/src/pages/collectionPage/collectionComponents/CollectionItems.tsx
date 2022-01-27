import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { NewCardItem } from "./NewCardItem";
import { getMyItems } from "../../../api/itemsService";
import { CardItem } from "../../../components/CardItem";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  maxWidth: "250px",
  boxShadow: "0px 0px 0px 0px",
}));

export const CollectionItems = (props) => {
  const [dateFrom, setValueFrom] = React.useState<any>(null);
  const [dateTo, setValueTo] = React.useState<any>(null);
  const [date, setDate] = React.useState("");
  const [items, setMyItems] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleChangeSortFrom = async (newValue) => {
    setValueFrom(newValue);
  };

  const handleChangeSortTo = (newValue) => {
    setValueTo(newValue);
  };

  const onClear = async () => {
    setValueFrom(null);
    setValueTo(null);
    await getMyItems(props.collectionId, date, "", "").then((result) => {
      setMyItems(result);
    });
  };

  const onSent = async () => {
    if (dateTo < dateFrom && dateTo !== null) {
      alert("Please make sure the information you enter is correct!");
      onClear();
      return;
    }
    if (dateFrom == null && dateTo == null) {
      await getMyItems(props.collectionId, date, "", "").then((result) => {
        setMyItems(result);
      });
    } else if (dateFrom && dateTo == null) {
      await getMyItems(
        props.collectionId,
        date,
        dateFrom.toISOString(),
        ""
      ).then((result) => {
        setMyItems(result);
      });
    } else if (dateFrom == null && dateTo) {
      await getMyItems(props.collectionId, date, "", dateTo.toISOString()).then(
        (result) => {
          setMyItems(result);
        }
      );
    } else {
      await getMyItems(
        props.collectionId,
        date,
        dateFrom.toISOString(),
        dateTo.toISOString()
      ).then((result) => {
        setMyItems(result);
      });
    }
  };

  const handleChange = async (event) => {
    setDate(event.target.value);
  };

  const handleCreate = (newCollection) => {
    items.splice(0, 0, newCollection);
    const newMyItems = items.slice();
    setMyItems(newMyItems);
  };

  useEffect(() => {
    (async () => {
      try {
        getMyItems(props.collectionId).then((result) => {
          setMyItems(result);
        });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          boxShadow: 10,
          height: "6rem",
          alignItems: "center",
          gap: "20px",
          paddingRight: "20px",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            minWidth: "120px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="sort">Sort</InputLabel>
            <Select
              labelId="sort"
              id="sort"
              value={date}
              label="Date"
              onChange={handleChange}
            >
              <MenuItem value={"1"}>Newest First</MenuItem>
              <MenuItem value={"-1"}>Oldest First</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="From"
                inputFormat="MM/dd/yyyy"
                value={dateFrom}
                onChange={handleChangeSortFrom}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
          <Box
            sx={{
              paddingLeft: "20px",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="To"
                inputFormat="MM/dd/yyyy"
                value={dateTo}
                onChange={handleChangeSortTo}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </Box>
        <Button onClick={onSent} variant="outlined">
          FILTER
        </Button>
      </Box>
      <Box
        sx={{
          paddingTop: "50px",
          paddingLeft: "10px",
          width: "auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {items.map((item) => (
          <Item key={item._id}>
            <Link style={{ textDecoration: "none" }} to={`/item/${item._id}`}>
              <CardItem item={item} />
            </Link>
          </Item>
        ))}

        <NewCardItem
          collectionId={props.collectionId}
          onCreate={handleCreate}
          collectionTitle={props.collectionTitle}
          customField={props.customField}
          userId={props.userId}
        />

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Your item has been successfully added!"
          key={"onCreate"}
        />
      </Box>
    </>
  );
};

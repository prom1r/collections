import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { FormikControl } from "../../../components/formikControl/FormikControl";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import { Dropzone } from "../../../components/Dropzone";
import { postNewItems, putUpdateItem } from "../../../api/itemsService";
import { Item } from "../../../models/item";
import Grid from "@mui/material/Grid";
import { CustomFieldControl } from "../../../components/customFieldControl/CustomFieldControl";
import { useAuth0 } from "@auth0/auth0-react";
import { Tags } from "./Tags";
import { getTags } from "../../../api/tagsService";
import Typography from "@mui/material/Typography";

export const FormNewItems = (props) => {
  const [url, setUrl] = useState(null);
  const [tags, setTags] = useState([]);
  const { getAccessTokenSilently, user } = useAuth0();
  const buttonName = props.item ? "Edit" : "Save";
  const defaultImg =
    "https://images.unsplash.com/photo-1619560820102-31f5b04c049a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80";

  useEffect(() => {
    getTags().then((result) => {
      setTags(result);
    });
  }, []);

  let initialValues;

  if (!props.item) {
    initialValues = {
      title: "",
      customField: props.customField,
      tags: [],
    };
  } else {
    initialValues = {
      title: `${props.item.title}`,
      customField: props.item.customField.map((x) => ({ ...x })),
      tags: props.item.tags,
    };
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
  });

  const handleFileUpload = (url) => {
    setUrl(url);
  };

  const onSubmit = async (values: Item) => {
    try {
      if (!props.item) {
        const date = new Date();
        values.collectionId = props.collectionId;
        values.srcImg = url || defaultImg;
        values.collectionTitle = props.collectionTitle;
        values.date = date;
        values.userNickname = user.nickname;
        const token = await getAccessTokenSilently();
        const item = await postNewItems(values, token);
        props.onCreate(item);
      } else {
        values.srcImg = url || props.item.srcImg;
        const token = await getAccessTokenSilently();
        const item = await putUpdateItem(token, values, props.item._id);
        props.onClose(item);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="text"
            label="Title:"
            name="title"
            style="form-control"
          />
          <Dropzone onUpload={handleFileUpload} />
          {props.customField.map((item, index) => (
            <Grid container spacing={2} key={index}>
              <Grid item xs={4}>
                <h3>{item.name}</h3>
              </Grid>
              <Grid item xs={8}>
                <CustomFieldControl
                  index={index}
                  item={item}
                  formik={formik}
                  values={formik.values.customField[index].value}
                />
              </Grid>
            </Grid>
          ))}

          <Typography variant="h6" component="div" textAlign="center">
            TAGS
          </Typography>

          <Grid xs={16}>
            <Tags formik={formik} tags={tags} />
          </Grid>
          <Button type="submit" disabled={!formik.isValid} variant="outlined">
            {buttonName}
          </Button>
          <Button
            sx={{
              marginLeft: 3,
            }}
            onClick={props.handleClose}
            variant="outlined"
          >
            Close
          </Button>
        </Form>
      )}
    </Formik>
  );
};

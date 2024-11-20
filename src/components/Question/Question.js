import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { FormLabel } from "@mui/material";

import { QuestionApi } from "../../data/Api";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    borderColor: "greenyellow",
    backgroundColor: "green",
  },
}));
const ITEM_HEIGHT = 800;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function Question() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  console.log(title);
  const [imageUrl, setImageUrl] = useState([]);
  console.log(imageUrl);
  const [tags, setTags] = useState([]);
  console.log(tags);

  const [categoryId, setCategoryId] = useState("66c1e807633b0d005a99f37f");
  const [userId, setUserId] = useState("6721cd52f2cddd00277c5ba0");
  const [description, setDescription] = useState("");
  console.log(description);
  const [loading, setLoading] = useState(false);

  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };
  const uploadimage = async (e) => {
    const files = Array.from(e.target.files);
    const base64Images = await Promise.all(
      files.map((file) => convert2base64(file))
    );
    setImageUrl(base64Images);
  };

  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };
  //   const uploadimage = async (e) => {
  //     const file = e.target.files[0];
  //     const base64 = await convert2base64(file);
  //     setImageUrl(base64);
  //     // setImage({ ...image, image: base64 });
  //     console.log(base64);
  //     // const reader = new FileReader();
  //   };
  //   const convert2base64 = (file) => {
  //     return new Promise((resolve, reject) => {
  //       const fileReader = new FileReader();
  //       fileReader.readAsDataURL(file);
  //       fileReader.onload = () => {
  //         resolve(fileReader.result);
  //       };
  //       fileReader.onerror = (error) => {
  //         reject(error);
  //       };
  //     });
  //   };
  //////

  /////
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      title: title,
      description: description,
      userId: userId,
      categoryId: categoryId,
      tags: tags,
      imageUrl: imageUrl,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(QuestionApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setTitle("");
          setCategoryId("");
          setUserId("");
          setDescription("");
          setTags([]);
          setImageUrl([]);

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Failed to create a post, check your network connection or input the correct textfields"
        );
      });
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ask Questions
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  label="   Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Description"
                  name="lastName"
                  autoComplete="lname"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="regNumber"
                  name=""
                  autoComplete="phoneNumber"
                  label="Tags (comma separated)"
                  value={tags.join(", ")}
                  onChange={(e) => setTags(e.target.value.split(","))}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel className="mb-2">Upload File</FormLabel>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="passport"
                  // label="Passport Photo"
                  id="passport"
                  autoComplete="passportPhoto"
                  hidden
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={uploadimage}
                />
              </Grid>
            </Grid>

            {loading ? (
              <>
                <div>Loading...</div>
              </>
            ) : (
              <div>
                <Button
                  type="submit"
                  onSubmit={handleLoader}
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Ask Question
                </Button>
                <ToastContainer />
              </div>
            )}
          </form>
        </div>
      </Container>
    </div>
  );
}

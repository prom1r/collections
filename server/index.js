const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");
const database = require("./database/init");
const { searchItems } = require("./database/itemsService");
const bodyParser = require("body-parser");
const uploadAzure = require("./blob/blob");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const collectionRoutes = require("./routes/collectionsRoutes");
const itemsRoutes = require("./routes/itemsRoutes");
const tagsRoutes = require("./routes/tagsRoutes");
const usersRoutes = require("./routes/usersRoutes");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/collections", collectionRoutes);
app.use("/items", itemsRoutes);
app.use("/tags", tagsRoutes);
app.use("/users", usersRoutes);

app.post("/upload", upload.single("image"), async (req, res) => {
  const url = await uploadAzure(req.file);
  res.json({ url });
});

app.get("/results/:searchItems", async (req, res) => {
  const items = await searchItems(req.params.searchItems);
  res.json(items);
});

app.listen(port, () => {
  console.log("start server");
});

const express = require("express");
const router = express.Router();
const { checkJwt } = require("../auth0/jwtChecker");
const { isAdmin } = require("../database/user");
const { getAllTags } = require("../database/tagsService");
const {
  postItems,
  getMyItemIdDb,
  getRecentItems,
  getIdDbItem,
  updateItem,
  itemsLike,
  itemsUnlike,
} = require("../database/itemsService");
const { postNewComment, getComment } = require("../database/commentsService");

router.post("/new", checkJwt, async (req, res) => {
  const userId = req.user.sub;
  const newItems = req.body.values;
  newItems.userId = userId;
  const newItemUser = await postItems(newItems);
  res.json(newItemUser);
});

router.get("/recent", async (req, res) => {
  const recentItems = await getRecentItems();
  res.json(recentItems);
});

router.put("/:id", checkJwt, async (req, res) => {
  const itemId = req.params.id;
  const newItem = req.body.values;
  const userAuth0Idd = req.user.sub;
  const userItemId = await getIdDbItem(itemId).then((res) => res.userId);
  if (userAuth0Idd == userItemId || isAdmin(req.user)) {
    const updateItemUser = await updateItem(newItem, itemId);
    res.json(updateItemUser);
  }
});

router.get("/tags", async (req, res) => {
  const tagsAll = await getAllTags();
  res.json(tagsAll);
});

router.get("/:id", async (req, res) => {
  const myItemIdDb = await getMyItemIdDb(req.params.id);
  res.json(myItemIdDb);
});

router.put("/:id/like", checkJwt, async (req, res) => {
  const itemId = req.params.id;
  const userAuth0Idd = req.user.sub;
  const response = await itemsLike(itemId, userAuth0Idd).then(
    (res) => res.like
  );
  res.json(response);
});

router.put("/:id/unlike", checkJwt, async (req, res) => {
  const itemId = req.params.id;
  const userAuth0Idd = req.user.sub;
  const response = await itemsUnlike(itemId, userAuth0Idd).then(
    (res) => res.like
  );
  res.json(response);
});

router.post("/comments", checkJwt, async (req, res) => {
  const newComment = await postNewComment(req.body.values);
  res.json(newComment);
});

router.get("/:id/comments", async (req, res) => {
  const itemId = req.params.id;
  const comments = await getComment(itemId);
  res.json(comments);
});

module.exports = router;

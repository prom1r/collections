const express = require("express");
const router = express.Router();
const {
  getMyCollections,
  getTopCollections,
  getMyCollectionsIdDb,
  postCollections,
  getIdDbCollection,
  updateCollection,
  deleteCollection,
} = require("../database/collectionService");
const { checkJwt } = require("../auth0/jwtChecker");
const { isAdmin } = require("../database/user");
const {
  getIdDbItem,
  deleteItem,
  getItemsForm,
  getItems,
} = require("../database/itemsService");

router.get("/my", checkJwt, async (req, res) => {
  const myCollections = await getMyCollections(req.user.sub);
  res.json(myCollections);
});

router.get("/top", async (req, res) => {
  const collectionsTop = await getTopCollections();
  res.json(collectionsTop);
});

router.get("/:id", async (req, res) => {
  const myCollectionId = await getMyCollectionsIdDb(req.params.id);
  res.json(myCollectionId);
});

router.post("/my", checkJwt, async (req, res) => {
  const newCollectionsValues = req.body.values;
  const userId = req.user.sub;
  newCollectionsValues.userId = userId;
  const newCollections = await postCollections(newCollectionsValues);
  res.json(newCollections);
});

router.put("/:id", checkJwt, async (req, res) => {
  const userAuth0Id = req.user.sub;
  const userId = req.params.id;
  const userCollectionId = await getIdDbCollection(userId).then(
    (res) => res.userId
  );
  const newCollections = req.body.values;
  if (userAuth0Id == userCollectionId || isAdmin(req.user)) {
    const updateCollectionUser = await updateCollection(newCollections, userId);
    res.json(updateCollectionUser);
  }
});

router.get("/:id/items", async (req, res) => {
  const sort = Number(req.query.date_sort);

  if (req.query.date_from || req.query.date_to) {
    const itemsForm = await getItemsForm(
      req.params.id,
      req.query.date_from,
      req.query.date_to,
      sort
    );
    res.json(itemsForm);
    return;
  }

  if (!req.query.date_from && !req.query.date_to) {
    const itemsForm = await getItems(req.params.id, sort);
    res.json(itemsForm);
    return;
  }
});

router.delete("/:id", checkJwt, async (req, res) => {
  const userAuth0Idd = req.user.sub;
  const userId = req.params.id;
  const userCollectionId = await getIdDbCollection(userId).then(
    (res) => res.userId
  );
  if (userAuth0Idd == userCollectionId || isAdmin(req.user)) {
    const deleteCollectionUser = await deleteCollection(userId);
    res.json(deleteCollectionUser);
  }
});

router.delete("/:collectionId/item/:itemId", checkJwt, async (req, res) => {
  const itemId = req.params.itemId;
  const collectionId = req.params.collectionId;
  const userAuth0Idd = req.user.sub;
  const userItemId = await getIdDbItem(itemId).then((res) => res.userId);
  if (userAuth0Idd == userItemId || isAdmin(req.user)) {
    const response = deleteItem(itemId, collectionId);
    res.json(response);
  }
});
module.exports = router;

const express = require("express");
const router = express.Router();
const { getMyCollections } = require("../../database/collectionService");
const { checkJwt } = require("../../auth0/jwtChecker");

router.get("/my", checkJwt, async (req, res) => {
  const myCollections = await getMyCollections(req.user.sub);
  res.json(myCollections);
});

module.exports = router;

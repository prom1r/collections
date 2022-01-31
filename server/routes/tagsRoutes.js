const express = require("express");
const { getTagCloud } = require("../database/tagsService");
const { searchItemsByTag } = require("../database/tagsService");
const router = express.Router();

router.get("/", async (req, res) => {
  const tags = await getTagCloud();
  const allOnlyTags = [];

  for (let elem of tags) {
    allOnlyTags.push(elem.tags);
  }
  const result = [].concat(...allOnlyTags);

  const getTagsCount = result.reduce(function (acc, curr) {
    if (typeof acc[curr] == "undefined") {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  const response = [];

  for (let elem in getTagsCount) {
    let myObject = new Object();
    myObject.value = elem;
    myObject.count = getTagsCount[elem];
    response.push(myObject);
  }

  res.json(response);
});

router.get("/:tag", async (req, res) => {
  const tag = req.params.tag;
  const tags = await searchItemsByTag(tag);
  res.json(tags);
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { checkJwt } = require("../auth0/jwtChecker");
const { isAdmin } = require("../database/user");
const {
  getUsers,
  getUserRoles,
  assignRolesAdmin,
} = require("../auth0/usersService");

router.get("/", checkJwt, async (req, res) => {
  if (isAdmin(req.user)) {
    const allUsers = await getUsers();
    for (let user of allUsers) {
      const roles = await getUserRoles(user.user_id);
      const answer = roles.map(function (item) {
        return item.name;
      });
      user.roles = answer;
    }

    res.json(allUsers);
  }
});

router.post("/admin", checkJwt, async (req, res) => {
  const newItem = req.body.values;
  const userRoles = await assignRolesAdmin(newItem.user_id);
  res.json(userRoles);
});

module.exports = router;

const ManagementClient = require("auth0").ManagementClient;
const axios = require("axios");

const auth0 = new ManagementClient({
  domain: "dev-n4okh2r6.us.auth0.com",
  clientId: "JJRUmEdxrV9UuP5K1j7knlTbQq5XkwPU",
  clientSecret:
    "jgNJoQQejENAUCXD0X_j3etW2nvnK9xtzuNE3sozIvmksLf4Guoof1DEbjkJBBol",
  scope: "read:users update:users read:roles read:role_members",
});

const getUsers = async () => {
  return await auth0.getUsers();
};

const assignRoles = async (userId) => {
  await auth0.assignRolestoUser({ id: userId }, { roles: ["User"] });
};

const getUserRoles = async (userId) => {
  const roles = await auth0.getUserRoles({ id: userId });
  return roles;
};

module.exports = { getUsers, getUserRoles, assignRoles };

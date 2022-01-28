const AUTH0_ROLE =
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

const isAdmin = (user) => {
  if (!user) {
    return false;
  }
  const userRole = user[AUTH0_ROLE];
  return userRole.includes("Admin");
};

module.exports = { isAdmin };

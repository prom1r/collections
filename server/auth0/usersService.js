const ManagementClient = require('auth0').ManagementClient;

const auth0 = new ManagementClient({
    domain: 'dev-n4okh2r6.us.auth0.com',
    clientId: 'JJRUmEdxrV9UuP5K1j7knlTbQq5XkwPU',
    clientSecret: 'jgNJoQQejENAUCXD0X_j3etW2nvnK9xtzuNE3sozIvmksLf4Guoof1DEbjkJBBol',
    scope: 'read:users update:users',
});

const getUsers = async () => {
    return await auth0.getUsers();
}

module.exports = {getUsers};
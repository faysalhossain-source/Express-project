

const getAllUsers = (req, res) => {
    res.send("All users data");
};

const getUserById = (req, res) => {
    const id = req.params.id;
    res.send(`User data for ID: ${id}`);
};

const createUser = (req, res) => {
    const { name, position } = req.body;
    res.send(`User created: ${name} - ${position}`);
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};

const signIn = async (req, res) => {
  try {
    const { body: user } = req;
    res.send({ user });
  } catch (error) {
    res.send(error);
  }
};

const signUp = async (req, res) => {
  try {
    const { body: user } = req;
    res.send({ user });
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  signIn,
  signUp,
}

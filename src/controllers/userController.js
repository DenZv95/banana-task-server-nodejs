export const getUserProfile = (req, res) => {
  const user = {
    name: "ayaya",
    age: 25,
  };
  return res.json(user);
};

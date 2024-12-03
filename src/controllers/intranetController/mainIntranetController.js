const mainIntranetController = {
  login: (req, res) => {
    return res.render("./intranet/login/login");
  },
  myProfile: (req, res) => {
    return res.render("./intranet/myProfile/myProfile");
  },
};

module.exports = mainIntranetController;

const logger = (req, res, next) => {
  console.log(new Date().getFullYear() + " Logger");
  next();
};

module.exports = logger;

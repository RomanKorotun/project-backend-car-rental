const validateBody = (schema) => {
  const funct = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(400, error.message);
    }
    next();
  };
  return funct;
};

export default validateBody;

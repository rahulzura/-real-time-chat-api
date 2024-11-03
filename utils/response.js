export const sendSuccessResponse = async (data, res) => {
  return res.json(data);
};

export const sendErrorResponse = async (err, res) => {
  console.error(err);
  return res.status(err.statusCode ?? 500).json({ err: err.message });
};

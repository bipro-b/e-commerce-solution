export const gatewayAuth = (req, res, next) => {
  // Optional logging or token extraction
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
};

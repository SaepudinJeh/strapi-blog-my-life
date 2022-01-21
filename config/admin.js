module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dd11a22109b9c54d3021bb9ae873bfe1'),
  },
});

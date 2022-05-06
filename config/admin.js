module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7542ed4e979a0a731a4e570772d5fa32'),
  },
});

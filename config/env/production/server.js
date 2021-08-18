// https://strapi-test-doapps-5vrjy.ondigitalocean.app/

module.exports = ({ env }) => ({
  proxy: true,
  url: env("STRAPI_URL"),
  admin: {
    autoOpen: false,
  },
});

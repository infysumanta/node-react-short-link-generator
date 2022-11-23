const baseurl =
  process.env.NODE_ENV === "production"
    ? "/api/short"
    : "http://localhost:5000/api/short";
const apiUrls = {
  create: `${baseurl}/create`,
  hitLink: `${baseurl}/hit-link`,
  getLink: `${baseurl}/get`,
};

export default apiUrls;

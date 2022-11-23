const app = require("./app");
const { PORT } = require("./utils/constant");
require("./utils/dbConfig");

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

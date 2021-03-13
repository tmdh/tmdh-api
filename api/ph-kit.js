const axios = require("axios");
module.exports = async (_, res) => {
  try {
    const { data } = await axios({
      method: "post",
      url: "https://api.producthunt.com/v2/api/graphql",
      data: {
        query: "query { post(id: 287859) {votesCount}}",
      },
      headers: {
        Authorization: `Bearer ${process.env.PH_TOKEN}`,
      },
    });
    res.json({
      votesCount: data.data.post.votesCount,
    });
  } catch (e) {
    res.json({
      votesCount: -1,
    });
  }
};

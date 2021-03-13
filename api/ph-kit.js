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
      subject: "producthunt",
      status: data.data.post.votesCount.toString(),
      color: "orange",
    });
  } catch (e) {
    res.json({
      subject: "producthunt",
      status: "unavailable",
      color: "gray",
    });
  }
};

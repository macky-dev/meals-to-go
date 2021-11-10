const { mocks: placesMock, addMockImage } = require("./mock");
const url = require("url");

module.exports.placesRequest = (request, response) => {
  const { location } = url.parse(request.url, true).query;
  const data = placesMock[location.toLowerCase()];

  if (data) {
    data.results = data.results.map(addMockImage);
  }
  response.json(data);
};

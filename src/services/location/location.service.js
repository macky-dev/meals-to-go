import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (location = "Toronto") => {
  return new Promise((resolve, reject) => {
    const mock = locations[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;
  return {
    lat,
    lng,
    viewport: geometry.viewport,
  };
};

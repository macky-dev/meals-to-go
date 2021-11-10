const localHost =
  "http://ae45-136-158-8-34.ngrok.io/mealstogo-app-96bba/us-central1";
const liveHost =
  "http://ae45-136-158-8-34.ngrok.io/mealstogo-app-96bba/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;

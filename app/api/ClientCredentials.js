import fetch from "node-fetch";

const apiKey = "5f0dbac9fea90c710105eefaaec46918";
const sharedSecret = "a940dbc9d662b81304a6798fb9188512";
const refreshToken = "402b989e71a7cb076c3bcb12b2ba34b3-1722498115";
let accessToken = "access-token-to-refresh";

const postData = {
  client_id: apiKey,
  client_secret: sharedSecret,
  refresh_token: refreshToken,
  access_token: accessToken,
};

const response = await fetch(
  "https://ectora.myshopify.com/admin/oauth/access_token.json",
  {
    method: "post",
    body: JSON.stringify(postData),
    headers: { "Content-Type": "application/json" },
  },
);

const data = await response.json();
accessToken = data["access_token"];

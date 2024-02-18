// token.js

export let token;

if (typeof window !== "undefined") {
  // Check if we're in a browser environment
  token = localStorage.getItem("tourismToken");
}

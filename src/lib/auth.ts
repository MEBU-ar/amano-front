export function logout() {
  localStorage.removeItem("amano-token");
  window.location.href = "/";
}

import "./email";

if (import.meta.env.PROD) {
  void import("./stats");
}

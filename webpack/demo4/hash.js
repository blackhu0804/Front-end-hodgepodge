(async () => {
  const { createHash } = await import("node:crypto");

  const hash = createHash("sha256");

  hash.update("some data to hash");
  console.log(hash.digest("hex"));
})();

module.exports = {
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@styles/(.*)$",
    "^@components/(.*)$",
    "^@pages/(.*)$",
    "^@store/(.*)$",
    "^@queries/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

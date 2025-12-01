module.exports = {
  NitroModules: {
    createHybridObject: () => ({
      init: () => {},
      add: () => {},
      createHybridNavigationBar: () => {},
      createHybridStatusBar: () => ({}),
    }),
  },
  responsive: {
    size: () => Number,
    height: () => Number,
  },
  mergeObjects: (obj1, obj2) => ({ ...obj1, ...obj2 }),
  isNotEmpty: () => Boolean,
  isEmpty: () => Boolean,
};

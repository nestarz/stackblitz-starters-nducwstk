export const createLoaderPlugin = (options) => {
  return {
    name: 'name',
    resolveId: (specifier, importer) => ({ id: 'react', external: false }),
    load: (id) => null,
  };
};

export default createLoaderPlugin;

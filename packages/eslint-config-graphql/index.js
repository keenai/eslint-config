module.exports = {
  plugins: [
    'graphql',
  ],
  rules: {
    'graphql/template-strings': ['error', {
      env: 'literal',
      schemaJsonFilepath: 'schema.json',
    }],
  },
};

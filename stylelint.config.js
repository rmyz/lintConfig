module.exports = {
  plugins: ['stylelint-prettier'],
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-recommended', 'stylelint-config-styled-components', 'stylelint-config-prettier'],
  rules: {},
};

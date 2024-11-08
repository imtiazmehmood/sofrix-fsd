module.exports = {
  eslint: {
    dirs: ['pages', 'components'],
    ignoreDuringBuilds: true,
    rules: {
      'react/no-unescaped-entities': 'off',  // Disables the rule
    },
  },
};

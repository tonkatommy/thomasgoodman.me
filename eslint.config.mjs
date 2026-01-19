import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**', 'coverage/**', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
  {
    rules: {
      // This rule blocks common/valid patterns like syncing localStorage + theme class in a client provider.
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]

export default eslintConfig

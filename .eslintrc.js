module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },

  env: {
    node: true,
  },

  extends: [
    'airbnb',
    'airbnb-typescript',
    '@typescript-eslint/parser',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  ignorePatterns: ['.eslintrc.js'],
  // Failed to load config "@typescript-eslint/parser" to extend from.
  // eslint가 .eslintrc.js파일이 구성에 포함되어 있지 않더라도 lint를 시도하기 때문에 오류가 발생합니다.

  rules: {
    'react/jsx-props-no-spreading': 'off',
    //  Error: Prop spreading is forbidden  react/jsx-props-no-spreading
    'react/react-in-jsx-scope': 'off',
    // 'React' must be in scope when using JSX 에러 지우기(Next.js)
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    // ts파일에서 tsx구문 허용(Next.js)
    'no-unused-vars': 'warn',
    // 정의 후 사용하지 않은 변수는 경고만 하기
    'no-console': 0,
    // console 사용하기
    'import/prefer-default-export': ['off'],
    // export const 문을 쓸때 에러를 내는 rule 해제
    'import/extensions': 0,
    // ts 파일을 불러오기 위해
  },
};

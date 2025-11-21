import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../schema.graphql',
  documents: 'src/graphql/operations/**/*.graphql',
  generates: {
    'src/graphql/generated/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
        scalars: {
          JSON: 'Record<string, unknown>',
          Date: 'string',
          Hash: 'string',
          GraphQLBigInt: 'string',
          GraphQLStringOrFloat: 'string | number'
        },
        defaultScalarType: 'unknown',
        nonOptionalTypename: true,
        skipTypename: false
      }
    }
  }
};

export default config;

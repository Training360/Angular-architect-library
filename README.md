# Angular-architect-library
Creating own libraries for Angular with Nx

## What is monorepos?
- [monorepo.tools](https://monorepo.tools/)
- [monorepo explanation](https://monorepo.tools/#what-is-a-monorepo)
- [monorepo magyarul](https://thecodingadventure.com/miert-monorepo/)

## Create a new Library
- [Library generator](https://nx.dev/nx-api/angular/generators/library)
- [Library schema](https://github.com/nrwl/nx/blob/master/packages/angular/src/generators/library/schema.json)
- Important switches:
  - --name: name of the library
  - --directory: directory of the library
  - --style: style of the library
  - --skipTsConfig: skip tsconfig
  - --skipFormat: skip prettier
  - --unitTestRunner: unit test runner
  - --linter: linter
  - --publishable: possibility to publish on npm
  - --buildable: incremental build
  - --importPath: import path

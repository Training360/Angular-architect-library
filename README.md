# Angular-architect-library
Creating own libraries for Angular with Nx

## What is monorepos?
- [monorepo.tools](https://monorepo.tools/)
- [monorepo explanation](https://monorepo.tools/#what-is-a-monorepo)
- [monorepo magyarul](https://thecodingadventure.com/miert-monorepo/)

## Create a monorepo
- `npx create-nx-workspace@latest library-app --preset angular-monorepo`

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
- Generate your library:
- `npx nx g @nx/angular:library ngc-form-controls --publishable --buildable --import-path=@cherryapp/form-controls`

## Adding dependencies to the Library
- `cd ngc-form-controls`
- Add packages to the package.json's peerDependencies (it needs for production):
```json
"peerDependencies": {
  "bootstrap": "^5.2.0",
  "font-awesome": "^4.7.0"
},
```
- Also add packages to the devDependencies of the parent project (for development):
```json
"devDependencies": {
  "bootstrap": "^5.2.0",
  "font-awesome": "^4.7.0"
},
```
- Import Bootstrap into the css:

## Run the project
- `npx nx run library-app:serve`
- Save it into the start script in the package.json file!

## Use the library in the app
- The path of the library from the tsconfig.base.json:
- `@cherryapp/form-controls`
- Import the component from the path:
```typescript
import { NgcFormControlsComponent } from '@cherryapp/form-controls';
// ...
imports: [
  // ...
  NgcFormControlsComponent,
],
```
- Place the component in the template:
```html
<div>
  <lib-ngc-form-controls></lib-ngc-form-controls>
</div>
```

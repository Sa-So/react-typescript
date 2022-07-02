# make changes in your package.json (highly recommend)
```
"test": "jest",
    "test:ci": "jest --ci --reporters=jest-junit --reporters=default",
    "test:coverage": "cross-env NODE_ENV=test jest --colors --coverage --collectCoverageFrom=\"./**/*.{ts,tsx}\"",
    "test-uncommited": "jest --onlyChanged",
    "test-watch": "jest --watch",
```
# Run tests related to changed files based on hg/git (uncommitted files):
```console
npx jest -o
```
# to test a specific component (using regex on describe)
```console
$ npm test -t 'Start-Checkout'
> cotf-template@1.0.14 test /Users/..
> jest "Start-Checkout"
Ran all test suites matching /Start-Checkout/i.
```
# if above doesn't work
```console
npx jest path/to/my-test.js
```
# if aboove doesn't work + you can add multiple file paths.
```console
npx jest --findRelatedTests path/to/fileA.js path/to/fileB.js
```
# mock local & session storage
```setupJest.ts
import 'jest-localstorage-mock'; 
```

# remember when mocking.
```js
// we don't care what the function is , or if it's doing what it needs to do etc.
// we just care about if it's getting imported correctly & being called when it needs to be called.
```

# snapshot testing mock data
```
// mockdata for snapshots so if you change it , snapshot test will fail even though everything is correct
```

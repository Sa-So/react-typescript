## Why Testing is important ?
- code is modular , so easily write tests 
- PR merge is easier
- - TDD approach , write as you make components

## Types of testing

### End to End 
- eg. selenium
### Unit Testing 
- Test a unit of code without external dependancies
### Integration Testing
- unit of code , but using external dependancies

## Jest & enzyme
- cra template
- cmd + d to get another terminal tab in same window of iTerm
- install dependencies
### change yarn to npm :)
```sh
yarn add -D enzyme enzyme-adapter-react-16 jest jest-enzyme
```
- -D for dev-dependancies
### config of enzyme is diff 
- but for cra it is easy.
```setupTests.js
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({
  adapter:new EnzymeAdapter(),
  disableLifecycleMEthods: true
});
```
### git commit -m "Basic config"

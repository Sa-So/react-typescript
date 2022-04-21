# jest
- Is a pain
- I diidn't wanna learn it , coz I don't like testing (no growth) but don't get me wrong here , I love automation , but this is like headless testing , meaning testing without a browser (I am more into end to end tests or which we can preview like selenium / maybe puppeteer too)
- I still wonder if we can automate some tasks on some1 else's website using this , but Ig the ans is plain no (maybe learn cypress ? but I need a headless / headful lol browser controller so that i can deploy this script on a cloud computer running linux) 
- I am learning it because I have no choice , but I am interested because some1 on some YT channel said every react dev should not Testing & should follow TDD approach so Ig I will learn it well ;)

- so jest alone cannot test react apps so we need a react testing library & we'll choose enzyme coz it's great ? (coz our project uses this lol), 
- npm i an adapter for enzyme for the react version you are using 

- TODO: learn snapshot testing .

# weird behaviours 
## happen when u use external packages...
- when you call shallow function from enzyme , it actually runs the component you provided as argument to it .


# Errors
## sessionstorage not defined 
- so I wrote my first testcase , this error was happening because when calling shallow function , it ran that component & it eventually was getting something from the session storage ! so It was showing an error , coz you are doing headless testing so no browser , so no local storage / session ;/

### Solution.
-  we can mock localstorage using ["jest-localstorage-mock"](https://www.npmjs.com/package/jest-localstorage-mock) !
-  we just have to import it or keep it in the setup files in package.json
-  idk what that action.update , dispatch methods they have used. 
### More Problems .
- Now the code to get an item works but we are not running the code which is setting the item ! & that is in some other universe inside some file.
- good thing i can search it with cmd+shift+f
- Still why would I import it here ? why not just create set our own items.?

# References
## Redux
https://medium.com/@lucksp_22012/dont-use-mock-store-use-your-real-store-b319d7e4e22e

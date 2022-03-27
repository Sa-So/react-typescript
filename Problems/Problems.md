# hello
- I often run into problems , some I solve & know why it worked , some I solve but don't know why it happened / how it got resolved & the 3rd category : I hope I will find their solutions some day !


# Working on someone else's Project
## 1. eslint 
- LF CRLF ?! wtf ?
- --fix doesn't work !

## 2. eslint + prettier
- prettier converts single quotes to double !
- prob change prettierrc to allow / convert everything to single quotes !

## 3. .tsconfig
- change everything ? or not ? most prob. 
- "paths" need to change for sure 
- so much extra time !

## 4. folder structure 
- why does every project have a diff struct !!
- why does my current proj always have trash struct ?
- okay , tell me how do I go from this struct to that .
### new (idk where 2 put things !)
- modules
  - common
    - components
    - pages
    - utils 
    - routes.js
  - verification
    - components
    - pages
    - utils 
    - routes.js
  - refill 
    - components
    - pages
    - utils
    - routes.js
### too many questions
 > I get it modules are features but , 99% of the time each module will have only 1 page !! , making folder for pages makes no sense
 > what is routes.js doing + why is it .js file ?!!
 > dillemma on where to put styles !! both ways hurt eg. if I store it in components it will get confusing , if I make a folder for each component it will be hard to import each component , exports * 3
 > do we have to make an index.ts ? which just imports everything from all the other files from folder ?
 > is routes.js index.ts here ?
 > 

## old (better one imo)
- src
  - assets 
  - common
  - pages
  - components
  - routes
  - ui-kit
  - redux
  - api/https

> tbh ther is no better structure it's just preference
> in this type of struct we make folders for each page , import components from all components and add routes in routes.ts
> but in new one we have to make components for each feature in same folder , & make a shared folder for common components , pages 




## 4. typescript is a pain.
- quickly testing out if a component works / displays or not takes hell lot of effort !!! arghgdh
- 



# React Bootsrap 
## 1 .tsx
- so I ran into an error on codesandbox saying type parameter not defined & it pointed towards <> (1st line of return !)
- changing the extension to .tsx made the error go brr

## 2. I was not destructuring Modal while importing from react-bootstrap !
- error was [error](https://www.google.com/search?q=Unexpected+token%2C+expected+%22%2C%22+(20%3A4)+18+%7C+%7D%3A+BasicModalProps)+%3D%3E+(+19+%7C+%3CModal+%3E+20+%7C+show%3D%7Bshow%7D+%7C+%5E+21+%7C+size%3D%7Bsize%7D+22+%7C+onHide%3D%7BonClose%7D+23+%7C+dialogClassName%3D%22common-modal%22&rlz=1C5CHFA_enIN873IN874&oq=Unexpected+token%2C+expected+%22%2C%22+(20%3A4)+18+%7C+%7D%3A+BasicModalProps)+%3D%3E+(+19+%7C+++%3CModal+%3E+20+%7C+++++show%3D%7Bshow%7D+%7C+++++%5E+21+%7C+++++size%3D%7Bsize%7D+22+%7C+++++onHide%3D%7BonClose%7D+23+%7C+++++dialogClassName%3D%22common-modal%22&aqs=chrome..69i57.329j0j7&sourceid=chrome&ie=UTF-8)

## 3. what is ModalHeader ? why doesn't it work ? Modal.Header works !

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
- generate types for me pls 
- TODO : create an auto importer ! please !
- like if I add a folder / file to it , it should get imported here...

## 5. node_modules
- the size of this thing gonna kill your disk so fast!
- TODO : create a program to look at all your dir in comp and delete node_modules if you haven't touched/modified the files since last month ! so this can be a cron job

## 6. pls don't run it , for more than a few secs
- how do i check if I am running it in docker ?

## wtf is nvm ?
-  their project might have been made on diff node version !
-  & js doesn't have virtualenv like python ;( we could source into !



# React Bootsrap 
## 1 .tsx
- error was [stackoverflow](https://stackoverflow.com/questions/57093103/type-argument-list-cannot-be-empty)
- so I ran into an error on codesandbox saying type parameter not defined & it pointed towards <> (1st line of return !)
- changing the extension to .tsx made the error go brr

## 2. I was not destructuring Modal while importing from react-bootstrap !
- error was [stackoverflow](https://stackoverflow.com/questions/52998987/parsing-error-unexpected-token-expected)
-[search term] : Unexpected token, expected "," (20:4) 18 | }: BasicModalProps) => ( 19 | <Modal > 20 | show={show} | ^ 21 | size={size} 22 | onHide={onClose} 23 | dialogClassName="common-modal"

## 3. what is ModalHeader ? why doesn't it work ? Modal.Header works !
  
## 4. React Bootstrap kinda doesn't work in csb , styles do not apply for some reason (react + ts + rbs)
- but [here in csb](https://codesandbox.io/s/react-bootstrap-demo-forked-8dd806?file=/src/App.js) they work !
  

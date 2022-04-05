# Context
- I had a project taking up a lot of storage
- I wanted to clear up some storage but without deleting that project ! 
# So I
- deleted the node_modules folder !
- I thought I am a chad 
# But 
- the folder still showed taking up 56 MB !
- but if you add up the storage of all files and folders it was about 2 MB !
# I was up for a challenge 
- I quickly viewed hidden files using shift + cmd + . to view the .git folder
# but
- the .git folder had more folders but not storage info !
- only one index file was taking 9 MB of storage & all other files were in 200-300 KB!
# what is taking space then ?
- i opened terminal at folder
- did an ls -l
```sh
total 17552
-rw-r--r--   1 sahilsoni  staff       21 Feb 15 20:19 HEAD
-rw-r--r--   1 sahilsoni  staff      330 Feb 15 20:19 config
-rw-r--r--   1 sahilsoni  staff       73 Feb 15 20:19 description
drwxr-xr-x  13 sahilsoni  staff      416 Feb 15 20:19 hooks
-rw-r--r--   1 sahilsoni  staff  8968849 Feb 15 20:20 index
drwxr-xr-x   3 sahilsoni  staff       96 Feb 15 20:19 info
drwxr-xr-x   4 sahilsoni  staff      128 Feb 15 20:19 logs
drwxr-xr-x   4 sahilsoni  staff      128 Feb 15 20:19 objects
-rw-r--r--   1 sahilsoni  staff      186 Feb 15 20:19 packed-refs
drwxr-xr-x   5 sahilsoni  staff      160 Feb 15 20:19 refs
```
- I was shocked ! It was just the index file taking up space!
- how is this taking 56 MB ?
```sh
cd ..
total 3664
-rw-r--r--   1 sahilsoni  staff     613 Feb 15 20:19 README.md
-rw-r--r--   1 sahilsoni  staff      81 Feb 15 20:19 jsconfig.json
-rw-r--r--   1 sahilsoni  staff  756115 Feb 15 20:53 package-lock.json
-rw-r--r--   1 sahilsoni  staff    1038 Feb 15 20:19 package.json
drwxr-xr-x   8 sahilsoni  staff     256 Feb 15 20:19 public
drwxr-xr-x  12 sahilsoni  staff     384 Feb 15 20:19 src
-rw-r--r--   1 sahilsoni  staff  557696 Feb 15 20:19 yarn-error.log
-rw-r--r--   1 sahilsoni  staff  544579 Feb 15 20:19 yarn.lock

```
# what is taking space ?
# how can I clear up .git folder without destroying it ? like let it contain remote maybe


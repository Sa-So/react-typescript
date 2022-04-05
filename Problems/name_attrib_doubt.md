# so I wanted the user to input a phone number
- so I changed type of my input to "tel"
- after doing that it could still accept alphabets.
- you could tackle that using various methods like pattern = regex / if RESTRICTED SYMBOLS etc.
# weird thing I noticed
- on the w3 website the number field showed me autocomplete !! with the numbers I have entered in the past.
- but on my own website it didn't !
# is name prop connected to autocomplete ?
- so I looked what was the difference in the code , I saw it had a name attrib
- & after putting (name="phone") in my code autocomplete started working correctly for me too !!!
# use ?
- I tried entering alphabets inside the w3 website & it takes them (without pattern) 
- & also shows them in autocomplete next time :/
- I mean what's the point of "input type="tel" name="phone" /" then ?????

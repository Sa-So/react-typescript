# get all unique Elements from an array .


## what would you use here ?
```ts
export const getUniqueElements = (arr: Iterable<unknown> | null | undefined) => 
  Array.from(new Set(arr));
```
## is this good ? (na it's bs if u have |null|undefined)
```ts
export const getUniqueElementsOfArray = 
<Type extends unknown>(arr:Type[]|null|undefined):Type[]|null|undefined => 
{ 
  if(arr === null || arr === undefined || arr.length === 0) 
    return arr;
  const setOfElements = new Set(arr) ; 
  return Array.from(setOfElements);
};
```

### what does !arr really check ?
- https://stackoverflow.com/a/44017547

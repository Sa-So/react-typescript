export function updateAndAppend<Type>(prev:Type[], updated:Type[]): Type[] {
  const arr = prev.filter(a=>
    (!updated.includes(a))); 
  arr.push(...updated);
  return arr;
}

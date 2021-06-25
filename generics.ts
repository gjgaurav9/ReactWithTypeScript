function addElementtoArray<T>(arrayOfElements: T[], element: T) {
  return [...arrayOfElements, element];
}

console.log(addElementtoArray([2, 3, 4], 10));

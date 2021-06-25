var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function addElementtoArray(arrayOfElements, element) {
    return __spreadArray(__spreadArray([], arrayOfElements), [element]);
}
console.log(addElementtoArray([2, 3, 4], 10));

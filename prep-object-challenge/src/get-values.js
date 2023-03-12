/* exported getValues */
function getValues(object) {
  const newArray = [];
  for (const x in object) {
    newArray.push(object[x]);
  }
  return newArray;
}

function list(names){ //names as a hash list[{name:john},{name:Dan}]
  let nameList = '';
  
  for (let x of names) {
    names.length == 1 ? nameList = x.name
    : names.indexOf(x) == names.length - 2 ? nameList += `${x.name} `
    : names.indexOf(x) == names.length - 1 ? nameList += `& ${x.name}`
    : nameList += `${x.name}, `;
  }
  return nameList;
}

function list(names){ //names as a hash list[{name:john},{name:Dan}]
  let nameList = '';
  
  for (let x of names) {
    names.length == 1 ? nameList = x.name
    : names.indexOf(x) == names.length - 2 ? nameList += `${x.name} ` //current and next line format so that last 2
    : names.indexOf(x) == names.length - 1 ? nameList += `& ${x.name}` //names are formatted as "name & name"
    : nameList += `${x.name}, `;
  }
  return nameList;
}

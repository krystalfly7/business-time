export function creatData(len) {
  var data = [];
  for (let i = 0; i < len; i++) {
    data.push({
      label: i < 10 ? ('0' + i) : i,
      value: i
    });
  }
  return data;
}

export function creatMonth(len) {
  let data = [];
  for (let i = 0; i < len; i++) {
    data.push({
      label: i < 9 ? ('0' + (i + 1)) : (i + 1),
      value: i
    });
  }
  return data;
}

export function creatYear(len) {
  let data = [];
  for (let i = 0; i < len; i++) {
    data.push({
      label: new Date().getFullYear() + i,
      value: i
    });
  }
  return data;
}

export function creatNewColDay(year, month) {
  console.log(year +':' + month);
  const seletedDate = new Date(year +'-' + month);
  const currentDaysNum = (new Date(seletedDate.getFullYear(), parseInt(seletedDate.getMonth() + 1), 0)).getDate();
  return creatMonth(currentDaysNum);
}

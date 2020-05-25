function fastestRoute() {
  //const from = [0, 0, 1];
  const from = [0, 1];
  //const to = [1, 2, 3];
  const to = [2, 3];
  const locationA = 0;
  const locationB = 1;
  //const locationA = 2;
  //const locationB = 3;
  const link = {};
  for (let i = 0; i < from.length; i++) {
    const from2 = from[i];
    const to2 = to[i];
    if (!link[from2]) {
      link[from2] = [];
    }
    if (!link[to2]) {
      link[to2] = [];
    }
    link[from2].push(to2);
    link[to2].push(from2);
  }
  let q = [locationA];
  let visited = {};
  visited[locationA] = true;
  let count = 0;
  while (q.length) {
    let check = false;
    let position = q.shift();
    if (position === locationB) {
      return count;
    }
    link[position].forEach((value) => {
      if (value === locationB) {
        check = true;
      }
      if (!visited[value]) {
        q.push(value);
        visited[value] = true;
      }
    });
    count++;
    if (check) return count;
  }
  return -1;
}
console.log(fastestRoute());

import { inherits } from "util";

function sortTeam(team) {
  if (!team || !Array.isArray(team))
    return []

  return team.sort((u1, u2) => u1.id - u2.id)

}

let team = [
  {
    name: 'a',
    id: 1
  },
  {
    name: 'b',
    id: 4
  },
  {
    name: 'c',
    id: 2
  },
  {
    name: 'd',
    id: 7
  }, {
    name: 'e',
    id: 9
  }, {
    name: 'f',
    id: 20
  }, {
    name: 'g',
    id: 14
  }, {
    name: 'h',
    id: 16
  }, {
    name: 'i',
    id: 10
  }, {
    name: 'j',
    id: 8
  },
]

// console.log('team', sortTeam(team));
// console.log(team.length);

// 0,1,2,3,4,  5,6,7,8,9

function binarySearc(arr, start, end, target) {
  if (target < arr[start] || target > arr[end]) {
    return -1
  }
  let length = end - start
  if (length === 1 && (arr[start] != target || arr[end] != target)) {
    return -1
  } else if (arr[start] === target) {
    return start
  }
  else if (arr[end] === target) {
    return end
  }

  mid = length / 2
  if (length % 2 === 0) {
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      start = start
      end = mid - 1
    }
    else {
      start = mid - 1
      end = end
    }
  }
  else {
    mid = Math.floor(mid)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] > target) {
      start = start
      end = mid - 1
    }
    else {
      start = mid + 1
      end = end
    }
  }
  return binarySearc(arr, start, end, target)
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log( binarySearc(arr,0,9,3))


function binarySearc(arr, start, end, target) {
  if (target < arr[start].id || target > arr[end].id) {
    return null
  }
  let length = end - start + 1
  if (length === 2 && (arr[start].id != target || arr[end].id != target)) {
    return null
  } else if (arr[start].id === target) {
    return arr[start]
  }
  else if (arr[end].id === target) {
    return arr[end]
  }

  mid = length / 2 + start
  if (length % 2 === 0) {
    if (arr[mid].id === target) {
      return arr[mid]
    } else if (arr[mid].id > target) {
      start = start
      end = mid - 1
    }
    else {
      start = mid - 1
      end = end
    }
  }
  else {
    mid = Math.floor(mid)
    if (arr[mid].id === target) {
      return arr[mid]
    } else if (arr[mid].id > target) {
      start = start
      end = mid - 1
    }
    else {
      start = mid + 1
      end = end
    }
  }
  return binarySearc(arr, start, end, target)
}

// console.log(binarySearc(team, 0, 9, 16)) 

let str = 'http://www.zhenchuanx.com/a.php?a=1&b=2&c=&d=xxx&e'

function getQuery(url) {
  let queryStr = url.split('?')[1]
  if (!queryStr) {
    return null
  }
  let parts = queryStr.split('&')
  let query = {}
  parts.map(pair => {
    let p = pair.split('=')
    query[p[0]] = p[1]
  })
  return query
}

// console.log(getQuery(str)) 


class Queue {
  constructor() {
    this.items = []
  }

  pop(item) {
    return this.items.shift()
  }

  push(item) {
    this.items.push()
  }

  size() {
    return this.items.length
  }

}




function inherits(base, sub) {
  function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
  }
  var prototype = object(base.prototype);
  prototype.constructor = sub;
  sub.prototype = prototype;
}


function One() {
  return 1
};
function Two() {
  return 2
};
function Three() {
  return 3
};
Two.prototype = new One();
Two.prototype.constructor = Two
Three.prototype = new Two();
Three.prototype.constructor = Three;
var three = new Three();



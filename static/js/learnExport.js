/*
module.exports = {
  data() {
    return {
      name: 'export',
      age: 1
    }
  },
  get walk() {
    console.log('walk');
    return 'let,s have a walk'
  }
};*/
/*
export const obj = {
  data() {
    return {
      name: 'export',
      age: 1
    }
  },
  get walk() {
    console.log('walk');
    return 'let,s have a walk'
  }
};*/

function exportOne() {
  console.log('one');
}
function exportTwo() {
  console.log('one');
}
module.exports = {
  exportOne,
  exportTwo,
  data() {
    return {
      name: 'export',
      age: 1
    }
  },
  get walk() {
    console.log('walk');
    return 'let,s have a walk'
  }
};

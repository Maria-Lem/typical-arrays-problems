
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) {
    const minResult = Math.min(...array);
    return minResult;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    const forLoopMax = () => {
      let max = array[0];
  
      for (let i = 1; i < array.length; i++) {
        let value = array[i];
        max = (value > max) ? value : max;
      }
      return [max];
    }
    const maxResult = forLoopMax();
    return maxResult;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    let count = 0;
    let total = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== undefined) {
        count++;
        total += array[i];
      }
    }
  
    let avgArr = total / count;
    return avgArr;
  } else {
    return 0;
  }
}

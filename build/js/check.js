function getMessage(a, b) {
  if (typeof a === 'boolean') {
    return('Я попал в ' + [b]);
  }
  else if (false) {
      return('я никуда не попал');
  }
  else if (typeof a === 'number') {
    return('Я прыгнул на ' + [a] * 100 + ' сантиметров');
  }
  else if (Array.isArray(a)) {
    return('Я прошёл ' + sum + ' шагов');
  }
  else if (Array.isArray(a, b)) {
    return('Я прошёл ' + [3*1] + ' метров');
  }
}

var sum = function() {
  var zero = 0;
  for (var i = 0; i < Array.prototype.length; i++) {
    zero += array[i];
  }
}

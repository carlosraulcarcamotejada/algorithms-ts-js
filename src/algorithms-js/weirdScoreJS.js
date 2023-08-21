const weirdScoreJS = (ops) => {
  let res = 0;

  const results = [];
  
  ops.forEach((c) => {
    if (Number.isInteger(parseInt(c, 10))) {
      results.push(parseInt(c, 10));
    } else if (c.toUpperCase() === "C") {
      results.pop();
    } else if (c.toUpperCase() === "D") {
      results.push(2 * results[results.length - 1]);
    } else if (c === "+") {
      results.push(results[results.length - 2] + results[results.length - 1]);
    }
  });

  res = results.reduce((prevValue, currentValue) => prevValue + currentValue);

  return res;
};

export { weirdScore };

/*
-cuando el char es un numero, lo guarda.
-cuando el char es una 'C', quita el último valor.
-cuando el char es una 'D' duplica el último valor.
-cuando el char es un '+'. el nuevo valor que agrega es resultado
de la suma de los dos últimos valores.
*/

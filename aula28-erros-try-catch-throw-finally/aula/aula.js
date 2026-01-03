// Try - Catch - Throw

try {
   console.log(aCasa);
} catch (err) {
   console.log("A casa não existe.");
   //console.log(err);
}

function soma(x, y) {
   if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("x e y precisam ser numeros");
   }
   return x + y;
}

console.log(soma(1, 50));

//--

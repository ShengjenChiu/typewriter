const sentence = "hello there from lighthouse labs";

for (let i = 1; i < sentence.length; i++) {
  setTimeout(() => {
    let timer = 50 * i;

    console.log(`${sentence[i - 1]} => ${timer} ms`);
    
  }, 50 * i);
}

//process.stdout.write(char); //console.log(`${char} => ${} ms`);
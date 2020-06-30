const phrase = "hello there from lighthouse labs";

const typewriter = (sentence) => {
  let delay = 50
  for (const char in sentence) {
    setTimeout(() => {process.stdout.write(sentence[char])
    }, (delay + 50 * char));
    }
    setTimeout(() => {process.stdout.write('\n')
    }, (delay + 50 * sentence.length - 1));
}

console.log(typewriter(phrase))

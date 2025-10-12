const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const books = new Map(); // create a Map to store books

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  while (true) {
    const title = await ask("Enter the title (or type 'exit' to quit): ");
    if (title.toLowerCase() === 'exit') break;

    const year = await ask("Enter the year: ");

    const detail = await ask("Enter the detail: ");

    // add to Map: key = title, value = object with details
    books.set(title, { title, year, detail });

    console.log(`Book added: ${title} (${year})`);
    console.log('---------------------------');
  }

  console.log("All books:", books );

  for (const [key, value] of books.entries()) {
    console.log(`${key}: ${value.year}`);
  }

  rl.close();
}

main();

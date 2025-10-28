<?php
$books = array(); // array to store all books

for ($i = 0; $i < 3; $i++) { // ask for 3 books (you can change this)
    $book = array();
    $book["title"] = readline(prompt: "Enter the title: ");
    $book["year"] = readline(prompt: "Enter the year: ");

    $books[] = $book; // add this book to the books array
}

echo "\n All Books:\n";
foreach ($books as $index => $book) {
    echo ($index + 1) . ". " . $book["title"] . " (" . $book["year"] . ")\n";
}
?>
<?php
function obtenerNumerosPrimos($hasta): array {
    $numeros = range(start: 2, end: $hasta); // crea [2, 3, 4, ..., N]
    $primos = [];

    foreach ($numeros as $n) {
        // Obtenemos los posibles divisores de 2 hasta sqrt(n)
        $divisores = range(start: 2, end: floor(num: sqrt(num: $n)));

        // Filtramos los que dividen exactamente
        $divisoresValidos = array_filter(array: $divisores, callback: fn($d): bool => $n % $d === 0);

        // Si no tiene divisores, es primo
        if (count(value: $divisoresValidos) === 0) {
            $primos[] = $n;
        }
    }

    return $primos;
}

$n = 30;
echo "Números primos hasta $n: " . implode(separator: ", ", array: obtenerNumerosPrimos(hasta: $n)) . "\n";

?>
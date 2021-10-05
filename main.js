function game() {
    //Un alert() espone 5 numeri generati casualmente.
    var numbers = []

    for(let i = 0; i < 5; i++) {
        let i = Math.floor(Math.random() * 100);
        numbers.push(i);
    }
    console.log(numbers);
    alert(numbers)

    //Da li parte un timer di 30 secondi. L'utente deve inserire i numeri che ha visto precedentemente tramite il prompt()
    var correctNumbers = [];

    setTimeout(() => {
        for(let i = 0; i < 5; i++) {
            var number = parseInt(prompt("inserisci numero"));
            if(numbers.includes(number)) {
                correctNumbers.push(number);
            }
        }
        document.getElementById("correctNumbers").innerHTML = correctNumbers;
        console.log(correctNumbers);
    }, 30000);
}



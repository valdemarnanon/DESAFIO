const n = 50;

function primo(num) {
    
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

for(let i = 2; i <= n; i++){
    if(primo(i)) {
        console.log(i);
    }
}
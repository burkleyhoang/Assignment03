var coinflip;

var i = prompt('Enter a number');	

for (let i = 1; i < 8; i++) {
    let coinflip = Math.round(Math.random()); 
    if (coinflip == 0) {
        console.log('Heads'); 
    } else if (coinflip == 1) {
        console.log('Tails');
    }
} 
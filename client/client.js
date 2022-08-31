const moneyButton = document.getElementById('moneyButton')



function money() {
    count = 1
    if(count === 1){
        alert('Click me again for money.')
        count += 1
    } else if (count === 2){
        alert('Wow you fell for it again')
    } else {
        alert('Stop doing that')
    }
}

moneyButton.addEventListener('click', money)
const moneyButton = document.getElementById('moneyButton')


 count = 1
function money() {
    if(count === 1){
        alert(`Hmm... Didn't work. Click me again if you want free money.`)
        count += 1
    } else if (count === 2){
        alert('Wow, you fell for it again.')
        count += 1
    } else if(count >= 3){
        alert(`You're not getting free money.`)
    }
}

moneyButton.addEventListener('click', money)
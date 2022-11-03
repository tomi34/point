let yes = true
input.onButtonPressed(Button.B, () => {
    yes = true
    for (let i = 0; yes === true; i++) {
        let beer = randint(0, 4)
        let andsteal = randint(0,4)
        if (andsteal == 0 && andsteal == 4) {
            led.plot(beer, andsteal)
        }
    }
})

input.onButtonPressed(Button.A, () => {   
    control.reset()
})
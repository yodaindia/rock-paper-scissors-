input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . # # . .
        # # # # #
        # # # # #
        # # # # #
        . . # # .
        `)
    basic.clearScreen()
    basic.pause(1000)
    decision = randint(1, 3)
    if (decision == 0) {
        basic.showLeds(`
            . # # . .
            # # # # #
            # # # # #
            # # # # #
            . . # # .
            `)
        points += 0
    }
    if (decision == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        points += -1
    }
    if (decision == 2) {
        basic.showLeds(`
            . . . . #
            # # . # .
            # . # . .
            # # . # .
            . . . . #
            `)
        points += 1
    }
    basic.showNumber(points)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . . . #
        # # . # .
        # . # . .
        # # . # .
        . . . . #
        `)
    basic.clearScreen()
    basic.pause(1000)
    decision = randint(1, 3)
    if (decision == 2) {
        basic.showLeds(`
            . . . . #
            # # . # .
            # . # . .
            # # . # .
            . . . . #
            `)
        points += 0
    }
    if (decision == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        points += 1
    }
    if (decision == 0) {
        basic.showLeds(`
            . # # . .
            # # # # #
            # # # # #
            # # # # #
            . . # # .
            `)
        points += -1
    }
    basic.showNumber(points)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
    basic.pause(1000)
    decision = randint(1, 3)
    if (decision == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        points += 0
    }
    if (decision == 2) {
        basic.showLeds(`
            . . . . #
            # # . # .
            # . # . .
            # # . # .
            . . . . #
            `)
        points += -1
    }
    if (decision == 0) {
        basic.showLeds(`
            . # # . .
            # # # # #
            # # # # #
            # # # # #
            . . # # .
            `)
        points += 1
    }
    basic.showNumber(points)
})
let decision = 0
let points = 0
points = 0
basic.forever(function () {
    if (points == 15) {
        game.gameOver()
    }
})

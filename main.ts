input.onButtonPressed(Button.A, function () {
    zone += 1
    if (zone > 7) {
        zone = 1
    }
    bluetooth.activateSwgeBeacon(zone)
    basic.showString("" + (zone))
})
input.onButtonPressed(Button.B, function () {
    reset()
})
function reset () {
    bluetooth.stopAdvertising()
    zone = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
let zone = 0
reset()
basic.forever(function () {
	
})

function bipbip () {
    music.playTone(988, music.beat(BeatFraction.Double))
    music.playTone(740, music.beat(BeatFraction.Double))
}
function mesurerDistance () {
    pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High)
    distance = Math.round(distance / 58)
    basic.pause(500)
    return distance
}
input.onButtonPressed(Button.AB, function () {
    dist = mesurerDistance()
})
let d = 0
let distance = 0
let dist = 0
led.enable(false)
dist = mesurerDistance()
basic.forever(function () {
    d = mesurerDistance()
    if (Math.abs(d - dist) >= 2) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        bipbip()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})

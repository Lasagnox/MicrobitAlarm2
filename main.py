distance = 0

def on_forever():
    global distance
    pins.set_pull(DigitalPin.P1, PinPullMode.PULL_NONE)
    pins.digital_write_pin(DigitalPin.P1, 0)
    control.wait_micros(2)
    pins.digital_write_pin(DigitalPin.P1, 1)
    control.wait_micros(10)
    pins.digital_write_pin(DigitalPin.P1, 0)
    distance = pins.pulse_in(DigitalPin.P2, PulseValue.HIGH, 500 * 58)
    serial.write_value("dist2", distance)
    basic.pause(100)
basic.forever(on_forever)

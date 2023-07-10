namespace game {
    // % blockId=get_timer_seconds
    // % block="timer value"
    // % inlineInputMode=inline
    export function secondsSinceStart () {
        return control.timer1.millis() * 0.001
    }
}

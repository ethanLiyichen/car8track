basic.showIcon(IconNames.Happy)
basic.pause(500)
mbit_小车类.CarCtrlSpeed2(mbit_&#23567;&#36710;&#31867;.CarState.Car_Run, 80, 30)
basic.pause(3600)
basic.forever(function () {
    mbit_小车类.CarCtrl(mbit_&#23567;&#36710;&#31867;.CarState.Car_Stop)
    basic.pause(50)
    mbit_小车类.CarCtrlSpeed2(mbit_&#23567;&#36710;&#31867;.CarState.Car_Run, 30, 80)
    basic.pause(4400)
    mbit_小车类.CarCtrl(mbit_&#23567;&#36710;&#31867;.CarState.Car_Stop)
    basic.pause(50)
    mbit_小车类.CarCtrlSpeed2(mbit_&#23567;&#36710;&#31867;.CarState.Car_Run, 80, 30)
    basic.pause(4400)
})

let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Ghost)
    while (timer > 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        timer += -1
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(1000)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Double))
    music.playTone(220, music.beat(BeatFraction.Double))
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        . # # # .
        `)
})

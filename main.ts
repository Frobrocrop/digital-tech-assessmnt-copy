namespace SpriteKind {
    export const Surveillance = SpriteKind.create()
    export const Harmless = SpriteKind.create()
    export const Survlance2 = SpriteKind.create()
    export const Food2 = SpriteKind.create()
    export const Pokwok2 = SpriteKind.create()
    export const PROJECTILEBASKET = SpriteKind.create()
    export const COINZ = SpriteKind.create()
    export const Button = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Ball.vy == 0) {
        Ball.vy = -200
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Ball.setKind(SpriteKind.Food)
})
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    game.splash("New Skin Unlocked: Cricket Ball")
    Ball.setImage(img`
        . . . e e e e e e e e e e . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 e . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 e . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        1 1 2 1 1 2 1 1 2 1 1 2 1 1 2 1 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        1 1 2 1 1 2 1 1 2 1 1 2 1 1 2 1 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . e 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . e 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . e e e e e e e e e e . . . 
        `)
    info.setLife(4)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Pokwok2, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-2)
    scene.cameraShake(5, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Ball.ay = 350
    Ball.setVelocity(0, -300)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Pokwok2, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-2)
    scene.cameraShake(5, 500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Character == 0) {
        animation.runImageAnimation(
        Ball,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 1 7 7 7 7 7 7 7 7 7 7 7 7 1 . 
            . 7 1 7 7 7 7 7 7 7 7 7 7 1 7 . 
            . 7 7 1 7 7 7 7 7 7 7 7 1 7 7 . 
            . 7 7 7 1 1 1 1 1 1 1 1 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 1 1 1 1 1 1 1 1 7 7 7 . 
            . 7 7 1 7 7 7 7 7 7 7 7 1 7 7 . 
            . 7 1 7 7 7 7 7 7 7 7 7 7 1 7 . 
            . 1 7 7 7 7 7 7 7 7 7 7 7 7 1 . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 7 7 7 7 7 7 1 7 7 . . . 
            . . 7 7 7 7 7 7 7 1 7 7 7 7 . . 
            . 7 7 7 7 7 7 7 1 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 1 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 7 7 7 7 7 1 . 
            . 7 7 7 7 1 7 7 7 7 7 7 7 1 7 . 
            . 7 7 7 1 7 7 7 7 7 7 7 1 7 7 . 
            . 7 7 1 7 7 7 7 7 7 7 1 7 7 7 . 
            . 7 1 7 7 7 7 7 7 7 1 7 7 7 7 . 
            . 1 7 7 7 7 7 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 1 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 1 7 7 7 7 7 7 7 . 
            . . 7 7 7 7 1 7 7 7 7 7 7 7 . . 
            . . . 7 7 1 7 7 7 7 7 7 7 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 7 7 7 7 7 7 7 7 1 . . . 
            . . 7 7 1 7 7 7 7 7 7 1 7 7 . . 
            . 7 7 7 7 1 7 7 7 7 1 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 1 7 7 7 7 1 7 7 7 7 . 
            . . 7 7 1 7 7 7 7 7 7 1 7 7 . . 
            . . . 1 7 7 7 7 7 7 7 7 1 . . . 
            `],
        200,
        true
        )
    } else if (Character == 1) {
        animation.runImageAnimation(
        Ball,
        [img`
            . . . e e e e e e e e e e . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 e . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 e . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            1 1 2 1 1 2 1 1 2 1 1 2 1 1 2 1 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            1 1 2 1 1 2 1 1 2 1 1 2 1 1 2 1 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . e 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . e 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . e e e e e e e e e e . . . 
            `,img`
            . . . e 2 2 2 1 2 1 2 2 2 . . . 
            . . e 2 2 2 2 1 2 1 2 2 2 2 . . 
            . e 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            . 2 2 2 2 2 2 1 2 1 2 2 2 2 e . 
            . . 2 2 2 2 2 2 2 2 2 2 2 e . . 
            . . . 2 2 2 2 1 2 1 2 2 e . . . 
            `,img`
            . . . e 2 2 2 2 2 2 2 2 1 . . . 
            . . e 2 2 2 2 2 2 2 2 2 2 2 . . 
            . e 2 2 2 2 2 2 2 2 1 2 2 2 2 . 
            e 2 2 2 2 2 2 2 2 1 2 2 2 2 2 1 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 2 2 2 2 1 2 e 
            e 2 2 2 2 2 1 2 2 2 2 2 1 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 1 2 2 2 2 2 1 2 2 2 2 e 
            e 2 2 1 2 2 2 2 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 1 2 2 2 2 2 1 2 2 2 2 2 2 2 e 
            2 2 2 2 2 2 1 2 2 2 2 2 2 2 2 e 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 e . 
            . . 2 2 1 2 2 2 2 2 2 2 2 e . . 
            . . . 2 2 2 2 2 2 2 2 2 e . . . 
            `],
        200,
        true
        )
    } else if (Character == 2) {
        animation.runImageAnimation(
        Ball,
        [img`
            . . . f 4 4 4 4 f 4 4 4 4 f . . . 
            . . 4 4 f 4 4 4 f 4 4 4 f 4 4 . . 
            . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            f f f f f f f f f f f f f f f f f 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
            . . 4 4 f 4 4 4 f 4 4 4 f 4 4 . . 
            . . . f 4 4 4 4 f 4 4 4 4 f . . . 
            `,img`
            . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
            . . 4 4 4 4 4 4 f 4 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 . 
            f 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
            4 f 4 4 4 4 4 4 f 4 4 4 4 4 4 f 4 
            4 4 f 4 4 4 4 4 f 4 4 4 4 4 f 4 4 
            4 4 4 f f f f f f f f f f f 4 4 4 
            4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 
            f f f f f f f f f f f f f f f f f 
            4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 
            4 4 4 f f f f f f f f f f f 4 4 4 
            4 4 f 4 4 4 4 4 f 4 4 4 4 4 f 4 4 
            4 f 4 4 4 4 4 4 f 4 4 4 4 4 4 f 4 
            f 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
            . 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 . 
            . . 4 4 4 4 4 4 f 4 4 4 4 4 4 . . 
            . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
            `],
        200,
        true
        )
    } else if (Character == 3) {
        animation.runImageAnimation(
        Ball,
        [img`
            . . . f 4 4 4 4 f 4 4 4 4 f . . . 
            . . 9 9 f 4 4 4 f 4 4 4 f 1 1 . . 
            . 9 9 9 9 f 4 4 f 4 4 f 1 1 1 1 . 
            9 9 9 9 9 9 f 4 f 4 f 1 1 1 1 1 1 
            8 9 8 9 8 9 f 4 f 4 f 1 8 1 8 1 8 
            8 8 9 8 9 9 f 4 f 4 f 1 1 8 1 8 8 
            9 9 9 9 9 9 f 4 f 4 f 1 1 1 1 1 1 
            9 9 9 9 9 9 f 4 f 4 f 1 1 1 1 1 1 
            f f f f f f f f f f f f f f f f f 
            1 1 1 1 1 1 f 4 f 4 f 9 9 9 9 9 9 
            8 1 8 1 8 1 f 4 f 4 f 9 8 9 8 9 8 
            8 8 1 8 1 1 f 4 f 4 f 9 9 8 9 8 8 
            1 1 1 1 1 1 f 4 f 4 f 9 9 9 9 9 9 
            1 1 1 1 1 1 f 4 f 4 f 9 9 9 9 9 9 
            . 1 1 1 1 f 4 4 f 4 4 f 9 9 9 9 . 
            . . 1 1 f 4 4 4 f 4 4 4 f 9 9 . . 
            . . . f 4 4 4 4 f 4 4 4 4 f . . . 
            `,img`
            . . . 1 1 8 8 1 f 9 9 8 8 9 . . . 
            . . 1 1 1 8 1 1 f 9 9 8 9 9 9 . . 
            . 1 1 1 1 1 8 1 f 9 9 9 8 9 9 9 . 
            f 1 1 1 1 8 1 1 f 9 9 8 9 9 9 9 f 
            4 f 1 1 1 1 8 1 f 9 9 9 8 9 9 f 4 
            4 4 f 1 1 1 1 1 f 9 9 9 9 9 f 4 4 
            4 4 4 f f f f f f f f f f f 4 4 4 
            4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 
            f f f f f f f f f f f f f f f f f 
            4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 
            4 4 4 f f f f f f f f f f f 4 4 4 
            4 4 f 9 9 9 9 9 f 1 1 1 1 1 f 4 4 
            4 f 9 9 9 9 8 9 f 1 1 1 8 1 1 f 4 
            f 9 9 9 9 8 9 9 f 1 1 8 1 1 1 1 f 
            . 9 9 9 9 9 8 9 f 1 1 1 8 1 1 1 . 
            . . 9 9 9 8 9 9 f 1 1 8 1 1 1 . . 
            . . . 9 9 8 8 9 f 1 1 8 8 1 . . . 
            `],
        200,
        true
        )
    } else {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Ball)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Ball)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, BAT_THE_BOSS).value += -5
    scene.cameraShake(5, 500)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(BAT_THE_BOSS)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Character == 0) {
        animation.runImageAnimation(
        Ball,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 1 7 7 7 7 7 7 7 7 7 7 7 7 1 . 
            . 7 1 7 7 7 7 7 7 7 7 7 7 1 7 . 
            . 7 7 1 7 7 7 7 7 7 7 7 1 7 7 . 
            . 7 7 7 1 1 1 1 1 1 1 1 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 1 1 1 1 1 1 1 1 7 7 7 . 
            . 7 7 1 7 7 7 7 7 7 7 7 1 7 7 . 
            . 7 1 7 7 7 7 7 7 7 7 7 7 1 7 . 
            . 1 7 7 7 7 7 7 7 7 7 7 7 7 1 . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 7 7 7 7 7 7 1 7 7 . . . 
            . . 7 7 7 7 7 7 7 1 7 7 7 7 . . 
            . 7 7 7 7 7 7 7 1 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 1 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 7 7 7 7 7 1 . 
            . 7 7 7 7 1 7 7 7 7 7 7 7 1 7 . 
            . 7 7 7 1 7 7 7 7 7 7 7 1 7 7 . 
            . 7 7 1 7 7 7 7 7 7 7 1 7 7 7 . 
            . 7 1 7 7 7 7 7 7 7 1 7 7 7 7 . 
            . 1 7 7 7 7 7 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 1 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 1 7 7 7 7 7 7 7 . 
            . . 7 7 7 7 1 7 7 7 7 7 7 7 . . 
            . . . 7 7 1 7 7 7 7 7 7 7 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 7 7 7 7 7 7 7 7 1 . . . 
            . . 7 7 1 7 7 7 7 7 7 1 7 7 . . 
            . 7 7 7 7 1 7 7 7 7 1 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 7 1 7 7 1 7 7 7 7 7 . 
            . 7 7 7 7 1 7 7 7 7 1 7 7 7 7 . 
            . . 7 7 1 7 7 7 7 7 7 1 7 7 . . 
            . . . 1 7 7 7 7 7 7 7 7 1 . . . 
            `],
        200,
        true
        )
    } else if (Character == 1) {
        animation.runImageAnimation(
        Ball,
        [img`
            . . . e e e e e e e e e e . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 e . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 e . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            1 1 2 1 1 2 1 1 2 1 1 2 1 1 2 1 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            1 1 2 1 1 2 1 1 2 1 1 2 1 1 2 1 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            . e 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . . e 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . e e e e e e e e e e . . . 
            `,img`
            . . . e 2 2 2 1 2 1 2 2 2 . . . 
            . . e 2 2 2 2 1 2 1 2 2 2 2 . . 
            . e 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 1 2 2 2 2 2 e 
            . 2 2 2 2 2 2 1 2 1 2 2 2 2 e . 
            . . 2 2 2 2 2 2 2 2 2 2 2 e . . 
            . . . 2 2 2 2 1 2 1 2 2 e . . . 
            `,img`
            . . . e 2 2 2 2 2 2 2 2 1 . . . 
            . . e 2 2 2 2 2 2 2 2 2 2 2 . . 
            . e 2 2 2 2 2 2 2 2 1 2 2 2 2 . 
            e 2 2 2 2 2 2 2 2 1 2 2 2 2 2 1 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 2 2 2 1 2 2 2 2 2 1 2 e 
            e 2 2 2 2 2 1 2 2 2 2 2 1 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 2 2 2 1 2 2 2 2 2 1 2 2 2 2 e 
            e 2 2 1 2 2 2 2 2 1 2 2 2 2 2 e 
            e 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e 
            e 1 2 2 2 2 2 1 2 2 2 2 2 2 2 e 
            2 2 2 2 2 2 1 2 2 2 2 2 2 2 2 e 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 e . 
            . . 2 2 1 2 2 2 2 2 2 2 2 e . . 
            . . . 2 2 2 2 2 2 2 2 2 e . . . 
            `],
        200,
        true
        )
    } else if (Character == 2) {
        animation.runImageAnimation(
        Ball,
        [img`
            . . . f 4 4 4 4 f 4 4 4 4 f . . . 
            . . 4 4 f 4 4 4 f 4 4 4 f 4 4 . . 
            . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            f f f f f f f f f f f f f f f f f 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
            . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
            . . 4 4 f 4 4 4 f 4 4 4 f 4 4 . . 
            . . . f 4 4 4 4 f 4 4 4 4 f . . . 
            `,img`
            . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
            . . 4 4 4 4 4 4 f 4 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 . 
            f 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
            4 f 4 4 4 4 4 4 f 4 4 4 4 4 4 f 4 
            4 4 f 4 4 4 4 4 f 4 4 4 4 4 f 4 4 
            4 4 4 f f f f f f f f f f f 4 4 4 
            4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 
            f f f f f f f f f f f f f f f f f 
            4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 
            4 4 4 f f f f f f f f f f f 4 4 4 
            4 4 f 4 4 4 4 4 f 4 4 4 4 4 f 4 4 
            4 f 4 4 4 4 4 4 f 4 4 4 4 4 4 f 4 
            f 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 f 
            . 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 . 
            . . 4 4 4 4 4 4 f 4 4 4 4 4 4 . . 
            . . . 4 4 4 4 4 f 4 4 4 4 4 . . . 
            `],
        200,
        true
        )
    } else if (Character == 3) {
        animation.runImageAnimation(
        Ball,
        [img`
            . . . f 4 4 4 4 f 4 4 4 4 f . . . 
            . . 9 9 f 4 4 4 f 4 4 4 f 1 1 . . 
            . 9 9 9 9 f 4 4 f 4 4 f 1 1 1 1 . 
            9 9 9 9 9 9 f 4 f 4 f 1 1 1 1 1 1 
            8 9 8 9 8 9 f 4 f 4 f 1 8 1 8 1 8 
            8 8 9 8 9 9 f 4 f 4 f 1 1 8 1 8 8 
            9 9 9 9 9 9 f 4 f 4 f 1 1 1 1 1 1 
            9 9 9 9 9 9 f 4 f 4 f 1 1 1 1 1 1 
            f f f f f f f f f f f f f f f f f 
            1 1 1 1 1 1 f 4 f 4 f 9 9 9 9 9 9 
            8 1 8 1 8 1 f 4 f 4 f 9 8 9 8 9 8 
            8 8 1 8 1 1 f 4 f 4 f 9 9 8 9 8 8 
            1 1 1 1 1 1 f 4 f 4 f 9 9 9 9 9 9 
            1 1 1 1 1 1 f 4 f 4 f 9 9 9 9 9 9 
            . 1 1 1 1 f 4 4 f 4 4 f 9 9 9 9 . 
            . . 1 1 f 4 4 4 f 4 4 4 f 9 9 . . 
            . . . f 4 4 4 4 f 4 4 4 4 f . . . 
            `,img`
            . . . 1 1 8 8 1 f 9 9 8 8 9 . . . 
            . . 1 1 1 8 1 1 f 9 9 8 9 9 9 . . 
            . 1 1 1 1 1 8 1 f 9 9 9 8 9 9 9 . 
            f 1 1 1 1 8 1 1 f 9 9 8 9 9 9 9 f 
            4 f 1 1 1 1 8 1 f 9 9 9 8 9 9 f 4 
            4 4 f 1 1 1 1 1 f 9 9 9 9 9 f 4 4 
            4 4 4 f f f f f f f f f f f 4 4 4 
            4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 
            f f f f f f f f f f f f f f f f f 
            4 4 4 4 4 4 4 4 f 4 4 4 4 4 4 4 4 
            4 4 4 f f f f f f f f f f f 4 4 4 
            4 4 f 9 9 9 9 9 f 1 1 1 1 1 f 4 4 
            4 f 9 9 9 9 8 9 f 1 1 1 8 1 1 f 4 
            f 9 9 9 9 8 9 9 f 1 1 8 1 1 1 1 f 
            . 9 9 9 9 9 8 9 f 1 1 1 8 1 1 1 . 
            . . 9 9 9 8 9 9 f 1 1 8 1 1 1 . . 
            . . . 9 9 8 8 9 f 1 1 8 8 1 . . . 
            `],
        200,
        true
        )
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    info.changeLifeBy(-1)
    scene.cameraShake(3, 500)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.COINZ, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Surveillance, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    sprites.destroy(Ball)
    game.gameOver(false)
    game.reset()
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.reset()
})
info.onScore(70, function () {
    game.splash("New Skin Unlocked: Basketball Special Edition!")
    Ball.setImage(img`
        . . . f 4 4 4 4 f 4 4 4 4 f . . . 
        . . 9 9 f 4 4 4 f 4 4 4 f 1 1 . . 
        . 9 9 9 9 f 4 4 f 4 4 f 1 1 1 1 . 
        9 9 9 9 9 9 f 4 f 4 f 1 1 1 1 1 1 
        8 9 8 9 8 9 f 4 f 4 f 1 8 1 8 1 8 
        8 8 9 8 9 9 f 4 f 4 f 1 1 8 1 8 8 
        9 9 9 9 9 9 f 4 f 4 f 1 1 1 1 1 1 
        9 9 9 9 9 9 f 4 f 4 f 1 1 1 1 1 1 
        f f f f f f f f f f f f f f f f f 
        1 1 1 1 1 1 f 4 f 4 f 9 9 9 9 9 9 
        8 1 8 1 8 1 f 4 f 4 f 9 8 9 8 9 8 
        8 8 1 8 1 1 f 4 f 4 f 9 9 8 9 8 8 
        1 1 1 1 1 1 f 4 f 4 f 9 9 9 9 9 9 
        1 1 1 1 1 1 f 4 f 4 f 9 9 9 9 9 9 
        . 1 1 1 1 f 4 4 f 4 4 f 9 9 9 9 . 
        . . 1 1 f 4 4 4 f 4 4 4 f 9 9 . . 
        . . . f 4 4 4 4 f 4 4 4 4 f . . . 
        `)
    info.changeScoreBy(3)
    Character = 3
    info.setLife(6)
    music.stopAllSounds()
    music.play(music.createSong(hex`002c010408020500001c00010a006400f40164000004000000000000000000000000000500000412000000040001221c002000012230003400012204001c00100500640000041e000004000000000000000000000000000a040004300000000400012908000c00012910001400011d18001c00011d20002400011d28002c00011d30003400012938003c00012907001c00020a006400f4016400000400000000000000000000000000000000030c0010001400012428002c00012408001c000e050046006603320000040a002d0000006400140001320002010002120000000400011d1c002000012a30003400011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800180008000900010310001100010a28002900010a380039000103`), music.PlaybackMode.LoopingInBackground)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Ball.setKind(SpriteKind.Player)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(Leather)
    info.changeScoreBy(1)
    Character = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    let Help: Sprite = null
    let Play: Sprite = null
    if (otherSprite == Play && controller.A.isPressed()) {
        level = 1
    }
    if (otherSprite == Help && controller.A.isPressed()) {
        level = 2
    }
})
sprites.onDestroyed(SpriteKind.Food2, function (sprite) {
    game.splash("New Skin Unlocked: Basketball")
    Ball.setImage(img`
        . . . f 4 4 4 4 f 4 4 4 4 f . . . 
        . . 4 4 f 4 4 4 f 4 4 4 f 4 4 . . 
        . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        f f f f f f f f f f f f f f f f f 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        4 4 4 4 4 4 f 4 f 4 f 4 4 4 4 4 4 
        . 4 4 4 4 f 4 4 f 4 4 f 4 4 4 4 . 
        . . 4 4 f 4 4 4 f 4 4 4 f 4 4 . . 
        . . . f 4 4 4 4 f 4 4 4 4 f . . . 
        `)
    info.setLife(5)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    Character = 4
    info.changeScoreBy(15)
    music.stopAllSounds()
    tiles.setCurrentTilemap(tilemap`level13`)
    music.play(music.createSong(hex`002c010408040400001c00010a006400f401640000040000000000000000000000000005000004480008000c00012718001c00012720002400012428002c00012730003400012438003c00012740004400012748004c00012750005400012758005c00012760006400012468006c00012707001c00020a006400f4016400000400000000000000000000000000000000033c0000000400012408000c00012018001c00012428002c00012438003c00012440004400012050005400012058005c00012468006c00012070007400012408001c000e050046006603320000040a002d0000006400140001320002010002120010001400012448004c00012478007c00012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800540000000100010408000900010610001100010a18001900010420002100010a28002900010438003900010440004100010648004900010a50005100010658005900010460006100010a680069000106700071000104`), music.PlaybackMode.LoopingInBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.COINZ, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Survlance2, function (sprite, otherSprite) {
    music.stopAllSounds()
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
    sprites.destroy(Ball)
    game.gameOver(false)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    sprites.destroy(Rubber)
    info.changeScoreBy(1)
    Character = 2
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, BAT_THE_BOSS).value += -5
    scene.cameraShake(5, 500)
})
let projectile2: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let Rubber: Sprite = null
let level = 0
let Leather: Sprite = null
let BAT_THE_BOSS: Sprite = null
let Coins: Sprite = null
let Character = 0
let Ball: Sprite = null
game.splash("Ball VS Bat")
Ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 1 7 7 7 7 7 7 7 7 7 7 7 7 1 . 
    . 7 1 7 7 7 7 7 7 7 7 7 7 1 7 . 
    . 7 7 1 7 7 7 7 7 7 7 7 1 7 7 . 
    . 7 7 7 1 1 1 1 1 1 1 1 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 1 1 1 1 1 1 1 1 7 7 7 . 
    . 7 7 1 7 7 7 7 7 7 7 7 1 7 7 . 
    . 7 1 7 7 7 7 7 7 7 7 7 7 1 7 . 
    . 1 7 7 7 7 7 7 7 7 7 7 7 7 1 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level0`)
music.play(music.createSong(hex`002c010408020400001c00010a006400f4016400000400000000000000000000000000050000042a0008000c0001250c001000012018001c00012520002400012524002800012028002c00012538003c00012504001c00100500640000041e000004000000000000000000000000000a0400041e000400080001251400180001291c00200001252c003000012934003800012507001c00020a006400f4016400000400000000000000000000000000000000030c000c001000012524002800012509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8002a000400050001030c000d0001091400150001071c001d0001032400250001092c002d000107340035000103`), music.PlaybackMode.LoopingInBackground)
Character = 0
let Blaster = sprites.create(img`
    a a a a . . . . . . . . . . . . . 
    a 1 1 a . . . . . . . . . . . . . 
    a 1 1 a a . . . . . . . . . . . . 
    a 1 1 a a a a a a a . . . . . . . 
    a 1 1 a 1 1 1 1 1 a a . . . . . . 
    a 1 1 a 1 1 1 1 1 a a a . . . . . 
    a a a a a a a a a a a a a . . . . 
    2 4 5 5 5 1 1 1 1 . . . . . . . . 
    2 4 4 5 5 5 1 1 1 1 . . . . . . . 
    2 4 5 5 5 1 1 1 1 . . . . . . . . 
    a a a a a a a a a a a a a . . . . 
    a 1 1 a 1 1 1 1 1 a a a . . . . . 
    a 1 1 a 1 1 1 1 1 a a . . . . . . 
    a 1 1 a a a a a a a . . . . . . . 
    a 1 1 a a . . . . . . . . . . . . 
    a 1 1 a . . . . . . . . . . . . . 
    a a a a . . . . . . . . . . . . . 
    `, SpriteKind.Surveillance)
Blaster.setPosition(9, 20)
info.setLife(3)
let Blaster2 = sprites.create(img`
    a a a a . . . . . . . . . . . . . 
    a 1 1 a . . . . . . . . . . . . . 
    a 1 1 a a . . . . . . . . . . . . 
    a 1 1 a a a a a a a . . . . . . . 
    a 1 1 a 1 1 1 1 1 a a . . . . . . 
    a 1 1 a 1 1 1 1 1 a a a . . . . . 
    a a a a a a a a a a a a a . . . . 
    2 4 5 5 5 1 1 1 1 . . . . . . . . 
    2 4 4 5 5 5 1 1 1 1 . . . . . . . 
    2 4 5 5 5 1 1 1 1 . . . . . . . . 
    a a a a a a a a a a a a a . . . . 
    a 1 1 a 1 1 1 1 1 a a a . . . . . 
    a 1 1 a 1 1 1 1 1 a a . . . . . . 
    a 1 1 a a a a a a a . . . . . . . 
    a 1 1 a a . . . . . . . . . . . . 
    a 1 1 a . . . . . . . . . . . . . 
    a a a a . . . . . . . . . . . . . 
    `, SpriteKind.Surveillance)
Blaster2.setPosition(9, 35)
let Blaster3 = sprites.create(img`
    a a a a . . . . . . . . . . . . . 
    a 1 1 a . . . . . . . . . . . . . 
    a 1 1 a a . . . . . . . . . . . . 
    a 1 1 a a a a a a a . . . . . . . 
    a 1 1 a 1 1 1 1 1 a a . . . . . . 
    a 1 1 a 1 1 1 1 1 a a a . . . . . 
    a a a a a a a a a a a a a . . . . 
    2 4 5 5 5 1 1 1 1 . . . . . . . . 
    2 4 4 5 5 5 1 1 1 1 . . . . . . . 
    2 4 5 5 5 1 1 1 1 . . . . . . . . 
    a a a a a a a a a a a a a . . . . 
    a 1 1 a 1 1 1 1 1 a a a . . . . . 
    a 1 1 a 1 1 1 1 1 a a . . . . . . 
    a 1 1 a a a a a a a . . . . . . . 
    a 1 1 a a . . . . . . . . . . . . 
    a 1 1 a . . . . . . . . . . . . . 
    a a a a . . . . . . . . . . . . . 
    `, SpriteKind.Surveillance)
Blaster3.setPosition(9, 50)
Ball.setPosition(18, 111)
controller.moveSprite(Ball, 150, 0)
Ball.ay = 350
scene.cameraFollowSprite(Ball)
for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
    Coins = sprites.create(img`
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . 4 4 5 5 5 5 5 5 4 4 . . . 
        . . 4 e 5 e e e e e e 5 e 4 . . 
        . 4 e 5 e e e e e e e e 5 e 4 . 
        . 4 5 e 5 e e e e e e 5 e 5 4 . 
        4 5 5 e e e e e e e e e e 5 5 4 
        4 5 5 5 5 e e e e e e 5 5 5 5 4 
        4 5 5 e e e e e e e e e e 5 5 4 
        4 5 5 e 5 e e e e e e 5 e 5 5 4 
        4 5 e 5 e e e e e e e e e e 5 4 
        4 5 5 e 5 e e e e e e 5 e 5 5 4 
        . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
        . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
        . . 4 5 5 5 5 e e 5 5 5 e 4 . . 
        . . . 4 4 5 e e e e 5 4 4 . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        `, SpriteKind.COINZ)
    tiles.placeOnTile(Coins, value)
    animation.runImageAnimation(
    Coins,
    [img`
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . 4 4 5 5 5 5 5 5 4 4 . . . 
        . . 4 e 5 e e e e e e 5 e 4 . . 
        . 4 e 5 e e e e e e e e 5 e 4 . 
        . 4 5 e 5 e e e e e e 5 e 5 4 . 
        4 5 5 e e e e e e e e e e 5 5 4 
        4 5 5 5 5 e e e e e e 5 5 5 5 4 
        4 5 5 e e e e e e e e e e 5 5 4 
        4 5 5 e 5 e e e e e e 5 e 5 5 4 
        4 5 e 5 e e e e e e e e e e 5 4 
        4 5 5 e 5 e e e e e e 5 e 5 5 4 
        . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
        . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
        . . 4 5 5 5 5 e e 5 5 5 e 4 . . 
        . . . 4 4 5 e e e e 5 4 4 . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        `,img`
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . 4 4 5 5 5 5 5 5 4 4 . . . 
        . . 4 5 5 5 e e e e 5 5 5 4 . . 
        . . 4 5 5 5 e e e e 5 5 5 4 . . 
        . . 4 5 e 5 e e e e 5 e 5 4 . . 
        . . 4 5 5 e e e e e e 5 5 4 . . 
        . . 4 5 5 e e e e e e 5 5 4 . . 
        . . 4 5 5 e e e e e e 5 5 4 . . 
        . . 4 5 e 5 e e e e 5 e 5 4 . . 
        . . 4 5 5 5 e e e e 5 5 5 4 . . 
        . . 4 5 5 5 e e e e 5 5 5 4 . . 
        . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
        . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
        . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
        . . . 4 4 5 e e e e 5 4 4 . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        `,img`
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 e e e e e e 4 . . . . 
        . . . . 4 e e e e e e 4 . . . . 
        . . . . 4 e e e e e e 4 . . . . 
        . . . . 4 e e e e e e 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 5 e e 5 5 4 . . . . 
        . . . . 4 5 5 e e 5 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        `,img`
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . 4 4 5 5 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        `,img`
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        `,img`
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . 4 4 5 5 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 e e 4 4 . . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        `,img`
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . 4 5 5 5 5 5 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 e e e e e e 4 . . . . 
        . . . . 4 e e e e e e 4 . . . . 
        . . . . 4 e e e e e e 4 . . . . 
        . . . . 4 e e e e e e 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . 4 5 5 e e 5 5 4 . . . . 
        . . . . 4 5 5 e e 5 5 4 . . . . 
        . . . . 4 5 e e e e 5 4 . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        `,img`
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . 4 4 5 5 5 5 5 5 4 4 . . . 
        . . 4 5 5 5 e e e e 5 5 5 4 . . 
        . . 4 5 5 5 e e e e 5 5 5 4 . . 
        . . 4 5 e 5 e e e e 5 e 5 4 . . 
        . . 4 5 5 e e e e e e 5 5 4 . . 
        . . 4 5 5 e e e e e e 5 5 4 . . 
        . . 4 5 5 e e e e e e 5 5 4 . . 
        . . 4 5 e 5 e e e e 5 e 5 4 . . 
        . . 4 5 5 5 e e e e 5 5 5 4 . . 
        . . 4 5 5 5 e e e e 5 5 5 4 . . 
        . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
        . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
        . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
        . . . 4 4 5 e e e e 5 4 4 . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        `],
    100,
    true
    )
}
info.setScore(0)
info.startCountdown(60)
game.onUpdate(function () {
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
        if (controller.up.isPressed()) {
            Ball.vy = -50
        } else {
            if (controller.down.isPressed()) {
                Ball.vy = 50
            } else {
                Ball.vy = 0
                Ball.ay = 0
            }
        }
    } else {
        Ball.ay = 350
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile10`)) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        sprites.destroy(Ball)
        pause(500)
        game.reset()
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        sprites.destroy(Ball)
        pause(500)
        game.reset()
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile22`)) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        sprites.destroy(Ball)
        pause(500)
        game.reset()
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile23`)) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        sprites.destroy(Ball)
        pause(500)
        game.reset()
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile24`)) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        sprites.destroy(Ball)
        pause(500)
        game.reset()
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile14`)) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        sprites.destroy(Ball)
        pause(500)
        game.reset()
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
        Ball.sayText("You look down at the water. It's colour was fading too!", 2000, false)
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
        Ball.sayText("Colour! The exit must be this way!", 2000, false)
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.COINZ)
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        Blaster.setKind(SpriteKind.Survlance2)
        Blaster2.setKind(SpriteKind.Survlance2)
        Blaster3.setKind(SpriteKind.Survlance2)
        game.splash("LEVEL 2")
        tiles.setCurrentTilemap(tilemap`level5`)
        for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
            Coins = sprites.create(img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . 4 4 5 5 5 5 5 5 4 4 . . . 
                . . 4 e 5 e e e e e e 5 e 4 . . 
                . 4 e 5 e e e e e e e e 5 e 4 . 
                . 4 5 e 5 e e e e e e 5 e 5 4 . 
                4 5 5 e e e e e e e e e e 5 5 4 
                4 5 5 5 5 e e e e e e 5 5 5 5 4 
                4 5 5 e e e e e e e e e e 5 5 4 
                4 5 5 e 5 e e e e e e 5 e 5 5 4 
                4 5 e 5 e e e e e e e e e e 5 4 
                4 5 5 e 5 e e e e e e 5 e 5 5 4 
                . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
                . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
                . . 4 5 5 5 5 e e 5 5 5 e 4 . . 
                . . . 4 4 5 e e e e 5 4 4 . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `, SpriteKind.COINZ)
            tiles.placeOnTile(Coins, value)
            animation.runImageAnimation(
            Coins,
            [img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . 4 4 5 5 5 5 5 5 4 4 . . . 
                . . 4 e 5 e e e e e e 5 e 4 . . 
                . 4 e 5 e e e e e e e e 5 e 4 . 
                . 4 5 e 5 e e e e e e 5 e 5 4 . 
                4 5 5 e e e e e e e e e e 5 5 4 
                4 5 5 5 5 e e e e e e 5 5 5 5 4 
                4 5 5 e e e e e e e e e e 5 5 4 
                4 5 5 e 5 e e e e e e 5 e 5 5 4 
                4 5 e 5 e e e e e e e e e e 5 4 
                4 5 5 e 5 e e e e e e 5 e 5 5 4 
                . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
                . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
                . . 4 5 5 5 5 e e 5 5 5 e 4 . . 
                . . . 4 4 5 e e e e 5 4 4 . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `,img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . 4 4 5 5 5 5 5 5 4 4 . . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 e 5 e e e e 5 e 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 e 5 e e e e 5 e 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . . 4 4 5 e e e e 5 4 4 . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `,img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . 4 5 5 5 5 5 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 5 e e 5 5 4 . . . . 
                . . . . 4 5 5 e e 5 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `,img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . 4 4 5 5 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                `,img`
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                `,img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . 4 4 5 5 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                `,img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . 4 5 5 5 5 5 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 5 e e 5 5 4 . . . . 
                . . . . 4 5 5 e e 5 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `,img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . 4 4 5 5 5 5 5 5 4 4 . . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 e 5 e e e e 5 e 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 e 5 e e e e 5 e 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . . 4 4 5 e e e e 5 4 4 . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `],
            100,
            true
            )
        }
        info.startCountdown(40)
        music.play(music.createSong(hex`002c010408020500001c00010a006400f401640000040000000000000000000000000005000004240000000400012508000c00012718001c00012720002400012928002c00012530003400012704001c00100500640000041e000004000000000000000000000000000a040004120000000400012a18001c00012a28002c00012a07001c00020a006400f4016400000400000000000000000000000000000000030c0008000c00012a38003c00012708001c000e050046006603320000040a002d00000064001400013200020100020c0010001400012530003400012a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800240000000100010310001100010314001500010a20002100010330003100010334003500010a`), music.PlaybackMode.LoopingInBackground)
        Leather = sprites.create(img`
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . 2 2 2 2 . 2 . . . . 
            . . 2 2 2 2 2 2 2 2 . . 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
            . 2 . 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
            2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
            . . 2 . . . . . . 2 2 . . . . . 
            `, SpriteKind.Food)
        Leather.setPosition(28, 165)
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        sprites.destroyAllSpritesOfKind(SpriteKind.COINZ)
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        music.play(music.createSong(hex`002c010408040400001c00010a006400f401640000040000000000000000000000000005000004480008000c00012718001c00012720002400012428002c00012730003400012438003c00012740004400012748004c00012750005400012758005c00012760006400012468006c00012707001c00020a006400f4016400000400000000000000000000000000000000033c0000000400012408000c00012018001c00012428002c00012438003c00012440004400012050005400012058005c00012468006c00012070007400012408001c000e050046006603320000040a002d0000006400140001320002010002120010001400012448004c00012478007c00012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800540000000100010408000900010610001100010a18001900010420002100010a28002900010438003900010440004100010648004900010a50005100010658005900010460006100010a680069000106700071000104`), music.PlaybackMode.LoopingInBackground)
        info.startCountdown(120)
        game.splash("LEVEL 3")
        tiles.setCurrentTilemap(tilemap`level10`)
        for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
            Coins = sprites.create(img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . 4 4 5 5 5 5 5 5 4 4 . . . 
                . . 4 e 5 e e e e e e 5 e 4 . . 
                . 4 e 5 e e e e e e e e 5 e 4 . 
                . 4 5 e 5 e e e e e e 5 e 5 4 . 
                4 5 5 e e e e e e e e e e 5 5 4 
                4 5 5 5 5 e e e e e e 5 5 5 5 4 
                4 5 5 e e e e e e e e e e 5 5 4 
                4 5 5 e 5 e e e e e e 5 e 5 5 4 
                4 5 e 5 e e e e e e e e e e 5 4 
                4 5 5 e 5 e e e e e e 5 e 5 5 4 
                . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
                . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
                . . 4 5 5 5 5 e e 5 5 5 e 4 . . 
                . . . 4 4 5 e e e e 5 4 4 . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `, SpriteKind.COINZ)
            tiles.placeOnTile(Coins, value)
            animation.runImageAnimation(
            Coins,
            [img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . 4 4 5 5 5 5 5 5 4 4 . . . 
                . . 4 e 5 e e e e e e 5 e 4 . . 
                . 4 e 5 e e e e e e e e 5 e 4 . 
                . 4 5 e 5 e e e e e e 5 e 5 4 . 
                4 5 5 e e e e e e e e e e 5 5 4 
                4 5 5 5 5 e e e e e e 5 5 5 5 4 
                4 5 5 e e e e e e e e e e 5 5 4 
                4 5 5 e 5 e e e e e e 5 e 5 5 4 
                4 5 e 5 e e e e e e e e e e 5 4 
                4 5 5 e 5 e e e e e e 5 e 5 5 4 
                . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
                . 4 5 5 5 5 5 e e 5 5 e e e 4 . 
                . . 4 5 5 5 5 e e 5 5 5 e 4 . . 
                . . . 4 4 5 e e e e 5 4 4 . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `,img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . 4 4 5 5 5 5 5 5 4 4 . . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 e 5 e e e e 5 e 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 e 5 e e e e 5 e 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . . 4 4 5 e e e e 5 4 4 . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `,img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . 4 5 5 5 5 5 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 5 e e 5 5 4 . . . . 
                . . . . 4 5 5 e e 5 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `,img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . 4 4 5 5 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                `,img`
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                `,img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . 4 4 5 5 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 e e 4 4 . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . . . 4 4 4 4 . . . . . . 
                `,img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . 4 5 5 5 5 5 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 e e e e e e 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . 4 5 5 e e 5 5 4 . . . . 
                . . . . 4 5 5 e e 5 5 4 . . . . 
                . . . . 4 5 e e e e 5 4 . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `,img`
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . 4 4 5 5 5 5 5 5 4 4 . . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 e 5 e e e e 5 e 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 5 e e e e e e 5 5 4 . . 
                . . 4 5 e 5 e e e e 5 e 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 e e e e 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . 4 5 5 5 5 e e 5 5 5 5 4 . . 
                . . . 4 4 5 e e e e 5 4 4 . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                `],
            100,
            true
            )
        }
        Rubber = sprites.create(img`
            . . . . . . . . . 4 4 4 4 . . . 
            . . . . . . 4 4 4 4 . 4 . . . . 
            . . 4 4 4 4 4 4 4 4 . . 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 . . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 4 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            . 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
            4 . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
            . 4 . 4 4 4 4 4 4 4 4 4 4 4 . . 
            . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
            4 4 4 4 4 4 4 4 4 4 4 4 . . . . 
            . . 4 . . . . . . 4 4 . . . . . 
            `, SpriteKind.Food2)
        Rubber.setPosition(45, 215)
        BAT_THE_BOSS = sprites.create(img`
            ....................ddddddddddddddd....................
            ....................ddddddddddddddd....................
            ....................ddddddddddddddd....................
            ....................ddddddddddddddd....................
            ..ddd22222ddd.......d555dd555dd555d.......dddf4f4fddd..
            ..ddd11211ddd..dddddd555dd555dd555dddddd..ddd1fff9ddd..
            ..ddd22222ddd..dddddd555dd555dd555dddddd..dddfffffddd..
            ..ddd11211ddd..dddddd5555555555555dddddd..ddd9fff1ddd..
            ..ddd22222ddd..dddddd5555555555555dddddd..dddf4f4fddd..
            ..ddd.....ddd..dddddd5555555555555dddddd..ddd.....ddd..
            .....ddddd.....ddddddddddddddddddddddddd.....ddddd.....
            .....ddddd.....ddddddddddddddddddddddddd.....ddddd.....
            .....ddddd.....ddddddddddddddddddddddddd.....ddddd.....
            .....ddddd.....ddddddddddddddddddddddddd.....ddddd.....
            .....ddddd.....ddddfff111dddd111fffddddd.....ddddd.....
            .....ddddddddddddddfff111dddd111fffddddddddddddddd.....
            .....ddddddddddddddfff111dddd111fffddddddddddddddd.....
            .....ddddddddddddddfff111dddd111fffddddddddddddddd.....
            .....ddddddddddddddfff111dddd111fffddddddddddddddd.....
            .....ddddddddddddddfff111dddd111fffddddddddddddddd.....
            ...............ddddddddddddddddddddddddd...............
            ...............ddddddddddddddddddddddddd...............
            ...............ddddddddddddddddddddddddd...............
            ...............ddddddddddddddddddddddddd...............
            .....ddddddddddddddddddddeeeeddddddddddddddddddddd.....
            .....ddddddddddddddddddddeeeeddddddddddddddddddddd.....
            .....ddddddddddddddddddddeeeeddddddddddddddddddddd.....
            .....ddddddddddddddddddddeeeeddddddddddddddddddddd.....
            .....ddddddddddddddddddddeeeeddddddddddddddddddddd.....
            .....ddddd.....ddddddddddeeeeddddddddddd.....66666.....
            .....ddddd.....ddddffffffeeeefffffffdddd.....66666.....
            .....ddddd.....ddddffffffeeeefffffffdddd.....66666.....
            .....ddddd.....ddddffffffeeeefffffffdddd.....66666.....
            .....ddddd.....ddddfffdddddddddddfffdddd.....66666.....
            ..ddd.....ddd..ddddfffdddddddddddfffdddd..ddd66666ddd..
            ..ddd17771ddd..ddddfffdddddddddddfffdddd..ddd66666ddd..
            ..ddd71117ddd..ddddddddddddddddddddddddd..ddd66666ddd..
            ..ddd77777ddd..ddddddddddddddddddddddddd..ddd66666ddd..
            ..ddd71117ddd..ddddddddddddddddddddddddd..ddd66666ddd..
            ..ddd17771ddd.......ddddddddddddddd.......ddd66666ddd..
            ....................ddddddddddddddd..........66666.....
            ....................ddddddddddddddd..........66666.....
            ....................ddddddddddddddd..........66666.....
            ....................ddddddddddddddd..........66666.....
            .........................22222...............66666.....
            .........................22222...............66666.....
            .........................ddddd...........1111111111111.
            .........................ddddd...........1111111111111.
            .........................22222...........1111111111111.
            .........................22222...........111..111..111.
            ....................ddddddddddddddd......111..111..111.
            ....................ddddddddddddddd......111..111..111.
            ....................ddddddddddddddd......111.......111.
            ....................ddddddddddddddd......111.......111.
            ....................ddddddddddddddd....................
            `, SpriteKind.Enemy)
        BAT_THE_BOSS.setPosition(200, 33)
    }
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        game.gameOver(true)
    }
    projectile = sprites.createProjectileFromSprite(img`
        1 . 1 . 1 . . 
        . 2 . 2 2 2 . 
        1 . 2 4 4 4 2 
        . 2 4 5 5 4 2 
        1 2 4 5 5 4 2 
        . 2 4 4 4 4 2 
        . . 2 2 2 2 2 
        `, Blaster, 30, 30)
    projectile = sprites.createProjectileFromSprite(img`
        1 . 1 . 1 . . 
        . 2 . 2 2 2 . 
        1 . 2 4 4 4 2 
        . 2 4 5 5 4 2 
        1 2 4 5 5 4 2 
        . 2 4 4 4 4 2 
        . . 2 2 2 2 2 
        `, Blaster2, 30, 30)
    projectile = sprites.createProjectileFromSprite(img`
        1 . 1 . 1 . . 
        . 2 . 2 2 2 . 
        1 . 2 4 4 4 2 
        . 2 4 5 5 4 2 
        1 2 4 5 5 4 2 
        . 2 4 4 4 4 2 
        . . 2 2 2 2 2 
        `, Blaster3, 30, 30)
    if (Character == 3) {
        statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(BAT_THE_BOSS)
    }
    if (Character == 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        sprites.destroy(Blaster)
        sprites.destroy(Blaster3)
        sprites.destroy(Blaster2)
    }
})
forever(function () {
    if (Ball.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        music.stopAllSounds()
        animation.runImageAnimation(
        Ball,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . 1 7 7 7 7 7 7 7 7 7 7 7 7 1 . 
            . 7 1 7 7 7 7 7 7 7 7 7 7 1 7 . 
            . 7 7 1 7 7 7 7 7 7 7 7 1 7 7 . 
            . 7 7 7 1 1 1 1 1 1 1 1 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
            . 7 7 7 1 1 1 1 1 1 1 1 7 7 7 . 
            . 7 7 1 7 7 7 7 7 7 7 7 1 7 7 . 
            . 7 1 7 7 7 7 7 7 7 7 7 7 1 7 . 
            . 1 7 7 7 7 7 7 7 7 7 7 7 7 1 . 
            . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 7 7 . . . 
            . . 7 7 . . 7 7 7 7 7 7 7 . . . 
            . 1 7 7 7 7 . . . . . . . 7 1 . 
            . 7 1 7 7 7 7 7 7 7 7 7 7 1 7 . 
            . . . . . . . . . 7 7 7 1 7 7 . 
            . 7 . . 1 1 1 1 1 . . . 7 7 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 . . . . 
            . . . . . . . . 7 7 7 7 7 7 7 . 
            . 7 7 7 1 1 1 . . . . . . 7 7 . 
            . 7 7 1 7 7 7 7 7 7 . . . 7 7 . 
            . 7 1 7 7 7 7 . . . 7 7 . . . . 
            . 1 7 . . . . 7 7 7 7 7 7 7 1 . 
            . . 7 . 7 7 7 7 7 7 7 7 7 7 . . 
            . . . 7 7 7 7 7 7 7 7 7 7 . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . 7 7 . . . . . . . 1 7 . . 
            . 7 7 7 . . . . . . . . 1 7 . . 
            7 7 7 7 1 1 1 7 . . . 7 1 7 . . 
            7 7 7 . . 1 1 7 . . . 7 7 7 . . 
            . . . . . 7 7 7 . . . 7 7 7 . . 
            . . . . . 7 . . 7 7 . . 7 . . . 
            . . . . . 7 7 7 . 7 . . . 1 1 . 
            . 7 . . . . . . 7 . . . . 7 1 . 
            . 7 1 . . . . 7 7 . . 1 1 1 1 . 
            . 7 7 1 1 . . . . . . . 7 7 7 . 
            . 7 7 7 1 1 . . 1 . . . 7 7 7 . 
            . . 7 7 7 7 1 1 . . . . 7 7 7 . 
            . . 7 7 7 . 7 7 7 . . . 7 7 . . 
            . . . . . 7 7 7 7 . . . 7 . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        false
        )
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        pause(1000)
        sprites.destroy(Ball)
        pause(500)
        game.gameOver(false)
        pause(500)
        game.reset()
        if (Character == 1) {
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            pause(1000)
            sprites.destroy(Ball)
            pause(1000)
            game.gameOver(false)
            pause(1000)
            game.reset()
        }
        if (Character == 2) {
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            pause(1000)
            sprites.destroy(Ball)
            pause(1000)
            game.gameOver(false)
            pause(1000)
            game.reset()
        }
    }
})
forever(function () {
    if (Character == 3) {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 1 1 1 1 . . . . 
            . . 1 1 1 1 . 1 . . . . 1 1 1 1 
            1 1 . . . . 1 1 1 . . . . . . . 
            . . . . . 1 . . 1 1 1 . . . . . 
            . . . . 1 . . . 1 . 1 . . . . . 
            1 1 1 1 . . . 1 . . 1 1 . . . . 
            . . . . . . 1 . . . . 1 1 . . . 
            . . . . 1 1 1 . . . . . 1 . . . 
            . . . 1 . . 1 . . . . . 1 1 . . 
            . . 1 . . 1 1 1 . . . . . 1 1 . 
            1 1 . . . 1 . 1 1 . . . . . 1 1 
            . . . . 1 1 . . . 1 1 . . . . 1 
            . . . . . 1 1 . . . 1 . . . . . 
            . . . . 1 1 . . . . . 1 1 . . . 
            . . . . . 1 . . . . . . . . . . 
            `, BAT_THE_BOSS, 50, 50)
        projectile2.follow(Ball)
    } else {
    	
    }
})

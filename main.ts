namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
    export const score = SpriteKind.create()
    export const bomb = SpriteKind.create()
    export const god = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.god, function (sprite, otherSprite) {
    info.changeLifeBy(99999)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(99)
    pause(5000)
    info.changeLifeBy(-99)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hops_and_Paw.vy == 0) {
        Hops_and_Paw.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.score, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bomb, function (sprite, otherSprite) {
    bee = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bee,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 4 . . . . . . 
        . . . . . . . 1 4 5 4 . . . . . 
        . . . . . . . 1 . 4 . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . f f . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 4 . . . . . . 
        . . . . . . . 1 4 5 4 . . . . . 
        . . . . . . . 1 . 4 . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . f . . . f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 4 . . . . . . 
        . . . . . . . 1 4 5 4 . . . . . 
        . . . . . . . 1 . 4 . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 4 . . . . . . 
        . . . . . . . 1 4 5 4 . . . . . 
        . . . . . . . 1 . 4 . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . f . . . f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 1 4 . . . . . . 
        . . . . . . . 1 4 5 4 . . . . . 
        . . . . . . . 1 . 4 . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f f . . f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
    bee.setPosition(Hops_and_Paw.x + 80, Hops_and_Paw.y - 80)
    bee.follow(Hops_and_Paw, 65)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    info.changeLifeBy(-1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    current_level += 1
    startLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (Hops_and_Paw.y < bee.x) {
        info.changeScoreBy(3)
    } else {
        info.changeLifeBy(-3)
    }
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
})
function startLevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level_0`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level8`)
    } else if (current_level == 3) {
        tiles.setTilemap(tilemap`level_1`)
    } else {
        game.over(true)
    }
    tiles.placeOnRandomTile(Hops_and_Paw, assets.tile`tile6`)
    for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
        tiles.setTileAt(value, assets.tile`tile0`)
    }
    scene.cameraFollowSprite(Hops_and_Paw)
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Coin)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Flower)) {
        value4.destroy()
    }
    for (let val8 of tiles.getTilesByType(assets.tile`myTile`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . f . . . . . f . . . . . . 
            . f f f f f . . . f . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . f . . . . . f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.score)
        animation.runImageAnimation(
        flower,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f . . . . . . . f . . . . 
            . . . f . . . . . . . f . . . . 
            . . . f . . . . . . . f . . . . 
            . . . f . . . . . . . f . . . . 
            f f f f f f f . . . . f . . . . 
            . . . f . . . . . . . f . . . . 
            . . . f . . . . . . . f . . . . 
            . . . f . . . . . . . f . . . . 
            . . . f . . . . . . . f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f . . . f . . . . . . . . 
            . . . f . . . f . . . . . . . . 
            . f f f f f . f . . . . . . . . 
            . . . f . . . f . . . . . . . . 
            . . . f . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        400,
        true
        )
        tiles.placeOnTile(flower, val8)
        tiles.setTileAt(val8, assets.tile`transparency16`)
    }
    for (let value5 of tiles.getTilesByType(assets.tile`tile4`)) {
        flower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . f 2 2 f 2 2 f . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        flower,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . f 2 2 f 2 2 f . . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f . f f f . . . . . 
            . . . f 2 2 2 f 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . f 2 2 2 2 2 2 2 f . . . . 
            . . . . f 2 2 2 2 2 f . . . . . 
            . . . . . f 2 2 2 f . . . . . . 
            . . . . . . f 2 f . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(flower, value5)
        tiles.setTileAt(value5, assets.tile`tile0`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`myTile0`)) {
        god = sprites.create(img`
            . . . . . . . b b . . . . . . . 
            . . . . . . b d d b . . . . . . 
            . . . . . b d 5 5 d b . . . . . 
            . . . . b b 5 5 5 5 b b . . . . 
            . . . . b 5 5 5 5 5 5 b . . . . 
            b b b b b 5 5 5 5 1 1 d b b b b 
            b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
            b d d 5 5 5 5 5 5 1 1 1 5 d d b 
            . b d d 5 5 5 5 5 5 5 5 d d b . 
            . . b b 5 5 5 5 5 5 5 5 b b . . 
            . . c b 5 5 5 5 5 5 5 5 b c . . 
            . . c 5 5 5 5 d d 5 5 5 5 c . . 
            . . c 5 5 d b b b b d 5 5 c . . 
            . . c 5 d b c c c c b d 5 c . . 
            . . c c c c . . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.god)
        tiles.placeOnTile(god, value6)
        tiles.setTileAt(value6, assets.tile`tile0`)
    }
    for (let value6 of tiles.getTilesByType(assets.tile`tile5`)) {
        bomb = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 4 . . . . . . 
            . . . . . . 1 . 4 5 4 . . . . . 
            . . . . . . 1 . . 4 . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.bomb)
        tiles.placeOnTile(bomb, value6)
        tiles.setTileAt(value6, assets.tile`tile0`)
    }
    for (let value7 of tiles.getTilesByType(assets.tile`tile11`)) {
        fireball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . 5 5 2 5 5 4 5 5 . . . . 
            . . . . . 4 4 4 4 2 4 . . . . . 
            . . . 5 4 4 2 2 2 2 4 5 . . . . 
            . . . 5 4 . 2 8 2 8 4 2 . . . . 
            . . . 5 5 . 2 8 8 2 4 5 . . . . 
            . . . 2 5 2 2 8 2 4 4 5 . . . . 
            . . . . 5 4 2 2 2 4 5 . . . . . 
            . . . . . . 4 . 4 4 5 . . . . . 
            . . . 5 . 5 5 5 4 5 5 . . . . . 
            . . . . . . . 2 5 5 . . . . . . 
            . . . . . . . . . . . . . 5 . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Fireball)
        tiles.placeOnTile(fireball, value7)
        tiles.setTileAt(value7, assets.tile`tile0`)
        animation.runMovementAnimation(
        fireball,
        "c 0 -100 0 100 0 0",
        2000,
        true
        )
        fireball.startEffect(effects.fire)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Hops_and_Paw.y < otherSprite.y) {
        info.changeScoreBy(0)
    } else {
        info.changeLifeBy(-1)
    }
})
let fireball: Sprite = null
let bomb: Sprite = null
let god: Sprite = null
let flower: Sprite = null
let bee: Sprite = null
let Hops_and_Paw: Sprite = null
let current_level = 0
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
current_level = 0
Hops_and_Paw = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f . . . . 1 1 . 
    . . . . . f . f . f . . 1 1 1 . 
    . . . . f . . f . . f 1 1 1 . . 
    . . . f . . . f . . . e 1 . . . 
    . . . . . . . f . . e . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . f . . . . . f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Hops_and_Paw, 80, 0)
startLevel()
game.onUpdate(function () {
    if (Hops_and_Paw) {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . 1 1 . 
            . . . . . f . f . f . . 1 1 1 . 
            . . . . f . . f . . f 1 1 1 . . 
            . . . f . . . f . . . e 1 . . . 
            . . . . . . . f . . e . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f . . . . . f . . . . . 
            `)
    } else if (Hops_and_Paw.vy > 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . 1 1 . 
            . . . . . f . f . f . . 1 1 1 . 
            . . . . f . . f . . f 1 1 1 . . 
            . . . f . . . f . . . e 1 . . . 
            . . . . . . . f . . e . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f . . . . . f . . . . . 
            `)
    } else if (Hops_and_Paw.x % 2 == 0) {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . 1 1 . 
            . . . . . f . f . f . . 1 1 1 . 
            . . . . f . . f . . f 1 1 1 . . 
            . . . f . . . f . . . e 1 . . . 
            . . . . . . . f . . e . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f . . . . . f . . . . . 
            `)
    } else {
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . 1 1 . 
            . . . . . f . f . f . . 1 1 1 . 
            . . . . f . . f . . f 1 1 1 . . 
            . . . f . . . f . . . e 1 . . . 
            . . . . . . . f . . e . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f . . . . . f . . . . . 
            `)
    }
    if ((Hops_and_Paw.isHittingTile(CollisionDirection.Left) || Hops_and_Paw.isHittingTile(CollisionDirection.Right)) && Hops_and_Paw.vy >= 0) {
        Hops_and_Paw.vy = 0
        Hops_and_Paw.ay = 0
        Hops_and_Paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . 1 1 . 
            . . . . . f . f . f . . 1 1 1 . 
            . . . . f . . f . . f 1 1 1 . . 
            . . . f . . . f . . . e 1 . . . 
            . . . . . . . f . . e . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f . f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . f . . . . . f . . . . . 
            `)
    } else {
        Hops_and_Paw.ay = 350
    }
    if (Hops_and_Paw.vx < 0 || Hops_and_Paw.isHittingTile(CollisionDirection.Left)) {
        Hops_and_Paw.image.flipX()
        Hops_and_Paw.setImage(Hops_and_Paw.image)
    }
})
forever(function () {
    music.play(music.createSong(assets.song`goated`), music.PlaybackMode.UntilDone)
})

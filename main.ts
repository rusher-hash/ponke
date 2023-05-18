input.onButtonPressed(Button.A, function () {
    paddleb.change(LedSpriteProperty.X, -1)
    paddle.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    paddle.change(LedSpriteProperty.X, 1)
    paddleb.change(LedSpriteProperty.X, 1)
})
let directiony = 0
let direction_x = 0
let paddleb: game.LedSprite = null
let paddle: game.LedSprite = null
let sprite = game.createSprite(2, 2)
paddle = game.createSprite(2, 4)
paddleb = game.createSprite(3, 4)
basic.forever(function () {
    sprite.change(LedSpriteProperty.X, direction_x)
    sprite.change(LedSpriteProperty.Y, directiony)
    if (sprite.isTouching(paddle)) {
        sprite.change(LedSpriteProperty.X, direction_x * -1)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(1000)
        directiony = -1
        direction_x = randint(-1, 1)
        if (sprite.isTouching(paddleb)) {
            sprite.change(LedSpriteProperty.X, direction_x * -1)
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(1000)
            directiony = -1
            direction_x = randint(-1, 1)
        } else if (sprite.get(LedSpriteProperty.Y) >= 4) {
            sprite.set(LedSpriteProperty.Blink, 1)
            basic.pause(1000)
            game.gameOver()
            if (sprite.get(LedSpriteProperty.X) <= 0) {
                direction_x = 1
                basic.pause(1000)
            } else if (sprite.get(LedSpriteProperty.X) >= 4) {
                direction_x = -1
                basic.pause(1000)
            }
        }
    } else if (sprite.get(LedSpriteProperty.Y) <= 0) {
        basic.pause(1000)
        directiony = 1
        direction_x = randint(-1, 1)
    } else {
    	
    }
})

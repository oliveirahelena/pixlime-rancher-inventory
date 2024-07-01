namespace SpriteKind {
    export const Inventory = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    item1 = PixlimeRancherInventory.addItem(customInventory, mySprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite5 = PixlimeRancherInventory.removeItem(customInventory, PixlimeRancherInventory.getCursorIndex(customInventory))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PixlimeRancherInventory.moveCursor(customInventory, -1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PixlimeRancherInventory.moveCursor(customInventory, 1)
})
let mySprite5: Sprite = null
let item1 = false
let mySprite: Sprite = null
let customInventory: Inventory = null
customInventory = PixlimeRancherInventory.createInventory()
mySprite = sprites.create(img`
    a a a a a a a a a a a 
    a a a a a a a a a a a 
    a a a a a a a a a a a 
    a a a a a a a a a a a 
    a a a a a a a a a a a 
    a a a a a a a a a a a 
    a a a a a a a a a a a 
    a a a a a a a a a a a 
    `, SpriteKind.Food)
let mySprite2 = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Food)
let mySprite3 = sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 
    `, SpriteKind.Food)
let mySprite4 = sprites.create(img`
    9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 
    `, SpriteKind.Food)
let item2 = PixlimeRancherInventory.addItem(customInventory, mySprite2)
item2 = PixlimeRancherInventory.addItem(customInventory, mySprite3)
item2 = PixlimeRancherInventory.addItem(customInventory, mySprite4)
PixlimeRancherInventory.displayInventory(customInventory)

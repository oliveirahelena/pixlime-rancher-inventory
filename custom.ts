namespace SpriteKind {
    export const InventoryBar = SpriteKind.create()
    export const InventorySlot = SpriteKind.create()
    export const QuantitySlotText = SpriteKind.create()
    export const InventoryCursor = SpriteKind.create()
}

class InventorySlot {
    item: Sprite | null;
    quantity: number;
    sprite: Sprite | null;
    quantityText: TextSprite | null;

    constructor() {
        this.item = null;
        this.quantity = 0;
        this.sprite = null;
        this.quantityText = null;
    }
}

class Inventory {
    slots: InventorySlot[];
    sprite: Sprite;
    cursor: Sprite;
    cursorIndex: number;

    constructor() {
        this.slots = [];
        for (let i = 0; i < 4; i++) {
            this.slots.push(new InventorySlot());
        }
        this.sprite = sprites.create(img`
    ..bbbbbbbbbbb.....bbbbbbbbbbb.....bbbbbbbbbbb.....bbbbbbbbbbb..
    .bbbbbbbbbbbbb...bbbbbbbbbbbbb...bbbbbbbbbbbbb...bbbbbbbbbbbbb.
    bbeeeeeeeeeeebb.bbeeeeeeeeeeebb.bbeeeeeeeeeeebb.bbeeeeeeeeeeebb
    bbefeeeeeeefebb.bbefeeeeeeefebb.bbefeeeeeeefebb.bbefeeeeeeefebb
    bbeeffeeeffeebb.bbeeffeeeffeebb.bbeeffeeeffeebb.bbeeffeeeffeebb
    bbeeeefffeeeebb.bbeeeefffeeeebb.bbeeeefffeeeebb.bbeeeefffeeeebb
    bbeeeefffeeeebb.bbeeeefffeeeebb.bbeeeefffeeeebb.bbeeeefffeeeebb
    bbeeffeeeffeebb.bbeeffeeeffeebb.bbeeffeeeffeebb.bbeeffeeeffeebb
    bbefeeeeeeefebb.bbefeeeeeeefebb.bbefeeeeeeefebb.bbefeeeeeeefebb
    bbeeeeeeeeeeebb.bbeeeeeeeeeeebb.bbeeeeeeeeeeebb.bbeeeeeeeeeeebb
    bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb.bbbbbbbbbbbbbbb
    .bbbbbbbbbbbbb...bbbbbbbbbbbbb...bbbbbbbbbbbbb...bbbbbbbbbbbbb.
    ..bbbbbbbbbbb.....bbbbbbbbbbb.....bbbbbbbbbbb.....bbbbbbbbbbb..
    `, SpriteKind.InventoryBar);
        this.sprite.x = 80;
        this.sprite.bottom = 116;
        this.sprite.z = 99;
        this.sprite.setFlag(SpriteFlag.RelativeToCamera, true);
        this.cursor = sprites.create(img`
    . 1 1 1 1 1 1 1 1 1 1 1 . 
    1 . . . . . . . . . . . 1 
    1 . . . . . . . . . . . 1 
    1 . . . . . . . . . . . 1 
    1 . . . . . . . . . . . 1 
    1 . . . . . . . . . . . 1 
    1 . . . . . . . . . . . 1 
    1 . . . . . . . . . . . 1 
    1 . . . . . . . . . . . 1 
    . 1 1 1 1 1 1 1 1 1 1 1 . 
    `, SpriteKind.InventoryCursor);
        this.cursor.z = 102;
        this.cursor.setFlag(SpriteFlag.RelativeToCamera, true);
        this.cursorIndex = 0;
        this.updateCursor();
    }

    moveCursor(direction: number) {
        this.cursorIndex = (this.cursorIndex + direction + this.slots.length) % this.slots.length;
        this.updateCursor();
    }

    updateCursor() {
        this.cursor.setPosition(this.sprite.left + 7 + this.cursorIndex * 16, this.sprite.top + 6);
    }

    addItem(item: Sprite): boolean {
        for (let slot of this.slots) {
            if (slot.item === null) {
                item.z = 100;
                slot.item = item;
                slot.item.setFlag(SpriteFlag.RelativeToCamera, true);
                slot.quantity += 1;
                sprites.destroy(item);
                this.display();
                return true;
            } else if (slot.item.image.equals(item.image)) {
                if (slot.quantity < 99) {
                    slot.quantity += 1;
                    sprites.destroy(item);
                    this.display();
                    return true;
                }
            }
        }
        return false;
    }

    removeItem(slotIndex: number): Sprite | null {
        if (slotIndex >= 0 && slotIndex < this.slots.length) {
            let slot = this.slots[slotIndex];
            if (slot.item !== null && slot.quantity > 0) {
                slot.quantity -= 1;
                let itemSprite = sprites.create(slot.item.image, slot.item.kind());
                if (slot.quantity == 0) {
                    sprites.destroy(slot.item);
                    slot.item = null;
                }
                this.display();
                return itemSprite;
            }
        }
        return null;
    }

    display() {
        for (let i = 0; i < this.slots.length; i++) {
            let slot = this.slots[i];
            if (slot.quantity > 0 && slot.sprite === null) {
                slot.sprite = sprites.create(slot.item.image, SpriteKind.InventorySlot);
                slot.sprite.z = 100;
                slot.sprite.setFlag(SpriteFlag.RelativeToCamera, true);
                slot.sprite.setPosition(this.sprite.left + 7 + i * 16, this.sprite.top + 6);
            } else if (slot.quantity == 0 && slot.sprite !== null) {
                sprites.destroy(slot.sprite);
                slot.sprite = null;
            }

            if (slot.quantityText) {
                slot.quantityText.destroy();
            }

            slot.quantityText = textsprite.create("" + slot.quantity, 0, 0);
            slot.quantityText.setPosition(this.sprite.left + 6 + i * 16 + 2, this.sprite.top + 6 + 10);
            slot.quantityText.setMaxFontHeight(5);
            slot.quantityText.z = 101;
            slot.quantityText.setFlag(SpriteFlag.RelativeToCamera, true);
        }
        this.updateCursor();
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace PixlimeRancherInventory {
    //% block="criar inventário"
    export function createInventory(): Inventory {
        return new Inventory();
    }

    //% block="adicionar item %item ao inventário $inventory"
    //% item.shadow=spritescreate
    export function addItem(inventory: Inventory, item: Sprite): boolean {
        return inventory.addItem(item);
    }

    //% block="remover item do slot %slotIndex do inventário $inventory"
    export function removeItem(inventory: Inventory, slotIndex: number): Sprite | null {
        return inventory.removeItem(slotIndex);
    }

    //% block="mostrar inventário $inventory na tela"
    export function displayInventory(inventory: Inventory): void {
        inventory.display();
    }

    //% block="mover cursor no inventário %inventory direção %direction"
    export function moveCursor(inventory: Inventory, direction: number): void {
        inventory.moveCursor(direction);
    }

    //% block="obter índice do cursor do inventário %inventory"
    export function getCursorIndex(inventory: Inventory): number {
        return inventory.cursorIndex;
    }
}

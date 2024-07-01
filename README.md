# Pixlime Rancher Inventory

This extension provides an inventory system for MakeCode Arcade.

## Usage

### Creating Inventory

```blocks
let inventory = PixlimeRancherInventory.createInventory()
```

### Adding an Item

```blocks
PixlimeRancherInventory.addItem(inventory, itemSprite)
```

### Removing an Item

```blocks
let removedItem = PixlimeRancherInventory.removeItem(inventory, slotIndex)
```

### Displaying the Inventory

```blocks
PixlimeRancherInventory.displayInventory(inventory)
```

### Moving the Cursor

```blocks
PixlimeRancherInventory.moveCursor(inventory, direction)
```

### Getting the Cursor Index

```blocks
let cursorIndex = PixlimeRancherInventory.getCursorIndex(inventory)
```



> Open this page at [https://oliveirahelena.github.io/pixlime-rancher-inventory/](https://oliveirahelena.github.io/pixlime-rancher-inventory/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/oliveirahelena/pixlime-rancher-inventory** and import

## Edit this project ![Build status badge](https://github.com/oliveirahelena/pixlime-rancher-inventory/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/oliveirahelena/pixlime-rancher-inventory** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/oliveirahelena/pixlime-rancher-inventory/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

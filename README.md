# Namngivning i projektet

## Routes & URL
- roomPath = url för vilket rum som ska visas = /rooms/:roomPath

## Rumsdata
- roomsData = all rumsdata från rooms.json
- currentRoom = rummet som visas just nu
- roomName =  rummets namn
- roomIsSolved = En variabel som jämför om användaren har fått reward item i inventory för att visa rätt bild.

## Inventory & Items
- inventory = spelarens items
- itemsData = all item-data från items.json
- InventoryProvider = gör inventory tillgängligt i hela appen
- selectedItem = item man klickat på
- itemToSolve = item-id som löser rummet
- itemToAdd = item-id som spelaren får efter att ha löst rummet
- rewardItem = itemet spelaren får efter att ha löst ett rum

## Funktioner
- InventoryProvider
- useInventory
- addItemToInventory
- setInventory
- onItemClick = funktion som körs när spelaren klickar på ett item
- handleItemClick = kontrollerar vilket item spelaren klickar på

## Komponenter
- HomePage
- RoomPage
- VictoryPage
- Nav
- Inventory
- Hint

## State
- lastRoomSolved = state för att kunna avgöra om sista rummet är löst.
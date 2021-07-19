stores = [] 


class GroceryList:
    def __init__(self, name, address):
        self.name = name
        self.address = address
        self.items = []

class Item: 
    def __init__(self, name, price): 
        self.name = name 
        self.price = price 

while True:

    print("1. Add Grocery List")
    print("2. View All Grocery Lists")
    print("3. Add Item to Grocery List")
    print("4. Delete store")
    print("5. Delete item within list")
    print("q: Quit ")

    choice = input("Enter a choice: ")

    if choice == "q":
        break
    
    elif choice == "1":
        store_name = input("Add store: ")
        store_address = input("Add address: ")
        grocery_list = GroceryList(store_name, store_address)
        stores.append(grocery_list)
    
    elif choice == "2": 
        
        for store in stores: 
            print(store.name)
            for item in store.items: 
                print(item.name)

    elif choice == "3": 
        
        for index in range(0, len(stores)): 
            store = stores[index]
            print(f"{index + 1}. {store.name}")
        
        store_number = int(input("Enter Store Number: "))
        store = stores[store_number - 1]
        item_name = input("Enter item name: ")
        item_price = float(input("Enter item price: ")) 
        item = Item(item_name, item_price)
        store.items.append(item)

    elif choice == "4":

      for index in range(0, len(stores)):
        store = stores[index]
        print(f"{index +1}. {store.name}")
      delete_store = int(input("Delete which store? "))
      del stores[delete_store -1]

    elif choice == "5":
      for index in range(0, len(stores)):
        print(f"{index +1}. {stores[index].name}")
      choice = int(input("Which store to delete items from? "))
      store = stores[choice -1]

      for index in range(0, len(store.items)):
        item = store.items[index -1]
        print(f"{index +1}. {item.name}")
      delete_item = int(input("Which item do you want to delete? "))
      del store.items[delete_item -1]
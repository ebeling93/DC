import json
from datetime import datetime
fmt = "%H:%M:%S"

#
class Table:
  def __init__(self, table):
    self.table_number = table
    self.start_time = None
    self.end_time = None
    self.total_time = None
    self.occupied = False

def format_time(dt):
  if dt == None:
    return "N/A"
  else:
    return dt.strftime(fmt)

def time_difference(start, end):
  return end - start 

tables = []
for index in range(0, 12):
    table = Table(index +1)
    tables.append(table)

def save_file(): 
  array = []
  with open("check_logs.json", "w") as file:
    for table in tables:
      json_table = {"TableNo": table.table_number, "Start": format_time(table.start_time), "End": format_time(table.end_time), "Total": format_time(table.total_time)}
      array.append(json_table)
    json.dump(array, file)
    


while True:
  print("1. Check-Out table ")
  print("2. Check-In")
  print("3. View all tables")
  print("4. Exit")

  choice = input("Enter option: ")



  if choice == "1":
    for table in tables:
      print(f"Table {table.table_number}")
    choice = int(input("Which table do you want to check out? "))
    table = tables[choice -1]
    table.start_time = datetime.now()
    table.occupied = True 

  elif choice == "2":
    for table in tables:
      print(f"Table {table.table_number}")
    choice = int(input("Which table do you want to check in? "))
    table = tables[choice -1]
    table.end_time = datetime.now()
    table.occupied = False 
    #print(time_difference(table.start_time, datetime.now))

  elif choice == "3":
    for table in tables:
      print(f"Table {table.table_number} - {table.occupied} - {table.start_time} - {table.end_time} - {table.total_time}")

  elif choice == "4":
    save_file()
    break


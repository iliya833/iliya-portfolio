# ۱. گرفتن تعداد از کاربر
n = int(input("چند دستگاه در شبکه وجود دارد؟ "))

# ۲. شروع حلقه
for i in range(1, n + 1):
    if n == 3 :
        print("the device is not okey")
    else :

       print(f"در حال بررسی وضعیت دستگاه شماره {i}...")
       print("device is okey")

print("بررسی تمام شد!")


i = 1

while i <= 5 :
     print(i)
     i = i +1


x = 1


for i in range(1, x + 1):
   passport =  input("inter your password")
   if passport == x < 0:
    print(
        "the answer is correct"
    )
    break 
   else:
    print("the answer is not correct")
   x += 1

   if x >= 3 :
    print("acsses is denid")

    x = 1


for i in range(1, x + 1):
   passport =  input("inter your password")
   if passport == x < 0:
    print(
        "type the next number"
    )
   else:
    print("goodby")
   break

   
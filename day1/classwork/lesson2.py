print("hello world")
print(10)

#syntax  --> კოდის წერის წესი

#data types --> მონაცემთა ტიპები

#string --> ყველაფერი რაც იწერება ბრჭყალებში (უმეტესად ტექსტი)

#boolean --> True & False

#integers --> მთელი რიცხვები 10, 5 ,6 ,-10
#float --> ათწილადები 1,2  3,4 

#variables --> ცვლადები 

#camelCase , snake_case
name = "giorgi"
print(name)
name = "luka"
print(name)

სახელი = "გიგი"
print(სახელი)

#debugging --> შეცდომის შესწორება

# +, -, *, /, //, ** , % 

print("gio" + "dato")  #კონკატენაცია სტრინგების ჯამი
print("gio" * 10) #რიცხვზე მრავლდება სტრინგი


print(10 / 5)
print(10//5)
print(10 / 3)
print(10 //3 )  # ამრგვალებს ფუძემდე 

# > ; < ; >= ; <= ; == ; != (ar udris)

print(10 > 5)

#and ; or ; not აბრუნებს ურალოდ ტრუ გახდება ფალსე

#input --> ინფორმაცია რომელიც კომპიუტერში შედის
#output --> ინფორმაცია რაც გამოდის

print("hello world")
# name = input("enter your name:") #ყველა ფუნქციას უწერია ()
print(name)



#Hello , my name is NAME lastname and i am Age years old. i live in COUNTRY, CITY 

name = input("enter your name: ")
lastname =  input("enter your lastname: ")
age =  input("enter your age: ")
country =  input("enter the  country: ")
city =  input("enter your city: ")

print("Hello , my name is " + name +" "+ lastname + " and i am" + age + "i live in " + country + "and the city " + city +'.')
# f''
print(f"Hello , my name is {name} {lastname} and i am {age} years old and i live in {country} {city}")

type('giorgi') #sheamowmebs monacems
print(type("giorgi"))

#data type conversion 

#str()
#int()
#float()
#bool()

print(int())

#inplicit --> როდესაც თავად კომპიუტერი გადააქცევს
#explicit --> როდესაც ჩვენ გადავქცევთ მონაცემთა ტიპს სხვა მონაცემთა ტიპად

a = 10.5
b = 10 
print(a + b)
# () , not , and , or
print((True and not False) or (False and True) or (not (False or False) and True) and (True or not (False and True)))
print(False)


# control flow --> კოდის მიყოლება

#sequencing , iteration , selection 
#sequencing --> თანმიმდევრული ზემოდან ქვევით
#iteration --> აქვს ლუპები
#while loop ; for loop

for i  in range(10) : #rangeshui shegvuidzlia 3 argumenti
    print(i)


for i in range(5 , 20 , 2):
    print(i)

# while 10 > 5 : # იქამდე გრძელდება სანამ ტრუ იქნება
#     print('hello world')    

a = 0

while 10 > a :
    print('hello world')
    a += 1

# selection 

#if / elif / else

if 10 > 5 :
    print("hello world")
elif 10 < 5 :
    print("bye")
else : 
    print("gio")   


player_1 = input("rock,paper,scissors: ") 

player_2 = input("rock,paper,scissors: ") 

if player_1 == player_2 :
    print("draw")
elif player_1 == "rock" and player_2 == "paper" :
    print("player 2 won")
elif  player_1 == "rock" and player_2 == "scissors" :
    print("player 1 won")
elif player_1 == "paper" and player_2 == "scissors" :
    print("player 2 won")
elif  player_1 == "paper" and player_2 == "rock" :
    print("player 1 won")
elif player_1 == "scissors" and player_2 == "rock" :
    print("player 2 won")
elif  player_1 == "scissors" and player_2 == "paper" :
    print("player 1 won")
else :
    print("u did something wrong")


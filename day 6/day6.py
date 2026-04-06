numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


odd = list(filter(lambda x : x % 2 != 0, numbers))

print(odd)
#filter funqcia filtravs sias chveni pirobis mixedvit
#gadaecema fuqncia da cvladi
#gvibrunebs mokle sias


res = []
res = list(map(lambda x : x**2 , numbers))

print(res)

#map funqciit vaxdent moqmedebebs siaze
#viyenebt fuqncias da cvlads samoqmedod
#gvibrunebs igive sias


Names = ["Giorgi","Tiko","Avto","Tako","Anano","Ana","Andria","Aleko"]

filtered = list(filter(lambda x : x[0] == "A", Names))

print(filtered)

def food_ranking (category,counter,*foods):
    for food in foods :
        print(f"{category} : {counter} {food}")


food_ranking("food" ,1, "shawarma","xinkali","doner","kebab","pizza","burger")
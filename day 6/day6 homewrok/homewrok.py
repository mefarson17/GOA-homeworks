# Assignment N 1
print("Assignment N 1")
numbers = [1,2,3,4,5,6,7,8,9,10]

Doubling =  list(map(lambda x : x*2 , numbers))

print(Doubling)


# Assignment N 2
print("Assignment N 2")
words = ["giorgi","moswavle","programisti","investori","biznesi"]

capitalization = list(map(lambda x : x.capitalize(), words))

print(capitalization)


# Assignment N 3
print("Assignment N 3")
num = [1,2,3,4,5,6,7,8,9,10]

odds = list(filter(lambda x : x % 2 == 0 , num))

print(odds)


# Assignment N 4
print("Assignment N 4")
def summing(*number) :
    return sum(number)

print(summing(1,2,3,4,5,6))


# Assignment N 5
print("Assignment N 5")

def information(**students) :
    for key , value in students.items():
        print(f"{key} : {value}")
    
information ( name="giorgi" , status="student" , age=18 ,subject="programing" ) 
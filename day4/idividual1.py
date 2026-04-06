# data type new

#list --> სია

#slicing --> 0-5 - 2 ნულიდან ხუთამდე ორის მიმატებით


#ფუნქცია


# def greet(name):
#     return "hello" + name

# print(greet(" gio"))
likes = ["giorgi" , "dato"]
def likes(names):
    for i in names :
        if i == 0 :
            return "no one likes this"
        elif i == 1 :
            return f"{names[0]} + likes this"
        elif i == 2 :
            return f"{names[0]} + and + {names[1]} +like this"
        elif i == 3 :
            return f"{names[0]} + , + {names[1]} + and + {names[2]} + like this"
        else :
            return f"{names[0]}, {names[1]} and 2 others others like this"
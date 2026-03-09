print("Hello my name is Giorgi Meparishvili and this is my first project")


from turtle import *

shape("turtle")
# speed(15)

#we want to paint the house
# step one draw a square
width(5)
color("brown")
begin_fill()
left(90)
forward(200)

left(90)
forward(200)

left(90)
forward(200)

left(90)
forward(200)
end_fill()
#end of square


#the door
backward(75)
color("black")
begin_fill()
left(90)
forward(90)
left(90)
forward(50)
left(90)
forward(90)
left(90)
forward(50)
end_fill()
penup()
goto(0, 200)
pendown()

#roof
color("red")
begin_fill()
left(120)
forward(200)
left(120)
forward(200)
end_fill()

#windows 1
penup()
goto(-40,150)
pendown()
color("light blue")
begin_fill()
left(120)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
right(90)
forward(30)
end_fill()

#window2
penup()
goto(-160 , 150)
pendown()

color("lightblue")
begin_fill()
left(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
left(90)
forward(30)
end_fill()


exitonclick()
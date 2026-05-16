print("register as owner ")
ownerName = input("enter your name : ")
ownerLastName = input("enter yor lastname : ")
ownerNumber = input("enter your mobiule number : ")

userOwner = {
    "id" : 1,
    "name" : ownerName ,
    "lastName" : ownerLastName,
    "mobile" : ownerNumber
}

ownerArray = []
ownerArray.append(userOwner)

print("register your bussines ")

bussinesName = input("enter bussines name : ")
bussinesNumber = input("commercial number of bussines : ")

ownersBussines = {
    "id" : 1,
    "ownerId" : userOwner["id"],
    "nameOfBussines" : bussinesName,
    "numberOfBussines" : bussinesNumber,
}

bussines = []
bussines.append(ownersBussines)

def get_owner_with_id (owner_id) :
    owner = next((i for i in ownerArray if i["id"] == owner_id),None)
    bussine = next((j for j in bussines if j["ownerId"] == owner_id),None)
    if owner and bussine :
        print(f"🤵   owner : {owner["name"]} {userOwner["lastName"]}")
        print(f" 📱  mobile: {owner["mobile"]}")
        print(f" 🏦  bussines : {bussine["nameOfBussines"]}")
        print(f" ☎️  commercial : {bussine["numberOfBussines"]}")
        return True
    return False


employeeName = input("enter staff members name : ")
employeeLastname = input("enter staff members lastname : ")
employeeNumber = input("enter staff members mobile number : ")

member = {
    "name" : employeeName,
    "lastname" : employeeLastname,
    "number" :employeeNumber,
    "id" : 2,
    "workId" : 1
}

staffMembers = []
staffMembers.append(member)

def get_member_with_bussines (staff_id) :
    employee = next((o for o in staffMembers if o["id"] == staff_id),None)
    if employee :
        bussin = next((l for l in bussines if l["id"] == member["workId"]),None)
        if bussin :
            print(f"🤵 name: {employee['name']} {employee['lastname']}")
            print(f"📱 number: {employee['number']}")
            print(f"🏢 works at: {bussin['nameOfBussines']}")
    else :
        print("❌  could not find this employee")

get_owner_with_id(1)

get_member_with_bussines(2)

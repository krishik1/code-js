class User  {
    static id
    static cache = {
        '1':'has some value'
    }
    constructor(name,age,income){
        this.id=User.id++
        this.name=name
        this.age=age
        this.income=income
    }

    static sortByAge(user1,user2) {
        return user1.age-user2.age
    }

    static sortByIncome(user1,user2) {
        return user1.income-user2.income
    }

    static {
        console.log('Initiated....')
    }
    
    static hasCache() {
        console.log(this.cache)
    }


}


// const user1 = new User('Krishik',25,10000)
// const user2 = new User('Jaga',27,30000)
// const user3 = new User('Adi',26,20000)

// const users = [user1,user2,user3]

// // console.log(users.sort(User.sortByIncome))
// console.log(users.sort(User.sortByAge))
User.hasCache()

User.hasCache()


// Note : this in case of static variables is applicable for only both variable and variable is static

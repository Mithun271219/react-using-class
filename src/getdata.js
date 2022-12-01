import React from "react"
import Git from "./templet"

class Person{
    constructor(id, name, age, city){
        this.id=id
        this.name=name
        this.age=age
        this.city=city
    }
}

let person1= new Person (1,'mithun',23,'ask')
let person2= new Person (2,'kushal',32,'blr')
let person3= new Person (3,'rohan',16,'kar')

let person=[person1,person2,person3]
console.log(person)

class Reading extends React.Component{
    render(){
        return(
            <div>
                {
                    //here should use this.person.map() if the data is in the form of object
                    person.map((p)=>{
                        return(
                            <Git key={p.id} {...p}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default Reading
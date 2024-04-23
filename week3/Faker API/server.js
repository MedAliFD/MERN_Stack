const express = require("express")
const app = express()
const PORT = 8000

const { fakerDE: faker } = require('@faker-js/faker');


    const createUser = () => {
        const newFakeU = {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.number(),
            lastName:faker.person.lastName(),
            firstName:faker.person.firstName(),
            _id: faker.string.uuid(),

        };
        return newFakeU;
    };
    const createCompany = () => {
        const newFakeC = {
            _id: faker.string.uuid(),
            name: faker.company.name(),
            address: {
              street: faker.location.street(),
              city: faker.location.city(),
              state: faker.location.state(),
              zipCode: faker.location.zipCode(),
              country: faker.location.country() }
            
            
        };
        return newFakeC;
    }; 

    const newFakeUser= createUser();
    const newFakeCompany = createCompany();


app.get("/api",(req,res)=> {
    res.json(res)
})
app.listen(PORT, ()=> console.log(` >>>> server is running on port ${PORT} and is listening for REQuest and RES <<<< `))

app.get("/api/users/new",(req,res)=>{
    const newFakeUser = createUser();
    res.json({User : newFakeUser});
})

app.get("/api/companies/new",(req,res)=>{
    const newFakeCompany = createUser();
    res.json({User : newFakeCompany});
})

app.get("/api/user/company",(req,res)=>{
    const newFakeUser = createUser();
    const newFakeCompany = createUser();
    res.json({User : newFakeUser, company : newFakeCompany});
})


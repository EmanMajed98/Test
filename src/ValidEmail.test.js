import isValidEmail from "./validEmail";

describe("valid Email",()=>{
test("valid Email",()=>{
const email="TalentVally@gmail.com"
expect(isValidEmail(email)).toBe(true)

})

// test("valid Email1",()=>{
//     const email="TalentVally@gmail.com"
//     expect(email).toMatch(/@gmail.com/)
    
//     })
})
const test=require('./UserRegistration')
 let assert = require('chai').assert;
describe('User Registration positive Mocha Test',()=> {
        it('should return true if the name pattern is correct',(done)=> {
        assert.isTrue(test.checkFirstNameOrLastName("Rajas"),)
        done();
    }).timeout(15000)
        it('should return true if the email pattern is correct',(done)=> {
        assert.isTrue(test.checkEmailId("itsmerajas2@gmail.com"));
        done();
    }).timeout(15000)
        it('should return true if mobile pattern is correct',(done)=>{
            assert.isTrue(test.checkMobileNumber("8286054654"));
            done();
        }).timeout(15000)
        it('should return true if password pattern is correct',(done)=>{
            assert.isTrue(test.checkPassword("Rajas@1312"));
            done();
        }).timeout(15000)     
});
describe('User Registration negative Mocha Test',()=> {
    it('should return false if the name pattern is incorrect',(done)=> {
    assert.isTrue(test.checkFirstNameOrLastName("rajas"),)
    done();
}).timeout(15000)
    it('should return false if the email pattern is incorrect',(done)=> {
    assert.isTrue(test.checkEmailId("itsmerajas2@@gmail.com"));
    done();
}).timeout(15000)
    it('should return false if mobile pattern is incorrect',(done)=>{
        assert.isTrue(test.checkMobileNumber("828605465491"));
        done();
    }).timeout(15000)
    it('should return false if password pattern is incorrect',(done)=>{
        assert.isTrue(test.checkPassword("rajas@1312"));
        done();
    }).timeout(15000)     
});
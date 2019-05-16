var assert = require('assert');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;
chai.use(chaiHttp);
require('dotenv').config()
describe('Test server', function() {
  describe('Server is running', function() {
    it('should return 200 when request de localhost with the port defined in .env file', function() {
        chai.request('http://localhost:'+process.env.PORT)
        .get('/').end(function(err,res){
            if(err){
                console.log(err)
            }
            expect(res).to.have.status(200)
            
        })
    });
  });
});
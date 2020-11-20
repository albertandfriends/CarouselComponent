let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../server/index.js');
//Our parent block
describe('/GET image', () => {
     it('it should GET a image', (done) => {
     chai.request(server)
         .get('/api/trips/1/photos')
         .end((err, res) => {
               (res).should.have.status(200);
               (res.body).should.be.a('object');
               done();
            });
         });
     });
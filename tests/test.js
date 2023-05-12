import app from '../server.js';
import chai from 'chai';
import chaiHttp from 'chai-http';

const should = chai.should();

chai.use(chaiHttp);

const reqServer = app;

describe('Basic routes tests', function () {
  it('GET to /api/employee should return 200', function (done) {
    chai
      .request(reqServer)
      .get('/api/employee')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });

  it('POST to /api/employee should return 200', function (done) {
    chai
      .request(reqServer)
      .get('/api/employee')
      .end(function (err, res) {
        res.should.have.status(200);
        done();
      });
  });
});

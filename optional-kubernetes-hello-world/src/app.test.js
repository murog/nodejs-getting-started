var expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./app.js')

chai.use(chaiHttp);

describe('simple', function() {
    it('should work!', function() {
        expect(true).to.be.true;
    });
});

describe('hello world', function() {
    it('should load', function(done) {
        chai.request('http://localhost:8080')
            .get('/')
                .end(function(err, res) {
                    const result = res.statusCode;
                    expect(result).to.equal(200)
                    done()
                });
     });
});

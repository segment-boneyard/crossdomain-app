
var assert = require('assert');
var CrossdomainApp = require('../lib');
var express = require('express');
var request = require('supertest');

describe('crossdomain-app', function (done) {
  it('should render crossdomain.xml', function (done) {
    var subapp = new CrossdomainApp({ domain: '*.segment.io' }).app();
    var app = express().use('/', subapp);
    request(app)
      .get('/crossdomain.xml')
      .expect(200)
      .expect('Content-Type', /xml/)
      .end(done);
  });
});
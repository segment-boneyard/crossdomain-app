
var crossdomain = require('crossdomain');
var express = require('express');


/**
 * Expose `CrossdomainApp`.
 */

module.exports = CrossdomainApp;


/**
 * Create a new `CrossdomainApp`.
 *
 * @param {Object} options
 *   @property {Strijng} domain
 */

function CrossdomainApp (options) {
  if (!(this instanceof CrossdomainApp)) return new CrossdomainApp(options);
  this.xml = crossdomain(options);
}


/**
 * Return an express app for mounting.
 *
 * @return {App}
 */

CrossdomainApp.prototype.app = function () {
  var render = this.render.bind(this);
  return express().all('/crossdomain.xml', render);
};


/**
 * Render the crossdomain.xml.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Function} next
 */

CrossdomainApp.prototype.render = function (req, res, next) {
  res.set('Content-Type', 'application/xml; charset=utf-8');
  res.send(this.xml, 200);
};

var crossdomain = require('crossdomain');
var express = require('express');


/**
 * Expose `Crossdomain`.
 */

module.exports = Crossdomain;


/**
 * Create a new `Crossdomain`.
 *
 * @param {Object} options
 *   @property {Strijng} domain
 */

function Crossdomain (options) {
  if (!(this instanceof Crossdomain)) return new Crossdomain(options);
  this.xml = crossdomain(options);
}


/**
 * Return an express app for mounting.
 *
 * @return {App}
 */

Crossdomain.prototype.app = function () {
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

Crossdomain.prototype.render = function (req, res, next) {
  res.set('Content-Type', 'application/xml; charset=utf-8');
  res.send(this.xml, 200);
};
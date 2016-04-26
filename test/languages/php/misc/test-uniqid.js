// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var uniqid = require('/Users/kvz/code/phpjs/src/php/misc/uniqid.js')

describe('src/php/misc/uniqid.js', function () {
  it('should pass example 1', function (done) {
    var $id = uniqid()
    var $result = $id.length === 13
    var expected = true
var $id = uniqid()
    var result = $id.length === 13
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var $id = uniqid('foo')
    var $result = $id.length === (13 + 'foo'.length)
    var expected = true
var $id = uniqid('foo')
    var result = $id.length === (13 + 'foo'.length)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var $id = uniqid('bar', true)
    var $result = $id.length === (23 + 'bar'.length)
    var expected = true
var $id = uniqid('bar', true)
    var result = $id.length === (23 + 'bar'.length)
    expect(result).to.deep.equal(expected)
    done()
  })
})
'use strict'

// Import
const deepEqual = require('assert-helpers').deepEqual
const joe = require('joe')
const sortObject = require('../../')

// Task
joe.suite('sortObject', function (suite, test) {
	test('should work', function () {
		// Prepare
		const fixture = {
			c: true,
			a: true,
			b: null,
			d: [{
				c: true,
				a: true,
				b: null
			}, {
				c: true,
				a: true,
				b: null,
				d: [{
					c: true,
					a: true,
					b: null
				}]
			}]
		}
		const expected = {
			a: true,
			b: null,
			c: true,
			d: [{
				a: true,
				b: null,
				c: true
			}, {
				a: true,
				b: null,
				c: true,
				d: [{
					a: true,
					b: null,
					c: true
				}]
			}]
		}
		const actual = sortObject(fixture)
		deepEqual(actual, expected, 'result to be as expected')
	})
})

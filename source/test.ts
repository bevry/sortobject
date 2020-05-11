// Import
import { deepEqual } from 'assert-helpers'
import kava from 'kava'
import sortObject from './index.js'

// Task
kava.suite('sortObject', function (suite, test) {
	test('should work', function () {
		// Prepare
		const fixture = {
			c: true,
			a: true,
			b: null,
			d: [
				{
					c: true,
					a: true,
					b: null,
				},
				{
					c: true,
					a: true,
					b: null,
					d: [
						{
							c: true,
							a: true,
							b: null,
						},
					],
				},
			],
		}
		const expected = {
			a: true,
			b: null,
			c: true,
			d: [
				{
					a: true,
					b: null,
					c: true,
				},
				{
					a: true,
					b: null,
					c: true,
					d: [
						{
							a: true,
							b: null,
							c: true,
						},
					],
				},
			],
		}
		const actual = sortObject(fixture)
		deepEqual(actual, expected, 'result to be as expected')
	})
})

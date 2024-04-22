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

	test('works well when object values are not traversable objects', function () {
		// Prepare
		const fixture = {
			c: new Date('2021-01-01'),
			a: new Set([1, 2, 3]),
			b: null,
			d: [
				{
					c: new Date('2021-01-03'),
					a: new Date('2021-01-04'),
					b: null,
				},
				{
					c: new Set([4, 5, 6]),
					a: new Date('2021-01-06'),
					b: null,
					d: [
						{
							c: new Date('2021-01-07'),
							a: new Date('2021-01-08'),
							b: null,
						},
					],
				},
			],
		}
		const expected = {
			a: new Set([1, 2, 3]),
			b: null,
			c: new Date('2021-01-01'),
			d: [
				{
					a: new Date('2021-01-04'),
					b: null,
					c: new Date('2021-01-03'),
				},
				{
					a: new Date('2021-01-06'),
					b: null,
					c: new Set([4, 5, 6]),
					d: [
						{
							a: new Date('2021-01-08'),
							b: null,
							c: new Date('2021-01-07'),
						},
					],
				},
			],
		}
		const actual = sortObject(fixture)
		deepEqual(actual, expected, 'result to be as expected')
	})
})

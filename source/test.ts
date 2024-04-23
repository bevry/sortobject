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

	test('works well when object values are different that plain objects', function () {
		// Prepare
		class TestClass {
			public value = 'test'
		}
		class TestClass2 extends TestClass {
			public value2 = 'test'
		}

		const testInstanceOfClass = new TestClass()
		const testInstanceOfClass2 = new TestClass2()

		const map = new Map()
		map.set('test', 'test')

		const fixture = {
			c: new Date('2021-01-01'),
			a: new Set([1, 2, 3]),
			b: [1, 2, 3],
			d: [
				{
					d: null,
					c: new Date('2021-01-03'),
					a: new Date('2021-01-04'),
					b: map,
				},
				{
					c: new Set([4, 5, 6]),
					a: new Date('2021-01-06'),
					b: testInstanceOfClass,
					e: {},
					d: [
						{
							c: new Date('2021-01-07'),
							a: new Date('2021-01-08'),
							d: testInstanceOfClass2,
							b: null,
						},
					],
				},
			],
		}
		const expected = {
			a: new Set([1, 2, 3]),
			b: [1, 2, 3],
			c: new Date('2021-01-01'),
			d: [
				{
					a: new Date('2021-01-04'),
					b: map,
					c: new Date('2021-01-03'),
					d: null,
				},
				{
					a: new Date('2021-01-06'),
					b: testInstanceOfClass,
					c: new Set([4, 5, 6]),
					d: [
						{
							a: new Date('2021-01-08'),
							b: null,
							c: new Date('2021-01-07'),
							d: testInstanceOfClass2,
						},
					],
					e: {},
				},
			],
		}

		const actual = sortObject(fixture)

		deepEqual(actual, expected, 'result to be as expected')
	})
})

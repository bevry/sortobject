# Import
{expect} = require('chai')
joe = require('joe')
sortObject = require('../../')

# Task
joe.describe 'sortObject', (describe,it) ->
	it 'should work', ->
		# Prepare
		fixture =
			c: true
			a: true
			b: null
			d: [
				c: true
				a: true
				b: null
			,
				c: true
				a: true
				b: null
				d: [
					c: true
					a: true
					b: null
				]
			]
		expected =
			a: true
			b: null
			c: true
			d: [
				a: true
				b: null
				c: true
			,
				a: true
				b: null
				c: true
				d: [
					a: true
					b: null
					c: true
				]
			]

		actual = sortObject(fixture)

		expect(actual).to.deep.equal(expected)

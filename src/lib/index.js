# Define
sortObject = (obj,comparator) ->
	# Arrays
	if Array.isArray(obj)
		result = []
		for value in obj
			# Recurse if object or array
			value = sortObject(value,comparator)  if value? and typeof value is 'object'  # Objects and Arrays
			# Push
			result.push(value)

	# Objects
	else
		result = {}
		sortedKeys = Object.keys(obj).sort(comparator)
		for key in sortedKeys
			# Fetch
			value = obj[key]
			# Recurse if object or array
			value = sortObject(value,comparator)  if value? and typeof value is 'object'
			# Push
			result[key] = value

	# Return
	return result

# Export
module.exports = sortObject
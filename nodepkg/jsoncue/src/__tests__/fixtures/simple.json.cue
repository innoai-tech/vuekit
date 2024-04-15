// multiline string value
mlStr: """
	1
		22
			333
	"""

// string value
str: "str value"

// bytes value
// which will base64 encode when JSON.stringify
bytes: '{}'

// multiline bytes value
mlBytes: '''
	a:
	  b: 1
	'''

// integer value
int: 1

// float value
float: 1.1

// array value
array: [
	true,
	false,
	null,
]

// nested value
nested: a: {
	// inline
	b: {c: 1, d: 2}
}

// overwrites
nested: a: b: c: 2
nested: a: b: d: 3

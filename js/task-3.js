function getElementWidth(content, padding, border) {
	console.log(
		parseFloat(content) + (parseFloat(padding) + parseFloat(border)) * 2
	)
}
getElementWidth('50px', '8px', '4px')
getElementWidth('60px', '12px', '8.5px')
getElementWidth('200px', '0px', '0px')

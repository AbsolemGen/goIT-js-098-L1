function makeTransaction(quantity, pricePerDroid) {
	console.log(
		`You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`
	)
}
makeTransaction(3, 1000)
makeTransaction(5, 3000)
makeTransaction(10, 500)

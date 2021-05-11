class Car {
	constructor(make, model) {
		this.make = make
		this.model = model
		this.odometer = 0
	}

	drive(...distances) {
		if (distances.find(value => value < 0)) {
			throw new Error("Cannot drive a negative distance")
		}

		const total = distances.reduce((acc, value) => acc + value, 0)
		this.odometer += total

		return total
	}

	async location() {
		// pretend this data comes from the result of a promise
		return {
			latitude: 40.745794,
			longitude: -111.874035,
		}
	}
}

module.exports = Car

const Car = require("./car")

test("runs our first test", () => {
	expect(2 + 2).toBe(4)
	expect(["foo", "bar"]).toHaveLength(2)
	expect(["foo", "bar"].length).toBe(2)
	expect(5 * 5).toBeLessThan(30)
	// toBe doesn't work on objects
	expect({ foo: "bar" }).toEqual({ foo: "bar" })
	expect({ foo: "bar" }).not.toEqual({ foo: "baz" })
})

describe("car unit tests", () => {
	let car
	beforeEach(() => {
		// reset the car for each test
		car = new Car("tesla", "cybertruck")
	})

	it("creates new car", () => {
		expect(car.make).toBe("tesla")
		expect(car).toHaveProperty("model", "cybertruck")
		expect(car.make).toBeDefined()
		expect(car.model).toBeDefined()
		// allows us to add to the class over time without breaking the test
		expect(car).toMatchObject({ make: "tesla", model: "cybertruck" })
	})

	it("has the ability to drive", () => {
		expect(car.drive).toBeInstanceOf(Function)
		expect(car.drive(5)).toBe(5)
		expect(car.drive(30)).toBe(30)
		expect(car.drive(0)).toBe(0)
		expect(() => car.drive(-1)).toThrow(Error)
	})

	it("increases the mileage of car", () => {
		expect(car.odometer).toBe(0)
		car.drive(5)
		expect(car.odometer).toBe(5)
		car.drive(30)
		expect(car.odometer).toBe(35)
		car.drive(0)
		expect(car.odometer).toBe(35)
	})

	it("has ability to drive multiple trips", () => {
		expect(car.drive(1, 2, 3)).toBe(6)
		expect(car.drive(4, 8, 15, 16, 23, 42)).toBe(108)
		expect(() => car.drive(1, -2)).toThrow(Error)
		expect(car.odometer).toBe(114)
	})

	it("gives us location of car", async () => {
		// arrange
		// (any setup required for this test... none required here)
		// act
		const res = await car.location()
		// assert
		expect(typeof res.latitude).toBe("number")
		expect(typeof res.longitude).toBe("number")
	})
})

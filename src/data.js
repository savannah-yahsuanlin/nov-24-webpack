const faker = require('faker')
const companies = new Array(50).fill('').map(_=> faker.company.companyName())
const productMap = companies.reduce((acc, company) => {
	acc[company] = new Array(1 + faker.random.number(2)).fill('-').map(_ => faker.commerce.productName())
	return acc
}, {})


module.exports = {
	faker,
	companies,
	productMap
}
const { companies, productMap } = require('/src/data')
const render = require('./render')
const companyList = document.querySelector('#company-list')


let curr = window.location.hash.slice(1)*1

render({ companies, productMap, companyList, curr })

window.addEventListener('hashchange', () => {
	curr = window.location.hash.slice(1)*1
	render({ companies, productMap, companyList, curr })
})
const render = ( {companies, productMap, companyList, curr}) => {
	const html = `
		${ companies.map((company, idx) =>`
			<p><strong>${idx+1}</strong></p>
				<a href="#${idx}"> ${ company }</a>
				${
					curr === idx ? `
					<ul>
						${
							productMap[company].map(product => `
							<p>
								- ${ product }
								
							</p>
							`
							).join('')
						}
					
					</ul>
					` : ''
				}
		`).join('')}
	`
	companyList.innerHTML = html
}

module.exports = render
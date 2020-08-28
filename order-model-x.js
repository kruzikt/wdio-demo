// Save this script to smoke.js
describe('Tests on tesla.com', () => { 
    it('open homepage and check title', () => {
        browser.url('https://www.tesla.com/')
        const title = 'Electric Cars, Solar & Clean Energy | Tesla'
        const titleElm = $(`//title[contains(text(),"${title}")]`)
        browser.waitForloadEventEnd()
        expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
    });
    it('go to model X page', () => {
        menuItemModelX = ${'#block-mainheadernavigation > ol > li:nth-child(3) > a'}
        menuItemModelX.click()
        const title = 'Model X | Tesla Česko'
        const titleElm = $(`//title[contains(text(),"${title}")]`)
        browser.waitForloadEventEnd()
        expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
    });
    it('click to order model X', () => {
        orderModelX = ${'.hero-callouts--button a'}
        orderModelX.click()
        const title = 'Navrhněte si svůj Model X | Tesla'
        const titleElm = $(`//title[contains(text(),"${title}")]`)
        browser.waitForloadEventEnd()
        expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
    });
  })
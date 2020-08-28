// Save this script to smoke.js
describe('Smoke monitoring on tesla.com', () => { 
    describe('HomePageeee', () => {
      it('open', () => {
        browser.url('https://www.tesla.com/')
        console.log(browser.getTitle())
        const title = 'Electric Cars, Solar & Clean Energy | Tesla'
        const titleElm = $(`//title[contains(text(),"${title}")]`)
        browser.waitForloadEventEnd()
        expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
      });
    });
  })

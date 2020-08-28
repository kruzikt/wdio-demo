// Save this script to smoke.js
describe('Smoke monitoring on tesla.com', () => {
    describe('HomePage', () => {
      it('open', () => {
        browser.url('https://www.tesla.com/')
        console.log(browser.getTitle())
        const title = 'Ellectric Cars, Solar & Clean Energy | Tesla'
        const titleElm = $(`//title[contains(text(),"${title}")]`)
        browser.waitForloadEventEnd()
        expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
      });
      it('save clients to elasticsearch', () => {
  let settings = {
    payload: {
      'firstname': 'Radim',
      'secondname': 'Daniel',
      'surname': 'Panek',
      'isSDET': true,
      'clientsID': Math.floor(Math.random() * 100)
    },
    indexName: 'clients'
  }
  browser.SaveToElastic(settings)
});
   it('save memory', () => {
      const memory = browser.execute(() => {
        return performance.memory
      })
      let settings = {
        payload: memory,
        indexName: 'jsmemory',
      }
      browser.SaveToElastic(settings)
    });
    it('save tesla showcase sections', () => {
      const sectionsList = browser.execute(() => {
        return document.querySelectorAll('a')
      })
      let d = new Date();
      let datestringIndex = d.getFullYear() + "." + ("0" + (d.getMonth() + 1)).slice(-2) + "." + ("0" + d.getDate()).slice(-2);
      let settings = {
        payload: {
          sections: sectionsList.length,
          timestamp: new Date().toISOString()
        },
        indexName: `links-${datestringIndex}`,
      }
      browser.SaveToElastic(settings)
    });
    });
  })

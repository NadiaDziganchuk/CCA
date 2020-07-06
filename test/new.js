const selectorCnt = require('./../data/selectors.json').counter;
const expectedDCF = require('./../data/expected.json').counterValue;
const {addNewDefaultCounter} = require('./../helpers/newDefaultCounter');


describe('newDefaultCounter', function () {
    before(() => {
        browser.url('');
    });

    it('should check add new default counter after delete ', function () {
        addNewDefaultCounter(23, 'New Name');
        const result = $$(selectorCnt.counterName)[1].getText();
        expect(result).toEqual(expectedDCF.newCounterValue);
    });
});

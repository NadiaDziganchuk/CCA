const {describe} = require("mocha");
const selectorCnt = require('./../data/selectors.json').counter;
const expectedCnt = require('./../data/expected.json').counter;
const expectedDCF = require('./../data/expected.json').defaultCounterFunctionality;
const inputNumber = require('./../helpers/inputNumber');
const value = require('./../data/value.json').fieldValue;

describe('Default counter functionality', function () {

    it('TC-040 Subtract 1 gives -1', function () {
        browser.url('');
        const button = $$(selectorCnt.blackBtn)[0];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF["countValue-1"]);
    })

    it('TC-041 Add 3 gives 2', function () {
        const button = $$(selectorCnt.blackBtn)[5];
        button.click();
        const countValue = $(selectorCnt.countValue).getText();
        expect(countValue).toEqual(expectedDCF.countValue2);
    })

    it('TC-042 LLF accept 1', function () {
        inputNumber('left', value.inputMin);
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-043 ULF accept 9', function () {
        inputNumber('right', value.inputMax);
        const result = $(selectorCnt.error).isDisplayed();
        expect(result).toEqual(false);
    })

    it('TC-044 LLF = 1 and ULF = 1 gives 2 black buttons', function () {
        browser.refresh();
        inputNumber('left', value.inputMin);
        inputNumber('right', value.inputMin);
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length.toString();
        expect(actual).toEqual(expectedDCF.countValue2);
    })

    it('TC-045 LLF = 9 and ULF = 9 gives 2 black buttons', function () {
        browser.refresh();
        inputNumber('right', value.inputMax);
        inputNumber('left', value.inputMax);
        const actual = $$(selectorCnt.blackBtn).filter(el => el.isDisplayed()).length.toString();
        expect(actual).toEqual(expectedDCF.countValue2);
    })

    it('TC-046 Reset button works', function () {
        $(selectorCnt.resetBtn).click();
        const actual = $(selectorCnt.countValue).getText();
        expect(actual).toEqual(expectedCnt.countValue);
    });

    it('TC-047 Delete button works', function () {
        $(selectorCnt.deleteBtn).click();
        const actual = $(selectorCnt.countValue).isExisting();
        expect(actual).toEqual(false);
    });

});

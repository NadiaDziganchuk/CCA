const selectorCnt = require('./../data/selectors.json').counter;

describe('Addition Elements exist', function () {
    before(() => {
        browser.url('');
    });

    it('Right red Cross exist', function () {
        $(selectorCnt.lowerLimitField).click();
        const actual = $$(selectorCnt.redCross)[0].isDisplayed();
        expect(actual).toEqual(true);
    });

    it('Left red Cross exist', function () {
        $(selectorCnt.upperLimitField).click();
        const actual = $$(selectorCnt.redCross)[1].isDisplayed();
        expect(actual).toEqual(true);
    });

    it('TC-179 Reset limit field for LLF', function () {
        browser.refresh();
        $(selectorCnt.lowerLimitField).click();
        const actual = $(selectorCnt.resetLimitF).isDisplayed();
        expect(actual).toEqual(true);
    })

    it('TC-180 Reset limit field for ULF', function () {
        $(selectorCnt.upperLimitField).click();
        const actual = $(selectorCnt.resetLimitF).isDisplayed();
        expect(actual).toEqual(true);
    })
});

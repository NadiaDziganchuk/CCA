const selectorGen = require('../data/selectors.json').general;
const selectorCnt = require('./../data/selectors.json').counter;
const expectedCnt = require('./../data/expected.json').counter;
const expectedValues = require('./../data/expected.json').counterValue;
const values = require('./../data/value.json').counterValue;

describe('Add counter module', function () {
    it('TC-53 New counter should be added with valid fields', function () {
        browser.url('');
        $(selectorGen.addNameField).setValue(values.characters);
        $(selectorGen.defaultValueField).setValue(values.value);
        $(selectorGen.addCounterBtn).click();
        const actual = $$(selectorCnt.counterName)[2];
        expect(actual.getText()).toEqual(expectedValues.secondCounterName);
    });

    it('TC-55 New counter\'s name with no user input should be equal to the default name', function () {
        browser.refresh();
        $(selectorGen.addCounterBtn).click();
        const actual = $$(selectorCnt.counterName)[2];
        expect(actual.getText()).toEqual(expectedCnt.secondCounterName);
    });

    it('TC-56 New counter\'s name should be equal to user\'s input', function () {
        browser.refresh();
        $(selectorGen.addNameField).setValue(values.characters);
        $(selectorGen.addCounterBtn).click();
        const actual = $$(selectorCnt.counterName)[2];
        expect(actual.getText()).toEqual(expectedValues.secondCounterName);
    });

    it('TC-57 New counter\'s name (3-d counter) should be equal to user\'s input', function () {
        browser.refresh();
        $(selectorGen.addCounterBtn).click();
        $(selectorGen.addNameField).setValue(values.characters);
        $(selectorGen.addCounterBtn).click();
        const actual = $$(selectorCnt.counterName)[3];
        expect(actual.getText()).toEqual(expectedValues.thirdCounterName);
    });
});

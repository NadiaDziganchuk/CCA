const {describe} = require("mocha");
const selectorGen = require('../data/selectors.json').general;
const expectedGen = require('./../data/expected.json').general;
const selectorCnt = require('./../data/selectors.json').counter;
const expectedCnt = require('./../data/expected.json').counter;
const expectedDCF = require('./../data/expected.json').defaultCounterFunctionality;
const expectedBtnValue = require('./../data/expected.json').blackBtnValues;
const value = require('./../data/value.json').fieldValue;
const inputNumber = require('./../helpers/inputNumber');

describe('Nadezhda Dziganchuk - TC 168 Verify that correct set of Sub buttons is displayed ' +
    'TC 173 Verify that correct set of Add buttons is displayed for max range', function () {
    it('should add ULF = 9 and LLF = 1', function () {
        browser.url('');
        inputNumber('right', value.inputMax);
        const actual1 = $(selectorCnt.upperInputField).getValue();
        expect(actual1).toEqual(expectedDCF.inputMax);
        inputNumber('left', value.inputMin);
        const actual = $(selectorCnt.lowerInputField).getValue();
        expect(actual).toEqual(expectedDCF.inputMin);
    });

    it('verify that 9 sub buttons from -1 to -9 appear + ' +
        'verify that 9 add buttons from 1 to 9 appear', () => {
        const actual = $$(selectorCnt.blackBtn).map(el => el.getText());
        expect(actual).toEqual(expectedBtnValue["values_add_sub"]);
    });

    // it('TC 170 - verify that min Sub button value = -9', () => {
    //     const subButtonText = $(selectorCnt.blackBtn)[-9];
    //     subButtonText.isExisting();
    //     const actual = subButtonText.getText();
    //
    //     // expect($('[step="-10"]').isExisting()).false;
    //     expect(actual).toEqual(expectedBtnValue.value(-9));
    // });

});

// describe('Nadezhda Dziganchuk - Verify that min Sub button value is equal to the value in ULF', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.refresh();
//         inputNumber('right', expectedDCF.inputMax);
//         const result1 = $(selectorCnt.upperInputField).isDisplayed();
//         expect(result1).toEqual(true);
//         inputNumber('left', expectedDCF.inputMin);
//         const result = $(selectorCnt.lowerInputField).isDisplayed();
//         expect(result).toEqual(true);
//     });
    //

// });
//
// describe('Nadezhda Dziganchuk - TC 171 - Verify that max Sub button value is equal to the value in LLF', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting());
//         expect(ulfValue.isExisting());
//     });
//     it('verify that max Sub button value = -1', function () {
//         expect($('[step="-1"]').isExisting()).true;
//         expect($('[step="0"]').isExisting()).false;
//         const subButtonText = $('[step="-1"]').getText();
//         expect(subButtonText).toEqual("-1");
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 173 Verify that correct set of Add buttons is displayed for max range', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//     it('verify that 9 add buttons from 1 to 9 appear', () => {
//         expect($('[step="1"]').isExisting()).true;
//         expect($('[step="2"]').isExisting()).true;
//         expect($('[step="3"]').isExisting()).true;
//         expect($('[step="4"]').isExisting()).true;
//         expect($('[step="5"]').isExisting()).true;
//         expect($('[step="6"]').isExisting()).true;
//         expect($('[step="7"]').isExisting()).true;
//         expect($('[step="8"]').isExisting()).true;
//         expect($('[step="9"]').isExisting()).true;
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 174 - Verify that min Add button value is equal to the value in LLF', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//     it('verify that min Add button value = 1', function () {
//         expect($('[step="1"]').isExisting()).true;
//         expect($('[step="0"]').isExisting()).false;
//         const addButtonText = $('[step="1"]').getText();
//         expect(addButtonText).toEqual("1");
//     });
// });
//
// describe('Nadezhda Dziganchuk - TC 175 - Verify that max Add button value is equal to the value in ULF', function () {
//     it('should add ULF = 9 and LLF = 1', function () {
//         browser.url('https://likejean.github.io/homework-5/');
//         const elementULF =  $('button[name="positive"]');
//         elementULF.click();
//         const ulfValue = $('input[name="upper"]');
//         ulfValue.setValue(9);
//         const elementLLF =  $('button[name="negative"]');
//         elementLLF.click();
//         const llfValue = $('//input[@name=\'lower\']');
//         llfValue.setValue(1);
//         expect(llfValue.isExisting()).true;
//         expect(ulfValue.isExisting()).true;
//     });
//     it('verify that max Add button value = 9', function () {
//         expect($('[step="9"]').isExisting()).true;
//         expect($('[step="10"]').isExisting()).false;
//         const addButtonText = $('[step="9"]').getText();
//         expect(addButtonText).toEqual("9");
//     });
// });

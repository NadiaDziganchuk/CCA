const selectorCnt = require('./../data/selectors.json').counter;
const selectorGen = require('../data/selectors.json').general;


function addNewDefaultCounter (value, name){
    $(selectorCnt.deleteBtn).click();
    $(selectorGen.addNameField).setValue(name);
    $(selectorGen.defaultValueField).setValue(value);
    $(selectorCnt.addCounterBtn).click();

}


module.exports = {addNewDefaultCounter};

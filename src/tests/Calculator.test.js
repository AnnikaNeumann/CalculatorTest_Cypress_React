import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const operator_add = container.find('#operator_add');
    const button4 = container.find('#number4');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total')

    button1.simulate('click');
    operator_add.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () =>{

    const button7 = container.find('#number7');
    const operatorSubtract = container.find('#operator-subtract');
    const button4 = container.find('#number4');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button7.simulate('click');
    operatorSubtract.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply', () =>{
    const button3 = container.find('#number3');
    const operatorMultiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button3.simulate('click');
    operatorMultiply.simulate('click');
    button5.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide', () =>{
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const operatorDivide = container.find('#operator-divide');
    const button3 = container.find('#number3');
    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button2.simulate('click');
    button1.simulate('click');
    operatorDivide.simulate('click');
    button3.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('7');
  })

  it('should concatenate multiple number button clicks', () =>{
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');

    button1.simulate('click');
    button2.simulate('click');
    button3.simulate('click');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('1234');
  })

  it('should concatenate multiple number button clicks', () =>{
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');

    button1.simulate('click');
    button2.simulate('click');
    button3.simulate('click');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('1234');
  })

  it('should chain multiple operations together', () =>{
    const button8 = container.find('#number8');
    const operatorDivide = container.find('#operator-divide');
    const button2 = container.find('#number2');
    const operatorMultiply = container.find('#operator-multiply')
    const button3 = container.find('#number3');
    const button4 = container.find('#number4');
    const operatorEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');

    button8.simulate('click');
    operatorDivide.simulate('click');
    button2.simulate('click');
    operatorMultiply.simulate('click');
    button3.simulate('click');
    button4.simulate('click');
    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('136');
  })

  it('should clear the running total without affecting the calculation', () => {
    const button8 = container.find('#number8');
    const operatorMultiply = container.find('#operator-multiply');
    const button2 = container.find('#number2');
    const clear = container.find('#clear');
    const button3 = container.find('#number3')

    button8.simulate('click');
    operatorMultiply.simulate('click');
    button2.simulate('click');
    clear.simulate('click');
    button3.simulate('click');
  })

  it('should multiply larger numbers', () =>{
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button0 = container.find('#number0');

    const operatorMultiply = container.find('#operator-multiply');
    const button4 = container.find('#number4');
    const button8 = container.find('#number8');

    const operatorEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button2.simulate('click');
    button1.simulate('click');
    button0.simulate('click');

    operatorMultiply.simulate('click');
    button4.simulate('click');
    button8.simulate('click');

    operatorEquals.simulate('click');
    expect(runningTotal.text()).toEqual('10080');
  })

  it('should add decimal numbers', () =>{
    const button3 = container.find('#number3');
    const decimal = container.find('#decimal');
    const button1 = container.find('#number1');
    const button8 = container.find('#number8');
    const operator_add = container.find('#operator_add');
    const button4 = container.find('#number4')
    const button5 = container.find('#number5');
    const runningTotal = container.find('#running-total');

    button3.simulate('click');
    decimal.simulate('click');
    button1.simulate('click');
    button8.simulate('click');
    operator_add.simulate('click');
    button4.simulate('click');
    button5.simulate('click');
    expect(runningTotal.text()).toEqual('48.18');
})


it('should add multiple decimal numbers', () =>{
  var button3 = container.find('#number3');
  var decimal = container.find('#decimal');
  var button1 = container.find('#number1');
  var button8 = container.find('#number8');
  var operator_add = container.find('#operator_add');
  var button4 = container.find('#number4');
  var decimal = container.find('#decimal');
  var button5 = container.find('#number5')
  var runningTotal = container.find('#running-total');

  button3.simulate('click');
  decimal.simulate('click');
  button1.simulate('click');
  button8.simulate('click');
  operator_add.simulate('click');
  button4.simulate('click');
  decimal.simulate('click');
  button5.simulate('click');
  expect(runningTotal.text()).toEqual('7.68');
  
  // multiple operators and decimal can only be accessed via var and not let / const. Const would set them to constant and
  // cannot be changed and let cannot be used here to redeclare the same variable name again.
})



it('should have negative result', () =>{
  var button9 = container.find('#number9');
  var operatorSubtract = container.find('#operator-subtract');
  var button5 = container.find('#number5');
  var operatorSubtract = container.find('#operator-subtract');
  var button8 = container.find('#number8');
  var runningTotal = container.find('#running-total')

  button9.simulate('click');
  operatorSubtract.simulate('click');
  button5.simulate('click');
  operatorSubtract.simulate('click');
  button8.simulate('click');
  expect(runningTotal.text()).toEqual('-4');
})


})



// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

/** test isPhoneNumber */
test('check phone number (123) 456-7890', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('check phone number (800) 100-5555', () => {
    expect(functions.isPhoneNumber('(800) 100-5555')).toBe(true);
});

test('check phone number (123) 000-000', () => {
    expect(functions.isPhoneNumber('(123) 000-000')).toBe(false);
});

test('check phone number 100 -', () => {
    expect(functions.isPhoneNumber('100 -')).toBe(false);
});

/** test isEmail */
test('check email cse110@ucsd.edu', () => {
    expect(functions.isEmail('cse110@ucsd.edu')).toBe(true);
});

test('check email just@doit.com', () => {
    expect(functions.isEmail('just@doit.com')).toBe(true);
});

test('check email cse110@ucsd', () => {
    expect(functions.isEmail('cse110@ucsd')).toBe(false);
});

test('check email ucsd.edu', () => {
    expect(functions.isEmail('ucsd.edu')).toBe(false);
});

/** test isStrongPassword */
test('check password cse110_pass', () => {
    expect(functions.isStrongPassword('cse110_pass')).toBe(true);
});

test('check password good12345', () => {
    expect(functions.isStrongPassword('good12345')).toBe(true);
});

test('check password :)!', () => {
    expect(functions.isEmail(':)!')).toBe(false);
});

test('check password over15characters', () => {
    expect(functions.isEmail('over15characters')).toBe(false);
});

/** test isDate */
test('check date 11/18/2022', () => {
    expect(functions.isDate('11/18/2022')).toBe(true);
});

test('check date 1/8/2022', () => {
    expect(functions.isDate('1/8/2022')).toBe(true);
});

test('check date 11/18/22', () => {
    expect(functions.isDate('11/18/22')).toBe(false);
});

test('check date 1/1/22', () => {
    expect(functions.isDate('1/1/22')).toBe(false);
});

/** test isHexColor */
test('check hex color #fff', () => {
    expect(functions.isHexColor('#fff')).toBe(true);
});

test('check hex color #101010', () => {
    expect(functions.isHexColor('#101010')).toBe(true);
});

test('check hex color #go', () => {
    expect(functions.isHexColor('#go')).toBe(false);
});

test('check hex color 1010', () => {
    expect(functions.isHexColor('1010')).toBe(false);
});
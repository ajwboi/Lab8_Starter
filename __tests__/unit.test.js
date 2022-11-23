// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('is valid phone number', () => {
    expect(functions.isPhoneNumber("510-329-1266")).toBe(true);
});

test('is valid phone number', () => {
    expect(functions.isPhoneNumber("321-321-4321")).toBe(true);
});

test('is not valid phone number', () => {
    expect(functions.isPhoneNumber("123000/456/7890")).toBe(false);
});

test('is not valid phone number', () => {
    expect(functions.isPhoneNumber("beep boop im a robot")).toBe(false);
});

test('is valid email', () => {
    expect(functions.isEmail("ajwen@ucsd.edu")).toBe(true);
});

test('is valid email', () => {
    expect(functions.isEmail("ajhwen@gmail.com")).toBe(true);
});

test('is not valid email', () => {
    expect(functions.isEmail("this is america")).toBe(false);
});

test('is not valid email', () => {
    expect(functions.isEmail("123456789")).toBe(false);
});

test('is strong password', () => {
    expect(functions.isStrongPassword("alanwen")).toBe(true);
});

test('is strong password', () => {
    expect(functions.isStrongPassword("alanjwen")).toBe(true);
});

test('is not strong password', () => {
    expect(functions.isStrongPassword("hi")).toBe(false);
});

test('is not strong password', () => {
    expect(functions.isStrongPassword("12jump")).toBe(false);
});

test('is valid date', () => {
    expect(functions.isDate("10/05/2022")).toBe(true);
});

test('is valid date', () => {
    expect(functions.isDate("1/1/1991")).toBe(true);
});

test('is valid date', () => {
    expect(functions.isDate("thisisnotadate")).toBe(false);
});

test('is valid date', () => {
    expect(functions.isDate("January 1st, 1991")).toBe(false);
});

test('check valid hex color', () => {
    expect(functions.isHexColor("#000000")).toBe(true);
});

test('check valid hex color', () => {
    expect(functions.isHexColor("#010203")).toBe(true);
});

test('check valid hex color', () => {
    expect(functions.isHexColor("this is not hex")).toBe(false);
});

test('check valid hex color', () => {
    expect(functions.isHexColor("#AAAAAAAAAAAAAAAAAAAAAAAAAAAAA")).toBe(false);
});
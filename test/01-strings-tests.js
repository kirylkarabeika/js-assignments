import assert from 'assert';
import {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId
} from '../task/01-strings-tasks';

it.optional = require('../extensions/it-optional');

describe('01-strings-tasks', () => {
  it.optional('concatenateStrings should return concatenation of two strings', () => {
    assert.equal(concatenateStrings('aa', 'bb'), 'aabb');
    assert.equal(concatenateStrings('aa', ''), 'aa');
    assert.equal(concatenateStrings('', 'bb'), 'bb');
  });

  it.optional('getStringLength should return the length of string', () => {
    assert.equal(getStringLength('aaaaa'), 5, "'aaaaa' length should be 5");
    assert.equal(getStringLength(''), 0, "'' length should be 0");
  });

  it.optional('getStringFromTemplate should create a string from template using given parameters', () => {
    assert.equal(getStringFromTemplate('John', 'Doe'), 'Hello, John Doe!');
    assert.equal(getStringFromTemplate('Chuck', 'Norris'), 'Hello, Chuck Norris!');
  });

  it.optional('getFirstChar should return the first char from given string', () => {
    assert.equal(getFirstChar('John Doe'), 'J');
    assert.equal(getFirstChar('cat'), 'c');
  });

  it.optional('extractNameFromTemplate should parse the name from given string', () => {
    assert.equal(extractNameFromTemplate('Hello, John Doe!'), 'John Doe');
    assert.equal(extractNameFromTemplate('Hello, Chuck Norris!'), 'Chuck Norris');
  });

  it.optional('removeLeadingAndTrailingWhitespaces should remove leading and trailing whitespaces from the string', () => {
    assert.equal(removeLeadingAndTrailingWhitespaces('  Abracadabra'), 'Abracadabra');
    assert.equal(removeLeadingAndTrailingWhitespaces('cat'), 'cat');
    assert.equal(removeLeadingAndTrailingWhitespaces('\tHello, World! '), 'Hello, World!');
  });

  it.optional('repeatString should repeat string specified number of times', () => {
    assert.equal(repeatString('A', 5), 'AAAAA');
    assert.equal(repeatString('cat', 3), 'catcatcat');
  });

  it.optional('removeFirstOccurrences should remove all specified values from a string', () => {
    assert.equal(removeFirstOccurrences('To be or not to be', ' not'), 'To be or to be');
    assert.equal(removeFirstOccurrences('I like legends', 'end'), 'I like legs');
    assert.equal(removeFirstOccurrences('ABABAB', 'BA'), 'ABAB');
  });

  it.optional('unbracketTag should remove first and last angle brackets from tag string', () => {
    assert.equal(unbracketTag('<div>'), 'div');
    assert.equal(unbracketTag('<span>'), 'span');
    assert.equal(unbracketTag('<a>'), 'a');
  });

  it.optional('convertToUpperCase should convert all chars from specified string into upper case', () => {
    assert.equal(convertToUpperCase('Thunderstruck'), 'THUNDERSTRUCK');
    assert.equal(convertToUpperCase('abcdefghijklmnopqrstuvwxyz'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });

  it.optional('extractEmails should extract emails from string list delimeted by semicolons', () => {
    assert.deepEqual(
      extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'),
      ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
    );
    assert.deepEqual(
      extractEmails('info@gmail.com'),
      ['info@gmail.com']
    );
  });

  it.optional('getRectangleString should return the string reprentation of rectangle with specified size', () => {
    assert.equal(
      getRectangleString(6, 4),
      '┌────┐\n' +
      '│    │\n' +
      '│    │\n' +
      '└────┘\n'
    );
    assert.deepEqual(
      getRectangleString(2, 2),
      '┌┐\n' +
      '└┘\n'
    );
    assert.deepEqual(
      getRectangleString(12, 3),
      '┌──────────┐\n' +
      '│          │\n' +
      '└──────────┘\n'
    );
  });

  it.optional('encodeToRot13 should encode-decode string using ROT13 algorithm', () => {
    assert.equal(encodeToRot13('hello'), 'uryyb');
    assert.equal(
      encodeToRot13('Why did the chicken cross the road?'),
      'Jul qvq gur puvpxra pebff gur ebnq?');
    assert.equal(encodeToRot13('Gb trg gb gur bgure fvqr!'), 'To get to the other side!');
    assert.equal(
      encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'),
      'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
    );
  });

  it.optional('isString should return true if argument ia a string', () => {
    assert.equal(isString(), false, 'undefined');
    assert.equal(isString(null), false, 'null');
    assert.equal(isString([]), false,  '[]');
    assert.equal(isString('test'), true, 'test');
    assert.equal(isString(new String('test')), true,  "new String('test')");
  });

  it.optional('getCardId should return the index of card in the initial deck', () => {
    [
      'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
      'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
      'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
      'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'
    ].forEach((val, index) => {
      assert.equal(
        getCardId(val),
        index,
        `Invalid id for card '${val}':`
      );
    });
  });
});

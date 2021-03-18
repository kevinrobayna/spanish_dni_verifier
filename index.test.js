const isDNIValid = require('.');
const each = require("jest-each").default;

describe("isDNIValid?", () => {
    each([
        ["00000001R", true], // Francisco Franco Bahamonde
        ["00000010P", false], // Juan Carlos Alfonso Víctor María de Borbón Borbón-Dos Sicilias
        ["00000010X", true], // Juan Carlos Alfonso Víctor María de Borbón Borbón-Dos Sicilias
        ["00000013B", true], // None because superstition
        ["43700699D", true],
        ["01763781A", true],
        ["11283719B", true],
        ["21153590F", true],
        ["31308360R", true],
        ["78589604F", true],
        ["43632981A", true],
        ["45079588W", true],
        ["67406188L", true],
        ["06302535Y", true],
        ["43632981C", false],
        ["90020936V", true],
        ["90020936", false],
        ["85295905Z", true],
        ["50769660N", true],
        ["31308360W", false],
        ["30517787F", true],
        ["28625496H", true],
        ["Y2539924W", false],
        ["28625496W", false],
      ]).test('is DNI %s valid?', (dni, expected) => {
        expect(isDNIValid(dni)).toBe(expected);
      });
  });

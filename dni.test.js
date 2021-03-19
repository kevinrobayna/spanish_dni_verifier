const isDNIValid = require('./dni');
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
        ["00000001-R", true], // Francisco Franco Bahamonde
        ["00000010-P", false], // Juan Carlos Alfonso Víctor María de Borbón Borbón-Dos Sicilias
        ["00000010-X", true], // Juan Carlos Alfonso Víctor María de Borbón Borbón-Dos Sicilias
        ["00000013-B", true], // None because superstition
        ["43700699-D", true],
        ["01763781-A", true],
        ["11283719-B", true],
        ["21153590-F", true],
        ["31308360-R", true],
        ["78589604-F", true],
        ["43632981-A", true],
        ["45079588-W", true],
        ["67406188-L", true],
        ["06302535-Y", true],
        ["43632981-C", false],
        ["90020936-V", true],
        ["85295905-Z", true],
        ["50769660-N", true],
        ["31308360-W", false],
        ["30517787-F", true],
        ["28625496-H", true],
        ["28625496-W", false],
        ["00000001-r", true], // Francisco Franco Bahamonde
        ["00000010-p", false], // Juan Carlos Alfonso Víctor María de Borbón Borbón-Dos Sicilias
        ["00000010-x", true], // Juan Carlos Alfonso Víctor María de Borbón Borbón-Dos Sicilias
        ["00000013-b", true], // None because superstition
        ["43700699-d", true],
        ["01763781-a", true],
        ["11283719-b", true],
        ["21153590-f", true],
        ["31308360-r", true],
        ["78589604-f", true],
        ["43632981-a", true],
        ["45079588-w", true],
        ["67406188-l", true],
        ["06302535-y", true],
        ["43632981-c", false],
        ["90020936-v", true],
        ["85295905-z", true],
        ["50769660-n", true],
        ["31308360-w", false],
        ["30517787-f", true],
        ["28625496-h", true],
        ["28625496-w", false],
        ["00000001r", true], // Francisco Franco Bahamonde
        ["00000010p", false], // Juan Carlos Alfonso Víctor María de Borbón Borbón-Dos Sicilias
        ["00000010x", true], // Juan Carlos Alfonso Víctor María de Borbón Borbón-Dos Sicilias
        ["00000013b", true], // None because superstition
        ["43700699d", true],
        ["01763781a", true],
        ["11283719b", true],
        ["21153590f", true],
        ["31308360r", true],
        ["78589604f", true],
        ["43632981a", true],
        ["45079588w", true],
        ["67406188l", true],
        ["06302535y", true],
        ["43632981c", false],
        ["90020936v", true],
        ["85295905z", true],
        ["50769660n", true],
        ["31308360w", false],
        ["30517787f", true],
        ["28625496h", true],
        ["28625496w", false],
      ]).test('is DNI %s valid?', (dni, expected) => {
        expect(isDNIValid(dni)).toBe(expected);
      });
  });

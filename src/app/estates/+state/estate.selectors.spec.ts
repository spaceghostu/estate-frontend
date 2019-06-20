import { Entity, EstateState } from './estate.reducer';
import { estateQuery } from './estate.selectors';

describe('Estate Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getEstateId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createEstate = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      estate: {
        list: [createEstate('PRODUCT-AAA'), createEstate('PRODUCT-BBB'), createEstate('PRODUCT-CCC')],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Estate Selectors', () => {
    it('getAllEstate() should return the list of Estate', () => {
      const results = estateQuery.getAllEstate(storeState);
      const selId = getEstateId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedEstate() should return the selected Entity', () => {
      const result = estateQuery.getSelectedEstate(storeState);
      const selId = getEstateId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = estateQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = estateQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

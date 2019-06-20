import { EstateLoaded } from './estate.actions';
import { EstateState, Entity, initialState, estateReducer } from './estate.reducer';

describe('Estate Reducer', () => {
  const getEstateId = it => it['id'];
  let createEstate;

  beforeEach(() => {
    createEstate = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Estate actions ', () => {
    it('should return set the list of known Estate', () => {
      const estates = [createEstate('PRODUCT-AAA'), createEstate('PRODUCT-zzz')];
      const action = new EstateLoaded(estates);
      const result: EstateState = estateReducer(initialState, action);
      const selId: string = getEstateId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = estateReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

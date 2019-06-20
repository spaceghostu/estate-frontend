import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { EstateEffects } from './estate.effects';
import { LoadEstate, EstateLoaded } from './estate.actions';

describe('EstateEffects', () => {
  let actions: Observable<any>;
  let effects: EstateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot(), StoreModule.forRoot({}), EffectsModule.forRoot([])],
      providers: [EstateEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(EstateEffects);
  });

  describe('loadEstate$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadEstate() });
      expect(effects.loadEstate$).toBeObservable(hot('-a-|', { a: new EstateLoaded([]) }));
    });
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ESTATE_FEATURE_KEY, initialState as estateInitialState, estateReducer } from './+state/estate.reducer';
import { EstateEffects } from './+state/estate.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ESTATE_FEATURE_KEY, estateReducer, { initialState: estateInitialState }),
    EffectsModule.forFeature([EstateEffects])
  ]
})
export class EstatesModule {}

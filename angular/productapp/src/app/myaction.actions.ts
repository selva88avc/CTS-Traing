import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const MyactionActions = createActionGroup({
  source: 'Myaction',
  events: {
    'Load Myactions': emptyProps(),
    
    
  }
});

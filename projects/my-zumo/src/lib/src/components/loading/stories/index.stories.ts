import { storiesOf, moduleMetadata } from '@storybook/angular';

import { MYLoadingComponent } from '../loading.component';


storiesOf('Spinner', module)
  .addDecorator(
    moduleMetadata({
      declarations: [MYLoadingComponent]
    })
  )
  .add('primary', () => ({
    component: MYLoadingComponent,
    props: {
      type: 'primary'
    }
  }))
  .add('secondary', () => ({
    component: MYLoadingComponent,
    props: {
      type: 'secondary'
    }
  }))
  .add('large', () => ({
    component: MYLoadingComponent,
    props: {
      type: 'primary',
      size: 'large'
    }
  }))
  .add('extra-large', () => ({
    component: MYLoadingComponent,
    props: {
      type: 'primary',
      size: 'extra-large'
    }
  }));

import { storiesOf, moduleMetadata } from '@storybook/angular';

import { NGZLoadingComponent } from '../loading.component';


storiesOf('Spinner', module)
  .addDecorator(
    moduleMetadata({
      declarations: [NGZLoadingComponent]
    })
  )
  .add('primary', () => ({
    component: NGZLoadingComponent,
    props: {
      type: 'primary'
    }
  }))
  .add('secondary', () => ({
    component: NGZLoadingComponent,
    props: {
      type: 'secondary'
    }
  }))
  .add('large', () => ({
    component: NGZLoadingComponent,
    props: {
      type: 'primary',
      size: 'large'
    }
  }))
  .add('extra-large', () => ({
    component: NGZLoadingComponent,
    props: {
      type: 'primary',
      size: 'extra-large'
    }
  }));

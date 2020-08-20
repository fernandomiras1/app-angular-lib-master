import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { NGZButtonComponent } from '../button.component';
import { NGZLoadingModule } from '../../loading/loading.module';


storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      imports: [NGZLoadingModule],
      declarations: [NGZButtonComponent]
    })
  )
  .add('with text', () => ({
    component: NGZButtonComponent,
    props: {
      text: 'Hello Button',
      type: 'secondary'
    }
  }))
  .add('with some emoji', () => ({
      component: NGZButtonComponent,
      props: {
        text: '😀 😎 👍 💯'
      }
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: NGZButtonComponent,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG')
      }
    }),
    { notes: 'My notes on a button with emojis' }
  );

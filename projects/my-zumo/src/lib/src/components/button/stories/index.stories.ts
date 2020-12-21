import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MYButtonComponent } from '../button.component';
import { NGZLoadingModule } from '../../loading/loading.module';


storiesOf('Button', module)
  .addDecorator(
    moduleMetadata({
      imports: [NGZLoadingModule],
      declarations: [MYButtonComponent]
    })
  )
  .add('with text', () => ({
    component: MYButtonComponent,
    props: {
      text: 'Hello Button',
      type: 'secondary'
    }
  }))
  .add('with some emoji', () => ({
      component: MYButtonComponent,
      props: {
        text: '😀 😎 👍 💯'
      }
    }),
    { notes: 'My notes on a button with emojis' }
  )
  .add(
    'with some emoji and action',
    () => ({
      component: MYButtonComponent,
      props: {
        text: '😀 😎 👍 💯',
        onClick: action('This was clicked OMG')
      }
    }),
    { notes: 'My notes on a button with emojis' }
  );

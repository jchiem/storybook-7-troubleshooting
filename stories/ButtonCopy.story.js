import ButtonStoryOptions from './ButtonStoryOptions';
import { Primary as a, Secondary as b, Large as c, Small as d } from './Button.stories';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/ButtonStory',
  ...ButtonStoryOptions
};

export const Primary = a;
export const Secondary = b;
export const Large =  c;
export const Small = d
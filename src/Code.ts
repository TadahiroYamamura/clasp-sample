import { Sample } from './Sample';

declare const global: {
  [x: string]: any;
}

global.main = function() {
  (new Sample()).say('Hey!');
}

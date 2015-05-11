import { equal } from 'assert';
import combine from '../combine';
import curry from '../curry';

test('#combine', () => {
  const camelize = curry(combine)((a, b) => a + b.toUpperCase());
  const dasherize = curry(combine)((a, b) => `${a}-${b.toLowerCase()}`);

  equal(camelize('hello-world'), 'helloWorld');
  equal(camelize('hello_world'), 'helloWorld');
  equal(camelize('hello - world'), 'helloWorld');
  equal(camelize('hello.world'), 'helloWorld');
  equal(camelize('hello + world'), 'hello + world');
  equal(dasherize('helloWorld'), 'hello-world');
  equal(dasherize('hello  world'), 'hello-world');
});

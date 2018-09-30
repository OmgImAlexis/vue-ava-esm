import test from 'ava';
import { createLocalVue, mount } from '@vue/test-utils';
import HelloWorld from '../../components/hello-world.vue';

test('mounts', t => {
    t.plan(1);

    t.snapshot(mount(HelloWorld, {
        localVue: createLocalVue(),
        propsData: {}
    }).html(), 'with no props');
});

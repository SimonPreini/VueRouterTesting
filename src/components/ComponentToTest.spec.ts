import {mount} from "@vue/test-utils";
import {vi, describe, it, expect} from 'vitest'

import ComponentToTest from './ComponentToTest.vue';

const mockRouterPush = vi.fn();

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: mockRouterPush }),
}));

describe('Test', () => {
  const wrapper = mount(ComponentToTest);

  it('should render item', async () => {
    expect(wrapper.find('.test-button').exists()).toBeTruthy();
  });

  it('should route to home', async () => {
    expect(mockRouterPush).toHaveBeenCalledTimes(0);
    const app = wrapper.find('.test-button');
    await app.trigger('click');

    expect(mockRouterPush).toHaveBeenCalledTimes(1);
    expect(mockRouterPush).toHaveBeenCalledWith('/home');
  });
});

import { mount } from '@vue/test-utils'
import {describe, expect, it} from '@jest/globals'
import ModuleExample from './ModuleExample.vue'

describe('ModuleExample', () => {
  it('Should display message ', () => {
    const msg = 'Hello World Test'
    const wrapper = mount(ModuleExample, { props: { msg } })
    expect(wrapper.find('[data-testid="message"').text()).toEqual(msg)
  })
})
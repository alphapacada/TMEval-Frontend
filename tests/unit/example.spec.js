import About from '@/views/About.vue'
import { shallowMount } from '@vue/test-utils'

describe('About.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(About, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

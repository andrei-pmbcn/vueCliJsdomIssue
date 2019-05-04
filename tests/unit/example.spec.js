//import { expect } from 'chai'
//import { shallowMount } from '@vue/test-utils'
//import HelloWorld from '@/components/HelloWorld.vue'

//jsdomGlobal = require('jsdom-global');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
describe('test jsdom execution', function() {
	var dom = new JSDOM();
	console.log(dom.window);
});

/*
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
*/

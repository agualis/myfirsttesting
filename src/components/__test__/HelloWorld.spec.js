import Vue from 'vue'
import HelloWorld from '../HelloWorld'

describe('HelloWorld', () => {

  it('renders title content', async () => {

    const GIG = {title: 'a title'}

    const HelloWorldBuilder = Vue.extend(HelloWorld)
    const vm = new HelloWorldBuilder({ propsData: {title: GIG} }).$mount()

    expect(vm.$el.textContent).toContain('a title')
  })
})

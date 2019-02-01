import { shallow } from 'enzyme'
import CounterButton from './CounterButton'
import React from 'react'

it('expect CardList to match snapshot', () => {
  const mockColour = 'red'
  expect(shallow(<CounterButton rcolor={mockColour} />)).toMatchSnapshot()
})

it('correctly increments the counter', () => {
  const mockColour = 'red'
  const wrapper = shallow(<CounterButton color={mockColour} />)

  wrapper.find('[id="counter"]').simulate('click')
  wrapper.find('[id="counter"]').simulate('click')
  expect(wrapper.state()).toEqual({ count: 2 })
  expect(wrapper.props().color).toEqual('red')
})

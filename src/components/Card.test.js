import { shallow } from 'enzyme'
import Card from './Card'
import React from 'react'

it('expect to render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1)
})

it('expect Card to match snapshot', () => {
  expect(shallow(<Card />)).toMatchSnapshot()
})
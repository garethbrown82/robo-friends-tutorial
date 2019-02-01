import { shallow } from 'enzyme'
import CardList from './CardList'
import React from 'react'

it('expect CardList to match snapshot', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com',
    },
    {
      id: 2,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com',
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot()
})
import { render } from '@redwoodjs/testing/web'

import CompostingPage from './CompostingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CompostingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompostingPage />)
    }).not.toThrow()
  })
})

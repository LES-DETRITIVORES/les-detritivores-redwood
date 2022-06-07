import { render } from '@redwoodjs/testing/web'

import QuotePage from './QuotePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('QuotePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuotePage />)
    }).not.toThrow()
  })
})

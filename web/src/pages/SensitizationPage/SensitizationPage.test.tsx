import { render } from '@redwoodjs/testing/web'

import SensitizationPage from './SensitizationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SensitizationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SensitizationPage />)
    }).not.toThrow()
  })
})

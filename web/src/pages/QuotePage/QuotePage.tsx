import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const QuotePage = () => {
  return (
    <>
      <MetaTags title="Quote" description="Quote page" />

      <h1>QuotePage</h1>
      <p>
        Find me in <code>./web/src/pages/QuotePage/QuotePage.tsx</code>
      </p>
      <p>
        My default route is named <code>quote</code>, link to me with `
        <Link to={routes.quote()}>Quote</Link>`
      </p>
    </>
  )
}

export default QuotePage

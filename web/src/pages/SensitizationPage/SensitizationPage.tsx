import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SensitizationPage = () => {
  return (
    <>
      <MetaTags title="Sensitization" description="Sensitization page" />

      <h1>SensitizationPage</h1>
      <p>
        Find me in <code>./web/src/pages/SensitizationPage/SensitizationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>sensitization</code>, link to me with `
        <Link to={routes.sensitization()}>Sensitization</Link>`
      </p>
    </>
  )
}

export default SensitizationPage

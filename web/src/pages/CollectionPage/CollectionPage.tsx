import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CollectionPage = () => {
  return (
    <>
      <MetaTags title="Collection" description="Collection page" />

      <h1>CollectionPage</h1>
      <p>
        Find me in <code>./web/src/pages/CollectionPage/CollectionPage.tsx</code>
      </p>
      <p>
        My default route is named <code>collection</code>, link to me with `
        <Link to={routes.collection()}>Collection</Link>`
      </p>
    </>
  )
}

export default CollectionPage

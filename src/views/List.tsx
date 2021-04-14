import React from 'react'
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom'

interface IRouteProps extends RouteProps {
  name: string
  routes?: Array<IRouteProps>
}
interface PageProps extends RouteComponentProps {
  routes?: Array<IRouteProps>
}

const Index: React.FC<PageProps> = (props) => {
  const { routes = [] } = props
  return (
    <div>
      List Wrap Page
      {routes.map((router: IRouteProps) => {
        return <Route key={router.name} path={router.path} component={router.component} exact={router.exact} />
      })}
    </div>
  )
}

export default Index

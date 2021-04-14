import React from 'react'
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom'
import routes, { IRouteProps } from './config'

interface PageProps extends RouteComponentProps {
  routes?: Array<IRouteProps>
}
const router: React.FC = () => {
  return (
    <Router>
      {routes.map((item: IRouteProps) => {
        const componentRender = (props: PageProps) => {
          if (item.component) {
            // const a: React.FC<PageProps> = item.component
            const cProps = {
              ...props,
              routes: (item.routes && item.routes) || [],
            }
            return <item.component {...cProps} />
          }
          return <></>
        }
        return (
          <Route
            key={item.name}
            path={item.path}
            // component= { router.component }
            exact={item.exact}
            render={componentRender}
          />
        )
      })}
    </Router>
  )
}

export default router

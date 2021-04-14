import { RouteProps } from 'react-router-dom'
import Page1 from '@/views/Index'
import Page2 from '@/views/List'
import Detail from '@/views/Detail'

export interface IRouteProps extends RouteProps {
  name: string
  routes?: Array<IRouteProps>
}

const routes: Array<IRouteProps> = [
  {
    name: 'index',
    path: '/',
    component: Page1,
    exact: true,
  },
  {
    name: 'list',
    path: '/list',
    component: Page2,
    routes: [
      {
        name: 'list-id',
        path: '/list/:id',
        component: Detail,
      },
    ],
  },
  // {
  //     path: "/list/:id",
  //     component: Detail,
  //     exact: true //是否为严格模式
  // },
]

export default routes

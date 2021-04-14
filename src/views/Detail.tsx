import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface RouteParams {
  id: string
}

const Index: React.FC<RouteComponentProps<RouteParams>> = (props) => {
  const { match } = props
  return (
    <div>
      Detail Page
      {match.params.id}
    </div>
  )
}

Index.defaultProps = {
  match: {
    params: { id: '' },
    path: '',
    url: '',
    isExact: true,
  },
}
Index.propTypes = {
  match: Object,
}
export default Index

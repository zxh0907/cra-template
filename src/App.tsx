import React from 'react'
import Router from '@/router/index'
// import logo from './logo.svg'
import './App.less'

// https://reactrouter.com/web/api/Hooks
// https://create-react-app.dev/docs/getting-started
// https://react-redux.js.org/api/hooks
// https://github.com/13554659514/react-router-dom-demo

//  Create-React-App with TypeScript, ESLint, Prettier, and Github Actions
// https://brygrill.medium.com/create-react-app-with-typescript-eslint-prettier-and-github-actions-f3ce6a571c97
// https://stackoverflow.com/questions/58167467/disable-in-eslint-react-jsx-props-no-spreading-error-in-reactjs
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
// https://blog.csdn.net/qq_33453540/article/details/109723432

// Starting a React/Redux Project with TypeScript
// https://decembersoft.com/posts/starting-a-react-redux-project-with-typescript/#6-add-redux
const App: React.FC = () => {
  return (
    <div className="App">
      <Router />
    </div>
  )
}

export default App

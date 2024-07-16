import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './store/store.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Login, Support} from "./components/index.js"
import AuthLayout from './components/PostForm/AuthLayout.jsx'
import {Home,EditPost,AllPosts,Post,SignUp,AddPost} from "./pages/index.js"
import './index.css'
import About from './components/About.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
              path: "/",
              element: <Home />,
          },
          {
              path: "/login",
              element: (
                  <AuthLayout authentication={false}>
                      <Login />
                  </AuthLayout>
              ),
          },
          {
              path: "/signup",
              element: (
                  <AuthLayout authentication={false}>
                      <SignUp />
                  </AuthLayout>
              ),
          },
          {
              path: "/all-posts",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <AllPosts />
                  </AuthLayout>
              ),
          },
          {
              path: "/add-post",
              element: (
                  <AuthLayout authentication>
                      {" "}
                      <AddPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/edit-post/:slug",
              element: (
                  <AuthLayout authentication={true}>
                      <EditPost />
                  </AuthLayout>
              ),
          },
          {
              path: "/post/:slug",
              element: <Post />,
          },
          {
            path: "/about",
            element: <About/>
          },
          {
            path: "/support",
            element: <Support/>
          }
      ],
  },
  ])
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
    </React.StrictMode>,
  )

import React from 'react'
import { ViteSSG } from 'vite-plugin-ssg'
import App from './App.jsx'
import { ssgRoutes } from './ssg-routes'
import './index.css'

export const createApp = ViteSSG(App, { routes: ssgRoutes })

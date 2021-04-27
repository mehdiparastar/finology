// eslint-disable-next-line
import React, { lazy } from 'react'
import { Main } from './layouts'

const routes = [
    {
        path: '/',
        component: Main,
        routes: [
            {
                path: '/',
                exact: true,
                component: lazy(() => import('views/Home'))
            }
        ]
    }
]

export default routes
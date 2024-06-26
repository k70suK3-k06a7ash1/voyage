/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const HelloLazyImport = createFileRoute('/hello')()
const AuthorizedLazyImport = createFileRoute('/authorized')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const HelloLazyRoute = HelloLazyImport.update({
  path: '/hello',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/hello.lazy').then((d) => d.Route))

const AuthorizedLazyRoute = AuthorizedLazyImport.update({
  path: '/authorized',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/authorized.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/authorized': {
      preLoaderRoute: typeof AuthorizedLazyImport
      parentRoute: typeof rootRoute
    }
    '/hello': {
      preLoaderRoute: typeof HelloLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  AboutLazyRoute,
  AuthorizedLazyRoute,
  HelloLazyRoute,
])

/* prettier-ignore-end */

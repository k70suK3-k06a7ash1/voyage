import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/hello')({
  component: () => <div>Hello /hello/hello!</div>
})
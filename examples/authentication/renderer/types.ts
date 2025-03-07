export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }

import type {
  PageContextBuiltIn,
  PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient
} from 'vite-plugin-ssr/types'
import type { User } from '#app/db'

type Page = () => React.ReactElement

export type PageContextCustom = {
  Page: () => React.ReactElement
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}

type PageContextServer = PageContextBuiltIn<Page> &
  PageContextCustom & {
    user: null | User
  }
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer

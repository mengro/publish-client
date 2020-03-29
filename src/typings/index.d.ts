declare interface FuncPropsWithChildren {
  children?: any
}

interface Repo {
  name: string,
  id: number
}
interface GlobalCtx {
  repoList?: Repo[]
}

import React, { createContext, useEffect, useState } from 'react'
import { queryRepoList } from '@/services/base'

export const globalCtx = createContext({
  repoList: []
})

function GlobalProvider(props: FuncPropsWithChildren) {
  const [ repoList, setRepoList ] = useState([])
  useEffect(() => {
    queryRepoList()
      .then(res => {
        if (res.code === 1) {
          setRepoList(res.data)
        }
      })
  }, [])
  return (
    <globalCtx.Provider
      value={{repoList}}
    >
      {
        props.children
      }
    </globalCtx.Provider>
  )
}

export default GlobalProvider


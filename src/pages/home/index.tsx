import React, { useEffect } from 'react'
import { Button } from 'antd'
import { updateRepoList } from '@/services/base'

const updateRepoListHandle = () => {
  return updateRepoList()
}

function index() {

  return (
    <div>
      <Button onClick={e => updateRepoListHandle()}>更新仓库列表</Button>
    </div>
  )
}

index.propTypes = {

}

export default index


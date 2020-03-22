import React, { useContext } from 'react'
import { Menu } from 'antd';
import { globalCtx } from '@/contexts/GlobalProvider'

const { SubMenu } = Menu;

function SideMenu() {
  const { repoList } = useContext(globalCtx);
  console.log(repoList);

  return (
    <Menu theme="dark" mode="inline">
      {
        Array.isArray(repoList) &&
        repoList.map((repo: Repo) => {
          return (
            <Menu.Item key={repo.id}>
              <span>{repo.name}</span>
            </Menu.Item>
          )
        })
      }
    </Menu>
  )
}

export default SideMenu


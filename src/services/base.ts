import axios from 'axios';

export function queryRepoList() {
  return axios.get('http://127.0.0.1:7001/init')
}

export function updateRepoList() {
  return axios.get('http://127.0.0.1:7001/repo/list/update')
}

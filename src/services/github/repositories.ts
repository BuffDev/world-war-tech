import { GithubRepositoriesResponse } from "./IRepositories"

export const getRepositories = async (language: string): Promise<GithubRepositoriesResponse> =>{
  const res = await fetch(`https://api.github.com/search/repositories?q=language:${language}`, { cache: 'force-cache' }) 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
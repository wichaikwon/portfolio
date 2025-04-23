
import axios from 'axios'

export interface GithubRepo {
  id: number
  name: string
  html_url: string
  description: string
  language: string
  size: number
}

export const fetchGithubRepos = async (username: string): Promise<GithubRepo[]> => {
  const response = await axios.get<GithubRepo[]>(
    `https://api.github.com/users/${username}/starred`,
  )
  return response.data
}

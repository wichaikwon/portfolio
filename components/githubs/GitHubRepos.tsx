'use client'
import React, { useEffect, useState } from 'react'
import { fetchGithubRepos, GithubRepo } from '@/utils/fetchGithubRepos'
import { FaStar, FaCodeBranch } from 'react-icons/fa'

const StarredRepos: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGithubRepos('wichaikwon')
      setRepos(data)
    }
    fetchData()
  }, [])

  return (
    <div className=" max-w-6xl mx-auto ">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Starred Repositories ⭐
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {repos.map((repo) => (
          <div key={repo.id} className="p-4 rounded-lg shadow-md ">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-semibold text-blue-400 hover:underline"
        >
          {repo.name}
        </a>
        <p className="mt-2 text-sm text-gray-300">{repo.description}</p>

        <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span>
            {repo.language || 'Unknown'}
          </span>
          <span className="flex items-center gap-1">
            <FaCodeBranch />
          </span>
          <span className="flex items-center gap-1">
            <FaStar />
          </span>
        </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/wichaikwon"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          View More on GitHub
        </a>
      </div>
    </div>
  )
}

export default StarredRepos

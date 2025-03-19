import React, { useState, useEffect, useCallback } from 'react';

const GithubSearch = () => {
  const [username, setUsername] = useState('krishna20000');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGithubData = useCallback(async () => {
    if (!username) return;
    setLoading(true);
    setError(null);

    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) throw new Error('User not found');
      const userData = await userResponse.json();
      setUserData(userData);

      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
      setUserData(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchGithubData();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [username, fetchGithubData]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-400">GitHub User Search</h2>

        {/* Input Field */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 text-white rounded-lg border border-gray-500 focus:border-blue-500 outline-none"
          />
          <button
            onClick={fetchGithubData}
            className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            🔍
          </button>
        </div>

        {/* Status Messages */}
        {loading && <p className="mt-4 text-yellow-400 text-center animate-pulse">Fetching data...</p>}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        {/* User Data */}
        {userData && (
          <div className="mt-6 flex gap-6">
            {/* Left Side: Profile */}
            <div className="bg-gray-700 p-5 rounded-lg flex flex-col items-center w-1/3">
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="w-28 h-28 rounded-full border-4 border-blue-500"
              />
              <h3 className="text-xl font-semibold mt-3">{userData.name || userData.login}</h3>
              <p className="text-gray-400 text-sm text-center">{userData.bio}</p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-400 hover:underline"
              >
                View Profile
              </a>
            </div>

            {/* Right Side: Repositories */}
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-blue-300 mb-3">Repositories:</h4>
              <div className="grid grid-cols-2 gap-4">
                {repos.slice(0, 6).map((repo) => (
                  <div key={repo.id} className="bg-gray-700 p-4 rounded-lg shadow-md">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 font-semibold hover:underline"
                    >
                      {repo.name}
                    </a>
                    <p className="text-sm text-gray-400 mt-1">{repo.description || 'No description available'}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GithubSearch;

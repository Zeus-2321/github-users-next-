'use client';

import { useState, useEffect } from 'react';
import UserList from '../pages/UserList';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGitHubUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.github.com/users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching GitHub users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubUsers();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">GitHub Users</h1>
      {loading ? (
        <p className="text-gray-600 italic">Loading...</p>
      ) : (
        <UserList users={users} />
      )}
    </main>
  );
}

'use client';

import { useState, useEffect } from 'react';

interface BlogContent {
  _id: string;
  originalUrl: string;
  title: string;
  content: string;
  author?: string;
  publishedDate?: string;
  wordCount: number;
  language: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

interface MongoDBResponse {
  success: boolean;
  data: BlogContent[];
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}

export default function MongoDBViewer() {
  const [data, setData] = useState<MongoDBResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const limit = 5;

  const fetchData = async (newOffset: number = 0) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/mongodb?limit=${limit}&offset=${newOffset}`);
      const result = await response.json();
      
      if (result.success) {
        setData(result);
        setError(null);
      } else {
        setError(result.error || 'Failed to fetch data');
      }
    } catch (err) {
      console.error('Error loading data:', err);
      setError('Failed to connect to MongoDB');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNext = () => {
    if (data && data.hasMore) {
      const newOffset = offset + limit;
      setOffset(newOffset);
      fetchData(newOffset);
    }
  };

  const handlePrevious = () => {
    if (offset > 0) {
      const newOffset = Math.max(0, offset - limit);
      setOffset(newOffset);
      fetchData(newOffset);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">MongoDB Content Viewer</h1>
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading MongoDB content...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">MongoDB Content Viewer</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-800 mb-2">Error</h2>
            <p className="text-red-700">{error}</p>
            <button 
              onClick={() => fetchData()}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">MongoDB Content Viewer</h1>
        
        {data && (
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {offset + 1}-{Math.min(offset + data.data.length, data.total)} of {data.total} documents
            </p>
          </div>
        )}

        {data?.data.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <span className="text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>
            
            <div className="mb-4">
              <p className="text-blue-600 text-sm mb-2">
                <strong>URL:</strong> {item.originalUrl}
              </p>
              {item.author && (
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Author:</strong> {item.author}
                </p>
              )}
              <p className="text-gray-600 text-sm mb-2">
                <strong>Word Count:</strong> {item.wordCount}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Language:</strong> {item.language}
              </p>
              {item.tags.length > 0 && (
                <div className="mb-2">
                  <strong className="text-gray-600 text-sm">Tags:</strong>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-gray-900 mb-2">Content Preview:</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.content.length > 300 
                  ? `${item.content.substring(0, 300)}...` 
                  : item.content
                }
              </p>
            </div>

            <div className="text-xs text-gray-500">
              <p><strong>ID:</strong> {item._id}</p>
              <p><strong>Created:</strong> {new Date(item.createdAt).toLocaleString()}</p>
              <p><strong>Updated:</strong> {new Date(item.updatedAt).toLocaleString()}</p>
            </div>
          </div>
        ))}

        {data && (
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrevious}
              disabled={offset === 0}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <span className="text-gray-600">
              Page {Math.floor(offset / limit) + 1} of {Math.ceil(data.total / limit)}
            </span>
            
            <button
              onClick={handleNext}
              disabled={!data.hasMore}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}

        {data?.data.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No MongoDB content found.</p>
            <p className="text-gray-400 text-sm mt-2">
              Try submitting a blog URL to create some content.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 
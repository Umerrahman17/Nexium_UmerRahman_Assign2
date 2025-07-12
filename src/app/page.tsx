'use client';

import { useState } from 'react';
import { Loader2, Globe, FileText, Languages, Database, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to summarize blog');
      }

      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getDatabaseStatusInfo = (status: string) => {
    switch (status) {
      case 'both':
        return {
          icon: <CheckCircle className="w-5 h-5 text-green-600" />,
          title: 'Saved to Both Databases',
          message: 'Your summary has been saved to both PostgreSQL and MongoDB.',
          color: 'bg-green-50 border-green-200 text-green-800'
        };
      case 'postgresql_only':
        return {
          icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
          title: 'Saved to PostgreSQL',
          message: 'Summary saved to PostgreSQL database.',
          color: 'bg-blue-50 border-blue-200 text-blue-800'
        };
      case 'mongodb_only':
        return {
          icon: <CheckCircle className="w-5 h-5 text-purple-600" />,
          title: 'Saved to MongoDB',
          message: 'Summary saved to MongoDB database.',
          color: 'bg-purple-50 border-purple-200 text-purple-800'
        };
      default:
        return {
          icon: <XCircle className="w-5 h-5 text-yellow-600" />,
          title: 'Database Not Available',
          message: 'Summary generated successfully, but database storage is not available.',
          color: 'bg-yellow-50 border-yellow-200 text-yellow-800'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog Summarizer
            </h1>
            <p className="text-lg text-gray-600">
              Extract, summarize, and translate blog content with AI-powered insights
            </p>
          </div>

          {/* URL Input Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
                  Blog URL
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com/blog-post"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading || !url}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4" />
                        Summarize
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <span className="font-medium text-red-800">Error</span>
              </div>
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Results Display */}
          {result && (
            <div className="space-y-6">
              {/* Database Status */}
              {result.databaseStatus && (
                <div className={`rounded-lg p-4 border ${getDatabaseStatusInfo(result.databaseStatus).color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {getDatabaseStatusInfo(result.databaseStatus).icon}
                    <span className="font-medium">
                      {getDatabaseStatusInfo(result.databaseStatus).title}
                    </span>
                  </div>
                  <p className="text-sm">
                    {getDatabaseStatusInfo(result.databaseStatus).message}
                  </p>
                </div>
              )}

              {/* Original Content */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Original Content</h2>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">Title:</span>
                    <p className="text-gray-900">{result.title}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Word Count:</span>
                    <p className="text-gray-900">{result.wordCount} words</p>
                  </div>
                  {result.author && (
                    <div>
                      <span className="font-medium text-gray-700">Author:</span>
                      <p className="text-gray-900">{result.author}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* AI Summary */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-green-600" />
                  <h2 className="text-xl font-semibold text-gray-900">AI Summary</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{result.summary}</p>
              </div>

              {/* Urdu Translation */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="w-5 h-5 text-purple-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Urdu Translation</h2>
                </div>
                <p className="text-gray-700 leading-relaxed" dir="rtl">{result.urduSummary}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

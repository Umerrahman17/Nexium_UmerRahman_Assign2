'use client';

import { useState } from 'react';
import { Loader2, Globe, FileText, Languages, Database, AlertCircle, CheckCircle, XCircle, Sparkles, Zap, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
          icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
          title: 'Saved to Both Databases',
          message: 'Your summary has been saved to both PostgreSQL and MongoDB.',
          color: 'bg-emerald-50 border-emerald-200 text-emerald-800'
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
          icon: <XCircle className="w-5 h-5 text-amber-600" />,
          title: 'Database Not Available',
          message: 'Summary generated successfully, but database storage is not available.',
          color: 'bg-amber-50 border-amber-200 text-amber-800'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4 dark:from-white dark:via-blue-100 dark:to-purple-100">
              Blog Summarizer
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Transform any blog into concise insights with AI-powered summarization and Urdu translation
            </p>
          </div>

          {/* URL Input Form */}
          <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl dark:bg-slate-800/80">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                  <label htmlFor="url" className="block text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
                    <Globe className="w-4 h-4 inline mr-2 text-blue-600" />
                  Blog URL
                </label>
                  <div className="flex gap-3">
                    <Input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com/blog-post"
                      className="flex-1 h-12 text-base border-2 border-slate-200 focus:border-blue-500 dark:border-slate-600 dark:focus:border-blue-400"
                    required
                  />
                    <Button
                    type="submit"
                    disabled={loading || !url}
                      className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {loading ? (
                      <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                          <Zap className="w-5 h-5" />
                        Summarize
                      </>
                    )}
                    </Button>
                </div>
              </div>
            </form>
            </CardContent>
          </Card>

          {/* Error Display */}
          {error && (
            <Alert variant="destructive" className="mb-8 border-2 shadow-lg">
              <AlertCircle className="w-5 h-5" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Results Display */}
          {result && (
            <div className="space-y-8">
              {/* Database Status */}
              {result.databaseStatus && (
                <Alert className={`border-2 shadow-lg ${getDatabaseStatusInfo(result.databaseStatus).color}`}>
                    {getDatabaseStatusInfo(result.databaseStatus).icon}
                  <AlertTitle>{getDatabaseStatusInfo(result.databaseStatus).title}</AlertTitle>
                  <AlertDescription>{getDatabaseStatusInfo(result.databaseStatus).message}</AlertDescription>
                </Alert>
              )}

              {/* Original Content */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl dark:bg-slate-800/90 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-3 pb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Original Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wide">Title</span>
                      <p className="text-slate-900 dark:text-white mt-1 font-medium">{result.title}</p>
                  </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                      <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wide">Word Count</span>
                      <p className="text-slate-900 dark:text-white mt-1 font-medium">{result.wordCount} words</p>
                    </div>
                  {result.author && (
                      <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm uppercase tracking-wide">Author</span>
                        <p className="text-slate-900 dark:text-white mt-1 font-medium">{result.author}</p>
                    </div>
                  )}
                </div>
                </CardContent>
              </Card>

              {/* AI Summary */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl dark:bg-slate-800/90 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-3 pb-4">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">AI Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">{result.summary}</p>
              </div>
                </CardContent>
              </Card>

              {/* Urdu Translation */}
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl dark:bg-slate-800/90 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-3 pb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Languages className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Urdu Translation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg" dir="rtl">{result.urduSummary}</p>
              </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Powered by AI • Built with Next.js & ShadCN UI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

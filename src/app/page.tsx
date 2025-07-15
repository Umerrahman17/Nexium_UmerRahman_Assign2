'use client';

import { useState } from 'react';
import { Loader2, Globe, FileText, Languages, Database, AlertCircle, CheckCircle, XCircle, Sparkles, Zap, BookOpen, Copy, ExternalLink, Clock, User, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState('');

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

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
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
      case 'supabase':
        return {
          icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
          title: 'Saved to Supabase',
          message: 'Summary saved to Supabase database.',
          color: 'bg-blue-50 border-blue-200 text-blue-800'
        };
      case 'already_exists':
        return {
          icon: <CheckCircle className="w-5 h-5 text-green-600" />,
          title: 'Retrieved from Database',
          message: 'This blog was already processed. Retrieved existing summary.',
          color: 'bg-green-50 border-green-200 text-green-800'
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
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mb-6 shadow-2xl animate-pulse">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4 dark:from-white dark:via-blue-100 dark:to-purple-100">
              Blog Summarizer
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform any blog into concise insights with AI-powered summarization and Urdu translation
            </p>
            
            {/* Features */}
            <div className="flex justify-center items-center gap-8 mt-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Languages className="w-4 h-4 text-blue-500" />
                <span>Urdu Translation</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-green-500" />
                <span>Smart Storage</span>
              </div>
            </div>
          </div>

          {/* URL Input Form */}
          <Card className="mb-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl dark:bg-slate-800/90 hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="url" className="block text-base font-semibold text-slate-700 dark:text-slate-200 mb-3">
                    <Globe className="w-4 h-4 inline mr-2 text-blue-600" />
                    Enter Blog URL
                  </label>
                  <div className="flex gap-3">
                    <Input
                      type="url"
                      id="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://example.com/blog-post"
                      className="flex-1 h-12 text-base border-2 border-slate-200 focus:border-blue-500 dark:border-slate-600 dark:focus:border-blue-400 rounded-lg"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={loading || !url}
                      className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg text-base"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5 mr-2" />
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
            <Alert variant="destructive" className="mb-8 border-2 shadow-lg animate-in slide-in-from-top-2">
              <AlertCircle className="w-5 h-5" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Demo Section - Shows when no results */}
          {!result && !loading && (
            <div className="mb-12">
              <Card className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Ready to Get Started?</h2>
                    <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                      Try our AI-powered blog summarizer with any blog URL. Get instant summaries and Urdu translations in seconds.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/60 dark:bg-slate-700/60 rounded-lg p-4">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What You'll Get:</h3>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• Intelligent content extraction</li>
                        <li>• AI-powered summarization</li>
                        <li>• Urdu translation with context</li>
                        <li>• Smart database storage</li>
                      </ul>
                    </div>
                    <div className="bg-white/60 dark:bg-slate-700/60 rounded-lg p-4">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Perfect For:</h3>
                      <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        <li>• Research and study</li>
                        <li>• Content creators</li>
                        <li>• Multilingual readers</li>
                        <li>• Quick information gathering</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Results Display */}
          {result && (
            <div className="space-y-6 animate-in slide-in-from-bottom-2">
              {/* Database Status */}
              {result.databaseStatus && (
                <Alert className={`border-2 shadow-lg ${getDatabaseStatusInfo(result.databaseStatus).color} animate-in slide-in-from-top-2`}>
                  {getDatabaseStatusInfo(result.databaseStatus).icon}
                  <AlertTitle>{getDatabaseStatusInfo(result.databaseStatus).title}</AlertTitle>
                  <AlertDescription>{getDatabaseStatusInfo(result.databaseStatus).message}</AlertDescription>
                </Alert>
              )}

              {/* Original Content */}
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl dark:bg-slate-800/95 hover:shadow-2xl transition-all duration-500">
                <CardHeader className="flex flex-row items-center gap-3 pb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mb-1">Original Content</CardTitle>
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <BarChart3 className="w-3 h-3" />
                        <span>{result.wordCount} words</span>
                      </div>
                      {result.author && (
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{result.author}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>Just processed</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(url, '_blank')}
                    className="flex items-center gap-1 text-xs"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View Original
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="p-4 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700/50 dark:to-blue-900/20 rounded-lg border border-slate-200 dark:border-slate-600">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{result.title}</h3>
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-sm">
                      Content extracted successfully from the blog post.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Original Content Preview */}
              {result.summary && result.summary.includes('---') && (
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl dark:bg-slate-800/95 hover:shadow-2xl transition-all duration-500">
                  <CardHeader className="flex flex-row items-center justify-between pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-amber-100 to-orange-200 dark:from-amber-900/30 dark:to-orange-800/30 rounded-lg">
                        <BookOpen className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Original Content Preview</CardTitle>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(result.summary.split('---')[0], 'preview')}
                      className="flex items-center gap-1 text-xs"
                    >
                      {copied === 'preview' ? (
                        <>
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy
                        </>
                      )}
                    </Button>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                      <p className="text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">{result.summary.split('---')[0]}</p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* AI Summary */}
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl dark:bg-slate-800/95 hover:shadow-2xl transition-all duration-500">
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-emerald-100 to-green-200 dark:from-emerald-900/30 dark:to-green-800/30 rounded-lg">
                      <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">AI Summary</CardTitle>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(result.summary.includes('---') ? result.summary.split('---')[1] : result.summary, 'summary')}
                    className="flex items-center gap-1 text-xs"
                  >
                    {copied === 'summary' ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{result.summary.includes('---') ? result.summary.split('---')[1] : result.summary}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Urdu Translation */}
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl dark:bg-slate-800/95 hover:shadow-2xl transition-all duration-500">
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-100 to-pink-200 dark:from-purple-900/30 dark:to-pink-800/30 rounded-lg">
                      <Languages className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">Urdu Translation</CardTitle>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(result.urduSummary.includes('---') ? result.urduSummary.split('---')[1] : result.urduSummary, 'urdu')}
                    className="flex items-center gap-1 text-xs"
                  >
                    {copied === 'urdu' ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Copy
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed" dir="rtl">{result.urduSummary.includes('---') ? result.urduSummary.split('---')[1] : result.urduSummary}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Features Section */}
          <div className="mt-16 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Our Summarizer?</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Experience the power of AI-driven content analysis with our advanced features
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800/80">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Lightning Fast</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Get instant summaries powered by advanced AI algorithms
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800/80">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Languages className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Multi-Language</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Automatic Urdu translation with cultural context preservation
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-slate-800/80">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Smart Storage</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Intelligent caching prevents duplicate processing
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Simple three-step process to get your blog summarized
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Paste URL</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Simply paste the blog URL you want to summarize
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI Processing</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Our AI extracts and analyzes the content intelligently
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Get Results</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Receive summary and Urdu translation instantly
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-12">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Platform Statistics</h2>
                  <p className="text-slate-600 dark:text-slate-300">
                    Trusted by users worldwide for content summarization
                  </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">10K+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Blogs Summarized</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">99%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">5K+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Happy Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">24/7</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">Availability</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-20 pt-12 border-t border-slate-200 dark:border-slate-700">
            <div className="flex justify-center items-center gap-6 mb-4">
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Sparkles className="w-4 h-4" />
                <span>AI-Powered</span>
              </div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Database className="w-4 h-4" />
                <span>Smart Storage</span>
              </div>
              <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                <Languages className="w-4 h-4" />
                <span>Multi-Language</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Powered by AI • Built with Next.js & ShadCN UI • MongoDB & Supabase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

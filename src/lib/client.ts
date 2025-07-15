// Client-side utility functions for the blog summarizer

export interface SummaryRequest {
  url: string;
}

export interface SummaryResponse {
  title: string;
  wordCount: number;
  author?: string;
  summary: string;
  urduSummary: string;
  id?: string;
  databaseStatus: 'supabase' | 'mongodb' | 'both' | 'not_available';
  savedToDatabase: boolean;
}

export interface BlogSummary {
  id: string;
  originalUrl: string;
  title?: string;
  summary: string;
  urduSummary: string;
  wordCount: number;
  language: string;
  tags: string[];
  author?: string;
  publishedDate?: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Submit a blog URL for summarization
 */
export async function submitBlogForSummary(url: string): Promise<SummaryResponse> {
  try {
    const response = await fetch('/api/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to summarize blog');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting blog for summary:', error);
    throw error;
  }
}

/**
 * Get all saved summaries
 */
export async function getAllSummaries(limit: number = 10, offset: number = 0): Promise<BlogSummary[]> {
  try {
    const response = await fetch(`/api/summaries?limit=${limit}&offset=${offset}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch summaries');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching summaries:', error);
    throw error;
  }
}

/**
 * Get a specific summary by ID
 */
export async function getSummaryById(id: string): Promise<BlogSummary | null> {
  try {
    const response = await fetch(`/api/summaries/${id}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch summary');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching summary:', error);
    throw error;
  }
}

/**
 * Get a summary by URL
 */
export async function getSummaryByUrl(url: string): Promise<BlogSummary | null> {
  try {
    const response = await fetch(`/api/summaries/url?url=${encodeURIComponent(url)}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch summary');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching summary by URL:', error);
    throw error;
  }
}

/**
 * Delete a summary by ID
 */
export async function deleteSummary(id: string): Promise<boolean> {
  try {
    const response = await fetch(`/api/summaries/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete summary');
    }

    return true;
  } catch (error) {
    console.error('Error deleting summary:', error);
    throw error;
  }
}

/**
 * Update a summary
 */
export async function updateSummary(id: string, data: Partial<BlogSummary>): Promise<BlogSummary> {
  try {
    const response = await fetch(`/api/summaries/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update summary');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating summary:', error);
    throw error;
  }
}

/**
 * Search summaries by keyword
 */
export async function searchSummaries(query: string, limit: number = 10): Promise<BlogSummary[]> {
  try {
    const response = await fetch(`/api/summaries/search?q=${encodeURIComponent(query)}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error('Failed to search summaries');
    }

    return await response.json();
  } catch (error) {
    console.error('Error searching summaries:', error);
    throw error;
  }
} 
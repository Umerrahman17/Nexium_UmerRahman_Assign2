export function generateSummary(content: string, maxLength: number = 400): string {
  if (!content || content.trim().length === 0) {
    return 'No content available to summarize.';
  }

  // Clean the content - keep more punctuation for better sentence detection
  const cleanContent = content
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s.,!?;:()'"-]/g, '')
    .trim();

  if (cleanContent.length < 50) {
    return 'Content too short to generate a meaningful summary.';
  }

  // Split into sentences more reliably
  const sentences = cleanContent
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 20 && s.length < 500);

  if (sentences.length === 0) {
    // Fallback: take first 200 characters
    return cleanContent.substring(0, 200) + '...';
  }

  // Define important keywords for different topics
  const keywordCategories = {
    technology: ['technology', 'software', 'programming', 'development', 'code', 'application', 'system', 'platform', 'digital', 'computer', 'data', 'algorithm', 'framework', 'database', 'api', 'web', 'mobile', 'cloud', 'ai', 'machine learning', 'artificial intelligence'],
    business: ['business', 'company', 'organization', 'strategy', 'management', 'leadership', 'team', 'project', 'market', 'industry', 'profit', 'revenue', 'growth', 'startup', 'entrepreneur', 'investment', 'finance', 'economy', 'corporate', 'enterprise'],
    health: ['health', 'medical', 'doctor', 'patient', 'treatment', 'disease', 'medicine', 'hospital', 'surgery', 'therapy', 'wellness', 'fitness', 'nutrition', 'exercise', 'mental health', 'physical', 'clinical', 'diagnosis', 'symptoms'],
    education: ['education', 'learning', 'teaching', 'student', 'school', 'university', 'course', 'study', 'research', 'academic', 'knowledge', 'training', 'curriculum', 'lecture', 'assignment', 'exam', 'degree', 'professor', 'classroom'],
    general: ['important', 'key', 'main', 'primary', 'essential', 'crucial', 'significant', 'major', 'central', 'fundamental', 'critical', 'introduction', 'conclusion', 'summary', 'overview', 'background', 'details', 'analysis', 'report', 'information', 'explains', 'describes', 'discusses', 'shows', 'presents', 'provides', 'offers', 'includes', 'contains']
  };

  // Score sentences based on keywords and position
  const sentenceScores = sentences.map((sentence, index) => {
    let score = 0;
    const lowerSentence = sentence.toLowerCase();
    
    // Higher score for sentences at the beginning (first 60% of content)
    if (index < sentences.length * 0.6) {
      score += 15;
    }
    
    // Score based on sentence length (prefer medium to long sentences)
    const length = sentence.length;
    if (length > 50 && length < 300) {
      score += 8;
    } else if (length > 30 && length < 400) {
      score += 5;
    }
    
    // Score based on keyword presence
    Object.values(keywordCategories).flat().forEach(keyword => {
      if (lowerSentence.includes(keyword)) {
        score += 5;
      }
    });
    
    // Bonus for sentences that start with capital letters (likely important)
    if (sentence[0] && sentence[0] === sentence[0].toUpperCase()) {
      score += 3;
    }
    
    // Bonus for sentences with numbers (often contain important data)
    if (/\d/.test(sentence)) {
      score += 2;
    }
    
    // Bonus for sentences with quotes (often important statements)
    if (sentence.includes('"') || sentence.includes("'")) {
      score += 3;
    }
    
    return { sentence, score, index };
  });

  // Sort by score (highest first)
  sentenceScores.sort((a, b) => b.score - a.score);
  
  // Take more sentences for a longer summary (4-6 sentences)
  let summary = '';
  let totalLength = 0;
  const maxSentences = 6;
  let sentenceCount = 0;
  
  for (const { sentence } of sentenceScores) {
    if (totalLength + sentence.length + 2 <= maxLength && sentenceCount < maxSentences) {
      if (summary) summary += ' ';
      summary += sentence + '.';
      totalLength += sentence.length + 2;
      sentenceCount++;
    } else {
      break;
    }
  }

  // If we still don't have a summary, take the first few sentences
  if (!summary && sentences.length > 0) {
    const firstSentences = sentences.slice(0, Math.min(4, sentences.length));
    summary = firstSentences.join('. ') + '.';
  }

  // Final fallback: create a longer summary from the beginning
  if (!summary) {
    const words = cleanContent.split(/\s+/);
    const wordCount = Math.min(50, words.length);
    summary = words.slice(0, wordCount).join(' ') + '...';
  }

  // Ensure the summary is not too short
  if (summary.length < 100 && sentences.length > 0) {
    // Add more sentences from the beginning
    const additionalSentences = sentences.slice(0, Math.min(3, sentences.length));
    const additionalText = additionalSentences.join('. ') + '.';
    if (summary.length + additionalText.length < maxLength) {
      summary = summary + ' ' + additionalText;
    }
  }

  return summary;
} 
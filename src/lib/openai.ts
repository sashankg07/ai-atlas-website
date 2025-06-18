import OpenAI from 'openai';

// Debug environment variable
console.log('OPENAI_API_KEY exists:', !!process.env.OPENAI_API_KEY);
console.log('OPENAI_API_KEY length:', process.env.OPENAI_API_KEY?.length);

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OPENAI_API_KEY environment variable. Please check your .env.local file.');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface NewsItem {
  title: string;
  description: string;
  source: string;
  url: string;
  category: string;
  publishedAt: string;
}

export async function searchAndSummarizeNews(query: string): Promise<NewsItem[]> {
  try {
    console.log('OpenAI: Starting news search for query:', query);
    
    const searchResponse = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant that searches for and summarizes AI news. 
          Provide exactly 5 recent news items about the given topic.
          Format each news item exactly as shown below, with no additional text:
          
          ---
          Title: [News Title]
          Description: [2-3 sentence description]
          Source: [News Source Name]
          URL: [Valid URL]
          ---`
        },
        {
          role: "user",
          content: `Find 5 recent news items about: ${query}. 
          Make sure to include real, recent news with valid sources and URLs.
          Format each item exactly as specified.`
        }
      ],
      temperature: 0.7,
    });

    console.log('OpenAI: Received response from API');
    
    const newsItems: NewsItem[] = [];
    const content = searchResponse.choices[0].message.content;
    
    if (content) {
      // Split by the separator
      const items = content.split('---').filter(item => item.trim());
      console.log('OpenAI: Number of items found:', items.length);
      
      for (const item of items) {
        if (item.trim()) {
          const lines = item.split('\n').filter(line => line.trim());
          if (lines.length >= 4) {
            const newsItem = {
              title: lines[0].replace('Title:', '').trim(),
              description: lines[1].replace('Description:', '').trim(),
              source: lines[2].replace('Source:', '').trim(),
              url: lines[3].replace('URL:', '').trim(),
              category: query,
              publishedAt: new Date().toISOString(),
            };
            console.log('OpenAI: Created news item:', newsItem);
            newsItems.push(newsItem);
          }
        }
      }
    }

    console.log('OpenAI: Total news items created:', newsItems.length);
    return newsItems;
  } catch (error) {
    console.error('OpenAI: Error in searchAndSummarizeNews:', error);
    throw error;
  }
}

export async function generateCategoryDescription(category: string): Promise<string> {
  try {
    console.log('OpenAI: Generating description for category:', category);
    
    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates concise, engaging descriptions for AI news categories."
        },
        {
          role: "user",
          content: `Generate a brief, engaging description for the AI news category: ${category}`
        }
      ],
      temperature: 0.7,
      max_tokens: 100,
    });

    const description = response.choices[0].message.content || '';
    console.log('OpenAI: Generated description:', description);
    return description;
  } catch (error) {
    console.error('OpenAI: Error generating category description:', error);
    throw error;
  }
} 
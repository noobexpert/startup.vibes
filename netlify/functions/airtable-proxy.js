// Updated configuration
const PROXY_URL = '/.netlify/functions/airtable-proxy';

// Updated savePost function
async function savePost(postData) {
  try {
    const response = await fetch(PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          Startup: postData.startup,
          URL: postData.url,
          Content: postData.content,
          Vibe: postData.vibe,
          Created: new Date().toISOString()
        }
      })
    });
    
    if (!response.ok) throw new Error('Failed to save');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}


function safeParse(text, fallback = null) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return fallback; 
  }
}

const brokenJson = '{"title": "JavaScript"'; 

const result = safeParse(brokenJson, "Default Fallback Value");
console.log(result);

const Groq = require("groq-sdk");

// Create Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// Function to analyze resume
const analyzeResume = async (resumeText) => {

    const completion = await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",

        messages: [
            {
                role: "system",
                content: `You are an expert ATS Resume Analyzer.`,
            },
            {
                role: "user",
                content: `
You are an expert ATS (Applicant Tracking System) Resume Analyzer.

Analyze the resume carefully.

Respond ONLY with valid JSON.

Do not write markdown.
Do not write explanations.
Do not use \`\`\`.

Return this exact structure:

{
  "score": <integer between 0 and 100>,
  "strengths": [
    "...",
    "..."
  ],
  "weaknesses": [
    "...",
    "..."
  ],
  "missingSkills": [
    "...",
    "..."
  ],
  "suggestions": [
    "...",
    "..."
  ]
}

Rules:
- score must be an integer from 0 to 100.
- strengths must contain at least 3 points.
- weaknesses must contain at least 3 points.
- missingSkills must contain at least 3 points.
- suggestions must contain at least 3 points.

Resume:

${resumeText}
                `,
            },
        ],

        temperature: 0.3,
    });

    return completion.choices[0].message.content;
};

module.exports = analyzeResume;
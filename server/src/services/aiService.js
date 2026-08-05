const Groq = require("groq-sdk");

// Create Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// Function to analyze resume
const analyzeResume = async (resumeText) => {

    const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
            {
                role: "system",
                content: `You are an expert ATS Resume Analyzer.`,
            },
            {
                role: "user",
                content: `
Analyze this resume and provide:

1. Resume Score (out of 100)
2. Strengths
3. Weaknesses
4. Missing Skills
5. Suggestions for Improvement

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
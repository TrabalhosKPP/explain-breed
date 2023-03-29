function explain_breed(breed) {
    const apiKey = "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";
    const prompt = `Explique sobre a raça ${breed}`;

    fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 250,
            top_p: 1,
            temperature: 0
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return; 
        })
        .catch(error => console.error(error));
}
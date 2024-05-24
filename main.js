document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote');
    const quoteAuthor = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const tweetQuoteButton = document.getElementById('tweet-quote');

    const quotes = [
        {
            quote: "An investment in knowledge pays the best interest.",
            author: "Benjamin Franklin"
        },
        {
            quote: "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
            author: "Philip Fisher"
        },
        {
            quote: "In investing, what is comfortable is rarely profitable.",
            author: "Robert Arnott"
        },
        {
            quote: "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
            author: "Paul Samuelson"
        },
        {
            quote: "The individual investor should act consistently as an investor and not as a speculator.",
            author: "Ben Graham"
        }
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayQuote() {
        const randomQuote = getRandomQuote();
        quoteText.textContent = randomQuote.quote;
        quoteAuthor.textContent = `— ${randomQuote.author}`;
    }

    function tweetQuote() {
        const quote = quoteText.textContent;
        const author = quoteAuthor.textContent;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} ${encodeURIComponent(author)}`;
        window.open(tweetUrl, '_blank');
    }

    newQuoteButton.addEventListener('click', displayQuote);
    tweetQuoteButton.addEventListener('click', tweetQuote);

    // Display a quote when the page loads
    displayQuote();
});

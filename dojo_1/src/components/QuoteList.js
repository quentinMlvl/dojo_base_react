import Quote from './Quote.js';
import quotes from './quotes-api.js'

function QuoteList() {
    let quoteList = Object.values(quotes[0]);
    quoteList = quoteList.sort((a, b) => 0.5 - Math.random()).slice(0, 30);

    return (
        <section>
            <ul>
                {quoteList.map((quote, index) => {
                    return (
                        <Quote quote={quote} key={index}/>
                    );
                })}
            </ul>
        </section>
    );
}

export default QuoteList;

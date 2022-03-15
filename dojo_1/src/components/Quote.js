import { useState } from 'react';

function Quote({ quote }){
    const [ like, setLike ] = useState(0);
    const [ dislike, setDislike ] = useState(0);

    return (
        <li>
            <blockquote>
                <p>{quote.citation}</p>
                <legend>— {quote.infos.personnage} <em>{quote.infos.saison} : {quote.infos.episode} </em>
                </legend>
            </blockquote>
            <div className="buttons">
                <button onClick={() => setLike(like + 1)}><span>👍 J'aime : </span><strong>{ like }</strong></button>
                <button onClick={() => setDislike(dislike + 1)}><span>👎 Je n'aime pas : </span><strong>{ dislike }</strong></button>
            </div>
        </li>
    )
}

export default Quote;
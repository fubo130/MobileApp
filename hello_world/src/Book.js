import React, {Component} from 'react';


export const Book = ({title="no title", author="no author", pages="no pages", freeBookMark=false}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark today: {freeBookMark ? "yes!":"no!"}</p>
        </section>
    )
}
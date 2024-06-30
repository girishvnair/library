import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf';

const Dashboard = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('/api/get-books');
            setBooks(response.data.books);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleBookClick = (bookId) => {
        // Handle book click to open PDF viewer or EPUB reader
        // Example using react-pdf for PDF viewing
    };

    return (
        <div>
            <h2>Your Books</h2>
            <div className="thumbnails">
                {books.map((book) => (
                    <div key={book.id} className="thumbnail" onClick={() => handleBookClick(book.id)}>
                        <img src={book.thumbnailUrl} alt={book.title} />
                        <p>{book.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

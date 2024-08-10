// src/context/productContext.jsx

"use client";
import React, { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
                };

                const response = await fetch("http://localhost:1337/api/products?populate=*", {
                    method: "GET",
                    headers: headers
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setProducts(data.data || []);
            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    
    return (
        <ProductsContext.Provider value={{ products, setProducts,loading,setLoading }}>
            {children}
        </ProductsContext.Provider>
    );
};

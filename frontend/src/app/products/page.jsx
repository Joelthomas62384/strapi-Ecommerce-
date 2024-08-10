"use client"

import React, { useContext } from 'react';
import { ProductsContext } from '@/context/productContext'; // Ensure the path is correct
import Card from '@/components/Card';
import LoadingCard from '@/components/LoadingCard';



const Products = () => {
    const { products, loading } = useContext(ProductsContext)
    const getImageUrl = (product) => {
        return product?.attributes?.Image?.data?.attributes?.formats?.large?.url
            ? `http://localhost:1337${product.attributes.Image.data.attributes.formats.large.url}`
            : "https://dummyimage.com/720x400";
    };

    return (
        <div className='container mx-auto'>
            <section className="text-gray-400 body-font ">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Discover Your Style</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>

                    </div>
                    <div className="flex flex-wrap -m-4">

                        {loading && (
                            <div className='flex flex-wrap w-full'>
                                <LoadingCard />
                                <LoadingCard />
                                <LoadingCard />
                                <LoadingCard />


                            </div>
                        )}
                        {

                            products.length > 0 && !loading && products.map((e) => {
                                const title = e.attributes?.Title || 'Default Title';
                                const category = e.attributes?.Category || 'Default Title';
                                const imageUrl = getImageUrl(e);
                                const slug = e.attributes?.slug || 'default-slug';
                                const description = e.attributes?.description || 'default-slug';

                                console.log(e)
                                return (
                                    <Card
                                        key={e.id}
                                        title={title}
                                        image={imageUrl}
                                        slug={slug}
                                        category={category}
                                        description={description}
                                    />
                                );
                            })
                        }
                        {!loading && products.length === 0 && "No Products"}



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products


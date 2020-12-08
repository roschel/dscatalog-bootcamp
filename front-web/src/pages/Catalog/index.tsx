import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsResponse } from '../../core/types/Product';
import { makeRequest } from '../../core/utils/request';
import ProductCard from './components/ProductCard';
import './styles.scss'

const Catalog = () => {
    //quando a lista de produtos estiver disponível,
    //popular um estado no componente e listar os produtos dinâmicamente
    const [productsResponse, setProductResponse] = useState<ProductsResponse>();


    //quando componente iniciar, buscar lista de produtos
    useEffect(() => {
        // limitações do fetch:
        //muito verboso
        //não tem suporte para ler o upload de arquivos
        //não tem suporta para enviar query strings
        //     fetch('http://localhost:3000/products')
        //         .then(response => response.json())
        //         .then(response => console.log(response))

        const params = {
            page: 0,
            linesPerPage: 5
        }

        makeRequest({ url: '/products', params })
            .then(response => setProductResponse(response.data))

    }, []);

    return (
        <div className="catalog-container">
            <h1 className="catalog-title">Catálogo de produtos</h1>
            <div className="catalog-products">
                {productsResponse?.content.map(product => (
                    <Link to="/products/1" key={product.id}>
                        <ProductCard />
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default Catalog
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeRequest } from '../../core/utils/request';
import ProductCard from './components/ProductCard';
import './styles.scss'

const Catalog = () => {
    //quando a lista de produtos estiver disponível,
    //popular um estado no componente e listar os produtos dinâmicamente


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
            page:0,
            linesPerPage:12
        }

        makeRequest({url:'/products', params})
            .then(response => console.log(response))

    }, []);

    return (
        <div className="catalog-container">
            <h1 className="catalog-title">Catálogo de produtos</h1>
            <div className="catalog-products">
                <Link to="/products/1"><ProductCard /></Link>
                <Link to="/products/2"><ProductCard /></Link>
                <Link to="/products/3"><ProductCard /></Link>
                <Link to="/products/4"><ProductCard /></Link>
                <Link to="/products/5"><ProductCard /></Link>
                <Link to="/products/6"><ProductCard /></Link>
                <Link to="/products/7"><ProductCard /></Link>
                <Link to="/products/8"><ProductCard /></Link>
                <Link to="/products/9"><ProductCard /></Link>
                <Link to="/products/10"><ProductCard /></Link>
                <Link to="/products/11"><ProductCard /></Link>
                <Link to="/products/12"><ProductCard /></Link>
            </div>
        </div>
    )
};

export default Catalog
import { makeRequest } from 'core/utils/request'
import React, { useState } from 'react'
import BaseForm from '../../BaseForm'
import './styles.scss'

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '1',
        description: '',
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'https://rihappy.vteximg.com.br/arquivos/ids/790305-768-768/Console---Playstation-5---Sony-0.jpg?v=637366614035030000',
            categories: [{ id: formData.category }]
        }
        makeRequest({ url: '/products', method: "POST", data: payload })
            .then(() => {
                setFormData({name:'', category:'', price:'', description:''});
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <input
                            value={formData.name}
                            type="text"
                            className="form-control mb-5"
                            onChange={handleOnChange}
                            name="name"
                            placeholder="Nome do produto"
                        />
                        <select
                            className="form-control mb-5"
                            onChange={handleOnChange}
                            name="category"
                            value={formData.category}
                        >
                            <option value="1">Livros</option>
                            <option value="3">Computadores</option>
                            <option value="2">Eletrônicos</option>
                        </select>


                        <input
                            value={formData.price}
                            type="text"
                            className="form-control"
                            onChange={handleOnChange}
                            name="price"
                            placeholder="Preço"
                        />
                    </div>
                    <div className="col-6">
                        <textarea
                            className="form-control"
                            name="description"
                            cols={30}
                            rows={10}
                            onChange={handleOnChange}
                            value={formData.description}
                        >

                        </textarea>
                    </div>
                </div>
            </BaseForm>
        </form>

    )
}

export default Form;
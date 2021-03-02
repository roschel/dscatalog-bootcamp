import ButtonIcon from 'core/components/ButtonIcon'
import { saveSessionData } from 'core/utils/auth'
import { makeLogin } from 'core/utils/request'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import AuthCard from '../Card'
import './styles.scss'

type FormData = {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [hasErros, setHasErros] = useState(false);
  const history = useHistory();

  const onSubmit = (data: FormData) => {
    console.log(data)
    makeLogin(data)
      .then(response => {
        setHasErros(false)
        saveSessionData(response.data)
        history.push('/admin')
      })
      .catch(() => {
        setHasErros(true)
      })
  }

  return (
    <AuthCard title="login">
      {hasErros && (
        <div className="alert alert-danger mt-5">
          Usuário ou senha inválidos
        </div>
      )}


      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="form-control input-base margin-bottom-30"
          placeholder="Email"
          name="username"
          ref={register({required: true})}
        />

        <input
          type="password"
          className="form-control input-base"
          placeholder="Senha"
          name="password"
          ref={register({required: true})}
        />

        <Link to="/admin/auth/recover" className="login-link-recover">
          Esqueci a senha?
        </Link>

        <div className="login-submit">
          <ButtonIcon text="logar" />
        </div>

        <div className="text-center">
          <span className="not-registered">Não tem cadastro?</span>
          <Link to="/admin/auth/register" className="login-link-register">
            CADASTRAR
          </Link>
        </div>

      </form>
    </AuthCard>
  )
}

export default Login
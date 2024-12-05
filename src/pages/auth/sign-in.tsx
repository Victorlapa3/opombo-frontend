import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signUpForm = z.object({
  name: z.string().min(2, 'O nome precisa ter pelo menos 2 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres'),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignIn() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    mode: 'onBlur',
  })

  // Função simulada para o envio do formulário
  function handleSignUp(data: SignUpForm) {
    // Apenas exibe os dados no console e mostra uma mensagem
    console.log(data)
    toast.success('Conta criada com sucesso!')
  }

  return (
    <>
      <Helmet title="Entrar" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo de volta
            </h1>
            <p className="text-sm text-muted-foreground">
              Voe alto com oPombo!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <div>
                <p>E-mail</p>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <p>Senha</p>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  {...register('password')}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full bg-primary"
              type="submit"
              onClick={() => {
                navigate('/')
              }}
            >
              Entrar
            </Button>
          </form>
          <div className="text-center">
            <Link to="/sign-up" className="text-sm text-muted-foreground">
              Não tem uma conta? Crie a sua agora
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { createUser } from '@/api/create-user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signUpForm = z.object({
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  password: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerUser } = useMutation({
    mutationFn: createUser,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerUser({
        nome: data.name,
        email: data.email,
        cpf: data.cpf,
        senha: data.password,
      })

      toast.success('Conta criada com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Criar Conta" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Entre no mundo de possibilidades!
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <div>
                <p>Nome</p>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome"
                  {...register('name')}
                />
              </div>

              <div>
                <p>E-mail</p>
                <Input
                  id="email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  {...register('email')}
                />
              </div>
              <div>
                <p>CPF</p>
                <Input
                  id="cpf"
                  type="number"
                  placeholder="Digite seu CPF"
                  {...register('cpf')}
                />
              </div>
              <div>
                <p>Senha</p>
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  {...register('password')}
                />
              </div>
            </div>

            <Button
              disabled={isSubmitting}
              className="w-full bg-primary"
              type="submit"
            >
              Criar Conta
            </Button>
          </form>
          <div className="text-center">
            <Link to="/sign-in" className="text-sm text-muted-foreground">
              Já tem uma conta? Entrar
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

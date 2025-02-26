import { useEffect } from 'react'
import logoImg from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../components/container'

import { Input } from '../../components/input'
import { useForm} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'

const schema = z.object({
  email: z.string().email("Insira um email válido").nonempty("O campo email é obrigatório"),
  password: z.string().nonempty("O campo senha é obrigatório")
})

type FormData = z.infer<typeof schema>

export function Login() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors} } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth)
    }

    handleLogout();
  }, [])

  function onSubmit(data: FormData) {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((user) => {
      console.log("LOGADO COM SUCESSO!")
      console.log(user)
      navigate("/dashboard", { replace: true })
    })
    .catch((error) => {
      console.log("ERRO AO LOGAR")
      console.log(error)
    })
  }

  return (
      <Container>
        <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
          <Link to="/" className="mb-6 max-w-sm w-full">
            <img
              src={logoImg}
              alt="Logo do site"
              className="w-full"
            />
          </Link>

          <form
            className="bg-white max-w-xl w-full rounded-lg p-4"
            onSubmit={handleSubmit(onSubmit)}
          >

            <div className="mb-3">
              <Input
                type="email"
                placeholder="Digete seu eamil..."
                name="email"
                register={register}
                error={errors.email?.message}
              />
            </div>

            <div className="mb-3">
              <Input
                type="password"
                placeholder="Digete sua senha..."
                name="password"
                register={register}
                error={errors.password?.message}
              />
            </div>

            <button type="submit" className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium">
              Acessar
            </button>

          </form>

          <Link to="/register">
            Ainda não possui uma conta? Cadastre-se
          </Link>
        </div>
      </Container>
  )
}
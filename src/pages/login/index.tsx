import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { Container } from '../../components/container'

import { Input } from '../../components/input'
import { useForm} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z.string().email("Insira um email válido").nonempty("O campo email é obrigatório"),
  password: z.string().nonempty("O campo senha é obrigatório")
})

type FormData = z.infer<typeof schema>

export function Login() {

  const { register, handleSubmit, formState: { errors} } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange"
  })

  function onSubmit(data: FormData) {

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
            className="bg-white max-w-xl w-full rounded-lg"
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

            <button>
              Acessar
            </button>
          </form>
        </div>
      </Container>
  )
}
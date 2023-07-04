import { Link } from 'lucide-react'
import { Icons } from './Icons'
import UserAuthForm from './UserAuthForm'

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      {/* y轴间距2，文字居中 */}
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        {/* 字符大小 粗细 间距 */}
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up aBreadit account and agree to our
          User Agreement and Privacy Policy.
        </p>

        {/* sign in form */}
        <UserAuthForm />

        <p className='px-8 text-center text-sm text-zinc-700'>
          New to Breadit?{''}
          <Link href="/sign-up" className='hover:text-zinc-800 text-sm underline underline-offset-4'></Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn

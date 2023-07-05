'use client'

import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import { Icons } from './Icons'
import { useToast } from './hooks/use-toast'
import { Separator } from '@/components/ui/separator'
import { Input } from '@/components/ui/input'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      // toast notification
      toast({
        title: 'There was a problem.',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithEmail = async () => {
    setIsLoading(true)
    try {
      // await signIn('google')
      // 休眠3秒
      await new Promise((resolve) => setTimeout(resolve, 3000))
    } catch (error) {
      // toast notification
      toast({
        title: 'There was a problem.',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex-col justify-center', className)}>
      <Input type="email" placeholder="Email" className="mb-3" />
      <Input type="password" placeholder="Password" className="mb-3" />
      <Button
        onClick={loginWithEmail}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <Icons.email className="h-4 w-4 mr-4" />}
        Login
      </Button>

      <Separator className="my-4" />

      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>
    </div>
  )
}

export default UserAuthForm

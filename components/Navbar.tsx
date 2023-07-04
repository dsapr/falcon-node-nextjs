import Link from 'next/link'
import { Icons } from './Icons'
import { Button, buttonVariants } from './ui/Button'
import { getAuthSession } from '@/lib/auth'

const Navbar = async () => {
  const session = await getAuthSession()

  return (
    <nav className="fixed top-0 inset-x-0 h-fit bg-zinc-100  border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        {/* flex容器的属性：align-items，能够设置子元素的对齐和空间分配方式，常用做居中设置。 */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="w-8 h-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Breadit
          </p>
        </Link>

        {/* search bar */}
        {session ? (
          <p>youre logged in</p>
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar

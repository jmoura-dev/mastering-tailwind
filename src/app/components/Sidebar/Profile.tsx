import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/jmoura-dev.png"
        alt="Github image"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm/5 font-semibold text-zinc-700 dark:text-zinc-100">
          Jackson Moura
        </span>
        <span className="truncate text-sm/5 text-zinc-500 dark:text-zinc-400">
          jackson@email.com
        </span>
      </div>

      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500 hover:text-zinc-600" />
      </Button>
    </div>
  )
}

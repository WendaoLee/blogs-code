import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header(){
    return (
            <header>
              <div className="flex items-center justify-between">
                <nav className="mr-auto text-sm font-medium space-x-6">
                  {/* <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <img
                        src="/wendaolee.jpeg"
                        alt="avatar"
                        className="size-3 rounded-full bg-cover"
                      />
                    </div>
                  </div> */}

                  <Link href="/">Home</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/">Essay</Link>
                  <Link href="/about">Novel</Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
    )
}
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"
import BlogLists from "./blogList"

const components = {
  Image,
  BlogLists
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

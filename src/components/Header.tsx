import Image from "next/image"

export default function Header(){
    return (
        <header>
          <Image
          src='/ilha-das-lendas/idl-geral/logo-ilha-das-lendas.png'
          alt="Logo da ilha das lendas"
          width={100}
          height={100}
          />
      <nav>
        <ul>
          <li>
            Cartinhas
          </li>
          <li>
            MultiStream
          </li>
        </ul>
      </nav>
      
    </header>
    )
}
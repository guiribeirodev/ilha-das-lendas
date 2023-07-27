import Image from "next/image"

export default function Card(){
    return (
        <div className="">
            <p>NAME</p>
            <div className="mid-card">
                <div>
                    <span>99</span>
                </div>
                <div>
                    <Image
                        src="/ilha-das-lendas/logo-teams/red-canids.webp" 
                        alt={""}
                        width={50}
                        height={50}
                    />

                    <Image
                        src={'/ilha-das-lendas/idl-geral/logo-ilha-das-lendas.png'}
                        alt=""
                        width={50}
                        height={50}
                    />
                </div>
            </div>

            <div className="bottom-card">
                <div>
                    <span>5</span>
                    <Image
                    src='/ilha-das-lendas/idl-geral/craque.png'
                    alt=""
                    width={50}
                    height={50}
                    />
                    <span>2</span>
                    <Image
                    src='/ilha-das-lendas/idl-geral/bagre.png'
                    alt=""
                    width={50}
                    height={50}
                    />
                </div>
                <div>
                <Image
                    src='/ilha-das-lendas/idl-geral/role.png'
                    alt=""
                    width={50}
                    height={50}
                    />
                </div>
            </div>
        </div>
    )
}
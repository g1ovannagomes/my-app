import Link from "next/link";

export default function ListaProdutos() {
    return (
        <>
        <h1>Produtos</h1>
        <ol>
            <Link href={"/listaprodutos/1"}><li>Produto</li></Link>
            <Link href={"/listaprodutos/2"}><li>Produto</li></Link>
            <Link href={"/listaprodutos/3"}><li>Produto</li></Link>
        </ol>
        <Link href={"/"}>Home</Link>
        </>
    )
}
import Link from "next/link"

export default function Page(){
    return(
        <div>
            <h1> Users</h1>
            <ul>
                <li> <Link href={'/dashboard/users/1'}>Me </Link></li>
                <li> <Link href={'/dashboard/users/2'}>You </Link></li>
                <li> <Link href={'/dashboard/users/3'}>Us </Link></li>
                <li> <Link href={'/dashboard/users/4'}>They </Link></li>
            </ul>
        </div>
    )
}
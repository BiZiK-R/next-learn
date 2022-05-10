import Link from "next/link"

export default function Error() {
  return (
    <div>
        <h1>
            Такой страницы нет
        </h1>
        <Link href='/'>
          <button className="toggle-btn">Вернуться на главную страницу</button>
        </Link>  
    </div>
  )
}

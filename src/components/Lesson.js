// import { NavLink } from 'react-router-dom'

export default function Lesson({ lessons, playlist }) {

    return (
        <ol className="m-0 ps-3">
            {lessons.map((lessons, index) => (
                <li key={index} className="my-2">
                    <a href={`/series/${playlist}/${lessons.episode}`} className="text-decoration-none text-dark">
                        {lessons.title} - {lessons.runtime}
                    </a>
                </li>
            ))}
        </ol>

    )
}

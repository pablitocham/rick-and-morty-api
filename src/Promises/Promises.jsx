import { useEffect, useState } from "react"
const URL = "https://rickandmortyapi.com/api/character"
const Promises = () => {
    const [data, setData] = useState({})
    const [api, setApi] = useState(URL)

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, [api])

    return (
        <>
            <ul>
                {data.results &&
                    data?.results.map((characters) => {
                        return (
                            <li key={characters.id}>
                                <img src={characters.image} ></img> <br />
                                Nombre: {characters.name} <br />
                                Estado: {characters.status} <br />
                                Especie:{characters.species} <br />
                                Tipo:{characters.type ? characters.type : 'No disponible'}<br />
                                Genero: {characters.gender} <br />
                                Origen: {characters.origin ? characters.origin.name : "No Disponible"} <br />
                                location: {characters.location?.name}<br />
                            </li>
                        )
                    })}
            </ul>
            <div className="container">
                {data?.info?.prev && <button onClick={() => { setApi(data.info.prev) }}>Anterior</button>}
                {data?.info?.next && <button onClick={() => { setApi(data.info.next) }}>Siguiente</button>}
            </div>

        </>
    )
}
export default Promises
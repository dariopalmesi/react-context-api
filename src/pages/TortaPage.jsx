import { Link, useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";




export default function TortaPage() {

    const { api_url } = useContext(GlobalContext)

    const [torta, setTorta] = useState(null)
    const { slug } = useParams()
    const url = `${api_url}/posts/${slug}`
    console.log(url);
    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setTorta(data.data)


                })
                .catch(err => {
                    console.log(err);

                })
        }, [])


    return (
        <>
            <h1 className="text-white text-center">Singola Torta</h1>
            {
                torta ? (
                    <div>
                        <div className="card p-3 m-3">
                            <h3 className='mb-3'>{torta.title}</h3>
                            <p >{torta.slug}</p>
                            <p>{torta.content}</p>
                            <img className="tortaImage" src={`${api_url}/img/${torta.image}`} alt="" />
                            <p>{torta.tags}</p>
                            <Link to={'/torte'}>
                                <button className="btn btn-success button">Back</button>
                            </Link>
                        </div>

                    </div>
                ) : (
                    <div>
                        loading...
                    </div>
                )
            }

        </>


    )
}
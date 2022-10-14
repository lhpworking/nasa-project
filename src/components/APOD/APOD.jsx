import React, { useEffect, useState } from "react";
import { nasaServices } from "../../services/nasaServices";
import "./apod.scss";

export default function APOD() {
    const [APOD, setAPOD] = useState([])
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const [loading, setLoading] = useState(false)
    const [msgError, setMsgError] = useState("")
    const controller = new AbortController();

    const getDate = () => {
        let date = document.querySelector("#date").value
        setDate(date)
    }
    const getAPOD = async () => {
        setLoading(true)
        try {
            await nasaServices.getAPOD(date, {
                signal: controller.signal,
            }).then((response) => {
                // console.log(response)
                if (response.status === 200) {
                    setAPOD(response.data)
                    setLoading(false)
                }
            })
            controller.abort()
        } catch (error) {
            // console.error(error)
            setMsgError(error.response.data.msg)
        }
    }

    if (msgError) {
        alert(msgError)
        location.reload()
    }
    useEffect(() => {
        getAPOD()
    }, [date])

    return (
        <section className="apod">
            <div className="container">
                <h1>Astronomy Picture of the Day</h1>
                {
                    (loading) ? "loading..." : <>
                        <div className='info'>
                            <div>
                                <p>Author: { APOD?.copyright }</p>
                                <small>Date: { APOD?.date }</small>
                            </div>
                            <div>
                                <label htmlFor="date">Choose your date: </label>
                                <input type="date" name="date" id="date" onChange={ getDate } value={ date } />
                            </div>
                        </div>
                        {
                            APOD?.media_type === "video" ?
                                <>
                                    <figure>
                                        <iframe src={ APOD?.url } frameBorder="10" width={ "100%" } height={ "500px" }>
                                        </iframe>
                                        <figcaption>{ APOD?.title }</figcaption>
                                    </figure>
                                    <small>{ APOD?.explanation }</small>
                                </> :
                                <>
                                    <figure>
                                        <img src={ APOD?.hdurl } alt={ APOD?.title } />
                                        <figcaption>{ APOD?.title }</figcaption>
                                    </figure>
                                    <small>{ APOD?.explanation }</small>
                                </>
                        }
                    </>
                }
            </div>
        </section>

    );
}

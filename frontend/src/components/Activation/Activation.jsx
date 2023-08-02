import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { server } from '../../server';

const Activation = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);


    useEffect(() => {
        if (activation_token) {
            const activationEmail = async () => {
                try {
                    const res = await axios.post(`${server}/user/activation`, {
                        activation_token
                    })
                    console.log(res.data.message);
                } catch (err) {
                    console.log(err.response.data.message)
                    setError(true)
                }
            }
            activationEmail();
        }
    }, [activation_token])
    return (
        <div style={{
            width: "100vh",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>

            {
                error ? (
                    <p>Your token in expired</p>
                )
                    :
                    (
                        <p>Your account has been created.</p>
                    )
            }

        </div>
    )
}

export default Activation;

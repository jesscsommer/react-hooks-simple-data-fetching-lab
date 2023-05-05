import { useState, useEffect } from 'react'

const App = () => {
    const [dog, setDog] = useState('')

    const handleFetch = async () => {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await resp.json()
        setDog(data.message)
    }

    useEffect((handleFetch), [])

    if (!dog) {
        return <p>Loading ...</p>
    }

    return (
        <div>
            <img src={dog} alt="A Random Dog" /> 
        </div>
    )
}

export default App
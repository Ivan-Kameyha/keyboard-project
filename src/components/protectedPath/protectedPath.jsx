import {Navigate} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

export function ProtectedPath({children}) {
    const {user, loading} = useAuth(); // se extrae los estados user y loading del contexto

    if (loading) return <h1>loading</h1>

    // verifica si hay un usuario logeado
    if (!user) return <Navigate to="/login"></Navigate>

    return <>{children}</>
}
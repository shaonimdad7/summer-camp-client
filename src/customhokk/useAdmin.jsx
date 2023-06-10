
import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Providers/AuthProviders';
const useAdmin = () => {

    const { user } = useContext(AuthContext);
    const { refetch, data: isAdmin = [] } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            return res.json()
        }
    })
    return [isAdmin, refetch]

}
export default useAdmin
import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Providers/AuthProviders';

const useClass = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user.email}`)
            return res.json()
        }
    })
    return [cart, refetch]


}
export default useClass;
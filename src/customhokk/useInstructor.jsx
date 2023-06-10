import { useContext } from 'react';
import { useQuery } from 'react-query'
import { AuthContext } from '../Providers/AuthProviders';
const useInstructor = () => {

    const { user } = useContext(AuthContext);
    const { refetch, data: isInstructor = [] } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000//users/instructo/${user?.email}`)
            return res.json()
        }
    })
    return [isInstructor, refetch]

}
export default useInstructor;
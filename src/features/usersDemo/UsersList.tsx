import { useGetUsersQuery } from "./usersApi";

export const UsersList = () =>{
    const { data, isLoading } = useGetUsersQuery();

    if(isLoading) return <p>Loading...</p>;

    return(
        <ul>
            { data?.users.map(user=>(
                <li key={user.id}>{user.firstName} { user.lastName}</li>
            ))}
        </ul>
    )
}
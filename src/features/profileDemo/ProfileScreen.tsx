
import { useGetProfileQuery } from './profileApi';
import { toggleDetails } from './profileSlice';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from "../../hooks/useAppSelector";

export const ProfileScreen = () =>{
    const { data, isLoading }  = useGetProfileQuery(1);
    const dispatch = useAppDispatch();
    const showDetails = useAppSelector(state => state.profileUI.showDetails);

    if(isLoading) return <p>Loading...</p>;
    return(
        <div>
            <h2>{data.firstName } { data.lastName} </h2>
            <button onClick={() =>dispatch(toggleDetails())}>
                { showDetails ? 'Hide' : 'Show'} Details
            </button>
            { showDetails && <p>Email: { data.email} </p>}
        </div>
    )
}
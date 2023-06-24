import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    return (
        <div>
            <h2>Details</h2>
            <pre>{JSON.stringify(location.state, null, 2)}</pre>
        </div>
    );
};

export default Details

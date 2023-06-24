import { useLocation } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const data = JSON.parse(location.state);
    const { carMake, carModel, carBadge, logContent } = data;

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h2>Details</h2>
                <div>
                    <strong>Car Make:</strong> {carMake}
                </div>
                <div>
                    <strong>Car Model:</strong> {carModel}
                </div>
                <div>
                    <strong>Car Badge:</strong> {carBadge}
                </div>
                <div>
                    <strong>Log Book:</strong> {logContent}
                </div>

            </div>
        </main>
    );
};

export default Details;

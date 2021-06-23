import Container from 'react-bootstrap/Container';
import OrderEntry from './pages/entry/OrderEntry';
import { OrderDetailsProvider } from './contexts/OrderDetails';

function App() {
    return (
        <Container>
            <OrderDetailsProvider>
                {/* summary page and entry page need provider */}
                <OrderEntry />
            </OrderDetailsProvider>
            {/* confirmation page doesnt need provider */}
        </Container>
    );
}

export default App;

import { Invoice } from './invoiceType.ts';
import InvoiceTable from './InvoiceTable.tsx';
import { useState, useEffect } from 'react';


export default function App() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getInvoices() {

            try {
                const response = await fetch('/api/invoices')

                const datas = await response.json();

                setInvoices(datas);


            } catch {
                setError('Erro ao buscar faturas');
            } finally {
                setLoading(false);

                getInvoices()
            }
        }
    }, []);


    return <>
        <h1>Faturas</h1>

        {loading ? <p>Carregando Faturas...</p> : (
            error ? <p>{error}</p> : <InvoiceTable datas={invoices} />
        )}

    </>;
}
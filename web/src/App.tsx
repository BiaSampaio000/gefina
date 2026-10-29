import {Invoice} from './invoiceType.ts';
import InvoiceTable from './InvoiceTable.tsx';

const invoices: Invoice[] = [{
                id: 1,
                amount: 125039,
                status: 'pending',
                issueDate: '2026-10-05',
                dueDate: '2026-11-05',
                customer: {
                    id: 1,
                    name: 'Construtora Meridiano',
                    email: 'contato@meridiano.com.br'
                }
            },
            {
                id: 2,
                amount: 15340,
                status: 'paid',
                issueDate: '2026-09-03',
                dueDate: '2026-10-03',
                customer: {
                    id: 2,
                    name: 'Gráfica Nova',
                    email: 'nova@grafica.com.br'
                }
            },
            {
                id: 3,
                amount: 4505899,
                status: 'paid',
                issueDate: '2026-09-01',
                dueDate: '2026-10-01',
                customer: {
                    id: 3,
                    name: 'Besoft',
                    email: 'besotf@.com.br'
                }
            }
       ];

export default function App() {
  return <>
  <h1>Faturas</h1>

  <InvoiceTable datas={invoices} />
  
  </>;
}
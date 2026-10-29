import InvoiceRow from './InvoiceRow.tsx';
import {Invoice} from './invoiceType.ts';

interface IvoiceTableProps {
    datas: Invoice[];
}
    
export default function InvoiceTable(props: IvoiceTableProps) {
    return <table>
        <thead>
            <tr>
                <th>Cliente</th>
                <th>Valor</th>
                <th>Emissão</th>
                <th>Vencimentos</th>
                <th>Situação</th>
            </tr>
        </thead>
        <tbody>
            {props.datas.map((invoice) => {
                return <InvoiceRow
                    key={invoice.id}
                    data={invoice}
                />
            })}
        </tbody>
    </table>;
}
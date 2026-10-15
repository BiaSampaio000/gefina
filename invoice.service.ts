const invoices = [{
    id: 1,
    amount:  125039,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    costumer:{
        name: 'Construtora Meridiano',
        email: 'contato@meridiano.com.br'
    }
}, {
    id: 2,
     amount:  15340,
    status: 'paid',
    issueDate: '03-09-2026',
    dueDate: '05-10-2026',
    costumer:{
        name: 'Gráfica Nova',
        email: 'nova@grafica.com.br'
    }
}, {
    id: 3,
     amount:  4505899,
    status: 'paid',
    issueDate: '01-09-2026',
    dueDate: '01-10-2026',
    costumer:{
        name: 'Besoft',
        email: 'besotf@.com.br'
    }
}];

export function findAllInvoices() {
    return invoices;
}

export function findInvoicesById(id: number) {
    return invoices.find( element => element.id === id);
}
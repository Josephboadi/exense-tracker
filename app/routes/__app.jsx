import expensesStyles from '~/styles/expenses.css'
import { Outlet } from "@remix-run/react";
import ExpensesHeader from '~/components/navigation/ExpensesHeader';
import { getUserFromSession } from '~/data/auth.server';

export default function ExpensesAppLayout() {
    return <>
    <ExpensesHeader/>
    <Outlet/>
    </>
}

export function loader({request}) {
    return getUserFromSession(request)
}

export function links() {
    return [{rel: 'stylesheet', href: expensesStyles}]
}
import { redirect } from 'next/navigation';

export default function RolesIndexRedirect() {
  redirect('/roles/ceo');
}

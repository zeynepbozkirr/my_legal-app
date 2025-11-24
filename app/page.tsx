import { redirect } from 'next/navigation'

export default function Home() {
  // Sayfa açılır açılmaz gizlilik sayfasına yönlendirir
  redirect('/gizlilik-politikasi')
}

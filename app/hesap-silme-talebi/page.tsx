import React from 'react'

export default function HesapSilmeTalebi() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6">Hesap ve Veri Silme Talebi</h1>
      <section className="mb-6">
        <p>
          Bu sayfa, Caloria—Sağlıklı Yaşam & Takip kullanıcılarının hesap silme
          talepleri içindir.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hesap Silme Adımları</h2>
        <p className="mt-2">
          Aşağıdaki e-posta adresine kayıtlı e-postanızla talep gönderin:
        </p>
        <p className="font-semibold mt-1">📧 onivasoftware@gmail.com</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Silinen Veriler</h2>
        <ul className="list-disc list-inside">
          <li>Kullanıcı hesabı</li>
          <li>Profil bilgileri</li>
          <li>Uygulama içi tercihler</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Saklanan Veriler</h2>
        <p>
          Yasal yükümlülükler gereği bazı kayıtlar 30 gün boyunca saklanabilir.
        </p>
        <p>Süre sonunda tamamen silinir.</p>
      </section>
    </main>
  )
}

// app/terms-of-use/page.tsx
'use client'

export default function TermsOfUsePage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Kullanım Koşulları</h1>

      <p>
        Bu Kullanım Koşulları, <strong>CALORIA</strong> tarafından sunulan
        hizmetlerin kullanımına ilişkin kuralları belirler. Uygulamayı
        kullanarak bu koşulları kabul etmiş olursunuz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Hizmetin Tanımı</h2>
      <p>
        Uygulama; beslenme kaydı, aktivite takibi, hedef belirleme, su tüketimi,
        günlük kalori ihtiyacı hesaplama ve grafiksel analiz gibi fonksiyonlar
        sunar. Uygulama tıbbi tavsiye niteliği taşımaz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Kullanıcı Yükümlülükleri
      </h2>
      <ul className="list-disc ml-6 my-3">
        <li>Verdiği bilgilerin doğruluğundan kullanıcı sorumludur.</li>
        <li>Hesap erişim bilgilerinin güvenliği kullanıcıya aittir.</li>
        <li>Uygulama kötüye kullanılamaz.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Verilerin İşlenmesi
      </h2>
      <p>
        Kullanıcı tarafından sağlanan veriler yalnızca uygulama özelliklerinin
        çalışması için işlenir ve Firebase üzerinde güvenli şekilde saklanır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Bildirimler</h2>
      <p>
        Kullanıcı bildirim izni verdiğinde hatırlatma ve günlük uyarılar
        gönderilebilir. Bildirimler cihaz ayarlarından kapatılabilir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Hesap Silme</h2>
      <p>
        Uygulamada şu anda doğrudan hesap silme özelliği bulunmamaktadır.
        Kullanıcı, verilerinin ve hesabının silinmesi için e-posta yoluyla
        talepte bulunabilir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Sorumluluk Reddi</h2>
      <p>
        Uygulama tıbbi bir cihaz değildir ve sağlık tavsiyesi sunmaz.
        Hesaplamalar yalnızca bilgilendirme amaçlıdır. Sağlık kararları için
        profesyonel destek alınmalıdır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Değişiklikler</h2>
      <p>
        Bu metin gerektiğinde güncellenebilir. Güncellemeler uygulama veya web
        sitesi üzerinden duyurulur.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. İletişim</h2>
      <p>
        Soru ve talepler için: <strong>onivasoftware@gmail.com</strong>
      </p>
    </main>
  )
}

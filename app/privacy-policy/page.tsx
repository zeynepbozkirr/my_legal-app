export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Gizlilik Politikası & KVKK Aydınlatma Metni
      </h1>

      <p>
        Bu Gizlilik Politikası, <strong>CALORIA</strong> tarafından sunulan
        hizmetlerin kullanımı sırasında işlenen kişisel verilerin nasıl
        toplandığını, saklandığını ve korunduğunu açıklar. Uygulamayı kullanarak
        bu metni kabul etmiş olursunuz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Toplanan Bilgiler</h2>
      <p>Uygulama aşağıdaki bilgileri toplayabilir:</p>

      <ul className="list-disc ml-6 my-3">
        <li>E-posta adresi (kayıt ve iletişim için)</li>
        <li>Boy, kilo, yaş, cinsiyet</li>
        <li>Hedef kilo ve aktivite hedefleri</li>
        <li>Günlük beslenme, aktivite ve su tüketimi kayıtları</li>
        <li>Hatırlatma ve bildirim izin bilgisi</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Firebase Kullanımı</h2>
      <p>
        Kullanıcı verileri Google Firebase altyapısında saklanmaktadır.
        Firebase, verileri güvenli biçimde işler ve yalnızca uygulama
        fonksiyonlarını sağlamak amacıyla kullanır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Verilerin Kullanım Amaçları
      </h2>
      <p>Toplanan bilgiler şu amaçlarla kullanılır:</p>
      <ul className="list-disc ml-6 my-3">
        <li>Günlük kalori ihtiyacının hesaplanması</li>
        <li>Hedef takibi ve analiz grafikleri</li>
        <li>Kullanıcı deneyiminin geliştirilmesi</li>
        <li>Hatırlatma bildirimlerinin gönderilmesi</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Verilerin Paylaşımı
      </h2>
      <p>
        Kullanıcı verileri üçüncü taraflarla paylaşılmaz. Yasal zorunluluklar
        dışında hiçbir şekilde açıklanmaz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. KVKK Kapsamındaki Haklarınız
      </h2>
      <p>
        KVKK kapsamında kullanıcılar; verilerine erişme, güncelleme ve
        silinmesini talep etme hakkına sahiptir. Şu anda uygulamada doğrudan
        hesap silme özelliği bulunmamaktadır. Silme talepleri e-posta yoluyla
        iletilebilir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Değişiklikler</h2>
      <p>
        Bu metin gerektiğinde güncellenebilir. Güncellemeler uygulama veya web
        sitesi üzerinden duyurulur.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. İletişim</h2>
      <p>
        Her türlü soru ve talep için: <strong>onivasoftware@gmail.com</strong>
      </p>
    </main>
  )
}

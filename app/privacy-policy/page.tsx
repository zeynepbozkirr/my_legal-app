// app/privacy-policy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Gizlilik Politikası & KVKK Aydınlatma Metni
      </h1>

      <p className="mb-4">
        Bu Gizlilik Politikası ve KVKK Aydınlatma Metni (“Metin”),{' '}
        <strong>Caloria—Sağlıklı Yaşam & Takip</strong> tarafından sunulan mobil
        uygulama hizmetleri kapsamında işlenen kişisel verilerin, 6698 sayılı
        Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili mevzuata uygun
        olarak nasıl toplandığını, işlendiğini, saklandığını ve korunduğunu
        açıklamak amacıyla hazırlanmıştır. Uygulamayı kullanarak bu Metin’de yer
        alan hükümleri kabul etmiş olursunuz.
      </p>

      {/* <h2 className="text-xl font-semibold mt-6 mb-2">1. Veri Sorumlusu</h2> */}
      {/* <p className="mb-4">
        KVKK uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla{' '}
        <strong>[Şirket Adı / Geliştirici Adı]</strong> tarafından
        işlenmektedir.
        <br />
        İletişim: <strong>[e-posta adresiniz]</strong>
      </p> */}

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Toplanan Kişisel Veriler
      </h2>
      <p className="mb-2">
        Uygulama kapsamında aşağıdaki kişisel veriler işlenebilir:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>E-posta adresi</li>
        <li>Boy, kilo, yaş, cinsiyet</li>
        <li>Hedef kilo ve aktivite hedefleri</li>
        <li>Günlük beslenme, aktivite ve su tüketimi kayıtları</li>
        <li>Uygulama içi kullanım ve istatistiksel veriler</li>
        <li>Bildirim izin durumu</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Kişisel Verilerin İşlenme Amaçları
      </h2>
      <p className="mb-2">
        Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Günlük kalori ihtiyacının hesaplanması</li>
        <li>
          Hedeflerinize ait ilerlemenin takip edilmesi ve grafiklerin
          gösterilmesi
        </li>
        <li>Beslenme, aktivite ve su tüketimi kayıtlarınızın yönetilmesi</li>
        <li>Uygulama deneyiminin iyileştirilmesi ve kişiselleştirilmesi</li>
        <li>Hatırlatma ve bilgilendirme bildirimlerinin gönderilmesi</li>
        <li>Teknik sorunların tespiti ve güvenliğin sağlanması</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebepleri
      </h2>
      <p className="mb-4">
        Kişisel verileriniz; mobil uygulama üzerinden doldurduğunuz formlar,
        yaptığınız kayıtlar, Firebase altyapısı (Authentication ve veritabanı)
        ve cihaz izinleri (örneğin bildirim izni) aracılığıyla elektronik
        ortamda toplanmaktadır.
      </p>
      <p className="mb-2">Bu veriler; KVKK’nın 5. ve 6. maddeleri uyarınca:</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Açık rızanızın bulunması</li>
        <li>Bir sözleşmenin kurulması veya ifası için gerekli olması</li>
        <li>
          Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması
        </li>
        <li>Veri sorumlusunun meşru menfaati kapsamında olması</li>
      </ul>
      <p className="mb-4">
        hukuki sebeplerine dayanarak işlenmektedir. Sağlık durumunuzu doğrudan
        ortaya koymayan; boy, kilo, yaş gibi veriler, sadece sizin takibiniz ve
        bilgilendirilmeniz amacıyla kullanılmakta, tıbbi bir teşhis veya tedavi
        amacı taşımamaktadır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Firebase Kullanımı ve Veri Saklama
      </h2>
      <p className="mb-4">
        Uygulama kapsamında toplanan kişisel veriler, Google tarafından sunulan
        bir bulut hizmeti olan <strong>Firebase</strong> altyapısında
        saklanmaktadır. Firebase, verilerin güvenli biçimde depolanması amacıyla
        şifreleme ve çeşitli güvenlik önlemleri kullanır. Verileriniz yalnızca
        uygulamanın işlevlerini yerine getirmek, istatistik üretmek ve deneyimi
        geliştirmek amacıyla işlenir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Kişisel Verilerin Aktarılması
      </h2>
      <p className="mb-4">
        Kişisel verileriniz; yasal zorunluluklar ve yetkili kurumların talepleri
        dışında, hiçbir şekilde üçüncü taraflara satılmaz, pazarlama veya reklam
        amaçlı kullanılmaz. Verileriniz yalnızca Firebase altyapısına veri
        işleyen sıfatıyla aktarılmaktadır.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Bildirimler (Push Notifications)
      </h2>
      <p className="mb-4">
        Uygulama, günlük hatırlatmalar, hedef ilerlemeleri veya benzeri
        bilgilendirmeleri gönderebilmek için bildirim izni talep eder. Bildirim
        izni vermeniz halinde, bu bildirimler sadece hatırlatma ve bilgilendirme
        amaçlı olarak kullanılacaktır. Bildirim iznini dilediğiniz zaman cihaz
        ayarlarınız üzerinden kapatabilirsiniz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        7. Kişisel Verilerin Saklama Süresi
      </h2>
      <p className="mb-4">
        Kişisel verileriniz, yukarıda belirtilen amaçların gerektirdiği süre
        boyunca saklanmakta; amaç ortadan kalktığında, yasal zorunluluklar sona
        erdiğinde veya silme talebiniz üzerine silinmektedir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        8. Hesap ve Veri Silme Talepleri
      </h2>
      <p className="mb-4">
        Uygulamada şu anda doğrudan “Hesabımı Sil” özelliği bulunmamaktadır.
        Ancak kullanıcılar, verilerinin ve hesaplarının tamamen silinmesini
        talep etmek için e-posta yoluyla bizimle iletişime geçebilir. Silme
        talebinizin ardından, Firebase üzerinde tutulan hesap bilgileriniz ve
        kişisel verileriniz makul süre içerisinde kalıcı olarak silinir.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        9. KVKK Kapsamındaki Haklarınız
      </h2>
      <p className="mb-2">
        KVKK’nın 11. maddesi uyarınca, veri sahibi olarak aşağıdaki haklara
        sahipsiniz:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
        <li>
          Verilerin işlenme amacını ve bunların amacına uygun kullanılıp
          kullanılmadığını öğrenme
        </li>
        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
        <li>
          İşlenmesini gerektiren sebeplerin ortadan kalkması hâlinde silinmesini
          veya yok edilmesini isteme
        </li>
        <li>
          İşlemenin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi
          suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
        </li>
      </ul>
      <p className="mb-4">
        Bu haklarınızı kullanmak için <strong>onivasoftware@gmail.com</strong>{' '}
        üzerinden bizimle iletişime geçebilirsiniz.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Güvenlik</h2>
      <p className="mb-4">
        Verilerinizin güvenliği için uygun teknik ve idari tedbirler
        alınmaktadır. Ancak internet üzerinden yapılan hiçbir veri aktarımının
        tamamen güvenli olduğu garanti edilemez. Kullanıcılar, uygulamayı
        kullanırken bu riski bildiklerini kabul ederler.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">11. Değişiklikler</h2>
      <p className="mb-4">
        Bu Metin, gerektiğinde güncellenebilir. Güncellemeler, uygulama veya web
        sitesi üzerinden duyurulur. Metnin güncel hâlini düzenli olarak kontrol
        etmeniz önerilir.
      </p>
    </main>
  )
}

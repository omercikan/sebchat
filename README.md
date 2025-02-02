<h1>🔒 SebChat</h1>
<p><strong>SebChat</strong>, kullanıcıların kimliklerini gizleyerek güvenli ve anonim bir şekilde iletişim kurmalarını sağlayan, modern bir gerçek zamanlı mesajlaşma platformudur. React ve Firebase teknolojileri kullanılarak geliştirilmiştir.</p>

<img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1738498531/Minimal_Modern_You_Are_Enough_Quote_Desktop_Wallpaper_3_fxyj7t.png" alt="SebChat Intro" width="100%">

<h2>✨ Öne Çıkan Özellikler</h2>
<ul>
  <li>🔑 <strong>Firebase Authentication</strong> ile güvenli giriş/kayıt</li>
  <li>🤫 Karşıdaki kişiye profil bilgini vermeden sohbet etme</li>
  <li>⚡ Gerçek zamanlı mesajlaşma deneyimi</li>
  <li>🎨 Responsive ve modern UI tasarımı</li>
  <li>🔒 Uçtan uca şifreli iletişim</li>
</ul>

<h2>🛠 Teknoloji Stack'i</h2>
<table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
  <thead>
    <tr style="background-color: #f3f4f6; text-align: left;">
      <th style="padding: 10px; border: 1px solid #ddd;">Frontend</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Backend</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Styling</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Diğer</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd;">React</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Firebase Auth</td>
      <td style="padding: 10px; border: 1px solid #ddd;">SCSS</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Redux</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">TypeScript</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Firestore</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Tailwind CSS</td>
      <td style="padding: 10px; border: 1px solid #ddd;">React Router</td>
    </tr>
  </tbody>
</table>

<h2>🚀 Kurulum</h2>
<p>Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:</p>
<ol>
  <li><code>git clone https://github.com/omercikan/sebchat.git</code></li>
  <li><code>cd sebchat</code></li>
  <li><code>npm install</code></li>
</ol>

<h2>🔥 Firebase Kurulumu</h2>
<p>Bu projeyi GitHub’a yüklerken Firebase’in sağladığı API anahtarlarını ve proje yapılandırma bilgilerini güvenlik nedeniyle depoya eklemedim. Projeyi kullanabilmek için kendi Firebase config dosyanızı oluşturmanız gerekmektedir.</p>

<h3>📌 İlk Açılış Ekranı</h3>
<img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1738453953/2_jos8aw.png" alt="SebChat Açılış Ekranı" width="100%">

<h3>📌 Firebase Konfigürasyonu Nasıl Eklenir?</h3>
<ol>
  <li>Firebase Console'a giriş yapın</li>
  <li>Yeni bir proje oluşturun veya mevcut projenizi seçin</li>
  <li>Authentication > Sign-in method'ta Email/Password'ü etkinleştirin</li>
  <li>Firestore Database oluşturun ve gerekli kuralları ayarlayın</li>
  <li>Proje ayarlarından Firebase config bilgilerinizi alın</li>
  <li>Firebase config bilgilerini projeye eklemek için <code>firebaseConfig.ts</code> dosyasını oluşturun</li>
</ol>

<h3>📌 Giriş & Kayıt Sayfası</h3>
<img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1738453953/3_hqmnkc.png" alt="SebChat Auth Sayfası" width="100%">

<h3>📌 Sohbet Alanı</h3>
<img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1738453953/4_bza73z.png" alt="SebChat Sohbet Alanı" width="100%">

<h3>📌 Profil Ayarları</h3>
<img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1738453955/5_slpvfy.png" alt="SebChat Profil Ayarları" width="100%">

<h3>📌 Firebase Resmi Dokümantasyonu</h3>
<p>Detaylı bilgi ve adım adım kurulum için Firebase'in resmi dökümantasyonunu ziyaret edebilirsiniz: <a href="https://firebase.google.com/docs" target="_blank">Firebase Resmi Dokümantasyon</a></p>

<h2>📂 Proje Yapısı</h2>
<pre>
src/
├── assets/          # Görseller ve statik dosyalar
├── components/      # Yeniden kullanılabilir bileşenler
├── css/             # Özel CSS dosyaları
├── pages/           # Sayfa bileşenleri
├── redux/           # Redux store ve slice'ları
├── scss/            # Global SCSS stilleri
├── main.tsx         # Ana React bileşeni
├── routes.tsx       # Yönlendirme dosyası
└── types.tsx        # Tip tanımlamaları
</pre>

<h2>📄 Lisans</h2>
<p>Bu proje MIT Lisansı ile lisanslanmıştır. Detaylar için <a href="https://opensource.org/licenses/MIT" target="_blank">MIT Lisansı'</a>na bakabilirsiniz.</p>

<h2>💬 Geri Bildirim & Hata Bildirimi</h2>
<p>Projede herhangi bir hata veya eksiklik fark ederseniz, lütfen <a href="https://github.com/omercikan/sebchat/issues" target="_blank">GitHub Issues</a> sayfasını kullanarak bildirimde bulunun.</p>
<p>Ayrıca, önerileriniz ve geri bildirimleriniz için de aynı sayfayı kullanabilirsiniz. Yardımcı olmak için her zaman buradayım!</p>

<h2>🌟 Katkıda Bulun</h2>
<p>Bu projeye katkı sağlamak isterseniz, aşağıdaki adımları takip edebilirsiniz:</p>
<ol>
  <li>Projeyi <a href="https://github.com/omercikan/sebchat/fork" target="_blank">fork</a> edin</li>
  <li>Yeni bir branch oluşturun: <code>git switch -c feature-name</code></li>
  <li>Yaptığınız değişiklikleri commit edin: <code>git commit -am 'Add new feature'</code></li>
  <li>Değişikliklerinizi GitHub'a push edin: <code>git push origin feature-name</code></li>
  <li>Pull request açarak katkınızı paylaşın</li>
</ol>

<h2>🔗 Ek Kaynaklar</h2>
<p>Firebase ve React ile ilgili daha fazla bilgi için şu kaynaklara göz atabilirsiniz:</p>
<ul>
  <li><a href="https://reactjs.org/" target="_blank">React Resmi Web Sitesi</a></li>
  <li><a href="https://firebase.google.com/" target="_blank">Firebase Resmi Web Sitesi</a></li>
</ul>

<h1 align="center">🔒 SebChat - Modern Gerçek Zamanlı Mesajlaşma Platformu</h1>
<p align="center" style="margin-top: 10px; font-size: 1.2em; color: #555;">
  <em>Hızlı, Güvenli ve Kullanıcı Dostu Mesajlaşma Deneyimi</em>
</p>

<div align="center">
  <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740848/1_lffwa3.png" alt="SebChat Tanıtım" style="width: 100%; max-width: 700px; height: auto;">
</div>

<h2>📌 Uygulama Tanıtımı</h2>
<p>
  <strong>SebChat</strong>, modern ve güvenli bir gerçek zamanlı mesajlaşma platformudur. React ve Firebase teknolojileriyle geliştirilen bu uygulama, kullanıcıların hızlı ve güvenli bir şekilde iletişim kurmasını sağlar.
</p>

<h3>📋 Kurulum Adımları</h3>
<ol>
  <li>
    Projenin en son sürümünü GitHub'dan klonlayın:
    <pre><code>git clone https://github.com/omercikan/sebchat.git</code></pre>
  </li>
  <li>
    Proje dizinine girin:
    <pre><code>cd sebchat</code></pre>
  </li>
  <li>
    Bağımlılıkları yüklemek için:
    <pre><code>npm install</code></pre>
  </li>
  <li>
    Kendi <strong>config</strong> dosyanızı oluşturun ve Firebase ayarlarınızı ekleyin. Örneğin:
    <pre><code>
export const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
    </code></pre>
    <p>
      Not: Firebase kurulumu sadece bu dosya ile bitmez; kendi veritabanınızı oluşturmanız, güvenlik kurallarınızı yazmanız ve diğer ayarları yapmanız gerekmektedir. Detaylı rehber için <a href="https://firebase.google.com/docs" target="_blank">Firebase Dokümantasyonu</a>'nu inceleyebilirsiniz.
    </p>
  </li>
  <li>
    Firebase ayarlarınızı tamamladıktan sonra, uygulamayı başlatmak için:
    <pre><code>npm run dev</code></pre>
  </li>
</ol>

<h3>⚠️ Önemli Not</h3>
<p>
  Repo içerisine Firebase ve API bilgilerini eklemediğim için, projeyi kendi cihazınızda çalıştırmak isterseniz, kendi <strong>config</strong> dosyanızı oluşturup Firebase veritabanınızı ayarlamanız ve güvenlik kurallarınızı yazmanız gerekmektedir. Aksi takdirde, uygulama hata verecektir. Alternatif olarak, uygulamayı doğrudan verilen <a href="https://sebchatapp.netlify.app/"><strong>link</strong></a> üzerinden deneyimleyebilirsiniz.
</p>

<h2>📌 Öne Çıkan Özellikler</h2>
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>🔒 Güvenli Kimlik Doğrulama</strong>
    <p>Firebase ile güvenli kullanıcı kimlik doğrulama sistemi.</p>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>⚡ Gerçek Zamanlı Mesajlaşma</strong>
    <p>Anlık mesajlaşma ile kesintisiz iletişim.</p>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>📱 Responsive & Modern UI</strong>
    <p>Tüm cihazlarda uyumlu, modern kullanıcı arayüzü.</p>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>👥 Kullanıcı Yönetimi</strong>
    <p>Kullanıcıların kolayca yönetilmesi.</p>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>🌈 Özelleştirilebilir Profil</strong>
    <p>Kullanıcıların profillerini kişiselleştirmesi.</p>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>🔔 Bildirim Sistemi</strong>
    <p>React Hot Toast ile bildirimler.</p>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>🛡️ TypeScript ile Tip Güvenliği</strong>
    <p>Kod güvenliği ve tip güvenliği.</p>
  </div>
  <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: 200px;">
    <strong>📧 E-posta Doğrulama</strong>
    <p>Kayıt olan kullanıcıya e-posta doğrulama linki gönderilir. 30 saniye içinde tıklanmazsa kayıt iptal edilir.</p>
  </div>
</div>

<h2>📸 Ekran Görüntüleri</h2>
<h3 style="text-align: center; margin-bottom: 20px;">Uygulama Ekranları</h3>
<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <div style="flex: 1; min-width: 200px;">
    <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/2_aqixwo.png" style="width: 100%; border-radius: 5px;" alt="Başlangıç Ekranı">
  </div>
  <div style="flex: 1; min-width: 200px;">
    <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/3_bjyczd.png" style="width: 100%; border-radius: 5px;" alt="Giriş ve Kayıt Sayfası">
  </div>
  <div style="flex: 1; min-width: 200px;">
    <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/4_b3tmvc.png" style="width: 100%; border-radius: 5px;" alt="Kullanıcı Listesi">
  </div>
  <div style="flex: 1; min-width: 200px;">
    <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/5_sdajip.png" style="width: 100%; border-radius: 5px;" alt="Sohbet Ekranı">
  </div>
  <div style="flex: 1; min-width: 200px;">
    <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/6_trrpl6.png" style="width: 100%; border-radius: 5px;" alt="Kullanıcı Profil Ekranı">
  </div>
</div>

<h2>🚀 Teknoloji Stack'i</h2>

<h3>Frontend</h3>
<table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
  <thead>
    <tr style="background-color: #f3f4f6; text-align: center;">
      <th style="padding: 10px; border: 1px solid #ddd;">Teknoloji</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd;">React + Vite</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Ultra hızlı build işlemleri için Vite kullanılmıştır.</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">TypeScript</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Kod güvenliği ve tip güvenliği için kullanılmıştır.</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd;">Redux Toolkit</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Uygulamanın durum yönetimi için kullanılmıştır.</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">React Router</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Modern ve verimli yönlendirme işlemleri için kullanılmıştır.</td>
    </tr>
  </tbody>
</table>

<h3>UI & Stil</h3>
<table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
  <thead>
    <tr style="background-color: #f3f4f6; text-align: center;">
      <th style="padding: 10px; border: 1px solid #ddd;">Teknoloji</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd;">Material-UI (MUI)</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Bileşen kütüphanesi olarak kullanılmıştır.</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">Tailwind CSS</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Utility-first stil uygulamaları için kullanılmıştır.</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd;">SCSS</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Gelişmiş stil işlemleri için kullanılmıştır.</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">React Transition Group</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Animasyonlar için kullanılmıştır.</td>
    </tr>
  </tbody>
</table>

<h3>Backend & Veritabanı</h3>
<table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
  <thead>
    <tr style="background-color: #f3f4f6; text-align: center;">
      <th style="padding: 10px; border: 1px solid #ddd;">Teknoloji</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd;">Firebase</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Gerçek zamanlı veritabanı ve kimlik doğrulama işlemleri için kullanılmıştır.</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">React Firebase Hooks</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Gerçek zamanlı veri senkronizasyonu için kullanılmıştır.</td>
    </tr>
  </tbody>
</table>

<h3>Araçlar</h3>
<ul>
  <li><strong>React Icons</strong> (Zengin İkon Seti)</li>
  <li><strong>ESLint</strong> (Kod Kalite Kontrol)</li>
  <li><strong>Prettier</strong> (Kod Formatlama)</li>
</ul>

<h2>📜 MIT Lisansı</h2>
<p>
  Bu proje MIT Lisansı altında lisanslanmıştır. Bu lisans, kullanıcılara projeyi özgürce kullanma, değiştirme ve dağıtma hakkı verir. Lisansın tam metnini <a href="https://opensource.org/licenses/MIT" target="_blank">buradan</a> okuyabilirsiniz.
</p>

<h2>🚀 Uygulamayı Deneyimleyin</h2>
<div style="text-align: center; margin: 20px 0;">
 🚀 <a href="https://sebchatapp.netlify.app/" target="_blank" style="background-color: #007BFF; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Canlı Demo'yu Görüntüle</a>
</div>

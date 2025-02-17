<h1 align="center">🔒 SebChat - Modern Gerçek Zamanlı Mesajlaşma Platformu</h1>

<div align="center">
  <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740848/1_lffwa3.png" alt="SebChat Tanıtım" style="width: 100%; max-width: 700px; height: auto;">
</div>

<h2>📌 Uygulama Tanıtımı</h2>
<p>
  <strong>SebChat</strong>, kullanıcıların sisteme kaydolmuş diğer kullanıcılarla güvenli ve izole bir şekilde iletişim kurmalarını sağlayan modern bir gerçek zamanlı mesajlaşma platformudur. Uygulama, React ve Firebase teknolojileriyle geliştirilmiştir ve kullanıcıların hızlı ve güvenli mesajlaşmalarını mümkün kılar.
</p>

<h3>📋 Kurulum Adımları</h3>
<ul>
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
      Not: Firebase kurulumu sadece bu dosya ile bitmez; kendi veritabanınızı oluşturmanız, güvenlik kurallarınızı yazmanız ve diğer ayarları yapmanız gerekmektedir.
    </p>
  </li>
  <li>
    Firebase ayarlarınızı tamamladıktan sonra, uygulamayı başlatmak için:
    <pre><code>npm run dev</code></pre>
  </li>
</ul>

<h3>⚠️ Önemli Not</h3>
<p>
  Repo içerisine Firebase ve API bilgilerini eklemediğim için, projeyi kendi cihazınızda çalıştırmak isterseniz, kendi <strong>config</strong> dosyanızı oluşturup Firebase veritabanınızı ayarlamanız ve güvenlik kurallarınızı yazmanız gerekmektedir. Aksi takdirde, uygulama hata verecektir. Alternatif olarak, uygulamayı doğrudan verilen <a href="https://sebchatapp.netlify.app/"><strong>link</strong></a> üzerinden deneyimleyebilirsiniz.
</p>

<h2>📌 Öne Çıkan Özellikler</h2>
<ul>
  <li>🔒 Firebase ile Güvenli Kimlik Doğrulama</li>
  <li>⚡ Gerçek Zamanlı Mesajlaşma</li>
  <li>📱 Responsive & Modern UI</li>
  <li>👥 Kullanıcı Yönetimi</li>
  <li>🌈 Özelleştirilebilir Profil</li>
  <li>🔔 Bildirim Sistemi (React Hot Toast)</li>
  <li>🛡️ TypeScript ile Tip Güvenliği</li>
</ul>

<h2>📸 Ekran Görüntüleri</h2>
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f3f4f6;">
      <th style="padding: 10px; text-align: center; border: 1px solid #ddd;">Görsel Başlığı</th>
      <th style="padding: 10px; text-align: center; border: 1px solid #ddd;">Görsel</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Başlangıç Ekranı (Giriş ve Kayıt)</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
        <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/2_aqixwo.png" style="width: 100%; max-width: 500px; height: auto;" alt="Başlangıç Ekranı">
      </td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Giriş ve Kayıt Sayfası</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
        <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/3_bjyczd.png" style="width: 100%; max-width: 500px; height: auto;" alt="Giriş ve Kayıt Sayfası">
      </td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Kullanıcı Listesi</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
        <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/4_b3tmvc.png" style="width: 100%; max-width: 500px; height: auto;" alt="Kullanıcı Listesi">
      </td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Sohbet Ekranı</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
        <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/5_sdajip.png" style="width: 100%; max-width: 500px; height: auto;" alt="Sohbet Ekranı">
      </td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">Kullanıcı Profil Ekranı</td>
      <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">
        <img src="https://res.cloudinary.com/dwyvwkzap/image/upload/v1739740847/6_trrpl6.png" style="width: 100%; max-width: 500px; height: auto;" alt="Kullanıcı Profil Ekranı">
      </td>
    </tr>
  </tbody>
</table>

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
      <td style="padding: 10px; border: 1px solid #ddd;">Kod güvenliği sağlamak ve tip güvenliğini artırmak için kullanılmıştır.</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px; border: 1px solid #ddd;">Redux Toolkit</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Uygulamanın durum yönetimi için Redux Toolkit kullanılmıştır.</td>
    </tr>
    <tr style="background-color: #f9f9f9;">
      <td style="padding: 10px; border: 1px solid #ddd;">React Router</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Modern ve verimli yönlendirme işlemleri için React Router V7 kullanılmıştır.</td>
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

<h2>🚀 Uygulamayı Deneyimleyin</h2>
<p>
  SebChat'i denemek için uygulamanın canlı demosunu ziyaret edebilirsiniz. Aşağıdaki linke tıklayarak hemen deneyimleyin:
</p>

<div>
  <a href="https://sebchatapp.netlify.app/" target="_blank">SebChat'i Hemen Deneyin</a>
</div>

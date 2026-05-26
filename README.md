React + TypeScript Hesap Makinesi

Küçük, erişilebilir ve test edilmiş bir web hesap makinesi uygulaması. Vite + React + TypeScript ile hazırlanmıştır; testler için Vitest ve React Testing Library; CI için GitHub Actions yapılandırması içerir.
Özellikler

    Temel aritmetik: +, -, *, /
    Nokta (ondalık) desteği
    Klavye ve fare ile kullanım
    ARIA ile erişilebilirlik
    Basit güvenlik kontrolü içeren ifade değerlendirme
    Birim testleri ve CI iş akışı

Teknoloji yığını

    Vite
    React 18
    TypeScript
    Vitest + @testing-library/react
    GitHub Actions (CI*

Hızlı başlama

Gereksinimler: Node.js (LTS), pnpm / npm / yarn

    Depoyu klonla:

git clone <repo-url>cd <repo>

Bağımlılıkları yükle:

pnpm install

Geliştirme sunucusunu başlat:

    pnpm dev

Önemli NPM komutları

    Geliştirme: pnpm dev
    Üretim build: pnpm build
    Önizleme: pnpm preview
    Testler: pnpm test

(Eğer pnpm kullanmıyorsan npm veya yarn ile eşdeğer komutları çalıştırabilirsin.)
Proje yapısı (kısaca)

    public/ — statik dosyalar
    src/
        components/ — Calculator, Display, Key bileşenleri
        utils/ — evaluate fonksiyonu
        tests/ — birim testleri
        main.tsx, App.tsx, index.css
    .github/workflows/ci.yml — CI iş akışı

Testler

Vitest + Testing Library kullanılır.

pnpm test

Örnek test: toplama işlemi için bir test dosyası bulunur (src/tests/Calculator.test.tsx).
CI (GitHub Actions*

Ana iş akışı dosyası: .github/workflows/ci.yml
İşin adı (name): CI
Yapı: push ve pull_request tetikleyicileri, Ubuntu runner, pnpm kurulumu, bağımlılık yükleme ve test çalıştırma adımları içerir.
Dağıtım

Vite projeleri Netlify, Vercel veya GitHub Pages ile kolayca deploy edilebilir. Üretim build sonrası sunucuya yükle veya tercih edilen hosting platformuna bağla.
Güvenlik notu

evaluate fonksiyonu yalnızca sayılar, operatörler ve parantez gibi izinli karakterleri kabul eder; daha karmaşık/sağlam değerlendirme gerekiyorsa mathjs gibi kütüphaneler önerilir.
Katkıda bulunma

    Fork → feature branch → pull request
    Kodda değişiklik yapmadan önce testlerin geçtiğinden emin ol

Lisans

MIT

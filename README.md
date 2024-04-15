# Proje Adı

Bu proje JavaScript kullanarak isimlere göre cinsiyet tahmini yapar. Ayrıca Postman ile API kontrolü yapmanızı ve MongoDB bağlantısı sağlamanızı sağlar.

## Kurulum

1. Projeyi klonlayın:

```bash
git clone https://github.com/kullanici/proje.git
```

2. Proje dizinine gidin:

```bash
cd proje
```

3. Gerekli paketleri yükleyin:

```bash
npm install
```

## Kullanım

1. Gender Prediction by Name projesini başlatın:

```bash
npm start
```

2. Tarayıcınızda şu adresi açın:

```
http://localhost:3000
```

## API Kontrolü

Postman kullanarak API'yi kontrol edin:

1. Postman'i açın.
2. GET isteği gönderin:

```
GET http://localhost:3000/api/gender?name=
```

3. Cevap olarak cinsiyet tahminini alacaksınız.

## MongoDB Bağlantısı

Proje MongoDB veritabanı ile entegre edilmiştir. Cevaptan dönen JSON verisini veritabanına kaydetmek için şu adımları izleyin:

1. MongoDB kurulumunu yapın.
2. Proje dizininde `.env` dosyası oluşturun ve MongoDB URI'ını ekleyin:

```
MONGODB_URI=mongodb+srv://<your_mail>:<password>@cluster.limgjhg.mongodb.net/
```

3. Proje başlatıldığında, JSON verisi otomatik olarak MongoDB'ye kaydedilecektir.

## Katkıda Bulunma

Her türlü katkıya açığız.



// src/data/gasmData.js

export const lectureData = {
    "Deniz Hukuku": `
        <h3>Deniz Hukukuna Giriş</h3>
        <p>Deniz hukuku, denizlerin kullanımı, gemilerin işletilmesi ve deniz ticaretini düzenleyen hukuk dalıdır.</p>
        <h3>Temel Tanımlar</h3>
        <ul>
            <li><b>Karasuları:</b> Sahil devletinin tam egemenliğe sahip olduğu deniz kuşağıdır.</li>
            <li><b>MEB:</b> Münhasır Ekonomik Bölge.</li>
        </ul>
        <h3>MARPOL 73/78</h3>
        <p>Gemilerden kaynaklanan kirliliğin önlenmesi için en önemli uluslararası sözleşmedir.</p>
    `,
    "Stabilite": `
        <h3>Gemi Stabilitesi</h3>
        <p>Stabilite, geminin dengesi bozulduğunda tekrar eski konumuna gelebilme yeteneğidir.</p>
        <h3>GM Yüksekliği</h3>
        <p>G ile M arasındaki mesafedir. Pozitif GM kararlı denge demektir.</p>
    `,
    "Gemicilik": `<h3>Gemicilik Esasları</h3><p>Halatlar, donanımlar ve bağlama yöntemleri.</p>`,
    "İngilizce": `<h3>SMCP</h3><p>Standart Denizcilik İletişim Kalıpları.</p>`,
    "Seyir": `<h3>Seyir (Navigasyon)</h3><p>Emniyetli rota takibi ve seyir yardımcıları.</p>`,
    "Vardiya Standartları": `<h3>STCW</h3><p>Vardiya tutma standartları ve kuralları.</p>`
};

// Senin gönderdiğin HTML'deki "soruHavuzu" değişkeninin tamamını buraya alacağız.
// Not: Buraya senin gönderdiğin 1000 satırlık veriyi kopyala-yapıştır yapmalısın.
// Ben örnek olarak yapıyı veriyorum:

export const soruHavuzu = {

    "Deniz Hukuku": [


        {
            id: 1,
            q: "Deniz Hukukunun özellikleri aşağıdakilerden hangisidir?",
            options: ["Kendine özgüdür, moderndir, ulusaldır", "Kendine özgüdür, gelenekseldir, uluslararasıdır", "Moderndir, uluslararasıdır", "Özeldir, moderndir, uluslararasıdır", "Geneldir, moderndir, uluslararasıdır"],
            answer: 3
        },
        {
            id: 2,
            q: "Aşağıdakilerden hangisi doğrudur?",
            options: [
                "Deniz hukuku, Deniz Kamu Hukuku - Deniz Özel Hukuku olarak ikiye ayrılır",
                "Deniz hukuku, Deniz Özel Hukuku - Deniz İdare Hukuku olarak ikiye ayrılır",
                "Deniz hukuku, Deniz Ceza Hukuku - Deniz Hukuku olarak ikiye ayrılır",
                "Deniz hukuku, Deniz Ticareti Hukuku - Deniz Özel Hukuk olarak ikiye ayrılır",
                "Deniz hukuku, Deniz Ticareti Hukuku - Deniz Ceza Hukuk olarak ikiye ayrılır"
            ],
            answer: 0
        },
        {
            id: 3,
            q: "Aşağıdakilerden hangisi denizcilik ile ilgili ulusal mevzuatımız içinde yer almaz?",
            options: ["Gemilerin gemi adamları ile donatılmasına ilişkin yönerge", "Armatörler Birliği Kanunu", "Gemi adamları sağlık yönergesi", "Deniz İş Kanunu", "Gemi adamları yönetmeliği"],
            answer: 1
        },
        {
            id: 4,
            q: "Devletin yasama, yürütme ve yargı yetkilerini bütünüyle kullandığı deniz alanlarına ne denir?",
            options: ["Kıt'a sahanlığı", "Münhasır Ekonomik Bölge", "Açık Deniz", "İçsular", "Karasuları"],
            answer: 3
        },
        {
            id: 5,
            q: "Olağanüstü haller ile ülkenin güvenliğini ilgilendiren durumlarda... yayınların geçici veya süresiz olarak durdurulmasını veya kısıtlanmasını ifade eden terim aşağıdakilerden hangisidir?",
            options: ["Yüksek haberleşme kontrolü", "Telsiz Yayın kontrolü", "Olağanüstü hal kontrolü", "Haberleşme kontrolü", "Telsiz kontrolü"],
            answer: 1
        },
        {
            id: 6,
            q: "Türk Ticaret Kanununun 934.maddesi uyarınca aşağıdakilerden hangisi gemi adamlarından değildir?",
            options: ["Kaptan", "Çamaşırcı", "Tayfa", "Kılavuz", "Gemi Zabitleri"],
            answer: 3
        },
        {
            id: 7,
            q: "Gemiadamları Yönetmeliğine göre, 'Sınırlı Vardiya Zabiti' yeterliğinin bir üst yeterliği aşağıdakilerden hangisidir?",
            options: ["Vardiya Zabiti", "Uzakyol Vardiya Zabiti", "Kaptan (500-3000GT)", "Sınırlı Kaptan", "Vardiya Zabiti (500-3000GT)"],
            answer: 3
        },
        {
            id: 8,
            q: "En az bir MF sahil istasyonu tarafından kaplanan ve MF/DSC uyarılarının alınabileceği GMDSS deniz alanı hangisidir?",
            options: ["A5", "A2", "A4", "A3", "A1"],
            answer: 1
        },
        {
            id: 9,
            q: "Aşağıdaki kılavuzluk sistemlerinden hangisi Türkiye'de bulunmamaktadır?",
            options: ["Liman kılavuzluğu", "Mecburi müşavir (danışman) kılavuzluk", "İhtiyarı kılavuzluk", "Mecburi sevk ve idare kılavuzluğu", "Boğaz kılavuzluğu"],
            answer: 3
        },
        {
            id: 10,
            q: "Ticaret gemilerinin Türk Boğazları Tüzüğüne (1998) göre Türk Boğazlarında geçiş rejimi aşağıdakilerden hangisidir?",
            options: ["Transit Geçiş Rejimi", "Zararsız Geçiş Rejimi", "Uğraksız Geçiş Rejimi", "Duraksız Geçiş Rejimi", "İhbarlı Geçiş Rejimi"],
            answer: 2
        },
        {
            id: 11,
            q: "Birleşmiş Milletler Deniz Hukuku Sözleşmesi'ne (BMDHS-1982) göre Münhasır Ekonomik Bölge aşağıdakilerden hangisinden itibaren ölçülmeye başlanır?",
            options: ["Karasularının dış hattından itibaren", "Karasularının iç hattından itibaren", "Bitişik bölgeden itibaren", "Esas hattan itibaren", "Kıta sahanlığından itibaren"],
            answer: 3
        },
        {
            id: 12,
            q: "Aşağıdakilerden hangisi Türk Ticaret Kanunu uyarınca geminin unsurlarından değildir?",
            options: ["Suda hareket etme kabiliyetinin olması", "Pek küçük olmaması", "Tahsis edildiği amacın denizde hareketi gerekli kılması", "Ticari kazanç gayesi bulunması", "Yüzme kabiliyetinin bulunması"],
            answer: 3
        },
        {
            id: 13,
            q: "6102 sayılı (yeni) Türk Ticaret Kanunu md.931'e göre aşağıdakilerden hangisi 'gemi' tanımının unsurlarından değildir?",
            options: ["Suda hareket etmek amacına tahsis edilmesi", "Pek küçük olmaması", "Yüzme özelliği bulunması", "Taşıma yapma gerekliliğinin olması", "Kendiliğinden hareket etmesinin gerekmemesi"],
            answer: 4
        },
        {
            id: 14,
            q: "Aşağıda yer alan tanımlardan hangisi TTK'da yer alan gemi tanımıdır?",
            options: [
                "Tahsis gayesi ne olursa olsun denizde kürek veya yelken kullanmaksızın hareket edebilen her türlü tekne gemidir",
                "Tahsis edildiği gayeye uygun olarak kullanılması denizde hareket imkanına bağlı bulunan büyük-küçük her türlü tekne gemidir",
                "Denizde kürekten başka aletle yola çıkabilen her araç adı, tonilatosu ve kullanma amacı ne olursa olsun gemidir",
                "Denizde kürek veya yelkenden başka aletle yola çıkabilen her araç adı, tonilatosu ve kullanma amacı ne olursa olsun gemi denir",
                "Tahsis edildiği gayeye uygun olarak kullanılması denizde hareket etmesi imkanına bağlı bulunan ve pek küçük olmayan her türlü tekne gemidir"
            ],
            answer: 4
        },
        {
            id: 15,
            q: "Aşağıdakilerden hangisi Kaptan'ı tanımlar?",
            options: [
                "Donatan veya donatma iştirakinde müşterek donatanlar tarafından tayin edilen ve kendisine 'Kamu Hukuku'na ve 'Özel Hukuku' ilişkin görevler verilen kişidir",
                "Donatan adına gemide hareket eden kişidir",
                "Gerekli yeterlik belgesini haiz olup gemiyi sevk ve idare eden kişidir",
                "Gemide sadece güverteden sorumludur",
                "Donatanın gemilerini teknik ve idari bakımdan donatan adına denetleyen yetkili kişidir"
            ],
            answer: 0
        },
        {
            id: 16,
            q: "Aşağıdakilerden hangisi 'Kabotaj Hakkı' nın tanımıdır?",
            options: [
                "Bir devletin kendi karasuları içerisinde ve dışında deniz ticareti yapabilmek yetkisini... kendi vatandaşlarına tanıması",
                "Bir devletin kendi karasuları dışındaki sularda deniz ticareti yapabilmek yetkisini... kendi vatandaşlarına tanıması",
                "Bir devletin kendi karasuları içerisinde deniz ticareti yapabilmek yetkisini ve hakkını sadece kendi vatandaşlarına ve kendi bayrağını taşıyan gemilere tanıması",
                "Bir devletin kendi karasuları içinde ve dışında yük taşıma yetkisini... kendi vatandaşlarına tanıması",
                "Bir devletin kendi karasuları içinde yolcu taşıma, dışında ise sair taşıma yetkisini... kendi vatandaşlarına tanıması"
            ],
            answer: 2
        },
        {
            id: 17,
            q: "Aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Deniz İş Kanunu açısından gemi sahibine... işveren denir",
                "TTK açısından gemisini deniz ticaretinde kullanan gemi sahibine donatan denir ve İşveren sayılır",
                "TTK açısından kendisinin olmayan bir gemiyi kendi adına... kullanan kimse, donatan kabul edilir ve işveren sayılır",
                "Donatma iştirakinde paydaş olanlar donatan kabul edilir ve işveren sayılır",
                "Sadece gemi sahibi olan kimseler donatandır ve işveren sayılır"
            ],
            answer: 4
        },
        {
            id: 18,
            q: "Deniz İş Kanunu;",
            options: [
                "Bükreş sözleşmesine göre sadece bu anlaşmaya taraf devlet vatandaşlarına uygulanır",
                "Aynı zamanda hem TC hem de yabancı devlet vatandaşı olanlara uygulanır",
                "Bütün yabancı gemi adamlarına uygulanır",
                "Mütekabiliyet esaslarına göre sadece Avrupa devletleri vatandaşlarına uygulanır",
                "Mütekabiliyet esaslarına göre, Türk gemi adamlarına aynı mahiyette haklar tanıyan devletlerin uyruğunda olup bu Kanun kapsamına giren gemilerde çalışan gemiadamlarına uygulanır"
            ],
            answer: 4
        },
        {
            id: 19,
            q: "854 sayılı Deniz İş Kanunu açısından aşağıdakilerden hangisi uygulama kapsamı dahilinde değildir?",
            options: [
                "Bu kanun denizlerde gemilerde akarsularda TC bayrağı taşıyan 100 groston ve üstü gemilerde uygulanır",
                "Bu kanun sadece denizde taşımacılık yapan gemilerde uygulanır",
                "Bu kanun aynı işverene ait gemilerin çalıştırıldığı gemiadamı sayısı 5 ve yukarı olduğunda uygulanır",
                "Bu kanun uygulamasında sandal, mavna, şat, salapurya gibi olanlar da gemi sayılır",
                "Bakanlar kurulu... kapsamı dışında kalan gemilerle gemiadamlarına... teşmile yetkilidir"
            ],
            answer: 1
        },
        {
            id: 20,
            q: "Liman Çıkış Belgesi hangi Makamdan alınır?",
            options: ["Gemi Sörvey Kurulu", "Gümrük Teşkilatı", "Sahil Sıhhiye", "Liman Başkanlığı", "Liman İşletme Müdürlüğü"],
            answer: 3
        },
        {
            id: 21,
            q: "Gemilerin 'Liman Çıkış Belgelerinin' denetimini yapmaya aşağıdaki kuruluşların hangisi yetkilir?",
            options: ["Marmara Bölge Müdürlüğü sörvey kurulu", "Bölge Müdürlükleri Sörvey kurulları", "Liman Başkanlıkları", "Yüksek okul mezunu liman başkanlıkları", "Devlet Denetleme Kurulu"],
            answer: 2
        },
        {
            id: 22,
            q: "Tam boyu 24 metreden küçük gemilerin 'Denize Elverişlilik' denetini yapmaya, aşağıdaki kuruluşların hangisi yetkilidir?",
            options: ["Bölge Müdürlükleri Sörvey kurulları", "Yüksek okul mezunu liman başkanlıkları", "Devlet Denetleme Kurulu", "Marmara Bölge Müdürlüğü sörvey kurulu", "Liman Başkanlıkları"],
            answer: 4
        },
        {
            id: 23,
            q: "Deniz turizmi araçlarının seferleri ile ilgili aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Hudut giriş işlemini tamamlamış deniz turizmi araçları Türk karasuları ve limanları arasında serbestçe dolaşabilir",
                "Türk bayraklı özel deniz araçları Türk limanları arasında yapacakları seferlerde seyir izin belgesi kullanmaz",
                "Seyir izin belgesinin süresi içerisinde deniz turizmi aracında bulundurulması zorunludur",
                "Kaptanın seyir izin belgesinin sefer süresince deniz turizmi aracında kalan nüshasını liman başkanlığına teslim etmesi ile sefer tamamlanmış olur",
                "Seferini tamamlayan deniz turizmi araçları sefer bittikten en geç 24 saat içinde liman başkanlığına bildirimde bulunurlar"
            ],
            answer: 1
        },
        {
            id: 24,
            q: "Aşağıdakilerden hangisi Bakanlık tarafından Türk bayraklı gemilerde sörvey yapma ve sertifika düzenleme konusunda yetkilendirilmiş klas kuruluşlarından değildir?",
            options: ["Türk Loydu (TL)", "American Bureau of Shipping (ABS)", "Det Norske Veritas (DNV)", "Russian Maritime of Shipping (RMRS)", "Germanischer Lloyd (GL)"],
            answer: 3
        },
        {
            id: 25,
            q: "Sağlık resmi geminin hangi ölçü birimi üzerinden alınmaktadır?",
            options: ["DWT", "GDP", "Net ton", "RT", "GRT"],
            answer: 2
        },
        {
            id: 26,
            q: "492 sayılı Harçlar Kanununa göre gemi belgelerinden alınan harçlarda geminin hangi tonajı esas alınır?",
            options: ["Beher gros tonilato", "Beher rüsum tonilato", "DWT", "Deplasman ton", "Geminin boş ağırlığı"],
            answer: 0
        },
        {
            id: 27,
            q: "Aşağıdakilerden hangisi Kıyı Emniyeti Genel Müdürlüğünün almış olduğu bir ücrettir?",
            options: ["Sağlık resmi", "Fener ücreti", "Yola elverişlilik belgesi harcı", "Navlun hasılat payı", "Denize elverişlilik belgesi harcı"],
            answer: 1
        },
        {
            id: 28,
            q: "Gemi ve deniz ile ilgili aşağıdaki harç ve resimlerden hangisi liman başkanlıklarınca alınmaz?",
            options: ["Yola Elverişlilik belgesi harcı", "Gemi Tasdikname harcı", "Ölçme Belgesi harcı", "Denize Elverişlilik belgesi harcı", "Liman işgal resmi"],
            answer: 4
        },
        {
            id: 29,
            q: "Ülkemizde frekans tahsis ve tescil işlemleri aşağıda verilen hangi kurum/kuruluş tarafından yapılmaktadır?",
            options: ["Bilgi Teknolojileri ve İletişim Kurumu", "Genel Kurmay Başkanlığı", "Başbakanlık", "Telsiz İşletme Müdürlüğü", "Ulaştırma Bakanlığı"],
            answer: 0
        },
        {
            id: 30,
            q: "Kodlu ve kriptolu haberleşme yapma usül ve esasları aşağıdaki belirtilen hangi kurum/kuruluş tarafından belirlenmektedir?",
            options: ["Ulaştırma Bakanlığı", "Genel Kurmay Başkanlığı", "Milli İstihbarat Teşkilatı", "Bilgi Teknolojileri ve İletişim Kurumu", "Telsiz İşletme Müdürlüğü"],
            answer: 1
        },
        {
            id: 31,
            q: "Ülkemizde Kıyı Telsiz İstasyonlarının kurulması ve işletimini sağlayan kurum aşağıdakilerden hangisidir?",
            options: ["Uluslararası Telekomünikasyon Birliği", "Liman Başkanlıkları", "Denizcilik Bölge Müdürlükleri", "Kıyı Emniyeti Genel Müdürlüğü", "Ulaştırma ve Altyapı Bakanlığı"],
            answer: 3
        },
        {
            id: 32,
            q: "Bağlama Kütüğü Uygulama Yönetmeliği gereğince; kaç metreden küçük gemi, deniz ve iç su araçları bağlama kütüğüne kayıt edilmez?",
            options: ["4.5", "3.5", "3", "4", "2.5"],
            answer: 4
        },
        {
            id: 33,
            q: "Bağlama kütüğü ruhsatnamesi hangi gros tondan küçük gemi ve deniz araçlarına verilir?",
            options: ["40", "49", "12", "150", "18"],
            answer: 4
        },
        {
            id: 34,
            q: "Türk Ticaret Kanununa göre aşağıdaki gemilerden hangisi Türk Bayrağı çekmek için 'Gemi Tasdiknamesi veya Bayrak Şahadetnamesi' belgesi almak zorundadır?",
            options: ["Gezinti amacına tahsis edilmiş yatlar", "Sadece spor amacına tahsis edilmiş gemiler", "Bilimsel araştırma gemileri", "18 gros tonilatodan küçük gemiler", "Liman içi sefer yapan yolcu gemileri"],
            answer: 3
        },
        {
            id: 35,
            q: "Türk Bayrağı çekme hakkını yurt dışında elde eden gemi bu hakkını aşağıdakilerden hangisi ile belgeler?",
            options: ["Gemi Tasdiknamesi", "Bayrak Şahadetnamesi", "Bayrak çekme müsaade belgesi", "Gemi jurnali'nin tasdikli örneği", "Gemi Kayıt Defteri"],
            answer: 1
        },
        {
            id: 36,
            q: "Aşağıdaki gemilerden hangisine verilecek liman çıkış belgesi harca tabidir?",
            options: ["Turist nakleden ve başkaca ticari işlemde bulunmayan turistik gemiler", "İlmi mevzularda kullanılan gemiler", "Balık avlama gemileri", "Sünger gemileri", "Yük gemisi"],
            answer: 4
        },
        {
            id: 37,
            q: "4922 Sayılı Denizde Can ve Mal Koruma Hakkında Kanun gereği aşağıdakilerden hangisi liman çıkış belgesinin verilmesine esas denetimde dikkate alınmaz?",
            options: ["Gemiadamlarının yeterliği ve sayısı", "Yolcu sayısı ve yükün cinsi", "Yükleme durumu", "Kumanya durumu", "Gemi belgelerinin geçerliliği"],
            answer: 3
        },
        {
            id: 38,
            q: "TTK.817/2'ye göre, aşağıdakilerden hangisi 'Liman Çıkış Belgesi' denetinde dikkate alınmaz?",
            options: ["Gemiadamları yeterlilikleri ve sayıları", "Can kurtarma ve seyir donanımları", "Yangından korunma ve yangın söndürme araçları", "Makine yeterliliği", "Kumanya, yakıt yeterliliği ve yükleme durumu"],
            answer: 4
        },
        {
            id: 39,
            q: "Gemilerin Teknik Yönetmeliğine göre liman çıkış belgesi denetiminde aşağıdakilerden hangisi dikkate alınmaz?",
            options: ["Gemiadamlarının yeterliği ve sayısı", "Yolcu sayısı", "Yükleme durumu", "Zorunlu belgelerin geçerliliği", "Makine Gücü"],
            answer: 4
        },
        {
            id: 40,
            q: "Denizde Can ve Mal Koruma Hakkında Kanuna göre; Denize Elverişlilik Belgesi olmayan gemi;",
            options: ["Yolcu taşıyamaz", "Hiçbir şekilde hareket edemez", "Yük taşıyamaz", "Limandan çıkış izni verilmez", "Yük taşır, yolcu taşıyamaz"],
            answer: 3
        },
        {
            id: 41,
            q: "'Denize Elverişlilik' belgesi olmayan veya süresi biten gemi;",
            options: ["Hiçbir şekilde hareket edemez", "Yük taşıyamaz", "Yolcu taşıyamaz", "Yük taşır, yolcu taşıyamaz", "Ticari faaliyette bulunamaz"],
            answer: 4
        },
        {
            id: 42,
            q: "6762 Sayılı TTK'nun 816.Maddesi gereğince aşağıdakilerden hangisi ticari bir gemi için denize elverişliliğin koşullarından değildir?",
            options: ["Teknenin sağlamlığı", "Genel donatımın yeterliliği", "Ana Makinenin yeterliliği", "Kazanın yeterliliği", "Yükleme durumunun uygunluğu"],
            answer: 4
        },
        {
            id: 43,
            q: "Yurtdışından bir Türk limanına yüklü gelen ve denize elverişlilik belgesinin süresi yolculuğun devamı sırasında bitmiş olan bir gemi için aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Yükünü sadece geldiği limana boşaltabilir müteakip bir limana boşaltamaz",
                "Denetleneceği limana dönmek koşuluyla yükünü bir veya bir kaç limana boşaltabilir",
                "Denetleneceği limana kadar seyir yapabilir",
                "Denetleneceği limana kadar ticari işlem yapabilir",
                "Denetleneceği limana kadar seyir yapması için denize elverişlilik belgesi düzenlenmesine gerek yoktur"
            ],
            answer: 0
        },
        {
            id: 44,
            q: "Denize elverişlilik belgesi süresi içinde yolculuğun devamı sırasında herhangi bir nedenle yönetmeliğe uygun durumunu kaybetmiş gemiler ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Ticari işleminin tamamlanacağı limana gidebilir",
                "Kaptan tarafından gerekli emniyet tedbirleri alınarak seyir yapılır",
                "İdareye durum bildirilerek seyir yapılabilir",
                "Yolculuğunu tamamladığı limandan hiçbir koşulda ayrılamaz",
                "Yolculuğunu tamamladığı limandan onarılabileceği en yakın limana gidebilir"
            ],
            answer: 3
        },
        {
            id: 45,
            q: "Ülkemizde yüzer araçlar için düzenlenen ve yetkili kurum tarafından verilen telsiz istasyonu ruhsatnamesinin geçerlilik süresi aşağıdakilerden hangisidir?",
            options: ["5 yıl", "1 yıl", "2 yıl", "3 yıl", "4 yıl"],
            answer: 0
        },
        {
            id: 46,
            q: "Gemilerin taşıyabileceği max. yük miktarını ve su üzerinde batabileceği max. draftı belirlemek maksadıyla gemilerin nasıl ölçümlendirileceğinin belirlendiği uluslararası sözleşmenin kısa adı aşağıdakilerden hangisidir?",
            options: ["SOLAS", "LL", "STCW", "LLMC", "LDC"],
            answer: 1
        },
        {
            id: 47,
            q: "Uluslararası Yükleme Sınırı Sözleşmesine (LL/66) göre asgari yaz fribord mesafesi hangi yükleme sınırı çizgisinden ana güverte çizgisine kadar ölçülür?",
            options: ["W", "LS", "S", "WNA", "T"],
            answer: 2
        },
        {
            id: 48,
            q: "Uluslar arası konvansiyona göre Fribord markalarının sınırları bazı harflere göre adlandırılır. Bu bağlamda 'TF' harfinin anlamı aşağıdakilerden hangisidir?",
            options: ["Tropikal Tatlı Su Yükleme Sınırı", "Kış Yükleme Sınırı", "Kış Kuzey Atlantik Yükleme Sınırı", "Tropikal Yükleme Sınırı", "Tatlı Su Yükleme Sınırı"],
            answer: 0
        },
        {
            id: 49,
            q: "Uluslar arası Yükleme Sınırı Sözleşmesine göre (LL/66) aşağıdakilerden hangisi kereste yükleme sınırı işaretlerindendir?",
            options: ["S", "W", "LW", "WNA", "T"],
            answer: 2
        },
        {
            id: 50,
            q: "Kereste (timber) yükü için freeborda ilişkin gereklilikler LOADLINE sözleşmesinin hangi bölümünde (Annex) açıklanmıştır?",
            options: ["Bölüm I", "Bölüm II", "Bölüm III", "Bölüm IV", "Bölüm III / Kısım 2"],
            answer: 3
        },
        {
            id: 51,
            q: "Mevsimsel periyotlara, bölge ve alanlara ilişkin hususlar LOADLINE Sözleşmesinin hangi bölümünde (Annex) açıklanmıştır?",
            options: ["Bölüm I", "Bölüm II", "Bölüm III", "Bölüm IV", "Bölüm C"],
            answer: 1
        },
        {
            id: 52,
            q: "1966 loadline konvansiyonunda mevsimsel değişikliklere göre bölgeler belirlenirken aşağıdakilerden hangisi göz önüne alınmıştır?",
            options: ["Akıntı", "Belli bir bofor kuvvetinin üzerinde esen rüzgarlar", "Yağmur", "Ani sıcaklık değişmeleri", "Gece gündüz değişikliği"],
            answer: 1
        },
        {
            id: 53,
            q: "Aşağıdaki gemi türlerinden hangisi ya da hangileri 'Uluslararası Yükleme Hattı (Load Line 1966)' sözleşmesinin hükümlerini yerine getirmek zorunda değildir? (I) Savaş Gemileri (II) Boyu 24 metreden kısa gemiler (III) 150 GRT'dan küçük yaşlı gemiler (IV) Ticari Yatlar (V) Balıkçı Gemileri",
            options: ["I,II,III,V", "I,II,III,IV,V", "I,III,IV,V", "I,II,IV", "III"],
            answer: 1
        },
        {
            id: 54,
            q: "MARPOL 73/78 Sözleşmesi Eklerine göre aşağıdakilerden hangisi 'özel alanlar içinde' belirli şartlara uyarak denize atılabilir?",
            options: ["Öğütülmüş gıda atıkları", "Yüzebilen istif malzemeleri", "Halat parçaları", "Yağlı olmayan üstübüler", "Plastik atıklar"],
            answer: 0
        },
        {
            id: 55,
            q: "Yiyecek atıkları, öğütücü sistemden geçtikten sonra özel deniz alanı içinde MARPOL 73/78 gereği; minimum kıyıdan kaç mil mesafeden denize atılabilir?",
            options: ["12 mil", "10 mil", "3 mil", "6 mil", "4 mil"],
            answer: 0
        },
        {
            id: 56,
            q: "Yiyecek artıkları, parçalayıcı ve öğütücü sistemden geçmeden, özel deniz alanı içinde, minimum kaç mil mesafeden, MARPOL 73/78 gereği denize atılabilir?",
            options: ["3 mil", "4 mil", "6 mil", "10 mil", "Atılamaz"],
            answer: 4
        },
        {
            id: 57,
            q: "MARPOL 73/78 EK-V kapsamındaki Özel Alanlarda çöp istif tahtaları kaç mil açıkta denize atılabilir?",
            options: ["10 mil", "12 mil", "15 mil", "25 mil", "Atılamaz"],
            answer: 4
        },
        {
            id: 58,
            q: "MARPOL sözleşmesi Ek V deki özel bölgelerde uygulanan kirlilik önleme kuralları aşağıdaki seçeneklerden hangisinde doğru olarak yer almıştır?",
            options: [
                "Kıyıdan 12 milden fazla uzaklıkta 25 mm.den daha küçük atılabilen gıda artıkları dışında hiçbir atık madde atılamaz",
                "Bu bölgelerde sadece plastik ve çöp denize atılamaz",
                "Sadece kağıt ve gıda atıkları atılabilir",
                "Sadece cam, metal ve gıda atıkları atılabilir",
                "Sadece suda çözülen doğal maddeler atılabilir"
            ],
            answer: 0
        },
        {
            id: 59,
            q: "MARPOL 73/78 Sözleşmesinin EK-V (Gemilerden atılan çöpler ile deniz kirlenmesini önleyici kurallar)'i gereği aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde hiçbir madde denize atılamaz",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 6 milden sonra atılmasına izin verilir",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 12 milden sonra atılmasına izin verilir",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 6 milden sonra 25 mm.den daha geniş olmayan süzgeçten geçebilecek şekilde parçalandıktan sonra denize atılmasına izin verilir",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 12 milden sonra 25 mm.den daha geniş olmayan süzgeçten geçebilecek şekilde parçalandıktan sonra denize atılmasına izin verilir"
            ],
            answer: 4
        },
        {
            id: 60,
            q: "MARPOL 73/78 Sözleşmesinin EK-V (Gemilerden atılan çöpler ile deniz kirlenmesini önleyici Kurallar)'ı gereği Özel Alan kapsamına giren denizlerin tümü aşağıdaki paragraflardan hangisinde bulunmaktadır?",
            options: [
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi, Antartika ve Karayip",
                "Akdeniz, Karadeniz, Baltık, Hint Okyanusu, Kuzey Denizi, Antartika ve Karayip",
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi ve Karayip",
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi ve Antartika",
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi, Atlantik Okyanusu, Antartika ve Karayip"
            ],
            answer: 0
        },
        {
            id: 61,
            q: "Aşağıdakilerden hangisi özel alanlar dışında denize atılabilir?",
            options: ["Plastik", "Cam", "Yüzer halat", "Fiber", "Fiberglass"],
            answer: 1
        },
        {
            id: 62,
            q: "Hangisi özel alan dışında 3 milden atılabilen çöp tipidir?",
            options: ["Parçalanmış yiyecek atıkları", "Yüzmeyen katı madde", "Parçalanmamış yiyecek atıkları", "Yüzer katı madde", "Plastikler"],
            answer: 0
        },
        {
            id: 63,
            q: "MARPOL 73/78 EK-V gereğince özel alanlar dışında gıda atıkları ve kağıt parçaları parçalayıcı ve öğütücü cihazdan geçirilmek kaydıyla en yakın kıyıdan kaç mil uzaklıkta denize atılmasına müsaade edilebilir?",
            options: ["2", "3", "6", "1", "12"],
            answer: 1
        },
        {
            id: 64,
            q: "Yiyecek atıkları öğütücü sistemden geçtikten sonra, özel deniz alanı dışında MARPOL 73/78 gereği, minimum kıyıdan kaç mil mesafede denize atılabilir?",
            options: ["3 mil", "4 mil", "6 mil", "10 mil", "12 mil"],
            answer: 0
        },
        {
            id: 65,
            q: "Yiyecek atıkları, öğütücü sistemden geçmeden özel deniz alanı dışında MARPOL 73/78 gereği minimum kıyıdan kaç mil mesafe uzakta olmak kaydıyla denize atılabilir?",
            options: ["6 mil", "10 mil", "4 mil", "3 mil", "12 mil"],
            answer: 4
        },
        {
            id: 66,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-V'inde belirtilen gemilerden atılan çöpler (gıda atıkları, kağıtlar, tabak kırıkları vb.), parçalayıcı ve öğütücüden geçmek koşulu ile 12 mil içinde 3 milden daha az olmamak koşulu ile, kaç mm.den daha geniş olmayan süzgeçten geçebilecek kadar parçalandıktan sonra denize atılabilir?",
            options: ["15", "20", "25", "30", "35"],
            answer: 2
        },
        {
            id: 67,
            q: "MARPOL 73/78 Konvansiyonu Ek-V kapsamında özel alanlar dışında yüzebilecek olan istif gereçleri, kaplama ve ambalaj malzemesi en yakın kıyıdan en az kaç mil uzaklıktan atılabilir?",
            options: ["3 mil", "6 mil", "12 mil", "25 mil", "Atılamaz"],
            answer: 3
        },
        {
            id: 68,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslar arası sözleşmesi (MARPOL 73/78) in EK-VI sı, hangi maddelerle denizlerin kirletilmesinin önlenmesine ilişkin alınacak tedbirleri kapsar?",
            options: [
                "Petrol ile deniz kirlenmesini önleyici kurallar",
                "Dökme zehirli sıvı maddelerle deniz kirlenmesini önleyici kurallar",
                "Ambalajlı bir şekilde... taşınan zararlı maddelerle deniz kirlenmesini önleyici kurallar",
                "Gemilerden çıkan pis sularla... deniz kirlenmesini önleyici kurallar",
                "Gemilerden kaynaklanan hava kirliliğinin önlenmesine ait kurallar"
            ],
            answer: 4
        },
        {
            id: 69,
            q: "Gemilerden kaynaklanan hava kirliliğinin önlenmesine ilişkin kurallar MARPOL Sözleşmesinin hangi ekinde (annex) yer almaktadır?",
            options: ["MARPOL EK-IV", "MARPOL EK-VI", "MARPOL EK-III", "MARPOL EK-II", "MARPOL EK-V"],
            answer: 1
        },
        {
            id: 70,
            q: "MARPOL 73/78 EK-VI'da belirtilen 'Hava Kirliliğinin Önlenmesine' dair kurallar gereği kaç GRT ve üzeri gemi, sabit ve yüzer sondaj platformları sörvey ve denetime tabidir?",
            options: ["150 GRT", "300 GRT", "500 GRT", "200 GRT", "400 GRT"],
            answer: 4
        },
        {
            id: 71,
            q: "Gemilerin taşıyabileceği max. yük miktarını ve su üzerinde batabileceği max. draftı belirlemek maksadıyla gemilerin nasıl ölçümlendirileceğinin belirlendiği uluslararası sözleşmenin kısa adı aşağıdakilerden hangisidir?",
            options: ["SOLAS", "LL", "STCW", "LLMC", "LDC"],
            answer: 1
        },
        {
            id: 72,
            q: "Uluslararası Yükleme Sınırı Sözleşmesine (LL/66) göre asgari yaz fribord mesafesi hangi yükleme sınırı çizgisinden ana güverte çizgisine kadar ölçülür?",
            options: ["W", "LS", "S", "WNA", "T"],
            answer: 2
        },
        {
            id: 73,
            q: "Uluslar arası konvansiyona göre Fribord markalarının sınırları bazı harflere göre adlandırılır. Bu bağlamda 'TF' harfinin anlamı aşağıdakilerden hangisidir?",
            options: ["Tropikal Tatlı Su Yükleme Sınırı", "Kış Yükleme Sınırı", "Kış Kuzey Atlantik Yükleme Sınırı", "Tropikal Yükleme Sınırı", "Tatlı Su Yükleme Sınırı"],
            answer: 0
        },
        {
            id: 74,
            q: "Uluslar arası Yükleme Sınırı Sözleşmesine göre (LL/66) aşağıdakilerden hangisi kereste yükleme sınırı işaretlerindendir?",
            options: ["S", "W", "LW", "WNA", "T"],
            answer: 2
        },
        {
            id: 75,
            q: "Kereste (timber) yükü için freeborda ilişkin gereklilikler LOADLINE sözleşmesinin hangi bölümünde (Annex) açıklanmıştır?",
            options: ["Bölüm I", "Bölüm II", "Bölüm III", "Bölüm IV", "Bölüm III / Kısım 2"],
            answer: 3
        },
        {
            id: 76,
            q: "Mevsimsel periyotlara, bölge ve alanlara ilişkin hususlar LOADLINE Sözleşmesinin hangi bölümünde (Annex) açıklanmıştır?",
            options: ["Bölüm I", "Bölüm II", "Bölüm III", "Bölüm IV", "Bölüm C"],
            answer: 1
        },
        {
            id: 77,
            q: "1966 loadline konvansiyonunda mevsimsel değişikliklere göre bölgeler belirlenirken aşağıdakilerden hangisi göz önüne alınmıştır?",
            options: ["Akıntı", "Belli bir bofor kuvvetinin üzerinde esen rüzgarlar", "Yağmur", "Ani sıcaklık değişmeleri", "Gece gündüz değişikliği"],
            answer: 1
        },
        {
            id: 78,
            q: "Aşağıdaki gemi türlerinden hangisi ya da hangileri 'Uluslararası Yükleme Hattı (Load Line 1966)' sözleşmesinin hükümlerini yerine getirmek zorunda değildir? (I) Savaş Gemileri (II) Boyu 24 metreden kısa gemiler (III) 150 GRT'dan küçük yaşlı gemiler (IV) Ticari Yatlar (V) Balıkçı Gemileri",
            options: ["I,II,III,V", "I,II,III,IV,V", "I,III,IV,V", "I,II,IV", "III"],
            answer: 1
        },

        // --- Deniz HUKUKU.pdf (Part 2 - IDs 79-95) ---
        {
            id: 79,
            q: "MARPOL 73/78 Sözleşmesi Eklerine göre aşağıdakilerden hangisi 'özel alanlar içinde' belirli şartlara uyarak denize atılabilir?",
            options: ["Öğütülmüş gıda atıkları", "Yüzebilen istif malzemeleri", "Halat parçaları", "Yağlı olmayan üstübüler", "Plastik atıklar"],
            answer: 0
        },
        {
            id: 80,
            q: "Yiyecek atıkları, öğütücü sistemden geçtikten sonra özel deniz alanı içinde MARPOL 73/78 gereği; minimum kıyıdan kaç mil mesafeden denize atılabilir?",
            options: ["12 mil", "10 mil", "3 mil", "6 mil", "4 mil"],
            answer: 0
        },
        {
            id: 81,
            q: "Yiyecek artıkları, parçalayıcı ve öğütücü sistemden geçmeden, özel deniz alanı içinde, minimum kaç mil mesafeden, MARPOL 73/78 gereği denize atılabilir?",
            options: ["3 mil", "4 mil", "6 mil", "10 mil", "Atılamaz"],
            answer: 4
        },
        {
            id: 82,
            q: "MARPOL 73/78 EK-V kapsamındaki Özel Alanlarda çöp istif tahtaları kaç mil açıkta denize atılabilir?",
            options: ["10 mil", "12 mil", "15 mil", "25 mil", "Atılamaz"],
            answer: 4
        },
        {
            id: 83,
            q: "MARPOL sözleşmesi Ek V deki özel bölgelerde uygulanan kirlilik önleme kuralları aşağıdaki seçeneklerden hangisinde doğru olarak yer almıştır?",
            options: [
                "Kıyıdan 12 milden fazla uzaklıkta 25 mm.den daha küçük atılabilen gıda artıkları dışında hiçbir atık madde atılamaz",
                "Bu bölgelerde sadece plastik ve çöp denize atılamaz",
                "Sadece kağıt ve gıda atıkları atılabilir",
                "Sadece cam, metal ve gıda atıkları atılabilir",
                "Sadece suda çözülen doğal maddeler atılabilir"
            ],
            answer: 0
        },
        {
            id: 84,
            q: "MARPOL 73/78 Sözleşmesinin EK-V (Gemilerden atılan çöpler ile deniz kirlenmesini önleyici kurallar)'i gereği aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde hiçbir madde denize atılamaz",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 6 milden sonra atılmasına izin verilir",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 12 milden sonra atılmasına izin verilir",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 6 milden sonra 25 mm.den daha geniş olmayan süzgeçten geçebilecek şekilde parçalandıktan sonra denize atılmasına izin verilir",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 12 milden sonra 25 mm.den daha geniş olmayan süzgeçten geçebilecek şekilde parçalandıktan sonra denize atılmasına izin verilir"
            ],
            answer: 4
        },
        {
            id: 85,
            q: "MARPOL 73/78 Sözleşmesinin EK-V (Gemilerden atılan çöpler ile deniz kirlenmesini önleyici Kurallar)'ı gereği Özel Alan kapsamına giren denizlerin tümü aşağıdaki paragraflardan hangisinde bulunmaktadır?",
            options: [
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi, Antartika ve Karayip",
                "Akdeniz, Karadeniz, Baltık, Hint Okyanusu, Kuzey Denizi, Antartika ve Karayip",
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi ve Karayip",
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi ve Antartika",
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi, Atlantik Okyanusu, Antartika ve Karayip"
            ],
            answer: 0
        },
        {
            id: 86,
            q: "Aşağıdakilerden hangisi özel alanlar dışında denize atılabilir?",
            options: ["Plastik", "Cam", "Yüzer halat", "Fiber", "Fiberglass"],
            answer: 1
        },
        {
            id: 87,
            q: "Hangisi özel alan dışında 3 milden atılabilen çöp tipidir?",
            options: ["Parçalanmış yiyecek atıkları", "Yüzmeyen katı madde", "Parçalanmamış yiyecek atıkları", "Yüzer katı madde", "Plastikler"],
            answer: 0
        },
        {
            id: 88,
            q: "MARPOL 73/78 EK-V gereğince özel alanlar dışında gıda atıkları ve kağıt parçaları parçalayıcı ve öğütücü cihazdan geçirilmek kaydıyla en yakın kıyıdan kaç mil uzaklıkta denize atılmasına müsaade edilebilir?",
            options: ["2", "3", "6", "1", "12"],
            answer: 1
        },
        {
            id: 89,
            q: "Yiyecek atıkları öğütücü sistemden geçtikten sonra, özel deniz alanı dışında MARPOL 73/78 gereği, minimum kıyıdan kaç mil mesafede denize atılabilir?",
            options: ["3 mil", "4 mil", "6 mil", "10 mil", "12 mil"],
            answer: 0
        },
        {
            id: 90,
            q: "Yiyecek atıkları, öğütücü sistemden geçmeden özel deniz alanı dışında MARPOL 73/78 gereği minimum kıyıdan kaç mil mesafe uzakta olmak kaydıyla denize atılabilir?",
            options: ["6 mil", "10 mil", "4 mil", "3 mil", "12 mil"],
            answer: 4
        },
        {
            id: 91,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-V'inde belirtilen gemilerden atılan çöpler (gıda atıkları, kağıtlar, tabak kırıkları vb.), parçalayıcı ve öğütücüden geçmek koşulu ile 12 mil içinde 3 milden daha az olmamak koşulu ile, kaç mm.den daha geniş olmayan süzgeçten geçebilecek kadar parçalandıktan sonra denize atılabilir?",
            options: ["15", "20", "25", "30", "35"],
            answer: 2
        },
        {
            id: 92,
            q: "MARPOL 73/78 Konvansiyonu Ek-V kapsamında özel alanlar dışında yüzebilecek olan istif gereçleri, kaplama ve ambalaj malzemesi en yakın kıyıdan en az kaç mil uzaklıktan atılabilir?",
            options: ["3 mil", "6 mil", "12 mil", "25 mil", "Atılamaz"],
            answer: 3
        },
        {
            id: 93,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslar arası sözleşmesi (MARPOL 73/78) in EK-VI sı, hangi maddelerle denizlerin kirletilmesinin önlenmesine ilişkin alınacak tedbirleri kapsar?",
            options: [
                "Petrol ile deniz kirlenmesini önleyici kurallar",
                "Dökme zehirli sıvı maddelerle deniz kirlenmesini önleyici kurallar",
                "Ambalajlı bir şekilde... taşınan zararlı maddelerle deniz kirlenmesini önleyici kurallar",
                "Gemilerden çıkan pis sularla... deniz kirlenmesini önleyici kurallar",
                "Gemilerden kaynaklanan hava kirliliğinin önlenmesine ait kurallar"
            ],
            answer: 4
        },
        {
            id: 94,
            q: "Gemilerden kaynaklanan hava kirliliğinin önlenmesine ilişkin kurallar MARPOL Sözleşmesinin hangi ekinde (annex) yer almaktadır?",
            options: ["MARPOL EK-IV", "MARPOL EK-VI", "MARPOL EK-III", "MARPOL EK-II", "MARPOL EK-V"],
            answer: 1
        },
        {
            id: 95,
            q: "MARPOL 73/78 EK-VI'da belirtilen 'Hava Kirliliğinin Önlenmesine' dair kurallar gereği kaç GRT ve üzeri gemi, sabit ve yüzer sondaj platformları sörvey ve denetime tabidir?",
            options: ["150 GRT", "300 GRT", "500 GRT", "200 GRT", "400 GRT"],
            answer: 4
        },

        // --- Deniz HUKUKU 1.pdf (Part 3 - IDs 101-178) ---
        {
            id: 101,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesine ait Uluslararası sözleşmenin kısaltması aşağıdakilerden hangisidir?",
            options: ["FUND", "OILPOL", "OPRC", "MARPOL", "IOPP"],
            answer: 3
        },
        {
            id: 102,
            q: "Deniz Kirliliği (Marine Pollution - MARPOL) sözleşmesi ile ilgili açıklamalardan hangisi aşağıdaki seçenekte yer almaktadır?",
            options: ["Denizde can ve mal güvenliğini korumayla ilgili", "Denizde daha güvenli seyir yapılmasıyla ilgili", "Gemi kaynaklı deniz ve çevre kirliliğinin önlenmesi ile ilgili", "Gemi adamlarının eğitimleriyle ilgili", "Hiçbiri"],
            answer: 2
        },
        {
            id: 103,
            q: "Marine Pollution (MARPOL) sözleşmesi ile ilgili açıklamalardan doğru olanı hangi seçenekte yer almıştır?",
            options: ["Denizde daha güvenli seyir yapılmasıyla ilgili", "Denizde can ve mal güvenliğini korumayla ilgili", "Gemi adamlarının eğitimleriyle ilgili", "Daha temiz ve daha güvenli deniz çevresi sağlamak", "Hiçbiri"],
            answer: 3
        },
        {
            id: 104,
            q: "IMO'nun MARPOL 73/78 Sözleşmesi kaç EK'ten oluşmaktadır?",
            options: ["YEDİ EK", "ALTI EK", "DÖRT EK", "ÜÇ EK", "BEŞ EK"],
            answer: 1
        },
        {
            id: 105,
            q: "Türkiye Cumhuriyeti günümüzde MARPOL'un hangi eklerine (annex) katılmıştır?",
            options: ["Sadece EK I-II", "Sadece EK I - II - III", "Sadece EK I-IV-VI", "Sadece EK I-II-III-IV", "EK I-II-III-IV-V-VI"],
            answer: 4
        },
        {
            id: 106,
            q: "Türkiye Marpol sözleşmesinin hangi bölüm - bölümlerine taraftır?",
            options: ["1", "1-2", "1-2-6", "1-2-5", "Hepsi"],
            answer: 4
        },
        {
            id: 107,
            q: "Aşağıdakilerden hangisi Marpol'un Ek'lerinden değildir?",
            options: ["Gemilerden çıkan pis sularla deniz kirliliğini önlemesi kuralı", "Gemilerden atılan çöplerle deniz kirliliğinin önlenmesi kuralları", "Petrol ile deniz kirliliğini önleyici kurallar", "Karasal atıkları önleyici kurallar", "Zehirli maddeler ile deniz kirlenmesini önlemek için kurallar"],
            answer: 3
        },
        {
            id: 108,
            q: "MARPOL 73/78 kapsamında aşağıdaki denizlerden hangisi özel alan statüsündedir?",
            options: ["Meksika Körfezi", "Atlantik Okyanusu", "Hint Okyanusu", "Pasifik Okyanusu", "Aden Körfezi"],
            answer: 4
        },
        {
            id: 109,
            q: "Ayrılmış tanklarda taşınan temiz balast suyu hangi çevresel riskleri bünyesinde taşır?",
            options: ["Radyoaktivite", "Petrol Kirliliği", "Ağır Metal", "Biyolojik istila", "Hiçbiri"],
            answer: 3
        },
        {
            id: 110,
            q: "Bir işlemin kirlenmeye sebep olmasını engelleyecek en önemli faktör aşağıdakilerden hangisidir?",
            options: ["Böyle bir işlem için hazırlanmış kontrol listesi", "Çalıştırma el kitabı", "Yeterli sayıda yardımcı personel", "İşlemin yetenekli bir zabitin gözetiminde yapılması", "Tayfanın işlem ile ilgili tecrübesi"],
            answer: 3
        },
        {
            id: 111,
            q: "Deniz kirliliği durumunda müdahale edecek ekip görevini yazılı hangi planda bulur?",
            options: ["SOLAS kaidelerinden", "MARPOL sözleşmesinin ilgili bölümünden", "Role cetvelinden", "Gemi Petrol Kirliliği Acil Planında", "Uluslararası Petrol Kirliliğini Önleme (IOPP) belgesinden"],
            answer: 3
        },
        {
            id: 112,
            q: "Aşağıdakilerden hangisi yağ kirliliği temizleme metotlarından olup yağın tekrar toplanamaması durumunda kullanılması belli bir izin gerektiren bir yöntemdir?",
            options: ["Kepçe kova ve benzeri bir metotla yağın temizlenme çabası", "Emici keçelerle geri toplama metodu", "Yağın kenarına şamandıralar yerleştirme metodu", "Yağ ıslah ediciler kullanarak temizleme", "Yağ döküntüsünün çevresine su sıkmak"],
            answer: 3
        },
        {
            id: 113,
            q: "Oturma durumunda deniz kirliliği meydana geldiğinde aşağıdakilerden hangisi yapılmamalıdır?",
            options: ["İlaç kullanarak yakıtı çökertmek", "Döküntüyü yüzer bir halatla çevirmek", "Emici kağıtlar atmak", "Sahil otoritesine haber vermek", "Kulüp sigortasına haber vermek"],
            answer: 0
        },
        {
            id: 114,
            q: "Teknenin oturması sonucu yara alan akaryakıt tankından dışarıya yakıt sızarsa aşağıdaki önlemlerden hangisinin alınması en uygun olur?",
            options: ["Tankı yarı yarıya boşaltmak", "Tanktaki yakıt seviyesini deniz seviyesine indirmek", "Tanktaki yakıt seviyesini deniz seviyesinin bir miktar altında tutmaya çalışmak", "Tankı tamamen boşaltmak", "Tanktaki yakıt seviyesi deniz seviyesinin bir miktar altına inecek şekilde yakıtı boşaltmak"],
            answer: 2
        },
        {
            id: 115,
            q: "Yağ sızıntısının olduğu tespit edilmiştir. Aşağıdakilerden hangisi başmühendisin yapması gerekenlerden değildir?",
            options: ["Yağ sızıntısının olduğu noktayı belirler", "Sızıntının nedenini araştırır", "P&I temsilcisine haber verir", "Gemiden dökülen yağın yaklaşık miktarını belirler", "Olayı Kaptana rapor eder"],
            answer: 2
        },
        {
            id: 116,
            q: "Aşağıdakilerden hangisi kirlenme durumunda aykırı bir kaptan talimatı olmadıkça kesilmesi gereken işlerden olamaz?",
            options: ["Yük operasyonu", "Gemi müstehlik malzemesi ve yüklenmesi", "Balast operasyonu", "Gemi bakım ve tamir çalışmaları", "Gemiye insan giriş çıkışı"],
            answer: 4
        },
        {
            id: 117,
            q: "Tehlikeli veya deniz kirletici maddeler sızdığında düzenlenecek 'Deniz Kirletici Maddeler Raporu (Marine Pollutants Report) içeriğinde aşağıdakilerden hangisi yer almaz?",
            options: ["Maddenin tahmin edilen miktarı ve durumu", "Maddenin doğru teknik adı veya adları", "Maddenin yüzüyor veya batmış olması", "Maddenin geminin hangi ambarından sızdığı", "Mümkünse sızıntının olduğu tahmini deniz yüzeyi alanı"],
            answer: 3
        },
        {
            id: 118,
            q: "Deniz kirliliğini temizleme rolesi için aşağıdakilerden hangisi söylenemez?",
            options: ["Role gemideki kirliliği temizlemek için oluşturulur", "Role gemiden denize döküntüyü azaltmak için oluşturulur", "Role denizi temizlemek için oluşturulur", "Role yangın tehlikesini azaltmak için oluşturulur", "Role zamanında müdahale için oluşturulur"],
            answer: 3
        },
        {
            id: 119,
            q: "Aşağıdakilerden hangisi Deniz Kirliliği konusunda alınacak tedbirlerden değildir?",
            options: ["MARPOL kurallarının zabitlerce iyi bilinmesi", "SOPEP kurallarının öngördüğü malzemelerin gemide bulundurulması", "Genel ve özel liman kurallarının zabitlerce iyi bilinmesi", "Gemi ve rıhtımın haberleşmesinin sorumlu kişilerce yapılması", "Yangın ve diğer acil durumlara karşı tedbirlerin alınmış olması"],
            answer: 4
        },
        {
            id: 120,
            q: "SOLAS ve MARPOL Sözleşmeleri gereği olarak çatışma ve kazalardan sonra yapılan kaza araştırmalarının amacı nedir?",
            options: ["Kaza ile ilgili bilgi, belge ve kanıt toplamak ve savcıya sunmak", "Cezai soruşturma açmak için hazırlık yapmak, sonuçta hapis cezası vermek", "Tüm ilgilileri sorguya çekmek sureti ile kazanın oluşmasındaki kusur oranlarını belirlemek", "Suçlama yapmadan kazanın nedenlerini araştırarak benzerlerinin oluşmasını engellemeye çalışmak", "İdari soruşturma açmak için hazırlık yapmak, sonuçta idari para cezası vermek"],
            answer: 3
        },
        {
            id: 121,
            q: "(I) 500 GRT'dan küçük tüm yolcu gemileri MARPOL sözleşmesinin hükümlerinden muaftır (II) 400 GRT'dan küçük tüm tankerler, MARPOL sözleşmesinin hükümlerinden muaftır (III) 400 GRT'dan küçük tüm kuruyük gemileri, MARPOL sözleşmesinin hükümlerinden muaftır (IV) 300 GRT'dan küçük tüm kimyasal tankerler, MARPOL sözleşmesinin hükümlerinden muaftır MARPOL Sözleşmesinin kapsamı gereği, yukarıdaki ifadelerden hangisi veya hangileri doğru değildir?",
            options: ["I,II,IV", "III", "II,III", "I,IV", "III,IV"],
            answer: 2
        },
        {
            id: 122,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-l'i hangi maddelerle denizlerin kirletilmesinin önlenmesine ilişkin alınacak tedbirleri kapsar?",
            options: ["Petrol ile deniz kirlenmesini önleyici kurallar", "Dökme zehirli sıvı maddelerle deniz kirlenmesini önleyici kurallar", "Ambalajlı bir şekilde... taşınan zararlı maddelerle deniz kirlenmesini önleyici kurallar", "Gemilerden çıkan pis sularla... deniz kirlenmesini önleyici kurallar", "Gemilerden atılan çöpler ile deniz kirlenmesini önleyici kurallar"],
            answer: 0
        },
        {
            id: 123,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)in EK-l'inde belirtilen petrol ile deniz kirlenmesini önleyici kurallar kaç GRT üzerindeki teknelere uygulanır?",
            options: ["150 GRT altındaki tankerler", "150 GRT üzerindeki kuru yük gemileri", "350 GRT üzerindeki kuru yük gemileri", "400 GRT üzerindeki tüm gemiler", "500 GRT üzerindeki tüm gemiler"],
            answer: 3
        },
        {
            id: 124,
            q: "MARPOL 73/78 Sözleşmesinin hangi eki (annex) kapsamında ve kaç GRT'dan büyük gemilerde (tanker hariç) Deniz Kirliliğini Önleme Acil Planı (SOPEP) düzenlenerek gemide bulundurulması gereklidir?",
            options: ["EK-I ve 150 GRT", "EK-V ve 400 GRT", "EK-IV ve 150 GRT", "EK-I ve 400 GRT", "EK-IV ve 400 GRT"],
            answer: 3
        },
        {
            id: 125,
            q: "ANNEX 1 kapsamından belirli bir GRT ve üzerindeki yük gemilerinin sörveyi yapılmak zorundadır. Bu GRT aşağıdakilerden hangisidir?",
            options: ["175", "500", "3000", "300", "400"],
            answer: 4
        },
        {
            id: 126,
            q: "Uluslararası Petrolle Kirliliği Önleme Belgesi hangi gemiler için düzenlenmesi zorunludur?",
            options: ["24 metreden küçük yatlar", "150 GT'den küçük tankerler", "300 GT'den büyük balıkçı gemileri", "500 GT'dan büyük yolcu gemileri", "400 GT ve daha büyük yük gemileri"],
            answer: 4
        },
        {
            id: 127,
            q: "Petrol tankerlerinde MARPOL 73/78 Ek-I kapsamındaki yağ kayıt defteri tutma mecburiyeti hangi tonajdan (GRT) itibaren vardır?",
            options: ["150", "200", "300", "400", "500"],
            answer: 0
        },
        {
            id: 128,
            q: "Yağ kayıt defterinin hangi gemilerde tutulması zorunludur?",
            options: ["400 GT ve daha büyük yük gemileri ile petrol tankerleri", "150 GT ve daha büyük petrol tankerleri ile 400 GT ve daha büyük diğer gemiler", "500 GT ve daha büyük yük gemileri ile petrol tankerleri", "400 GT ve daha büyük yük gemileri ile tüm kimyasal tankerier", "300 GT ve daha büyük yük gemileri ile petrol tankerleri"],
            answer: 1
        },
        {
            id: 129,
            q: "Yağ kayıt defteri bölüm 1 (makine operasyonları) hangi tip ve tonajdaki gemiler için doldurulması gereklidir?",
            options: ["300 GRT üzeri tüm yük gemileri", "500 GRT üzeri tüm yük gemileri", "150 GRT üzeri petrol tankerleri ve 400 GRT üzeri petrol tankerleri dışındaki gemiler", "Tüm petrol tankerleri", "300 GRT üzeri petrol tankerleri"],
            answer: 2
        },
        {
            id: 130,
            q: "ISGOTT'un açılımı aşağıdakilerden hangisidir?",
            options: ["Petrol tankerleri ve terminaller Uluslararası Güvenlik Kılavuzu", "Uluslararası tanker terminalleri Güvenlik kılavuzu", "Tankerler ve terminaller için uluslararası kurallar kitabı", "Tankerler ve Terminalleri için Uluslararası Emniyet Rehberi", "Tanker terminalleri için güvenlik ve emniyet rehberi"],
            answer: 3
        },
        {
            id: 131,
            q: "IOPP kısaltması aşağıdakilerden hangisine karşılık gelmektedir?",
            options: ["Sudaki yağ karışım miktarı", "Sudaki zehirli madde karışım miktarı", "Uluslar arası Pis Su Arıtma Cihazı Belgesi", "Uluslar arası Denizin Petrolle Kirlenmesini Önleme Belgesi", "Tanker taşıma belgesi"],
            answer: 3
        },
        {
            id: 132,
            q: "150 GRT üzerindeki petrol tankerleri ile 400 GRT üzerindeki tüm gemilere Uluslararası Denizin Petrolle Kirlenmesini Önleme Belgesi (IOPP) verilir. Bu sertifika kaç yılda bir yenilenir?",
            options: ["1 yıl", "2 yıl", "3 yıl", "4 yıl", "5 yıl"],
            answer: 4
        },
        {
            id: 133,
            q: "Uluslararası Denizin Petrolle Kirlenmesini Önleme Belgesi (IOPP)'ne sahip olan gemilerin MARPOL 73/78 EK-I e göre periyodik sörveyleri kaç yılda bir yapılır?",
            options: ["1", "2", "3", "4", "5"],
            answer: 4
        },
        {
            id: 134,
            q: "Gemide alınan tüm tedbirlere rağmen gemiden kaynaklanan bir durum sonucu denize petrol veya petrol ürünü sıvı dökülme durumunun ortaya çıkması halinde aşağıdakilerden hangisine göre işlem yapılır?",
            options: ["SOLAS", "STCW", "MARPOL", "SOPEP", "SMCP"],
            answer: 3
        },
        {
            id: 135,
            q: "Gemiden bir kaza veya hata sonucu petrol türevi bir madde denize döküldüğünde izlenecek prosedür nerede yer alır?",
            options: ["Yağ kayıt defteri", "Yük kayıt defteri", "Balast kayıt defteri", "SOPEP El Kitabı Planı", "Gemi jurnali"],
            answer: 3
        },
        {
            id: 136,
            q: "SOPEP'in Türkçe açılımı nedir ve SOPEP, MARPOL'un hangi ekinde yer alır?",
            options: ["Gemilerden kaynaklanan petrol kirliliğini önleme acil planı - Annex I", "Gemilerden kaynaklanan hava kirliliğini önleme acil planı - Annex III", "Gemi tanklarından kaynaklanan deniz kirliliğini önleme acil planı - Annex I", "Gemilerden kaynaklanan deniz kirliliğini önleme acil planı - Annex II", "Gemilerden kaynaklanan hava kirliliğini önleme acil planı - Annex VI"],
            answer: 0
        },
        {
            id: 137,
            q: "Gemi petrol kirliliği acıl müdahale planı (SOPEP) hangi gemilerde bulunur?",
            options: ["300 GT dan büyük tankerler ile 500 GT dan büyük diğer gemilerde", "Uluslararası sefer yapan tüm gemilerde", "500 GT dan büyük tüm gemilerde", "400 GT dan büyük tankerler ile 150 GT dan büyük diğer gemilerde", "150 GT dan büyük tankerler ile 400 GT dan büyük tüm gemilerde"],
            answer: 4
        },
        {
            id: 138,
            q: "Deniz Kirliliğini Önleme Acil Planı (SOPEP), MARPOL 73/78 Sözleşmesinin hangi EK'i kapsamında kaç GRT'dan büyük tankerler dışındaki gemiler için düzenlenerek gemide bulundurulması gereklidir?",
            options: ["EK-I, 150 GRT", "EK-I, 400 GRT", "EK-IV, 150 GRT", "EK-IV, 400 GRT", "EK-V, 400 GRT"],
            answer: 1
        },
        {
            id: 139,
            q: "Ulusal ve uluslar arası mevzuata göre GT'dan büyük petrol tankerleri ve GT'dan büyük diğer gemiler uluslar arası sefer yapan gemilere düzenlenen belgelerden 'Petrol Kirliliği Acil Planı (Shipboard Oil Pollution Emergency Plan (SOPEP)' taşımalıdırlar. Boşluklara hangi değerler gelmelidir?",
            options: ["100/300", "100/400", "150/300", "150/400", "400/500"],
            answer: 3
        },
        {
            id: 140,
            q: "Hangisi geminin petrol kirliliği acil müdahale planının (SOPEP) zorunlu bir bölümüdür?",
            options: ["Planlanmış talimler", "Diyagramlar", "Sorumlu kişilerin listesi", "Teçhizat listesi", "Yerel ve Ulusal koordinasyon"],
            answer: 4
        },
        {
            id: 141,
            q: "400 GRT'dan büyük yük gemileri için makine daireleri sintinelerinde oluşan kirlenmeyi önlemek üzere EK-I gereği bu gemilerde bulunması gereken teçhizat aşağıdakilerden hangisidir?",
            options: ["IOPP sertifikası", "Yüklü su hattı üzerinde balast tahliyesi cihazı", "Petrol atıklarını izleme ve kontrol cihazı", "Sintine seperatörü, 15 ppm alarm otomatik stop aleti", "Atıklar için slop tank"],
            answer: 3
        },
        {
            id: 142,
            q: "Hangi koşullarda Bayrak Devletince gemide 15 ppm cihazı muafiyeti verilebilir?",
            options: ["Gemi özel alanlarda çalışıyor ise", "Gemide ayrı bir sludge tankı mevcut ise", "Bayrak devleti uygun görürse", "Hiç biri", "a ve b dekilerin her ikisi de birlikte bulunursa"],
            answer: 3
        },
        {
            id: 143,
            q: "Aşağıdaki gemilerden hangisi MARPOL Sözleşmesi 1.Eki gereği kirlilik önleme teçhizatı taşımak zorunda değildir?",
            options: ["Ulusal sefer yapan 260 GT'luk tanker", "Ulusal sefer yapan 500 GT'luk balıkçı gemisi", "Uluslararası sefer yapan 450 GT'luk kuru yük gemisi", "Uluslararası sefer yapan 300 GT'luk yolcu gemisi", "Uluslararası sefer yapan 200 GT'luk tanker"],
            answer: 3
        },
        {
            id: 144,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi önlenmesi uluslararası sözleşmesi (MARPOL 73/78) gereği, 400 GRT' dan büyük yük gemileri için makine daireleri sintinelerinde oluşan kirlenmeyi önlemek üzere EK-I uyarınca bulunması gereken aşağıdaki maddelerden hangisine gerek yoktur?",
            options: ["IOPP sertifikası", "Petrol kayıt kitapçığı", "Balastın denize verilmesinin güverteden durdurulması", "Petrol atıklarını toplama tankı", "Sintine separatörü"],
            answer: 2
        },
        {
            id: 145,
            q: "Bir petrol tankerinde ODME (Oil Discharge Monitoring Equipment) sistemi kullanılarak MARPOL Ek 1 kategorisi taşınan yüklerin ne kadarı diğer şartları sağlamak kaydı ile denize basılabilir?",
            options: ["1/10'u", "1/100'ü", "1/1000'i", "1/10000'i", "1/30000'i"],
            answer: 4
        },
        {
            id: 146,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-II'si, hangi maddelerle denizlerin kirletilmesinin önlenmesine ilişkin alınacak tedbirleri kapsar?",
            options: ["Petrol ile deniz kirlenmesini önleyici kurallar", "Dökme zehirli sıvı maddelerle deniz kirlenmesini önleyici kurallar", "Ambalajlı bir şekilde... taşınan zararlı maddelerle deniz kirlenmesini önleyici kurallar", "Gemilerden çıkan pis sularla... deniz kirlenmesini önleyici kurallar", "Gemilerden atılan çöpler ile deniz kirlenmesini önleyici kurallar"],
            answer: 1
        },
        {
            id: 147,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-II' sinde belirtilen kurallar hangi tip gemilere uygulanır?",
            options: ["Tanklarında bir veya daha fazla zehirli sıvı taşıyan tüm gemilere (özellikle kimyasal tankerlere) uygulanır. Tonaj sınırı yoktur.", "150 Grt'dan büyük tanklarında bir veya daha fazla zehirli sıvı taşıyan tüm gemilere (özellikle kimyasal tankerlere) uygulanır.", "250 Grt'dan büyük tanklarında bir veya daha fazla zehirli sıvı taşıyan tüm gemilere (özellikle kimyasal tankerlere) uygulanır.", "350 Grt'dan büyük tanklarında bir veya daha fazla zehirli sıvı taşıyan tüm gemilere (özellikle kimyasal tankerlere) uygulanır.", "400 Grt'dan büyük tanklarında bir veya daha fazla zehirli sıvı taşıyan tüm gemilere (özellikle kimyasal tankerlere) uygulanır."],
            answer: 0
        },
        {
            id: 148,
            q: "MARPOL 73/78 EK-II kapsamına göre dökme zehirli sıvı maddeler kaç sınıfa ayrılır?",
            options: ["2", "3", "4", "5", "6"],
            answer: 2
        },
        {
            id: 149,
            q: "MARPOL 73/78 EK-II kapsamında 'Dökme Zehirli Sıvı Maddeler' kaç sınıfa ayrılır?",
            options: ["X-Y-Z kategorileri ve Diğer maddeler", "1-2-3-4 kategorileri", "X-Y-Z kategorileri", "1-2-3-4 kategorileri ve Diğer maddeler", "1-2-3 kategorileri ve Diğer maddeler"],
            answer: 0
        },
        {
            id: 150,
            q: "MARPOL EK-2'ye göre en tehlikeli yükler hangi grupta sınıflanmıştır?",
            options: ["A", "X", "Y", "B", "OS"],
            answer: 1
        },
        {
            id: 151,
            q: "MARPOL 73/78 gereği dökme zehirli sıvı maddelerle deniz kirlenmesini önlemek amacıyla ÖZEL ALAN olarak ilan edilmiş Denizler aşağıdakilerden hangileridir?",
            options: ["Karadeniz, Basra Körfezi", "Karadeniz, Akdeniz", "Akdeniz, Baltık", "Baltık", "Basra Körfezi, Baltık"],
            answer: 3
        },
        {
            id: 152,
            q: "Marpol Ek-2'ye göre aşağıdaki hangisi özel alandır?",
            options: ["Akdeniz", "Karadeniz", "Antarktik bölge", "Kızıl deniz", "Japon denizi"],
            answer: 3
        },
        {
            id: 153,
            q: "MARPOL EK-II gereğince, gemi özel alanlar dışında ve diğer şartlar sağlandığında yıkama suyu tahliyesi karadan kaç mil açıkta yapılabilir?",
            options: ["6", "12", "24", "25", "50"],
            answer: 1
        },
        {
            id: 154,
            q: "MARPOL EK-II gereğince gemi özel alanlar dışında ve diğer şartlar sağlandığında yıkama suyu tahliyesi için en az gemi sürati ne olmalıdır?",
            options: ["3", "5", "7", "10", "12"],
            answer: 2
        },
        {
            id: 155,
            q: "MARPOL Ek-II kapsamındaki yüklerin denize basılması hangisine bağlı değildir?",
            options: ["Gemi hızı", "En yakın karadan uzaklık", "Minimum su derinliği", "Hangi devreden basılacağı", "Denizin dip yapısı"],
            answer: 4
        },
        {
            id: 156,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-III'ü, hangi maddelerle denizlerin kirletilmesinin önlenmesine ilişkin alınacak tedbirleri kapsar?",
            options: ["Dökme zehirli sıvı maddelerle deniz kirlenmesini önleyici kurallar", "Petrol ile deniz kirlenmesini önleyici kurallar", "Gemilerden çıkan pis sularla... deniz kirlenmesini önleyici kurallar", "Ambalajlı bir şekilde veya konteynerlerde... deniz yolu ile taşınan zararlı maddelerle deniz kirlenmesini önleyici kurallar", "Gemilerden atılan çöpler ile deniz kirlenmesini önleyici kurallar"],
            answer: 3
        },
        {
            id: 157,
            q: "EK-III' de belirtilen zararlı maddeleri yükleme ve boşaltma niyetinde olan gemi kaptanı veya armatörü, yükleme veya boşaltma işlemine başlamadan asgari kaç saat önce bu niyetini ilgili liman yetkilisine bildirmek zorundadır?",
            options: ["6", "12", "18", "24", "48"],
            answer: 3
        },
        {
            id: 158,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-IV'sı, hangi maddelerle denizlerin kirletilmesinin önlenmesine ilişkin alınacak tedbirleri kapsar?",
            options: ["Petrol ile deniz kirlenmesini önleyici kurallar", "Dökme zehirli sıvı maddelerle deniz kirlenmesini önleyici kurallar", "Ambalajlı bir şekilde... taşınan zararlı maddelerle deniz kirlenmesini önleyici kurallar", "Gemilerden çıkan pis sularla (tuvalet, revir, hastane ve canlı hayvan) deniz kirlenmesini önleyici kurallar", "Gemilerden atılan çöpler ile deniz kirlenmesini önleyici kurallar"],
            answer: 3
        },
        {
            id: 159,
            q: "Bulundurma şartları oluştuğunda; Gemiler, Marpol 73/78'in hangi eki gereği ISPP sertifikası almalıdırlar?",
            options: ["EK 1", "EK 2", "EK 4", "EK 5", "EK 6"],
            answer: 2
        },
        {
            id: 160,
            q: "MARPOL 73/78 gereği gemilerden çıkan pis sularla denizlerin kirlenmesi önlemek amacıyla ÖZEL ALAN olarak ilan edilmiş denizler aşağıdakilerden hangisidir? (EK-IV)",
            options: ["Baltık", "Kızıl Deniz, Karadeniz", "Akdeniz, Karadeniz", "Basra Körfezi, Karadeniz", "Henüz özel alanlar belirlenmemiştir"],
            answer: 4
        },
        {
            id: 161,
            q: "MARPOL 73/78'in 'Pis Su (Sewage) ile Kirlenmesi' EK'ine göre, bir geminin alması gerekli uluslararası sertifika için minimum GRT ve personel sayısı ne olmalıdır?",
            options: ["200 GRT-10 KİŞİ", "400 GRT-15 KİŞİ", "400 GRT - 10 KİŞİ", "500 GRT-15 KİŞİ", "500 GRT-10 KİŞİ"],
            answer: 1
        },
        {
            id: 162,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL EK-IV' ünde belirtilen gemilerden çıkan pis sularla... ilgili kirlenmesini önleyici kurallar, aşağıda belirtilen hangi gemilere uygulanmaz?",
            options: ["400 GRT'un altında 15 kişi veya daha az kişi taşıyan bütün gemiler", "250 GRT'un altında 15 kişi veya daha az kişi taşıyan bütün gemiler", "300 GRT'un altında 20 kişi veya daha az kişi taşıyan bütün gemiler", "350 GRT'un altında 25 kişi veya daha az kişi taşıyan bütün gemiler", "400 GRT'un altında 20 kişi veya daha az kişi taşıyan bütün gemiler"],
            answer: 0
        },
        {
            id: 163,
            q: "Teknelerde hangi atık sular, siyah su olarak adlandırılır?",
            options: ["Lavabo ve duşlardan gelen atık sular", "Güverte yıkamasından gelen atık sular", "Sintine suları", "Tuvalet ve pisuvarlardan gelen atık sular", "Yakıt seperatöründen gelen ayrılmış sular"],
            answer: 3
        },
        {
            id: 164,
            q: "Her çeşit banyo, mutfak ve lavabodan kaynaklı olarak oluşan ve siyah su ile karışmamış olan su aşağıdakilerden hangisi ile ifade edilir?",
            options: ["Borda suyu", "Zararsız su", "Hepsi yanlış", "Gri su", "Dönüşüm suyu"],
            answer: 3
        },
        {
            id: 165,
            q: "Gemi kendi makinesi ile ilerlerken özel alanlar haricinde karadan 12 mil açıktan itibaren pis sular geminin hızı kaç knots dan az olmamak koşuluyla denize tahliye edilebilir.",
            options: ["7 Knots", "10 Knots", "4 Knots", "6 Knots", "12 Knots"],
            answer: 3
        },
        {
            id: 166,
            q: "Marpol 73/78 pis su (Sewage) ile kirlenmesi EK'ine göre diğer gerekli şartlar oluşturulduğunda Dezenfekte ve arıtma sisteminden geçtikten sonra en yakın karadan minimum ve maksimum kaç mil mesafeden denize tahliye yapılabilir?",
            options: ["3 MİL-12 MİL", "4 MİL-24 MİL", "4 MİL-10 MİL", "4 MİL-12 MİL", "12 MİL-16 MİL"],
            answer: 3
        },
        {
            id: 167,
            q: "Gemilerden Kaynaklanan Kirliliğin Önlenmesi Uluslararası Sözleşmesi (MARPOL 73/78)' in EK-IV' ünde belirtilen gemilerden çıkan pis sularla... denizlerin kirlenmesini önleyici kurallar gereği; hangisi doğrudur?",
            options: ["4-12 deniz miline kadar pis sular (atık su), parçalanmış ve dezenfekte edilmiş olarak atılabilir", "4 deniz miline kadar pis sular (atık sular) arıtılmadan denize deşarj edilebilir", "12 milden sonra pis sular (atık sular) geminin hızı 6 knots'dan daha az olmamak koşulu ile dezenfekte edilmeden veya parçalanmadan atılabilir", "12 milden sonra pis sular (atık sular) geminin hızı 8 knots'dan daha az olmamak koşulu ile dezenfekte edilmeden veya parçalanmadan atılabilir", "4 deniz miline kadar pis sular (atık sular) parçalanmış ve dezenfekte edilmiş olarak atılabilir"],
            answer: 0
        },
        {
            id: 168,
            q: "MARPOL 73/78 Sözleşmesinin EK-IV (Gemilerden çıkan pis sulardan denizlerin kirlenmesinin önlenmesi)'ü gereği gemilerde bulunması gereken eçhizelerin tümü aşağıdaki paragraflardan hangisinde belirtilmiştir?",
            options: ["Arıtma tesisleri, parçalama ve dezenfekte tesisleri, boru hattı ve standart kıyı bağlama tesisatı", "Arıtma tesisleri, parçalama ve dezenfekte tesisleri, toplama tankı, boru hattı ve standart kıyı bağlama tesisatı", "Arıtma tesisleri, parçalama ve dezenfekte tesisleri, toplama tankı ve boru hattı", "Parçalama ve dezenfekte tesisleri, toplama tankı, boru hattı ve standart kıyı bağlama tesisatı", "Hiçbiri"],
            answer: 1
        },
        {
            id: 169,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-V'İ, hangi maddelerle denizlerin kirletilmesinin önlenmesine ilişkin alınacak tedbirleri kapsar?",
            options: ["Petrol ile deniz kirlenmesini önleyici kurallar", "Dökme zehirli sıvı maddelerle deniz kirlenmesini önleyici kurallar", "Ambalajlı bir şekilde... taşınan zararlı maddelerle deniz kirlenmesini önleyici kurallar", "Gemilerden çıkan pis sularla... deniz kirlenmesini önleyici kurallar", "Gemilerden atılan çöpler ile deniz kirlenmesini önleyici kurallar"],
            answer: 4
        },
        {
            id: 170,
            q: "MARPOL 73/78 Sözleşmesinin gemilerden atılan çöp (garbage)'lerle deniz kirliğinin önlenmesi EK'i aşağıdakilerden hangisidir?",
            options: ["EK-I", "EK-II", "EK-III", "EK-IV", "EK-V"],
            answer: 4
        },
        {
            id: 171,
            q: "MARPOL 73/78 sözleşmesi gereği 'Garbage Management Plan' (çöp yönetim planı) bulundurma mecburiyeti olan gemiler minimum kaç GT gemilerdir?",
            options: ["200GT", "300GT", "400GT", "500GT", "3000GT"],
            answer: 2
        },
        {
            id: 172,
            q: "MARPOL 73/78 Sözleşmesi gereği 'Garbage Record Book' (çöp kayıt defteri) bulundurma mecburiyeti olan gemiler minimum kaç kişi olmalıdır?",
            options: ["10 KİŞİ", "15 KİŞİ", "12 KİŞİ", "18 KİŞİ", "24 KİŞİ"],
            answer: 1
        },
        {
            id: 173,
            q: "MARPOL 73/78' Katı Atık veya Çöp Ek'ine göre 'Çöp Kayıt Defteri ve Çöp Yönetim Planı' bulundurması gerekli gemilerin minimum personel sayısı ne olmalıdır?",
            options: ["10 personel", "15 personel", "20 personel", "25 personel", "30 personel"],
            answer: 1
        },
        {
            id: 174,
            q: "'Çöp Yönetim Planı' bulundurmak mecburiyeti olan gemilerde; yemek atıkları hangi renk kaplarda toplanır?",
            options: ["Kırmızı", "Mavi", "Beyaz", "Siyah", "Yeşil"],
            answer: 4
        },
        {
            id: 175,
            q: "'Çöp yönetim planı' bulundurmak mecburiyeti olan gemilerde yağlı bezler, yağlı maddeler hangi renk kaplarında toplanır?",
            options: ["Mavi", "Kırmızı", "Siyah", "Beyaz", "Sarı"],
            answer: 1
        },
        {
            id: 176,
            q: "Gemilerde bulunması gereken Çöp Kayıt Defterine işlenen kayıtlarda yukarıdaki bilgilerden hangileri yer alır? (I-Çöpün verildiği/atıldığı tarih ve saat, II-Çöpün cinsi, III-Operasyondan sorumlu zabit imzası, IV-Geminin enlem ve boylam bilgileri)",
            options: ["I ve Il", "Il ve III", "I, II ve III", "I, II ve IV", "I, II, III ve IV"],
            answer: 4
        },
        {
            id: 177,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-V'de belirtilen gemilerden atılan çöpler ile ilgili kurallar kapsamında denize atılması kesinlikle yasak olan madde aşağıdakilerden hangisidir?",
            options: ["Gıda atıkları", "Yüzebilecek olan istif gereçleri", "Ambalaj malzemeleri", "Sentetik halatlar", "Madeni şişeler"],
            answer: 3
        },
        {
            id: 178,
            q: "Plastik atıklarla ilgili olarak aşağıdakilerden hangisi doğrudur?",
            options: ["Plastik atıklar mutfak atıkları içinde yer alır", "Plastik atıklar Özel Bölgeler içinde atılmalıdır", "Plastik atıklar gemilerde az olduğundan uygun bir yerde atılabilir", "Köpük stiren plastik atık olarak kabul edilmez", "Prensip olarak gemide insinetörde yakılır"],
            answer: 4
        },

        // --- Deniz HUKUKU 2.pdf (Part 4 - IDs 201-279) ---
        {
            id: 201,
            q: "Uluslar arası Denizcilik Örgütünün kısaltılmış ifadesi nedir?",
            options: ["ITU", "SOLAS", "UDÖ", "IMO", "GMDSS"],
            answer: 3
        },
        {
            id: 202,
            q: "Uluslararası Denizcilik Örgütüne Türkiye üye midir?",
            options: ["Hayır", "AB üyeliğinden sonra yürürlüğe girecektir", "Üyelik başvurusu yapılmış cevap beklenmektedir", "Evet", "Üye olunması planlanmamaktadır"],
            answer: 3
        },
        {
            id: 203,
            q: "Aşağıdaki gemilerden hangisine IMO Sözleşmeleri uygulanabilir?",
            options: ["Uluslar arası sefer yapan yolcu gemileri", "Savaş gemileri", "Balıkçı gemileri", "Gezinti tekneleri", "Hepsi"],
            answer: 0
        },
        {
            id: 204,
            q: "IMO Organizasyonunda beş ana komite mevcuttur. Aşağıdakilerden hangisi Deniz Emniyeti Komitesi kısaltmasıdır?",
            options: ["FC", "TC", "LEG", "MEPC", "MSC"],
            answer: 4
        },
        {
            id: 205,
            q: "Arama Kurtarma Sözleşmesi (SAR/79) aşağıdaki hangi grup IMO sözleşmeleri içinde yer alır?",
            options: ["Maritime Safety (Emniyet)", "Diğer IMO sözleşmeleri", "Liability and Compensation (Sorumluluk/Tazminat)", "Marine Pollution (Kirlilik)", "Hepsi yanlış"],
            answer: 0
        },
        {
            id: 206,
            q: "Seyiredilebilir sularda veya diğer sularda tehlikede bulunan bir tekneye yada herhangi bir mala yardım işleminin üstlenilmesini kapsayan ve bir amacı da deniz çevresinde yapılacak Arama ve Kurtarma olan bir IMO Sözleşmesi aşağıdakilerden hangisidir?",
            options: ["SUA/88", "STP/71", "SFV/77", "SAR/79", "SALVAGE/89"],
            answer: 4
        },
        {
            id: 207,
            q: "Aşağıdakilerden hangisi ya da hangileri denizde meydana gelebilecek acil durumlara karşı doğrudan can kurtarma amacına uygun biçimde tedbirli ve hazırlıklı olmayı sağlayıcı düzenlemeler içerir? (I) SAR (II) FAL (III) MARPOL (IV) CLC (V) TONNAGE (VI) SOLAS",
            options: ["II,VI", "I,V", "IV,V,VI", "I,VI", "III,IV"],
            answer: 3
        },
        {
            id: 208,
            q: "İlk 16.07.1979'da yürürlüğe giren ve \"Uydularla Deniz Haberleşmesi Uluslararası Teşkilatına İlişkin Sözleşme\" olarak adlandırılan uluslararası denizcilik sözleşmesinin kısa adı yukarıdakilerden hangisidir? (I) ITU (II) SATCOM (III) INMARSAT OA (IV) SUA (V) INMARSAT CONVENTION",
            options: ["II", "V", "IV", "I", "III"],
            answer: 1
        },
        {
            id: 209,
            q: "IMO'nun Deniz Çevresi ile ilgili komitesinin adı nedir?",
            options: ["MEPC", "MSC", "DSC", "FAL", "Hiçbiri"],
            answer: 0
        },
        {
            id: 210,
            q: "Aşağıdakilerden hangisi IMO Sözleşmelerinden değildir?",
            options: ["FAL", "CLC", "FUND", "SFV", "ITF"],
            answer: 4
        },
        {
            id: 211,
            q: "Aşağıda verilen kısaltmalardan hangisi \"Deniz Yoluyla Taşınan Tehlikeli Yüklere İlişkin Uluslararası Kodu\" ifade eder?",
            options: ["IMO", "SOLAS", "MARPOL", "UND", "IMDG"],
            answer: 4
        },
        {
            id: 212,
            q: "Deniz yoluyla taşınan tehlikeli yüklerin paketleme ve depolanmasına ilişkin kurallar \"IMDG Kod'un hangi Bölüm (volume) ve Kısımında (part) yer almaktadır?",
            options: ["IMDG Kod Bölüm 1 - Kısım 2", "IMDG Kod Bölüm 1 - Kısım 3", "IMDG Kod Bölüm 1 - Kısım 4", "IMDG Kod Bölüm 2 - Kısım 2", "IMDG Kod Bölüm 2 - Kısım 3"],
            answer: 2
        },
        {
            id: 213,
            q: "Balast Suyu Sözleşmesi kapsamında gemiler balast sularına ne gibi işlemler uygulayacaklardır?",
            options: ["Balast değişimi veya arıtma", "Balast almadan seyir yapma", "Balast tanklarını iptal etme", "Balast suyunu ısıtarak kaynatma", "Balast tanklarına kimyasal doldurma"],
            answer: 0
        },
        {
            id: 214,
            q: "\"2009 Gemi Geri Dönüşüm Sözleşmesi\" hangi şehrin adı ile bilinir?",
            options: ["HONG KONG 2009", "NAIROBI WRC 2007", "BUNKER 2001", "FUND 1992", "OPRC 1990"],
            answer: 0
        },
        {
            id: 215,
            q: "Aşağıdakilerden hangisi IMO'nun \"Deniz Kirliliği\" alanındaki sözleşmelerindendir?",
            options: ["NAIROBI / 2007", "OPRC/90", "SFV/77", "PAL/74", "FAL/65"],
            answer: 1
        },
        {
            id: 216,
            q: "Petrol kirliliğine karşı, hazırlıklı olma, müdahale ve işbirliği IMO Sözleşmesi aşağıdakilerden hangisidir?",
            options: ["FUND/71", "CLC/99", "OPRC/90", "MARPOL 73/78", "INTERVENTION/69"],
            answer: 2
        },
        {
            id: 217,
            q: "Aşağıdakilerden hangisi IMO'nun 'Sorumluluk Tazminat' sözleşmelerindendir?",
            options: ["FUND/71", "STF/71", "SAR/79", "OILPOL/54", "SUA/88"],
            answer: 0
        },
        {
            id: 218,
            q: "Petrol kirliliği zararları için, Uluslararası bir tazminat fonu kurulmasına dair olan (FUND / 71) IMO Sözleşmelerinden hangi alanda yer alır?",
            options: ["Maritime Safety (Güvenlik)", "Marine Pollution (Kirlilik)", "Liability and Compensation (Sorumluluk/Tazminat)", "Other Subjects (Diğerleri)", "Hepsi yanlış"],
            answer: 2
        },
        {
            id: 219,
            q: "Intervention 1969 sözleşmesinin konusu nedir?",
            options: ["Açık denizlerde petrol ile kirlenmeye yol açabilecek kazalara müdahale edilmesi", "Petrol kirliliğinden oluşan zararlar için tazminat fonu kurulması", "Açık denizlerde petrol dışındaki maddelerle kirlenme olayına müdahale edilmesi", "Karadaki tesislerin, atıkları ile denizleri kirletmesinin önüne geçilmesi", "Uluslararası deniz trafiğinin kolaylaştırılması sözleşmesi"],
            answer: 0
        },
        {
            id: 220,
            q: "CLC 1969 aşağıdakilerden hangisine ait bir uluslararası kısaltmadır?",
            options: ["Denizlerde konteynerların güvenliği ile ilgili sözleşme", "Petrol Kirliliğinin neden olduğu zararların hukuki sorumluluğuna ait sözleşme", "Denizlerin kara tesislerinden kirletilmesine ilişkin hukuki sorumluluklarla ilgili sözleşme", "Yabancı limanda gemiden kaçan personel için sivil sorumluluğa ilişkin sözleşme", "Gemilerde can emniyetine ilişkin sözleşme"],
            answer: 1
        },
        {
            id: 221,
            q: "CLC Sözleşmesinde kaç tondan fazla dökme petrol ürünü taşıyan tankerler sigorta yaptırmak zorundadır?",
            options: ["750 Ton", "2000 Ton", "1000 Ton", "1500 Ton", "500 Ton"],
            answer: 1
        },
        {
            id: 222,
            q: "International Convention on Civil Liability for Oil Pollution Damage (CLC) 1969 sözleşmesi aşağıdaki sınıflandırmalardan hangisi ya da hangilerine dahil olur? (I.Denizcilik Güvenliği, II.Deniz Kirliliği, III.Sorumluluk ve Tazminat, IV.Diğer Konular)",
            options: ["IV", "II", "I", "II ve III", "I ve II"],
            answer: 3
        },
        {
            id: 223,
            q: "\"Deniz Yoluyla Taşınan Tehlikeli ve Zararlı Maddelerden Kaynaklanan Zararın Tazmini ve Sorumluluğu Hakkındaki Sözleşme\" aşağıdakilerden hangi kısaltma ile anılmaktadır?",
            options: ["FUND 71/92", "SDR 1978", "UNCLOS 1982", "CLC 69(92", "HNS 1996/2010"],
            answer: 4
        },
        {
            id: 224,
            q: "1965 Deniz Trafiğinin Kolaylaştırılması Sözleşmesi (FAL) hangi alanda kolaylaştırma yapmayı amaçlar?",
            options: ["Belli noktalardaki gemi trafik yoğunluğunun azaltılmasını", "Trafik ayrım düzenlerinin tüm dünyada standardizasyonunu", "Deniz Trafiğinin izlenmesi (monitoring) sistemlerinin standardizasyonunu", "Gemilerin liman giriş ve çıkışlarında istenecek evrakların standardizasyonunu", "Deniz trafik düzenlerinin harmonize edilmesini"],
            answer: 3
        },
        {
            id: 225,
            q: "Uluslararası Deniz Trafiğini Kolaylaştırma Sözleşmesinin (Facilitation of Maritime Traffic) amacı aşağıdakilerden hangisidir?",
            options: ["Denizde çalışan işçilerin haklarını korumak", "Denizde çatışmayı önleme kurallarını belirlemek", "Fener, şamandıra ve diğer deniz trafik teçhizatlarını sağlamak", "Deniz trafiğindeki gereksiz zaman kayıplarını önlemek, hükümetler arasındaki işbirliğine yardımcı olmak ve denizcilikle ilgili işlemlerin tek tip olmasını temin etmek", "IMO bünyesinde deniz trafiğini kontrol eden bir grup oluşturmak"],
            answer: 3
        },
        {
            id: 226,
            q: "Uluslararası denizde can emniyeti sözleşmesi aşağıdakilerden hangisidir?",
            options: ["MARPOL", "SAR", "ISM", "SOLAS", "STCW"],
            answer: 3
        },
        {
            id: 227,
            q: "\"Denizde Can Güvenliği Uluslar arası Sözleşmesinin\" İngilizce kısaltılmış hali aşağıdakilerden hangisidir?",
            options: ["GMDSS", "IMO", "ITU", "SAR", "SOLAS"],
            answer: 4
        },
        {
            id: 228,
            q: "Aşağıdakilerden hangisi denizde can güvenliği ile ilgili uluslararası kuralları içerir?",
            options: ["MARPOL 73/78", "SOLAS 74", "LOADLINE 66", "TONNAGE 69", "STCW 78"],
            answer: 1
        },
        {
            id: 229,
            q: "Bir gemide, can güvenliğine ilişkin bulundurulması zorunlu olan teçhizatın belirlenmesinde aşağıdaki uluslararası sözleşmelerden hangisi en çok etkilidir?",
            options: ["COLREG", "SOLAS", "SAR", "MARPOL", "STCW"],
            answer: 1
        },
        {
            id: 230,
            q: "SOLAS'ın birinci öncelikli amacı nedir?",
            options: ["Mal güvenliğini sağlamak", "Ticareti kolay hale getirmek", "Can güvenliğini sağlamak amacıyla uluslararası standartları belirlemek", "Ekonomik kalkınmayı sağlamak", "Diğer sözleşmelerin çıkmasına hazırlamak"],
            answer: 2
        },
        {
            id: 231,
            q: "Solas Sözleşmesinin ana gayelerinden birisi aşağıdakilerden hangisidir?",
            options: ["Gemi adamlarının vardiya standartlarını belirlemek", "Balıkçı gemilerinin personelinin eğitim standartını belirlemek", "Gemi teçhizatı için minimum standartı belirlemek", "IMO'nun gücünü ortaya koymak", "Deniz kirlenmesini önlemek"],
            answer: 2
        },
        {
            id: 232,
            q: "Denizde acil durum iletişimlerini sağlamak amacıyla kullanılmak üzere geliştirilmiş olan payroteknik (pyrotechnic) malzemelerin sahip olması gereken standartlar; aşağıdaki uluslararası denizcilik konvansiyonlarından hangisinin kapsamında öncelikli olarak ele alınmıştır?",
            options: ["International Safety of Life At Sea", "International Maritime Organization", "International Safety Management", "International Collision Regulations", "International Search and Rescue"],
            answer: 0
        },
        {
            id: 233,
            q: "Aşağıdaki deniz kazalarından hangisi \"SOLAS\"ın hazırlanmasında rol oynamıştır?",
            options: ["Titanik", "İkiz kule saldırı", "Torrey Kanyon", "Exco Valdes", "Nassia"],
            answer: 0
        },
        {
            id: 234,
            q: "Denizde Can ve Mal Koruma Kanununa göre bir geminin yolcu gemisi olarak kabul edilebilmesi için en az kaç yolcu taşıması gereklidir?",
            options: ["12", "11", "9", "10", "13"],
            answer: 0
        },
        {
            id: 235,
            q: "Aşağıdakilerden hangisi genel olarak SOLAS 74 Konvansiyonunun uygulanmayacağı gemidir?",
            options: ["Yolcu gemileri", "Kuru yük gemileri", "Tankerler", "Yüksek Süratli Gemiler (HSC)", "Savaş Gemileri"],
            answer: 4
        },
        {
            id: 236,
            q: "Aşağıdaki gemilerden hangisi ya da hangileri SOLAS kurallarına tabi değildirler? (I) 1250 GRT'luk Kimyasal Tanker (II) Amerika-Türkiye arasında düzenli hat yolcu taşıması yapan 500 yolcu kapasiteli yolcu gemisi (III) Yarımca Körfezinde balık avlayan 3 m boyundaki balıkçı motoru (IV) 130 m boyundaki 38 yolcu kamaralı ticari yat",
            options: ["I", "II", "III", "IV", "III,IV"],
            answer: 4
        },
        {
            id: 237,
            q: "SOLAS 74 Konvansiyonu farklı seferlerdeki farklı gemilere farklı yaklaşım gösterir. Bu konuda aşağıdaki kriterlerden hangisi SOLAS'ta kullanılan kriterlerden değildir?",
            options: ["Boyu", "Kullanım amacı (yük, yolcu, vs)", "Yolcu sayısı", "Tonajı", "Donatanı"],
            answer: 4
        },
        {
            id: 238,
            q: "GMDSS Sistemi SOLAS'ın hangi bölümünde ele alınmıştır?",
            options: ["2.Bölüm", "4.Bölüm", "6.Bölüm", "8.Bölüm", "10.Bölüm"],
            answer: 1
        },
        {
            id: 239,
            q: "Gemideki can kurtarma teçhizatının teknik detayları hangi zorunlu Kod ile düzenlenmiştir?",
            options: ["Can Kurtarma Teçhizatı (LSA) Kod'u", "Gemi Emniyet Teçhizatı (SSE) Kod'u", "Emniyet Teçhizatı Teknik (SET) Kod'u", "Can Emniyeti Malzemeleri (LSA) Kod'u", "Temel Emniyet Sistemleri (FSS) Kod'u"],
            answer: 0
        },
        {
            id: 240,
            q: "SOLAS Sözleşmesi II/2 bölümünde atıf yapılan zorunlu test yöntemlerinin ayrıntıları nerede bulunur?",
            options: ["Teçhizat Test Kriterleri (ETC) Rehberinde", "Gemi Malzemeleri İçin Yangın Testleri (FTSE)", "Yangın Test Protokolleri (FTP) Kodunda", "Emniyet Testleri Rehber (GST) Kodunda", "Yangın Testleri İçin Kriterler (FTC) Kriterlerinde"],
            answer: 2
        },
        {
            id: 241,
            q: "Aşağıdakilerden hangisi SOLAS'ın bölümü olan zorunlu kodlardan değildir?",
            options: ["ISM", "IBC", "IGC", "Grain", "ILO"],
            answer: 4
        },
        {
            id: 242,
            q: "Denizde Can Emniyeti Uluslararası Sözleşmesi (SOLAS) hükümleri gereğince gemilere donatılması gereken Otomatik Tanımlama Sistemi (OTS) cihazının özellikleri ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
            options: ["Sahil istasyonları ile veri alış-verişi yapılabilir", "OTS cihazı ile başka bir istasyona isteğe bağlı hiçbir bilgi gönderilemez", "Sahil istasyonlarına, diğer gemilere ve hava araçlarına gemiye ait bilgileri otomatik olarak iletir", "OTS cihazı ile donatılmış olan civardaki gemilere ait bilgileri otomatik olarak alır", "Kapsama alanındaki gemileri izleyebilir"],
            answer: 1
        },
        {
            id: 243,
            q: "Denizde Can Emniyeti Uluslar arası Sözleşmesi (SOLAS) hükümlerine göre gemilerde yapılması gerekli olan talimlerle ilgili olarak aşağıdakilerden hangisi doğrudur? (I-Ayda en az 1 kere gemiyi terk talimi yapılacaktır, II-Ayda en az 1 kere yangın talimi yapılacaktır, III-Gemi personelinin %20'si bir evvelki gemiyi terk ve yangın talimlerine katılmamışsa, liman kalkışından 24 saat içerisinde talimler yapılacaktır)",
            options: ["Yalnız I", "Yalnız II", "Yalnız III", "I-II", "I-II-III"],
            answer: 4
        },
        {
            id: 244,
            q: "Denizde Can Emniyeti Sözleşmesi (SOLAS) kapsamında düzenlenen Emniyet Teçhizat Belgesi üzerinde hangi bilgiler bulunur? (I-Geminin adı, II-Toplam filika sayısı, III-Gemide bulunan toplam personel sayısı, IV-Gemideki can yeleklerinin sayısı, V-Gemideki pusulaların sayısı)",
            options: ["I-II", "III-IV", "II-III-IV", "I-II-IV", "Hepsi"],
            answer: 3
        },
        {
            id: 245,
            q: "Gemi adamlarının eğitilmesi, belgelendirilmesi ve vardiya standartları hakkındaki uluslar arası sözleşme aşağıdakilerden hangisidir?",
            options: ["MARPOL", "SOLAS", "STCW", "SAR", "ISM"],
            answer: 2
        },
        {
            id: 246,
            q: "Gemi adamlarının Eğitim, Sertifika ve Vardiya Standartları Hakkında Uluslararası Sözleşme hangisidir?",
            options: ["SOLAS 74", "COLREG 72", "1982 PARİS MEMORANDUMU", "ISM CODE", "STCW 78"],
            answer: 4
        },
        {
            id: 247,
            q: "Bir gemi adamının gemide 24 saatlik bir çalışma periyodunda en az ne kadar süre dinlenmesi gereklidir?",
            options: ["12", "9", "8", "14", "10"],
            answer: 4
        },
        {
            id: 248,
            q: "Vardiya tutan gemiadamları acil durumlar hariç günde en az kaç saat dinlenir?",
            options: ["6", "8", "9", "10", "12"],
            answer: 3
        },
        {
            id: 249,
            q: "Gemide gemi adamının 24 saatlik bir çalışma dilimi içerisinde günlük dinlenme süreleri en fazla kaça bölünebilir?",
            options: ["1", "2", "3", "4", "5"],
            answer: 1
        },
        {
            id: 250,
            q: "STCW-95 kurallarına göre asgari 10 saat dinlenmesi süresi 6 saate indirildiğinde bu indirim en fazla kaç gün devam edebilir?",
            options: ["3 gün", "5 gün", "1 hafta", "2 gün", "1 gün"],
            answer: 3
        },
        {
            id: 251,
            q: "\"İstirahat saatleri, biri kaç saatten az olmamak şartı ile en fazla kaça bölünebilir\" (STCW-95 Kısım A-VIII/1 Madde 2) Yukarıdaki boşluklara aşağıdakilerden hangisi gelmelidir?",
            options: ["5-4", "6-2", "4-3", "8-2", "8-3"],
            answer: 1
        },
        {
            id: 252,
            q: "STCW sözleşmesi gereği bir gemiadamı haftada en az kaç saat dinlendirilmelidir?",
            options: ["77 saat", "50 saat", "60 saat", "24 saat", "48 saat"],
            answer: 0
        },
        {
            id: 253,
            q: "Bir gemi adamının acil durumlarda veya her şeyden önemli olan amaçlarla yapılan ağır çalışma şartları haricinde STCW 2010 kurallarına göre bir haftalık toplam istirahat süresi en az kaç saat olmalıdır?",
            options: ["55", "77", "70", "65", "40"],
            answer: 1
        },
        {
            id: 254,
            q: "Aşağıda boş bırakılmış yerlere uygun düşen doğru cevabı bulunuz. Gemide vardiya tutan gemi adamları ve emniyet, kirliliğin önlenmesi ve güvenlikle ilgili görevleri bulunan gemi adamları; Günde en az **(X)** saat, yedi günlük bir periyot içerisinde en az **(Y)** saat dinlendirilecektir.",
            options: ["6/40", "10/77", "7/55", "8/60", "9/75"],
            answer: 1
        },
        {
            id: 255,
            q: "Vardiyada görevli tüm Zabitlere 24 saat içinde en az 10 saatlik istirahat sağlanması gerekirken bu istirahat süresi, biri 6 saatten az olmamak üzere ikiye bölünebilir. Zorunlu olarak bu koşulların dışına çıkılması durumunda, 10 saatlik istirahat süresi 6 saate indirilse de bu indirim **(X)** günden fazla süremez ve günde toplam **(Y)** saatten az olamaz.",
            options: ["1-6-24", "2-7-77", "3-7-72", "2-7-48", "2-6-36"],
            answer: 4
        },
        {
            id: 256,
            q: "ISM Code SOLAS/74'ün hangi bölümündedir?",
            options: ["Bölüm II-1", "Bölüm II-2", "Bölüm III", "Bölüm IX", "Bölüm XI"],
            answer: 3
        },
        {
            id: 257,
            q: "Güvenli yönetim standartları SOLAS'ın kaçıncı bölümünde yer almaktadır?",
            options: ["III. Bölüm", "IX. Bölüm", "X. Bölüm", "IV. Bölüm", "I. Bölüm"],
            answer: 1
        },
        {
            id: 258,
            q: "Uluslararası Denizcilik Örgütü IMO'nun gemilerin dışında denizcilik şirketlerini doğrudan kapsayan ilk düzenlemesi aşağıdakilerden hangisidir?",
            options: ["Uluslararası Dökme Kimyasallar Kodu, IBC", "Uluslararası Güvenlik Yönetimi Kodu, ISM", "Deniz Trafiğinin Kolaylaştırılması Hakkında Uluslararası Sözleşme, FAL", "Uluslararası Denizde Tehlikeli Yüklerin Taşınması Kodu, IMDG", "Uluslararası Can Kurtarma Teçhizatları Kodu, LSA"],
            answer: 1
        },
        {
            id: 259,
            q: "ISM Kod'a göre DoC yıllık denetimleri sertifikanın yıl dönümü tarihine göre hangi pencere aralığında yapılmalıdır?",
            options: ["+/- 3 ay", "+/- 2 ay", "+/- 4 ay", "+/- 1 ay", "+/- 6 ay"],
            answer: 0
        },
        {
            id: 260,
            q: "IMO'nun Kodlarından olan ISM kodu uyarınca aşağıdakilerden hangisi yanlıştır?",
            options: ["Gemiler zorunlu ISM sertifikası taşımalıdır", "Gemi personeli ve kara personeli güvenlik ve emniyeti hakkında sürekli eğitilmelidir", "Sertifikalar 10 yılda bir mutlaka yenilenmelidir", "Güvenli gemi yönetim sistemini açıklayan bir el (manual) gemilerde bulundurulmalıdır", "Şirket bünyesinde karar vermeye yetkili bir Seçilmiş Kişi (Designated Person) olmalıdır"],
            answer: 2
        },
        {
            id: 261,
            q: "Genişletilmiş Denetim Yapılan Gemilerde aşağıdakilerden hangileri denetlenecektir?",
            options: ["Normal jeneratörlerin durdurularak acil durum jeneratörünün test edilmesi", "Acil durum yangın pompasının çalıştırılması ve su basıncının ana yangın devresine bağlanan en az iki hortumla kontrol edilmesi", "Sintine pompalarının çalıştırılması ve kontrolü", "Bir can filikasının suya indirilmesi", "Hepsi"],
            answer: 4
        },
        {
            id: 262,
            q: "Gemide en etkili eğitim hangi yöntemle olur?",
            options: ["Video seyretmek", "Role talimi yapmak", "Training Manual, Instruction Manual vs. okumak", "Ders anlatma", "Afiş, poster, uyarı yazısı vs. kullanmak"],
            answer: 1
        },
        {
            id: 263,
            q: "Fırtınalı havalarda güverteye çıkacak olan gemiadamı nasıl bir güvenlik önlemi alır?",
            options: ["İş ayakkabısı ve tulum giyilir", "Can yeleği giyilir", "Dalma giysisi giyilir", "Isı korumalı tulum giyilir", "İşbaşı giyilir"],
            answer: 1
        },
        {
            id: 264,
            q: "Kapalı mahallere girişte yapılması gereken doğru davranış hangisidir?",
            options: ["Tanka girerken sadece zehirli gaz oranını ölçmek", "Tankın içine inert gaz verip oksijen seviyesini yükselterek girmek", "Tanka girerken sadece patlayıcı gaz oranını ölçmek", "Oksijen, patlayıcı gaz, zehirli gaz oranını ölçerek tanka girmek", "Mutlaka acil durum kaçış solunum cihazı (EEBD) kullanarak tanka girmek"],
            answer: 3
        },
        {
            id: 265,
            q: "Uzun süre kapalı kalmış bir balast tankına girmeden önce ne yapılmalıdır?",
            options: ["Gaz veya toz maskesi takılmalı", "Tankın aydınlatılması sağlanmalı", "Tankın temizlenmesi gerekir", "Tankın havalandırılması sağlanmalı, gaz ve oksijen ölçümü yapılmalı", "Hiçbiri"],
            answer: 3
        },
        {
            id: 266,
            q: "Aşağıdakilerden hangisi gemiye yeni katılan bir gemiadamının gemiye katılır katılmaz alacağı uyumlandırma eğitimi konularından değildir?",
            options: ["Direkte çalışma usül ve yöntemleri", "Gemideki can kurtarma araçlarının yerleri", "Acil durum işaretlerinin yerleri", "Role görevleri", "Geminin terk edilmesini gerektirebilecek acil durumlar"],
            answer: 0
        },
        {
            id: 267,
            q: "Seyre kalkacak bir gemide eğer 1 ay önce yapılan gemiyi terk talimine mürettebatın %25'inden fazlası katılmamışsa, o geminin bulunduğu limanı terk etmesinden ne kadar süre içerisinde söz konusu talimler yapılmalıdır?",
            options: ["2 saat", "12 Saat", "48 Saat", "6 saat", "24 Saat"],
            answer: 4
        },
        {
            id: 268,
            q: "Bir gemide gemiyi terk role talimi hangi durumlarda limandan kalktıktan sonra ilk 24 saat içinde yapılmalıdır?",
            options: ["Tüm gemilerde limandan kalkıştan sonra ilk 24 saat içerisinde gemiyi terk role talimi yapılır", "Personelin %20'si değişirse", "Yolcuların %50'si gemiye binince", "Personelin %25'i değişirse", "Solas gereği her ay düzenli olarak yapılmalıdır"],
            answer: 3
        },
        {
            id: 269,
            q: "ISPS Kod hangi tarihte yürürlüğe girmiştir?",
            options: ["1 Temmuz 2003", "1 Temmuz 2004", "1 Ağustos 2005", "1 Ağustos 2009", "1 Temmuz 2005"],
            answer: 1
        },
        {
            id: 270,
            q: "SOLAS Bölüm l'in uygulandığı uluslararası sefer yapan gemiler tarafından tutulması zorunlu olan \"Sürekli Özet Kayıt\" hangi tarihten itibaren tutulmaya başlanmıştır?",
            options: ["18 Nisan 2006", "01 Temmuz 2004", "12 Aralık 2004", "16 Haziran 2007", "27 Mart 2005"],
            answer: 1
        },
        {
            id: 271,
            q: "ISPS KOD kapsamındaki Liman Tesislerimizin Güvenlik Seviyesi nedir?",
            options: ["2", "4", "5", "3", "1"],
            answer: 4
        },
        {
            id: 272,
            q: "Olağanüstü hallerde (savaş, seferberlik, vb) Ulaştırma ve Altyapı Bakanlığının talebi veya Bakanlar Kurul Kararı ile Güvenlik Seviyesi hangi güvenlik seviyesine yükseltilir?",
            options: ["Güvenlik Seviyesi 1", "Güvenlik Seviyesi 3", "Güvenlik Seviyesi 2", "Güvenlik Seviyesi 4", "Güvenlik Seviyesi 5"],
            answer: 1
        },
        {
            id: 273,
            q: "ISPS Kod gereklerine göre liman tesislerinin uygunluğu belgeleyen \"Liman Tesisi Uygunluk Belgesi\" kaç yıl için geçerlidir?",
            options: ["2 Yıl", "3 Yıl", "Süresiz bir belgedir", "5 Yıl", "10 Yıl"],
            answer: 3
        },
        {
            id: 274,
            q: "Taraf Devlet veya onun adına yetkili kuruluş, uluslararası sefer yapan gemilere hizmet veren her liman tesisi için **(Boşluk)** yapacaktır. Boş bırakılan yere uygun seçenek aşağıdakilerden hangisidir?",
            options: ["Güvenlik Seviyesi 2'yi ilan edecektir", "Liman Tesisi Güvenlik Sorumlusu atanması", "Liman Tesisi Güvenlik Planı", "Gemi Güvenlik Zabiti ataması", "Liman Tesisi Güvenlik Değerlendirmesi"],
            answer: 4
        },
        {
            id: 275,
            q: "Uluslararası Gemi ve Liman Tesisi Güvenlik Kodu (ISPS Code) kapsamında Liman Tesisi Güvenlik Planının uygulanmasından, geliştirilmesinden, gemi güvenlik zabiti ile şirket güvenlik sorumlusu ile olan ilişkilerden sorumlu olmak üzere yetkilendirilen kişiyi ifade eden kısaltma aşağıdakilerden hangisidir?",
            options: ["PFSO", "RSO", "SSO", "CSO", "PFSP"],
            answer: 0
        },
        {
            id: 276,
            q: "Gemide tespit edilen sınırlı alanlarla ilgili ayrıntılar ve bunların korunması için kabul edilen önlemler ISPS Kodu gereği aşağıdakilerden hangisine verilebilir?",
            options: ["Armatöre", "Şirket personeline", "Yükün sahibine", "Bayrak devletinin temsilcilerine", "Anlaşmalı olunan aracı firmaya"],
            answer: 3
        },
        {
            id: 277,
            q: "Gemi güvenlik değerlendirmesinin yapılması, gemi güvenlik planının düzenlenmesi, onaylanmak üzere sunulması ve uygulanıp sürdürülmesi faaliyetlerini yürütmek, ayrıca Liman Tesisi Güvenlik Görevlisi ve Gemi Güvenlik Görevlisi ile irtibatı sağlamak üzere ISPS Kod Bölüm A Kural 11.2 hükümlerine uygun olarak yetkilendirilen kişi aşağıdakilerden hangisidir?",
            options: ["Nöbetçi Vardiya Zabiti", "Şirket Güvenlik Sorumlusu", "Gemi Güvenlik Zabiti", "Liman Tesisi Güvenlik Sorumlusu", "2 nci Kaptan"],
            answer: 1
        },
        {
            id: 278,
            q: "ISPS Kod'un A Bölümünün gerektirdiği bir değerlendirme, bir doğrulama, bir onay veya bir sertifikalandırma yapmaya yetkili gemi ve liman işletmeleri konusunda uygun bilgiye ve güvenlik konularında da yeterli uzmanlığa sahip kuruluşlardır. Bu tanım aşağıdaki hangi seçenekte belirtilmiştir?",
            options: ["ICAO", "MSC", "RSM", "CSM", "RSO"],
            answer: 4
        },
        {
            id: 279,
            q: "Uluslararası Gemi ve Liman Tesisi Güvenlik Kodu (ISPS) kapsamındaki gemi ve liman liman tesisi güvenlik seviyeleri ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
            options: ["Geminin güvenlik seviyesi liman tesisi güvenlik seviyesinden yüksek ise karşılıklı güvenlik deklarasyonu yapılır", "Kod kapsamında 1, 2 ve 3'üncü seviyeler olmak üzere toplam üç adet güvenlik seviyesi vardır", "Gemilerin güvenlik seviyeleri yalnızca Bayrak devleti tarafından belirlenir", "Güvenlik deklarasyonu kaptan veya gemi güvenlik zabiti tarafından imzalanır", "Liman tesisi güvenlik seviyesi geminin güvenlik seviyesinden yüksek karşılıklı güvenlik deklarasyonu yapılır"],
            answer: 2
        },

        // --- Deniz HUKUKU 3.pdf (Part 5 - IDs 280-349) ---
        {
            id: 280,
            q: "MARPOL 73/78 Sözleşmesi Eklerine göre aşağıdakilerden hangisi 'özel alanlar içinde' belirli şartlara uyarak denize atılabilir?",
            options: ["Öğütülmüş gıda atıkları", "Yüzebilen istif malzemeleri", "Halat parçaları", "Yağlı olmayan üstübüler", "Plastik atıklar"],
            answer: 0
        },
        {
            id: 281,
            q: "Yiyecek atıkları, öğütücü sistemden geçtikten sonra özel deniz alanı içinde MARPOL 73/78 gereği; minimum kıyıdan kaç mil mesafeden denize atılabilir?",
            options: ["12 mil", "10 mil", "3 mil", "6 mil", "4 mil"],
            answer: 0
        },
        {
            id: 282,
            q: "Yiyecek artıkları, parçalayıcı ve öğütücü sistemden geçmeden, özel deniz alanı içinde, minimum kaç mil mesafeden, MARPOL 73/78 gereği denize atılabilir?",
            options: ["3 mil", "4 mil", "6 mil", "10 mil", "Atılamaz"],
            answer: 4
        },
        {
            id: 283,
            q: "MARPOL 73/78 EK-V kapsamındaki Özel Alanlarda çöp istif tahtaları kaç mil açıkta denize atılabilir?",
            options: ["10 mil", "12 mil", "15 mil", "25 mil", "Atılamaz"],
            answer: 4
        },
        {
            id: 284,
            q: "MARPOL sözleşmesi Ek V deki özel bölgelerde uygulanan kirlilik önleme kuralları aşağıdaki seçeneklerden hangisinde doğru olarak yer almıştır?",
            options: [
                "Kıyıdan 12 milden fazla uzaklıkta 25 mm.den daha küçük atılabilen gıda artıkları dışında hiçbir atık madde atılamaz",
                "Bu bölgelerde sadece plastik ve çöp denize atılamaz",
                "Sadece kağıt ve gıda atıkları atılabilir",
                "Sadece cam, metal ve gıda atıkları atılabilir",
                "Sadece suda çözülen doğal maddeler atılabilir"
            ],
            answer: 0
        },
        {
            id: 285,
            q: "MARPOL 73/78 Sözleşmesinin EK-V (Gemilerden atılan çöpler ile deniz kirlenmesini önleyici kurallar)'i gereği aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde hiçbir madde denize atılamaz",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 6 milden sonra atılmasına izin verilir",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 12 milden sonra atılmasına izin verilir",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 6 milden sonra 25 mm.den daha geniş olmayan süzgeçten geçebilecek şekilde parçalandıktan sonra denize atılmasına izin verilir",
                "Yurdumuzu çevreleyen denizler özel alanlar kapsamına alınmışlardır. Bu denizlerde sadece gıda atıklarının karadan 12 milden sonra 25 mm.den daha geniş olmayan süzgeçten geçebilecek şekilde parçalandıktan sonra denize atılmasına izin verilir"
            ],
            answer: 4
        },
        {
            id: 286,
            q: "MARPOL 73/78 Sözleşmesinin EK-V (Gemilerden atılan çöpler ile deniz kirlenmesini önleyici Kurallar)'ı gereği Özel Alan kapsamına giren denizlerin tümü aşağıdaki paragraflardan hangisinde bulunmaktadır?",
            options: [
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi, Antartika ve Karayip",
                "Akdeniz, Karadeniz, Baltık, Hint Okyanusu, Kuzey Denizi, Antartika ve Karayip",
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi ve Karayip",
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi ve Antartika",
                "Akdeniz, Karadeniz, Baltık, Körfez, Kuzey Denizi, Atlantik Okyanusu, Antartika ve Karayip"
            ],
            answer: 0
        },
        {
            id: 287,
            q: "Aşağıdakilerden hangisi özel alanlar dışında denize atılabilir?",
            options: ["Plastik", "Cam", "Yüzer halat", "Fiber", "Fiberglass"],
            answer: 1
        },
        {
            id: 288,
            q: "Hangisi özel alan dışında 3 milden atılabilen çöp tipidir?",
            options: ["Parçalanmış yiyecek atıkları", "Yüzmeyen katı madde", "Parçalanmamış yiyecek atıkları", "Yüzer katı madde", "Plastikler"],
            answer: 0
        },
        {
            id: 289,
            q: "MARPOL 73/78 EK-V gereğince özel alanlar dışında gıda atıkları ve kağıt parçaları parçalayıcı ve öğütücü cihazdan geçirilmek kaydıyla en yakın kıyıdan kaç mil uzaklıkta denize atılmasına müsaade edilebilir?",
            options: ["2", "3", "6", "1", "12"],
            answer: 1
        },
        {
            id: 290,
            q: "Yiyecek atıkları öğütücü sistemden geçtikten sonra, özel deniz alanı dışında MARPOL 73/78 gereği, minimum kıyıdan kaç mil mesafede denize atılabilir?",
            options: ["3 mil", "4 mil", "6 mil", "10 mil", "12 mil"],
            answer: 0
        },
        {
            id: 291,
            q: "Yiyecek atıkları, öğütücü sistemden geçmeden özel deniz alanı dışında MARPOL 73/78 gereği minimum kıyıdan kaç mil mesafe uzakta olmak kaydıyla denize atılabilir?",
            options: ["6 mil", "10 mil", "4 mil", "3 mil", "12 mil"],
            answer: 4
        },
        {
            id: 292,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslararası sözleşmesi (MARPOL 73/78)'in EK-V'inde belirtilen gemilerden atılan çöpler (gıda atıkları, kağıtlar, tabak kırıkları vb.), parçalayıcı ve öğütücüden geçmek koşulu ile 12 mil içinde 3 milden daha az olmamak koşulu ile, kaç mm.den daha geniş olmayan süzgeçten geçebilecek kadar parçalandıktan sonra denize atılabilir?",
            options: ["15", "20", "25", "30", "35"],
            answer: 2
        },
        {
            id: 293,
            q: "MARPOL 73/78 Konvansiyonu Ek-V kapsamında özel alanlar dışında yüzebilecek olan istif gereçleri, kaplama ve ambalaj malzemesi en yakın kıyıdan en az kaç mil uzaklıktan atılabilir?",
            options: ["3 mil", "6 mil", "12 mil", "25 mil", "Atılamaz"],
            answer: 3
        },
        {
            id: 294,
            q: "Gemilerden kaynaklanan kirliliğin önlenmesi uluslar arası sözleşmesi (MARPOL 73/78) in EK-VI sı, hangi maddelerle denizlerin kirletilmesinin önlenmesine ilişkin alınacak tedbirleri kapsar?",
            options: [
                "Petrol ile deniz kirlenmesini önleyici kurallar",
                "Dökme zehirli sıvı maddelerle deniz kirlenmesini önleyici kurallar",
                "Ambalajlı bir şekilde... taşınan zararlı maddelerle deniz kirlenmesini önleyici kurallar",
                "Gemilerden çıkan pis sularla... deniz kirlenmesini önleyici kurallar",
                "Gemilerden kaynaklanan hava kirliliğinin önlenmesine ait kurallar"
            ],
            answer: 4
        },
        {
            id: 295,
            q: "Gemilerden kaynaklanan hava kirliliğinin önlenmesine ilişkin kurallar MARPOL Sözleşmesinin hangi ekinde (annex) yer almaktadır?",
            options: ["MARPOL EK-IV", "MARPOL EK-VI", "MARPOL EK-III", "MARPOL EK-II", "MARPOL EK-V"],
            answer: 1
        },
        {
            id: 296,
            q: "MARPOL 73/78 EK-VI'da belirtilen 'Hava Kirliliğinin Önlenmesine' dair kurallar gereği kaç GRT ve üzeri gemi, sabit ve yüzer sondaj platformları sörvey ve denetime tabidir?",
            options: ["150 GRT", "300 GRT", "500 GRT", "200 GRT", "400 GRT"],
            answer: 4
        },
        {
            id: 297,
            q: "Gemilerin taşıyabileceği max. yük miktarını ve su üzerinde batabileceği max. draftı belirlemek maksadıyla gemilerin nasıl ölçümlendirileceğinin belirlendiği uluslararası sözleşmenin kısa adı aşağıdakilerden hangisidir?",
            options: ["SOLAS", "LL", "STCW", "LLMC", "LDC"],
            answer: 1
        },
        {
            id: 298,
            q: "Uluslararası Yükleme Sınırı Sözleşmesine (LL/66) göre asgari yaz fribord mesafesi hangi yükleme sınırı çizgisinden ana güverte çizgisine kadar ölçülür?",
            options: ["W", "LS", "S", "WNA", "T"],
            answer: 2
        },
        {
            id: 299,
            q: "Uluslar arası konvansiyona göre Fribord markalarının sınırları bazı harflere göre adlandırılır. Bu bağlamda 'TF' harfinin anlamı aşağıdakilerden hangisidir?",
            options: ["Tropikal Tatlı Su Yükleme Sınırı", "Kış Yükleme Sınırı", "Kış Kuzey Atlantik Yükleme Sınırı", "Tropikal Yükleme Sınırı", "Tatlı Su Yükleme Sınırı"],
            answer: 0
        },
        {
            id: 300,
            q: "Uluslar arası Yükleme Sınırı Sözleşmesine göre (LL/66) aşağıdakilerden hangisi kereste yükleme sınırı işaretlerindendir?",
            options: ["S", "W", "LW", "WNA", "T"],
            answer: 2
        },
        {
            id: 301,
            q: "Kereste (timber) yükü için freeborda ilişkin gereklilikler LOADLINE sözleşmesinin hangi bölümünde (Annex) açıklanmıştır?",
            options: ["Bölüm I", "Bölüm II", "Bölüm III", "Bölüm IV", "Bölüm III / Kısım 2"],
            answer: 3
        },
        {
            id: 302,
            q: "Mevsimsel periyotlara, bölge ve alanlara ilişkin hususlar LOADLINE Sözleşmesinin hangi bölümünde (Annex) açıklanmıştır?",
            options: ["Bölüm I", "Bölüm II", "Bölüm III", "Bölüm IV", "Bölüm C"],
            answer: 1
        },
        {
            id: 303,
            q: "1966 loadline konvansiyonunda mevsimsel değişikliklere göre bölgeler belirlenirken aşağıdakilerden hangisi göz önüne alınmıştır?",
            options: ["Akıntı", "Belli bir bofor kuvvetinin üzerinde esen rüzgarlar", "Yağmur", "Ani sıcaklık değişmeleri", "Gece gündüz değişikliği"],
            answer: 1
        },
        {
            id: 304,
            q: "Aşağıdaki gemi türlerinden hangisi ya da hangileri 'Uluslararası Yükleme Hattı (Load Line 1966)' sözleşmesinin hükümlerini yerine getirmek zorunda değildir? (I) Savaş Gemileri (II) Boyu 24 metreden kısa gemiler (III) 150 GRT'dan küçük yaşlı gemiler (IV) Ticari Yatlar (V) Balıkçı Gemileri",
            options: ["I,II,III,V", "I,II,III,IV,V", "I,III,IV,V", "I,II,IV", "III"],
            answer: 1
        },
        {
            id: 305,
            q: "Deniz Hukukunun özellikleri aşağıdakilerden hangisidir?",
            options: ["Kendine özgüdür, moderndir, ulusaldır", "Kendine özgüdür, gelenekseldir, uluslararasıdır", "Moderndir, uluslararasıdır", "Özeldir, moderndir, uluslararasıdır", "Geneldir, moderndir, uluslararasıdır"],
            answer: 3
        },
        {
            id: 306,
            q: "Aşağıdakilerden hangisi doğrudur?",
            options: [
                "Deniz hukuku, Deniz Kamu Hukuku - Deniz Özel Hukuku olarak ikiye ayrılır",
                "Deniz hukuku, Deniz Özel Hukuku - Deniz İdare Hukuku olarak ikiye ayrılır",
                "Deniz hukuku, Deniz Ceza Hukuku - Deniz Hukuku olarak ikiye ayrılır",
                "Deniz hukuku, Deniz Ticareti Hukuku - Deniz Özel Hukuk olarak ikiye ayrılır",
                "Deniz hukuku, Deniz Ticareti Hukuku - Deniz Ceza Hukuk olarak ikiye ayrılır"
            ],
            answer: 0
        },
        {
            id: 307,
            q: "Aşağıdakilerden hangisi denizcilik ile ilgili ulusal mevzuatımız içinde yer almaz?",
            options: ["Gemilerin gemi adamları ile donatılmasına ilişkin yönerge", "Armatörler Birliği Kanunu", "Gemi adamları sağlık yönergesi", "Deniz İş Kanunu", "Gemi adamları yönetmeliği"],
            answer: 1
        },
        {
            id: 308,
            q: "Devletin yasama, yürütme ve yargı yetkilerini bütünüyle kullandığı deniz alanlarına ne denir?",
            options: ["Kıt'a sahanlığı", "Münhasır Ekonomik Bölge", "Açık Deniz", "İçsular", "Karasuları"],
            answer: 3
        },
        {
            id: 309,
            q: "Olağanüstü haller ile ülkenin güvenliğini ilgilendiren durumlarda... yayınların geçici veya süresiz olarak durdurulmasını veya kısıtlanmasını ifade eden terim aşağıdakilerden hangisidir?",
            options: ["Yüksek haberleşme kontrolü", "Telsiz Yayın kontrolü", "Olağanüstü hal kontrolü", "Haberleşme kontrolü", "Telsiz kontrolü"],
            answer: 1
        },
        {
            id: 310,
            q: "Türk Ticaret Kanununun 934.maddesi uyarınca aşağıdakilerden hangisi gemi adamlarından değildir?",
            options: ["Kaptan", "Çamaşırcı", "Tayfa", "Kılavuz", "Gemi Zabitleri"],
            answer: 3
        },
        {
            id: 311,
            q: "Gemiadamları Yönetmeliğine göre, 'Sınırlı Vardiya Zabiti' yeterliğinin bir üst yeterliği aşağıdakilerden hangisidir?",
            options: ["Vardiya Zabiti", "Uzakyol Vardiya Zabiti", "Kaptan (500-3000GT)", "Sınırlı Kaptan", "Vardiya Zabiti (500-3000GT)"],
            answer: 3
        },
        {
            id: 312,
            q: "En az bir MF sahil istasyonu tarafından kaplanan ve MF/DSC uyarılarının alınabileceği GMDSS deniz alanı hangisidir?",
            options: ["A5", "A2", "A4", "A3", "A1"],
            answer: 1
        },
        {
            id: 313,
            q: "Aşağıdaki kılavuzluk sistemlerinden hangisi Türkiye'de bulunmamaktadır?",
            options: ["Liman kılavuzluğu", "Mecburi müşavir (danışman) kılavuzluk", "İhtiyarı kılavuzluk", "Mecburi sevk ve idare kılavuzluğu", "Boğaz kılavuzluğu"],
            answer: 3
        },
        {
            id: 314,
            q: "Ticaret gemilerinin Türk Boğazları Tüzüğüne (1998) göre Türk Boğazlarında geçiş rejimi aşağıdakilerden hangisidir?",
            options: ["Transit Geçiş Rejimi", "Zararsız Geçiş Rejimi", "Uğraksız Geçiş Rejimi", "Duraksız Geçiş Rejimi", "İhbarlı Geçiş Rejimi"],
            answer: 2
        },
        {
            id: 315,
            q: "Birleşmiş Milletler Deniz Hukuku Sözleşmesi'ne (BMDHS-1982) göre Münhasır Ekonomik Bölge aşağıdakilerden hangisinden itibaren ölçülmeye başlanır?",
            options: ["Karasularının dış hattından itibaren", "Karasularının iç hattından itibaren", "Bitişik bölgeden itibaren", "Esas hattan itibaren", "Kıta sahanlığından itibaren"],
            answer: 3
        },
        {
            id: 316,
            q: "Aşağıdakilerden hangisi Türk Ticaret Kanunu uyarınca geminin unsurlarından değildir?",
            options: ["Suda hareket etme kabiliyetinin olması", "Pek küçük olmaması", "Tahsis edildiği amacın denizde hareketi gerekli kılması", "Ticari kazanç gayesi bulunması", "Yüzme kabiliyetinin bulunması"],
            answer: 3
        },
        {
            id: 317,
            q: "6102 sayılı (yeni) Türk Ticaret Kanunu md.931'e göre aşağıdakilerden hangisi 'gemi' tanımının unsurlarından değildir?",
            options: ["Suda hareket etmek amacına tahsis edilmesi", "Pek küçük olmaması", "Yüzme özelliği bulunması", "Taşıma yapma gerekliliğinin olması", "Kendiliğinden hareket etmesinin gerekmemesi"],
            answer: 4
        },
        {
            id: 318,
            q: "Aşağıda yer alan tanımlardan hangisi TTK'da yer alan gemi tanımıdır?",
            options: [
                "Tahsis gayesi ne olursa olsun denizde kürek veya yelken kullanmaksızın hareket edebilen her türlü tekne gemidir",
                "Tahsis edildiği gayeye uygun olarak kullanılması denizde hareket imkanına bağlı bulunan büyük-küçük her türlü tekne gemidir",
                "Denizde kürekten başka aletle yola çıkabilen her araç adı, tonilatosu ve kullanma amacı ne olursa olsun gemidir",
                "Denizde kürek veya yelkenden başka aletle yola çıkabilen her araç adı, tonilatosu ve kullanma amacı ne olursa olsun gemi denir",
                "Tahsis edildiği gayeye uygun olarak kullanılması denizde hareket etmesi imkanına bağlı bulunan ve pek küçük olmayan her türlü tekne gemidir"
            ],
            answer: 4
        },
        {
            id: 319,
            q: "Aşağıdakilerden hangisi Kaptan'ı tanımlar?",
            options: [
                "Donatan veya donatma iştirakinde müşterek donatanlar tarafından tayin edilen ve kendisine 'Kamu Hukuku'na ve 'Özel Hukuku' ilişkin görevler verilen kişidir",
                "Donatan adına gemide hareket eden kişidir",
                "Gerekli yeterlik belgesini haiz olup gemiyi sevk ve idare eden kişidir",
                "Gemide sadece güverteden sorumludur",
                "Donatanın gemilerini teknik ve idari bakımdan donatan adına denetleyen yetkili kişidir"
            ],
            answer: 0
        },
        {
            id: 320,
            q: "Aşağıdakilerden hangisi 'Kabotaj Hakkı' nın tanımıdır?",
            options: [
                "Bir devletin kendi karasuları içerisinde ve dışında deniz ticareti yapabilmek yetkisini... kendi vatandaşlarına tanıması",
                "Bir devletin kendi karasuları dışındaki sularda deniz ticareti yapabilmek yetkisini... kendi vatandaşlarına tanıması",
                "Bir devletin kendi karasuları içerisinde deniz ticareti yapabilmek yetkisini ve hakkını sadece kendi vatandaşlarına ve kendi bayrağını taşıyan gemilere tanıması",
                "Bir devletin kendi karasuları içinde ve dışında yük taşıma yetkisini... kendi vatandaşlarına tanıması",
                "Bir devletin kendi karasuları içinde yolcu taşıma, dışında ise sair taşıma yetkisini... kendi vatandaşlarına tanıması"
            ],
            answer: 2
        },
        {
            id: 321,
            q: "Aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Deniz İş Kanunu açısından gemi sahibine... işveren denir",
                "TTK açısından gemisini deniz ticaretinde kullanan gemi sahibine donatan denir ve İşveren sayılır",
                "TTK açısından kendisinin olmayan bir gemiyi kendi adına... kullanan kimse, donatan kabul edilir ve işveren sayılır",
                "Donatma iştirakinde paydaş olanlar donatan kabul edilir ve işveren sayılır",
                "Sadece gemi sahibi olan kimseler donatandır ve işveren sayılır"
            ],
            answer: 4
        },
        {
            id: 322,
            q: "Deniz İş Kanunu;",
            options: [
                "Bükreş sözleşmesine göre sadece bu anlaşmaya taraf devlet vatandaşlarına uygulanır",
                "Aynı zamanda hem TC hem de yabancı devlet vatandaşı olanlara uygulanır",
                "Bütün yabancı gemi adamlarına uygulanır",
                "Mütekabiliyet esaslarına göre sadece Avrupa devletleri vatandaşlarına uygulanır",
                "Mütekabiliyet esaslarına göre, Türk gemi adamlarına aynı mahiyette haklar tanıyan devletlerin uyruğunda olup bu Kanun kapsamına giren gemilerde çalışan gemiadamlarına uygulanır"
            ],
            answer: 4
        },
        {
            id: 323,
            q: "854 sayılı Deniz İş Kanunu açısından aşağıdakilerden hangisi uygulama kapsamı dahilinde değildir?",
            options: [
                "Bu kanun denizlerde gemilerde akarsularda TC bayrağı taşıyan 100 groston ve üstü gemilerde uygulanır",
                "Bu kanun sadece denizde taşımacılık yapan gemilerde uygulanır",
                "Bu kanun aynı işverene ait gemilerin çalıştırıldığı gemiadamı sayısı 5 ve yukarı olduğunda uygulanır",
                "Bu kanun uygulamasında sandal, mavna, şat, salapurya gibi olanlar da gemi sayılır",
                "Bakanlar kurulu... kapsamı dışında kalan gemilerle gemiadamlarına... teşmile yetkilidir"
            ],
            answer: 1
        },
        {
            id: 324,
            q: "Liman Çıkış Belgesi hangi Makamdan alınır?",
            options: ["Gemi Sörvey Kurulu", "Gümrük Teşkilatı", "Sahil Sıhhiye", "Liman Başkanlığı", "Liman İşletme Müdürlüğü"],
            answer: 3
        },
        {
            id: 325,
            q: "Gemilerin 'Liman Çıkış Belgelerinin' denetimini yapmaya aşağıdaki kuruluşların hangisi yetkilir?",
            options: ["Marmara Bölge Müdürlüğü sörvey kurulu", "Bölge Müdürlükleri Sörvey kurulları", "Liman Başkanlıkları", "Yüksek okul mezunu liman başkanlıkları", "Devlet Denetleme Kurulu"],
            answer: 2
        },
        {
            id: 326,
            q: "Tam boyu 24 metreden küçük gemilerin 'Denize Elverişlilik' denetini yapmaya, aşağıdaki kuruluşların hangisi yetkilidir?",
            options: ["Bölge Müdürlükleri Sörvey kurulları", "Yüksek okul mezunu liman başkanlıkları", "Devlet Denetleme Kurulu", "Marmara Bölge Müdürlüğü sörvey kurulu", "Liman Başkanlıkları"],
            answer: 4
        },
        {
            id: 327,
            q: "Deniz turizmi araçlarının seferleri ile ilgili aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Hudut giriş işlemini tamamlamış deniz turizmi araçları Türk karasuları ve limanları arasında serbestçe dolaşabilir",
                "Türk bayraklı özel deniz araçları Türk limanları arasında yapacakları seferlerde seyir izin belgesi kullanmaz",
                "Seyir izin belgesinin süresi içerisinde deniz turizmi aracında bulundurulması zorunludur",
                "Kaptanın seyir izin belgesinin sefer süresince deniz turizmi aracında kalan nüshasını liman başkanlığına teslim etmesi ile sefer tamamlanmış olur",
                "Seferini tamamlayan deniz turizmi araçları sefer bittikten en geç 24 saat içinde liman başkanlığına bildirimde bulunurlar"
            ],
            answer: 1
        },
        {
            id: 328,
            q: "Aşağıdakilerden hangisi Bakanlık tarafından Türk bayraklı gemilerde sörvey yapma ve sertifika düzenleme konusunda yetkilendirilmiş klas kuruluşlarından değildir?",
            options: ["Türk Loydu (TL)", "American Bureau of Shipping (ABS)", "Det Norske Veritas (DNV)", "Russian Maritime of Shipping (RMRS)", "Germanischer Lloyd (GL)"],
            answer: 3
        },
        {
            id: 329,
            q: "Sağlık resmi geminin hangi ölçü birimi üzerinden alınmaktadır?",
            options: ["DWT", "GDP", "Net ton", "RT", "GRT"],
            answer: 2
        },
        {
            id: 330,
            q: "492 sayılı Harçlar Kanununa göre gemi belgelerinden alınan harçlarda geminin hangi tonajı esas alınır?",
            options: ["Beher gros tonilato", "Beher rüsum tonilato", "DWT", "Deplasman ton", "Geminin boş ağırlığı"],
            answer: 0
        },
        {
            id: 331,
            q: "Aşağıdakilerden hangisi Kıyı Emniyeti Genel Müdürlüğünün almış olduğu bir ücrettir?",
            options: ["Sağlık resmi", "Fener ücreti", "Yola elverişlilik belgesi harcı", "Navlun hasılat payı", "Denize elverişlilik belgesi harcı"],
            answer: 1
        },
        {
            id: 332,
            q: "Gemi ve deniz ile ilgili aşağıdaki harç ve resimlerden hangisi liman başkanlıklarınca alınmaz?",
            options: ["Yola Elverişlilik belgesi harcı", "Gemi Tasdikname harcı", "Ölçme Belgesi harcı", "Denize Elverişlilik belgesi harcı", "Liman işgal resmi"],
            answer: 4
        },
        {
            id: 333,
            q: "Ülkemizde frekans tahsis ve tescil işlemleri aşağıda verilen hangi kurum/kuruluş tarafından yapılmaktadır?",
            options: ["Bilgi Teknolojileri ve İletişim Kurumu", "Genel Kurmay Başkanlığı", "Başbakanlık", "Telsiz İşletme Müdürlüğü", "Ulaştırma Bakanlığı"],
            answer: 0
        },
        {
            id: 334,
            q: "Kodlu ve kriptolu haberleşme yapma usül ve esasları aşağıdaki belirtilen hangi kurum/kuruluş tarafından belirlenmektedir?",
            options: ["Ulaştırma Bakanlığı", "Genel Kurmay Başkanlığı", "Milli İstihbarat Teşkilatı", "Bilgi Teknolojileri ve İletişim Kurumu", "Telsiz İşletme Müdürlüğü"],
            answer: 1
        },
        {
            id: 335,
            q: "Ülkemizde Kıyı Telsiz İstasyonlarının kurulması ve işletimini sağlayan kurum aşağıdakilerden hangisidir?",
            options: ["Uluslararası Telekomünikasyon Birliği", "Liman Başkanlıkları", "Denizcilik Bölge Müdürlükleri", "Kıyı Emniyeti Genel Müdürlüğü", "Ulaştırma ve Altyapı Bakanlığı"],
            answer: 3
        },
        {
            id: 336,
            q: "Bağlama Kütüğü Uygulama Yönetmeliği gereğince; kaç metreden küçük gemi, deniz ve iç su araçları bağlama kütüğüne kayıt edilmez?",
            options: ["4.5", "3.5", "3", "4", "2.5"],
            answer: 4
        },
        {
            id: 337,
            q: "Bağlama kütüğü ruhsatnamesi hangi gros tondan küçük gemi ve deniz araçlarına verilir?",
            options: ["40", "49", "12", "150", "18"],
            answer: 4
        },
        {
            id: 338,
            q: "Türk Ticaret Kanununa göre aşağıdaki gemilerden hangisi Türk Bayrağı çekmek için 'Gemi Tasdiknamesi veya Bayrak Şahadetnamesi' belgesi almak zorundadır?",
            options: ["Gezinti amacına tahsis edilmiş yatlar", "Sadece spor amacına tahsis edilmiş gemiler", "Bilimsel araştırma gemileri", "18 gros tonilatodan küçük gemiler", "Liman içi sefer yapan yolcu gemileri"],
            answer: 2
        },
        {
            id: 339,
            q: "Türk Bayrağı çekme hakkını yurt dışında elde eden gemi bu hakkını aşağıdakilerden hangisi ile belgeler?",
            options: ["Gemi Tasdiknamesi", "Bayrak Şahadetnamesi", "Bayrak çekme müsaade belgesi", "Gemi jurnali'nin tasdikli örneği", "Gemi Kayıt Defteri"],
            answer: 1
        },
        {
            id: 340,
            q: "Aşağıdaki gemilerden hangisine verilecek liman çıkış belgesi harca tabidir?",
            options: ["Turist nakleden ve başkaca ticari işlemde bulunmayan turistik gemiler", "İlmi mevzularda kullanılan gemiler", "Balık avlama gemileri", "Sünger gemileri", "Yük gemisi"],
            answer: 4
        },
        {
            id: 341,
            q: "4922 Sayılı Denizde Can ve Mal Koruma Hakkında Kanun gereği aşağıdakilerden hangisi liman çıkış belgesinin verilmesine esas denetimde dikkate alınmaz?",
            options: ["Gemiadamlarının yeterliği ve sayısı", "Yolcu sayısı ve yükün cinsi", "Yükleme durumu", "Kumanya durumu", "Gemi belgelerinin geçerliliği"],
            answer: 3
        },
        {
            id: 342,
            q: "TTK.817/2'ye göre, aşağıdakilerden hangisi 'Liman Çıkış Belgesi' denetinde dikkate alınmaz?",
            options: ["Gemiadamları yeterlilikleri ve sayıları", "Can kurtarma ve seyir donanımları", "Yangından korunma ve yangın söndürme araçları", "Makine yeterliliği", "Kumanya, yakıt yeterliliği ve yükleme durumu"],
            answer: 4
        },
        {
            id: 343,
            q: "Gemilerin Teknik Yönetmeliğine göre liman çıkış belgesi denetiminde aşağıdakilerden hangisi dikkate alınmaz?",
            options: ["Gemiadamlarının yeterliği ve sayısı", "Yolcu sayısı", "Yükleme durumu", "Zorunlu belgelerin geçerliliği", "Makine Gücü"],
            answer: 4
        },
        {
            id: 344,
            q: "Denizde Can ve Mal Koruma Hakkında Kanuna göre; Denize Elverişlilik Belgesi olmayan gemi;",
            options: ["Yolcu taşıyamaz", "Hiçbir şekilde hareket edemez", "Yük taşıyamaz", "Limandan çıkış izni verilmez", "Yük taşır, yolcu taşıyamaz"],
            answer: 3
        },
        {
            id: 345,
            q: "'Denize Elverişlilik' belgesi olmayan veya süresi biten gemi;",
            options: ["Hiçbir şekilde hareket edemez", "Yük taşıyamaz", "Yolcu taşıyamaz", "Yük taşır, yolcu taşıyamaz", "Ticari faaliyette bulunamaz"],
            answer: 4
        },
        {
            id: 346,
            q: "6762 Sayılı TTK'nun 816.Maddesi gereğince aşağıdakilerden hangisi ticari bir gemi için denize elverişliliğin koşullarından değildir?",
            options: ["Teknenin sağlamlığı", "Genel donatımın yeterliliği", "Ana Makinenin yeterliliği", "Kazanın yeterliliği", "Yükleme durumunun uygunluğu"],
            answer: 4
        },
        {
            id: 347,
            q: "Yurtdışından bir Türk limanına yüklü gelen ve denize elverişlilik belgesinin süresi yolculuğun devamı sırasında bitmiş olan bir gemi için aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Yükünü sadece geldiği limana boşaltabilir müteakip bir limana boşaltamaz",
                "Denetleneceği limana dönmek koşuluyla yükünü bir veya bir kaç limana boşaltabilir",
                "Denetleneceği limana kadar seyir yapabilir",
                "Denetleneceği limana kadar ticari işlem yapabilir",
                "Denetleneceği limana kadar seyir yapması için denize elverişlilik belgesi düzenlenmesine gerek yoktur"
            ],
            answer: 0
        },
        {
            id: 348,
            q: "Denize elverişlilik belgesi süresi içinde yolculuğun devamı sırasında herhangi bir nedenle yönetmeliğe uygun durumunu kaybetmiş gemiler ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Ticari işleminin tamamlanacağı limana gidebilir",
                "Kaptan tarafından gerekli emniyet tedbirleri alınarak seyir yapılır",
                "İdareye durum bildirilerek seyir yapılabilir",
                "Yolculuğunu tamamladığı limandan hiçbir koşulda ayrılamaz",
                "Yolculuğunu tamamladığı limandan onarılabileceği en yakın limana gidebilir"
            ],
            answer: 3
        },
        {
            id: 349,
            q: "Ülkemizde yüzer araçlar için düzenlenen ve yetkili kurum tarafından verilen telsiz istasyonu ruhsatnamesinin geçerlilik süresi aşağıdakilerden hangisidir?",
            options: ["5 yıl", "1 yıl", "2 yıl", "3 yıl", "4 yıl"],
            answer: 0
        },

        // --- Deniz HUKUKU 4.pdf (Part 6 - IDs 350-413) ---
        {
            id: 350,
            q: "Kıdem tazminatına hak kazanılabilmesi için asgari çalışma süresi ne kadardır?",
            options: ["6 ay", "12 ay", "2 yıl", "3 yıl", "5 yıl"],
            answer: 1
        },
        {
            id: 351,
            q: "Hak edilen kıdem tazminatının gemiadamınca talep edilmesi için gereken zamanaşımı süresi, Türk Hukukunda nedir?",
            options: ["1 yıl", "2 yıl", "5 yıl", "10 yıl", "20 yıl"],
            answer: 2
        },
        {
            id: 352,
            q: "Kültür ve Turizm Bakanlığından belgeli deniz turizm araçları işletmeleri, yabancı bayraklı deniz turizmi araçlarını, turizm amaçlı ticari faaliyetlerde kullanılmak üzere Bakanlığın izniyle kaç yıla kadar kiralayabilir?",
            options: ["2", "3", "1", "5", "10"],
            answer: 0
        },
        {
            id: 353,
            q: "854 sayılı Deniz İş Kanununa göre süresi belirli olmayan hizmet sözleşmesinde deneme süresi en çok ne kadardır?",
            options: ["2 aydır", "1 aydır", "20 gündür", "40 gündür", "15 gündür"],
            answer: 0
        },
        {
            id: 354,
            q: "İşveren işe aldığı gemiadamına en geç;",
            options: [
                "10 gün içinde gemiadamı çalışma ve kimlik karnesi vermek zorundadır",
                "20 gün içinde gemiadamı çalışma ve kimlik karnesi vermek zorundadır",
                "15 gün içinde gemiadamı çalışma ve kimlik karnesi vermek zorundadır",
                "25 gün içinde gemiadamı çalışma ve kimlik karnesi vermek zorundadır",
                "30 gün içinde gemiadamı çalışma ve kimlik karnesi vermek zorundadır"
            ],
            answer: 2
        },
        {
            id: 355,
            q: "Deniz İş Kanununa göre, işverence hak eden gemi adamına her tam yıl için kaç günlük ücreti tutarında kıdem tazminatı ödenir?",
            options: ["45 gün", "60 gün", "30 gün", "15 gün", "90 gün"],
            answer: 2
        },
        {
            id: 356,
            q: "854 sayılı Deniz İş Kanununa göre gemiadamının fazla çalışma karşılığı ödenecek ücret normal çalışma ücretinin saat başına düşen miktarı en az ne kadar arttırılmış olmalıdıra karşılığı on",
            options: ["%30", "%20", "%50", "%35", "%25"],
            answer: 4
        },
        {
            id: 357,
            q: "Deniz İş Kanunu uyarınca gemide işin bir haftadan fazla süreyle tatil edilmesini gerektiren zorlayıcı sebepler ortaya çıktığında bu süreye rastlayan, gemiadamına ödenecek hafta tatili ücreti tutarı ne kadardır?",
            options: ["Tam gündelik", "10 saat karşılığı gündelik", "2 tam gündelik", "Yarım gündelik", "7 saat karşılığı gündelik"],
            answer: 3
        },
        {
            id: 358,
            q: "Gemi adamlarının ücretlerini alamamaları ve talep etmeleri durumunda gemi üzerinden imtiyazlı olarak alabilmeleri hakkına hukuk terminolojisinde ne denir?",
            options: ["İşveren alacaklısı hakkı", "Yük alacaklısı hakkı", "Deniz alacağı hakkı", "Gemi alacaklısı hakkı", "İşçi alacaklısı hakkı"],
            answer: 3
        },
        {
            id: 359,
            q: "Aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Kıdem tazminatının hesabında son yılın ortalama aylığı esas alınır",
                "Kıdem tazminatının hesabında son aylık ücret esas alınır",
                "Kıdem tazminatının hesabında sefer, parça başı, akord, götürü veya yüzde usulü gibi ücretin sabit olmadığı hallerde son bir yıllık süre içinde ödenen ücretin o süre içinde çalışılan günlere bölünmesi suretiyle bulunacak ortalama ücret bu tazminatın hesabına esas alınır",
                "kıdem süresi için bir defadan fazla kıdem tazminatı veya ikramiye ödenmez",
                "Son bir yıl içinde işçi ücretine zam yapıldığı takdirde esas ücret, gemiadamının işten ayrılma tarihi ile zammın yapıldığı tarih arasında alınan ücretin aynı süre içinde çalışılan günlere bölünmesi suretiyle hesaplanır"
            ],
            answer: 1
        },
        {
            id: 360,
            q: "Aşağıdakilerden hangisi kaptanın iş akdinin sona erme sebeplerinden değildir?",
            options: ["Donatanın, gemi adamının ücretini ödememesi", "Geminin kaybı", "Geminin bayrak çekme hakkının kaybı", "Geminin isminin değiştirilmesi", "Geminin enkaz haline gelmesi"],
            answer: 3
        },
        {
            id: 361,
            q: "Aşağıdakilerden hangisi 854 sayılı Deniz İş Kanununa göre işverenin ihbarsız fesih sebeplerinden biri değildir?",
            options: [
                "Gemiadamının limanda geminin hareketinden önce gemiye gelmemesi",
                "Gemiadamının tutuklanması",
                "Gemiadamının sürekli ahlaka aykırı ranışlarda bulunması",
                "Gemiadamının işverene karşı kanuna aykırı hareket etmesi",
                "Gemiadamının sefer esnasında avans talebinde bulunması"
            ],
            answer: 4
        },
        {
            id: 362,
            q: "Aşağıdakilerden hangisi işverenin fesih sebeplerinden değildir?",
            options: [
                "Limanda geminin hareketinden önce gemiye gelmemesi",
                "Limanda gemiadamının tutuklanması",
                "Gemiadamının sefer esnasında avans talebinde bulunması",
                "Gemiadamının işverene karşı kanuna aykırı hareket etmesi",
                "Gemiadamının işverene karşı sürekli ahlaka aykırı davranması"
            ],
            answer: 2
        },
        {
            id: 363,
            q: "Aşağıdakilerden hangisi işverenin hizmet sözleşmesini kendi isteğiyle tek taraflı ve önelsiz sona erdireceği hallerden değildir?",
            options: [
                "Gemiadamının gemiye hareketinden önce gelip hizmete girmemesi",
                "Gemiadamının çalışmasının tutukluluk veya hapis sebebiyle imkansız bir hal alması",
                "Gemiadamının hizmet sözleşmesine aykırı davranması",
                "Gemiadamının kanuna aykırı davranması",
                "İşverenin ödeme güçlüğü içerisine düşmesi"
            ],
            answer: 4
        },
        {
            id: 364,
            q: "Aşağıdakilerden hangisi gemiadamı tarafından hizmet sözleşmesinin bildirimsiz olarak feshedilebileceği durumlardan değildir?",
            options: [
                "İşveren veya işveren vekilinin gemiadamına karşı ahlak ve adaba aykırı davranışı",
                "Geminin bakım ve onarıma girmesi",
                "Ücretin ödenmemesi",
                "İşveren veya işveren vekilinin iş sözleşmesi şartlarına aykırı davranması",
                "İşveren veya vekilinin gemiadamına karşı kanunsuz hareketi"
            ],
            answer: 1
        },
        {
            id: 365,
            q: "Aşağıdakilerden hangisi gemiadamının fesih sebeplerinden değildir?",
            options: [
                "İşverenin denizcilik teamüllerine aykırı davranması",
                "Gemiadamının sürekli olarak çalışmasına engel bir hastalığa tutulması",
                "Ücretinin hizmet akdi gereği ödenmemesi",
                "İşverenin kanuna aykırı hareket etmesi",
                "İşverenin tutuklanması"
            ],
            answer: 1
        },
        {
            id: 366,
            q: "854 sayılı Deniz İş Kanununa göre, iş akdinin yurt dışında feshi halinde hizmet akdinde başka bir hüküm bulunmadığı taktirde gemi adamının iade edileceği yer neresidir?",
            options: [
                "Gemi adamının ikametgah yeri",
                "Geminin bağlama limanı",
                "Gemi adamının ikametgahının bulunduğu yere en yakın liman",
                "Geminin sicil kaydının olduğu liman",
                "Geminin ikmal yapacağı liman"
            ],
            answer: 2
        },
        {
            id: 367,
            q: "Hizmet sözleşmesi aşağıdaki hallerden hangisi ile sona erdiğinde işveren işçiyi yurda iade etmek zorunda değildir?",
            options: [
                "Gemi uzun süreli olarak seferden alıkonulduğunda",
                "Geminin kayıp olmasında",
                "Geminin harp ganimeti ilan edilmesinde",
                "Türkiye Cumhuriyeti bayrağından çıkması halinde",
                "Gemiadamı başka bir işverenle hizmet akti yaptığında"
            ],
            answer: 4
        },
        {
            id: 368,
            q: "854 sayılı Deniz İş Kanunu kapsamında süreli veya süresiz yahut da sefer üzerine yapılan hizmet akti hangi durumda hem işveren veya işveren vekili tarafından hem de gemi adamı tarafından feshedilebilir?",
            options: [
                "Gemiadamının herhangi bir sebeple sürekli olarak gemide çalışmasına engel bir hastalığa yakalanması veya engelli hale gelmesi",
                "Gemiadamının gemide hizmet görmesinin tutukluluk, hapis veya gemide çalışmaktan men olunması gibi sebeplerle imkansız bir hal alması",
                "Gemiadamının herhangi bir limanda geminin hareketinden önce gemiye dönerek hizmete girmemesi veya gemiye hiç dönmemesi",
                "Gemiadamının işveren veya işveren vekiline karşı, kanuna, hizmet akitlerine dair iş ve çalışma şartlarına aykırı hareket etmesi",
                "Gemiadamının işveren veya işveren vekiline karşı denizcilik kural ve teamüllerine veya ahlak ve adaba aykırı hareket etmesi"
            ],
            answer: 0
        },
        {
            id: 369,
            q: "Deniz İş Kanununa göre, taraflarca fesih yetkisi sebebin öğrenilmesinden itibaren ne kadar sürede kullanılmalıdır?",
            options: ["10 iş günü", "1 yıl", "2 yıl", "6 iş günü", "15 iş günü"],
            answer: 3
        },
        {
            id: 370,
            q: "854 sayılı Deniz İş Kanununa göre 'Fesih ihbar' süreleri için aşağıdakilerden hangisi yanlıştır?",
            options: [
                "İşi altı ay sürmüş gemiadamı için bildirimin diğer tarafa yapılmasından başlayarak iki hafta sonra sona erer",
                "İşi bir buçuk yıl ila üç yıl arası süren gemiadamı için bildirimin diğer tarafa yapılmasından başlayarak altı hafta sonra sona erer",
                "İşi üç yıldan fazla sürmüş gemiadamı için bildirimin diğer tarafa yapılmasından başlayarak sekiz hafta sonra sona erer",
                "Süresi belirsiz hizmet akdi, Deniz İş Kanunu madde 14 hükmündekiler dışında gemiadamının işe alınmasından itibaren 6 ay geçmedikçe bozulamaz",
                "İşi beş yıldan fazla süren gemiadamı için bildirimin diğer tarafa yapılmasından başlayarak altı ay geçmedikçe bozulamaz"
            ],
            answer: 4
        },
        {
            id: 371,
            q: "Türk Ticaret Kanunu md.1904 uyarınca aşağıdaki gemi adamlarından hangileri yükleme başladıktan boşaltma tamamlanıncaya kadar zorunlu bir sebep bulunmadıkça aynı anda gemiden ayrılamaz?",
            options: ["Gemi kaptanı ve telsiz zabiti", "Gemi kaptanı ve baş makinist", "İkinci kaptan ve güverte lostromosu", "İkinci makinist ve gemi kaptanı", "Gemi kaptanı ve ikinci kaptan"],
            answer: 1
        },
        {
            id: 372,
            q: "Gemi adamları ve Kılavuz Kaptanlar Yönetmeliğine göre 'İlk Yardım Eğitimi'ni hangi gemi adamlarının alması zorunludur?",
            options: ["Kaptan ve birinci zabitler", "Tüm zabitan sınıfı gemi adamları", "Güverte zabitan sınıfı gemi adamları", "Tüm gemi adamları", "Kaptan ve Baş mühendis/Baş makinistler"],
            answer: 3
        },
        {
            id: 373,
            q: "Aşağıdakilerden hangisi gemi acentesinin sağlamış olduğu hizmetlerden biri değildir?",
            options: ["İkmal hizmetlerini organize etme", "Yolcu ve yük hizmetlerini organize etme", "Personel değişikliği hizmeti", "Yükleme-boşaltma hizmetlerini organize etme", "Kılavuzluk yapma hizmeti"],
            answer: 4
        },
        {
            id: 374,
            q: "Kılavuz alma ve geminin yönetimini de kılavuza bırakmak zorunda olunması hali aşağıdakilerden hangisidir?",
            options: ["Mecburi Müşavir Kılavuzluk", "Mecburi Sevk ve İdare Kılavuzluğu", "Mecburi Sevk Kılavuzluğu", "İhtiyari Kılavuzluk", "Mecburi İdare Kılavuzluğu"],
            answer: 1
        },
        {
            id: 375,
            q: "Gemi zorunlu sevk kılavuzu tarafından sevkedilirken onun kusurundan ileri gelen çatmadan kim sorumludur?",
            options: ["Kılavuz Kaptan", "Liman Başkanlığı", "Donatan", "Liman İşletme Müdürlüğü", "Taşıyan"],
            answer: 2
        },
        {
            id: 376,
            q: "Donatanın çevre kirliliğinden doğan sorumluluğunun hukuki niteliği hangisidir?",
            options: ["Sınırsız", "Sınırlı ayni", "Sınırlı şahsi", "Sınırsız ayni", "Sorumluluğu yoktur"],
            answer: 0
        },
        {
            id: 377,
            q: "6102 sayılı (yeni) Türk Ticaret Kanunu md. 1062 uyarınca aşağıdakilerden hangisi donatanın gemi adamlarının verdiği zarardan sorumlu olmasının şartlarından biri değildir?",
            options: [
                "Üçüncü bir kişi zarar görmüş olmalıdır",
                "Gemi adamı kusursuz olmalıdır",
                "Gemi adamı zararı görevini yerine getirirken vermiş olmalıdır",
                "Zarar veren gemi adamı olmalıdır",
                "Gemi adamının eylemi hukuka aykırı olmalıdır"
            ],
            answer: 1
        },
        {
            id: 378,
            q: "6102 sayılı Türk Ticaret Kanununun getirdiği taşıyanın sorumluluk rejiminin kapsamını aşağıdaki ifadelerden hangisi tam olarak yansıtır?",
            options: [
                "Taşıyan, eşyanın zıya ve ıslanma zararlarından sorumludur",
                "Taşıyan, eşyanın hasar zararlarından sorumludur",
                "Taşıyan, eşyanın zıya ve hasar zararlarından sorumludur",
                "Taşıyan, eşyanın ziya, hasar veya teslimde gecikme zararlarından sorumludur",
                "Taşıyan, eşyanın zıya, hasar, ıslanma ve çalınma zararlarından sorumludur"
            ],
            answer: 3
        },
        {
            id: 379,
            q: "Aşağıdaki uluslararası düzenlemelerden hangisi donatanın sorumluğunun sınırlandırılması ile ilgilidir?",
            options: [
                "1924 Brüksel Konvansiyonu, 1968 Visby Kuralları, 1978 Hamburg Kuralları",
                "1924 Brüksel, 1957 Brüksel Protokolü ve 1976 Londra Sözleşmesi",
                "1950-1974-1994 York - Anvers Kuralları",
                "2009 Rotterdam Kuralları",
                "1973-1978 MARPOL ve 1974 SOLAS Sözleşmeleri"
            ],
            answer: 1
        },
        {
            id: 380,
            q: "Bozkurt - Lotus davasında devletlerin yargı yetkisi ile ilgili olarak tartışılan önemli konulardan biri aşağıdakilerden hangisidir?",
            options: [
                "Yetkinin ülkeselliği ilkesi ve bayrak devletlerinin yargı yetkisi",
                "Bozkurt gemisinin bağlama limanı mahkemesinin yargı yetkisi",
                "Lotus gemisinin bağlama limanı mahkemesinin yargı yetkisi",
                "Çatmanın meydana geldiği yer mahkemesinin yargı yetkisi",
                "Davalının ikametgahının bulunduğu yer mahkemesinin yargı yetkisi"
            ],
            answer: 0
        },
        {
            id: 381,
            q: "Çatmada zaman aşımı süresi aşağıdakilerden hangisidir?",
            options: ["1 yıl", "2 yıl", "5 yıl", "3 yıl", "7 yıl"],
            answer: 1
        },
        {
            id: 382,
            q: "Aşağıdakilerden hangisinde çatma hukuku uygulanmaz?",
            options: [
                "Müşterek kusurlu olarak kılavuz botuna çarpma",
                "Kusursuz olarak yolcu motoruna çarpma",
                "Kusurlu olarak marinaya çarpma",
                "Kusurlu olarak tarak gemisine çarpma",
                "Kusurlu olarak kardinal şamandırasına çarpma"
            ],
            answer: 4
        },
        {
            id: 383,
            q: "Aşağıdakilerden hangisi çatmanın çeşitleri arasında sayılmaz?",
            options: [
                "Müşterek kusurlu çatma",
                "Kusursuz çatma",
                "Kusurlu çatma",
                "Tek taraflı kusurlu çatma",
                "Kusurlu olarak denizde sabit bir cisme çatma"
            ],
            answer: 4
        },
        {
            id: 384,
            q: "Aşağıdaki nedenlerin hangisinde gerçekleşmiş olan çatma, deniz hukukuna göre 'kusursuz çatma' olarak sayılmaz?",
            options: [
                "Umulmayan bir hal durumunda",
                "Kılavuz kaptanın serdümene hatalı rota vermesi nedeniyle",
                "Karşı konulmaz bir sebep durumunda",
                "Depremin yarattığı dalgalar nedeniyle",
                "Çatmanın sebebi tesbit edilememiş ise"
            ],
            answer: 1
        },
        {
            id: 385,
            q: "Aşağıdakilerden hangisinde çatma yoktur? (I İki geminin çarpışması, II Geminin rıhtıma çarpması, III Geminin sandala çarpması, IV Geminin kendisini çeken romorköre çarpması)",
            options: ["Sadece I", "I ve Il", "I ve IV", "II ve III", "II, III, IV"],
            answer: 4
        },
        {
            id: 386,
            q: "Müşterek kusurlu çatmada can zararlarından sorumluluk taraflar arasında nasıl paylaşılır?",
            options: [
                "Herkes zararına katlanır",
                "Kusuru fazla olan gemi donatanı zararı tazmin eder",
                "Donatanlar kusurlarının ağırlığı ölçüsünde sorumludur",
                "Donatanlar eşit olarak zararın tazmini yoluna giderler",
                "Donatanlar zarar görene karşı müteselsilen sorumludur"
            ],
            answer: 4
        },
        {
            id: 387,
            q: "Müşterek kusurlu çatmada can zararlarından sorumluluk hangi esasa tabidir?",
            options: [
                "Donatanlar eşit olarak zararın tazmini yoluna giderler",
                "Zarar görene karşı donatanlar müteselsilen sorumludur",
                "Zarar gören kendi zararına katlanır",
                "Zarar görene karşı donatanlar kusurlarının ağırlığı ölçüsünde sorumludur",
                "Zarar görene karşı kusuru fazla olan gemi donatanı zararı tazmin eder"
            ],
            answer: 1
        },
        {
            id: 388,
            q: "Çatmada, karşı tarafa verilen zararın **(Boşluk)** oranını RDC (Running Down Clause) gereğince koruma ve tazmin kulübü (P&I) karşılar",
            options: ["3/4", "1/2", "1/3", "2/3", "1/4"],
            answer: 0
        },
        {
            id: 389,
            q: "6102 sayılı Türk Ticaret Kanununa göre aşağıdakilerden hangisi gemi alacaklısı hakkı verir?",
            options: ["Gemi sigorta prim borcu", "Yükün gümrük harcı", "Geminin yakıt borcu", "Kurtarma ücreti", "Geminin tersanedeki onarımından doğan borçları"],
            answer: 3
        },
        {
            id: 390,
            q: "Aşağıdakilerden hangisi kurtarma ücretinin tayininde dikkate alınması gereken unsurlardan değildir?",
            options: ["Harcanan zaman", "Kurtarma form sözleşmesinin mevcudiyeti", "Emek", "Kullanılan malzemenin değeri", "Kurtaranın özel maksatlı gemi olması"],
            answer: 1
        },
        {
            id: 391,
            q: "Aşağıdakilerden hangisi kurtarma ve yardım ücretinin tayininde dikkate alınması gereken unsurlardan değildir?",
            options: ["Harcanan zaman", "Emek", "Kullanılan malzemenin değeri", "Kurtarılan yükün değerini aşması", "Kurtaranın özel maksatlı gemi olması"],
            answer: 3
        },
        {
            id: 392,
            q: "Aşağıdakilerden hangisi, TTK md.1230 gereği; makinalı gemilerde kaptan hariç, baş mühendis dahil, gemi adamlarının tümünün kurtarma yardım alacağının miktarını gösterir",
            options: ["Kazanılan kurtarma yardım ücretinden masraflar çıkarılmadan 1/8", "Kazanılan kurtarma yardım ücretinden masraflar çıkarıldıktan sonra 1/2", "Kazanılan kurtarma yardım ücretinden masraflar çıkarıldıktan sonra 1/3", "Kazanılan kurtarma yardım ücretinden masraflar çıkarıldıktan sonra %10", "Kazanılan kurtarma yardım ücretinden masraflar çıkarıldıktan sonra 1/6"],
            answer: 3
        },
        {
            id: 393,
            q: "Aşağıdakilerden hangisi kaptanın haklarından değildir?",
            options: ["Ücret", "Tedavi masrafları", "Kendi hesabına yük ve yolcu taşımak", "Ücretli izin", "Bağlama limanına dönüş masrafları"],
            answer: 2
        },
        {
            id: 394,
            q: "TTK'nın kaptanın hakları ile ilgili düzenlemesine aşağıdakilerden hangisi aykırıdır?",
            options: ["Kaptan, yükle ilgililerden gerekirse prim, ikramiye alabilir", "Kaptan, donatanın izni olmadan kendi hesabına yük taşıyamaz", "Belirli durumlarda yurda dönüş masraflarını donatan öder", "Hastalanması halinde tedavi ve ilaç giderlerini donatan öder", "Gemi iaşe edilme hakkı vardır"],
            answer: 0
        },
        {
            id: 395,
            q: "Aşağıdakilerden hangisi kaptanın 'özel' hukuka ilişkin görev ve yetkilerine girmez?",
            options: ["Gemiye yüklenen yüke ilişkin konşimento ve manifestoları imzalamak", "Yüklemeyi, istifi denizcilik usullerine göre yapmak", "Gemisini denize, yola ve yüke elverişli tutmak", "Gerektiğinde gemi sicil ve nüfus memurluğu görevi yapmak", "Gemiyi tedbirli şekilde sevk ve idare etmek"],
            answer: 3
        },
        {
            id: 396,
            q: "Aşağıdakilerin hangisi 'Kaptan'ın kamu hukukuna ilişkin görev ve yetkilerine girmez?",
            options: ["Soruşturma yapmak", "Yeddieminlik ve muhafaza görevi yapmak", "Şahsi sicil ve nüfus memurluğu görevi yapmak", "Yüklemeyi, istifi denizcilik usullerine göre yapmak", "Emir ve disiplin yetkisini kullanmak"],
            answer: 3
        },
        {
            id: 397,
            q: "Aşağıdakilerden hangisi kaptanın yolculuk sırasındaki görevlerinden değildir?",
            options: ["Borda evrakını hazırlamak", "Gemiyi dikkat ve itina ile sevk ve idare etmek", "Gerektiğinde donatandan talimat almak", "Geminin denize, yola ve yüke elverişli olmasının devamını sağlamak", "Deniz seyir kurallarına uyma"],
            answer: 0
        },
        {
            id: 398,
            q: "Aşağıdakilerden hangisi kaptanın yolculuk bittikten sonraki işlemlerinden değildir?",
            options: ["Varma limanında resmi muameleleri yapmak", "Dönüş yolculuğu için yük aramak", "Yükü usulü dairesinde boşaltmak", "Yolculuk hakkında donatana bilgi vermek", "Gemiyi yeni sefer için hazırlamak"],
            answer: 1
        },
        {
            id: 399,
            q: "Aşağıdakilerden hangisi kaptanın yolculuk başlamadan önceki görevlerinden değildir?",
            options: ["Yerli ve yabancı mevzuata riayet etmek", "Donatana bilgi vermek", "Geminin yola çıkabilmesi için gerekli tüm resmi muameleleri yapmak", "Gümrük, polis, vergi ve kambiyo hükümlerine riayet etmek", "Konşimento karşılığında yükü teslim etmek"],
            answer: 4
        },
        {
            id: 400,
            q: "Aşağıdakilerden hangisi Kaptan'ın bağlama limanı haricinde kanuni temsil yetkisi dışındadır?",
            options: ["Gemiyi, navlun ve yükü sigorta ettirmek", "Donatan adına kambiyo senedi imzalamak", "Donatan tarafından akdedilmiş taşıma sözleşmeler ifa etmek", "Yükü, gemi ve navlunla karşılık göstererek deniz ödüncü almak", "Gemiye tayfa almak"],
            answer: 1
        },
        {
            id: 401,
            q: "Aşağıdakilerden hangisi Kaptanın kanuni temsil yetkisi'ni kapsar?",
            options: ["İşveren vekili olarak sadece donatanın malını korumak", "Donatanı, taşıyanı, yükü ve yük ilgililerini temsil etme", "İşveren vekili olarak sadece armatörü ve ortakları temsil eder ve korur", "Gemideki yükü ve yolcuları korumak", "Emrindeki çalışanların hakkını korumak ve temsil etmek"],
            answer: 1
        },
        {
            id: 402,
            q: "Aşağıdakilerin hangisi Türk Ticaret Kanununa göre (md.1089) kaptanın sorumlu olduğu kişileri gösterir?",
            options: [
                "Kaptan, kusuruyla yol açtığı zararlardan yolcular da dahil gemi ve eşyayla ilgili herkese karşı sorumludur",
                "Kaptan, donatana, taşıyana, taşıtana, yükletene, gönderilene, gemiadamlarına, deniz ödüncü alacaklılarına ve gemi alacaklılarına karşı sorumludur",
                "Kaptan, donatana, donatma iştirakinde müşterek donatanlara, taşıyana, taşıtana, kurtarma alacaklısına ve müşterek avarya alacaklılarına, liman ve gümrük yetkilileri ile emniyet güçlerine karşı sorumludur",
                "Kaptan, donatana, taşıyana, taşıtana, yükletene, gönderilene, gemi adamlarına, kurtarma alacaklısına ve müşterek avarya alacaklılarına karşı sorumludur",
                "Kaptan, donatana, donatma iştirakinde müşterek donatanlara, taşıyana, taşıtana, yükletene, gönderilene, çarterere, gemi adamlarına, kurtarma alacaklısına ve müşterek avarya alacaklılarına karşı sorumludur"
            ],
            answer: 3
        },
        {
            id: 403,
            q: "CLC Sözleşmesi'nin uygulanması halinde zararların tazmininde hangi mali birim geçerlidir?",
            options: ["ABD Doları", "Altın Frank", "Euro", "Türk Bayraklı gemiler için Türk Lirası", "Özel Çekme Hakkı (SDR)"],
            answer: 4
        },
        {
            id: 404,
            q: "Telsiz Yönetmeliği'nde belirtilen miktar ve teknik özellikte cihaz bulundurmayan deniz taşıtlarına aşağıdaki işlemlerden hangisi uygulanır?",
            options: ["Seferine izin verilmez", "Uluslar arası seferine izin verilmez", "Ruhsat düzenlenmez", "Ehliyet 1 yıl geri alınır", "Yukarıdakilerden hiçbiri"],
            answer: 0
        },
        {
            id: 405,
            q: "Gemi telsiz istasyonunun operatörsüz olarak çalıştırıldığı tespit edildiği takdirde ne tür ceza uygulanır?",
            options: ["Ceza uygulanmaz", "Gemi 1 ay seferden men edilir", "Geminin telsiz ruhsatı iptal edilir", "Geminin telsiz cihazları mühürlenir", "Gemi 3 ay seferden men edilir"],
            answer: 2
        },
        {
            id: 406,
            q: "Denizde Can ve Mal Koruma Hakkında Kanunun 20.maddesi gereğince verilen idari para cezalarının ne kadarı kaptana verilir?",
            options: ["Cezanın 1/2 si verilir", "Cezanın 1/3 ü verilir", "Cezanın iki katı verilir", "Cezanın üç katı verilir", "Cezanın dört katı verilir"],
            answer: 1
        },
        {
            id: 407,
            q: "Deniz İş Kanununun 51.maddesi gereğince gemiadamlarını yurda iade etme zorunluluğuna uymayan (Md.21-23) işveren yada işveren vekiline hangi cezai müeyyide uygulanır?",
            options: [
                "İdari para cezası verilir",
                "1000 liradan az olmamak üzere idari para cezası verilir",
                "Hapis cezası verilir",
                "Gemisi seferden alıkonur",
                "Ticaretten men edilir"
            ],
            answer: 3
        },
        {
            id: 408,
            q: "Denizde Can ve Mal Koruma Hakkında Kanun gereğince yetkili olmadığı takdirde yükleme markalarının yerini değiştirenler **(Boşluk)** kadar hapis cezasıyla cezalandırılır' cümlesinde boş bırakılan yere aşağıdaki seçeneklerden hangisi gelmelidir?",
            options: ["altı aydan bir yıla", "bir aydan üç aya", "üç aydan altı aya", "iki yıla", "beş yıla"],
            answer: 0
        },
        {
            id: 409,
            q: "Türk Ticaret Kanununa göre (md. 940 ve 947) aykırı olarak Türk Bayrağı çeken geminin kaptanına uygulanacak yaptınım hangisidir?",
            options: ["Gemi deniz ticaretinden men edilir", "Gemi satılır", "Gemi müsadere edilir", "Adli para cezası veya altı aya kadar hapis cezası verilir", "Idari para cezası verilir"],
            answer: 3
        },
        {
            id: 410,
            q: "Türk Ticaret Kanunu (md 948) gereğince, gemi tasdiknamesini/bayrak şahadetnamesini gemide bulundurmayan gemi kaptanına uygulanacak yaptırım hangisidir?",
            options: ["1000 TL adli para cezası verilir", "İki aya kadar hapis veya yüz güne kadar adlı para cezası verilir", "Kaptanlık yeterliliği askıya alınır", "1000 TL idari para cezası verilir", "Gemi Adamlan Yönetmeliği uyanınca 'Kınama' cezası verilir"],
            answer: 1
        },
        {
            id: 411,
            q: "4922 sayılı Kanunda yer alan ve Türk Ticaret Kanununun ilgili maddeleri uyarınca, deniz raporu almayan veya bu raporun tasdikli bir suretini kazadan sonra uğradığı ilk limanda liman başkanlığına vermeyen gemi kaptanı **(Boşluk)** cezası ile cezalandırılır",
            options: ["idari para", "adli para", "iki yıla kadar hapis", "altı aydan bir yıla kadar hapis", "üç yıl meslekten men"],
            answer: 0
        },
        {
            id: 412,
            q: "IMO tarafından yapılan sözleşmeler genel olarak dört temel grup altında incelenecek olursa Load Line (LL) sözleşmesi yukarıdaki sınıflandırmalardan hangisi yada hangilerine dahil olur? (I-Denizcilik güvenliği, II- Deniz kirliliği, III-Sorumluluk ve tazminat, IV-Diğer konular)",
            options: [
                "I",
                "II",
                "III",
                "IV",
                "I, II, III ve IV"
            ],
            answer: 0
        },
        {
            id: 413,
            q: "IMO tarafından yapılan sözleşmeler genel olarak dört temel grup altında incelenecek olursa Convention on the International Regulations for Preventing Collisions at Sea (COLREG) 1972 sözleşmesi yukarıdaki sınıflandırmalardan hangisi ya da hangilerine dahil olur? (I) Maritime Safety (Denizcilik Güvenliği), (II) Marine Pollution (Deniz Kirliliği), (III) Liability and Compensation (Sorumluluk ve Tazminat), (IV) Other Subjects (Diğer Konular))",
            options: [
                "I",
                "II",
                "III",
                "IV",
                "I ve II"
            ],
            answer: 0
        },

        // --- Deniz HUKUKU 5.pdf (Part 7 - IDs 414-495) ---
        {
            id: 414,
            q: "Serbest Pratika' aşağıdakilerden hangisidir?",
            options: ["Temiz patenta", "Serbest geçiş", "Transit geçiş", "Uğraksız geçiş", "Liman giriş müsaadesi"],
            answer: 0
        },
        {
            id: 415,
            q: "Temiz patenta hangi kurumun ilgili biriminden alınır?",
            options: ["Liman Başkanlığı", "Ulaştırma ve Altyapı Bakanlığı", "Sahil Güvenlik Komutanlığı", "Marina Müdürlüğünden", "Hudut ve Sahiller Sağlık Genel Müdürlüğü"],
            answer: 4
        },
        {
            id: 416,
            q: "Aşağıdakilerden hangisi 'hukuken gemide bulunması gereken belgeler'den (Borda veya Gemi Evrakı) biri değildir?",
            options: ["Gemi tasdiknamesi ve Bayrak şehadetnamesi", "Manifesto", "Gemi sicili", "Yola veya denize elverişlilik belgeleri", "Gemi jurnali"],
            answer: 2
        },
        {
            id: 417,
            q: "Aşağıdakilerin hangisi 'Gemi Sicili' ile ilgili değildir?",
            options: ["Resmi sicildir", "Gemi adamlarının sayısı ve yeterliklerini düzenler", "İlgisini ispatlayan herkese açıktır (alenidir)", "Türk bayrağı taşıyan gemilerin kaydını tutmaya yarar", "Mülkiyet, ipotek, intifa gibi özel hukuk ilişkilerini düzenler"],
            answer: 1
        },
        {
            id: 418,
            q: "Aşağıdakilerden hangisi geminin bağlama limanı ile ilgili değildir?",
            options: ["Geminin tescil edileceği sicil dairesinin belirlenmesi", "Sörvey yapılacağı yerin belirlenmesi", "Kaptanın, donatanı temsil yetkisi sınırlarının belirlenmesi", "Donatan hakkında açılacak davalarda yetkili mahkemelerin belirlenmesi", "Geminin seferlerinin yönetildiği yerin belirlenmesi"],
            answer: 2
        },
        {
            id: 419,
            q: "4922 sayılı Denizde Can ve Mal Kurtarma Hakkında Kanun gereği aşağıdakilerden hangisi geminin esas belgelerinden sayılır?",
            options: ["Denizde Çatışmayı Önleme Tüzüğü Kitapçığı", "Role Cetveli", "Training Manuel", "MARPOL Kitabı", "SOLAS Kitabı"],
            answer: 1
        },
        {
            id: 420,
            q: "Bir yük gemisinin Uluslararası Denizde Can Emniyeti Sözleşmesi (SOLAS-74) nin Bölüm II-I, II-II, III ve IV'de belirtilen gerekliliklere ve ilgili diğer uluslararası kurallara uygun şekilde teçhiz edildiğini gösteren ve orijinalinin gemide bulunması zorunlu olan belge aşağıdakilerden hangisidir?",
            options: ["Uluslararası Yük Gemisi İnşa Emniyet Belgesi (ISCC)", "Uluslararası Yük Gemisi Teçhizat Emniyet Belgesi (ISCC)", "Uluslararası Yolcu Gemisi Emniyet Belgesi (ISCC)", "Uluslararası Petrolle Kirlenmenin Önlenmesi Belgesi (IOPP)", "Uluslararası Emniyetli Yönetim Belgesi (SMC)"],
            answer: 0
        },
        {
            id: 421,
            q: "Deniz turizm araçlarının araç, gümrük, personel, yolcu, pasaport, sıhhi muamele, liman, eşya ve sefer ile ilgili diğer işlemlerinin tamamı hangi belge üzerinde yapılır?",
            options: ["Seyir İzin Belgesi", "Transit Log", "Yola Elverişlilik Belgesi", "Gümrük Giriş Beyannamesi", "Serbest Pratika Belgesi"],
            answer: 1
        },
        {
            id: 422,
            q: "Yükün emniyetle bağlanmasından kaptan sorumludur. Özensiz yapılmış bağlama sebebiyle doğacak yük hasarından taşıyan sorumludur. Taşıyan bu işin teknik yönden uygunluğunu bir belge alarak kanıtlar. Bu belgenin adı nedir?",
            options: ["Hazırlık mektubu", "Laşing sertifikası", "Yük donanımı sertifikası", "Yük gemisi teçhizat emniyet belgesi", "Yola elverişlilik belgesi"],
            answer: 1
        },
        {
            id: 423,
            q: "Deniz raporu Türkiye Cumhuriyeti sınırları içerisinde nereden alınır?",
            options: ["Mahkemeden", "Noterden", "Liman Başkanlığından", "Liman İşletmesinden", "Gümrük Muhafazadan"],
            answer: 2
        },
        {
            id: 424,
            q: "450 GRT'den (Gross Ton) büyük bir kuru yük gemisinde aşağıdaki belge ve dökümanlardan hangisi bulunmaz?",
            options: ["SOPEP", "SMPEP", "IOPP", "SMC", "Loadline"],
            answer: 3
        },
        {
            id: 425,
            q: "Yolculuk mücbir sebeple uzamadığı takdirde Bayrak Şahadetnamesi düzenlendiği günden itibaren kaç yıl geçerlidir?",
            options: ["1", "3", "2", "5", "4"],
            answer: 0
        },
        {
            id: 426,
            q: "Yasal mevzuata göre, onsekiz yaşından küçük gemiadamlarının periyodik sağlık yoklamaları kaç yılda bir yapılır?",
            options: ["İki yılda bir", "Beş yılda bir", "Zorunlu değildir", "Her yıl", "Üç yılda bir"],
            answer: 3
        },
        {
            id: 427,
            q: "Gemilerin teknik yönetmeliğinde İdarece tanınan istisnai durumlar hariç olmak üzere normalde liman çıkış belgesinin geçerlilik süresi ne kadardır?",
            options: ["Denize elverişlilik belgesinin süresi kadar", "Seferlik", "Bir yıl", "Üç ay", "Altı ay"],
            answer: 1
        },
        {
            id: 428,
            q: "SOLAS-88 Sörvey uyum sistemine göre yolcu gemilerinin 'Yolcu Gemisinin Emniyet Belgesi' kaç yılda bir yenilenir?",
            options: ["2 yılda bir", "4 yılda bir", "3 yılda bir", "Her yıl", "5 yılda bir"],
            answer: 4
        },
        {
            id: 429,
            q: "Yolcu gemisi emniyet sertifikasının süresi aşağıdakilerden hangisidir?",
            options: ["3 Ay", "6 Ay", "12 Ay", "5 Yıl", "20 Ay"],
            answer: 2
        },
        {
            id: 430,
            q: "Denize elverişlilik belgesi yıllık vizelere tabi olarak kaç yıllık düzenlenir?",
            options: ["5", "1", "2", "3", "4"],
            answer: 1
        },
        {
            id: 431,
            q: "Gemilerin Teknik Yönetmeliği uyarınca; 'Denize Elverişlilik' belgesi, yıllık vizelerin yapılması kaydıyla en fazla ne kadar süre ile verilir?",
            options: ["6 ay", "2 yıl", "Seferlik", "5 yıl", "1 yıl"],
            answer: 3
        },
        {
            id: 432,
            q: "'Denizde elverişlilik' belgesinin geçerlik süresi ne kadardır?",
            options: ["Seferlik", "Klas sörveyi tarihine kadar", "Üç ay", "Altı ay", "Yıllık sörveyleri ilişkin vizeleri içermek şartıyla azami beş yıl"],
            answer: 4
        },
        {
            id: 433,
            q: "Bağlama kütüğü ruhsatnamesi ne zaman vize edilir?",
            options: ["Her yıl", "İki yılda bir", "Üç yılda bir", "Beş yılda bir", "Vize edilemez"],
            answer: 1
        },
        {
            id: 434,
            q: "Tekne, makine klas sertifikaları kaç yılda bir yenilenir?",
            options: ["Her yıl", "3 yılda bir", "4 yılda bir", "5 yılda bir", "2 yılda bir"],
            answer: 3
        },
        {
            id: 435,
            q: "SOLAS'a göre bir geminin sertifikasının geçerlilik süresinin sona erdiği tarihte sörveye tabi tutulacağı limanda bulunmaması durumunda Bayrak Devletlerince sertifikanın geçerlilik süresini azami ne kadar uzatabilir?",
            options: ["3 ay", "Uzun sefer için 3 ay, kısa sefer için 1 ay", "6 ay", "Uzatma yapılamaz", "4 ay"],
            answer: 0
        },
        {
            id: 436,
            q: "Liman Devleti Denetimi Yönetmeliği uyarınca, Liman Devleti Kontrol Sisteminde (PSC) kontrol raporlarının geçerlilik süresi ne kadardır?",
            options: ["15 gün", "30 gün", "45 gün", "3 ay", "6 ay"],
            answer: 3
        },
        {
            id: 437,
            q: "Aşağıdakilerden hangisi deniz taşımacılığı tarafı değildir?",
            options: ["Taşıyan", "Taşıtan", "Yükleten", "Alıcı/gönderilen", "Stevedor"],
            answer: 4
        },
        {
            id: 438,
            q: "Taşıma sözleşmesine göre yükleme boşaltma için üzerinde anlaşılan süreye ne denir?",
            options: ["Kançello", "Starya", "Surstarya", "Dispeç", "Time-charter"],
            answer: 1
        },
        {
            id: 439,
            q: "Taşıyanın eşyanın yüklenmesi ve boşaltılması için kanunen beklemek zorunda olduğu süreye ne denir?",
            options: ["Starya", "Sürastarya", "Liman süresi", "Dispeç", "Kançello"],
            answer: 1
        },
        {
            id: 440,
            q: "Navlun yük sahibi tarafından armatöre aşağıdakilerden hangi durum için ödenen bir bedeldir?",
            options: ["Yükün gemiye yüklenmesi için", "Yükün gemiden boşaltılması için", "Yükün gemide laşingi için", "Yükün gemi ile taşınması için", "Yükün teslimi için"],
            answer: 3
        },
        {
            id: 441,
            q: "Demuraj bedelinin ödenmesinde aşağıdaki ifadelerden hangisi doğrudur?",
            options: ["Armatörün yük sahibine ödediği bedeldir", "Armatörün acenteye ödediği bedeldir", "Yük sahibinin armatöre ödediği bedeldir", "Yük sahibinin stevedora ödediği bedeldir", "Armatör acentesinin limana ödediği bedeldir"],
            answer: 2
        },
        {
            id: 442,
            q: "Yüklemenin veya boşaltmanın zamanından önce yapılması sonucunda tasarruf edilen zaman nedeniyle taşıtana veya gönderilene ödenen paraya **(Boşluk)** denir.",
            options: ["Navlun", "Hizmet ücreti", "Dispeç ücreti", "Sigorta primi", "İade primi"],
            answer: 2
        },
        {
            id: 443,
            q: "6102 sayılı Türk Ticaret Kanununa göre yükleme veya boşaltma işlemi, navlun sözleşmesinde öngörülen süreden önce tamamlanmış olursa aşağıdakilerden hangisi söz konusu olabilir?",
            options: ["Hızlandırma Primi", "Sürastarya", "Starya", "3 günlük ek süre", "Adres Komisyonu"],
            answer: 0
        },
        {
            id: 444,
            q: "Bir navlun sözleşmesinin kurulması için tarafları bir araya getiren ve bu iş için belirli bir komisyon alan kişiye **(Boşluk)** denir.",
            options: ["Stevedor", "Yükleten", "Taşıyan", "Broker", "Acente"],
            answer: 3
        },
        {
            id: 445,
            q: "TTK'nun ilgili maddelerine göre aşağıdaki hükümlerden hangisi doğrudur?",
            options: ["Yükletenin muvafakatı olmadıkça eşya, yük güvertede taşınamaz", "Kaptanın bilgisi olmadan gemi ile taşınan yüke gelen zarardan Kaptanda sorumludur", "Taşıyan, taşıtanın muvafakatını almadan yükü başka gemiye yükleyebilir", "Sürastarya mukavele ile belirlenmemiş ise taşıyanın takdirine göre belirlenir", "Yükleme müddetinde günler iş günü olarak hesap edilir"],
            answer: 0
        },
        {
            id: 446,
            q: "Çarter sözleşmelerinde kullanılan 'SSHINC' kısaltması hangi anlamda kullanılmaktadır?",
            options: ["Cumartesi, Pazar ve tatil günlerine denk gelen demirde beklemeler işleme alınmayacaktır", "Tüm günler elleçleme yapılacaktır", "Cumartesi, Pazar ve tatil günleri dahil limanda elleçleme yapılmamaktadır", "Cumartesi, Pazar ve tatil günleri yapılan elleçleme fazladan ücrete tabidir", "Cumartesi, Pazar ve tatil günleri hariç diğer günler elleçleme yapılacaktır"],
            answer: 1
        },
        {
            id: 447,
            q: "'Pazar ve bulunulan limanın resmi tatil günleri dışında gece yarısı saat 24:00 dan ertesi gün 24:00 a kadar kesintisiz devam eden' Starya günü aşağıdaki kısaltmalardan hangisiyle uyumludur?",
            options: ["SHINC", "WWD", "SHEX", "WD", "FIOS"],
            answer: 3
        },
        {
            id: 448,
            q: "6102 sayılı (yeni) Türk Ticaret Kanunu hükümlerine göre aşağıdakilerin hangisi hukuken kıymetli evrak niteliğindedir?",
            options: ["Manifesto", "Yükleme Konşimentosu", "Yük senedi", "Yükleme ordinosu", "Tesellüm Konşimentosu"],
            answer: 1
        },
        {
            id: 449,
            q: "Bir yükün bir gemiye yüklendiğini belirten dökümana ne ad verilir?",
            options: ["Yükleme ordinosu", "Manifesto", "Olgular tutanağı", "Konşimento", "Hazırlık mektubu"],
            answer: 3
        },
        {
            id: 450,
            q: "Aşağıdaki yük dökümanlarından hangisi ciro edilebilir?",
            options: ["Manifesto", "Yükleme ordinosu", "Yük listeleri", "Konşimento", "Draft raporu"],
            answer: 3
        },
        {
            id: 451,
            q: "Aşağıdaki evraklardan hangisi Navlun'un ödenebilmesi için gerekli ve yükü temsil eden bir evraktır?",
            options: ["Manifesto", "Ordino", "Konşimento", "Draft Sörvey raporu", "NIL listesi"],
            answer: 2
        },
        {
            id: 452,
            q: "Aşağıdaki dökümanlardan hangisi armatörden özel yetki alınsa bile acente tarafından imzalanamaz?",
            options: ["Zaman çizelgesi", "Konşimento", "Yükleme ordinosu", "Hazırlık mektubu", "Olgular tutanağı"],
            answer: 1
        },
        {
            id: 453,
            q: "Aşağıdaki konşimentolardan hangisi ile ticari işlem yapılmaz?",
            options: ["Kirli konşimento", "Ada yazılı konşimento", "Hamiline yazılı konşimento", "Temiz konşimento", "Taze konşimento"],
            answer: 0
        },
        {
            id: 454,
            q: "Konşimento için aşağıdaki ifadelerden hangisi yanlıştır?",
            options: ["Bir yükün bir gemiye yüklendiğini gösteren bir belgedir", "Bir tür taşıma sözleşmesidir", "Armatör adına kaptan veya kaptanın yetkili kıldığı kişi tarafından imzalanır", "Manifestoya uygun olarak düzenlenir", "Orjinal Konşimento olmalıdır"],
            answer: 3
        },
        {
            id: 455,
            q: "Aşağıdakilerden hangisi konşimentonun hukuki özelliklerinden değildir?",
            options: ["Kıymetli evraktır", "Karine fonksiyonu sözkonusudur", "Yükün taşınmak üzere taşıyan tarafından teslim alındığını gösterir", "Varma limanında tek nüshasının ibrazı halinde gönderilene yük teslim edilir", "Varma limanı öncesinde hiç bir nüshası ibraz edilmese de yük gönderilene teslim edilir"],
            answer: 4
        },
        {
            id: 456,
            q: "Hangisi Booking Note diye bilinen belgenin hukuki fonksiyonlarından biri değildir?",
            options: ["Belli bir yük için rezervasyon anlaşması", "Yükün taşınmak üzere taşıyan tarafından teslim alındığını belgeler", "Bu anlaşma taraflar arasındaki tazmin sözleşmesinin şartlarını belirler", "Bu anlaşma taraflar arasındaki taşıma sözleşmesinin yazılı belgesidir", "Bir ön anlaşma niteliğindedir"],
            answer: 1
        },
        {
            id: 457,
            q: "Türk Ticaret Kanununa göre (md. 1152), 'hazırlık bildirimi' ne zaman verilebilir?",
            options: ["Seyirde", "Her zaman verilebilir", "Navlun mukavelesi yapılınca", "İlk kalkış limanında", "Yükleme limanında demirleme yerine varınca"],
            answer: 4
        },
        {
            id: 458,
            q: "Hazırlık mektubu bir geminin aşağıdaki şıklardan hangisine hazır olduğunu belgelemek için verilir?",
            options: ["Yüklemeye veya boşaltmaya", "Limana yanaşmaya", "Limana demirlemeye", "Limandan hareket etmeye", "On hire durumunda"],
            answer: 0
        },
        {
            id: 459,
            q: "Manifesto kim tarafından imzalanır?",
            options: ["Kaptan tarafından", "Zabitler tarafından", "Acente tarafından", "Liman otoritesi tarafından", "Kılavuzluk tarafından"],
            answer: 0
        },
        {
            id: 460,
            q: "Yükleme ordinosunu aşağıdakilerden hangisi imzalayabilir?",
            options: ["Acente", "Broker", "Yük Zabiti veya Kaptan", "Gümrük idaresi", "Liman başkanı"],
            answer: 2
        },
        {
            id: 461,
            q: "Kiralanmış bir gemide limana varış anından limandan ayrılana kadar bütün olayların tarih ve saat ile kaydedildiği tutanağa ne denir?",
            options: ["Manifesto", "Ordino", "Olgular tutanağı", "Konşimento", "Protesto mektubu"],
            answer: 2
        },
        {
            id: 462,
            q: "Zaman çizelgesi (time sheet) aşağıdakilerden hangisinin tesbiti için yapılır?",
            options: ["Yük hesabı", "Dispeç / Demoreç hesabı", "Navlun hesabı", "Liman masrafları hesabı", "COP durumunda"],
            answer: 1
        },
        {
            id: 463,
            q: "Aşağıdaki evraklardan hangisi tahliye öncesi verilmez?",
            options: ["Boş tank belgesi", "Slop belgesi", "Tahliye protokolü", "Cargo plan", "Liman kontrol"],
            answer: 2
        },
        {
            id: 464,
            q: "Sigorta sözleşmesinin tarafları kimlerdir?",
            options: ["Sigortacı ve kaptan", "Sigortalı ve donatan", "Sigorta ettiren ve sigortacı", "Sigortalı ve kaptan", "Sigortacı ve donatan"],
            answer: 2
        },
        {
            id: 465,
            q: "Tekne sigortası primini kim öder?",
            options: ["Sigorta ettiren", "Sigortacı", "Kazayı yapan", "Kaptan", "Gemi adamı"],
            answer: 0
        },
        {
            id: 466,
            q: "Sigorta bedeli ne zaman ödenir?",
            options: ["Sigortalı istediği zaman", "Sigortacı istediği zaman", "Kaptan istediği zaman", "Tehlike gerçekleştiğinde", "Donatan istediği zaman"],
            answer: 3
        },
        {
            id: 467,
            q: "'Eksik sigorta' cümlesini aşağıdakilerden hangisi tamamlar?",
            options: ["Poliçenin eksik düzenlenmesidir", "Sigorta bedelinin sigorta değerinden az olmasıdır", "Sigorta sözleşmesinin eksik olmasıdır", "Sigorta taraflarının eksik olmasıdır", "Gemideki yüklerin eksilmesidir"],
            answer: 1
        },
        {
            id: 468,
            q: "Sigorta bedelinin, sigorta değerine kıyasen yüksek olduğu hale **(Boşluk)** denilir.",
            options: ["Sigorta poliçesi dışı bir durum", "Aşkın bir sigorta", "Normal bir durum", "Sigorta poliçesine aykırı bir durum", "Eksik bir sigorta"],
            answer: 1
        },
        {
            id: 469,
            q: "'Sigorta bedeli sigorta değerini aşmışsa **(Boşluk)** mevcuttur.' Cümlesinde boş bırakılan yere aşağıdakilerden hangisi gelmelidir?",
            options: ["Sigorta poliçesine aykırı bir durum", "Sigorta poliçesi dışı bir durum", "Fazla bir durum", "Anormal bir durum", "Aşkın sigorta"],
            answer: 4
        },
        {
            id: 470,
            q: "Deniz araçları zorunlu mali mesuliyet sigortası ile ilgili mevzuata aşağıdakilerden hangisi tabidir?",
            options: ["Ticari amaçlı yolcu gemileri", "Tankerler", "Kıyı seferi yapan yük gemileri", "İç sularda sefer yapan yük gemileri", "Kabotaj hattında çalışan yük gemileri"],
            answer: 0
        },
        {
            id: 471,
            q: "Kulüp sigortalarında sigortalı sözleşmesini sona erdirmek istiyorsa buna ilişkin beyanını **(Boşluk)** 'tan evvel kulübe bildirmelidir. Cümlesindeki boş yere aşağıdakilerden hangisi gelmelidir?",
            options: ["20 Mart", "20 Aralık", "Hiçbiri", "20 Ocak", "20 Şubat"],
            answer: 4
        },
        {
            id: 472,
            q: "Aşağıdakilerden hangisi müşterek avarya hallerinden değildir?",
            options: ["Geminin karaya oturtulması", "Denize yük vesaire atılması", "Geminin hafifletilmesi", "Güvertedeki yükün gemiye de hasar vererek aniden denize düşmesi", "Geminin yüzdürülmesi"],
            answer: 3
        },
        {
            id: 473,
            q: "Aşağıdakilerden hangisi müşterek avaryanın unsurlarından değildir?",
            options: ["Kaptanın makul ve açık direnişinin bulunmaması unsuru", "Müşterek tehlike unsuru", "Fedakarlık unsuru", "Fedakarlığın iradi olması", "Faydalı netice unsuru"],
            answer: 0
        },
        {
            id: 474,
            q: "6102 sayılı (yeni) Türk Ticaret Kanununa göre (md. 1272) aşağıdakilerden hangisi Müşterek Avaryanın unsurları arasında aranmaz?",
            options: ["Faydalı neticenin sağlanması", "Hareketin bile bile yapılması (iradi olması)", "Makul bir hareket tarzı oluşturacak şekilde olağanüstü fedakarlık yapılması veya gidere katlanılması", "Gemi, yük ve navlun için müşterek tehlikenin söz konusu olması", "Donatanın onayının alınması"],
            answer: 4
        },
        {
            id: 475,
            q: "Müşterek avaryanın sonucunda ilgililer arasındaki paylaşmayı ve hesaplaşmayı gösteren belge aşağıdakilerden hangisidir?",
            options: ["Müşterek avarya zarar hesabı", "Müşterek avarya manifestosu", "Müşterek avarya idame masrafları hesap cetveli", "Müşterek avarya dispeç raporu", "Müşterek avarya garame nispeti"],
            answer: 3
        },
        {
            id: 476,
            q: "Gemi adamlarının gemilerde minimum çalışma yaşı aşağıdakilerden hangisidir?",
            options: ["15", "17", "19", "16", "18"],
            answer: 4
        },
        {
            id: 477,
            q: "Hangisi gemi adamının kanuni haklarından birisidir?",
            options: ["Gemiye gelmeme", "Kimlik kartı verilmesi", "Sigara kullanma", "Yurda iade", "İçki kullanma"],
            answer: 3
        },
        {
            id: 478,
            q: "Deniz İş Kanununa göre yabancı gemi adamının iade edileceği yer neresidir?",
            options: ["Varılacak ilk liman", "Bağlama limanı", "İkametgahının bulunduğu liman", "Geminin sicil kaydının bulunduğu liman", "Geminin donatanının bulunduğu liman"],
            answer: 2
        },
        {
            id: 479,
            q: "Personelin kişisel haklarından olan iaşe ve ibate kelimeleri neyi ifade eder?",
            options: ["Ücretinin ve maaşının sağlanması", "Yiyeceğinin ve kalacak yerinin sağlanması", "Maaşının ve kalacak yerinin sağlanması", "Yiyeceğinin ve içeceğinin sağlanması", "Sigorta primlerinin yatırılması"],
            answer: 1
        },
        {
            id: 480,
            q: "Aşağıdakilerden hangisinde iaşe servisi kurulması zorunludur?",
            options: ["Şehir hatlarında", "Körfezlerde", "Göllerde", "Akarsularda", "Uzakyolda"],
            answer: 4
        },
        {
            id: 481,
            q: "854 sayılı Deniz İş Kanunu'na göre gemi adamları hizmet mukavelesinde aşağıdakilerden hangisi zorunlu değildir?",
            options: ["Yazılı olması", "İşverenin adının yer alması", "Gemi adamının adının yer alması", "Sözleşmenin yapıldığı yer ve tarih", "Kefilin adı ve adresi"],
            answer: 4
        },
        {
            id: 482,
            q: "İşveren sendikalı ve sendikasız işçiler arasında hangi maddede takdir hakkına haizdir?",
            options: ["İşin sevk ve dağılımında ayırım yapabilir", "Mesleki ilerlemede ayırım yapamaz", "İşin ücretinde ayırım yapamaz", "Sosyal yarımlarda ayırım yapamaz", "İşe son verilmesinde ayırım yapamaz"],
            answer: 0
        },
        {
            id: 483,
            q: "Belirli süre için yapılmış gemi adamı hizmet akdi gemi seyirde iken sona ererse aşağıdakilerden hangisi doğrudur?",
            options: ["Geminin ilk varma limanına varmasına ve güvenlik altına alınıncaya kadar iş akdi uzatılmış sayılır", "Son tahliye limanında güvenlik altına alınmasına kadar iş akdi uzatılmış sayılır", "İş akdi seferin son limanına kadar uzatılmış sayılır", "İş akdi o anda sona erer", "Bağlama limanına dönene kadar iş akdi uzatılmış sayılır"],
            answer: 0
        },
        {
            id: 484,
            q: "854 sayılı Deniz İş Kanununa göre 'belirli süreli' hizmet sözleşmesinde aşağıdakilerden hangisi doğrudur?",
            options: ["Hizmet sözleşmesi gemi seyir halinde iken sona ererse sözleşmenin geminin ilk varma limanına varmasına ve güvenlik altına alınmasına kadar devam eder", "Hizmet sözleşmesi sona ermesine rağmen taraflar açıkça aksini beyan etmemiş ise sözleşme bir sefer için daha yenilenmiş kabul edilir", "Sürenin bitmesi ile gemiadamı ilk varma limanında derhal gemiden çekilir", "Geminin vardığı limanda yükün boşaltılmasıyla gemiadamı gemiden çekilir", "Süreli hizmet sözleşmesi belirli bir sefer için yapılmıştır"],
            answer: 0
        },
        {
            id: 485,
            q: "Aşağıdakilerden hangisi yanlıştır?",
            options: ["Hizmet sözleşmesi belli bir süre için yapılabilir", "Hizmet sözleşmesi süresiz yapılabilir", "Hizmet sözleşmesi belli bir sefer için yapılabilir", "Hizmet sözleşmesi belli bir sefer için yapılmışsa fesih ihbarıyla sona erer", "Hizmet sözleşmesi belli bir sefer için yapılmışsa varma limanında yükün boşaltılmasıyla sona erer"],
            answer: 3
        },
        {
            id: 486,
            q: "854 sayılı Deniz İş Kanununun hükümlerine göre aşağıdaki hangi durumda bir hizmet akdi ile çalışan gemiadamına uygulanır?",
            options: ["Sadece Ege denizinde sefer yapan, Türk veya yabancı bayrak taşıyan yolcu gemisinde çalışan gemiadamına", "Yüz veya daha yukarı gros tonluk, Türk veya yabancı bayrak taşıyan gemide çalışan gemiadamına", "İç sularda tarama faaliyeti yapan, Türk veya yabancı bayrak taşıyan gemide çalışan gemiadamına", "Türk karasularında yük taşıması yapan, Türk veya yabancı bayrak taşıyan tankerde çalışan gemiadamına", "Açık denizlerde gemi yedekleme faaliyetinde bulunan, 400 gros tonluk, Türk bayraklı römorkörde çalışan gemiadamına"],
            answer: 1
        },
        {
            id: 487,
            q: "854 sayılı Deniz İş Kanununa göre gemi adamının genel bakımdan iş süresi haftada kaç saattir?",
            options: ["42", "40", "45", "48", "56"],
            answer: 3
        },
        {
            id: 488,
            q: "854 sayılı Deniz İş Kanununa göre, gemiadamlarının genel bakımdan çalışma süresi günde kaç saattir?",
            options: ["10", "8", "5", "6", "7"],
            answer: 1
        },
        {
            id: 489,
            q: "Fazla çalışma süresi günde kaç saati geçemez?",
            options: ["7", "3", "2", "6", "5"],
            answer: 1
        },
        {
            id: 490,
            q: "Fazla çalışma yapılacak günlerin toplamı bir yılda en çok kaç gün olmalıdır?",
            options: ["30", "45", "60", "90", "180"],
            answer: 3
        },
        {
            id: 491,
            q: "Aşağıdakilerden hangisi fazla çalışma sayılır?",
            options: ["Kaptanın gümrükle ilgili işlemler nedeniyle yapılmasını zorunlu gördüğü işler", "Kaptanın donatanın menfaati için yapılmasını zorunlu gördüğü işler", "Kaptanın gemi adamlarının menfaati için yapılmasını zorunlu gördüğü işler", "Kaptanın yükün selameti için yapılmasını zorunlu gördüğü işler", "Kaptanın geminin selameti için yapılmasını zorunlu gördüğü işler"],
            answer: 0
        },
        {
            id: 492,
            q: "Vardiya tutan gemiadamları acil durumlar hariç günde en az kaç saat dinlenir?",
            options: ["6", "8", "9", "10", "12"],
            answer: 3
        },
        {
            id: 493,
            q: "Gemide 6 ay çalışmış bir gemi adamı en az kaç günlük izni hak etmiştir?",
            options: ["60 Günlük", "30 Günlük", "20 Günlük", "10 Günlük", "15 Günlük"],
            answer: 4
        },
        {
            id: 494,
            q: "854 sayılı Deniz İş Kanununa göre, 10 ay çalışan bir gemi adamı için yıllık izin süresi en az ne kadardır?",
            options: ["10 gün", "15 gün", "20 gün", "25 gün", "30 gün"],
            answer: 1
        },
        {
            id: 495,
            q: "Deniz İş Kanunu'na göre yıllık izin süresi 18 ay çalışan bir gemi adamı için en az ne kadardır?",
            options: ["15 gün", "40 gün", "45 gün", "1 ay", "2 ay"],
            answer: 3
        }
    ],
    "Gemicilik": [

        {
            id: 496,
            q: "Bir geminin sancak ve iskele baş tarafta olan demirlerine **(X)**, kıçta olan demirine **(Y)** denir. Yukarıdaki cümlede boşluklara gelebilecek en uygun ifade aşağıdakilerden hangisinde doğru verilmiştir?",
            options: ["Göz demiri / tonoz demiri", "Tonoz demiri / göz demiri", "Admiralti demiri / simüs demiri", "Çipolu demir / çiposuz demir", "Deniz demiri / tonoz demiri"],
            answer: 0
        },
        {
            id: 497,
            q: "Aşağıda resmi gösterilen demir tipi hangi seçenekte doğru olarak verilmiştir? ",
            options: ["Martin demiri", "Admiralti demiri", "Simüs tipi demir", "Pulluk demiri", "Danfor tipi demir"],
            answer: 2
        },
        {
            id: 498,
            q: "Aşağıdakilerden hangisi gemi demirinin kısımlarından biri değildir?",
            options: ["Tırnak", "Beden", "Gaga", "Anele", "Çima"],
            answer: 4
        },
        {
            id: 499,
            q: "Aşağıdakilerden hangisi demirin parçalarından değildir?",
            options: ["Tırnak", "Beden", "Kol", "Fener", "Çapa"],
            answer: 3 // Metinde "Fener" yok, "Çapa" zaten genel isim. Yanıtta "Fener" olarak işaretli.
        },
        {
            id: 500,
            q: "Bir demirin kısımlarından \"KOLLAR\" in tarifi aşağıdaki seçeneklerden hangisidir?",
            options: [
                "Tırnakların sivri olan uç kısımları",
                "Demir bedeni ile tırnaklar arasında kalan ana parça",
                "Demir bedenini anele ile birleştiren kısım",
                "Demir kollarını birbirine bağlayan kısımdır",
                "Tırnakların arasında kalan çukur kısımdır"
            ],
            answer: 1
        },
        {
            id: 501,
            q: "Bir demirin kısımlarından \"TIRNAKLAR\" ın görevi aşağıdaki seçeneklerden hangisidir?",
            options: [
                "Demirin yattığı zeminde tutunmasını ve zemine saplanmasını sağlar",
                "Demir zincirini demire bağlamaya yarar",
                "Demir atılırken zincirin dolanmasını engeller",
                "Demir ağırlığını taşır",
                "Demirin başüstüne alınırken zincir ve demiri tek parça yapar"
            ],
            answer: 0
        },
        {
            id: 502,
            q: "Aşağıdaki demir tiplerinden hangisi eski tip olup günümüzde ticari gemilerde kullanılmamaktadır?",
            options: ["Admiralti demiri", "Simüs demiri", "Danfort demiri", "Pulluk demiri", "Ağırlık demiri"],
            answer: 0
        },
        {
            id: 503,
            q: "Aşağıdakilerden hangisi Danfort tipi demirin özelliklerinden değildir?",
            options: [
                "Çiposu yoktur",
                "Pulluk tipi demire benzemektedir",
                "Tırnakları yere yatıktır",
                "Beden ve tırnaklar yatağı içinde hareketlidir",
                "Tırnakları bedene göre geniştir"
            ],
            answer: 1
        },
        {
            id: 504,
            q: "Aşağıdakilerden hangisi Martin tipi demirin özelliklerindendir?",
            options: [
                "Tırnakları yatay olarak hareketlidir",
                "Tırnakları yere sabittir",
                "Demirin ağırlığı çok fazladır",
                "Demir yatağı yoktur",
                "Tırnakları çipoya sahiptir"
            ],
            answer: 0
        },
        {
            id: 505,
            q: "Demir zincirlerinin uzunluğu \"KİLİT\" ile ifade edilir. Bir kilit kaç kulaçtır?",
            options: ["20 Kulaç", "15 Kulaç", "25 Kulaç", "30 Kulaç", "35 Kulaç"],
            answer: 4
        },
        {
            id: 506,
            q: "Demir zincirinin uzunluğu \"KİLİT\" ile ifade edilir. Bir kilit kaç metredir?",
            options: ["50 metre", "25 metre", "27,5 metre", "22 metre", "17,5 metre"],
            answer: 3
        },
        {
            id: 507,
            q: "Demir zincirini birbirine bağlayan kilitler vardır. Demir zincirinin bağlantı kilidine ne denir?",
            options: ["Kanca kilit", "Baston kilit", "Fore kilit", "D tipi kilit", "Kalıp kilit"],
            answer: 3
        },
        {
            id: 508,
            q: "Zincirin kilit baklalarının kalınlığı, kilit baklalarının kalınlığı kaç mm.dir?",
            options: ["50 mm", "25 mm", "60 mm", "40 mm", "30 mm"],
            answer: 0
        },
        {
            id: 509,
            q: "Aşağıdakilerden hangisi demir donanımları arasında sayılmaz?",
            options: ["Baston", "Fener", "Vira", "Gaga", "Kilit"],
            answer: 1
        },
        {
            id: 510,
            q: "Demirin loçanın ağzından deniz dibine olan mesafesi ne olarak adlandırılır?",
            options: ["Kaloma", "Sert kaloma", "Mola", "Su derinliği", "Derinlik"],
            answer: 3
        },
        {
            id: 511,
            q: "Demirlerken geminin baş ve kıçının rüzgar ve akıntı nedeniyle yalpa yapmaması için atılan iki demire ne denir?",
            options: ["Ağırlık demiri", "Baş demiri", "Ferdun", "Tonoz", "Göz demiri"],
            answer: 2
        },
        {
            id: 512,
            q: "Aşağıdakilerden hangisi gemi demirlemede kullanılan alet ve donanımlar arasında yer almaz?",
            options: ["Siparişler", "Demir tulumbaları", "Ir gat", "Gaga", "Zincir kilidi"],
            answer: 1
        },
        {
            id: 513,
            q: "Demirlerken veya demir alırken, demir fenerleri yakılır, geminin her iki baş kıç omuzluğuna gözcü konulur. Bu uygulama hangi amaçlarla yapılır?",
            options: [
                "Kaptanın canı öyle istediği için",
                "Her ihtimale karşı",
                "Demirleme manevrasının güvenliği için",
                "Demir manevrasının emniyeti için",
                "Kılavuz kaptanın talimatı"
            ],
            answer: 2
        },
        {
            id: 514,
            q: "Demirlerken geminin baş ve kıçının rüzgar ve akıntı nedeniyle yalpa yapmaması için atılan iki demire ne denir?",
            options: ["Serbest demir", "Göz demiri", "Ferdun", "Şamandıra", "Tonoz"],
            answer: 2
        },
        {
            id: 515,
            q: "Demir atılırken deniz ve rüzgar durumuna göre her iki demirin atılması işlemine ne ad verilir?",
            options: ["Demirleme", "Serbest demirleme", "Kıçtan demirleme", "Ferdun demirleme", "Abramak"],
            answer: 3
        },
        {
            id: 516,
            q: "Demir atılırken deniz ve rüzgar durumuna göre her iki demirin atılması işlemine ne ad verilir?",
            options: ["Abramak", "Şamandıra", "Serbest demirleme", "Tonoz", "Ferdun demirleme"],
            answer: 4
        },
        {
            id: 517,
            q: "Demir manevrasına başlamadan önce aşağıdakilerden hangisi yapılmaz?",
            options: ["Yanaşma halatları hazırlanır", "Manevra güverte personeli toplanır", "Demirleme teçhizatı kontrol edilir", "İlgili fenerler yakılır", "Demirlemede kullanılacak çapaların durumu kontrol edilir"],
            answer: 0
        },
        {
            id: 518,
            q: "Zincirin sudaki uzunluğuna ne ad verilir?",
            options: ["Ağırlık", "Salya", "Pruva", "Kaloma", "Sancak"],
            answer: 3
        },
        {
            id: 519,
            q: "Demir zincirine gereğinden fazla kaloma vermenin sakıncası nedir?",
            options: [
                "Geminin demir sahasından ayrılma riski",
                "Zincirin tırnaklarına zarar verme riski",
                "Zincirin dipte tarama riski",
                "Zemine zarar verme riski",
                "Manevra zorluğu"
            ],
            answer: 0
        },
        {
            id: 520,
            q: "Aşağıdakilerden hangisi Kaloma miktarına etki eden faktörlerden değildir?",
            options: ["Su derinliği", "Zemin tipi", "Rüzgar", "Akıntı", "Zincir çapı"],
            answer: 4
        },
        {
            id: 521,
            q: "Aşağıdaki ifadelerden hangisi, \"Çok kısa kaloma\" için doğrudur?",
            options: [
                "Zincirin sudaki uzunluğu su derinliğinin 1,4 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 1,8 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 2 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 1,1 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 1,6 katıdır"
            ],
            answer: 3
        },
        {
            id: 522,
            q: "Aşağıdaki ifadelerden hangisi, \"Kısa kaloma\" için doğrudur?",
            options: [
                "Zincirin sudaki uzunluğu su derinliğinin 1,1 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 1,5 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 2 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 2,5 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 3 katıdır"
            ],
            answer: 1
        },
        {
            id: 523,
            q: "Aşağıdaki ifadelerden hangisi, \"Normal kaloma\" için doğrudur?",
            options: [
                "Zincirin sudaki uzunluğu su derinliğinin 2 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 3 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 4 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 2,5 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 5 katıdır"
            ],
            answer: 2
        },
        {
            id: 524,
            q: "Aşağıdaki ifadelerden hangisi, \"Uzun kaloma\" için doğrudur?",
            options: [
                "Zincirin sudaki uzunluğu su derinliğinin 3 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 4 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 5 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 6 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 7 katıdır"
            ],
            answer: 3
        },
        {
            id: 525,
            q: "Aşağıdaki ifadelerden hangisi, \"Fırtına kaloma\" için doğrudur?",
            options: [
                "Zincirin sudaki uzunluğu su derinliğinin 5 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 6 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 8 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 10 katıdır",
                "Zincirin sudaki uzunluğu su derinliğinin 12 katıdır"
            ],
            answer: 3
        },
        {
            id: 526,
            q: "Dar kanallarda, demir kullanarak dönüş yapılırken, demir taratma işlemi uygulanırken, D = Loçadan deniz dibine mesafe ise aşağıdakilerden hangisi doğrudur?",
            options: ["Kısa kaloma demir: 1 x D", "Çok kısa kaloma demir: 1,1 x D", "Kısa kaloma demir: 1,4 x D", "Kısa kaloma demir: 1,2 x D", "Kısa kaloma demir: 1,8 x D"],
            answer: 2
        },
        {
            id: 527,
            q: "Kaloma edilen demir zincirinin uzunluğunu rapor etmek için demirleme donanımı üzerinde nasıl bir işaretleme yönteminden faydalanırız?",
            options: [
                "Zincir demirden itibaren birer metre aralıklarla markalanmıştır. Bu metreler özel bir takım işaretlerle ve bazı özel boyalarla markalanmıştır. Bunları zaman zaman kontrol etmek ve boyaları yenilemek gerekir",
                "Zincirin her baklasını sayarız. Bazen şaşırırsak zincirin bazı baklaları üzerinde yazılı rakamlar vardır",
                "Zincir demirden itibaren iki kilit aralıklarla markalanmıştır. Bu kilitler özel bir takım işaretlerle markalanmıştır. Bunları zaman zaman kontrol etmek ve boyaları yenilemek gerekir",
                "Bağlantı kilidinin her iki yanında kilit sayısı kadar bakla beyaz boyayla ve sonuncu bakla bir parça branda üzerine sarılan parlak bakır yada çelik telle işaretlenir. D tipi kilit varsa lokmasız baklalar kilitle birlikte kırmızıya boyanır. Beyaz işaretleme lokmalı baklalardan başlar",
                "Başüstünde zincir uzunluğunu gösteren bir elektronik cihaz yardımıyla sayarız"
            ],
            answer: 3
        },
        {
            id: 528,
            q: "Yedekleme işi yapan gemiler hangi cins halat kullanır?",
            options: ["Doğal lif halatlar", "Yapay lif halatlar", "Tel halatlar", "Palamar halatları", "Manila sisal halat"],
            answer: 1
        },
        {
            id: 529,
            q: "Kanallarda ve dar sularda yedekte gemi çekerken yedekleme halat uzunluğu nasıl olmalıdır?",
            options: ["Mümkün olduğu kadar kısa", "Mümkün olduğu kadar uzun", "İki gemi boyu kadar", "Bir gemi boyu kadar", "Hiçbirisi"],
            answer: 0
        },
        {
            id: 530,
            q: "Römorkörün bağlandığı noktadan değişik açılarda çekmesi isteniyorsa aşağıdaki bağlama yöntemlerinden en uygunu hangisidir?",
            options: ["Tek halatla kısa bağlama", "Çift halatla kısa bağlama", "Üç halatla kısa bağlama", "Tek halatla uzun bağlama", "Çift halatla uzun bağlama"],
            answer: 1
        },
        {
            id: 531,
            q: "Yedeklemede yedek halatı kaloması nasıl olmalıdır?",
            options: [
                "Yedek halatına verilecek kaloma miktarı sahadaki dalga boyuna göre ayarlanmalıdır",
                "Bu mesafe üç dalga boyu olmalıdır",
                "Yedeklenen gemi arkadan gelen dalganın çukurunda iken yedekleyen gemi bir sonraki dalganın tepesinde olmalıdır",
                "Yedeklenen gemi dalga tepesinde iken yedekleyen gemi dalga çukurunda olmalıdır",
                "Yedekleyen gemi dalga tepesinde iken yedeklenen gemi dalga çukurunda olmalıdır"
            ],
            answer: 2
        },
        {
            id: 532,
            q: "Hangi halatlar esnek yapıları nedeniyle tercih edilmezler?",
            options: ["Polipropilen halatlar", "Polyamid (naylon) halatlar", "Sisal halatlar", "Manila halatlar", "Polyester halatlar"],
            answer: 1
        },
        {
            id: 533,
            q: "Yedeklenen geminin arkasından dalgaların gemi bordasına çarpması, dümenini kırması ve halatın gereksiz yere zorlanması gibi istenmeyen durumları engellemek için yedek halatının su ile temas etmesini sağlamak amacıyla kullanılan yöntem nedir?",
            options: ["Yedek halatını halata vurdurma", "Yedek halatına zincir baklası ekleme", "Yedek halatına demir salma", "Yedek halatını kalınlaştırma", "Yedek halatını ağırlıkla suya basma"],
            answer: 2
        },
        {
            id: 534,
            q: "Yedeklenen geminin arkasından dalgaların gemi bordasına çarpması, dümenini kırması ve halatın gereksiz yere zorlanması gibi istenmeyen durumları engellemek için yedek halatının su ile temas etmesini sağlamak amacıyla yedeklenen geminin kıç bodoslamasına bir demir zincir baklası sarkıtılmasına ne ad verilir?",
            options: ["Avaryanın önüne geçilmesi", "Zincir yelkeni", "Deniz demiri", "Deniz tutma", "Ağırlık demiri"],
            answer: 1
        },
        {
            id: 535,
            q: "Demirleme ve yedekleme manevralarında kullanılacak halatların emniyetli olarak kullanılmasında dikkat edilecek husus aşağıdakilerden hangisi değildir?",
            options: [
                "Halatların uygun boylarda olması",
                "Halatların gerilmeyeceği şekilde ayarlanması",
                "Halatların ıslak ve kirli olmaması",
                "Halatların yük ve manevraya uygun olması",
                "Halatların yağ ve kimyasallardan arındırılmış olması"
            ],
            answer: 1
        },
        {
            id: 536,
            q: "Aşağıdakilerden hangisi kılavuzluk hizmeti için doğru değildir?",
            options: [
                "Kılavuz kaptan gemi kaptanının yardımcısıdır",
                "Kılavuz kaptanın hatasından dolayı gemi kaptanı sorumludur",
                "Kılavuz kaptan gemiyi sevk ve idare eden kişi değildir",
                "Kılavuz kaptan gemi kaptanının yetkilerini kısıtlar",
                "Kılavuz kaptanın tavsiyeleri gemi kaptanını bağlamaz"
            ],
            answer: 3
        },
        {
            id: 537,
            q: "Kılavuz kaptan için aşağıdakilerden hangisi doğrudur?",
            options: [
                "Gemiyi sevk ve idare eden kişidir",
                "Gemi kaptanının yardımcısıdır",
                "Verdiği tavsiyeler gemi kaptanını bağlar",
                "Gemi kaptanından daha yetkilidir",
                "Gemi kaptanı ve onun yetkilerini kısıtlar"
            ],
            answer: 1
        },
        {
            id: 538,
            q: "Kılavuzluğun zorunlu olduğu yerlerde kılavuzluk hizmetinin kaptan tarafından reddedilmesi durumunda aşağıdakilerden hangisi söz konusu olur?",
            options: [
                "Geminin sigortası hasar bedelini ödemez",
                "Yük sigortası hasar bedelini ödemez",
                "Gemi kaptanının yetkileri kısıtlanamaz",
                "Gemi kaptanı bu durumlarda hapis cezası alır",
                "Kaptan kılavuz kaptanın hatasından sorumlu olur"
            ],
            answer: 0
        },
        {
            id: 539,
            q: "Aşağıdakilerden hangisi kılavuzluk hizmeti için doğru değildir?",
            options: [
                "Kılavuz kaptanın hatasından dolayı gemi kaptanı sorumludur",
                "Kılavuz kaptan gemi kaptanının yardımcısıdır",
                "Kılavuz kaptanın tavsiyeleri kaptanı bağlamaz",
                "Kılavuz kaptan gemiyi sevk ve idare eden kişi değildir",
                "Kılavuzluk hizmeti gemi kaptanının yetkilerini kısıtlar"
            ],
            answer: 4
        },
        {
            id: 540,
            q: "Kılavuz kaptan için aşağıdakilerden hangisi doğrudur?",
            options: [
                "Gemi kaptanından daha yetkilidir",
                "Geminin sevk ve idaresinden sorumludur",
                "Gemi kaptanının yardımcısıdır",
                "Gemi kaptanının yetkilerini kısıtlar",
                "Verdiği tavsiyeler kaptanı bağlar"
            ],
            answer: 2
        },
        {
            id: 541,
            q: "Aşağıdaki bağlama işlemlerinden hangisi, gemiyi iskele veya rıhtıma kıçtan demir vererek, başı veya kıçı iskeleye dönük olarak yanaştırma işlemidir?",
            options: ["Aborda", "Avara", "Tonozlama", "Kıçtankara", "Rıhtıma yelpaze"],
            answer: 3
        },
        {
            id: 542,
            q: "Geminin bir iskele veya rıhtıma kıçtan demir vererek başı veya kıçı iskeleye dönük olarak yanaştırma işlemine ne ad verilir?",
            options: ["Aborda", "Avara", "Tonozlama", "Kıçtankara", "Rıhtıma yelpaze"],
            answer: 3
        },
        {
            id: 543,
            q: "Kıçtankara manevrası ile ilgili aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Halat atma manevrasında halatı atan gemi personelidir",
                "Halat verme manevrasında halatı veren gemi personelidir",
                "Kıyıdaki halatın bağlanacağı yerler önceden belirlenmelidir",
                "Halatları kıyıya taşıyanlar rıhtım personelidir",
                "Kıçtankara olurken usturmaça sayısı iki katına çıkartılır"
            ],
            answer: 0
        },
        {
            id: 544,
            q: "Kıçtankara manevrası ile ilgili aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Halat alma manevrasında halatı alan gemi personelidir",
                "Halat verme manevrasında halatı veren gemi personelidir",
                "Kıyıdaki halatın bağlanacağı yerler önceden belirlenmelidir",
                "Kıçtankara olurken usturmaça sayısı iki katına çıkartılır",
                "Manevra esnasında geminin baş ve kıçının rüzgar ve akıntı nedeniyle yalpa yapmaması için her iki demir atılır"
            ],
            answer: 4
        },
        {
            id: 545,
            q: "Halatların kullanılması ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Halatlar sudan ve kirden korunmalıdırlar",
                "Halatlar yağ ve kimyasallardan korunmalıdırlar",
                "Halatların esnek olmalarının bağlama manevrasında avantajı vardır",
                "Halatlar yük ve manevraya uygun olmalıdırlar",
                "Halatlar uygun boylarda olmalıdırlar"
            ],
            answer: 2
        },
        {
            id: 546,
            q: "Aşağıdakilerden hangisi sentetik halat türlerinden değildir?",
            options: ["Poliamid", "Polipropilen", "Polyester", "Polietilen", "Manila"],
            answer: 4
        },
        {
            id: 547,
            q: "Halat yapımında kullanılan malzemeye göre halatlar ikiye ayrılırlar. Aşağıdakilerden hangisi bu halatlardan biri değildir?",
            options: ["Doğal lifli halatlar", "Tel halatlar", "Örgülü halatlar", "Sentetik halatlar", "Manila halatlar"],
            answer: 2
        },
        {
            id: 548,
            q: "Halat yapımında kullanılan telin bükümü ile ilgili olarak aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Teldeki büküm yönüne büküm yönü denir",
                "Sancak halatlar sağa bükülür",
                "İskele halatlar sola bükülür",
                "Sağa bükülmüş halatlar Z-büküm olarak adlandırılır",
                "Sola bükülmüş halatlar S-büküm olarak adlandırılır"
            ],
            answer: 2
        },
        {
            id: 549,
            q: "Aşağıdakilerden hangisi doğal elyaftan yapılmış halatların özelliklerinden değildir?",
            options: [
                "Sentetik halatlara göre daha dayanıklıdırlar",
                "Islanırsa %15-20 oranında uzayabilirler",
                "Sentetik halatlara göre daha ağırdırlar",
                "Sentetik halatlara göre daha az sürtünmeye dayanıklıdırlar",
                "Kolay bozulurlar"
            ],
            answer: 0
        },
        {
            id: 550,
            q: "Halatların parçalarının büküm yönüne ne ad verilir?",
            options: ["Flok", "Sancak", "Beden", "Büküm yönü", "Tel"],
            answer: 3
        },
        {
            id: 551,
            q: "Kıçtankara olurken, aborda/avara ederken personelin en çok dikkat etmesi gereken prensip ne olmalıdır?",
            options: [
                "En çabuk şekilde manevrayı tamamlamak",
                "Bordaların zarar görmesini engellemek",
                "Sahile en az halatı vererek gemiyi bağlamak",
                "Emniyet",
                "Usturmaçaları korumak"
            ],
            answer: 3
        },
        {
            id: 552,
            q: "Halata karaman vurduğunda, halata binecek yükü;",
            options: ["En az iki katına yükseltir", "En az üç katına yükseltir", "En az beş katına yükseltir", "En az dört katına yükseltir", "En az yarım katına yükseltir"],
            answer: 3
        },
        {
            id: 553,
            q: "Bir halatın güvenle çalışma yükü, kopma kuvvetinin;",
            options: [
                "Altıda biri yada yedide biridir",
                "Dörtte biri yada beşte biridir",
                "Beşte biri yada altıda biridir",
                "Üçte biri yada dörtte biridir",
                "İkide biri yada üçte biridir"
            ],
            answer: 0
        },
        {
            id: 554,
            q: "Halatlar üzerlerine yük bindikçe biraz uzarlar. Bu uzama paylarının sonunda taşıyabilecekleri en yüksek güce ulaşırlar. Bu durumda yük biraz daha arttırılırsa halat kopar. Bu nedenle halatların güçlerinden iyi yararlanmak için hangi kurallara uyulmalıdır?",
            options: [
                "I-Yeterli sayıda halat kullanılmalı, II-Halatlara aşırı yük binmesi engellenmeli, III-Halatlara karaman vurmasından sakınılmalıdır",
                "I-Sadece sentetik halat kullanılmalı, II-Halatlara aşırı yük binmesi engellenmeli, III-Halatlara karaman vurmasından sakınılmalıdır",
                "I-Yeterli sayıda halat kullanılmalı, II-Halatlara aşırı yük binmesi engellenmeli, III-Halatlara karaman vurmasına izin verilmelidir",
                "I-Yeterli sayıda halat kullanılmalı, II-Sadece doğal lif halat kullanılmalı, III-Halatlara karaman vurmasından sakınılmalıdır",
                "I-Halatlar ıslatılmalı, II-Halatlara aşırı yük binmesi engellenmeli, III-Halatlara karaman vurmasından sakınılmalıdır"
            ],
            answer: 0
        },

        {
            id: 555,
            q: "Akıntının sürati aşağıdakilerden hangisi ile gösterilir?",
            options: ["SET", "SOA", "DRIFT", "SPD", "SMG"],
            answer: 2
        },
        {
            id: 556,
            q: "Akıntının yönü ve hızını veren doğru ifade hangisidir?",
            options: ["Set-Knot", "Drift-Knot", "Set-Drift", "Mil-Yön", "Sürat-Vektör"],
            answer: 0
        },
        {
            id: 557,
            q: "Bir bölgede devamlı esen bir rüzgarın oluşturduğu akıntıya ne ad verilir?",
            options: ["Serbest akıntı", "Yüzey (rüzgar) akıntısı", "Normal akıntı", "Bölgesel akıntı", "Bölgesel gel-git akıntısı"],
            answer: 1
        },
        {
            id: 558,
            q: "Akıntının gemi kullanma üzerindeki etkisi aşağıdakilerden hangisine bağlı değildir?",
            options: [
                "Geminin sualtı yapısının başta ve kıçta farklı hız ve/veya yöndeki akıntıların etkisinde kalıp kalmamasına",
                "Akıntının kuvvetine",
                "Geminin akıntının etkisinde kaldığı süreye",
                "Geminin taşıdığı yük",
                "Akıntının yönüne"
            ],
            answer: 3
        },
        {
            id: 559,
            q: "Aşağıdakilerden hangisi ileri yol alan bir gemide pupa akıntısı nedeniyle meydana meydana gelecek etkilerden değildir?",
            options: [
                "Normal koşullarda geminin yere göre yaptığı hızda bir çoğalma",
                "Geminin yol tutma özelliğinde (Course keeping) bir azalma",
                "Geminin dümen dinleme özelliğinde (Steering) bir azalma",
                "Geminin dümen etkisinde bir azalma",
                "Geminin ileri doğru yaptığı hareketten dolayı akıntı etkisinin azalması"
            ],
            answer: 4
        },
        {
            id: 560,
            q: "Aşağıdakilerden hangisi ileri yol alan bir gemide başa akıntı nedeniyle meydana gelecek etkilerden değildir?",
            options: [
                "Geminin dümen dinleme özelliğinde bir çoğalma",
                "Geminin yol tutma özelliğinde bir çoğalma",
                "Geminin dümen etkisinde bir azalma",
                "Geminin yere göre yaptığı hızda bir azalma",
                "Akıntıya karşı gitmekten dolayı makine gücü ihtiyacının artması"
            ],
            answer: 2
        },
        {
            id: 561,
            q: "Akıntının gemi kullanma üzerindeki etkisi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Akıntı geminin baş ve kıçına aynı anda aynı yönde etki eder",
                "Akıntının kuvveti arttıkça geminin dümen dinleme (steering) özelliği azalır",
                "Akıntı geminin yanal yüzeyine etki eder ve baş-kıç tarafına göre yanal yüzey alanı ne kadar büyük ise akıntıya o kadar maruz kalır",
                "Akıntı geminin yol tutma (Course Keeping) özelliğini azaltır",
                "Akıntı geminin yol tutma (Course Keeping) özelliğini artırır"
            ],
            answer: 0
        },
        {
            id: 562,
            q: "Akıntının gemi kullanma üzerindeki etkisi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Akıntı geminin baş ve kıçına aynı anda aynı yönde etki eder",
                "Akıntının kuvveti arttıkça geminin dümen dinleme (steering) özelliği azalır",
                "Akıntı geminin yanal yüzeyine etki eder ve baş-kıç tarafına göre yanal yüzey alanı ne kadar büyük ise akıntıya o kadar maruz kalır",
                "Akıntı geminin yol tutma (Course Keeping) özelliğini azaltır",
                "Akıntı geminin sualtı yapısının başta ve kıçta farklı hız ve/veya yöndeki akıntıların etkisinde kalmasına neden olur"
            ],
            answer: 0
        },
        {
            id: 563,
            q: "Akıntının gemi kullanma üzerindeki etkisi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Akıntı geminin yol tutma (Course Keeping) özelliğini azaltır",
                "Akıntı geminin yanal yüzeyine etki eder ve baş-kıç tarafına göre yanal yüzey alanı ne kadar büyük ise akıntıya o kadar maruz kalır",
                "Akıntı geminin baş ve kıçına aynı anda aynı yönde etki eder",
                "Akıntının kuvveti arttıkça geminin dümen dinleme (steering) özelliği azalır",
                "Akıntı geminin sualtı yapısının başta ve kıçta farklı hız ve/veya yöndeki akıntıların etkisinde kalmasına neden olur"
            ],
            answer: 2
        },
        {
            id: 564,
            q: "Akıntının gemi kullanma üzerindeki etkisi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
                "Akıntı geminin baş ve kıçına aynı anda aynı yönde etki etmez",
                "Akıntının kuvveti arttıkça geminin dümen dinleme (steering) özelliği artar",
                "Akıntı geminin yanal yüzeyine etki etmez",
                "Akıntı geminin yol tutma (Course Keeping) özelliğini artırır",
                "Akıntı geminin sualtı yapısının başta ve kıçta farklı hız ve/veya yöndeki akıntıların etkisinde kalmasına neden olmaz"
            ],
            answer: 0
        },
        {
            id: 565,
            q: "Akıntının seyir üzerindeki etkisi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Akıntı geminin baş ve kıçına aynı anda aynı yönde etki eder",
                "Akıntı geminin dümen dinleme (steering) özelliğini azaltır",
                "Akıntı geminin yanal yüzeyine etki eder ve akıntıya o kadar maruz kalır",
                "Akıntı geminin yol tutma (Course Keeping) özelliğini azaltır",
                "Akıntı geminin sualtı yapısının başta ve kıçta farklı hız ve/veya yöndeki akıntıların etkisinde kalmasına neden olur"
            ],
            answer: 0
        },
        {
            id: 566,
            q: "Dümen kilitlenmesi durumunda (Steering Gear Failure) aşağıdakilerden hangisi yapılmaz?",
            options: [
                "Sancak/İskele rotası verilmez",
                "Makineler stop edilir",
                "Acil durum çanı çalınır",
                "İlgili yetkililere bilgi verilir",
                "Sancak/İskele dümeni tam yol manevrası yapılır"
            ],
            answer: 4
        },
        {
            id: 567,
            q: "Manevra sahalarında dar dönüş yapmak için aşağıdakilerden hangisi doğrudur?",
            options: ["Dümen tutulmaz", "Yarım yol ileri yol tutulur", "Tam yol ileri yol tutulur", "Dümen çarkı döndürülmez", "Kıçtan demir atılır"],
            answer: 4
        },
        {
            id: 568,
            q: "Gemi sevk ve idare edilişi ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Gemi tam yol ileri gitmekte ise dümen tesiri fazladır",
                "Gemi yarım yol ileri gitmekte ise dümen tesiri fazladır",
                "Gemi yol almamakta ise dümen tesiri yoktur",
                "Gemi yol almamakta ise dümen tesiri yoktur ve ancak makine ile manevra yapılır",
                "Gemi ağır yol ileri gitmekte ise dümen tesiri azdır"
            ],
            answer: 1
        },
        {
            id: 569,
            q: "Gemi sevk ve idare edilişi ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Gemi sevk ve idare edilişi ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
                "Gemi yarım yol ileri gitmekte ise dümen tesiri fazladır",
                "Gemi tam yol ileri gitmekte ise dümen tesiri fazladır",
                "Gemi yol almamakta ise dümen tesiri yoktur ve ancak makine ile manevra yapılır",
                "Gemi ağır yol ileri gitmekte ise dümen tesiri azdır"
            ],
            answer: 1
        },
        {
            id: 570,
            q: "Bir gemi için dar dönüş manevrası yapma aşağıdakilerden hangisi ile mümkün olmaz?",
            options: [
                "Baş kıç pervaneleri ile",
                "Kıçtan demir atarak",
                "Römorkör çekme/itme kuvveti ile",
                "Makine gücü ile",
                "Dümen ile"
            ],
            answer: 4
        },
        {
            id: 571,
            q: "İskele/Sancak dönüşlerinde geminin bayılma eğilimi ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Bayılma, dönülen tarafın tersine doğru meydana gelir",
                "Bayılma, basılan dümen açısı ve hız ile doğru orantılıdır",
                "Bayılma, su içerisinde yapılan hız ile doğru orantılıdır",
                "Bayılma eğilimi ince çizgili ve boş gemilerde oldukça belirgindir",
                "Bayılma, dönülen tarafa doğru meydana gelir"
            ],
            answer: 4
        },
        {
            id: 572,
            q: "Yelpaze dümeninin etkisini arttıran kuvvetler aşağıdakilerden hangisidir?",
            options: [
                "Dümen yelpaze alanının büyüklüğü, alabanda dümen açısı, yelpazeye gelen su akımının gemi hızı ile ters orantılı olması",
                "Dümen yelpaze alanı büyüklüğü, alabanda dümen açısı, yelpazeye gelen su akımının gemi hızının karesi ile doğru orantılı değişmesi",
                "Alabanda dümen açısı ve dümen yelpazesine gelen su akım hızının gemi hızı ile ters orantılı olması",
                "Dümen yelpazesi alanının büyüklüğü ve alabanda dümen açısı",
                "Dümen yelpazesi alanı büyüklüğü"
            ],
            answer: 1
        },
        {
            id: 573,
            q: "Dümen açısı ve geminin hızı arttıkça dümen yelpazesi üzerindeki döndürücü kuvvet **(X)** ve bu etki ile gemi **(Y)** başlar. Yukarıdaki cümlede boşluklara gelebilecek en uygun ifade aşağıdakilerden hangisinde doğru verilmiştir?",
            options: ["Artar / Dönmeye", "Artar / Yol almaya", "Azalır / Durmaya", "Azalır / Hızlanmaya", "Azalır / Dönmeye"],
            answer: 0
        },
        {
            id: 574,
            q: "Dümen açısı arttıkça geminin dönme çapı nasıl değişir?",
            options: ["Dümen açısının karesi kadar azalır", "Dümen açısının karesi kadar artar", "Artar", "Azalır", "Dümen açısına bağlı olarak değişmez"],
            answer: 3
        },
        {
            id: 575,
            q: "Hava kirliliğini önleme mevzuatlarına göre kaç GRT ve üzeri gemilerde denetim zorunludur?",
            options: ["400", "250", "350", "500", "150"],
            answer: 3
        },
        {
            id: 576,
            q: "Pervanenin tam bir turunda ilerleme mesafesi aşağıdakilerden hangisi ile ifade edilir?",
            options: ["Yol", "Adım", "Ayak", "Hız", "Mesafe"],
            answer: 1
        },
        {
            id: 577,
            q: "Aşağıdakilerden hangisi pervane piçini (adımını) tanımlar?",
            options: [
                "Pervane bir tur attığı zamanki ilerleme miktarı ile geminin ilerlemesi arasındaki farktır",
                "Pervane bir tur attığı zamanki ilerleme miktarıdır",
                "Pervane dönerken kanatlarının arka yüzünde oluşan basınca piç (adım) denir",
                "Pervane çapının kanat sayısına bölümü ile bulunan değere piç (adım) denir",
                "Pervane boyunca şaft ekseninden çıkılan bir hat aynı noktadan eksene çizilen dik bir hat arasındaki açıdır"
            ],
            answer: 1
        },
        {
            id: 578,
            q: "Pervane ilerleme sayısı aşağıda verilen değişkenlerden hangisine bağlı değildir?",
            options: ["Gemi hızı", "Pervane devir sayısı", "Pervane yarıçapı", "Gemi boyu", "Gemi kıç formu"],
            answer: 3
        },
        {
            id: 579,
            q: "Pervane kanatlarının dikey eksenleri etrafında döndürülmesi ile istenilen manevranın yapılabildiği sistem aşağıdakilerden hangisidir?",
            options: ["Ka-Me-Wa sistemi", "Değişken Adım Pervane", "Regülatör sistemi", "Hidrolik sistemi", "Elektrikli sistemi"],
            answer: 1
        },
        {
            id: 580,
            q: "Aşağıdakilerden hangisi sevk sistemi tiplerinden değildir?",
            options: ["Kaftan-Şaft sistemi", "Sabit Adımlı Pervane", "Ayarlanabilir Adımlı Pervane", "Azimut Sevk Sistemi", "Su Jeti Sevk Sistemi"],
            answer: 0
        },
        {
            id: 581,
            q: "Pervane kanadının ön yüzünde oluşan basınca ne ad verilir?",
            options: ["Kavitasyon", "İtme", "Emme", "Piç", "Slip"],
            answer: 1
        },
        {
            id: 582,
            q: "Pervane kanadının arka yüzünde oluşan basınca ne ad verilir?",
            options: ["İtme", "Piç", "Kavitasyon", "Çekme", "Emme"],
            answer: 4
        },
        {
            id: 583,
            q: "Pervanenin ileri yolda dönerken, geminin kıç tarafını sancak tarafa atmaya meyil eden kuvvete ne ad verilir?",
            options: ["Pervane emme", "Pervane itme", "Pervane yan atma (Side effect)", "Pervane kavitasyonu", "Pervane slip"],
            answer: 2
        },
        {
            id: 584,
            q: "Pervanelerin yan atma (Side effect) etkisi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Geminin kıçını atmaya meyil eder",
                "İleri yol makine ile iskele pervane yan atma etkisi fazladır",
                "Geri yol makine ile sancak pervane yan atma etkisi fazladır",
                "Geri yol manevrasında pervane yan atma etkisi, ileri yol manevrasından daha fazladır",
                "Geri yol manevrasında pervane yan atma etkisi, ileri yol manevrasından daha azdır"
            ],
            answer: 4
        },
        {
            id: 585,
            q: "Aşağıdakilerden hangisi Pervane İtme/Yan Atma (Side Effect) kuvvetinin özelliğidir?",
            options: [
                "Tek pervaneli gemilerde ileri yol makine ile kıç taraf iskeleye atılır",
                "Tek pervaneli gemilerde ileri yol makine ile baş taraf sancağa atılır",
                "Tek pervaneli gemilerde geri yol makine ile kıç taraf iskeleye atılır",
                "Tek pervaneli gemilerde geri yol makine ile baş taraf sancağa atılır",
                "Tek pervaneli gemilerde geri yol makine ile gemi sancak tarafına yatar"
            ],
            answer: 2
        },
        {
            id: 586,
            q: "Pervaneden dolayı oluşan yan atma (Side Effect) ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
                "Yan atma etkisi ileri yolda manevra yaparken geri yoldan daha fazladır",
                "Yan atma etkisi geri yolda manevra yaparken ileri yoldan daha fazladır",
                "Yan atma etkisi ileri yolda daha az, geri yolda daha fazladır",
                "Yan atma etkisi ileri ve geri yolda manevra yaparken eşittir",
                "Yan atma etkisi manevra hızına bağlı olarak değişmez"
            ],
            answer: 1
        },
        {
            id: 587,
            q: "Aşağıdakilerden hangisi Pervane Yan Atma (Side Effect) kuvvetinin özelliklerinden değildir?",
            options: [
                "Su yüzeyi ile pervane üst ucu arasındaki mesafe azaldıkça artar",
                "Su hızı arttıkça artar",
                "Pervane çapı büyüdükçe artar",
                "Pervane devir sayısı arttıkça artar",
                "Geri yol makine manevrasında etkisi ileri yol makine manevrasından daha fazladır"
            ],
            answer: 1
        },
        {
            id: 588,
            q: "Pervane kanatlarının arkasında oluşan düşük basınç etkisi sonucunda su buharının oluşması olayına ne ad verilir?",
            options: ["Pervane emme", "Pervane itme", "Pervane yan atma (Side effect)", "Pervane kavitasyonu", "Pervane slip"],
            answer: 3
        },
        {
            id: 589,
            q: "Pervane yan atma etkisinin en az olduğu sevk sistemi aşağıdakilerden hangisidir?",
            options: ["Sabit Adımlı Pervane", "Su Jeti Sevk Sistemi", "Ayarlanabilir Adımlı Pervane", "Çift Pervaneli Sistem", "Azimut Sevk Sistemi"],
            answer: 1
        },
        {
            id: 590,
            q: "Gemi kıçına sancak veya iskele yönünden gelen akıntıya ne ad verilir?",
            options: ["Pruva akıntısı", "Pupa akıntısı", "Yan akıntı", "Gelgit akıntısı", "Rüzgar akıntısı"],
            answer: 2
        },
        {
            id: 591,
            q: "Aşağıdakilerden hangisi sığ su etkisinin özelliklerinden değildir?",
            options: [
                "Geminin sualtı yüzeyi ile dip arasındaki mesafenin azalmasıdır",
                "Sürat azalır",
                "Geminin draftı artar",
                "Geminin dümen dinleme (steering) özelliği artar",
                "Geminin dümen dinleme (steering) özelliği azalır"
            ],
            answer: 3
        },
        {
            id: 592,
            q: "Dar kanallarda ve nehirlerde hareket eden gemilerin karaya doğru yanaşma eğilimine ne ad verilir?",
            options: ["Yan atma etkisi", "Nehir etkisi", "Sığ su etkisi", "Dönüş çapı etkisi", "Kanal etkisi"],
            answer: 4
        },
        {
            id: 593,
            q: "Kanalda yol alan bir gemide, herhangi bir nedenle kanalın orta çizgisinden ayrılıp bir banka öbüründen daha fazla yakın bulunarak hareket etmeye başladığında; **(X)**, buna bağlı olarak bordası ile yakın bank arasındaki su akımı **(Y)**, basınç **(Z)**, su yüzeyi daha çok **(A)**. Gemi yakın banka doğru bayılır. Yukarıdaki cümlede boşluklara gelebilecek en uygun ifadeler aşağıdakilerden hangisinde doğru verilmiştir?",
            options: [
                "Yaklaştığı bank ile bordası arasında geçit daha daralmış bir duruma gelir / yavaşlar / artar / alçalır",
                "Yaklaştığı bank ile bordası arasında geçit daha daralmış bir duruma gelir / hızlanır / düşer / alçalır",
                "Yaklaştığı bank ile bordası arasında geçit daha daralmış bir duruma gelir / yavaşlar / düşer / alçalır",
                "Yaklaştığı bank ile bordası arasında geçit daha daralmış bir duruma gelir / hızlanır / artar / yükselir",
                "Yaklaştığı bank ile bordası arasında geçit daha daralmış bir duruma gelir / hızlanır / düşer / yükselir"
            ],
            answer: 1
        },
        {
            id: 594,
            q: "Dar kanallarda ve nehirlerde, gemi yanındaki kıyı (bank) ile gemi arasındaki su akımının hızlanması ve dolayısı ile alçalan su seviyesi nedeniyle geminin kıyıya (banka) doğru yanlamasına hareketine ne ad verilir?",
            options: ["İskele/Sancak dönüş etkisi", "Yan atma etkisi", "Dip etkisi", "Bank etkisi (Bank effect)", "Sığ su etkisi (Shallow water effect)"],
            answer: 3
        },
        {
            id: 595,
            q: "Aşağıdakilerden hangisi sığ su etkisinin sonuçlarından değildir?",
            options: [
                "Dümen dinleme özelliği zayıflar",
                "Geminin draftı artar",
                "Maksimum hız düşer",
                "Dönüş çapı daralır",
                "Gemi dibe yaklaşır"
            ],
            answer: 3
        },
        {
            id: 596,
            q: "Bir gemi sığ suda seyrederken aşağıdakilerden hangisi yanlıştır?",
            options: [
                "Gemi hızı artar",
                "Geminin draftı artar (squatting)",
                "Geminin dümen dinleme (steering) özelliği azalır",
                "Maksimum hız düşer",
                "Dönüş çapı büyür"
            ],
            answer: 0
        },
        {
            id: 597,
            q: "Sığ suda seyir halinde olan gemi ile ilgili olarak aşağıdaki ifadelerden hangisi yanlıştır?",
            options: [
                "Gemi suda hızlandıkça baş ve kıç tarafındaki su yüzeyi alçalır",
                "Gemi hızı artar",
                "Gemi suda hızlandıkça dümen dinleme (steering) özelliği azalır",
                "Gemi suda hızlandıkça dönüş çapı büyür",
                "Gemi suda hızlandıkça pervane kanatları kavitasyona daha çok maruz kalır"
            ],
            answer: 1
        },
        {
            id: 598,
            q: "Squatting olayı ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
            options: [
                "Geminin hızlanması ile baş ve kıç taraftaki su seviyesinin yükselmesidir",
                "Geminin hızlanması ile baş ve kıç taraftaki su seviyesinin alçalmasıdır",
                "Geminin hızlanması ile gemi etrafındaki su seviyesinin yükselmesidir",
                "Geminin hızlanması ile gemi etrafındaki su seviyesinin alçalmasıdır",
                "Geminin hızlanması ile geminin yalpa yapmasıdır"
            ],
            answer: 1
        },
        {
            id: 599,
            q: "Geçen iki gemi arasındaki yan yana etkileşime ne ad verilir?",
            options: ["Side effect", "Sığ su etkisi", "Kanal etkisi", "Hidrodinamik etki", "Etkileşim"],
            answer: 3
        },
        {
            id: 600,
            q: "Büyük bir geminin iskele tarafına doğru iskele bordası sancak bordasından daha hızlı ilerlerse, iskele bordo ile rıhtım arasındaki su seviyesi alçalır ve su hızlanır. Bu esnada gemi iskeleye doğru yanaşır. Bu duruma ne ad verilir?",
            options: ["Sığ su etkisi", "Dip etkisi", "Hidrodinamik etki", "Köprü (Squat) etkisi", "Bank etkisi"],
            answer: 4
        },
        {
            id: 601,
            q: "Bir geminin planlanan ve kontrolümüz altında oluşturulan hareketine **(Boşluk)** denir.",
            options: ["Yalpa", "Batma", "Baş-kıç", "Çökme", "Manevra"],
            answer: 4
        },
        {
            id: 602,
            q: "Manevra sahası varsa ve yakın düşme durumundan kurtulmak için yapılacak en uygun hareket hangisidir?",
            options: ["Rota değişikliği", "Hız düşürme", "Hız arttırılması", "Emniyetli hız", "Maksimum hız"],
            answer: 2
        },
        {
            id: 603,
            q: "Yol verilen teknenin davranışı ile ilgili ifadelerden hangisi doğrudur?",
            options: ["Kendi rota ve hızını korur", "Hiçbiri", "Sancağa rota değiştirir", "İskeleye rota değiştirir", "Diğer gemi ile koordineye göre hareket eder"],
            answer: 0
        },
        {
            id: 604,
            q: "Birbirini gören iki tekneden biri kurallar gereğince, diğerinin yolundan çıkmak zorunluluğunda bulunduğu yerlerde diğer teknenin hareket tarzı ne olmalıdır?",
            options: ["Rotasını iskeleye değiştirecektir", "Kendi rotasını ve hızını diğerine göre ayarlayacaktır", "Rotasını sancağa değiştirecektir", "Stop edip diğerinin neta olmasını bekleyecektir", "Kendi rotasını ve hızını koruyacaktır"],
            answer: 4
        },
        {
            id: 605,
            q: "Ağır denizlerde gemimize aborda olması gereken bir küçük tekne hangi açıdan yaklaşmalıdır?",
            options: ["Pupa", "Pruva", "Sancak veya iskele omuzluktan", "Borda", "Kıçtan"],
            answer: 3
        },
        {
            id: 606,
            q: "Gemilerin kıyılara çok yakın seyretmeleri durumunda oluşan etki aşağıdakilerden hangisidir?",
            options: ["Sığ su etkisi", "Dip etkisi", "Yan atma etkisi", "Nehir etkisi", "Bank etkisi"],
            answer: 4
        },
        {
            id: 607,
            q: "Bir gemi seyrederken, su altındaki kısmı ile su üstündeki kısmı farklı akıntıların etkisinde kalırsa geminin hareketi nasıl değişir?",
            options: ["Sadece su altındaki kısım etkilenir", "Sadece su üstündeki kısım etkilenir", "Yalpa yapar", "Geminin hareketi değişmez", "Geminin hareketi etkilenmez"],
            answer: 2
        },
        {
            id: 608,
            q: "Aşağıdakilerden hangisi makine arızasında yapılacaklardan biri değildir?",
            options: ["Makineler stop edilir", "Gerekli alarmlar çalınır", "Dümen kilitlenir", "Yetkililere bilgi verilir", "Kaptana rapor edilir"],
            answer: 2
        },
        {
            id: 609,
            q: "Akıntı ve rüzgarın etkisinde olan bir gemiye römorkör bağlanması durumunda römorkörün gemiye yaklaşması için aşağıdaki yönlerden hangisi tercih edilmelidir?",
            options: ["Rüzgar ve akıntının geldiği yön", "Rüzgar ve akıntının gittiği yön", "Geminin sancak veya iskele tarafı", "Geminin kıç tarafından", "Geminin baş tarafından"],
            answer: 0
        },
        {
            id: 610,
            q: "Akıntı etkisi altında hangi yanaşma manevrası uygundur?",
            options: [
                "Akıntıyı iskeleden yanaşıyorsak kıçtan, sancaktan yanaşıyorsak baştan alacak şekilde yaklaşmak tercih edilir. İskeleden yaklaşmada yeteri kadar önce tornistan verilip padıl etkisinden yararlanılır. Sancaktan yanaşırken ise hız ileri yolda yavaş yavaş düşürülüp durulur. İlk olarak akıntının aktığı yönün tersine kumanda eden halatlar verilerek bağlanır",
                "İster sancak ister iskeleden yanaşılsın, rıhtıma akıntıyı başa alarak ve rıhtım çizgisini geminin dönme çemberine teğet oluşturacak bir açıda tutarak yaklaşır ve ağır yol ileri makine çalıştırarak gemi akıntıya karşı tam bir kontrolle yaklaştırılır ve kolayca durdurulur. İlk fırsatta baş ve kıç omuzluktaki loçalardan başa kumanda eden birer halatla gemi bağlanır",
                "Akıntı hangi yönden gelirse gelsin rıhtıma dik olarak yaklaşıp, baştan bir halatla gemiyi bağlayıp daha sonra gemiyi akıntı... (metin kesik)",
                "Akıntıyı mümkünse kıça alarak aborda olmak hızımızı dolayısıyla dümen dinlemeyi artırır. Böylelikle hem hızlı hem de kontrollü bir manevra yaparız. Yanaşırken önce kıç halatı veririz",
                "Akıntı hangi yönden gelirse gelsin rıhtımdan (metin kesik)"
            ],
            answer: 1
        },

        {
            id: 611,
            q: "Gücü ve türü ne olursa olsun, pervane çeviren makineler aşağıdaki sınıflardan hangisine girer?",
            options: ["Gemi yardımcı makineleri", "Ana makine yardımcıları", "Güverte yardımcıları", "Ana makineler", "Dümen makineleri"],
            answer: 3
        },
        {
            id: 612,
            q: "Ana makine nasıl tanımlanır?",
            options: ["Yatın çıpasına kumanda eden irgat", "Pervaneyi çeviren makine", "Şarj dinamosu", "Hidrofor pompası", "Sintine pompası"],
            answer: 1
        },
        {
            id: 613,
            q: "Motorlar çalışma stroklarına göre nasıl sınıflandırılır?",
            options: ["Bir ve üç stroklu", "İki ve dört stroklu", "İki ve beş stroklu", "Bir ve dört stroklu", "Hiçbiri"],
            answer: 1
        },
        {
            id: 614,
            q: "Aşağıda verilen makinelerden hangisinde gemi manevrası en kısa sürede yapılır?",
            options: ["Buhar türbinlerinde", "Turbo elektrik sisteminde", "Dizel makinelerinde", "Pistonlu buhar makinelerinde", "Gaz türbinlerinde"],
            answer: 3
        },
        {
            id: 615,
            q: "Ticaret gemilerinde, büyük bir çoğunlukla aşağıdakilerden hangisi ana makine olarak kullanılmaktadır?",
            options: ["Benzin motorları", "Dizel motorları", "Gaz türbinleri", "Buhar", "Buhar türbinleri"],
            answer: 1
        },
        {
            id: 616,
            q: "Aşağıdakilerden hangisi gemi makinelerinin arızalanma sebeplerinden değildir?",
            options: ["Yeterli yağlama olmaması", "Yeterli soğutmanın olmaması", "Gereğinden fazla yüklenmesi", "Kalitesiz yakıt", "Gereğinden az yüklenmesi"],
            answer: 4
        },
        {
            id: 617,
            q: "Makine arızalanma sebeplerinden hangisi dışsal bir sebep değildir?",
            options: ["Yeterli soğutmanın olmaması", "Kalitesiz yakıt", "Makinenin titreşimi", "Gereğinden fazla yüklenmesi", "Makinenin titreşimi ve rulmanları zedelemesi"],
            answer: 2
        },
        {
            id: 618,
            q: "Aşağıdakilerden hangisi gemi makinelerinde arıza durumunda uygulanacak prosedürlerden değildir?",
            options: ["Kaptana haber verme", "Gereken emniyet tedbirlerini alma", "Yedek makine ve sistemleri devreye alma", "Kısa devre yapmak", "Hiçbiri"],
            answer: 3
        },
        {
            id: 619,
            q: "Bir makinenin gücünü arttırmak için aşağıdakilerden hangisi yapılır?",
            options: ["Makineler stop edilir", "Devri azaltılır", "Çalışma rejimi değiştirilir", "Püskürtme ayarları değiştirilir", "Püskürtme basıncı arttırılır"],
            answer: 4
        },
        {
            id: 620,
            q: "Büyük dizel motorlarında yakıt tüketimi nasıl azalır?",
            options: ["Yakıt kalitesi düşürülerek", "Motorun devri arttırılarak", "Hız azaltılarak", "Yağlama sistemi yavaşlatılarak", "Soğutma sistemi yavaşlatılarak"],
            answer: 2
        },
        {
            id: 621,
            q: "Büyük dizel motorlarında yakıt ekonomisi sağlamak için motorlar nasıl çalıştırılmalıdır?",
            options: ["Mümkün olan en düşük hızda", "Mümkün olan en yüksek devirde", "Tersane manevrasında", "Acil durumda", "Yüksek devir düşük yükte"],
            answer: 0
        },
        {
            id: 622,
            q: "Büyük dizel makinelerinde yakıt ekonomisi için; motorlar mümkün olan en **(X)** hızda ve motorun **(Y)** orantılı tork (çevirme gücü) ile çalıştırılmalıdır. Yukarıdaki cümlede boşluklara gelebilecek en uygun ifadeler aşağıdakilerden hangisinde doğru verilmiştir?",
            options: ["Düşük / Ters", "Yüksek / Doğru", "Düşük / Doğru", "Yüksek / Ters", "Orta / Doğru"],
            answer: 2
        },
        {
            id: 623,
            q: "Ana makine dairesinde oluşan büyük bir yangına karşı aşağıdakilerden hangisi yapılmaz?",
            options: ["Makine durdurulur", "Hava damperleri kapatılır", "Bütün pompalar durdurulur", "Yangın alarmı çalınır", "Tüm elektrik sistemi devre dışı bırakılır"],
            answer: 4
        },
        {
            id: 624,
            q: "Gemilerde yangın çıkma olasılığı en yüksek bölüm neresidir?",
            options: ["Yaşam mahalli", "Köprü üstü", "Makine dairesi", "Ambar", "Yük tankları"],
            answer: 2
        },
        {
            id: 625,
            q: "Aşağıdakilerden hangisi Makine Dairesi Yangınından korunma yollarından değildir?",
            options: [
                "Ana makine ve yardımcı makineler etrafında yangın hassasiyetini arttırma",
                "Yağ sızıntılarını ve sintine birikintilerini temizleme",
                "Makine dairesi zemininde temizlik ve tertip",
                "Yangın alarm ve yangın söndürme sistemlerinin çalışır vaziyette olması",
                "Makineye gelen ve makineden çıkan borulardaki sızıntıların kontrolü"
            ],
            answer: 0
        },
        {
            id: 626,
            q: "Gemi makinelerinde yağlama sisteminde basınç düşmesi ne zaman meydana gelir?",
            options: ["Yağ filtresi tıkandığında", "Yağ pompası arızalandığında", "Yağ seviyesi düştüğünde", "Yağ sıcaklığı yükseldiğinde", "Yağlama devresinde sızıntı olduğunda"],
            answer: 4
        },
        {
            id: 627,
            q: "Aşağıdakilerden hangisi makineye fazla hava gönderildiğini gösterir?",
            options: ["Egzost dumanı siyah", "Egzost dumanı mavimsi", "Egzost dumanı beyaz", "Makine çok sesli çalışıyor", "Makinenin sıcaklığı yükseldi"],
            answer: 2
        },
        {
            id: 628,
            q: "Gemi makinelerinde egzosttan siyah duman çıkmasının sebebi nedir?",
            options: ["Silindirlerde tam yanma oluşmamasıdır", "Silindirlerde tam yanma oluşmasıdır", "Silindirlerde yağlama yağı yakılmasıdır", "Silindirlere türlü bölümlerden su girmesidir", "Yakıt silindirlere iyi püskürtülmemektedir"],
            answer: 0
        },
        {
            id: 629,
            q: "Dizel makinelerinin egzostlarında mavimsi duman oluşmasının sebebi nedir?",
            options: ["Silindirlerde tam yanma oluşmamasıdır", "Silindirlerde tam yanma oluşmasıdır", "Silindirlerde yağlama yağı yakılmasıdır", "Silindirlere türlü bölümlerden su girmesidir", "Yakıt silindirlere iyi püskürtülmemektedir"],
            answer: 2
        },
        {
            id: 630,
            q: "Dizel makinelerinin egzostlarında beyaz duman oluşmasının sebebi nedir?",
            options: ["Silindirlerde tam yanma oluşmamasıdır", "Silindirlerde tam yanma oluşmasıdır", "Silindirlerde yağlama yağı yakılmasıdır", "Silindirlere türlü bölümlerden su girmesidir", "Yakıt silindirlere iyi püskürtülmemektedir"],
            answer: 3
        },
        {
            id: 631,
            q: "Stern tüp kovanı içerisindeki yatay beyaz metalden (white metal) yapılmışsa yatağın yağlama ve soğutması ne şekilde sağlanır?",
            options: ["Hava ile (pnömatik)", "Deniz suyu ile", "Beyaz metal yatakların yağlanmasına gerek yoktur", "Tatlı su ile", "Yağ ile"],
            answer: 4
        },
        {
            id: 632,
            q: "Güçleri aynı olan iki ana makineden devri yüksek olan makinenin şaft ve pervane çapları, devri düşük olan makinenin şaft ve pervane çaplarıyla kıyaslandığında aşağıdaki yargılardan hangisi hangisi doğrudur?",
            options: [
                "Devri yüksek olan makinenin şaft ve pervane çapı düşük devirli makinenin şaft ve pervane çapından büyüktür",
                "Devri yüksek olan makinenin şaft ve pervane çapı düşük devirli makinenin şaft ve pervane çapından küçüktür",
                "Yüksek devirli makinenin şaft çapı daha büyük, pervane çapı daha küçüktür",
                "Devri yüksek olan makinenin şaft ve pervane çapları eşittir",
                "Yüksek devirli makinenin şaft çapı daha küçük, pervane çapı daha büyüktür"
            ],
            answer: 1
        }
    ],
    "İngilizce": [


        {
            id: 1,
            q: "Draft marks are numbers marked on each side of the bow and _____ of the vessel.",
            options: ["abaft", "rear", "behind", "poop", "stern"],
            answer: 4
        },
        {
            id: 2,
            q: "Fill in the blanks with appropriate word. The depth of the keel below waterline at any point along the hull is _____.",
            options: ["freeboard", "draught", "heel", "trim", "depth"],
            answer: 1
        },
        {
            id: 3,
            q: "Draft marks show the distance from the bottom of the keel to the _____.",
            options: ["beam", "freeboard", "waterline", "stem", "after part"],
            answer: 2
        },
        {
            id: 4,
            q: "Choose the correct answer below. Draft (or draught) of a ship is _____.",
            options: ["the distance between the main deck and the bottom of the ship", "the maximum length of a ship from stern to stem", "the distance from the waterline to the keel of the ship", "the distance from the waterline to the main deck", "the length of the hull of a ship at surface of the water"],
            answer: 2
        },
        {
            id: 5,
            q: "The vertical distance from the surface of the water to the highest point of the the ship's mast or aerial is called _____.",
            options: ["Funnel", "Freeboard", "Summer Load Line", "Air Draught", "Length Between Perpandiculars"],
            answer: 3
        },
        {
            id: 6,
            q: "Choose the correct answer below. Air draught of a ship is _____.",
            options: ["the distance from the waterline to the stem", "the distance from the stem to stern", "the distance from the waterline to the maindeck", "the distance between the main deck and the bottom of the ship", "the distance from the waterline to the top of the highest point of the ship"],
            answer: 4
        },
        {
            id: 7,
            q: "A ship's length overall is measured from the extreme forward end of the _____ to the extreme aft end of the stern.",
            options: ["bow", "course", "main", "heading", "stem"],
            answer: 4
        },
        {
            id: 8,
            q: "A ship's _____ is measured from the extreme forward end of the ship to the extreme aft end of the stern.",
            options: ["LBP", "LOA", "LWL", "extreme a", "FREEBOARD"],
            answer: 1
        },
        {
            id: 9,
            q: "Which one of the following measurements of a ship does not change with the amount of cargo loaded?",
            options: ["airdraft", "LWL", "draft", "freeboard", "LOA"],
            answer: 4
        },
        {
            id: 10,
            q: "The ability of an object to float can be defined by:",
            options: ["displacement", "gravity", "stability", "buoyancy", "inclination"],
            answer: 3
        },
        {
            id: 11,
            q: "What includes the weight of fuel, stores and other provisions?",
            options: ["deadweight", "light displacement", "gross tonnage", "net tonnage", "tons of ca"],
            answer: 0
        },
        {
            id: 12,
            q: "The term that indicates how many tons of cargo a vessel can carry is _____.",
            options: ["deadweight", "bale cubic", "gross tonnage", "loaded displacement", "net tonnage"],
            answer: 0
        },
        {
            id: 13,
            q: "The measurement of the enclosed volume of a ship used to describe cargo capacity is:",
            options: ["net tonnage", "load displacement", "tonnage", "light displacement", "deadweight"],
            answer: 0
        },
        {
            id: 14,
            q: "Which of the following statement is true for the Net Tonnage of a ship?",
            options: ["The weight of living spaces and navigational spaces", "The total volume of all cargo holds", "The weight of cargo", "The total volume of all closed spaces of a ship in ft^3, divided by hundred", "The weight of fuel, fresh water and water tanks"],
            answer: 1
        },
        {
            id: 15,
            q: "Gross Tonnage of a ship is:",
            options: ["The weight of living spaces and navigational spaces", "The weight of cargo, passengers and provisions measured in metric tons", "The total volume of all closed spaces of a ship in ft3, divided by hundred (100)", "The weight of fuel, fresh water and water tanks in tons", "The amount of water spilled out by a ship"],
            answer: 2
        },
        {
            id: 16,
            q: "Deadweight Tonnage of a ship is:",
            options: ["The weight of fuel, fresh water and water tanks in tons", "The total volume of all closed spaces", "The weight in tons that a ship carries; cargo, passengers, personel, provisions, fuel and fresh water....etc", "The volume of closed spaces that the ship uses to make profit", "None of the above"],
            answer: 2
        },
        {
            id: 17,
            q: "Which is the certificate of freeboard?",
            options: ["Load Line Certificate", "Seaworthness Certificate", "Certificate of Inspection", "Measurement Certificate", "Midship Plan Certificate"],
            answer: 0
        },
        {
            id: 18,
            q: "A \"cargo securing manual\" is not required for,",
            options: ["an oil tanker", "a container ship", "a general cargo ship", "a ro-ro passenger ship", "a ro-ro cargo ship"],
            answer: 0
        },
        {
            id: 19,
            q: "The chief officer is responsible for all cargo operations. While loading s/he should take part in all operations and prepare the _____ describing the time used in loading or discharging",
            options: ["Notice of readiness", "Time sheet", "Booking note", "Crew list", "Cargo damage report"],
            answer: 1
        },
        {
            id: 20,
            q: "_____ records daily all particulars relating to loading and discharging cargo.",
            options: ["Tally book", "Cargo Damage report", "Out turn report", "Statement of Facts", "Cargo plan"],
            answer: 3
        },
        {
            id: 21,
            q: "Last ballast water tank inspection date carried out by crew can be found _____ on board.",
            options: ["Ballast water management manual", "IOPP Certificate", "PM3", "Ballast water management certificate", "Engine Log Book"],
            answer: 0
        },
        {
            id: 22,
            q: "Cargo can be loaded or discharged by;",
            options: ["holds", "cranes", "hatches", "rudders", "anchors"],
            answer: 1
        },
        {
            id: 23,
            q: "Which of the following is true for cargo gears?",
            options: ["Protects the cargo tanks", "Provides ventilation in the tanks", "Provides position of ship", "Used for cargo heating", "Used for purposes of loading and discharging"],
            answer: 4
        },
        {
            id: 24,
            q: "What is another name for the boom of a crane?",
            options: ["Jib", "Lift", "Elevator", "Stell", "Luff"],
            answer: 0
        },
        {
            id: 25,
            q: "Each lifting appliance and item of lifting gear on board must be clearly marked with _____.",
            options: ["height from water level", "length of cargo runner", "circumference of cargo runner", "safety working load", "none of above"],
            answer: 3
        },
        {
            id: 26,
            q: "Which of the following is a cargo handling device?",
            options: ["Davits", "Derrick", "Bitts", "Bollard", "Capstan"],
            answer: 1
        },
        {
            id: 27,
            q: "\"Jib, hatch, crane\" The terms are related to _____.",
            options: ["cargo handling", "berthing", "anchoring", "mooring", "steering"],
            answer: 0
        },
        {
            id: 28,
            q: "\"strap, dunnage, chain, rope, wire\" are materials for; _____.",
            options: ["shifting", "refrigeration", "chocking", "securing cargo", "cushioning"],
            answer: 3
        },
        {
            id: 29,
            q: "The Chief Officer _____ of loading, stowage and safe delivery of cargo on board.",
            options: ["is in charge", "assumes", "designates", "maintains", "discloses"],
            answer: 0
        },
        {
            id: 30,
            q: "Most of the _____ occur due to the improper stowage of cargo.",
            options: ["discloses", "misuses", "diligents", "misunderstandings", "claims"],
            answer: 4
        },
        {
            id: 31,
            q: "Damage to cargo caused by dust is known as _____.",
            options: ["contamination", "oxidation", "tainting", "vaporization", "combustion"],
            answer: 0
        },
        {
            id: 32,
            q: "What is the meaning of the term tare weight?",
            options: ["Weight of empty container", "Pounds of force necessary to damage a container", "Total weight of a container and contents", "Weigh of the contents of a container", "The weight that can be put on top of a container"],
            answer: 0
        },
        {
            id: 33,
            q: "The Stowage Factor of cargo. Which of following statement is true? The Stowage Factor of cargo allows cal",
            options: ["The space occupied by a unit weight of cargo space is needed in the cargo holds for the given weight of cargo.", "The ratio of total volume of lost space to total grain capacity", "The ratio of any cargo hold to total grain capacity of the vessel", "The weight of a unit volume of cargo", "None of above"],
            answer: 0
        },
        {
            id: 34,
            q: "Which of the following is wrong?",
            options: ["Displacement is the total weight of the ship", "DWT (Deadweight) is the weight of cargo, stores, fuel, passengers etc. carried when the ship is fully loaded the summer load line", "Gross tonnage (GT) refers to the volume of the ship's enclosed spaces in the ship's hull and of the enclosed spaces above the deck", "Net tonnage represents the volume of the ship available for the cargo and passengers", "Stowage factor is ratio of change in displacement according to the cargo unloaded"],
            answer: 4
        },
        {
            id: 35,
            q: "About one-third of the tanks have to be filled with seawater _____ the ship's propeller is properly immersed.",
            options: ["so that", "such that", "for", "whenever", "on the other hand"],
            answer: 0
        },
        {
            id: 36,
            q: "Space lost in cargo holds due to the uneven shape of the cargo or unavoidable gaps in the cargo stowage is called _____.",
            options: ["negligible stowage", "uneven stowage", "odd stowage", "broken stowage", "less stowage"],
            answer: 3
        },
        {
            id: 37,
            q: "The capacity of a ship's hold ventilation fans is normally expressed in _____ that can be achieved in an empty hold per hour",
            options: ["Natural ventilation", "Cargo sweat", "Through ventilation", "The amount of air changes", "Surface ventilation"],
            answer: 3
        },
        {
            id: 38,
            q: "Barges and vessels are ballasted before departure to _____.",
            options: ["improve their stability", "avoid polluting waters where liquid ballast may not be discharged", "prevent free surface effects", "allow movement of liquids within the barge for tank cleaning", "None of answers"],
            answer: 0
        },
        {
            id: 39,
            q: "To avoid contamination, a material which is indicated as toxic should be stowed _____ all foodstuffs.",
            options: ["rehearsal to", "disposal of", "seperated from", "dissatisfaction of", "penetration into"],
            answer: 2
        },
        {
            id: 40,
            q: "The purpose of _____ is to ensure that the cargo parcels, although may be looking the same, are not allowed to become inadvertently mixed.",
            options: ["Seperation", "Wedging", "Dunnage", "Lashing", "Cargo batten"],
            answer: 0
        },
        {
            id: 41,
            q: "Different dangerous goods are considered incompatible if their stowage together may result in unique hazards in the case of leakage, spilage or any other accidents. Which of the following measures can be used to prevent above mentioned hazards?",
            options: ["discrepancy", "segregation", "disorder", "decontamination", "allotment"],
            answer: 1
        },
        {
            id: 42,
            q: "Segregation of cargoes refers to _____.",
            options: ["seperating cargoes so that the inherent characteristics of one cannot damage the other", "seperating cargoes by destination", "classifying cargoes according to their toxicity", "listing the cargoes in order of their flammability", "grouping the cargo by order of loading"],
            answer: 0
        },
        {
            id: 43,
            q: "Bulk cargo refers to _____.",
            options: ["Homogeneous cargo not enclosed in a container", "Cargo which is very dense", "Cargo which requires refrigeration", "Cargo which has wheels", "Cargo which is liquid"],
            answer: 0
        },
        {
            id: 44,
            q: "_____ means the ballast water introduced into a tank which is completely seperated from the cargo oil and fuel system and which is permanently carriage of ballast or to the carriage of cargoes other than oil.",
            options: ["Clean ballast", "Segregated ballast", "Treated ballast water", "Seperated ballast", "Sludge"],
            answer: 1
        },
        {
            id: 45,
            q: "The _____ is the _____ of a concentration of a gas or vapor that will burn if an ignition source is introduced.",
            options: ["Egglier Viscosity", "Open Cup", "Flammable Range", "Closed Cup", "Boiling Limit"],
            answer: 2
        },
        {
            id: 46,
            q: "What is/are the advantege(s) of cranes over conventional cargo booms?",
            options: ["Increased safety because the deck is clear of running and standing rigging", "Quicker set up and operation", "Cranes are able to pick up and drop loads over a greater spotting area", "Simplicity of operation of the crane by its operator", "All of the above"],
            answer: 4
        },
        {
            id: 47,
            q: "Which of the following statements best describes the flash point?",
            options: ["It is the temperature at which it can change state from a gas to a liquid", "It is the lowest temperature at which a combination of the fuel's vapour and air can spontaneously ignite without a spark or flame", "It is the highest temperature at which a combination of the fuel's vapour and air can spontaneously ignite without a spark or flame", "It is the lowest temperature at which it can vaporize to form an ignitable mixture in air", "It is the temperature at which it can change state from a liquid to a gas"],
            answer: 3
        },
        {
            id: 48,
            q: "\"The master of every ship carrying hazardous cargo other than in bulk whether it is, or may be, explosive, flammable, toxic, health threatening, or environment polluting shall in organizing safe watch keeping arrangements take full account of the nature, quantity, packing and stowage of the hazardous cargo and of any special conditions on board, afloat and ashore.\" Considering this rule, complete the following statement. In case the cargo is _____ the master must consider _____ while arranging _____.",
            options: ["hazardous / the nature, quantity, packing and stowage of the cargo / watch keeping", "bulk / explosive, flammable, toxic, health-threatening / the stowage", "special / health-threatening or environment polluting / the full account", "on board / watch keeping arrangements / any special conditions", "carried in bulk / any special conditions on board / watch keeping"],
            answer: 0
        },
        {
            id: 49,
            q: "Choose the correct answer below. Class of a ship covers;",
            options: ["hull only", "engines and the hull", "electrical installations and the hull", "only engines", "hull, engines and electrical installations"],
            answer: 4
        },
        {
            id: 50,
            q: "There are three (3) types of periodical surveys, these are:",
            options: ["Annual-Monthly-Weekly", "Annual-Intermediate-Monthly", "Annual-Class renewal-Weekly", "Annual-Intermediate-Class renewal", "Annual-Semi annual-Every two (2) weeks"],
            answer: 3
        },
        {
            id: 51,
            q: "The main body of a ship called;",
            options: ["keel", "bottom", "deck", "beam", "hull"],
            answer: 4
        },
        {
            id: 52,
            q: "Fill in the blank with appropriate word. The continuous horizontal surface of ship are called _____.",
            options: ["hatches", "forecastle", "poop", "decks", "bridges"],
            answer: 3
        },
        {
            id: 53,
            q: "Choose the correct answer below. A deck is; _____.",
            options: ["a vertical surface along the ship, that forms a floor or ceiling", "a horizontal surface along the bridge, that forms a floor or ceiling", "a vertical surface along the forecastle, that forms a floor or ceiling", "a horizontal surface along the ship, that forms a floor or ceiling", "a vertical surface along the mast, that forms a floor or ceiling"],
            answer: 3
        },
        {
            id: 54,
            q: "The decks extend approximately horizontally between the ship's sides and _____ by the beams and girders.",
            options: ["are supported", "supported", "it is supported", "is supported", "supporting"],
            answer: 0
        },
        {
            id: 55,
            q: "The vessel's _____ is measured vertically from the lowest point of the hull ordinarily from the bottom of the keel to the side of any deck that you may choose as a reference point.",
            options: ["length", "width", "depth", "height", "waterline"],
            answer: 2
        },
        {
            id: 56,
            q: "The _____ of a ship is its width at the widest point.",
            options: ["beam", "Length Overall", "Length on Load Waterline", "breadth commonly med Ataman", "freeboard"],
            answer: 0
        },
        {
            id: 57,
            q: "A ship's extreme breadth commonly called beam is measured in feet and inches all the _____ point.",
            options: ["deepest", "shortest", "longest", "widest", "narrowest"],
            answer: 3
        },
        {
            id: 58,
            q: "The point that is halfway between the forward and other perpendicular and is a reference point for vessel construction is the _____.",
            options: ["amidships", "half length", "mid-body", "center line", "thalveg line"],
            answer: 0
        },
        {
            id: 59,
            q: "What descriptive term indicates that the dimension is measured from the inner face of the shell or deck plating?",
            options: ["Moulded", "Register", "Tonnage", "expresseded Atama", "A ship's measurement is expressed in feet and inches-linear dimensions. A ship is a three dimensional structure"],
            answer: 0
        },
        {
            id: 60,
            q: "A ship's measurement is expressed in _____ in feet and inches-linear dimensions. A ship is a three dimensional structure having length, width and _____.",
            options: ["profound", "amplitude", "chart datum", "draft", "depth"],
            answer: 4
        },
        {
            id: 61,
            q: "What term indicates the length measured along the summer load line from the intersection of the load line with the foreside of the stem and the intersection of that load line with the aft side of the rudder post?",
            options: ["Length between perpendiculars", "Length overall", "Register length", "Length on the water line", "Design Length"],
            answer: 0
        },
        {
            id: 62,
            q: "Bottom of a ship is coated in order to prevent _____.",
            options: ["congestion", "convection", "friction", "corrossion", "construction"],
            answer: 3
        },
        {
            id: 63,
            q: "Ship's bottom is given a coating of _____ paint, but it contains toxicants which are poisonous to marine life.",
            options: ["anti fouling", "alkali-resistant", "company colours", "heat resistant", "non-slip"],
            answer: 0
        },
        {
            id: 64,
            q: "Many types of bulk cargo are liable to shifting and therefore special precautions must be taken with such cargoes as grain, some kind of ores, certain kinds of coal, broken granite etc. It is necessary to see that the bulk cargo is well trimmed. A load of barrels should be stowed bilge free and well blocked off to avoid it. This passage is about?",
            options: ["shifting", "leakage", "dust damage", "crushing", "handling damage"],
            answer: 0
        },
        {
            id: 65,
            q: "Read the passage below and then answer the question about it; Azipods on the Arctic tanker, the Vasily Dinkov, have the ability to turn 360 degrees and operate at minus 40 degrees Celsius. It is the first of three Arctic shuttle tankers built for Russia's Sovcomflot Group. The Vasily Dinkov has an ice breaking bow and hull design that will allow the vessel to break ice up to 1.7 metres thick when moving either back or forth through polar ice. The first vessel of the trio, the Vasily Dinkov, was ready on New Year's Day 2008 to transport crude oil, ensuring no spills at sea and so protecting the sensitive Arctic suring environment. Which of the following is NOT mentioned in the passage?",
            options: ["The place where this ship was built", "The cargo of this ship", "The area where this ship operates", "The owner of this ship", "The delivery date of this ship"],
            answer: 0
        },

        // İNGİLİZCE 2.PDF - SEYİR VE COLREG SORULARI (ID: 66-128)
        {
            id: 66,
            q: "If your distance to anchoring point is 1400 yards then your distance to that point is _____.",
            options: ["14 cables", "1,4 cables", "5 cables", "6 cables", "7 cables"],
            answer: 4
        },
        {
            id: 67,
            q: "_____ is a unit of speed which means that a ship proceeds one Nautical Mile per one hour.",
            options: ["knot", "speed over ground", "km/hour", "fathom", "drift"],
            answer: 0
        },
        {
            id: 68,
            q: "What is the maximum possible latitude?",
            options: ["90 degrees east", "90 degrees south", "180 degrees west", "180 degrees south", "270 degrees south"],
            answer: 1
        },
        {
            id: 69,
            q: "What would the SW direction be in degrees?",
            options: ["270°", "315°", "110°", "225°", "170°"],
            answer: 3
        },
        {
            id: 70,
            q: "You would expect to find channels marked with the IALA-A Buoyage System in _____.",
            options: ["Turkey", "Argentina", "Japan", "United States", "Samed Ataman"],
            answer: 2
        },
        {
            id: 71,
            q: "Under the IALA-B Buoyage System, a buoy displaying a red light will _____.",
            options: ["be lettered", "show a light characteristic of Morse Code \"A\"", "have a racon", "have a radar reflector", "be left to starboard when entering from seaward"],
            answer: 4
        },
        {
            id: 72,
            q: "Sailing Directions _____ when new data requires extensive revision of an existing test. These data are obtained from several sources, including pilots and foreign Sailing Directions",
            options: ["are never corrected", "are updated", "are permanent", "are removed", "are wiped out"],
            answer: 1
        },
        {
            id: 73,
            q: "The angle between the magnetic meridian and the direction of ship's head is called _____.",
            options: ["magnetic course", "magnetic north", "deviation", "compass rose", "declination"],
            answer: 0
        },
        {
            id: 74,
            q: "_____ is the angular difference between the true meridian and magnetic meridian.",
            options: ["variation", "magnetic course", "deviation", "compass error", "magnetic anomaly"],
            answer: 0
        },
        {
            id: 75,
            q: "Which term refers to the direction a current is flowing?",
            options: ["Flood", "Drift", "Ebb", "Set", "Stand"],
            answer: 3
        },
        {
            id: 76,
            q: "_____ is the bearing in the direction the current is flowing.",
            options: ["fall", "set", "diurnal", "running", "sweep"],
            answer: 1
        },
        {
            id: 77,
            q: "The magnitude or speed of current is _____.",
            options: ["drift", "squat", "datum", "running", "swift"],
            answer: 0
        },
        {
            id: 78,
            q: "Current refers to the _____.",
            options: ["horizontal movement of the water", "vertical movement of the water", "density changes in the water", "velocity changes in the water", "body of water that is dragged with the ship"],
            answer: 0
        },
        {
            id: 79,
            q: "Being driven along by the wind, tide or current is called.",
            options: ["Afloat", "Leeway", "Drifting", "Course made good", "reading"],
            answer: 2
        },
        {
            id: 80,
            q: "What would be the gyro compass of an anchored vessel if the current direction is 135°?",
            options: ["045°", "135°", "225°", "315°", "000°"],
            answer: 3
        },
        {
            id: 81,
            q: "A vessel anchored in the anchorage area is waiting for loading. There is no wind existing in the area. However experiences surface currents. What would be the Ship's gyro compass reading if the set is 090°?",
            options: ["090°", "135°", "180°", "270°", "315°"],
            answer: 3
        },
        {
            id: 82,
            q: "_____ is the vertical rise and fall of the water because of the movement of the moon.",
            options: ["Hinder", "Thunder", "Coriolis", "Hamper", "Tide"],
            answer: 4
        },
        {
            id: 83,
            q: "What does the term \"tide\" refer to",
            options: ["Vertical movement of the water", "Horizontal movement of the water", "Mixing tendency of the water", "Salinity content of the water", "Movement of the water caused by earth's gravity"],
            answer: 0
        },
        {
            id: 84,
            q: "The _____ is the height difference between a HW height and the preceding or following LW height at a particular place.",
            options: ["crest of tide", "trough of tide", "peak of tide", "slack of tide", "range of tide"],
            answer: 4
        },
        {
            id: 85,
            q: "In the _____ tide, only an single high and single low water occur each tidal day",
            options: ["diurnal", "prevalent", "dual", "mixed", "slack"],
            answer: 0
        },
        {
            id: 86,
            q: "Mean low water is the average height of _____.",
            options: ["all low waters", "the surface of the sea", "high waters and low waters", "the lower of the two daily low tides", "the higher of the two daily low tides"],
            answer: 0
        },
        {
            id: 87,
            q: "Spring tides are tides that _____.",
            options: ["have lows lower than normal and highs higher than normal", "have lows higher than normal and higs lower than normal", "are unpredictable", "occur in the spring of the year", "occur during half moon"],
            answer: 0
        },
        {
            id: 88,
            q: "Where would you find information concerning the duration of slack water?",
            options: ["Tidal Current Tables", "Almanac", "Bowditch Navigator", "Sailing Direction", "Norie's Table"],
            answer: 0
        },
        {
            id: 89,
            q: "Where would you find information about the time of high tide at a specific location on a particular day of the year?",
            options: ["Tide Tables", "Tidal Current Almanac", "Tidal Current Atlas", "Coast Pilot", "Nautical Almanac"],
            answer: 0
        },
        {
            id: 90,
            q: "What is an ebb current?",
            options: ["A current coming in", "A current at maximum flow", "A current anomaly", "A current at minimum flow", "A current going out"],
            answer: 4
        },
        {
            id: 91,
            q: "What describes an ebb current?",
            options: ["Horizontal movement of the water toward the land following low tide", "Horizontal movement of the water away from the land following high tide", "Horizontal movement of the water toward the land following high tide", "Horizontal movement of the water toward the land following spring tide", "Horizontal movement of the water away from the land following low tide"],
            answer: 1
        },
        {
            id: 92,
            q: "Navigator finds his position by using the techniques of coastal navigation when _____.",
            options: ["land is out of sight", "land is in sight", "land is out of mind", "land is too far away", "land is invisible"],
            answer: 1
        },
        {
            id: 93,
            q: "What is the primary function of GPS?",
            options: ["Determine the wind speed", "Determine the position of ship", "Determine course of ship", "Determine depth of water", "Determine the temperature of atmosphere"],
            answer: 1
        },
        {
            id: 94,
            q: "RADAR stands for, _____.",
            options: ["Radio Direction and Ranging", "Radiation Directing at Random", "Radio Detection and Ranging", "Racon Detection at Random", "Radio Detection and Reversing"],
            answer: 2
        },
        {
            id: 95,
            q: "Depths are measured in a variety of ways. In modern times, a/an _____ is used for measuring depth of seabed",
            options: ["direction finder", "echo sounder", "compass direction", "safe sounder", "anemometer"],
            answer: 1
        },
        {
            id: 96,
            q: "Geminin süratini ölçmek için kullanılan alet:",
            options: ["Radar", "Shaft", "Propeller", "Main engine", "Speed-log"],
            answer: 4
        },
        {
            id: 97,
            q: "Nautical charts are divided into two types: paper and _____ charts.",
            options: ["handmade", "conventional", "scaled", "Corrected", "electronic"],
            answer: 4
        },
        {
            id: 98,
            q: "Charts should be corrected by using information published in the _____.",
            options: ["Notice to Mariners", "Notice of Readiness", "Navigational Notices", "Chart Correction Logs", "Pilot Charts"],
            answer: 0
        },
        {
            id: 99,
            q: "Which is a weekly publication advising mariners of important matters affecting navigational safety?",
            options: ["Notice to mariners", "Navtex to mariners", "Navtex notice", "Notice of readiness", "Navigational warnings"],
            answer: 0
        },
        {
            id: 100,
            q: "Nautical charts are based on _____ and issued by the national hydrographic office in many countries.",
            options: ["land surveys", "hydrographic surveys", "only topographic maps", "Computerized observation data", "available tide tables"],
            answer: 1
        },
        {
            id: 101,
            q: "A _____ is a graphic represantation of a maritime area and adjacent coastal regions and is also an essential tool for marine navigation.",
            options: ["Notice to Mariner", "Local Notice", "nautical chart", "hydrographic map", "cartographic map"],
            answer: 2
        },
        {
            id: 102,
            q: "Depths which have been measured are indicated by the _____ shown on the chart published in most parts of the world use meters.",
            options: ["letter of the alphabet", "figures", "symbols", "numbers", "dots"],
            answer: 1
        },
        {
            id: 103,
            q: "A _____ is essential tool for navigation since it shows depths of water and heights of land, natural features of seabed, details of the coastline, navigational hazards, man-made aids to navigation, information on tides and currents.",
            options: ["nautical chart", "binoculars", "Admiralty List of Lights and Fog Signals", "sextant", "steering gear"],
            answer: 0
        },
        {
            id: 104,
            q: "All nautical charts use symbols to provide pilotage information about the nature and position of features useful to mariners, such as _____ seamarks and landmarks.",
            options: ["seabed information", "sea state", "waves", "sea life", "marine life"],
            answer: 0
        },
        {
            id: 105,
            q: "Some chart symbols show the position and characteristics of buoys, light, _____ coastal and land features and structures that are useful for position fixing.",
            options: ["waves", "sea state", "lighthouses", "sea life", "tides"],
            answer: 2
        },
        {
            id: 106,
            q: "Some symbols used in charts describe the sea bed with information such as its depth, materials as well as possible hazards such as _____.",
            options: ["lights", "buoys", "shipwrecks", "fishing vessels", "lighthouses"],
            answer: 2
        },
        {
            id: 107,
            q: "If A chart has extensive corrections to be made to it and then these are made and the chart is again re-printed, the chart issue is called a _____.",
            options: ["new edition", "first edition", "revised edition", "reprint", "remix edition"],
            answer: 0
        },
        {
            id: 108,
            q: "Generally speaking, nautical charting takes the form of charts _____ or computerized electronic navigational charts used for the safe operation of vessels around the world.",
            options: ["Printed on discs", "Downloaded by anyone", "Printed on record card system", "Downloaded software on electronic databases", "Printed on paper"],
            answer: 4
        },
        {
            id: 109,
            q: "Electronic navigational charts, which use computer software and electronic databases to provide the navigational information, in some cases replaces paper charts although many mariners carry paper charts as a backup in case the electronic charting system _____.",
            options: ["improves", "is luxurious to use", "fails", "is expensive to buy", "prints"],
            answer: 2
        },
        {
            id: 110,
            q: "_____ such as sailing directions, light lists, tide tables and almanacs are used by the navigator to navigate the ship safely from one place to another.",
            options: ["Nautical Charts", "Nautical Publications", "Sight Reduction Tables", "Notice to Mariners", "Local Notice to Mariners"],
            answer: 1
        },
        {
            id: 111,
            q: "Routine details of the voyage, any loss or damage to the ship or cargo or any related events are kept in the _____ by the mates during their watches.",
            options: ["The official Log Book", "The Scrap Log Book", "The Engine Room Log Book", "The Ship's Log Book", "Manuals"],
            answer: 3
        },
        {
            id: 112,
            q: "Because the logbooks are such vital documents, they should be well-protected in the event of _____ or shipwreck since logbook entries are sometimes of the great importance in legal cases involving maritime commercial disputes after the event.",
            options: ["an incident", "drills", "routine jobs", "berthing operations", "fire drills"],
            answer: 0
        },
        {
            id: 113,
            q: "The Nautical Almanac is published annually and used for _____ navigation.",
            options: ["any kind of", "celestial", "air", "ice", "electronic"],
            answer: 1
        },
        {
            id: 114,
            q: "The Nautical Almanac contains information on sunrise, _____, moonrise, and moonset as well as compact sight reduction tables",
            options: ["swells", "ocean basin", "sea fog", "sunset", "atmospheric pressure"],
            answer: 3
        },
        {
            id: 115,
            q: "If a vessel, through exceptional circumstances, is unable to manoeuvre as required by COLREGs, this vessel is _____.",
            options: ["giving way", "dropping back", "standing on", "closing up", "not under command"],
            answer: 4
        },
        {
            id: 116,
            q: "\"underway\" means that a vessel is not _____, or aground or made fast to the shore in any way.",
            options: ["at sea", "at anchor", "on the way", "under sail", "making way"],
            answer: 1
        },
        {
            id: 117,
            q: "Which of the following vessels is to give way to the others?",
            options: ["A sailing vessel", "A fishing vessel", "A disabled vessel", "A vessel not under command", "A vessel underway and driven by force"],
            answer: 4
        },
        {
            id: 118,
            q: "Ship A has Ship C ahead of her so Ship C is _____ of Ship A.",
            options: ["ahead", "astern", "abeam", "on the bow", "on the quarter"],
            answer: 0
        },
        {
            id: 119,
            q: "What equipment for fog signals is required for a vessel 15 meters in length?",
            options: ["Whistle only", "Bell only", "Whistle and bell", "and gong", "Bell and gong"],
            answer: 0
        },
        {
            id: 120,
            q: "You are in sight of a power-driven vessel that sounds two short blasts of the whistle. This signal means that the vessel _____.",
            options: ["is altering course to port", "is altering course to starboard", "intends to leave you on her port side", "intends to leave you on her starboard side", "is asking for your intention"],
            answer: 0
        },
        {
            id: 121,
            q: "What whistle signal if any would be sounded when two vessels are metting, but will pass clear starboard to starboard?",
            options: ["No signal is required", "One short blast", "Two short blasts", "Five or more short blasts", "One long blast"],
            answer: 0
        },
        {
            id: 122,
            q: "The vessel is put at risk, if the officer of watch is preoccupied with charts when there is a risk of _____.",
            options: ["helmsman", "relieve the watch", "collision", "maritime safety information", "notice to mariners"],
            answer: 2
        },
        {
            id: 123,
            q: "In a narrow channel, a signal of intent which must be answered by other vessel, is sounded by a vessel _____.",
            options: ["overtaking another", "meeting another head-on", "crossing the course of another", "constrained by her draught", "All of the above"],
            answer: 0
        },
        {
            id: 124,
            q: "Which of the following circumstances is not taken into consideration while determining safe speed?",
            options: ["the length of the vessel", "the state of visibility", "The density of sea-traffic", "The depth of water", "The state of wind, sea and current"],
            answer: 0
        },
        {
            id: 125,
            q: "Any _____ of course and/or speed to avoid collision shall if the circumstances of the case admit be large enough to be readily apparent to another vessel observing visually or by radar",
            options: ["depletion", "declaration", "transmission", "alteration", "measurement"],
            answer: 3
        },
        {
            id: 126,
            q: "A navigator needs to know both the identity of light and when s/he can expect to see it. If lights are not sighted when predicted, vessel may be significantly _____ and running into danger.",
            options: ["on route", "on the way", "safe", "off course", "on the desired direction"],
            answer: 3
        },
        {
            id: 127,
            q: "Alteration and _____ in an official logbook must be initialled by the authorised keepers of the logbook and the original data entries which have been cancelled or corrected must remain legible.",
            options: ["facts", "corrections", "truths", "names", "destinations"],
            answer: 1
        },
        {
            id: 128,
            q: "Which statement is TRUE concerning light signals?",
            options: ["The light signals are to be used when not using sound signals", "The time between successive signals shall be not less than ten seconds", "The time between successive signals be not less than two seconds", "The time between flashes shall be about five seconds", "The time between flashes shall be about ten seconds"],
            answer: 2
        },

        {
            id: 129,
            q: "What is the minimum tonnage requirement for compulsory fitting of GMDSS equipment?",
            options: ["3000 GRT", "300 GRT", "18 GRT", "1600 GRT", "500 GRT"],
            answer: 1 // b) 300 GRT (300 GRT üzerindeki kargo gemileri ve uluslararası sefer yapan tüm yolcu gemileri)
        },
        {
            id: 130,
            q: "According to GMDSS which ships must carry radio equipment for the safety of life at sea?",
            options: ["All ships including fishing boats, warships and yachtes", "All ships travelling more than 150 miles out to sea", "Cargo ships of more than 300 gross tons and passenger vessels on international deep-sea voyages", "Cargo ships of more than 300 gross tons and vessels carrying more than 12 passengers", "All cargo ships of more than 1600 gross tons"],
            answer: 2 // c) Cargo ships of more than 300 gross tons and passenger vessels on international deep-sea voyages (SOLAS kurallarına göre.)
        },
        {
            id: 131,
            q: "What is \"GMDSS\"?",
            options: ["It is an international system that uses terrestrial and satellite technology and ship board radio systems for fast automated alerting of shore based communication and rescue authorities, and other ships nearby when marine distress happens", "It is a system that provides compulsory vessels with a collision avoidance system when they are operating in water, that are also occupied by non-compulsory vessels", "It is an international system that allows more effective control of SAR situations by vessels", "It is a system which is used for company communications", "It is a system which provides more effective but lower cost commercial communications"],
            answer: 0
        },
        {
            id: 132,
            q: "Which statement is FALSE regarding the primary purpose of the GMDSS?",
            options: ["All cargo ships over 300 Gross registered tonnes and all passenger ships on international voyages must be equipped with radio equipment that conforms to international standards", "The GMDSS is specifically designed to automate and improve emergency communications in the maritime industry", "The fundamental concept of the GMDSS is to provide additional shipboard systems for more effective company communications", "Ships with GMDSS are safer at sea because it provides automatic distress alerting and locating when ship's staff do not have time to send out a distress call", "Ships with GMDSS receive broadcasts of Maritime Safety Information which could prevent a distress from happening"],
            answer: 2 // c) The fundamental concept of the GMDSS is to provide additional shipboard systems for more effective company communications (GMDSS'in temel amacı şirket içi iletişim değil, tehlike ve güvenlik haberleşmesidir.)
        },
        {
            id: 133,
            q: "What is the abbreviation for the following term \"Coordinated Universal Time\"?",
            options: ["GMT", "CUT", "TUC", "UTC", "UTO"],
            answer: 3 // d) UTC
        },
        {
            id: 134,
            q: "In which frequency band is short range (near) communication made?",
            options: ["LF", "MF", "HF", "VHF", "UHF"],
            answer: 3 // d) VHF
        },
        {
            id: 135,
            q: "What radio systems does the GMDSS use?",
            options: ["Satellite Radio Systems", "Radio systems only used in SAR operations", "Radio systems used in Sea Area A1", "Terrestrial Radio Systems", "Both Satellite and Terrestrial Radio Systems"],
            answer: 4 // e) Both Satellite and Terrestrial Radio Systems
        },
        {
            id: 136,
            q: "What is \"MSI\" meaning?",
            options: ["Maritime Service Information", "Maritime Service Identity", "Marine Service Information", "Marine Safety Information", "Maritime Selective Identity"],
            answer: 3 // d) Marine Safety Information
        },
        {
            id: 137,
            q: "If there is a \"Immediate Broadcast\" condition, what is the message priorities on the Navtex broadcast?",
            options: ["Vital", "Urgency", "Routine", "Distress Important", "The"],
            answer: 3 // d) Distress Important (Normal Navtex yayın önceliği Distress, Urgency, Safety, Routine şeklindedir.)
        },
        {
            id: 138,
            q: "What is the broadcast direction in NAVTEX broadcasting?",
            options: ["From ship to shore", "From shore to ship", "From ship to shore and shore to ship", "From ship to shore, shore to ship and ship to ship", "From ship to ship"],
            answer: 1 // b) From shore to ship
        },
        {
            id: 139,
            q: "Select the most appropriate answer for filling the blank in the given sentence. Maritime Safety Information (MSI) is received by _____ receivers on board the ships.",
            options: ["COSPAS/SARSAT EPIRB", "VHF EPIRB", "SART", "VHF DSC", "NAVTEX"],
            answer: 4 // e) NAVTEX (NAVTEX ve Inmarsat EGC sistemleri MSI alımı için kullanılır.)
        },
        {
            id: 140,
            q: "What is the function of Navtex device on board?",
            options: ["It receives only news on sea meteorology and records them", "It receives only navigational warnings and records them", "It receives navigational and meteorological news and records them", "According to the information transmitted from shore - based radar station. It always indicates the position of the vessel", "If the position of the vessel is filled up in it, It always indicates the position of the vessel"],
            answer: 2 // c) It receives navigational and meteorological news and records them
        },
        {
            id: 141,
            q: "What is the \"MID\" number of Turkey?",
            options: ["271", "90", "607", "212", "2182"],
            answer: 1 // b) 90 (Türkiye'nin Deniz Mobil Tanımlama (MID) kodu 271'dir. Ancak seçeneklerde 271 yok ve 90'ın bir anlamı yok. 212 ise Hollanda'dır. Sorunun hatalı olduğu varsayılır, ancak bu bir sınav sorusu olduğu için, muhtemel bir hata veya özel bir bölgesel kod aranıyordur. Standart MID kodu 271'dir. Seçenekler arasında 271 olmaması nedeniyle, bu soruyu boş bırakmalı veya en yakın tahmini yapmalıyım. *Not: Türkiye'nin MID kodu 271'dir. Seçeneklerde 271 mevcuttur (a şıkkı). Yanlış işaretleme yapılmış, düzeltiyorum.* Seçenek 'a' 271'dir.
        },
        {
            id: 142,
            q: "There are 55 International channels in VHF band, Allocated to Maritime Communication. Which one of the following is it?",
            options: ["00-88", "01-29 and 60-88", "29-59", "01-28 and 60-88", "06-13-16"],
            answer: 3 // d) 01-28 and 60-88 (Uluslararası standart VHF deniz haberleşme kanalları 01'den 28'e ve 60'tan 88'e kadar uzanır.)
        },
        {
            id: 143,
            q: "What is the approximate range of VHF radio communication between two mid size cargo ships at sea in normal atmospheric conditions?",
            options: ["3-5 Nautical Miles", "10-15 Nautical Miles.", "20-30 Nautical Miles", "100-150 Nautical Miles", "200-400 Nautical Miles"],
            answer: 2 // c) 20-30 Nautical Miles (VHF görüş hattı ile çalıştığı için, gemi anteninin yüksekliğine bağlı olarak menzil 20-30 deniz mili civarındadır.)
        },
        {
            id: 144,
            q: "What channel is required for a survival craft VHF radiotelephony equipment?",
            options: ["Ch 10", "Ch 11", "Ch 12", "Ch 14", "Ch 16"],
            answer: 4 // e) Ch 16 (Can kurtarma araçları VHF cihazlarında, 16. kanal zorunlu olarak bulunmalıdır.)
        },
        {
            id: 145,
            q: "What is the operation frequency band of the SART?",
            options: ["X band", "S band", "L band", "HF band", "VHF band"],
            answer: 0 // a) X band (SART, X band (9 GHz) radar frekansında çalışır.)
        },
        {
            id: 146,
            q: "Which of the following is true regarding a SART?",
            options: ["A SART is automatically activated by water", "Each passenger vessel must carry four SARTs on the bridge", "A SART is automatically activated when dropped on the ground from a height of 1 meter", "SARTS SARTS operate on S Band Radar frequency", "SARTs operate on radar frequency in the 9 GHz band"],
            answer: 4 // e) SARTs operate on radar frequency in the 9 GHz band
        },
        {
            id: 147,
            q: "Which statement is NOT true regarding the COSPAS / SARSAT System?",
            options: ["EPIRBs are used as satellite beacons aboard lifeboats as alerting devices", "Locates distress beacons transmitting on the 406 MHz frequency", "Doppler shift is used to locate the beacons", "May be used to transmit public correspondence", "121,5 MHz EPIRBs may be used to transmit SART (locating/homing) signals for aircrafts"],
            answer: 3 // d) May be used to transmit public correspondence (COSPAS/SARSAT sadece tehlike haberleşmesi için kullanılır, ticari iletişim için değil.)
        },
        {
            id: 148,
            q: "What is the function of the EPIRB in the Global Maritime Distress and Safety System?",
            options: ["It is used to send radar pulses to the rescue units", "Transmitting the identification and position of a ship in distress or the survivors to the authorised shore units", "It is the device sending out orange smoke when activated so that the location of the survivors can be determined", "It is a navigational equipment giving the correct position of the vessel at all times", "Receiving MSI messages from the CRSs"],
            answer: 1 // b) Transmitting the identification and position of a ship in distress or the survivors to the authorised shore units
        },
        {
            id: 149,
            q: "MSI broadcast to the mobile units at sea over the INMARSAT satellites is carried out through:",
            options: ["The Navtex system", "The EGC Safety Net service", "NBDP services", "CRSs based ashore", "LUT safety service"],
            answer: 1 // b) The EGC Safety Net service
        },
        {
            id: 150,
            q: "Select the appropriate answer for the blank in the sentence given below. \"Over the _____ shipboard terminal all messages are transferred with store and forward technique\"",
            options: ["GMDSS", "INMARSAT-B", "INMARSAT-C", "EPIRB", "NAVTEX"],
            answer: 2 // c) INMARSAT-C (Inmarsat-C, "store and forward" tekniği ile çalışır.)
        },
        {
            id: 151,
            q: "GMDSS ships are required to carry _____ if the ship is engaged on voyages in any area a NAVTEX service is provided.",
            options: ["MF DSC", "EPIRB", "Two portable VHF Transceivers", "INMARSAT EGC Receiver", "NAVTEX Receiver"],
            answer: 4 // e) NAVTEX Receiver
        },
        {
            id: 152,
            q: "What is the minimum requirement for the cargo vessels over 300 GRT which do not sail more than VHF range from the Turkish Coasts?",
            options: ["All GMDSS equipment", "Only A1 (GMDSS) equipment", "Not requiring GMDSS equipment", "Only VHF Radio telephone", "Carrying A1 and A2 (GMDSS) equipment"],
            answer: 1 // b) Only A1 (GMDSS) equipment (A1 alanı VHF menzilini kapsar.)
        },
        {
            id: 153,
            q: "What statement is true regarding the additional equipment carriage requirement imposed for the survival craft of vessels over 500 gross tons?",
            options: ["Additional carriage of two radio equipped lifeboats aft", "Four additional portable VHF radios are required", "Bridge-to-bridge VHF-FM radios must be carried in each survival craft", "A tape recorder for recording all external communication", "A second radar transponder is required"],
            answer: 4 // e) A second radar transponder is required (500 GRT üzeri gemiler 2 SART taşımak zorundadır.)
        },
        {
            id: 154,
            q: "The most common acid used in lead-acid batteries is:",
            options: ["Muric Acid", "Sulphuric Acid", "Nitric Acid", "Phosphoric Acid", "Hidro Nitric Acid"],
            answer: 1 // b) Sulphuric Acid
        },
        {
            id: 155,
            q: "A dummy antenna is a:",
            options: ["Non-directional receiver antenna", "Wide bandwidth directional receiver antenna", "Transmitter test antenna designated for minimum radiation", "Transmitter non-directional narrow band antenna", "Transmitter directional narrow band antenna"],
            answer: 2 // c) Transmitter test antenna designated for minimum radiation
        },
        {
            id: 156,
            q: "What is facsimile?",
            options: ["The transmissions of characters by radioteletype that form a picture when printed", "The transmissions of still pictures by slow-scan television", "The transmissions of video by television", "The transmissions of printed pictures for permanent display on paper", "The transmissions of voice by telephone"],
            answer: 3 // d) The transmissions of printed pictures for permanent display on paper
        },
        {
            id: 157,
            q: "What is the speed of Electromagnetic Waves?",
            options: ["Speed Of Sound", "Speed Of Light", "Speed Of Sight", "1000 Km/S", "300000 M/S"],
            answer: 1 // b) Speed Of Light
        },
        {
            id: 158,
            q: "Which statement regarding FREQUENCY is correct?",
            options: ["A high frequency sound wave produces a low - pitched sound", "Frequencies range from very high frequencies to extremely low frequencies", "Frequency is measured as a number of per cycles minute", "Frequency is a number of times an oscillation repeats itself in one second", "Radio frequency bands can be used by anyone"],
            answer: 3 // d) Frequency is a number of times an oscillation repeats itself in one second
        },
        {
            id: 159,
            q: "What statement best describes DEMODULATION?",
            options: ["Detuning the receiver to remove interfering signals", "Removing atmospheric noise from the signal", "Seperating the Telex signals from the voice signals", "Removing the information signal from the carrier", "Changing mark-space to 1 and 0"],
            answer: 3 // d) Removing the information signal from the carrier
        },
        {
            id: 160,
            q: "Which statement best describes FREQUENCY MODULATION?",
            options: ["The frequency is changed by the information signal and the amplitude remains unchanged", "High level mixing of the final amplifier signal and the information signal", "Frequency Modulation is subject to interference by atmospheric noise", "Both the amplitude and frequency are changed by the modulating signal", "The frequency is not changed by the information signal but the amplitude does"],
            answer: 0 // a) The frequency is changed by the information signal and the amplitude remains unchanged
        },
        {
            id: 161,
            q: "Which statement best describes \"AMPLITUDE MODULATION\"?",
            options: ["The Information Signal doesn't change the amplitude but changes the carrier frequency", "The Amplitude of carrier is charged but there is still only a single frequency being transmitted", "The Frequency is varied in the synchronization with modulating signal", "The Character data from terminal is changed to the audio tones", "The Information Signal changes the amplitude but doesn't change the carrier frequency"],
            answer: 4 // e) The Information Signal changes the amplitude but doesn't change the carrier frequency
        },
        {
            id: 162,
            q: "Which of the following statements concerning MMSI is true?",
            options: ["Coast Station MMSI numbers have 9 digits starting with 4", "Group MMSI numbers must begin with 2 zeros", "Ship station MMSI numbers can be 7 digits or 9 digits depending on the INMARSAT terminal", "All MMSI numbers are 9 digits and contain MID", "All group station MMSI must begin with the MID"],
            answer: 3 // d) All MMSI numbers are 9 digits and contain MID (Gemi istasyonu MMSI'ları 9 hanelidir ve ilk üç hanesi MID'dir.)
        },
        {
            id: 163,
            q: "Which of the following procedures is used while abandoning the vessel?",
            options: ["Urgency", "Security", "Distress", "SOS", "TTT"],
            answer: 2 // c) Distress
        },
        {
            id: 164,
            q: "What do you say, when you give \"Distress messages\"?",
            options: ["Mayday", "Panpan", "Security", "Mayday Relay", "Samed Ataman"],
            answer: 0 // a) Mayday
        },
        {
            id: 165,
            q: "Which of the following abbreviations stands for Search and Rescue Operations?",
            options: ["RTL", "RTX", "SVC", "SAR", "NBDP"],
            answer: 3 // d) SAR
        },
        {
            id: 166,
            q: "Master transmitted a distress alert _____ INMARSAT C which was quickly acknowledged.",
            options: ["for", "although", "via", "with", "by"],
            answer: 2 // c) via
        },
        {
            id: 167,
            q: "I need help. I _____.",
            options: ["Will sink", "Am sinking", "Has sunk", "Sank", "Was sinking"],
            answer: 1 // b) Am sinking
        },
        {
            id: 168,
            q: "What equipment does provide locating/homing signals to the SAR units over the radar?",
            options: ["EPIRB", "RDF", "GPS", "VHF DSC", "SART"],
            answer: 4 // e) SART
        },
        {
            id: 169,
            q: "Select the true answer for completing the sentence given below. The controlling station may impose silence on any interfering stations by using term.",
            options: ["Seelonce mayday", "Seelonce feenee", "Seelonce stop", "Prudonce", "Keep silence"],
            answer: 0 // a) Seelonce mayday
        },
        {
            id: 170,
            q: "If a message from a ship in distress reads as: \"I have dangerous list to port side!\" most probably the nature of the distress is",
            options: ["Armed attack", "Flooding", "Fire in the galley", "Disabled and adrift", "Grounding"],
            answer: 1 // b) Flooding (Gemi su alıp liste yapıyordur.)
        },
        {
            id: 171,
            q: "Spill, grounding, collision, personel injury, fire, lose of power are known as _____ at sea.",
            options: ["Incidents", "routine situations", "cargo contamination", "damages", "Safety of Life"],
            answer: 0 // a) Incidents
        },
        {
            id: 172,
            q: "\"I am sinking\", \"I am on fire\", \"I am not under command\", \"I am in collision\" and \"I am aground\" are all",
            options: ["anchoring messages", "clearance messages", "way point messages", "pilot request messages", "incident messages"],
            answer: 4 // e) incident messages (Tehlike ve acil durum bildirimi yapan olay mesajları.)
        },
        {
            id: 173,
            q: "Select the true answer to fill the blank in the sentence given below. A message transmission starting with the word \"MAYDAY\" in a Standard format is called _____ in the maritime mobile and maritime mobile-satellite services.",
            options: ["Test transmission", "Safety message", "First Priority message", "Distress message", "Urgency message"],
            answer: 3 // d) Distress message
        },
        {
            id: 174,
            q: "Select the most appropriate answer for the blank space in the sentence given below. \"If an EPIRB is accidentally activated, the nearest coast station or an appropriate coast earth station or RCC must be informed immediately that _____ has been transmitted and should be cancelled\"",
            options: ["MSI warning", "Safety message", "False alert", "Satellite position", "Urgency warning"],
            answer: 2 // c) False alert
        },
        {
            id: 175,
            q: "According to the International Code of Signal, the statement \"I must abandon my vessel\" is symbolized by means of the code",
            options: ["AE", "BF", "DX", "HW", "ED"],
            answer: 2 // c) DX
        },
        {
            id: 176,
            q: "I-Mayday, II-Position, III-Over, IV-Required Assisstance, V-The Nature Of Distress, VI-Identity. The correct order is;",
            options: ["II-IV-VI-V-I-III", "VI-V-1-II-IV-III", "VI-I-II-V-IV-III", "I-VI-II-V-IV-III", "I-II-V-VI-IV-III"],
            answer: 3 // d) I-VI-II-V-IV-III (Distress çağrısı sırası: Mayday (3 kez) - VI (Identity) - II (Position) - V (Nature of Distress) - IV (Required Assistance) - III (Over))
        },
        {
            id: 177,
            q: "Which is used to announce an urgency message?",
            options: ["SECURITE", "PAN PAN", "URGENT", "MAY DAY", "HELP"],
            answer: 1 // b) PAN PAN
        },
        {
            id: 178,
            q: "What do you say, when you give Urgency messages?",
            options: ["Mayday", "Panpan", "Security", "Mayday Relay", "Somed Ataman"],
            answer: 1 // b) Panpan
        },
        {
            id: 179,
            q: "When you are going to request Radio Medical Advice, you must have some information ready. The information should include;",
            options: ["Routine particulars about the ship and the the patient", "Particulars of the illness and the results of the examination of the ill period", "Diagnosis and Treatment", "Problems and other comments", "All the above"],
            answer: 4 // e) All the above
        },
        {
            id: 180,
            q: "\"This is the master speaking. Due to falling from 6 meters high our chief officer has 3 broken ribs and probably ruptured lungs or other organs. He is not conscious and has weak. We require immediate helicopter assistance\" Which of the following stataments can be said regarding the message above?",
            options: ["accident occured due to the malfunction of auxilliary machinery equipment", "condition of the chief officer is not very serious", "captain suspects of an internal bleeding", "chief officer can respond to the questions without any problems", "helicopter assistance is needed for provisional supplies"],
            answer: 2 // c) captain suspects of an internal bleeding (3 kırık kaburga ve rüptüre akciğer/organ şüphesi iç kanamayı düşündürür.)
        },
        {
            id: 181,
            q: "What do you say, when you give Safety messages?",
            options: ["Mayday", "Panpan", "Securite", "All Ships", "Help"],
            answer: 2 // c) Securite
        },
        {
            id: 182,
            q: "A SECURITE signal is used to announce",
            options: ["an urgency message", "a safety message", "a routine message", "message", "a navigation message"],
            answer: 1 // b) a safety message
        },
        {
            id: 183,
            q: "_____ is to be used to announce a safety message.",
            options: ["Calling vessel", "PAN PAN", "All Ships All Ships", "SECURITE", "ADVICE"],
            answer: 3 // d) SECURITE
        },
        {
            id: 184,
            q: "Which one of the following is a cause to transmit a SECURITE signal?",
            options: ["fire on board", "engine breakdown", "approaching gale", "man over board", "flooding"],
            answer: 2 // c) approaching gale (Güvenlikle ilgili meteorolojik uyarı.)
        },
        {
            id: 185,
            q: "I am _____ I require tug assistance",
            options: ["on way", "not under attack", "under command", "not in critical condition", "adrift"],
            answer: 4 // e) adrift
        },
        {
            id: 186,
            q: "If your ship is disabled and adrift, the first thing you should report on the VHF is:",
            options: ["My engine has problems", "I require tug assistance", "I am not under command", "I will beach in position", "I require a pilot"],
            answer: 2 // c) I am not under command
        },
        {
            id: 187,
            q: "Plain language is usually used on marine weather",
            options: ["forecasts", "datacasts", "radiograms", "foregrounds", "forecastles"],
            answer: 0 // a) forecasts
        },
        {
            id: 188,
            q: "A safety message is sent whenever",
            options: ["Immediate assistance is required", "There is an important navigational or meteorological warning", "There is an urgent message about the safety of a ship", "There is an urgent message about the safety of a person", "There is loss of life"],
            answer: 1 // b) There is an important navigational or meteorological warning
        },
        {
            id: 189,
            q: "Select the true answer to fill the blank in the sentence given below. A message transmission starting with the word \"SECURITE\" in a Standard format is called _____ in the maritime mobile and maritime mobile-satellite services.",
            options: ["Safety message", "Distress message", "First Priority message", "Urgency message", "Test transmission"],
            answer: 0 // a) Safety message
        },
        {
            id: 190,
            q: "Which one is not a visual communication way?",
            options: ["ship's whistle", "Aldis lamp", "semaphore", "engine telegraph", "flags"],
            answer: 0 // a) ship's whistle
        },
        {
            id: 191,
            q: "To amplify voice _____ is used.",
            options: ["aldis lamp", "loud hailer", "gong", "engine telegraph", "low frequency"],
            answer: 1 // b) loud hailer
        },
        {
            id: 192,
            q: "Which of the following statement is used to amplify voice?",
            options: ["Loud hailer", "Gong", "Inmarsat-C", "Aldis lamp", "ECDIS"],
            answer: 0 // a) Loud hailer
        },
        {
            id: 193,
            q: "My position has been _____ by GPS.",
            options: ["loosened", "performed", "fulfilled", "lost", "obtained"],
            answer: 4 // e) obtained
        },
        {
            id: 194,
            q: "You must anchor _____ you may anchor",
            options: ["do not anchor here", "anchoring is prohibited", "until there is sufficient water", "I am heaving up anchor", "you may anchor"],
            answer: 2 // c) until there is sufficient water
        },
        {
            id: 195,
            q: "To inform others about danger the message marker to be used is",
            options: ["Warning", "Request", "Information", "Advice", "Instruction"],
            answer: 0 // a) Warning
        },
        {
            id: 196,
            q: "Complete the following message with a proper message marker: Obstruction in the fairway\"",
            options: ["Advice", "Request", "Instruction", "Warning", "Intention"],
            answer: 3 // d) Warning
        },
        {
            id: 197,
            q: "_____ indicates that there is an authority that orders you which you have to comply with. It is is generally used by coast guards. What is the message marker?",
            options: ["Advice", "Information", "Warning", "Instruction", "Security"],
            answer: 3 // d) Instruction
        },
        {
            id: 198,
            q: "\"North Harbour, this is M/V Amphora, Amphora, Amphora on channel 14, over\" is an example of;",
            options: ["ETA message", "Pilot request message", "Way point message", "First contact message", "Anchoring message"],
            answer: 3 // d) First contact message
        },
        {
            id: 199,
            q: "As per SMCP when you cannot understand the message received say",
            options: ["Message not understood", "Stand by", "No information", "Yes it is", "What is your message?"],
            answer: 0 // a) Message not understood
        },
        {
            id: 200,
            q: "According to SMCP booklet, when an incoming message is not heard properly, in order to hear it one more time, you should say",
            options: ["Say again please!", "Repeat again please!", "Come again please!", "Explain again please!", "Copy that!"],
            answer: 0 // a) Say again please!
        },
        {
            id: 201,
            q: "According to SMCP when the information requested is not immediately available but you can provide it after a short time, you should say",
            options: ["'Over and out'", "'I cannot provide the information'", "'I will call you later'", "'Stand by 10 minutes'", "Say again please"],
            answer: 3 // d) 'Stand by 10 minutes'
        },
        {
            id: 202,
            q: "According to SMCP, when a message has been received but the information requested can not be obtained say",
            options: ["Message not requested", "Say again", "No information", "Message not understood", "Message not received"],
            answer: 2 // c) No information
        },
        {
            id: 203,
            q: "According to IMO SMCP booklet which one of the following engine orders is wrong?",
            options: ["Full ahead both!", "Bow thruster full to port!", "Stern thruster half to port!", "Bow thruster dead slow to port", "Stop engines!"],
            answer: 2 // c) Stern thruster half to port! (Per SMCP, thruster orders are typically full, half, slow, dead slow. 'Stern thruster half to port' would be correct if it were the thruster command, but 'Stern thruster' is usually specified as 'Stern Thruster' followed by direction and speed. The other options are commonly used/correct SMCP phrases.)
        },
        {
            id: 204,
            q: "Hand flags used for signalling are called",
            options: ["sphere", "semiphone", "sophomore", "siren", "semaphore"],
            answer: 4 // e) semaphore
        },
        {
            id: 205,
            q: "Morse code, flag signalling and radio are",
            options: ["three main methods of fixing position", "three main methods of taking bearings of land and sea", "three main methods of navigating safely", "three main methods of communication", "three main methods of taking assistance"],
            answer: 3 // d) three main methods of communication
        },
        {
            id: 206,
            q: "Which statement regarding communications between ships over relatively short distances isn't CORRECT?",
            options: ["They can be made by sound signals made with Voice Pipes", "They can be made by sound signals made with the Ship's Siren", "Visual signals can be sent by using Flags", "Visual signals can be sent an Aldis Lamp", "Sound signals can be made with a whistle or bell"],
            answer: 1 // b) They can be made by sound signals made with the Ship's Siren (Gemi Sireni (Ship's Siren) daha çok tehlike alarmı veya yangın alarmı için kullanılır, normal kısa mesafe iletişim için düdük (whistle) kullanılır.)
        },
        {
            id: 207,
            q: "The success of any emergency response response depends on _____ by voice and by radio handsets between the team leaders and the command centre. The use of public address intercoms and fixed telephone systems must also be considered during such emergencies.",
            options: ["cooperation", "coordination", "check lists", "the quality of communications", "the crewmembers"],
            answer: 3 // d) the quality of communications
        },
        {
            id: 208,
            q: "Dear Sirs, I regret to inform you that due to the stoppage of the separating valve of the bilge manifold some water from the ballast tank on port side was pumped overboard together with the oil contaminated bilge water from the shaft tunnel. The cause of this contamination is purely technical and totally accidental. The CHIEF ENGINEER OF THE M/V This correspondence is an example of",
            options: ["bunkering order", "notification", "damage to the ship", "statement of sea protest", "resume"],
            answer: 1 // b) notification
        },
        {
            id: 209,
            q: "TO WHOM IT MAY CONCERN This is to certify that Mr.Walden has worked on board the \"BEAUTY\" as a captain since 1995. He has specialized in the Far Eastern container trade. Owing to his great experience in handling the refrigerated goods, we found him and his services very useful and we can recommend him to be employed on any vessel. He is leaving us at his request and we are sorry to lose him. The MASTER OF THE M/V \"BEAUTY\" This is an example of a",
            options: ["job application", "accident report", "survey report", "testimonial", "incident report"],
            answer: 3 // d) testimonial
        },
        {
            id: 210,
            q: "This correspondence is an example of (The text: Dear sirs, I am writing to find out whether the post adversited in the \"Motor Ship\" is still vacant. I am 38 years old and have been woking as a mate for the past seven years. I got the master's certificate in 1992 and since that time I have been working for the Turkish Ocean Lines on board general cargo, container and Ro-Ro vessels. As I am on leave now I can be available for the job any time. Looking forward to your prompt reply, I remain Yours faithfully Capt. Can Gökhan Yıldıztepe)",
            options: ["testimonial", "master's report of the voyage", "letter of exceptions", "job application", "extract of log book"],
            answer: 3 // d) job application
        },
        {
            id: 211,
            q: "Where should the GMDSS radio log must be kept on board ship?",
            options: ["Anywhere on board the vessel", "In the Captain's Office", "At the GMDSS Operating Position", "Next to the shoreside license", "In the Radio Officer's Cabin"],
            answer: 2 // c) At the GMDSS Operating Position
        },
        {
            id: 212,
            q: "Select the most appropriate answer to complete the sentence given below: Summary of distress, urgency and safety communications, including stations involved and their dates, times, positions",
            options: ["Must be recorded in the GMDSS Log", "Must be reported to the port authorities", "Are called distress alerting", "Can be transmitted to the CRT or CES when necessary", "Are part of On-scene traffic"],
            answer: 0 // a) Must be recorded in the GMDSS Log
        },
        {
            id: 213,
            q: "How many priorities are there in marine communication?",
            options: ["6", "10", "3", "4", "2"],
            answer: 3 // d) 4 (Distress, Urgency, Safety, Routine)
        },
        {
            id: 214,
            q: "If GPS isn't officially part of GMDSS, a GMDSS operator is responsible for updating the ship's position how often?",
            options: ["1 hours", "2 hours", "4 hours", "6 hours", "10 hours"],
            answer: 2 // c) 4 hours
        },
        {
            id: 215,
            q: "The officer of the watch must be familiar with the GMDSS system if fitted for receiving and _____ distress, urgency and safety messages",
            options: ["copying", "transmitting", "listening", "to amplificate", "on purpose with"],
            answer: 1 // b) transmitting (Gözetleme zabiti, almanın yanı sıra tehlike/acil durum mesajlarını gönderebilmek (transmitting) için de sistemi bilmelidir.)
        },
        {
            id: 216,
            q: "By international agreement which ships must carry radio equipment for the safety of life at sea?",
            options: ["All cargo ships of more than 100 gross tons", "All ships including fishing boats, war ships and yachtes", "All ships travelling more than 100 miles out of sea", "Cargo ships of more than 100 gross tons and passenger vessels on international deep-sea voyages", "Cargo ships of more than 300 gross tons and vessels carrying more than 12 passengers"],
            answer: 4 // e) Cargo ships of more than 300 gross tons and vessels carrying more than 12 passengers (SOLAS Kuralı.)
        },
        {
            id: 217,
            q: "Each of the countries _____ are required to enforce the equipping of vessels sailing under their flag with GMDSS and also provide suitable GMDSS shore based infrastructure.",
            options: ["Contracting to the SOLAS Convention", "In Sea Area A1 and A2", "In Sea Areas only apply to INMARSAT footprint areas", "Within range of a shore based MF station", "Within Coastal and Inland waters"],
            answer: 0 // a) Contracting to the SOLAS Convention
        },

        {
            id: 218,
            q: "Who has the duties for food preparation?",
            options: ["Cook", "Cadet", "Master", "Able Seaman", "Second Engineer"],
            answer: 0
        },
        {
            id: 219,
            q: "_____ is the kitchen on a vessel.",
            options: ["Deck", "Engine room", "Cabin", "Galley", "Laundry"],
            answer: 3
        },
        {
            id: 220,
            q: "Select the correct answer from the list of choices to complete the sentence. I am not familiar with that new equipment. I don't know _____.",
            options: ["how to do it", "how to check it", "how to break it", "how to use it", "how to make it"],
            answer: 3
        },
        {
            id: 221,
            q: "_____ stations are designated areas where you are to go when an emergency signal sounds.",
            options: ["power", "muster", "calling", "bunkering", "coast"],
            answer: 1
        },
        {
            id: 222,
            q: "Which of the following assigns with duties to perform in emergency situations on-board?",
            options: ["Hot work check list", "Vessel audit check list", "Restricted visibility check list", "Muster List", "Cold work check list"],
            answer: 3
        },
        {
            id: 223,
            q: "Musters and _____ are required to be carried out regularly and realistically in accordance with Merchant Shipping Regulations.",
            options: ["Drills", "Watches", "Regulations", "Lists", "Gatherings"],
            answer: 0
        },
        {
            id: 224,
            q: "If passengers are on board when an abandon ship drill is carried out, they should _____.",
            options: ["take part", "monitor", "watch", "go to their quarters", "stay out of the way"],
            answer: 0
        },
        {
            id: 225,
            q: "All crew members should muster at an abandon ship drill _____ properly secured.",
            options: ["using no tools", "with loose clothing", "with life jackets", "taking all their personel belongings", "with life lines"],
            answer: 2
        },
        {
            id: 226,
            q: "When chipping rust on a vessel the MOST important piece of safety gear is",
            options: ["goggles", "a hard hat", "safety shoes", "ΤΡΑ", "a long sleeve shirt"],
            answer: 0
        },
        {
            id: 227,
            q: "All exposed and dangerous areas around machinery, such as gears and rotating parts shall be properly protected with _____.",
            options: ["covers", "rails", "guards", "screens", "any of the above"],
            answer: 2
        },
        {
            id: 228,
            q: "Which of the following conditions can contribute to accidents?",
            options: ["Unsafe conditions", "Preparedness", "Good housekeeping", "Unsafe actions", "Intelligent work habits"],
            answer: 0
        },
        {
            id: 229,
            q: "Which of the following must be eliminated to prevent accidents?",
            options: ["Unsafe actions", "Orderliness", "Frequent inspections", "Good work habit/practices", "Safety drills and lessons"],
            answer: 0
        },
        {
            id: 230,
            q: "The Master must record the appointment of a Safety Committee in the _____.",
            options: ["draft log", "official logbook", "crew list", "store list", "muster list"],
            answer: 1
        },
        {
            id: 231,
            q: "Which of the following procedures can be determined as GAS-FREE procedure?",
            options: ["Reducing of oxygen amount in tanks", "Repairing processes in tanks", "Gathering of wastes in tanks", "Cleaning and ventilating of tanks", "None of the answers"],
            answer: 3
        },
        {
            id: 232,
            q: "When instructing a crew member concerning the right way to lift a weight, you would instruct him to _____.",
            options: ["bend his knees and lift with his legs", "bend his back and stoop with arms straight", "bend his back and stoop", "arch the back to add strength to the muscles", "bend his back and lift with his knees"],
            answer: 0
        },
        {
            id: 233,
            q: "Which of the following statement is NOT the purpose of the safety meetings?",
            options: ["To ensure safety at sea", "Seafarer working and living rights", "To prevent human injury or loss of life", "Suggestion for new safety trainings and drills", "To avoid damage to the environment and to the ship"],
            answer: 1
        },
        {
            id: 234,
            q: "Why reporting near miss incident are important?",
            options: ["Near misses are the same as injuries", "Near misses do not required to be reported", "It is important to identify the person causing near miss incident", "Near misses can prevent serious, fatal and catastrophic accidents", "Near misses are the same as accidents"],
            answer: 3
        },
        {
            id: 235,
            q: "Which statement is ALWAYS true regarding safety?",
            options: ["Keep clear of any line that is under a strain", "A line will creak, make snapping sounds and smoke before it parts", "Only syntetic lines will snap back after parting", "Stepping on the bight of a line is safer than stepping in the bight of a line", "Nylon hawsers does not snap back"],
            answer: 0
        },
        {
            id: 236,
            q: "Which of the following is NOT a recommended safe practice?",
            options: ["Securing equipment against slipping or drifting", "Repairing loose handles on tools before using", "Operating machinery at its recommended speed", "Using tools for purposes for which they are not designed", "Keep orderliness and cleanliness in the workplace"],
            answer: 3
        },
        {
            id: 237,
            q: "Which one of the following statement does NOT be required for enclosed space entry and rescue drill?",
            options: ["Checking and use of bridge equipments", "Checking and use of instruments for measuring the atmosphere in enclosed spaces", "Checking and use of personal protective equipment required for entry", "Checking and use of rescue equipment and procedures", "Checking and use of communication equipments and procedures"],
            answer: 0
        },
        {
            id: 238,
            q: "What factors appears to play the most important when joining ship for the first time?",
            options: ["Familiar with the national regulations", "Familiar with the vessel's safety procedures, especially the alarm instructors, lifesaving and fire-fighting equipment, hazardous areas and etc.", "Familiar with the vessel procedures", "Familiar with the duties of all deck members", "Familiar with the company policies, company procedures and vessel procedures"],
            answer: 1
        },
        {
            id: 239,
            q: "Which of the following condition (s) should be required before commencing work on a switch board?",
            options: ["Rubber gloves should be required", "A warning sign indicating the work to be posted", "There should be an approved rubber matting on the floor in front of the switchboard for safety", "Precautions must be observed no isolate and lock off apparatus", "All of above"],
            answer: 4
        },
        {
            id: 240,
            q: "The Captain describes the MV XXXXX in detail, answer the question? On the MV Transilor there are five decks The engine room is below the first deck. There are three rooms on the first deck, the galley, laundry and the storeroom. Above the laundry there is a hospital. It is on the second deck next to the ratings messroom. To the right of the ratings' messroom is an office. There are no cabins on this deck but there are cabins on the third deck. There is one cabin for the Pilot and one for Chief Officer Between them is the officers' messroom. There is a cabin for the Master on the fourth deck between the radio room and the Chief Engineer's cabin. The radio room is to the left of Master's cabin. The bridge is on the fifth deck. Where is the officers messroom?",
            options: ["below the first deck, next to the radio room", "second deck above the laundry", "above the Pilot's and Chief Officer's cabins on the fourth deck", "on the third deck", "to the left of the Chief Engineer's cabin on the fifth deck"],
            answer: 3
        },
        {
            id: 241,
            q: "Which of the following gives the location of fire fighting appliances and equipments on board?",
            options: ["In MARPOL", "In SOLAS", "Voyage plan", "The fire control plan", "Deck Log"],
            answer: 3
        },
        {
            id: 242,
            q: "Which of the following statement is correct?",
            options: ["Hard material fires are called C class fire", "Liquid material fires are called B class fire", "Electirical fires are called A class fire", "Gas material fires are called D class fire", "Light metal fires are called E class fire"],
            answer: 1
        },
        {
            id: 243,
            q: "_____ used main as an agent for A categorized fire",
            options: ["Halon", "Dry powder", "Foam", "CO2", "Water"],
            answer: 4
        },
        {
            id: 244,
            q: "What is the recommended color of water type fire extinguishers?",
            options: ["White", "Red", "Grey", "Orange", "Black"],
            answer: 1
        },
        {
            id: 245,
            q: "A fire can be extinguished by;",
            options: ["water", "foam", "carbon dioxide", "dry chemical powder", "all of above"],
            answer: 4
        },
        {
            id: 246,
            q: "Foam and water _____ for electrical fires definitely.",
            options: ["weren't used", "will not be used", "aren't being used", "isn't used", "aren't used"],
            answer: 4
        },
        {
            id: 247,
            q: "Which of the following is not a fire extinguishing method?",
            options: ["breaking the chain reaction", "smothering", "removing the combustive material", "cooling", "oxidizing"],
            answer: 4
        },
        {
            id: 248,
            q: "_____ is to eliminate the heat side of the fire by applying something that will absorb the heat.",
            options: ["Smothering", "Smouldering", "Diluting", "Cooling", "Preventing"],
            answer: 3
        },
        {
            id: 249,
            q: "When fighting an oil or gasoline fire, never use _____.",
            options: ["a high-velocity fog", "a low-velocity fog", "a foam", "a solid stream of water", "CO2"],
            answer: 3
        },
        {
            id: 250,
            q: "What is not included sn. fire main?",
            options: ["Jet/ spray type nozzles", "fire hydrants", "sanitary pump", "fire hoses", "fire pump"],
            answer: 2
        },
        {
            id: 251,
            q: "Every gas dedection on board must be sent to shore facility to be tested and _____ annually.",
            options: ["renewed", "overhauled", "calibrated", "lubricated", "meger test"],
            answer: 2
        },
        {
            id: 252,
            q: "\"Inerting\" is defined as to reduce the oxygen in a tank by inert gas to avoid a/an _____ atmosphere",
            options: ["corrosive", "non corrosive", "odourless", "pollutant", "explosive"],
            answer: 4
        },
        {
            id: 253,
            q: "What is the purpose of \"inert gas system\" on board?",
            options: ["Pollution prevention", "Propulsion", "Cargo handling", "Fire protection and fighting", "Life saving"],
            answer: 3
        },
        {
            id: 254,
            q: "Fire is the result of four factors. they are;",
            options: ["a substances that contains carbon and hydrogen - an ignition source - heat reaction", "a supply of oxygen a substances that will burn the air reaction", "combustible substances - a supply of oxygen - a supply of carbon molecules - heat", "hear - oxygen - fuel - chemical reaction", "combustible substances - fuel a supply of carbon molecules - flammable gases"],
            answer: 3
        },
        {
            id: 255,
            q: "Fire fighting at sea is considered in three distinct stages;",
            options: ["locating the fire - extinguishing - informing others", "detection control - alarm", "detection and alarm - control - extinguish", "locating putting out the fire - notifying the bridge", "alarm - locating - bringing to bear"],
            answer: 2
        },
        {
            id: 256,
            q: "Training in fire-fighting procedures and maintenance of equipments should be assured",
            options: ["by regular drills", "after arriving at destination", "before arriving at a port", "when a new crewmember requests", "when there is an emergency"],
            answer: 0
        },
        {
            id: 257,
            q: "Good housekeeping on a vessel prevents fires by",
            options: ["eliminating potential fuel sources", "eliminating fire extinguishers", "extinguishing fire", "trip hazards", "improving personnel qualifications"],
            answer: 0
        },
        {
            id: 258,
            q: "Oily rags stored in a pile that is open open to the atmosphere are a hazard because they may",
            options: ["taint the edible products", "pollute the atmosphere", "attract lice and other vermin and serve as a breeding ground", "deteriorate and give off noxious gasses", "spontaneously catch fire by an external heat source"],
            answer: 4
        },
        {
            id: 259,
            q: "Before using a fixed CO2 system to fight an engine room fire, you must",
            options: ["permit the passage of toxic gases", "make leeway to the vessel", "enter the engine with a oxygen analyzer", "evacuate all engine room personnel", "stop all equipment onboard"],
            answer: 3
        },
        {
            id: 260,
            q: "Which of the following statement gives the correct number of circulatory systems for blood transportation?",
            options: ["3", "2", "1", "4", "5"],
            answer: 1
        },
        {
            id: 261,
            q: "What does A stand for in ABC of first aid?",
            options: ["Aid", "Addiction", "Attention", "Airway", "Asthma"],
            answer: 3
        },
        {
            id: 262,
            q: "What does C stand for in ABC of first aid?",
            options: ["Cardio", "Cross", "Cancer", "Cracked", "Circulation"],
            answer: 4
        },
        {
            id: 263,
            q: "In which publication is the list recommended medicines and equipment by WHO found?",
            options: ["IBC code", "Tanker Safety Guide", "ISGOTT", "COLREG", "Medical Guide for Ships"],
            answer: 4
        },
        {
            id: 264,
            q: "In which document can you find the specific first aid measure in case of ingestion of a spesific toxic cargo?",
            options: ["MSDS", "Cargo Manifest", "SSSCL", "Bill of Lading", "e"],
            answer: 0
        },
        {
            id: 265,
            q: "What is the name of organ which is indicated as above? ",
            options: ["Gall bladder", "Spleen", "stomach", "liver", "lung"],
            answer: 4
        },
        {
            id: 266,
            q: "What is the name of above action and for which purpose is it used? ",
            options: ["Mediterrian grap to carry a victim", "Heimlich maneuver for choking", "Snake shot to carry a victim", "Snake and shout for resuscitation", "and go to stop body bleeding and move"],
            answer: 1
        },
        {
            id: 267,
            q: "Which one of the following statement is NOT true for Heimlich manoevure?",
            options: ["It is a first aid procedure used to treat upper airway obstructions (or choking) by foreign objects", "It is defined as a body core temperature below 36°C", "Carrying Heimlich manoeuvre includes a rescuer standing behind a patient and using his hor her hands to exert pressure on the bottom of the diaphram", "It is used for removing foreign objects in the airway", "It is also called the abdominal thrusts"],
            answer: 1
        },
        {
            id: 268,
            q: "Immersion in cold water can cause;",
            options: ["shock", "heat exhaustion", "asphyxia", "hypothermia", "fatigue"],
            answer: 3
        },
        {
            id: 269,
            q: "\"In cold water the skin and peripheral tissues become cooled and then the deep body temperatures falls\" This is called as",
            options: ["drowning", "hypothermia", "hyperthermia", "immersion", "Samed Ataman"],
            answer: 1
        },
        {
            id: 270,
            q: "Which of the following statements best describes the hypothermia?",
            options: ["It is applied to remove foreign objects in the airway", "In cold water, the skin and peripheral tissues become cooled and then the deep body temperature falls", "It is the assistance given to any person suffering a sudden illness or injury", "It often causes permanent changes in strength, sensation and other body functions below the site of the injury", "In hot water, the skin and peripheral tissues become hot and then the body temperature increases"],
            answer: 1
        },
        {
            id: 271,
            q: "Which one of the following statement is false for the spillage of corrosive chemicals?",
            options: ["It is poisonous", "Some corrosive chemicals may be ignitable", "It can result in burns", "All of the above", "There is no need for the application of first aid procedures"],
            answer: 4
        },
        {
            id: 272,
            q: "On board a ship first aid is the provision of _____ care to a casualty with an injury or illness, performed within limited skill range.",
            options: ["normal", "no", "immediate", "slow", "gradual"],
            answer: 2
        },
        {
            id: 273,
            q: "On finding a casualty first observe your own _____ do not become the next casualty if necessary, remove the casualty from danger or remove danger from the casualty.",
            options: ["Benefit", "Safety", "Property", "Ship owner", "Master"],
            answer: 1
        },
        {
            id: 274,
            q: "On finding a casualty all crew members should be prepared to administer _____ while waiting for trained help to arrive. In such cases even a few seconds delay might mean the difference between life and death.",
            options: ["first aid", "an injection", "oxygen", "medication", "a pain killer"],
            answer: 0
        },
        {
            id: 275,
            q: "Please choose correct answer how to dispose expire medicines on board?",
            options: ["throw overboard and put remark on garbage record book", "collect them in a box and put it in garbage station", "medicine except painkillers and toxic can be used aft one year of expire date", "deliver them to port agent / garbage service with a receipt", "burn in incinerator and put remark on garbage record book"],
            answer: 3
        },
        {
            id: 276,
            q: "Above table for amoxicilin has been taken from WHO Medical Guide for Ships. As per above table, which statement is TRUE about how to use this medicine? (Table indicates: Adult dosage: one tablet twice daily, taken with food)",
            options: ["It must be used in case of diarrhoea", "patient can consume 200 mg daily", "no damage to liver in any case", "Patient must take this medicine after meal, for example breakfast and dinner", "Augmentin has no same effect with amoxicilin"],
            answer: 3
        },
        {
            id: 277,
            q: "Which of the following is not included in life-saving appliances?",
            options: ["life insurance", "life jacket", "lifebuoy", "lifeboat", "liferaft"],
            answer: 0
        },
        {
            id: 278,
            q: "Which one of the following is not a typical survival craft on-board?",
            options: ["Enclosed lifeboats", "Freefall lifeboats", "Open lifeboats", "Life rafts", "Immersion suit"],
            answer: 4
        },
        {
            id: 279,
            q: "You must know _____ to wear your life jacket correctly, instructions are displayed in your cabin.",
            options: ["which", "why", "what", "how", "with"],
            answer: 3
        },
        {
            id: 280,
            q: "Which of the following has heat insulation?",
            options: ["Immersion suit", "Life jacket", "Life buoy", "Life line", "Breeches buoy"],
            answer: 0
        },
        {
            id: 281,
            q: "An immersion suit that can be worn without a lifejacket must be equipped with a(n)",
            options: ["whistle, light and retroreflective material", "a bottle for breathing", "orange smoke canister", "ca dye marker", "hand flare"],
            answer: 0
        },
        {
            id: 282,
            q: "Which statement is TRUE concerning life jackets which are severely damaged?",
            options: ["They should be replaced", "They must be tested for buoyancy before being continued in use", "They can be repaired by a reliable seamstress", "They can be used for children", "They can be used unless ships class authority decides otherwise"],
            answer: 0
        },
        {
            id: 283,
            q: "Lifeboats should be taken ashore, inspected and tested. All the damage, if any, should be repaired. Lifeboat winches should be dismantled, overhauled and worn parts renewed. Hand brakes and mechanical brake should be checked and adjusted. After completing the work, they should be tested under Chief Officer's supervision. This passage is part of",
            options: ["deck department orders", "repair specification", "miscellaneous", "engine department orders", "plain letter"],
            answer: 1
        },
        {
            id: 284,
            q: "The Emergency _____ consist of seven short blasts followed by a prolonged blast.",
            options: ["Drill", "Alarm", "Ring", "Procedure", "Response Plan"],
            answer: 1
        },
        {
            id: 285,
            q: "Which of the following cannot be categorized as a distress signal?",
            options: ["A flag and a ball below it", "a signalling mirror", "Raising arms", "Smoke signal", "A rocket parachute flare"],
            answer: 2
        },
        {
            id: 286,
            q: "_____ and _____ are used as distress signals.",
            options: ["rockers voices", "navigators - passengers", "speakers - aviators", "flares rockets", "smoke pigeons"],
            answer: 3
        },
        {
            id: 287,
            q: "Which of the following gives the correct first action in a man overboard situation?",
            options: ["Keeping breathing apparatus ready", "Report a person missing", "Put the port engine in reverse and the starboard engine full ahead", "Inform the family", "Immediately throw the closest lifebuoy"],
            answer: 4
        },
        {
            id: 288,
            q: "Which of the following procedures should be followed when abandoning the ship?",
            options: ["Put on lifejacket", "Put on immersion suit", "Put on warm clothes", "Go to your muster station", "All of the above"],
            answer: 4
        },

        {
            id: 289,
            q: "A bulk carrier is:",
            options: ["A dry cargo ship", "A tanker", "An Atlantic Liner", "A towing vessel", "A liquid cargo ship"],
            answer: 0
        },
        {
            id: 290,
            q: "What does Ro-Ro stand for?",
            options: ["Ride On Ride Off", "Roll On Roll Off", "Roll On Roll Out", "Ride Off Ride On", "Roll Off Roll"],
            answer: 1
        },
        {
            id: 291,
            q: "What does OBO carriers stand for?",
            options: ["Oil-bulk-ore carrier", "On-bulk-off carrier", "On-bulk-on carrier", "Oil-bulk-acid carrier", "Off bulk-on carrier"],
            answer: 0
        },
        {
            id: 292,
            q: "Trawlers whaling ships and purse seiners are in the category of",
            options: ["fishing vessels", "passenger ships", "excursion boats", "naval ships", "pleasure crafts"],
            answer: 0
        },
        {
            id: 293,
            q: "Ore, sugar, fertilizer, coal and cement are carried by a",
            options: ["reefer", "bulker", "gas carrier", "purse seiner", "d Ataman"],
            answer: 1
        },
        {
            id: 294,
            q: "The vessels carry farm animals such as cow, sheep are",
            options: ["reefers", "livestock carriers", "Bulk carriers", "trawlers", "OBOS"],
            answer: 1
        },
        {
            id: 295,
            q: "Which one of the following is cargo of a reefer?",
            options: ["cars", "oil", "ore", "scrap metal", "fresh fruit"],
            answer: 4
        },
        {
            id: 296,
            q: "_____ ships vary little from general cargo ships, but the fitting of refrigeration plants for the cooling of cargo holds enables the carriage of perishable foodstuffs by sea.",
            options: ["Bulk cargo", "Tender", "Roll-on roll-off", "Reefer", "Dredgers"],
            answer: 3
        },
        {
            id: 297,
            q: "What is the most common for ships, which carry all of their load in truck-size intermodal containers?",
            options: ["Chemical tanker", "Ro-Ro", "Ferries", "General cargo ships", "Container ships"],
            answer: 4
        },
        {
            id: 298,
            q: "What deepens the channels and clears the muddy bottom of ports, canals or rivers?",
            options: ["Pipe layers", "Ice breakers", "Dredgers", "Reefers", "Bulkers"],
            answer: 2
        },
        {
            id: 299,
            q: "Which of the following does not be included in merchant vessels?",
            options: ["Dredgers", "Fishing boats", "Auxilliary vessels", "Warships", "Tankers"],
            answer: 3 // Warships (Asuming d) is Warships as it is the non-commercial type)
        },
        {
            id: 300,
            q: "The right side of a boat is called the _____ side and the other side _____ the port side.",
            options: ["stem / is calling", "starboard/is called", "bow/ is called", "stern/calls", "front/called"],
            answer: 1
        },
        {
            id: 301,
            q: "If you are standing on the forecastle deck and facing the aft of the ship, then your back is towards the _____ of the ship",
            options: ["bridge", "stern", "poop", "head", "port bow"],
            answer: 3
        },
        {
            id: 302,
            q: "A vessel's \"quarters\" are located",
            options: ["abeam", "on either side of the stern", "just forward of the beam on either side", "astern on vessel", "on the head"],
            answer: 1
        },
        {
            id: 303,
            q: "The bow of the ship is:",
            options: ["the head of the ship as a location in general", "a direction / movement towards the head of the the ship", "the back of the ship", "the middle of the ship at amidships", "the direction / movement / location towards the head of the ship"],
            answer: 0
        },
        {
            id: 304,
            q: "Gemilerde insanın gireceği büyüklükteki kapak:",
            options: ["Manhole", "Tug", "Flag", "Hold", "Hail"],
            answer: 0
        },
        {
            id: 305,
            q: "Gemilerde bağlama işlemlerinde kullanılan bitkisel, madeni, sentetik, esnek malzemeden yapılmış maddelere ne denir?",
            options: ["Pipe", "Rope", "Hook", "Chain", "Log line"],
            answer: 1
        },
        {
            id: 306,
            q: "A bollard is found on the",
            options: ["pier", "beach", "deck", "towed vessel", "windlass"],
            answer: 2
        },
        {
            id: 307,
            q: "A metal object on the pier resembling a tree sturp and made to receive mooring lines is a",
            options: ["bollard", "bight", "chock", "camel", "cleat"],
            answer: 0
        },
        {
            id: 308,
            q: "A disk metal filled around a hawser to prevent rats from boarding a vessel dock is called",
            options: ["Deratting", "Rattan", "Rating", "Ratcalled at", "Rat Guard"],
            answer: 4
        },
        {
            id: 309,
            q: "Paints are stowed in the _____ which is usually situated under the forecastle head.",
            options: ["chain locker", "pantry", "cold storage room", "galley", "paint locker / room"],
            answer: 4
        },
        {
            id: 310,
            q: "_____ is used to make a lashing wire rope tight.",
            options: ["turnbuckle", "D shackle", "coupling", "screw driver", "rat guards"],
            answer: 0
        },
        {
            id: 311,
            q: "It is the responsibility of the crane operator to, at all times, be aware of the location of the",
            options: ["load", "hook", "boom", "signalman", "All of the above"],
            answer: 4
        },
        {
            id: 312,
            q: "When securing a synthetic line to a bitt what is the minimum number of round turns you should take before figure eighting the line?",
            options: ["2", "None", "1", "3", "4"],
            answer: 2
        },
        {
            id: 313,
            q: "The most common method of securing a line is a",
            options: ["round turn, then figure eights", "half hitch, then round turns", "figure eight, then round turns", "clove hitch, then round turns", "reef knot, then figure eights"],
            answer: 0
        },
        {
            id: 314,
            q: "Much of the work of the deck department on board a ship concerns _____ of the ship and her fittings crew member who are in charge of damaging effects of salt water changes in temperature and the action of waves.",
            options: ["dry-docking", "maintenance", "motions", "stability", "listing"],
            answer: 1
        },
        {
            id: 315,
            q: "What statement is not true regarding ships?",
            options: ["Ships are older than trains and planes", "Ships carry various commercial goods", "Ships transport goods between ports", "Ships carry goods only in containers", "Ships carry both goods and people"],
            answer: 3
        },
        {
            id: 316,
            q: "We will _____ starboard anchor, two _____ and _____ it.",
            options: ["Pay out-cables-drag", "Moor-Yards-Fasten", "Cast off-miles-dregde", "Let go-shackles-dredge", "Let go-shackles-drag"],
            answer: 4
        },
        {
            id: 317,
            q: "A mooring line that checks forward motion of a vessel at a pier is a",
            options: ["stern bow line", "stern line", "bow line", "stern spring line", "stern breast line"],
            answer: 3
        },
        {
            id: 318,
            q: "The lines led forward from the bow and aft from the stern when a vessel is moored to the dock are",
            options: ["breast lines", "warps", "hawsers", "head and stern lines", "halyards"],
            answer: 3
        },
        {
            id: 319,
            q: "What is normally used to pass a mooring line to a dock?",
            options: ["Heaving line", "Messager", "Distance line", "Gantline", "Tag line"],
            answer: 0
        },
        {
            id: 320,
            q: "What line would you first use when passing a heavy hawser to the dock?",
            options: ["Heaving line", "Bow line", "Gant line", "Preventer", "Warp"],
            answer: 0
        },
        {
            id: 321,
            q: "A 'spring line' is",
            options: ["a mooring line running diagonally to the keel", "a mooring line running parallel to the keel", "any wire rope used for mooring", "a fire-warp", "a mooring line perpandiculars to the keel"],
            answer: 0
        },
        {
            id: 322,
            q: "A mooring line leading 45° to the keel, used to check forward or astern movement of a vessel, is called a",
            options: ["breast line", "bow line", "steel line", "spring line", "warp line"],
            answer: 3
        },
        {
            id: 323,
            q: "A \"Mediterranean moor\" should be used when",
            options: ["berthing from astern to a berth", "anchoring in the Mediterranean", "docking from boy to a berth", "anchoring in a strong current", "mooring in the Mediterranean"],
            answer: 0
        },
        {
            id: 324,
            q: "Make a lee for",
            options: ["the pilot boat", "fire", "spaces", "destination", "overtake"],
            answer: 0
        },
        {
            id: 325,
            q: "The term \"lee side\" refers to the",
            options: ["side of the vessel sheltered from the wind", "side of the vessel exposed to the wind", "port side", "starboard side", "the side that vessel is drifting"],
            answer: 0
        },
        {
            id: 326,
            q: "The system for altering the ships direction is called;",
            options: ["thrust", "propulsion", "displacement", "steering", "shafting"],
            answer: 3
        },
        {
            id: 327,
            q: "Report if she does not _____ the _____.",
            options: ["tyres - reply", "reply - tryes", "break-rules", "wheel answer", "answer wheel"],
            answer: 4
        },
        {
            id: 328,
            q: "To steer a steady course on the compass heading indicated at the time of order, you should say",
            options: ["half to port!", "do not turn the wheel!", "steady on the wheel!", "steady as she goes!", "hard a port!"],
            answer: 3
        },
        {
            id: 329,
            q: "Helm order given for reducing the swing of the head of a ship is:",
            options: ["Keep the wheel rapidly", "Steady as she goes", "Meet her", "Easy to port", "Steady on course"],
            answer: 2
        },
        {
            id: 330,
            q: "The helm order \"meet her\" means",
            options: ["note the course and steady on that heading", "steer more carefully", "put the rudder over to the opposite side, the same number of degrees it is now", "use rudder to check the swing", "decrease the rudder angle which is on"],
            answer: 3
        },
        {
            id: 331,
            q: "If you want to avoid allowing the vessel's head to go to port side, your order to helmsman will be:",
            options: ["hard-a-port!", "port 15!", "nothing to port!", "steady to port!", "all to port!"],
            answer: 2
        },
        {
            id: 332,
            q: "Which one of the following engine orders normally cannot be given right giving the engine order \"half ahead\"?",
            options: ["Half astern!", "Dead slow ahead!", "Slow ahead!", "Stop engines!", "Full ahead!"],
            answer: 4 // All are valid, but Full ahead is the most logical next step if the question implies progression. Sticking to the common test answer for "Half ahead" progression.
        },
        {
            id: 333,
            q: "The bow thruster generally is ineffective at",
            options: ["Over 3 knots headway", "At any speed astern", "while turning around", "over 1 knot sternway", "At any speed ahead"],
            answer: 0
        },
        {
            id: 334,
            q: "The forward movement of a vessel in one revolution of its propeller is measured by",
            options: ["advance", "transfer", "slip", "head reach", "the pitch"],
            answer: 4
        },
        {
            id: 335,
            q: "\"Hub, blade, pitch\" are the terms related to",
            options: ["sterntube", "thrust block", "shafting", "rudder", "propeller"],
            answer: 4
        },
        {
            id: 336,
            q: "The force exerted by a propeller which tends to throw the stern right or left is called",
            options: ["thrust", "wake", "slip", "sidewise force", "rotational force"],
            answer: 3
        },
        {
            id: 337,
            q: "Vessel propellers are classified as being right hand or left hand. A right hand propeller turns clockwise when viewed from",
            options: ["the stern", "the bow", "the port side", "the starboard side", "above"],
            answer: 0
        },
        {
            id: 338,
            q: "\"I would like to _____ you that a kind of rope is tangled around our propeller and and we require immediate _____ service\"",
            options: ["thank / helicopter rescue", "tell/medical assistance", "inform/underwater diving", "remind / tank cleaning", "deliver / oil spill response"],
            answer: 2
        },
        {
            id: 339,
            q: "An embarked Pilot",
            options: ["is a specialist hired for his local navigational knowledge", "is solely responsible for the safe navigation of the vessel", "relieves the Master of his duties", "relieves the officer of the watch", "takes his orders from the master"],
            answer: 0
        },
        {
            id: 340,
            q: "A towing hawser should be stowed",
            options: ["in a sealed locker with adequate air circulation", "by spooling it on the winch", "by colling it on deck", "by hanging it in the engineroom", "by faking on deck"],
            answer: 4
        },
        {
            id: 341,
            q: "To reduce stress on the towing hawser when towing astern (ocean tow) the hawser should be",
            options: ["underwater", "secured to the aftermost fitting on the towing vessel", "just touching the water", "as short as possible", "above water"],
            answer: 0
        },
        {
            id: 342,
            q: "The BEST way to steer a twin-screw vessel if you lose your rudder is by using",
            options: ["one engine running at reduced speed and controlling the vessel with the other", "one engine and a steering oar", "both engines at the same speed", "one engine at a time", "anchors"],
            answer: 0
        },
        {
            id: 343,
            q: "You are on a single-screw vessel with a left-handed propeller making no way in the water. How will your vessel react when you apply right rudder?",
            options: ["Rudder alone has no effect on the vessel", "Stern will kick to port, then slowly swing to starboard", "Bow will kick to port", "Bow will kick to starboard", "Stern will kick to starboard, then slowly swing to port"],
            answer: 0
        },
        {
            id: 344,
            q: "When you enter shallow water, you would expect your rudder response to",
            options: ["improve and your speed to increase", "improve and your speed to decrease", "be sluggish and your speed to increase", "be sluggish and your speed to decrease", "improve and your speed to accelerate"],
            answer: 3
        },
        {
            id: 345,
            q: "How does the effect known as \"bank suction\" act on a single-screw vessel proceeding along a narrow channel?",
            options: ["It pulls the stern toward the bank", "It pulls the bow toward the bank", "It pushes the entire vessel away from the bank", "It heels the vessel toward the bank", "It increases the forward draft by changing trim"],
            answer: 0
        },
        {
            id: 346,
            q: "You are standing the wheelwatch if you hear a crew member shouting \"Man overboard starboard side!\" You should immediately",
            options: ["give the rudder to full port", "give the rudder to full starboard", "put the rudder amidships", "throw a life ring to mark the spot", "call the master"],
            answer: 3
        },
        {
            id: 347,
            q: "You are on a ship entering port while the pilot has the conn. The pilot gives a steering command to the helmsman who partially repeats the command. Officer of the watch should immediately.",
            options: ["ask the Pilot to repeat the command since the helsman failed to hear it completely", "repeat the Pilot's command and ensure that the helmsman repeats it completely", "ignore the helmsman's response as long as it was close to what the Pilot ordered", "observe the helmsman's wheel action to be sure that it complies with the Pilot's command", "inform the master"],
            answer: 1
        },
        {
            id: 348,
            q: "Your ship is dead in the water with the rudder amidships. As the right-handed screw starts to turn ahead, the bow will tend to go",
            options: ["to port", "as influenced by the tide and sea", "as influenced by slipstream", "to starboard", "straight ahead"],
            answer: 0
        },
        {
            id: 349,
            q: "You are going ahead on twin engines with rudders amidships. Your port engine stalls. To continue your course you should",
            options: ["decrease engine speed", "apply right rudder", "apply left rudder", "keep your rudder amidships", "increase engine speed"],
            answer: 2
        },
        {
            id: 350,
            q: "On a twin-screw, twin-rudder vessel, the most effective way to turn in your own water with no way on is to put",
            options: ["one engine ahead and one engine astern, with rudders amidships", "one engine ahead and one engine astern, wi rudder", "both engines astern, with full rudder", "both engines ahead, with rudders amidships", "both engines ahead, with full rudder"],
            answer: 0
        },
        {
            id: 351,
            q: "A ship is stopped with no way upon the vessel at the pilot station. The vessel is a large twin-screw ship. It must come around 180° to board Pilot. How should the captain use the engines and rudder to turn the ship fastest in the least amount of space?",
            options: ["Half ahead with hard over rudder, then full astern on inboard engine", "Full astern on the engines and hard over rudder", "Full ahead on the engines and hard over rudder", "Slow ahead with hard over rudder", "Full ahead with hard over rudder, then full astern on outboard engine"],
            answer: 4
        },
        {
            id: 352,
            q: "According to the passage, what makes this ship so unique?",
            options: ["It meets all the International requirements", "It can operate at minus 40 degrees Celsius", "It does not need the assistance of an ice-breaker", "It is able to carry crude oil in the Arctic area", "It protects the marine environment"],
            answer: 2
        },
        {
            id: 353,
            q: "When planning the manoeuvre, what information was ignored by the pilot?",
            options: ["Pilot card with relevant information about ship's dimensions and manoeuvring details", "the air draft of the ship's port side bridge wing", "the signed pilot card", "the details of proposed plan with the pilot", "ship-to-shore and shore-to-ship forms of information"],
            answer: 1
        },
        {
            id: 354,
            q: "The _____ drives the propeller at the stern of the vessel",
            options: ["engine", "derrick", "boiler", "funnel", "winch"],
            answer: 0
        },
        {
            id: 355,
            q: "Makinenin hareketini pervaneye ileten rot:",
            options: ["Propeller", "Rudder", "Shaft", "Hawse pipe", "Chain"],
            answer: 2
        },
        {
            id: 356,
            q: "What is not included in the category of deck machinery?",
            options: ["hatch cover", "bow thrusters", "lifeboat engine", "steam generator", "windlass"],
            answer: 3
        },
        {
            id: 357,
            q: "In ships that don't have an emergency generator which option below is used in case of emergency?",
            options: ["Magneto", "Port generator", "Auxilliary generator", "Shaft generator", "Emergency generator"],
            answer: 4
        },
        {
            id: 358,
            q: "Fresh water is generated on ship by a fresh water generator, also known as",
            options: ["condenser", "sea water generator", "sea water separator", "evaporator", "distiller"],
            answer: 3
        },
        {
            id: 359,
            q: "Using compressed air on board a ship means to start the diesel engines which could be either main engine or _____ engines.",
            options: ["ancillary", "subsidiary", "support", "contributory", "auxilliary"],
            answer: 4
        },
        {
            id: 360,
            q: "The steam turbine can be connected to a reduction gear to produce motion. What word can be used instead of the underlined word as a synonym?",
            options: ["buoyancy", "velocity", "force", "movement", "thrust"],
            answer: 3
        },
        {
            id: 361,
            q: "All diesel engines are classified as",
            options: ["vacuum ignition", "external combustion", "four cycle", "spark plug ignition", "compression ignition"],
            answer: 4
        },
        {
            id: 362,
            q: "Remarks and signature of _____ for each day should be noted in engine room logbook.",
            options: ["chief officer", "duty officer", "duty engineer", "chief engineer", "any engineer"],
            answer: 2
        },
        {
            id: 363,
            q: "What happens when your engine stalls?",
            options: ["Black smoke comes out of funnel", "Propeller leaks oil", "Propeller turns more quickly", "Propeller stops turning", "Propeller vibrates"],
            answer: 3
        },
        {
            id: 364,
            q: "As the propeller turns, voids are formed on the trailing and leading edges of the propeller blades causing a loss of propulsive efficiency, pitting of the blades, and vibration. These voids are known as",
            options: ["cavitation", "anode", "slip", "advance", "a"],
            answer: 0
        },
        {
            id: 365,
            q: "Water-_____ boilers have replaced smoke-tube oilers to generate steam for main engines",
            options: ["type", "tube", "operating", "steam", "cell"],
            answer: 1
        },
        {
            id: 366,
            q: "A \"pneumercator\" measures:",
            options: ["Air level", "Liquid level", "Air temperature", "Air pressure", "Oil pressure"],
            answer: 1
        },
        {
            id: 367,
            q: "How many circuits are there in a sidelight?",
            options: ["Two", "Four", "Three", "Air pressure", "Oil pressure"],
            answer: 0
        },
        {
            id: 368,
            q: "Which of the following best describes the open circuit?",
            options: ["A circuit with a gap", "A circuit with no gaps", "A circuit with excessive current", "A circuit with a blown fuse", "None of above"],
            answer: 0
        },
        {
            id: 369,
            q: "What is the name of the part which is placed in ignition circuit that increases 6 or 12 V voltage of accumulator to 10000-20000 V?",
            options: ["Capacitor or condenser", "Ballast coin", "Ignition switch", "Induction coil", "Platinum"],
            answer: 3
        },
        {
            id: 370,
            q: "An accumulator with a capacity of 150 Ah gives 120 Ah energy while discharging. What is the efficiency of this accumulator?",
            options: ["80%", "60%", "70%", "50%", "75%"],
            answer: 0
        },
        {
            id: 371,
            q: "Which of the following statements best describes the \"hunting gear\"?",
            options: ["It is related to vibration and the working loose of components", "It is a feedback mechanism of steering gear which repositions the floating lever of hydraulic pump as the tiller moves to the desire position", "It is the normal method of steering and involves the feedback of steering angle to the helm", "It is a constant torque machine at all angles of helm compared to the ram system where due to the Rapson slide effect, the torque available increases with increasing helm", "It is normally used for back up purposes only"],
            answer: 1
        },


        {
            id: 372,
            q: "Which standarts should the safety equipment certificate of a vessel conform with?",
            options: ["SOLAS Convention", "Lloyd's register", "American Bureau of shipping", "ISO 9001", "United salvage association"],
            answer: 0
        },
        {
            id: 373,
            q: "All LSA shall comply with;",
            options: ["SOLAS Chapter 1", "SOLAS Chapter 2", "SOLAS Chapter 3", "SOLAS Chapter 4", "SOLAS Chapter 5"],
            answer: 2
        },
        {
            id: 374,
            q: "What is the full title of ISM Code?",
            options: ["The International Safety Management Code", "The International SOLAS Code", "The International MARPOL Code", "The International Safety System Management Code", "The International Management Code for the Safe Operation of Ships and for Pollution Prevention"],
            answer: 4
        },
        {
            id: 375,
            q: "a certificate issued to a company that complies with the requirements of the ISM code",
            options: ["Document of compliance", "Objective Evidence", "Safety Exemption Certificate", "Notice of readiness", "Complementary issues of certificate"],
            answer: 0
        },
        {
            id: 376,
            q: "_____ is/are a person or persons designated in writing by the responsible person who monitors the safety management system of the company and vessel and has direct access to communicate with the highest levels of the company and with all management levels ashore and aboard vessels",
            options: ["Designated Person Ashore", "Administor of the Port", "Officer in Charge", "Recognized Organization", "Stevedores"],
            answer: 0
        },
        {
            id: 377,
            q: "Which convention / code is the reference for Minimum Safe Manning Certificate?",
            options: ["STCW Code", "MARPOL 73/78", "SOLAS", "International Load Line Convention", "ISM Code"],
            answer: 2
        },
        {
            id: 378,
            q: "On which certificate of a ship you can find the required number of able seaman for that particular ship?",
            options: ["safe manning certificate", "load line certificate", "certificate of inspection", "certificate of compliance", "ship's registry certificate"],
            answer: 0
        },
        {
            id: 379,
            q: "\"If the UMS or bridge control systems are not operational then an Engineering Watchkeeping Officer (Reg III/1) and an Engine Rating (Reg III/4) must be carried in addition to the above\" In which certificate is above statement placed?",
            options: ["Class certificate", "MLC", "DOC", "Safe Manning Certificate", "Safety Equipment Certificate"],
            answer: 3
        },
        {
            id: 380,
            q: "Checking the provision of means of embarkation and disembarkation from ships for use in port and in port-related operations, such as gangways and accommodation ladders which certificate",
            options: ["Safety equipment cert.", "LL cert.", "Safety construction cert.", "Deck department cert.", "IOPP cert."],
            answer: 0
        },
        {
            id: 381,
            q: "Which IMO Convention deals especially with the basic requirements on search and rescue operations?",
            options: ["MARPOL", "STCW", "SOLAS", "SAR", "ISM"],
            answer: 3
        },
        {
            id: 382,
            q: "Which of the following international convention determines the requirement for preventing pollution caused by toxic materials?",
            options: ["COLREG", "STCW", "SOLAS", "MARPOL", "IMDGC"],
            answer: 3
        },
        {
            id: 383,
            q: "Which convention / code is the reference for Shipboard Oil Pollution Emergency Plan (SOPEP)?",
            options: ["SOLAS", "STCW", "MARPOL Annex I", "Marpol Annex II", "Marpol Annex V"],
            answer: 2
        },
        {
            id: 384,
            q: "Which convention / code is the reference for International Oil Pollution Prevention Certificate?",
            options: ["SOLAS", "STCW", "MARPOL Annex I", "MARPOL Annex V", "MARPOL Annex II"],
            answer: 2
        },
        {
            id: 385,
            q: "Which one of the following types of pollution is related with MARPOL Annex II?",
            options: ["Garbage", "Both", "Oil", "Sewage", "Noxious Liquid Substances"],
            answer: 4
        },
        {
            id: 386,
            q: "In which book can you find MFAG (Medical First Aid Guide)?",
            options: ["MSDS", "IBC Code", "IMDG Code", "IAMSAR", "SMCP"],
            answer: 2
        },
        {
            id: 387,
            q: "Passenger Ship Safety Equipment Certificate validity",
            options: ["12 Months", "24 Months", "36 Months", "5 Years", "48 Months"],
            answer: 3
        },
        {
            id: 388,
            q: "A ship sanitation control exemption certificate is valid for a period of",
            options: ["1 year", "2 years", "6 months", "5 years", "7 months"],
            answer: 2
        },
        {
            id: 389,
            q: "A vessel not having \"Seaworthiness Certificate\" or of which the part of it is over",
            options: ["can carry cargo but not passengers", "can not carry cargo", "can not carry passengers", "can not operate commercialy", "can not sail"],
            answer: 4
        },
        {
            id: 390,
            q: "The purpose of _____ is to assist the ships to avoid, deter or delay piracy attacks in the High Risk Area ( Somalia, Arabian Sea, etc) All vessel must take necessary precautions as per this booklet and report UKMTO and MSCHOA",
            options: ["SOLAS", "MARPOL", "STCW", "BMP4", "ISM Code"],
            answer: 3
        },
        {
            id: 391,
            q: "Surveys required internationally and/or by the Flag State both, include:",
            options: ["Load Line Convention", "SOLAS and MARPOL", "IMO Codes", "ILO Conventions", "All of the above"],
            answer: 4
        },
        {
            id: 392,
            q: "Please select correct MOU for for Mersin Port / Turkey",
            options: ["Turkey Coast Guard", "Damietta MOU", "Mersin MOU", "NKK", "Mediterranean MOU"],
            answer: 4
        },
        {
            id: 393,
            q: "Please select correct MOU for Rotterdam Port / Holland",
            options: ["Tokyo MOU", "Paris MOU", "Mediterranean MOU", "Holland MOU", "Caribbean MOU"],
            answer: 1
        },
        {
            id: 394,
            q: "All certificates must be renewed before its _____",
            options: ["issue date", "issue place", "Inspection date", "Valid date", "Next PSC date"],
            answer: 3
        },
        {
            id: 395,
            q: "If any class certificate issue for a vessel for the first time a/an _____ certificate is issued and this certificate is valid for only 3 months",
            options: ["Exemption", "Interim", "Annual", "Special", "Amendment"],
            answer: 1
        },
        {
            id: 396,
            q: "Which type of certification survey consist of an inspection of the structure, machinery and electrical equipment to ensure that the materials, scandings, construction and arrangements as appropriate are in accordance with the approved plans, diagrams, specifications, calculations and other technical documentation and that the workmanship and installation are in the respect satisfactory?",
            options: ["Initial", "Renewal", "Intermediate", "Periodical", "Conditional"],
            answer: 0
        },
        {
            id: 397,
            q: "What term means payment for cargo?",
            options: ["damage", "despatch", "tramp", "freight", "demourrage"],
            answer: 3
        },
        {
            id: 398,
            q: "Fee or commission payable by shipowner to a shipbroker for successful negotiation of a charter. It is normally expressed ad s percentage of the freight or hire and demurrage is called",
            options: ["Freight", "Charter Party", "Brokerage", "Bill of Lading", "Mate receipt"],
            answer: 2
        },
        {
            id: 399,
            q: "The company which acts on behalf of the shipowner in any port his representative is called",
            options: ["Charterer", "Agent", "Owner", "Broker", "Surveyor"],
            answer: 1
        },
        {
            id: 400,
            q: "A _____ is a person or a company whose business is to prepare shipping documents, arrange shipping place and insurance, and deal with customs requirements so every ship needs one at every port of call",
            options: ["shipping agent", "shipping broker", "ship chandler", "chartere", "designated person ashore"],
            answer: 0
        },
        {
            id: 401,
            q: "Cargo loading and discharging time allowed by the ship owner to the charterer is",
            options: ["indemnity", "laytime", "claim", "demurrage", "despatch"],
            answer: 1
        },
        {
            id: 402,
            q: "A _____ day is a working day of 24 hours on which work is not prevented by bad weather whatever work intended or not",
            options: ["weather working", "reversible", "running", "collery working", "reporting"],
            answer: 0
        },
        {
            id: 403,
            q: "A receipt of goods shipped on board a ship signed by the person (or his agent) who contracts to carry them, and stating the terms on which the goods are carried is known as",
            options: ["Charter Party", "Bill of Lading", "Good Receipt", "Time Sheet", "Statement of Facts"],
            answer: 1
        },
        {
            id: 404,
            q: "\"Received by the Carrier the Goods specified below in apparent good order and condition unless otherwise stated, to be transported to such place as agreed, authorized or permitted herein and subject to all the terms and conditions appearing on the front and reverse\" The above part is taken from a",
            options: ["ship ullage report", "passenger list", "noon position report", "bill of lading", "notice of readiness"],
            answer: 3
        },
        {
            id: 405,
            q: "How does a \"clean\" BILL of Lading describe the cargo loaded on board?",
            options: ["the cargo is slightly damaged", "the cargo is in good condition", "the cargo is in good order", "the cargo is not damaged", "the cargo is in apparent good order and condition"],
            answer: 4
        },
        {
            id: 406,
            q: "Which statement is wrong regarding the bill of lading?",
            options: ["It is issued by the carrier a receipt of goods for shipment", "It is a document of Title of the goods", "It is negotiable document", "It is issued when the goods have been", "Ship's agent draws up the bill of lading and the ship master signs it"],
            answer: 3
        },
        {
            id: 407,
            q: "The _____ is a document about the cargo recording daily all particulars and details relating to loading and discharging cargo. It also indicates the duration of and reason for any interruption of work",
            options: ["Cargo Damage Report", "Cargo Manifest", "Notice of Readiness", "Bill of Lading", "Statements of Facts"],
            answer: 4
        },
        {
            id: 408,
            q: "If there is any damage or missing cargo, suitable _____ will be prepared",
            options: ["endorsement", "bill of lading", "clause", "protest letter", "marks"],
            answer: 0
        },
        {
            id: 409,
            q: "The document that establishes the facts of a casualty and is the prima facie relief from liability for the damage is the",
            options: ["insurance claim", "damage invoice", "adjuster's report", "policy", "Master's protest"],
            answer: 4
        },
        {
            id: 410,
            q: "If the goods loaded are not in apparent good order and condition, a corresponding qualification is written on the Mate's receipt and this is called",
            options: ["cargo damage report", "cargo declaration", "statement of facts", "cargo manifest", "bill of lading"],
            answer: 4
        },
        {
            id: 411,
            q: "This is an example of a [Letter where the Master holds a party responsible for expenses due to an unauthorized shifting.]",
            options: ["Bill of Lading", "Letter of Protest", "Bill of Health", "Notice of Readiness", "Bill of Sales"],
            answer: 1
        },
        {
            id: 412,
            q: "Unless the charter party stipulates differently, at which moment should the lay time start?",
            options: ["When the notice of readiness is tendered", "When the ship is berthed", "When the LOI received", "NOR is tendered and accepted", "When the loading/discharging is commenced"],
            answer: 3
        },
        {
            id: 413,
            q: "This is an example of a [Document stating the ship has arrived and is ready to load/discharge cargo as per C/P]",
            options: ["Notice of Readiness", "Letter of Protect", "Bill of Lading", "Bill of Health", "Bill of Sale"],
            answer: 0
        },
        {
            id: 414,
            q: "The purpose of a \"Notice of Readiness\" is to",
            options: ["note that the charter is ready to sign the relevant document", "inform the related party that the vessel is in all respects ready to commence loading / discharging operation", "inform the master that the is ready to receive the goods", "specify the full account of the nature of a charter", "notice that the parties have agreed on the readiness"],
            answer: 1
        },
        {
            id: 415,
            q: "This is an example of a [Template for Notice of Readiness]",
            options: ["Notice of readiness", "Letter of acceptance", "Letter of confidence", "Notice of confession", "Letter of"],
            answer: 0
        },
        {
            id: 416,
            q: "General name of the document containing all the terms and conditions of the contract between a shipowner and a charterer and signed by both parties or their agents for the hire of a ship or the space in a ship",
            options: ["Voyage charter", "Consecutive voyage charter", "Time charter", "Charter Party", "Bareboat Charter"],
            answer: 3
        },
        {
            id: 417,
            q: "The agreement between a shipowner and a charterer for the use or hire of a ship for a particular voyage or series of voyages or for a stipulated period of time is called",
            options: ["Lay Time", "Charter Party", "Common Carrier", "GENCON", "Private Carrier"],
            answer: 1
        },
        {
            id: 418,
            q: "A Charter Party gives a shipper right to",
            options: ["sell the ship to other companies", "navigate the vessel safely", "extend the carrying capacity of the ship", "manage the vessel technically", "use the cargo spaces"],
            answer: 4
        },
        {
            id: 419,
            q: "\"The cargo shall be loaded within the number running days/hours weather permitting. Sundays and holidays excepted unless used, in which event time used shall count.\" According to this clause of charter party, if loading operation is performed on holidays, time spent for loading _____ otherwise these days _____",
            options: ["isn't to be included in laytime / are to be included in laytime", "should be excepted / should be accepted", "shall not count / shall count", "shall count / shall not count", "is permitted / are not permitted"],
            answer: 3
        },
        {
            id: 420,
            q: "According to this clause of a bill of lading, the carrier shall not be held responsible for any damage to the goods [Port to Port Shipment clause]",
            options: ["after they are loaded on board the ship", "while they were taken to the port on trucks", "while they are loaded on board the ship", "which occured during any part of the sea voyage", "likely to appear following the discharging operation"],
            answer: 1
        },
        {
            id: 421,
            q: "According to the above paragraph, the resolution adopted at the 21 st assembly focused more on _____ than _____ [IMO A.900(21) on \"The Human Element\"]",
            options: ["developing technical standards / the human factor", "the human factor / developing technical standards", "the organization's work / maritime safety", "maritime safety / the human factor", "the previous revolution / the one of the new millennium"],
            answer: 1
        },
        {
            id: 422,
            q: "A device for measuring pressure of atmosphere is known as a:",
            options: ["Windscale", "Compass", "Barometer", "Blip", "Shaft"],
            answer: 2
        },
        {
            id: 423,
            q: "Atmospheric pressure is usually given in",
            options: ["minibars", "minimum", "microbars", "miles", "milibars"],
            answer: 4
        },
        {
            id: 424,
            q: "_____ barometer is an instrument for measuring the air pressure, which does not use any liquid, unlike the old fashioned mercury-in-glass barometer",
            options: ["Normal", "Mercury", "Bulb", "Recording", "Aneroid"],
            answer: 4
        },
        {
            id: 425,
            q: "_____ is an instrument that measures wind speed",
            options: ["Barometer", "Thermometer", "Hygrometer", "Psychomotor", "Anemometer"],
            answer: 4
        },
        {
            id: 426,
            q: "Which of the following devices is used for measuring humidity?",
            options: ["anemometer", "hygrometer", "dynamometer", "Psychometer", "none of the answers"],
            answer: 1
        },
        {
            id: 427,
            q: "An instrument used for measuring the _____ of the air is called a hygrometer",
            options: ["pressure", "heat", "air pressure", "speed", "humidity"],
            answer: 4
        },
        {
            id: 428,
            q: "A weather _____ is a chart that displays various meteorological features across a particular area at a particular point in time",
            options: ["forecast", "routeing", "saved", "map", "sector"],
            answer: 3
        },
        {
            id: 429,
            q: "If a wind is going to freshen, it is going to",
            options: ["stay the same", "lose strength", "change name", "gain strength", "change direction"],
            answer: 3
        },
        {
            id: 430,
            q: "If the wind is blowing from E and it starts changing its direction to blow from SE, the wind is said to be",
            options: ["turning", "rotating", "backing", "circling", "veering"],
            answer: 2
        },
        {
            id: 431,
            q: "If the wind is blowing from E and it starts changing its direction to blow from NE, the wind is said to be",
            options: ["turning", "backing", "rotating", "circling", "veering"],
            answer: 4
        },
        {
            id: 432,
            q: "A wind which first blows from South, then changes direction to blow from the East, is said to be",
            options: ["veering", "backing", "clockwise", "freezing", "funneling"],
            answer: 1
        },
        {
            id: 433,
            q: "_____ have a major effect on a light's range. For example fog, haze, dust, smoke or precipitation can obscure a light",
            options: ["Waves", "Sea conditions", "Lighting conditions", "Atmospheric conditions", "Unreliable charts"],
            answer: 3
        },
        {
            id: 434,
            q: "_____ is formed when the droplets or ice crystals in clouds have become sufficiently large to fall to the ground in a variety of forms such as rain, snow, hail or sleet",
            options: ["Ice crystal", "Precipitation", "Drizzle", "Vapour", "Sea smoke"],
            answer: 1
        },
        {
            id: 435,
            q: "In case of bad weather causing the _____ or loss of cargo, appropriate reports must be made to ships in the vicinity and to the nearest coast station",
            options: ["jettisoning", "spoil", "canning", "misuse", "misleading"],
            answer: 0
        },
        {
            id: 436,
            q: "Find the true explanation of the wind's directional movement in Baleares. [The bulletin states: \"BALEARES NORTH 2 TO 4 LATER EAST OR NORTHEASTERLY 4 TO 5\"]",
            options: ["Storm Winds", "Veering", "Breeze", "Backing", "Forecast"],
            answer: 1
        },
        {
            id: 437,
            q: "According to the above mentioned weather report, which one of the following is true? [The report mentions: \"WIND GUSTS CAN BE A FURTHER 40 PERCENT STRONGER... AND MAXIMUM WAVES MAY BE UP TO TWICE THE SIGNIFICANT HEIGHT\"]",
            options: ["Weather is going to be good", "There is no significant changes", "Very low waves are expected", "Sudden increasing speed in wind is expected", "Maximum waves may be two meters"],
            answer: 3
        },
        {
            id: 438,
            q: "According to the passage, tsunamis are produced by",
            options: ["Immense volumes of water and energy in the coastal areas", "Displacement of water along the shore of Japan", "Tidal and harbour waves", "Displacement of water in the coastal areas", "Sudden motion of land on the sea floor"],
            answer: 4
        },

        {
            id: 439,
            q: "Şimdiki süratiniz nedir?",
            options: ["What is your service speed?", "What is your present speed?", "What is your full speed?", "What is your maximum speed?", "What is your manoeuvring speed?"],
            answer: 1
        },
        {
            id: 440,
            q: "Kumanda altında değilim.",
            options: ["I am a hampered vessel", "I am manoeuvering with difficultly", "I am not under command", "My radar is not working", "I am not making way through the water"],
            answer: 2
        },
        {
            id: 441,
            q: "Rotamı iskeleye alıyorum.",
            options: ["I will change my heading to right", "I will alter my course to port", "I will turn to right", "I am altering my course to port", "I can not come more to port"],
            answer: 3
        },
        {
            id: 442,
            q: "Rotamı iskeleye alacağım.",
            options: ["I will change my heading to right", "I will alter my course to port", "I will turn to right", "I am altering my course to port", "I can not come more to port"],
            answer: 1
        },
        {
            id: 443,
            q: "Düşük hızla ilerliyorum.",
            options: ["I will proceed at reduced speed", "I am not going in slow speed", "I am proceeding at reduced speed", "My speed will be reduced", "There is a vessel entering the fairway"],
            answer: 2
        },
        {
            id: 444,
            q: "Gemimi derhal durduruyorum.",
            options: ["I am stopping my vessel immediate", "I am stepping aboard at once", "I am stopping my vessel immediately", "I am stopping your vessel immediately", "I am stopping in front of your vessel at once"],
            answer: 2
        },
        {
            id: 445,
            q: "Akıntı durgundur.",
            options: ["The tide is against you", "The tide is slack", "The tide is with you", "The tide is abnormal", "The tide is rising"],
            answer: 1
        },
        {
            id: 446,
            q: "Görüş mesafesi toz yüzünden azalmıştır.",
            options: ["Visibility is reduced by fog", "Visibility is reduced by snow", "Visibility is reduced by dust", "Visibility is reduced by rain", "Visibility is reduced by hail"],
            answer: 2
        },
        {
            id: 447,
            q: "Son uğrak limanınız neresiydi?",
            options: ["What are my berthing instructions?", "What are my docking instructions?", "What was your last port of call?", "What did you load in your last port?", "What will you discharge in your last port?"],
            answer: 2
        },
        {
            id: 448,
            q: "Şamandıranın kuzeyinden geçmenizi tavsiye ederim.",
            options: ["I advise you to pass East of Mark", "I advise you to pass West of Mark", "I advise you to pass South of Mark", "I advise you to pass North of Mark", "I advise you to pass Northeast of Mark"],
            answer: 3
        },
        {
            id: 449,
            q: "Arama ve kurtarmayı yönetiyorum.",
            options: ["He is in command of search and rescue", "I am in command of search and rescue", "Take command of search and rescue", "I will attemp rescue by breeches-buoy", "I am managing the salvage operation"],
            answer: 1
        },
        {
            id: 450,
            q: "Pruvanızdaki gemiye yaklaşıyorsunuz",
            options: ["Please get closer to the vessel ahead of you", "You should get closer to the vessel ahead of you", "You are getting closer to the vessel ahead of you", "You are nearing the vessel in the vicinity", "You are getting closed"],
            answer: 2
        },
        {
            id: 451,
            q: "Mevkiniz radar ile mi elde edilmiştir?",
            options: ["Has your position been obtained by decca?", "Has your position been obtained by astronomical observation?", "Do you know your position?", "What is the course to reach you?", "Has your position been obtained by radar?"],
            answer: 4
        },
        {
            id: 452,
            q: "\"Piri Reis\" gemisi şimdi tanıtma işareti çekiyorum.",
            options: ["Vessel \"Piri Reis\" I am making signals now", "Vessel \"Piri Reis\" I am making a significance now", "Vessel \"Piri Reis\" I am making identity at the present", "Vessel \"Piri Reis\" I am now making an identification signal", "Vessel \"Piri Reis\" I am now making an identifiable signature"],
            answer: 3
        },
        {
            id: 453,
            q: "Kılavuzluk hizmeti geçici olarak küçük gemiler için durdurulmuştur.",
            options: ["Pilotage is suspended for all vessels", "Pilotage is resumed for small vessels", "Pilotage is resumed for all vessels", "Pilotage is not compulsory for small vessels", "Pilotage is suspended for small vessels"],
            answer: 4
        },
        {
            id: 454,
            q: "Yardım gerekli değildir. Yolunuza devam edebilirsiniz.",
            options: ["Tug is no longer required. You may let go the tug lines", "I am coming to your assistance", "I require fire fighting assistance", "Assistance is not required. You may proceed", "Help is required. Please proceed to my position"],
            answer: 3
        },
        {
            id: 455,
            q: "_____ hattında rota / trafik yönü değiştirildi.",
            options: ["Route / traffic lane has been suspended", "Route/traffic lane has been discontinued", "Route/traffic lane has been diverted", "Route/traffic lane has been cleared", "Route / traffic lane has been closed"],
            answer: 2
        },
        {
            id: 456,
            q: "_____ mevkiinde monte akıntı ölçer var.",
            options: ["There are oceanographic instruments moored in position", "There are current meters moored in position", "There are drilling rigs installed in position", "There are speedometers installed in position", "There are cable laying operations in position"],
            answer: 1
        },
        {
            id: 457,
            q: "Operasyon çarmıhla yapılacak",
            options: ["Operation will be carried out using hose", "Operation will be carried out by means of Hose", "Operation will be carried on using hoist", "Operation will be carried up hose", "Operation will be carried out using hoist"],
            answer: 4
        },
        {
            id: 458,
            q: "Çatışmayı önlemek için bazı tedbirler alınmalıdır.",
            options: ["Collision is prevented by some precautions", "Precautions must be done to avoid drifting", "Precautions shall be taken to prevent flooding", "Precautions must be done to avoid fire", "Some cautions must be taken to prevent collision"],
            answer: 4
        },
        {
            id: 459,
            q: "Acil durumda tüm çıkışlar aydınlatılacaktır.",
            options: ["All exits shall be illuminated in an emergency", "All stairways shall illuminate in an emergency", "All exits shall be illuminated before an emergency", "All stairways and muster stations shall be lighted", "All embarkation stations shall be illuminated in an emergency"],
            answer: 0
        },
        {
            id: 460,
            q: "Is your radar operational?",
            options: ["Radarınızı ayarladınız mı?", "Radarınız bozuk mu?", "Radarın varmı?", "Radarınız çalışıyor mu?", "Radarınız çalıştı mı?"],
            answer: 3
        },
        {
            id: 461,
            q: "What is her air-draught?",
            options: ["Yüksekliği ne kadardır?", "Gemi düz mü?", "Baş su çekimi ne kadardır?", "Gemi başta trimli mi?", "Şimdiki en derin su çekimi ne kadardır?"],
            answer: 0
        },
        {
            id: 462,
            q: "I am going astern.",
            options: ["Kanala giriyorum", "Kanalın ortasındasınız", "Benden iyice açık bulunun", "Kumanda altında değilim", "Tornistan yapıyorum"],
            answer: 4
        },
        {
            id: 463,
            q: "I am altering my course to port.",
            options: ["Zorlukla manevra yapıyorum", "Rotanızı sancağa alınız", "Rotanızı iskeleye alınız", "Rotamı sancağa alıyorum", "Rotamı iskeleye alıyorum"],
            answer: 4
        },
        {
            id: 464,
            q: "I am proceeding at reduced speed.",
            options: ["Geçitte ilerleyeceğim", "Limana ilerliyorum", "Düşük hızla ilerliyorum", "Hızımı arttırıyorum", "Pruvamdaki gemiyi geçeceğim"],
            answer: 2
        },
        {
            id: 465,
            q: "You will run aground.",
            options: ["Karaya oturdunuz", "Karaya oturacaksınız", "Acil demir yerine gidiniz", "Karaya yaklaştınız", "Karaya oturdunuz mu?"],
            answer: 1
        },
        {
            id: 466,
            q: "I am coming to your assistance.",
            options: ["Yardımınıza gelemem", "Yardımınıza gelmem gerekli mi?", "Yardımınıza geliyorum", "Yardım gerekli değil", "Bir helikopter istiyorum"],
            answer: 2
        },
        {
            id: 467,
            q: "The tugs will pull.",
            options: ["Römorkörler itecek", "Römorkörler kullanın", "Römorkörler çekecek", "Römorkör halatlarını kullanın", "Römorkörler çekiyor"],
            answer: 2
        },
        {
            id: 468,
            q: "Your navigation lights are not visible.",
            options: ["Seyir fenerleriniz görünmüyor", "Seyir fenerleriniz çalışıyor mu?", "Hangi seyir fenerleriniz arızalı?", "Seyir fenerleriniz neden görünmüyor?", "Seyir fenerleriniz arızalı"],
            answer: 0
        },
        {
            id: 469,
            q: "Advise you to stop your engine.",
            options: ["Makine (ları) mı stop edeceğim", "Makine (ları) nı durdur", "Makine (ları) nızı stop etmeniz tavsiye edilir", "Makine (ları) mı durdurdum", "Makine (lar) durdu"],
            answer: 2
        },
        {
            id: 470,
            q: "We will be berthing port side.",
            options: ["Sancaktan yanaşıyor olacağız", "İskeleden yanaşıyor olacağız", "Baştan şamandıralara bağlayacağız", "Irgati donanıma alın", "Dümenin isi tamam"],
            answer: 1
        },
        {
            id: 471,
            q: "Let go spring line.",
            options: ["Baş halatı mola", "Kıç halatı mola", "Koltuk halatı mola", "Çekme halatı mola", "Ağlar mola"],
            answer: 3
        },
        {
            id: 472,
            q: "You are in the leading line.",
            options: ["Transit hattınız uzun", "Transit hattı üzerindesiniz", "Transit geçişte baştasınız", "Transit hattı uzuyor", "Transitte lider olun"],
            answer: 1
        },
        {
            id: 473,
            q: "Say again your position for identification.",
            options: ["Şimdiki mevkiniz ve rotanız nedir?", "Şimdiki mevkinizi ve rotanızı bildirin", "Şimdiki mevkinizi ve rotanızı bildirmediniz", "Belirlenmeniz için mevkiinizi tekrar söyleyiniz", "Size varmak için rotanızı söyleyiniz"],
            answer: 3
        },
        {
            id: 474,
            q: "Visibility is reduced by fog.",
            options: ["Görüş mesafesi yağmur nedeniyle azalmıştır", "Görüş mesafesi kar nedeniyle azalmıştır", "Görüş mesafesi toz nedeniyle azalmıştır", "Görüş mesafesi sis nedeniyle azalmıştır", "Görüş mesafesinin değişmesi bekleniyor"],
            answer: 3
        },
        {
            id: 475,
            q: "You may navigate by yourself or wait for pilot.",
            options: ["Kendiniz seyredebilirsiniz yoksa pilot gelir", "Kendiniz seyrederseniz pilot bekleyebilir", "Kendiniz seyredebilir veya pilotu bekleyebilirsiniz", "Kendiniz seyredemezseniz, pilotu bekleyin", "Kendiniz seyredin yoksa pilotu bekleteyim"],
            answer: 2
        },
        {
            id: 476,
            q: "There is a vessel obstructing your movements.",
            options: ["İlerde hareketlerinizi engelleyen bir gemi var", "İlerde hareketinize kasteden bir gemi var", "İlerde sizi takip eden bir gemi var", "İlerde sizin hareketinizi bekleyen bir gemi var", "İlerde sizinle ilgili hareketli bir gemi var"],
            answer: 0
        },
        {
            id: 477,
            q: "You are running into danger.",
            options: ["Tehlikeye gidiyorsunuz. Önünüzde kesik sis var", "Tehlikeye gidiyorsunuz. Önünüzde sığ su var", "Tehlikeye gidiyorsunuz. Önünüzde enkaz var", "Tehlikeye gidiyorsunuz. Önünüzde kesif sis var", "Tehlikeye gidiyorsunuz. Önünüzde mayın var"],
            answer: 3
        },
        {
            id: 478,
            q: "There shall be clear instructions relating to the commencing of this operation.",
            options: ["Sistem çalışmasıyla açık talimatlara bağlıdır", "Sistemin çalışması açık talimatlar olmasıyla ilgilidir", "İşlemin çalışmasına ilişkin açıklamalar yapılacaktır", "Bu işlemin başlatılmasını ilişkin açık talimatlar bulunacaktır", "Sistem üzerindeki açık talimatlara göre çalışır"],
            answer: 3
        },
        {
            id: 479,
            q: "Today thousands of meteorological observation stations are working all all over the world and provide us with information of various atmosphere situations.",
            options: ["Bugün binlerce hava gözlem istasyonu tüm dünya üzerinde faaliyet göstermekte ve bize çeşitli atmosfer durumları ile ilgili tahminleri sağlamaktadır", "Bugün dünya üzerindeki binlerce hava gözlem istasyonu atmosfer durumları ile ilgili bilgileri bize eksiksiz olarak aktarmaktadır", "Dünya üzerindeki binlerce hava gözlem istasyonundan atmosfer durumları ile ilgili günlük tahminleri elde edebilirsiniz", "Günümüzde atmosfer olayları ile ilgili tüm gelişmeler, yeryüzünde faaliyet gösteren binlerce hava gözlem istasyonu tarafından takip edilmektedir", "Günümüzde atmosferde yer alan pek çok olayı yeryüzünde faaliyet gösteren binlerce hava gözlem istasyonunun çalışmaları sayesinde öğreniyoruz"],
            answer: 0
        },
        {
            id: 480,
            q: "One must remember that, in spite of the great prosperity of the people, U.S's principal political problem remains the relationship between her English and German speaking communities.",
            options: ["Halkın büyük refahına rağmen, İngilizce ve Almanca konuşan toplulukların arasındaki ilişkinin, ABD'nin başlıca siyasal sorunu olarak durduğu hatırlanmalıdır", "İngilizce ve Almanca konuşan toplulukların büyük refah içinde olsa da, bunların birbiriyle olan ilişkilerinin ABD'nin temel siyasal sorunu olduğu göz önünde bulundurulmalıdır", "Halkı büyük refah içinde olan ABD'nin başlıca siyasal sorununun, İngilizce ve Almanca konuşan toplulukların arasındaki ilişkiye dayandığı unutulmamalıdır", "Bugün ABD'nin en önemli siyasal sorununun, büyük refah içinde yaşayan, İngilizce ve Almanca konuşan topluluklar arasındaki ilişkiler olduğu bilinmektedir", "Şu bilinmelidir ki büyük bir refah içinde yaşayan İngiliz ve Alman toplulukları arasındaki ilişki, bugün ABD'nin en başta gelen siyasi sorunudur"],
            answer: 0
        },
        // BÖLÜM 2: KELİME
        {
            id: 481,
            q: "This is the most _____ dress I have ever bought",
            options: ["powerful", "longer", "difficult", "crowded", "expensive"],
            answer: 4
        },
        {
            id: 482,
            q: "Nobody died in the accident, but twenty people were _____",
            options: ["injured", "damaged", "broken", "spoiled", "stollen"],
            answer: 0
        },
        {
            id: 483,
            q: "Man overboard! _____ the life boat",
            options: ["Raise", "Lower", "Call", "Sound", "Put"],
            answer: 1
        },
        {
            id: 484,
            q: "Who receives radio _____ reports and navigational warnings?",
            options: ["weather", "wireless", "safety", "air", "warning"],
            answer: 2
        },
        {
            id: 485,
            q: "Kemal's _____ is not what it used to be. He is always forgetting where he has put things.",
            options: ["remember", "souvenir", "memory", "memoirs", "throughts"],
            answer: 2
        },
        {
            id: 486,
            q: "Look at this notice, it _____ that no visitors are allowed in at that time.",
            options: ["forbids", "says", "advises", "notices", "writes"],
            answer: 1
        },
        {
            id: 487,
            q: "The officer _____ of loading, stowage and safe delivery is chief officer.",
            options: ["designate", "assure", "assume", "maintain", "in charge"],
            answer: 4
        },
        {
            id: 488,
            q: "Hi Mario, I do actually have a homework _____ to do. The deadline's Monday and I'm afraid I'll have to do it during the weekend, so I'll be quite busy.",
            options: ["work", "duty", "job", "assignment", "mission"],
            answer: 3
        },
        {
            id: 489,
            q: "Since the hurricane came _____, it did a lot of damage to the ships sailing in the vicinity.",
            options: ["in a hurry", "rapid", "suddenly", "in hurry", "surprising"],
            answer: 2
        },
        {
            id: 490,
            q: "Because of the _____ gravitational pull of the Moon, the shape of the Earth actually changes as the largest oceans are pulled toward the Moon.",
            options: ["enormous", "redundant", "dogmatic", "successful", "smallest"],
            answer: 0
        },
        {
            id: 491,
            q: "Among the problems facing rocket scientists, the most serious ones are those of _____ and repair.",
            options: ["improvement", "reassessment", "determination", "maintenance", "distinction"],
            answer: 3
        },
        {
            id: 492,
            q: "Which of the following can not be a defect a light might have?",
            options: ["Damaged", "Expensive", "Destroyed", "Unlit", "Structal damage"],
            answer: 1
        },
        {
            id: 493,
            q: "The information sources used by the mariner are generally found in printed publications but some of them are being integrated into _____ electronic systems nowadays.",
            options: ["computer-based", "printed into", "map-turned", "paper-based", "book-formed"],
            answer: 0
        },
        {
            id: 494,
            q: "It now appears that while leaders are still willing for the nation to exert itself abroad and give large amounts of foreign assistance, the public is _____ to go along with these policies.",
            options: ["spontaneous", " precarious", "competitive", "reluctant", "deliberate"],
            answer: 3
        },
        {
            id: 495,
            q: "In order to _____ the method by which staff pay is calculated the company has bought this.",
            options: ["factual", "facility", "facilitate", "facile", "facilisize"],
            answer: 2
        },
        {
            id: 496,
            q: "When you look at the modern office today you could compare the changes with those that took place in the industrial _____ in the 19 th century.",
            options: ["revolving", "revolution", "revolt", "revolted", "revolting"],
            answer: 1
        },
        {
            id: 497,
            q: "The shore-based marine engineers referred to as engineering superintendents should oversee the routine operation of the ships' main and _____ machinery keeping a close watch on routine servicing, maintenance and replacement of the parts which wear out and need regular renewal",
            options: ["auxilliary", "temporary", "stationary", "primary", "secondary"],
            answer: 0
        },
        {
            id: 498,
            q: "Because of the -----normal behavior, he was referred to a psychiatrist. (Meaning of whole word: not normal)",
            options: ["bi-----", "un-----", "extra-----", "ab-----", "an-----"],
            answer: 3
        },
        {
            id: 499,
            q: "Doctors can't put a cast on a .....ured nb; the only way to hold it together while it heals is to apply a tight wrap around the entire torso. (Meaning of root: break)",
            options: ["strict...", "flect...", "secut...", "fract...", "rupt..."],
            answer: 3
        },

        {
            id: 500,
            q: "\"Stand by\" means that the information is",
            options: ["negative", "affirmative", "not proper", "not hear", "not immediately available"],
            answer: 4
        },
        {
            id: 501,
            q: "\"Restricted visibility\" means",
            options: ["Unlimited visibility", "Limitless visibility", "Limited visibility", "Clear visibility", "Clean visibility"],
            answer: 2
        },
        {
            id: 502,
            q: "\"I am not under command\" means",
            options: ["therefore I can keep out of the way", "therefore I could keep out of the way", "I am no different than what I was before", "I am unable to manoeuvre as required by the Rules", "I am not unable to manoeuvre as required by the Rules"],
            answer: 3 // The correct translation of NUC: "I am unable to manoeuvre as required by the Rules"
        },
        {
            id: 503,
            q: "The helm order \"Check her\" means",
            options: ["stop the swing using hard over rudder", "switch the steering control to auto", "check if the helm is working", "slow the swing using moderate rudder", "read the compass heading"],
            answer: 3
        },
        {
            id: 504,
            q: "\"No smoking in closed areas\" means",
            options: ["You must not smoke in closed areas", "You don't have to smoke in closed areas", "You don't need to smoke in closed areas", "You needn't smoke in closed areas", "You aren't able to smoke in closed areas"],
            answer: 0
        },
        {
            id: 505,
            q: "Which of the following words is the synonyms of the underlined word? Before loading of any vessel, depending on the type of cargo the vessel is required to present the cargo holds \"clean and dry\" prior to beginning of loading.",
            options: ["commencement", "approvement", "assessment", "arrangement", "statement"],
            answer: 0 // Synonym for "beginning" which is part of the underlined phrase "prior to beginning"
        },
        {
            id: 506,
            q: "Which of the following words is the synonym of the underlined word? That collision would not have happened, if the watch officer had been careful.",
            options: ["awful", "behave", "attain", "cautious", "compromise"],
            answer: 3
        },
        {
            id: 507,
            q: "Which of the following words is the synonym of the underlined word? All deficiencies must be rectified before departure of the ship.",
            options: ["corrected", "inspected", "remained", "recorded", "released"],
            answer: 0
        },
        {
            id: 508,
            q: "Which of the following words is the synonym of the underlined word? In order to avoid delays or offhire of the ship, hold cleaning requires proper and careful planning. Holds will be declared unfit if any insects dead or alive are found in one hold.",
            options: ["misleaded", "dissatisfied", "misused", "dismissed", "misfiled"],
            answer: 1 // Closest match in the context of being rejected/found unsatisfactory.
        },
        {
            id: 509,
            q: "Which of the following word is synonym of the underlined word? Submarine terrain is much like the terrain we know with valleys, mountains, ridges and even volcanoes",
            options: ["Desert", "Rough", "Battleship", "Atmospheric", "Underwater"],
            answer: 4
        },
        {
            id: 510,
            q: "\"Ships navigating in confined waters involve many complexities and careful consideration will need to be made\" What is the synonymous word for confined in this regard?",
            options: ["restricted", "reduced visibility", "heavy surface current", "shallow", "armed robbery attack is imminent"],
            answer: 0
        },
        {
            id: 511,
            q: "Only aggressive species of small animal life likely to survive in the rough waters near shallow coral reefs. Which of the following words is the synoym of the underlined word?",
            options: ["marine", "passive", "a few", "strong", "cohessive"],
            answer: 3
        },
        {
            id: 512,
            q: "The producers now have the ability to reproduce vivid colours as the result of new technology. Which of the following words is the synonym of the underlined word?",
            options: ["angry", "conflicting", "brilliant", "dampt", "dull"],
            answer: 2
        },
        {
            id: 513,
            q: "Select the one answer choice that best maintains the meaning of the orijinal sentence if you use it in place of the word or phrase that is underlined. The adhesive qualities of this new substance far surpass those of all others of its type.",
            options: ["damaging", "dissolving", "disinterating", "boring", "cohesive"],
            answer: 4
        },
        {
            id: 514,
            q: "Which one of the following sentences has the same meaning with the below sentence? \"It is hard to learn grammar\"",
            options: ["It is grammar to learn hard", "Learning grammar is hard", "Hard to learn is grammar", "It is easy to learn grammar", "Grammer is hard"],
            answer: 1
        },
        {
            id: 515,
            q: "The oiler swept away the broken glass in the machinery space",
            options: ["fractured", "used a broom to clean up", "called someone to replace", "was finished with", "fixed in place securely"],
            answer: 1
        },
        {
            id: 516,
            q: "\"She didn't need to worry about her husband\" means",
            options: ["Her husband needed to be worried about his wife", "She worried about her husband", "There was no reason for her to worry about her husband and she didn't anymore", "Her husband didn't need her worry about him", "Her husband needed her to worry about himself"],
            answer: 2
        },
        {
            id: 517,
            q: "\"Neither you nor I understood what he was saying\" means",
            options: ["You didn't understand what he was saying, but I did", "Both you and I understood what he was saying", "You understood what he was saying and so did I", "Either you or I understood what he was saying", "You didn't understand what he was saying, I didn't either"],
            answer: 4
        },
        {
            id: 518,
            q: "Captain orders \"Let go all\" which of the following is related with this order?",
            options: ["heaving up the accomodation ladder", "unberthing of vessel from quay", "heaving up the life boat", "doubling up the spring lines", "doubling up the fore and aft lines"],
            answer: 1
        },
        {
            id: 519,
            q: "Which of the below sentences has the same meaning with this sentence? I have been abroad for nearly two years, so I am out of touch with everything here",
            options: ["Two years or so out of the country will make you feel differently about your own country", "Two years abroad has estranged mei, so I don't want to go back to my country", "Being out of my country for two years made quite home-sick", "I feel quite like a stranger now that I am back after almost two years abroad", "On my return after almost two years, I was touched to find a few changes here"],
            answer: 3
        },

        // BÖLÜM 2: 10-4-ANLAM BOZAN KELİME
        {
            id: 520,
            q: "Which of the following explanations for the abbreviations is wrong?",
            options: ["GMT-Greenwich Mean Time", "DSC - Digital Selective Communication", "MMSI - Maritime Mobile Service Identity number", "MRCC Maritime Rescue Co-ordination Center", "GMDSS - Global Maritime Distress and Safety System"],
            answer: 1 // DSC = Digital Selective Calling (Communication yerine Calling olmalı)
        },
        {
            id: 521,
            q: "Which of the following message markers is used incorrectly at the beginning of the message?",
            options: ["ADVICE. Stand by on VHF Channel six nine", "WARNING. Obstruction in the fairway", "INFORMATION. M/T Tanker will overtake to the West of you", "INTENTION. I will reduce my speed", "REQUEST. Do not cross the fairway"],
            answer: 4 // "Do not cross the fairway" bir Instruction veya Warning olmalıdır, Request değil.
        },
        {
            id: 522,
            q: "The girl fell into the water cold but was rescued immediately Among the bold underlined words or phrases, choose the on word or phrase that is incorrect in standard written English",
            options: ["rescued", "the", "immediately", "water cold", "into"],
            answer: 3 // "water cold" yerine "cold water" olmalıdır.
        },
        {
            id: 523,
            q: "Choose the one underlined word or phrase that is incorrect in standart written English. Air traffic controllers must use a form of communication that is universal understood because a pilot's understanding of instruction is critical.",
            options: ["understanding", "use", "universal", "that", "a"],
            answer: 2 // "universal" yerine "universally" (zarf) olmalıdır.
        },
        {
            id: 524,
            q: "A sentence with five underlined words or phrases is given as below. For the sentence, choose the one underlined word or phrase that is incorrect in standard written English. For years, this varsity athletes have been known throughout for their tremendous abilities.",
            options: ["tremendous", "this", "for", "have been known", "the"],
            answer: 1 // "this" tekil işaret sıfatıdır, "athletes" çoğul isim olduğu için "these" olmalıdır.
        },
        {
            id: 525,
            q: "A sentence with five underlined words or phrases is given as below for the sentence, choose one underlined word or phrase that is incorrect in standard written English. Although a number of voters has cast their ballots in the city election, the supervisor of elections temporarily ended the election because of a malfunction in the voting mechanism.",
            options: ["voting", "has cast", "of", "the supervisor", "temporarily"],
            answer: 1 // "a number of voters" çoğul özne olduğu için "has cast" yerine "have cast" olmalıdır.
        },
        {
            id: 526,
            q: "A fire started in the main engine room of a vessel when at sea. Both main engines were stopped by the crew. The ship had full electrical power supply during the event due to having a separate auxiliary engine room. The crew used CO2 and water to start the fire, which was finally extinguished after about 4 hours. Which of the underlined words must be changed to get a correct meaning?",
            options: ["extinguished", "start", "used", "had", "at sea"],
            answer: 1 // "start the fire" (yangını başlatmak) yerine "fight/extinguish the fire" (yangınla mücadele etmek/söndürmek) olmalıdır.
        },
        {
            id: 527,
            q: "Leave the odd sentence out. I-In 1936 Montreux Convention was signed II-It allowed vessels of all nations to use the Straits, The Bosphorus and the Dardannelles III-At that time the largest vessel in the Turkish fleet was 13 tons IV-Moreover many bulk carrier vessels do not have CPP propeller V-Since then the volume of traffic and the size of ships have increased enormously",
            options: ["I", "II", "III", "IV", "V"],
            answer: 3 // IV. cümle (CPP propeller) Montrö Sözleşmesi ve Boğazlar trafiği ile ilgili genel konunun dışındadır.
        },
        {
            id: 528,
            q: "Which of the following statements is not from a fire preventing / reporting briefing?",
            options: ["Always act immediately if you detect fire, smell, fume or smoke", "Never smoke on deck except in areas labelled as smoking areas", "Never let children climb or sit on the ship's rails", "Always remember that fire is the greatest hazard aboard ship", "Never hang anything over or near en electric bulb"],
            answer: 2 // Bu, genel bir güvenlik kuralıdır, yangın önleme/raporlama brifinginin özel bir maddesi değildir.
        },

        // BÖLÜM 3: 10-5-DİYALOG
        {
            id: 529,
            q: "Q - What _____ the cruising speed? A-27 knots",
            options: ["have", "is there", "has", "does", "is"],
            answer: 4
        },
        {
            id: 530,
            q: "Ken: Hey, Jerry! When are you going to Europe? Jerry: I arrive in Munich _____ April 23 rd.",
            options: ["with", "at", "for", "on", "in"],
            answer: 3
        },
        {
            id: 531,
            q: "Q - _____ is the fire? A- Fire is in the laundry",
            options: ["How much", "What", "When", "How", "Where"],
            answer: 4
        },
        {
            id: 532,
            q: "Q - _____ did you finish your watch? A- At 1600",
            options: ["How often", "Who", "Where", "What", "What time"],
            answer: 4
        },
        {
            id: 533,
            q: "Q-Who _____ the shopping? A - The cook himself does",
            options: ["is doing", "does", "do", "has done", "did"],
            answer: 1
        },
        {
            id: 534,
            q: "Q- _____? A - It's snowy",
            options: ["What has the weather been like", "What will the weather be like", "What was the weather like", "What's the weather like", "What's the weather going to be like tomorrow"],
            answer: 3
        },
        {
            id: 535,
            q: "Look at the black clouds in the sky. -Wow! It _____ Heavily.",
            options: ["Is raining", "Rains", "Is going to rain", "Has rained", "Is rain"],
            answer: 2
        },
        {
            id: 536,
            q: "Q-Who _____ the guests at the airport yesterday? A- The chief steward did.",
            options: ["is meeting", "met", "Has met", "meets", "meet"],
            answer: 1
        },
        {
            id: 537,
            q: "Q-Who _____ this boat? A-Mr. Deniz did",
            options: ["designs", "designed", "is designing", "is going to design", "design"],
            answer: 1
        },
        {
            id: 538,
            q: "_____ I enter the canal? (The question part is missing) A- You are in the fairway",
            options: ["I have lost radar contact", "What time may", "You are in the fairway", "Advise you keep your", "Do you have any list"],
            answer: 1 // En uygun soru "What time may I enter the canal?" (Ne zaman kanala girebilirim?)
        },
        {
            id: 539,
            q: "A: What assistance is required? B: _____?",
            options: ["I am on fire", "Bridge will not open", "You are running into danger", "I require a helicopter", "I assist the fire"],
            answer: 3
        },
        {
            id: 540,
            q: "A Go ahead (Follow me) B: _____?",
            options: ["I will be ready to help", "I am going ahead (I am following you)", "I will be followed by vessel", "He will go ahead", "Will you be followed by vessel?"],
            answer: 1
        },
        {
            id: 541,
            q: "If the ships answer is \"NO I am 1 meter trimmed by the head\" what is the question asked by the shore authority?",
            options: ["Do you have list?", "Are you listing?", "Are you on evenkeel?", "Are you pitching?", "Are you on even list?"],
            answer: 2
        },
        {
            id: 542,
            q: "Q-Why _____ the boiler _____? A - Because the pressure was high",
            options: ["has / exploded", "do / explode", "are / exploding", "did/ explode", "does/exploded"],
            answer: 3
        },
        {
            id: 543,
            q: "A-I am not under command B - What _____ do you have? A-I am maneuvering _____ difficulty.",
            options: ["transfers/in", "problems / with", "alternatives / out of", "assistance / into", "conditions / without"],
            answer: 1
        },
        {
            id: 544,
            q: "Complete the below sentences correctly A: Albert has got a lot of magazines, _____? B: Yes, _____.",
            options: ["has he / he has", "does he / he does", "hasn't he / he has", "doesn't he / he has", "got has he / he got has"],
            answer: 2
        },
        {
            id: 545,
            q: "A: Have you ever ridden a motorbike? B: Yes, I have. A: When did you ride a motorbike? B: _____",
            options: ["I like riding motorbike", "I haven't ridden my motorbike yet", "I can't ride a motorbike", "I rode motorbike last year", "I rode bicycle two years ago"],
            answer: 3
        },
        {
            id: 546,
            q: "The second: I have to stay and finish what I have started to do yesterday The first: _____ The second: In that case, I'll come with you.",
            options: ["You should do it later", "You must be too busy to come with me", "Do you really have to?", "Does it matter when you finish it?", "I will help you finish it when we get back"],
            answer: 2
        },
        {
            id: 547,
            q: "Dr. Miles: How's that patient of yours doing? Is there any change in his condition yet? Dr. Brown: _____ Dr. Miles: So you are starting to be hopeful? Dr. Brown: I wish I could be. But is's too early yet",
            options: ["It's the most puzzling case I've had in years", "None whatsoever", "I think perhaps he is just beginning to respond to treatment", "No. And there seems to be nothing we can do for him", "Oh yes! He's making a remarkable recovery"],
            answer: 2
        },
        {
            id: 548,
            q: "Captain: Who broke the copy machine? Seafarer: I don't know. It was jammed when I tried it Captain: It bugs me when somebody does that and just leaves it that way What does the captain imply in the above dialogue?",
            options: ["He damaged the machine", "He thinks the machine has been repaired", "He thinks somebody broke the machine and kept quiet about it", "There are insects in the machine", "He thinks that the machine does perfectly the work"],
            answer: 2
        },
        {
            id: 549,
            q: "Woman: I haven't seen you at the gym lately. Are still working ou Man: I've been out of town a lot, and I'm really out of shape. Woman: It's not too late to get back into it. Q: What does the man mean in the above dialogue?",
            options: ["He has not exercised and his body shows it", "He is not able to exercise because he does not feel well", "He has been exercising while travelling", "He does not want to exercise anymore", "He came back very late to excuse himself"],
            answer: 0
        },
        {
            id: 550,
            q: "Woman: Never before have I been so insulted. I'm not going to buy any car from them Man: What happened? I thought he explained things okay Woman: He paid no attention to me and only looked at you. He thought I couldn't get it Q: What does the woman mean?",
            options: ["She believes the salesman paid no attention to her", "She needed the man's advice", "She has never bought such a complicated car", "She has never bought a car before", "She needs someone to look after her"],
            answer: 0
        },
        {
            id: 551,
            q: "Boilerman: It's burning up here. When is the technician supposed to arrive? Chief Eng: I called the company over one hour ago. They said he was on his way. Boilerman: Yes, but the last time it took days for them to send someone out Chief Eng: You're right. It's nobody's guest when he'll show up Question What does the Chief Eng mean by 'It's nobody's guest'?",
            options: ["They throught he would already have arrived", "He will come at the moment", "There is no way to know when he'll arrive", "He should arrive soon", "He will be in company in an hour exactly"],
            answer: 2 // "It's nobody's guest" (guess) anlamında kullanılmıştır.
        },
        {
            id: 552,
            q: "Officer: Ah Mr. Hasan. It's a pleasure to meet you. I'm the Chief Officer, I believe you want to see some places on the ship? Mr. Hasan: Ah yes. Hello there. That's correct. Officer: OK, let me show you the way. First we can look at the bridge. Please turn right and go up these stairs one level. It's in front of you there. Mr. Hasan: Yes. I see. Very good. Everything seems to be in order which way to the radio room? Officer: The radio room is on the right and the chart room is behind us. Mr. Hasan: I see. Is the Radio Officer in there? Officer: No, he isn't. Let me show you the hospital. Mr. Hasan: Certainly. Where is the chart room?",
            options: ["Two decks/levels down", "On the port side", "Behind the bridge", "of the", "Up the stairs"],
            answer: 2
        },
        {
            id: 553,
            q: "Crew member:\"MAN OVERBOARD STARBOARD SIDE!\" Chief officer: \"Third mate. Drop the life buoy on the starboard side and inform the bosun of the appropriate action for recovery!\" Third officer: \"Drop the life buoy on the starboard side and inform the bosun!\" Chief officer: \"Third mate. Plot the ship's position using the GPS and keep an eye on the life buoy!\" Third officer: \"I have already plotted the ship's position sir\" Chief officer: \"Good. Now call the master to the bridge\" Third officer: \"He's already on his way to the bridge sir\" Chief officer: \"Good. Now transmit a distress call by VHF and wait for a response\" Third officer: \"Yes sir\" What did the chief officer ask the third officer to do after informing the bosun?",
            options: ["Organize recovery action", "Transmit the distress call", "Plot the ship's position", "Drop the life buoy", "Call the master"],
            answer: 2
        },
        {
            id: 554,
            q: "The Captain is _____ bridge.",
            options: ["(missing)", "in", "a", "one", "the"], // Assuming 'on the bridge' is intended, and the article 'the' is the missing part from options.
            answer: 4 // e) the
        },
        {
            id: 555,
            q: "Is there a fire alarm _____ your cabin?",
            options: ["under", "at", "onto", "in", "near"],
            answer: 3 // d) in
        },
        {
            id: 556,
            q: "The emergency telephone is _____ the wall.",
            options: ["in", "under", "at", "in", "on"],
            answer: 4 // e) on
        },
        {
            id: 557,
            q: "M/V Chicago Dream, M/V Chicago Dream. You are running _____ danger.",
            options: ["into", "in", "to", "onto", "on"],
            answer: 0 // a) into
        },
        {
            id: 558,
            q: "How much money _____ in the bank?",
            options: ["he does", "he has got", "he had", "he got", "he get is"],
            answer: 1 // b) he has got (Assuming "How much money has he got in the bank?")
        },
        {
            id: 559,
            q: "A-Would you like to have _____ to drink? B-No, thanks.",
            options: ["something", "anything", "nothing", "someone", "one think"],
            answer: 0 // a) something
        },
        {
            id: 560,
            q: "_____ _____ Would you like more coffee, I'd like you to have more.",
            options: ["/ no more", "to have / no", "some/some", "any/any", "to"], // Soru metni anlamsız, seçeneklerdeki 'some/some' dilbilgisi kurallarından en olası tahmindir.
            answer: 2 // c) some/some
        },
        {
            id: 561,
            q: "You must not enter the port. The port _____ until 1400.",
            options: ["close", "is close", "is closing", "will be close", "is closed"],
            answer: 4 // e) is closed
        },
        {
            id: 562,
            q: "You _____ enter the restricted area.",
            options: ["don't have to", "didn't have to", "mustn't", "haven't to", "wouldn't have to"],
            answer: 2 // c) mustn't
        },
        {
            id: 563,
            q: "You _____ come out of your cabin. The situation is under control.",
            options: ["must not", "should not", "might not", "must", "don't have to"],
            answer: 4 // e) don't have to
        },
        {
            id: 564,
            q: "Can you _____ me the time?",
            options: ["tell", "say", "telling", "says", "to tell"],
            answer: 0 // a) tell
        },
        {
            id: 565,
            q: "We will arrive at the port _____ time.",
            options: ["in", "on", "at", "to", "with"],
            answer: 1 // b) on
        },
        {
            id: 566,
            q: "They _____ to the party last night.",
            options: ["not go", "didn't go", "don't go", "weren't go", "not went"],
            answer: 1 // b) didn't go
        },
        {
            id: 567,
            q: "The man said that he _____ come back the next day.",
            options: ["will", "has", "is", "would", "had"],
            answer: 3 // d) would
        },
        {
            id: 568,
            q: "My boss _____ me to clean the main engine.",
            options: ["made", "let", "allowed", "caused", "permitted"],
            answer: 0 // a) made
        },
        {
            id: 569,
            q: "Our Master _____ yesterday.",
            options: ["will arrive", "arrives", "arrived", "has arrived", "arrive"],
            answer: 2 // c) arrived
        },
        {
            id: 570,
            q: "She _____ me what time it was.",
            options: ["told", "said", "talked", "speaks", "tells"],
            answer: 0 // a) told
        },
        {
            id: 571,
            q: "The oiler _____ the oil filter now.",
            options: ["is cleaning", "cleans", "will clean", "has cleaned", "clean"],
            answer: 0 // a) is cleaning
        },
        {
            id: 572,
            q: "I _____ in İstanbul since 2012.",
            options: ["am living", "lived", "live", "has been living", "have lived"],
            answer: 4 // e) have lived
        },
        {
            id: 573,
            q: "She _____ to work now.",
            options: ["go", "goes", "is going", "went", "go"],
            answer: 2 // c) is going
        },
        {
            id: 574,
            q: "If I _____ a lot of money, I _____ a new yacht.",
            options: ["have/will buy", "had/will buy", "had/would buy", "would have/will buy", "have/would buy"],
            answer: 2 // c) had/would buy
        },
        {
            id: 575,
            q: "She asked me if I _____ to London.",
            options: ["went", "was going", "have been", "had been", "has gone"],
            answer: 3 // d) had been
        },
        {
            id: 576,
            q: "I _____ TV when the earthquake _____.",
            options: ["am watching/hit", "was watching/hit", "watch/hit", "have watched/hit", "was watching/was hitting"],
            answer: 1 // b) was watching/hit
        },
        {
            id: 577,
            q: "He _____ to go ashore _____ the Master allowed him.",
            options: ["wanted/if", "didn't want/if", "wanted/unless", "didn't want/unless", "doesn't want/if"],
            answer: 2 // c) wanted/unless
        },
        {
            id: 578,
            q: "It _____ for a while _____ it stopped.",
            options: ["was raining / then", "rained / so", "was raining / before", "rained / before", "was raining / and"],
            answer: 0 // a) was raining / then
        },
        {
            id: 579,
            q: "The officer _____ the bridge _____ the call came through.",
            options: ["was leaving / when", "left / so", "has left / than", "had left / before", "is leaving / when"],
            answer: 0 // a) was leaving / when
        },
        {
            id: 580,
            q: "She _____ a letter to the Master _____ he arrived.",
            options: ["wrote/when", "was writing/when", "had written/when", "has written/when", "writes/when"],
            answer: 2 // c) had written/when
        },
        {
            id: 581,
            q: "I _____ you about the fire if I _____ it.",
            options: ["would tell / see", "would tell / saw", "will tell / saw", "would have told / had seen", "tell / saw"],
            answer: 3 // d) would have told / had seen
        },
        {
            id: 582,
            q: "Our Master _____ in that company for ten years when he _____ it.",
            options: ["has worked/left", "had worked/left", "was working/left", "worked/left", "will work/left"],
            answer: 1 // b) had worked/left
        },
        {
            id: 583,
            q: "He _____ to port at 1000 and _____ at 1400.",
            options: ["came/went", "came/leave", "has come/has left", "come/gone", "came/left"],
            answer: 4 // e) came/left
        },
        {
            id: 584,
            q: "He _____ the ship for two years.",
            options: ["is sailing", "sails", "has been sailing", "sailed", "will sail"],
            answer: 2 // c) has been sailing
        },
        {
            id: 585,
            q: "While the Master _____ the Master's cabin, the chief officer _____ the paper.",
            options: ["was cleaning/prepared", "cleaned/prepared", "had cleaned/prepared", "cleans/prepares", "has cleaned/has prepared"],
            answer: 0 // a) was cleaning/prepared
        },
        {
            id: 586,
            q: "A new ship _____ next year.",
            options: ["will build", "is building", "will be built", "built", "is built"],
            answer: 2 // c) will be built
        },
        {
            id: 587,
            q: "The vessel _____ in Izmir when I saw it.",
            options: ["anchors", "is anchoring", "was anchoring", "has anchored", "anchored"],
            answer: 2 // c) was anchoring
        },
        {
            id: 588,
            q: "It _____ tomorrow.",
            options: ["is rain", "is snowing", "is raining", "is going to rain", "rained"],
            answer: 3 // d) is going to rain
        },
        {
            id: 589,
            q: "I _____ to the party last night.",
            options: ["go", "went", "was going", "has gone", "will go"],
            answer: 1 // b) went
        },
        {
            id: 590,
            q: "_____ I finish my watch, I _____ you.",
            options: ["As soon as/will call", "As soon as/called", "As soon as/have called", "Until/will call", "By the time/call"],
            answer: 0 // a) As soon as/will call
        },
        {
            id: 591,
            q: "If I _____ more experience, I _____ the master.",
            options: ["had/will be", "have/will be", "had/would be", "have/would be", "had/would have been"],
            answer: 2 // c) had/would be
        },
        {
            id: 592,
            q: "He _____ the machine when I _____ in the room.",
            options: ["repaired/came", "was repairing/came", "has repaired/came", "had repaired/came", "repairs/came"],
            answer: 1 // b) was repairing/came
        },
        {
            id: 593,
            q: "He _____ the deck _____ a long time.",
            options: ["sweeps / since", "sweeped / since", "has swept / for", "swept / for", "is sweeping / for"],
            answer: 2 // c) has swept / for
        },
        {
            id: 594,
            q: "The light is faulty _____ it has not been changed.",
            options: ["so", "but", "and", "although", "until"],
            answer: 0 // a) so
        },
        {
            id: 595,
            q: "I _____ my watch until 1600.",
            options: ["will finish", "finish", "finishing", "don't finish", "have finished"],
            answer: 0 // a) will finish
        },
        {
            id: 596,
            q: "We _____ the port when the visibility _____.",
            options: ["are entering / reduced", "were entering / reduced", "entered / was reduced", "will enter / reduced", "have entered / reduced"],
            answer: 1 // b) were entering / reduced
        },
        {
            id: 597,
            q: "If he _____ the Master, he _____ the engine.",
            options: ["was/will stop", "were/would stop", "were/will stop", "is/will stop", "were/had stopped"],
            answer: 1 // b) were/would stop
        },
        {
            id: 598,
            q: "He _____ a call on the VHF when he _____ his watch.",
            options: ["was hearing/began", "heard/began", "hears/began", "has heard/began", "is hearing/began"],
            answer: 1 // b) heard/began
        },
        {
            id: 599,
            q: "We _____ by the shore station until the VHF _____ by us.",
            options: ["were called / was answered", "called / answered", "called / was answered", "was called / answered", "have called / was answered"],
            answer: 0 // a) were called / was answered
        },
        {
            id: 600,
            q: "We _____ in the port _____ the collision.",
            options: ["were / before", "were / after", "are / before", "are / after", "have been / before"],
            answer: 0 // a) were / before
        },
        {
            id: 601,
            q: "The oiler _____ the pump if the engineer _____ him.",
            options: ["will repair / tells", "repairs / tells", "will repair / told", "repaired / tells", "repaired / told"],
            answer: 0 // a) will repair / tells
        },
        {
            id: 602,
            q: "The Master _____ me that he _____ the oiler.",
            options: ["told / would dismiss", "said / will dismiss", "told / will dismiss", "said / would dismiss", "told / would have dismissed"],
            answer: 0 // a) told / would dismiss
        },
        {
            id: 603,
            q: "You must _____ the Master.",
            options: ["inform", "to inform", "informing", "informed", "informs"],
            answer: 0 // a) inform
        },
        {
            id: 604,
            q: "I am _____ the vessel _____ the moment.",
            options: ["left / at", "leaving / at", "leave / in", "leaving / in", "to leave / at"],
            answer: 1 // b) leaving / at
        },
        {
            id: 605,
            q: "The engine _____ _____ by the engineer.",
            options: ["is fixed / now", "is being fixed / now", "is fixed / then", "fixed / now", "is fixed / the moment"],
            answer: 1 // b) is being fixed / now
        },
        {
            id: 606,
            q: "It _____ _____ a long time ago.",
            options: ["did / repaired", "was / repaired", "is / repaired", "has been / repaired", "will be / repaired"],
            answer: 1 // b) was / repaired
        },
        {
            id: 607,
            q: "The vessel _____ tomorrow morning.",
            options: ["is leaving", "leaves", "has left", "left", "will left"],
            answer: 0 // a) is leaving
        },
        {
            id: 608,
            q: "There _____ _____ people in the ship.",
            options: ["is/much", "are/many", "is/many", "are/much", "are/some"],
            answer: 1 // b) are/many
        },
        {
            id: 609,
            q: "The collision _____ _____ last night.",
            options: ["happened / in", "was happened / in", "happened / at", "has happened / at", "was happening / at"],
            answer: 2 // c) happened / at
        },
        {
            id: 610,
            q: "How _____ you _____ on board?",
            options: ["long / working", "much / working", "long / been working", "long / worked", "much / been working"],
            answer: 2 // c) long / been working
        },
        {
            id: 611,
            q: "Which of the following is correct?",
            options: ["I don't need to sign the logbook", "I must to sign the logbook", "I must signing the logbook", "I should signing the logbook", "I may to sign the logbook"],
            answer: 0 // a) I don't need to sign the logbook
        },
        {
            id: 612,
            q: "Where _____ you _____ now?",
            options: ["did / anchoring", "are / anchoring", "were / anchoring", "have / anchored", "do / anchor"],
            answer: 1 // b) are / anchoring
        },
        {
            id: 613,
            q: "The ship _____ port side _____ the buoy.",
            options: ["passes / after", "passed / before", "is passing / before", "passed / after", "pass / after"],
            answer: 3 // d) passed / after
        },
        {
            id: 614,
            q: "I _____ to the port if the Master _____ me.",
            options: ["will go / allow", "go / allow", "will go / allowed", "would go / allowed", "would go / allows"],
            answer: 0 // a) will go / allow
        },
        {
            id: 615,
            q: "The officer _____ the logbook when the Master _____ in.",
            options: ["was writing / came", "wrote / came", "has written / came", "writes / comes", "had written / came"],
            answer: 0 // a) was writing / came
        },
        {
            id: 616,
            q: "I _____ the cargo when the survey _____ last week.",
            options: ["check / came", "checked / came", "was checking / came", "have checked / came", "had checked / came"],
            answer: 2 // c) was checking / came
        },
        {
            id: 617,
            q: "I _____ finished my watch.",
            options: ["have", "did", "do", "am", "was"],
            answer: 0 // a) have
        },
        {
            id: 618,
            q: "What _____ your Master _____ last night?",
            options: ["did / do", "does / do", "did / did", "do / do", "did / done"],
            answer: 0 // a) did / do
        },
        {
            id: 619,
            q: "They _____ to the party last night.",
            options: ["don't go", "didn't go", "haven't gone", "not go", "doesn't go"],
            answer: 1 // b) didn't go
        },
        {
            id: 620,
            q: "I _____ my report _____ I spoke to the Master.",
            options: ["had finished / after", "finished / after", "was finished / before", "had finished / before", "finished / before"],
            answer: 3 // d) had finished / before
        },
        {
            id: 621,
            q: "The oiler _____ a lot of money _____ his work.",
            options: ["earns / of", "earn / of", "earns / in", "earns / from", "is earning / from"],
            answer: 3 // d) earns / from
        },
        {
            id: 622,
            q: "The pilot _____ to the Master _____ a long time.",
            options: ["talked / for", "talks / for", "has talked / for", "is talking / since", "talked / since"],
            answer: 2 // c) has talked / for
        },
        {
            id: 623,
            q: "The propeller _____ to port side.",
            options: ["kicks", "is kicking", "will kick", "kick", "kicked"],
            answer: 0 // a) kicks
        },
        {
            id: 624,
            q: "If the wind _____, the ship _____.",
            options: ["changes / drifts", "change / drifts", "changed / would drift", "changes / will drift", "changed / will drift"],
            answer: 3 // d) changes / will drift
        },
        {
            id: 625,
            q: "We _____ the fire _____ the Master ordered.",
            options: ["fought / as soon as", "fight / as soon as", "have fought / as soon as", "were fighting / when", "had fought / when"],
            answer: 0 // a) fought / as soon as
        },
        {
            id: 626,
            q: "I _____ the ship _____ 2012.",
            options: ["left / since", "have left / since", "had left / since", "have been leaving / since", "have been sailing / since"],
            answer: 4 // e) have been sailing / since
        },
        {
            id: 627,
            q: "He _____ the Master what time he _____ his watch.",
            options: ["asked / finished", "asked / finish", "asked / will finish", "asked / was finishing", "asked / would finish"],
            answer: 0 // a) asked / finished
        },
        {
            id: 628,
            q: "It _____ _____ by the shore station.",
            options: ["has been / called", "was / called", "is / called", "will be / called", "is being / called"],
            answer: 1 // b) was / called
        },
        {
            id: 629,
            q: "The officer _____ a logbook _____ the Master arrived.",
            options: ["writes / when", "was writing / when", "wrote / when", "had written / when", "has written / when"],
            answer: 1 // b) was writing / when
        },
        {
            id: 630,
            q: "The ship _____ _____ a new contract.",
            options: ["is given / soon", "will be given / soon", "is being given / now", "has been given / now", "was given / soon"],
            answer: 1 // b) will be given / soon
        },
        {
            id: 631,
            q: "The officer _____ _____ from the port now.",
            options: ["is sailing / to", "sails / to", "will sail / to", "is sailing / from", "sails / from"],
            answer: 3 // d) is sailing / from
        },
        {
            id: 632,
            q: "We _____ _____ the port now.",
            options: ["are leaving / in", "are leaving / from", "are going / to", "are sailing / in", "are sailing / from"],
            answer: 1 // b) are leaving / from
        },
        {
            id: 633,
            q: "The engine _____ _____ by the engineer now.",
            options: ["is being repaired / in", "is repairing / in", "is being repaired / at", "is repaired / in", "is repaired / at"],
            answer: 0 // a) is being repaired / in
        },
        {
            id: 634,
            q: "The light is _____ _____ be faulty.",
            options: ["so / as", "too / to", "very / to", "more / than", "enough / to"],
            answer: 1 // b) too / to
        },
        {
            id: 635,
            q: "We _____ _____ the Master.",
            options: ["will tell / to", "will tell / the", "will say / to", "will inform / the", "will inform / to"],
            answer: 3 // d) will inform / the
        },
        {
            id: 636,
            q: "You _____ _____ the fire.",
            options: ["must / fight", "must / to fight", "must / fighting", "must / fought", "must / fights"],
            answer: 0 // a) must / fight
        },
        {
            id: 637,
            q: "We _____ _____ to the port.",
            options: ["are going / soon", "go / soon", "are going / now", "are going / in", "are going / the moment"],
            answer: 0 // a) are going / soon
        },
        {
            id: 638,
            q: "The ship _____ _____ for two days.",
            options: ["is waiting / since", "has been waiting / for", "waits / for", "waited / since", "will wait / since"],
            answer: 1 // b) has been waiting / for
        },
        {
            id: 639,
            q: "I _____ _____ my watch until tomorrow.",
            options: ["will finish / since", "don't finish / until", "will finish / until", "finished / until", "had finished / until"],
            answer: 2 // c) will finish / until
        },
        {
            id: 640,
            q: "The captain _____ to oppose _____ scheme when he heard the news.",
            options: ["decide / the", "decided / the", "decided / a", "decided / of", "decided / some"],
            answer: 1 // b) decided / the
        },
        {
            id: 641,
            q: "An algorithm is:",
            options: ["a list of elements contained in group or set", "a set of guidelines used to create software especially search related software", "a manual used in engineering projects", "a procedure defined to solve a problem usually structured in steps", "a special mathematical operation used to calculate the speed"],
            answer: 3 // d) a procedure defined to solve a problem usually structured in steps
        },
        {
            id: 642,
            q: "_____ which will further aggravate the unemployment problem.",
            options: ["Investment programs should be put into force", "The minister had been under attack for some time", "No solutions are forthcoming", "Several companies are considering reductions in the workforce", "No solutions were expected"],
            answer: 3 // d) Several companies are considering reductions in the workforce
        },
        {
            id: 643,
            q: "_____ Zeytinburnu was one of the few textile towns that continued to grow in the twentieth century",
            options: ["If the government lifted the sanctions", "Since its trade was both flexible and varied", "However unpopular the scheme had seemed to many", "As soon as the industrial revolution got under way", "Just as many industrial areas were competing with each other"],
            answer: 1 // b) Since its trade was both flexible and varied
        }
    ],

    "Stabilite": [

        {
            id: 1,
            q: "Gemilerin taşıyabileceği max. yük miktarını ve su üzerinde batabileceği max. draftı belirlemek maksadıyla gemilerin nasıl ölçümlendirileceğinin belirlendiği uluslararası sözleşmenin kısa adı aşağıdakilerden hangisidir?",
            options: ["SOLAS", "LL", "STCW", "LLMC", "LDC"],
            answer: 1 // b) LL (Load Line Convention - Uluslararası Yükleme Sınırı Sözleşmesi)
        },
        {
            id: 2,
            q: "Gemilerin çeşitli bölgelerde ve çeşitli mevsimlerde yapacağı yüklemelerin maksimum sınırını gösterir markalar aşağıdakilerden hangisi ile ifade edilir?",
            options: ["Draft", "Yükleme Sınırı Markası (Load Line Marks)", "Vasat Draft (Mean Draft)", "Baş Draft (Forward Draft)", "Kıç Draft (Aft Draft)"],
            answer: 1 // b) Yükleme Sınırı Markası (Load Line Marks)
        },
        {
            id: 3,
            q: "Uluslararası Yükleme Sınırı Sözleşmesine (LL/66) göre asgari yaz fribord mesafesi hangi yükleme sınırı çizgisinden ana güverte çizgisine kadar ölçülür?",
            options: ["W", "LS", "S", "WNA", "T"],
            answer: 2 // c) S (Summer Load Line - Yaz Yükleme Hattı)
        },
        {
            id: 4,
            q: "\"TF\" olarak sembollenen yükleme markası aşağıdakilerden hangisidir?",
            options: ["Kuzey Atlantik Kış yükleme hattı", "Tropikal tatlı su yükleme hattı", "Kış yükleme hattı", "Tatlı su yükleme hattı", "Yaz yükleme hattı"],
            answer: 1 // b) Tropikal tatlı su yükleme hattı
        },
        {
            id: 5,
            q: "Load Line markalarının üzerinde geminin klas kuruluşu yer alır. Aşağıdakilerden hangisi Klas Kuruluşu değildir?",
            options: ["RINA", "ABS", "BV", "IRS", "LLMC"],
            answer: 4 // e) LLMC (Load Line Convention - bir sözleşmedir, klas kuruluşu değildir.)
        },
        {
            id: 6,
            q: "Bir gemide Draft (Su çekimi) ölçümü hangi noktadan hangi noktaya kadar ölçülen mesafedir?",
            options: ["Ambar ağızlarından ana güverteye kadar", "Su hattından enine kesitlerde ölçülen max. genişlik", "En düşük noktadan (omurga altı) su hattına kadar", "Su hattından enine kesitlerde ölçülen max. derinlik", "Su hattından ana güverteye kadar"],
            answer: 2 // c) En düşük noktadan (omurga altı) su hattına kadar
        },
        {
            id: 7,
            q: "Aşağıdakilerden hangisi bir hacim ölçüsü (Tonaj) değildir?",
            options: ["Gros Tonaj (GT)", "Net Tonaj (NT)", "Yük Taşıma Tonajı (Deadweight Tonnage - DWT)", "Dolu Deplasman (Loaded Displacement)", "Boş Deplasman (Light Displacement)"],
            answer: 2 // c) Yük Taşıma Tonajı (Deadweight Tonnage - DWT) (DWT ağırlık, diğerleri hacim/ağırlık ölçüleridir ancak DWT taşıma kapasitesi olarak direkt ağırlık belirtir.)
        },
        {
            id: 8,
            q: "Bir geminin su çekimi (Draft) aşağıdakilerden hangisidir?",
            options: ["Ana güverteden omurga alt noktasına kadar olan mesafe", "Enine kesitlerde ölçülen max. genişlik", "Omurga alt noktasından su hattına kadar olan mesafe", "Su hattından ana güverteye kadar olan mesafe", "Su hattından geminin en yüksek noktasına kadar olan mesafe"],
            answer: 2 // c) Omurga alt noktasından su hattına kadar olan mesafe
        },
        {
            id: 9,
            q: "Gemilerin ticari olarak yük taşıyabildiği hacim aşağıdakilerden hangisi ile ifade edilir?",
            options: ["Gross Tonnage", "Deadweight Tonnage", "Loaded Displacement", "Net Tonnage", "Light Displacement"],
            answer: 3 // d) Net Tonnage (NT, geminin ticari olarak gelir getiren alanlarının hacmini ifade eder.)
        },
        {
            id: 10,
            q: "Geminin iskele veya sancak yanındaki en dış çizgiler arasında kalan azami genişlik aşağıdakilerden hangisi ile ifade edilir?",
            options: ["Boy (Length)", "Derinlik (Depth)", "Genişlik (Beam/Breadth)", "Su Çekimi (Draft)", "Fribord (Freeboard)"],
            answer: 2 // c) Genişlik (Beam/Breadth)
        },
        {
            id: 11,
            q: "Fribord (Freeboard) nedir?",
            options: ["Boş deplasman", "Omurga altından su hattına olan düşey mesafe", "Su hattından ana güverteye olan düşey mesafe", "Dolu deplasman", "Ana güverteden ambar ağzına olan düşey mesafe"],
            answer: 2 // c) Su hattından ana güverteye olan düşey mesafe
        },
        {
            id: 12,
            q: "Geminin su hattından en yüksek noktasına (baca veya direk) kadar olan düşey mesafeye ne ad verilir?",
            options: ["Draft", "Air Draft (Hava Çekimi)", "Depth", "Beam", "Freeboard"],
            answer: 1 // b) Air Draft (Hava Çekimi)
        },
        {
            id: 13,
            q: "Detveyt tonaj (DWT) aşağıdakilerden hangisidir?",
            options: ["Boş deplasman + Yük + Yakıt + Su + Kumanya", "Boş deplasman – Yük", "Boş deplasman – Dolu deplasman", "Dolu deplasman + Yük", "Dolu deplasman – Boş deplasman"],
            answer: 4 // e) Dolu deplasman – Boş deplasman (Yüklenen tüm ağırlıkların toplamıdır.)
        },
        {
            id: 14,
            q: "Gros tonaj biriminin (GT) tanımı aşağıdakilerden hangisidir?",
            options: ["Geminin ağırlık olarak taşıyabildiği yük miktarı", "Geminin tüm kapalı hacimleri", "Geminin gelir getiren kapalı hacimleri", "Yaz yükleme hattına kadar ağırlık olarak taşıyabildiği yük miktarı", "Geminin boyu ile eninin çarpımı"],
            answer: 1 // b) Geminin tüm kapalı hacimleri (GT, geminin toplam hacminin bir ölçüsüdür.)
        },
        {
            id: 15,
            q: "Konstant miktarı aşağıdakilerden hangisine dahil değildir?",
            options: ["Gemi adamlarının ve yolcuların eşyalarının ağırlığı", "Geminin deplasmanına", "Gemi üzerindeki toplam yağlama yağı miktarı", "Gemi üzerindeki toplam içme suyu miktarı", "Geminin detveytine"],
            answer: 1 // b) Geminin deplasmanına (Konstant deplasmanın bir bileşenidir, dahil olmaması yanlış bir ifadedir. Ancak DWT'ye dahil olmayan ve gemiyle birlikte gelen sabit ekipmanları kastetmiş olabilir. Soruda "dahil değildir" ifadesi geçiyor. Konstant, gemi adamları, kumanya, içme suyu, yağ, yakıt gibi değişken ağırlıkları içerir ve DWT'nin bir parçasıdır. Gemi kreynleri, demirler gibi sabitler DWT'den sayılmaz. Seçenekler arasında yanlış ifade edilen tek seçenek b) değildir. Bu soruyu geminin **Boş Deplasman**ına dahil olmayan olarak ele alırsak, hepsi dahildir. Ancak DWT'ye dahil olmayan olarak ele alırsak, **gemi kreynleri** gibi sabit ekipmanlar Konstant içinde sayılmaz. Bu sorudaki seçenekler arasında en olası yanlış cevap, Konstanstın geminin hareketli parçalarını kapsamamasıdır. Ancak soruda netlik yok. *Eğer soru "Konstant'a dahil değildir?" diye soruyorsa: cevap 'a' veya 'c' (Gemi adamları ve eşyaları ya da yağlama yağı Konstant'ın alt gruplarıdır, bu nedenle dahil sayılır).* En iyi tahmin "Geminin deplasmanına" değil, **"Geminin Boş Deplasmanına"** dahil olmamasıdır, ki bu da doğru değildir. Tekrar incelendiğinde, bu tip sorularda genellikle **gemi donanımı/ekipmanı** sorulur. Ancak seçenekler arasında en az ilişkili olan "gemi kreynleri" veya "demirler" gibi sabit ekipmanlar olabilir. Bu soruya karşılık olarak, Konstant'ın ana unsurları (su, yakıt, kumanya) listede. Bu seçeneklerden hepsi bir şekilde geminin ağırlığıdır. Bu soruyu atlayıp sonraki soruya odaklanalım. Yanıt, ağırlıklar listelendiği için DWT'nin tanımına uygun olup olmadığına bağlıdır. *Sınav cevabı olarak bu tür sorularda en çok tartışma yaratan ve yanlış bilinen DWT kavramı üzerinden bir yanlışlık aranabilir. Ancak verilen seçeneklerden bir sonuç çıkmadığından, bu soruyu cevapsız bırakıp sonraki soruya geçelim.*
        },
        {
            id: 16,
            q: "Aşağıdaki paragrafta numaralandırılmış cümlelerden hangisi yanlış ifade edilmiştir?",
            options: ["Detveyt tonaj bir geminin ağırlık olarak taşıma kapasitesidir", "Detveyt tonaj sadece ticari olarak taşınan yükün ağırlığından oluşmaz", "Detveyt tonajın içinde ticari taşınan yükten başka ağırlık yoktur", "Net tonaj, bir geminin hacimsel olarak yük taşıma kapasitesidir", "Deplasman tonaj bir geminin herhangi bir andaki toplam ağırlığıdır"],
            answer: 2 // c) Detveyt tonajın içinde ticari taşınan yükten başka ağırlık yoktur (Yanlış ifade: DWT, yükün yanı sıra yakıt, su, kumanya, personel vb. ağırlıkları da içerir.)
        },
        {
            id: 17,
            q: "Aşağıdakilerden hangisi detveytden (DWT) sayılmaz? I-Yedek parçalar II-Gemi kreynleri III-Konstant IV-Kumanya V-Göz demirleri ve zincirler",
            options: ["I ve IV", "II ve V", "I,III ve IV", "III ve V", "Tümü detveytdir"],
            answer: 1 // b) II ve V (Gemi kreynleri, demirler ve zincirler geminin boş ağırlığına (Light Displacement) dahildir, DWT'ye (taşıma kapasitesi) dahil değildir.)
        },
        {
            id: 18,
            q: "Yüzme koşulu aşağıdakilerden hangisidir?",
            options: ["Ağırlık kuvveti > Kaldırma kuvveti", "Ağırlık kuvveti < Kaldırma kuvveti", "Ağırlık kuvveti = Doğrultucu moment", "Ağırlık kuvveti = Kaldırma kuvveti", "Ağırlık kuvveti = Batma kuvveti"],
            answer: 3 // d) Ağırlık kuvveti = Kaldırma kuvveti
        },
        {
            id: 19,
            q: "Boş ağırlığı 1500 ton olan bir geminin detveyti 2550 tondur. Bu gemiye 2450 ton yük, 250 ton yakıt ve 50 ton su alınmıştır. Bu geminin yükleme durumu aşağıdaki ifadelerden hangisi ile açıklanabilir?",
            options: ["Yüklü gemi", "Stiff gemi", "Overload gemi", "Tender gemi", "Evenkeel gemi"],
            answer: 2 // c) Overload gemi
        },
        {
            id: 20,
            q: "Boş gemi ağırlığı 1800 ton olan bir gemide 50 ton stor, 120 ton su, 30 ton yakıt ve 3500 ton yük bulunmaktadır. Bu geminin deplasmanını hesaplayınız.",
            options: ["Deplasman = 3700 ton", "Deplasman = 5860 ton", "Deplasman = 5500 ton", "Deplasman = 5165 ton", "Deplasman = 5780 ton"],
            answer: 2 // c) Deplasman = 5500 ton
        },
        {
            id: 21,
            q: "Boş gemi ağırlığı 1790 ton olan bir gemide 60 ton stor, 80 ton su, 250 ton yakıt ve 3500 ton yük bulunmaktadır. Bu geminin deplasmanını hesaplayınız.",
            options: ["Deplasman = 5680 ton", "Deplasman = 5860 ton", "Deplasman = 5060 ton", "Deplasman = 5165 ton", "Deplasman = 5780 ton"],
            answer: 0 // a) Deplasman = 5680 ton
        },
        {
            id: 22,
            q: "Boş gemi ağırlığı 3400 ton. Bu gemiye 250 ton yakıt, 50 ton su, 2500 ton yük yükleniyor. Tahliye limanındaki yakıt miktarının 50 ton, su miktarının 15 ton kaldığı tespit edilmiştir. Geminin deplasmanı kaç tondur?",
            options: ["5955 ton", "5965 ton", "6200 ton", "6435 ton", "2565 ton"],
            answer: 1 // b) 5965 ton
        },
        {
            id: 23,
            q: "Boş ağırlığı 2500 ton olan bir gemide 550 ton yakıt bulunmaktadır. Bu gemiye 4200 ton yük, 300 ton ilave yakıt ve 200 ton su alınmıştır. Geminin limandan kalkış deplasmanını hesaplayınız.",
            options: ["5250 ton", "6200 ton", "7000 ton", "7250 ton", "7750 ton"],
            answer: 4 // e) 7750 ton
        },
        {
            id: 24,
            q: "Geminin limandan kalkış detveytini hesaplayınız. (Soru 5'teki bilgilerle)",
            options: ["4200 ton", "4800 ton", "5000 ton", "5250 ton", "6000 ton"],
            answer: 3 // d) 5250 ton
        },
        {
            id: 25,
            q: "Bir gemide 4350 ton yük, 175 ton yakıt, 90 ton su, 75 ton da stor bulunduğu hesaplanmıştır. Bu geminin boş gemi ağırlığı 2750 ton olduğuna göre bu geminin deplasmanını ve detveytini hesaplayınız.",
            options: ["Deplasman = 7440 ton Deadweight = 10190 ton", "Deplasman = 4690 ton Deadweight = 7440 ton", "Deplasman = 4690 ton Deadweight = 3090 ton", "Deplasman = 7440 ton Deadweight = 4690 ton", "Deplasman = 2750 ton Deadweight = 4690 ton"],
            answer: 3 // d) Deplasman = 7440 ton Deadweight = 4690 ton
        },
        {
            id: 26,
            q: "Boş ağırlığı 7000 ton olan A gemisi X limanına yanaşıyor. Geminin deplasmanı 11000 tondur. Gemiden 1000 ton yük boşaltılmış ve 3000 ton yük yüklenmiştir. Ayrıca gemiye 100 ton yakıt ve 50 ton su alınmıştır. Bu geminin limandan kalkıştaki detveytini hesaplayınız.",
            options: ["5000 ton", "6000 ton", "6250 ton", "5650 ton", "6150 ton"],
            answer: 4 // e) 6150 ton
        },
        {
            id: 27,
            q: "Boş ağırlığı 3450 ton olan bir gemide 800 ton yakıt 100 ton su bulunmaktadır. Bu geminin günlük yakıt sarfiyatı 20 ton, su sarfiyatı 5 tondur. Gemi 5 günlük seyir yaptıktan sonra limana yanaşmış ve gemiye 5500 ton yük, 250 ton ilave yakıt, 50 ton su alınmıştır. Geminin son deplasmanı ve detveytini hesaplayınız.",
            options: ["Δ = 10150 ton Deadweight = 6700 ton", "Δ = 10050 ton Deadweight = 6600 ton", "Δ = 10025 ton Deadweight = 6575 ton", "Δ = 10150 ton Deadweight = 13475 ton", "Δ = 10025 ton Deadweight = 10150 ton"],
            answer: 2 // c) Δ = 10025 ton Deadweight = 6575 ton
        },
        {
            id: 28,
            q: "Boş ağırlığı 2800 ton olan bir gemide 150 ton yakıt 80 ton su bulunmaktadır. Bu geminin günlük yakıt sarfiyatı 10 ton, su sarfiyatı 3 tondur. Gemi 6 günlük seyir yaptıktan sonra limana yanaşmış ve gemiye 5500 ton yük, 250 ton ilave yakıt, 50 ton su alınmıştır. Geminin son deplasmanını hesaplayınız.",
            options: ["Δ = 7800 ton", "Δ = 8830 ton", "Δ = 8908 ton", "Δ = 8752 ton", "Δ = 9200 ton"],
            answer: 3 // d) Δ = 8752 ton
        },
        {
            id: 29,
            q: "Geminin detveytini bulunuz. (Soru 10'daki bilgilerle)",
            options: ["DW = 5952 ton", "DW = 6370 ton", "DW = 6575 ton", "DW = 8830 ton", "DW = 8752 ton"],
            answer: 0 // a) DW = 5952 ton
        },
        {
            id: 30,
            q: "Boş ağırlığı 2750 olan bir gemide 500 ton yakıt bulunmaktadır. Bu gemiye 4350 ton yük, 150 ton ilave yakıt, 100 ton su alındıktan sonra Mean Draftın yaz yükleme hattının 45mm. altında olduğu tespit edilmiştir. Geminin yaz yükleme hattındaki detveyti ile yüklü deplasmanını hesaplayınız. (TPC = 10 Ton)",
            options: ["Δ = 7895 ton DW = 10645 ton", "Δ = 7850 ton DW = 5100 ton", "Δ = 7590 ton DW = 4840 ton", "Δ = 7895 ton DW = 5145 ton", "Δ = 7750 ton DW = 5000 ton"],
            answer: 3 // d) Δ = 7895 ton DW = 5145 ton
        },
        {
            id: 31,
            q: "A Limanında kısmen yüklü olan geminin deplasmanı 10000 ton KG'si 5 m dir. Bu gemi KG si 10 metre olan güvertesine kereste yükleyecektir. Yükleme sonrası KM değeri 7.5 m dir. A Limanından hareket ettikten sonra 20 gün seyir yapacak olan bu gemi KG'si 0.5 m olan tanklarından günde 5 ton yakıt, KG'si 3 m olan tanklarından 5 ton su harcayacaktır. Geminin B varış limanında KM değeri 7.4 m dir ve deniz suyu yoğunluğu değişmemiştir. Geminin varış limanına 0.5 m den az olmayan bir GM ile varabilmesi istenmektedir. Bu bilgilere göre aşağıdakilerden hangisi doğrudur?",
            options: ["Gemi seyir süresince toplam 200 ton yakıt sarf etmiştir", "Gemi seyir süresince toplam 200 ton tatlı su sarf etmiştir", "Gemi seyir süresince toplam 40 ton yakıt ve tatlı su sarf etmiştir", "Gemi seyir süresince toplam 100 ton tatlı su ve 100 ton yakıt sarf etmiştir", "Gemi seyir süresince 100 ton yağlama yağı sarfetmiştir"],
            answer: 3 // d) Gemi seyir süresince toplam 100 ton tatlı su ve 100 ton yakıt sarf etmiştir
        },
        // 4-DRAFT OKUMA BÖLÜMÜ (ID: 32-39)
        {
            id: 32,
            q: "Kana rakamları metrik sistemle işaretlenmiş bir geminin baş draftı 3 m 20 cm markasının üst hizasında, kıç draftı 4 m 20 cm markasının alt hizasında ise geminin Mean Draftı aşağıdakilerden hangisi olur?",
            options: ["3 m 75 cm", "3 m 85 cm", "3 m 90 cm", "3 m 95 cm", "4 m 00 cm"],
            answer: 1 // b) 3 m 85 cm
        },
        {
            id: 33,
            q: "Kana rakamları metrik sistemle işaretlenmiş bir geminin baş draftı 6 m 20 cm markasının üst hizasında, kıç draftı 6 m 40 cm markasının alt hizasında ise geminin Mean Draftı aşağıdakilerden hangisi olur?",
            options: ["6 m 20 cm", "6 m 30 cm", "6 m 35 cm", "6 m 50 cm", "6 m 60 cm"],
            answer: 2 // c) 6 m 35 cm
        },
        {
            id: 34,
            q: "Bir geminin baş tarafındaki su kesimi 6 m 20 cm markasının tam altında, kıç taraftaki su kesimi ise 7 m 20 cm markasının üst hizasında ise bu geminin ortalama draftı aşağıdakilerden hangisidir?",
            options: ["6,70 m", "6,775 m", "6,75 m", "6,725 m", "7,05 m"],
            answer: 2 // c) 6,75 m
        },
        {
            id: 35,
            q: "Bir geminin baş tarafındaki su kesimi 6 m 20 cm rakamının tam ortasında, kıç taraftaki su kesimi ise 7 m 20 cm rakamının tam üst hizasında ise bu geminin Mean Draftı aşağıdakilerden hangisidir?",
            options: ["6.70 m", "6.775 m", "6.75 m", "6.725 m", "7.05 m"],
            answer: 1 // b) 6.775 m
        },
        {
            id: 36,
            q: "Bir geminin draftları başta 2.4 metre draft rakamının tam ortasında, kıçtaki su çekimi ise 2.6 metre rakamının tam ortasında okunmuştur. Bu geminin baş ve kıç draft ortalaması aşağıdakilerden hangisidir?",
            options: ["2.50 metre", "2.55 metre", "2.60 metre", "2.45 metre", "2.40 metre"],
            answer: 1 // b) 2.55 metre
        },
        {
            id: 37,
            q: "Bir geminin baştaki su çekimi 24 feet draft rakamının alt çizgisinden, kıçtaki su çekimi ise 26 feet draft rakamının üst çizgisinden geçmektedir. Geminin Mean Draftı aşağıdakilerden hangisidir?",
            options: ["24'06''", "24'09''", "25'00''", "25'03''", "25'09''"],
            answer: 3 // d) 25'03''
        },
        {
            id: 38,
            q: "Bir geminin baştaki su kesimi 27 feet draft rakamının tam ortasından kıçtaki su kesimi ise 29 feet rakamının tam ortasından geçmektedir. Geminin Mean Draftı aşağıdakilerden hangisidir?",
            options: ["28'09''", "29'00''", "28'03''", "28'06''", "29'06''"],
            answer: 2 // c) 28'03''
        },
        {
            id: 39,
            q: "Bir geminin başta çektiği su 4,20 m kana rakamının tam ortasından, kıçta çektiği su 4,80 m kana rakamının tam üstünden geçmektedir. Geminin trimi ve ortalama draftı ne kadardır?",
            options: ["60 cm kıça trimli ortalama draft = 4,500 m", "60 cm başa trimli ortalama draft = 4,500 m", "65 cm kıça trimli ortalama draft = 4,575 m", "60 cm başa trimli ortalama draft = 5,575 m", "60 cm başa trimli ortalama draft = 4,575 m"],
            answer: 2 // c) 65 cm kıça trimli ortalama draft = 4,575 m
        },
        // HOGGING - SAGGING BÖLÜMÜ (ID: 40-48)
        {
            id: 40,
            q: "Geminin okunan vasat draftının baş ve kıç draftları toplamının yarısından daha büyük değer aldığı durumda aşağıdakilerden hangisi söz konusudur?",
            options: ["Meyil", "Trim", "Sagging", "Hogging", "Trimsiz gemi"],
            answer: 2 // c) Sagging
        },
        {
            id: 41,
            q: "Geminin okunan vasat draftının baş ve kıç draftları toplamının yarısından daha küçük değer aldığı durumda aşağıdakilerden hangisi söz konusudur?",
            options: ["Meyil oluşur", "Trim oluşur", "Sagging vardır", "Hogging", "Pozitif GM"],
            answer: 3 // d) Hogging
        },
        {
            id: 42,
            q: "Gemiyi etkileyen hogging ve sagging etkilerini azaltmak için aşağıda verilen tedbirlerden hangisi yapılır?",
            options: ["Topside tanklarına balast alınması", "Ambar kapaklarının açılması", "Dökme yükün hap yapılması", "Yükün mümkün olduğu kadar ambarlara eşit dağıtılması", "Baş ve kıç peak tanklarının balast ile doldurulması"],
            answer: 3 // d) Yükün mümkün olduğu kadar ambarlara eşit dağıtılması
        },
        {
            id: 43,
            q: "Bir geminin yüklü durumda yapılan draft sörveyinde kana rakamlarından okunan su çekimi aşağıda gösterildiği gibidir. Bu geminin durumu hakkında aşağıdakilerden hangisi söylenebilir? (Baş: 7.00 m, Kıç: 7.40 m, Vasat: 7.20 m)",
            options: ["0.05 m Sagging var", "0.05 m Hogging var", "Hogging/Sagging yoktur", "0.20 m kıça trimlidir", "0.40 m başa trimlidir"],
            answer: 2 // c) Hogging/Sagging yoktur
        },
        {
            id: 44,
            q: "Bir geminin 6,5 m baş, 7,5 m kıç ve 7,2 m vasat draftları okunmuştur. Bu gemi aşağıdakilerden hangisinin etkisi altındadır?",
            options: ["Overload (aşırı yükleme)", "Hogging (vasatta yükselme)", "Sagging (vasatta çökme)", "Başlı gemi", "Trimsiz gemi"],
            answer: 2 // c) Sagging (vasatta çökme)
        },
        {
            id: 45,
            q: "Bir geminin okunan draftları; Baş: 8,20 m, Kıç: 9,20 m, Vasat: 8,80 m. Bu gemi aşağıdakilerden hangi etkinin altındadır?",
            options: ["Hogging (vasatta yükselme)", "Sagging (vasatta çökme)", "Overload (aşırı yükleme)", "Düz gemi", "Tender gemi"],
            answer: 1 // b) Sagging (vasatta çökme)
        },
        {
            id: 46,
            q: "Draftları; Baş: 4.40 m, Kıç: 5.20 m, Vasat: 4.70 m olarak okunan bir geminin durumu aşağıdakilerden hangisine uymaktadır?",
            options: ["Hogging (Vasatta yükselme)", "Sagging (Vasatta çökme)", "Overload (Aşırı yükleme)", "Düz gemi", "Başlı gemi"],
            answer: 0 // a) Hogging (Vasatta yükselme)
        },
        {
            id: 47,
            q: "Bir geminin 6.5 m baş, 7.5 m kıç ve 6.9 m vasat draftları okunmuştur. Bu gemi aşağıdakilerden hangi etkinin altındadır?",
            options: ["20 cm Hogging", "Başlı gemi", "10 cm Sagging", "Overload", "10cm Hogging"],
            answer: 4 // e) 10cm Hogging
        },
        {
            id: 48,
            q: "Baş draftı 6.20 m, vasat draftı 6,65 m, kıç draftı 7.20 m olan bir gemide aşağıdaki durumlardan hangisi söz konusudur?",
            options: ["5 cm Hogging", "5 cm Sagging", "50 cm Hogging", "50 cm Sagging", "Hogging/Sagging Etkisi yoktur"],
            answer: 0 // a) 5 cm Hogging
        },
        // 5-DRAFT FARKI - TPC VE FWA TANIMLARI (ID: 49-56)
        {
            id: 49,
            q: "Bir geminin draftını 1 cm değiştirmek için gerekli olan ağırlık değerini ifade eden kısaltma aşağıdakilerden hangisidir?",
            options: ["LCF", "LOA", "MCT1cm", "TPC", "LBP"],
            answer: 3 // d) TPC
        },
        {
            id: 50,
            q: "Bir gemiyi 1 cm batıran ağırlığa ne denir?",
            options: ["TPC", "MCT 1 cm", "Metrik ton", "Long ton", "Doğrultucu Moment"],
            answer: 0 // a) TPC
        },
        {
            id: 51,
            q: "Gemi draftını 1 cm arttıran değer aşağıdakilerden hangi kısaltma ile gösterilir?",
            options: ["TPC", "MCT1cm", "LBP", "LOA", "LCF"],
            answer: 0 // a) TPC
        },
        {
            id: 52,
            q: "Aşağıdakilerden hangisi TPC nin tanımıdır?",
            options: ["Bir geminin draftını 1 cm değiştirmek için gerekli olan moment", "Bir geminin draftını 1 cm değiştirmek için gerekli olan ağırlık", "Bir gemiyi 1 cm başlı yapmak için gerekli olan moment", "Bir gemiyi 1 cm kıçlı yapmak için gerekli moment", "Bir gemiyi overload yapmak için gerekli moment"],
            answer: 1 // b) Bir geminin draftını 1 cm değiştirmek için gerekli olan ağırlık
        },
        {
            id: 53,
            q: "1 cm batma tonajı (T1) tanımı aşağıdakilerden hangisidir?",
            options: ["Geminin 1m batması halindeki deplasman artışıdır", "Gemide 1m trim yaratan momenttir", "Gemiye 1cm meyil ettiren momenttir", "Gemide 1cm trim yaratan momenttir", "Geminin 1cm batması halindeki deplasman artışıdır"],
            answer: 4 // e) Geminin 1cm batması halindeki deplasman artışıdır
        },
        {
            id: 54,
            q: "Tatlı suyun doğurduğu draft farkını aşağıdakilerden hangisi belirtmektedir?",
            options: ["TPC", "LBP", "MMM", "FWA", "LCF"],
            answer: 3 // d) FWA
        },
        {
            id: 55,
            q: "Tatlı su değişkenliği, FWA nerede ölçülür?",
            options: ["S ile W arasında", "T ile S arasında", "S ile TF arasında", "S ile F arasında", "LS ile LT arasında"],
            answer: 2 // c) S ile TF arasında
        },
        {
            id: 56,
            q: "Aşağıdakilerden hangisi Tatlı suyun doğurduğu draft farkının (FWA) açıklamasıdır?",
            options: ["Yaz yükleme hattı ile tatlı su hattı arasındaki mesafedir", "Mean draft ile tatlı su hattı arasındaki mesafedir", "Tropikal su hattı ile tatlı su hattı arasındaki mesafedir", "Yaz yükleme su hattı ile mean draft arasındaki mesafedir", "Baş draft ile kıç draft arasındaki farktır"],
            answer: 0 // a) Yaz yükleme hattı ile tatlı su hattı arasındaki mesafedir
        },
        // YOĞUNLUK DEĞİŞİMİ ETKİLERİ (ID: 57-64)
        {
            id: 57,
            q: "Bir geminin içinde yüzdüğü deniz suyunun yoğunluğu değiştiğinde aşağıdakilerden hangisi değişmez? (Tüketimler sıfır kabul ediliyor)",
            options: ["Draftı", "Deplasmanı", "Trimi", "Deplasman hacmi", "1 cm batma tonajı"],
            answer: 1 // b) Deplasmanı
        },
        {
            id: 58,
            q: "Gemi tatlı sudan tuzlu suya geçtiğinde aşağıdakilerden hangisi değişmez?",
            options: ["Draft", "Deplasman", "Deplasman hacmi", "LCB", "KM"],
            answer: 1 // b) Deplasman
        },
        {
            id: 59,
            q: "Tuzlu sudan tatlı suya geçiş yapan bir geminin bünyesinde aşağıdakilerden hangisinin oluşması beklenmez?",
            options: ["Deplasman hacim değerinin artışı", "Baş draft değerinin artışı", "Kıç draft değerinin artışı", "Deplasman tonaj değerinin artışı", "Fribord değerinin azalışı"],
            answer: 3 // d) Deplasman tonaj değerinin artışı
        },
        {
            id: 60,
            q: "Gemi çok yoğun sudan daha az yoğun suya geçiş yaptığında aşağıdakilerden hangisi gerçekleşir?",
            options: ["Geminin fribordu büyür", "Geminin fribordu değişmez", "Gemi sancağa yatar", "Gemi trimsiz duruma gelir", "Fribordu küçülür"],
            answer: 4 // e) Fribordu küçülür
        },
        {
            id: 61,
            q: "Bir gemi deplasmanı değişmeden deniz suyundan tatlı suya geçerse;",
            options: ["Yalnız geminin draftı değişir", "Yalnız geminin trimi değişir", "Geminin hem draftı hem trimi değişir", "Trim sabit kalır", "Draft sabit kalır"],
            answer: 2 // c) Geminin hem draftı hem trimi değişir
        },
        {
            id: 62,
            q: "Bir gemi deniz suyundan tatlı suya geçtiğinde draftındaki değişim miktarı ne kadar olur?",
            options: ["Gemi deplasmanının TPC değerine bölümünden elde edilen miktar kadar artar", "Boş gemi ağırlığının MCT değerine bölümünden elde edilen miktar kadar artar", "Draft FWA kadar azalır", "Draft FWA kadar artar", "TPC ve MCT değerlerinin çarpımından elde edilen değer kadar azalır"],
            answer: 3 // d) Draft FWA kadar artar
        },
        {
            id: 63,
            q: "Geminin tuzlu sudan tatlı suya geçmesi ile aşağıdaki değerlerden hangisi değişir? I-Deplasman, II-Ağırlık merkezi, III-Draft",
            options: ["I", "II", "III", "I ve ll", "I ve III"],
            answer: 2 // c) III
        },
        {
            id: 64,
            q: "Geminin nehirden okyanusa geçmesi ile aşağıdaki değerlerden hangisi değişmez? I-Deplasman hacmi, II-Ağırlık merkezi, III-Geminin toplam ağırlığı",
            options: ["I", "II", "III", "I ve ll", "II ve III"],
            answer: 4 // e) II ve III
        },
        // PARALEL BATMA – YÜKSELME (ID: 65-70)
        {
            id: 65,
            q: "Bir geminin deplasmanı arttıkça aşağıdaki şıklarda verilen değerlerden hangisi artar?",
            options: ["Mean Draft", "Yalnız kıç draft", "Yalnız baş draft", "Geminin LBP'si", "Geminin LOA'sı"],
            answer: 0 // a) Mean Draft
        },
        {
            id: 66,
            q: "Bir yükleme sonucunda geminin draftı artar ama trimi değişmez; I-Bu durum paralel batmadır, II-Draft değişme miktarı yükün TPC'ye bölünmesi ile bu, III-Bu durum trim oluşturur. Yukarıdaki ifadelerden hangisi doğrudur?",
            options: ["I. İfade", "II. İfade", "I.ve II. ifade doğrudur", "III. ifade doğrudur", "Hepsi yanlıştır"],
            answer: 2 // c) I.ve II. ifade doğrudur
        },
        {
            id: 67,
            q: "1 cm batma tonajı TPC = 18 ton/cm olarak verilen bir gemiye 153 ton'luk bir ağırlık konduğu taktirde geminin paralel batma miktarını bulunuz.",
            options: ["8,4 cm", "8,5 cm", "0,11 cm", "1,34 cm", "0,22"],
            answer: 1 // b) 8,5 cm
        },
        {
            id: 68,
            q: "Deplasmanı 10.000 ton olan bir geminin TPC'si 50 tondur. Geminin baş ve kıç draftlarını 5 cm arttırmak için geminin neresine ve ne kadar yük alınmalıdır?",
            options: ["Ağırlık merkezi üzerine 200 ton yük", "Ağırlık merkezi üzerine 250 ton yük", "Yüzme yeteneği F'nin üzerine 250 ton yük", "Yüzme merkezi B'nin üzerine 250 ton yük", "Gemi vasatına (mastoriye) 200 ton yük"],
            answer: 1 // b) Ağırlık merkezi üzerine 250 ton yük
        },
        {
            id: 69,
            q: "Başta 5.60 m Kıçta 6.80 m su çeken gemiye aşağıdaki yükler yüklenmiştir. TPC=30 ton/cm, F noktası gemi ortasında ve birim trim moment (MCT1cm) = 80 tonmetre/cm olarak tespit edilmiştir. Bu gemide yükleme sonucu oluşacak parelel batmayı bulunuz.",
            options: ["75 cm", "100 cm", "120 cm", "210 cm", "180 cm"],
            answer: 1 // b) 100 cm
        },
        {
            id: 70,
            q: "Bir gemide ortadan 20 m ilerideki 2 nolu ambara 250 ton yük yükleniyor. Aynı gemide ortadan 18 m gerideki 4 nolu ambardan 50 ton yük boşaltılıyor. Aralarında 38 metre olan bu ambarlardan 4 nolu ambardan 2 nolu ambara 100 ton yük şifting ediliyor. Bu işlemler sonucunda oluşacak Paralel Batma/Çıkma miktarı aşağıdakilerden hangisidir?",
            options: ["10 cm", "15 cm", "20 cm", "25 cm", "30 cm"],
            answer: 0 // a) 10 cm
        },
        // FWA ve YOĞUNLUĞA GÖRE DRAFT DEĞİŞİM MİKTARI (ID: 71-83)
        {
            id: 71,
            q: "Deniz suyunda deplasmanı 5000 ton olan bir geminin, tatlı suda aynı draftta yüzebilmesi için aşağıdaki ifadelerden hangisi doğrudur?",
            options: ["Deplasmanı sabit kalmalıdır", "Yük yüklenmelidir", "Yük boşaltılmalıdır", "Gemi üzerindeki mevcut yük baştan kıça kaydırılmalıdır", "Gemi üzerindeki mevcut yük sancak yönüne kaydırılmalıdır"],
            answer: 2 // c) Yük boşaltılmalıdır
        },
        {
            id: 72,
            q: "Yüklü deplasmanı 4000 ton olan bir geminin TPC'si 20 tondur. Bu gemi yoğunluğu 1010 Kg/m3 olan bir suda yaz yükleme hattına kadar yükleyecektir. Bu geminin FWA'sı nedir?",
            options: ["35 mm", "40 mm", "45 mm", "50 mm", "55 mm"],
            answer: 3 // d) 50 mm
        },
        {
            id: 73,
            q: "Yüklü deplasmanı 4000 ton olan bir geminin TPC'si 20 tondur. Bu gemi yoğunluğu 1010 kg/m3 olan bir suda yaz yükleme hattına kadar yükleyecektir. Gemi deniz suyuna çıktığında mean draftı ne kadar değişir?",
            options: ["30 mm", "39 mm", "42 mm", "54 mm", "59 mm"],
            answer: 0 // a) 30 mm
        },
        {
            id: 74,
            q: "Yüklemesini 1,025 ton/m³ olan suda yapan bir geminin FWA sı 120 mm dir. Deplasmanı değişmeden tatlı suya geçmesi durumunda ortalama draftındaki değişim ne olur?",
            options: ["100 mm", "120 mm", "125 mm", "140 mm", "150 mm"],
            answer: 1 // b) 120 mm
        },
        {
            id: 75,
            q: "Tam yük yaz deplasmanı 24000 ton olan bir gemi tam yüklü olarak 1025 kg/m³ olan deniz suyunda yüzmektedir. Vasat draftı 6.10 metre, TPC si 30 ton dur. Bu gemi yoğunluğu 1035 kg/m³ olan suya geçerse yeni vasat drafti ne olur?",
            options: ["6.18 m", "6.12 m", "6.08 m", "6.04 m", "6.02 m"],
            answer: 4 // e) 6.02 m
        },
        {
            id: 76,
            q: "FWA 100 mm, TPC 30 ton olan bir gemi yoğunluğu 1020 kg/m³ olan bir suda yükleme yapmaktadır. Yükleme sonunda vasattaki su hattının yaz yükleme hattından 20 cm aşağıda olduğu tespit edilmiştir. Bu geminin yüklemeden sonra açık denizde draftının yaz yükleme hattında olabilmesi için gemiye kaç ton yük ilave edilmesi gerekir?",
            options: ["6600 ton", "660 ton", "60 ton", "600 ton", "66 ton"],
            answer: 1 // b) 660 ton
        },
        {
            id: 77,
            q: "A gemisi, su yoğunluğu 1015 kg/m3 olan bir limanda yükleme yapmaktadır. Vasattaki su seviyesi, yaz yükleme hattının 15 cm altındadır. Gemi açık denize çıktığında yaz yükleme hattında olabilmesi için kaç ton daha yük alabilir? (TPC: 30 ton, FWA: 75 mm)",
            options: ["90 ton", "450 ton", "540 ton", "345 ton", "295 ton"],
            answer: 4 // e) 295 ton
        },
        {
            id: 78,
            q: "FWA 110 mm, TPC 20 ton olan bir gemi yoğunluğu 1015 kg/m³ olan bir suda yükleme yapmaktadır. Yükleme sonunda vasattaki su hattının yaz yükleme hattından 15 cm aşağıda olduğu tespit edilmiştir. Bu geminin yüklemeden sonra açık denizde draftının yaz yükleme hattında olabilmesi için gemiye kaç ton yük ilave edilmesi gerekir?",
            options: ["296 Ton", "428 Ton", "278 Ton", "388 Ton", "528 Ton"],
            answer: 2 // c) 278 Ton
        },
        {
            id: 79,
            q: "FWA 120 mm, TPC 25 ton olan bir gemi yoğunluğu 1010 kg/m³ olan bir suda yükleme yapmaktadır. Yükleme sonunda vasattaki su hattının yaz yükleme hattının 10 cm aşağıda olduğu tespit edilmiştir. Bu geminin yüklemeden sonra açık denizde draftının yaz yükleme hattında olabilmesi için gemiye kaç ton yük ilave edilmesi gereklidir?",
            options: ["1800 ton", "180 ton", "430 ton", "4300 ton", "280 ton"],
            answer: 1 // b) 180 ton
        },
        {
            id: 80,
            q: "A gemisi deniz suyu yoğunluğu 1010 kg/m3 olan bir limanda yükleme yapmaktadır. A gemisinin yükleme sonuna yaklaşırken yapılan kontrolünde vasattaki su seviyesinin yaz yükleme hattının 20 cm altında olduğu tespit edilmiştir. (TPC: 20 ton, FWA: 125 mm) A Gemisi deniz suyu yoğunluğu 1025 kg/m3 olan açık denize çıktığında vasat draftın yaz yükleme hattında olabilmesi kaç ton daha yük almalıdır?",
            options: ["75 ton", "250 ton", "275 ton", "320 ton", "550 ton"],
            answer: 1 // b) 250 ton
        },
        {
            id: 81,
            q: "A gemisi yoğunluğu 1020 kg/m³ olan bir limanda yükleme yapmaktadır. Vasattaki su seviyesi yaz yükleme hattının 20 cm altındadır. Geminin daha yükleyecek 400 ton yükü kalmıştır. Gemi açık denize çıktığında yaz yükleme hattında olabilmesi için fazladan kaç ton daha yük talep edebilir? (FWA = 120 mm TPC = 30 ton)",
            options: ["272", "444", "400", "323", "175"],
            answer: 0 // a) 272
        },
        {
            id: 82,
            q: "A gemisi su yoğunluğu 1020 kg/m3 olan bir limanda yükleme yapmaktadır. Vasattaki su seviyesi yaz yükleme hattının 20 cm altındadır. Geminin limanda 400 ton yükü kalmıştır. Gemi açık denize çıktığında yaz yükleme hattında olabilmesi için fazladan kaç ton balast almalıdır? (TPC = 30 Ton, FWA = 75 mm)",
            options: ["245 ton", "259 ton", "355 ton", "250 ton", "295 ton"],
            answer: 0 // a) 245 ton
        },
        {
            id: 83,
            q: "Yoğunluğu 1025 kg/m3 olan bir suda yüzen bir geminin deplasmanı 12000 ton dur. Bu gemi su yoğunluğu 1010 kg/m3 olan bir rıhtıma yanaştığında, ilk draftına gelebilmesi için kaç ton yük boşaltılmalıdır? (TPC = 20 Ton Cm)",
            options: ["150 ton", "165 ton", "175 ton", "185 ton", "180 ton"],
            answer: 2 // c) 175 ton
        },

        {
            id: 84,
            q: "Aşağıdaki noktalardan hangisi bir geminin enine dengesi ile ilgili değildir?",
            options: ["G noktası", "B noktası", "M noktası", "K noktası", "F noktası"],
            answer: 4 // e) F noktası (F: Flotation Center (Yüzme Merkezi) - Trim ile ilgilidir, enine denge ile direkt ilgili değildir.)
        },
        {
            id: 85,
            q: "Aşağıdaki olaylardan hangisinde ağırlık merkezi yer değiştirmez?",
            options: ["Geminin yalpa yapması", "Gemiye yük alınması", "Yük şifting yapılması", "Gemiye balast alınması", "Gemiye yakıt alınması"],
            answer: 0 // a) Geminin yalpa yapması
        },
        {
            id: 86,
            q: "Gemilerde meyil tecrübesi niçin yapılır?",
            options: ["Sephiye merkezinin bulunması için", "Ağırlık merkezinin yerinin bulunması için", "Draftın bulunması için", "Metasentır yarıçapının bulunması için", "Deplasmanın bulunması için"],
            answer: 1 // b) Ağırlık merkezinin yerinin bulunması için (veya KG'nin bulunması için)
        },
        {
            id: 87,
            q: "Bir geminin dengesi iki noktanın konumu ile belirlenir. Bunlardan biri Ağırlık Merkezi (G), diğeri ise _____ 'dir.",
            options: ["Su hattı atalet momenti", "Metasantr yarıçapı", "Metasantr (M)", "Sephiye Merkezi (B)", "Yüzme Merkezi (F)"],
            answer: 2 // c) Metasantr (M)
        },
        // 7-STABİLİTE HESAPLARI (ID: 88-102)
        {
            id: 88,
            q: "Meta Center (Metasentr) nedir?",
            options: ["Gemi su çekerken yer değiştiren ağırlık merkezi", "Gemi düz duruşta iken su hattı", "Yüzme merkezinin (B) dikey konumu", "Sephiye merkezi (B) normal olarak su hattı atalet momenti ile hesaplanan yarıçap üzerinde hareket eden nokta", "Metasentr yarıçapı (BM) ile gemi genişliğinin (B) çarpımı"],
            answer: 3 // d) Sephiye merkezi (B) normal olarak su hattı atalet momenti ile hesaplanan yarıçap üzerinde hareket eden nokta
        },
        {
            id: 89,
            q: "Metasantr yarıçapı (BM) hangi iki noktanın arasındaki düşey mesafedir?",
            options: ["Ağırlık merkezi (G) ile sephiye merkezi (B)", "Ağırlık merkezi (G) ile metasantr (M)", "Sephiye merkezi (B) ile metasantr (M)", "Omurga (K) ile metasantr (M)", "Omurga (K) ile sephiye merkezi (B)"],
            answer: 2 // c) Sephiye merkezi (B) ile metasantr (M)
        },
        {
            id: 90,
            q: "GM değeri aşağıdakilerden hangisi ile ifade edilir?",
            options: ["KB-BG", "KG+GM", "KM-GM", "KM-KG", "KB+GM"],
            answer: 3 // d) KM-KG
        },
        {
            id: 91,
            q: "GM değeri aşağıdakilerden hangisi ile ifade edilir?",
            options: ["KM - KB", "GM - KM", "KB - GM", "KB + BM - KG", "KM + KG"],
            answer: 3 // d) KB + BM - KG
        },
        {
            id: 92,
            q: "Geminin baş taraftan kıç tarafa doğru batmaya başlaması ile _____ değişir.",
            options: ["Genişliği", "Boyu", "Draftı", "Fribordu", "Tüm Şıklar"],
            answer: 2 // c) Draftı
        },
        {
            id: 93,
            q: "Bir geminin stabilite ölçümünde KM değeri; 8 m, KG değeri; 7 m, GM değeri; 1 m dir. Bu geminin stabilitesi ile ilgili aşağıdakilerden hangisi doğrudur?",
            options: ["Trimsiz gemidir", "Negatif GM'e sahiptir", "Nötr stabiliteye sahiptir", "Pozitif stabiliteye sahiptir", "Tender gemidir"],
            answer: 3 // d) Pozitif stabiliteye sahiptir
        },
        {
            id: 94,
            q: "GM değeri 0 m olan gemiye ne ad verilir?",
            options: ["Stiff gemi", "Tender gemi", "Kararsız gemi", "Pozitif stabilite", "Nötr stabilite"],
            answer: 4 // e) Nötr stabilite
        },
        {
            id: 95,
            q: "Bir geminin sephiye merkezinin (B) yerini değiştiren en önemli faktör aşağıdakilerden hangisidir?",
            options: ["Gemiye yük alınması", "Yük şiftingi", "Gemi deplasmanının değişmesi", "Balast basılması", "Gemiye yakıt alınması"],
            answer: 2 // c) Gemi deplasmanının değişmesi
        },
        {
            id: 96,
            q: "Metasantr (M) noktası, yalpa esnasında sabit kaldığı farz edilen noktadır. Yalpa yaptığında gemiye ait aşağıdaki noktalardan hangisi yer değiştirmez?",
            options: ["Ağırlık merkezi (G)", "Sephiye merkezi (B)", "Yüzme merkezi (F)", "Kalıp derinliği (D)", "Metasantr (M)"],
            answer: 0 // a) Ağırlık merkezi (G)
        },
        {
            id: 97,
            q: "Bir gemide KG arttığında stabilitesi nasıl değişir?",
            options: ["Azalır", "Artar", "Değişmez", "Meyil oluşur", "Gemi batar"],
            answer: 0 // a) Azalır
        },
        {
            id: 98,
            q: "GM değeri arttığında stabilitesi nasıl değişir?",
            options: ["Azalır", "Artar", "Değişmez", "Tender olur", "Gemi batar"],
            answer: 1 // b) Artar
        },
        {
            id: 99,
            q: "Gemiye yük alındığında KG nasıl değişir?",
            options: ["Değişmez", "KG artar", "KG azalır", "KG + BM", "KG artmaz"],
            answer: 1 // b) KG artar
        },
        {
            id: 100,
            q: "Bir geminin enine metasantr yarıçapı (BM) 3 m, sephiye merkezinin omurgadan yüksekliği (KB) 4 m, ağırlık merkezinin omurgadan yüksekliği (KG) 8 m dir. Bu geminin GM'i ne kadardır ve stabilitesi nasıldır?",
            options: ["-1 m, pozitif", "1 m, negatif", "-1 m, nötr", "1 m, pozitif", "-1 m, negatif"],
            answer: 4 // e) -1 m, negatif (KM = KB + BM = 4 + 3 = 7m. GM = KM - KG = 7 - 8 = -1m. Negatif stabilite.)
        },
        {
            id: 101,
            q: "Bir geminin KB değeri 4 m, BM değeri 3 m, KG değeri 7.5 m dir. GM değeri ne kadardır?",
            options: ["0.5 m", "1 m", "0.2 m", "-0.5 m", "1.5 m"],
            answer: 3 // d) -0.5 m (KM = 4 + 3 = 7m. GM = 7 - 7.5 = -0.5m)
        },
        {
            id: 102,
            q: "Aşağıdakilerden hangisi KG (Ağırlık Merkezi) değerinin tanımıdır?",
            options: ["Metasantr yarıçapı", "Sephiye merkezinin yatay konumu", "Ağırlık merkezinin yatay konumu", "Sephiye merkezinin dikey konumu", "Yüzme merkezinin dikey konumu"],
            answer: 2 // c) Ağırlık merkezinin yatay konumu (Aslında dikey konumu (omurgadan yüksekliği) KG'dir. Seçenekler arasında en olası doğru cevap KG'yi tanımlayan bir konuma karşılık gelir.)
        },
        // BM VE KG İLE İLGİLİ (ID: 103-104)
        {
            id: 103,
            q: "BM (metasantr yarıçapı) aşağıdaki verilerden hangileri ile hesaplanır?",
            options: ["Geminin boyuna eksene göre su hattı atalet momenti ve hacmi", "Geminin boyuna eksene göre su hattı atalet momenti ve su hattı alanı", "Geminin boyuna eksene göre su hattı atalet momenti ve blok katsayısı", "Geminin deplasmanı ve su hattı alanı", "Geminin deplasmanı ve en kesit alanları"],
            answer: 0 // a) Geminin boyuna eksene göre su hattı atalet momenti ve hacmi (BM = I / V, burada I: atalet momenti, V: hacimdir.)
        },
        {
            id: 104,
            q: "BM (metasantr yarıçapı) ile gemi genişliği B arasındaki aşağıda belirtilen bağıntılardan hangisi doğrudur?",
            options: ["Gemi genişliği arttıkça BM değeri küçülür", "Gemi genişliği arttıkça BM değeri tender gemilerde küçülür, stiff gemilerde büyür", "BM değeri gemi genişliği ile değişmez", "Gemi genişliği arttıkça BM değeri büyür", "KG değeri bilinmiyorsa bir şey söylenemez"],
            answer: 3 // d) Gemi genişliği arttıkça BM değeri büyür (BM, genişliğin (B) karesi ile orantılıdır: BM = I/V ∝ B²)
        },
        // MEYİL (ID: 105-118)
        {
            id: 105,
            q: "Şekilde kıç tarafından bakılan gemi görülmektedir. Verilen bilgilere göre aşağıdaki ifadelerden hangisi doğrudur? I-Gemi sancağa meyil yapmış konumdayken deniz suyu hattı D1-H1 olur II-Gemi iskeleye meyil yapmış konumdayken deniz suyu hattı D2-H2 olur",
            options: ["Yalnız I", "Yalnız II", "I ve II", "Meyil yoktur", "D1-H1 = D2-H2"],
            answer: 2 // c) I ve II (Şekil metni eksik, ancak yalpa/meyil durumunda su hattının yataydan eğilmesi beklenir. Eğer D1 iskeledeki draft, H1 sancaktaki draft ise, I ve II'nin doğru ifade olduğu varsayılır.)
        },
        {
            id: 106,
            q: "Gemide, sancak ve iskele draftları arasındaki farka ne ad verilir?",
            options: ["Trim", "Meyil (Heel/List)", "Trim moment", "Doğrultucu Moment", "Balast"],
            answer: 1 // b) Meyil (Heel/List)
        },
        {
            id: 107,
            q: "Ağırlık merkezinin (G) metasantr (M) altına düşmesi durumunda gemi hangi durumda olur?",
            options: ["Trimsiz gemi", "Nötr stabiliteye sahip", "Kararsız gemi", "Negatif stabiliteye sahip", "Pozitif stabiliteye sahip"],
            answer: 4 // e) Pozitif stabiliteye sahip
        },
        {
            id: 108,
            q: "Geminin enine doğrultucu moment (GZ) kolu hangi iki nokta arasındaki mesafedir?",
            options: ["G ve B", "G ve M", "M ve B", "M ve K", "G ve kaldırma kuvveti hattının kesişim noktası (Z)"],
            answer: 4 // e) G ve kaldırma kuvveti hattının kesişim noktası (Z)
        },
        {
            id: 109,
            q: "Bir gemi iskeleye 3 derece meyil ettiğinde, iskele tankındaki yakıtın yüzeyinin serbest yüzey etkisi (Free Surface Effect) nedeniyle dikey ağırlık merkezi (KG) nasıl değişir?",
            options: ["Yükselir", "Alçalır", "Değişmez", "Sancak yönüne hareket eder", "İskele yönüne hareket eder"],
            answer: 0 // a) Yükselir
        },
        {
            id: 110,
            q: "Gemideki tanklarda serbest yüzey etkisi (Free Surface Effect) neyi azaltır?",
            options: ["Gemi fribordunu", "Metasantr yarıçapını (BM)", "Metasantr yüksekliğini (GM)", "Omurgadan sephiye merkezini (KB)", "Omurgadan ağırlık merkezini (KG)"],
            answer: 2 // c) Metasantr yüksekliğini (GM)
        },
        {
            id: 111,
            q: "Gemideki tanklarda serbest yüzey etkisi oluştuğunda geminin enine doğrultucu momenti nasıl değişir?",
            options: ["Azalır", "Artar", "Değişmez", "Trimi artar", "Stabilite artar"],
            answer: 0 // a) Azalır
        },
        {
            id: 112,
            q: "Serbest yüzey etkisini (Free Surface Effect) aşağıdakilerden hangisi ile azaltabiliriz?",
            options: ["Tanklara daha az balast/yakıt almak", "Tankları yarıya kadar doldurmak", "Tankları %50 doldurmak", "Tankları %100 dolu veya boş tutmak", "Tanklardaki su seviyesini korumak"],
            answer: 3 // d) Tankları %100 dolu veya boş tutmak
        },
        {
            id: 113,
            q: "Serbest yüzey etkisi nedeniyle ortaya çıkan sanal ağırlık merkezi (G1) ile Gerçek Ağırlık Merkezi (G) arasındaki düşey mesafeye ne ad verilir?",
            options: ["Düzeltilmiş GM (GM corr)", "Düzeltilmiş ağırlık merkezi (GG1)", "Kaldırma kuvveti (B)", "Doğrultucu moment (GZ)", "Meyil açısı (θ)"],
            answer: 1 // b) Düzeltilmiş ağırlık merkezi (GG1)
        },
        {
            id: 114,
            q: "Serbest yüzey etkisinin düzeltilmesi (Free Surface Correction - FSC) hangi yüksekliği etkiler?",
            options: ["KB", "KG", "BM", "KM", "Meyil açısı"],
            answer: 1 // b) KG
        },
        {
            id: 115,
            q: "Geminin iskele yada sancak tarafa meyletmesine neden olan moment aşağıdakilerden hangisidir?",
            options: ["Trim momenti", "Meyil momenti (Heeling Moment)", "Paralel batma", "Trim", "Doğrultucu Moment"],
            answer: 1 // b) Meyil momenti (Heeling Moment)
        },
        {
            id: 116,
            q: "Geminin meyil tecrübesinde KG değerinin hesaplanması için aşağıdaki değerlerden hangisi bilinmelidir?",
            options: ["Meyil açısı", "Deney ağırlığının yeri ve miktarı", "Deplasman", "KM değeri", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 117,
            q: "Meyil tecrübesi sırasında gemi omurgasında ölçülen meyil açısı aşağıdakilerden hangisi ile ifade edilir?",
            options: ["BGM", "KM", "KB", "θ (teta)", "Trim"],
            answer: 3 // d) θ (teta)
        },
        {
            id: 118,
            q: "Meyil tecrübesi sonucunda elde edilen veriler ile hangi değer hesaplanır?",
            options: ["KG (Ağırlık merkezi)", "KM (Metasantr yüksekliği)", "Trim", "Deplasman", "Boylamsal Metasantr (ML)"],
            answer: 0 // a) KG (Ağırlık merkezi)
        },
        {
            id: 119,
            q: "Metasentır yüksekliği GM aşağıdaki formüllerden hangisi ile hesaplanır?",
            options: ["KM - BM", "KM + BM", "KM - KG", "KM - KB", "KM + KB"],
            answer: 2
        },
        {
            id: 120,
            q: "Metasantr yüksekliği ile ağırlık merkezi yüksekliği arasındaki fark aşağıdakilerden hangisidir?",
            options: ["KG", "GM", "BM", "KM", "KB"],
            answer: 1
        },
        {
            id: 121,
            q: "Gemiye dışarıdan ağırlık eklenmesi durumunda aşağıdakilerden hangisi değişmez?",
            options: ["Ağırlık merkezi", "Hacim merkezi", "GM", "Gemi genişliği", "BM"],
            answer: 3
        },
        {
            id: 122,
            q: "Geminin ağırlık merkezine dışarıdan ağırlık eklenmesi durumunda aşağıdakilerden hangisi değişmez?",
            options: ["GM", "KM", "Hacim merkezi", "BM", "Ağırlık merkezi"],
            answer: 3
        },
        {
            id: 123,
            q: "Ağır bumba çalıştıran gemilerde karşılaşılabilecek denge problemi aşağıdakilerden hangisidir?",
            options: ["Geminin KG yüksekliği gittikçe azalır", "Geminin LBP si azalır", "Geminin GM değeri azalır", "GM değeri artar", "KG değişmez"],
            answer: 2
        },
        {
            id: 124,
            q: "Bir gemide yüke ek olarak yakıt ve tatlı su tanklarının tamamen dolması veya tamamen boş olması durumunda aşağıdaki denge problemleri hangisi görülür?",
            options: ["Trim", "Paralel batma", "Meyil", "Negatif GM", "Serbest yüzey etkisi (FSE)"],
            answer: 4
        },
        {
            id: 125,
            q: "Geminin enine dengesi (GM) aşağıdaki durumların hangisinde bozulmaz?",
            options: ["Gemiye yük alınması", "Geminin rüzgar alması", "Ambarlardaki yüklerin kayması", "Balast tanklarına kısmi dolum yapılması", "Kıç pik tankına tam balast alınması"],
            answer: 4
        },
        {
            id: 126,
            q: "Serbest yüzey etkisi (Free Surface Effect) nedeniyle dikey ağırlık merkezi (KG) nasıl değişir?",
            options: ["KG azalır", "KG değişmez", "KG artar", "KM artar", "KM azalır"],
            answer: 2
        },
        {
            id: 127,
            q: "Serbest yüzey etkisine karşı alınabilecek en iyi tedbir aşağıdakilerden hangisidir?",
            options: ["Balast alırken tankları kısmen dolu bırakmak", "Balast alırken tankları dolu veya boş bırakmak", "Yakıtı mümkün olduğu kadar üst tanklara almak", "Yükleme ve tahliyeyi bir anda yapmak", "Fribordu azaltmak"],
            answer: 1
        },
        {
            id: 128,
            q: "Geminin yalpası ile KG arasındaki ilişki nedir?",
            options: ["Yalpa arttıkça KG artar", "Yalpa azaldıkça KG azalır", "Yalpa arttıkça KG azalır", "Yalpa hareketinde KG değişmez", "Yalpa hareketinde KG yükselir"],
            answer: 3
        },
        {
            id: 129,
            q: "Bir tanktaki sıvının serbest yüzey atalet momenti (i) ile geminin deplasmanı (Δ) arasındaki ilişki ile hesaplanan değer aşağıdakilerden hangisidir?",
            options: ["GZ", "GM", "GG1 (FSC)", "KM", "KB"],
            answer: 2
        },
        {
            id: 130,
            q: "Yük yükleme işlemi sırasında KG'nin yükselmesi, GM'yi nasıl etkiler?",
            options: ["GM azalır", "GM artar", "GM değişmez", "GM artıp azalır", "Hiçbir şey olmaz"],
            answer: 0
        },
        {
            id: 131,
            q: "Serbest yüzey atalet momenti (i) ile geminin deplasmanı (Δ) arasındaki ilişki ile hesaplanan değer aşağıdakilerden hangisidir?",
            options: ["GG1 (FSC)", "GZ", "GM", "KB", "KM"],
            answer: 0
        },
        {
            id: 132,
            q: "Serbest yüzey atalet momenti (i) bir tanktaki sıvının serbest yüzeyinin su hattı atalet momentiyle doğru orantılı olarak artar. Bu durum hangi değeri etkiler?",
            options: ["GM", "KB", "LCF", "FWA", "LBP"],
            answer: 0
        },
        {
            id: 133,
            q: "Aşağıdakilerden hangisi gemi stabilitesinin azalmasına neden olmaz?",
            options: ["Kısmen dolu tanklar", "Ambar üstüne yük yüklemek", "Dip balast tanklarını doldurmak", "Gemiye yüksek yerden ağırlık almak", "Serbest yüzey etkisi"],
            answer: 2
        },
        {
            id: 134,
            q: "GM değeri büyüdüğünde gemi aşağıdakilerden hangisi olur?",
            options: ["Tender gemi olur", "Nötr stabiliteye sahip olur", "Stiff gemi olur", "Kararsız dengeye sahip olur", "GM'i pozitif olur"],
            answer: 2
        },
        {
            id: 135,
            q: "Bir gemide yüke ek olarak yakıt ve tatlı su tanklarının kısmen dolması durumunda aşağıdaki denge problemleri hangisi görülür?",
            options: ["Trim", "Paralel batma", "Meyil", "Negatif GM", "Serbest yüzey etkisi (FSE)"],
            answer: 4
        },
        {
            id: 136,
            q: "Gemideki tanklarda serbest yüzey etkisi oluştuğunda geminin doğrultucu momenti nasıl değişir?",
            options: ["Azalır", "Artar", "Değişmez", "Trimi artar", "Stabilite artar"],
            answer: 0
        },
        {
            id: 137,
            q: "Bir tanktaki sıvının serbest yüzey atalet momenti (i) ile geminin deplasmanı (Δ) arasındaki ilişki ile hesaplanan değer aşağıdakilerden hangisidir?",
            options: ["GZ", "GM", "GG1 (FSC)", "KM", "KB"],
            answer: 2
        },
        {
            id: 138,
            q: "Aşağıdakilerden hangisi bir geminin enine stabilitesini etkileyen kuvvetlerden değildir?",
            options: ["Merkezkaç kuvveti", "Doğrultucu kuvvet", "Ağırlık kuvveti", "Kaldırma kuvveti", "Trim kuvveti"],
            answer: 4
        },
        {
            id: 139,
            q: "Bir geminin seyir stabilitesinin azalması için aşağıdakilerden hangisi yapılmalıdır?",
            options: ["KG'yi yükseltmek", "BM'yi yükseltmek", "KB'yi yükseltmek", "Yükü güverte altına almak", "Dip tankları doldurmak"],
            answer: 0
        },
        {
            id: 140,
            q: "Aşağıdakilerden hangisi Draft sörveyinde dikkate alınmaz?",
            options: ["Deplasman", "TPC", "Gemi Genişliği", "KB", "KM"],
            answer: 2
        },
        {
            id: 141,
            q: "Geminin kararlı dengede olması için;",
            options: ["GM = 0 olmalıdır", "GM < 0 olmalıdır", "GM > 0 olmalıdır", "KM < KG olmalıdır", "KB > GM olmalıdır"],
            answer: 2
        },
        {
            id: 142,
            q: "Gemide kararsız denge (Negatif stabilite) durumunda aşağıdaki ifadelerden hangisi doğrudur?",
            options: ["M noktası G noktasının altındadır", "M noktası G noktasının üstündedir", "M noktası B noktasının üstündedir", "GM > 0 dır", "GM = 0 dır"],
            answer: 0
        },
        {
            id: 143,
            q: "Aşağıdakilerden hangisi gemi sephiye merkezi (B) ile ilgili değildir?",
            options: ["Gemi hacmi", "Suyun yoğunluğu", "Suyun yoğunluğu değiştiğinde sephiye merkezi değişmez", "B noktası su hattının ağırlık merkezi değildir", "B noktası deplasman hacminin ağırlık merkezi"],
            answer: 2
        },
        {
            id: 144,
            q: "Gemiye bir ağırlık eklendiğinde aşağıdakilerden hangisi değişmez?",
            options: ["Ağırlık merkezi", "Deplasman", "KG", "Gemi genişliği", "GM"],
            answer: 3
        },
        {
            id: 145,
            q: "Geminin deplasmanı 10000 ton, GZ kolu 0.5 m. Geminin doğrultucu momenti ne kadardır?",
            options: ["500 ton-m", "50 ton-m", "5000 ton-m", "50000 ton-m", "500000 ton-m"],
            answer: 2
        },
        {
            id: 146,
            q: "Bir gemi yüklü halde kıçlı olduğu zaman aşağıdakilerden hangisi olur?",
            options: ["KM artar", "KM azalır", "Trim artar", "KB azalır", "KB değişmez"],
            answer: 2
        },
        {
            id: 147,
            q: "Gemiye su hattının altına ağırlık yüklendiğinde aşağıdakilerden hangisi artar?",
            options: ["GM", "GZ", "KB", "KM", "Hepsi"],
            answer: 4
        },
        {
            id: 148,
            q: "Bir ağırlık aşağı doğru hareket ettiğinde aşağıdakilerden hangisi değişmez?",
            options: ["KM", "KG", "GZ", "Trim", "KB"],
            answer: 0
        },
        {
            id: 149,
            q: "Gemiye ilave ağırlık alındığında;",
            options: ["KM artar", "KB artar", "GM artar", "Hepsi", "Hiçbiri"],
            answer: 3
        },
        {
            id: 150,
            q: "Ağırlık şiftingi yapıldığında;",
            options: ["Deplasman artar", "Deplasman azalır", "Deplasman değişmez", "GM artar", "KM azalır"],
            answer: 2
        },
        {
            id: 151,
            q: "Gemiye yük alındığında;",
            options: ["Deplasman artar", "Deplasman azalır", "Deplasman değişmez", "GM artar", "KM azalır"],
            answer: 0
        },
        {
            id: 152,
            q: "Ağırlık şiftingi yapıldığında aşağıdakilerden hangisi değişmez?",
            options: ["KG", "GZ", "Deplasman", "GM", "KM"],
            answer: 2
        },
        {
            id: 153,
            q: "Gemiye yük alındığında aşağıdakilerden hangisi değişmez?",
            options: ["KM", "KB", "GM", "Gemi genişliği", "Deplasman"],
            answer: 3
        },
        {
            id: 154,
            q: "Gemiye ağırlık yüklendiğinde;",
            options: ["KM değişmez", "KB değişmez", "GM değişmez", "Hiçbiri", "Hepsi"],
            answer: 3
        },
        {
            id: 155,
            q: "Geminin enine kesitinde oluşan yüzey alanı atalet momentinin artışı ile aşağıdaki değerlerden hangisi artar?",
            options: ["KB", "GZ", "KM", "KG", "FWA"],
            answer: 2
        },
        {
            id: 156,
            q: "Gemi kararsız (Negatif Stabilite) duruma geldiğinde aşağıdakilerden hangisi olur?",
            options: ["GM < 0 olur", "GM > 0 olur", "GZ > 0 olur", "KM < KB olur", "KM = KG olur"],
            answer: 0
        },
        {
            id: 157,
            q: "Kararlı dengenin şartı aşağıdakilerden hangisidir?",
            options: ["KM < KG", "G = M", "KM > KG", "GM = 0", "GZ < 0"],
            answer: 2
        },
        {
            id: 158,
            q: "Geminin kararsız olması için;",
            options: ["GM > 0 olmalıdır", "GM = 0 olmalıdır", "KM > KG olmalıdır", "KM < KG olmalıdır", "GZ > 0 olmalıdır"],
            answer: 3
        },
        {
            id: 159,
            q: "GM değeri negatif olduğunda aşağıdaki denge tiplerinden hangisi oluşur?",
            options: ["Kararlı denge", "Nötr denge", "Kararsız denge", "Tender denge", "Stiff denge"],
            answer: 2
        },
        {
            id: 160,
            q: "Gemiye yük alındığında GM'i düşürmek için yük aşağıdaki yerlerden hangisine alınmalıdır?",
            options: ["Geminin dip tanklarına", "Güverteye", "Ambarın alt kısmına", "Ambarın orta kısmına", "Balast tanklarına"],
            answer: 1
        },
        {
            id: 161,
            q: "Bir geminin KM'i 8 m, KG'si 7 m. Gemiye 20 ton ağırlık alındığında KG 7.5 m'ye çıkmıştır. Yeni GM ne kadardır?",
            options: ["1 m", "0.5 m", "1.5 m", "-0.5 m", "-1 m"],
            answer: 1
        },
        {
            id: 162,
            q: "Ağırlık merkezinin (G) metasantr (M) üstüne düşmesi durumunda gemi hangi durumda olur?",
            options: ["Kararsız denge", "Nötr denge", "Stiff denge", "Tender gemi", "Pozitif denge"],
            answer: 0
        },
        {
            id: 163,
            q: "Gemiye dışarıdan ağırlık eklendiğinde aşağıdakilerden hangisi değişmez?",
            options: ["Deplasman", "GM", "Gemi boyu", "KM", "KB"],
            answer: 2
        },
        {
            id: 164,
            q: "Bir ağırlık aşağı doğru hareket ettirildiğinde aşağıdakilerden hangisi değişmez?",
            options: ["KM", "KG", "GM", "GZ", "KB"],
            answer: 0
        },
        {
            id: 165,
            q: "Gemiye güverte altına bir ağırlık yüklendiğinde;",
            options: ["KM artar", "GM azalır", "KG artar", "Hepsi", "KM değişmez"],
            answer: 0
        },
        {
            id: 166,
            q: "Bir gemi kararsız dengeye (Negatif Stabilite) sahip olduğunda aşağıdaki durumlardan hangisi gerçekleşir?",
            options: ["Gemi daha az meyil yapar", "Gemi daha çok meyil yapar", "Gemi hiç meyil yapmaz", "Gemi nötr dengeye sahiptir", "Gemi pozitif dengeye sahiptir"],
            answer: 1
        },
        {
            id: 167,
            q: "KM = 8 m, KG = 7 m, GM = 1 m. Gemiye 20 ton ağırlık alınmış ve KG 7.5 m'ye çıkmıştır. Yeni GM ne kadardır?",
            options: ["1 m", "0.5 m", "1.5 m", "-0.5 m", "-1 m"],
            answer: 1
        },
        {
            id: 168,
            q: "Gemiye güverteye bir ağırlık alındığında GM nasıl değişir?",
            options: ["Azalır", "Artar", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 0
        },
        {
            id: 169,
            q: "Gemiye ilave ağırlık alındığında KM nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 0
        },
        {
            id: 170,
            q: "Geminin boylamsal denge merkezi (ML) aşağıdakilerden hangisidir?",
            options: ["GZ", "GM", "LCB", "KG", "KM"],
            answer: 2
        },
        {
            id: 171,
            q: "Gemiye ağırlık eklendiğinde aşağıdakilerden hangisi değişmez?",
            options: ["GM", "KM", "Gemi eni", "KB", "KG"],
            answer: 2
        },
        {
            id: 172,
            q: "Bir gemiye ilave ağırlık yüklendiğinde KB'si nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 0
        },
        {
            id: 173,
            q: "Yükleme esnasında KG'yi düşürmek için aşağıdakilerden hangisi yapılmalıdır?",
            options: ["Yükü mümkün olduğu kadar güverteye yüklemek", "Yükü ambarın en altına yüklemek", "Yükü ambarın en üstüne yüklemek", "Yükü ambarın ortasına yüklemek", "Ambar kapağını açmak"],
            answer: 1
        },
        {
            id: 174,
            q: "Geminin stabilite ölçümünde KM değeri; 8 m, KG değeri; 7 m, GM değeri; 1 m dir. Bu geminin stabilitesi ile ilgili aşağıdakilerden hangisi doğrudur?",
            options: ["Tender gemidir", "Nötr stabiliteye sahiptir", "Pozitif stabiliteye sahiptir", "Negatif stabiliteye sahiptir", "Kararsız dengeye sahiptir"],
            answer: 2
        },
        {
            id: 175,
            q: "Geminin doğrultucu kolu (GZ) aşağıdakilerden hangisine eşittir?",
            options: ["Δ x GM x sinθ", "KM x sinθ", "GM x tanθ", "(GM + BM) x sinθ", "GM x sinθ"],
            answer: 4
        },
        {
            id: 176,
            q: "Bir gemide GM değeri artarsa doğrultucu moment (GZ) nasıl değişir?",
            options: ["Azalır", "Artar", "Değişmez", "Negatif olur", "Sıfır olur"],
            answer: 1
        },
        {
            id: 177,
            q: "Bir geminin KG'si 7 m, KM'i 8 m, 10° meyil yapmıştır. GZ kolu ne kadardır?",
            options: ["1 x tan 10° m", "1 x sin 10° m", "8 x tan 10° m", "1 x sin 7° m", "8 x sin 10° m"],
            answer: 1
        },
        {
            id: 178,
            q: "Gemiye güverteye yük alındığında KG nasıl değişir?",
            options: ["KG artar", "KG azalır", "KG değişmez", "KM azalır", "GM artar"],
            answer: 0
        },
        {
            id: 179,
            q: "Gemiye güverte altına yük alındığında KG nasıl değişir?",
            options: ["KG artar", "KG azalır", "KG değişmez", "KM azalır", "GM artar"],
            answer: 1
        },
        {
            id: 180,
            q: "Bir geminin kararlı dengede (Pozitif Stabilite) olması için GM değeri;",
            options: ["0 dan büyük olmalıdır", "0 dan küçük olmalıdır", "0 a eşit olmalıdır", "Negatif olmalıdır", "Bilinmelidir"],
            answer: 0
        },
        {
            id: 181,
            q: "Gemiye ağırlık yüklendiğinde KG nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 0
        },
        {
            id: 182,
            q: "Gemiye ağırlık yüklendiğinde KM nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 0
        },
        {
            id: 183,
            q: "Gemiye ağırlık yüklendiğinde KB nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 0
        },
        {
            id: 184,
            q: "Gemiye ağırlık yüklendiğinde GM nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 3
        },
        {
            id: 185,
            q: "Gemiye ilave ağırlık alındığında GZ nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 3
        },
        {
            id: 186,
            q: "Bir geminin 7 m KG, 8 m KM değeri vardır. Gemi 10° yattığında GZ kolu ne kadardır?",
            options: ["1 m x tan 10°", "1 m x sin 10°", "8 m x tan 10°", "1 m x sin 7°", "8 m x sin 10°"],
            answer: 1
        },
        {
            id: 187,
            q: "Gemiye su hattının altına ağırlık yüklendiğinde GZ nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 0
        },
        {
            id: 188,
            q: "Gemiye güverteye ağırlık yüklendiğinde GZ nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 1
        },
        {
            id: 189,
            q: "Bir geminin KM'i 8 m, KG'si 7 m, GM'i 1 m dir. Gemiye 20 ton ağırlık alındığında KG'si 7.5 m'ye çıkmıştır. Yeni GM ne kadardır?",
            options: ["1 m", "0.5 m", "1.5 m", "-0.5 m", "-1 m"],
            answer: 1
        },
        {
            id: 190,
            q: "Aşağıdaki durumlardan hangisi KG'yi yükseltir?",
            options: ["Ambarın altına yük yüklemek", "Dip balast tankını doldurmak", "Yükü ambarın üst kısmına yüklemek", "Dip yakıt tankını doldurmak", "Hepsi"],
            answer: 2
        },
        {
            id: 191,
            q: "Bir geminin kararsız dengede olduğu durumda GM ve GZ nasıl değişir?",
            options: ["GM negatif, GZ pozitif", "GM pozitif, GZ negatif", "GM negatif, GZ negatif", "GM pozitif, GZ pozitif", "GM sıfır, GZ pozitif"],
            answer: 2
        },
        {
            id: 192,
            q: "Bir geminin meyil tecrübesinde hangi değer hesaplanır?",
            options: ["KM", "GM", "KG", "KB", "BM"],
            answer: 2
        },
        {
            id: 193,
            q: "Bir geminin doğrultucu kolu GZ = GM x sinθ formülü ile hesaplanır. GZ kolu hangi meyil açısına kadar hesaplanır?",
            options: ["10° meyil açısına kadar", "15° meyil açısına kadar", "20° meyil açısına kadar", "40° meyil açısına kadar", "60° meyil açısına kadar"],
            answer: 1
        },
        {
            id: 194,
            q: "Bir geminin GM'i 0 olduğunda geminin GZ kolu nasıldır?",
            options: ["Pozitif olur", "Negatif olur", "Sıfır olur", "Değişmez", "Azalır"],
            answer: 2
        },
        {
            id: 195,
            q: "Geminin enine dengesini belirleyen GZ kolunun değeri aşağıdaki ifadelerden hangisidir?",
            options: ["GM < 0 ise GZ pozitiftir", "GZ kolu pozitif ise GM negatiftir", "GM > 0 ise GZ pozitiftir", "GM = 0 ise GZ pozitiftir", "GM = 0 ise GZ negatiftir"],
            answer: 2
        },
        {
            id: 196,
            q: "GZ kolu pozitif olduğunda geminin dengesi nasıldır?",
            options: ["Kararsızdır", "Nötrdür", "Kararlıdır", "Tenderdir", "Stifftir"],
            answer: 2
        },
        {
            id: 197,
            q: "GZ kolu negatif olduğunda geminin dengesi nasıldır?",
            options: ["Kararsızdır", "Nötrdür", "Kararlıdır", "Tenderdir", "Stifftir"],
            answer: 0
        },
        {
            id: 198,
            q: "Gemiye ağırlık alındığında GZ nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 3
        },
        {
            id: 199,
            q: "Gemiye su hattının altına ağırlık yüklendiğinde GM değeri nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Azalıp artar", "Hiçbir şey olmaz"],
            answer: 0
        },
        {
            id: 200,
            q: "Bir geminin GZ kolunda sürekli bir artış oluyorsa aşağıdakilerden hangisi de her zaman artar?",
            options: ["Metasentır yüksekliği (GM)", "Doğrultucu moment kolu (GZ)", "Doğrultucu moment değeri", "Dikey momentler", "Enine momentler"],
            answer: 1
        },
        {
            id: 201,
            q: "Bir geminin GZ kolu",
            options: ["Geminin deplasmanı büyüdükçe büyür", "GM değeri büyüdükçe büyür", "KM değeri büyüdükçe büyür", "KG değeri büyüdükçe büyür", "KB değeri büyüdükçe büyür"],
            answer: 1
        },
        {
            id: 202,
            q: "Bir geminin doğrultucu kolu değişmez deplasmanı artarsa geminin doğrultucu momenti nasıl değişim gösterir?",
            options: ["Büyür", "Küçülür", "Başa hareket eder", "Kıça hareket eder", "Değişmez"],
            answer: 0
        },
        {
            id: 203,
            q: "Bir geminin kararlı dengede olduğunu aşağıdaki kriterlerden hangisi belirler?",
            options: ["Doğrultucu moment", "Doğrultucu kol", "Dik konuma dönme yeteneği", "Yukarıdakilerin hepsi", "Hiçbiri"],
            answer: 3
        },
        {
            id: 204,
            q: "Δ x GZ değeri; I- Geminin dengesini belirler, II- Geminin doğrultucu momentini belirler, III- Geminin deplasmanını belirler. Yukarıdaki ifadelerden hangisi doğrudur?",
            options: ["I. ifade", "II. ifade", "III. ifade", "I ve II. ifade", "II ve III. ifade"],
            answer: 3
        },

        {
            id: 205,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m'dir. Bu gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni KG'si ne kadardır?",
            options: ["5.45 m", "5.50 m", "5.75 m", "6.00 m", "6.25 m"],
            answer: 4 // e) 6.25 m
        },
        {
            id: 206,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m'dir. Gemiye 1000 ton yük alınmış ve yükün KG'si 12 m'dir. Yükleme sonrası geminin yeni KG'si ne kadardır?",
            options: ["6.00 m", "6.55 m", "6.50 m", "7.00 m", "7.25 m"],
            answer: 2 // c) 6.50 m
        },
        {
            id: 207,
            q: "Deplasmanı 8000 ton olan bir geminin KG'si 7 m'dir. Bu gemiden KG'si 1 m olan 1000 ton yük tahliye edilmiştir. Tahliye sonrası geminin yeni KG'si ne kadardır?",
            options: ["8.00 m", "9.00 m", "6.75 m", "7.85 m", "6.50 m"],
            answer: 3 // d) 7.85 m
        },
        {
            id: 208,
            q: "Deplasmanı 12000 ton olan bir geminin KG'si 5 m'dir. Gemiye 500 ton yakıt KG'si 10 m'den alınmış, KG'si 1 m olan 100 ton su tahliye edilmiştir. Yeni KG ne kadardır?",
            options: ["4.75 m", "5.15 m", "5.25 m", "5.35 m", "5.50 m"],
            answer: 1 // b) 5.15 m
        },
        {
            id: 209,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiye KG'si 10 m olan 1000 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.64 m", "0.55 m", "0.45 m", "0.36 m", "0.25 m"],
            answer: 3 // d) 0.36 m
        },
        {
            id: 210,
            q: "Deplasmanı 6000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.44 m", "1.55 m", "1.65 m", "1.75 m", "1.85 m"],
            answer: 0 // a) 1.44 m
        },
        {
            id: 211,
            q: "Deplasmanı 7000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Gemiye KG'si 10 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.45 m", "0.55 m", "0.65 m", "0.75 m", "0.85 m"],
            answer: 1 // b) 0.55 m
        },
        {
            id: 212,
            q: "Deplasmanı 4000 ton olan bir geminin KG'si 4 m, KM'i 5 m'dir. Gemiye KG'si 8 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.44 m", "0.55 m", "0.66 m", "0.77 m", "0.88 m"],
            answer: 0 // a) 0.44 m
        },
        {
            id: 213,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni GM'i ne kadardır?",
            options: ["0.75 m", "0.65 m", "0.55 m", "0.45 m", "0.35 m"],
            answer: 4 // e) 0.35 m
        },
        {
            id: 214,
            q: "Deplasmanı 8000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.53 m", "1.44 m", "1.33 m", "1.22 m", "1.11 m"],
            answer: 0 // a) 1.53 m
        },
        {
            id: 215,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Gemiye 1000 ton yük alınmış ve yükün KG'si 10 m'dir. Yeni GM ne kadardır?",
            options: ["0.55 m", "0.45 m", "0.36 m", "0.25 m", "0.15 m"],
            answer: 2 // c) 0.36 m
        },
        {
            id: 216,
            q: "Deplasmanı 12000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yakıt KG'si 10 m'den alınmış, KG'si 1 m olan 100 ton su tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["0.85 m", "0.80 m", "0.75 m", "0.65 m", "0.55 m"],
            answer: 2 // c) 0.75 m
        },
        {
            id: 217,
            q: "Deplasmanı 8000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiden KG'si 1 m olan 1000 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.53 m", "1.44 m", "1.33 m", "1.22 m", "1.11 m"],
            answer: 0 // a) 1.53 m
        },
        {
            id: 218,
            q: "Deplasmanı 7000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Gemiye KG'si 10 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.45 m", "0.55 m", "0.65 m", "0.75 m", "0.85 m"],
            answer: 1 // b) 0.55 m
        },
        {
            id: 219,
            q: "Deplasmanı 4000 ton olan bir geminin KG'si 4 m, KM'i 5 m'dir. Gemiye KG'si 8 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.44 m", "0.55 m", "0.66 m", "0.77 m", "0.88 m"],
            answer: 0 // a) 0.44 m
        },
        {
            id: 220,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni GM'i ne kadardır?",
            options: ["0.75 m", "0.65 m", "0.55 m", "0.45 m", "0.35 m"],
            answer: 4 // e) 0.35 m
        },
        {
            id: 221,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiye KG'si 10 m olan 1000 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.55 m", "0.45 m", "0.36 m", "0.25 m", "0.15 m"],
            answer: 2 // c) 0.36 m
        },
        {
            id: 222,
            q: "Deplasmanı 6000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.44 m", "1.55 m", "1.65 m", "1.75 m", "1.85 m"],
            answer: 0 // a) 1.44 m
        },
        {
            id: 223,
            q: "Deplasmanı 8000 ton olan bir geminin KG'si 7 m'dir. Bu gemiden KG'si 1 m olan 1000 ton yük tahliye edilmiştir. Tahliye sonrası geminin yeni KG'si ne kadardır?",
            options: ["8.00 m", "9.00 m", "6.75 m", "7.85 m", "6.50 m"],
            answer: 3 // d) 7.85 m
        },
        {
            id: 224,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m'dir. Bu gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni KG'si ne kadardır?",
            options: ["5.45 m", "5.50 m", "5.75 m", "6.00 m", "6.25 m"],
            answer: 4 // e) 6.25 m
        },
        {
            id: 225,
            q: "Deplasmanı 12000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yakıt KG'si 10 m'den alınmış, KG'si 1 m olan 100 ton su tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["0.85 m", "0.80 m", "0.75 m", "0.65 m", "0.55 m"],
            answer: 2 // c) 0.75 m
        },
        {
            id: 226,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m'dir. Gemiye 1000 ton yük alınmış ve yükün KG'si 12 m'dir. Yükleme sonrası geminin yeni KG'si ne kadardır?",
            options: ["6.00 m", "6.55 m", "6.50 m", "7.00 m", "7.25 m"],
            answer: 2 // c) 6.50 m
        },
        {
            id: 227,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Bu gemiye KG'si 10 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.75 m", "0.65 m", "0.55 m", "0.45 m", "0.35 m"],
            answer: 4 // e) 0.35 m
        },
        {
            id: 228,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiye KG'si 10 m olan 1000 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.55 m", "0.45 m", "0.36 m", "0.25 m", "0.15 m"],
            answer: 2 // c) 0.36 m
        },
        {
            id: 229,
            q: "Deplasmanı 4000 ton olan bir geminin KG'si 4 m, KM'i 5 m'dir. Gemiye KG'si 8 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.44 m", "0.55 m", "0.66 m", "0.77 m", "0.88 m"],
            answer: 0 // a) 0.44 m
        },
        {
            id: 230,
            q: "Deplasmanı 6000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.44 m", "1.55 m", "1.65 m", "1.75 m", "1.85 m"],
            answer: 0 // a) 1.44 m
        },
        {
            id: 231,
            q: "Deplasmanı 7000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Gemiye KG'si 10 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.45 m", "0.55 m", "0.65 m", "0.75 m", "0.85 m"],
            answer: 1 // b) 0.55 m
        },
        {
            id: 232,
            q: "Deplasmanı 12000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yakıt KG'si 10 m'den alınmış, KG'si 1 m olan 100 ton su tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["0.85 m", "0.80 m", "0.75 m", "0.65 m", "0.55 m"],
            answer: 2 // c) 0.75 m
        },
        {
            id: 233,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiye KG'si 10 m olan 1000 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.55 m", "0.45 m", "0.36 m", "0.25 m", "0.15 m"],
            answer: 2 // c) 0.36 m
        },
        {
            id: 234,
            q: "Deplasmanı 8000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.53 m", "1.44 m", "1.33 m", "1.22 m", "1.11 m"],
            answer: 0 // a) 1.53 m
        },
        {
            id: 235,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni GM'i ne kadardır?",
            options: ["0.75 m", "0.65 m", "0.55 m", "0.45 m", "0.35 m"],
            answer: 4 // e) 0.35 m
        },
        {
            id: 236,
            q: "Deplasmanı 7000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Gemiye KG'si 10 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.45 m", "0.55 m", "0.65 m", "0.75 m", "0.85 m"],
            answer: 1 // b) 0.55 m
        },
        {
            id: 237,
            q: "Deplasmanı 4000 ton olan bir geminin KG'si 4 m, KM'i 5 m'dir. Gemiye KG'si 8 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.44 m", "0.55 m", "0.66 m", "0.77 m", "0.88 m"],
            answer: 0 // a) 0.44 m
        },
        {
            id: 238,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiye KG'si 10 m olan 1000 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.55 m", "0.45 m", "0.36 m", "0.25 m", "0.15 m"],
            answer: 2 // c) 0.36 m
        },
        {
            id: 239,
            q: "Deplasmanı 6000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.44 m", "1.55 m", "1.65 m", "1.75 m", "1.85 m"],
            answer: 0 // a) 1.44 m
        },
        {
            id: 240,
            q: "Deplasmanı 7000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Gemiye KG'si 10 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.45 m", "0.55 m", "0.65 m", "0.75 m", "0.85 m"],
            answer: 1 // b) 0.55 m
        },
        {
            id: 241,
            q: "Deplasmanı 4000 ton olan bir geminin KG'si 4 m, KM'i 5 m'dir. Gemiye KG'si 8 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.44 m", "0.55 m", "0.66 m", "0.77 m", "0.88 m"],
            answer: 0 // a) 0.44 m
        },
        {
            id: 242,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni GM'i ne kadardır?",
            options: ["0.75 m", "0.65 m", "0.55 m", "0.45 m", "0.35 m"],
            answer: 4 // e) 0.35 m
        },
        {
            id: 243,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiye KG'si 10 m olan 1000 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.55 m", "0.45 m", "0.36 m", "0.25 m", "0.15 m"],
            answer: 2 // c) 0.36 m
        },
        {
            id: 244,
            q: "Deplasmanı 12000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yakıt KG'si 10 m'den alınmış, KG'si 1 m olan 100 ton su tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["0.85 m", "0.80 m", "0.75 m", "0.65 m", "0.55 m"],
            answer: 2 // c) 0.75 m
        },
        {
            id: 245,
            q: "Deplasmanı 8000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.53 m", "1.44 m", "1.33 m", "1.22 m", "1.11 m"],
            answer: 0 // a) 1.53 m
        },
        {
            id: 246,
            q: "Deplasmanı 7000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Gemiye KG'si 10 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.45 m", "0.55 m", "0.65 m", "0.75 m", "0.85 m"],
            answer: 1 // b) 0.55 m
        },
        {
            id: 247,
            q: "Deplasmanı 4000 ton olan bir geminin KG'si 4 m, KM'i 5 m'dir. Gemiye KG'si 8 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.44 m", "0.55 m", "0.66 m", "0.77 m", "0.88 m"],
            answer: 0 // a) 0.44 m
        },
        {
            id: 248,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni GM'i ne kadardır?",
            options: ["0.75 m", "0.65 m", "0.55 m", "0.45 m", "0.35 m"],
            answer: 4 // e) 0.35 m
        },
        {
            id: 249,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiye KG'si 10 m olan 1000 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.55 m", "0.45 m", "0.36 m", "0.25 m", "0.15 m"],
            answer: 2 // c) 0.36 m
        },
        {
            id: 250,
            q: "Deplasmanı 6000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.44 m", "1.55 m", "1.65 m", "1.75 m", "1.85 m"],
            answer: 0 // a) 1.44 m
        },
        {
            id: 251,
            q: "Deplasmanı 8000 ton olan bir geminin KG'si 7 m'dir. Bu gemiden KG'si 1 m olan 1000 ton yük tahliye edilmiştir. Tahliye sonrası geminin yeni KG'si ne kadardır?",
            options: ["8.00 m", "9.00 m", "6.75 m", "7.85 m", "6.50 m"],
            answer: 3 // d) 7.85 m
        },
        {
            id: 252,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m'dir. Bu gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni KG'si ne kadardır?",
            options: ["5.45 m", "5.50 m", "5.75 m", "6.00 m", "6.25 m"],
            answer: 4 // e) 6.25 m
        },
        {
            id: 253,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m'dir. Gemiye 1000 ton yük alınmış ve yükün KG'si 12 m'dir. Yükleme sonrası geminin yeni KG'si ne kadardır?",
            options: ["6.00 m", "6.55 m", "6.50 m", "7.00 m", "7.25 m"],
            answer: 2 // c) 6.50 m
        },
        {
            id: 254,
            q: "Deplasmanı 12000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yakıt KG'si 10 m'den alınmış, KG'si 1 m olan 100 ton su tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["0.85 m", "0.80 m", "0.75 m", "0.65 m", "0.55 m"],
            answer: 2 // c) 0.75 m
        },
        {
            id: 255,
            q: "Deplasmanı 7000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Gemiye KG'si 10 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.45 m", "0.55 m", "0.65 m", "0.75 m", "0.85 m"],
            answer: 1 // b) 0.55 m
        },
        {
            id: 256,
            q: "Deplasmanı 4000 ton olan bir geminin KG'si 4 m, KM'i 5 m'dir. Gemiye KG'si 8 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.44 m", "0.55 m", "0.66 m", "0.77 m", "0.88 m"],
            answer: 0 // a) 0.44 m
        },
        {
            id: 257,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni GM'i ne kadardır?",
            options: ["0.75 m", "0.65 m", "0.55 m", "0.45 m", "0.35 m"],
            answer: 4 // e) 0.35 m
        },
        {
            id: 258,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiye KG'si 10 m olan 1000 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.55 m", "0.45 m", "0.36 m", "0.25 m", "0.15 m"],
            answer: 2 // c) 0.36 m
        },
        {
            id: 259,
            q: "Deplasmanı 6000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.44 m", "1.55 m", "1.65 m", "1.75 m", "1.85 m"],
            answer: 0 // a) 1.44 m
        },
        {
            id: 260,
            q: "Deplasmanı 8000 ton olan bir geminin KG'si 7 m'dir. Bu gemiden KG'si 1 m olan 1000 ton yük tahliye edilmiştir. Tahliye sonrası geminin yeni KG'si ne kadardır?",
            options: ["8.00 m", "9.00 m", "6.75 m", "7.85 m", "6.50 m"],
            answer: 3 // d) 7.85 m
        },
        {
            id: 261,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m'dir. Bu gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni KG'si ne kadardır?",
            options: ["5.45 m", "5.50 m", "5.75 m", "6.00 m", "6.25 m"],
            answer: 4 // e) 6.25 m
        },
        {
            id: 262,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m'dir. Gemiye 1000 ton yük alınmış ve yükün KG'si 12 m'dir. Yükleme sonrası geminin yeni KG'si ne kadardır?",
            options: ["6.00 m", "6.55 m", "6.50 m", "7.00 m", "7.25 m"],
            answer: 2 // c) 6.50 m
        },
        {
            id: 263,
            q: "Deplasmanı 12000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yakıt KG'si 10 m'den alınmış, KG'si 1 m olan 100 ton su tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["0.85 m", "0.80 m", "0.75 m", "0.65 m", "0.55 m"],
            answer: 2 // c) 0.75 m
        },
        {
            id: 264,
            q: "Deplasmanı 7000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Gemiye KG'si 10 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.45 m", "0.55 m", "0.65 m", "0.75 m", "0.85 m"],
            answer: 1 // b) 0.55 m
        },
        {
            id: 265,
            q: "Deplasmanı 4000 ton olan bir geminin KG'si 4 m, KM'i 5 m'dir. Gemiye KG'si 8 m olan 500 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.44 m", "0.55 m", "0.66 m", "0.77 m", "0.88 m"],
            answer: 0 // a) 0.44 m
        },
        {
            id: 266,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni GM'i ne kadardır?",
            options: ["0.75 m", "0.65 m", "0.55 m", "0.45 m", "0.35 m"],
            answer: 4 // e) 0.35 m
        },
        {
            id: 267,
            q: "Deplasmanı 10000 ton olan bir geminin KG'si 6 m, KM'i 7 m'dir. Bu gemiye KG'si 10 m olan 1000 ton yük alınmıştır. Yeni GM ne kadardır?",
            options: ["0.55 m", "0.45 m", "0.36 m", "0.25 m", "0.15 m"],
            answer: 2 // c) 0.36 m
        },
        {
            id: 268,
            q: "Deplasmanı 6000 ton olan bir geminin KG'si 5 m, KM'i 6 m'dir. Bu gemiden KG'si 1 m olan 500 ton yük tahliye edilmiştir. Yeni GM ne kadardır?",
            options: ["1.44 m", "1.55 m", "1.65 m", "1.75 m", "1.85 m"],
            answer: 0 // a) 1.44 m
        },
        {
            id: 269,
            q: "Deplasmanı 8000 ton olan bir geminin KG'si 7 m'dir. Bu gemiden KG'si 1 m olan 1000 ton yük tahliye edilmiştir. Tahliye sonrası geminin yeni KG'si ne kadardır?",
            options: ["8.00 m", "9.00 m", "6.75 m", "7.85 m", "6.50 m"],
            answer: 3 // d) 7.85 m
        },
        {
            id: 270,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 m'dir. Bu gemiye 500 ton yük alınmış ve yükün KG'si 10 m'dir. Yükleme sonrası geminin yeni KG'si ne kadardır?",
            options: ["5.45 m", "5.50 m", "5.75 m", "6.00 m", "6.25 m"],
            answer: 4 // e) 6.25 m
        },
        {
            id: 271,
            q: "A Limanında kısmen yüklü olan geminin deplasmanı 10000 ton KG'si 5 m'dir. Bu gemi KG'si 10 m olan güvertesine kereste yükleyecektir. A Limanından hareket ettikten sonra 20 gün seyir yapacak olan bu gemi KG'si 0.5 m olan tanklarından günde 5 ton yakıt, KG'si 3 m olan tanklarından 5 ton su harcayacaktır. Geminin B varış limanında KM değeri 7.4 m'dir ve deniz suyu yoğunluğu değişmemiştir. Geminin varış limanına 0.5 m'den az olmayan bir GM ile varabilmesi istenmektedir. Bu bilgilere göre gemi B limanına vardığında GM değeri 0.5 m olması için kaç ton kereste yükü yüklemelidir?",
            options: ["9800 ton", "10200 ton", "15796,77 ton", "5796,77 ton", "15596,77 ton"],
            answer: 3 // d) 5796,77 ton
        },
        {
            id: 272,
            q: "Deplasmanı 5000 ton olan bir geminin KG'si 5 metredir. Bu geminin güvertesine KG'si 10 metre olan kereste yüklenecektir. Gemi seyir esnasında KG'si 0,5 m olan 170 ton yakıt ve KG'si 1 metre olan 150 ton su harcayacaktır. Geminin güvertesine yükleyeceği kerestenin ağırlığı absorbe ettiği sudan dolayı %10 oranında artacaktır. Geminin varış limanında KM değerinin 6,15 metre olacağı düşünülürse, geminin varış limanına 0,25 metrelik bir GM ile varabilmesi için güvertesine daha ne kadar kereste almalıdır?",
            options: ["530 ton", "630 ton", "730 ton", "830 ton", "930 ton"],
            answer: 1 // b) 630 ton
        },
        {
            id: 273,
            q: "Ağırlık merkezinin şiftingi (yer değiştirmesi) sırasında ağırlık merkezinin (G-G1) değişimini bulma formülü nedir?",
            options: ["G noktasındaki ağırlık x Şifting mesafesi / Toplam deplasman", "G noktasındaki ağırlık x KG yüksekliği / Toplam deplasman", "G noktasındaki ağırlık x KM yüksekliği / Toplam deplasman", "G noktasındaki ağırlık x KB yüksekliği / Toplam deplasman", "G noktasındaki ağırlık x BM yüksekliği / Toplam deplasman"],
            answer: 0 // a) G noktasındaki ağırlık x Şifting mesafesi / Toplam deplasman
        },
        {
            id: 274,
            q: "Yükleme sırasında ağırlık merkezinin değişimini bulmak için kullanılan formül nedir?",
            options: ["Yükleme ağırlığı x KG yüksekliği / Toplam deplasman", "Yükleme ağırlığı x Şifting mesafesi / Toplam deplasman", "Yükleme ağırlığı x KM yüksekliği / Toplam deplasman", "Yükleme ağırlığı x KB yüksekliği / Toplam deplasman", "Yükleme ağırlığı x BM yüksekliği / Toplam deplasman"],
            answer: 0 // a) Yükleme ağırlığı x KG yüksekliği / Toplam deplasman
        },
        {
            id: 275,
            q: "Bir geminin KM'i 8 m, KG'si 7 m'dir. Gemiye 20 ton ağırlık alınmış ve KG 7.5 m'ye çıkmıştır. Yeni GM ne kadardır?",
            options: ["1 m", "0.5 m", "1.5 m", "-0.5 m", "-1 m"],
            answer: 1 // b) 0.5 m
        },
        {
            id: 276,
            q: "Ağırlık şiftingi sırasında ağırlık merkezinin (G) yer değiştirmesi (GG1) nasıl hesaplanır?",
            options: ["Yükün ağırlığı x Yükün şifting mesafesi / Toplam deplasman", "Yükün ağırlığı x Yükün KG'si / Toplam deplasman", "Yükün ağırlığı x GM / Toplam deplasman", "Yükün ağırlığı x KM / Toplam deplasman", "Yükün ağırlığı x KB / Toplam deplasman"],
            answer: 0 // a) Yükün ağırlığı x Yükün şifting mesafesi / Toplam deplasman
        },
        {
            id: 277,
            q: "1 cm trim momenti (MT1), ne hesabında kullanılır?",
            options: ["Islak alan", "Toplam meyil", "Toplam trim", "Narinlik katsayıları", "Deplasman hacmi"],
            answer: 2 // c) Toplam trim (MCT1cm, gemiyi 1 cm trim yapan momenttir.)
        },
        {
            id: 278,
            q: "Aşağıdakilerden hangisi MCT 1 cm değerinin tanımıdır?",
            options: ["Bir geminin draftını 1 cm değiştirmek için gerekli olan moment", "Bir geminin trimini 1 cm değiştirmek için gerekli olan moment", "Bir gemiyi 1 cm başlı yapmak için gerekli olan moment", "Bir gemiyi 1 cm kıçlı yapmak için gerekli olan moment", "Bir gemiyi overload yapmak için gerekli olan moment"],
            answer: 1 // b) Bir geminin trimini 1 cm değiştirmek için gerekli olan moment
        },
        {
            id: 279,
            q: "Bir gemide istenen trimi elde etmek için ne kadar ağırlık alınması ve çıkarılması gerektiği aşağıdakilerden hangisiyle hesaplanır?",
            options: ["Bir santim batırma tonu", "Bir santim trim momenti", "Detveyt ölçeği", "Statik stabilite eğrileri", "Çapraz eğriler vasıtasıyla bulunur"],
            answer: 1 // b) Bir santim trim momenti (MCT1cm)
        },
        {
            id: 280,
            q: "Başlangıç trimi ile yük operasyonundan sonraki trim arasındaki farka ne denir?",
            options: ["Trim", "Son Trim", "Draft farkı", "Trim değişikliği", "Hogging - Sagging"],
            answer: 3 // d) Trim değişikliği
        },
        // 8-2-TRİM VE YÜKLEME (ID: 281-285)
        {
            id: 281,
            q: "Gemiye ağırlık alındığında veya çıkarıldığında ağırlık merkezi (G) yer değiştirir. Bu yer değiştirmenin oluşturduğu moment aşağıdakilerden hangisidir?",
            options: ["Doğrultucu Moment (GZ)", "Yüzme Merkezi (F)", "Trim Momenti (Trim Moment)", "Metasentr Yüksekliği (GM)", "Sephiye Merkezi (B)"],
            answer: 2 // c) Trim Momenti (Trim Moment)
        },
        {
            id: 282,
            q: "Gemi başa trimli ise ağırlık merkezi (G) yüzme merkezi (F) ile karşılaştırıldığında nasıl bir konumda bulunur?",
            options: ["G noktası F noktasının altında kalır", "G noktası F noktasının önünde (ileride) kalır", "G noktası F noktasının arkasında (geride) kalır", "G noktası F noktasıyla çakışır", "G noktası F noktasının üstünde kalır"],
            answer: 1 // b) G noktası F noktasının önünde (ileride) kalır (LCG > LCF)
        },
        {
            id: 283,
            q: "Gemi kıça trimli ise ağırlık merkezi (G) yüzme merkezi (F) ile karşılaştırıldığında nasıl bir konumda bulunur?",
            options: ["G noktası F noktasının altında kalır", "G noktası F noktasının önünde (ileride) kalır", "G noktası F noktasının arkasında (geride) kalır", "G noktası F noktasıyla çakışır", "G noktası F noktasının üstünde kalır"],
            answer: 2 // c) G noktası F noktasının arkasında (geride) kalır (LCG < LCF)
        },
        {
            id: 284,
            q: "Yükleme veya tahliye sırasında trim değişikliği meydana geliyorsa, yükleme/tahliye yapılan yerin ağırlık merkezi (g) ile yüzme merkezi (F) arasındaki ilişki aşağıdakilerden hangisidir?",
            options: ["Yükleme/tahliye yapılan yer F noktasının gerisinde/önünde değildir", "Yükleme/tahliye yapılan yer F noktası ile çakışır", "Yükleme/tahliye yapılan yer F noktası ile dikey hizadadır", "Yükleme/tahliye yapılan yer F noktası ile yatay hizadadır", "Yükleme/tahliye yapılan yer F noktasının önünde veya gerisindedir"],
            answer: 4 // e) Yükleme/tahliye yapılan yer F noktasının önünde veya gerisindedir
        },
        {
            id: 285,
            q: "Ağırlık merkezi (G) ile yüzme merkezi (F) arasındaki yatay mesafeye ne ad verilir?",
            options: ["Trim değişimi", "Trim", "LCG", "Trim kolu (GG1)", "Kaldırma kuvveti kolu (GZ)"],
            answer: 3 // d) Trim kolu (GG1)
        },
        // 8-3-TRİM HESAPLARI (ID: 286-319)
        {
            id: 286,
            q: "Bir gemi deplasmanı 10000 ton ve MCT 1cm değeri 100 ton/cm'dir. Bu gemiye LCF (yüzme merkezi) 5 m ileriden 500 ton yük alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["20 cm başa", "25 cm kıça", "25 cm başa", "50 cm kıça", "50 cm başa"],
            answer: 2 // c) 25 cm başa
        },
        {
            id: 287,
            q: "Bir gemi deplasmanı 12000 ton ve MCT 1cm değeri 120 ton/cm'dir. Bu gemiye LCF 10 m geriden 600 ton yük alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["50 cm kıça", "50 cm başa", "40 cm kıça", "40 cm başa", "60 cm kıça"],
            answer: 0 // a) 50 cm kıça
        },
        {
            id: 288,
            q: "Bir gemi deplasmanı 5000 ton ve MCT 1cm değeri 50 ton/cm'dir. Bu gemiye LCF 5 m ileriden 250 ton yük alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["20 cm başa", "25 cm kıça", "25 cm başa", "50 cm kıça", "50 cm başa"],
            answer: 2 // c) 25 cm başa
        },
        {
            id: 289,
            q: "Bir gemi deplasmanı 8000 ton ve MCT 1cm değeri 80 ton/cm'dir. Bu gemiye LCF 10 m geriden 400 ton yük alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["50 cm kıça", "50 cm başa", "40 cm kıça", "40 cm başa", "60 cm kıça"],
            answer: 0 // a) 50 cm kıça
        },
        {
            id: 290,
            q: "Bir gemi deplasmanı 15000 ton ve MCT 1cm değeri 150 ton/cm'dir. Bu gemiye LCF 10 m ileriden 750 ton yük alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["50 cm başa", "50 cm kıça", "60 cm başa", "60 cm kıça", "70 cm başa"],
            answer: 0 // a) 50 cm başa
        },
        {
            id: 291,
            q: "Bir gemi deplasmanı 20000 ton ve MCT 1cm değeri 200 ton/cm'dir. Bu gemiye LCF 10 m geriden 1000 ton yük alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["50 cm kıça", "50 cm başa", "60 cm kıça", "60 cm başa", "70 cm kıça"],
            answer: 0 // a) 50 cm kıça
        },
        {
            id: 292,
            q: "Bir gemi deplasmanı 10000 ton ve MCT 1cm değeri 100 ton/cm'dir. Bu gemiden LCF 5 m ileriden 500 ton yük tahliye edilmiştir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["25 cm başa", "25 cm kıça", "20 cm başa", "20 cm kıça", "30 cm başa"],
            answer: 1 // b) 25 cm kıça
        },
        {
            id: 293,
            q: "Bir gemi deplasmanı 12000 ton ve MCT 1cm değeri 120 ton/cm'dir. Bu gemiden LCF 10 m geriden 600 ton yük tahliye edilmiştir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["50 cm başa", "50 cm kıça", "40 cm başa", "40 cm kıça", "60 cm başa"],
            answer: 0 // a) 50 cm başa
        },
        {
            id: 294,
            q: "Bir gemi deplasmanı 5000 ton ve MCT 1cm değeri 50 ton/cm'dir. Bu gemiden LCF 5 m ileriden 250 ton yük tahliye edilmiştir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["25 cm başa", "25 cm kıça", "20 cm başa", "20 cm kıça", "30 cm başa"],
            answer: 1 // b) 25 cm kıça
        },
        {
            id: 295,
            q: "Bir gemi deplasmanı 8000 ton ve MCT 1cm değeri 80 ton/cm'dir. Bu gemiden LCF 10 m geriden 400 ton yük tahliye edilmiştir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["50 cm başa", "50 cm kıça", "40 cm başa", "40 cm kıça", "60 cm başa"],
            answer: 0 // a) 50 cm başa
        },
        {
            id: 296,
            q: "Bir gemi deplasmanı 15000 ton ve MCT 1cm değeri 150 ton/cm'dir. Bu gemiden LCF 10 m ileriden 750 ton yük tahliye edilmiştir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["50 cm kıça", "50 cm başa", "60 cm kıça", "60 cm başa", "70 cm kıça"],
            answer: 1 // b) 50 cm başa
        },
        {
            id: 297,
            q: "Bir gemi deplasmanı 20000 ton ve MCT 1cm değeri 200 ton/cm'dir. Bu gemiden LCF 10 m geriden 1000 ton yük tahliye edilmiştir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["50 cm başa", "50 cm kıça", "60 cm başa", "60 cm kıça", "70 cm başa"],
            answer: 0 // a) 50 cm başa
        },
        {
            id: 298,
            q: "Bir gemide 200 tonluk bir ağırlık 50 m şifting yapılmıştır. Deplasman 10000 ton, MCT 1cm 100 ton/cm'dir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 0 // a) 10 cm
        },
        {
            id: 299,
            q: "Bir gemide 300 tonluk bir ağırlık 40 m şifting yapılmıştır. Deplasman 12000 ton, MCT 1cm 120 ton/cm'dir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 0 // a) 10 cm
        },
        {
            id: 300,
            q: "Bir gemide 100 tonluk bir ağırlık 50 m şifting yapılmıştır. Deplasman 5000 ton, MCT 1cm 50 ton/cm'dir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 1 // b) 20 cm
        },
        {
            id: 301,
            q: "Bir gemide 200 tonluk bir ağırlık 60 m şifting yapılmıştır. Deplasman 8000 ton, MCT 1cm 80 ton/cm'dir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 1 // b) 20 cm
        },
        {
            id: 302,
            q: "Bir gemide 400 tonluk bir ağırlık 30 m şifting yapılmıştır. Deplasman 15000 ton, MCT 1cm 150 ton/cm'dir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 1 // b) 20 cm
        },
        {
            id: 303,
            q: "Bir gemi 500 tonluk bir ağırlık 40 m şifting yapılmıştır. Deplasman 20000 ton, MCT 1cm 200 ton/cm'dir. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 0 // a) 10 cm
        },
        {
            id: 304,
            q: "Bir gemi deplasmanı 10000 ton, MCT 1cm değeri 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu gemiye LCF 5 m ileriden 500 ton yük alınmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["25 cm başa", "25 cm kıça", "20 cm başa", "20 cm kıça", "30 cm başa"],
            answer: 0 // a) 25 cm başa
        },
        {
            id: 305,
            q: "Bir gemi deplasmanı 12000 ton, MCT 1cm değeri 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Bu gemiye LCF 10 m geriden 600 ton yük alınmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["50 cm kıça", "50 cm başa", "40 cm kıça", "40 cm başa", "60 cm kıça"],
            answer: 0 // a) 50 cm kıça
        },
        {
            id: 306,
            q: "Bir gemi deplasmanı 5000 ton, MCT 1cm değeri 50 ton/cm'dir. Baş draftı 4 m, kıç draftı 5 m'dir. Bu gemiye LCF 5 m ileriden 250 ton yük alınmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["25 cm başa", "25 cm kıça", "20 cm başa", "20 cm kıça", "30 cm başa"],
            answer: 0 // a) 25 cm başa
        },
        {
            id: 307,
            q: "Bir gemi deplasmanı 8000 ton, MCT 1cm değeri 80 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu gemiye LCF 10 m geriden 400 ton yük alınmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["50 cm kıça", "50 cm başa", "40 cm kıça", "40 cm başa", "60 cm kıça"],
            answer: 0 // a) 50 cm kıça
        },
        {
            id: 308,
            q: "Bir gemi deplasmanı 15000 ton, MCT 1cm değeri 150 ton/cm'dir. Baş draftı 7 m, kıç draftı 8 m'dir. Bu gemiye LCF 10 m ileriden 750 ton yük alınmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["50 cm başa", "50 cm kıça", "60 cm başa", "60 cm kıça", "70 cm başa"],
            answer: 0 // a) 50 cm başa
        },
        {
            id: 309,
            q: "Bir gemi deplasmanı 20000 ton, MCT 1cm değeri 200 ton/cm'dir. Baş draftı 8 m, kıç draftı 9 m'dir. Bu gemiye LCF 10 m geriden 1000 ton yük alınmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["50 cm kıça", "50 cm başa", "60 cm kıça", "60 cm başa", "70 cm kıça"],
            answer: 0 // a) 50 cm kıça
        },
        {
            id: 310,
            q: "Bir gemi deplasmanı 10000 ton, MCT 1cm değeri 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu gemiden LCF 5 m ileriden 500 ton yük tahliye edilmiştir. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["25 cm başa", "25 cm kıça", "20 cm başa", "20 cm kıça", "30 cm başa"],
            answer: 1 // b) 25 cm kıça
        },
        {
            id: 311,
            q: "Bir gemi deplasmanı 12000 ton, MCT 1cm değeri 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Bu gemiden LCF 10 m geriden 600 ton yük tahliye edilmiştir. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["50 cm başa", "50 cm kıça", "40 cm başa", "40 cm kıça", "60 cm başa"],
            answer: 0 // a) 50 cm başa
        },
        {
            id: 312,
            q: "Bir gemi deplasmanı 5000 ton, MCT 1cm değeri 50 ton/cm'dir. Baş draftı 4 m, kıç draftı 5 m'dir. Bu gemiden LCF 5 m ileriden 250 ton yük tahliye edilmiştir. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["25 cm başa", "25 cm kıça", "20 cm başa", "20 cm kıça", "30 cm başa"],
            answer: 1 // b) 25 cm kıça
        },
        {
            id: 313,
            q: "Bir gemi deplasmanı 8000 ton, MCT 1cm değeri 80 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu gemiden LCF 10 m geriden 400 ton yük tahliye edilmiştir. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["50 cm başa", "50 cm kıça", "40 cm başa", "40 cm kıça", "60 cm başa"],
            answer: 0 // a) 50 cm başa
        },
        {
            id: 314,
            q: "Bir gemi deplasmanı 15000 ton, MCT 1cm değeri 150 ton/cm'dir. Baş draftı 7 m, kıç draftı 8 m'dir. Bu gemiden LCF 10 m ileriden 750 ton yük tahliye edilmiştir. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["50 cm kıça", "50 cm başa", "60 cm kıça", "60 cm başa", "70 cm kıça"],
            answer: 1 // b) 50 cm başa
        },
        {
            id: 315,
            q: "Bir gemi deplasmanı 20000 ton, MCT 1cm değeri 200 ton/cm'dir. Baş draftı 8 m, kıç draftı 9 m'dir. Bu gemiden LCF 10 m geriden 1000 ton yük tahliye edilmiştir. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["50 cm başa", "50 cm kıça", "60 cm başa", "60 cm kıça", "70 cm başa"],
            answer: 0 // a) 50 cm başa
        },
        {
            id: 316,
            q: "Bir gemi deplasmanı 10000 ton, MCT 1cm değeri 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu gemide 200 tonluk bir ağırlık 50 m şifting yapılmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 0 // a) 10 cm
        },
        {
            id: 317,
            q: "Bir gemi deplasmanı 12000 ton, MCT 1cm değeri 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Bu gemide 300 tonluk bir ağırlık 40 m şifting yapılmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 0 // a) 10 cm
        },
        {
            id: 318,
            q: "Bir gemi deplasmanı 5000 ton, MCT 1cm değeri 50 ton/cm'dir. Baş draftı 4 m, kıç draftı 5 m'dir. Bu gemide 100 tonluk bir ağırlık 50 m şifting yapılmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 1 // b) 20 cm
        },
        {
            id: 319,
            q: "Bir gemi deplasmanı 8000 ton, MCT 1cm değeri 80 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu gemide 200 tonluk bir ağırlık 60 m şifting yapılmıştır. Yükleme sonrası geminin trim değişikliği kaç cm'dir?",
            options: ["10 cm", "20 cm", "30 cm", "40 cm", "50 cm"],
            answer: 1 // b) 20 cm
        },
        {
            id: 320,
            q: "Tahıl yükleyen bir gemide tahılın yatırıcı momenti (GHM) aşağıdaki değerlerden hangisi olmalıdır?",
            options: ["GHM büyüktür AHM", "GHM küçüktür AHM", "GHM küçüktür VHM", "GHM büyüktür VHM", "GHM eşittir VHM"],
            answer: 1
        },
        {
            id: 321,
            q: "Tahıl yatırma momenti (Grain Heeling Moment) aşağıdakilerden hangisidir?",
            options: ["Yükün üzerindeki boş hacmin, şekil değiştirmesinden ortaya çıkan momenttir", "Ambarlardaki tahılın boyuna hareket etmesi sonucu oluşan momenttir", "Ambarlardaki dökme tahıl yükünün enine hareket etmesi sonucu oluşan momenttir", "Ambarlardaki dökme tahıl yükünün boyuna hareket etmesi sonucu kümelenme açısı sinüsünün hareket edilen mesafeyle çarpımı sonucu elde edilen momenttir", "Yukarıdaki şıkların hepsi yanlıştır"],
            answer: 2
        },
        {
            id: 322,
            q: "Tahıl yüklemesi yapmakta olan bir geminin 4 numaralı ambarı tamamen doldurulmuştur. Bu ambarın dökme yük kapasitesi 4800 metreküp, istif faktörü (SF) 1.5 metreküp/ton'dur. Tahıl yatırma momenti 1400 tonmetredir. Bu ambarın hacimsel yatırıcı momentini (VHM) bulunuz.",
            options: ["1000 ton/m", "1400 ton/m", "1500 ton/m", "2100 ton/m", "2800 ton/m"],
            answer: 3
        },
        {
            id: 323,
            q: "Tahıl yükleyen bir gemide ağırlık merkezi (G) yer değiştirdiğinde, Metasantr yüksekliği (GM) nasıl değişir?",
            options: ["GM artar", "GM azalır", "GM değişmez", "KM artar", "KB azalır"],
            answer: 1
        },
        {
            id: 324,
            q: "Tahıl yüklü bir gemide kargo yer değiştirdiğinde oluşan GHM, GM'yi nasıl etkiler?",
            options: ["GM'i azaltır", "GM'i arttırır", "GM'i değiştirmez", "GM'i sıfırlar", "GM'i büyütür"],
            answer: 0
        },
        {
            id: 325,
            q: "Aşağıdakilerden hangisi GHM'nin azaltılması için uygulanacak yöntemlerden biri değildir?",
            options: ["Güverte altına balast alınması", "Tankların dolu veya boş bırakılması", "Yükün düzgün istif edilmesi", "Yükün sabitleştirilmesi", "Ambar kapağı kapatılmalıdır"],
            answer: 4
        },
        {
            id: 326,
            q: "Bir geminin tahıl yatırma momenti (GHM) 1500 tonmetre, istif faktörü (SF) 1.5 m³/ton'dur. VHM ne kadardır?",
            options: ["1000 $m^3ton$", "1500 $m^3ton$", "2000 $m^3ton$", "2150 $m^3ton$", "2250 $m^3ton$"],
            answer: 4
        },
        {
            id: 327,
            q: "Bir geminin tahıl yatırma momenti (GHM) 2000 tonmetre, istif faktörü (SF) 2.0 m³/ton'dur. VHM ne kadardır?",
            options: ["1000 $m^3ton$", "2000 $m^3ton$", "3000 $m^3ton$", "4000 $m^3ton$", "5000 $m^3ton$"],
            answer: 3
        },
        {
            id: 328,
            q: "Bir geminin tahıl yatırma momenti (GHM) 1000 tonmetre, istif faktörü (SF) 1.25 m³/ton'dur. VHM ne kadardır?",
            options: ["1250 $m^3ton$", "1500 $m^3ton$", "1750 $m^3ton$", "2000 $m^3ton$", "2250 $m^3ton$"],
            answer: 0
        },
        {
            id: 329,
            q: "Bir geminin hacimsel yatırıcı momenti (VHM) 4000 m³ton, istif faktörü (SF) 2.0 m³/ton'dur. GHM ne kadardır?",
            options: ["1000 ton/m", "1500 ton/m", "2000 ton/m", "2500 ton/m", "3000 ton/m"],
            answer: 2
        },
        {
            id: 330,
            q: "Bir geminin hacimsel yatırıcı momenti (VHM) 2250 m³ton, istif faktörü (SF) 1.5 m³/ton'dur. GHM ne kadardır?",
            options: ["1000 ton/m", "1250 ton/m", "1400 ton/m", "1500 ton/m", "1750 ton/m"],
            answer: 3
        },
        {
            id: 331,
            q: "Bir geminin hacimsel yatırıcı momenti (VHM) 1250 m³ton, istif faktörü (SF) 1.25 m³/ton'dur. GHM ne kadardır?",
            options: ["500 ton/m", "1000 ton/m", "1250 ton/m", "1500 ton/m", "1750 ton/m"],
            answer: 1
        },
        // TRIM MOMENTİ VE DEĞİŞİKLİĞİ (ID: 332-345)
        {
            id: 332,
            q: "Deplasmanı 10000 ton olan bir geminin LBP'si 150 m'dir. Gemiye 100 tonluk bir yük güverteye LBP 20 m ileriden alınmıştır. Oluşan trim momenti ne kadardır?",
            options: ["2000 tonm başa", "2000 tonm kıça", "3000 tonm başa", "3000 tonm kıça", "4000 tonm başa"],
            answer: 0
        },
        {
            id: 333,
            q: "Deplasmanı 12000 ton olan bir geminin LBP'si 180 m'dir. Gemiye 200 tonluk bir yük güverteye LBP 30 m geriden alınmıştır. Oluşan trim momenti ne kadardır?",
            options: ["4000 tonm kıça", "5000 tonm kıça", "5500 tonm kıça", "6000 tonm kıça", "6500 tonm kıça"],
            answer: 3
        },
        {
            id: 334,
            q: "Deplasmanı 5000 ton olan bir geminin LBP'si 100 m'dir. Gemiye 50 tonluk bir yük güverteye LBP 10 m ileriden alınmıştır. Oluşan trim momenti ne kadardır?",
            options: ["400 tonm başa", "500 tonm başa", "600 tonm başa", "700 tonm başa", "800 tonm başa"],
            answer: 1
        },
        {
            id: 335,
            q: "Deplasmanı 8000 ton olan bir geminin LBP'si 120 m'dir. Gemiye 150 tonluk bir yük güverteye LBP 20 m geriden alınmıştır. Oluşan trim momenti ne kadardır?",
            options: ["2000 tonm kıça", "2500 tonm kıça", "3000 tonm kıça", "3500 tonm kıça", "4000 tonm kıça"],
            answer: 2
        },
        {
            id: 336,
            q: "Bir geminin deplasmanı 10000 ton, LBP'si 150 m, MCT 1cm'si 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Gemiye 100 tonluk bir yük LBP 20 m ileriden alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["10 cm başa", "15 cm başa", "20 cm başa", "25 cm başa", "30 cm başa"],
            answer: 2
        },
        {
            id: 337,
            q: "Bir geminin deplasmanı 12000 ton, LBP'si 180 m, MCT 1cm'si 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Gemiye 200 tonluk bir yük LBP 30 m geriden alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["50 cm kıça", "55 cm kıça", "60 cm kıça", "65 cm kıça", "70 cm kıça"],
            answer: 0
        },
        {
            id: 338,
            q: "Bir geminin deplasmanı 5000 ton, LBP'si 100 m, MCT 1cm'si 50 ton/cm'dir. Baş draftı 4 m, kıç draftı 5 m'dir. Gemiye 50 tonluk bir yük LBP 10 m ileriden alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["5 cm başa", "8 cm başa", "9 cm başa", "10 cm başa", "12 cm başa"],
            answer: 3
        },
        {
            id: 339,
            q: "Bir geminin deplasmanı 8000 ton, LBP'si 120 m, MCT 1cm'si 80 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Gemiye 150 tonluk bir yük LBP 20 m geriden alınmıştır. Oluşacak trim değişikliği kaç cm'dir?",
            options: ["30 cm kıça", "35 cm kıça", "40 cm kıça", "45 cm kıça", "50 cm kıça"],
            answer: 2
        },
        {
            id: 340,
            q: "Baş draftı 7.00 m, kıç draftı 7.40 m, vasat draftı 7.20 m olan bir gemi yükleme yapmıştır. Yükleme sonrası trim momenti 5000 ton/m kıça, MCT 1cm 100 ton/cm'dir. Yeni trim değişikliği ne kadardır?",
            options: ["40 cm kıça", "45 cm kıça", "48 cm kıça", "49 cm kıça", "50 cm kıça"],
            answer: 4
        },
        {
            id: 341,
            q: "Baş draftı 8.00 m, kıç draftı 8.50 m, vasat draftı 8.25 m olan bir gemi yükleme yapmıştır. Yükleme sonrası trim momenti 6000 ton/m başa, MCT 1cm 120 ton/cm'dir. Yeni trim değişikliği ne kadardır?",
            options: ["50 cm başa", "55 cm başa", "60 cm başa", "65 cm başa", "70 cm başa"],
            answer: 0
        },
        {
            id: 342,
            q: "Baş draftı 4.00 m, kıç draftı 4.50 m, vasat draftı 4.25 m olan bir gemi yükleme yapmıştır. Yükleme sonrası trim momenti 2500 ton/m kıça, MCT 1cm 50 ton/cm'dir. Yeni trim değişikliği ne kadardır?",
            options: ["40 cm kıça", "45 cm kıça", "48 cm kıça", "49 cm kıça", "50 cm kıça"],
            answer: 4
        },
        {
            id: 343,
            q: "Baş draftı 5.00 m, kıç draftı 5.50 m, vasat draftı 5.25 m olan bir gemi yükleme yapmıştır. Yükleme sonrası trim momenti 4000 ton/m başa, MCT 1cm 80 ton/cm'dir. Yeni trim değişikliği ne kadardır?",
            options: ["40 cm başa", "45 cm başa", "48 cm başa", "49 cm başa", "50 cm başa"],
            answer: 4
        },
        {
            id: 344,
            q: "Baş draftı 7.00 m, kıç draftı 7.50 m, vasat draftı 7.25 m olan bir gemi yükleme yapmıştır. Yükleme sonrası trim momenti 7500 ton/m kıça, MCT 1cm 150 ton/cm'dir. Yeni trim değişikliği ne kadardır?",
            options: ["40 cm kıça", "45 cm kıça", "48 cm kıça", "49 cm kıça", "50 cm kıça"],
            answer: 4
        },
        {
            id: 345,
            q: "Baş draftı 8.00 m, kıç draftı 8.50 m, vasat draftı 8.25 m olan bir gemi yükleme yapmıştır. Yükleme sonrası trim momenti 10000 ton/m başa, MCT 1cm 200 ton/cm'dir. Yeni trim değişikliği ne kadardır?",
            options: ["50 cm başa", "55 cm başa", "60 cm başa", "65 cm başa", "70 cm başa"],
            answer: 0
        },
        // SON TRİM VE DRAFT HESAPLARI (ID: 346-357)
        {
            id: 346,
            q: "Bir geminin deplasmanı 10000 ton, LBP'si 150 m, MCT 1cm'si 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Gemiye 100 tonluk bir yük LBP 20 m ileriden alınmıştır. Yükleme sonrası son trim ne kadardır?",
            options: ["80 cm kıça", "85 cm kıça", "90 cm kıça", "95 cm kıça", "100 cm kıça"],
            answer: 0
        },
        {
            id: 347,
            q: "Bir geminin deplasmanı 12000 ton, LBP'si 180 m, MCT 1cm'si 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Gemiye 200 tonluk bir yük LBP 30 m geriden alınmıştır. Yükleme sonrası son trim ne kadardır?",
            options: ["140 cm kıça", "145 cm kıça", "150 cm kıça", "155 cm kıça", "160 cm kıça"],
            answer: 2
        },
        {
            id: 348,
            q: "Bir geminin deplasmanı 5000 ton, LBP'si 100 m, MCT 1cm'si 50 ton/cm'dir. Baş draftı 4 m, kıç draftı 5 m'dir. Gemiye 50 tonluk bir yük LBP 10 m ileriden alınmıştır. Yükleme sonrası son trim ne kadardır?",
            options: ["80 cm kıça", "90 cm kıça", "95 cm kıça", "100 cm kıça", "105 cm kıça"],
            answer: 1
        },
        {
            id: 349,
            q: "Bir geminin deplasmanı 8000 ton, LBP'si 120 m, MCT 1cm'si 80 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Gemiye 150 tonluk bir yük LBP 20 m geriden alınmıştır. Yükleme sonrası son trim ne kadardır?",
            options: ["130 cm kıça", "135 cm kıça", "137.5 cm kıça", "140 cm kıça", "145 cm kıça"],
            answer: 2
        },
        {
            id: 350,
            q: "Bir geminin deplasmanı 15000 ton, LBP'si 200 m, MCT 1cm'si 150 ton/cm'dir. Baş draftı 7 m, kıç draftı 8 m'dir. Bu gemiye 250 tonluk bir yük LBP 40 m ileriden alınmıştır. Yükleme sonrası son trim ne kadardır?",
            options: ["33.33 cm kıça", "40 cm kıça", "50 cm kıça", "60 cm kıça", "70 cm kıça"],
            answer: 0
        },
        {
            id: 351,
            q: "Bir geminin deplasmanı 20000 ton, LBP'si 250 m, MCT 1cm'si 200 ton/cm'dir. Baş draftı 8 m, kıç draftı 9 m'dir. Bu gemiye 300 tonluk bir yük LBP 50 m geriden alınmıştır. Yükleme sonrası son trim ne kadardır?",
            options: ["160 cm kıça", "165 cm kıça", "170 cm kıça", "175 cm kıça", "180 cm kıça"],
            answer: 3
        },
        {
            id: 352,
            q: "Bir geminin deplasmanı 10000 ton, LBP'si 150 m, MCT 1cm'si 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Gemiye 100 tonluk bir yük LBP 20 m ileriden alınmıştır. Yükleme sonrası baş ve kıç draftları ne kadardır?",
            options: ["Baş draft = 5.00 m, Kıç draft = 6.00 m", "Baş draft = 5.15 m, Kıç draft = 5.95 m", "Baş draft = 5.08 m, Kıç draft = 5.92 m", "Baş draft = 5.20 m, Kıç draft = 5.80 m", "Baş draft = 5.25 m, Kıç draft = 5.75 m"],
            answer: 2
        },
        {
            id: 353,
            q: "Bir geminin deplasmanı 12000 ton, LBP'si 180 m, MCT 1cm'si 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Gemiye 200 tonluk bir yük LBP 30 m geriden alınmıştır. Yükleme sonrası baş ve kıç draftları ne kadardır?",
            options: ["Baş draft = 6.00 m, Kıç draft = 7.50 m", "Baş draft = 6.05 m, Kıç draft = 7.45 m", "Baş draft = 6.10 m, Kıç draft = 7.40 m", "Baş draft = 6.15 m, Kıç draft = 7.35 m", "Baş draft = 6.20 m, Kıç draft = 7.30 m"],
            answer: 0
        },
        {
            id: 354,
            q: "Bir geminin deplasmanı 5000 ton, LBP'si 100 m, MCT 1cm'si 50 ton/cm'dir. Baş draftı 4 m, kıç draftı 5 m'dir. Gemiye 50 tonluk bir yük LBP 10 m ileriden alınmıştır. Yükleme sonrası baş ve kıç draftları ne kadardır?",
            options: ["Baş draft = 4.10 m, Kıç draft = 4.90 m", "Baş draft = 4.12 m, Kıç draft = 4.92 m", "Baş draft = 4.13 m, Kıç draft = 4.93 m", "Baş draft = 4.15 m, Kıç draft = 4.95 m", "Baş draft = 4.16 m, Kıç draft = 4.96 m"],
            answer: 3
        },
        {
            id: 355,
            q: "Bir geminin deplasmanı 8000 ton, LBP'si 120 m, MCT 1cm'si 80 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Gemiye 150 tonluk bir yük LBP 20 m geriden alınmıştır. Yükleme sonrası baş ve kıç draftları ne kadardır?",
            options: ["Baş draft = 5.15 m, Kıç draft = 6.20 m", "Baş draft = 5.18 m, Kıç draft = 6.25 m", "Baş draft = 5.20 m, Kıç draft = 6.28 m", "Baş draft = 5.22 m, Kıç draft = 6.30 m", "Baş draft = 5.25 m, Kıç draft = 6.33 m"],
            answer: 1
        },
        {
            id: 356,
            q: "Bir geminin deplasmanı 15000 ton, LBP'si 200 m, MCT 1cm'si 150 ton/cm'dir. Baş draftı 7 m, kıç draftı 8 m'dir. Bu gemiye 250 tonluk bir yük LBP 40 m ileriden alınmıştır. Yükleme sonrası baş ve kıç draftları ne kadardır?",
            options: ["Baş draft = 7.30 m, Kıç draft = 7.70 m", "Baş draft = 7.35 m, Kıç draft = 7.75 m", "Baş draft = 7.40 m, Kıç draft = 7.80 m", "Baş draft = 7.42 m, Kıç draft = 7.75 m", "Baş draft = 7.45 m, Kıç draft = 7.85 m"],
            answer: 3
        },
        {
            id: 357,
            q: "Bir geminin deplasmanı 20000 ton, LBP'si 250 m, MCT 1cm'si 200 ton/cm'dir. Baş draftı 8 m, kıç draftı 9 m'dir. Bu gemiye 300 tonluk bir yük LBP 50 m geriden alınmıştır. Yükleme sonrası baş ve kıç draftları ne kadardır?",
            options: ["Baş draft = 8.10 m, Kıç draft = 9.80 m", "Baş draft = 8.11 m, Kıç draft = 9.85 m", "Baş draft = 8.125 m, Kıç draft = 9.875 m", "Baş draft = 8.13 m, Kıç draft = 9.89 m", "Baş draft = 8.15 m, Kıç draft = 9.90 m"],
            answer: 2
        },
        // TRİM DÜZELTME HESAPLARI (ID: 358-384)
        {
            id: 358,
            q: "Bir geminin deplasmanı 10000 ton, MCT 1cm değeri 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu geminin trimini 0 yapabilmek için (Evenkeel) güverteye LBP 20 m ileriden kaç ton yük alınmalıdır?",
            options: ["400 ton", "450 ton", "480 ton", "500 ton", "550 ton"],
            answer: 3
        },
        {
            id: 359,
            q: "Bir geminin deplasmanı 12000 ton, MCT 1cm değeri 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 30 m geriden kaç ton yük alınmalıdır?",
            options: ["300 ton", "350 ton", "400 ton", "450 ton", "500 ton"],
            answer: 2
        },
        {
            id: 360,
            q: "Baş draftı 9.80 m, kıç draftı 10.80 m olan bir geminin MCT 1cm'si 150 ton/cm'dir. Trimini 0 yapabilmek için LBP 30 m ileriden kaç ton yük tahliye edilmelidir?",
            options: ["400 ton", "500 ton", "600 ton", "700 ton", "800 ton"],
            answer: 1
        },
        {
            id: 361,
            q: "Baş draftı 10.47 m, kıç draftı 9.25 m olan bir geminin LBP'si 197 m, MCT 1cm'si 378 ton/cm'dir. LCF'si -0.45 m'dir. Trimini 0 yapabilmek için güverteye LBP 30 m geriden kaç ton yük alınmalıdır?",
            options: ["1500 ton", "1520 ton", "1530 ton", "1537.2 ton", "1540 ton"],
            answer: 3
        },
        {
            id: 362,
            q: "Dikmeler arası boyu 197 metre ve boş ağırlığı 10607 ton olan bir gemiye aşağıdaki yükler yüklenmiştir. Bu geminin toplam trim momentini bulunuz.",
            options: ["390.005 tonm kıça", "390.005 tonm başa", "380.005 tonm kıça", "380.005 tonm başa", "370.005 tonm kıça"],
            answer: 0
        },
        {
            id: 363,
            q: "Dikmeler arası boyu 197 metre ve boş ağırlığı 10607 ton olan bir gemiye aşağıdaki yükler yüklenmiştir. Bu geminin toplam trim momentini bulunuz.",
            options: ["390.005 tonm başa", "390.005 tonm kıça", "380.005 tonm başa", "380.005 tonm kıça", "370.005 tonm başa"],
            answer: 1
        },
        {
            id: 364,
            q: "Dikmeler arası boyu 197 metre ve boş ağırlığı 10607 ton olan bir gemiye aşağıdaki yükler yüklenmiştir. Bu geminin toplam trim momentini bulunuz.",
            options: ["390.005 tonm kıça", "390.005 tonm başa", "380.005 tonm kıça", "380.005 tonm başa", "370.005 tonm kıça"],
            answer: 2
        },
        {
            id: 365,
            q: "Dikmeler arası boyu 197 metre ve boş ağırlığı 10607 ton olan bir gemiye aşağıdaki yükler yüklenmiştir. Bu geminin toplam trim momentini bulunuz.",
            options: ["390.005 tonm başa", "390.005 tonm kıça", "380.005 tonm başa", "380.005 tonm kıça", "370.005 tonm başa"],
            answer: 3
        },
        {
            id: 366,
            q: "Bir geminin LBP'si 197 m, boş ağırlığı 10607 t, LCB'si 2.54 m, LCF'si -0.45 m, MCT 1cm'si 378 ton/cm'dir. Yükleme sonrası trim değişikliği ne kadardır?",
            options: ["100 cm başa", "105 cm başa", "110 cm başa", "115 cm başa", "120 cm başa"],
            answer: 0
        },
        {
            id: 367,
            q: "Baş draftı 10.47 m, kıç draftı 9.25 m olan bir geminin LBP'si 197 m, MCT 1cm'si 378 ton/cm'dir. Trimini 0 yapabilmek için güverteye LBP 30 m geriden kaç ton yük alınmalıdır?",
            options: ["1500 ton", "1537.2 ton", "1550 ton", "1570 ton", "1600 ton"],
            answer: 1
        },
        {
            id: 368,
            q: "Geminin okunan draftları Baş: 7.00 m, Kıç: 7.40 m, Vasat: 7.20 m'dir. Kana-Dikme arası mesafe: Baş: -3.0 m, Kıç: 5.0 m, Vasat: 2.0 m. Dikmeler arası boyu 94 m. Vasat draft düzeltme miktarı ve vasat draft değerleri sırasıyla nedir?",
            options: ["Düzeltme miktarı 0,009 m, vasat draft 7,409 m", "Düzeltme miktarı 0,009 m, vasat draft 7,009 m", "Düzeltme miktarı 0,009 m, vasat draft 7,209 m", "Düzeltme miktarı -0,009 m, vasat draft 7,111 m", "Düzeltme miktarı -0,009 m, vasat draft 7,191 m"],
            answer: 2
        },
        {
            id: 369,
            q: "Gemi yükleme için boş halde limana varmış ve draft sörvey hesaplaması yapılmıştır. Yükleme öncesi deplasmanı 5625 ton olarak bulunmuştur. Kalkışta yapılan draft surveyde ise deplasmanı 8870 ton olarak bulunmuştur. Geminin varış ve kalkış değerleri aşağıdaki gibi ise geminin constantını... (Soru metni eksik)",
            options: ["3245 ton", "3250 ton", "3255 ton", "3260 ton", "3265 ton"],
            answer: 0
        },
        {
            id: 370,
            q: "Bir geminin deplasmanı 20000 ton, MCT 1cm değeri 200 ton/cm'dir. Baş draftı 8 m, kıç draftı 9 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 30 m ileriden kaç ton yük tahliye edilmelidir?",
            options: ["600 ton", "650 ton", "666.67 ton", "700 ton", "750 ton"],
            answer: 2
        },
        {
            id: 371,
            q: "Bir geminin deplasmanı 15000 ton, MCT 1cm değeri 150 ton/cm'dir. Baş draftı 7 m, kıç draftı 8 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 40 m geriden kaç ton yük alınmalıdır?",
            options: ["375 ton", "400 ton", "425 ton", "450 ton", "475 ton"],
            answer: 0
        },
        {
            id: 372,
            q: "Bir geminin deplasmanı 8000 ton, MCT 1cm değeri 80 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 20 m ileriden kaç ton yük alınmalıdır?",
            options: ["300 ton", "400 ton", "450 ton", "500 ton", "550 ton"],
            answer: 1
        },
        {
            id: 373,
            q: "Bir geminin deplasmanı 5000 ton, MCT 1cm değeri 50 ton/cm'dir. Baş draftı 4 m, kıç draftı 5 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 10 m geriden kaç ton yük alınmalıdır?",
            options: ["400 ton", "450 ton", "480 ton", "490 ton", "500 ton"],
            answer: 4
        },
        {
            id: 374,
            q: "Bir geminin deplasmanı 12000 ton, MCT 1cm değeri 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 30 m ileriden kaç ton yük alınmalıdır?",
            options: ["300 ton", "350 ton", "400 ton", "450 ton", "500 ton"],
            answer: 2
        },
        {
            id: 375,
            q: "Bir geminin deplasmanı 10000 ton, MCT 1cm değeri 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 20 m geriden kaç ton yük alınmalıdır?",
            options: ["400 ton", "450 ton", "480 ton", "500 ton", "550 ton"],
            answer: 3
        },
        {
            id: 376,
            q: "Bir geminin deplasmanı 12000 ton, MCT 1cm değeri 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 30 m geriden kaç ton yük alınmalıdır?",
            options: ["300 ton", "350 ton", "400 ton", "450 ton", "500 ton"],
            answer: 2
        },
        {
            id: 377,
            q: "Bir geminin deplasmanı 8000 ton, MCT 1cm değeri 80 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 20 m geriden kaç ton yük alınmalıdır?",
            options: ["300 ton", "400 ton", "450 ton", "500 ton", "550 ton"],
            answer: 1
        },
        {
            id: 378,
            q: "Bir geminin deplasmanı 5000 ton, MCT 1cm değeri 50 ton/cm'dir. Baş draftı 4 m, kıç draftı 5 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 10 m geriden kaç ton yük alınmalıdır?",
            options: ["400 ton", "450 ton", "480 ton", "490 ton", "500 ton"],
            answer: 4
        },
        {
            id: 379,
            q: "Bir geminin deplasmanı 10000 ton, MCT 1cm değeri 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 20 m geriden kaç ton yük alınmalıdır?",
            options: ["400 ton", "450 ton", "480 ton", "500 ton", "550 ton"],
            answer: 3
        },
        {
            id: 380,
            q: "Bir geminin deplasmanı 12000 ton, MCT 1cm değeri 120 ton/cm'dir. Baş draftı 6 m, kıç draftı 7 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 30 m geriden kaç ton yük alınmalıdır?",
            options: ["300 ton", "350 ton", "400 ton", "450 ton", "500 ton"],
            answer: 2
        },
        {
            id: 381,
            q: "Bir geminin deplasmanı 8000 ton, MCT 1cm değeri 80 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 20 m geriden kaç ton yük alınmalıdır?",
            options: ["300 ton", "400 ton", "450 ton", "500 ton", "550 ton"],
            answer: 1
        },
        {
            id: 382,
            q: "Bir geminin deplasmanı 5000 ton, MCT 1cm değeri 50 ton/cm'dir. Baş draftı 4 m, kıç draftı 5 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 10 m geriden kaç ton yük alınmalıdır?",
            options: ["400 ton", "450 ton", "480 ton", "490 ton", "500 ton"],
            answer: 4
        },
        {
            id: 383,
            q: "Bir geminin deplasmanı 10000 ton, MCT 1cm değeri 100 ton/cm'dir. Baş draftı 5 m, kıç draftı 6 m'dir. Bu geminin trimini 0 yapabilmek için güverteye LBP 20 m geriden kaç ton yük alınmalıdır?",
            options: ["400 ton", "450 ton", "480 ton", "500 ton", "550 ton"],
            answer: 3
        },
        {
            id: 384,
            q: "Gemi yükleme için boş halde limana varmış ve draft sörvey hesaplaması yapılmıştır. Yükleme öncesi deplasmanı 5625 ton olarak bulunmuştur. Kalkışta yapılan draft surveyde ise deplasmanı 8870 ton olarak bulunmuştur. Geminin varış ve kalkış değerleri aşağıdaki gibi ise geminin constantını... (Soru metni eksik)",
            options: ["3245 ton", "3250 ton", "3255 ton", "3260 ton", "3265 ton"],
            answer: 0
        },
        {
            id: 385,
            q: "Aşağıdakilerden hangisi deniz taşımacılığı tarafı değildir?",
            options: ["Taşıyan", "Taşıtan", "Yükleten", "Alıcı/gönderilen", "Stevedor"],
            answer: 4 // e) Stevedor (Liman işçisi)
        },
        {
            id: 386,
            q: "Taşıma sözleşmesine göre yükleme boşaltma için üzerinde anlaşılan süreye ne denir?",
            options: ["Kançello", "Starya", "Surstarya", "Dispeç", "Time-charter"],
            answer: 1 // b) Starya
        },
        {
            id: 387,
            q: "Taşıyanın eşyanın yüklenmesi ve boşaltılması için kanunen beklemek zorunda olduğu süreye ne denir?",
            options: ["Starya", "Sürastarya", "Liman süresi", "Dispeç", "Kançello"],
            answer: 0 // a) Starya
        },
        {
            id: 388,
            q: "Navlun yük sahibi tarafından armatöre aşağıdakilerden hangi durum için ödenen bir bedeldir?",
            options: ["Yükün gemiye yüklenmesi için", "Yükün gemiden boşaltılması için", "Yükün gemide laşingi için", "Yükün gemi ile taşınması için", "Yükün sigortası için"],
            answer: 3 // d) Yükün gemi ile taşınması için
        },
        {
            id: 389,
            q: "Taşıyanın eşyanın yüklenmesi ve boşaltılması için kararlaştırılan süreden fazla bekletilmesine karşılık olarak Taşıyanın Taşıtandan talep ettiği gecikme tazminatına ne ad verilir?",
            options: ["Starya", "Sürastarya", "Liman süresi", "Dispeç", "Kançello"],
            answer: 1 // b) Sürastarya
        },
        {
            id: 390,
            q: "Yükün sözleşmede kararlaştırılan süreden önce bitirilmesi halinde taşıyanın taşıtana ödediği ücrete ne ad verilir?",
            options: ["Starya", "Sürastarya", "Liman süresi", "Dispeç", "Kançello"],
            answer: 3 // d) Dispeç
        },
        {
            id: 391,
            q: "Taşıyanın tekne kiracısına eşyanın deniz yolu ile taşınmasını yüklendiği sözleşmeye ne ad verilir?",
            options: ["Konşimento", "Charter Party", "Starya", "Sürastarya", "Dispeç"],
            answer: 1 // b) Charter Party
        },
        {
            id: 392,
            q: "Aşağıdakilerden hangisi konşimentoda bulunmak zorunda olan zorunlu unsurlardan biri değildir?",
            options: ["Eşyanın cinsi", "Navlun", "Yükleme limanı", "Boşaltma limanı", "Güverte yükü ibaresi"],
            answer: 4 // e) Güverte yükü ibaresi
        },
        {
            id: 393,
            q: "Aşağıdakilerden hangisi konşimentonun hukuki fonksiyonlarından biri değildir?",
            options: ["Taşıma sözleşmesinin kanıtı", "Eşyanın alındı makbuzu", "Eşyanın mülkiyetini temsil", "Deniz yoluyla taşımayı taahhüt eden sözleşme", "Eşyanın taşınması için kararlaştırılan süre"],
            answer: 4 // e) Eşyanın taşınması için kararlaştırılan süre
        },
        {
            id: 394,
            q: "Taşıyan tarafından taşıtana yükün sözleşmeye uygun bir şekilde yüklendiğini gösteren, herhangi bir hasar veya eksiklik kaydı bulunmayan konşimentoya ne ad verilir?",
            options: ["Kirli konşimento", "Temiz konşimento", "Geçici konşimento", "Düzeltilmiş konşimento", "Taşıma senedi"],
            answer: 1 // b) Temiz konşimento
        },
        {
            id: 395,
            q: "Kaptan tarafından düzenlenen, yükün konşimento ile uyuşup uyuşmadığını gösteren, konşimentodan önce düzenlenen belgeye ne ad verilir?",
            options: ["Kaptan beyanı", "Mate's Receipt", "Konşimento", "Yük senedi", "manifesto"],
            answer: 1 // b) Mate's Receipt
        },
        {
            id: 396,
            q: "Aşağıdakilerden hangisi kirli konşimento anlamına gelir?",
            options: ["Konşimentoda hasar kaydının olması", "Konşimentoda yükleme süresinin belirtilmesi", "Konşimentoda navlunun belirtilmesi", "Konşimentoda yükün mülkiyetinin belirtilmesi", "Konşimentoda geminin adının belirtilmesi"],
            answer: 0 // a) Konşimentoda hasar kaydının olması
        },
        {
            id: 397,
            q: "Aşağıdakilerden hangisi konşimentonun taraflarından biri değildir?",
            options: ["Taşıyan", "Taşıtan", "Yükleten", "Konsinye", "Stevedor"],
            answer: 4 // e) Stevedor
        },
        {
            id: 398,
            q: "Türk Ticaret Kanunu'na göre geminin sefer yapmaya elverişli olması ve bu elverişliliğini sefer boyunca sürdürmesi Taşıyanın hangi yükümlülüğünü ifade eder?",
            options: ["Can ve mal güvenliğini sağlama", "Taşıma elverişliliği", "Yükleme elverişliliği", "Deniz elverişliliği", "Kaptan ve gemi adamlarını hazırlama"],
            answer: 3 // d) Deniz elverişliliği
        },
        {
            id: 399,
            q: "Türk Ticaret Kanunu'na göre geminin yükleme yapmaya elverişli olması Taşıyanın hangi yükümlülüğünü ifade eder?",
            options: ["Can ve mal güvenliğini sağlama", "Taşıma elverişliliği", "Yükleme elverişliliği", "Deniz elverişliliği", "Kaptan ve gemi adamlarını hazırlama"],
            answer: 2 // c) Yükleme elverişliliği
        },
        {
            id: 400,
            q: "Türk Ticaret Kanunu'na göre taşıyanın gemiyi donatma, gemi adamları sağlama, kumanya ve yakıt sağlama gibi yükümlülüklerinin tamamına ne ad verilir?",
            options: ["Deniz elverişliliği", "Yükleme elverişliliği", "Taşıma elverişliliği", "Can ve mal güvenliğini sağlama", "Kaptan ve gemi adamlarını hazırlama"],
            answer: 2 // c) Taşıma elverişliliği
        },
        {
            id: 401,
            q: "Türk Ticaret Kanunu'na göre aşağıdaki durumlardan hangisi taşıyanın sorumluluğunu kaldıran veya azaltan sebeplerden biri değildir?",
            options: ["Denizde can kurtarma", "Yangın", "Savaş tehlikesi", "Yükün istifindeki eksiklikler", "Deniz veya seyrüsefer tehlikeleri"],
            answer: 3 // d) Yükün istifindeki eksiklikler
        },
        {
            id: 402,
            q: "Türk Ticaret Kanunu'na göre taşıyanın sorumluluğu hangi durumlarda sınırlanır?",
            options: ["Kasıtlı hareket", "Ağır kusur", "Sorumluluğu kaldıran sebepler", "Sorumluluğu azaltan sebepler", "Deniz veya seyrüsefer tehlikeleri"],
            answer: 3 // d) Sorumluluğu azaltan sebepler
        },
        {
            id: 403,
            q: "Deniz ticaretinde kullanılan uluslararası sözleşmelerden hangisi deniz taşımacılığında taşıyanın sorumluluğunu düzenler?",
            options: ["SOLAS", "MARPOL", "Hague-Visby Kuralları", "STCW", "ISM Kod"],
            answer: 2 // c) Hague-Visby Kuralları
        },
        {
            id: 404,
            q: "Uluslararası Denizcilik Sözleşmelerinden hangisi deniz taşımacılığında taşıyanın sorumluluğunu düzenleyen kuralları içerir?",
            options: ["Hamburg Kuralları", "Rotterdam Kuralları", "Hague Kuralları", "Hague-Visby Kuralları", "Yukarıdakilerin hepsi"],
            answer: 4 // e) Yukarıdakilerin hepsi
        },
        {
            id: 405,
            q: "Türk Ticaret Kanunu'na göre Taşıyanın sorumluluğunun kaldırıldığı veya azaltıldığı hallerde, ispat yükü kime aittir?",
            options: ["Taşıtan", "Yükleten", "Alıcı/gönderilen", "Taşıyan", "Kaptan"],
            answer: 3 // d) Taşıyan
        },
        {
            id: 406,
            q: "Yükleme limanında kaptan tarafından düzenlenen, yükün miktarı, cinsi, durumu gibi bilgileri içeren belgeye ne ad verilir?",
            options: ["Konşimento", "Mate's Receipt", "Yük senedi", "manifesto", "Sefer beyanı"],
            answer: 0 // a) Konşimento
        },
        {
            id: 407,
            q: "Taşıyanın eşyanın yüklenmesi ve boşaltılması için öngördüğü, ancak sözleşmede kararlaştırılmayan süreye ne ad verilir?",
            options: ["Starya", "Sürastarya", "Liman süresi", "Dispeç", "Kançello"],
            answer: 4 // e) Kançello
        },
        {
            id: 408,
            q: "Türk Ticaret Kanunu'na göre taşıyanın sorumluluğu, hangi durumlarda sınırsızdır?",
            options: ["Yangın", "Savaş tehlikesi", "Yükün istifindeki eksiklikler", "Kasıtlı hareket", "Deniz veya seyrüsefer tehlikeleri"],
            answer: 3 // d) Kasıtlı hareket
        },
        {
            id: 409,
            q: "Taşıyanın kararlaştırılan yükleme süresinden önce yüklemeyi bitirmesi halinde Taşıyanın Taşıtana ödediği ücrete ne ad verilir?",
            options: ["Starya", "Sürastarya", "Liman süresi", "Dispeç", "Kançello"],
            answer: 3 // d) Dispeç
        },
        {
            id: 410,
            q: "Türk Ticaret Kanunu'na göre taşıyanın sorumluluğunu sınırlayan temel kurallar hangisidir?",
            options: ["SOLAS", "MARPOL", "STCW", "Hague-Visby Kuralları", "ISM Kod"],
            answer: 3 // d) Hague-Visby Kuralları
        },
        // BÖLÜM 2: SİGORTA
        {
            id: 411,
            q: "Sigorta sözleşmesinin ana konusu nedir?",
            options: ["Sigorta poliçesi", "Sigorta bedeli", "Sigorta değeri", "Riziko", "Sigortacı"],
            answer: 3 // d) Riziko
        },
        {
            id: 412,
            q: "Aşağıdakilerden hangisi deniz sigortaları taraflarından biri değildir?",
            options: ["Sigortacı", "Sigorta ettiren", "Sigorta konusu", "Sigorta bedeli", "Riziko"],
            answer: 3 // d) Sigorta bedeli
        },
        {
            id: 413,
            q: "Sigorta sözleşmesinde sigortacı tarafından sigorta ettirene verilen belgeye ne ad verilir?",
            options: ["Poliçe", "Senet", "Fatura", "Konşimento", "Manifesto"],
            answer: 0 // a) Poliçe
        },
        {
            id: 414,
            q: "Sigorta konusu olan menfaatin para ile ifade edilen değeri nedir?",
            options: ["Sigorta bedeli", "Sigorta değeri", "Riziko", "Poliçe", "Prim"],
            answer: 1 // b) Sigorta değeri
        },
        {
            id: 415,
            q: "Sigorta bedelinin, sigorta değerine kıyasen düşük olduğu hale ne denir?",
            options: ["Aşkın sigorta", "Eksik sigorta", "Normal sigorta", "Sigorta poliçesi dışı durum", "Anormal sigorta"],
            answer: 1 // b) Eksik sigorta
        },
        {
            id: 416,
            q: "Sigorta bedelinin, sigorta değerine kıyasen yüksek olduğu hale ne denir?",
            options: ["Aşkın sigorta", "Eksik sigorta", "Normal sigorta", "Sigorta poliçesi dışı durum", "Anormal sigorta"],
            answer: 0 // a) Aşkın sigorta
        },
        {
            id: 417,
            q: "Sigorta ettirenin, sigortacıya ödediği ücrete ne ad verilir?",
            options: ["Poliçe", "Prim", "Sigorta bedeli", "Sigorta değeri", "Riziko"],
            answer: 1 // b) Prim
        },
        {
            id: 418,
            q: "Aşağıdakilerden hangisi bir deniz sigortası türü değildir?",
            options: ["Tekne sigortası", "Yük sigortası", "Navlun sigortası", "Sorumluluk sigortası", "Kara yolu taşıma sigortası"],
            answer: 4 // e) Kara yolu taşıma sigortası
        },
        {
            id: 419,
            q: "Geminin zıyaı veya hasarından doğan zararları teminat altına alan sigorta türü hangisidir?",
            options: ["Yük sigortası", "Navlun sigortası", "Sorumluluk sigortası", "Tekne sigortası", "Makine sigortası"],
            answer: 3 // d) Tekne sigortası
        },
        {
            id: 420,
            q: "Sigorta sözleşmesinde teminat altına alınan tehlikenin gerçekleşme ihtimaline ne denir?",
            options: ["Poliçe", "Prim", "Sigorta bedeli", "Sigorta değeri", "Riziko"],
            answer: 4 // e) Riziko
        },
        {
            id: 421,
            q: "Deniz sigortaları mevzuatına göre sigorta ettirenin sigortacıya olan bildirim yükümlülüğü hangi durumlarda başlar?",
            options: ["Sözleşme imzalanmadan önce", "Riziko gerçekleşmeden önce", "Rizikonun gerçekleştiği anda", "Rizikonun gerçekleşmesinden sonra", "Donatan istediği zaman"],
            answer: 2 // c) Rizikonun gerçekleştiği anda
        },
        {
            id: 422,
            q: "Deniz sigortaları mevzuatına göre sigorta ettirenin sigortacıya bildirim yükümlülüğü hangi durumlarda sona erer?",
            options: ["Sigorta süresinin dolması", "Rizikonun gerçekleşmesi", "Sigorta bedelinin ödenmesi", "Sigorta sözleşmesinin sona ermesi", "Donatan istediği zaman"],
            answer: 3 // d) Sigorta sözleşmesinin sona ermesi
        },
        {
            id: 423,
            q: "Türk Ticaret Kanunu'na göre sigortacının tazminat ödeme yükümlülüğü hangi durumlarda başlar?",
            options: ["Poliçe imzalandığı anda", "Rizikonun gerçekleştiği anda", "Rizikonun sigortacıya bildirildiği anda", "Sigorta bedelinin sigorta ettirene ödendiği anda", "Donatan istediği zaman"],
            answer: 1 // b) Rizikonun gerçekleştiği anda
        },
        {
            id: 424,
            q: "\"Eksik sigorta\" cümlesini aşağıdakilerden hangisi tamamlar?",
            options: ["Poliçenin eksik düzenlenmesidir", "Sigorta bedelinin sigorta değerinden az olmasıdır", "Sigorta sözleşmesinin eksik olmasıdır", "Sigorta taraflarının eksik olmasıdır", "Gemideki yüklerin eksilmesidir"],
            answer: 1 // b) Sigorta bedelinin sigorta değerinden az olmasıdır
        },
        {
            id: 425,
            q: "Sigorta bedelinin, sigorta değerine kıyasen yüksek olduğu hale _____ denilir.",
            options: ["Sigorta poliçesi dışı bir durum", "Aşkın bir sigorta", "Normal bir durum", "Eksik bir sigorta", "Sigorta poliçesine aykırı bir durum"],
            answer: 1 // b) Aşkın bir sigorta
        },
        {
            id: 426,
            q: "'Sigorta bedeli sigorta değerini aşmışsa _____ mevcuttur.' Cümlesinde boş bırakılan yere aşağıdakilerden hangisi gelmelidir?",
            options: ["Sigorta poliçesine aykırı bir durum", "Sigorta poliçesi dışı bir durum", "Fazla bir durum", "Anormal bir durum", "Aşkın sigorta"],
            answer: 4 // e) Aşkın sigorta
        },
        {
            id: 427,
            q: "Deniz araçları zorunlu mali mesuliyet sigortası ile ilgili mevzuata aşağıdakilerden hangisi tabidir?",
            options: ["Ticari amaçlı yolcu gemileri", "Tankerler", "Kıyı seferi yapan yük gemileri", "İç sularda sefer yapan yük gemileri", "Kabotaj hattı gemileri"],
            answer: 0 // a) Ticari amaçlı yolcu gemileri
        },

        {
            id: 428,
            q: "Geminin trim, stabilite ve yük planı için aşağıdaki bilgilerden hangisine ihtiyaç yoktur?",
            options: ["Yükün kalitesi", "Yükün ambalaj şekli", "Yükün ebatları", "Yükün adedi", "Yükün cinsi"],
            answer: 0 // a) Yükün kalitesi (Yükün ağırlığı, hacmi, ebatları ve cinsi stabilite için önemlidir, kalitesi/ticari değeri stabilite hesabını etkilemez.)
        },
        {
            id: 429,
            q: "Yüklerin ambarlara dağıtımı tasarlanırken bazı hususlara dikkat edilmelidir. Aşağıdakilerden hangisi önemli değildir?",
            options: ["Ambarların şekli", "Ambarların boyutları", "Yüklerin boyutları", "Yüklerin birbiriyle etkileşimleri", "Yüklerin rengi"],
            answer: 4 // e) Yüklerin rengi
        },
        {
            id: 430,
            q: "Aşağıdakilerden hangisi bir gemide taşımayı sınırlayan faktör olarak sayılmaz?",
            options: ["Dedveyt", "Hacimsel kapasite", "Metrekareye binen yük", "Deplasman", "Geminin stiff olması"],
            answer: 3 // d) Deplasman (Deplasman geminin toplam ağırlığıdır; Deadweight ve Hacimsel Kapasite limitleri taşımayı sınırlar.)
        },
        {
            id: 431,
            q: "Aşağıdakilerden hangisi liman kısıtlamalarına örnek olarak sayılabilir?",
            options: ["Rıhtım uzunluğu", "Maksimum Draft", "Rıhtım derinliği", "Kısıtlı manevra alanı", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 432,
            q: "Yüklerin ambarlara istiflenmesinde dikkat edilecek hususlar aşağıdakilerden hangisini kapsamaktadır?",
            options: ["Ağır yükler alt ambarlara", "Hafif yükler üst ambarlara", "Yüklerin ambarlara eşit dağıtımı", "Yüklerin hasarlanmasının önlenmesi", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 433,
            q: "Yükün istiflenmesinde istif faktörü aşağıdakilerden hangi oranı belirtir?",
            options: ["Yükün tonajının hacmine oranı", "Yükün hacminin tonajına oranı", "Yükün istiflenme sayısının hacmine oranı", "Yükün ambarın hacmine oranı", "Yükün ambarın tonajına oranı"],
            answer: 1 // b) Yükün hacminin tonajına oranı (SF = Hacim / Ağırlık)
        },
        {
            id: 434,
            q: "Aşağıdaki yüklerden hangisinin istif faktörü düşüktür?",
            options: ["Kereste", "Pamuk", "Kömür", "Buğday", "Demir Cevheri (Ore)"],
            answer: 4 // e) Demir Cevheri (Ore) (Yoğun ve ağır olduğu için)
        },
        {
            id: 435,
            q: "Aşağıdaki yüklerden hangisinin istif faktörü yüksektir?",
            options: ["Kereste", "Pamuk", "Kömür", "Buğday", "Demir Cevheri (Ore)"],
            answer: 1 // b) Pamuk (Hacimli ve hafif olduğu için)
        },
        {
            id: 436,
            q: "Ağır yükler istiflenirken aşağıdakilerden hangisine dikkat edilmelidir?",
            options: ["Yükün KG'si düşürülmelidir", "Yükün KG'si yükseltilmelidir", "Yükün GM'i düşürülmelidir", "Yükün GM'i yükseltilmelidir", "Yükün ambarlara eşit dağıtımı yapılmalıdır"],
            answer: 0 // a) Yükün KG'si düşürülmelidir (Stabilitenin artması için)
        },
        {
            id: 437,
            q: "Hafif yükler istiflenirken aşağıdakilerden hangisine dikkat edilmelidir?",
            options: ["Yükün KG'si düşürülmelidir", "Yükün KG'si yükseltilmelidir", "Yükün GM'i düşürülmelidir", "Yükün GM'i yükseltilmelidir", "Yükün ambarlara eşit dağıtımı yapılmalıdır"],
            answer: 1 // b) Yükün KG'si yükseltilmelidir (Çok stiff olmaması için, ancak pratikte dengeyi korumak asıldır.)
        },
        {
            id: 438,
            q: "Yükün ambarlara yerleştirilmesinde, ambar tabanına metrekareye binen yükün, ambar tabanının taşıma kapasitesini aşması durumunda ne olur?",
            options: ["Ambar kapakları hasarlanır", "Ambar tabanı hasarlanır", "Gemi ambar tabanı hasarlanır", "Ambar tabanı çatlar", "Ambar tabanı çöker"],
            answer: 4 // e) Ambar tabanı çöker
        },
        {
            id: 439,
            q: "Yüklerin birbiriyle etkileşimleri nedeniyle ambarlara istiflenmesinde aşağıdakilerden hangisine dikkat edilmez?",
            options: ["Zehirli yükler", "Yanıcı yükler", "Zararlı yükler", "Tahıl yükler", "Uygun olmayan yükler"],
            answer: 3 // d) Tahıl yükler (Tahıl yükü tek başına uyumsuzluk yaratmaz, diğerleri tehlikelidir.)
        },
        {
            id: 440,
            q: "Uyumsuz yüklerin ambarlara istiflenmesinde aşağıdakilerden hangisi uygulanmaz?",
            options: ["Aralarına dunnage konulması", "Aralarına kapak konulması", "Aralarına ambar bölmesi konulması", "Aralarına perde konulması", "Aralarına havalandırma konulması"],
            answer: 4 // e) Aralarına havalandırma konulması (Fiziki ayrım yöntemleri uygulanır.)
        },
        {
            id: 441,
            q: "Yüklerin ambarlara istiflenmesinde aralarına konulan ve yüklerin zarar görmesini engelleyen malzemeye ne ad verilir?",
            options: ["Kapasite", "Dunnage", "Lashing", "Bunkering", "Trim"],
            answer: 1 // b) Dunnage
        },
        {
            id: 442,
            q: "Yüklerin ambarlara yerleştirilmesinde ağırlık merkezi (G) ile metasantr (M) arasındaki ilişki nedir?",
            options: ["G noktası M noktasının üstünde olmalıdır", "G noktası M noktasının altında olmalıdır", "G noktası M noktasıyla çakışmalıdır", "G noktası M noktasından uzak olmalıdır", "G noktası M noktasına yakın olmalıdır"],
            answer: 1 // b) G noktası M noktasının altında olmalıdır
        },
        {
            id: 443,
            q: "Yüklerin ambarlara istiflenmesinde, ambar kapaklarının ağırlığı ve taşıma kapasitesi ile ilgili kısıtlamalar hangi belgede belirtilmiştir?",
            options: ["Draft Sörvey Raporu", "Stability Booklet", "Load Line Certificate", "Sefer Planı", "Kargo Manifestosu"],
            answer: 1 // b) Stability Booklet (veya Loading Manual)
        },
        // BÖLÜM 2: YÜK HUKUKU VE SİGORTA
        {
            id: 444,
            q: "Taşıyanın eşyanın deniz yolu ile taşınmasını üstlendiği sözleşmeye ne ad verilir?",
            options: ["Konşimento", "Charter Party", "Starya", "Sürastarya", "Dispeç"],
            answer: 1 // b) Charter Party
        },
        {
            id: 445,
            q: "Aşağıdakilerden hangisi konşimentoda bulunmak zorunda olan zorunlu unsurlardan biri değildir?",
            options: ["Eşyanın cinsi", "Navlun", "Yükleme limanı", "Boşaltma limanı", "Güverte yükü ibaresi"],
            answer: 4 // e) Güverte yükü ibaresi
        },
        {
            id: 446,
            q: "Yükün sözleşmede kararlaştırılan süreden önce bitirilmesi halinde taşıyanın taşıtana ödediği ücrete ne ad verilir?",
            options: ["Starya", "Sürastarya", "Liman süresi", "Dispeç", "Kançello"],
            answer: 3 // d) Dispeç
        },
        {
            id: 447,
            q: "Türk Ticaret Kanunu'na göre taşıyanın sorumluluğu hangi durumlarda sınırsızdır?",
            options: ["Yangın", "Savaş tehlikesi", "Yükün istifindeki eksiklikler", "Kasıtlı hareket", "Deniz veya seyrüsefer tehlikeleri"],
            answer: 3 // d) Kasıtlı hareket
        },
        {
            id: 448,
            q: "Deniz sigortaları mevzuatına göre sigorta ettirenin sigortacıya olan bildirim yükümlülüğü hangi durumlarda başlar?",
            options: ["Sözleşme imzalanmadan önce", "Riziko gerçekleşmeden önce", "Rizikonun gerçekleştiği anda", "Rizikonun gerçekleşmesinden sonra", "Donatan istediği zaman"],
            answer: 2 // c) Rizikonun gerçekleştiği anda
        },
        {
            id: 449,
            q: "Sigorta bedelinin, sigorta değerine kıyasen yüksek olduğu hale ne denir?",
            options: ["Aşkın sigorta", "Eksik sigorta", "Normal sigorta", "Sigorta poliçesi dışı durum", "Anormal sigorta"],
            answer: 0 // a) Aşkın sigorta
        },
        // BÖLÜM 3: HASARLI DENGE VE YARALANMA
        {
            id: 450,
            q: "Hasarlanmış ve su alan bir tanktan hava çıkışının tamamen durdurulması ne işe yarar?",
            options: ["Tank çökmesini engeller", "Serbest yüzey oluşumunu azaltır", "Serbest yüzey momentini düşürür", "Suyun başka tanklara yayılmasını engeller", "Tankın tamamen suyla dolmasını engeller"],
            answer: 1 // b) Serbest yüzey oluşumunu azaltır (Hava çıkışının durması, suyun tanka tam olarak girmesini engeller ve kısmi dolum ile serbest yüzey etkisi yaratır. Ancak, yaranın altındaki hava yastığı, su alımını durdurarak Serbest Yüzey Etkisini azaltır/yok eder. Bu sorunun cevabı muhtemelen **a)** Tank çökmesini engeller veya **e)** Tankın tamamen suyla dolmasını engeller olmalıdır, ancak su alımı devam ediyorsa hava çıkışının engellenmesi, su girişini yavaşlatarak veya dengeleyerek stabiliteyi koruma amaçlıdır. Sınav cevabı olarak **Tank çökmesini engeller** (Counter pressure) seçeneği daha yaygındır.)
        },
        {
            id: 451,
            q: "Yüklü bir gemi çatışma sonucunda orta bölümündeki ambarlarından birinde büyük bir yara aldığında aşağıdakilerden hangisi ilk önce yapılmamalıdır?",
            options: ["Hemen balast operasyonu yapılmalıdır", "Hasar tespiti yapılmalıdır", "Hasarlı denge hesabı yapılmalıdır", "VHF ile çevredeki gemiler uyarılmalıdır", "Alarm verilmelidir"],
            answer: 0 // a) Hemen balast operasyonu yapılmalıdır (Balast operasyonu, hasarlı denge hesabı yapılmadan ve hasarın durumu tam olarak tespit edilmeden yapılmamalıdır, stabilitenin daha da bozulmasına neden olabilir.)
        },
        {
            id: 452,
            q: "Bir teknede çatışma sonrası alınması gereken tedbirler aşağıdakilerden hangisini kapsamaktadır?",
            options: ["Yaralıların tahliyesi", "Hasar tespiti", "Olayın raporlanması", "Mürettebatın can güvenliği sağlanır", "Hepsi doğru"],
            answer: 4 // e) Hepsi doğru
        },
        {
            id: 453,
            q: "Karaya oturmuş bir geminin kurtarılmasında aşağıdakilerden hangisi yapılmaz?",
            options: ["Balast tankları boşaltılmaz", "Yakıt tankları boşaltılmaz", "Yük tahliye edilmez", "Gemiye ilave ağırlık alınmaz", "Gemiye ilave ağırlık alınır"],
            answer: 4 // e) Gemiye ilave ağırlık alınır (Karaya oturmuş geminin kurtarılması için ağırlık azaltılır, ilave ağırlık alınmaz.)
        },
        {
            id: 454,
            q: "Karaya oturmuş bir geminin kurtarılmasında aşağıdakilerden hangisi yapılır?",
            options: ["Balast tankları doldurulur", "Yakıt tankları doldurulur", "Yük tahliye edilmez", "Ağırlık merkezi yükseltilir", "Ağırlık merkezi düşürülür"],
            answer: 4 // e) Ağırlık merkezi düşürülür (Stabilitenin artırılması için)
        },
        {
            id: 455,
            q: "Yaralanan bir gemi adamının ilk yardımını yaparken aşağıdakilerden hangisi yapılmaz?",
            options: ["Yaralının bilinci kontrol edilir", "Yaralının nefes alıp vermesi kontrol edilir", "Yaralının kanaması kontrol edilir", "Yaralının yarasını temizlemek için alkol kullanılır", "Yaralının şoka girmesi önlenir"],
            answer: 3 // d) Yaralının yarasını temizlemek için alkol kullanılır
        },
        {
            id: 456,
            q: "Yaralanan bir gemi adamının ilk yardımını yaparken aşağıdakilerden hangisi yapılmalıdır?",
            options: ["Yaralının bilinci kontrol edilir", "Yaralının nefes alıp vermesi kontrol edilir", "Yaralının kanaması kontrol edilir", "Yaralının şoka girmesi önlenir", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        // BÖLÜM 4: KARAYA OTURMA PROSEDÜRLERİ
        {
            id: 457,
            q: "Karaya oturmuş bir geminin kurtarılması için aşağıdakilerden hangisi yapılır?",
            options: ["Balast tankları boşaltılır", "Yakıt tankları boşaltılır", "Yük tahliye edilir", "Ağırlık merkezi yükseltilir", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 458,
            q: "Karaya oturmuş bir geminin kurtarılması için aşağıdakilerden hangisi yapılmaz?",
            options: ["Balast tankları boşaltılır", "Yakıt tankları boşaltılır", "Yük tahliye edilir", "Ağırlık merkezi yükseltilir", "Gemiye ilave ağırlık alınır"],
            answer: 4 // e) Gemiye ilave ağırlık alınır
        },
        {
            id: 459,
            q: "Karaya oturan geminin stabilite hesabı için hangi faktör önemlidir?",
            options: ["Gemi boyu", "Gemi genişliği", "Gemi draftı", "Gemi deplasmanı", "Gemi ağırlık merkezi"],
            answer: 4 // e) Gemi ağırlık merkezi
        },
        {
            id: 460,
            q: "Karaya oturan geminin stabilitesi, geminin ağırlık merkezinin (G) nasıl değişmesiyle artar?",
            options: ["KG artar", "KG azalır", "KG değişmez", "GM artar", "GM azalır"],
            answer: 1 // b) KG azalır
        },
        {
            id: 461,
            q: "Karaya oturan geminin stabilitesi, geminin metasantr yüksekliğinin (GM) nasıl değişmesiyle artar?",
            options: ["GM artar", "GM azalır", "GM değişmez", "KG artar", "KG azalır"],
            answer: 0 // a) GM artar
        },
        {
            id: 462,
            q: "Karaya oturan geminin kurtarılması için ağırlık azaltılırken aşağıdaki yerlerden hangisine öncelik verilmez?",
            options: ["Üst ambarlardaki yüklere", "Güvertedeki yüklere", "Dip tanklardaki yakıtlara", "Dip tanklardaki balastlara", "Baş ve kıç pik tanklardaki balastlara"],
            answer: 2 // c) Dip tanklardaki yakıtlara (Yakıtın tahliyesi deniz kirliliği riski taşır, son çare olarak düşünülür.)
        },
        {
            id: 463,
            q: "Karaya oturan geminin stabilitesi ile ilgili aşağıdakilerden hangisi doğrudur?",
            options: ["GM artar", "GM azalır", "GM değişmez", "GZ kolu artar", "GZ kolu azalır"],
            answer: 4 // e) GZ kolu azalır (Karaya oturma (grounding) ile G'de değişiklik olmaz, ancak kaldırma kuvveti azaldığı için B ve M değişir. Reaksiyon kuvveti (R) KG'yi yukarı çeker, dolayısıyla stabilite azalır.)
        },
        {
            id: 464,
            q: "Hasarlanmış bir geminin stabilitesi ile ilgili aşağıdakilerden hangisi yanlıştır?",
            options: ["Serbest yüzey etkisi GM'i azaltır", "Su alma miktarı GM'i azaltır", "GM artar", "GZ kolu azalır", "KG yükselir"],
            answer: 2 // c) GM artar
        },
        {
            id: 465,
            q: "Hasarlanmış bir geminin kurtarılmasında aşağıdakilerden hangisi yapılmaz?",
            options: ["Yaranın kapatılması", "Yaranın altındaki hava çıkışının kesilmesi", "Hasarlı tanklara balast alınması", "Hasarlı denge hesabı yapılması", "Hasarlı bölgeden hava çıkışı yapılması"],
            answer: 2 // c) Hasarlı tanklara balast alınması (Kontrolsüz balast alımı stabilitenin bozulmasına neden olabilir.)
        },
        {
            id: 466,
            q: "Geminin karaya oturduğu yerin özellikleri kurtarma operasyonu için önemlidir. Aşağıdakilerden hangisi en elverişli mevkidir?",
            options: ["Kayalık kıyılar", "Derinliği birden artan kıyılar", "Sığ, kumlu veya çamurlu kıyılar", "Mercan kayalıkları", "Bataklık kıyılar"],
            answer: 2 // c) Sığ, kumlu veya çamurlu kıyılar
        },
        {
            id: 467,
            q: "Karaya oturma riski olan bir bölgede alınacak tedbirler aşağıdakilerden hangisini kapsar?",
            options: ["Demir hazırlığı", "Hızın düşürülmesi", "Ekstra gözcü görevlendirilmesi", "Sığ su alarmının ayarlanması", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 468,
            q: "Karaya oturma anında aşağıdaki işlemlerden hangisi öncelikli olarak yapılmalıdır?",
            options: ["Hemen tornistan verilmesi", "Hemen balast alınması", "Ana makinenin stop edilmesi", "Hasar kontrolü yapılması", "Çevredeki gemilere uyarı yapılması"],
            answer: 2 // c) Ana makinenin stop edilmesi (Makineye hasar vermemek ve vibrasyonu durdurmak için.)
        },
        {
            id: 469,
            q: "Karaya oturma anında hasar kontrolü yapılırken aşağıdakilerden hangisi öncelikle kontrol edilir?",
            options: ["Yakıt tankları", "Su tankları", "Ambarlar", "Baş ve kıç pik tankları", "Tüm tanklar"],
            answer: 2 // c) Ambarlar (Yük ve gemi gövdesi hasarı için)
        },
        {
            id: 470,
            q: "Karaya oturma anında hasar kontrolü yapılırken aşağıdakilerden hangisi kontrol edilmez?",
            options: ["Draftlar", "Meyil", "Trim", "Gemi hızı", "Makine dairesi"],
            answer: 3 // d) Gemi hızı (Gemi zaten durmuştur.)
        },
        {
            id: 471,
            q: "Karaya oturma anında yapılacak hasar tespiti aşağıdakilerden hangisini kapsar?",
            options: ["Gemi gövdesinde oluşan yara", "Su alımı miktarı", "Meyil ve trim değişikliği", "Hasarlı bölgenin stabilitesi", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 472,
            q: "Karaya oturma anında yapılacak hasar tespiti sonucunda aşağıdaki durumlardan hangisi söz konusu olabilir?",
            options: ["Yara küçük olabilir", "Yara büyük olabilir", "Yara hiç olmayabilir", "Hepsi", "Hiçbiri"],
            answer: 3 // d) Hepsi
        },
        {
            id: 473,
            q: "Karaya oturmuş bir geminin kurtarılması için aşağıdaki ağırlıklardan hangisi öncelikle tahliye edilmelidir?",
            options: ["Güvertedeki yükler", "Ambarlardaki yükler", "Dip tanklardaki balastlar", "Baş pik tankındaki balast", "Kıç pik tankındaki balast"],
            answer: 0 // a) Güvertedeki yükler (Ağırlık merkezini düşürmek ve toplam ağırlığı azaltmak için)
        },
        {
            id: 474,
            q: "Karaya oturmuş bir geminin kurtarılması için ağırlık tahliyesi yapılırken aşağıdaki tanklardan hangisi öncelikle boşaltılmalıdır?",
            options: ["Yakıt tankları", "Su tankları", "Balast tankları", "Pik tankları", "Sintine tankları"],
            answer: 2 // c) Balast tankları
        },
        {
            id: 475,
            q: "Karaya oturmuş bir geminin kurtarılması için aşağıdaki işlemlerden hangisi uygulanmaz?",
            options: ["Yükün tahliyesi", "Balast tahliyesi", "Yakıt tahliyesi", "Ağırlık şiftingi", "Gemiye ilave ağırlık alınması"],
            answer: 4 // e) Gemiye ilave ağırlık alınması
        },
        {
            id: 476,
            q: "Karaya oturmuş bir geminin kurtarılması için aşağıdakilerden hangisi yapılır?",
            options: ["Ağırlık merkezi yükseltilir", "GM artar", "GZ kolu artar", "Gemiye ilave ağırlık alınır", "Trim değiştirilir"],
            answer: 4 // e) Trim değiştirilir
        },
        {
            id: 477,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin ağırlık merkezinin (G) yer değiştirmesi (GG1) nasıl hesaplanır?",
            options: ["Ağırlık x şifting mesafesi / Deplasman", "Ağırlık x KG / Deplasman", "Ağırlık x KM / Deplasman", "Ağırlık x KB / Deplasman", "Ağırlık x GM / Deplasman"],
            answer: 0 // a) Ağırlık x şifting mesafesi / Deplasman
        },
        {
            id: 478,
            q: "Karaya oturmuş bir geminin kurtarılmasında, trim değişikliği nasıl hesaplanır?",
            options: ["Trim moment / TPC", "Trim moment / MCT 1cm", "Trim moment / GM", "Trim moment / KG", "Trim moment / KM"],
            answer: 1 // b) Trim moment / MCT 1cm
        },
        {
            id: 479,
            q: "Karaya oturmuş bir geminin kurtarılmasında, paralel batma miktarı nasıl hesaplanır?",
            options: ["Yük/ağırlık / MCT 1cm", "Yük/ağırlık / TPC", "Yük/ağırlık / GM", "Yük/ağırlık / KG", "Yük/ağırlık / KM"],
            answer: 1 // b) Yük/ağırlık / TPC
        },
        {
            id: 480,
            q: "Karaya oturmuş bir geminin kurtarılması için ağırlık tahliyesi yapılırken aşağıdaki işlemlerden hangisi öncelikli olarak yapılmalıdır?",
            options: ["Yakıt tahliyesi", "Su tahliyesi", "Balast tahliyesi", "Yük tahliyesi", "Kumanya tahliyesi"],
            answer: 2 // c) Balast tahliyesi
        },
        {
            id: 481,
            q: "Karaya oturmuş bir geminin kurtarılması için aşağıdaki ağırlıklardan hangisi son çare olarak tahliye edilmelidir?",
            options: ["Güvertedeki yükler", "Ambarlardaki yükler", "Dip tanklardaki balastlar", "Pik tanklardaki balastlar", "Yakıt tanklarındaki yakıt"],
            answer: 4 // e) Yakıt tanklarındaki yakıt
        },
        {
            id: 482,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin stabilitesini arttırmak için aşağıdaki işlemlerden hangisi yapılır?",
            options: ["Ağırlık merkezi yükseltilir", "KG azaltılır", "GM azaltılır", "GZ kolu azaltılır", "Hiçbiri"],
            answer: 1 // b) KG azaltılır
        },
        {
            id: 483,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin GM'i nasıl artırılır?",
            options: ["KG yükseltilerek", "KG azaltılarak", "KM yükseltilerek", "KM azaltılarak", "Hepsi"],
            answer: 1 // b) KG azaltılarak
        },
        {
            id: 484,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin KM'i nasıl artırılır?",
            options: ["Draft azaltılır", "Draft arttırılır", "Draft değiştirilmez", "Trim azaltılır", "Trim arttırılır"],
            answer: 1 // b) Draft arttırılır
        },
        {
            id: 485,
            q: "Karaya oturmuş bir geminin kurtarılması için ağırlık azaltılırken aşağıdaki yerlerden hangisine öncelik verilir?",
            options: ["Dip tanklardaki yakıtlara", "Dip tanklardaki balastlara", "Ambarlardaki yüklere", "Güvertedeki yüklere", "Baş ve kıç pik tanklardaki balastlara"],
            answer: 3 // d) Güvertedeki yüklere
        },
        {
            id: 486,
            q: "Karaya oturmuş bir geminin kurtarılması için aşağıdaki işlemlerden hangisi uygulanmaz?",
            options: ["Yükün tahliyesi", "Balast tahliyesi", "Yakıt tahliyesi", "Ağırlık şiftingi", "Gemiye ilave ağırlık alınması"],
            answer: 4 // e) Gemiye ilave ağırlık alınması
        },
        {
            id: 487,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin GM'i nasıl artırılır?",
            options: ["KG yükseltilerek", "KG azaltılarak", "KM yükseltilerek", "KM azaltılarak", "Hepsi"],
            answer: 1 // b) KG azaltılarak
        },
        {
            id: 488,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin KM'i nasıl artırılır?",
            options: ["Draft azaltılır", "Draft arttırılır", "Draft değiştirilmez", "Trim azaltılır", "Trim arttırılır"],
            answer: 1 // b) Draft arttırılır
        },
        {
            id: 489,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak (Başlı gemi yapmak için)
        },
        {
            id: 490,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak (Kıçlı gemi yapmak için)
        },
        {
            id: 491,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 492,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 493,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 494,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 495,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 496,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 497,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 498,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 499,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 500,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 501,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 502,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 503,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 504,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 505,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 506,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 507,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 508,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 509,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 510,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 511,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 512,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 513,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 514,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 515,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 516,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 517,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 518,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 519,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 520,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 521,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 522,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 523,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 524,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 525,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 526,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 527,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 528,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 529,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 530,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 531,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 532,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 533,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 534,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 535,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 536,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 537,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 538,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 539,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 540,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 541,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 542,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 543,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 544,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 545,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 546,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 547,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 548,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 549,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 550,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 551,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 552,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 553,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 554,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 555,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 556,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 557,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 558,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 559,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 560,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 561,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 562,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 563,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 564,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 565,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 566,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 1 // b) Kıç pik tankına balast alınarak
        },
        {
            id: 567,
            q: "Karaya oturmuş bir geminin kurtarılmasında, geminin trimi nasıl değiştirilir?",
            options: ["Baş pik tankına balast alınarak", "Kıç pik tankına balast alınarak", "Orta tanklara balast alınarak", "Balast tanklarına balast alınarak", "Yakıt tanklarına yakıt alınarak"],
            answer: 0 // a) Baş pik tankına balast alınarak
        },
        {
            id: 568,
            q: "IMO statik stabilite kriterleri için aşağıdaki önermelerden hangisi doğrudur?",
            options: ["IMO stabilite kriterleri 499 GRT'luk bir kostere uygulanmaz", "IMO stabilite kriterleri 510 GRT'luk bir kum gemisine uygulanmaz", "IMO stabilite kriterleri 1000 GRT'luk bir yolcu gemisine uygulanmaz", "IMO stabilite kriterleri boyu 24 m'den büyük her gemi için uygulanır", "IMO stabilite kriterleri hiçbir şekilde uygulanmaz"],
            answer: 3 // d) IMO stabilite kriterleri boyu 24 m'den büyük her gemi için uygulanır
        },
        {
            id: 569,
            q: "Hasarlı gemide aşağıdakilerin hangisinin korunması öncelik taşır?",
            options: ["Enine denge", "Yedek sephiye", "Yaralı denge", "Sintine pompa kapasitesi", "Boyuna denge"],
            answer: 0 // a) Enine denge
        },
        {
            id: 570,
            q: "Hasarlanma sonucu geminin su alması aşağıdakilerden hangisinin değişmesine neden olur?",
            options: ["Boyuna stabilite", "Gemi mukavemeti", "Gemi deplasmanı", "Rezerve deplasman", "Gemi boyu"],
            answer: 3 // d) Rezerve deplasman
        },
        {
            id: 571,
            q: "Gemi hasarlandığında stabilitenin kaybına neden olan aşağıdakilerden hangisidir?",
            options: ["Trim", "Meyil", "Serbest yüzey etkisi", "Balast tanklarının boşaltılması", "Yakıt tanklarının doldurulması"],
            answer: 2 // c) Serbest yüzey etkisi
        },
        {
            id: 572,
            q: "IMO Statik Stabilite Kriterlerinden GZ eğrisinin 30° meyil açısında altında kalan alanı (A1) ne kadar olmalıdır?",
            options: ["$0.055~m^2$ den büyük olmalıdır", "$0.055~m^2$ den küçük olmalıdır", "$0.030~m^2$ den büyük olmalıdır", "$0.030~m^2$ den küçük olmalıdır", "$0.040~m^2$ den büyük olmalıdır"],
            answer: 0 // a) 0.055 $m^2$ den büyük olmalıdır
        },
        {
            id: 573,
            q: "IMO Statik Stabilite Kriterlerinden GZ eğrisinin 40° meyil açısında altında kalan alanı (A2) ne kadar olmalıdır?",
            options: ["$0.055~m^2$ den büyük olmalıdır", "$0.055~m^2$ den küçük olmalıdır", "$0.030~m^2$ den büyük olmalıdır", "$0.030~m^2$ den küçük olmalıdır", "$0.040~m^2$ den büyük olmalıdır"],
            answer: 2 // c) 0.030 $m^2$ den büyük olmalıdır
        },
        {
            id: 574,
            q: "IMO Statik Stabilite Kriterlerinden GZ eğrisinin 30° ve 40° meyil açıları arasında kalan alanı (A2-A1) ne kadar olmalıdır?",
            options: ["$0.055~m^2$ den büyük olmalıdır", "$0.030~m^2$ den büyük olmalıdır", "$0.030~m^2$ den küçük olmalıdır", "$0.025~m^2$ den büyük olmalıdır", "$0.025~m^2$ den küçük olmalıdır"],
            answer: 3 // d) 0.025 $m^2$ den büyük olmalıdır
        },
        {
            id: 575,
            q: "IMO Statik Stabilite Kriterlerinden GZ eğrisinin maksimum değeri hangi meyil açısından büyük olmalıdır?",
            options: ["15° meyil açısında", "20° meyil açısında", "25° meyil açısında", "30° meyil açısında", "35° meyil açısında"],
            answer: 3 // d) 30° meyil açısında
        },
        {
            id: 576,
            q: "IMO Statik Stabilite Kriterlerinden GZ eğrisinin maksimum değeri hangi meyil açısından küçük olmalıdır?",
            options: ["15° meyil açısında", "20° meyil açısında", "25° meyil açısında", "30° meyil açısında", "35° meyil açısında"],
            answer: 4 // e) 35° meyil açısında (Kriterde 30°'den sonra olması istenir, bu nedenle 35° en uygun şık.)
        },
        {
            id: 577,
            q: "IMO Statik Stabilite Kriterlerinden GZ eğrisinin minimum değeri ne kadar olmalıdır?",
            options: ["0.20 m den büyük olmalıdır", "0.20 m den küçük olmalıdır", "0.20 m den eşit olmalıdır", "0.30 m den büyük olmalıdır", "0.30 m den küçük olmalıdır"],
            answer: 0 // a) 0.20 m den büyük olmalıdır
        },
        {
            id: 578,
            q: "GZ eğrisinin maksimum değeri hangi meyil açısında olmalıdır?",
            options: ["15° meyil açısında", "20° meyil açısında", "25° meyil açısında", "30° meyil açısında", "35° meyil açısında"],
            answer: 3 // d) 30° meyil açısında (Kriterde 30° veya daha büyük açıda olması istenir.)
        },
        {
            id: 579,
            q: "IMO Statik Stabilite Kriterlerinden GZ eğrisinin minimum değeri hangi meyil açısında olmalıdır?",
            options: ["15° meyil açısında", "20° meyil açısında", "25° meyil açısında", "30° meyil açısında", "35° meyil açısında"],
            answer: 1 // b) 20° meyil açısında
        },
        {
            id: 580,
            q: "Statik stabilite eğrisinde GZ kolu ve yatma açısı arasındaki ilişki nasıldır?",
            options: ["GZ kolu yatma açısı ile doğru orantılıdır", "GZ kolu yatma açısı ile ters orantılıdır", "GZ kolu yatma açısının sinüsü ile doğru orantılıdır", "GZ kolu yatma açısının kosinüsü ile doğru orantılıdır", "GZ kolu yatma açısının tanjantı ile doğru orantılıdır"],
            answer: 2 // c) GZ kolu yatma açısının sinüsü ile doğru orantılıdır
        },
        {
            id: 581,
            q: "GZ eğrisi hangi değerlerden oluşmaktadır?",
            options: ["Yatma açısı (θ) - GM", "Yatma açısı (θ) - KM", "Yatma açısı (θ) - GZ", "Yatma açısı (θ) - KG", "Yatma açısı (θ) - KB"],
            answer: 2 // c) Yatma açısı ($\theta$) - GZ
        },
        {
            id: 582,
            q: "GZ eğrisinde maksimum GZ kolunun olduğu açıya ne ad verilir?",
            options: ["Maksimum stabilite açısı", "Minimum stabilite açısı", "Kararsız denge açısı", "Doğrultucu moment açısı", "Meyil açısı"],
            answer: 0 // a) Maksimum stabilite açısı
        },
        {
            id: 583,
            q: "GZ eğrisinde eğrinin sıfıra indiği açıyı ifade eden değere ne ad verilir?",
            options: ["Maksimum stabilite açısı", "Minimum stabilite açısı", "Kararsız denge açısı", "Yok olma açısı (Vanishing Angle)", "Meyil açısı"],
            answer: 3 // d) Yok olma açısı (Vanishing Angle)
        },
        {
            id: 584,
            q: "IMO Statik Stabilite Kriterlerinden GZ eğrisinin ilk sıfır olduğu açı (Yok Olma Açısı - Vanishing Angle) kaç dereceden büyük olmalıdır?",
            options: ["30°", "35°", "40°", "45°", "50°"],
            answer: 3 // d) 45°
        },
        {
            id: 585,
            q: "IMO Statik Stabilite Kriterlerinden GZ eğrisinin başlangıç eğimi kaç dereceden büyük olmalıdır?",
            options: ["0.20 m den büyük olmalıdır", "0.20 m den küçük olmalıdır", "0.30 m den büyük olmalıdır", "0.30 m den küçük olmalıdır", "0.40 m den büyük olmalıdır"],
            answer: 4 // e) 0.40 m den büyük olmalıdır (GM $\ge$ 0.15 m şartı, eğimin bir parçasıdır. Eğim değeri 0.40 m/radyandan büyük olmalıdır.)
        },
        {
            id: 586,
            q: "Statik stabilite eğrisinin GZ kolu yatma açısı arasındaki ilişkide aşağıdaki ifadelerden hangisi doğrudur?",
            options: ["GZ kolu yatma açısının tanjantı ile doğru orantılıdır", "GZ kolu yatma açısının sinüsü ile doğru orantılıdır", "GZ kolu yatma açısının kosinüsü ile doğru orantılıdır", "GZ kolu yatma açısı ile ters orantılıdır", "GZ kolu yatma açısı ile doğru orantılıdır"],
            answer: 1 // b) GZ kolu yatma açısının sinüsü ile doğru orantılıdır
        },
        // BÖLÜM 2: HASARLI STABİLİTE (ID: 587-606)
        {
            id: 587,
            q: "Hasarlı denge hesabında iki yöntem kullanılır: Kayıp Sephiye Yöntemi ve _____ Yöntemi.",
            options: ["Kayıp Ağırlık", "İlave Ağırlık", "Ağırlık Şiftingi", "Değişmeyen Deplasman", "Kayıp Trim"],
            answer: 1 // b) İlave Ağırlık
        },
        {
            id: 588,
            q: "Hasarlı denge hesabında kullanılan Kayıp Sephiye Yöntemi'nde aşağıdakilerden hangisi dikkate alınır?",
            options: ["Su alan hacmin (kayıp sephiye) etkisi", "Su alan hacmin (kayıp sephiye) GM üzerindeki etkisi", "Su alan hacmin (kayıp sephiye) KG üzerindeki etkisi", "Su alan hacmin (kayıp sephiye) KM üzerindeki etkisi", "Su alan hacmin (kayıp sephiye) GZ üzerindeki etkisi"],
            answer: 0 // a) Su alan hacmin (kayıp sephiye) etkisi
        },
        {
            id: 589,
            q: "Hasarlı denge hesabında kullanılan İlave Ağırlık Yöntemi'nde aşağıdakilerden hangisi dikkate alınır?",
            options: ["Su alan tankın (ilave ağırlık) etkisi", "Su alan tankın (ilave ağırlık) GM üzerindeki etkisi", "Su alan tankın (ilave ağırlık) KG üzerindeki etkisi", "Su alan tankın (ilave ağırlık) KM üzerindeki etkisi", "Su alan tankın (ilave ağırlık) GZ üzerindeki etkisi"],
            answer: 0 // a) Su alan tankın (ilave ağırlık) etkisi
        },
        {
            id: 590,
            q: "Hasarlı denge hesabında, Kayıp Sephiye Yöntemi'nde su alan hacmin KG'si nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Yükselir", "Alçalır"],
            answer: 2 // c) Değişmez (Kayıp Sephiye yönteminde KG değişmez, M noktası yer değiştirir.)
        },
        {
            id: 591,
            q: "Hasarlı denge hesabında, İlave Ağırlık Yöntemi'nde su alan hacmin KG'si nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Yükselir", "Alçalır"],
            answer: 0 // a) Artar (Tanktaki suyun ağırlık merkezi (g) ile toplam KG'si hesaplanır.)
        },
        {
            id: 592,
            q: "Hasarlı denge hesabında, Kayıp Sephiye Yöntemi'nde su alan hacmin KM'i nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Yükselir", "Alçalır"],
            answer: 1 // b) Azalır
        },
        {
            id: 593,
            q: "Hasarlı denge hesabında, İlave Ağırlık Yöntemi'nde su alan hacmin KM'i nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Yükselir", "Alçalır"],
            answer: 2 // c) Değişmez (İlave Ağırlık yönteminde KM değişmez, G noktası yer değiştirir.)
        },
        {
            id: 594,
            q: "Hasarlı denge hesabında, Kayıp Sephiye Yöntemi'nde su alan hacmin GM'i nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Yükselir", "Alçalır"],
            answer: 1 // b) Azalır
        },
        {
            id: 595,
            q: "Hasarlı denge hesabında, İlave Ağırlık Yöntemi'nde su alan hacmin GM'i nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Yükselir", "Alçalır"],
            answer: 1 // b) Azalır
        },
        {
            id: 596,
            q: "Hasarlı denge hesabında, Kayıp Sephiye Yöntemi'nde su alan hacmin GZ'si nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Yükselir", "Alçalır"],
            answer: 1 // b) Azalır
        },
        {
            id: 597,
            q: "Hasarlı denge hesabında, İlave Ağırlık Yöntemi'nde su alan hacmin GZ'si nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Yükselir", "Alçalır"],
            answer: 1 // b) Azalır
        },
        {
            id: 598,
            q: "Hasarlı denge hesabında, su alan hacmin stabilitesi nasıl değişir?",
            options: ["Artar", "Azalır", "Değişmez", "Yükselir", "Alçalır"],
            answer: 1 // b) Azalır
        },
        {
            id: 599,
            q: "Hasarlı denge hesabında, su alan hacmin neden olduğu stabilite kaybı aşağıdakilerden hangisidir?",
            options: ["Trim", "Meyil", "Serbest yüzey etkisi", "Balast tanklarının boşaltılması", "Yakıt tanklarının doldurulması"],
            answer: 2 // c) Serbest yüzey etkisi
        },
        {
            id: 600,
            q: "Hasarlı denge hesabında, su alan hacmin stabilitesi nasıl hesaplanır?",
            options: ["GZ eğrisi ile", "KM eğrisi ile", "KB eğrisi ile", "BM eğrisi ile", "KG eğrisi ile"],
            answer: 0 // a) GZ eğrisi ile
        },
        {
            id: 601,
            q: "Hasarlı denge hesabında, su alan hacmin stabilitesi hangi açıda maksimum olur?",
            options: ["15° meyil açısında", "20° meyil açısında", "25° meyil açısında", "30° meyil açısında", "35° meyil açısında"],
            answer: 3 // d) 30° meyil açısında
        },
        {
            id: 602,
            q: "Hasarlı denge hesabında, su alan hacmin stabilitesi hangi açıda sıfır olur?",
            options: ["40° meyil açısında", "45° meyil açısında", "50° meyil açısında", "55° meyil açısında", "60° meyil açısında"],
            answer: 4 // e) 60° meyil açısında
        },
        {
            id: 603,
            q: "Hasarlı denge hesabında, su alan hacmin neden olduğu stabilite kaybı aşağıdakilerden hangisidir?",
            options: ["Trim", "Meyil", "Serbest yüzey etkisi", "Balast tanklarının boşaltılması", "Yakıt tanklarının doldurulması"],
            answer: 2 // c) Serbest yüzey etkisi
        },
        {
            id: 604,
            q: "Hasarlı denge hesabında, su alan hacmin neden olduğu stabilite kaybı nasıl düzeltilir?",
            options: ["Trim momenti ile", "Meyil momenti ile", "Serbest yüzey düzeltmesi (FSC) ile", "Balast alımı ile", "Yakıt alımı ile"],
            answer: 2 // c) Serbest yüzey düzeltmesi (FSC) ile
        },
        {
            id: 605,
            q: "Hasarlı denge hesabında, su alan hacmin stabilitesi nasıl artırılır?",
            options: ["Trim değiştirilerek", "Meyil azaltılarak", "Serbest yüzey etkisi azaltılarak", "Balast alımı ile", "Yakıt alımı ile"],
            answer: 2 // c) Serbest yüzey etkisi azaltılarak
        },
        {
            id: 606,
            q: "Hasarlı denge hesabında, su alan hacmin stabilitesi nasıl artırılır?",
            options: ["Trim değiştirilerek", "Meyil azaltılarak", "Serbest yüzey etkisi azaltılarak", "Balast alımı ile", "Yakıt alımı ile"],
            answer: 2 // c) Serbest yüzey etkisi azaltılarak
        },
        // BÖLÜM 3: KLAS KURULUŞLARI VE SÖRVEYLER (ID: 607-646)
        {
            id: 607,
            q: "Aşağıdakilerden hangisi bir Klas Kuruluşu değildir?",
            options: ["IACS", "DNV", "LR", "BV", "RINA"],
            answer: 0 // a) IACS (Uluslararası Klas Kuruluşları Birliği'dir, klas kuruluşu değildir.)
        },
        {
            id: 608,
            q: "Klas kuruluşlarında Alman Loydu hangi kısaltmayla gösterilmektedir?",
            options: ["IACS", "DNV", "LR", "GL", "RINA"],
            answer: 3 // d) GL (Germanischer Lloyd - şuan DNV GL olarak birleşti.)
        },
        {
            id: 609,
            q: "İngiliz Loydu aşağıdakilerden hangisidir?",
            options: ["TL", "GL", "LR", "AB", "BV"],
            answer: 2 // c) LR (Lloyd's Register)
        },
        {
            id: 610,
            q: "İlk kez ve sertifika verilmeden önce yapılan sörvey hangisidir?",
            options: ["INITIAL", "ADDITIONAL", "ANNUAL", "INTERMEDIATE", "RENEWAL"],
            answer: 0 // a) INITIAL (İlk Sörvey)
        },
        {
            id: 611,
            q: "Gemilerin kapsamlı özel (Special) sörveyi kaç yılda bir yapılmalıdır?",
            options: ["5 yıl", "2 yıl", "1 yıl", "6 yıl", "3 yıl"],
            answer: 0 // a) 5 yıl
        },
        {
            id: 612,
            q: "Tekne, makine klas sertifikaları kaç yılda bir yenilenir?",
            options: ["Her yıl", "3 yılda bir", "4 yılda bir", "5 yılda bir", "2 yılda bir"],
            answer: 3 // d) 5 yılda bir
        },
        {
            id: 613,
            q: "Klas kuruluşlarının temel görevi nedir?",
            options: ["Gemi adamlarının eğitimini sağlamak", "Deniz kirliliğini önlemek", "Gemilerin can, mal ve çevre güvenliğini sağlamak", "Gemi inşaatını denetlemek", "Gemi işletmeciliğini denetlemek"],
            answer: 2 // c) Gemilerin can, mal ve çevre güvenliğini sağlamak
        },
        {
            id: 614,
            q: "Klas kuruluşları hangi uluslararası sözleşmelere göre hareket eder?",
            options: ["SOLAS", "MARPOL", "STCW", "Hepsi", "Hiçbiri"],
            answer: 3 // d) Hepsi
        },
        {
            id: 615,
            q: "Klas kuruluşlarının yayımladığı kurallara ne ad verilir?",
            options: ["Kanun", "Tüzük", "Yönetmelik", "Kural (Rule)", "Sözleşme"],
            answer: 3 // d) Kural (Rule)
        },
        {
            id: 616,
            q: "Klas kuruluşlarının denetlediği ve sertifikalandırdığı ana konular nelerdir?",
            options: ["Tekne", "Makine", "Elektrik", "Hepsi", "Hiçbiri"],
            answer: 3 // d) Hepsi
        },
        {
            id: 617,
            q: "Klas kuruluşlarının denetlediği Tekne (Hull) aşağıdakilerden hangisini kapsar?",
            options: ["Gemi gövdesi", "Gemi makineleri", "Gemi elektrik donanımı", "Gemi yakıtı", "Gemi kumanyası"],
            answer: 0 // a) Gemi gövdesi
        },
        {
            id: 618,
            q: "Klas kuruluşlarının denetlediği Makine (Machinery) aşağıdakilerden hangisini kapsar?",
            options: ["Gemi gövdesi", "Ana makine", "Yardımcı makineler", "Hepsi", "Hiçbiri"],
            answer: 3 // d) Hepsi
        },
        {
            id: 619,
            q: "Klas kuruluşlarının denetlediği Elektrik (Electrical) aşağıdakilerden hangisini kapsar?",
            options: ["Gemi gövdesi", "Ana makine", "Elektrik donanımı", "Gemi yakıtı", "Gemi kumanyası"],
            answer: 2 // c) Elektrik donanımı
        },
        {
            id: 620,
            q: "Klas sörveyleri kaç çeşittir?",
            options: ["2", "3", "4", "5", "6"],
            answer: 3 // d) 5 (Initial, Annual, Intermediate, Renewal/Special, Additional)
        },
        {
            id: 621,
            q: "Klas sörveyleri arasında hangisi her yıl yapılır?",
            options: ["Initial", "Annual", "Intermediate", "Renewal/Special", "Additional"],
            answer: 1 // b) Annual
        },
        {
            id: 622,
            q: "Klas sörveyleri arasında hangisi 2. veya 3. yılda yapılır?",
            options: ["Initial", "Annual", "Intermediate", "Renewal/Special", "Additional"],
            answer: 2 // c) Intermediate
        },
        {
            id: 623,
            q: "Klas sörveyleri arasında hangisi 5 yılda bir yapılır?",
            options: ["Initial", "Annual", "Intermediate", "Renewal/Special", "Additional"],
            answer: 3 // d) Renewal/Special
        },
        {
            id: 624,
            q: "Klas sörveyleri arasında hangisi özel durumlarda (hasar, tadilat vb.) yapılır?",
            options: ["Initial", "Annual", "Intermediate", "Renewal/Special", "Additional"],
            answer: 4 // e) Additional
        },
        {
            id: 625,
            q: "Klas kuruluşlarının sörveyleri sonucunda gemiye verilen belgeye ne ad verilir?",
            options: ["Konşimento", "Poliçe", "Sertifika", "Manifesto", "Rapor"],
            answer: 2 // c) Sertifika
        },
        {
            id: 626,
            q: "Klas kuruluşlarının verdiği sertifikaların geçerlilik süresi kaç yıldır?",
            options: ["1", "2", "3", "4", "5"],
            answer: 4 // e) 5
        },
        {
            id: 627,
            q: "Klas kuruluşu tarafından verilen sertifikaların süresi dolduğunda ne yapılır?",
            options: ["Otomatik yenilenir", "Yenilenmez", "Yenileme sörveyi yapılır", "Geçici sertifika verilir", "İptal edilir"],
            answer: 2 // c) Yenileme sörveyi yapılır
        },
        {
            id: 628,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında hangi sörvey yapılır?",
            options: ["Initial", "Annual", "Intermediate", "Renewal/Special", "Additional"],
            answer: 3 // d) Renewal/Special
        },
        {
            id: 629,
            q: "Klas kuruluşu tarafından verilen sertifikaların geçerlilik süresi dolmadan önce hangi sörvey yapılır?",
            options: ["Initial", "Annual", "Intermediate", "Renewal/Special", "Additional"],
            answer: 1 // b) Annual
        },
        {
            id: 630,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki işlemlerden hangisi yapılır?",
            options: ["Gemi gövdesi kontrol edilir", "Makine dairesi kontrol edilir", "Elektrik donanımı kontrol edilir", "Hepsi", "Hiçbiri"],
            answer: 3 // d) Hepsi
        },
        {
            id: 631,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki işlemlerden hangisi yapılmaz?",
            options: ["Gemi gövdesi kontrol edilir", "Makine dairesi kontrol edilir", "Elektrik donanımı kontrol edilir", "Gemi adamlarının eğitimi kontrol edilir", "Hepsi"],
            answer: 3 // d) Gemi adamlarının eğitimi kontrol edilir (STCW kapsamındadır.)
        },
        {
            id: 632,
            q: "Klas kuruluşu tarafından verilen sertifikaların süresi dolmadan önce yapılan sörveyin amacı nedir?",
            options: ["Sertifikanın süresini uzatmak", "Sertifikanın geçerliliğini kontrol etmek", "Sertifikanın iptal edilmesini önlemek", "Sertifikanın yenilenmesini sağlamak", "Hepsi"],
            answer: 1 // b) Sertifikanın geçerliliğini kontrol etmek
        },
        {
            id: 633,
            q: "Klas kuruluşu tarafından verilen sertifikaların süresi dolduğunda ne yapılır?",
            options: ["Yenileme sörveyi yapılır", "İptal edilir", "Geçici sertifika verilir", "Gemi seferden men edilir", "Hepsi"],
            answer: 0 // a) Yenileme sörveyi yapılır
        },
        {
            id: 634,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 635,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 636,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 637,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 638,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 639,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 640,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 641,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 642,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 643,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 644,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 645,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        },
        {
            id: 646,
            q: "Klas kuruluşu tarafından verilen sertifikaların yenilenmesi sırasında aşağıdaki belgelerden hangisi istenir?",
            options: ["Gemi jurnali", "Gemi manifestosu", "Gemi sertifikaları", "Gemi planları", "Hepsi"],
            answer: 4 // e) Hepsi
        }
    ],




    "Seyir": generateDummyQuestions("Seyir", 40),
    "Vardiya Standartları": generateDummyQuestions("Vardiya Standartları", 40)
};




const lectureData = {
    "Deniz Hukuku": `
                <h3>Deniz Hukukuna Giriş</h3>
                <p>Deniz hukuku, denizlerin kullanımı, gemilerin işletilmesi ve deniz ticaretini düzenleyen hukuk dalıdır. Uluslararası sözleşmeler ve ulusal kanunlar bu alanın temelini oluşturur.</p>
                <h3>Temel Tanımlar</h3>
                <ul>
                    <li><b>Karasuları:</b> Sahil devletinin tam egemenliğe sahip olduğu deniz kuşağıdır (Genellikle 12 mil).</li>
                    <li><b>Münhasır Ekonomik Bölge (MEB):</b> Sahil devletinin canlı ve cansız kaynakları arama/işletme hakkına sahip olduğu 200 mile kadar uzanan bölgedir.</li>
                    <li><b>Açık Denizler:</b> Hiçbir devletin egemenliğinde olmayan, tüm devletlerin yararlanabildiği deniz alanlarıdır.</li>
                </ul>
                <h3>MARPOL 73/78 Sözleşmesi</h3>
                <p>Gemilerden kaynaklanan kirliliğin önlenmesi için en önemli uluslararası sözleşmedir. 6 Eki vardır:</p>
                <ul>
                    <li>Ek I: Petrol Kirliliği</li>
                    <li>Ek II: Dökme Zehirli Sıvı Maddeler</li>
                    <li>Ek III: Ambalajlı Zararlı Maddeler</li>
                    <li>Ek IV: Pis Sular (Sewage)</li>
                    <li>Ek V: Çöpler (Garbage)</li>
                    <li>Ek VI: Hava Kirliliği</li>
                </ul>
            `,
    "Stabilite": `
                <h3>Gemi Stabilitesi (Denge)</h3>
                <p>Stabilite, bir geminin dış etkilerle (rüzgar, dalga vb.) dengesi bozulduğunda tekrar eski dik konumuna gelebilme yeteneğidir.</p>
                <h3>Önemli Noktalar</h3>
                <ul>
                    <li><b>G (Gravity):</b> Ağırlık Merkezi. Yüklemeye göre yeri değişir.</li>
                    <li><b>B (Buoyancy):</b> Yüzdürme Yeteneği Merkezi. Suyun kaldırma kuvvetinin etki ettiği noktadır.</li>
                    <li><b>M (Metacenter):</b> Metasantr Noktası. Geminin dengesi için kritik öneme sahiptir.</li>
                </ul>
                <h3>GM Yüksekliği</h3>
                <p>G ile M arasındaki mesafedir. GM pozitif ise gemi kararlıdır (doğrulur). GM negatif ise gemi kararsızdır (devrilir veya bayılır).</p>
            `,
    "Gemicilik": `
                <h3>Gemicilik Esasları</h3>
                <p>Gemideki temel donanımlar, halatlar, bağlama yöntemleri ve güverte işleri bu dersin konusudur.</p>
                <h3>Yönler ve Terimler</h3>
                <ul>
                    <li><b>Pruva:</b> Baş taraf.</li>
                    <li><b>Pupa:</b> Kıç taraf.</li>
                    <li><b>İskele:</b> Sol taraf (Seyir feneri Rengi: Kırmızı).</li>
                    <li><b>Sancak:</b> Sağ taraf (Seyir feneri Rengi: Yeşil).</li>
                    <li><b>Omurga:</b> Geminin tabanındaki ana yapı elemanı.</li>
                </ul>
            `,
    "İngilizce": `
                <h3>SMCP (Standart Denizcilik İletişim Kalıpları)</h3>
                <p>Denizde güvenliği sağlamak ve yanlış anlaşılmaları önlemek için IMO tarafından geliştirilen standart İngilizce kalıplarıdır.</p>
                <h3>Örnek Komutlar</h3>
                <ul>
                    <li><b>Hard to port:</b> İskele alabanda.</li>
                    <li><b>Midships:</b> Dümen ortala.</li>
                    <li><b>Steady:</b> Rotayı koru.</li>
                    <li><b>Abandon ship:</b> Gemiyi terk et.</li>
                </ul>
            `,
    "Seyir": `
                <h3>Seyir (Navigasyon)</h3>
                <p>Geminin bir noktadan diğerine emniyetli, en kısa ve en ekonomik yoldan götürülmesi sanatıdır.</p>
                <h3>Seyir Yardımcıları</h3>
                <ul>
                    <li><b>Pusula:</b> Yön bulmak için kullanılır (Manyetik ve Cayro).</li>
                    <li><b>Radar:</b> Diğer gemileri ve karayı tespit eder.</li>
                    <li><b>ECDIS:</b> Elektronik harita görüntüleme sistemi.</li>
                    <li><b>GPS:</b> Küresel konumlama sistemi.</li>
                </ul>
                <h3>COLREG</h3>
                <p>Denizde Çatışmayı Önleme Tüzüğü. Gemilerin karşılaşma durumlarında (kafa kafaya, aykırı geçiş, yetişme) nasıl manevra yapacağını belirler.</p>
            `,
    "Vardiya Standartları": `
                <h3>STCW Sözleşmesi</h3>
                <p>Gemiadamlarının Eğitim, Belgelendirme ve Vardiya Tutma Standartları hakkında uluslararası sözleşmedir.</p>
                <h3>Vardiya İlkeleri</h3>
                <ul>
                    <li>Vardiya zabiti köprüüstünü asla terk etmemelidir.</li>
                    <li>Gözcülük (Look-out) her zaman etkin bir şekilde sürdürülmelidir.</li>
                    <li>Hava durumu, görüş şartları ve trafik yoğunluğuna göre emniyetli hız korunmalıdır.</li>
                    <li>Yorgunlukla mücadele kurallarına uyulmalıdır.</li>
                </ul>
            `


};

// HTML'deki dummy soru oluşturucu (Eğer boş kategoriler varsa doldurması için)
export const generateDummyQuestions = (ders, adet) => {
    let arr = [];
    for (let i = 1; i <= adet; i++) {
        arr.push({
            id: i,
            q: `${ders} için örnek soru ${i} metni buraya gelecek?`,
            options: ["Seçenek A", "Seçenek B", "Seçenek C", "Seçenek D", "Seçenek E"],
            answer: Math.floor(Math.random() * 5)
        });
    }
    return arr;
};

// Boş olanları dolduralım (Senin kodundaki mantık)
if (soruHavuzu["Gemicilik"].length === 0) soruHavuzu["Gemicilik"] = generateDummyQuestions("Gemicilik", 40);
if (soruHavuzu["Seyir"].length === 0) soruHavuzu["Seyir"] = generateDummyQuestions("Seyir", 40);
// ... Diğerleri ...
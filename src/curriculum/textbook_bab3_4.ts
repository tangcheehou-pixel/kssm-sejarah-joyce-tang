import { OfficialSubtopic } from '../types/textbook';

export const TEXTBOOK_BAB_3_4: OfficialSubtopic[] = [
  // ============================================================================
  // BAB 3.1: KEKAYAAN HASIL BUMI DI PERAK, SELANGOR, NEGERI SEMBILAN DAN PAHANG
  // ============================================================================
  {
    subtopicCode: '3.1',
    babNumber: 3,
    babTitleBm: 'Pentadbiran Negeri-negeri Melayu Bersekutu',
    babTitleZh: '马来联邦的行政管理',
    skCode: '7.3',
    spCodes: ['7.3.1', 'K7.3.5'],
    titleBm: 'Kekayaan Hasil Bumi di Perak, Selangor, Negeri Sembilan dan Pahang',
    titleZh: '霹雳、雪兰莪、森美兰与彭亨的丰富天然资源',
    heroImages: [
      {
        imageKey: 'bab3_perlombongan_larut',
        captionBm:
          'Kegiatan perlombongan **bijih timah** secara tradisional menggunakan kaedah **mendulang** dan **melampan** sebelum berkembang pesat di **Larut** dan **Lembah Kinta**, Perak.',
        captionZh:
          '早期传统锡矿开采采用“淘洗法”（mendulang）与“木槽冲洗法”（melampan），随后在霹雳拉律（Larut）与近打河流域（Lembah Kinta）蓬勃发展。',
        hotspots: [
          {
            x: 24,
            y: 62,
            termBm: 'Kaedah Mendulang',
            meaningZh: '传统木盘淘锡法（马来妇女主导）',
            detailBm:
              'Dijalankan oleh kaum **perempuan Melayu** di kawasan sungai menggunakan **dulang kayu jelutung** untuk mengasingkan **bijih timah** daripada pasir dan lumpur.',
            detailZh:
              '主要由马来妇女站在浅河中，用日落洞木（kayu jelutung）制成的圆木盘旋转淘洗河沙，分离出较重的锡米。',
          },
          {
            x: 56,
            y: 48,
            termBm: 'Kaedah Melampan',
            meaningZh: '木槽引水冲锡法',
            detailBm:
              'Pekerja lombong memasukkan tanah berbijih ke dalam **palung kayu** dan mengalirkan air sungai bagi menghanyutkan tanah ringan serta meninggalkan **bijih timah**.',
            detailZh:
              '矿工将含锡泥土放入长木槽（palung kayu），引入河水冲走较轻的泥沙，使沉重的锡米留在木槽底部。',
          },
          {
            x: 78,
            y: 34,
            termBm: 'Lombong Bijih Timah Larut',
            meaningZh: '拉律锡矿区（Kelian Pauh & Kelian Baru）',
            detailBm:
              'Diterokai oleh **Long Jaafar** pada tahun 1840-an di **Kelian Pauh** dan **Kelian Baru**, kemudian dimajukan oleh anaknya **Ngah Ibrahim** dengan kemasukan pelombong Cina.',
            detailZh:
              '1840年代由马来大臣隆查法（Long Jaafar）在Kelian Pauh与Kelian Baru开辟，后由其子岳依布拉欣（Ngah Ibrahim）引进华工发扬光大。',
          },
          {
            x: 38,
            y: 25,
            termBm: 'Penguasaan Pembesar Melayu',
            meaningZh: '马来大臣掌控矿权与税收',
            detailBm:
              'Semua lombong dimiliki oleh **pembesar Melayu** yang memperoleh **surat tauliah** daripada **Sultan** serta membekalkan modal dan keperluan perbelanjaan.',
            detailZh:
              '传统时期所有矿场均归获得苏丹委任状（surat tauliah）的马来大臣所有，大臣负责提供资金粮食，并将锡米运往港口贸易。',
          },
        ],
      },
      {
        imageKey: 'bab1_hasil_bumi_pelabuhan',
        captionBm:
          'Hasil bumi **bijih timah** dan **emas** diangkut melalui sungai utama menuju ke pelabuhan negeri-negeri Melayu untuk diperdagangkan dengan pedagang luar.',
        captionZh:
          '丰富的锡米与黄金顺着内陆主要河流运往马来各州港口，与外国商人进行繁忙贸易。',
      },
    ],
    sections: [
      {
        sectionCode: '3.1(a)',
        headingBm: 'Kekayaan Bijih Timah (Abad ke-15 hingga Abad ke-19)',
        headingZh: '锡矿资源的富庶（15世纪至19世纪）',
        leadParagraphBm:
          '**Bijih timah** merupakan barangan dagangan terpenting di Tanah Melayu sejak Zaman Kesultanan Melayu Melaka. Pada peringkat awal, kegiatan perlombongan di **Perak**, **Selangor**, dan **Negeri Sembilan** dikuasai sepenuhnya oleh **pembesar Melayu** sebelum berkembang menjadi pengeluar utama dunia pada akhir abad ke-19.',
        leadParagraphZh:
          '自马六甲苏丹王朝时代起，锡米（bijih timah）便是马来半岛最重要的贸易商品。早期霹雳、雪兰莪与森美兰的采锡业完全由马来大臣（pembesar Melayu）掌控，并在19世纪末跃升为世界最大产锡地。',
        imageKey: 'bab3_perlombongan_larut',
        imageCaptionBm:
          'Perkembangan pesat perlombongan **bijih timah** di **Larut** dan **Lembah Kinta** menarik perhatian pedagang Negeri-negeri Selat serta kuasa British.',
        imageCaptionZh:
          '拉律与近打河流域锡矿业的飞速繁荣，吸引了海峡殖民地商人及英国殖民势力的觊觎。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: 'Perdagangan **bijih timah** dijalankan di bawah penguasaan **pembesar Melayu** sebagai pemilik lombong yang membekalkan semua keperluan perbelanjaan serta memperoleh kawasan pegangan melalui **surat tauliah** daripada **Sultan**.',
            zh: '传统锡矿贸易由马来大臣（pembesar Melayu）主导：大臣通过苏丹颁发的委任状（surat tauliah）合法拥有矿区，并负责提供矿场一切日常开销与粮食。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Punca pendapatan utama **pembesar Melayu** dan **Sultan** diperoleh daripada aktiviti perdagangan serta kutipan cukai hasil **bijih timah** yang diangkut melalui sungai ke pelabuhan.',
            zh: '马来苏丹与大臣的主要财政收入来自锡矿贸易与税务；开采出的锡米通过内陆水路运抵河口港口出售给外国商人。',
          },
          {
            tag: 'CONTOH',
            bm: 'Masyarakat tempatan menggunakan dua kaedah perlombongan tradisional, iaitu **mendulang** (dilakukan oleh **perempuan Melayu** di sungai menggunakan **dulang kayu jelutung**) dan **melampan** (mengalirkan air ke dalam **palung kayu** berbijih).',
            zh: '当地传统采锡采用两大方法：“淘洗法”（mendulang，由马来妇女在浅河用日落洞木盘淘洗）与“木槽冲洗法”（melampan，将含锡泥土放入木槽引水冲走泥沙）。',
          },
          {
            tag: 'FAKTA',
            bm: 'Di **Perak** (abad ke-16 hingga ke-19), perlombongan **bijih timah** pada awalnya tertumpu di sepanjang **Sungai Perak** iaitu di **Hilir Perak** dan **Kuala Kangsar** sehingga Perak masyhur dengan kekayaan bijih timah.',
            zh: '在霹雳（16至19世纪），锡矿开采最初集中在霹雳河沿岸的下霹雳（Hilir Perak）与江沙（Kuala Kangsar），使霹雳自古因富产锡米闻名遐迩。',
          },
          {
            tag: 'CONTOH',
            bm: 'Pada tahun 1840-an, pembesar Melayu **Long Jaafar** membuka lombong bijih timah di **Larut** (**Kelian Pauh** dan **Kelian Baru**) serta membawa masuk **pelombong Cina**; usaha ini diteruskan oleh anaknya **Ngah Ibrahim** (Menteri Larut) yang menjadikan **Kuala Sepetang** sebagai pelabuhan utama.',
            zh: '1840年代，马来大臣隆查法（Long Jaafar）在拉律（Larut）开辟Kelian Pauh（今太平）与Kelian Baru（今甘文丁）矿区并引进华裔矿工；其子岳依布拉欣（Ngah Ibrahim，拉律大臣）继承父业，将十八丁（Kuala Sepetang）建设为锡米出口港。',
          },
          {
            tag: 'CONTOH',
            bm: 'Menjelang akhir abad ke-19, **Lembah Kinta** muncul sebagai pengeluar **bijih timah** utama dunia yang melahirkan bandar perlombongan pesat seperti **Ipoh**, **Batu Gajah**, **Papan**, **Gopeng**, dan **Pengkalan Pegoh**.',
            zh: '到了19世纪末，霹雳近打河流域（Lembah Kinta）崛起为世界头号锡米产地，催生了怡保（Ipoh）、华都牙也（Batu Gajah）、甲板（Papan）、务边（Gopeng）等繁荣矿镇。',
          },
          {
            tag: 'CONTOH',
            bm: 'Di **Selangor**, kekayaan bijih timah di **Lukut** diterokai oleh **Raja Busu** pada tahun 1830-an dan mencapai puncak kemakmuran di bawah pentadbiran **Raja Jumaat** (serta diteruskan oleh **Raja Bot**) sebagai pusat perdagangan bijih timah terkenal.',
            zh: '在雪兰莪，芦骨（Lukut）锡矿于1830年代由拉惹布苏（Raja Busu）开发，并在拉惹朱马安（Raja Jumaat，后由Raja Bot继承）治理下达到鼎盛，成为著名锡矿贸易重镇。',
          },
          {
            tag: 'CONTOH',
            bm: 'Pada tahun 1857, **Raja Abdullah bin Raja Jaafar** bersama-sama **Raja Ismail** dan pembesar Mandailing **Sutan Puasa** meneroka pertemuan **Sungai Klang dan Sungai Gombak**, membuka lombong di **Ampang**, **Kuala Lumpur**, **Klang**, dan **Kajang**, yang kemudian dimajukan oleh Kapitan Cina **Yap Ah Loy**.',
            zh: '1857年，巴生大臣拉惹阿都拉（Raja Abdullah）联同拉惹依斯迈（Raja Ismail）及曼代灵领袖苏丹普阿萨（Sutan Puasa）开拓巴生河与鹅唛河交汇处，开辟安邦（Ampang）、吉隆坡、巴生与加影矿区，随后由华人甲必丹叶亚来（Yap Ah Loy）大力发展吉隆坡。',
          },
          {
            tag: 'CONTOH',
            bm: 'Di **Negeri Sembilan**, kegiatan perlombongan **bijih timah** giat diusahakan di kawasan **Sungai Ujong** (termasuk **Rasah** dan kawasan sempadan **Sungai Linggi**), menjadikannya tumpuan pedagang Negeri-negeri Selat.',
            zh: '在森美兰，锡矿开采高度集中于双溪芙蓉（Sungai Ujong，包括亚沙Rasah及宁宜河流域），成为海峡殖民地商人争相贸易的焦点。',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Jangan keliru antara **Kelian Pauh** (kini dikenali sebagai bandar **Taiping**) dengan **Kelian Baru** (kini **Kamunting**) di Larut, serta bezakan pembesar **Long Jaafar / Ngah Ibrahim** (Larut, Perak) daripada **Raja Jumaat** (Lukut) dan **Raja Abdullah** (Klang/Kuala Lumpur)!',
            zh: '⚠️ 考官陷阱：切勿混淆拉律的两大矿区——Kelian Pauh（今太平Taiping）与Kelian Baru（今甘文丁Kamunting）；也要分清人物对应州属：Long Jaafar与Ngah Ibrahim在霹雳拉律，Raja Jumaat在芦骨，Raja Abdullah与Sutan Puasa、Yap Ah Loy在雪兰莪吉隆坡/安邦！',
          },
        ],
      },
      {
        sectionCode: '3.1(b)',
        headingBm: 'Kekayaan Hasil Emas di Pahang',
        headingZh: '彭亨州的丰富黄金资源',
        leadParagraphBm:
          'Selain bijih timah di pantai barat, Semenanjung Tanah Melayu juga terkenal di peringkat antarabangsa sebagai pengeluar **emas** utama sehingga digelar *Semenanjung Emas* (*Chersonesus Aurea*). Perlombongan emas tertumpu di kawasan **Jalur Emas** yang sebahagian besarnya terletak di negeri **Pahang**.',
        leadParagraphZh:
          '除了西海岸盛产锡米，马来半岛自古更以盛产黄金享誉国际，被古籍称为“黄金半岛”（Semenanjung Emas）。黄金开采主要集中在“黄金地带”（Jalur Emas），其中绝大部分位于彭亨州（Pahang）。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: 'Kawasan perlombongan **emas** terpenting di **Jalur Emas Pahang** meliputi **Raub**, **Tui**, **Tersang**, **Selinsing**, **Penjom**, **Kechau**, dan **Hulu Dong**.',
            zh: '彭亨“黄金地带”（Jalur Emas Pahang）的核心产金区涵盖：劳勿（Raub）、Tui、Tersang、Selinsing、Penjom、Kechau以及Hulu Dong。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Berdasarkan rekod China, India, serta catatan penulis Portugis **Manuel Godinho de Eredia**, **emas** merupakan hasil eksport utama Pahang sejak abad ke-13 dan dijadikan hadiah kehormat kepada negeri-negeri lain.',
            zh: '根据中国、印度史料以及葡萄牙学者戈迪尼奥·德·埃雷迪亚（Manuel Godinho de Eredia）的记载，自13世纪起黄金便是彭亨的主要出口特产，并常作为贵重国礼赠予他国。',
          },
          {
            tag: 'CONTOH',
            bm: 'Pada **abad ke-16 dan ke-17**, perlombongan emas dijalankan oleh **orang Melayu**, **Orang Asli**, dan **orang Minangkabau** menggunakan kaedah tradisional **mendulang** dan **melampan**.',
            zh: '在16与17世纪，彭亨黄金开采主要由马来人、原住民（Orang Asli）和米南加保人（orang Minangkabau）采用传统的“淘洗法”（mendulang）和“木槽冲洗法”（melampan）进行。',
          },
          {
            tag: 'CONTOH',
            bm: 'Pada **abad ke-18**, kekayaan emas menarik kemasukan **pelombong Cina** dari Kelantan, Perak, dan Negeri Sembilan yang turut mengusahakan lombong emas dengan kaedah **melampan**.',
            zh: '到了18世纪，彭亨丰富的金矿吸引了来自吉兰丹、霹雳与森美兰的华裔矿工涌入，同样采用木槽冲洗法（melampan）采金。',
          },
          {
            tag: 'CONTOH',
            bm: 'Menjelang **abad ke-19**, **Sultan Ahmad** memberikan konsesi kepada **pelabur Eropah** untuk memajukan kegiatan perlombongan emas di Pahang menggunakan kaedah moden iaitu **lombong dedah** dan **lombong bawah tanah**.',
            zh: '进入19世纪，彭亨苏丹阿末（Sultan Ahmad）批出特许经营权（konsesi）给欧洲投资者，采用现代化的露天矿场（lombong dedah）与地下深井矿场（lombong bawah tanah）技术大规模采金（如劳勿澳洲金矿公司）。',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Ingat perbezaan taburan hasil bumi: **Perak, Selangor, dan Sungai Ujong (Negeri Sembilan)** terkenal dengan **bijih timah**, manakala **Pahang** terkenal dengan kekayaan **emas** di kawasan **Raub, Penjom, Selinsing, Tui, Tersang, Kechau, dan Hulu Dong**!',
            zh: '⚠️ 考官陷阱：牢记矿产地理分布——霹雳、雪兰莪和森美兰（双溪芙蓉）以“锡米”闻名；而彭亨则以“黄金”（劳勿Raub、Penjom、Selinsing等）著称！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Kawasan Perlombongan Bijih Timah dan Emas Utama serta Pembesar Melayu / Tokoh yang Terlibat',
        titleZh: '四大马来州属主要锡矿与金矿产区及涉及的马来大臣/历史人物对照表',
        headers: [
          { bm: 'Negeri & Hasil Bumi', zh: '州属与主要矿产' },
          { bm: 'Kawasan Perlombongan Utama', zh: '主要矿区地名' },
          { bm: 'Pembesar Melayu / Tokoh Terlibat', zh: '主导马来大臣与关键人物' },
          { bm: 'Perkembangan & Ciri Penting', zh: '重要历史发展与特征' },
        ],
        rows: [
          [
            { bm: '**Perak** (**Bijih Timah**)', zh: '霹雳（锡米）' },
            {
              bm: '**Hilir Perak**, **Kuala Kangsar**, **Larut** (**Kelian Pauh** & **Kelian Baru**), **Lembah Kinta** (**Ipoh, Batu Gajah, Papan, Gopeng**)',
              zh: '下霹雳、江沙、拉律（Kelian Pauh与Kelian Baru）、近打河流域（怡保、华都牙也、甲板、务边）',
            },
            {
              bm: '**Long Jaafar** dan anaknya **Ngah Ibrahim** (Menteri Larut)',
              zh: '隆查法（Long Jaafar）及其子岳依布拉欣（Ngah Ibrahim，拉律大臣）',
            },
            {
              bm: 'Membawa masuk pelombong Cina ke Larut (1840-an); menjadikan **Kuala Sepetang** pelabuhan; **Lembah Kinta** muncul pengeluar bijih timah utama dunia.',
              zh: '1840年代引进华工开发拉律；以十八丁为出口港；19世纪末近打河流域成为世界最大产锡区。',
            },
          ],
          [
            { bm: '**Selangor** (**Bijih Timah**)', zh: '雪兰莪（锡米）' },
            {
              bm: '**Lukut**, **Kuala Lumpur**, **Ampang**, **Klang**, **Kajang**, **Kanching**',
              zh: '芦骨、吉隆坡、安邦、巴生、加影、间征',
            },
            {
              bm: '**Raja Busu**, **Raja Jumaat** & **Raja Bot** (Lukut); **Raja Abdullah**, **Raja Ismail**, **Sutan Puasa** & **Yap Ah Loy** (KL/Ampang)',
              zh: '芦骨：Raja Busu、Raja Jumaat；吉隆坡/安邦：Raja Abdullah、Sutan Puasa、叶亚来（Yap Ah Loy）',
            },
            {
              bm: 'Lukut makmur sejak 1830-an; penerokaan pertemuan **Sungai Klang dan Sungai Gombak (1857)** melahirkan pusat perdagangan **Kuala Lumpur**.',
              zh: '芦骨自1830年代繁荣；1857年开拓巴生河与鹅唛河交汇处，催生吉隆坡商贸与锡矿中心。',
            },
          ],
          [
            { bm: '**Negeri Sembilan** (**Bijih Timah**)', zh: '森美兰（锡米）' },
            {
              bm: '**Sungai Ujong** (**Rasah** / Seremban) dan laluan **Sungai Linggi**',
              zh: '双溪芙蓉（亚沙/芙蓉）及宁宜河航道',
            },
            {
              bm: '**Dato\' Kelana Syed Abdul Rahman** dan **Dato\' Syahbandar Abdullah Tunggal**',
              zh: '拿督克拉那（Dato\' Kelana）与拿督沙班达（Dato\' Syahbandar）',
            },
            {
              bm: '**Sungai Linggi** menjadi laluan perdagangan bijih timah paling strategik menghubungkan Sungai Ujong dengan pelabuhan Melaka.',
              zh: '宁宜河（Sungai Linggi）成为将双溪芙蓉锡米运往马六甲港口的最关键水路命脉。',
            },
          ],
          [
            { bm: '**Pahang** (**Emas**)', zh: '彭亨（黄金）' },
            {
              bm: '**Jalur Emas Pahang**: **Raub**, **Tui**, **Tersang**, **Selinsing**, **Penjom**, **Kechau**, **Hulu Dong**',
              zh: '彭亨黄金地带：劳勿（Raub）、Tui、Tersang、Selinsing、Penjom、Kechau、Hulu Dong',
            },
            {
              bm: '**Sultan Ahmad**, orang Melayu, Orang Asli, orang Minangkabau, pelombong Cina & syarikat Eropah',
              zh: '苏丹阿末（Sultan Ahmad）、马来人、原住民、米南加保人、华工及欧洲矿业公司',
            },
            {
              bm: 'Beralih daripada kaedah tradisional (**mendulang & melampan**) kepada konsesi Eropah abad ke-19 (**lombong dedah & lombong bawah tanah**).',
              zh: '从16-18世纪传统的淘洗与木槽冲洗法，发展至19世纪欧洲特许公司的露天与地下矿井开采。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Long Jaafar',
        roleBm: 'Pembesar Melayu Peneroka Larut',
        roleZh: '拉律锡矿开拓大臣',
        emoji: '👳‍♂️',
        lineBm:
          'Lihatlah hasil bumi di **Kelian Pauh** dan **Kelian Baru** ini! Dengan **surat tauliah** Sultan Perak dan tenaga pelombong Cina, **Larut** pasti menjadi pengeluar **bijih timah** paling makmur!',
        lineZh:
          '看看Kelian Pauh和Kelian Baru遍地的锡米吧！有了霹雳苏丹的委任状（surat tauliah）加上勤劳的华裔矿工，拉律一定能成为最富庶的产锡重镇！',
      },
      {
        speakerBm: 'Ngah Ibrahim',
        roleBm: 'Orang Kaya Menteri Larut',
        roleZh: '拉律大臣（隆查法之子）',
        emoji: '🚢',
        lineBm:
          'Benar ayahanda! Hamba akan membangunkan **Kuala Sepetang** sebagai pelabuhan eksport supaya semua **bijih timah** Larut dapat dipasarkan terus ke Pulau Pinang!',
        lineZh:
          '父亲说得对！孩儿会把十八丁（Kuala Sepetang）建设成出口港口，让拉律所有的锡米直接运往槟城贸易！',
      },
      {
        speakerBm: 'Raja Abdullah bin Raja Jaafar',
        roleBm: 'Pembesar Daerah Klang',
        roleZh: '雪兰莪巴生地区马来大臣',
        emoji: '⛏️',
        lineBm:
          'Wahai sahabatku **Sutan Puasa**, pertemuan **Sungai Klang dan Sungai Gombak** ini amat kaya dengan bijih timah! Mari kita buka lombong di **Ampang** — kelak **Kuala Lumpur** akan menjadi bandar besar!',
        lineZh:
          '我的挚友苏丹普阿萨（Sutan Puasa），巴生河与鹅唛河交汇处蕴藏着惊人的锡米！咱们在安邦（Ampang）开矿吧——将来吉隆坡必定成为大都会！',
      },
      {
        speakerBm: 'Sultan Ahmad Al-Muadzam Shah',
        roleBm: 'Sultan Pahang',
        roleZh: '彭亨苏丹',
        emoji: '👑',
        lineBm:
          'Bumi Pahang pula dikurniakan **Jalur Emas** di **Raub**, **Selinsing**, dan **Penjom**. Beta memberikan konsesi terkawal kepada pelabur Eropah supaya ekonomi negeri maju tanpa menggadaikan kedaulatan!',
        lineZh:
          '我们彭亨大地则拥有劳勿（Raub）、Selinsing和Penjom的“黄金地带”！朕有条件地批出特许权给欧洲投资者采用现代地下矿井采金，既发展州经济又守护主权！',
      },
    ],
    memoryHackBm:
      'Formula Ingat Pantas **3.1**: **TIMAH Barat** = **L-K-L-A-S** (**Larut** [Long Jaafar & Ngah Ibrahim], **Kinta** [Ipoh/Gopeng], **Lukut** [Raja Jumaat], **Ampang/KL** [Raja Abdullah, Sutan Puasa, Yap Ah Loy], **Sungai Ujong**). **EMAS Pahang** = **"Raja Tua Senyum Selalu Sebab Penuh Kepingan Harta"** (**Raub, Tui, Selinsing, Penjom, Kechau, Hulu Dong, Tersang**)!',
    memoryHackZh:
      '💡 王牌名师神记忆口诀（3.1）：【西岸产锡 L-K-L-A-S】拉律父子档（Long Jaafar -> Ngah Ibrahim）、近打世界王（Lembah Kinta）、芦骨朱马安（Lukut - Raja Jumaat）、隆市安邦铁三角（Raja Abdullah + Sutan Puasa + Yap Ah Loy）、森州双溪芙蓉（Sungai Ujong）！【彭亨黄金地带】记住头号金城 **Raub（劳勿）** + **Penjom、Selinsing、Tui、Tersang、Kechau、Hulu Dong**，传统女淘盘（mendulang）、木槽冲水（melampan）秒拿满分！',
    subtopicMcqs: [
      {
        id: '3.1-mcq-1',
        spCode: '7.3.1',
        questionBm:
          'Bagaimanakah **pembesar Melayu** memperoleh hak mengusahakan kawasan perlombongan **bijih timah** pada abad ke-15 hingga abad ke-19?',
        questionZh: '在15世纪至19世纪期间，马来大臣（pembesar Melayu）如何获得开采锡矿区的合法权利？',
        options: [
          {
            id: 'A',
            textBm: 'Melalui **surat tauliah** yang dikurniakan oleh **Sultan**',
            textZh: '通过苏丹颁赐的委任状（surat tauliah）',
          },
          {
            id: 'B',
            textBm: 'Melalui pajakan tanah daripada Gabenor Negeri-negeri Selat',
            textZh: '通过向海峡殖民地总督租借土地',
          },
          {
            id: 'C',
            textBm: 'Melalui konsesi perlombongan daripada Residen British',
            textZh: '通过英国参政司批出的采矿特许权',
          },
          {
            id: 'D',
            textBm: 'Melalui perjanjian perdagangan dengan kongsi gelap Cina',
            textZh: '通过与华人私会党签署贸易协定',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Semua lombong bijih timah dimiliki oleh **pembesar Melayu** yang mendapat **surat tauliah** daripada **Sultan** untuk mentadbir dan memungut hasil di kawasan pegangan masing-masing.',
        explanationZh:
          '正确是 A！在英国干预前，所有锡矿区均受马来传统政治体制管辖，马来大臣必须获得苏丹颁赐的委任状（surat tauliah）才拥有开采与征税权。',
      },
      {
        id: '3.1-mcq-2',
        spCode: '7.3.1',
        questionBm:
          'Siapakah tokoh **pembesar Melayu** yang membuka lombong bijih timah di **Kelian Pauh** dan **Kelian Baru**, **Larut** pada tahun 1840-an?',
        questionZh: '哪位马来大臣于1840年代在霹雳拉律开辟了 Kelian Pauh 与 Kelian Baru 锡矿区？',
        options: [
          {
            id: 'A',
            textBm: '**Raja Jumaat**',
            textZh: '拉惹朱马安（Raja Jumaat）',
          },
          {
            id: 'B',
            textBm: '**Long Jaafar**',
            textZh: '隆查法（Long Jaafar）',
          },
          {
            id: 'C',
            textBm: '**Raja Abdullah bin Raja Jaafar**',
            textZh: '拉惹阿都拉（Raja Abdullah bin Raja Jaafar）',
          },
          {
            id: 'D',
            textBm: '**Dato\' Kelana Syed Abdul Rahman**',
            textZh: '拿督克拉那（Dato\' Kelana Syed Abdul Rahman）',
          },
        ],
        correctId: 'B',
        explanationBm:
          '**Long Jaafar** telah membuka kawasan perlombongan bijih timah di **Larut** (**Kelian Pauh** dan **Kelian Baru**) pada tahun 1840-an dan membawa masuk pelombong Cina, sebelum diteruskan oleh anaknya **Ngah Ibrahim**.',
        explanationZh:
          '正确是 B！Long Jaafar 在1840年代开辟拉律（Kelian Pauh 与 Kelian Baru）锡矿，其子 Ngah Ibrahim 随后继承；Raja Jumaat 在芦骨，Raja Abdullah 在巴生/吉隆坡，Dato\' Kelana 在双溪芙蓉。',
      },
      {
        id: '3.1-mcq-3',
        spCode: '7.3.1',
        questionBm:
          'Kemunculan bandar **Kuala Lumpur** sebagai pusat pengeluaran bijih timah bermula pada tahun 1857 apabila kawasan pertemuan **Sungai Klang dan Sungai Gombak** diterokai oleh...',
        questionZh: '吉隆坡于1857年崛起为锡矿产区，始于谁率队开拓巴生河与鹅唛河交汇处？',
        options: [
          {
            id: 'A',
            textBm: '**Ngah Ibrahim** dan **Kapten Speedy**',
            textZh: '岳依布拉欣与史毕迪上尉',
          },
          {
            id: 'B',
            textBm: '**Raja Busu** dan **Raja Bot**',
            textZh: '拉惹布苏与拉惹博',
          },
          {
            id: 'C',
            textBm: '**Raja Abdullah**, **Raja Ismail**, dan **Sutan Puasa**',
            textZh: '拉惹阿都拉、拉惹依斯迈与苏丹普阿萨',
          },
          {
            id: 'D',
            textBm: '**Dato\' Syahbandar** dan **Tengku Kudin**',
            textZh: '拿督沙班达与东姑古丁',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Pada tahun 1857, **Raja Abdullah bin Raja Jaafar** bersama-sama **Raja Ismail** dan pembesar Mandailing **Sutan Puasa** meneroka pertemuan **Sungai Klang dan Sungai Gombak** untuk membuka lombong bijih timah di **Ampang** dan **Kuala Lumpur**.',
        explanationZh:
          '正确是 C！1857年，巴生大臣 Raja Abdullah 联合 Raja Ismail 与曼代灵领袖 Sutan Puasa 深入巴生河与鹅唛河交汇处开辟安邦锡矿，奠定了吉隆坡的诞生。',
      },
      {
        id: '3.1-mcq-4',
        spCode: '7.3.1',
        questionBm:
          'Antara berikut, manakah lokasi perlombongan **emas** utama yang terletak di kawasan **Jalur Emas Pahang**?',
        questionZh: '下列哪组地点属于位于“彭亨黄金地带”（Jalur Emas Pahang）的主要采金区？',
        options: [
          {
            id: 'A',
            textBm: '**Ipoh**, **Batu Gajah**, dan **Gopeng**',
            textZh: '怡保、华都牙也与务边',
          },
          {
            id: 'B',
            textBm: '**Lukut**, **Kajang**, dan **Ampang**',
            textZh: '芦骨、加影与安邦',
          },
          {
            id: 'C',
            textBm: '**Kelian Pauh** dan **Kelian Baru**',
            textZh: 'Kelian Pauh 与 Kelian Baru',
          },
          {
            id: 'D',
            textBm: '**Raub**, **Selinsing**, dan **Penjom**',
            textZh: '劳勿、Selinsing 与 Penjom',
          },
        ],
        correctId: 'D',
        explanationBm:
          'Kawasan perlombongan emas utama di **Pahang** merangkumi **Raub**, **Tui**, **Tersang**, **Selinsing**, **Penjom**, **Kechau**, dan **Hulu Dong**, manakala pilihan A, B, dan C ialah kawasan bijih timah.',
        explanationZh:
          '正确是 D！劳勿（Raub）、Selinsing 与 Penjom 皆为彭亨黄金地带的著名金矿区；A（近打河流域）、B（雪兰莪）与C（霹雳拉律）全都是锡矿区！',
      },
      {
        id: '3.1-mcq-5',
        spCode: 'K7.3.5',
        questionBm:
          'Apakah kaedah perlombongan emas moden yang diperkenalkan oleh syarikat **orang Eropah** di **Pahang** selepas menerima konsesi daripada **Sultan Ahmad** pada abad ke-19?',
        questionZh: '19世纪欧洲公司获得彭亨苏丹阿末批出特许权后，引进了哪种现代采金方法？',
        options: [
          {
            id: 'A',
            textBm: '**Kaedah mendulang** menggunakan kayu jelutung',
            textZh: '使用日落洞木盘的淘洗法',
          },
          {
            id: 'B',
            textBm: '**Lombong dedah** dan **lombong bawah tanah**',
            textZh: '露天矿场（lombong dedah）与地下矿井（lombong bawah tanah）',
          },
          {
            id: 'C',
            textBm: '**Kaedah melampan** di tepi anak sungai',
            textZh: '在小溪旁进行的木槽冲洗法',
          },
          {
            id: 'D',
            textBm: 'Sistem Kangchu dan Surat Sungai',
            textZh: '港主制度与港契',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Pada abad ke-19, **Sultan Ahmad** memberikan konsesi kepada **orang Eropah** untuk memajukan perlombongan emas di Pahang dengan menggunakan kaedah **lombong dedah** dan **lombong bawah tanah**.',
        explanationZh:
          '正确是 B！19世纪欧洲矿业公司在彭亨采用现代露天采矿（lombong dedah）与地下深井采矿（lombong bawah tanah）；mendulang 与 melampan 属于早期传统方法。',
      },
    ],
    strukturQuestion: {
      id: '3.1-struktur-1',
      spCode: '7.3.1',
      stimulusBm:
        'Kekayaan hasil bumi seperti **bijih timah** dan **emas** di **Perak**, **Selangor**, **Negeri Sembilan**, dan **Pahang** telah diusahakan oleh masyarakat tempatan di bawah penguasaan **pembesar Melayu** sebelum menarik kehadiran pelombong luar pada abad ke-19.',
      stimulusZh:
        '霹雳、雪兰莪、森美兰与彭亨丰富的锡米与黄金资源，早期在马来大臣管辖下由当地民众开采，并在19世纪吸引大批外来矿工与投资者涌入。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Senaraikan **tiga** kawasan perlombongan **bijih timah** utama di **Perak** atau **Selangor** pada abad ke-19. [3 markah]',
          questionZh: '列出19世纪霹雳或雪兰莪的三个主要锡矿开采区。[3分]',
          expectedKeywordsBm: [
            'Larut',
            'Kelian Pauh',
            'Kelian Baru',
            'Lembah Kinta',
            'Ipoh',
            'Lukut',
            'Kuala Lumpur',
            'Ampang',
            'Klang',
          ],
          modelAnswerBm:
            'Tiga kawasan perlombongan bijih timah utama ialah **Larut** (**Kelian Pauh** dan **Kelian Baru**) serta **Lembah Kinta** (**Ipoh**, **Batu Gajah**, **Gopeng**) di Perak, dan **Lukut** serta **Ampang / Kuala Lumpur** di Selangor.',
          modelAnswerZh:
            '三个主要锡矿区包括霹雳州的拉律（Kelian Pauh 与 Kelian Baru）及近打河流域（怡保、华都牙也、务边），以及雪兰莪州的芦骨与安邦/吉隆坡。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Jelaskan peranan **pembesar Melayu** dan kaedah tradisional yang digunakan oleh masyarakat tempatan dalam kegiatan perlombongan hasil bumi tersebut. [3 markah]',
          questionZh: '说明马来大臣在矿业中的角色，以及当地民众所使用的传统采矿方法。[3分]',
          expectedKeywordsBm: [
            'pemilik lombong',
            'surat tauliah',
            'Sultan',
            'mendulang',
            'melampan',
          ],
          modelAnswerBm:
            '**Pembesar Melayu** berperanan sebagai **pemilik lombong** yang memperoleh **surat tauliah** daripada **Sultan** serta membekalkan semua keperluan perbelanjaan lombong. Masyarakat tempatan pula melombong secara tradisional menggunakan kaedah **mendulang** (menggunakan dulang kayu jelutung oleh perempuan Melayu) dan kaedah **melampan**.',
          modelAnswerZh:
            '马来大臣作为矿场拥有者（pemilik lombong），凭苏丹颁赐的委任状（surat tauliah）管辖矿区并提供矿场一切日常开销。当地民众则使用传统方法采矿，即淘洗法（mendulang，马来妇女使用日落洞木盘）和木槽冲洗法（melampan）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Sebagai generasi muda hari ini, bagaimanakah kita dapat menguruskan kekayaan hasil bumi negara secara bijaksana agar kedaulatan dan kemakmuran negara terus terpelihara? [4 markah]',
          questionZh: '作为当今的年轻一代，我们应如何明智地管理国家丰富的天然资源，以确保国家主权与繁荣永续长存？[4分]',
          expectedKeywordsBm: [
            'teknologi moden',
            'tenaga pakar tempatan',
            'kelestarian alam sekitar',
            'mengelakkan kebergantungan kuasa asing',
            'memajukan ekonomi negara',
          ],
          modelAnswerBm:
            'Kita hendaklah menguasai **ilmu sains dan teknologi moden** supaya hasil bumi dapat diproses menjadi produk bernilai tinggi oleh **tenaga pakar tempatan** sendiri. Selain itu, kerajaan dan rakyat perlu mengamalkan **pembangunan lestari** serta menguatkuasakan undang-undang alam sekitar seperti penanaman semula hutan di bekas lombong. Dengan cara ini, kita dapat **mengelakkan kebergantungan kepada kuasa asing** sekali gus menjamin kemakmuran ekonomi dan kedaulatan negara secara berterusan.',
          modelAnswerZh:
            '【Fakta】我们应当掌握现代科学与技术知识，【Huraian】让本地专业人才亲自将天然资源加工成高附加值产品，避免过度依赖外国势力。【Contoh】同时须实践永续发展并严厉执行环保法律，如在废矿地重新植树造林。【Inferens】借此既能保障国家经济繁荣，又能巩固国家主权。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 3.2: PELUASAN KUASA BRITISH DI PERAK, SELANGOR, NEGERI SEMBILAN & PAHANG
  // ============================================================================
  {
    subtopicCode: '3.2',
    babNumber: 3,
    babTitleBm: 'Pentadbiran Negeri-negeri Melayu Bersekutu',
    babTitleZh: '马来联邦的行政管理',
    skCode: '7.3',
    spCodes: ['7.3.2', 'K7.3.6'],
    titleBm: 'Peluasan Kuasa British di Perak, Selangor, Negeri Sembilan dan Pahang',
    titleZh: '英国在霹雳、雪兰莪、森美兰与彭亨的势力扩张',
    heroImages: [
      {
        imageKey: 'bab3_pangkor_tin',
        captionBm:
          'Rundingan bersejarah di atas kapal **HMS Pluto** di Pulau Pangkor yang membawa kepada pemeteraian **Perjanjian Pangkor pada 20 Januari 1874** dan pengenalan **Sistem Residen**.',
        captionZh:
          '在邦咯岛英国军舰“冥王星号”（HMS Pluto）上举行的历史性谈判，促成1874年1月20日《邦咯条约》的签署及“参政司制度”的诞生。',
        hotspots: [
          {
            x: 22,
            y: 44,
            termBm: 'Kapal HMS Pluto',
            meaningZh: '英国军舰“冥王星号”（签约地点）',
            detailBm:
              'Lokasi rundingan **Perjanjian Pangkor (20 Januari 1874)** yang dipanggil oleh Gabenor NNS **Andrew Clarke** di perairan Pulau Pangkor.',
            detailZh:
              '海峡殖民地总督安德鲁·克拉克（Andrew Clarke）召集马来大臣与华人私会党领袖在邦咯岛海域谈判并签署条约的军舰。',
          },
          {
            x: 50,
            y: 36,
            termBm: 'Andrew Clarke',
            meaningZh: '海峡殖民地总督（干预幕后推手）',
            detailBm:
              'Gabenor Negeri-negeri Selat yang diarahkan oleh Setiausaha Tanah Jajahan **Lord Kimberley** untuk mencampuri hal ehwal negeri-negeri Melayu.',
            detailZh:
              '奉英国殖民地大臣金伯利勋爵（Lord Kimberley）之命，改变不干预政策、正式插手马来各州内政的海峡殖民地总督。',
          },
          {
            x: 74,
            y: 48,
            termBm: 'Raja Abdullah',
            meaningZh: '拉惹阿都拉（获英方承认为霹雳苏丹）',
            detailBm:
              'Meminta bantuan British bagi menuntut takhta Perak lalu diiktiraf sebagai **Sultan Perak** dengan syarat menerima seorang **Residen British**.',
            detailZh:
              '致函向英国求助争夺王位，最终获承认为霹雳苏丹，代价是必须接受一名英国参政司（Residen British）。',
          },
          {
            x: 54,
            y: 74,
            termBm: 'Syarat Residen British',
            meaningZh: '参政司劝告必须遵从（除伊斯兰教与马来习俗）',
            detailBm:
              'Sultan mesti meminta dan mematuhi nasihat **Residen British** dalam semua urusan pentadbiran dan pungutan cukai **kecuali agama Islam dan adat Melayu**.',
            detailZh:
              '条约核心条款：苏丹在一切行政与征税事务上必须征询并遵从英国参政司的劝告，唯独伊斯兰教与马来习俗除外。',
          },
        ],
      },
      {
        imageKey: 'bab3_perlombongan_larut',
        captionBm:
          'Kekacauan **Perang Larut (1861–1874)** dan **Perang Klang (1867–1874)** dimanipulasikan oleh British sebagai alasan untuk campur tangan rasmi demi menguasai bekalan bijih timah.',
        captionZh:
          '拉律战争（1861–1874）与巴生战争（1867–1874）的动乱被英国趁机操纵，作为正式干预并控制锡米供应的借口。',
      },
    ],
    sections: [
      {
        sectionCode: '3.2(a)',
        headingBm: 'Strategi Manipulasi British di Perak dan Perjanjian Pangkor 1874',
        headingZh: '英国在霹雳的操纵策略与1874年《邦咯条约》',
        leadParagraphBm:
          'Menjelang tahun 1870-an, perkembangan Revolusi Perindustrian (keperluan mengetin makanan), pembukaan **Terusan Suez (1869)**, dan pertukaran kerajaan kepada **Parti Konservatif** di Britain mendorong Setiausaha Tanah Jajahan **Lord Kimberley** mengarahkan Gabenor NNS **Andrew Clarke** mencari peluang campur tangan di negeri-negeri Melayu. Di **Perak**, British memanipulasikan dua krisis utama iaitu **Perang Larut** dan **perebutan takhta Kesultanan Perak**.',
        leadParagraphZh:
          '进入1870年代，工业革命对马口铁罐头的需求激增、1869年苏伊士运河通航，加上英国保守党上台执政，促使殖民地大臣金伯利勋爵指示海峡殖民地总督安德鲁·克拉克寻找机会干预马来各州。在霹雳，英国趁机操纵了“拉律战争”与“霹雳王位争夺战”两大危机。',
        imageKey: 'bab3_pangkor_tin',
        imageCaptionBm:
          'Pemeteraian **Perjanjian Pangkor (20 Januari 1874)** di atas kapal **HMS Pluto** menandakan bermulanya campur tangan rasmi British di negeri-negeri Melayu.',
        imageCaptionZh:
          '1874年1月20日在 HMS Pluto 军舰上签署《邦咯条约》，标志着英国正式干预马来土邦内政的开端。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Faktor Pertama — Perang Larut (1861–1874)**: Tercetus pergaduhan sengit antara dua kumpulan kongsi gelap pelombong Cina iaitu **Ghee Hin** dan **Hai San** untuk mempertahankan hak lombong masing-masing sehingga menjejaskan perdagangan bijih timah di **Negeri-negeri Selat (NNS)**.',
            zh: '第一大导火线——拉律战争（1861–1874）：两大华人私会党义兴公司（Ghee Hin）与海山公司（Hai San）为争夺锡矿利益爆发流血械斗，严重冲击海峡殖民地的锡米贸易。',
          },
          {
            tag: 'CONTOH',
            bm: 'Pelabur Eropah dan pedagang NNS mendesak British campur tangan melindungi pelaburan mereka, manakala Menteri Larut **Ngah Ibrahim** meminta bantuan **Kapten Speedy** (Timbalan Pesuruhjaya Polis NNS) untuk menamatkan kekacauan di Larut.',
            zh: '欧洲投资者与海峡殖民地商人施压要求英国干预以保护投资，拉律大臣岳依布拉欣（Ngah Ibrahim）也聘请海峡殖民地副警监史毕迪上尉（Kapten Speedy）协助平息拉律动乱。',
          },
          {
            tag: 'FAKTA',
            bm: '**Faktor Kedua — Perebutan Takhta Kesultanan Perak**: Mengikut **Sistem Penggiliran** Kesultanan Perak, kerabat diraja perlu memegang jawatan mengikut turutan: **Raja Kecil Bongsu -> Raja Di Hilir -> Raja Bendahara -> Raja Muda -> Sultan**.',
            zh: '第二大导火线——霹雳王位继承纷争：按照霹雳王朝独特的“轮任制度”（Sistem Penggiliran），王室成员须依次担任：Raja Kecil Bongsu -> Raja Di Hilir -> Raja Bendahara -> Raja Muda -> 最后继任苏丹（Sultan）。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Selepas kemangkatan **Sultan Ali** pada tahun **1871**, pembesar Perak melantik **Raja Ismail** (**Raja Bendahara**) sebagai Sultan Perak di **Hulu Perak** kerana **Raja Abdullah** (**Raja Muda**) tidak hadir ke upacara pemakaman Sultan Ali di Sayong walaupun dijemput, manakala **Raja Yusuf** (**Raja Di Hilir**) turut menuntut haknya setelah lama diketepikan.',
            zh: '1871年苏丹阿里驾崩后，由于王储拉惹阿都拉（Raja Muda）受邀却未出席在沙容（Sayong）举行的国葬，马来大臣遂拥立拉惹依斯迈（Raja Ismail，原任Raja Bendahara）在上霹雳继位为苏丹；同时长期被冷落的拉惹尤索夫（Raja Yusuf）也出面争位。',
          },
          {
            tag: 'CONTOH',
            bm: '**Raja Abdullah** yang mendapat sokongan pembesar Hilir Perak (Dato\' Maharaja Lela) dan pedagang NNS (**Tan Kim Ching** serta **W.H. Read**) menulis surat meminta bantuan British mengiktirafnya sebagai Sultan Perak.',
            zh: '获得下霹雳大臣支持以及海峡殖民地商人陈金钟（Tan Kim Ching）与 W.H. Read 协助的拉惹阿都拉，亲笔致函英国请求承认他为霹雳合法苏丹。',
          },
          {
            tag: 'FAKTA',
            bm: '**Perjanjian Pangkor (20 Januari 1874)**: Gabenor NNS **Andrew Clarke** memanggil pembesar Melayu dan pemimpin kongsi gelap Cina berunding di **Pulau Pangkor** di atas kapal **HMS Pluto** (tanpa kehadiran Raja Ismail dan Raja Yusuf) lalu memeterai **Perjanjian Pangkor**.',
            zh: '《邦咯条约》（1874年1月20日）：海峡殖民地总督安德鲁·克拉克召集马来大臣与华人私会党领袖登上停泊在邦咯岛的 HMS Pluto 军舰谈判（Raja Ismail 与 Raja Yusuf 并未出席），正式签署《邦咯条约》。',
          },
          {
            tag: 'CONTOH',
            bm: 'Syarat utama **Perjanjian Pangkor 1874**: (1) **Raja Abdullah** diiktiraf sebagai **Sultan Perak**; (2) **Raja Ismail** memakai gelaran **Sultan Muda** serta diberikan pencen dan sebuah wilayah kecil; (3) **Ngah Ibrahim** kekal sebagai Menteri Larut tetapi menerima seorang **Penolong Residen** (**Kapten Speedy**); (4) Sultan menerima seorang **Residen British** yang nasihatnya **mesti diminta dan dipatuhi** dalam semua urusan pentadbiran dan pungutan cukai **kecuali** perkara berkaitan **agama Islam dan adat Melayu**.',
            zh: '《邦咯条约》四大核心条款：（1）承认 Raja Abdullah 为霹雳苏丹；（2）Raja Ismail 改称“年轻苏丹”（Sultan Muda），获赐养老金与小块领地；（3）Ngah Ibrahim 保留拉律大臣职位，但须接受一名副参政司（Kapten Speedy）；（4）苏丹必须接受一名英国参政司（Residen British），除伊斯兰教与马来习俗外，一切行政与征税事务均须征询并遵从其劝告！',
          },
        ],
      },
      {
        sectionCode: '3.2(b)',
        headingBm: 'Strategi Manipulasi dan Desakan British di Selangor',
        headingZh: '英国在雪兰莪的操纵与施压策略',
        leadParagraphBm:
          'Di **Selangor**, sewaktu pemerintahan **Sultan Abdul Samad** (1857–1898), tercetus **Perang Klang (1867–1874)** akibat pertelingkahan kerabat diraja merebut daerah Klang yang kaya dengan bijih timah. Apabila manipulasi politik gagal memujuk Sultan, British menggunakan **strategi desakan** melalui insiden keselamatan perairan.',
        leadParagraphZh:
          '在雪兰莪苏丹阿都沙末（Sultan Abdul Samad，1857–1898年在位）统治期间，王室贵族为争夺盛产锡米的巴生地区爆发“巴生战争”（Perang Klang, 1867–1874）。当政治操纵未能说服苏丹时，英国便利用海域治安事件强行施压。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Perang Klang (1867–1874)** meletus apabila **Raja Mahadi bin Raja Sulaiman** tidak berpuas hati kerana daerah Klang diserahkan oleh Sultan Abdul Samad kepada **Raja Abdullah bin Raja Jaafar** (menggantikan ayahanda Raja Mahadi, iaitu almarhum Raja Sulaiman).',
            zh: '巴生战争（1867–1874）起因：苏丹阿都沙末将巴生管辖权交给拉惹阿都拉（Raja Abdullah），而非前巴生统治者拉惹苏莱曼之子拉惹马哈迪（Raja Mahadi），引起 Raja Mahadi 强烈不满并于1867年攻打巴生。',
          },
          {
            tag: 'CONTOH',
            bm: 'Selepas kematian Raja Abdullah, perjuangan diteruskan oleh puteranya **Raja Ismail** dengan bantuan menantu Sultan iaitu **Tengku Kudin** (Tengku Dhiauddin dari Kedah yang dilantik sebagai Wakil Yamtuan Selangor), kongsi gelap **Hai San**, dan **Yap Ah Loy**, manakala **Raja Mahadi** disokong oleh kongsi gelap **Ghee Hin**.',
            zh: 'Raja Abdullah 逝世后，其子 Raja Ismail 获得苏丹女婿东姑古丁（Tengku Kudin，来自吉打并获委为雪兰莪摄政代表）、海山公司及叶亚来（Yap Ah Loy）相助；Raja Mahadi 则获得义兴公司支持，双方激战连年。',
          },
          {
            tag: 'HURAIAN',
            bm: 'British memberikan bantuan ketenteraan kepada **Tengku Kudin** untuk menamatkan Perang Klang dengan harapan Sultan Abdul Samad menerima perlindungan British, namun **Sultan Abdul Samad enggan menerima Residen British**.',
            zh: '英国派兵协助东姑古丁平定巴生战争，企图借此诱使苏丹阿都沙末接受英国保护，但苏丹阿都沙末坚决拒绝接受英国参政司！',
          },
          {
            tag: 'CONTOH',
            bm: 'British terus mencari alasan **desakan** melalui dua peristiwa: (1) **Rompakan kapal dagang British** yang belayar dari Pulau Pinang ke Melaka berdekatan perairan **Kuala Langat (1873)**, dan (2) **Serangan terhadap rumah api** yang dibina oleh British di **Tanjung Rachado (1874)**.',
            zh: '英国随即利用两起海上袭击事件向苏丹强硬施压：（1）1873年一艘从槟城驶往马六甲的英国商船在瓜拉冷岳（Kuala Langat）附近海域遇劫；（2）1874年英国在丹绒拉查多（Tanjung Rachado）建造的灯塔遭袭击。',
          },
          {
            tag: 'FAKTA',
            bm: 'Melalui desakan tersebut, pada Disember 1874 **Sultan Abdul Samad** terpaksa menerima **J.G. Davidson** sebagai **Residen British pertama di Selangor** dan **Frank Swettenham** sebagai Penolong Residen di Langat.',
            zh: '在英国武力威胁与施压下，苏丹阿都沙末被迫于1874年12月接受戴维森（J.G. Davidson）出任雪兰莪第一任英国参政司，并由瑞天咸（Frank Swettenham）担任驻冷岳副参政司。',
          },
        ],
      },
      {
        sectionCode: '3.2(c)',
        headingBm: 'Strategi Manipulasi dan Perjanjian British di Negeri Sembilan',
        headingZh: '英国在森美兰的操纵与分阶段条约策略',
        leadParagraphBm:
          'Di **Negeri Sembilan**, peluasan kuasa British bermula di daerah terkaya bijih timah iaitu **Sungai Ujong** melalui manipulasi pertelingkahan dua pembesar tempatan merebut hak cukai di **Sungai Linggi**, sebelum diperluaskan secara berperingkat ke seluruh luak Negeri Sembilan.',
        leadParagraphZh:
          '在森美兰，英国的势力扩张始于最富产锡米的双溪芙蓉（Sungai Ujong）：英国利用当地两位大臣争夺宁宜河（Sungai Linggi）征税权的纠纷介入，随后再通过一系列条约分阶段吞并整个森美兰。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: 'Pertelingkahan tercetus di **Sungai Ujong** antara **Dato\' Kelana Syed Abdul Rahman** dengan **Dato\' Syahbandar Abdullah Tunggal** kerana kedua-duanya berebut hak memungut cukai ke atas pedagang bijih timah yang menggunakan laluan **Sungai Linggi** menuju ke pelabuhan Melaka.',
            zh: '双溪芙蓉爆发权力冲突：拿督克拉那（Dato\' Kelana Syed Abdul Rahman）与拿督沙班达（Dato\' Syahbandar Abdullah Tunggal）争相控制对经由宁宜河（Sungai Linggi）运锡往马六甲商船的征税权。',
          },
          {
            tag: 'CONTOH',
            bm: 'Pada tahun **1874**, **Dato\' Kelana** yang bimbang pengaruh Dato\' Syahbandar telah menerima bantuan ketenteraan dan menandatangani perjanjian perlindungan dengan British: British mengiktiraf Dato\' Kelana sebagai pemerintah Sungai Ujong, menguasai hak kutipan cukai di Sungai Linggi, mengalahkan Dato\' Syahbandar, dan menempatkan **P.J. Murray** sebagai **Residen British pertama di Sungai Ujong**.',
            zh: '1874年，担忧地位不保的 Dato\' Kelana 向英国求助并签署保护条约：英国承认 Dato\' Kelana 为双溪芙蓉统治者、击败并流放 Dato\' Syahbandar、掌控宁宜河征税权，并派驻默里（P.J. Murray）成为双溪芙蓉首任参政司。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Selepas menguasai Sungai Ujong, British meluaskan kuasa secara berperingkat melalui perjanjian dengan menempatkan Majistret dan Pemungut Hasil di **Jelebu (1883)**, **Rembau (1887)**, serta meletakkan **Seri Menanti (1889)** di bawah kawalan Residen **Martin Lister**.',
            zh: '控制双溪芙蓉后，英国采取蚕食策略逐一签约：先后在日叻务（Jelebu, 1883年）与林茂（Rembau, 1887年）派驻推事兼税务官，并于1889年将神安池（Seri Menanti）置于参政司马丁·利斯特（Martin Lister）管辖之下。',
          },
          {
            tag: 'FAKTA',
            bm: 'Pada tahun **1895**, semua daerah dan luak disatukan melalui perjanjian membentuk persekutuan **Negeri Sembilan** di bawah pemerintahan **Yamtuan Besar Tuanku Muhammad ibni Yamtuan Antah**, dan baginda menerima **Martin Lister** sebagai **Residen British pertama di Negeri Sembilan**.',
            zh: '1895年，所有地区与传统领地（luak）正式签署条约合并为森美兰（Negeri Sembilan），由严端端姑慕哈末（Tuanku Muhammad）担任最高统治者，并接受马丁·利斯特（Martin Lister）为森美兰第一任英国参政司！',
          },
        ],
      },
      {
        sectionCode: '3.2(d)',
        headingBm: 'Strategi Desakan British di Pahang',
        headingZh: '英国在彭亨的强行施压策略',
        leadParagraphBm:
          'Berbeza daripada Perak, Selangor dan Sungai Ujong, negeri **Pahang** tidak mengalami kekacauan pelombong Cina atau perang saudara. Pemerintahnya, **Sultan Ahmad Al-Muadzam Shah**, amat berhati-hati menjaga kedaulatan negeri, menyebabkan British terpaksa menggunakan **strategi pujukan dan desakan keras**.',
        leadParagraphZh:
          '与霹雳、雪兰莪和双溪芙蓉截然不同，彭亨国内既无华工械斗，也无王室混战。统治者苏丹阿末（Sultan Ahmad）极具政治警觉，迫使英国只能先靠游说、再借命案强硬施压。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Sultan Ahmad** sangat berhati-hati dalam rundingan dengan pihak Barat dan mencontohi langkah **Sultan Abu Bakar dari Johor** membangunkan ekonomi Pahang bersama pelabur Eropah lain bagi mengelakkan campur tangan British.',
            zh: '苏丹阿末在与西方势力谈判时极为谨慎，并效仿柔佛苏丹阿布峇卡（Sultan Abu Bakar）自行引进欧洲投资者开发彭亨经济，不给英国任何借口干预。',
          },
          {
            tag: 'CONTOH',
            bm: 'British memohon bantuan **Sultan Abu Bakar Johor** untuk memujuk Sultan Ahmad menandatangani perjanjian tahun **1887** yang menempatkan **Hugh Clifford** sebagai **Wakil British** di Pahang, namun kuasa Wakil British sangat terhad (hanya seperti pegawai konsul).',
            zh: '英国不得不请托柔佛苏丹阿布峇卡居中劝说，促使苏丹阿末于1887年签约接受休·克利福（Hugh Clifford）为驻彭亨“英国代表”（Wakil British），但其权限极小，仅相当于领事官员。',
          },
          {
            tag: 'CONTOH',
            bm: 'Pada bulan Februari **1888**, seorang lelaki berbangsa Cina berkerakyatan British bernama **Goh Hui** telah ditemui **ditikam mati berhampiran istana Sultan Ahmad di Pekan**.',
            zh: '转折点发生在1888年2月：一名拥有英国籍的华裔男子吴辉（Goh Hui）被发现死于北根（Pekan）苏丹王宫附近（遭刺身亡）！',
          },
          {
            tag: 'FAKTA',
            bm: 'British menggunakan berita kematian **Goh Hui** sebagai alasan mendakwa Sultan Ahmad gagal mewujudkan keadilan dan ketenteraman awam, lalu mendesak baginda memohon perlindungan British serta menerima **J.P. Rodger** sebagai **Residen British pertama di Pahang** pada Oktober **1888**!',
            zh: '英国立即抓住吴辉（Goh Hui）命案大做文章，指责苏丹阿末无法维护司法公正与英籍臣民安全，强迫苏丹于1888年10月接受罗杰（J.P. Rodger）出任彭亨第一任英国参政司！',
          },
        ],
      },
      {
        sectionCode: '3.2(e)',
        headingBm: 'Pelaksanaan dan Ciri-ciri Sistem Residen',
        headingZh: '参政司制度（Sistem Residen）的实施与特征',
        leadParagraphBm:
          'Melalui peluasan kuasa di keempat-empat negeri tersebut, British melaksanakan **Sistem Residen**, iaitu sistem pemerintahan British secara **tidak langsung** yang mengubah struktur pentadbiran tradisional Kesultanan Melayu secara mendadak.',
        leadParagraphZh:
          '随着势力扩张至上述四州，英国全面推行“参政司制度”（Sistem Residen）——一种表面保留苏丹地位、实则由英官掌权的间接统治制度，彻底颠覆了马来传统政治结构。',
        diagramKey: 'diag_3_2_sistem_residen',
        bullets: [
          {
            tag: 'CONTOH',
            bm: 'Senarai wajib hafal **Residen British Pertama** di empat negeri Melayu: **J.W.W. Birch** di **Perak** (1874), **J.G. Davidson** di **Selangor** (1874), **Martin Lister** di **Negeri Sembilan** (1895; **P.J. Murray** di Sungai Ujong 1874), dan **J.P. Rodger** di **Pahang** (1888).',
            zh: '必背四州第一任英国参政司名单：霹雳——毕治（J.W.W. Birch, 1874）；雪兰莪——戴维森（J.G. Davidson, 1874）；森美兰——马丁·利斯特（Martin Lister, 1895；双溪芙蓉1874年为 P.J. Murray）；彭亨——罗杰（J.P. Rodger, 1888）。',
          },
          {
            tag: 'FAKTA',
            bm: 'Ciri utama **Sistem Residen**: Kedudukan **Sultan** dan pembesar negeri dikekalkan pada nama, tetapi **nasihat Residen British mesti diminta dan dipatuhi** dalam semua urusan pentadbiran kecuali **agama Islam dan adat Melayu**.',
            zh: '参政司制度核心特征：苏丹与马来大臣的名义地位虽被保留，但除伊斯兰教与马来习俗外，苏丹在一切行政事务上都必须征询并遵从参政司的劝告。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Kesan pelaksanaan Sistem Residen: **Sultan dan pembesar kehilangan kuasa pentadbiran negeri** (Sultan tidak lagi boleh menggubal undang-undang bebas) serta **hilang hak memungut cukai**, sebaliknya diberikan **gaji / elaun tetap** setiap bulan.',
            zh: '参政司制度的冲击：苏丹与大臣丧失了治国实权（苏丹不能再自主立法），并被剥夺了世代相传的征税权，改由州金库每月发放固定津贴/薪俸（elaun/gaji tetap）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Residen mengambil alih pentadbiran negeri**, memungut cukai melalui Majistret dan Pemungut Hasil, menghapuskan amalan perhambaan, serta menubuhkan **jabatan-jabatan bercorak Barat** seperti Jabatan Cukai, Jabatan Polis, Jabatan Kehakiman, dan Jabatan Tanah dan Ukur.',
            zh: '英国参政司全面接管州政、通过英国推事与税务官征税、废除传统蓄奴制，并设立西式政府部门（税务局、警察局、司法局及土地与测量局）取代传统体制。',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Awas perangkap soalan peperiksaan! Di **Pahang**, **Hugh Clifford (1887)** hanyalah **Wakil British**, manakala **Residen British pertama Pahang** ialah **J.P. Rodger (1888)**! Begitu juga di **Negeri Sembilan**: **P.J. Murray (1874)** ialah Residen **Sungai Ujong**, manakala **Martin Lister (1895)** ialah Residen pertama seluruh **Negeri Sembilan**!',
            zh: '⚠️ 考官头号陷阱！在彭亨，Hugh Clifford（1887）只是权限极小的“英国代表”（Wakil British），彭亨第一任“参政司”（Residen）是 **J.P. Rodger（1888）**！同理在森美兰，P.J. Murray（1874）只是双溪芙蓉参政司，整个森美兰第一任参政司是 **Martin Lister（1895）**！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Jadual Lengkap Strategi Campur Tangan British & Residen Pertama di Perak, Selangor, Negeri Sembilan dan Pahang',
        titleZh: '英国在霹雳、雪兰莪、森美兰与彭亨的干预策略及首任参政司完整对照表',
        headers: [
          { bm: 'Negeri & Pemerintah', zh: '州属与当时统治者' },
          { bm: 'Strategi Utama British', zh: '英国主要策略' },
          { bm: 'Peristiwa / Alasan Campur Tangan & Perjanjian', zh: '干预借口、关键事件与条约' },
          { bm: 'Residen British Pertama', zh: '第一任英国参政司' },
        ],
        rows: [
          [
            {
              bm: '**Perak** (**Raja Abdullah** / Sultan Ismail)',
              zh: '霹雳（拉惹阿都拉 / 苏丹依斯迈）',
            },
            { bm: '**Manipulasi** politik & rundingan perjanjian', zh: '政治操纵与条约谈判' },
            {
              bm: '(1) **Perang Larut (1861–1874)** antara **Ghee Hin** dan **Hai San**; (2) **Perebutan takhta Kesultanan Perak** -> **Perjanjian Pangkor (20 Januari 1874)** di atas kapal **HMS Pluto**.',
              zh: '（1）义兴与海山的拉律战争；（2）霹雳王位轮任纷争 -> 1874年1月20日于 HMS Pluto 签署《邦咯条约》。',
            },
            {
              bm: '**J.W.W. Birch** (1874) *(Penolong Residen di Larut: Kapten Speedy)*',
              zh: '毕治 J.W.W. Birch（1874）（拉律副参政司：Kapten Speedy）',
            },
          ],
          [
            {
              bm: '**Selangor** (**Sultan Abdul Samad**)',
              zh: '雪兰莪（苏丹阿都沙末）',
            },
            { bm: '**Manipulasi** diikuti **Desakan** keselamatan', zh: '先操纵内战，后借海盗事件施压' },
            {
              bm: '**Perang Klang (1867–1874)** (Raja Abdullah/Tengku Kudin lwn Raja Mahadi); diikuti alasan **rompakan kapal dagang di Kuala Langat (1873)** & **serangan rumah api Tanjung Rachado (1874)**.',
              zh: '巴生战争（1867–1874）；苏丹拒收参政司后，英方借1873年瓜拉冷岳劫船案与1874年丹绒拉查多灯塔遇袭案强行施压。',
            },
            {
              bm: '**J.G. Davidson** (1874) *(Penolong Residen: Frank Swettenham)*',
              zh: '戴维森 J.G. Davidson（1874）（副参政司：瑞天咸）',
            },
          ],
          [
            {
              bm: '**Negeri Sembilan** (**Dato\' Kelana** / **Yamtuan Besar Tuanku Muhammad**)',
              zh: '森美兰（拿督克拉那 / 严端端姑慕哈末）',
            },
            { bm: '**Manipulasi** konflik cukai & **Perjanjian** berperingkat', zh: '操纵征税权纠纷与分阶段签约' },
            {
              bm: 'Rebutan hak cukai **Sungai Linggi** antara **Dato\' Kelana** dengan **Dato\' Syahbandar** di **Sungai Ujong (1874)** -> diikuti **Jelebu (1883)**, **Rembau (1887)**, **Seri Menanti (1889)** & penyatuan **Negeri Sembilan (1895)**.',
              zh: '双溪芙蓉两位大臣争夺宁宜河征税权（1874）-> 随后蚕食日叻务（1883）、林茂（1887）、神安池（1889），至1895年合并全森美兰。',
            },
            {
              bm: '**Martin Lister** (Negeri Sembilan, 1895) *(Sungai Ujong 1874: **P.J. Murray**)*',
              zh: '马丁·利斯特 Martin Lister（全森州, 1895）（双溪芙蓉1874：P.J. Murray）',
            },
          ],
          [
            {
              bm: '**Pahang** (**Sultan Ahmad**)',
              zh: '彭亨（苏丹阿末）',
            },
            { bm: '**Desakan** keras atas alasan ketenteraman awam', zh: '借英籍华人命案强硬施压' },
            {
              bm: 'Perjanjian 1887 melantik **Hugh Clifford** (Wakil British); pada Februari **1888**, kematian lelaki Cina berkerakyatan British **Goh Hui** berhampiran istana di **Pekan** dijadikan alasan mendesak Sultan.',
              zh: '1887年先派克利福任英国代表；1888年2月利用英籍华人吴辉（Goh Hui）在北根王宫附近遇刺命案，强逼苏丹接受参政司。',
            },
            {
              bm: '**J.P. Rodger** (Oktober 1888)',
              zh: '罗杰 J.P. Rodger（1888年10月）',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Andrew Clarke',
        roleBm: 'Gabenor Negeri-negeri Selat',
        roleZh: '海峡殖民地总督',
        emoji: '⚓',
        lineBm:
          'Silakan naik ke kapal **HMS Pluto**, Tuan-tuan! Jika **Raja Abdullah** menandatangani **Perjanjian Pangkor** hari ini, British mengiktiraf tuanku sebagai Sultan Perak — asalkan tuanku menerima seorang **Residen British**!',
        lineZh:
          '各位请登上冥王星号军舰（HMS Pluto）！只要拉惹阿都拉今天签下《邦咯条约》，英国立刻承认殿下为霹雳苏丹——条件是殿下必须接受一名英国参政司！',
      },
      {
        speakerBm: 'Sultan Abdul Samad',
        roleBm: 'Sultan Selangor',
        roleZh: '雪兰莪苏丹',
        emoji: '😤',
        lineBm:
          '**Perang Klang** sudah pun ditamatkan oleh menantu beta **Tengku Kudin**, tetapi mengapa British masih mendesak beta menggunakan isu **Kuala Langat** dan rumah api **Tanjung Rachado** untuk menempatkan **J.G. Davidson**?!',
        lineZh:
          '巴生战争明明已经由朕的女婿东姑古丁平息了，为何英国还抓着瓜拉冷岳劫船案和丹绒拉查多灯塔事件不放，非要逼朕接受戴维森（J.G. Davidson）不可？！',
      },
      {
        speakerBm: 'Dato\' Syahbandar Abdullah Tunggal',
        roleBm: 'Pembesar Sungai Ujong',
        roleZh: '双溪芙蓉大臣',
        emoji: '🛡️',
        lineBm:
          'Tindakan **Dato\' Kelana** memanggil tentera British demi hak cukai di **Sungai Linggi** akhirnya membuka pintu kepada **P.J. Murray** dan penjajahan British ke atas seluruh **Negeri Sembilan**!',
        lineZh:
          '拿督克拉那为了争夺宁宜河的征税权而引英军入关，结果让默里（P.J. Murray）坐收渔翁之利，敞开了英国吞并整个森美兰的大门！',
      },
      {
        speakerBm: 'Sultan Ahmad Al-Muadzam Shah',
        roleBm: 'Sultan Pahang',
        roleZh: '彭亨苏丹',
        emoji: '😔',
        lineBm:
          'Beta sudah pun berhati-hati mencontohi Johor dan hanya membenarkan kuasa terhad kepada **Hugh Clifford**, namun kematian seorang warga British bernama **Goh Hui** di Pekan dijadikan senjata British memaksa beta menerima **J.P. Rodger**!',
        lineZh:
          '朕已经处处效仿柔佛谨慎防备，只给休·克利福极有限的代表权，没想到英国竟利用英籍华人吴辉（Goh Hui）在北根遇刺一案大肆威逼，强迫朕接受罗杰（J.P. Rodger）当参政司！',
      },
    ],
    memoryHackBm:
      'Formula Ingat Pantas **3.2**: Susunan Penggiliran Takhta Perak = **"Bongsu Hilir Bendahara Muda Sultan"** (**Raja Kecil Bongsu -> Raja Di Hilir -> Raja Bendahara -> Raja Muda -> Sultan**). Nama **4 Residen Pertama** ikut negeri (**P-S-N-P**) = **"Birch Datang Lawat Rodger"** (**J.W.W. Birch** [Perak], **J.G. Davidson** [Selangor], **Martin Lister** [Negeri Sembilan / *Murray di Sg. Ujong*], **J.P. Rodger** [Pahang])!',
    memoryHackZh:
      '💡 王牌名师神记忆口诀（3.2）：【霹雳王位五级跳】小弟（Kecil Bongsu）-> 下游（Di Hilir）-> 宰相（Bendahara）-> 王储（Raja Muda）-> 苏丹（Sultan）！【四州首任参政司 B-D-L-R】霹雳 **Birch**（毕治）、雪州 **Davidson**（戴维森）、森州 **Lister**（利斯特，小范围双溪芙蓉是 Murray）、彭亨 **Rodger**（罗杰，被吴辉 Goh Hui 命案连累）！',
    subtopicMcqs: [
      {
        id: '3.2-mcq-1',
        spCode: '7.3.2',
        questionBm:
          'Mengikut **Sistem Penggiliran** Kesultanan Perak, apakah susunan jawatan yang betul sebelum seseorang kerabat diraja ditabalkan sebagai **Sultan Perak**?',
        questionZh: '根据霹雳苏丹王朝的“王位轮任制”（Sistem Penggiliran），王室成员继任霹雳苏丹前的正确职位顺序是什么？',
        options: [
          {
            id: 'A',
            textBm: '**Raja Kecil Bongsu -> Raja Di Hilir -> Raja Bendahara -> Raja Muda -> Sultan**',
            textZh: 'Raja Kecil Bongsu -> Raja Di Hilir -> Raja Bendahara -> Raja Muda -> Sultan',
          },
          {
            id: 'B',
            textBm: 'Raja Muda -> Raja Bendahara -> Raja Di Hilir -> Raja Kecil Bongsu -> Sultan',
            textZh: 'Raja Muda -> Raja Bendahara -> Raja Di Hilir -> Raja Kecil Bongsu -> Sultan',
          },
          {
            id: 'C',
            textBm: 'Raja Di Hilir -> Raja Kecil Bongsu -> Raja Muda -> Raja Bendahara -> Sultan',
            textZh: 'Raja Di Hilir -> Raja Kecil Bongsu -> Raja Muda -> Raja Bendahara -> Sultan',
          },
          {
            id: 'D',
            textBm: 'Raja Bendahara -> Raja Kecil Bongsu -> Raja Di Hilir -> Raja Muda -> Sultan',
            textZh: 'Raja Bendahara -> Raja Kecil Bongsu -> Raja Di Hilir -> Raja Muda -> Sultan',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Mengikut Sistem Penggiliran Kesultanan Perak, bakal raja perlu melalui jawatan **Raja Kecil Bongsu**, diikuti **Raja Di Hilir**, **Raja Bendahara**, dan **Raja Muda** sebelum ditabalkan menjadi **Sultan**.',
        explanationZh:
          '正确是 A！口诀“Bongsu -> Hilir -> Bendahara -> Muda -> Sultan”，必须由低至高依序晋升至王储（Raja Muda）方能继任苏丹。',
      },
      {
        id: '3.2-mcq-2',
        spCode: '7.3.2',
        questionBm:
          'Apakah peristiwa yang dijadikan alasan oleh British untuk mendesak **Sultan Abdul Samad** menerima **Residen British** di **Selangor** pada tahun 1874?',
        questionZh: '英国利用哪起事件作为借口，于1874年强行施压雪兰莪苏丹阿都沙末接受英国参政司？',
        options: [
          {
            id: 'A',
            textBm: 'Pembunuhan warga British bernama **Goh Hui** di Pekan',
            textZh: '英籍华人吴辉在北根遇害事件',
          },
          {
            id: 'B',
            textBm: 'Perebutan hak memungut cukai bijih timah di **Sungai Linggi**',
            textZh: '争夺宁宜河锡米征税权事件',
          },
          {
            id: 'C',
            textBm: '**Rompakan kapal dagang di Kuala Langat** dan **serangan rumah api Tanjung Rachado**',
            textZh: '瓜拉冷岳商船遇劫案与丹绒拉查多灯塔遇袭事件',
          },
          {
            id: 'D',
            textBm: 'Pergaduhan kongsi gelap Ghee Hin dan Hai San di **Kelian Pauh**',
            textZh: '义兴与海山私会党在 Kelian Pauh 的械斗',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Apabila Sultan Abdul Samad enggan menerima Residen selepas Perang Klang, British menggunakan alasan **rompakan kapal dagang British di Kuala Langat (1873)** dan **serangan rumah api Tanjung Rachado (1874)** untuk mendesak baginda menerima **J.G. Davidson**.',
        explanationZh:
          '正确是 C！A发生在彭亨，B发生在森美兰双溪芙蓉，D发生在霹雳拉律；唯独瓜拉冷岳劫船与丹绒拉查多灯塔遇袭是英国施压雪兰莪的借口。',
      },
      {
        id: '3.2-mcq-3',
        spCode: '7.3.2',
        questionBm:
          'Mengapakah berlaku pertelingkahan antara **Dato\' Kelana Syed Abdul Rahman** dengan **Dato\' Syahbandar Abdullah Tunggal** di **Sungai Ujong** pada tahun 1874?',
        questionZh: '1874年在双溪芙蓉，拿督克拉那与拿督沙班达为何发生冲突？',
        options: [
          {
            id: 'A',
            textBm: 'Berebut jawatan Yamtuan Besar di Seri Menanti',
            textZh: '争夺神安池最高统治者（严端）职位',
          },
          {
            id: 'B',
            textBm: 'Berebut hak memungut cukai ke atas pedagang bijih timah di **Sungai Linggi**',
            textZh: '争夺对宁宜河（Sungai Linggi）锡米商人的征税权',
          },
          {
            id: 'C',
            textBm: 'Berselisih pendapat tentang pembinaan jalan kereta api ke Melaka',
            textZh: '对修建通往马六甲的铁路意见分歧',
          },
          {
            id: 'D',
            textBm: 'Bersaing mendapatkan konsesi perlombongan emas daripada British',
            textZh: '竞争向英国争取黄金开采特许权',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Kedua-dua pembesar tersebut bertelingkah kerana berebut kawasan sempadan untuk **memungut cukai ke atas pedagang bijih timah** dari Sungai Ujong yang menggunakan **Sungai Linggi** ke pelabuhan Melaka.',
        explanationZh:
          '正确是 B！宁宜河是双溪芙蓉锡米运往马六甲港口的唯一黄金水道，两位大臣为争夺宁宜河征税权而失和，导致 Dato\' Kelana 引英军入关。',
      },
      {
        id: '3.2-mcq-4',
        spCode: '7.3.2',
        questionBm:
          'Pasangan negeri dan **Residen British Pertama** manakah yang dipadankan dengan **betul**?',
        questionZh: '下列哪组“州属”与“第一任英国参政司”的配对是完全正确的？',
        options: [
          {
            id: 'A',
            textBm: '**Pahang** — **Hugh Clifford**',
            textZh: '彭亨 — 休·克利福（Hugh Clifford）',
          },
          {
            id: 'B',
            textBm: '**Perak** — **Frank Swettenham**',
            textZh: '霹雳 — 瑞天咸（Frank Swettenham）',
          },
          {
            id: 'C',
            textBm: '**Selangor** — **Kapten Speedy**',
            textZh: '雪兰莪 — 史毕迪上尉（Kapten Speedy）',
          },
          {
            id: 'D',
            textBm: '**Pahang** — **J.P. Rodger**',
            textZh: '彭亨 — 罗杰（J.P. Rodger）',
          },
        ],
        correctId: 'D',
        explanationBm:
          '**J.P. Rodger** ialah **Residen British pertama di Pahang** (1888), manakala Hugh Clifford hanyalah Wakil British (1887). Residen pertama Perak ialah **J.W.W. Birch** dan Selangor ialah **J.G. Davidson**.',
        explanationZh:
          '正确是 D！这是经典必考陷阱题：Hugh Clifford 只是1887年驻彭亨的“英国代表”（Wakil British），彭亨第一任参政司（Residen）是1888年上任的 J.P. Rodger！',
      },
      {
        id: '3.2-mcq-5',
        spCode: 'K7.3.6',
        questionBm:
          'Apakah kesan utama pelaksanaan **Sistem Residen** terhadap kuasa **Sultan** dan **pembesar Melayu**?',
        questionZh: '参政司制度（Sistem Residen）的推行对苏丹与马来大臣的权力造成了什么主要影响？',
        options: [
          {
            id: 'A',
            textBm: 'Sultan dan pembesar berkuasa penuh menggubal undang-undang percukaian Barat',
            textZh: '苏丹与大臣拥有全权制定西式税法',
          },
          {
            id: 'B',
            textBm: 'Sultan kehilangan kedaulatan ke atas hal ehwal agama Islam dan adat Melayu',
            textZh: '苏丹丧失管理伊斯兰教与马来习俗的权力',
          },
          {
            id: 'C',
            textBm: 'Sultan dan pembesar **kehilangan kuasa pentadbiran serta hak memungut cukai**',
            textZh: '苏丹与大臣丧失行政实权以及征税权',
          },
          {
            id: 'D',
            textBm: 'Pembesar Melayu dilantik mengetuai semua jabatan polis dan kehakiman British',
            textZh: '马来大臣受委领导所有英国警察与司法部门',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Di bawah **Sistem Residen**, Residen mengambil alih pentadbiran negeri dan pungutan cukai; **Sultan serta pembesar kehilangan kuasa pentadbiran dan hak memungut cukai**, lalu digantikan dengan bayaran elaun atau gaji tetap.',
        explanationZh:
          '正确是 C！参政司接管一切行政与税收（仅保留伊斯兰教与马来习俗归苏丹），导致苏丹和马来大臣失去治国实权与传统征税权。',
      },
    ],
    strukturQuestion: {
      id: '3.2-struktur-1',
      spCode: '7.3.2',
      stimulusBm:
        'Pada **20 Januari 1874**, Gabenor Negeri-negeri Selat **Andrew Clarke** telah memeterai **Perjanjian Pangkor** di atas kapal **HMS Pluto** yang menjadi titik tolak pengenalan **Sistem Residen** di Perak, Selangor, Negeri Sembilan, dan Pahang.',
      stimulusZh:
        '1874年1月20日，海峡殖民地总督安德鲁·克拉克在 HMS Pluto 军舰上签署《邦咯条约》，成为英国在霹雳、雪兰莪、森美兰与彭亨推行“参政司制度”的转折点。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Nyatakan **dua** faktor kekacauan di **Perak** yang dimanipulasikan oleh British sehingga termeterainya **Perjanjian Pangkor 1874** serta namakan **Residen British pertama** di Perak. [3 markah]',
          questionZh: '写出被英国操纵以促成1874年《邦咯条约》的两个霹雳内部动乱因素，并写出霹雳第一任英国参政司的名字。[3分]',
          expectedKeywordsBm: [
            'Perang Larut',
            'Ghee Hin',
            'Hai San',
            'perebutan takhta Kesultanan Perak',
            'J.W.W. Birch',
          ],
          modelAnswerBm:
            'Dua faktor kekacauan di Perak ialah **Perang Larut (1861–1874)** antara kongsi gelap **Ghee Hin dan Hai San**, serta **perebutan takhta Kesultanan Perak** antara Raja Abdullah, Raja Ismail, dan Raja Yusuf. Residen British pertama di Perak ialah **J.W.W. Birch**.',
          modelAnswerZh:
            '两个动乱因素是：（1）义兴与海山私会党之间的拉律战争（Perang Larut）；（2）霹雳苏丹王位争夺战（perebutan takhta Kesultanan Perak）。霹雳第一任英国参政司是毕治（J.W.W. Birch）。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Jelaskan syarat utama berkaitan kuasa **Residen British** dalam **Perjanjian Pangkor 1874** dan kesannya terhadap pentadbiran negeri Melayu. [3 markah]',
          questionZh: '说明1874年《邦咯条约》中有关英国参政司权力的主要条款，及其对马来州属行政的影响。[3分]',
          expectedKeywordsBm: [
            'nasihat mesti diminta dan dipatuhi',
            'agama Islam dan adat Melayu',
            'kehilangan kuasa',
            'memungut cukai',
            'jabatan bercorak Barat',
          ],
          modelAnswerBm:
            'Syarat utamanya menetapkan bahawa Sultan hendaklah menerima seorang **Residen British** yang **nasihatnya mesti diminta dan dipatuhi** dalam semua urusan pentadbiran dan pungutan cukai **kecuali perkara berkaitan agama Islam dan adat Melayu**. Kesannya, **Sultan dan pembesar kehilangan kuasa pentadbiran serta hak memungut cukai**, manakala Residen mengambil alih pentadbiran dan menubuhkan **jabatan-jabatan bercorak Barat**.',
          modelAnswerZh:
            '核心条款规定：苏丹必须接受一名英国参政司，除伊斯兰教与马来习俗外，一切行政与税收事务均须征询并遵从其劝告。其结果导致苏丹与大臣丧失行政实权和征税权，由参政司接管州政并设立西式政府部门。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Mengapakah perpaduan dalam kalangan pemimpin dan rakyat amat penting bagi mengelakkan campur tangan kuasa asing di negara kita? [4 markah]',
          questionZh: '为什么领导层与人民之间的团结一致对于防止外国势力干预我国至关重要？[4分]',
          expectedKeywordsBm: [
            'mengelakkan perpecahan dalaman',
            'ruang manipulasi kuasa asing',
            'kestabilan politik',
            'bermuafakat',
            'mempertahankan kedaulatan negara',
          ],
          modelAnswerBm:
            'Perpaduan amat penting bagi **mengelakkan perpecahan dan perebutan kuasa dalaman** yang boleh membuka **ruang manipulasi kepada kuasa asing** untuk campur tangan. Sebagaimana iktibar Perang Klang dan konflik di Perak serta Sungai Ujong, pertelingkahan pemimpin tempatan telah memudahkan British menguasai pentadbiran negeri. Oleh itu, pemimpin dan rakyat hendaklah sentiasa **bermuafakat menyelesaikan masalah melalui rundingan** demi menjamin **kestabilan politik** dan **mempertahankan kedaulatan negara**.',
          modelAnswerZh:
            '【Fakta】团结至关重要，因为能避免内部纷争与夺权，【Huraian】不让外国势力有任何趁虚而入操纵局势的机会。【Contoh】正如巴生战争及霹雳、双溪芙蓉的权力冲突所示，本土领袖不和让英国轻易夺取了州政权。【Inferens】因此，领袖与人民必须协商共进，以维护政治稳定并捍卫国家主权。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 3.3: PEMBENTUKAN NEGERI-NEGERI MELAYU BERSEKUTU (NNMB)
  // ============================================================================
  {
    subtopicCode: '3.3',
    babNumber: 3,
    babTitleBm: 'Pentadbiran Negeri-negeri Melayu Bersekutu',
    babTitleZh: '马来联邦的行政管理',
    skCode: '7.3',
    spCodes: ['7.3.3', 'K7.3.7'],
    titleBm: 'Pembentukan Negeri-negeri Melayu Bersekutu (NNMB)',
    titleZh: '马来联邦（NNMB）的成立',
    heroImages: [
      {
        imageKey: 'bab3_durbar_kuala_kangsar',
        captionBm:
          'Penyatuan empat buah negeri Melayu (**Perak, Selangor, Negeri Sembilan, dan Pahang**) di bawah **Perjanjian Persekutuan 1895** yang membentuk **Negeri-negeri Melayu Bersekutu (NNMB)** berkuat kuasa **1 Julai 1896**.',
        captionZh:
          '透过1895年《联邦条约》，霹雳、雪兰莪、森美兰与彭亨四州合并，并于1896年7月1日正式成立“马来联邦”（NNMB）。',
        hotspots: [
          {
            x: 24,
            y: 35,
            termBm: 'Perjanjian Persekutuan 1895',
            meaningZh: '1895年《联邦条约》（1896年7月1日生效）',
            detailBm:
              'Ditandatangani oleh Raja-raja Melayu empat buah negeri untuk menggabungkan **Perak, Selangor, Negeri Sembilan, dan Pahang** dalam **NNMB**.',
            detailZh:
              '由四州马来统治者签署，将霹雳、雪兰莪、森美兰与彭亨统一纳入马来联邦（又称1896年联邦）。',
          },
          {
            x: 52,
            y: 30,
            termBm: 'Frank Swettenham',
            meaningZh: '瑞天咸（首任总参政司 Residen Jeneral）',
            detailBm:
              'Tokoh yang merangka idea persekutuan dan dilantik sebagai **Residen Jeneral pertama NNMB** yang berpusat di **Kuala Lumpur**.',
            detailZh:
              '提出联邦构想的幕后设计师，获委为马来联邦第一任总参政司（Residen Jeneral），驻节吉隆坡。',
          },
          {
            x: 78,
            y: 46,
            termBm: 'Kuala Lumpur Pusat Pentadbiran',
            meaningZh: '吉隆坡成为联邦行政中心',
            detailBm:
              'Dipilih sebagai ibu negeri dan **pusat pentadbiran NNMB** kerana kedudukannya yang strategik di tengah-tengah negeri gabungan.',
            detailZh:
              '因地理位置居中且锡矿经济发达，吉隆坡被选定为马来联邦的总行政中心。',
          },
          {
            x: 46,
            y: 74,
            termBm: 'Bendera Empat Warna NNMB',
            meaningZh: '白、红、黄、黑四色联邦旗帜',
            detailBm:
              'Melambangkan gabungan empat negeri Melayu melalui warna **putih, merah, kuning, dan hitam** serta jata empat ekor harimau.',
            detailZh:
              '由白、红、黄、黑四色条纹及四只猛虎州徽组成，代表霹雳、雪兰莪、森美兰与彭亨四州合一。',
          },
        ],
      },
      {
        imageKey: 'bab3_pangkor_tin',
        captionBm:
          'Kekayaan hasil bijih timah di **Perak** dan **Selangor** digunakan dalam sistem persekutuan untuk membantu mengatasi **masalah kewangan Pahang**.',
        captionZh:
          '霹雳与雪兰莪丰厚的锡矿财政盈余，在联邦体制下被用来填补彭亨州的沉重财政赤字。',
      },
    ],
    sections: [
      {
        sectionCode: '3.3(a)',
        headingBm: 'Ciri-ciri Negeri-negeri Melayu Bersekutu (NNMB) 1896',
        headingZh: '1896年马来联邦（NNMB）的核心特征',
        leadParagraphBm:
          'Selepas pelaksanaan Sistem Residen selama hampir 20 tahun, **Frank Swettenham** mencadangkan penyatuan empat buah negeri Melayu beresiden. Melalui **Perjanjian Persekutuan 1895** yang berkuat kuasa pada **1 Julai 1896**, lahirlah **Negeri-negeri Melayu Bersekutu (NNMB)** atau dikenali juga sebagai **Persekutuan 1896**.',
        leadParagraphZh:
          '在推行参政司制度近20年后，瑞天咸（Frank Swettenham）提议将四个设有参政司的马来州属合并。透过1895年签署、1896年7月1日正式生效的《联邦条约》，马来联邦（NNMB，又称1896年联邦）正式诞生。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Gabungan Empat Buah Negeri**: **NNMB** menggabungkan **Perak**, **Selangor**, **Negeri Sembilan**, dan **Pahang** di bawah satu pentadbiran persekutuan.',
            zh: '四州联合体：马来联邦（NNMB）将霹雳、雪兰莪、森美兰与彭亨四州合并为一个中央集权的联邦行政单位。',
          },
          {
            tag: 'CONTOH',
            bm: '**Ketua Pentadbiran & Pusat Pentadbiran**: Pentadbiran NNMB diketuai oleh seorang **Residen Jeneral** yang berpusat di **Kuala Lumpur**, dan **Frank Swettenham** dilantik sebagai **Residen Jeneral pertama** (1896–1901).',
            zh: '最高行政首长与首都：联邦行政由一名“总参政司”（Residen Jeneral）统领，行政中心设于吉隆坡（Kuala Lumpur），瑞天咸（Frank Swettenham）出任首任总参政司。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Raja-raja Melayu bersetuju menerima seorang pegawai British bergelar **Residen Jeneral** dan mematuhi nasihatnya dalam semua perkara pentadbiran **kecuali yang berkaitan dengan agama Islam dan adat Melayu**.',
            zh: '马来统治者同意接受英国委派的总参政司，除伊斯兰教与马来习俗事务外，一切联邦与州属行政均须听从其劝告。',
          },
          {
            tag: 'FAKTA',
            bm: 'Raja-raja Melayu juga bersetuju **membantu negeri-negeri Melayu yang memerlukan bantuan** (khususnya bantuan kewangan dan pentadbiran) mengikut nasihat kerajaan British.',
            zh: '马来统治者同时同意按照英国政府的建议，向需要援助的联邦成员州（尤其是财政拮据的彭亨）提供财政与行政支援。',
          },
          {
            tag: 'CONTOH',
            bm: '**Lambang Bendera dan Jata NNMB**: Mempunyai identiti bendera berjalur **empat warna** iaitu **putih, merah, kuning, dan hitam** yang mewakili warna bendera keempat-empat negeri gabungan (Perak: putih-kuning-hitam; Selangor: merah-kuning; Negeri Sembilan: merah-hitam-kuning; Pahang: putih-hitam).',
            zh: '马来联邦旗帜与徽章：联邦旗由“白、红、黄、黑”四色横条组成，完美融合四州州旗颜色（霹雳：白黄黑；雪兰莪：红黄；森美兰：红黑黄；彭亨：白黑），徽章则饰有四只老虎。',
          },
        ],
      },
      {
        sectionCode: '3.3(b)',
        headingBm: 'Faktor-faktor Pembentukan Negeri-negeri Melayu Bersekutu (NNMB)',
        headingZh: '成立马来联邦（NNMB）的四大原因',
        leadParagraphBm:
          'British menubuhkan **Negeri-negeri Melayu Bersekutu (NNMB)** pada tahun 1896 bagi menyelesaikan kepincangan Sistem Residen serta mengukuhkan penguasaan politik, ekonomi, dan pertahanan British di Tanah Melayu.',
        leadParagraphZh:
          '英国于1896年成立马来联邦，旨在彻底解决参政司制度的弊端，并进一步巩固英国在马来亚的政治控制、经济利益与国防安全。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**1. Mengatasi Kelemahan Sistem Residen**: Para Residen tidak diberikan **garis panduan yang jelas** untuk melaksanakan tugas menyebabkan **Residen menjadi terlalu berkuasa**, manakala **Gabenor Negeri-negeri Selat** di Singapura gagal mengawal kuasa Residen kerana jarak yang jauh.',
            zh: '原因一：克服参政司制度的弊端——各州参政司缺乏明确的施政指南，导致参政司大权独揽、各自为政；远在新加坡的海峡殖民地总督亦鞭长莫及，无法有效监督。',
          },
          {
            tag: 'FAKTA',
            bm: '**2. Menyeragamkan Pentadbiran**: Pentadbiran di Perak, Selangor, Negeri Sembilan, dan Pahang sebelum ini **tidak seragam** kerana mempunyai undang-undang sendiri; penyatuan membolehkan penyeragaman aspek **perundangan, sistem percukaian, keadilan, dan undang-undang tanah** serta memudahkan pembinaan jalan raya dan kereta api antara negeri.',
            zh: '原因二：统一行政管理——此前四州各自立法、制度不一；成立联邦可统一司法、税制与土地法，节省行政开销，并加速跨州公路与铁路网建设以促进经济剥削。',
          },
          {
            tag: 'CONTOH',
            bm: '**3. Menangani Masalah Kewangan Pahang**: Negeri **Pahang** menanggung beban **hutang yang besar** akibat kos pentadbiran tinggi dan kebangkitan penentangan rakyat; penggabungan dengan negeri kaya bijih timah iaitu **Perak dan Selangor** dapat menyalurkan sumber kewangan untuk mengurangkan beban kewangan Pahang.',
            zh: '原因三：解决彭亨州的财政危机——彭亨因开发成本高昂及镇压人民起义而债台高筑；与富产锡米的霹雳和雪兰莪合并后，可用富州的盈余填补彭亨的巨额赤字。',
          },
          {
            tag: 'FAKTA',
            bm: '**4. Menjamin Keselamatan Negeri**: Penggabungan membolehkan NNMB mempunyai **pasukan keselamatan dan pertahanan bersama yang kukuh** (seperti *Malay States Guides*) bagi menjaga keamanan dalam negeri tanpa mengharapkan bantuan tentera dari luar.',
            zh: '原因四：保障各州防务安全——合并后马来联邦得以组建一支统一、强大的联合保安部队（如马来州属向导军），自行维护内部治安而无需向境外（如新加坡或印度）借兵。',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Ingat tarikh tepat dalam peperiksaan: **Perjanjian Persekutuan ditandatangani pada tahun 1895**, manakala penubuhan **NNMB berkuat kuasa secara rasmi pada 1 Julai 1896**! Jangan terkeliru antara dua tahun ini!',
            zh: '⚠️ 考官年份陷阱：《联邦条约》签署于 **1895年**（Perjanjian Persekutuan 1895），而马来联邦正式生效成立于 **1896年7月1日**（NNMB 1896），做选择题时务必看清问的是“条约年份”还是“生效年份”！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Faktor Pembentukan dan Ciri-ciri Utama Negeri-negeri Melayu Bersekutu (NNMB) 1896',
        titleZh: '1896年马来联邦（NNMB）成立原因与主要特征总览表',
        headers: [
          { bm: 'Kategori', zh: '类别' },
          { bm: 'Aspek Utama', zh: '核心要点' },
          { bm: 'Huraian Lengkap Buku Teks KSSM', zh: 'KSSM 课本完整解析' },
        ],
        rows: [
          [
            { bm: '**Ciri-ciri NNMB**', zh: '联邦基本特征' },
            { bm: '**Asas Penubuhan & Negeri Gabungan**', zh: '成立依据与成员州' },
            {
              bm: 'Ditubuhkan melalui **Perjanjian Persekutuan 1895** (berkuat kuasa **1 Julai 1896**), menggabungkan **Perak, Selangor, Negeri Sembilan, dan Pahang**.',
              zh: '依据1895年《联邦条约》（1896年7月1日生效）成立，合并霹雳、雪兰莪、森美兰与彭亨四州。',
            },
          ],
          [
            { bm: '**Ciri-ciri NNMB**', zh: '联邦基本特征' },
            { bm: '**Ketua, Ibu Negeri & Identiti**', zh: '首长、首都与标志' },
            {
              bm: 'Diketuai oleh **Residen Jeneral** (**Frank Swettenham** yang pertama), berpusat di **Kuala Lumpur**, berbendera **4 warna (putih, merah, kuning, hitam)**.',
              zh: '由总参政司领导（首任为瑞天咸 Frank Swettenham），首都设在吉隆坡，采用白、红、黄、黑四色旗帜。',
            },
          ],
          [
            { bm: '**Faktor 1**', zh: '成立原因（一）' },
            { bm: '**Mengatasi Kelemahan Sistem Residen**', zh: '克服参政司制度弱点' },
            {
              bm: 'Tiada panduan tugas jelas, **Residen terlalu berkuasa**, dan Gabenor NNS di Singapura gagal mengawal tindak-tanduk Residen.',
              zh: '缺乏明确施政指南导致参政司权力过大，且新加坡的海峡殖民地总督无力远距离监管。',
            },
          ],
          [
            { bm: '**Faktor 2**', zh: '成立原因（二）' },
            { bm: '**Menyeragamkan Pentadbiran**', zh: '统一四州行政与法律' },
            {
              bm: 'Menyeragamkan **undang-undang tanah, keadilan, dan percukaian** supaya kos jimat serta memudahkan jaringan jalan raya dan kereta api.',
              zh: '统一土地法、司法与税务制度以节省开支，并加速跨州铁路与公路网建设。',
            },
          ],
          [
            { bm: '**Faktor 3**', zh: '成立原因（三）' },
            { bm: '**Menangani Masalah Kewangan Pahang**', zh: '解决彭亨财政赤字危机' },
            {
              bm: 'Menggunakan lebihan hasil negeri kaya (**Perak dan Selangor**) untuk membantu **Pahang** melangsaikan hutang dan defisit pentadbiran.',
              zh: '调动富裕产锡州（霹雳与雪兰莪）的财政盈余，协助负债累累的彭亨度过财政难关。',
            },
          ],
          [
            { bm: '**Faktor 4**', zh: '成立原因（四）' },
            { bm: '**Menjamin Keselamatan Negeri**', zh: '保障联邦防务安全' },
            {
              bm: 'Menubuhkan **pasukan keselamatan bersama** yang kukuh menjaga keamanan dalam negeri tanpa mengharapkan tentera luar.',
              zh: '建立统一的联邦联合保安部队守护内部治安，无需再依赖外部驻军支援。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Frank Swettenham',
        roleBm: 'Residen Jeneral Pertama NNMB',
        roleZh: '马来联邦首任总参政司',
        emoji: '🎩',
        lineBm:
          'Tuanku sekalian, di bawah **Perjanjian Persekutuan 1895**, kita satukan **Perak, Selangor, Negeri Sembilan, dan Pahang** berpusat di **Kuala Lumpur** supaya undang-undang dan jalan kereta api menjadi seragam!',
        lineZh:
          '各位殿下，透过1895年《联邦条约》，我们将霹雳、雪兰莪、森美兰与彭亨合并，并以吉隆坡为中心，这样法律与铁路建设就能全面统一了！',
      },
      {
        speakerBm: 'J.P. Rodger',
        roleBm: 'Residen British di Pahang',
        roleZh: '驻彭亨英国参政司',
        emoji: '💸',
        lineBm:
          'Lega rasanya! Perbendaharaan **Pahang** menanggung hutang yang sangat besar. Dengan tertubuhnya **NNMB**, kekayaan bijih timah **Perak** dan **Selangor** dapat membantu kewangan Pahang!',
        lineZh:
          '太松一口气了！彭亨州库负债惨重，如今成立马来联邦，霹雳和雪兰莪丰厚的锡矿税收终于可以拿来拯救彭亨的财政了！',
      },
      {
        speakerBm: 'Gabenor Negeri-negeri Selat',
        roleBm: 'Pesuruhjaya Tinggi NNMB di Singapura',
        roleZh: '海峡殖民地总督兼最高钦差大臣',
        emoji: '🏛️',
        lineBm:
          'Selama ini para Residen bertindak sesuka hati tanpa garis panduan jelas! Dengan adanya **Residen Jeneral** dan pasukan keselamatan bersama, kawalan British menjadi jauh lebih kemas.',
        lineZh:
          '过去各州参政司没有明确指南、各自为政！如今设立总参政司并组建联合保安部队，英国的统治就严密多了。',
      },
      {
        speakerBm: 'Sultan Idris Murshidul Adzam Shah',
        roleBm: 'Sultan Perak',
        roleZh: '霹雳苏丹依德利斯',
        emoji: '👑',
        lineBm:
          'Beta menandatangani perjanjian ini kerana menyangka kuasa negeri dihormati, namun mengapakah selepas **1 Julai 1896** semua keputusan berpusat di tangan **Residen Jeneral** di Kuala Lumpur?!',
        lineZh:
          '朕当初签署条约时以为各州自主权会受尊重，为何1896年7月1日生效后，所有大权竟全都集中在吉隆坡总参政司一人手里？！',
      },
    ],
    memoryHackBm:
      'Formula Ingat Pantas **3.3**: **4 Faktor NNMB** = **"K-S-P-K"** (**Kelemahan** Sistem Residen, **Seragamkan** pentadbiran, **Pahang** masalah kewangan, **Keselamatan** negeri). **4 Warna Bendera NNMB** = **"Pu-Me-Ku-Hi"** (**Putih, Merah, Kuning, Hitam**)!',
    memoryHackZh:
      '💡 王牌名师神记忆口诀（3.3）：【成立马来联邦四大原因 K-S-P-K】① 参政司太失控（**K**elemahan Sistem Residen）、② 统一法律交通（**S**eragamkan pentadbiran）、③ 救济彭亨穷弟（**P**ahang kewangan，靠霹雳雪州贴钱）、④ 自建保安军队（**K**eselamatan）！首任总参政司 = **Frank Swettenham**，首都 = **Kuala Lumpur**！',
    subtopicMcqs: [
      {
        id: '3.3-mcq-1',
        spCode: '7.3.3',
        questionBm:
          'Siapakah pegawai British yang dilantik sebagai **Residen Jeneral pertama** bagi mengetuai pentadbiran **Negeri-negeri Melayu Bersekutu (NNMB)** di **Kuala Lumpur** pada tahun 1896?',
        questionZh: '1896年，哪位英国官员受委为第一任总参政司（Residen Jeneral），驻吉隆坡统领马来联邦（NNMB）？',
        options: [
          {
            id: 'A',
            textBm: '**Andrew Clarke**',
            textZh: '安德鲁·克拉克（Andrew Clarke）',
          },
          {
            id: 'B',
            textBm: '**Frank Swettenham**',
            textZh: '瑞天咸（Frank Swettenham）',
          },
          {
            id: 'C',
            textBm: '**John Anderson**',
            textZh: '约翰·安德森（John Anderson）',
          },
          {
            id: 'D',
            textBm: '**J.W.W. Birch**',
            textZh: '毕治（J.W.W. Birch）',
          },
        ],
        correctId: 'B',
        explanationBm:
          '**Frank Swettenham** ialah pencetus idea penyatuan persekutuan dan dilantik sebagai **Residen Jeneral pertama NNMB** apabila Perjanjian Persekutuan 1895 berkuat kuasa pada 1 Julai 1896.',
        explanationZh:
          '正确是 B！瑞天咸（Frank Swettenham）于1896年出任马来联邦第一任总参政司（Residen Jeneral），总部设于吉隆坡。',
      },
      {
        id: '3.3-mcq-2',
        spCode: '7.3.3',
        questionBm:
          'Bagaimanakah pembentukan **Negeri-negeri Melayu Bersekutu (NNMB)** pada tahun 1896 dapat membantu menyelesaikan masalah kewangan negeri **Pahang**?',
        questionZh: '1896年马来联邦（NNMB）的成立如何协助解决彭亨州的财政危机？',
        options: [
          {
            id: 'A',
            textBm: 'Menjual wilayah Pahang kepada Syarikat Hindia Timur Inggeris',
            textZh: '将彭亨领土出售给英国东印度公司',
          },
          {
            id: 'B',
            textBm: 'Meminjam wang daripada kerajaan Siam dengan cagaran hasil emas',
            textZh: '以黄金收益作抵押向暹罗政府借贷',
          },
          {
            id: 'C',
            textBm: 'Menggabungkan negeri kaya iaitu **Perak dan Selangor** bagi membantu mengurangkan beban kewangan Pahang',
            textZh: '将富裕的霹雳与雪兰莪合并进来，调动盈余协助减轻彭亨的财政负担',
          },
          {
            id: 'D',
            textBm: 'Mewajibkan semua pembesar Pahang membayar cukai kepala kepada Singapura',
            textZh: '强制所有彭亨大臣向新加坡缴纳人头税',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Melalui pembentukan **NNMB**, sumber kewangan daripada negeri **Perak dan Selangor** yang kaya dengan bijih timah dapat digembleng untuk membantu mengatasi masalah hutang dan defisit kewangan **Pahang**.',
        explanationZh:
          '正确是 C！霹雳与雪兰莪因锡矿业极其富裕，并入联邦后得以补贴负债沉重的彭亨州。',
      },
      {
        id: '3.3-mcq-3',
        spCode: '7.3.3',
        questionBm:
          'Apakah kelemahan utama **Sistem Residen** yang mendorong British menubuhkan **Negeri-negeri Melayu Bersekutu (NNMB)**?',
        questionZh: '参政司制度（Sistem Residen）出现了什么主要弊端，促使英国决定成立马来联邦（NNMB）？',
        options: [
          {
            id: 'A',
            textBm: '**Residen tidak diberikan garis panduan jelas** sehingga menjadi terlalu berkuasa dan pentadbiran tidak seragam',
            textZh: '参政司缺乏明确施政指南，导致权力过大且四州行政各自为政、互不统一',
          },
          {
            id: 'B',
            textBm: 'Residen British menyerahkan semula semua kuasa kutipan cukai kepada pembesar Melayu',
            textZh: '英国参政司把所有征税权归还给马来大臣',
          },
          {
            id: 'C',
            textBm: 'Bilangan Residen British di setiap daerah melebihi jumlah penduduk tempatan',
            textZh: '各县英国参政司人数超过当地居民人口',
          },
          {
            id: 'D',
            textBm: 'Gabenor Negeri-negeri Selat enggan bersemayam di Singapura',
            textZh: '海峡殖民地总督拒绝驻守新加坡',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Para Residen tidak diberikan panduan tugas yang jelas menyebabkan mereka menjadi **terlalu berkuasa**, sukar dikawal oleh Gabenor NNS di Singapura, dan pentadbiran antara empat negeri menjadi **tidak seragam**.',
        explanationZh:
          '正确是 A！参政司各自为政、权力膨胀且四州法律税制不统一，是英国决定建立联邦集权体制的首要原因。',
      },
      {
        id: '3.3-mcq-4',
        spCode: '7.3.3',
        questionBm:
          'Bendera rasmi **Negeri-negeri Melayu Bersekutu (NNMB)** menampilkan empat jalur warna yang melambangkan gabungan Perak, Selangor, Negeri Sembilan, dan Pahang, iaitu...',
        questionZh: '马来联邦（NNMB）的官方旗帜由代表霹雳、雪兰莪、森美兰与彭亨四州的哪四种颜色组成？',
        options: [
          {
            id: 'A',
            textBm: 'Biru, Putih, Merah, dan Kuning',
            textZh: '蓝、白、红、黄',
          },
          {
            id: 'B',
            textBm: '**Putih, Merah, Kuning, dan Hitam**',
            textZh: '白、红、黄、黑',
          },
          {
            id: 'C',
            textBm: 'Hijau, Kuning, Hitam, dan Putih',
            textZh: '绿、黄、黑、白',
          },
          {
            id: 'D',
            textBm: 'Merah, Biru, Hitam, dan Hijau',
            textZh: '红、蓝、黑、绿',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Empat warna pada bendera dan jata NNMB ialah **putih, merah, kuning, dan hitam** (tiada warna biru atau hijau kerana keempat-empat bendera negeri Perak, Selangor, Negeri Sembilan, dan Pahang hanya menggunakan kombinasi empat warna tersebut).',
        explanationZh:
          '正确是 B！霹雳（白黄黑）、雪兰莪（红黄）、森美兰（红黑黄）、彭亨（白黑）四州旗帜完全不含蓝色或绿色，仅由“白、红、黄、黑”四色组成！',
      },
      {
        id: '3.3-mcq-5',
        spCode: 'K7.3.7',
        questionBm:
          'Apakah kepentingan faktor **keselamatan** dalam pembentukan **Negeri-negeri Melayu Bersekutu (NNMB)** pada tahun 1896?',
        questionZh: '在1896年马来联邦（NNMB）的成立过程中，“防务安全”因素具有什么重要意义？',
        options: [
          {
            id: 'A',
            textBm: 'Membolehkan NNMB menakluki wilayah Siam di utara',
            textZh: '使马来联邦得以北上征服暹罗领土',
          },
          {
            id: 'B',
            textBm: 'Membolehkan NNMB mempunyai **pasukan keselamatan sendiri** menjaga keamanan tanpa mengharapkan tentera luar',
            textZh: '使马来联邦拥有自己的联合保安部队维护内部治安，无需依赖外部军队支援',
          },
          {
            id: 'C',
            textBm: 'Menyerahkan pertahanan laut Tanah Melayu kepada tentera Perancis',
            textZh: '将马来亚海防交给法国军队负责',
          },
          {
            id: 'D',
            textBm: 'Membubarkan semua balai polis di Perak dan Selangor',
            textZh: '解散霹雳与雪兰莪境内的所有警察局',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Penggabungan empat negeri membolehkan NNMB menubuhkan **pasukan keselamatan bersama** yang kuat untuk menjaga keamanan dalam negeri tanpa perlu mengharapkan bantuan tentera dari luar seperti Singapura atau India.',
        explanationZh:
          '正确是 B！四州合并后可集中财力组建强大的联邦保安部队（如 Malay States Guides），独立维护内部治安而无需向外借兵。',
      },
    ],
    strukturQuestion: {
      id: '3.3-struktur-1',
      spCode: '7.3.3',
      stimulusBm:
        'Melalui **Perjanjian Persekutuan 1895**, empat buah negeri Melayu telah disatukan membentuk **Negeri-negeri Melayu Bersekutu (NNMB)** yang berkuat kuasa pada **1 Julai 1896**.',
      stimulusZh:
        '透过1895年《联邦条约》，四个马来州属合并成立“马来联邦”（NNMB），并于1896年7月1日正式生效。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Senaraikan **empat** buah negeri yang membentuk **NNMB**, namakan **pusat pentadbiran** NNMB, serta nyatakan **Residen Jeneral pertama** NNMB. [3 markah]',
          questionZh: '列出组成马来联邦的四个州属、马来联邦的行政中心，以及第一任总参政司的名字。[3分]',
          expectedKeywordsBm: [
            'Perak',
            'Selangor',
            'Negeri Sembilan',
            'Pahang',
            'Kuala Lumpur',
            'Frank Swettenham',
          ],
          modelAnswerBm:
            'Empat buah negeri yang membentuk NNMB ialah **Perak, Selangor, Negeri Sembilan, dan Pahang**. Pusat pentadbiran NNMB terletak di **Kuala Lumpur**, manakala Residen Jeneral pertama ialah **Frank Swettenham**.',
          modelAnswerZh:
            '组成马来联邦的四州是霹雳、雪兰莪、森美兰与彭亨；行政中心位于吉隆坡（Kuala Lumpur）；第一任总参政司是瑞天咸（Frank Swettenham）。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Terangkan **tiga** faktor yang mendorong British menubuhkan **Negeri-negeri Melayu Bersekutu (NNMB)** pada tahun 1896. [3 markah]',
          questionZh: '阐述促使英国于1896年成立马来联邦（NNMB）的三个原因。[3分]',
          expectedKeywordsBm: [
            'mengatasi kelemahan Sistem Residen',
            'menyeragamkan pentadbiran',
            'menangani masalah kewangan Pahang',
            'menjamin keselamatan negeri',
          ],
          modelAnswerBm:
            'Pertama, untuk **mengatasi kelemahan Sistem Residen** kerana Residen tiada garis panduan jelas dan terlalu berkuasa. Kedua, untuk **menyeragamkan pentadbiran** dari segi undang-undang tanah, keadilan, dan percukaian serta memajukan pengangkutan. Ketiga, untuk **menangani masalah kewangan Pahang** dengan bantuan negeri kaya Perak dan Selangor, selain **menjamin keselamatan negeri** melalui pasukan keselamatan bersama.',
          modelAnswerZh:
            '第一，克服参政司制度的弱点（参政司缺乏明确指南且权力过大）；第二，统一四州的土地法、司法与税制并促进交通建设；第三，利用富裕的霹雳和雪兰莪协助解决彭亨州的财政赤字危机（以及建立联合保安部队保障防务安全）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Pada pendapat anda, apakah kebaikan sistem pentadbiran Persekutuan yang diamalkan di Malaysia pada hari ini dalam memacu kemajuan negara? [4 markah]',
          questionZh: '依你之见，当今马来西亚所实行的“联邦制”在推动国家进步方面有什么优势？[4分]',
          expectedKeywordsBm: [
            'pentadbiran seragam',
            'agihan kekayaan adil',
            'membantu negeri kurang maju',
            'pertahanan negara kukuh',
            'perpaduan nasional',
          ],
          modelAnswerBm:
            'Sistem Persekutuan di Malaysia hari ini mewujudkan **pentadbiran dan perundangan yang seragam** serta cekap di seluruh negara. Selain itu, Kerajaan Persekutuan dapat melaksanakan **agihan kekayaan ekonomi secara adil** bagi **membantu membangunkan negeri-negeri yang kurang maju** dengan kemudahan infrastruktur seperti lebuh raya, hospital, dan sekolah. Di samping itu, keselamatan negara menjadi lebih terjamin melalui angkatan pertahanan berpusat sekali gus mengukuhkan **perpaduan nasional**.',
          modelAnswerZh:
            '【Fakta】当今马来西亚的联邦制实现了全国统一且高效的行政与法律体系。【Huraian】联邦政府能够公平分配国家经济财富，支援发展较缓慢的州属，【Contoh】如兴建高速公路、医院与学校等基础设施。【Inferens】同时中央统一的国防力量有力保障国家安全，并进一步巩固国民团结。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 3.4: PENTADBIRAN NEGERI-NEGERI MELAYU BERSEKUTU
  // ============================================================================
  {
    subtopicCode: '3.4',
    babNumber: 3,
    babTitleBm: 'Pentadbiran Negeri-negeri Melayu Bersekutu',
    babTitleZh: '马来联邦的行政管理',
    skCode: '7.3',
    spCodes: ['7.3.4', 'K7.3.8'],
    titleBm: 'Pentadbiran Negeri-negeri Melayu Bersekutu',
    titleZh: '马来联邦的行政体制、统治者会议（Durbar）与联邦议会',
    heroImages: [
      {
        imageKey: 'bab3_durbar_kuala_kangsar',
        captionBm:
          'Persidangan **Durbar Pertama di Kuala Kangsar, Perak (1897)** yang menghimpunkan Raja-raja Melayu empat buah negeri bersama Pesuruhjaya Tinggi British, Residen Jeneral, dan empat Residen British.',
        captionZh:
          '1897年于霹雳江沙（Kuala Kangsar）举行的第一届统治者会议（Durbar），四州马来统治者与英国最高钦差大臣、总参政司及四位参政司齐聚一堂。',
        hotspots: [
          {
            x: 48,
            y: 42,
            termBm: 'Sultan Idris Murshidul Adzam Shah',
            meaningZh: '霹雳苏丹依德利斯（1903年痛批集权）',
            detailBm:
              'Dalam **Durbar Kedua di Kuala Lumpur (1903)**, baginda berani mengkritik pemusatan kuasa **Residen Jeneral** serta menuntut hak pegawai Melayu dan **Bahasa Melayu**.',
            detailZh:
              '在1903年吉隆坡第二届统治者会议上，殿下挺身痛批总参政司过度集权，要求归还统治者权力、增加马来官员并承认马来语为官方语言！',
          },
          {
            x: 22,
            y: 32,
            termBm: 'Durbar Kuala Kangsar (1897)',
            meaningZh: '1897年江沙首届统治者会议',
            detailBm:
              '**Persidangan Raja-raja Melayu** pertama yang diadakan di Istana Negara, Bukit Chandan, **Kuala Kangsar** bagi membincangkan hal ehwal adat dan kebajikan orang Melayu.',
            detailZh:
              '在霹雳江沙武吉占丹王宫隆重举行的首届马来统治者会议，讨论马来习俗、伊斯兰教及马来人福利事务。',
          },
          {
            x: 76,
            y: 36,
            termBm: 'Pemusatan Kuasa Residen Jeneral',
            meaningZh: '总参政司中央集权削弱州议会',
            detailBm:
              'Semua urusan kewangan, cukai, tanah, dan kehakiman dipusatkan di Kuala Lumpur sehingga kuasa **Raja-raja Melayu** dan **Majlis Mesyuarat Negeri** terhakis.',
            detailZh:
              '财政、税务、土地与司法大权悉数集中在吉隆坡总参政司手中，导致马来统治者与各州议会（MMN）权力被严重架空。',
          },
          {
            x: 52,
            y: 76,
            termBm: 'Majlis Mesyuarat Persekutuan (1909)',
            meaningZh: '1909年联邦议会（MMP）——换汤不换药',
            detailBm:
              'Ditubuhkan oleh **John Anderson**: jawatan Residen Jeneral ditukar kepada **Ketua Setiausaha**, tetapi kuasa berpindah kepada **Pesuruhjaya Tinggi British** dan Raja menjadi ahli biasa!',
            detailZh:
              '由钦差大臣约翰·安德森设立：虽将总参政司改称“政务司长”，但实权反而转移到英国最高钦差大臣手中，马来统治者更沦为普通议员！',
          },
        ],
      },
    ],
    sections: [
      {
        sectionCode: '3.4(a)',
        headingBm: 'Pemusatan Kuasa Residen Jeneral dan Hakisan Kuasa Raja-raja Melayu',
        headingZh: '总参政司的中央集权与马来统治者权力的流失',
        leadParagraphBm:
          'Dalam struktur pentadbiran **Negeri-negeri Melayu Bersekutu (NNMB)**, **Residen Jeneral** merupakan ketua kerajaan persekutuan di Kuala Lumpur yang bertanggungjawab kepada **Pesuruhjaya Tinggi NNMB** (merangkap **Gabenor Negeri-negeri Selat** di Singapura). Pemusatan kuasa ini telah menghakis kedaulatan Raja-raja Melayu.',
        leadParagraphZh:
          '在马来联邦的行政架构中，驻吉隆坡的“总参政司”（Residen Jeneral）掌握联邦政府实权，并向驻新加坡的“马来联邦最高钦差大臣”（由海峡殖民地总督兼任）负责。高度中央集权严重侵蚀了马来统治者的主权。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Pemusatan Kuasa di Kuala Lumpur**: Kerajaan Persekutuan menubuhkan pelbagai jabatan persekutuan seperti **Jabatan Kewangan, Jabatan Kehakiman, Jabatan Tanah dan Lombong, serta Jabatan Kerja Raya** yang diketuai sepenuhnya oleh pegawai British.',
            zh: '吉隆坡高度集权：联邦政府设立财政、司法、土地与矿务、公共工程等联邦部门，全部由英国官员把持。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Semua urusan penting negeri termasuk **kewangan, cukai eksport, perundangan, dan pentadbiran tanah** ditentukan oleh **Residen Jeneral** di Kuala Lumpur tanpa merujuk Raja-raja Melayu.',
            zh: '各州所有核心事务——包括财政预算、出口税、立法与土地管理，全由吉隆坡的总参政司拍板决定，根本无视马来统治者。',
          },
          {
            tag: 'FAKTA',
            bm: 'Akibatnya, **kuasa Raja-raja Melayu dan Majlis Mesyuarat Negeri (MMN) semakin terhakis**: MMN kehilangan kuasa menggubal undang-undang dan hanya berfungsi **meluluskan keputusan yang telah ditetapkan oleh Residen Jeneral**.',
            zh: '结果导致马来统治者与各州议会（Majlis Mesyuarat Negeri, MMN）权力严重萎缩：州议会丧失立法实权，沦为纯粹盖章通过总参政司决定的橡皮图章！',
          },
        ],
      },
      {
        sectionCode: '3.4(b)',
        headingBm: 'Penubuhan Durbar (Persidangan Raja-raja Melayu) 1897 dan 1903',
        headingZh: '统治者会议（Durbar, 1897年与1903年）与霹雳苏丹的严正抗议',
        leadParagraphBm:
          'Bagi mengambil hati dan mendapatkan sokongan Raja-raja Melayu terhadap kerajaan NNMB, British memperkenalkan **Durbar** (bermaksud istana raja atau perjumpaan rasmi), iaitu **Persidangan Raja-raja Melayu** yang menjadi asas kepada Majlis Raja-Raja hari ini.',
        leadParagraphZh:
          '为了安抚并争取马来统治者对联邦政府的支持，英国设立了“统治者会议”（Durbar，原意为王宫盛会）——这也是今日马来西亚“统治者会议”（Majlis Raja-Raja）的历史雏形。',
        diagramKey: 'diag_3_4_nnmb_durbar',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Keahlian Durbar**: Dianggotai oleh **empat kumpulan ahli**, iaitu **(1) Pesuruhjaya Tinggi British**, **(2) Raja-raja Melayu** empat buah negeri (Perak, Selangor, Negeri Sembilan, Pahang), **(3) Residen Jeneral**, dan **(4) Empat orang Residen British**.',
            zh: '统治者会议（Durbar）四大成员组成：（1）英国最高钦差大臣、（2）四州马来统治者、（3）总参政司、（4）四州英国参政司。',
          },
          {
            tag: 'CONTOH',
            bm: '**Durbar Pertama di Kuala Kangsar (1897)**: Diadakan di Istana Negara, Bukit Chandan, **Kuala Kangsar, Perak** dengan penuh adat istiadat Melayu bagi membincangkan hal ehwal adat, agama Islam, dan kebajikan orang Melayu.',
            zh: '第一届统治者会议（1897年，霹雳江沙 Kuala Kangsar）：在江沙王宫隆重举行，主要讨论马来习俗、伊斯兰教及马来民族福利事务。',
          },
          {
            tag: 'CONTOH',
            bm: '**Durbar Kedua di Kuala Lumpur (1903)**: Dalam persidangan ini, **Sultan Idris Murshidul Adzam Shah (Sultan Perak)** bangkit **mengkritik keras pemusatan kuasa di tangan Residen Jeneral**!',
            zh: '第二届统治者会议（1903年，吉隆坡 Kuala Lumpur）：霹雳苏丹依德利斯（Sultan Idris Murshidul Adzam Shah）在会上慷慨陈词，严厉谴责总参政司独揽大权！',
          },
          {
            tag: 'FAKTA',
            bm: 'Tiga tuntutan tegas **Sultan Idris** dalam **Durbar 1903**: (1) Mendesak **kuasa pentadbiran dikembalikan kepada institusi Raja-raja Melayu** dan negeri masing-masing; (2) Mendesak **bilangan pegawai Melayu ditambah** dalam perkhidmatan kerajaan persekutuan dan dilantik ke jawatan lebih tinggi; (3) Menuntut **Bahasa Melayu diiktiraf sebagai bahasa rasmi** NNMB!',
            zh: '苏丹依德利斯在1903年会议提出的三大严正诉求：（1）要求将行政权力归还马来统治者与各州政府；（2）要求增加联邦政府中的马来官员人数并委以高职；（3）要求承认马来语（Bahasa Melayu）为马来联邦官方语言！',
          },
        ],
      },
      {
        sectionCode: '3.4(c)',
        headingBm: 'Penubuhan Majlis Mesyuarat Persekutuan (MMP) 1909',
        headingZh: '1909年联邦议会（Majlis Mesyuarat Persekutuan）的成立与影响',
        leadParagraphBm:
          'Kritikan tajam Raja-raja Melayu dalam Durbar 1903 mendorong Pesuruhjaya Tinggi British, **John Anderson**, berunding dengan Raja-raja Melayu dan menandatangani perjanjian penubuhan **Majlis Mesyuarat Persekutuan (MMP)** pada tahun **1909**. Namun, langkah ini sebenarnya muslihat British mengukuhkan lagi kuasa penjajah!',
        leadParagraphZh:
          '面对马来统治者在1903年会议上的强烈批评，英国最高钦差大臣约翰·安德森（John Anderson）与各州统治者协商，于1909年签署条约成立“联邦议会”（MMP）。然而，这实际上是英国进一步架空统治者的政治伎俩！',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Perubahan Jawatan**: Melalui perjanjian **MMP 1909**, gelaran jawatan **Residen Jeneral** ditukar menjadi **Ketua Setiausaha (*Chief Secretary*)** Kerajaan Persekutuan dengan alasan untuk mengurangkan kuasanya.',
            zh: '职位改名：透过1909年联邦议会条约，“总参政司”（Residen Jeneral）一职改称为联邦政府“政务司长”（Ketua Setiausaha），名义上是为了削减其专断权力。',
          },
          {
            tag: 'CONTOH',
            bm: '**Struktur Keahlian MMP 1909**: Dipengerusikan oleh **Pesuruhjaya Tinggi British**, serta dianggotai oleh **Ketua Setiausaha**, **empat orang Raja Melayu**, **empat orang Residen British**, dan **empat orang ahli tidak rasmi** (terdiri daripada tauke Eropah dan Cina).',
            zh: '1909年联邦议会阵容：由英国最高钦差大臣担任主席，成员包括政务司长、四位马来统治者、四位英国参政司，以及首次纳入的四名“非官方议员”（欧籍与华籍富商代表）。',
          },
          {
            tag: 'HURAIAN',
            bm: '**Kesan Sebenar MMP 1909**: Kuasa menggubal undang-undang dan mengawal kewangan tidak dikembalikan kepada negeri, sebaliknya **berpindah kepada Pesuruhjaya Tinggi British** dan tertumpu kepada MMP.',
            zh: '1909年联邦议会的真实后果：立法与财政大权非但没有归还各州，反而转移并集中到英国最高钦差大臣与联邦议会手中！',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Kesan paling menyedihkan kepada kedaulatan diraja: Dalam **MMP 1909**, kedudukan **Raja-raja Melayu merosot menjadi ahli biasa sahaja** (duduk setaraf dengan Residen dan ahli tidak rasmi), malah persidangan MMP boleh diteruskan walaupun tanpa kehadiran Raja-raja Melayu!',
            zh: '⚠️ 考官最爱考的深层影响：在1909年联邦议会（MMP）中，尊贵的马来统治者竟沦为与参政司及商人平起平坐的“普通议员”（ahli biasa），甚至统治者缺席也不影响议会通过法律，主权进一步受挫！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm: 'Perbandingan Lengkap Durbar (1897 & 1903) dengan Majlis Mesyuarat Persekutuan (1909)',
        titleZh: '统治者会议（Durbar, 1897 & 1903）与1909年联邦议会（MMP）全面对比表',
        headers: [
          { bm: 'Aspek Perbandingan', zh: '比较项目' },
          { bm: 'Durbar (1897 & 1903)', zh: '统治者会议 Durbar（1897与1903年）' },
          { bm: 'Majlis Mesyuarat Persekutuan / MMP (1909)', zh: '联邦议会 MMP（1909年）' },
        ],
        rows: [
          [
            { bm: '**Latar Belakang & Lokasi**', zh: '背景与地点' },
            {
              bm: '**Durbar Pertama** di **Kuala Kangsar (1897)**; **Durbar Kedua** di **Kuala Lumpur (1903)**.',
              zh: '首届于1897年在霹雳江沙举行；第二届于1903年在吉隆坡举行。',
            },
            {
              bm: 'Ditubuhkan pada tahun **1909** hasil perjanjian antara Pesuruhjaya Tinggi **John Anderson** dengan Raja-raja Melayu.',
              zh: '1909年由最高钦差大臣约翰·安德森与马来统治者签约设立。',
            },
          ],
          [
            { bm: '**Keahlian**', zh: '成员构成' },
            {
              bm: '**Pesuruhjaya Tinggi British**, **4 Raja Melayu**, **Residen Jeneral**, dan **4 Residen British** *(tiada ahli tidak rasmi)*.',
              zh: '最高钦差大臣、4位马来统治者、总参政司、4位参政司（无非官方商业代表）。',
            },
            {
              bm: '**Pesuruhjaya Tinggi British** (Pengerusi), **Ketua Setiausaha**, **4 Raja Melayu**, **4 Residen**, dan **4 Ahli Tidak Rasmi**.',
              zh: '最高钦差大臣（主席）、政务司长、4位马来统治者、4位参政司及4名非官方议员。',
            },
          ],
          [
            { bm: '**Gelaran Ketua Eksekutif KL**', zh: '吉隆坡行政首长职衔' },
            {
              bm: 'Diketuai oleh **Residen Jeneral**.',
              zh: '称为“总参政司”（Residen Jeneral）。',
            },
            {
              bm: 'Jawatan Residen Jeneral digantikan dengan **Ketua Setiausaha (*Chief Secretary*)**.',
              zh: '总参政司改称为“政务司长”（Ketua Setiausaha）。',
            },
          ],
          [
            { bm: '**Kedudukan Raja-raja Melayu & Kesan**', zh: '马来统治者地位与实际影响' },
            {
              bm: 'Menjadi medan **Sultan Idris (1903)** mengkritik pemusatan kuasa Residen Jeneral serta menuntut hak pegawai Melayu & **Bahasa Melayu**.',
              zh: '成为霹雳苏丹依德利斯（1903年）痛批总参政司专权、争取马来官员名额与马来语官方地位的发声平台。',
            },
            {
              bm: 'Kuasa sebenar berpindah kepada **Pesuruhjaya Tinggi British**; **Raja-raja Melayu merosot menjadi ahli biasa** sahaja dalam MMP!',
              zh: '大权转移到最高钦差大臣手中；马来统治者降格为联邦议会中的“普通议员”，州议会权力进一步丧失！',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Sultan Idris Murshidul Adzam Shah',
        roleBm: 'Sultan Perak (Durbar Kuala Lumpur 1903)',
        roleZh: '霹雳苏丹（1903年吉隆坡统治者会议）',
        emoji: '🦁',
        lineBm:
          'Pepatah Melayu ada menyebut, *tidak boleh ada dua nakhoda dalam sebuah kapal*! Kuasa **Residen Jeneral** sudah melampaui batas! Kembalikan kuasa kepada Raja-raja Melayu, lantik lebih ramai **pegawai Melayu**, dan iktiraf **Bahasa Melayu** sebagai bahasa rasmi!',
        lineZh:
          '马来谚语说得好：“一艘船不能有两个船长”！总参政司的权力已经严重越界！必须把权力归还马来统治者、委任更多马来官员担任高职，并承认马来语为官方语言！',
      },
      {
        speakerBm: 'Yamtuan Besar Tuanku Muhammad',
        roleBm: 'Yamtuan Besar Negeri Sembilan',
        roleZh: '森美兰最高统治者严端',
        emoji: '👑',
        lineBm:
          'Beta menyokong penuh titah kekanda Sultan Idris! Sejak adanya NNMB, **Majlis Mesyuarat Negeri** kami hanya tinggal nama untuk mengesahkan arahan dari Kuala Lumpur sahaja!',
        lineZh:
          '朕全力支持依德利斯苏丹王兄的圣谕！自从成立马来联邦，我们的州议会已名存实亡，只剩下替吉隆坡的指令盖章的份儿！',
      },
      {
        speakerBm: 'John Anderson',
        roleBm: 'Pesuruhjaya Tinggi British (1909)',
        roleZh: '英国最高钦差大臣（1909年）',
        emoji: '📜',
        lineBm:
          'Bertenang Tuanku! Melalui **Majlis Mesyuarat Persekutuan (MMP) 1909**, saya mansuhkan gelaran Residen Jeneral menjadi **Ketua Setiausaha**, dan saya sendiri selaku **Pesuruhjaya Tinggi** akan mempengerusikan MMP bersama ahli tidak rasmi!',
        lineZh:
          '殿下请息怒！透过1909年《联邦议会条约》，我把总参政司改称“政务司长”，并由我本人以最高钦差大臣身份担任主席，同时引入商业非官方议员共商国是！',
      },
      {
        speakerBm: 'Sultan Alauddin Sulaiman Shah',
        roleBm: 'Sultan Selangor',
        roleZh: '雪兰莪苏丹',
        emoji: '🤨',
        lineBm:
          'Muslihat apakah ini?! Jawatan sahaja bertukar nama, tetapi kuasa menggubal undang-undang berpindah kepada **Pesuruhjaya Tinggi**, manakala kami Raja-raja Melayu pula dijadikan **ahli biasa** sahaja dalam MMP!',
        lineZh:
          '这算哪门子改革？！不过是换个官名罢了，立法大权反而转到最高钦差大臣手里，而我们堂堂马来统治者竟然在联邦议会里沦为普通议员！',
      },
    ],
    memoryHackBm:
      'Formula Ingat Pantas **3.4**: **Durbar 1897** = **Kuala Kangsar** (Pertama, penuh adat). **Durbar 1903** = **Kuala Lumpur** (**Sultan Idris** kritik **3 K**: **Kuasa** Raja dikembalikan, **Kakitangan** pegawai Melayu ditambah, **Bahasa** Melayu rasmi). **MMP 1909** = **John Anderson** tukar Residen Jeneral -> **Ketua Setiausaha**, Raja jadi **ahli biasa**!',
    memoryHackZh:
      '💡 王牌名师神记忆口诀（3.4）：【两届 Durbar 地点】1897首届在江沙（**Kuala Kangsar**），1903第二届在隆市（**Kuala Lumpur**）！【霹雳苏丹 Idris 三大怒吼】① 还我王权、② 多请马来高官、③ 马来语当官方语！【1909年 MMP 换汤不换药】安德森（John Anderson）把总参政司改名“政务司长”（**Ketua Setiausaha**），大权归钦差大臣，苏丹惨变“普通议员”（**ahli biasa**）！',
    subtopicMcqs: [
      {
        id: '3.4-mcq-1',
        spCode: '7.3.4',
        questionBm:
          'Di manakah berlangsungnya persidangan **Durbar Pertama** pada tahun **1897**?',
        questionZh: '1897年第一届马来统治者会议（Durbar Pertama）在哪里举行？',
        options: [
          {
            id: 'A',
            textBm: '**Kuala Kangsar, Perak**',
            textZh: '霹雳江沙（Kuala Kangsar, Perak）',
          },
          {
            id: 'B',
            textBm: 'Kuala Lumpur, Selangor',
            textZh: '雪兰莪吉隆坡',
          },
          {
            id: 'C',
            textBm: 'Seri Menanti, Negeri Sembilan',
            textZh: '森美兰神安池',
          },
          {
            id: 'D',
            textBm: 'Pekan, Pahang',
            textZh: '彭亨北根',
          },
        ],
        correctId: 'A',
        explanationBm:
          '**Durbar Pertama** telah diadakan di Istana Negara, Bukit Chandan, **Kuala Kangsar, Perak** pada tahun **1897**, manakala Durbar Kedua diadakan di Kuala Lumpur pada tahun 1903.',
        explanationZh:
          '正确是 A！1897年首届 Durbar 在霹雳皇城江沙（Kuala Kangsar）举行；1903年第二届才在吉隆坡举行。',
      },
      {
        id: '3.4-mcq-2',
        spCode: '7.3.4',
        questionBm:
          'Apakah tuntutan yang dikemukakan oleh **Sultan Idris Murshidul Adzam Shah** (Sultan Perak) semasa **Durbar Kedua di Kuala Lumpur pada tahun 1903**?',
        questionZh: '霹雳苏丹依德利斯在1903年吉隆坡第二届统治者会议（Durbar）上提出了什么诉求？',
        options: [
          {
            id: 'A',
            textBm: 'Memindahkan pusat pentadbiran NNMB dari Kuala Lumpur ke Singapura',
            textZh: '将马来联邦行政中心从吉隆坡迁往新加坡',
          },
          {
            id: 'B',
            textBm: 'Mengembalikan kuasa Raja-raja Melayu, menambah pegawai Melayu, dan mengiktiraf **Bahasa Melayu** sebagai bahasa rasmi',
            textZh: '归还马来统治者权力、增加马来官员人数，并承认马来语为官方语言',
          },
          {
            id: 'C',
            textBm: 'Menjemput kerajaan Siam menghantar penasihat kewangan ke Perak',
            textZh: '邀请暹罗政府派驻财政顾问到霹雳',
          },
          {
            id: 'D',
            textBm: 'Melantik empat orang tauke lombong sebagai ahli Durbar',
            textZh: '委任四名矿家富商成为统治者会议成员',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Dalam **Durbar 1903**, **Sultan Idris** mengkritik pemusatan kuasa Residen Jeneral dan menuntut supaya kuasa dikembalikan kepada institusi Raja, bilangan pegawai Melayu ditambah ke jawatan tinggi, serta **Bahasa Melayu** diiktiraf sebagai bahasa rasmi.',
        explanationZh:
          '正确是 B！苏丹依德利斯在1903年 Durbar 慷慨陈词，提出归还王权、增聘马来高官、确立马来语官方地位三大历史性诉求。',
      },
      {
        id: '3.4-mcq-3',
        spCode: '7.3.4',
        questionBm:
          'Antara berikut, siapakah yang **bukan** merupakan ahli dalam persidangan **Durbar**?',
        questionZh: '下列哪项人物并“不是”统治者会议（Durbar）的成员？',
        options: [
          {
            id: 'A',
            textBm: '**Pesuruhjaya Tinggi British**',
            textZh: '英国最高钦差大臣',
          },
          {
            id: 'B',
            textBm: '**Raja-raja Melayu** empat buah negeri',
            textZh: '四州马来统治者',
          },
          {
            id: 'C',
            textBm: '**Empat orang Ahli Tidak Rasmi** (pedagang Eropah dan Cina)',
            textZh: '四名非官方议员（欧籍与华籍商人）',
          },
          {
            id: 'D',
            textBm: '**Residen Jeneral** dan **empat orang Residen British**',
            textZh: '总参政司与四位英国参政司',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Ahli **Durbar** hanya terdiri daripada Pesuruhjaya Tinggi British, Raja-raja Melayu, Residen Jeneral, dan 4 Residen British. **Empat orang Ahli Tidak Rasmi** hanya wujud dalam **Majlis Mesyuarat Persekutuan (MMP) 1909**.',
        explanationZh:
          '正确是 C！“四名非官方议员”（Ahli Tidak Rasmi）是在1909年联邦议会（MMP）才加入的，并不属于 Durbar 成员！',
      },
      {
        id: '3.4-mcq-4',
        spCode: '7.3.4',
        questionBm:
          'Apakah perubahan jawatan yang berlaku apabila **Majlis Mesyuarat Persekutuan (MMP)** ditubuhkan pada tahun **1909** oleh **John Anderson**?',
        questionZh: '当约翰·安德森于1909年成立联邦议会（MMP）时，行政首长职位发生了什么变动？',
        options: [
          {
            id: 'A',
            textBm: 'Jawatan **Residen Jeneral** digantikan dengan jawatan **Ketua Setiausaha**',
            textZh: '“总参政司”（Residen Jeneral）一职被替换为“政务司长”（Ketua Setiausaha）',
          },
          {
            id: 'B',
            textBm: 'Jawatan Pesuruhjaya Tinggi digantikan dengan jawatan Perdana Menteri',
            textZh: '最高钦差大臣一职被替换为首相',
          },
          {
            id: 'C',
            textBm: 'Jawatan Residen British dihapuskan di semua empat negeri',
            textZh: '四州的英国参政司职位全部废除',
          },
          {
            id: 'D',
            textBm: 'Jawatan Penasihat Am diperkenalkan bagi menggantikan Sultan',
            textZh: '引入总顾问官职位以取代苏丹',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Melalui penubuhan **MMP 1909**, jawatan **Residen Jeneral** telah digantikan dengan jawatan **Ketua Setiausaha** Kerajaan Persekutuan, manakala kuasa sebenar berpindah kepada **Pesuruhjaya Tinggi British**.',
        explanationZh:
          '正确是 A！1909年条约将 Residen Jeneral 改名为 Ketua Setiausaha（政务司长），但实权转移至英国最高钦差大臣手中。',
      },
      {
        id: '3.4-mcq-5',
        spCode: 'K7.3.8',
        questionBm:
          'Apakah kesan penubuhan **Majlis Mesyuarat Persekutuan (MMP) 1909** terhadap kedudukan **Raja-raja Melayu**?',
        questionZh: '1909年联邦议会（MMP）的成立对马来统治者的地位造成了什么影响？',
        options: [
          {
            id: 'A',
            textBm: 'Raja-raja Melayu dilantik sebagai pengerusi tetap MMP secara bergilir-gilir',
            textZh: '马来统治者轮流担任联邦议会的常任主席',
          },
          {
            id: 'B',
            textBm: 'Raja-raja Melayu memperoleh kuasa pembatal (*veto*) ke atas semua undang-undang British',
            textZh: '马来统治者获得对所有英国法律的否决权',
          },
          {
            id: 'C',
            textBm: 'Kedudukan **Raja-raja Melayu merosot kerana hanya menjadi ahli biasa** dalam MMP',
            textZh: '马来统治者地位下降，在联邦议会中仅沦为普通议员（ahli biasa）',
          },
          {
            id: 'D',
            textBm: 'Semua hasil cukai bijih timah diserahkan terus ke perbendaharaan istana Sultan',
            textZh: '所有锡矿税收直接交归苏丹王室金库',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Dalam **MMP 1909**, kuasa menggubal undang-undang tertumpu kepada MMP yang dipengerusikan oleh Pesuruhjaya Tinggi British, manakala **Raja-raja Melayu hanya diletakkan sebagai ahli biasa** setaraf dengan Residen dan ahli tidak rasmi.',
        explanationZh:
          '正确是 C！MMP 由英国最高钦差大臣担任主席，四州马来统治者仅列席为普通成员（ahli biasa），王权进一步受到削弱。',
      },
    ],
    strukturQuestion: {
      id: '3.4-struktur-1',
      spCode: '7.3.4',
      stimulusBm:
        'Pemusatan kuasa di tangan **Residen Jeneral** dalam **Negeri-negeri Melayu Bersekutu (NNMB)** telah menimbulkan rasa tidak puas hati Raja-raja Melayu yang disuarakan dengan lantang dalam persidangan **Durbar**.',
      stimulusZh:
        '马来联邦中总参政司的高度集权引起马来统治者的强烈不满，并在统治者会议（Durbar）上发出了严正抗议。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Senaraikan **tiga** pihak yang menganggotai persidangan **Durbar** dalam pentadbiran NNMB. [3 markah]',
          questionZh: '列出马来联邦行政体制中组成统治者会议（Durbar）的其中三方成员。[3分]',
          expectedKeywordsBm: [
            'Pesuruhjaya Tinggi British',
            'Raja-raja Melayu',
            'Residen Jeneral',
            'Empat orang Residen British',
          ],
          modelAnswerBm:
            'Tiga pihak yang menganggotai Durbar ialah **Pesuruhjaya Tinggi British**, **Raja-raja Melayu** empat buah negeri (Perak, Selangor, Negeri Sembilan, dan Pahang), **Residen Jeneral**, serta **empat orang Residen British**.',
          modelAnswerZh:
            '统治者会议的成员包括：英国最高钦差大臣、四州马来统治者、总参政司，以及四位英国参政司。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Jelaskan kritikan dan tuntutan **Sultan Idris Murshidul Adzam Shah** semasa **Durbar Kedua di Kuala Lumpur (1903)**. [3 markah]',
          questionZh: '说明霹雳苏丹依德利斯在1903年吉隆坡第二届统治者会议上提出的批评与诉求。[3分]',
          expectedKeywordsBm: [
            'pemusatan kuasa Residen Jeneral',
            'kuasa dikembalikan kepada Raja-raja Melayu',
            'menambah bilangan pegawai Melayu',
            'Bahasa Melayu sebagai bahasa rasmi',
          ],
          modelAnswerBm:
            '**Sultan Idris** mengkritik keras **pemusatan kuasa di tangan Residen Jeneral** dan mendesak supaya **kuasa pentadbiran dikembalikan kepada institusi Raja-raja Melayu**. Baginda juga menuntut agar **bilangan pegawai Melayu ditambah** dalam perkhidmatan kerajaan persekutuan ke jawatan yang lebih tinggi serta mengiktiraf **Bahasa Melayu sebagai bahasa rasmi**.',
          modelAnswerZh:
            '苏丹依德利斯严厉批评总参政司过度集权，要求将行政权力归还马来统治者体制；殿下还要求增加联邦政府中的马来官员人数并委以高职，以及承认马来语为官方语言。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Keberanian **Sultan Idris** bersuara dalam Durbar 1903 membuktikan kewibawaan institusi beraja membela nasib bangsa dan kedaulatan negeri. Berikan ulasan anda tentang kepentingan sikap berwaspada apabila menandatangani sebarang perjanjian dengan pihak luar. [4 markah]',
          questionZh: '苏丹依德利斯在1903年统治者会议上勇敢发声，证明了君主制度捍卫民族命运与州属主权的威望。请评论在与外来势力签署任何条约时保持高度警惕的重要性。[4分]',
          expectedKeywordsBm: [
            'meneliti syarat perjanjian',
            'mengelakkan muslihat tersembunyi',
            'memelihara kedaulatan negara',
            'hak peribumi terjamin',
            'tidak kehilangan kuasa',
          ],
          modelAnswerBm:
            'Sikap berwaspada amat penting kerana pemimpin perlu **meneliti setiap klausa dan syarat perjanjian** secara mendalam bagi **mengelakkan muslihat tersembunyi pihak luar** seperti yang berlaku dalam Perjanjian Persekutuan 1895 dan MMP 1909. Ketelitian dalam rundingan memastikan kita **tidak kehilangan kuasa pentadbiran dan ekonomi** kepada kuasa asing. Contohnya, syarat berkaitan bahasa kebangsaan dan hak anak watan mesti diperincikan secara bertulis supaya **kedaulatan negara dan kepentingan rakyat sentiasa terpelihara**.',
          modelAnswerZh:
            '【Fakta】保持高度警惕极为重要，因为领导者必须深入审视条约的每一项条款，【Huraian】以防落入外来势力的隐蔽圈套，避免重蹈1895年《联邦条约》与1909年联邦议会丧失实权的覆辙。【Contoh】例如在谈判中必须以白纸黑字明确保障国语地位与本土人民权益，【Inferens】从而确保国家主权与国民利益永远受到守护。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 4.1: PEMERINTAHAN KESULTANAN MELAYU DI PERLIS, KEDAH, KELANTAN, TERENGGANU DAN JOHOR
  // ============================================================================
  {
    subtopicCode: '4.1',
    babNumber: 4,
    babTitleBm: 'Pentadbiran Negeri-negeri Melayu Tidak Bersekutu',
    babTitleZh: '马来属邦的行政管理',
    skCode: '7.4',
    spCodes: ['7.4.1', 'K7.4.5'],
    titleBm: 'Pemerintahan Kesultanan Melayu di Perlis, Kedah, Kelantan, Terengganu dan Johor',
    titleZh: '玻璃市、吉打、吉兰丹、登嘉楼与柔佛的马来苏丹王朝统治',
    heroImages: [
      {
        imageKey: 'bab4_kedah_terusan',
        captionBm:
          'Kemajuan pentadbiran dan ekonomi pertanian di **Kesultanan Kedah** melalui pembinaan **Terusan Wan Muhammad Saman** yang memakmurkan pengeluaran padi sebelum peluasan kuasa British.',
        captionZh:
          '在英国势力扩张前，吉打苏丹王朝透过开凿“旺慕哈末沙曼运河”（Terusan Wan Muhammad Saman）大力发展稻米农业，展现卓越的本土治理能力。',
        hotspots: [
          {
            x: 32,
            y: 56,
            termBm: 'Terusan Wan Muhammad Saman',
            meaningZh: '旺慕哈末沙曼运河（吉打稻米命脉）',
            detailBm:
              'Dibina atas usaha Perdana Menteri Kedah **Dato\' Wan Muhammad Saman** bagi mengairi sawah padi sehingga Kedah terkenal sebagai jelapang padi.',
            detailZh:
              '由吉打首任首相拿督旺慕哈末沙曼主持开凿，全长36公里灌溉万顷良田，奠定吉打“米乡”地位。',
          },
          {
            x: 68,
            y: 34,
            termBm: 'Pusat Pentadbiran Kota Setar',
            meaningZh: '哥打士打（吉打行政与商贸中心）',
            detailBm:
              'Pentadbiran Kesultanan Kedah berpusat di **Kota Setar**, dibantu oleh pembesar negeri dan diikat oleh **Kanun Undang-Undang Kedah (1650)**.',
            detailZh:
              '吉打王朝以哥打士打（今亚罗士打）为行政中枢，辅以1650年《吉打法典》维持严明法治。',
          },
          {
            x: 22,
            y: 30,
            termBm: 'Sistem Mukim & Penghulu',
            meaningZh: '巫金（区）与彭古鲁（区长）基层制度',
            detailBm:
              'Wilayah Kedah dibahagikan kepada **128 mukim** yang diketuai oleh **Penghulu** untuk memelihara keamanan dan menguruskan pentadbiran tempatan.',
            detailZh:
              '吉打全境划分为128个巫金（mukim），各由一名彭古鲁（Penghulu）领导，负责治安与地方行政。',
          },
          {
            x: 74,
            y: 68,
            termBm: 'Hubungan Diplomatik Berdaulat',
            meaningZh: '灵活外交守护本土主权',
            detailBm:
              'Pemerintah Perlis, Kedah, Kelantan, dan Terengganu menjalin hubungan baik dengan Siam (*bunga emas*) demi mengelakkan campur tangan kuasa asing.',
            detailZh:
              '玻璃市、吉打、吉兰丹与登嘉楼统治者灵活运用对暹罗的友好外交（金花礼），成功避免外敌入侵与内政干预。',
          },
        ],
      },
      {
        imageKey: 'bab4_johor_abu_bakar',
        captionBm:
          '**Sultan Abu Bakar** (*Bapa Pemodenan Johor*) memodenkan pentadbiran Johor dan menggubal **Undang-Undang Tubuh Kerajaan Johor 1895** bagi mempertahankan kedaulatan negeri.',
        captionZh:
          '“柔佛现代化之父”苏丹阿布峇卡革新柔佛官僚体制，并于1895年颁布《柔佛政府宪法》，筑起捍卫主权的坚固防线。',
      },
    ],
    sections: [
      {
        sectionCode: '4.1(a)',
        headingBm: 'Pemerintahan Kesultanan Perlis',
        headingZh: '玻璃市拉惹王朝（Kesultanan Perlis）的统治体系',
        leadParagraphBm:
          'Sebelum kedatangan kuasa British, kelima-lima negeri Melayu — **Perlis, Kedah, Kelantan, Terengganu, dan Johor** — telah pun mempunyai sistem pemerintahan Kesultanan Melayu yang tersusun, mantap, dan berdaulat. Di utara sekali, **Perlis** muncul sebagai kerajaan berdaulat yang berpusat di **Arau**.',
        leadParagraphZh:
          '在英国势力介入前，玻璃市、吉打、吉兰丹、登嘉楼与柔佛五州早已拥有成熟稳固、主权独立的马来君主行政制度。位于最北端的玻璃市以亚娄（Arau）为王城建立政权。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: 'Pada asalnya, wilayah **Perlis** merupakan sebahagian daripada wilayah **Kesultanan Kedah**. Semasa pengaruh Siam di Kedah (1821–1842), wilayah Kedah dibahagikan kepada empat unit pentadbiran iaitu **Setul, Kubang Pasu, Perlis, dan Kedah**.',
            zh: '玻璃市原本属于吉打苏丹王朝版图的一部分；在暹罗占领吉打期间（1821–1842），吉打被拆分为四个行政单位：实敦（Setul）、古邦巴素（Kubang Pasu）、玻璃市与吉打。',
          },
          {
            tag: 'CONTOH',
            bm: 'Pada tahun **1843**, **Maharaja Siam** mengiktiraf **Syed Hussin Jamalullail** sebagai pemerintah Perlis yang pertama di Bangkok dengan gelaran **Phya Songkhram Ramu Wichit Willis Asmara Phya Pelit** (**Raja Syed Hussin**), dan baginda menjadikan **Arau** sebagai pusat pentadbiran.',
            zh: '1843年，暹罗国王正式册封赛胡先·贾马鲁莱尔（Syed Hussin Jamalullail）为玻璃市首任统治者，即拉惹赛胡先（Raja Syed Hussin），并以亚娄（Arau）作为行政中心。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Dalam pentadbiran negeri, **Raja Syed Hussin** melantik pembesar tempatan membantu pentadbiran, khususnya **Dato\' Arau** sebagai **Perdana Menteri** (bergelar *Dato\' Belat Paduka Seri Perdana Menteri*), melaksanakan perundangan berasaskan **undang-undang Islam**, serta memelihara **hubungan baik dengan Siam** bagi mengelakkan campur tangan kuasa lain.',
            zh: '在内政上，拉惹赛胡先委任本地大臣辅政，尤其是任命拿督亚娄（Dato\' Arau）为首相（Perdana Menteri），推行伊斯兰教法，并与暹罗保持良好外交关系以防他国干涉。',
          },
        ],
      },
      {
        sectionCode: '4.1(b)',
        headingBm: 'Pemerintahan Kesultanan Kedah',
        headingZh: '吉打苏丹王朝（Kesultanan Kedah）的统治体系',
        leadParagraphBm:
          '**Kerajaan Kedah** merupakan antara kerajaan terawal di negara kita yang bermula sejak abad ke-7 dan kekal berdaulat sebagai Kesultanan Islam yang makmur berpusat di **Kota Setar**.',
        leadParagraphZh:
          '吉打王朝是我国历史最悠久的古国之一（始于公元7世纪），作为繁荣的伊斯兰苏丹国，其行政中心设于哥打士打（Kota Setar）。',
        imageKey: 'bab4_kedah_terusan',
        imageCaptionBm:
          'Pembinaan **Terusan Wan Muhammad Saman** membuktikan kecekapan pentadbiran **Kesultanan Kedah** memajukan sektor pertanian padi.',
        imageCaptionZh:
          '旺慕哈末沙曼运河的成功开凿，充分印证了吉打苏丹王朝发展稻米经济的卓越行政效率。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: 'Sistem pemerintahan **Kesultanan Kedah** diketuai oleh **Sultan** dan berpusat di **Kota Setar**, dibantu oleh pembesar negeri yang cekap termasuk penubuhan jawatan **Perdana Menteri** yang dijawat oleh **Dato\' Wan Muhammad Saman** (arkitek pembinaan *Terusan Wan Muhammad Saman*).',
            zh: '吉打苏丹王朝由苏丹统领，定都哥打士打，并由干练的大臣辅佐——特别是设立首相一职，由主持开凿大运河的拿督旺慕哈末沙曼（Dato\' Wan Muhammad Saman）担任。',
          },
          {
            tag: 'CONTOH',
            bm: 'Bagi melicinkan pentadbiran peringkat bawah, negeri Kedah dibahagikan kepada daerah dan **128 buah mukim** yang setiap satunya diketuai oleh seorang **Penghulu** untuk menjaga keamanan serta memungut hasil.',
            zh: '为使地方治理井然有序，吉打全州细分为县及128个巫金（mukim），每个巫金由一名彭古鲁（Penghulu，区长）掌管治安与赋税。',
          },
          {
            tag: 'CONTOH',
            bm: 'Kedah mempunyai sistem perundangan bertulis yang mantap melalui penggubalan **Kanun Undang-Undang Kedah** pada tahun **1650** (merangkumi undang-undang pelabuhan, tanah, dan Islam) serta bijak menjalinkan hubungan luar dengan Siam demi kestabilan negeri.',
            zh: '吉打拥有完备的成文法典——1650年《吉打法典》（Kanun Undang-Undang Kedah，涵盖港口法、土地法与伊斯兰法），并审慎处理对暹外交以维护国家稳定。',
          },
        ],
      },
      {
        sectionCode: '4.1(c)',
        headingBm: 'Pemerintahan Kesultanan Kelantan',
        headingZh: '吉兰丹苏丹王朝（Kesultanan Kelantan）与内阁部长制度',
        leadParagraphBm:
          'Di **Kelantan**, kestabilan dan kecekapan pentadbiran menyerlah sewaktu pemerintahan **Sultan Muhammad I** (1800–1837) dan dimantapkan lagi oleh **Sultan Muhammad II** (1837–1886) yang memperkenalkan **Sistem Jemaah Menteri**.',
        leadParagraphZh:
          '在吉兰丹，苏丹慕哈末一世（Sultan Muhammad I）奠定统一政局，继任的苏丹慕哈末二世（Sultan Muhammad II）更创立著名的“内阁部长制度”（Sistem Jemaah Menteri），使治理高度专业化。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Sultan Muhammad I** menyatukan wilayah Kelantan dan menjalin hubungan diplomatik dengan **Siam** (penghantaran *bunga emas*), manakala **Sultan Muhammad II** mengasaskan **Kota Bharu** sebagai pusat pentadbiran pada tahun 1844.',
            zh: '苏丹慕哈末一世统一吉兰丹并与暹罗建立友好外交（定期送金花），苏丹慕哈末二世则于1844年建立哥打峇鲁（Kota Bharu）作为新都城。',
          },
          {
            tag: 'CONTOH',
            bm: '**Sistem Jemaah Menteri Kelantan**: **Sultan Muhammad II** membentuk **lapan buah badan Jemaah Menteri** (setiap satu dianggotai empat pembesar) bagi menguruskan bidang khusus — termasuk Jemaah Penasihat Raja, Jemaah Menteri Istana, Jemaah Menteri Keadilan dan Kehakiman, Jemaah Menteri Dalam Negeri, Jemaah Menteri Luar, Jemaah Menteri Perbendaharaan, Jemaah Menteri Peperangan, serta Jemaah Menteri Pentadbiran dan Pengimarahan Negeri.',
            zh: '吉兰丹“八大内阁部”（Sistem Jemaah Menteri）：苏丹慕哈末二世设立8个专门内阁委员会（每部由4名大臣组成），分掌王室顾问、宫廷、司法公正、内政、外交、财政国库、军事战争及国家建设发展！',
          },
          {
            tag: 'CONTOH',
            bm: 'Pada peringkat wilayah, negeri Kelantan dibahagikan kepada **jajahan** tertentu dan kampung yang ditadbir oleh ketua bergelar **Tok Kweng** (atau **Penggawa**) bersama **Imam**, dengan penguatkuasaan **undang-undang syarak** yang menjadikan Kelantan negeri aman dan pusat perdagangan tumpuan.',
            zh: '在地方行政上，吉兰丹划分为若干辖区（jajahan）与村落，由称为“督光”（Tok Kweng，即Penggawa区长）的领袖及宗教司（Imam）管理，严格推行伊斯兰教法（undang-undang syarak），商贸欣欣向荣。',
          },
        ],
      },
      {
        sectionCode: '4.1(d)',
        headingBm: 'Pemerintahan Kesultanan Terengganu',
        headingZh: '登嘉楼苏丹王朝（Kesultanan Terengganu）的伊斯兰法治统治',
        leadParagraphBm:
          '**Kesultanan Terengganu** diasaskan pada tahun **1708** oleh **Sultan Zainal Abidin I** dan mencapai zaman kegemilangan semasa pemerintahan **Baginda Omar** (1839–1876) serta **Sultan Zainal Abidin III** (1881–1918) berpusat di **Kuala Terengganu**.',
        leadParagraphZh:
          '登嘉楼苏丹王朝由苏丹再纳阿比丁一世于1708年创立，定都瓜拉登嘉楼，并在巴金达奥玛（Baginda Omar）与苏丹再纳阿比丁三世治下迈向鼎盛。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: 'Dalam pentadbiran **Terengganu**, Sultan dibantu oleh pembesar sebagai penasihat raja dalam **Dewan Pangkuan Diraja** (atau **Jemaah Mesyuarat Kerajaan**) serta kumpulan pembesar bergelar **Dato\' Mata-mata** yang menyambut kedatangan pelawat dan mengurus keselamatan.',
            zh: '在登嘉楼行政体系中，苏丹由御前咨询理事会（Dewan Pangkuan Diraja / Jemaah Mesyuarat Kerajaan）的大臣辅政，并设有“Dato\' Mata-mata”官员负责接待外宾与维护治安。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Sistem perundangan dan kehakiman di Terengganu dilaksanakan berteraskan prinsip keadilan **undang-undang Islam (Hukum Syarak)** melalui penubuhan mahkamah syariah; **Baginda Omar** dan **Sultan Zainal Abidin III** amat mengutamakan kemajuan ekonomi pertukangan, perdagangan, dan institusi pendidikan agama.',
            zh: '登嘉楼的法律与司法完全建立在伊斯兰教法（Hukum Syarak）公正原则之上，设有伊斯兰法庭；巴金达奥玛与苏丹再纳阿比丁三世积极振兴手工业贸易与宗教教育（后更于1911年颁布成文宪法捍卫主权）。',
          },
        ],
      },
      {
        sectionCode: '4.1(e)',
        headingBm: 'Pemerintahan Kesultanan Johor dan Pemodenan Sultan Abu Bakar',
        headingZh: '柔佛苏丹王朝：港主制度与苏丹阿布峇卡的现代化改革',
        leadParagraphBm:
          'Di selatan tanah air, **Kesultanan Johor** membuktikan kehebatan pentadbiran moden di bawah kepimpinan **Temenggung Daeng Ibrahim** (1825–1862) dan puteranya **Maharaja / Sultan Abu Bakar** (1862–1895) sehingga disegani oleh kuasa Barat.',
        leadParagraphZh:
          '在半岛南端，柔佛王朝在天猛公达因依布拉欣（Temenggung Daeng Ibrahim）及其子苏丹阿布峇卡（Sultan Abu Bakar）父子两代励精图治下实现全面现代化，令西方列强刮目相看。',
        imageKey: 'bab4_johor_abu_bakar',
        imageCaptionBm:
          '**Sultan Abu Bakar** memodenkan birokrasi Johor dan mengisytiharkan **Undang-Undang Tubuh Kerajaan Johor pada tahun 1895**.',
        imageCaptionZh:
          '苏丹阿布峇卡全面革新柔佛官僚机构，并于1895年颁布马来半岛第一部成文宪法《柔佛政府宪法》。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Pemerintahan Temenggung Daeng Ibrahim**: Mengasaskan pusat pentadbiran baharu di **Tanjung Puteri (Iskandar Puteri)** pada tahun 1855 dan memperkenalkan **Sistem Kangchu** dengan mengeluarkan **Surat Sungai** kepada pengusaha Cina (**Kangchu** = Ketua Sungai) untuk mengusahakan tanaman **lada hitam dan gambir**.',
            zh: '天猛公达因依布拉欣政绩：1855年开辟丹绒布蒂里（Tanjung Puteri / Iskandar Puteri）为新行政中心，并首创“港主制度”（Sistem Kangchu）——颁发“港契”（Surat Sungai）给华人港主（Kangchu，河港之主），在沿河两岸大规模种植甘蜜（gambir）与黑胡椒（lada hitam），令柔佛财政大富！',
          },
          {
            tag: 'FAKTA',
            bm: '**Pemodenan Sultan Abu Bakar (Bapa Pemodenan Johor)**: Menaiki takhta pada tahun 1862, menukar nama Iskandar Puteri kepada **Johor Bahru (1866)**, serta menubuhkan **Jemaah Menteri**, **Majlis Negeri**, mahkamah, sekolah, hospital, pasukan polis dan tentera (*Timbalan Setia Negeri*), serta jabatan-jabatan moden yang cekap.',
            zh: '“柔佛现代化之父”苏丹阿布峇卡政绩：1862年继位，1866年将首府正式命名为新山（Johor Bahru），设立内阁部（Jemaah Menteri）、州议会（Majlis Negeri）、法院、学校、御林军及完善的现代政府部门。',
          },
          {
            tag: 'CONTOH',
            bm: '**Undang-Undang Tubuh Kerajaan Johor (14 April 1895)**: Sultan Abu Bakar menggubal **perlembagaan bertulis pertama** di Tanah Melayu yang menetapkan Raja hendaklah berbangsa Melayu dan beragama Islam, serta **melarang keras Raja dan Menteri menyerahkan negeri Johor kepada mana-mana kuasa asing**!',
            zh: '1895年4月14日《柔佛政府宪法》（Undang-Undang Tubuh Kerajaan Johor）：苏丹阿布峇卡颁布马来亚史上第一部现代成文宪法，明文规定君主须为信奉伊斯兰教的马来人，并严禁君主与内阁大臣将柔佛寸土割让予任何外国势力！',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Hafal perbezaan istilah pentadbiran tempatan Bab 4.1: **Mukim & Penghulu + Terusan Wan Muhammad Saman** = **Kedah**; **Sistem Jemaah Menteri (8 badan) & Tok Kweng** = **Kelantan**; **Sistem Kangchu (Surat Sungai) & Undang-Undang Tubuh 1895** = **Johor**; **Raja Syed Hussin & Dato\' Arau** = **Perlis**!',
            zh: '⚠️ 考官配对题最爱：巫金+彭古鲁+大运河 = 吉打；八大内阁部+Tok Kweng = 吉兰丹；港主制度（港契种甘蜜黑胡椒）+1895宪法 = 柔佛；Raja Syed Hussin + Dato\' Arau = 玻璃市！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Sistem Pentadbiran Tradisional & Pembaharuan di Perlis, Kedah, Kelantan, Terengganu dan Johor',
        titleZh: '玻璃市、吉打、吉兰丹、登嘉楼与柔佛五州本土统治与革新总对照表',
        headers: [
          { bm: 'Kesultanan & Pusat Pentadbiran', zh: '王朝与行政中心' },
          { bm: 'Pemerintah Utama', zh: '关键统治者' },
          { bm: 'Struktur Pentadbiran & Pembesar', zh: '行政架构与地方官职' },
          { bm: 'Perundangan & Keistimewaan Ekonomi', zh: '法典宪法与经济外交特色' },
        ],
        rows: [
          [
            { bm: '**Perlis** (**Arau**)', zh: '玻璃市（亚娄 Arau）' },
            { bm: '**Raja Syed Hussin Jamalullail** (1843)', zh: '拉惹赛胡先（1843年获暹罗承认）' },
            {
              bm: 'Raja dibantu pembesar tempatan; **Dato\' Arau** dilantik sebagai **Perdana Menteri**.',
              zh: '由本地大臣辅政，委任拿督亚娄（Dato\' Arau）为首相。',
            },
            {
              bm: 'Berasaskan **undang-undang Islam**; hubungan diplomatik baik dengan Siam menjamin keselamatan.',
              zh: '施行伊斯兰教法；与暹罗保持友好外交免遭外敌干预。',
            },
          ],
          [
            { bm: '**Kedah** (**Kota Setar**)', zh: '吉打（哥打士打 Kota Setar）' },
            { bm: 'Sultan Kedah *(dibantu **Dato\' Wan Muhammad Saman**)*', zh: '吉打苏丹（首相旺慕哈末沙曼辅佐）' },
            {
              bm: 'Jawatan **Perdana Menteri**; wilayah dibahagikan kepada **128 mukim** diketuai **Penghulu**.',
              zh: '设首相职；全州划分为128个巫金（mukim），由彭古鲁（Penghulu）管辖。',
            },
            {
              bm: '**Kanun Undang-Undang Kedah (1650)**; pembinaan **Terusan Wan Muhammad Saman** memajukan tanaman padi.',
              zh: '1650年《吉打法典》；开凿旺慕哈末沙曼运河成就稻米之乡。',
            },
          ],
          [
            { bm: '**Kelantan** (**Kota Bharu**)', zh: '吉兰丹（哥打峇鲁 Kota Bharu）' },
            { bm: '**Sultan Muhammad I** & **Sultan Muhammad II**', zh: '苏丹慕哈末一世与苏丹慕哈末二世' },
            {
              bm: '**Sistem Jemaah Menteri** (8 badan Jemaah Menteri); peringkat jajahan/kampung ditadbir **Tok Kweng (Penggawa)** & Imam.',
              zh: '创立“八大内阁部”（Sistem Jemaah Menteri）；地方辖区由 Tok Kweng（Penggawa）管理。',
            },
            {
              bm: 'Pelaksanaan tegas **hukum syarak**; hubungan diplomatik dengan Siam (*bunga emas*) & perdagangan makmur.',
              zh: '严行伊斯兰教法；对暹友好外交，成为东海岸繁荣商贸中心。',
            },
          ],
          [
            { bm: '**Terengganu** (**Kuala Terengganu**)', zh: '登嘉楼（瓜拉登嘉楼）' },
            {
              bm: '**Sultan Zainal Abidin I**, **Baginda Omar**, & **Sultan Zainal Abidin III**',
              zh: '苏丹再纳阿比丁一世、巴金达奥玛及苏丹再纳阿比丁三世',
            },
            {
              bm: 'Dibantu **Dewan Pangkuan Diraja / Jemaah Mesyuarat Kerajaan** serta pegawai **Dato\' Mata-mata**.',
              zh: '由御前咨询理事会大臣辅政，设 Dato\' Mata-mata 负责礼宾与治安。',
            },
            {
              bm: 'Kehakiman berasaskan **hukum syarak** (mahkamah syariah); kemudian digubal *Itqan al-Muluk* (1911).',
              zh: '司法依循伊斯兰教法；重视宗教教育与手工业出口贸易。',
            },
          ],
          [
            { bm: '**Johor** (**Iskandar Puteri -> Johor Bahru**)', zh: '柔佛（依斯干达布蒂里 -> 新山）' },
            {
              bm: '**Temenggung Daeng Ibrahim** & **Sultan Abu Bakar** (*Bapa Pemodenan Johor*)',
              zh: '天猛公达因依布拉欣与“柔佛现代化之父”苏丹阿布峇卡',
            },
            {
              bm: 'Penubuhan **Jemaah Menteri**, **Majlis Negeri**, dan jabatan-jabatan moden (dibantu Dato\' Jaafar & Dato\' Abdul Rahman Andak).',
              zh: '设立内阁部、州议会及西式现代化行政局署，重用干练马来大臣。',
            },
            {
              bm: '**Sistem Kangchu** (**Surat Sungai** — lada hitam & gambir) serta **Undang-Undang Tubuh Kerajaan Johor (1895)**.',
              zh: '推行港主制度（港契种植甘蜜与黑胡椒），并颁布1895年《柔佛政府宪法》。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Dato\' Wan Muhammad Saman',
        roleBm: 'Perdana Menteri Kedah',
        roleZh: '吉打首任首相',
        emoji: '🌾',
        lineBm:
          'Dengan terbinanya **Terusan Wan Muhammad Saman** sepanjang 36 kilometer dan kerjasama **Penghulu** di **128 mukim**, hasil padi **Kedah** melimpah-ruah sehingga tiada alasan kuasa luar mengganggu Kota Setar!',
        lineZh:
          '随着36公里长的运河竣工，加上全州128个巫金区长（Penghulu）通力合作，吉打稻米丰收富足，外国势力休想找借口干预哥打士打！',
      },
      {
        speakerBm: 'Sultan Muhammad II',
        roleBm: 'Sultan Kelantan',
        roleZh: '吉兰丹苏丹慕哈末二世',
        emoji: '⚖️',
        lineBm:
          'Di **Kota Bharu**, beta menubuhkan **lapan badan Jemaah Menteri** untuk menguruskan keadilan, perbendaharaan, dan hal ehwal luar, manakala **Tok Kweng** menjaga keamanan setiap jajahan mengikut **hukum syarak**!',
        lineZh:
          '在哥打峇鲁，朕设立了八大内阁部（Jemaah Menteri）专门分管司法、国库与外交，地方辖区则由督光（Tok Kweng）依伊斯兰教法守护治安！',
      },
      {
        speakerBm: 'Temenggung Daeng Ibrahim',
        roleBm: 'Pemerintah Johor di Tanjung Puteri',
        roleZh: '柔佛统治者天猛公达因依布拉欣',
        emoji: '📜',
        lineBm:
          'Melalui **Sistem Kangchu**, kerajaan mengeluarkan **Surat Sungai** kepada tauke Cina untuk membuka ladang **lada hitam dan gambir** di tebing sungai — hasilnya memakmurkan perbendaharaan Johor!',
        lineZh:
          '透过“港主制度”（Sistem Kangchu），政府签发“港契”（Surat Sungai）给华人港主在沿河开辟黑胡椒与甘蜜园丘——滚滚税收让柔佛国库充盈！',
      },
      {
        speakerBm: 'Sultan Abu Bakar',
        roleBm: 'Sultan Johor (Bapa Pemodenan Johor)',
        roleZh: '柔佛现代化之父苏丹阿布峇卡',
        emoji: '👑',
        lineBm:
          'Pada tahun **1895**, beta mengisytiharkan **Undang-Undang Tubuh Kerajaan Johor**! Ingatlah pesanan perlembagaan ini: sesekali jangan ada Raja atau Menteri yang menyerahkan negeri Johor kepada kuasa asing!',
        lineZh:
          '1895年，朕正式颁布《柔佛政府宪法》！牢记这部宪法的铁律：绝不允许任何君主或内阁大臣把柔佛主权割让给外国势力！',
      },
    ],
    memoryHackBm:
      'Formula Ingat Pantas **4.1**: **Perlis** = **Syed Hussin + Arau**. **Kedah** = **Wan Muhammad Saman + 128 Mukim (Penghulu) + Kanun 1650**. **Kelantan** = **Sultan Muhammad II + 8 Jemaah Menteri + Tok Kweng**. **Terengganu** = **Zainal Abidin I & III + Baginda Omar + Dewan Pangkuan Diraja**. **Johor** = **Temenggung Ibrahim (Sistem Kangchu: Lada Hitam & Gambir) + Sultan Abu Bakar (Undang-Undang Tubuh 1895)**!',
    memoryHackZh:
      '💡 王牌名师神记忆口诀（4.1）：【五州王牌特色秒记】玻璃市 = **Syed Hussin 定都 Arau**；吉打 = **Wan Muhammad Saman 挖运河 + Penghulu 管巫金**；吉兰丹 = **Sultan Muhammad II 创 8 大内阁部 + Tok Kweng**；登嘉楼 = **Zainal Abidin 严行伊斯兰法**；柔佛父子档 = 爸 **Temenggung Ibrahim 搞港主制（Surat Sungai 种甘蜜黑胡椒）**，儿 **Sultan Abu Bakar 立1895宪法**！',
    subtopicMcqs: [
      {
        id: '4.1-mcq-1',
        spCode: '7.4.1',
        questionBm:
          'Siapakah pemerintah **Kesultanan Kelantan** yang telah memperkenalkan **Sistem Jemaah Menteri** yang terdiri daripada lapan buah badan pentadbiran khusus?',
        questionZh: '哪位吉兰丹苏丹创立了由八个专门行政机构组成的“内阁部长制度”（Sistem Jemaah Menteri）？',
        options: [
          {
            id: 'A',
            textBm: '**Sultan Zainal Abidin I**',
            textZh: '苏丹再纳阿比丁一世',
          },
          {
            id: 'B',
            textBm: '**Sultan Muhammad II**',
            textZh: '苏丹慕哈末二世（Sultan Muhammad II）',
          },
          {
            id: 'C',
            textBm: '**Raja Syed Hussin Jamalullail**',
            textZh: '拉惹赛胡先',
          },
          {
            id: 'D',
            textBm: '**Baginda Omar**',
            textZh: '巴金达奥玛',
          },
        ],
        correctId: 'B',
        explanationBm:
          '**Sultan Muhammad II** (1837–1886) telah memantapkan pentadbiran Kelantan di Kota Bharu dengan memperkenalkan **Sistem Jemaah Menteri** yang mengandungi lapan buah badan Jemaah Menteri.',
        explanationZh:
          '正确是 B！吉兰丹苏丹慕哈末二世创立了著名的“八大内阁部”（Sistem Jemaah Menteri），并委任 Tok Kweng 管理地方辖区。',
      },
      {
        id: '4.1-mcq-2',
        spCode: '7.4.1',
        questionBm:
          'Apakah tujuan utama **Temenggung Daeng Ibrahim** memperkenalkan **Sistem Kangchu** dan mengeluarkan **Surat Sungai** di negeri **Johor**?',
        questionZh: '天猛公达因依布拉欣在柔佛推行“港主制度”（Sistem Kangchu）并颁发“港契”（Surat Sungai）的主要目的是什么？',
        options: [
          {
            id: 'A',
            textBm: 'Menggalakkan pelombong Cina membuka lombong emas di Raub',
            textZh: '鼓励华裔矿工在劳勿开辟金矿',
          },
          {
            id: 'B',
            textBm: 'Memajukan perusahaan tanaman **lada hitam dan gambir** oleh pengusaha Cina di sepanjang tebing sungai',
            textZh: '推动华人港主在沿河两岸发展黑胡椒（lada hitam）与甘蜜（gambir）种植业',
          },
          {
            id: 'C',
            textBm: 'Mengutip cukai bijih timah daripada kapal dagang di Sungai Linggi',
            textZh: '向航经宁宜河的锡米商船征税',
          },
          {
            id: 'D',
            textBm: 'Membina terusan pengairan sawah padi sepanjang 36 kilometer',
            textZh: '修建长达36公里的稻田灌溉运河',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Melalui **Sistem Kangchu**, **Temenggung Daeng Ibrahim** mengeluarkan **Surat Sungai** (kebenaran menetap dan bercucuk tanam) kepada orang Cina (**Kangchu**) untuk mengusahakan ladang **lada hitam dan gambir** yang memakmurkan ekonomi Johor.',
        explanationZh:
          '正确是 B！港主制度（Sistem Kangchu）的核心作物就是“黑胡椒与甘蜜”（lada hitam dan gambir），港主凭港契（Surat Sungai）沿河开垦并向柔佛政府缴税。',
      },
      {
        id: '4.1-mcq-3',
        spCode: '7.4.1',
        questionBm:
          'Di negeri manakah pembesar wilayah peringkat jajahan atau kampung digelar sebagai **Tok Kweng** (atau **Penggawa**)?',
        questionZh: '在哪个马来州属中，管理地方辖区或村落的基层领袖被称为“督光”（Tok Kweng / Penggawa）？',
        options: [
          {
            id: 'A',
            textBm: '**Perlis**',
            textZh: '玻璃市',
          },
          {
            id: 'B',
            textBm: '**Kedah**',
            textZh: '吉打',
          },
          {
            id: 'C',
            textBm: '**Kelantan**',
            textZh: '吉兰丹',
          },
          {
            id: 'D',
            textBm: '**Johor**',
            textZh: '柔佛',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Dalam pentadbiran **Kesultanan Kelantan**, wilayah dibahagikan kepada jajahan dan kampung yang ditadbir oleh ketua bergelar **Tok Kweng** (atau **Penggawa**) bersama Imam.',
        explanationZh:
          '正确是 C！Tok Kweng（又称 Penggawa）是吉兰丹独有的地方行政长官称谓；吉打的巫金长官则称为 Penghulu。',
      },
      {
        id: '4.1-mcq-4',
        spCode: '7.4.1',
        questionBm:
          'Pada tahun **1843**, Maharaja Siam telah mengiktiraf **Syed Hussin Jamalullail** sebagai pemerintah pertama **Perlis** yang berpusat di...',
        questionZh: '1843年，暹罗国王承认赛胡先·贾马鲁莱尔为玻璃市首任统治者，其行政中心设于何处？',
        options: [
          {
            id: 'A',
            textBm: '**Arau**',
            textZh: '亚娄（Arau）',
          },
          {
            id: 'B',
            textBm: 'Kota Setar',
            textZh: '哥打士打',
          },
          {
            id: 'C',
            textBm: 'Iskandar Puteri',
            textZh: '依斯干达布蒂里',
          },
          {
            id: 'D',
            textBm: 'Kuala Terengganu',
            textZh: '瓜拉登嘉楼',
          },
        ],
        correctId: 'A',
        explanationBm:
          '**Raja Syed Hussin Jamalullail** menjadikan **Arau** sebagai pusat pentadbiran diraja Kesultanan Perlis dan melantik **Dato\' Arau** sebagai Perdana Menteri.',
        explanationZh:
          '正确是 A！玻璃市王城设于亚娄（Arau），并任命 Dato\' Arau 为首相协助治理。',
      },
      {
        id: '4.1-mcq-5',
        spCode: 'K7.4.5',
        questionBm:
          'Mengapakah penggubalan **Undang-Undang Tubuh Kerajaan Johor** oleh **Sultan Abu Bakar** pada **14 April 1895** dianggap sangat penting dalam sejarah kedaulatan Tanah Melayu?',
        questionZh: '为何苏丹阿布峇卡于1895年4月14日颁布《柔佛政府宪法》在马来亚主权史上具有极其重大的意义？',
        options: [
          {
            id: 'A',
            textBm: 'Menyerahkan pentadbiran kewangan Johor kepada Gabenor Negeri-negeri Selat',
            textZh: '将柔佛财政管理权移交给海峡殖民地总督',
          },
          {
            id: 'B',
            textBm: 'Merupakan **perlembagaan bertulis pertama** yang memodenkan pentadbiran serta menghalang penyerahan negeri kepada kuasa asing',
            textZh: '它是马来亚第一部成文宪法，奠定现代立宪政体并明文禁止将州属割让给外国势力',
          },
          {
            id: 'C',
            textBm: 'Menggabungkan Johor ke dalam Negeri-negeri Melayu Bersekutu di Kuala Lumpur',
            textZh: '将柔佛并入吉隆坡的马来联邦',
          },
          {
            id: 'D',
            textBm: 'Mewajibkan penghantaran bunga emas ke Bangkok setiap tiga tahun',
            textZh: '规定每三年必须向曼谷进贡金花',
          },
        ],
        correctId: 'B',
        explanationBm:
          '**Undang-Undang Tubuh Kerajaan Johor 1895** ialah perlembagaan bertulis moden pertama yang membentuk kerajaan bercorak demokrasi berparlimen/raja berperlembagaan serta melarang Raja dan Menteri menyerahkan negeri kepada kuasa asing, sekali gus melambatkan campur tangan British.',
        explanationZh:
          '正确是 B！这部1895年成文宪法不仅规范了君主立宪与内阁运作，更以宪法铁律严禁割让国土，成功令英国长达数十年无隙可乘！',
      },
    ],
    strukturQuestion: {
      id: '4.1-struktur-1',
      spCode: '7.4.1',
      stimulusBm:
        'Sebelum peluasan kuasa British, **Kesultanan Perlis, Kedah, Kelantan, Terengganu, dan Johor** telah mempunyai sistem pentadbiran dan perundangan sendiri yang teratur serta berwibawa.',
      stimulusZh:
        '在英国势力扩张之前，玻璃市、吉打、吉兰丹、登嘉楼与柔佛苏丹王朝早已拥有井然有序且具威望的自主行政与法律制度。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Nyatakan bentuk pentadbiran yang diperkenalkan oleh **Sultan Muhammad II** di **Kelantan** serta namakan gelaran ketua pentadbir peringkat jajahan/kampung di negeri tersebut. [3 markah]',
          questionZh: '写出苏丹慕哈末二世在吉兰丹推行的行政制度名称，并写出该州地方辖区/村落行政首长的职衔。[3分]',
          expectedKeywordsBm: [
            'Sistem Jemaah Menteri',
            'lapan badan Jemaah Menteri',
            'Tok Kweng',
            'Penggawa',
          ],
          modelAnswerBm:
            '**Sultan Muhammad II** telah memperkenalkan **Sistem Jemaah Menteri** yang terdiri daripada **lapan buah badan Jemaah Menteri** bagi menguruskan pentadbiran negeri secara khusus. Ketua pentadbir peringkat jajahan atau kampung di Kelantan pula digelar **Tok Kweng** (atau **Penggawa**).',
          modelAnswerZh:
            '苏丹慕哈末二世推行了由八个专门内阁机构组成的“内阁部长制度”（Sistem Jemaah Menteri）；吉兰丹地方辖区或村落的基层首长则称为“督光”（Tok Kweng 或 Penggawa）。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Jelaskan usaha pemodenan ekonomi dan perundangan yang dilaksanakan oleh pemerintah **Kesultanan Johor** pada abad ke-19. [3 markah]',
          questionZh: '说明19世纪柔佛苏丹王朝统治者在经济与法律方面所推行的现代化举措。[3分]',
          expectedKeywordsBm: [
            'Temenggung Daeng Ibrahim',
            'Sistem Kangchu',
            'Surat Sungai',
            'lada hitam dan gambir',
            'Sultan Abu Bakar',
            'Undang-Undang Tubuh Kerajaan Johor 1895',
          ],
          modelAnswerBm:
            'Dalam bidang ekonomi, **Temenggung Daeng Ibrahim** memperkenalkan **Sistem Kangchu** dengan mengeluarkan **Surat Sungai** kepada pengusaha Cina untuk memajukan tanaman **lada hitam dan gambir**. Dalam bidang pentadbiran dan perundangan, **Sultan Abu Bakar** menubuhkan **Jemaah Menteri** dan **Majlis Negeri** serta menggubal **Undang-Undang Tubuh Kerajaan Johor pada tahun 1895** bagi menghalang penyerahan negeri kepada kuasa asing.',
          modelAnswerZh:
            '在经济方面，天猛公达因依布拉欣推行“港主制度”（Sistem Kangchu），签发“港契”（Surat Sungai）给华人业者发展黑胡椒与甘蜜种植业。在行政与法律方面，苏丹阿布峇卡设立内阁部与州议会，并于1895年颁布《柔佛政府宪法》以防止国家主权落入外国手中。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Bagaimanakah pentadbiran yang cekap dan pematuhan kepada Perlembagaan dapat menjamin kestabilan serta kedaulatan negara kita pada hari ini? [4 markah]',
          questionZh: '高效的行政管理与对宪法的严格遵守，如何保障我国今日的稳定与主权？[4分]',
          expectedKeywordsBm: [
            'undang-undang tertinggi',
            'panduan pentadbiran jelas',
            'mengelakkan salah guna kuasa',
            'kemajuan ekonomi',
            'kepercayaan pelabur dan rakyat',
          ],
          modelAnswerBm:
            'Perlembagaan berfungsi sebagai **undang-undang tertinggi negara** yang memberikan **panduan pentadbiran yang jelas** serta menetapkan bidang kuasa pemimpin bagi **mengelakkan penyalahgunaan kuasa dan rasuah**. Pentadbiran yang cekap pula melancarkan penyampaian perkhidmatan awam dan memacu **kemajuan ekonomi negara**. Hasilnya, keamanan dalam negeri terpelihara, **kepercayaan rakyat semakin kukuh**, dan kuasa luar tidak mempunyai sebarang ruang untuk mencampuri urusan kedaulatan negara kita.',
          modelAnswerZh:
            '【Fakta】宪法作为国家最高法律，提供了明确的施政准则并界定领导层权限，【Huraian】有效防止滥权与贪污腐败；高效的公共行政则能顺畅服务人民并推动国家经济腾飞。【Contoh】各部门依法廉洁施政可维护社会和谐与治安，【Inferens】从而增强人民信任，令外来势力没有任何借口干涉我国主权。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 4.2: PELUASAN KUASA BRITISH DI PERLIS, KEDAH, KELANTAN DAN TERENGGANU
  // ============================================================================
  {
    subtopicCode: '4.2',
    babNumber: 4,
    babTitleBm: 'Pentadbiran Negeri-negeri Melayu Tidak Bersekutu',
    babTitleZh: '马来属邦的行政管理',
    skCode: '7.4',
    spCodes: ['7.4.2', 'K7.4.6'],
    titleBm: 'Peluasan Kuasa British di Perlis, Kedah, Kelantan dan Terengganu',
    titleZh: '英国在玻璃市、吉打、吉兰丹与登嘉楼的势力扩张',
    heroImages: [
      {
        imageKey: 'bab4_nnmtb_johor',
        captionBm:
          'Peluasan kuasa British ke atas **Negeri-negeri Melayu Utara (Perlis, Kedah, Kelantan, dan Terengganu)** dimuktamadkan melalui **Perjanjian Bangkok pada 10 Mac 1909** antara British dengan Siam.',
        captionZh:
          '透过英国与暹罗于1909年3月10日签署的《曼谷条约》，英国正式将势力扩张至马来半岛北部四邦（玻璃市、吉打、吉兰丹与登嘉楼）。',
        hotspots: [
          {
            x: 26,
            y: 34,
            termBm: 'Menghalang Kuasa Barat Lain',
            meaningZh: '阻止法、德、美、俄染指北马',
            detailBm:
              'British bimbang kemaraan **Perancis** (Segenting Kra), **Jerman** (Pulau Langkawi), **Amerika Syarikat** (Terengganu/Pulau Redang), dan **Rusia** (Ujung Salang).',
            detailZh:
              '英国深怕法国（克拉地峡）、德国（浮罗交怡）、美国（登嘉楼热浪岛）及俄国（普吉岛 Ujung Salang）抢先在北马立足。',
          },
          {
            x: 54,
            y: 44,
            termBm: 'Perjanjian Bangkok (10 Mac 1909)',
            meaningZh: '1909年3月10日《曼谷条约》',
            detailBm:
              'Siam menyerahkan hak naungan, perlindungan, pentadbiran, dan kawalan ke atas **Perlis, Kedah, Kelantan, dan Terengganu** kepada British **tanpa berunding dengan Raja-raja Melayu**!',
            detailZh:
              '暹罗在完全没有征询马来统治者同意的情况下，擅自把玻璃市、吉打、吉兰丹与登嘉楼四州的宗主与管辖权移交给英国！',
          },
          {
            x: 78,
            y: 52,
            termBm: 'Hak Wilayah Asingan',
            meaningZh: '英国放弃在暹罗的“治外法权”作为交换',
            detailBm:
              'Sebagai balasan kepada Siam, British menyerahkan semula **Hak Wilayah Asingan (*Extraterritoriality*)** di Siam supaya warga British diadili mengikut mahkamah Siam.',
            detailZh:
              '作为换取北马四州的筹码，英国同意放弃在暹罗享有的“治外法权”（Hak Wilayah Asingan），让在暹英籍人士受暹罗法庭审判。',
          },
          {
            x: 42,
            y: 74,
            termBm: 'Sempadan Sungai Golok',
            meaningZh: '划定哥乐河国际边界',
            detailBm:
              'Perjanjian Bangkok menetapkan **Sungai Golok** sebagai sempadan antarabangsa memisahkan Kelantan (British) daripada wilayah Patani/Narathiwat (Siam).',
            detailZh:
              '《曼谷条约》划定哥乐河（Sungai Golok）为国际边界，将吉兰丹与暹罗统治下的北大年等马来地区永久分隔。',
          },
        ],
      },
      {
        imageKey: 'bab4_kedah_terusan',
        captionBm:
          'Kemakmuran hasil **pertanian padi** dan **penternakan** di **Kedah** dan **Perlis** menjadikannya pembekal sumber makanan utama yang amat diperlukan oleh Pulau Pinang dan NNMB.',
        captionZh:
          '吉打与玻璃市丰饶的稻米与畜牧业，使其成为供应槟城及马来联邦矿工粮食的重要粮仓，引来英国觊觎。',
      },
    ],
    sections: [
      {
        sectionCode: '4.2(a)',
        headingBm: 'Faktor Peluasan Kuasa British ke Negeri-negeri Melayu Utara (NNMU)',
        headingZh: '英国向北马四邦（Perlis, Kedah, Kelantan, Terengganu）扩张的四大因素',
        leadParagraphBm:
          'Menjelang akhir abad ke-19 dan awal abad ke-20, zaman imperialisme baharu menyaksikan persaingan sengit kuasa-kuasa Barat mencari tanah jajahan. British merasakan perlu menguasai **Perlis, Kedah, Kelantan, dan Terengganu** sebagai penampan keselamatan dan ekonomi empayarnya.',
        leadParagraphZh:
          '19世纪末至20世纪初的新帝国主义浪潮中，西方列强争相瓜分殖民地。英国认为必须掌控玻璃市、吉打、吉兰丹与登嘉楼北马四邦，以筑起守护大英帝国商业与国防的缓冲屏障。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**1. Kedudukan yang Strategik**: Perlis, Kedah, Kelantan, dan Terengganu terletak di **laluan perdagangan di antara India dan China** (menghadap Selat Melaka dan Laut China Selatan), penting bagi menjamin keselamatan perdagangan Negeri-negeri Selat dan NNMB.',
            zh: '因素一：地理位置极具战略价值——北马四邦扼守印度与中国之间的海上贸易航道（分据马六甲海峡与南中国海两岸），对保卫海峡殖民地与马来联邦至关重要。',
          },
          {
            tag: 'CONTOH',
            bm: '**2. Menghalang Kemasukan Kuasa Barat Lain** *(Wajib Hafal 4 Kuasa!)*: British bimbang kemaraan kuasa imperialis pesaing iaitu: **(a) Perancis** yang berminat meluaskan kuasa ke Lembah Menam Chao Phraya dan merancang membina **terusan di Segenting Kra** (mengancam pelabuhan Singapura); **(b) Jerman** yang berusaha mendapatkan **Pulau Langkawi**; **(c) Amerika Syarikat** yang berhasrat bertapak di **Terengganu (Pulau Redang)**; dan **(d) Rusia** yang mahu membuka petempatan / pangkalan arang batu di **Ujung Salang**.',
            zh: '因素二：阻止其他西方列强介入（必背四国对应地点！）：（a）法国企图染指湄南河流域并计划开凿“克拉地峡运河”（Segenting Kra，将严重威胁新加坡海港地位）；（b）德国企图夺取浮罗交怡（Pulau Langkawi）；（c）美国企图立足登嘉楼热浪岛（Pulau Redang / Terengganu）；（d）俄国企图在普吉岛（Ujung Salang）建立据点与煤站！',
          },
          {
            tag: 'FAKTA',
            bm: '**3. Kemakmuran dan Kekayaan Sumber Hasil**: **Kedah dan Perlis** kaya dengan hasil **pertanian (padi)** dan **penternakan (lembu dan kerbau)** sebagai **pembekal sumber makanan utama** kepada penduduk Pulau Pinang serta pekerja lombong/ladang di NNMB, manakala **Kelantan dan Terengganu** menjadi pusat pembuatan kapal, pertukangan, dan barang dagangan eksport.',
            zh: '因素三：物产富饶与粮食供应——吉打与玻璃市盛产稻米及牛水牛畜牧业，是供应槟城和马来联邦庞大人口的主要粮仓；吉兰丹与登嘉楼则以造船业、手工业与出口商品繁荣著称。',
          },
          {
            tag: 'FAKTA',
            bm: '**4. Menghubungkan Burma dengan Pulau Pinang (Tanah Melayu)**: British berhasrat membina rangkaian **jalan kereta api** dan **talian telegraf** yang menghubungkan tanah jajahannya di **Burma** terus dengan **Pulau Pinang** dan Tanah Melayu bagi memudahkan perhubungan dan pertahanan.',
            zh: '因素四：连接缅甸与槟城（马来亚）——英国计划修建贯穿北马的铁路网与电报线，将英属缅甸（Burma）与槟城直接连通，强化帝国通讯与军事调度。',
          },
        ],
      },
      {
        sectionCode: '4.2(b)',
        headingBm: 'Rentetan Perjanjian British–Siam ke Arah Perjanjian Bangkok 1909',
        headingZh: '从1826年至1909年《曼谷条约》的英暹条约进程',
        leadParagraphBm:
          'Memandangkan Siam mendakwa mempunyai hak pertuanan ke atas Perlis, Kedah, Kelantan, dan Terengganu, British memilih **strategi perundingan dan perjanjian berperingkat dengan Siam** bagi mengelakkan peperangan sehinggalah termeterainya **Perjanjian Bangkok pada 10 Mac 1909**.',
        leadParagraphZh:
          '由于暹罗声称对北马四邦拥有宗主权，英国避免正面开战，改采与暹罗“分阶段签署外交条约”的蚕食策略，最终在1909年3月10日达成《曼谷条约》。',
        diagramKey: 'diag_4_2_perjanjian_bangkok',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**1. Perjanjian Burney 1826**: British mengiktiraf pengaruh Siam di Kedah, manakala British dibenarkan berdagang secara bebas di **Kelantan dan Terengganu** tanpa gangguan Siam.',
            zh: '第一阶段：1826年《伯尼条约》（Perjanjian Burney）——英国承认暹罗在吉打的影响力，换取英国商人在吉兰丹与登嘉楼自由贸易的权利。',
          },
          {
            tag: 'CONTOH',
            bm: '**2. Perjanjian Sulit Inggeris–Siam 1897 (6 April 1897)**: Ditandatangani secara rahsia bagi memastikan **Siam tidak menyerahkan atau memajakkan mana-mana wilayahnya di selatan** (termasuk NNMU) kepada kuasa Barat lain tanpa kebenaran British, manakala British mengiktiraf hak pertuanan Siam dan berjanji membantu Siam jika diserang.',
            zh: '第二阶段：1897年《英暹秘密条约》——秘密规定暹罗未经英国同意，绝不得将南部任何领土（含北马四邦）割让或租借给第三国列强；英国则承诺协助暹罗抵御外敌。',
          },
          {
            tag: 'CONTOH',
            bm: '**3. Perjanjian Sempadan Inggeris–Siam 1899 (29 November 1899)**: Menetapkan **sempadan rasmi** antara negeri Perak, Pahang, Kedah (termasuk isu wilayah Reman), Kelantan, dan Terengganu untuk memudahkan kawalan pentadbiran.',
            zh: '第三阶段：1899年《英暹边界条约》——正式划定霹雳、彭亨与吉打（含仁曼地区 Reman）、吉兰丹、登嘉楼之间的州属边界。',
          },
          {
            tag: 'CONTOH',
            bm: '**4. Perjanjian Pengisytiharan Inggeris–Siam 1902 (6 Oktober 1902)**: Siam melantik **pegawai berbangsa British** sebagai **Penasihat dan Penolong Penasihat kerajaan Siam** di **Kelantan** (**W.A. Graham**, 1903) dan **Terengganu** untuk mengawal hubungan luar (namun **Sultan Zainal Abidin III** di Terengganu enggan mengiktiraf perjanjian ini!).',
            zh: '第四阶段：1902年《英暹宣言条约》——暹罗同意聘请英籍官员担任暹罗驻吉兰丹（W.A. Graham）与登嘉楼顾问官以控制外交，但登嘉楼苏丹再纳阿比丁三世严词拒绝承认该条约！',
          },
          {
            tag: 'FAKTA',
            bm: '**5. Perjanjian Bangkok 1909 (10 Mac 1909)**: Ditandatangani di Bangkok antara wakil British (**Ralph Paget**) dengan wakil Siam (**Putera Devawongse Varoprakar**) **tanpa pengetahuan dan persetujuan Raja-raja Melayu**: **Siam menyerahkan segala hak naungan, perlindungan, pentadbiran, dan kawalan ke atas Perlis, Kedah, Kelantan, dan Terengganu kepada British**!',
            zh: '第五阶段（巅峰）：1909年3月10日《曼谷条约》（Perjanjian Bangkok 1909）——英方代表巴吉特（Ralph Paget）与暹罗代表德瓦旺亲王在曼谷秘密签约，完全背着四州马来统治者，将玻璃市、吉打、吉兰丹与登嘉楼的一切宗主、保护、行政与管辖权移交给英国！',
          },
          {
            tag: 'HURAIAN',
            bm: '**Balasan British kepada Siam dalam Perjanjian Bangkok 1909**: British menyerahkan semula **Hak Wilayah Asingan (*Extraterritoriality*)** di Siam kepada kerajaan Siam (rakyat British di Siam diadili mengikut perundangan mahkamah Siam), memberikan pinjaman pembinaan kereta api selatan Siam, serta mengambil alih / menghapuskan hutang kerajaan Kedah dan Kelantan kepada Siam.',
            zh: '《曼谷条约》中英国给暹罗的交换条件：英国放弃在暹罗享有的“治外法权”（Hak Wilayah Asingan，此后在暹英籍臣民须接受暹罗法院审判），向暹罗提供修建南部铁路贷款，并代为偿还/免除吉打等州拖欠暹罗的债务。',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Raja-raja Melayu di Perlis, Kedah, Kelantan, dan Terengganu **membantah keras Perjanjian Bangkok 1909** kerana penghantaran *bunga emas* ke Bangkok selama ini hanyalah **tanda persahabatan**, bukannya tanda jajahan yang membolehkan Siam menyerahkan kedaulatan negeri mereka sesuka hati!',
            zh: '⚠️ 历史核心立场：四州马来统治者强烈抗议1909年《曼谷条约》！因为进献“金花”（bunga emas）自古只是友好邦交象征，并非臣属殖民地，暹罗根本无权擅自出卖马来州属的主权！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm: 'Jadual 1: Persaingan Kuasa Barat Lain yang Cuba Bertapak di Negeri-negeri Melayu Utara',
        titleZh: '表一：企图染指北马地区的四大西方竞争列强对照表（必背高频考点）',
        headers: [
          { bm: 'Kuasa Barat Pesaing', zh: '西方竞争列强' },
          { bm: 'Sasaran Lokasi Strategik', zh: '觊觎目标地点' },
          { bm: 'Tujuan & Kebimbangan British', zh: '列强企图及英国的担忧' },
        ],
        rows: [
          [
            { bm: '**Perancis**', zh: '法国（Perancis）' },
            { bm: '**Segenting Kra** & Lembah Menam Chao Phraya', zh: '克拉地峡（Segenting Kra）与湄南河流域' },
            {
              bm: 'Merancang membina **terusan merentasi Segenting Kra** yang akan memendekkan pelayaran Timur–Barat dan mengancam kedudukan pelabuhan **Singapura**.',
              zh: '企图开凿横跨克拉地峡的运河，一旦通航船只无需绕道马六甲海峡，将重创新加坡自由港地位！',
            },
          ],
          [
            { bm: '**Jerman**', zh: '德国（Jerman）' },
            { bm: '**Pulau Langkawi** (Kedah)', zh: '吉打浮罗交怡岛（Pulau Langkawi）' },
            {
              bm: 'Berusaha mendapatkan **Pulau Langkawi** sebagai pangkalan bekalan arang batu dan tentera laut di utara Selat Melaka.',
              zh: '企图取得浮罗交怡岛作为海军基地与添煤站，直接威胁槟城与马六甲海峡北口。',
            },
          ],
          [
            { bm: '**Amerika Syarikat**', zh: '美国（Amerika Syarikat）' },
            { bm: '**Terengganu / Pulau Redang**', zh: '登嘉楼 / 热浪岛（Pulau Redang）' },
            {
              bm: 'Berhasrat bertapak dan meluaskan pengaruh perdagangan serta bekalan arang batu di perairan pantai timur (**Terengganu / Pulau Redang**).',
              zh: '企图在东海岸登嘉楼及热浪岛建立据点与煤站，介入南中国海航线。',
            },
          ],
          [
            { bm: '**Rusia**', zh: '俄国（Rusia）' },
            { bm: '**Ujung Salang** (Phuket)', zh: '乌绒沙朗 / 普吉岛（Ujung Salang）' },
            {
              bm: 'Berhasrat membuka petempatan dan pangkalan bekalan arang batu bagi armada laut Rusia di **Ujung Salang**.',
              zh: '企图在乌绒沙朗（今普吉岛）开辟殖民据点与舰队燃料补给站。',
            },
          ],
        ],
      },
      {
        titleBm: 'Jadual 2: Kronologi Rentetan Perjanjian British–Siam (1826–1909)',
        titleZh: '表二：英暹外交条约演进时间轴（1826年至1909年）',
        headers: [
          { bm: 'Perjanjian & Tahun', zh: '条约名称与年份' },
          { bm: 'Inti Pati & Kesan Utama', zh: '核心内容与历史影响' },
        ],
        rows: [
          [
            { bm: '**Perjanjian Burney 1826**', zh: '1826年《伯尼条约》' },
            {
              bm: 'British mengiktiraf kedudukan Siam di Kedah; Kelantan dan Terengganu bebas berdagang dengan British.',
              zh: '英国承认暹罗在吉打的地位；英国获准在吉兰丹与登嘉楼自由通商。',
            },
          ],
          [
            { bm: '**Perjanjian Sulit Inggeris–Siam 1897**', zh: '1897年《英暹秘密条约》' },
            {
              bm: 'Siam berjanji **tidak menyerahkan mana-mana wilayah selatan** kepada kuasa Barat lain tanpa persetujuan British.',
              zh: '暹罗承诺未经英国允许，绝不将南部任何领土割让或租借给其他西方列强。',
            },
          ],
          [
            { bm: '**Perjanjian Sempadan Inggeris–Siam 1899**', zh: '1899年《英暹边界条约》' },
            {
              bm: 'Menetapkan garis **sempadan rasmi** antara Perak, Pahang, Kedah (Reman), Kelantan, dan Terengganu.',
              zh: '划定霹雳、彭亨与吉打（仁曼）、吉兰丹、登嘉楼之间的正式边界。',
            },
          ],
          [
            { bm: '**Perjanjian Pengisytiharan 1902**', zh: '1902年《英暹宣言条约》' },
            {
              bm: 'Siam melantik **pegawai berbangsa British** sebagai Penasihat kerajaan Siam di Kelantan dan Terengganu *(ditolak oleh Terengganu)*.',
              zh: '暹罗委任英籍官员担任驻吉兰丹与登嘉楼顾问以控制外交（遭登嘉楼苏丹拒绝）。',
            },
          ],
          [
            { bm: '**Perjanjian Bangkok (10 Mac 1909)**', zh: '1909年3月10日《曼谷条约》' },
            {
              bm: 'Siam menyerahkan hak naungan ke atas **Perlis, Kedah, Kelantan, dan Terengganu** kepada British; British menyerahkan **Hak Wilayah Asingan** di Siam kepada kerajaan Siam.',
              zh: '暹罗将玻璃市、吉打、吉兰丹与登嘉楼四州移交给英国；英国放弃在暹罗的“治外法权”作为交换。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Ralph Paget',
        roleBm: 'Wakil Kerajaan British di Bangkok (1909)',
        roleZh: '驻曼谷英国公使（1909年）',
        emoji: '🎩',
        lineBm:
          'Putera Devawongse, jika **Perancis** menggali terusan di **Segenting Kra** dan **Jerman** mengambil **Pulau Langkawi**, kita berdua rugi! Serahkan **Perlis, Kedah, Kelantan, dan Terengganu** kepada British, dan kami pulangkan **Hak Wilayah Asingan** kepada Siam!',
        lineZh:
          '德瓦旺亲王，要是让法国挖通克拉地峡运河、德国占领浮罗交怡，咱们双方都吃亏！把玻璃市、吉打、吉兰丹和登嘉楼交给英国吧，我们归还在暹罗的“治外法权”作为回报！',
      },
      {
        speakerBm: 'Putera Devawongse Varoprakar',
        roleBm: 'Menteri Luar Siam',
        roleZh: '暹罗外交大臣',
        emoji: '✍️',
        lineBm:
          'Setuju! Dengan termeterainya **Perjanjian Bangkok pada 10 Mac 1909** ini, rakyat British di Siam tertakluk kepada mahkamah Siam semula dan British turut membiayai pinjaman kereta api selatan kami.',
        lineZh:
          '成交！签下这份1909年3月10日《曼谷条约》，今后在暹罗的英籍臣民须重新受暹罗法院管辖，英国还贷款帮我们修建南部铁路。',
      },
      {
        speakerBm: 'Sultan Abdul Hamid Halim Shah',
        roleBm: 'Sultan Kedah',
        roleZh: '吉打苏丹阿都哈密',
        emoji: '😠',
        lineBm:
          'Beta amat murka! Negeri **Kedah** mempunyai kedaulatan sendiri dan bukannya barang dagangan untuk dijual beli antara Siam dengan British tanpa pengetahuan beta!',
        lineZh:
          '朕震怒至极！吉打拥有独立主权，绝不是任由暹罗与英国背着朕私下买卖交易的商品！',
      },
      {
        speakerBm: 'Sultan Zainal Abidin III',
        roleBm: 'Sultan Terengganu',
        roleZh: '登嘉楼苏丹再纳阿比丁三世',
        emoji: '🛡️',
        lineBm:
          '**Terengganu** ialah negeri berdaulat! Penghantaran *bunga emas* ke Bangkok hanyalah tanda persahabatan — Siam tiada sebarang hak menyerahkan Terengganu kepada British melalui **Perjanjian Bangkok 1909**!',
        lineZh:
          '登嘉楼乃是主权独立之邦！送金花去曼谷纯粹是礼尚往来的友谊象征——暹罗根本无权透过1909年《曼谷条约》把登嘉楼拱手让人！',
      },
    ],
    memoryHackBm:
      'Formula Ingat Pantas **4.2**: **4 Kuasa Barat Pesaing** = **"Pe-Kra, Jer-Lang, Am-Ter, Ru-Sa"** (**Perancis -> Segenting Kra**, **Jerman -> Pulau Langkawi**, **Amerika Syarikat -> Terengganu/Redang**, **Rusia -> Ujung Salang**). **5 Perjanjian ke Bangkok** = **1826** (Burney) -> **1897** (Sulit) -> **1899** (Sempadan) -> **1902** (Pengisytiharan) -> **1909** (**Bangkok**: 4 Negeri tukar **Hak Wilayah Asingan**)!',
    memoryHackZh:
      '💡 王牌名师神记忆口诀（4.2）：【四国抢北马神口诀】**法挖克拉（Perancis - Segenting Kra）、德占交怡（Jerman - Langkawi）、美登热浪（AS - Terengganu/Redang）、俄驻普吉（Rusia - Ujung Salang）**！【五步条约吞北马】1826伯尼 -> 1897秘密 -> 1899边界 -> 1902宣言 -> **1909《曼谷条约》**（暹罗交出玻吉丹登四州，英国交回“治外法权” **Hak Wilayah Asingan**）！',
    subtopicMcqs: [
      {
        id: '4.2-mcq-1',
        spCode: '7.4.2',
        questionBm:
          'Mengapakah rancangan kuasa **Perancis** untuk membina sebuah terusan merentasi **Segenting Kra** sangat membimbangkan British?',
        questionZh: '为什么法国计划开凿横跨“克拉地峡”（Segenting Kra）运河的举动令英国极度担忧？',
        options: [
          {
            id: 'A',
            textBm: 'Akan menenggelamkan kawasan sawah padi di Kota Setar',
            textZh: '会淹没哥打士打的稻田产区',
          },
          {
            id: 'B',
            textBm: 'Akan mengancam kedudukan dan kemakmuran perdagangan pelabuhan **Singapura**',
            textZh: '将分流航线，严重威胁新加坡港口的贸易繁荣与战略地位',
          },
          {
            id: 'C',
            textBm: 'Akan menyebabkan lombong emas di Raub kehabisan bekalan air',
            textZh: '会导致劳勿金矿面临水源枯竭',
          },
          {
            id: 'D',
            textBm: 'Akan menghalang penghantaran bunga emas dari Johor ke Bangkok',
            textZh: '会阻碍柔佛向曼谷运送金花',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Sekiranya **Perancis** berjaya membina terusan di **Segenting Kra**, kapal dagang antara India dan China tidak lagi perlu melalui Selat Melaka, sekali gus menjejaskan kedudukan **Singapura** sebagai pelabuhan utama British.',
        explanationZh:
          '正确是 B！一旦法国凿通克拉地峡运河，东西方商船可直接穿越大洋而无需绕经马六甲海峡与新加坡，将重创英国在新加坡的核心商业利益。',
      },
      {
        id: '4.2-mcq-2',
        spCode: '7.4.2',
        questionBm:
          'Pasangan kuasa Barat dan lokasi strategik yang cuba dikuasai di Negeri-negeri Melayu Utara manakah yang **betul**?',
        questionZh: '下列哪组“西方列强”与“企图在北马染指的战略地点”配对是正确的？',
        options: [
          {
            id: 'A',
            textBm: '**Jerman** — **Pulau Langkawi**',
            textZh: '德国 — 浮罗交怡岛（Pulau Langkawi）',
          },
          {
            id: 'B',
            textBm: '**Rusia** — **Pulau Redang**',
            textZh: '俄国 — 热浪岛',
          },
          {
            id: 'C',
            textBm: '**Amerika Syarikat** — **Segenting Kra**',
            textZh: '美国 — 克拉地峡',
          },
          {
            id: 'D',
            textBm: '**Perancis** — **Ujung Salang**',
            textZh: '法国 — 乌绒沙朗（普吉岛）',
          },
        ],
        correctId: 'A',
        explanationBm:
          '**Jerman** berusaha mendapatkan **Pulau Langkawi**, **Perancis** di **Segenting Kra**, **Amerika Syarikat** di **Terengganu (Pulau Redang)**, manakala **Rusia** di **Ujung Salang**.',
        explanationZh:
          '正确是 A！牢记口诀：法—克拉地峡、德—浮罗交怡、美—登嘉楼/热浪岛、俄—Ujung Salang！',
      },
      {
        id: '4.2-mcq-3',
        spCode: '7.4.2',
        questionBm:
          'Apakah tujuan utama British menandatangani **Perjanjian Sulit Inggeris–Siam pada 6 April 1897**?',
        questionZh: '英国于1897年4月6日与暹罗签署《英暹秘密条约》的主要目的是什么？',
        options: [
          {
            id: 'A',
            textBm: 'Memindahkan pusat pentadbiran Siam dari Bangkok ke Kota Bharu',
            textZh: '将暹罗行政中心从曼谷迁往哥打峇鲁',
          },
          {
            id: 'B',
            textBm: 'Memastikan **Siam tidak menyerahkan mana-mana wilayah selatan** kepada kuasa Barat lain tanpa kebenaran British',
            textZh: '确保暹罗未经英国允许，不得将南部任何领土割让或租借给其他西方列强',
          },
          {
            id: 'C',
            textBm: 'Menetapkan Sungai Linggi sebagai sempadan antarabangsa British–Siam',
            textZh: '划定宁宜河为英暹国际边界',
          },
          {
            id: 'D',
            textBm: 'Melantik J.W.W. Birch sebagai Penasihat Kewangan di Bangkok',
            textZh: '委任毕治为驻曼谷财政顾问',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Melalui **Perjanjian Sulit Inggeris–Siam 1897**, Siam berjanji tidak akan menyerahkan atau memajakkan mana-mana wilayahnya di selatan kepada kuasa asing lain tanpa persetujuan kerajaan British.',
        explanationZh:
          '正确是 B！1897年秘密条约旨在封堵德国、法国等竞争对手向暹罗租借北马领土的后门。',
      },
      {
        id: '4.2-mcq-4',
        spCode: '7.4.2',
        questionBm:
          'Melalui **Perjanjian Bangkok (10 Mac 1909)**, apakah keistimewaan yang diserahkan semula oleh **British** kepada kerajaan **Siam** sebagai balasan penyerahan Perlis, Kedah, Kelantan, dan Terengganu?',
        questionZh: '透过1909年3月10日《曼谷条约》，英国向暹罗归还了什么特权，作为换取玻璃市、吉打、吉兰丹与登嘉楼四州的回报？',
        options: [
          {
            id: 'A',
            textBm: 'Hak memungut cukai bijih timah di Lembah Kinta',
            textZh: '在近打河流域征收锡矿税的权利',
          },
          {
            id: 'B',
            textBm: 'Pemilikan ke atas Pulau Pinang dan Seberang Perai',
            textZh: '槟城与威省的拥有权',
          },
          {
            id: 'C',
            textBm: '**Hak Wilayah Asingan (*Extraterritoriality*)** di Siam',
            textZh: '英国在暹罗享有的“治外法权”（Hak Wilayah Asingan）',
          },
          {
            id: 'D',
            textBm: 'Kawalan ke atas laluan perdagangan Terusan Suez',
            textZh: '苏伊士运河贸易航道的控制权',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Sebagai balasan Siam menyerahkan hak naungan ke atas Perlis, Kedah, Kelantan, dan Terengganu kepada British, kerajaan British menyerahkan semula **Hak Wilayah Asingan** yang dinikmati rakyat British di Siam kepada mahkamah kerajaan Siam.',
        explanationZh:
          '正确是 C！暹罗最渴望收回司法主权，因此英国同意放弃在暹罗的“治外法权”（Hak Wilayah Asingan），换取北马四州的控制权。',
      },
      {
        id: '4.2-mcq-5',
        spCode: 'K7.4.6',
        questionBm:
          'Mengapakah Raja-raja Melayu di Perlis, Kedah, Kelantan, dan Terengganu **membantah keras** pemeteraian **Perjanjian Bangkok 1909**?',
        questionZh: '为什么玻璃市、吉打、吉兰丹与登嘉楼的马来统治者强烈抗议1909年《曼谷条约》的签署？',
        options: [
          {
            id: 'A',
            textBm: 'Kerana perjanjian itu ditandatangani **tanpa berunding dengan Raja-raja Melayu** sedangkan negeri mereka berdaulat',
            textZh: '因为该条约在完全未征询马来统治者的情况下签署，侵犯了四州的独立主权',
          },
          {
            id: 'B',
            textBm: 'Kerana Raja-raja Melayu mahu bergabung di bawah pentadbiran Perancis',
            textZh: '因为马来统治者希望并入法国统治',
          },
          {
            id: 'C',
            textBm: 'Kerana British enggan membina jalan kereta api di pantai barat',
            textZh: '因为英国拒绝在西海岸修建铁路',
          },
          {
            id: 'D',
            textBm: 'Kerana Siam enggan menerima bunga emas daripada negeri Johor',
            textZh: '因为暹罗拒收来自柔佛的金花',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Raja-raja Melayu membantah keras kerana British dan Siam memeterai **Perjanjian Bangkok 1909** secara sepihak **tanpa pengetahuan dan persetujuan mereka**, sedangkan penghantaran *bunga emas* hanyalah tanda persahabatan dan bukannya tanda jajahan.',
        explanationZh:
          '正确是 A！英暹两国私相授受、完全无视本土统治者意愿，而进献金花仅代表友好邦交，暹罗无权转交四州主权。',
      },
    ],
    strukturQuestion: {
      id: '4.2-struktur-1',
      spCode: '7.4.2',
      stimulusBm:
        'Persaingan kuasa-kuasa Barat pada akhir abad ke-19 telah mendorong British merangka siri perjanjian dengan Siam sehingga termeterainya **Perjanjian Bangkok pada 10 Mac 1909** yang melibatkan negeri **Perlis, Kedah, Kelantan, dan Terengganu**.',
      stimulusZh:
        '19世纪末西方列强的激烈竞争促使英国与暹罗签署一系列条约，最终达成涉及玻璃市、吉打、吉兰丹与登嘉楼的1909年3月10日《曼谷条约》。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Namakan **tiga** kuasa Barat pesaing serta lokasi strategik yang cuba dikuasai oleh mereka sehingga membimbangkan British di Negeri-negeri Melayu Utara. [3 markah]',
          questionZh: '写出三个企图在北马地区争夺战略据点、从而引起英国担忧的西方竞争列强及其目标地点。[3分]',
          expectedKeywordsBm: [
            'Perancis',
            'Segenting Kra',
            'Jerman',
            'Pulau Langkawi',
            'Amerika Syarikat',
            'Terengganu',
            'Pulau Redang',
            'Rusia',
            'Ujung Salang',
          ],
          modelAnswerBm:
            'Tiga kuasa Barat tersebut ialah **Perancis** yang merancang membina terusan di **Segenting Kra**, **Jerman** yang berusaha mendapatkan **Pulau Langkawi**, dan **Amerika Syarikat** yang cuba bertapak di **Terengganu (Pulau Redang)** *(atau **Rusia** di **Ujung Salang**)*.',
          modelAnswerZh:
            '三个西方列强及其目标地点分别是：法国企图开凿克拉地峡（Segenting Kra）运河、德国企图夺取浮罗交怡岛（Pulau Langkawi），以及美国企图立足登嘉楼/热浪岛（或俄国企图立足乌绒沙朗 Ujung Salang）。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Terangkan syarat utama dan kesan **Perjanjian Bangkok 1909** terhadap negeri Perlis, Kedah, Kelantan, dan Terengganu serta kerajaan Siam. [3 markah]',
          questionZh: '阐述1909年《曼谷条约》的主要条款及其对玻璃市、吉打、吉兰丹、登嘉楼四州与暹罗政府的影响。[3分]',
          expectedKeywordsBm: [
            'Siam menyerahkan hak naungan',
            'Perlis, Kedah, Kelantan, dan Terengganu',
            'British menyerahkan Hak Wilayah Asingan',
            'Penasihat British',
            'Sungai Golok',
          ],
          modelAnswerBm:
            'Melalui **Perjanjian Bangkok 1909**, **Siam menyerahkan segala hak naungan, perlindungan, pentadbiran, dan kawalan** ke atas **Perlis, Kedah, Kelantan, dan Terengganu** kepada **British**. Sebagai balasan, **British menyerahkan semula Hak Wilayah Asingan** di Siam kepada kerajaan Siam. Kesannya, keempat-empat negeri Melayu tersebut terpaksa menerima **Penasihat British**, manakala **Sungai Golok** ditetapkan sebagai sempadan antarabangsa.',
          modelAnswerZh:
            '根据1909年《曼谷条约》，暹罗将玻璃市、吉打、吉兰丹与登嘉楼的一切宗主、保护与管辖权移交给英国；作为交换，英国向暹罗归还在暹享有的“治外法权”（Hak Wilayah Asingan）。其影响是北马四州随后被迫接受英国顾问官，并以哥乐河（Sungai Golok）划定国际边界。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Perjanjian Bangkok 1909 ditandatangani oleh kuasa luar tanpa berunding dengan pemerintah tempatan. Apakah iktibar yang boleh kita pelajari daripada peristiwa ini bagi mempertahankan kedaulatan negara? [4 markah]',
          questionZh: '1909年《曼谷条约》由外来势力在未与本土统治者协商的情况下私自签署。我们能从这一历史事件中吸取什么教训来捍卫国家主权？[4分]',
          expectedKeywordsBm: [
            'berdikari dalam pertahanan',
            'tidak bergantung kepada kuasa luar',
            'hubungan diplomatik setaraf',
            'memperkukuh kekuatan ekonomi dan tentera',
            'bersatu padu mempertahankan kedaulatan',
          ],
          modelAnswerBm:
            'Iktibar utamanya ialah sesebuah negara hendaklah **berdikari dan tidak bergantung kepada kuasa luar** untuk perlindungan keselamatan kerana kuasa asing sentiasa mengutamakan kepentingan sendiri. Kita perlu **memperkukuh kekuatan ekonomi, ilmu pengetahuan, dan pertahanan negara** serta menjalin **hubungan diplomatik antarabangsa yang diiktiraf secara rasmi dan setaraf**. Selain itu, pemimpin dan rakyat mesti **bersatu padu mempertahankan hak kedaulatan tanah air** daripada sebarang pencerobohan atau campur tangan luar.',
          modelAnswerZh:
            '【Fakta】最重要的教训是一个国家必须自立自强，绝不能依赖外国势力提供安全保护，【Huraian】因为外国列强永远只以自身利益为重，随时可能出卖弱国权益。【Contoh】我们必须全面强化本国经济、科技与国防实力，并在国际舞台建立平等受承认的外交关系，【Inferens】同时全民上下团结一致，坚决捍卫国土主权免受任何外部干涉。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 4.3: PELUASAN KUASA BRITISH DI JOHOR
  // ============================================================================
  {
    subtopicCode: '4.3',
    babNumber: 4,
    babTitleBm: 'Pentadbiran Negeri-negeri Melayu Tidak Bersekutu',
    babTitleZh: '马来属邦的行政管理',
    skCode: '7.4',
    spCodes: ['7.4.3', 'K7.4.7'],
    titleBm: 'Peluasan Kuasa British di Johor',
    titleZh: '英国在柔佛的势力扩张与柔佛领袖的外交智慧',
    heroImages: [
      {
        imageKey: 'bab4_johor_abu_bakar',
        captionBm:
          'Kebijaksanaan diplomasi **Sultan Abu Bakar** bersama **Dato\' Abdul Rahman bin Andak** berjaya mempertahankan kemerdekaan dalaman Johor selama puluhan tahun sebelum pindaan **Perjanjian 12 Mei 1914**.',
        captionZh:
          '苏丹阿布峇卡与拿督阿都拉曼安达卓越的外交手腕，成功捍卫柔佛内政独立长达数十年，直至1914年5月12日条约修订为止。',
        hotspots: [
          {
            x: 34,
            y: 36,
            termBm: 'Diplomasi Sultan Abu Bakar',
            meaningZh: '直接与英国维多利亚女王建立邦交',
            detailBm:
              'Menjalinkan hubungan terus dengan **Ratu Victoria** di London sehingga diiktiraf bergelar **Maharaja Johor (1868)** dan **Sultan Johor berdaulat (1885)**.',
            detailZh:
              '绕过新加坡总督直接与伦敦维多利亚女王建立深厚友谊，先后于1868年获承认为大君（Maharaja）、1885年获承认为主权独立的柔佛苏丹。',
          },
          {
            x: 68,
            y: 38,
            termBm: 'Dato\' Abdul Rahman bin Andak',
            meaningZh: '拿督阿都拉曼安达（柔佛主权守护神）',
            detailBm:
              'Bergelar **Dato\' Seri Amar Diraja**; mengawal ketat hubungan luar Johor sehingga British mendesak beliau **dibersarakan pada tahun 1907**.',
            detailZh:
              '封号 Dato\' Seri Amar Diraja；严密把守柔佛外交事务、屡破英方圈套，令英国视其为眼中钉并于1907年逼迫柔佛苏丹将其退休。',
          },
          {
            x: 24,
            y: 70,
            termBm: 'Lembaga Penasihat Johor (1886)',
            meaningZh: '1886年驻伦敦柔佛顾问局',
            detailBm:
              'Ditubuhkan di **London** bagi menguruskan hubungan terus Johor dengan Pejabat Tanah Jajahan tanpa melalui Gabenor NNS di Singapura.',
            detailZh:
              '在伦敦设立的专门机构，负责直接与英国殖民地部接洽并维护柔佛利益，避开新加坡海峡殖民地总督的控制。',
          },
          {
            x: 74,
            y: 72,
            termBm: 'Perjanjian 12 Mei 1914',
            meaningZh: '1914年接受首任总顾问官 Douglas Campbell',
            detailBm:
              '**Sultan Ibrahim** menandatangani perjanjian dengan Gabenor **Arthur Young** menerima **Douglas Graham Campbell** sebagai **Penasihat Am British** pertama.',
            detailZh:
              '苏丹依布拉欣与总督阿瑟·杨签约，接受道格拉斯·坎贝尔（Douglas Graham Campbell）出任柔佛首任英国总顾问官（Penasihat Am）。',
          },
        ],
      },
      {
        imageKey: 'bab4_nnmtb_johor',
        captionBm:
          'Kedudukan **Johor** yang berjiran rapat dengan pangkalan utama British di **Singapura** mendorong British merangka strategi terancang dari tahun **1855 hingga 1914**.',
        captionZh:
          '柔佛紧邻英国核心基地新加坡的敏感地理位置，促使英国从1855年至1914年间步步为营策划控制柔佛。',
      },
    ],
    sections: [
      {
        sectionCode: '4.3(a)',
        headingBm: 'Kemajuan Ekonomi dan Kebijaksanaan Diplomasi Pemimpin Johor',
        headingZh: '柔佛的经济繁荣与领袖卓越的外交智慧',
        leadParagraphBm:
          '**Johor** merupakan negeri Melayu yang paling sukar ditembusi dan paling akhir menerima Penasihat Am British (pada tahun **1914**). Kejayaan mempertahankan kedaulatan ini berpunca daripada kemakmuran pentadbiran moden serta kebijaksanaan diplomasi **Sultan Abu Bakar** dan pembesar berwibawa terutamanya **Dato\' Abdul Rahman bin Andak**.',
        leadParagraphZh:
          '柔佛是英国最难攻破、也是最后一个接受英国总顾问官的马来州属（迟至1914年）。这一主权奇迹源于柔佛现代化的高效施政，以及苏丹阿布峇卡与重臣拿督阿都拉曼安达高超的外交智慧。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Kemajuan Pentadbiran dan Ekonomi**: Perkembangan pesat perusahaan **lada hitam, gambir, kopi, dan getah** serta birokrasi moden yang cekap menjadikan Johor negeri yang aman dan stabil — menyebabkan British **tiada sebarang alasan kekacauan dalaman** untuk campur tangan!',
            zh: '经济繁荣与内政稳定：黑胡椒、甘蜜、咖啡与橡胶种植业的蓬勃发展及清廉高效的现代官僚体系，使柔佛国泰民安，令英国完全找不到“内乱”借口进行干预！',
          },
          {
            tag: 'CONTOH',
            bm: '**Kebijaksanaan Diplomasi Sultan Abu Bakar**: Baginda mengadakan lawatan ke Eropah dan menjalin **hubungan persahabatan secara langsung dengan Ratu Victoria** di London; hasilnya Ratu Victoria mengurniakan gelaran **Maharaja Johor (1868)** dan mengiktiraf baginda sebagai **Sultan Johor yang berdaulat (1885)**.',
            zh: '苏丹阿布峇卡的顶层外交：殿下多次亲访欧洲，直接与伦敦维多利亚女王（Ratu Victoria）建立私人友谊，成功于1868年获承认为大君（Maharaja），1885年更获正式承认为主权独立的柔佛苏丹。',
          },
          {
            tag: 'CONTOH',
            bm: '**Kewibawaan Dato\' Abdul Rahman bin Andak (*Dato\' Seri Amar Diraja*)**: Selaku Setiausaha Sulit Sultan (1885) dan Setiausaha Kerajaan Johor (1893–1907) yang pintar serta fasih berbahasa Inggeris, beliau mengawal rapi urusan hubungan luar Johor bagi mematahkan cubaan peluasan kuasa British.',
            zh: '拿督阿都拉曼安达（封号 Dato\' Seri Amar Diraja）的护国贡献：作为精通英语与国际法的苏丹机要秘书兼政府秘书，他严密把关所有涉外条约，屡次识破并挫败英国吞并柔佛的图谋。',
          },
          {
            tag: 'CONTOH',
            bm: '**Penubuhan Lembaga Penasihat Johor di London (1886)**: Ditubuhkan atas cadangan Dato\' Abdul Rahman bin Andak untuk menguruskan hubungan Johor **terus dengan Pejabat Tanah Jajahan di London** serta menasihati Sultan dalam hal pentadbiran moden tanpa perlu merujuk Gabenor NNS di Singapura.',
            zh: '设立驻伦敦柔佛顾问局（Lembaga Penasihat Johor di London, 1886年）：直接与伦敦殖民地部沟通协调，成功绕过驻新加坡海峡殖民地总督的掣肘。',
          },
        ],
      },
      {
        sectionCode: '4.3(b)',
        headingBm: 'Strategi Sistematik dan Muslihat British Menguasai Johor (1855–1914)',
        headingZh: '英国步步紧逼控制柔佛的系统性策略与阴谋（1855–1914年）',
        leadParagraphBm:
          'British tetap bimbang sekiranya Johor menjalin hubungan dengan kuasa Barat lain (seperti Jerman) kerana kedudukan Johor yang bersempadan terus dengan **Singapura**. Oleh itu, British melaksanakan strategi berperingkat dan muslihat kewangan serta politik untuk menundukkan Johor.',
        leadParagraphZh:
          '由于柔佛与新加坡仅一水之隔，英国深恐柔佛与其他西方列强（如德国）结盟，遂展开长达半个世纪的渐进式条约、人事排挤与财政设局，最终迫使柔佛就范。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**1. Perjanjian 1855**: Perjanjian antara **Sultan Ali** dengan **Temenggung Ibrahim** menetapkan bahawa sekiranya jajahan **Kesang** hendak dijual oleh Sultan Ali, kawasan tersebut hendaklah **ditawarkan terlebih dahulu kepada pihak British**.',
            zh: '第一步：1855年条约——规定苏丹阿里若欲出售吉双（Kesang）领地，必须享有优先购买权的是英国（防止落入他国手中）。',
          },
          {
            tag: 'CONTOH',
            bm: '**2. Perjanjian Setia 1885 (11 Disember 1885)**: Johor bersetuju menyerahkan **hal ehwal hubungan luar negeri** di bawah kawalan British dan menerima seorang **Ejen / Wakil Konsul British** (yang kuasanya setaraf pegawai konsul sahaja, jauh lebih rendah daripada Residen!), manakala kedaulatan pentadbiran dalam negeri Johor kekal terpelihara.',
            zh: '第二步：1885年《效忠条约》（Perjanjian Setia 1885）——柔佛同意由英国掌管对外关系，并仅接受一名权限极小的“英国领事代理人”（Ejen / Wakil Konsul，绝非参政司），柔佛内政完全维持独立自主。',
          },
          {
            tag: 'FAKTA',
            bm: '**3. Muslihat Kewangan Landasan Kereta Api (1899–1904)**: British menawarkan **pinjaman sebanyak $200,000** (dan pembiayaan NNMB) kepada Johor untuk membina **jalan kereta api merentasi Johor** menghubungkan Tanah Melayu dengan Singapura bagi menjerat ekonomi Johor; **Dato\' Abdul Rahman bin Andak** bijak menghidu perangkap hutang ini lalu menolaknya dengan mencadangkan Johor membina kereta api menggunakan dana sendiri!',
            zh: '第三步：铁路贷款财政陷阱——英国极力游说柔佛借款20万叻币（$200,000）修建贯穿柔佛连接新加坡的铁路，企图用债务控制柔佛财政；拿督阿都拉曼安达一眼看穿诡计并果断回绝，主张由柔佛自资兴建！',
          },
          {
            tag: 'FAKTA',
            bm: '**4. Penyingkiran Dato\' Abdul Rahman bin Andak & Pembubaran Lembaga Penasihat Johor (1907)**: Semasa pemerintahan **Sultan Ibrahim** (menaiki takhta 1895), Gabenor NNS **John Anderson** mendesak Sultan Ibrahim **menamatkan perkhidmatan (membesarakan) Dato\' Abdul Rahman bin Andak pada tahun 1907** ke London, serta menasihati baginda **membubarkan Lembaga Penasihat Johor di London** supaya Johor terpaksa berurusan terus dengan Gabenor NNS!',
            zh: '第四步：拔除护国重臣与解散伦敦顾问局（1907年）——在苏丹依布拉欣在位期间，总督约翰·安德森认定阿都拉曼安达是最大障碍，遂施压迫使苏丹于1907年让拿督阿都拉曼安达退休赴英，并诱劝解散驻伦敦柔佛顾问局，迫使柔佛一切事务须经新加坡总督之手！',
          },
          {
            tag: 'CONTOH',
            bm: '**5. Pelantikan Penasihat Kewangan (1910) & Perjanjian 12 Mei 1914**: Selepas ketiadaan Dato\' Abdul Rahman Andak, pegawai British **Douglas Graham Campbell** ditempatkan sebagai **Penasihat Kewangan** Johor (1910). Pada **12 Mei 1914**, Gabenor NNS **Arthur Young** memanipulasi isu pentadbiran dalaman (laporan penjara Johor Bahru) untuk mendesak **Sultan Ibrahim** menandatangani pindaan Perjanjian 1885 yang menerima **Douglas Graham Campbell** sebagai **Penasihat Am British (*General Adviser*) pertama di Johor**!',
            zh: '第五步：从财政顾问到1914年5月12日《总顾问官条约》——失去阿都拉曼安达后，英官道格拉斯·坎贝尔于1910年先渗入担任柔佛财政顾问；1914年5月12日，总督阿瑟·杨借口新山监狱管理报告问题施压，迫使苏丹依布拉欣签署修正条约，正式接受 **Douglas Graham Campbell** 出任柔佛第一任“英国总顾问官”（Penasihat Am British），柔佛自此归入马来属邦（NNMTB）！',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Perhatikan gelaran khas di **Johor**: Pegawai British di Johor digelar **Penasihat Am British (*General Adviser*)** — bukannya Residen! Dan Sultan Ibrahim tetap meletakkan syarat tegas memelihara kedaulatan Bahasa Melayu, bendera Johor, dan keutamaan pegawai Melayu Johor!',
            zh: '⚠️ 考官必考细节：驻柔佛的英国最高官员职衔是独一无二的 **Penasihat Am British（英国总顾问官）**，而不是 Residen！而且苏丹依布拉欣在签约时仍坚持附加条件，保障马来语官方地位、柔佛州旗及本土马来官员的同等地位！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Kronologi Strategi British Menguasai Johor (1855–1914) dan Usaha Pertahanan Pemimpin Johor',
        titleZh: '英国控制柔佛的步步紧逼策略（1855–1914年）与柔佛领袖反制举措对照表',
        headers: [
          { bm: 'Tahun & Peristiwa', zh: '年份与关键事件' },
          { bm: 'Strategi / Muslihat British', zh: '英国策略与心机' },
          { bm: 'Tindakan & Pertahanan Pemimpin Johor', zh: '柔佛领袖的应对与护国举措' },
        ],
        rows: [
          [
            { bm: '**1855 — Perjanjian Sultan Ali & Temenggung Ibrahim**', zh: '1855年条约' },
            {
              bm: 'Meletakkan syarat jajahan **Kesang** wajib ditawarkan kepada British dahulu jika hendak dijual.',
              zh: '规定吉双（Kesang）领地若要出售，必须优先卖给英国。',
            },
            {
              bm: '**Temenggung Daeng Ibrahim** memajukan Iskandar Puteri dan ekonomi **Sistem Kangchu**.',
              zh: '天猛公达因依布拉欣大力开发依斯干达布蒂里与港主经济。',
            },
          ],
          [
            { bm: '**1885 — Perjanjian Setia (11 Disember 1885)**', zh: '1885年《效忠条约》' },
            {
              bm: 'Mengawal **hal ehwal luar Johor** dan menempatkan **Ejen / Wakil Konsul British**.',
              zh: '控制柔佛外交事务，争取派驻一名英国领事代表。',
            },
            {
              bm: '**Sultan Abu Bakar** memastikan kuasa Konsul amat terhad, diiktiraf sebagai **Sultan berdaulat**, dan menubuhkan **Lembaga Penasihat Johor di London (1886)**.',
              zh: '苏丹阿布峇卡严格限制领事权限、获承认为独立苏丹，并于1886年在伦敦设立柔佛顾问局。',
            },
          ],
          [
            { bm: '**1895–1904 — Perlembagaan & Isu Pinjaman Kereta Api**', zh: '1895宪法与铁路贷款设局' },
            {
              bm: 'Memujuk Johor meminjam **$200,000** daripada NNMB bagi membina landasan kereta api untuk menjerat kewangan Johor.',
              zh: '诱劝柔佛借贷20万叻币兴建铁路，企图借债务掌控柔佛财政。',
            },
            {
              bm: 'Mengisytiharkan **Undang-Undang Tubuh Kerajaan Johor (1895)**; **Dato\' Abdul Rahman bin Andak** menolak pinjaman British demi mengelakkan perangkap hutang.',
              zh: '颁布1895年成文宪法；拿督阿都拉曼安达识破债务陷阱并果断拒绝英方贷款。',
            },
          ],
          [
            { bm: '**1907 — Penyingkiran Tokoh Utama Johor**', zh: '1907年排挤护国重臣' },
            {
              bm: 'Gabenor **John Anderson** mendesak **Dato\' Abdul Rahman bin Andak dibersarakan** dan **Lembaga Penasihat Johor dibubarkan**.',
              zh: '总督约翰·安德森施压迫使阿都拉曼安达退休，并诱使解散驻伦敦柔佛顾问局。',
            },
            {
              bm: 'Johor kehilangan benteng diplomasi terkuat di London dan terpaksa berurusan melalui Gabenor NNS di Singapura.',
              zh: '柔佛痛失最强外交屏障，被迫改为直接面对新加坡海峡殖民地总督的压力。',
            },
          ],
          [
            { bm: '**12 Mei 1914 — Pindaan Perjanjian 1885**', zh: '1914年5月12日修订条约' },
            {
              bm: 'Melantik **Douglas Graham Campbell** daripada Penasihat Kewangan (1910) menjadi **Penasihat Am British pertama**.',
              zh: '将1910年派驻的财政顾问道格拉斯·坎贝尔升格为首任“英国总顾问官”。',
            },
            {
              bm: '**Sultan Ibrahim** menetapkan syarat bertulis memelihara **Bahasa Melayu**, pakaian rasmi Johor, dan taraf pegawai Melayu Johor.',
              zh: '苏丹依布拉欣坚持立下书面保障条款，捍卫马来语、柔佛官服及马来官员平等地位。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Sultan Abu Bakar',
        roleBm: 'Sultan Johor (1862–1895)',
        roleZh: '柔佛苏丹阿布峇卡',
        emoji: '👑',
        lineBm:
          'Beta berurusan terus dengan **Ratu Victoria** di London! Dalam **Perjanjian Setia 1885**, Johor diiktiraf negeri merdeka dan hanya menerima **Wakil Konsul** — bukannya Residen yang mencampuri pentadbiran dalam negeri!',
        lineZh:
          '朕直接与伦敦的维多利亚女王对话！在1885年《效忠条约》中，柔佛获承认为独立主权国，只接受一名领事代表——绝不是干涉内政的参政司！',
      },
      {
        speakerBm: 'Dato\' Abdul Rahman bin Andak',
        roleBm: 'Dato\' Seri Amar Diraja (Setiausaha Kerajaan Johor)',
        roleZh: '柔佛政府秘书拿督阿都拉曼安达',
        emoji: '🧠',
        lineBm:
          'Tuanku, jangan sesekali kita terima tawaran pinjaman **$200,000** British untuk projek **landasan kereta api** itu! Itu perangkap hutang supaya mereka dapat mengawal perbendaharaan Johor seperti di Pahang!',
        lineZh:
          '殿下，千万不能接受英国那笔20万叻币的铁路建设贷款！那是糖衣债务陷阱，目的是像控制彭亨那样控制柔佛国库！',
      },
      {
        speakerBm: 'John Anderson',
        roleBm: 'Gabenor Negeri-negeri Selat (1907)',
        roleZh: '海峡殖民地总督约翰·安德森',
        emoji: '🎩',
        lineBm:
          'Selagi **Dato\' Abdul Rahman bin Andak** dan **Lembaga Penasihat Johor di London** masih wujud, rancangan British pasti gagal! Kita mesti mendesak Sultan Ibrahim menamatkan perkhidmatan beliau pada tahun **1907**!',
        lineZh:
          '只要拿督阿都拉曼安达和驻伦敦柔佛顾问局还在一天，英国的计划就别想得逞！我们必须在1907年施压苏丹依布拉欣让他退休离开柔佛！',
      },
      {
        speakerBm: 'Sultan Ibrahim',
        roleBm: 'Sultan Johor (1914)',
        roleZh: '柔佛苏丹依布拉欣',
        emoji: '🦁',
        lineBm:
          'Walaupun pada **12 Mei 1914** Johor menerima **Douglas Graham Campbell** sebagai **Penasihat Am**, ingat syarat beta: **Bahasa Melayu** kekal bahasa rasmi dan semua pegawai Eropah di Johor wajib memakai pakaian rasmi kerajaan Johor!',
        lineZh:
          '尽管1914年5月12日柔佛接受道格拉斯·坎贝尔担任总顾问官，但休想忘记朕的铁律：马来语维持官方语言地位，所有在柔佛服务的欧洲官员必须身穿柔佛政府制服效忠苏丹！',
      },
    ],
    memoryHackBm:
      'Formula Ingat Pantas **4.3**: **Benteng Johor** = **Sultan Abu Bakar** (Ratu Victoria + Perlembagaan 1895) + **Dato\' Abdul Rahman bin Andak** (*Dato\' Seri Amar Diraja* + Lembaga Penasihat Johor di London 1886). **Tangga Muslihat British** = **1855** (Kesang) -> **1885** (Perjanjian Setia: Wakil Konsul) -> **1907** (Bersarakan Abdul Rahman Andak) -> **1910** (Penasihat Kewangan) -> **12 Mei 1914** (**Douglas Graham Campbell** = **Penasihat Am British** pertama)!',
    memoryHackZh:
      '💡 王牌名师神记忆口诀（4.3）：【柔佛护国双雄】苏丹阿布峇卡（直通维多利亚女王）+ 拿督阿都拉曼安达（看穿20万铁路贷款陷阱 + 坐镇伦敦顾问局）！【英国五步夺柔佛】1855吉双优先权 -> 1885领事代理 -> **1907逼退阿都拉曼安达** -> 1910财政顾问 -> **1914年5月12日 Douglas Campbell 出任首任总顾问官（Penasihat Am）**！',
    subtopicMcqs: [
      {
        id: '4.3-mcq-1',
        spCode: '7.4.3',
        questionBm:
          'Siapakah pembesar berwibawa Johor bergelar **Dato\' Seri Amar Diraja** yang bijak mengawal hal ehwal hubungan luar Johor sehingga British mendesak beliau dibersarakan pada tahun **1907**?',
        questionZh: '哪位封号为“Dato\' Seri Amar Diraja”的柔佛杰出大臣因严密把关外交、屡破英方图谋，导致英国于1907年施压迫使其退休？',
        options: [
          {
            id: 'A',
            textBm: '**Dato\' Wan Muhammad Saman**',
            textZh: '拿督旺慕哈末沙曼',
          },
          {
            id: 'B',
            textBm: '**Dato\' Abdul Rahman bin Andak**',
            textZh: '拿督阿都拉曼安达（Dato\' Abdul Rahman bin Andak）',
          },
          {
            id: 'C',
            textBm: '**Dato\' Kelana Syed Abdul Rahman**',
            textZh: '拿督克拉那',
          },
          {
            id: 'D',
            textBm: '**Dato\' Arau**',
            textZh: '拿督亚娄',
          },
        ],
        correctId: 'B',
        explanationBm:
          '**Dato\' Abdul Rahman bin Andak** (*Dato\' Seri Amar Diraja*) ialah Setiausaha Kerajaan Johor yang menjadi penghalang utama peluasan kuasa British sehinggalah Gabenor John Anderson mendesak penamatan perkhidmatan beliau pada tahun 1907.',
        explanationZh:
          '正确是 B！拿督阿都拉曼安达精通外交并坚决抵制英国渗透，直至1907年被总督约翰·安德森施压逼退。',
      },
      {
        id: '4.3-mcq-2',
        spCode: '7.4.3',
        questionBm:
          'Apakah peranan **Lembaga Penasihat Johor** yang ditubuhkan di **London** pada tahun **1886**?',
        questionZh: '1886年在伦敦成立的“柔佛顾问局”（Lembaga Penasihat Johor）发挥了什么关键作用？',
        options: [
          {
            id: 'A',
            textBm: 'Menguruskan hubungan Johor secara langsung dengan **Pejabat Tanah Jajahan di London** tanpa melalui Gabenor NNS',
            textZh: '直接处理柔佛与伦敦殖民地部的关系，避开新加坡海峡殖民地总督的干预',
          },
          {
            id: 'B',
            textBm: 'Mengutip cukai lada hitam dan gambir daripada pedagang di pelabuhan London',
            textZh: '在伦敦港口向商人征收黑胡椒与甘蜜税',
          },
          {
            id: 'C',
            textBm: 'Melatih tentera British untuk menyerang negeri-negeri Melayu Utara',
            textZh: '训练英军进攻马来半岛北部各州',
          },
          {
            id: 'D',
            textBm: 'Menyerahkan pentadbiran dalam negeri Johor kepada Residen Jeneral di Kuala Lumpur',
            textZh: '将柔佛内政移交给吉隆坡的总参政司',
          },
        ],
        correctId: 'A',
        explanationBm:
          '**Lembaga Penasihat Johor di London (1886)** membolehkan Sultan Johor berhubung terus dengan Pejabat Tanah Jajahan dan kerajaan British di London, sekali gus mengelakkan muslihat Gabenor NNS di Singapura.',
        explanationZh:
          '正确是 A！驻伦敦柔佛顾问局让柔佛得以直接与英国中央政府对话，绕过虎视眈眈的新加坡总督。',
      },
      {
        id: '4.3-mcq-3',
        spCode: '7.4.3',
        questionBm:
          'Bagaimanakah British menggunakan isu pembinaan **landasan kereta api** untuk cuba menguasai kewangan negeri **Johor**?',
        questionZh: '英国如何利用“修建铁路”课题企图控制柔佛州的财政？',
        options: [
          {
            id: 'A',
            textBm: 'Merampas semua ladang gambir di sepanjang Sungai Muar secara paksa',
            textZh: '强行没收麻坡河沿岸所有甘蜜园',
          },
          {
            id: 'B',
            textBm: 'Memujuk Johor meminjam sebanyak **$200,000** daripada NNMB supaya ekonomi Johor terikat dengan beban hutang',
            textZh: '游说柔佛向马来联邦借贷20万叻币（$200,000），企图让柔佛陷入债务控制',
          },
          {
            id: 'C',
            textBm: 'Mengharamkan eksport getah Johor di pelabuhan Pulau Pinang',
            textZh: '禁止柔佛橡胶在槟城港口出口',
          },
          {
            id: 'D',
            textBm: 'Memaksa Sultan Abu Bakar membayar ganti rugi Perang Larut',
            textZh: '强迫苏丹阿布峇卡赔偿拉律战争损失',
          },
        ],
        correctId: 'B',
        explanationBm:
          'British menawarkan pinjaman **$200,000** bagi pembinaan kereta api merentasi Johor sebagai muslihat mengawal kewangan Johor, namun cadangan itu berjaya dihidu dan ditolak oleh **Dato\' Abdul Rahman bin Andak**.',
        explanationZh:
          '正确是 B！英国企图以20万叻币铁路贷款设下债务陷阱，所幸被拿督阿都拉曼安达识破并拒绝。',
      },
      {
        id: '4.3-mcq-4',
        spCode: '7.4.3',
        questionBm:
          'Siapakah pegawai British yang dilantik sebagai **Penasihat Am British (*General Adviser*) pertama** di **Johor** selepas pemeteraian perjanjian pada **12 Mei 1914**?',
        questionZh: '在1914年5月12日签署条约后，哪位英国官员受委为柔佛第一任“英国总顾问官”（Penasihat Am British）？',
        options: [
          {
            id: 'A',
            textBm: '**W.G. Maxwell**',
            textZh: '麦斯威尔（W.G. Maxwell）',
          },
          {
            id: 'B',
            textBm: '**Meadow Frost**',
            textZh: '梅多·弗罗斯特（Meadow Frost）',
          },
          {
            id: 'C',
            textBm: '**Douglas Graham Campbell**',
            textZh: '道格拉斯·坎贝尔（Douglas Graham Campbell）',
          },
          {
            id: 'D',
            textBm: '**J.L. Humphreys**',
            textZh: '汉弗莱斯（J.L. Humphreys）',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Melalui perjanjian **12 Mei 1914** antara Sultan Ibrahim dengan Gabenor Arthur Young, **Douglas Graham Campbell** telah dilantik sebagai **Penasihat Am British pertama di Johor**.',
        explanationZh:
          '正确是 C！Douglas Graham Campbell 于1914年成为柔佛首任英国总顾问官；Maxwell 在吉打，Meadow Frost 在玻璃市，Humphreys 在登嘉楼。',
      },
      {
        id: '4.3-mcq-5',
        spCode: 'K7.4.7',
        questionBm:
          'Apakah faktor utama yang membolehkan **Kesultanan Johor** mengekalkan kedaulatannya sehingga tahun 1914 berbanding negeri-negeri Melayu yang lain?',
        questionZh: '与其他马来州属相比，是什么主要因素使柔佛苏丹王朝能够一直维持独立主权直至1914年？',
        options: [
          {
            id: 'A',
            textBm: '**Kemajuan pentadbiran moden** serta **kebijaksanaan diplomasi** pemerintah dan pembesar Johor',
            textZh: '现代化的高效行政管理，以及柔佛统治者与大臣卓越的外交智慧',
          },
          {
            id: 'B',
            textBm: 'Bantuan ketenteraan secara berterusan daripada kerajaan Perancis dan Jerman',
            textZh: '来自法国与德国政府持续不断的军事援助',
          },
          {
            id: 'C',
            textBm: 'Ketiadaan sebarang hasil bumi atau tanaman komersial di bumi Johor',
            textZh: '柔佛境内没有任何天然资源或商业农作物',
          },
          {
            id: 'D',
            textBm: 'Perlindungan rasmi daripada Maharaja Siam melalui penghantaran bunga emas',
            textZh: '透过进献金花获得暹罗皇帝的正式保护',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Kecekapan pentadbiran moden (termasuk Undang-Undang Tubuh 1895), kemakmuran ekonomi, serta **kebijaksanaan diplomasi Sultan Abu Bakar dan Dato\' Abdul Rahman bin Andak** menutup ruang alasan British untuk campur tangan lebih awal.',
        explanationZh:
          '正确是 A！内政修明、经济富庶加上顶层外交手腕高超，是柔佛能够长期抵御英国吞并的根本原因。',
      },
    ],
    strukturQuestion: {
      id: '4.3-struktur-1',
      spCode: '7.4.3',
      stimulusBm:
        'Kebijaksanaan pemerintah **Kesultanan Johor** dan pembesarnya seperti **Dato\' Abdul Rahman bin Andak** telah berjaya menyekat kemaraan kuasa British selama puluhan tahun sebelum termeterainya **Perjanjian 12 Mei 1914**.',
      stimulusZh:
        '柔佛苏丹王朝统治者及拿督阿都拉曼安达等重臣的睿智，成功阻挡英国势力渗透长达数十年，直至1914年5月12日条约签署为止。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Nyatakan **tiga** usaha diplomasi atau pentadbiran yang dilakukan oleh **Sultan Abu Bakar** dan **Dato\' Abdul Rahman bin Andak** bagi memelihara kedaulatan Johor. [3 markah]',
          questionZh: '写出苏丹阿布峇卡与拿督阿都拉曼安达为维护柔佛主权所采取的三项外交或行政举措。[3分]',
          expectedKeywordsBm: [
            'hubungan terus dengan Ratu Victoria',
            'Perjanjian Setia 1885',
            'Lembaga Penasihat Johor di London',
            'Undang-Undang Tubuh Kerajaan Johor 1895',
            'menolak pinjaman kereta api',
          ],
          modelAnswerBm:
            'Pertama, **Sultan Abu Bakar** menjalin **hubungan diplomasi terus dengan Ratu Victoria** di London sehingga diiktiraf sebagai Sultan berdaulat dalam **Perjanjian Setia 1885**. Kedua, menggubal **Undang-Undang Tubuh Kerajaan Johor (1895)** dan memodenkan pentadbiran negeri. Ketiga, **Dato\' Abdul Rahman bin Andak** menubuhkan **Lembaga Penasihat Johor di London (1886)** serta menolak muslihat pinjaman wang kereta api British.',
          modelAnswerZh:
            '第一，苏丹阿布峇卡直接与伦敦维多利亚女王建立友好外交，并在1885年《效忠条约》中获承认为独立主权苏丹；第二，颁布1895年《柔佛政府宪法》并实现行政现代化；第三，拿督阿都拉曼安达于1886年设立驻伦敦柔佛顾问局，并拒绝英国的铁路债务陷阱。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Bagaimanakah muslihat British akhirnya berjaya menempatkan **Penasihat Am British** di Johor pada **12 Mei 1914**? [3 markah]',
          questionZh: '英国最终如何施展计谋，成功于1914年5月12日在柔佛安插“英国总顾问官”？[3分]',
          expectedKeywordsBm: [
            'membesarakan Dato\' Abdul Rahman bin Andak 1907',
            'membubarkan Lembaga Penasihat Johor',
            'Penasihat Kewangan 1910',
            'Perjanjian 12 Mei 1914',
            'Douglas Graham Campbell',
          ],
          modelAnswerBm:
            'Gabenor NNS **John Anderson** telah mendesak **Sultan Ibrahim** menamatkan perkhidmatan (**membesarakan**) **Dato\' Abdul Rahman bin Andak pada tahun 1907** dan menasihati pembubaran **Lembaga Penasihat Johor di London**. Seterusnya British menempatkan **Douglas Graham Campbell** sebagai Penasihat Kewangan (1910) sebelum mendesak pemeteraian **Perjanjian 12 Mei 1914** yang melantik **Douglas Graham Campbell** sebagai **Penasihat Am British pertama** di Johor.',
          modelAnswerZh:
            '海峡殖民地总督约翰·安德森于1907年施压苏丹依布拉欣让拿督阿都拉曼安达退休，并诱劝解散驻伦敦柔佛顾问局。随后英国先于1910年派驻道格拉斯·坎贝尔任财政顾问，再于1914年5月12日施压签署修正条约，正式委任 Douglas Graham Campbell 为柔佛首任英国总顾问官。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Ketokohan **Dato\' Abdul Rahman bin Andak** membuktikan betapa pentingnya pemimpin berilmu pengetahuan tinggi dalam mempertahankan negara. Bagaimanakah generasi pelajar hari ini dapat mencontohi kewibawaan beliau? [4 markah]',
          questionZh: '拿督阿都拉曼安达的事迹证明了高学识领袖对保家卫国的重要性。当今学子应如何效仿他的卓越风范？[4分]',
          expectedKeywordsBm: [
            'menguasai pelbagai bahasa',
            'ilmu pengetahuan dan kemahiran diplomasi',
            'bijak menilai muslihat luar',
            'jati diri dan patriotisme tinggi',
            'berkhidmat dengan penuh integriti',
          ],
          modelAnswerBm:
            'Generasi pelajar hari ini hendaklah berusaha **menguasai ilmu pengetahuan moden serta pelbagai bahasa antarabangsa** seperti bahasa Inggeris tanpa mengabaikan martabat **Bahasa Melayu**. Dengan ilmu perundangan, ekonomi, dan kemahiran diplomasi yang tinggi, kita akan **bijak menilai muslihat pihak luar** dalam rundingan antarabangsa. Di samping itu, kita perlu memiliki **semangat patriotisme dan integriti yang teguh** agar tidak mudah dipengaruhi kuasa asing demi memelihara kedaulatan tanah air.',
          modelAnswerZh:
            '【Fakta】当今学子应当努力掌握现代科学知识与英语等多门国际语言，同时坚定捍卫马来语的尊严。【Huraian】唯有具备深厚的法律、经济素养与外交谈判能力，才能在国际博弈中敏锐识破外来势力的圈套。【Contoh】学习阿都拉曼安达廉洁无私、拒收诱惑的气节，【Inferens】培养崇高的爱国精神与诚信品格，方能成为捍卫国家主权的栋梁之才。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 4.4: SISTEM PENTADBIRAN NEGERI-NEGERI MELAYU TIDAK BERSEKUTU (NNMTB)
  // ============================================================================
  {
    subtopicCode: '4.4',
    babNumber: 4,
    babTitleBm: 'Pentadbiran Negeri-negeri Melayu Tidak Bersekutu',
    babTitleZh: '马来属邦的行政管理',
    skCode: '7.4',
    spCodes: ['7.4.4', 'K7.4.8'],
    titleBm: 'Sistem Pentadbiran Negeri-negeri Melayu Tidak Bersekutu (NNMTB)',
    titleZh: '马来属邦（NNMTB）的行政管理制度与马来主权特征的保留',
    heroImages: [
      {
        imageKey: 'bab4_nnmtb_johor',
        captionBm:
          'Kelima-lima negeri **NNMTB (Perlis, Kedah, Kelantan, Terengganu, dan Johor)** kekal sebagai **kerajaan berasingan** yang berjaya memelihara kuasa **Sultan**, **Bahasa Melayu**, **tulisan Jawi**, dan perkhidmatan awam Melayu.',
        captionZh:
          '马来属邦五州（玻璃市、吉打、吉兰丹、登嘉楼与柔佛）维持各自独立的政府实体，成功保住苏丹实权、马来语、爪夷文与本土马来公务员体系。',
        hotspots: [
          {
            x: 24,
            y: 34,
            termBm: 'Lima Negeri Berasingan',
            meaningZh: '五个各自独立的州政府（并非中央集权联邦）',
            detailBm:
              '**Perlis, Kedah, Kelantan, Terengganu, dan Johor** tidak digabungkan di bawah satu perjanjian persekutuan, sebaliknya kekal sebagai lima kerajaan berasingan.',
            detailZh:
              '玻璃市、吉打、吉兰丹、登嘉楼与柔佛并未签署任何联邦合并条约，而是各自保持独立的州政府地位。',
          },
          {
            x: 54,
            y: 32,
            termBm: 'Kuasa Raja & MMN Lebih Besar',
            meaningZh: '统治者与州议会（MMN）拥有更大实权',
            detailBm:
              'Raja di **NNMTB** mempunyai kuasa jauh lebih besar berbanding Raja di NNMB serta mempengerusikan **Majlis Mesyuarat Negeri** sendiri.',
            detailZh:
              '马来属邦君主比马来联邦君主拥有大得多的行政实权，并亲自担任本州州议会（Majlis Mesyuarat Negeri）主席。',
          },
          {
            x: 78,
            y: 54,
            termBm: 'Bahasa Melayu & Tulisan Jawi',
            meaningZh: '坚持马来语、爪夷文及周五公假',
            detailBm:
              'Pentadbiran di Kedah, Perlis, dan Johor mengekalkan **Bahasa Melayu** sebagai bahasa rasmi, penggunaan **tulisan Jawi**, serta **cuti umum hari Jumaat**.',
            detailZh:
              '吉打、玻璃市与柔佛等州明文规定马来语为官方行政语言、公文使用爪夷文（tulisan Jawi），并将星期五定为公共假期。',
          },
          {
            x: 42,
            y: 74,
            termBm: 'Pegawai Tadbir Melayu Tempatan',
            meaningZh: '重用本土马来大臣与公务员',
            detailBm:
              'Jawatan utama seperti **Menteri Besar** dan **Setiausaha Kerajaan** dipegang oleh anak watan Melayu (contohnya *Perkhidmatan Tadbir Melayu Kedah*).',
            detailZh:
              '州务大臣（Menteri Besar）与政府秘书（Setiausaha Kerajaan）等核心高职均由本土马来精英出任（如吉打马来行政服务体系）。',
          },
        ],
      },
      {
        imageKey: 'bab4_kedah_terusan',
        captionBm:
          'Ketegasan pemimpin **Kedah**, **Terengganu**, dan **Johor** berjaya menghalang percubaan British menggabungkan NNMTB ke dalam NNMB.',
        captionZh:
          '吉打、登嘉楼与柔佛统治者的坚定立场，成功粉碎了英国企图将马来属邦吞并入马来联邦的计划。',
      },
    ],
    sections: [
      {
        sectionCode: '4.4(a)',
        headingBm: 'Latar Belakang, Pembentukan dan Senarai Penasihat British di NNMTB',
        headingZh: '马来属邦（NNMTB）的形成背景、特征与五州首任英国顾问官',
        leadParagraphBm:
          'Pentadbiran **Negeri-negeri Melayu Tidak Bersekutu (NNMTB)** merangkumi lima buah negeri iaitu **Perlis, Kedah, Kelantan, Terengganu, dan Johor** (dibentuk antara tahun 1909 hingga 1919). Istilah ini digunakan oleh British semata-mata untuk menggambarkan kumpulan negeri Melayu di bawah naungan British yang **tidak terikat dalam Persekutuan NNMB**.',
        leadParagraphZh:
          '“马来属邦”（NNMTB）涵盖玻璃市、吉打、吉兰丹、登嘉楼与柔佛五州（形成于1909年至1919年间）。这一名称仅是英国用来统称“未加入马来联邦（NNMB）”的五个受保护马来州属。',
        diagramKey: 'diag_4_4_nnmtb_vs_nnmb',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Bukan Satu Persekutuan Berpusat**: Kelima-lima negeri NNMTB **tidak mempunyai perjanjian gabungan persekutuan** dan tiada ibu negeri pusat; setiap negeri kekal sebagai **entiti kerajaan berdaulat yang berasingan** di bawah kawalan umum **Pesuruhjaya Tinggi NNMTB** (merangkap Gabenor Negeri-negeri Selat di Singapura).',
            zh: '并非中央集权联邦：五州之间没有任何合并条约，也没有共同首都；各州维持各自独立的政府体制，仅在宏观上受驻新加坡的“最高钦差大臣”（由海峡殖民地总督兼任）监督。',
          },
          {
            tag: 'HURAIAN',
            bm: '**Kedudukan Raja yang Lebih Berkuasa**: Raja di **NNMTB** mempunyai **kuasa yang lebih besar** berbanding kuasa Raja di NNMB kerana pentadbiran negeri tidak berpusat di tangan seorang Residen Jeneral, sebaliknya dikendalikan oleh **Sultan / Raja bersama Majlis Mesyuarat Negeri** masing-masing.',
            zh: '君主拥有更大实权：与权力被总参政司架空的马来联邦君主不同，马来属邦的苏丹/拉惹拥有大得多的治国实权，亲自领导本州的州议会（Majlis Mesyuarat Negeri）与内阁。',
          },
          {
            tag: 'CONTOH',
            bm: '**Senarai Lengkap Penasihat British Pertama di Lima Negeri NNMTB** *(Wajib Hafal!)*:\n1. **Perlis**: **Meadow Frost** (1909; perjanjian rasmi Perlis–British dimeterai pada 1930).\n2. **Kedah**: **W.G. Maxwell** (1909; perjanjian rasmi Kedah–British dimeterai pada 1923).\n3. **Kelantan**: **J.S. Mason** (1909 / Perjanjian Kelantan–British 1910).\n4. **Terengganu**: Pada tahun **1910**, Sultan Zainal Abidin III hanya menerima **Wakil British** iaitu **W.L. Conlay** (kuasa terhad kepada hal luar sahaja). Selepas kemangkatan Sultan Zainal Abidin III (1918), British memeterai perjanjian pada **24 Mei 1919** dan melantik **J.L. Humphreys** sebagai **Penasihat British pertama** di Terengganu!\n5. **Johor**: **Douglas Graham Campbell** (**Penasihat Am British** pertama melalui Perjanjian **12 Mei 1914**).',
            zh: '必背五州第一任英国顾问官名单：\n1. 玻璃市：梅多·弗罗斯特（**Meadow Frost**, 1909年；1930年方签正式条约）。\n2. 吉打：麦斯威尔（**W.G. Maxwell**, 1909年；1923年方签正式条约）。\n3. 吉兰丹：梅森（**J.S. Mason**, 1909/1910年条约）。\n4. 登嘉楼：1910年苏丹再纳阿比丁三世仅同意接受权限极小的英国代表康利（**W.L. Conlay**）；直到苏丹驾崩后的 **1919年5月24日**，英国才成功委派汉弗莱斯（**J.L. Humphreys**）出任登嘉楼第一任英国顾问官！\n5. 柔佛：道格拉斯·坎贝尔（**Douglas Graham Campbell**, 1914年首任英国总顾问官）。',
          },
        ],
      },
      {
        sectionCode: '4.4(b)',
        headingBm: 'Pentadbiran Setiap Negeri NNMTB: Pengekalan Bahasa Melayu, Jawi, dan Pegawai Melayu',
        headingZh: '各属邦内部行政：成功捍卫马来语、爪夷文与本土马来官员主导权',
        leadParagraphBm:
          'Walaupun menerima Penasihat British, pemerintah dan pembesar di setiap negeri **NNMTB** menetapkan syarat pentadbiran yang tegas demi mempertahankan identiti Melayu-Islam serta keutamaan anak watan dalam perkhidmatan kerajaan.',
        leadParagraphZh:
          '尽管接受了英国顾问官，马来属邦五州的统治者与大臣均立下严格行政条件，全力捍卫马来—伊斯兰文化特征以及本土子民在政府公务体系中的主导地位。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Pentadbiran di Perlis**: Diketuai oleh **Raja** yang mempengerusikan **Majlis Mesyuarat Negeri**; jawatan **Setiausaha Kerajaan** dan majoriti kakitangan perkhidmatan awam dipegang oleh **pegawai Melayu tempatan** (hanya terdapat segelintir pegawai Eropah).',
            zh: '玻璃市行政：由拉惹亲自担任州议会主席；政府秘书（Setiausaha Kerajaan）及绝大多数公务员职位均由本地马来官员担任。',
          },
          {
            tag: 'CONTOH',
            bm: '**Pentadbiran di Kedah**: Diketuai oleh **Sultan** bersama **Majlis Mesyuarat Negeri** (ditubuhkan sejak 1905) dan **Setiausaha Kerajaan berbangsa Melayu** melalui **Perkhidmatan Tadbir Melayu Kedah (*Kedah Civil Service*)**. Syarat rasmi Kedah menetapkan: **(1) Bahasa Melayu** kekal bahasa rasmi pentadbiran dan perundangan, **(2) Tulisan Jawi** digunakan dalam surat rasmi, **(3) Hari Jumaat ditetapkan sebagai cuti umum**, dan **(4) Keutamaan pelantikan pegawai tadbir diberikan kepada orang Melayu Kedah**!',
            zh: '吉打行政（高频考点！）：由苏丹偕同州议会及马来籍政府秘书领导，建立著名的“吉打马来行政服务体系”（Perkhidmatan Tadbir Melayu Kedah），并立下四大铁律：（1）马来语为官方语言、（2）公文使用爪夷文（tulisan Jawi）、（3）星期五为公共假期、（4）优先录用吉打马来人担任行政官！',
          },
          {
            tag: 'CONTOH',
            bm: '**Pentadbiran di Kelantan dan Terengganu**: Di **Kelantan**, Sultan mempengerusikan Majlis Mesyuarat Negeri dan dibantu oleh **Menteri Besar berbangsa Melayu**. Di **Terengganu**, pentadbiran berpandukan **Undang-Undang Bagi Diri Kerajaan Terengganu (1911)** di mana **Jemaah Menteri** dan **Majlis Mesyuarat Negeri** diterajui oleh **Menteri Besar** Melayu bagi mengimbangi nasihat British.',
            zh: '吉兰丹与登嘉楼行政：吉兰丹由苏丹主持州议会并设马来籍州务大臣（Menteri Besar）；登嘉楼则依据1911年《登嘉楼政府宪法》，由马来籍州务大臣领导内阁与州议会制衡英国顾问官。',
          },
          {
            tag: 'CONTOH',
            bm: '**Pentadbiran di Johor**: Berlandaskan **Undang-Undang Tubuh Kerajaan Johor (1895)**, diketuai oleh **Menteri Besar** dan **Setiausaha Kerajaan** Melayu bersama Majlis Mesyuarat Menteri dan Majlis Mesyuarat Negeri. **Bahasa Melayu** dan bahasa Inggeris menjadi bahasa rasmi, **pegawai Eropah yang berkhidmat di Johor wajib memakai pakaian rasmi kerajaan Johor**, bendera Johor dikibarkan, dan pegawai Melayu Johor diberikan taraf yang sama dengan pegawai British!',
            zh: '柔佛行政：依据1895年《柔佛政府宪法》，设马来籍州务大臣与政府秘书；明文规定马来语与英语并列官方语言，在柔佛任职的欧洲官员必须穿着柔佛政府制服、效忠柔佛苏丹，且柔佛马来官员与英籍官员享有同等地位！',
          },
        ],
      },
      {
        sectionCode: '4.4(c)',
        headingBm: 'Kesan Perkembangan Pentadbiran Negeri-negeri Melayu Tidak Bersekutu',
        headingZh: '马来属邦（NNMTB）行政制度发展的深远影响',
        leadParagraphBm:
          'Perkembangan pentadbiran **NNMTB** meninggalkan kesan berbeza berbanding NNMB, khususnya dalam mengekalkan kesinambungan institusi Kesultanan Melayu dan jati diri kebangsaan.',
        leadParagraphZh:
          '马来属邦行政体制的演变产生了与马来联邦截然不同的历史结果，尤其体现在成功延续马来君主制度与本土民族认同上。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**1. Pengekalan Kedudukan Sultan dan Pembesar Melayu**: Pembentukan NNMTB **tidak menjejaskan kedudukan tertinggi Sultan** sebagai ketua kerajaan dan ketua agama Islam; **pembesar Melayu tempatan** terus menerajui pentadbiran tertinggi (sebagai Menteri Besar, Setiausaha Kerajaan, dan Pegawai Daerah) walaupun sistem birokrasi moden diperkenalkan.',
            zh: '影响一：保住苏丹与马来大臣的崇高地位——苏丹依然掌握州政与宗教最高领导权，本土马来贵族与精英继续出任州务大臣、政府秘书和县长等核心高职。',
          },
          {
            tag: 'FAKTA',
            bm: '**2. Pengekalan Identiti Melayu-Islam & Menggagalkan Penggabungan ke NNMB**: Ketegasan mempertahankan **Bahasa Melayu, tulisan Jawi, cuti hari Jumaat, dan perkhidmatan tadbir Melayu** berjaya menghalang hasrat British untuk menggabungkan kelima-lima negeri NNMTB ke dalam persekutuan NNMB.',
            zh: '影响二：守护马来—伊斯兰特征并粉碎并入联邦企图——坚持马来语、爪夷文、周五公假及马来文官制度，使五州统治者一致拒绝并入中央集权的马来联邦（NNMB）。',
          },
          {
            tag: 'HURAIAN',
            bm: '**3. Penamatan Ancaman Siam & Pemodenan Birokrasi**: Penguasaan dan campur tangan kuasa **Siam** ke atas Perlis, Kedah, Kelantan, dan Terengganu tamat sepenuhnya, manakala sistem kewangan, kehakiman, tanah, dan pendidikan negeri disusun secara lebih sistematik mengikut pentadbiran moden.',
            zh: '影响三：终结暹罗威胁与行政现代化——暹罗对北马四邦的宗主干预彻底终结，各州财政、司法与土地管理逐步走向现代制度化。',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Bandingkan dengan teliti untuk soalan esei/struktur Bab 3 & Bab 4: Di **NNMB**, bahasa rasmi pentadbiran ialah **Bahasa Inggeris**, cuti umum hari **Ahad**, dan kuasa berpusat pada **Residen Jeneral / Pesuruhjaya Tinggi**. Sebaliknya di **NNMTB**, bahasa rasmi ialah **Bahasa Melayu (tulisan Jawi)**, cuti umum hari **Jumaat**, dan kuasa kekal pada **Sultan bersama Majlis Mesyuarat Negeri**!',
            zh: '⚠️ 第三章与第四章终极对比考点：在 **NNMB（马来联邦）**，官方行政语言是英语、周日放假、大权归总参政司/钦差大臣；而在 **NNMTB（马来属邦）**，官方语言是 **马来语（配爪夷文）**、**周五放假**、实权掌握在 **苏丹与州议会** 手中！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Perbandingan Lengkap Sistem Pentadbiran NNMB dengan NNMTB (Negeri, Ketua Pentadbiran, Bahasa Rasmi, Kedudukan Raja & Penasihat Pertama)',
        titleZh: '马来联邦（NNMB）与马来属邦（NNMTB）行政管理制度终极完整对比表',
        headers: [
          { bm: 'Aspek Perbandingan', zh: '比较维度' },
          { bm: 'Negeri-negeri Melayu Bersekutu (NNMB)', zh: '马来联邦（NNMB, 1896）' },
          { bm: 'Negeri-negeri Melayu Tidak Bersekutu (NNMTB)', zh: '马来属邦（NNMTB, 1909–1919）' },
        ],
        rows: [
          [
            { bm: '**Negeri-negeri Anggota**', zh: '成员州属' },
            {
              bm: '**4 buah negeri**: **Perak, Selangor, Negeri Sembilan, dan Pahang**.',
              zh: '4个州属：霹雳、雪兰莪、森美兰、彭亨。',
            },
            {
              bm: '**5 buah negeri**: **Perlis, Kedah, Kelantan, Terengganu, dan Johor**.',
              zh: '5个州属：玻璃市、吉打、吉兰丹、登嘉楼、柔佛。',
            },
          ],
          [
            { bm: '**Bentuk Gabungan & Ibu Negeri**', zh: '政体形式与行政中心' },
            {
              bm: '**Persekutuan berpusat** melalui Perjanjian Persekutuan 1895; ibu negeri pusat di **Kuala Lumpur**.',
              zh: '中央集权联邦制（依1895年联邦条约），总行政中心设于吉隆坡。',
            },
            {
              bm: '**Bukan persekutuan** — kekal **lima kerajaan negeri berasingan** tanpa ibu negeri pusat.',
              zh: '并非联邦——维持五个各自独立的州政府，无共同首都。',
            },
          ],
          [
            { bm: '**Ketua Pentadbiran & Gelaran Pegawai British**', zh: '行政首长与英官职衔' },
            {
              bm: 'Diketuai **Residen Jeneral** (kemudian **Ketua Setiausaha** 1909) di KL & **Residen British** di setiap negeri.',
              zh: '联邦由总参政司（1909改称政务司长）统领，各州派驻“参政司”（Residen）。',
            },
            {
              bm: 'Diketuai **Sultan / Raja** dibantu **Menteri Besar / Setiausaha Kerajaan Melayu**; menerima **Penasihat British** (*Penasihat Am* di Johor).',
              zh: '由苏丹/拉惹及马来州务大臣/政府秘书领导；英官称为“顾问官”（柔佛称总顾问官）。',
            },
          ],
          [
            { bm: '**Kedudukan Raja & Majlis Mesyuarat Negeri (MMN)**', zh: '统治者与州议会（MMN）实权' },
            {
              bm: 'Kuasa Raja dan MMN **terhakis teruk**; Raja hanya menjadi **ahli biasa** dalam MMP 1909.',
              zh: '统治者与州议会实权严重流失；统治者在1909年联邦议会仅沦为普通议员。',
            },
            {
              bm: 'Raja mempunyai **kuasa jauh lebih besar** dan mempengerusikan **Majlis Mesyuarat Negeri** yang berkuasa menggubal undang-undang.',
              zh: '统治者拥有更大实权，亲自担任本州拥有立法权的州议会主席。',
            },
          ],
          [
            { bm: '**Bahasa Rasmi, Tulisan & Cuti Umum**', zh: '官方语言、文字与公假' },
            {
              bm: 'Urusan rasmi didominasi **Bahasa Inggeris**, tulisan Rumi, cuti umum hari **Ahad**, dikuasai pegawai Eropah.',
              zh: '行政由英语主导、使用罗马字母、周日为公假，高职由欧籍官员垄断。',
            },
            {
              bm: '**Bahasa Melayu** kekal bahasa rasmi, **tulisan Jawi** dalam surat rasmi, **cuti umum hari Jumaat**, didominasi **pegawai tadbir Melayu**.',
              zh: '马来语维持官方语言、公文采用爪夷文、周五为公假，重用本土马来行政官员。',
            },
          ],
          [
            { bm: '**Senarai Residen / Penasihat Pertama**', zh: '首任参政司 / 顾问官名单' },
            {
              bm: 'Perak: **J.W.W. Birch**; Selangor: **J.G. Davidson**; N. Sembilan: **Martin Lister** (*Murray di Sg. Ujong*); Pahang: **J.P. Rodger**.',
              zh: '霹雳：Birch；雪兰莪：Davidson；森美兰：Martin Lister；彭亨：J.P. Rodger。',
            },
            {
              bm: 'Perlis: **Meadow Frost**; Kedah: **W.G. Maxwell**; Kelantan: **J.S. Mason**; Terengganu: **J.L. Humphreys (1919)** *(Wakil 1910: W.L. Conlay)*; Johor: **Douglas Campbell**.',
              zh: '玻璃市：Meadow Frost；吉打：W.G. Maxwell；吉兰丹：J.S. Mason；登嘉楼：J.L. Humphreys（1910代表为 Conlay）；柔佛：Douglas Campbell。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Tunku Mahmud',
        roleBm: 'Pemangku Raja / Presiden Majlis Negeri Kedah',
        roleZh: '吉打摄政王兼州议会主席',
        emoji: '📜',
        lineBm:
          'Tuan **W.G. Maxwell**, ingat syarat tegas kerajaan **Kedah**: **Bahasa Melayu** dan **tulisan Jawi** wajib kekal dalam semua urusan rasmi, **hari Jumaat** ialah cuti umum, dan **Perkhidmatan Tadbir Melayu Kedah** diutamakan!',
        lineZh:
          '麦斯威尔先生（W.G. Maxwell），请牢记吉打政府的铁律：所有公务必须维持使用马来语与爪夷文、星期五为公共假期，并优先任用吉打马来行政官员！',
      },
      {
        speakerBm: 'W.G. Maxwell',
        roleBm: 'Penasihat British Pertama di Kedah (1909)',
        roleZh: '驻吉打首任英国顾问官',
        emoji: '🎩',
        lineBm:
          'Saya akur Tuanku! Berbeza dengan di NNMB, di **NNMTB** ini **Sultan dan Majlis Mesyuarat Negeri** benar-benar berkuasa mengawal dasar dalam negeri.',
        lineZh:
          '谨遵殿下旨意！跟马来联邦完全不同，在马来属邦这里，苏丹和州议会确实掌握着控制州内政策的真正实权。',
      },
      {
        speakerBm: 'Sultan Zainal Abidin III',
        roleBm: 'Sultan Terengganu (1910)',
        roleZh: '登嘉楼苏丹再纳阿比丁三世',
        emoji: '🕌',
        lineBm:
          'Selagi beta memerintah **Terengganu**, **W.L. Conlay** hanyalah **Wakil British** bagi urusan luar! Dengan **Undang-Undang Bagi Diri Kerajaan Terengganu 1911**, Menteri Besar dan Jemaah Menteri beta kekal mentadbir negeri!',
        lineZh:
          '只要朕还在位执掌登嘉楼一天，康利（W.L. Conlay）就只能是处理外交的英国代表！凭借1911年《登嘉楼政府宪法》，朕的州务大臣与内阁继续自主治国！（注：直至1919年苏丹驾崩后 J.L. Humphreys 才成为首任顾问官）',
      },
      {
        speakerBm: 'Dato\' Jaafar bin Haji Muhammad',
        roleBm: 'Menteri Besar Pertama Johor',
        roleZh: '柔佛首任州务大臣拿督嘉化',
        emoji: '🏛️',
        lineBm:
          'Di **Johor** pula, bendera Union Jack tidak boleh dikibarkan lebih tinggi daripada bendera Johor, malah semua pegawai British wajib memakai pakaian rasmi kerajaan Johor dan menghormati institusi **Menteri Besar**!',
        lineZh:
          '在我们柔佛，英国米字旗绝不能挂得比柔佛州旗高，所有在柔佛服务的英国官员都必须穿上柔佛政府官方制服，并尊重州务大臣体制！',
      },
    ],
    memoryHackBm:
      'Formula Ingat Pantas **4.4**: **5 Penasihat Pertama NNMTB** ikut negeri (**Per-Ke-Kel-Ter-Jo**) = **"Frost Makan Mangga Harum Coklat"** (**Meadow Frost** [Perlis], **W.G. Maxwell** [Kedah], **J.S. Mason** [Kelantan], **J.L. Humphreys** [Terengganu 1919 / *Conlay Wakil 1910*], **Douglas Campbell** [Johor 1914]). **Identiti Kekal NNMTB** = **BM + Jawi + Cuti Jumaat + Pegawai Melayu + Kuasa Raja & MMN Besar**!',
    memoryHackZh:
      '💡 王牌名师神记忆口诀（4.4）：【五属邦首任顾问官 F-M-M-H-C】玻璃市 **Frost**、吉打 **Maxwell**、吉兰丹 **Mason**、登嘉楼 **Humphreys**（1919顾问官，1910代表是 Conlay）、柔佛 **Campbell**！【NNMTB 五大保权护身符】① 五州各自独立不合并、② 苏丹与州议会实权大、③ 马来语当官方语、④ 爪夷文写公文 + 周五放假、⑤ 马来州务大臣与本土公务员掌权！',
    subtopicMcqs: [
      {
        id: '4.4-mcq-1',
        spCode: '7.4.4',
        questionBm:
          'Pernyataan manakah yang **benar** menggambarkan struktur pentadbiran **Negeri-negeri Melayu Tidak Bersekutu (NNMTB)**?',
        questionZh: '下列哪项陈述正确描述了“马来属邦”（NNMTB）的行政架构特征？',
        options: [
          {
            id: 'A',
            textBm: 'Kelima-lima negeri disatukan di bawah pusat pentadbiran di Kuala Lumpur',
            textZh: '五个州属统一合并在吉隆坡总行政中心之下',
          },
          {
            id: 'B',
            textBm: 'Diketuai oleh seorang Residen Jeneral yang berkuasa mutlak menggubal undang-undang',
            textZh: '由一名拥有绝对立法权的总参政司统领',
          },
          {
            id: 'C',
            textBm: 'Merupakan **lima buah kerajaan negeri berasingan** dan **Raja mempunyai kuasa lebih besar** berbanding Raja di NNMB',
            textZh: '属于五个各自独立的州政府，且君主比马来联邦君主拥有更大实权',
          },
          {
            id: 'D',
            textBm: 'Semua jawatan Setiausaha Kerajaan dan Menteri Besar dikhaskan kepada pegawai British sahaja',
            textZh: '所有政府秘书与州务大臣职位仅限英国官员担任',
          },
        ],
        correctId: 'C',
        explanationBm:
          '**NNMTB** bukannya satu persekutuan berpusat; tiada perjanjian gabungan antara lima negeri tersebut dan **Raja di NNMTB mempunyai kuasa jauh lebih besar** bersama Majlis Mesyuarat Negeri berbanding Raja di NNMB.',
        explanationZh:
          '正确是 C！马来属邦五州各自独立运作、互不合并，苏丹与本州州议会保留了比马来联邦大得多的治国实权。',
      },
      {
        id: '4.4-mcq-2',
        spCode: '7.4.4',
        questionBm:
          'Pasangan negeri dalam **NNMTB** dan **Penasihat British Pertama** manakah yang dipadankan dengan **betul**?',
        questionZh: '下列哪组“马来属邦州属”与“第一任英国顾问官”的配对是正确的？',
        options: [
          {
            id: 'A',
            textBm: '**Perlis** — **Meadow Frost** dan **Kedah** — **W.G. Maxwell**',
            textZh: '玻璃市 — Meadow Frost；吉打 — W.G. Maxwell',
          },
          {
            id: 'B',
            textBm: '**Kelantan** — **J.W.W. Birch** dan **Terengganu** — **J.P. Rodger**',
            textZh: '吉兰丹 — J.W.W. Birch；登嘉楼 — J.P. Rodger',
          },
          {
            id: 'C',
            textBm: '**Kedah** — **Douglas Campbell** dan **Johor** — **J.S. Mason**',
            textZh: '吉打 — Douglas Campbell；柔佛 — J.S. Mason',
          },
          {
            id: 'D',
            textBm: '**Terengganu** — **Martin Lister** dan **Perlis** — **J.G. Davidson**',
            textZh: '登嘉楼 — Martin Lister；玻璃市 — J.G. Davidson',
          },
        ],
        correctId: 'A',
        explanationBm:
          '**Meadow Frost** ialah Penasihat British pertama di **Perlis** (1909) dan **W.G. Maxwell** di **Kedah** (1909), manakala di Kelantan ialah **J.S. Mason**, di Terengganu ialah **J.L. Humphreys** (1919), dan di Johor ialah **Douglas Campbell** (1914).',
        explanationZh:
          '正确是 A！牢记口诀 F-M-M-H-C：玻璃市 Meadow Frost、吉打 W.G. Maxwell、吉兰丹 J.S. Mason、登嘉楼 J.L. Humphreys、柔佛 Douglas Campbell。',
      },
      {
        id: '4.4-mcq-3',
        spCode: '7.4.4',
        questionBm:
          'Di **Terengganu**, Sultan Zainal Abidin III hanya menerima **W.L. Conlay** sebagai Wakil British pada tahun 1910. Bilakah dan siapakah yang dilantik sebagai **Penasihat British pertama** di Terengganu?',
        questionZh: '在登嘉楼，苏丹再纳阿比丁三世于1910年仅接受康利（W.L. Conlay）为英国代表。登嘉楼是在哪一年、由谁出任第一任“英国顾问官”？',
        options: [
          {
            id: 'A',
            textBm: 'Tahun 1909 — **Hugh Clifford**',
            textZh: '1909年 — 休·克利福',
          },
          {
            id: 'B',
            textBm: 'Tahun 1914 — **Frank Swettenham**',
            textZh: '1914年 — 瑞天咸',
          },
          {
            id: 'C',
            textBm: 'Tahun **1919** — **J.L. Humphreys** (selepas kemangkatan Sultan Zainal Abidin III)',
            textZh: '1919年 — 汉弗莱斯（J.L. Humphreys，于苏丹再纳阿比丁三世驾崩之后）',
          },
          {
            id: 'D',
            textBm: 'Tahun 1923 — **P.J. Murray**',
            textZh: '1923年 — 默里',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Selepas kemangkatan Sultan Zainal Abidin III pada tahun 1918, British mendesak pemeteraian perjanjian **24 Mei 1919** yang melantik **J.L. Humphreys** sebagai **Penasihat British pertama** di Terengganu.',
        explanationZh:
          '正确是 C！这是第四章高频易错题：登嘉楼直到1919年（苏丹再纳阿比丁三世驾崩后）才接受首任英国顾问官 J.L. Humphreys！',
      },
      {
        id: '4.4-mcq-4',
        spCode: '7.4.4',
        questionBm:
          'Apakah ciri pentadbiran yang berjaya dikekalkan oleh kerajaan negeri **Kedah** walaupun menerima Penasihat British?',
        questionZh: '尽管接受了英国顾问官，吉打州政府成功保留了哪些重要本土行政特征？',
        options: [
          {
            id: 'A',
            textBm: 'Penggunaan **Bahasa Melayu**, **tulisan Jawi**, **cuti umum hari Jumaat**, dan keutamaan **pegawai tadbir Melayu Kedah**',
            textZh: '坚持使用马来语、爪夷文、星期五定为公共假期，并优先任用吉打马来行政官员',
          },
          {
            id: 'B',
            textBm: 'Penggunaan Bahasa Inggeris sepenuhnya dan cuti umum pada hari Ahad',
            textZh: '全面使用英语办公并将星期日定为公共假期',
          },
          {
            id: 'C',
            textBm: 'Penyerahan kuasa menggubal undang-undang kepada Majlis Mesyuarat Persekutuan di Kuala Lumpur',
            textZh: '将立法大权移交给吉隆坡的联邦议会',
          },
          {
            id: 'D',
            textBm: 'Pelantikan Residen Jeneral sebagai pengerusi Majlis Mesyuarat Negeri Kedah',
            textZh: '委任总参政司担任吉打州议会主席',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Di **Kedah**, pentadbiran melalui *Perkhidmatan Tadbir Melayu Kedah* mengekalkan **Bahasa Melayu** sebagai bahasa rasmi, penggunaan **tulisan Jawi** dalam surat rasmi, **cuti umum hari Jumaat**, dan keutamaan pelantikan pegawai Melayu tempatan.',
        explanationZh:
          '正确是 A！吉打坚定捍卫马来语、爪夷文、周五公假及本土马来行政官主导权，成为马来属邦维护自主特征的典范。',
      },
      {
        id: '4.4-mcq-5',
        spCode: 'K7.4.8',
        questionBm:
          'Apakah kesan utama ketegasan Raja-raja dan pembesar Melayu dalam pentadbiran **Negeri-negeri Melayu Tidak Bersekutu (NNMTB)**?',
        questionZh: '马来属邦（NNMTB）统治者与马来大臣在行政上的坚定立场带来了什么主要影响？',
        options: [
          {
            id: 'A',
            textBm: 'NNMTB diserahkan semula kepada pentadbiran kerajaan Siam pada tahun 1920',
            textZh: '马来属邦于1920年重新归还给暹罗政府统治',
          },
          {
            id: 'B',
            textBm: '**Kedudukan Sultan dan pembesar Melayu kekal terpelihara** serta menghalang cubaan menggabungkan NNMTB ke dalam NNMB',
            textZh: '苏丹与马来大臣的地位得以保留，并成功阻止英国将马来属邦并入马来联邦（NNMB）',
          },
          {
            id: 'C',
            textBm: 'Semua sekolah aliran Melayu dan tulisan Jawi ditutup di lima buah negeri tersebut',
            textZh: '五州境内的所有马来学校与爪夷文书写被关闭废除',
          },
          {
            id: 'D',
            textBm: 'Jawatan Menteri Besar dimansuhkan di Kelantan, Terengganu, dan Johor',
            textZh: '吉兰丹、登嘉楼与柔佛的州务大臣职位被废除',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Ketegasan pemimpin NNMTB memastikan **kuasa Sultan serta pembesar Melayu** (seperti Menteri Besar dan Setiausaha Kerajaan) terus terpelihara dan menggagalkan rancangan British menyatukan NNMTB ke dalam NNMB.',
        explanationZh:
          '正确是 B！五州统治者与马来精英牢牢守住行政主导权，使英国吞并五州进入中央集权联邦的企图彻底落空。',
      },
    ],
    strukturQuestion: {
      id: '4.4-struktur-1',
      spCode: '7.4.4',
      stimulusBm:
        'Sistem pentadbiran **Negeri-negeri Melayu Tidak Bersekutu (NNMTB)** yang melibatkan **Perlis, Kedah, Kelantan, Terengganu, dan Johor** memperlihatkan perbezaan ketara berbanding sistem pentadbiran **Negeri-negeri Melayu Bersekutu (NNMB)**.',
      stimulusZh:
        '涵盖玻璃市、吉打、吉兰丹、登嘉楼与柔佛的“马来属邦”（NNMTB）行政制度，与“马来联邦”（NNMB）存在着显著差异。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Senaraikan **tiga** orang **Penasihat British Pertama** berserta negeri tempat mereka ditugaskan dalam pentadbiran **NNMTB**. [3 markah]',
          questionZh: '列出马来属邦（NNMTB）中的三位第一任英国顾问官及其所派驻的州属。[3分]',
          expectedKeywordsBm: [
            'Meadow Frost - Perlis',
            'W.G. Maxwell - Kedah',
            'J.S. Mason - Kelantan',
            'J.L. Humphreys - Terengganu',
            'Douglas Graham Campbell - Johor',
          ],
          modelAnswerBm:
            'Tiga Penasihat British pertama di NNMTB ialah **Meadow Frost** di **Perlis**, **W.G. Maxwell** di **Kedah**, dan **Douglas Graham Campbell** (Penasihat Am) di **Johor** *(atau **J.S. Mason** di **Kelantan** serta **J.L. Humphreys** di **Terengganu**)*.',
          modelAnswerZh:
            '马来属邦三位首任英国顾问官分别是：驻玻璃市的梅多·弗罗斯特（Meadow Frost）、驻吉打的麦斯威尔（W.G. Maxwell），以及驻柔佛的道格拉斯·坎贝尔（Douglas Graham Campbell；此外还有驻吉兰丹的 J.S. Mason 与驻登嘉楼的 J.L. Humphreys）。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Bandingkan perbezaan utama antara pentadbiran **NNMTB** dengan **NNMB** dari segi bentuk gabungan, kedudukan Raja, dan bahasa pentadbiran. [3 markah]',
          questionZh: '从联合形式、君主地位及行政语言三个方面，比较马来属邦（NNMTB）与马来联邦（NNMB）的主要差异。[3分]',
          expectedKeywordsBm: [
            'lima kerajaan berasingan',
            'persekutuan berpusat',
            'kuasa Raja lebih besar',
            'Majlis Mesyuarat Negeri',
            'Bahasa Melayu dan tulisan Jawi',
          ],
          modelAnswerBm:
            'Dari segi bentuk gabungan, **NNMTB merupakan lima buah kerajaan negeri berasingan**, manakala NNMB ialah persekutuan berpusat di Kuala Lumpur. Dari segi kedudukan pemerintah, **Raja di NNMTB mempunyai kuasa yang lebih besar** bersama **Majlis Mesyuarat Negeri** berbanding Raja di NNMB yang kehilangan kuasa kepada Residen Jeneral. Dari segi bahasa rasmi pula, pentadbiran NNMTB mengekalkan **Bahasa Melayu dan tulisan Jawi** (serta cuti Jumaat), sedangkan NNMB menggunakan bahasa Inggeris.',
          modelAnswerZh:
            '在联合形式上，NNMTB 是五个各自独立的州政府，而 NNMB 则是以吉隆坡为中心的中央集权联邦；在君主地位上，NNMTB 的统治者与州议会拥有比 NNMB 君主大得多的实权；在官方语言上，NNMTB 坚持以马来语和爪夷文作为官方语文（且周五放假），而 NNMB 则以英语为主。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Usaha pemimpin NNMTB memartabatkan **Bahasa Melayu**, **tulisan Jawi**, dan penglibatan anak watan berjaya mengekalkan identiti negeri. Mengapakah generasi hari ini perlu terus memelihara warisan bahasa dan jati diri kebangsaan dalam era globalisasi? [4 markah]',
          questionZh: '马来属邦领袖捍卫马来语、爪夷文及本土官员参与的努力，成功守护了各州的文化认同。为什么当今一代在全球化时代仍须继续维护民族语言遗产与国家认同？[4分]',
          expectedKeywordsBm: [
            'lambang identiti dan kedaulatan negara',
            'medium perpaduan kaum',
            'tidak hanyut budaya luar',
            'jati diri bangsa kukuh',
            'dihormati di persada dunia',
          ],
          modelAnswerBm:
            'Generasi hari ini perlu memelihara **Bahasa Melayu** dan warisan negara kerana ia merupakan **lambang identiti dan kedaulatan negara** yang membezakan Malaysia di persada antarabangsa. Bahasa kebangsaan juga berperanan sebagai **medium perpaduan utama** yang menyatupadukan masyarakat berbilang kaum. Dengan adanya **jati diri kebangsaan yang kukuh**, rakyat tidak akan mudah hanyut dengan pengaruh negatif budaya luar, sekali gus memastikan negara kita terus maju mengikut acuan sendiri dan **dihormati oleh dunia**.',
          modelAnswerZh:
            '【Fakta】当今一代必须守护马来语与国家文化遗产，因为它是国家身份认同与主权的象征。【Huraian】国语更是凝聚多元族群国民团结的核心纽带。【Contoh】拥有坚定的民族文化自信能防止国民在全球化浪潮中盲目迷失于不良外来文化，【Inferens】确保我国按照自身特色稳步迈向先进，赢得国际社会的尊重。',
        },
      ],
    },
  },
];

import type { OfficialSubtopic } from '../types/textbook';

const SUBTOPIC_1_1: OfficialSubtopic = {
  subtopicCode: '1.1',
  babNumber: 1,
  babTitleBm: 'Kedatangan Kuasa Barat',
  babTitleZh: '西方势力的到来',
  skCode: 'SK 7.1',
  spCodes: ['SP 7.1.1', 'K7.1.5'],
  titleBm: 'Kestabilan dan Kemakmuran Negara Kita',
  titleZh: '我国的政治稳定与经济繁荣',
  heroImages: [
    {
      imageKey: 'bab1_istana_melayu',
      captionBm:
        'Hierarki **Sistem Pemerintahan Beraja** yang tersusun bersama kedaulatan **undang-undang** menjamin kestabilan politik sebelum kedatangan kuasa Barat.',
      captionZh:
        '西方势力到来前，井然有序的君主统治金字塔与成文及不成文法律共同保障了国家政治稳定。',
      hotspots: [
        {
          x: 50,
          y: 24,
          termBm: 'Sultan / Raja (Peringkat Negeri)',
          meaningZh: '最高统治者：苏丹或拉惹（州级）',
          detailBm:
            '**Sultan** atau **Raja** mengetuai pentadbiran peringkat **negeri** dan menjadi lambang **kedaulatan**, perpaduan rakyat serta ketua agama Islam.',
          detailZh:
            '苏丹或拉惹统领州级最高行政，是国家主权、人民团结与伊斯兰教的最高象征。',
        },
        {
          x: 26,
          y: 54,
          termBm: 'Pembesar (Peringkat Jajahan / Daerah)',
          meaningZh: '封地或县区大臣（县级）',
          detailBm:
            '**Pembesar** dilantik oleh Sultan menerusi **surat tauliah** untuk menjaga keamanan, kemakmuran, kesetiaan dan mengutip **cukai** di jajahan atau daerah.',
          detailZh:
            '大臣获苏丹颁发委任状（surat tauliah），负责维护辖区治安、经济繁荣、人民效忠并征收赋税。',
        },
        {
          x: 74,
          y: 56,
          termBm: 'Hukum Kanun Melaka & Adat',
          meaningZh: '成文法典与传统习惯法',
          detailBm:
            'Pentadbiran diperkukuh oleh **undang-undang bertulis** seperti **Hukum Kanun Melaka** serta **undang-undang tidak bertulis** iaitu **Adat Perpatih** dan **Adat Temenggung**.',
          detailZh:
            '国家治理依靠《马六甲法典》等成文法，以及佩帕提习惯法与天猛公习惯法等不成文法维持公正。',
        },
        {
          x: 49,
          y: 82,
          termBm: 'Penghulu / Penggawa (Peringkat Kampung)',
          meaningZh: '村长或彭古鲁（甘榜基层）',
          detailBm:
            '**Penghulu** atau **Penggawa** mentadbir unit paling kecil iaitu **kampung** serta menyampaikan arahan raja atau pembesar kepada penduduk kampung.',
          detailZh:
            '彭古鲁（Penghulu/Penggawa）治理最小的甘榜行政单位，负责传达君主与大臣政令并维持村民效忠。',
        },
      ],
    },
    {
      imageKey: 'bab1_hasil_bumi_pelabuhan',
      captionBm:
        'Kemakmuran pelabuhan perdagangan diuruskan oleh **Syahbandar** dengan sistem **timbangan**, **sukatan** dan **mata wang** yang sistematik.',
      captionZh:
        '港口贸易在港务官（Syahbandar）管理下欣欣向荣，具备完善的称重、容量测量与金属货币制度。',
    },
    {
      imageKey: 'bab1_pendidikan_pondok',
      captionBm:
        'Perkembangan **pendidikan tidak formal** dan **pendidikan formal** di istana, masjid, pondok serta madrasah memartabatkan ilmu persuratan **Jawi**.',
      captionZh:
        '非正式家庭教育与王宫、清真寺、宗教私塾（Pondok）及宗教学校（Madrasah）的正规教育孕育了辉煌的爪夷文学术巨著。',
    },
  ],
  sections: [
    {
      sectionCode: '1.1(a)',
      headingBm: 'Kestabilan Sistem Pemerintahan dan Struktur Sosial',
      headingZh: '政治统治体系与社会结构的稳定',
      leadParagraphBm:
        'Sebelum kedatangan kuasa Barat, negara kita telah memiliki **sistem pemerintahan beraja** dan pentadbiran tempatan yang mantap serta diwarisi daripada **Kesultanan Melayu Melaka**, di samping sistem pentadbiran tersendiri yang sistematik di **Sarawak** dan **Sabah**.',
      leadParagraphZh:
        '在西方列强到来之前，我国早已拥有承袭自马六甲马来苏丹王朝的稳固君主统治制度，而砂拉越与沙巴也各自建立了井然有序的本土治理体系。',
      diagramKey: 'diag_1_1_hierarki_adat',
      bullets: [
        {
          tag: 'FAKTA',
          bm: 'Negeri-negeri Melayu mengamalkan **Sistem Pemerintahan Beraja** yang tersusun mengikut tiga peringkat hierarki utama iaitu peringkat **negeri**, peringkat **jajahan atau daerah**, dan peringkat **kampung**.',
          zh: '马来各州实行架构分明的君主统治制度（Sistem Pemerintahan Beraja），行政金字塔分为三级：州级（negeri）、殖民属地/县区级（jajahan/daerah）及甘榜村级（kampung）。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Pada peringkat **negeri**, pentadbiran diketuai oleh **Raja** atau **Sultan** yang menjadi lambang **kedaulatan** serta perpaduan rakyat, dengan dibantu oleh kaum **kerabat diraja** dan golongan **pembesar**.',
          zh: '在州级层面，拉惹或苏丹领导最高行政，作为国家主权与人民团结的象征，并由王室亲属及大臣协助施政。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Pada peringkat **jajahan atau daerah**, pentadbiran diuruskan oleh **pembesar** yang dilantik secara rasmi oleh Sultan melalui pemberian **surat tauliah**; tugas utama mereka ialah menjaga **keamanan**, mempertahankan kedaulatan negeri, mengekalkan **kesetiaan** rakyat serta menyerahkan sebahagian hasil dan **cukai** kepada kerajaan.',
          zh: '在县区层面，由苏丹颁发委任状（surat tauliah）正式册封的大臣负责管理；其核心职责是维护治安、捍卫州属主权、维系百姓效忠，并向朝廷上缴部分物产与赋税。',
        },
        {
          tag: 'CONTOH',
          bm: 'Pada peringkat **kampung** (unit paling kecil), ketua pentadbiran ialah **Penghulu** atau **Penggawa** yang menyampaikan arahan daripada raja atau pembesar kepada orang kampung, membekalkan tenaga tentera masa perang dan mengekalkan taat setia masyarakat.',
          zh: '在最小的甘榜（村级）单位，由村长（Penghulu 或 Penggawa）领导，负责向村民传达君主或大臣的指令、战时征召兵源并维持基层百姓的忠诚。',
        },
        {
          tag: 'CONTOH',
          bm: 'Di **Sarawak**, terdapat dua bentuk pentadbiran iaitu **Sistem Kesukuan** (diamalkan oleh masyarakat Iban, Bidayuh, Kenyah, Kelabit dan Kayan yang dipimpin oleh **Tuai Rumah**, **Tua Kapung**, **Peran Lepo** atau **Hipun Uma**) dan **Sistem Pentadbiran Tempatan** yang dipengaruhi **Kesultanan Brunei** menerusi pembesar seperti **Datu Patinggi**, **Datu Bandar** dan **Datu Temenggung**.',
          zh: '在砂拉越共有两种行政模式：一是部族制度（Sistem Kesukuan，由伊班长屋长 Tuai Rumah、比达友村长 Tua Kapung、肯雅族 Peran Lepo、加央族 Hipun Uma 等领导）；二是受文莱苏丹王朝影响的地方行政体系（委任拿督巴丁宜 Datu Patinggi、拿督班达 Datu Bandar 与拿督天猛公 Datu Temenggung 治理）。',
        },
        {
          tag: 'CONTOH',
          bm: 'Di **Sabah**, terdapat tiga corak pentadbiran iaitu **Sistem Kesukuan** (diketuai **Orang Tua** atau Ketua Kampung dibantu **Majlis Kampung** dan **Tukang-tukang Adat** dalam kalangan masyarakat Kadazandusun, Murut dan Bajau), **Sistem Pentadbiran Kesultanan** (**Kesultanan Brunei** di pantai barat dan **Kesultanan Sulu** menerusi golongan **Datu** di pantai timur), serta **Sistem Ketua Bebas** (seperti **Syarif Osman** di Marudu dan **Datu Kurunding** di Tungku).',
          zh: '在沙巴共有三种治理形态：一是部族制度（由长老 Orang Tua 在乡村议会与习俗官协助下领导卡达山杜顺、毛律与巴瑶社会）；二是苏丹王朝制度（西海岸属文莱势力、东海岸由苏禄王朝通过拿督 Datu 管辖）；三是独立首领制度（Sistem Ketua Bebas，如马鲁都的 Syarif Osman 与东古的 Datu Kurunding）。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Jangan keliru dalam peperiksaan: **Sarawak** mempunyai **dua** sistem pentadbiran utama, manakala **Sabah** mempunyai **tiga** sistem pentadbiran kerana wujudnya **Sistem Ketua Bebas**!',
          zh: '考试防混警示：砂拉越有 2 种行政制度（部族制 + 文莱地方大臣制），而沙巴有 3 种行政制度，多出了独特的「独立首领制度（Sistem Ketua Bebas）」！',
        },
      ],
    },
    {
      sectionCode: '1.1(b)',
      headingBm: 'Perundangan dan Hubungan Luar',
      headingZh: '法律制度与对外关系',
      leadParagraphBm:
        'Keadilan dan keamanan negara kita ditegakkan melalui pengamalan dua bentuk perundangan iaitu **undang-undang tidak bertulis (adat)** dan **undang-undang bertulis**, serta diperkukuh oleh jaringan **hubungan luar** yang bijaksana.',
      leadParagraphZh:
        '我国的社会公正与治安通过不成文法（传统习惯法）和成文法典双轨并立得以维护，并辅以审慎灵活的对外邦交关系。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Undang-undang tidak bertulis** dikenali sebagai **adat**; dua hukum adat utama di Negeri-negeri Melayu ialah **Adat Perpatih** dan **Adat Temenggung**, manakala masyarakat pribumi di Sarawak dan Sabah berpandukan hukum adat suku masing-masing secara tradisi lisan.',
          zh: '不成文法被称为习惯法（adat）；马来各州最主要的两大习惯法是佩帕提习惯法（Adat Perpatih）与天猛公习惯法（Adat Temenggung），而砂沙原住民则遵循各族口耳相传的传统习俗法。',
        },
        {
          tag: 'FAKTA',
          bm: '**Adat Perpatih** diasaskan oleh **Datuk Perpatih Nan Sebatang** dan diamalkan di **Negeri Sembilan** serta **Naning**; adat ini menentukan jurai keturunan (**nasab**) mengikut sebelah **ibu**, memberi keutamaan kepada **wanita** mewarisi **harta pusaka**, dan melaksanakan hukuman bersifat **pemulihan**.',
          zh: '佩帕提习惯法由 Datuk Perpatih Nan Sebatang 创立，施行于森美兰与南宁（Naning）；其血统世系（nasab）依循母系计算，祖传产业（harta pusaka）优先由女性继承，刑罚重在感化与改过自新（pemulihan）。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Dalam **Adat Perpatih**, pemilihan pemimpin dilakukan secara demokrasi dari peringkat bawah ke atas: **Anak Buah dan Ibu Soko** memilih **Buapak**, **Buapak** memilih **Lembaga**, **Lembaga** memilih **Undang**, dan empat orang **Undang** memilih **Yamtuan Besar** (Yang di-Pertuan Besar).',
          zh: '在佩帕提习惯法下，领袖推选采取自下而上的民主层级制：族人与母系长辈（Anak Buah & Ibu Soko）选出 Buapak，Buapak 选出 Lembaga，Lembaga 选出酋长（Undang），再由四大酋长共同选出最高统治者严端（Yamtuan Besar）。',
        },
        {
          tag: 'FAKTA',
          bm: '**Adat Temenggung** diasaskan oleh **Datuk Ketumanggungan** dan diamalkan di semua negeri Melayu lain kecuali Negeri Sembilan dan Naning; ia mengutamakan nasab sebelah **bapa**, mewariskan takhta kepada **anak lelaki** sulung raja, dan mengenakan hukuman bersifat **pembalasan** atau pencegahan.',
          zh: '天猛公习惯法由 Datuk Ketumanggungan 创立，通行于森美兰与南宁以外的其他马来州属；它依循父系血统，王位与遗产优先传予男性继承人，刑罚属于惩戒报复性质（pembalasan）以起到阻吓作用。',
        },
        {
          tag: 'CONTOH',
          bm: '**Undang-undang bertulis** yang menjadi rujukan pentadbiran dan kehakiman negeri Melayu merangkumi **Hukum Kanun Melaka**, **Undang-Undang Laut Melaka**, **Hukum Kanun Pahang** dan **Undang-Undang 99 Perak**.',
          zh: '成为马来各州行政与司法圭臬的成文法典包括：《马六甲法典》（Hukum Kanun Melaka）、《马六甲海事法典》（Undang-Undang Laut Melaka）、《彭亨法典》（Hukum Kanun Pahang）以及《霹雳九十九法典》（Undang-Undang 99 Perak）。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Pemerintah tempatan turut menjalin **hubungan luar** dalam bentuk **politik (diplomatik)**, **ekonomi (perdagangan)** dan keagamaan dengan kerajaan serantau serta kuasa luar bagi mengekalkan kedaulatan negeri dan memajukan perdagangan.',
          zh: '本土统治者亦积极与周边王朝及外国势力建立政治外交、经济贸易及宗教往来关系，以巩固国家主权并促进商业繁荣。',
        },
      ],
    },
    {
      sectionCode: '1.1(c)',
      headingBm: 'Kemakmuran Hasil Bumi, Hasil Alam dan Sistem Ekonomi',
      headingZh: '丰富的矿藏、自然资源与成熟经济体系',
      leadParagraphBm:
        'Negara kita dikurniakan kekayaan **hasil bumi**, **hasil hutan** dan **hasil laut** yang luar biasa serta dilengkapi pelabuhan entrepot, sistem **timbangan**, **sukatan**, **mata wang** dan **percukaian** yang teratur.',
      leadParagraphZh:
        '我国拥有得天独厚的地下矿藏、森林特产与海洋资源，并配备完善的转口港、度量衡、金属货币及税务制度。',
      imageKey: 'bab1_hasil_bumi_pelabuhan',
      imageCaptionBm:
        'Aktiviti perdagangan antarabangsa di pelabuhan Negeri-negeri Melayu dengan pengawasan **Syahbandar** serta penggunaan alat **timbangan** dan **sukatan**.',
      imageCaptionZh:
        '马来州属国际港口的繁忙贸易景象：港务官监管货物称重、容量测量与货币结算。',
      diagramKey: 'diag_1_1_timbangan_wang',
      bullets: [
        {
          tag: 'FAKTA',
          bm: 'Negara kita kaya dengan **hasil bumi** terutamanya **bijih timah**, **emas** dan **perak**; masyarakat tempatan melombong menggunakan kaedah tradisional iaitu **mendulang** dan **melampan** di lembah sungai.',
          zh: '我国地下矿产极为丰富，尤其是锡米（bijih timah）、黄金（emas）与白银（perak）；当地民众采用传统淘洗法（mendulang）和河沟冲选法（melampan）开采矿砂。',
        },
        {
          tag: 'CONTOH',
          bm: 'Kekayaan **hasil hutan** termasuk **rempah-ratus**, **damar**, **rotan**, **getah perca**, **getah jelutung**, **kapur barus** dan **kayu gaharu**, manakala **hasil laut** merangkumi **sirip ikan yu**, **timun laut (gamat)**, **rumpai laut** dan **mutiara**.',
          zh: '森林资源包括香料、树脂（damar）、藤条（rotan）、古塔胶（getah perca）、日落洞胶（getah jelutung）、樟脑（kapur barus）与沉香木（kayu gaharu）；海产则有鱼翅、海参（gamat）、海藻与珍珠。',
        },
        {
          tag: 'FAKTA',
          bm: 'Pelabuhan utama seperti **Melaka**, **Kedah**, **Klang** dan **Johor Lama** menjadi pusat perdagangan sibuk yang ditadbir oleh **Syahbandar**, manakala **sistem percukaian** dikenakan ke atas aktiviti perdagangan dan hasil pertanian sebagai sumber pendapatan negeri.',
          zh: '马六甲、吉打、巴生与旧柔佛等主要港口成为繁忙的国际商贸中心，由港务官（Syahbandar）井井有条地管理；规范的税务制度（sistem percukaian）则为州属提供了稳定的财政收入。',
        },
        {
          tag: 'CONTOH',
          bm: 'Masyarakat Melayu menggunakan sistem **timbangan** daripada pedagang China iaitu **tahil**, **kati** dan **pikul** (16 tahil = 1 kati; 100 kati = 1 pikul), manakala timbangan **emas dan perak** diambil daripada pedagang India iaitu **saga**, **mayam**, **bungkal** dan **kati** (12 saga = 1 mayam; 16 mayam = 1 bungkal; 12 bungkal = 1 kati).',
          zh: '马来社会采纳华商传入的称重单位：两（tahil）、斤（kati）与担（pikul）；至于黄金与白银的精密称重则采纳印商传入的单位：相思豆重（saga）、玛央（mayam）、邦卡（bungkal）与斤（kati）。',
        },
        {
          tag: 'CONTOH',
          bm: 'Bagi **sukatan** bijirin seperti beras dan bijih timah, unit **kepul**, **leng**, **kal**, **cupak** dan **gantang** digunakan (2 kepul = 1 leng; 2 leng = 1 kal; 4 kal = 1 cupak; 4 cupak = 1 gantang), manakala **ukuran** jarak pendek menggunakan anggota badan seperti **jengkal**, **hasta** dan **depa**.',
          zh: '在谷物与锡米的容量测量（sukatan）方面，使用 kepul、leng、kal、升（cupak）与斗（gantang）；长度测量（ukuran）则以身体部位为准，如拃（jengkal）、肘尺（hasta）与寻（depa）。',
        },
        {
          tag: 'CONTOH',
          bm: 'Urusan perdagangan berkembang daripada **sistem barter** (tukar barang) kepada penggunaan kulit siput **geweng/gerus** dan seterusnya **mata wang logam** timah serta emas seperti **Dinar Emas Kijang** (Kelantan), **Kupang Emas** (Terengganu), **Jongkong Tampang** (Pahang), **mata wang Ayam Jantan** (Kedah) dan **Pitis**.',
          zh: '商业交易从早期的物物交换（sistem barter）与贝壳币，演进为铸造精美的锡币与金币，例如吉兰丹鹿纹金币（Dinar Emas Kijang）、登嘉楼古邦金币（Kupang Emas）、彭亨锡锭币（Jongkong Tampang）、吉打公鸡币（Ayam Jantan）及皮蒂斯硬币（Pitis）。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Awas perangkap objektif! **Cupak** dan **gantang** ialah unit **sukatan** (isi padu), **tahil, kati, pikul** ialah unit **timbangan** barang dagangan, manakala **mayam** dan **bungkal** khusus untuk menimbang **emas serta perak**.',
          zh: '选择题高频陷阱：cupak 与 gantang 是「容量单位（sukatan）」，tahil、kati、pikul 是普通货物「重量单位（timbangan）」，而 saga、mayam、bungkal 专门用来称量「黄金与白银」！',
        },
      ],
    },
    {
      sectionCode: '1.1(d)',
      headingBm: 'Kegiatan Keintelektualan',
      headingZh: '知识文化与教育活动',
      leadParagraphBm:
        'Masyarakat tempatan amat menitikberatkan perkembangan ilmu pengetahuan menerusi **pendidikan tidak formal** dalam keluarga dan **pendidikan formal** di institusi keagamaan serta istana, sekali gus melahirkan karya persuratan agung bertulisan **Jawi**.',
      leadParagraphZh:
        '本土社会高度重视知识传承，通过家庭内的非正式教育以及王宫与宗教机构的正规教育，培育出有道德与技能的人才，并催生了璀璨的爪夷文历史文学巨著。',
      imageKey: 'bab1_pendidikan_pondok',
      imageCaptionBm:
        'Pengajian ilmu agama di institusi **pondok** dan **madrasah** serta penulisan karya sejarah dalam tulisan **Jawi**.',
      imageCaptionZh:
        '宗教私塾（Pondok）与宗教学校（Madrasah）的学术研习，以及爪夷文历史典籍的编纂。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Pendidikan tidak formal** merupakan pendidikan awal atau asuhan dalam institusi **keluarga** yang bertujuan melahirkan individu berakhlak mulia, berkelakuan sopan, bertatasusila dan berdikari.',
          zh: '非正式教育（Pendidikan tidak formal）是在家庭（keluarga）中进行的早期启蒙与教养，旨在培养品德高尚、举止得体、知礼守规且自力更生的人格。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Melalui pemerhatian dan latihan praktikal bersama ibu bapa, kanak-kanak mempelajari kemahiran pekerjaan seperti **bercucuk tanam**, **menangkap ikan**, **bertukang**, **berkraftangan**, ilmu perubatan tradisional, seni mempertahankan diri serta **adat resam** dan **pantang larang**.',
          zh: '孩子们通过日常观察与跟随父母实践，掌握耕种、捕鱼、木工、手工艺、传统草药与防身术等谋生技能，并学习传统礼俗与生活禁忌。',
        },
        {
          tag: 'CONTOH',
          bm: 'Pengajaran nilai murni disampaikan secara kreatif menerusi **pantun**, **syair**, **peribahasa**, **pepatah**, **teka-teki** dan **cerita teladan** seperti cerita **Si Tanggang Anak Derhaka** (mendidik anak tidak menderhaka kepada ibu bapa) dan **Anjing dengan Bayang-bayang** (menasihati seseorang supaya tidak bersikap tamak).',
          zh: '优良价值观通过班顿（pantun）、叙事诗（syair）、谚语、谜语与寓言故事生动传授，例如《逆子斯当刚》（教导切勿忤逆父母）与《狗与倒影》（告诫人们切勿贪婪）。',
        },
        {
          tag: 'FAKTA',
          bm: '**Pendidikan formal** bercorak Islam dan menekankan ilmu keagamaan serta pentadbiran yang dilaksanakan di **istana**, **masjid**, **surau**, **pondok** dan **madrasah**.',
          zh: '正规教育（Pendidikan formal）以伊斯兰教育为核心，注重宗教知识与治国学术，主要在王宫（istana）、清真寺（masjid）、祈祷室（surau）、宗教私塾（pondok）及宗教学校（madrasah）进行。',
        },
        {
          tag: 'HURAIAN',
          bm: '**Istana** berperanan sebagai pusat pengajian hal pentadbiran negeri dan sistem politik untuk golongan bangsawan; **pondok** (banyak di Kedah, Kelantan dan Terengganu) mengajar al-Quran, ilmu hadis dan bahasa Arab; manakala **madrasah** lebih sistematik kerana mempunyai **sukatan pelajaran**, dijalankan secara **kelas**, mengikut **tahap** (permulaan, pertengahan, pengkhususan) serta diawasi oleh **mudir** (guru besar) dan jawatankuasa kewangan.',
          zh: '王宫是贵族研习国家行政与政治的中心；宗教私塾（pondok）讲授《古兰经》、圣训与阿拉伯语；而宗教学校（madrasah）最为系统化：拥有正式课程纲要、分班授课、按初/中/专修分级，并由校长（mudir）及财务委员会监督管理。',
        },
        {
          tag: 'CONTOH',
          bm: 'Bahasa Melayu dan **tulisan Jawi** berkembang pesat sebagai **bahasa ilmu** dan **lingua franca** (bahasa perantaraan perdagangan), sekali gus melahirkan karya persuratan bersejarah seperti **Sulalatus Salatin (Sejarah Melayu)**, **Tuhfat al-Nafis**, **Hikayat Hang Tuah** dan **Misa Melayu**.',
          zh: '马来语与爪夷文（tulisan Jawi）蓬勃发展成为学术语言与国际商贸通用语（lingua franca），孕育出《马来纪年》（Sulalatus Salatin）、《珍贵的礼物》（Tuhfat al-Nafis）、《汉都亚传》与《马来米萨录》（Misa Melayu）等传世名著。',
        },
      ],
    },
  ],
  comparisonTables: [
    {
      titleBm: 'Perbandingan Adat Perpatih dengan Adat Temenggung',
      titleZh: '佩帕提习惯法（Adat Perpatih）与天猛公习惯法（Adat Temenggung）全面对比表',
      headers: [
        { bm: 'Aspek Perbandingan', zh: '比较维度' },
        { bm: '**Adat Perpatih**', zh: '佩帕提习惯法（母系民主）' },
        { bm: '**Adat Temenggung**', zh: '天猛公习惯法（父系君主）' },
      ],
      rows: [
        [
          { bm: 'Pengasas', zh: '创立者' },
          { bm: '**Datuk Perpatih Nan Sebatang**', zh: 'Datuk Perpatih Nan Sebatang' },
          { bm: '**Datuk Ketumanggungan**', zh: 'Datuk Ketumanggungan' },
        ],
        [
          { bm: 'Kawasan Pengamalan', zh: '实行地区' },
          { bm: '**Negeri Sembilan** dan **Naning**', zh: '森美兰与南宁（马六甲北部）' },
          {
            bm: 'Semua negeri Melayu lain (seperti Perak, Johor, Kedah, Pahang, Selangor)',
            zh: '除森美兰与南宁外的所有其他马来州属',
          },
        ],
        [
          { bm: 'Jurai Keturunan (**Nasab**)', zh: '血统世系计算' },
          { bm: 'Mengutamakan jurai keturunan sebelah **ibu**', zh: '依循母系血统（nasab ibu）' },
          { bm: 'Mengikut jurai keturunan sebelah **bapa**', zh: '依循父系血统（nasab bapa）' },
        ],
        [
          { bm: 'Pemilihan Pemimpin / Pemerintahan', zh: '领袖产生方式' },
          {
            bm: 'Dipilih dari bawah ke atas: **Anak Buah/Ibu Soko → Buapak → Lembaga → Undang → Yamtuan Besar**',
            zh: '自下而上民主推选：族人/Ibu Soko → Buapak → Lembaga → 四大酋长 Undang → 严端 Yamtuan Besar',
          },
          {
            bm: 'Pemerintahan bercorak **autokratik/warisan**; takhta diwarisi oleh **anak lelaki** raja',
            zh: '世袭君主制；王位优先由君主的男性子嗣继承',
          },
        ],
        [
          { bm: 'Pewarisan Harta & Perkahwinan', zh: '财产继承与婚姻' },
          {
            bm: 'Kaum **wanita** mewarisi **harta pusaka**; perkahwinan sesama **suku** adalah **dilarang**',
            zh: '女性继承祖传屋地产业；严禁同氏族（sesama suku）内部通婚',
          },
          {
            bm: 'Anak **lelaki** diutamakan dalam pembahagian harta mengikut hukum syarak; bebas berkahwin selagi tidak melanggar hukum Islam',
            zh: '依伊斯兰教法男性享有较高财产份额；只要符合教法即可通婚',
          },
        ],
        [
          { bm: 'Bentuk Hukuman', zh: '刑罚目的与性质' },
          {
            bm: 'Bersifat **pemulihan** (memberi kesedaran agar pesalah tidak mengulangi kesalahan)',
            zh: '感化修复性（pemulihan），旨在教育犯错者悔改',
          },
          {
            bm: 'Bersifat **pembalasan** dan pencegahan (hukuman tegas sebagai pengajaran)',
            zh: '惩戒报复性（pembalasan），通过严厉刑罚阻吓犯罪',
          },
        ],
      ],
    },
    {
      titleBm: 'Sistem Sukatan, Timbangan, Ukuran dan Mata Wang Negeri-negeri Melayu',
      titleZh: '马来各州传统度量衡与货币制度总览表',
      headers: [
        { bm: 'Kategori Ekonomi', zh: '经济制度类别' },
        { bm: 'Unit / Jenis Rasmi Buku Teks', zh: '课本官方单位或货币名称' },
        { bm: 'Kegunaan & Penukaran Penting', zh: '主要用途与关键换算' },
      ],
      rows: [
        [
          { bm: '**Sukatan** (Isi Padu)', zh: '容量测量（Sukatan）' },
          { bm: '**Kepul, Leng, Kal, Cupak, Gantang**', zh: 'Kepul、Leng、Kal、升（Cupak）、斗（Gantang）' },
          {
            bm: 'Menyukat beras, bijih timah, rempah dan garam (**4 kal = 1 cupak**, **4 cupak = 1 gantang**)',
            zh: '测量白米、锡米、香料与食盐（4 kal = 1 cupak；4 cupak = 1 gantang）',
          },
        ],
        [
          { bm: '**Timbangan** China', zh: '中式重量单位' },
          { bm: '**Tahil, Kati, Pikul**', zh: '两（Tahil）、斤（Kati）、担（Pikul）' },
          {
            bm: 'Menimbang barang dagangan pukal seperti bijih timah dan rempah (**16 tahil = 1 kati**, **100 kati = 1 pikul**)',
            zh: '称量大宗商品如锡米与香料（16两 = 1斤；100斤 = 1担）',
          },
        ],
        [
          { bm: '**Timbangan** India', zh: '印式贵金属重量单位' },
          { bm: '**Saga, Mayam, Bungkal, Kati**', zh: 'Saga、玛央（Mayam）、邦卡（Bungkal）、斤' },
          {
            bm: 'Menimbang logam berharga iaitu **emas** dan **perak** (**12 saga = 1 mayam**, **16 mayam = 1 bungkal**)',
            zh: '专门精密称量黄金与白银（12 saga = 1 mayam；16 mayam = 1 bungkal）',
          },
        ],
        [
          { bm: '**Ukuran** Anggota Badan', zh: '人体长度单位' },
          { bm: '**Jengkal, Hasta, Depa**', zh: '拃（Jengkal）、肘尺（Hasta）、寻（Depa）' },
          {
            bm: 'Mengukur panjang kain, kayu atau keluasan tanah secara praktikal',
            zh: '以手掌张开、手肘至指尖、双臂平伸测量布匹、木材或土地',
          },
        ],
        [
          { bm: '**Mata Wang** Negeri Melayu', zh: '马来各州金属货币' },
          {
            bm: '**Dinar Emas Kijang** (Kelantan), **Kupang Emas** (Terengganu), **Jongkong Tampang** (Pahang), **Ayam Jantan** (Kedah), **Pitis**',
            zh: '吉兰丹鹿币、登嘉楼古邦金币、彭亨锡锭币、吉打公鸡币、Pitis 锡币',
          },
          {
            bm: 'Melicinkan urusan jual beli di pelabuhan menggantikan **sistem barter**',
            zh: '取代早期物物交换，使国际港口大宗交易更加便捷高效',
          },
        ],
      ],
    },
  ],
  dialogues: [
    {
      speakerBm: 'Pembesar Daerah',
      roleBm: 'Wakil Pentadbiran Sultan',
      roleZh: '获赐委任状的县区大臣',
      emoji: '📜',
      lineBm:
        'Tuanku telah mengurniakan **surat tauliah** kepada hamba! Tugas hamba di daerah ini adalah menjaga **keamanan**, mengekalkan **kesetiaan** rakyat dan mengutip **cukai** dengan adil.',
      lineZh:
        '殿下已赐予微臣正式委任状（surat tauliah）！微臣在本县的重任就是维护治安、凝聚百姓效忠并公正征税。',
    },
    {
      speakerBm: 'Ibu Soko',
      roleBm: 'Tokoh Adat Perpatih Negeri Sembilan',
      roleZh: '森美兰佩帕提母系长老',
      emoji: '👵',
      lineBm:
        'Di Negeri Sembilan, kita menjunjung **Adat Perpatih**! **Harta pusaka** diwariskan kepada kaum **wanita**, dan pemilihan pemimpin bermula daripada **Anak Buah → Buapak → Lembaga → Undang → Yamtuan Besar**!',
      lineZh:
        '在森美兰，我们奉行佩帕提习惯法！祖传产业传给女性，连最高统治者严端都是由基层层层推选上去的，绝不独裁！',
    },
    {
      speakerBm: 'Syahbandar Pelabuhan',
      roleBm: 'Pegawai Perdagangan Pelabuhan',
      roleZh: '港口港务官',
      emoji: '⚖️',
      lineBm:
        'Wahai pedagang asing, gunakan **gantang** dan **cupak** untuk menyukat beras, **kati** dan **pikul** untuk menimbang **bijih timah**, serta **mayam** untuk menimbang **emas**!',
      lineZh:
        '各位外国商旅请注意：量米用斗（gantang）和升（cupak），称锡米用斤（kati）和担（pikul），称黄金就用玛央（mayam），公平交易童叟无欺！',
    },
    {
      speakerBm: 'Mudir Madrasah',
      roleBm: 'Ketua Institusi Pendidikan Formal',
      roleZh: '宗教学校校长（Mudir）',
      emoji: '🕌',
      lineBm:
        'Pengajian di **madrasah** kami tersusun mengikut **sukatan pelajaran** dan tahap kelas! Anak-anak muda juga tekun membaca karya **Sulalatus Salatin** dalam **tulisan Jawi**.',
      lineZh:
        '我们宗教学校（madrasah）按课程纲要分班分级教学！年轻学子们还勤奋研读爪夷文书写的《马来纪年》等传世典籍呢！',
    },
  ],
  memoryHackBm:
    'Formula **S-P-P** Hierarki Pemerintahan: **Sultan (Negeri) → Pembesar (Daerah, ada Surat Tauliah) → Penghulu (Kampung)**. Urutan **Adat Perpatih**: **"Anak-Ibu Buat Lemang Untuk Yamtuan"** = **Anak Buah/Ibu Soko → Buapak → Lembaga → Undang → Yamtuan Besar**!',
  memoryHackZh:
    '【王牌口诀】三级统治金字塔 S-P-P：Sultan（州）→ Pembesar（县，持委任状 surat tauliah）→ Penghulu（甘榜村）。佩帕提选君主五步梯：「Anak-Ibu Buat Lemang Untuk Yamtuan」= Anak Buah/Ibu Soko → Buapak → Lembaga → Undang → Yamtuan Besar（自下而上，一秒默写满分）！',
  subtopicMcqs: [
    {
      id: '1.1_mcq_1',
      spCode: 'SP 7.1.1',
      questionBm:
        'Apakah peranan utama **pembesar** pada peringkat **jajahan atau daerah** dalam Sistem Pemerintahan Beraja di Negeri-negeri Melayu?',
      questionZh: '在马来各州君主统治制度中，县区级大臣（pembesar）的主要职责是什么？',
      options: [
        {
          id: 'A',
          textBm: 'Menjadi lambang kedaulatan tertinggi seluruh negeri',
          textZh: '成为全州最高主权的象征',
        },
        {
          id: 'B',
          textBm: 'Menjaga keamanan, kemakmuran serta menyerahkan sebahagian hasil dan **cukai** kepada kerajaan',
          textZh: '维护治安与繁荣，并向朝廷上缴部分物产与赋税',
        },
        {
          id: 'C',
          textBm: 'Memilih **Yamtuan Besar** menerusi muafakat empat suku',
          textZh: '通过四氏族协商推选最高统治者严端',
        },
        {
          id: 'D',
          textBm: 'Mengawasi perjalanan kelas dan kewangan di **madrasah**',
          textZh: '监督宗教学校的班级运作与财务',
        },
      ],
      correctId: 'B',
      explanationBm:
        '**Pembesar** dilantik oleh Sultan menerusi **surat tauliah** bagi mentadbir jajahan/daerah, menjaga keamanan, mengekalkan kesetiaan rakyat dan menyerahkan sebahagian hasil serta **cukai** kepada kerajaan.',
      explanationZh:
        '苏丹通过委任状（surat tauliah）册封大臣治理县区，其职责是维护地方治安、保持百姓效忠并上缴赋税；全州主权象征属于苏丹（A）。',
    },
    {
      id: '1.1_mcq_2',
      spCode: 'SP 7.1.1',
      questionBm:
        'Pilih urutan pemilihan pemimpin dari bawah ke atas yang betul mengikut amalan **Adat Perpatih** di Negeri Sembilan.',
      questionZh: '请选出森美兰佩帕提习惯法（Adat Perpatih）自下而上推选领袖的正确顺序。',
      options: [
        {
          id: 'A',
          textBm: '**Anak Buah → Lembaga → Buapak → Undang → Yamtuan Besar**',
          textZh: 'Anak Buah → Lembaga → Buapak → Undang → Yamtuan Besar',
        },
        {
          id: 'B',
          textBm: '**Yamtuan Besar → Undang → Lembaga → Buapak → Anak Buah**',
          textZh: 'Yamtuan Besar → Undang → Lembaga → Buapak → Anak Buah',
        },
        {
          id: 'C',
          textBm: '**Anak Buah → Buapak → Lembaga → Undang → Yamtuan Besar**',
          textZh: 'Anak Buah → Buapak → Lembaga → Undang → Yamtuan Besar',
        },
        {
          id: 'D',
          textBm: '**Buapak → Anak Buah → Undang → Lembaga → Yamtuan Besar**',
          textZh: 'Buapak → Anak Buah → Undang → Lembaga → Yamtuan Besar',
        },
      ],
      correctId: 'C',
      explanationBm:
        'Dalam **Adat Perpatih**, **Anak Buah** (bersama Ibu Soko) memilih **Buapak**, **Buapak** memilih **Lembaga**, **Lembaga** memilih **Undang**, dan empat orang **Undang** memilih **Yamtuan Besar**.',
      explanationZh:
        '口诀「Anak-Ibu Buat Lemang Untuk Yamtuan」：Anak Buah → Buapak → Lembaga → Undang → Yamtuan Besar，体现基层民主精神。',
    },
    {
      id: '1.1_mcq_3',
      spCode: 'SP 7.1.1',
      questionBm:
        'Manakah antara berikut merupakan corak pentadbiran yang wujud di **Sabah** tetapi **tidak** diamalkan di Sarawak sebelum kedatangan kuasa Barat?',
      questionZh: '以下哪项是在西方到来前存在于沙巴、但并未在砂拉越实行的行政制度？',
      options: [
        {
          id: 'A',
          textBm: '**Sistem Ketua Bebas**',
          textZh: '独立首领制度（Sistem Ketua Bebas）',
        },
        {
          id: 'B',
          textBm: '**Sistem Kesukuan**',
          textZh: '部族制度（Sistem Kesukuan）',
        },
        {
          id: 'C',
          textBm: 'Pentadbiran pengaruh **Kesultanan Brunei**',
          textZh: '受文莱苏丹王朝影响的行政制度',
        },
        {
          id: 'D',
          textBm: '**Sistem Penggawa**',
          textZh: '彭古鲁村长制度（Sistem Penggawa）',
        },
      ],
      correctId: 'A',
      explanationBm:
        'Di **Sabah**, terdapat **Sistem Ketua Bebas** yang dipimpin oleh tokoh berani berketurunan kerabat diraja seperti **Syarif Osman** di Marudu dan **Datu Kurunding** di Tungku.',
      explanationZh:
        '沙巴除了部族制与文莱/苏禄王朝统治外，在苏丹势力未及的地区还拥有独特的「独立首领制度（Sistem Ketua Bebas）」，如马鲁都的 Syarif Osman。',
    },
    {
      id: '1.1_mcq_4',
      spCode: 'SP 7.1.1',
      questionBm:
        'Unit timbangan **saga**, **mayam** dan **bungkal** yang diambil daripada pedagang India digunakan oleh masyarakat Melayu khusus untuk menimbang...',
      questionZh: '马来社会向印度商人借鉴的 saga、mayam 与 bungkal 单位，专门用来称量什么物品？',
      options: [
        {
          id: 'A',
          textBm: 'Beras dan garam di pelabuhan',
          textZh: '港口的白米与食盐',
        },
        {
          id: 'B',
          textBm: '**Emas** dan **perak**',
          textZh: '黄金与白银',
        },
        {
          id: 'C',
          textBm: 'Rotan, damar dan kayu gaharu',
          textZh: '藤条、树脂与沉香木',
        },
        {
          id: 'D',
          textBm: 'Kain sutera dan tembikar China',
          textZh: '中国丝绸与陶瓷',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Unit **saga**, **mayam**, **bungkal** dan **kati** daripada pedagang India digunakan khusus untuk menimbang logam berharga iaitu **emas** dan **perak** (12 saga = 1 mayam; 16 mayam = 1 bungkal).',
      explanationZh:
        '印式精密重量单位 saga、mayam 与 bungkal 专门用于称量黄金与白银；白米使用容量单位 cupak/gantang，普通大宗货物使用中式 tahil/kati/pikul。',
    },
    {
      id: '1.1_mcq_5',
      spCode: 'K7.1.5',
      questionBm:
        'Mengapakah sistem **pendidikan madrasah** dianggap lebih sistematik berbanding institusi pengajian pondok?',
      questionZh: '为什么宗教学校（madrasah）的教育体系被认为比传统宗教私塾（pondok）更加系统化？',
      options: [
        {
          id: 'A',
          textBm: 'Hanya dikhaskan kepada kaum kerabat diraja di istana sahaja',
          textZh: '仅限王宫内的王室成员就读',
        },
        {
          id: 'B',
          textBm: 'Menggunakan cerita rakyat lisan seperti **Si Tanggang** sepenuhnya',
          textZh: '完全采用《逆子斯当刚》等口头民间故事授课',
        },
        {
          id: 'C',
          textBm: 'Mempunyai **sukatan pelajaran**, dijalankan secara **kelas** mengikut tahap serta diawasi oleh **mudir**',
          textZh: '拥有正式课程纲要、按程度分班授课，并由校长（mudir）监督管理',
        },
        {
          id: 'D',
          textBm: 'Tidak mempunyai had masa pengajian dan jadual waktu tetap',
          textZh: '没有修业年限与固定的上课时间表',
        },
      ],
      correctId: 'C',
      explanationBm:
        '**Madrasah** mempunyai **sukatan pelajaran** rasmi, dilaksanakan secara **kelas**, mempunyai tahap **permulaan, pertengahan dan pengkhususan**, serta diawasi oleh **mudir** dan jawatankuasa kewangan.',
      explanationZh:
        'Madrasah 具备现代学校特征：设有课程纲要（sukatan pelajaran）、按初/中/专修分班授课，并由校长（mudir）与财务委员会管理；无修业时间限制是 pondok 的特征。',
    },
  ],
  strukturQuestion: {
    id: '1.1_struktur_1',
    spCode: 'SP 7.1.1 / K7.1.5',
    stimulusBm:
      'Sebelum kedatangan kuasa Barat, negara kita telah mencapai **kestabilan politik**, keadilan **perundangan** serta **kemakmuran ekonomi** hasil kebijaksanaan pemerintah dan rakyat tempatan.',
    stimulusZh:
      '在西方势力到来之前，凭借本土统治者与人民的智慧，我国早已实现了政治稳定、法律公正与经济繁荣。',
    parts: [
      {
        partLabel: '(a)',
        marks: 3,
        questionBm:
          'Senaraikan **tiga** buah **undang-undang bertulis** yang menjadi panduan pentadbiran di Negeri-negeri Melayu.',
        questionZh: '列出三部成为马来各州行政指南的成文法典（undang-undang bertulis）。[3分]',
        expectedKeywordsBm: [
          'Hukum Kanun Melaka',
          'Undang-Undang Laut Melaka',
          'Hukum Kanun Pahang',
          'Undang-Undang 99 Perak',
        ],
        modelAnswerBm:
          'Tiga undang-undang bertulis tersebut ialah **Hukum Kanun Melaka**, **Undang-Undang Laut Melaka** dan **Hukum Kanun Pahang** (atau **Undang-Undang 99 Perak**).',
        modelAnswerZh:
          '三部成文法典分别是：《马六甲法典》（Hukum Kanun Melaka）、《马六甲海事法典》（Undang-Undang Laut Melaka）以及《彭亨法典》（Hukum Kanun Pahang，或《霹雳九十九法典》）。',
      },
      {
        partLabel: '(b)',
        marks: 3,
        questionBm:
          'Jelaskan keistimewaan **Adat Perpatih** yang diamalkan di Negeri Sembilan dan Naning dari segi **pemilihan pemimpin** dan **pewarisan harta**.',
        questionZh: '从「领袖推选」与「财产继承」两方面，说明森美兰与南宁所实行的佩帕提习惯法有何独特之处。[3分]',
        expectedKeywordsBm: [
          'bawah ke atas',
          'Anak Buah',
          'Buapak',
          'Lembaga',
          'Undang',
          'Yamtuan Besar',
          'wanita',
          'harta pusaka',
        ],
        modelAnswerBm:
          'Dari segi pemilihan pemimpin, pemimpin dipilih secara demokrasi dari peringkat **bawah ke atas** bermula daripada **Anak Buah** memilih **Buapak**, **Lembaga**, **Undang** sehinggalah empat **Undang** memilih **Yamtuan Besar**. Dari segi pewarisan harta, kaum **wanita** diberi keutamaan mewarisi **harta pusaka** mengikut nasab sebelah **ibu** supaya wanita tidak terabai.',
        modelAnswerZh:
          '在领袖推选方面，采取自下而上的民主推选制，由族人（Anak Buah）选出 Buapak、Lembaga、Undang，再由四大酋长选出严端（Yamtuan Besar）。在财产继承方面，依母系血统由女性继承祖传产业（harta pusaka），以保障女性生活。',
      },
      {
        partLabel: '(c)',
        marks: 4,
        questionBm:
          'Pada pandangan anda, mengapakah **kestabilan politik** amat penting bagi mengekalkan **kemakmuran ekonomi** sesebuah negara pada masa kini?',
        questionZh: '依你之见，为什么「政治稳定」对于维持当今一个国家的「经济繁荣」至关重要？（KBAT 高思维题）[4分]',
        expectedKeywordsBm: [
          'keamanan',
          'pelabur asing',
          'peluang pekerjaan',
          'campur tangan kuasa asing',
          'perpaduan',
        ],
        modelAnswerBm:
          '**Kestabilan politik** menjamin **keamanan** dan ketenteraman dalam negara (F). Keadaan yang aman akan meningkatkan keyakinan **pelabur asing** dan pedagang untuk melabur modal dalam sektor industri seperti teknologi tinggi (H/C). Hal ini dapat mewujudkan banyak **peluang pekerjaan** serta mengelakkan risiko **campur tangan kuasa asing** yang boleh menggugat kedaulatan negara (I).',
        modelAnswerZh:
          '政治稳定能保障国内和平与社会安宁（F）。和平稳定的环境能增强外资与商家的信心，吸引他们投资高科技工业等领域（H/C）。这不仅能创造大量就业机会、提升国民收入，还能避免外国势力趁乱干预我国主权（I）。',
      },
    ],
  },
};

const SUBTOPIC_1_2: OfficialSubtopic = {
  subtopicCode: '1.2',
  babNumber: 1,
  babTitleBm: 'Kedatangan Kuasa Barat',
  babTitleZh: '西方势力的到来',
  skCode: 'SK 7.1',
  spCodes: ['SP 7.1.2', 'K7.1.6'],
  titleBm: 'Faktor Kedatangan Kuasa Barat ke Negara Kita',
  titleZh: '西方势力来到我国的因素',
  heroImages: [
    {
      imageKey: 'bab1_west_arrival',
      captionBm:
        'Perubahan matlamat kedatangan kuasa Barat daripada pencarian **rempah-ratus dan 3G** pada abad ke-16 kepada penjajahan **bahan mentah industri** menjelang abad ke-19 dan ke-20.',
      captionZh:
        '西方势力东来的动机演变：从16世纪寻找香料与3G目标，演变为19至20世纪全面争夺工业原料与殖民地。',
      hotspots: [
        {
          x: 22,
          y: 34,
          termBm: 'Matlamat 3G (Abad ke-16)',
          meaningZh: '16世纪三大目标：财富、宗教、荣耀',
          detailBm:
            'Portugis dan Sepanyol didorong oleh semangat **Gold (Kekayaan)**, **Gospel (Keagamaan Kristian)** dan **Glory (Kemasyhuran)** serta perdagangan **rempah-ratus**.',
          detailZh:
            '16世纪葡萄牙与西班牙受黄金财富（Gold）、传播基督教（Gospel）与国家荣耀（Glory）驱使东来抢夺香料贸易。',
        },
        {
          x: 52,
          y: 28,
          termBm: 'Revolusi Perindustrian (Abad ke-17 & 18)',
          meaningZh: '17至18世纪：英国工业革命爆发',
          detailBm:
            '**Revolusi Perindustrian** di Britain menyebabkan pengeluaran barangan kilang secara besar-besaran yang memerlukan **bahan mentah** berterusan dan **pasaran luas**.',
          detailZh:
            '英国率先爆发工业革命，机器大规模生产迫切需要持续不断的工业原料供应以及广阔的海外商品倾销市场。',
        },
        {
          x: 78,
          y: 52,
          termBm: 'Pembukaan Terusan Suez (1869) & Kapal Wap',
          meaningZh: '1869年苏伊士运河通航与蒸汽船',
          detailBm:
            '**Terusan Suez** memendekkan jarak pelayaran Eropah ke Alam Melayu, manakala **kapal wap** membawa muatan lebih banyak dengan lebih cepat dan selamat.',
          detailZh:
            '1869年苏伊士运河开通大幅缩短欧亚航程，配合载货量大、速度快又安全的蒸汽船，加速西方涌入东方。',
        },
        {
          x: 42,
          y: 76,
          termBm: 'Slogan Beban Orang Putih',
          meaningZh: '殖民借口：「白人的负担」口号',
          detailBm:
            'British dan Belanda menggunakan slogan **Beban Orang Putih**, manakala Perancis menggunakan **Tugas Menyebarkan Tamadun** untuk mewajarkan penjajahan.',
          detailZh:
            '英国与荷兰高喊「白人的负担」，法国则打出「传播文明的使命」口号，以此美化并合理化其侵略殖民行为。',
        },
      ],
    },
    {
      imageKey: 'bab1_terusan_suez_kapal_wap',
      captionBm:
        '**Pembukaan Terusan Suez (1869)**, ciptaan **kapal wap** dan **telegraf** mempercepat kemaraan kuasa Barat ke Alam Melayu.',
      captionZh:
        '1869年苏伊士运河开通、蒸汽船与电报技术的诞生，彻底打通了西方帝国主义扩张的高速通道。',
    },
  ],
  sections: [
    {
      sectionCode: '1.2(a)',
      headingBm: 'Kedatangan Kuasa Barat pada Abad ke-16',
      headingZh: '16世纪西方势力到来的四大因素',
      leadParagraphBm:
        'Pada **abad ke-16**, kedatangan kuasa Barat seperti **Portugis** dan **Sepanyol** ke Alam Melayu didorong oleh kemuncak kegemilangan pelayaran mereka serta matlamat **3G (Gold, Gospel, Glory)**.',
      leadParagraphZh:
        '在16世纪，葡萄牙与西班牙率先东来马来世界，主要受大航海时代巅峰期的香料暴利及「3G目标（财富、宗教、荣耀）」所驱动。',
      diagramKey: 'diag_1_2_faktor_barat',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Barangan mewah**: Kuasa-kuasa Barat ingin mendapatkan bahan mewah secara terus dari Timur terutamanya **rempah-ratus** (seperti **bunga cengkih**, **buah pala**, **kulit kayu manis** dan **lada hitam**) dari Kepulauan Melayu serta **teh**, **sutera** dan **tembikar** dari **China**.',
          zh: '获取东方奢侈品（Barangan mewah）：西方渴望直接从马来群岛收购高价香料（丁香、肉豆蔻、肉桂、黑胡椒），并从中国获取茶叶、丝绸与精美瓷器。',
        },
        {
          tag: 'HURAIAN',
          bm: '**Pusat pengumpulan barang**: Sebagai tukaran untuk membeli teh dari China, pedagang Barat memerlukan **emas**, **perak**, **bijih timah** dan **rempah-ratus** yang banyak terdapat di Kepulauan Melayu; oleh itu mereka memerlukan pusat pengumpulan barang di pertengahan jalan perdagangan **antara India dan China**.',
          zh: '货物集散中心（Pusat pengumpulan barang）：由于中国只接受黄金、白银、锡米与香料来交换茶叶，西方迫切需要在印度与中国航线中途设立集散据点以搜集马来群岛物产。',
        },
        {
          tag: 'HURAIAN',
          bm: '**Pelabuhan persinggahan**: Angin monsun (**Monsun Barat Daya** dan **Monsun Timur Laut**) memainkan peranan penting menentukan masa pelayaran; kuasa Barat memerlukan pelabuhan yang selamat untuk berlindung sementara menunggu **peralihan angin monsun**, mengisi bekalan **air bersih** dan **makanan**, serta kemudahan **membaiki kapal**.',
          zh: '中途停靠港（Pelabuhan persinggahan）：帆船航行受西南季候风与东北季候风支配，西方船队需要安全避风港等待季候风转换，同时补充淡水粮食及维修受损船只。',
        },
        {
          tag: 'FAKTA',
          bm: '**Agama Kristian**: Agama menjadi antara faktor penting penjajahan kuasa Barat seperti **Portugis** dan **Sepanyol** ke seberang laut; matlamat mereka dirumuskan sebagai **Kekayaan, Keagamaan dan Kemasyhuran** (**Gold, Gospel and Glory — 3G**).',
          zh: '传播基督教（Agama Kristian）：宗教热忱是葡萄牙与西班牙海外扩张的关键动力，其殖民总目标概括为财富（Kekayaan/Gold）、宗教（Keagamaan/Gospel）与荣耀（Kemasyhuran/Glory）。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Ingat! Sekiranya soalan UASA bertanya faktor kedatangan kuasa Barat pada **Abad ke-16**, jawapannya mestilah berkisar pada **barangan mewah (rempah)**, **pusat pengumpulan barang**, **pelabuhan persinggahan (angin monsun)** dan **agama Kristian (3G)** — jangan masukkan Terusan Suez atau kereta!',
          zh: '考试审题铁律：若题目问「16世纪（Abad ke-16）」西方东来原因，只能答奢侈品香料、集散中心、季候风停靠港与传播基督教（3G），切勿把19世纪的苏伊士运河或汽车工业混进去！',
        },
      ],
    },
    {
      sectionCode: '1.2(b)',
      headingBm: 'Kedatangan Kuasa Barat pada Abad ke-17 dan Abad ke-18',
      headingZh: '17至18世纪西方势力到来的核心因素：工业革命',
      leadParagraphBm:
        'Menjelang **abad ke-17 dan abad ke-18**, kebangkitan **Revolusi Perindustrian** di Eropah mengubah corak dasar kuasa Barat daripada sekadar berdagang rempah kepada usaha mencari tanah jajahan secara agresif.',
      leadParagraphZh:
        '进入17与18世纪，欧洲工业革命的兴起彻底改变了西方列强的东方政策，从单纯的香料买卖转向积极争夺海外殖民地。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Revolusi Perindustrian** bermula di **Britain** sejak **abad ke-17** sebelum diikuti oleh negara-negara Eropah lain seperti **Jerman** dan **Perancis** pada abad menjelang ke-19.',
          zh: '工业革命（Revolusi Perindustrian）自17世纪率先在英国（Britain）爆发，随后扩展至德国（Jerman）与法国（Perancis）等欧洲国家。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Selepas berlakunya Revolusi Perindustrian, dasar kuasa-kuasa Barat berubah corak: mereka perlu mencari **pusat perdagangan** dan **menguasai tanah jajahan** yang dapat membekalkan **bahan mentah** bagi keperluan kilang perusahaan mereka secara **berterusan**.',
          zh: '工业革命后，西方政策发生根本转变：他们必须寻找贸易据点并直接占领殖民地，以确保国内机器工厂获得源源不断的原材料（bahan mentah）供应。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Penggunaan mesin membolehkan barangan kilang dikeluarkan secara **besar-besaran**; pertambahan hasil pengeluaran ini menyebabkan kuasa Barat perlu mencari **kawasan pasaran yang luas** di Timur untuk memasarkan barangan siap mereka supaya keuntungan dapat dimaksimumkan.',
          zh: '机器化使工厂商品得以大规模量产（pengeluaran secara besar-besaran），国内市场饱和迫使西方列强在东方寻找广阔的新市场（pasaran yang luas）以倾销工业制成品并赚取最高利润。',
        },
        {
          tag: 'CONTOH',
          bm: 'Bagi menjayakan matlamat perdagangan ini, **Syarikat Hindia Timur Inggeris (SHTI)** ditubuhkan pada tahun **1600** dan **Syarikat Hindia Timur Belanda (VOC)** pada tahun **1602**.',
          zh: '为实现垄断东方贸易与原料的目标，英国东印度公司（SHTI，1600年）与荷兰东印度公司（VOC，1602年）相继成立。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Tiga frasa wajib bagi **Abad ke-17 & 18**: **Revolusi Perindustrian**, **bekalan bahan mentah berterusan**, dan **pasaran yang luas** kerana pengeluaran secara **besar-besaran**.',
          zh: '17至18世纪必背三大得分关键词：工业革命（Revolusi Perindustrian）、持续不断的原料供应（bekalan bahan mentah berterusan）、因大规模生产而急需广阔市场（pasaran yang luas）。',
        },
      ],
    },
    {
      sectionCode: '1.2(c)',
      headingBm: 'Kedatangan Kuasa Barat pada Abad ke-19 dan Abad ke-20',
      headingZh: '19至20世纪西方势力全面入侵的八大因素',
      leadParagraphBm:
        'Pada **abad ke-19 dan abad ke-20**, ledakan teknologi pengangkutan, perhubungan dan perindustrian moden serta persaingan imperialisme mendorong kuasa Barat meluaskan penjajahan ke seluruh negara kita.',
      leadParagraphZh:
        '到了19与20世纪，现代交通、通讯与新兴工业技术的爆发，加上帝国主义争霸与殖民口号，推动西方势力全面吞并我国各州。',
      imageKey: 'bab1_terusan_suez_kapal_wap',
      imageCaptionBm:
        'Gabungan **Terusan Suez (1869)**, **kapal wap**, **telegraf**, **industri kereta** dan **industri mengetin** memacu imperialisme Barat abad ke-19 dan ke-20.',
      imageCaptionZh:
        '1869年苏伊士运河、蒸汽船、电报、汽车轮胎与食品罐头工业共同引爆了19至20世纪的西方殖民浪潮。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**(1) Perkembangan industri kereta**: Kemunculan perusahaan kereta dan ciptaan **tayar** menambahkan permintaan mendadak terhadap **getah asli**; selain itu getah asli merupakan bahan penting dalam perusahaan **penebat barangan elektrik**.',
          zh: '（1）汽车工业发展：汽车制造业兴起及橡胶充气轮胎的发明，使天然橡胶（getah asli）需求暴增；此外天然橡胶也是电器绝缘体（penebat barangan elektrik）不可或缺的材料。',
        },
        {
          tag: 'FAKTA',
          bm: '**(2) Kesuburan tanah dan kekayaan hasil bumi**: Negara kita mempunyai tanah yang luas, subur dan iklim sesuai untuk tanaman berorientasikan eksport (seperti **getah**, **tebu**, **tembakau** dan **padi**) serta kaya dengan hasil bumi seperti **bijih timah**, **bijih besi**, **emas**, **petroleum** dan **arang batu**.',
          zh: '（2）土地肥沃与矿藏丰富：我国拥有广袤肥沃的土地与适宜出口经济作物（橡胶、甘蔗、烟草、稻米）的热带气候，并蕴藏丰富的锡矿、铁矿、黄金、石油与煤炭。',
        },
        {
          tag: 'CONTOH',
          bm: '**(3) Industri mengetin**: Pada abad ke-19, terdapat beberapa jenis ciptaan baharu di **Amerika Syarikat** yang memerlukan penggunaan **bijih timah**, iaitu industri **mengetin makanan**, **mengetin minuman**, membuat **bumbung rumah** dan **tong minyak**; akibatnya harga bijih timah melambung tinggi.',
          zh: '（3）罐头工业：19世纪美国发明多项大量消耗锡的新技术——食品罐头、饮料罐头、制造房屋屋顶及油桶，促使国际锡价飙升，西方急欲控制马来亚锡矿。',
        },
        {
          tag: 'FAKTA',
          bm: '**(4) Pembukaan Terusan Suez (1869)** dan **(5) Ciptaan kapal wap**: **Terusan Suez** yang menghubungkan **Pelabuhan Said** di Laut Mediterranean dan **Suez** di Laut Merah telah **memendekkan jarak dan masa pelayaran** antara Barat dengan Timur, manakala **kapal wap** dapat membawa **muatan yang banyak** serta menjadikan perjalanan lebih **cepat dan selamat**.',
          zh: '（4）1869年苏伊士运河通航与（5）蒸汽船发明：连接地中海塞得港（Pelabuhan Said）与红海苏伊士（Suez）的运河大幅缩短东西方航程与成本；蒸汽船则载货量大、航速快且不受风向限制，更加安全。',
        },
        {
          tag: 'HURAIAN',
          bm: '**(6) Persaingan kuasa Barat** dan **(7) Ciptaan telegraf**: Semangat bersaing antara **Britain**, **Jerman**, **Perancis**, **Sepanyol** dan **Amerika Syarikat** menjadikan keluasan tanah jajahan sebagai lambang kemegahan kuasa besar; sementara teknologi **telegraf** membolehkan kuasa Barat memberikan **arahan yang lebih cepat dan berkesan** kepada pegawai di tanah jajahan serta memudahkan ahli perniagaan menghubungi wakil mereka di Timur.',
          zh: '（6）列强争霸与（7）电报发明：英、德、法、西、美争相抢夺殖民地以彰显大国地位；电报（telegraf）技术则让欧洲政府能向殖民地官员迅速下达指令，并方便欧美商人与东方代理即时联系。',
        },
        {
          tag: 'FAKTA',
          bm: '**(8) Slogan "Beban Orang Putih"**: Kuasa Barat seperti **British** dan **Belanda** menggunakan slogan **Beban Orang Putih** dengan mendakwa mereka lebih maju dan bertamadun serta bertanggungjawab membantu masyarakat Timur, manakala **Perancis** menggunakan slogan **Tugas Menyebarkan Tamadun** kepada penduduk dunia bukan Barat.',
          zh: '（8）「白人的负担」口号：英国与荷兰打着「白人的负担（Beban Orang Putih）」旗号，自诩文明先进、有责任开化东方民族；法国则使用「传播文明的使命（Tugas Menyebarkan Tamadun）」作为侵略借口。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Awas kekeliruan popular! **Beban Orang Putih** = **British & Belanda**; **Tugas Menyebarkan Tamadun** = **Perancis**. Jangan sesekali terbalikkan kedua-dua slogan ini!',
          zh: '必考易混点：「白人的负担（Beban Orang Putih）」属于英国与荷兰；「传播文明的使命（Tugas Menyebarkan Tamadun）」专属于法国，考试绝不可张冠李戴！',
        },
      ],
    },
  ],
  comparisonTables: [
    {
      titleBm: 'Perbandingan Faktor Kedatangan Kuasa Barat Mengikut Abad',
      titleZh: '按世纪划分的西方势力东来因素总对比表（16世纪 vs 17–18世纪 vs 19–20世纪）',
      headers: [
        { bm: 'Zaman / Abad', zh: '时代 / 世纪' },
        { bm: 'Kuasa Barat Utama', zh: '主要西方列强' },
        { bm: 'Faktor Utama Kedatangan', zh: '东来核心驱动因素' },
      ],
      rows: [
        [
          { bm: '**Abad ke-16**', zh: '16世纪' },
          { bm: '**Portugis** dan **Sepanyol**', zh: '葡萄牙与西班牙' },
          {
            bm: '1. **Barangan mewah** (rempah-ratus, teh, sutera, tembikar)\n2. **Pusat pengumpulan barang** (antara India–China)\n3. **Pelabuhan persinggahan** (angin monsun)\n4. **Agama Kristian** (**3G: Kekayaan, Keagamaan, Kemasyhuran**)',
            zh: '1. 东方奢侈品（香料、茶、丝绸、瓷器）\n2. 印中航线货物集散中心\n3. 季候风中途停靠港\n4. 传播基督教（3G：财富、宗教、荣耀）',
          },
        ],
        [
          { bm: '**Abad ke-17 dan Abad ke-18**', zh: '17世纪与18世纪' },
          { bm: '**Belanda**, **British** dan **Perancis**', zh: '荷兰、英国与法国' },
          {
            bm: '1. **Revolusi Perindustrian** bermula di Britain\n2. Keperluan **bekalan bahan mentah berterusan** untuk kilang\n3. Pengeluaran **besar-besaran** memerlukan **kawasan pasaran yang luas**',
            zh: '1. 英国爆发工业革命并扩展至欧洲\n2. 工厂急需持续不断的工业原料供应\n3. 机器大规模生产急需广阔海外销售市场',
          },
        ],
        [
          { bm: '**Abad ke-19 dan Abad ke-20**', zh: '19世纪与20世纪' },
          {
            bm: '**Britain**, **Belanda**, **Perancis**, **Jerman**, **Sepanyol**, **Amerika Syarikat**',
            zh: '英、荷、法、德、西、美列强',
          },
          {
            bm: '1. **Industri kereta** (getah asli: tayar & penebat elektrik)\n2. **Kesuburan tanah & kekayaan hasil bumi**\n3. **Industri mengetin** (bijih timah)\n4. **Pembukaan Terusan Suez (1869)**\n5. **Ciptaan kapal wap**\n6. **Persaingan kuasa Barat**\n7. **Ciptaan telegraf**\n8. **Slogan Beban Orang Putih** & **Tugas Menyebarkan Tamadun**',
            zh: '1. 汽车工业（天然胶制轮胎与电绝缘体）\n2. 肥沃土地与丰富矿产\n3. 罐头工业（急需锡米）\n4. 1869年苏伊士运河通航\n5. 蒸汽船发明\n6. 列强殖民争霸\n7. 电报发明\n8. 白人的负担与传播文明口号',
          },
        ],
      ],
    },
  ],
  dialogues: [
    {
      speakerBm: 'Kapten Pelayar Portugis (Abad ke-16)',
      roleBm: 'Penjelajah Zaman 3G',
      roleZh: '16世纪葡萄牙航海船长',
      emoji: '⛵',
      lineBm:
        'Layar menuju Melaka! Kita mahu menguasai perdagangan **rempah-ratus** seperti **bunga cengkih** dan **buah pala**, mencari **pelabuhan persinggahan** angin monsun serta membawa semangat **Kekayaan, Keagamaan dan Kemasyhuran (3G)**!',
      lineZh:
        '扬帆驶向马六甲！我们要垄断丁香与肉豆蔻等高价香料、建立季候风停靠港，实现财富、宗教与荣耀（3G）！',
    },
    {
      speakerBm: 'Pemilik Kilang Britain (Abad ke-18)',
      roleBm: 'Tokoh Revolusi Perindustrian',
      roleZh: '18世纪英国工业革命厂主',
      emoji: '🏭',
      lineBm:
        'Mesin wap kilang saya mengeluarkan kain dan barangan secara **besar-besaran**! Kerajaan mesti mencari tanah jajahan di Timur untuk bekalan **bahan mentah berterusan** dan **pasaran yang luas**!',
      lineZh:
        '我的蒸汽机工厂正在大规模生产商品！政府必须在东方夺取殖民地，确保原料不断供应并开辟广阔的倾销市场！',
    },
    {
      speakerBm: 'Pegawai Kolonial Abad ke-19',
      roleBm: 'Ejen Imperialisme Moden',
      roleZh: '19世纪西方殖民官员',
      emoji: '🚢',
      lineBm:
        'Sejak **Terusan Suez dibuka pada tahun 1869**, **kapal wap** kami tiba jauh lebih cepat! Tambahan pula arahan melalui **telegraf** sampai serta-merta untuk kami menguasai **bijih timah** dan **getah asli** atas nama **Beban Orang Putih**!',
      lineZh:
        '自1869年苏伊士运河通航后，我们的蒸汽船航速倍增！再加上电报即时传达指令，我们就能打着「白人的负担」旗号迅速控制锡矿与天然橡胶！',
    },
  ],
  memoryHackBm:
    'Formula **3 Zaman**: **Abad 16 = 3G + Rempah + Monsun**; **Abad 17/18 = Revolusi Perindustrian (Bahan Mentah + Pasaran Luas)**; **Abad 19/20 = "S-K-T-K-T-P-S-T"** (**Suez 1869, Kapal Wap, Telegraf, Kereta/Getah, Tin/Mengetin, Persaingan, Slogan Beban Orang Putih, Tanah Subur**)!',
  memoryHackZh:
    '【三世纪秒杀记忆法】16世纪记「3G + 香料 + 季候风避风港」；17-18世纪记「工业革命 = 要原料 + 要大市场」；19-20世纪记八大神器：「三科技（1869苏伊士运河、蒸汽船、电报）+ 两工业（汽车轮胎抢橡胶、美国罐头抢锡米）+ 一肥土 + 一争霸 + 一虚伪口号（英荷白人负担 / 法国传播文明）」！',
  subtopicMcqs: [
    {
      id: '1.2_mcq_1',
      spCode: 'SP 7.1.2',
      questionBm:
        'Mengapakah kuasa Barat memerlukan **pelabuhan persinggahan** di Alam Melayu pada **abad ke-16**?',
      questionZh: '为什么西方列强在16世纪需要在马来世界寻找中途停靠港（pelabuhan persinggahan）？',
      options: [
        {
          id: 'A',
          textBm: 'Untuk memasang talian **telegraf** dasar laut antara London dengan Singapura',
          textZh: '为了铺设连接伦敦与新加坡的海底电报电缆',
        },
        {
          id: 'B',
          textBm: 'Untuk berlindung sementara menunggu peralihan **angin monsun**, membaiki kapal serta mengisi bekalan air dan makanan',
          textZh: '为了等待季候风转换避风、维修船只并补充淡水与食物',
        },
        {
          id: 'C',
          textBm: 'Untuk mengeksport tayar kereta dan penebat barangan elektrik ke Eropah',
          textZh: '为了向欧洲出口汽车轮胎与电器绝缘材料',
        },
        {
          id: 'D',
          textBm: 'Untuk melombong petroleum dan arang batu bagi kegunaan kapal selam',
          textZh: '为了开采石油与煤炭供潜艇使用',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Pada **abad ke-16**, kapal layar bergantung pada tiupan **angin monsun**; kuasa Barat memerlukan pelabuhan persinggahan untuk menunggu peralihan angin monsun, membaiki kapal serta mendapatkan bekalan air dan makanan.',
      explanationZh:
        '16世纪帆船依赖季候风航行，必须在中途停靠港等待季候风转向并补给淡水粮食及修船；电报、汽车轮胎与石油皆属19至20世纪因素。',
    },
    {
      id: '1.2_mcq_2',
      spCode: 'SP 7.1.2',
      questionBm:
        'Apakah kesan utama tercetusnya **Revolusi Perindustrian** di Britain pada **abad ke-17 dan abad ke-18** terhadap dasar kuasa Barat di Timur?',
      questionZh: '17至18世纪英国爆发工业革命，对西方列强在东方的政策产生了什么主要影响？',
      options: [
        {
          id: 'A',
          textBm: 'Kuasa Barat menghentikan semua perdagangan dengan China dan India',
          textZh: '西方列强停止与中国和印度的一切贸易往来',
        },
        {
          id: 'B',
          textBm: 'Kuasa Barat hanya menumpukan penyebaran agama Kristian di Melaka',
          textZh: '西方列强只专注于在马六甲传播基督教',
        },
        {
          id: 'C',
          textBm: 'Kuasa Barat mencari tanah jajahan bagi mendapatkan bekalan **bahan mentah** berterusan dan **kawasan pasaran yang luas**',
          textZh: '西方列强积极夺取殖民地以获取持续的原料供应与广阔的销售市场',
        },
        {
          id: 'D',
          textBm: 'Kuasa Barat menyerahkan semua pelabuhan mereka kepada pemerintah tempatan',
          textZh: '西方列强将所有港口交还给本土统治者',
        },
      ],
      correctId: 'C',
      explanationBm:
        '**Revolusi Perindustrian** menyebabkan barangan dikeluarkan secara besar-besaran sehingga kuasa Barat memerlukan bekalan **bahan mentah** berterusan dan **pasaran yang luas** di Timur.',
      explanationZh:
        '工业革命带来机器大规模量产，促使西方从单纯香料贸易转向占领殖民地，以保障持续原料供应和广阔商品倾销市场。',
    },
    {
      id: '1.2_mcq_3',
      spCode: 'SP 7.1.2',
      questionBm:
        'Perkembangan ciptaan baharu di **Amerika Syarikat** pada abad ke-19 iaitu industri **mengetin makanan**, membuat **bumbung rumah** dan **tong minyak** telah meningkatkan permintaan terhadap...',
      questionZh: '19世纪美国新兴的食品罐头、房屋屋顶及油桶制造业，大幅推高了对我国哪种原料的需求？',
      options: [
        {
          id: 'A',
          textBm: '**Getah asli**',
          textZh: '天然橡胶（Getah asli）',
        },
        {
          id: 'B',
          textBm: '**Bijih timah**',
          textZh: '锡米（Bijih timah）',
        },
        {
          id: 'C',
          textBm: '**Kapur barus**',
          textZh: '樟脑（Kapur barus）',
        },
        {
          id: 'D',
          textBm: '**Bunga cengkih**',
          textZh: '丁香（Bunga cengkih）',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Industri **mengetin makanan dan minuman**, membuat **bumbung rumah** serta **tong minyak** di Amerika Syarikat meningkatkan permintaan dan harga **bijih timah** secara mendadak.',
      explanationZh:
        '马口铁罐头（mengetin makanan/minuman）、屋顶铁皮与油桶制造需要大量镀锡，因此直接引爆了对锡米（bijih timah）的需求；天然橡胶则对应汽车轮胎与电线绝缘体。',
    },
    {
      id: '1.2_mcq_4',
      spCode: 'SP 7.1.2',
      questionBm:
        'Bagaimanakah pembukaan **Terusan Suez** pada tahun **1869** mempercepat kedatangan kuasa Barat ke Alam Melayu?',
      questionZh: '1869年苏伊士运河（Terusan Suez）的开通如何加速西方势力进入马来世界？',
      options: [
        {
          id: 'A',
          textBm: 'Menghubungkan Lautan Pasifik terus ke Lautan Atlantik melalui benua Amerika',
          textZh: '穿过美洲大陆直接连接太平洋与大西洋',
        },
        {
          id: 'B',
          textBm: 'Memendekkan jarak dan masa perjalanan pelayaran di antara Barat dengan Timur',
          textZh: '大幅缩短西方（地中海）与东方（红海—印度洋）之间的航行距离与时间',
        },
        {
          id: 'C',
          textBm: 'Membolehkan kapal layar belayar tanpa memerlukan bahan api arang batu',
          textZh: '使帆船无需煤炭燃料即可自动航行',
        },
        {
          id: 'D',
          textBm: 'Menghapuskan semua cukai perdagangan di pelabuhan Eropah',
          textZh: '废除了欧洲港口的一切贸易税',
        },
      ],
      correctId: 'B',
      explanationBm:
        '**Terusan Suez (1869)** menghubungkan **Pelabuhan Said** di Laut Mediterranean dan **Suez** di Laut Merah, sekali gus memendekkan jarak dan masa pelayaran antara Eropah dengan Alam Melayu tanpa perlu mengelilingi Tanjung Harapan di Afrika.',
      explanationZh:
        '苏伊士运河连接地中海塞得港与红海苏伊士，船只不必再绕行非洲好望角，大幅缩短欧亚航程、时间与运输成本。',
    },
    {
      id: '1.2_mcq_5',
      spCode: 'K7.1.6',
      questionBm:
        'Kuasa **Perancis** telah menggunakan slogan khusus untuk mewajarkan tindakan penjajahan mereka ke atas masyarakat Timur pada abad ke-19. Apakah slogan tersebut?',
      questionZh: '19世纪法国使用哪一句特定口号来合理化其对东方民族的殖民统治？',
      options: [
        {
          id: 'A',
          textBm: '**Beban Orang Putih**',
          textZh: '白人的负担（Beban Orang Putih）',
        },
        {
          id: 'B',
          textBm: '**Asia untuk Orang Asia**',
          textZh: '亚洲人的亚洲（Asia untuk Orang Asia）',
        },
        {
          id: 'C',
          textBm: '**Tugas Menyebarkan Tamadun**',
          textZh: '传播文明的使命（Tugas Menyebarkan Tamadun）',
        },
        {
          id: 'D',
          textBm: '**Kekayaan, Keagamaan dan Kemasyhuran**',
          textZh: '财富、宗教与荣耀（3G）',
        },
      ],
      correctId: 'C',
      explanationBm:
        '**Perancis** berpegang pada slogan **Tugas Menyebarkan Tamadun** (Mission Civilisatrice) kepada penduduk dunia bukan Barat, manakala **British dan Belanda** menggunakan slogan **Beban Orang Putih**.',
      explanationZh:
        '法国使用的专属口号是「Tugas Menyebarkan Tamadun（传播文明的使命）」；英国与荷兰才使用「Beban Orang Putih（白人的负担）」。',
    },
  ],
  strukturQuestion: {
    id: '1.2_struktur_1',
    spCode: 'SP 7.1.2 / K7.1.6',
    stimulusBm:
      'Menjelang **abad ke-19 dan abad ke-20**, perkembangan pesat sains, teknologi dan perindustrian di Eropah telah mengubah rentak peluasan kuasa Barat ke negara kita.',
    stimulusZh:
      '进入19与20世纪，欧美科学、交通通讯技术及现代工业的迅猛发展，彻底加快了西方势力向我国扩张的步伐。',
    parts: [
      {
        partLabel: '(a)',
        marks: 2,
        questionBm:
          'Nyatakan **dua** kegunaan penting **getah asli** yang menyebabkan permintaannya meningkat mendadak di Eropah pada abad ke-19 dan ke-20.',
        questionZh: '写出两项导致天然橡胶（getah asli）在19至20世纪欧美需求暴增的重要工业用途。[2分]',
        expectedKeywordsBm: ['tayar kereta', 'industri kereta', 'penebat barangan elektrik'],
        modelAnswerBm:
          'Dua kegunaan penting **getah asli** ialah untuk pembuatan **tayar** dalam **industri kereta** dan sebagai bahan **penebat barangan elektrik**.',
        modelAnswerZh:
          '天然橡胶的两大重要用途是：制造汽车工业所需的轮胎（tayar kereta），以及作为电器产品的绝缘体材料（penebat barangan elektrik）。',
      },
      {
        partLabel: '(b)',
        marks: 4,
        questionBm:
          'Terangkan bagaimana kemajuan teknologi **kapal wap** dan **telegraf** membantu mempercepat peluasan kuasa Barat di Alam Melayu.',
        questionZh: '说明「蒸汽船（kapal wap）」与「电报（telegraf）」两项技术进步如何协助加速西方势力在马来世界的扩张。[4分]',
        expectedKeywordsBm: [
          'kapal wap',
          'muatan yang banyak',
          'cepat dan selamat',
          'telegraf',
          'arahan lebih cepat',
        ],
        modelAnswerBm:
          'Ciptaan **kapal wap** membolehkan kuasa Barat membawa **muatan barang dagangan dan tentera yang banyak** dengan perjalanan yang lebih **cepat dan selamat** tanpa bergantung pada angin monsun. Ciptaan **telegraf** pula membolehkan kerajaan kuasa Barat menyampaikan **arahan dengan lebih cepat dan berkesan** kepada pegawai-pegawai mereka di tanah jajahan serta memudahkan urusan ahli perniagaan.',
        modelAnswerZh:
          '蒸汽船（kapal wap）能装载大量货物与军队，且航行速度更快、更安全，不再受季候风限制（2分）。电报（telegraf）则让西方政府能迅速有效地向殖民地官员下达指令，并方便欧美商人即时联系东方代理（2分）。',
      },
      {
        partLabel: '(c)',
        marks: 4,
        questionBm:
          'Sebagai generasi muda Malaysia yang memiliki hasil bumi yang kaya, bagaimanakah kita dapat memastikan kekayaan sumber negara kita tidak dikuasai oleh pihak luar pada masa hadapan?',
        questionZh: '作为拥有丰富资源的马来西亚年轻一代，我们应如何确保未来国家的宝贵资源不被外国势力操控？（KBAT 高思维题）[4分]',
        expectedKeywordsBm: [
          'ilmu pengetahuan',
          'teknologi moden',
          'tenaga pakar tempatan',
          'berdaya saing',
          'perpaduan',
        ],
        modelAnswerBm:
          'Kita hendaklah menguasai **ilmu pengetahuan** serta kepakaran **sains dan teknologi moden** (F) supaya rakyat tempatan mampu memproses sendiri bahan mentah menjadi produk bernilai tinggi tanpa bergantung pada teknologi asing (H). Contohnya melahirkan lebih ramai **jurutera dan penyelidik tempatan** dalam industri semikonduktor serta petroleum (C). Langkah ini menjadikan ekonomi negara **berdaya saing** dan kedaulatan sumber negara terus terpelihara (I).',
        modelAnswerZh:
          '我们必须积极掌握现代科学与先进技术知识（F），以便国人有能力自行将原材料深加工为高附加值产品，而不必依赖外国技术（H）。例如培养更多本土半导体与石油化工工程师及科研专家（C），从而提升国家经济竞争力，守护国家资源主权（I）。',
      },
    ],
  },
};

const SUBTOPIC_1_3: OfficialSubtopic = {
  subtopicCode: '1.3',
  babNumber: 1,
  babTitleBm: 'Kedatangan Kuasa Barat',
  babTitleZh: '西方势力的到来',
  skCode: 'SK 7.1',
  spCodes: ['SP 7.1.3', 'K7.1.7'],
  titleBm: 'Persaingan Kuasa Barat untuk Mendapatkan Tanah Jajahan',
  titleZh: '西方列强争夺殖民地的激烈竞争',
  heroImages: [
    {
      imageKey: 'bab1_west_arrival',
      captionBm:
        'Persaingan sengit antara **British**, **Belanda**, **Perancis**, **Sepanyol**, **Jerman**, **Amerika Syarikat** dan **Rusia** menjadikan Alam Melayu gelanggang perebutan tanah jajahan.',
      captionZh:
        '英、荷、法、西、德、美、俄等西方列强激烈角逐，使整个马来世界成为帝国主义瓜分殖民地的竞技场。',
      hotspots: [
        {
          x: 24,
          y: 38,
          termBm: 'Empayar British, Brooke & SBUB',
          meaningZh: '英国、砂拉越布洛克家族与沙巴渣打公司',
          detailBm:
            '**British** menguasai Pulau Pinang, Singapura, Melaka dan Negeri-negeri Melayu; **Keluarga Brooke** di Sarawak; **SBUB** membeli hak wilayah di Sabah.',
          detailZh:
            '英国控制槟城、新加坡、马六甲及马来各州；布洛克家族统治砂拉越；英属北婆罗洲公司（SBUB）控制沙巴。',
        },
        {
          x: 54,
          y: 30,
          termBm: 'Perancis (Indochina & Segenting Kra)',
          meaningZh: '法国：占领印支并觊觎克拉地峡',
          detailBm:
            '**Perancis** meluaskan kuasa di **Indochina** dan merancang membina terusan di **Segenting Kra** yang mengancam perdagangan British.',
          detailZh:
            '法国占领印度支那，并企图在暹罗南部的克拉地峡开凿运河，直接威胁英国在新加坡与马来亚的霸权。',
        },
        {
          x: 78,
          y: 50,
          termBm: 'Jerman (Langkawi) & Rusia (Ujung Salang)',
          meaningZh: '德国觊觎浮罗交怡、俄国觊觎乌戎沙朗',
          detailBm:
            '**Jerman** berusaha mendapatkan **Pulau Langkawi**, manakala **Rusia** berhasrat membuka petempatan di **Ujung Salang**.',
          detailZh:
            '德国企图夺取浮罗交怡作为军商基地，而俄国则计划在乌戎沙朗（今普吉岛）建立据点。',
        },
        {
          x: 45,
          y: 76,
          termBm: 'Belanda, Sepanyol & Amerika Syarikat',
          meaningZh: '荷兰（东印度）、西班牙（苏禄）与美国（登嘉楼/沙巴）',
          detailBm:
            '**Belanda** menguasai Hindia Timur, **Sepanyol** menakluki Kesultanan Sulu, dan **Amerika Syarikat** cuba bertapak di **Terengganu** serta **Sabah**.',
          detailZh:
            '荷兰控制东印度群岛，西班牙征服菲律宾与苏禄苏丹国，美国则曾企图染指登嘉楼与沙巴。',
        },
      ],
    },
    {
      imageKey: 'bab1_terusan_suez_kapal_wap',
      captionBm:
        'Kebimbangan British terhadap kemaraan **Perancis**, **Jerman**, **Rusia** dan **Amerika Syarikat** mendorong peluasan kuasa British di Negeri-negeri Melayu, Sarawak dan Sabah.',
      captionZh:
        '面对法、德、俄、美在东南亚周边的步步紧逼，英国担心利益受损，遂加速吞并马来各州、砂拉越与沙巴。',
    },
  ],
  sections: [
    {
      sectionCode: '1.3(a)',
      headingBm: 'Persaingan Awal Portugis, Sepanyol dan Belanda di Alam Melayu',
      headingZh: '葡萄牙、西班牙与荷兰在马来世界的早期争霸',
      leadParagraphBm:
        'Kuasa-kuasa Barat berlumba-lumba meluaskan kuasa ke seluruh pelosok dunia untuk memiliki tanah jajahan demi kepentingan ekonomi mereka, bermula dengan kemaraan **Portugis**, **Sepanyol** dan **Belanda** di Alam Melayu.',
      leadParagraphZh:
        '西方列强为了经济利益争相在全球抢夺殖民地；在马来世界，最早掀起领土争夺战的是葡萄牙、西班牙与荷兰。',
      bullets: [
        {
          tag: 'CONTOH',
          bm: '**Portugis** menawan pusat perdagangan **Kesultanan Melayu Melaka pada tahun 1511** serta mengekalkan tapak penjajahan di **Pulau Timor**.',
          zh: '葡萄牙于1511年攻陷马六甲马来苏丹王朝的贸易中心，并在帝汶岛（Pulau Timor）建立殖民据点。',
        },
        {
          tag: 'CONTOH',
          bm: '**Sepanyol** menjadi saingan utama sebagai kuasa penjajah pada abad ke-16 dengan menguasai **Filipina** dan pada abad ke-19 menakluki **Kesultanan Sulu**.',
          zh: '西班牙在16世纪成为主要殖民强权并统治菲律宾，随后在19世纪进逼并征服南部的苏禄苏丹国（Kesultanan Sulu）。',
        },
        {
          tag: 'CONTOH',
          bm: '**Belanda** menewaskan Portugis di **Melaka pada tahun 1641** menerusi bantuan Kesultanan Johor dan seterusnya berusaha menguasai seluruh wilayah **Hindia Timur (Indonesia)**.',
          zh: '荷兰于1641年在柔佛王朝协助下击败马六甲的葡萄牙人，并致力于全面垄断与统治荷属东印度（今印度尼西亚）。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Penguasaan laluan laut dan monopoli rempah oleh kuasa-kuasa Eropah awal ini mencetuskan persaingan sengit yang menarik kemasukan **British** serta kuasa-kuasa Barat baharu menjelang abad ke-19.',
          zh: '早期欧洲列强对海上航道与香料贸易的封锁垄断，引发了更激烈的殖民竞赛，促使英国及新兴西方强权在19世纪大举介入。',
        },
      ],
    },
    {
      sectionCode: '1.3(b)',
      headingBm: 'Peluasan Empayar British, Keluarga Brooke dan SBUB',
      headingZh: '英国、砂拉越布洛克王朝与沙巴渣打公司的扩张',
      leadParagraphBm:
        'Menjelang abad ke-19, **British** muncul sebagai kuasa penjajah paling dominan di negara kita melalui gabungan tindakan kerajaan British, pengembara persendirian **Keluarga Brooke** dan syarikat berpiagam **SBUB**.',
      leadParagraphZh:
        '进入19世纪，英国通过政府直接行动、私人冒险家布洛克家族以及特许公司 SBUB 三线并进，成为主导我国全境的最大殖民势力。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**British** menubuhkan **Syarikat Hindia Timur Inggeris (SHTI)** di England pada tahun **1600** untuk memonopoli perdagangan di Timur, lalu menjadikan **Kesultanan Brunei**, **Pulau Pinang**, **Singapura**, **Melaka**, **Negeri-negeri Melayu** dan **Burma** sebagai sasaran peluasan kuasa.',
          zh: '英国于1600年成立英国东印度公司（SHTI），先后将文莱苏丹国、槟城、新加坡、马六甲、马来各州以及缅甸纳入势力扩张版图。',
        },
        {
          tag: 'CONTOH',
          bm: 'Di **Sarawak**, warga British bernama **James Brooke** mengambil peluang daripada konflik tempatan untuk menguasai wilayah Kuching pada tahun **1841** dan membentuk pemerintahan **Dinasti Brooke** yang terus meluaskan sempadan Sarawak ke atas wilayah Kesultanan Brunei.',
          zh: '在砂拉越，英国人詹姆士·布洛克（James Brooke）利用当地冲突于1841年取得古晋统治权，建立「白人拉惹」布洛克王朝，并不断蚕食文莱领土以扩大砂拉越版图。',
        },
        {
          tag: 'CONTOH',
          bm: 'Di **Sabah**, **Syarikat Borneo Utara British (SBUB)** dikurniakan **Piagam Diraja** oleh kerajaan British pada tahun **1881** dan membeli serta memajak hak wilayah-wilayah Sabah daripada **Sultan Brunei** dan **Sultan Sulu**.',
          zh: '在沙巴，英属北婆罗洲公司（SBUB）于1881年获英国政府颁发皇家特许状（Piagam Diraja），向文莱苏丹与苏禄苏丹购买及租借沙巴各地统治权。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Kesediaan kerajaan British melindungi kepentingan **Keluarga Brooke** di Sarawak dan **SBUB** di Sabah bertujuan menghalang kuasa-kuasa Barat lain seperti Sepanyol, Belanda, Jerman atau Amerika Syarikat daripada bertapak di utara Borneo.',
          zh: '英国政府之所以支持并庇护砂拉越布洛克家族与沙巴 SBUB，正是为了阻止西班牙、荷兰、德国或美国等其他列强插足北婆罗洲。',
        },
      ],
    },
    {
      sectionCode: '1.3(c)',
      headingBm: 'Kemaraan Kuasa Perancis, Jerman, Amerika Syarikat dan Rusia',
      headingZh: '法国、德国、美国与俄国在我国周边的争夺目标',
      leadParagraphBm:
        'Pada separuh kedua abad ke-19, kemunculan kuasa-kuasa Barat baharu seperti **Perancis**, **Jerman**, **Amerika Syarikat** dan **Rusia** yang cuba mencari tapak di sekitar Tanah Melayu membimbangkan British.',
      leadParagraphZh:
        '19世纪下半叶，法、德、美、俄等西方列强纷纷企图在马来半岛及婆罗洲周边建立据点，令英国深感战略危机。',
      bullets: [
        {
          tag: 'CONTOH',
          bm: '**Perancis** meluaskan kuasanya di **Indochina** (Vietnam, Kemboja dan Laos) dan merancang untuk membina sebuah terusan merentasi **Segenting Kra** di selatan Siam yang bakal menjejaskan kedudukan perdagangan pelabuhan Singapura serta mengancam keselamatan Tanah Melayu.',
          zh: '法国占领印度支那（越南、柬埔寨、老挝），并计划在暹罗南部的克拉地峡（Segenting Kra）开凿运河；一旦建成，船只将绕过新加坡，直接威胁英国商业与防务安全。',
        },
        {
          tag: 'CONTOH',
          bm: '**Jerman** yang baru bersatu sebagai kuasa industri berusaha mendapatkan **Pulau Langkawi** daripada Siam untuk dijadikan pangkalan perdagangan dan stesen bekalan arang batu.',
          zh: '新兴工业强国德国企图向暹罗索取浮罗交怡岛（Pulau Langkawi），作为其在东南亚的贸易据点与军舰煤炭补给站。',
        },
        {
          tag: 'CONTOH',
          bm: '**Amerika Syarikat** ingin bertapak di **Terengganu** serta pernah cuba mengusahakan wilayah di **Sabah** melalui **Syarikat Perdagangan Amerika (American Trading Company)** yang diasaskan oleh konsul Amerika (**Charles Lee Moses** dan **J.W. Torrey**) di Kimanis pada tahun 1865 walaupun akhirnya gagal.',
          zh: '美国企图在登嘉楼（Terengganu）立足，且美国领事摩西与托里曾于1865年成立「美国贸易公司」在沙巴金马利（Kimanis）获取租借地，惟最终因缺乏资金而放弃。',
        },
        {
          tag: 'CONTOH',
          bm: '**Rusia** pula berhasrat membuka petempatan dan pangkalan bekalan arang batu di **Ujung Salang** (Pulau Phuket di pantai barat selatan Siam).',
          zh: '俄国则计划在暹罗西南海岸的乌戎沙朗（Ujung Salang，今普吉岛）开辟殖民据点与煤炭补给港。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Jadual padanan wajib hafal untuk objektif UASA: **Perancis = Indochina & Segenting Kra**; **Jerman = Pulau Langkawi**; **Amerika Syarikat = Terengganu & Sabah**; **Rusia = Ujung Salang**!',
          zh: 'UASA 选择题必考秒杀配对：法国 = 印支与克拉地峡；德国 = 浮罗交怡；美国 = 登嘉楼与沙巴；俄国 = 乌戎沙朗（Ujung Salang）！',
        },
      ],
    },
  ],
  comparisonTables: [
    {
      titleBm: 'Kuasa-Kuasa Barat dan Wilayah Sasaran di Alam Melayu',
      titleZh: '西方列强及其在马来世界与周边的争夺目标总表',
      headers: [
        { bm: 'Kuasa Barat', zh: '西方列强' },
        { bm: 'Wilayah Sasaran / Tanah Jajahan', zh: '目标地区 / 占领殖民地' },
        { bm: 'Catatan Penting Buku Teks', zh: '课本关键史实要点' },
      ],
      rows: [
        [
          { bm: '**Portugis**', zh: '葡萄牙' },
          { bm: '**Melaka** dan **Pulau Timor**', zh: '马六甲与帝汶岛' },
          { bm: 'Menawan Melaka pada tahun **1511** sehingga ditewaskan Belanda pada 1641', zh: '1511年攻占马六甲，直至1641年被荷兰击败' },
        ],
        [
          { bm: '**Sepanyol**', zh: '西班牙' },
          { bm: '**Filipina** dan **Kesultanan Sulu**', zh: '菲律宾与苏禄苏丹国' },
          { bm: 'Menakluki Kesultanan Sulu di selatan Filipina pada abad ke-19', zh: '统治菲律宾并于19世纪征服苏禄苏丹国' },
        ],
        [
          { bm: '**Belanda**', zh: '荷兰' },
          { bm: '**Melaka (1641)** dan **Hindia Timur (Indonesia)**', zh: '马六甲（1641）与东印度（印尼）' },
          { bm: 'Memonopoli perdagangan rempah dan bijih timah melalui **VOC**', zh: '通过荷兰东印度公司（VOC）垄断东印度群岛贸易' },
        ],
        [
          { bm: '**British / Keluarga Brooke / SBUB**', zh: '英国 / 布洛克家族 / SBUB' },
          {
            bm: '**Pulau Pinang, Singapura, Melaka, Negeri-negeri Melayu, Sarawak, Sabah, Brunei & Burma**',
            zh: '槟城、新加坡、马六甲、马来各州、砂拉越、沙巴、文莱与缅甸',
          },
          {
            bm: 'Keluarga Brooke memerintah **Sarawak**; **SBUB** membeli hak wilayah di **Sabah**',
            zh: '布洛克王朝统治砂拉越；渣打公司 SBUB 管辖沙巴',
          },
        ],
        [
          { bm: '**Perancis**', zh: '法国' },
          { bm: '**Indochina** dan **Segenting Kra**', zh: '印度支那与克拉地峡' },
          { bm: 'Merancang membina terusan di **Segenting Kra** yang mengancam Singapura', zh: '企图开凿克拉地峡运河，威胁新加坡转口港地位' },
        ],
        [
          { bm: '**Jerman**', zh: '德国' },
          { bm: '**Pulau Langkawi**', zh: '浮罗交怡岛' },
          { bm: 'Berusaha mendapatkan Pulau Langkawi sebagai pangkalan perdagangan dan arang batu', zh: '试图夺取浮罗交怡作为商贸与煤炭基地' },
        ],
        [
          { bm: '**Amerika Syarikat**', zh: '美国' },
          { bm: '**Terengganu** dan **Sabah**', zh: '登嘉楼与沙巴' },
          { bm: '**Syarikat Perdagangan Amerika** pernah mendapat pajakan di Kimanis, Sabah (1865)', zh: '美国贸易公司曾于1865年在沙巴金马利租借土地但失败' },
        ],
        [
          { bm: '**Rusia**', zh: '俄国' },
          { bm: '**Ujung Salang**', zh: '乌戎沙朗（今普吉岛）' },
          { bm: 'Berhasrat membuka petempatan dan pangkalan bekalan di Ujung Salang', zh: '企图在暹罗西南的乌戎沙朗建立据点' },
        ],
      ],
    },
  ],
  dialogues: [
    {
      speakerBm: 'Pegawai Pejabat Tanah Jajahan British',
      roleBm: 'Perancang Dasar Imperialisme London',
      roleZh: '伦敦英国殖民地部官员',
      emoji: '🎩',
      lineBm:
        'Bahaya besar! **Perancis** sedang merancang terusan di **Segenting Kra**, **Jerman** mengintai **Pulau Langkawi**, dan **Rusia** pula mahukan **Ujung Salang**! Kita mesti segera mengukuhkan kuasa British di Negeri-negeri Melayu!',
      lineZh:
        '大事不好！法国正盘算开凿克拉地峡运河，德国盯上了浮罗交怡，连俄国都想抢乌戎沙朗！我们必须火速全面控制马来各州！',
    },
    {
      speakerBm: 'James Brooke & Wakil SBUB',
      roleBm: 'Kuasa British di Borneo',
      roleZh: '砂拉越白人拉惹与沙巴 SBUB 代表',
      emoji: '🧭',
      lineBm:
        'Di utara Borneo pula, **Sepanyol** sudah menakluki **Kesultanan Sulu** dan **Amerika Syarikat** pernah cuba bertapak di **Sabah**! Sebab itulah **Dinasti Brooke** di Sarawak dan **SBUB** di Sabah mendapat sokongan British!',
      lineZh:
        '在婆罗洲北部，西班牙已攻占苏禄，美国也曾试图插足沙巴！因此英国政府全力支持我们在砂拉越和沙巴扩张领土！',
    },
    {
      speakerBm: 'Sejarawan Tempatan',
      roleBm: 'Pemerhati Kedaulatan Bangsa',
      roleZh: '本土历史学者',
      emoji: '📖',
      lineBm:
        'Lihatlah betapa strategiknya kedudukan negara kita sehingga menjadi rebutan lapan kuasa Barat! Tanpa kekuatan dalaman dan kesepakatan, kedaulatan negeri mudah terhakis sedikit demi sedikit.',
      lineZh:
        '看看我国地理位置与资源多么优越，竟引来八大西方列强争抢！若内部缺乏团结与实力，国家主权就会被一步步蚕食。',
    },
  ],
  memoryHackBm:
    'Kod Rahsia Sasaran Kuasa Barat: **"Perancis KRA, Jerman LANG, Rusia UJUNG, Amerika TER-SABAH"** — **Perancis** (Indochina & **Segenting Kra**), **Jerman** (**Pulau Langkawi**), **Rusia** (**Ujung Salang**), **Amerika Syarikat** (**Terengganu & Sabah**)!',
  memoryHackZh:
    '【四大新兴列强秒记口诀】「法克（Kra）、德兰（Langkawi）、俄乌（Ujung Salang）、美登沙（Terengganu & Sabah）」——法国盯克拉地峡、德国盯浮罗交怡、俄国盯乌戎沙朗、美国盯登嘉楼与沙巴！',
  subtopicMcqs: [
    {
      id: '1.3_mcq_1',
      spCode: 'SP 7.1.3',
      questionBm:
        'Kuasa Barat manakah yang berusaha mendapatkan **Pulau Langkawi** pada akhir abad ke-19?',
      questionZh: '19世纪末，哪一个西方列强企图夺取浮罗交怡岛（Pulau Langkawi）？',
      options: [
        {
          id: 'A',
          textBm: '**Perancis**',
          textZh: '法国',
        },
        {
          id: 'B',
          textBm: '**Jerman**',
          textZh: '德国',
        },
        {
          id: 'C',
          textBm: '**Rusia**',
          textZh: '俄国',
        },
        {
          id: 'D',
          textBm: '**Sepanyol**',
          textZh: '西班牙',
        },
      ],
      correctId: 'B',
      explanationBm:
        '**Jerman** berusaha mendapatkan **Pulau Langkawi** daripada kerajaan Siam sebagai pangkalan perdagangan dan bekalan arang batu.',
      explanationZh:
        '德国企图夺取浮罗交怡（Pulau Langkawi）；法国目标是印支与克拉地峡，俄国目标是乌戎沙朗，西班牙目标是菲律宾与苏禄。',
    },
    {
      id: '1.3_mcq_2',
      spCode: 'SP 7.1.3',
      questionBm:
        'Mengapakah rancangan **Perancis** untuk membina terusan di **Segenting Kra** menimbulkan kebimbangan besar kepada pihak British?',
      questionZh: '为什么法国计划在克拉地峡（Segenting Kra）开凿运河会引起英国极大的担忧？',
      options: [
        {
          id: 'A',
          textBm: 'Akan menjejaskan kedudukan perdagangan pelabuhan **Singapura** dan keselamatan Tanah Melayu',
          textZh: '将严重打击新加坡港口的贸易地位并威胁马来半岛的安全',
        },
        {
          id: 'B',
          textBm: 'Akan menyebabkan pulau Sumatera tenggelam sepenuhnya',
          textZh: '会导致苏门答腊岛完全沉没',
        },
        {
          id: 'C',
          textBm: 'Akan menghalang pelombong British melombong emas di Sarawak',
          textZh: '会阻止英国矿工在砂拉越开采黄金',
        },
        {
          id: 'D',
          textBm: 'Akan memaksa Belanda menyerahkan Betawi kepada Sepanyol',
          textZh: '会迫使荷兰将巴达维亚移交给西班牙',
        },
      ],
      correctId: 'A',
      explanationBm:
        'Terusan merentasi **Segenting Kra** akan membolehkan kapal dagang memintas Selat Melaka terus ke Laut China Selatan, sekali gus mengancam kemakmuran pelabuhan **Singapura** dan keselamatan Tanah Melayu.',
      explanationZh:
        '克拉地峡位于马来半岛北端狭长地带；若法国凿通运河，船只将不必绕经马六甲海峡与新加坡，直接重创英国的远东贸易霸权。',
    },
    {
      id: '1.3_mcq_3',
      spCode: 'SP 7.1.3',
      questionBm:
        'Apakah wilayah yang menjadi sasaran kuasa **Rusia** untuk membuka petempatan di rantau Asia Tenggara?',
      questionZh: '俄国（Rusia）计划在东南亚哪一个地区开辟据点？',
      options: [
        {
          id: 'A',
          textBm: '**Pulau Timor**',
          textZh: '帝汶岛（Pulau Timor）',
        },
        {
          id: 'B',
          textBm: '**Terengganu**',
          textZh: '登嘉楼（Terengganu）',
        },
        {
          id: 'C',
          textBm: '**Ujung Salang**',
          textZh: '乌戎沙朗（Ujung Salang）',
        },
        {
          id: 'D',
          textBm: '**Kesultanan Sulu**',
          textZh: '苏禄苏丹国（Kesultanan Sulu）',
        },
      ],
      correctId: 'C',
      explanationBm:
        '**Rusia** berhasrat membuka petempatan dan pangkalan bekalan di **Ujung Salang** (Pulau Phuket).',
      explanationZh:
        '俄国的目标是乌戎沙朗（Ujung Salang）；帝汶岛属葡萄牙，登嘉楼与沙巴是美国曾企图染指的目标，苏禄则是西班牙征服对象。',
    },
    {
      id: '1.3_mcq_4',
      spCode: 'SP 7.1.3',
      questionBm:
        'Pihak manakah yang membeli hak wilayah-wilayah di **Sabah** daripada **Sultan Brunei** dan **Sultan Sulu** pada akhir abad ke-19?',
      questionZh: '19世纪末，哪一方从文莱苏丹与苏禄苏丹手中购买并取得沙巴各地区的管辖权？',
      options: [
        {
          id: 'A',
          textBm: '**Keluarga Brooke**',
          textZh: '布洛克家族（Keluarga Brooke）',
        },
        {
          id: 'B',
          textBm: '**Syarikat Borneo Utara British (SBUB)**',
          textZh: '英属北婆罗洲渣打公司（SBUB）',
        },
        {
          id: 'C',
          textBm: '**Syarikat Hindia Timur Belanda (VOC)**',
          textZh: '荷兰东印度公司（VOC）',
        },
        {
          id: 'D',
          textBm: '**Angkatan Tentera Laut Sepanyol**',
          textZh: '西班牙海军舰队',
        },
      ],
      correctId: 'B',
      explanationBm:
        '**Syarikat Borneo Utara British (SBUB)** memperoleh Piagam Diraja daripada kerajaan British pada tahun 1881 dan membeli hak wilayah di **Sabah** daripada Sultan Brunei serta Sultan Sulu.',
      explanationZh:
        '统治沙巴的是获英国皇家特许状的英属北婆罗洲公司（SBUB）；布洛克家族（Keluarga Brooke）统治的是砂拉越。',
    },
    {
      id: '1.3_mcq_5',
      spCode: 'K7.1.7',
      questionBm:
        'Apakah pengajaran terpenting yang boleh diambil oleh rakyat Malaysia daripada peristiwa persaingan kuasa-kuasa Barat di Alam Melayu?',
      questionZh: '马来西亚国民可以从西方列强在马来世界争夺殖民地的历史中汲取什么最重要的教训？',
      options: [
        {
          id: 'A',
          textBm: 'Memutuskan semua hubungan diplomatik dan perdagangan dengan negara luar',
          textZh: '断绝与外国的一切外交和贸易往来',
        },
        {
          id: 'B',
          textBm: 'Menyerahkan pengurusan pelabuhan strategik negara kepada syarikat asing sepenuhnya',
          textZh: '将国家战略港口的管理权完全交给外国公司',
        },
        {
          id: 'C',
          textBm: 'Memperkukuh **perpaduan nasional** dan keupayaan pertahanan bagi mempertahankan **kedaulatan negara**',
          textZh: '巩固国民团结与国防实力，以坚定捍卫国家主权',
        },
        {
          id: 'D',
          textBm: 'Menggalakkan campur tangan kuasa besar apabila berlaku perselisihan dalaman',
          textZh: '在发生内部纷争时鼓励外国大国介入调停',
        },
      ],
      correctId: 'C',
      explanationBm:
        'Kedudukan strategik dan kekayaan negara sentiasa menarik perhatian kuasa luar; oleh itu rakyat mesti memperkukuh **perpaduan**, jati diri dan **pertahanan negara** supaya kedaulatan tanah air terpelihara.',
      explanationZh:
        '优越的地理位置与资源容易引来外部觊觎，唯有加强国民团结、政治稳定与国防实力，才能确保国家主权永不受侵犯。',
    },
  ],
  strukturQuestion: {
    id: '1.3_struktur_1',
    spCode: 'SP 7.1.3 / K7.1.7',
    stimulusBm:
      'Menjelang abad ke-19, persaingan sengit antara kuasa-kuasa Barat untuk mendapatkan tanah jajahan di Asia Tenggara telah mengubah landskap politik Alam Melayu.',
    stimulusZh:
      '19世纪，西方列强为争夺东南亚殖民地展开激烈竞争，彻底改写了马来世界的政治版图。',
    parts: [
      {
        partLabel: '(a)',
        marks: 3,
        questionBm:
          'Nyatakan wilayah sasaran bagi setiap kuasa Barat berikut di sekitar negara kita:\n(i) **Jerman**\n(ii) **Rusia**\n(iii) **Amerika Syarikat**',
        questionZh: '写出以下西方列强在我国周边的争夺目标地区：（i）德国（ii）俄国（iii）美国。[3分]',
        expectedKeywordsBm: ['Pulau Langkawi', 'Ujung Salang', 'Terengganu', 'Sabah'],
        modelAnswerBm:
          '(i) **Jerman**: **Pulau Langkawi**\n(ii) **Rusia**: **Ujung Salang**\n(iii) **Amerika Syarikat**: **Terengganu** dan **Sabah**.',
        modelAnswerZh:
          '（i）德国：浮罗交怡岛（Pulau Langkawi）；（ii）俄国：乌戎沙朗（Ujung Salang）；（iii）美国：登嘉楼（Terengganu）与沙巴（Sabah）。',
      },
      {
        partLabel: '(b)',
        marks: 3,
        questionBm:
          'Jelaskan bagaimana peluasan kuasa British dilaksanakan di **Sarawak** dan **Sabah** pada abad ke-19.',
        questionZh: '说明19世纪英国势力是如何分别在砂拉越和沙巴实现扩张的。[3分]',
        expectedKeywordsBm: [
          'James Brooke',
          'Keluarga Brooke',
          'Syarikat Borneo Utara British',
          'SBUB',
          'Sultan Brunei',
          'Sultan Sulu',
        ],
        modelAnswerBm:
          'Di **Sarawak**, **James Brooke** menguasai wilayah Kuching dan mengasaskan pemerintahan **Keluarga Brooke** yang meluaskan sempadan Sarawak secara berperingkat. Di **Sabah** pula, **Syarikat Borneo Utara British (SBUB)** yang menerima Piagam Diraja British telah membeli dan memajak hak wilayah Sabah daripada **Sultan Brunei** serta **Sultan Sulu**.',
        modelAnswerZh:
          '在砂拉越，詹姆士·布洛克控制古晋并建立布洛克家族王朝（Keluarga Brooke），逐步吞并周边地区；在沙巴，获英国皇家特许状的英属北婆罗洲公司（SBUB）向文莱苏丹与苏禄苏丹购买及租借沙巴领土权利。',
      },
      {
        partLabel: '(c)',
        marks: 4,
        questionBm:
          'Mengapakah semangat **cinta akan negara** dan **kesepakatan pemimpin** amat penting dalam menghadapi persaingan kuasa besar dunia pada hari ini?',
        questionZh: '在面对当今世界大国博弈时，为什么「爱国精神」与「领导人团结一致」至关重要？（KBAT 高思维题）[4分]',
        expectedKeywordsBm: [
          'mengelakkan campur tangan asing',
          'mempertahankan kedaulatan',
          'keamanan negara',
          'tidak mudah dimanipulasi',
        ],
        modelAnswerBm:
          'Semangat cinta akan negara dan kesepakatan pemimpin dapat **mengelakkan ruang campur tangan kuasa asing** dalam urusan dalaman negara (F). Apabila pemimpin dan rakyat bersatu padu, pihak luar **tidak mudah memanipulasi** perbezaan pendapat untuk memecahbelahkan kita (H), contohnya ketika merangka dasar luar yang bebas dan berkecuali dalam perdagangan antarabangsa (C). Kesannya, **kedaulatan** dan kemerdekaan negara akan kekal terpelihara (I).',
        modelAnswerZh:
          '爱国精神与领导层团结一致能堵住外国势力干预我国内政的缺口（F）。当领导人与国民上下一心时，外部势力就无法轻易操纵内部矛盾来分化我们（H），例如我国在国际贸易与外交中坚持独立自主与中立原则（C）。如此一来，国家主权与独立就能长久稳固（I）。',
      },
    ],
  },
};

const SUBTOPIC_1_4: OfficialSubtopic = {
  subtopicCode: '1.4',
  babNumber: 1,
  babTitleBm: 'Kedatangan Kuasa Barat',
  babTitleZh: '西方势力的到来',
  skCode: 'SK 7.1',
  spCodes: ['SP 7.1.4', 'K7.1.8'],
  titleBm: 'Perbezaan Strategi Kuasa Barat untuk Menguasai Negara Kita',
  titleZh: '西方列强控制我国的不同策略对比',
  heroImages: [
    {
      imageKey: 'bab1_west_arrival',
      captionBm:
        '**Portugis** menggunakan **serangan fizikal**, **Belanda** menggunakan **tiga strategi**, manakala **British** menggunakan **tujuh strategi** yang licik dan berdiplomasi mengikut isu setempat.',
      captionZh:
        '葡萄牙采取直接武力强攻，荷兰运用三大策略，而英国则因地制宜施展七大软硬兼施的外交与军事手段。',
      hotspots: [
        {
          x: 20,
          y: 36,
          termBm: 'Strategi Portugis: Serangan Fizikal (1511)',
          meaningZh: '葡萄牙策略：1511年直接武力攻占马六甲',
          detailBm:
            '**Portugis** menggunakan strategi **serangan fizikal** bersenjata bagi menumbangkan **Kesultanan Melayu Melaka** pada tahun **1511**.',
          detailZh:
            '葡萄牙采取最直接的武力攻击（serangan fizikal），于1511年炮轰并攻陷马六甲马来苏丹王朝。',
        },
        {
          x: 52,
          y: 30,
          termBm: '3 Strategi Belanda (Serangan, Perjanjian, Pakatan)',
          meaningZh: '荷兰三大策略：武力攻击、签署条约、政治结盟',
          detailBm:
            '**Belanda** menggabungkan **serangan fizikal** (Pangkor 1650, Kuala Selangor 1784), **perjanjian** (Perak 1650, Selangor 1786) dan **pakatan** (Johor 1641, British 1824).',
          detailZh:
            '荷兰并用武力攻击（邦咯1650、瓜雪1784）、条约垄断（霹雳1650、雪兰莪1786）与结盟（1641联柔抗葡、1824英荷条约）。',
        },
        {
          x: 76,
          y: 60,
          termBm: '7 Strategi Licik British',
          meaningZh: '英国七大策略：操纵、恐吓、欺骗、条约、结盟、租借、武攻',
          detailBm:
            '**British** memilih strategi lebih bersifat diplomasi seperti **manipulasi**, **ugutan/desakan**, **tipu helah**, **perjanjian**, **pakatan**, **pajakan** serta **serangan fizikal**.',
          detailZh:
            '英国擅长先礼后兵，灵活运用操纵、恐吓施压、欺骗手段、条约、结盟、租借及最后的武力攻击七大策略。',
        },
      ],
    },
    {
      imageKey: 'bab3_pangkor_tin',
      captionBm:
        'Perubahan dasar kerajaan Britain di bawah **Parti Konservatif (1873)** memperhebat penggunaan strategi **manipulasi**, **ugutan** dan **perjanjian** di Negeri-negeri Melayu.',
      captionZh:
        '1873年英国保守党执政并改采干预政策后，全面加紧在马来各州施展操纵危机、施压恐吓与签署条约等策略。',
    },
  ],
  sections: [
    {
      sectionCode: '1.4(a)',
      headingBm: 'Strategi Kuasa Portugis dan Tiga Strategi Kuasa Belanda',
      headingZh: '葡萄牙的武力策略与荷兰的三大扩张策略',
      leadParagraphBm:
        'Kuasa-kuasa Barat menggunakan pelbagai strategi untuk menguasai negara kita; **Portugis** menggunakan kekerasan ketenteraan secara langsung, manakala **Belanda** menggabungkan **serangan fizikal**, **perjanjian** dan **pakatan**.',
      leadParagraphZh:
        '西方列强为控制我国采取了不同手段：葡萄牙直接动用军事武力征服，而荷兰则交替使用武力攻击、贸易条约与政治结盟三大策略。',
      diagramKey: 'diag_1_4_strategi_barat',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Strategi Portugis — Serangan Fizikal**: Portugis melancarkan **serangan fizikal** secara langsung pada tahun **1511** sehingga berjaya menawan **Melaka** demi menguasai perdagangan rempah di Selat Melaka.',
          zh: '葡萄牙策略——武力攻击（Serangan fizikal）：葡萄牙于1511年直接发动军事进攻占领马六甲，企图垄断马六甲海峡香料贸易。',
        },
        {
          tag: 'CONTOH',
          bm: '**Strategi Belanda (1) — Serangan Fizikal**: Belanda membedil dan menyerang penduduk tempatan di **Pulau Pangkor (1650)** serta **Kuala Perak (1651)** disebabkan dasar monopoli bijih timah Belanda; Belanda juga berperang dengan **Angkatan Johor dan Rembau (1756)**, menyerang **Angkatan Johor dan Selangor di Tanjung Ketapang (1784)** serta menyerang **Kuala Selangor (1784 dan 1785)**, selain menyerang Portugis di **Melaka (1641)**.',
          zh: '荷兰策略（1）——武力攻击：因垄断锡米纠纷，荷兰先后炮轰邦咯岛（1650年）与瓜拉霹雳（1651年）；并与柔佛及林茂联军交战（1756年）、在丹绒吉打邦击败柔雪联军（1784年）、进攻瓜拉雪兰莪（1784与1785年），以及1641年围攻马六甲葡萄牙人。',
        },
        {
          tag: 'CONTOH',
          bm: '**Strategi Belanda (2) — Perjanjian**: Belanda mengadakan perjanjian dengan **Perak pada tahun 1650** untuk mendapatkan bekalan bijih timah, dan mengadakan perjanjian dengan **Selangor pada tahun 1786** yang menyaksikan **Sultan Ibrahim** bersetuju menjual bijih timah kepada Belanda.',
          zh: '荷兰策略（2）——签署条约（Perjanjian）：荷兰于1650年与霹雳签约以垄断锡米供应，并于1786年与雪兰莪签约，迫使苏丹依布拉欣同意将锡米售予荷兰。',
        },
        {
          tag: 'CONTOH',
          bm: '**Strategi Belanda (3) — Pakatan**: Belanda mengadakan **pakatan dengan Johor pada tahun 1641** dan berjaya mengalahkan Portugis di Melaka; Belanda turut mengadakan **pakatan dengan British** dan bersetuju memeterai **Perjanjian Inggeris-Belanda 1824**.',
          zh: '荷兰策略（3）——政治结盟（Pakatan）：荷兰于1641年与柔佛结盟击败马六甲的葡萄牙人；随后于1824年与英国结盟签署《1824年英荷条约》（伦敦条约）划分势力范围。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Bandingkan dengan teliti: **Belanda** hanya menggunakan **3 strategi** (**Serangan Fizikal, Perjanjian, Pakatan**), tetapi **tiada** strategi tipu helah, manipulasi, ugutan atau pajakan seperti British!',
          zh: '对比关键：荷兰只使用 3 种策略（武力攻击、条约、结盟），并没有像英国那样使用欺骗手段、操纵内乱、恐吓施压或租借特许状！',
        },
      ],
    },
    {
      sectionCode: '1.4(b)',
      headingBm: 'Tujuh Strategi British (Bahagian 1): Manipulasi, Ugutan/Desakan, Tipu Helah dan Perjanjian',
      headingZh: '英国的七大策略（上）：操纵、恐吓施压、欺骗手段与条约',
      leadParagraphBm:
        'Berbanding kuasa Barat lain, **British** menggunakan strategi yang lebih bersifat **diplomasi** berdasarkan isu dan faktor setempat, terutamanya selepas **Parti Konservatif** mengambil alih kerajaan Britain daripada **Parti Liberal** pada tahun **1873** dan menukarkan dasar tidak campur tangan kepada **dasar campur tangan**.',
      leadParagraphZh:
        '与其他西方列强相比，英国更善于根据地方局势施展外交手腕；尤其在1873年英国保守党取代自由党执政并改采「全面干预政策」后，更娴熟地运用以下策略夺取主权。',
      bullets: [
        {
          tag: 'CONTOH',
          bm: '**(1) Manipulasi**: British mendapatkan **Singapura (1819)** dengan memanipulasi isu pewarisan takhta Johor Riau; campur tangan di **Perak (1874)** melalui peluang perebutan takhta dan Perang Larut; menggunakan kejadian **rompakan kapal dagang British di perairan Kuala Langat** dan serangan ke atas **rumah api di Tanjung Rachado** untuk campur tangan di **Selangor (1874)**; serta memanipulasi konflik antara **Dato\' Kelana dengan Dato\' Syahbandar** di Sungai Linggi untuk menguasai **Sungai Ujong (1874)**.',
          zh: '（1）操纵利用（Manipulasi）：利用柔佛廖内王位继承纠纷夺取新加坡（1819）；借拉律战争与王位争夺介入霹雳（1874）；借瓜拉冷岳海域英商船遭劫及丹绒拉查多灯塔遇袭事件介入雪兰莪（1874）；利用拿督克拉那与拿督沙班达争夺宁宜河征税权控制双溪芙蓉（1874）。',
        },
        {
          tag: 'CONTOH',
          bm: '**(2) Ugutan / Desakan**: British membuat ugutan atau desakan agar pemerintah tempatan menerima **Residen British** bagi menasihati pentadbiran negeri masing-masing — contohnya mendesak **Sultan Selangor** dan menggunakan peristiwa pembunuhan seorang lelaki Cina bernama **Goh Hui** di hadapan istana Pekan untuk mendesak **Sultan Ahmad di Pahang (1888)** menerima Residen; **James Brooke** turut mendesak **Sultan Brunei** menuntut diiktiraf sebagai Raja Sarawak.',
          zh: '（2）恐吓与施压（Ugutan/Desakan）：强迫马来统治者接受英国参政司（Residen）——如向雪兰莪苏丹施压，以及利用华裔英籍男子吴辉（Goh Hui）在北根王宫附近遇害案威逼彭亨苏丹阿末（1888年）接受参政司；詹姆士·布洛克也武力胁迫文莱苏丹承认其砂拉越拉惹地位。',
        },
        {
          tag: 'CONTOH',
          bm: '**(3) Tipu Helah**: British mendapatkan **Pulau Pinang pada tahun 1786** melalui **tipu helah** **Francis Light** terhadap **Sultan Abdullah** (Sultan Kedah) dengan janji palsu bantuan ketenteraan menentang ancaman Siam.',
          zh: '（3）欺骗手段（Tipu Helah）：弗朗西斯·莱特（Francis Light）于1786年对吉打苏丹阿都拉许下虚假的军事援助承诺，用欺骗手段骗取槟城。',
        },
        {
          tag: 'CONTOH',
          bm: '**(4) Perjanjian**: British mendesak Raja-raja Melayu menandatangani perjanjian yang mengikat kuasa mereka seperti **Perjanjian Pangkor 1874**, perjanjian dengan **Sultan Perak, Selangor, Yamtuan Seri Menanti dan Sultan Pahang**, perjanjian wilayah dengan **Sultan Brunei** serta **Perjanjian Bangkok 1909**.',
          zh: '（4）签署条约（Perjanjian）：迫使统治者签署束缚主权的条约，例如《1874年邦咯条约》、与霹雪森彭统治者的保护条约、与文莱苏丹的割让条约以及《1909年曼谷条约》。',
        },
      ],
    },
    {
      sectionCode: '1.4(c)',
      headingBm: 'Tujuh Strategi British (Bahagian 2): Pakatan, Pajakan dan Serangan Fizikal',
      headingZh: '英国的七大策略（下）：结盟、租借与武力攻击',
      leadParagraphBm:
        'Selain manipulasi, ugutan, tipu helah dan perjanjian, British turut melengkapkan penguasaan ke atas Tanah Melayu, Sarawak dan Sabah menggunakan strategi **pakatan**, **pajakan** serta **serangan fizikal**.',
      leadParagraphZh:
        '除了操纵、施压、欺骗与签约外，英国还辅以大国结盟、土地租借以及最后的直接武力镇压，完成对马来半岛、砂拉越与沙巴的全面控制。',
      bullets: [
        {
          tag: 'CONTOH',
          bm: '**(5) Pakatan**: British mengadakan pakatan dengan kuasa Barat lain iaitu **Belanda** menerusi **Perjanjian Inggeris-Belanda 1824**; menerusi pakatan ini British berjaya mendapatkan **Melaka**, manakala Belanda diberikan **Bangkahulu**.',
          zh: '（5）大国结盟（Pakatan）：英国与荷兰达成结盟协议，签署《1824年英荷条约》，使英国不动一兵一卒便以明古连换得马六甲。',
        },
        {
          tag: 'CONTOH',
          bm: '**(6) Pajakan**: Melalui **pajakan** dan pemberian **Piagam Diraja** oleh kerajaan British, **Syarikat Borneo Utara British (SBUB)** meluaskan pengaruhnya ke atas wilayah-wilayah di **Sabah** daripada Sultan Brunei dan Sultan Sulu.',
          zh: '（6）租借土地（Pajakan）：通过向文莱苏丹及苏禄苏丹支付租金租借领土，配合英国政府颁发的皇家特许状，英属北婆罗洲公司（SBUB）成功控制沙巴。',
        },
        {
          tag: 'CONTOH',
          bm: '**(7) Serangan Fizikal**: Keengganan **Penghulu Dol Said** tunduk kepada kekuasaan British di **Naning** menyebabkan British melancarkan serangan tentera pada tahun **1831 dan 1832**; British juga membedil **Kuala Terengganu pada tahun 1862**.',
          zh: '（7）武力攻击（Serangan Fizikal）：当外交逼迫失效时英国便大动干戈——因南宁村长多赛益（Dol Said）拒绝臣服，英军于1831及1832年发动南宁战争，并曾于1862年炮轰瓜拉登嘉楼。',
        },
        {
          tag: 'CONTOH',
          bm: 'Di Borneo, **James Brooke** membedil kubu masyarakat **Iban di Sungai Skrang dan Saribas** yang dianggap mengancam peluasan kuasanya di Sarawak, manakala **SBUB** menyerang kebangkitan **Mat Salleh** di Sabah.',
          zh: '在婆罗洲，詹姆士·布洛克炮轰砂拉越斯可让河与沙里拔河的伊班族堡垒，而沙巴 SBUB 则出动武装部队围剿末沙烈（Mat Salleh）的抗英起义。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Pastikan anda tidak mencampuradukkan strategi mengikut negeri: **Pulau Pinang = Tipu Helah**, **Singapura = Manipulasi**, **Melaka = Pakatan**, **Pahang = Ugutan/Desakan (kes Goh Hui)**, **Sabah = Pajakan**, **Naning = Serangan Fizikal**!',
          zh: '考前黄金速查表：槟城 = 欺骗手段（Tipu helah）；新加坡 = 操纵（Manipulasi）；马六甲 = 结盟（Pakatan）；彭亨 = 施压恐吓（吴辉案 Ugutan/Desakan）；沙巴 = 租借（Pajakan）；南宁 = 武力攻击（Serangan fizikal）！',
        },
      ],
    },
  ],
  comparisonTables: [
    {
      titleBm: 'Perbandingan 3 Strategi Belanda dengan 7 Strategi British Beserta Contoh Peristiwa',
      titleZh: '荷兰三大策略与英国七大策略及历史实例完整对比表',
      headers: [
        { bm: 'Strategi Kuasa Barat', zh: '西方扩张策略' },
        { bm: 'Contoh Peristiwa **Belanda** (3 Strategi)', zh: '荷兰历史实例（共3种策略）' },
        { bm: 'Contoh Peristiwa **British** (7 Strategi)', zh: '英国历史实例（共7种策略）' },
      ],
      rows: [
        [
          { bm: '**1. Serangan Fizikal**', zh: '1. 武力攻击' },
          {
            bm: 'Menyerang **Pulau Pangkor (1650)**, **Kuala Perak (1651)**, **Melaka (1641)**, **Tanjung Ketapang (1784)** & **Kuala Selangor (1784/1785)**',
            zh: '炮轰邦咯岛（1650）、瓜拉霹雳（1651）、攻打马六甲葡军（1641）及进攻瓜拉雪兰莪（1784/1785）',
          },
          {
            bm: 'Menyerang **Dol Said di Naning (1831 & 1832)**, membedil **Kuala Terengganu (1862)**, menyerang Iban di Sarawak & **Mat Salleh** di Sabah',
            zh: '进攻南宁多赛益（1831/1832）、炮轰瓜拉登嘉楼（1862）、攻击砂拉越伊班人与沙巴末沙烈',
          },
        ],
        [
          { bm: '**2. Perjanjian**', zh: '2. 签署条约' },
          {
            bm: 'Perjanjian monopoli bijih timah dengan **Perak (1650)** dan **Sultan Ibrahim di Selangor (1786)**',
            zh: '与霹雳（1650）及雪兰莪苏丹依布拉欣（1786）签署锡米贸易条约',
          },
          {
            bm: '**Perjanjian Pangkor 1874**, perjanjian menerima Residen di Perak, Selangor, Negeri Sembilan & Pahang',
            zh: '《1874年邦咯条约》及迫使霹、雪、森、彭统治者签约接受参政司',
          },
        ],
        [
          { bm: '**3. Pakatan**', zh: '3. 政治结盟' },
          {
            bm: 'Pakatan dengan **Johor (1641)** mengalahkan Portugis; pakatan dengan **British (Perjanjian Inggeris-Belanda 1824)**',
            zh: '1641年联柔灭葡；1824年与英国结盟签署《英荷条约》获明古连',
          },
          {
            bm: 'Pakatan dengan **Belanda** menerusi **Perjanjian Inggeris-Belanda 1824** sehingga British memperoleh **Melaka**',
            zh: '通过《1824年英荷条约》与荷兰结盟交换领土，成功取得马六甲',
          },
        ],
        [
          { bm: '**4. Manipulasi**', zh: '4. 操纵内乱危机' },
          { bm: 'Tiada', zh: '无' },
          {
            bm: 'Isu takhta **Singapura (1819)**, Perang Larut **Perak (1874)**, rompakan Kuala Langat & rumah api **Tanjung Rachado (Selangor)**, konflik **Sungai Ujong**',
            zh: '操纵新加坡王位危机、霹雳拉律战争、雪兰莪商船遇劫与灯塔案、双溪芙蓉征税权冲突',
          },
        ],
        [
          { bm: '**5. Ugutan / Desakan**', zh: '5. 恐吓与施压' },
          { bm: 'Tiada', zh: '无' },
          {
            bm: 'Mendesak **Sultan Ahmad di Pahang (1888)** menerima Residen selepas kes kematian **Goh Hui**; James Brooke mendesak **Sultan Brunei**',
            zh: '借华裔英籍吴辉命案威逼彭亨苏丹（1888）接受参政司；布洛克胁迫文莱苏丹',
          },
        ],
        [
          { bm: '**6. Tipu Helah**', zh: '6. 欺骗手段' },
          { bm: 'Tiada', zh: '无' },
          {
            bm: '**Francis Light** menipu **Sultan Abdullah** (Kedah) untuk menduduki **Pulau Pinang (1786)**',
            zh: '莱特许下假军援承诺欺骗吉打苏丹阿都拉，占领槟城（1786）',
          },
        ],
        [
          { bm: '**7. Pajakan**', zh: '7. 租借与特许状' },
          { bm: 'Tiada', zh: '无' },
          {
            bm: '**SBUB** memajak wilayah di **Sabah** daripada Sultan Brunei dan Sultan Sulu serta diberi **Piagam Diraja**',
            zh: '渣打公司 SBUB 租借沙巴领土并获英国皇家特许状',
          },
        ],
      ],
    },
  ],
  dialogues: [
    {
      speakerBm: 'Alfonso de Albuquerque (Portugis)',
      roleBm: 'Panglima Tentera Portugis 1511',
      roleZh: '1511年葡萄牙远征军统帅',
      emoji: '⚔️',
      lineBm:
        'Kami tidak membuang masa berunding panjang! Angkatan laut Portugis melancarkan **serangan fizikal** terus ke atas jambatan dan kubu **Melaka pada tahun 1511**!',
      lineZh:
        '我们绝不浪费时间谈判！葡萄牙舰队在1511年直接发动武力强攻（serangan fizikal），一举夺下马六甲大桥与城池！',
    },
    {
      speakerBm: 'Gabenor VOC Belanda',
      roleBm: 'Pentadbir Belanda di Melaka & Betawi',
      roleZh: '荷兰东印度公司总督',
      emoji: '⚓',
      lineBm:
        'Belanda lebih pintar dengan **tiga strategi**: kami berpakat dengan **Johor (1641)** menewaskan Portugis, mengikat **perjanjian** bijih timah dengan **Perak (1650)** dan **Selangor (1786)**, serta melancarkan **serangan fizikal** di Kuala Selangor apabila ditentang!',
      lineZh:
        '我们荷兰懂得三管齐下：1641年与柔佛结盟赶走葡萄牙，1650与1786年同霹雳和雪兰莪签锡米条约，遇到反抗就炮轰瓜拉雪兰莪！',
    },
    {
      speakerBm: 'Pegawai Kolonial British',
      roleBm: 'Arkitek Dasar Campur Tangan 1874',
      roleZh: '英国殖民外交官',
      emoji: '🦊',
      lineBm:
        'Kekerasan memakan belanja besar! Sebab itulah British mengutamakan **tujuh strategi**: **tipu helah** di Pulau Pinang, **manipulasi** di Singapura dan Selangor, **pakatan** di Melaka, **ugutan** kes Goh Hui di Pahang, **pajakan** di Sabah, **perjanjian**, dan barulah **serangan fizikal** di Naning jika terpaksa!',
      lineZh:
        '直接打仗太烧钱了！所以我们英国讲究七大权谋：槟城靠骗、新加坡雪兰莪靠操纵、马六甲靠结盟、彭亨靠吴辉案施压、沙巴靠租借、再签条约绑死，万不得已才像在南宁那样动武！',
    },
  ],
  memoryHackBm:
    'Formula **1-3-7 Strategi Barat**: **Portugis = 1** (**Serangan Fizikal**); **Belanda = 3** (**"SPP"** = **Serangan Fizikal, Perjanjian, Pakatan**); **British = 7** (**"SPP + MUTP"** = **Serangan Fizikal, Perjanjian, Pakatan + Manipulasi, Ugutan/Desakan, Tipu Helah, Pajakan**)!',
  memoryHackZh:
    '【1-3-7 西方策略终极口诀】葡萄牙 = 1招（纯武力攻击）；荷兰 = 3招（SPP：武力攻击 + 条约 + 结盟）；英国 = 7招（在荷兰 SPP 三招基础上，再加四大阴招 MUTP：Manipulasi 操纵、Ugutan 恐吓、Tipu helah 欺骗、Pajakan 租借）！',
  subtopicMcqs: [
    {
      id: '1.4_mcq_1',
      spCode: 'SP 7.1.4',
      questionBm:
        'Apakah **tiga** strategi utama yang digunakan oleh kuasa **Belanda** untuk menguasai perdagangan dan wilayah di negara kita?',
      questionZh: '荷兰（Belanda）主要运用哪三种策略来控制我国地区的贸易与领土？',
      options: [
        {
          id: 'A',
          textBm: '**Tipu helah**, **pajakan** dan **manipulasi**',
          textZh: '欺骗手段、租借与操纵',
        },
        {
          id: 'B',
          textBm: '**Serangan fizikal**, **perjanjian** dan **pakatan**',
          textZh: '武力攻击、签署条约与政治结盟',
        },
        {
          id: 'C',
          textBm: '**Ugutan**, **tipu helah** dan **pajakan**',
          textZh: '恐吓施压、欺骗手段与租借',
        },
        {
          id: 'D',
          textBm: '**Manipulasi**, **desakan** dan **piagam diraja**',
          textZh: '操纵、施压与皇家特许状',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Kuasa **Belanda** menggunakan **tiga strategi** iaitu **serangan fizikal** (Pangkor 1650, Kuala Selangor 1784), **perjanjian** (Perak 1650, Selangor 1786) dan **pakatan** (Johor 1641, British 1824).',
      explanationZh:
        '牢记「1-3-7口诀」：荷兰只有 SPP 三种策略——武力攻击（Serangan fizikal）、条约（Perjanjian）与结盟（Pakatan）；欺骗、操纵、恐吓与租借皆为英国策略。',
    },
    {
      id: '1.4_mcq_2',
      spCode: 'SP 7.1.4',
      questionBm:
        'Kejadian rompakan kapal dagang British di perairan **Kuala Langat** dan serangan ke atas rumah api di **Tanjung Rachado** telah dijadikan alasan oleh British untuk meluaskan kuasa di Selangor melalui strategi...',
      questionZh: '英国利用瓜拉冷岳海域商船遇劫以及丹绒拉查多灯塔遇袭事件作为借口介入雪兰莪，这属于哪一种策略？',
      options: [
        {
          id: 'A',
          textBm: '**Manipulasi**',
          textZh: '操纵利用危机（Manipulasi）',
        },
        {
          id: 'B',
          textBm: '**Pajakan**',
          textZh: '租借土地（Pajakan）',
        },
        {
          id: 'C',
          textBm: '**Pakatan**',
          textZh: '大国结盟（Pakatan）',
        },
        {
          id: 'D',
          textBm: '**Tipu helah**',
          textZh: '欺骗手段（Tipu helah）',
        },
      ],
      correctId: 'A',
      explanationBm:
        'British menggunakan strategi **manipulasi** dengan mengambil kesempatan atas kejadian rompakan kapal dagang di Kuala Langat dan serangan rumah api di Tanjung Rachado untuk campur tangan di **Selangor (1874)**.',
      explanationZh:
        '英国借题发挥、利用地方治安事件趁机介入内政，在课本中明确归类为「操纵（Manipulasi）」策略。',
    },
    {
      id: '1.4_mcq_3',
      spCode: 'SP 7.1.4',
      questionBm:
        'Peristiwa pembunuhan seorang lelaki Cina bernama **Goh Hui** berhampiran istana Sultan Ahmad di Pekan pada tahun 1888 telah digunakan oleh British untuk menguasai **Pahang** menerusi strategi...',
      questionZh: '1888年一名华裔男子吴辉（Goh Hui）在北根王宫附近遇害，英国利用此事件通过什么策略控制彭亨？',
      options: [
        {
          id: 'A',
          textBm: '**Pakatan** dengan Belanda',
          textZh: '与荷兰结盟（Pakatan）',
        },
        {
          id: 'B',
          textBm: '**Pajakan** melalui Piagam Diraja',
          textZh: '通过皇家特许状租借（Pajakan）',
        },
        {
          id: 'C',
          textBm: '**Ugutan / Desakan** supaya Sultan menerima Residen British',
          textZh: '恐吓与施压（Ugutan / Desakan），迫使苏丹接受英国参政司',
        },
        {
          id: 'D',
          textBm: '**Serangan fizikal** membedil seluruh bandar Kuantan',
          textZh: '炮轰整个关丹市区的武力攻击',
        },
      ],
      correctId: 'C',
      explanationBm:
        'British menggunakan strategi **ugutan / desakan** dengan mendakwa Goh Hui ialah rakyat British dan mendesak **Sultan Ahmad** menerima **Residen British** di Pahang kerana kononnya gagal menjaga keamanan.',
      explanationZh:
        '英国声称死者吴辉为英籍子民，以此恐吓并施压（ugutan/desakan）彭亨苏丹阿末，迫使其于1888年接受英国参政司。',
    },
    {
      id: '1.4_mcq_4',
      spCode: 'SP 7.1.4',
      questionBm:
        'Apakah perubahan politik di Britain pada tahun **1873** yang mendorong penukaran dasar tidak campur tangan kepada **dasar campur tangan** British di Negeri-negeri Melayu?',
      questionZh: '1873年英国国内发生了什么政治变化，促使英国对马来各州由「不干预政策」转向「全面干预政策」？',
      options: [
        {
          id: 'A',
          textBm: 'Pembubaran Parlimen Britain berikutan Perang Napoleon',
          textZh: '因拿破仑战争导致英国议会解散',
        },
        {
          id: 'B',
          textBm: '**Parti Konservatif** mengambil alih pucuk pimpinan kerajaan Britain daripada **Parti Liberal**',
          textZh: '保守党（Parti Konservatif）取代自由党（Parti Liberal）执掌英国政府',
        },
        {
          id: 'C',
          textBm: 'Penubuhan **Syarikat Hindia Timur Inggeris (SHTI)** oleh Ratu Elizabeth I',
          textZh: '伊丽莎白一世女王创立英国东印度公司',
        },
        {
          id: 'D',
          textBm: 'kekalahan tentera laut British kepada Belanda di Selat Sunda',
          textZh: '英国海军在巽他海峡败给荷兰舰队',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Pada tahun **1873**, **Parti Konservatif** mengambil alih kerajaan Britain daripada **Parti Liberal** dan menukarkan dasar tidak campur tangan kepada **dasar campur tangan** di Negeri-negeri Melayu.',
      explanationZh:
        '1873年英国大选后，主张帝国扩张的保守党（Parti Konservatif）取代自由党上台，正式下令对马来各州采取干预政策。',
    },
    {
      id: '1.4_mcq_5',
      spCode: 'SP 7.1.4',
      questionBm:
        'Pasangan strategi dan wilayah manakah yang **betul** mengenai peluasan kuasa **British** di negara kita?',
      questionZh: '关于英国在我国扩张势力的「策略—地区」配对，以下哪一项完全正确？',
      options: [
        {
          id: 'A',
          textBm: '**Pulau Pinang** — **Pakatan**',
          textZh: '槟城 —— 政治结盟（Pakatan）',
        },
        {
          id: 'B',
          textBm: '**Melaka** — **Tipu helah**',
          textZh: '马六甲 —— 欺骗手段（Tipu helah）',
        },
        {
          id: 'C',
          textBm: '**Naning** — **Serangan fizikal**',
          textZh: '南宁 —— 武力攻击（Serangan fizikal）',
        },
        {
          id: 'D',
          textBm: '**Sabah** — **Serangan laut Belanda**',
          textZh: '沙巴 —— 荷兰海军进攻',
        },
      ],
      correctId: 'C',
      explanationBm:
        'Keengganan Penghulu **Dol Said** tunduk kepada kekuasaan British di **Naning** menyebabkan British melancarkan **serangan fizikal** pada tahun 1831 dan 1832. (Pulau Pinang = Tipu helah; Melaka = Pakatan; Sabah = Pajakan).',
      explanationZh:
        '南宁村长多赛益拒绝臣服英国并缴纳十分之一税，英军遂于1831及1832年发动武力进攻（Serangan fizikal）。槟城是欺骗手段，马六甲是英荷结盟。',
    },
  ],
  strukturQuestion: {
    id: '1.4_struktur_1',
    spCode: 'SP 7.1.4 / K7.1.8',
    stimulusBm:
      'Kuasa **Belanda** dan **British** menggunakan pelbagai strategi yang berbeza untuk menguasai perdagangan serta pentadbiran di negara kita.',
    stimulusZh:
      '荷兰与英国运用了截然不同的策略来夺取我国的贸易控制权与行政主权。',
    parts: [
      {
        partLabel: '(a)',
        marks: 3,
        questionBm:
          'Nyatakan **tiga** strategi yang digunakan oleh kuasa **Belanda** untuk meluaskan pengaruhnya di Alam Melayu.',
        questionZh: '写出荷兰（Belanda）在马来世界扩张势力所使用的三种策略。[3分]',
        expectedKeywordsBm: ['Serangan fizikal', 'Perjanjian', 'Pakatan'],
        modelAnswerBm:
          'Tiga strategi yang digunakan oleh kuasa Belanda ialah **serangan fizikal**, **perjanjian** dan **pakatan**.',
        modelAnswerZh:
          '荷兰所使用的三种策略是：武力攻击（serangan fizikal）、签署条约（perjanjian）以及政治结盟（pakatan）。',
      },
      {
        partLabel: '(b)',
        marks: 3,
        questionBm:
          'Bagaimanakah British menggunakan strategi **manipulasi** dan **pakatan** untuk meluaskan kuasanya di **Singapura** dan **Melaka**?',
        questionZh: '说明英国如何分别运用「操纵（manipulasi）」与「结盟（pakatan）」策略在新加坡和马六甲扩张势力。[3分]',
        expectedKeywordsBm: [
          'pewarisan takhta',
          'Kesultanan Johor Riau',
          'Singapura',
          'Perjanjian Inggeris-Belanda 1824',
          'Melaka',
        ],
        modelAnswerBm:
          'Di **Singapura**, Stamford Raffles menggunakan strategi **manipulasi** dengan mengambil kesempatan daripada isu **perebutan pewarisan takhta Kesultanan Johor Riau** antara Tengku Hussein dengan Tengku Abdul Rahman pada tahun 1819. Di **Melaka** pula, British mengadakan **pakatan** dengan **Belanda** menerusi **Perjanjian Inggeris-Belanda 1824** sehingga Belanda menyerahkan Melaka kepada British.',
        modelAnswerZh:
          '在新加坡，莱佛士于1819年运用操纵策略，利用柔佛廖内王朝东姑胡先与东姑阿都拉曼之间的王位继承危机建立英属据点；在马六甲，英国则与荷兰结盟签署《1824年英荷条约》，以明古连换取马六甲。',
      },
      {
        partLabel: '(c)',
        marks: 4,
        questionBm:
          'Sejarah membuktikan kuasa asing gemar mengambil kesempatan apabila berlaku perbalahan dalaman. Bagaimanakah rakyat Malaysia boleh mengelakkan muslihat sedemikian daripada berulang?',
        questionZh: '历史证明外国势力最喜欢趁内部纷争时浑水摸鱼。马来西亚人民应如何防止此类阴谋重演？（KBAT 高思维题）[4分]',
        expectedKeywordsBm: [
          'berwaspada',
          'rundingan',
          'muafakat',
          'perpaduan kaum',
          'mengutamakan kepentingan negara',
        ],
        modelAnswerBm:
          'Rakyat dan pemimpin mestilah sentiasa **berwaspada** terhadap anasir luar serta mengukuhkan **perpaduan kaum** (F). Sebarang perselisihan faham dalam negara hendaklah diselesaikan secara **rundingan dan muafakat** tanpa melibatkan campur tangan pihak asing (H), contohnya menghormati Perlembagaan Persekutuan dan Rukun Negara (C). Dengan mengutamakan **kepentingan nasional** melebihi kepentingan peribadi, kedaulatan negara tidak akan tergadai (I).',
        modelAnswerZh:
          '国民与领导层必须时刻警惕外部干预，并不断巩固各族团结（F）。国内任何分歧都应通过内部协商与共识和平解决，绝不引狼入室（H），例如共同尊崇联邦宪法与国家原则（C）。只要把国家利益置于个人私利之上，国家主权就绝不会旁落（I）。',
      },
    ],
  },
};

const SUBTOPIC_2_1: OfficialSubtopic = {
  subtopicCode: '2.1',
  babNumber: 2,
  babTitleBm: 'Pentadbiran Negeri-negeri Selat',
  babTitleZh: '海峡殖民地的行政管理',
  skCode: 'SK 7.2',
  spCodes: ['SP 7.2.1', 'K7.2.5'],
  titleBm: 'Peluasan Kuasa British di Pulau Pinang, Singapura dan Melaka',
  titleZh: '英国在槟城、新加坡与马六甲的势力扩张',
  heroImages: [
    {
      imageKey: 'bab2_pulau_pinang_light',
      captionBm:
        'Pendudukan **Francis Light** di **Pulau Pinang** pada **11 Ogos 1786** menerusi strategi **tipu helah** terhadap Kesultanan Kedah diikuti penguasaan **Seberang Perai (1800)**.',
      captionZh:
        '弗朗西斯·莱特于1786年8月11日运用欺骗手段占领吉打属地槟城，随后英国又于1800年吞并威省。',
      hotspots: [
        {
          x: 24,
          y: 34,
          termBm: 'Francis Light & Tipu Helah (1786)',
          meaningZh: '弗朗西斯·莱特与1786年欺骗手段',
          detailBm:
            '**Francis Light** berjanji secara peribadi memberi bantuan ketenteraan kepada **Sultan Abdullah** walaupun **SHTI** tidak pernah memberi jaminan rasmi.',
          detailZh:
            '莱特私自向吉打苏丹阿都拉许下军事保护承诺，而英国东印度公司（SHTI）实际上从未同意出兵协防。',
        },
        {
          x: 52,
          y: 26,
          termBm: 'Prince of Wales Island (11 Ogos 1786)',
          meaningZh: '威尔士亲王岛与乔治市升旗仪式',
          detailBm:
            'Pada **11 Ogos 1786**, bendera **Union Jack** dinaikkan; Pulau Pinang dinamakan **Prince of Wales Island** dan petempatannya dinamakan **Georgetown**.',
          detailZh:
            '1786年8月11日英国米字旗升起，槟城被改名为威尔士亲王岛，据点命名为乔治市（Georgetown）。',
        },
        {
          x: 78,
          y: 54,
          termBm: 'Perjanjian Inggeris-Kedah (1 Mei 1791)',
          meaningZh: '1791年英吉条约：每年6,000西班牙银元',
          detailBm:
            'Selepas angkatan Kedah tewas di Perai, **Perjanjian 1 Mei 1791** mengiktiraf pendudukan British di Pulau Pinang dengan bayaran **6,000 dolar Sepanyol** setahun.',
          detailZh:
            '吉打收复槟城失败后被迫签署1791年条约，正式承认英占槟城，每年仅获赔6,000西班牙银元。',
        },
        {
          x: 46,
          y: 80,
          termBm: 'Seberang Perai / Province Wellesley (1800)',
          meaningZh: '1800年威省条约：每年10,000西班牙银元',
          detailBm:
            'Melalui **Perjanjian 1800** oleh **George Leith**, British menduduki **Seberang Perai (Province Wellesley)** sebagai benteng pertahanan dan kawasan pertanian.',
          detailZh:
            '1800年乔治·利斯迫使吉打签署条约占领威省，作为槟城的防卫屏障与粮食产区，年付合共10,000银元。',
        },
      ],
    },
    {
      imageKey: 'bab2_singapura_raffles',
      captionBm:
        '**Stamford Raffles** memanipulasi isu pewarisan takhta **Kesultanan Johor Riau** pada tahun **1819** sebelum **John Crawfurd** mengambil alih Singapura selama-lamanya pada tahun **1824**.',
      captionZh:
        '斯坦福·莱佛士于1819年操纵柔佛廖内王朝王位继承危机登陆新加坡，随后约翰·克劳福于1824年永久夺取新加坡主权。',
    },
  ],
  sections: [
    {
      sectionCode: '2.1(a)',
      headingBm: 'Latar Belakang dan Kepentingan Pulau Pinang kepada British',
      headingZh: '槟城的历史背景及其对英国的三大战略重要性',
      leadParagraphBm:
        '**Pulau Pinang** ialah wilayah **Kesultanan Kedah** yang mempunyai pelabuhan awal di **Batu Uban**; menjelang abad ke-18, **Syarikat Hindia Timur Inggeris (SHTI)** amat memerlukan Pulau Pinang kerana pelabuhan **Bangkahulu** terletak jauh dari laluan perdagangan Selat Melaka.',
      leadParagraphZh:
        '槟城原属吉打苏丹王朝领土，早在峇都蛮（Batu Uban）便有阿拉伯商船停靠；18世纪时因明古连偏离马六甲海峡主航道，英国东印度公司（SHTI）迫切需要夺取槟城以实现三大战略目的。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**(1) Pusat pengumpulan barang**: British memerlukan barangan dari Kepulauan Melayu seperti **emas**, **perak**, **bijih timah** dan **lada hitam** untuk ditukarkan dengan **teh** dari **China** yang mendapat pasaran luas di Eropah (kerana kerajaan China tidak memerlukan barangan Britain).',
          zh: '（1）货物集散中心：欧洲极需中国茶叶，但清朝不需要英国商品，只收金、银、锡米与黑胡椒；因此英国急需槟城作为搜集马来群岛物产的对华贸易中转站。',
        },
        {
          tag: 'HURAIAN',
          bm: '**(2) Pelabuhan persinggahan**: Kedudukan Pulau Pinang di pertengahan laluan perdagangan antara **India dan China** sesuai dijadikan tempat **membaiki kapal**, mendapatkan bekalan **makanan dan minuman**, serta berlindung sementara menunggu peralihan tiupan **angin monsun**.',
          zh: '（2）中途停靠港：槟城位于印度与中国航线中途，适合船只维修、补充淡水粮食，并安全躲避风浪以等待季候风转换。',
        },
        {
          tag: 'FAKTA',
          bm: '**(3) Pangkalan tentera**: Pantai timur India tidak mempunyai pelabuhan laut dalam yang sesuai; oleh itu pangkalan tentera laut di Pulau Pinang diperlukan untuk mempertahankan petempatan British di **India** (terutamanya di **Madras** dan **Bombay**) daripada ancaman serangan tentera laut **Perancis**.',
          zh: '（3）军事基地：印度东海岸缺乏深水良港，英国需要槟城作为海军基地，以保护其在印度（如马德拉斯 Madras 与孟买 Bombay）的殖民据点免受法国海军袭击。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Hafal tiga kepentingan Pulau Pinang kepada SHTI dengan tepat: **Pusat Pengumpulan Barang (teh China)**, **Pelabuhan Persinggahan (angin monsun)**, dan **Pangkalan Tentera (ancaman Perancis di India)**!',
          zh: '槟城三大战略价值必背：货物集散中心（换中国茶叶）、中途停靠港（等季候风修船补给）、海军基地（防法国进攻印度）！',
        },
      ],
    },
    {
      sectionCode: '2.1(b)',
      headingBm: 'Kronologi Pendudukan British di Pulau Pinang (1786) dan Seberang Perai (1800)',
      headingZh: '英国占领槟城（1786年）与威省（1800年）的完整历史经过',
      leadParagraphBm:
        'Ancaman daripada **Bugis** dan **Siam** terhadap kedaulatan **Kesultanan Kedah** pada abad ke-18 telah membuka ruang kepada **Francis Light** menggunakan **tipu helah** bagi menduduki Pulau Pinang.',
      leadParagraphZh:
        '18世纪吉打苏丹王朝先后面临武吉士人与暹罗的武力威胁，结果被弗朗西斯·莱特利用欺骗手段乘虚而入占领槟城与威省。',
      bullets: [
        {
          tag: 'CONTOH',
          bm: '**Ancaman Bugis semasa Sultan Muhammad Jiwa (1710–1778)**: Pelantikan **Tunku Abdullah** sebagai Raja Muda Kedah ditentang oleh kerabat diraja Kedah yang berpakat dengan **orang Bugis di Selangor** menawan Kuala Kedah dan Alor Setar; Sultan memohon bantuan firma **Jourdain Sullivan and de Souza** yang menghantar **Francis Light (1771)**, namun rundingan terhenti apabila firma enggan memberi bantuan tentera.',
          zh: '苏丹莫哈末吉瓦时期（武吉士威胁）：苏丹册封东姑阿都拉为王储引发王室不满，王室联手雪兰莪武吉士人攻陷吉打港口与亚罗士打；苏丹向英商公司求助，莱特于1771年赴吉打谈判，但因公司拒绝提供军事援助而作罢。',
        },
        {
          tag: 'CONTOH',
          bm: '**Ancaman Siam semasa Sultan Abdullah Mukarram Shah (1778–1798)**: **Siam** yang berperang dengan Burma menuntut Kedah menghantar semula **bunga emas**, wang dan tenaga manusia; terdesak oleh ancaman Siam, Sultan Abdullah menawarkan **Pulau Pinang** kepada **SHTI** dengan syarat SHTI memberi **bantuan ketenteraan** melindungi Kedah.',
          zh: '苏丹阿都拉时期（暹罗威胁）：暹罗要求吉打恢复进贡金银花（bunga emas）、钱财与人力；为抵御暹罗入侵，苏丹阿都拉提议以割让槟城为条件换取英国东印度公司（SHTI）的军事保护。',
        },
        {
          tag: 'FAKTA',
          bm: '**Tipu helah Francis Light (11 Ogos 1786)**: Bimbang pelabuhan Pulau Pinang jatuh ke tangan Belanda atau Perancis, **Francis Light** berjanji secara peribadi akan memenuhi syarat bantuan ketenteraan walaupun SHTI belum membuat keputusan; pada **11 Ogos 1786**, beliau menaikkan bendera **Union Jack**, menamakan Pulau Pinang sebagai **Prince of Wales Island** dan petempatan mereka sebagai **Georgetown**.',
          zh: '莱特施展欺骗手段（1786年8月11日）：莱特在 SHTI 尚未批准军援的情况下私自许下空头承诺骗取登陆权；1786年8月11日升起英国米字旗，将槟城改名威尔士亲王岛、据点命名乔治市。',
        },
        {
          tag: 'HURAIAN',
          bm: '**Pengkhianatan SHTI & Perang 1791**: Apabila Siam menakluki Patani dan mengancam Kedah pada tahun 1786, **SHTI enggan memberi bantuan ketenteraan** kerana tiada perjanjian rasmi ditandatangani serta mahu menjaga kepentingan perdagangan dengan Siam; **Sultan Abdullah** menghimpunkan angkatan perang di **Seberang Perai** pada tahun **1791** untuk merebut semula Pulau Pinang, namun diserang dan ditewaskan oleh Francis Light.',
          zh: 'SHTI 背信弃义与1791年战争：当暹罗征服北大年并威逼吉打时，SHTI 以未签正式条约及维护对暹贸易为由拒绝出兵；1791年苏丹阿都拉在威省集结军队准备收复槟城，却遭莱特先发制人击败。',
        },
        {
          tag: 'CONTOH',
          bm: '**Perjanjian 1 Mei 1791 & Perjanjian Jun 1800**: Melalui **Perjanjian Persahabatan dan Keamanan Inggeris-Kedah (1 Mei 1791)**, Kedah terpaksa mengiktiraf pendudukan British di Pulau Pinang dengan bayaran **6,000 dolar Sepanyol** setahun; seterusnya pada **Jun 1800**, Gabenor **George Leith** mendesak **Sultan Dhiauddin** menandatangani **Perjanjian Persahabatan dan Perikatan** yang menyerahkan **Seberang Perai (Province Wellesley)** dengan bayaran tahunan menjadi **10,000 dolar Sepanyol**.',
          zh: '1791年与1800年条约：战败后吉打被迫签下《1791年5月1日英吉友好和平条约》，承认英占槟城并每年获付6,000西班牙银元；1800年6月总督乔治·利斯又迫使苏丹迪亚乌丁签约割让威省（Province Wellesley）作为防卫屏障与粮仓，年付总额调为10,000西班牙银元。',
        },
      ],
    },
    {
      sectionCode: '2.1(c)',
      headingBm: 'Peluasan Kuasa British di Singapura (1819–1824)',
      headingZh: '英国在新加坡的势力扩张（1819–1824年）：操纵王位继承危机',
      leadParagraphBm:
        'Selepas tamatnya **Perang Napoleon**, pemulangan semula Melaka dan Betawi kepada Belanda mendorong **Stamford Raffles** menggunakan strategi **manipulasi** terhadap isu pewarisan takhta **Kesultanan Johor Riau** bagi menduduki **Singapura**.',
      leadParagraphZh:
        '拿破仑战争结束后，英国将马六甲与巴达维亚归还荷兰却遭高额关税排挤，促使斯坦福·莱佛士南下并操纵柔佛廖内王位继承危机夺取新加坡。',
      imageKey: 'bab2_singapura_raffles',
      imageCaptionBm:
        '**Stamford Raffles** dan **William Farquhar** berunding dengan **Temenggung Abdul Rahman** serta mengisytiharkan **Sultan Hussein** pada Februari 1819.',
      imageCaptionZh:
        '1819年莱佛士与法夸尔拉拢天猛公阿都拉曼，并拥立东姑胡先为柔佛苏丹以换取新加坡设立据点。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Kesan Perang Napoleon & Surat Kew (1795)**: Ketika Belanda ditawan Perancis dalam **Perang Napoleon (1793–1815)**, Raja Belanda mengeluarkan **Surat Kew (1795)** menyerahkan tanah jajahan Belanda di Timur secara sementara kepada British; namun apabila dikembalikan pada tahun 1816, Belanda mengenakan **cukai tinggi** dan menyekat kapal dagang British.',
          zh: '拿破仑战争与《1795年邱园信函》（Surat Kew）：荷兰被法国占领期间，流亡英国的荷王签发《邱园信函》将东方殖民地交英代管；1816年战后归还马六甲与巴达维亚后，荷兰却对英商征收重税并加以刁难。',
        },
        {
          tag: 'HURAIAN',
          bm: '**Keperluan pelabuhan di selatan Selat Melaka**: Memandangkan Pulau Pinang terletak terlalu jauh ke utara dan Bangkahulu terpencil di luar Selat Melaka, **Stamford Raffles** dan **William Farquhar** ditugaskan mencari pelabuhan baharu di selatan Selat Melaka untuk mengawal laluan perdagangan China dan menyaingi Belanda.',
          zh: '急需马六甲海峡南端良港：由于槟城偏居海峡北端、明古连远在苏门答腊西岸，莱佛士与威廉·法夸尔奉命在海峡南端寻找新港口以扼守对华航线并打破荷兰垄断。',
        },
        {
          tag: 'FAKTA',
          bm: '**Manipulasi isu pewarisan takhta Kesultanan Johor Riau**: **Sultan Mahmud Shah III** mempunyai dua putera iaitu **Tengku Hussein (Tengku Long)** (putera sulung) dan **Tengku Abdul Rahman** (putera bongsu); apabila baginda mangkat pada tahun **1812**, Tengku Hussein berada di **Pahang** untuk berkahwin, lalu golongan **Bugis** menabalkan **Tengku Abdul Rahman** sebagai Sultan Johor Riau yang diiktiraf oleh **Belanda**.',
          zh: '操纵柔佛廖内王位继承危机：苏丹马末沙三世于1812年驾崩时，长子东姑胡先（Tengku Long）因远赴彭亨完婚未能奔丧，武吉士势力遂拥立幼子东姑阿都拉曼继位并获荷兰承认，导致长子痛失王位。',
        },
        {
          tag: 'CONTOH',
          bm: '**Perjanjian 30 Januari 1819 & Perjanjian 6 Februari 1819**: Raffles mendarat di Singapura pada Januari 1819 dan memaksa **Temenggung Abdul Rahman** menandatangani perjanjian awal (**30 Januari 1819**); bagi mengesahkan perjanjian itu tanpa persetujuan Sultan Abdul Rahman, Raffles menjemput **Tengku Hussein** dari Riau, mengisytiharkannya sebagai **Sultan Hussein Muhammad Shah**, lalu menandatangani **Perjanjian 6 Februari 1819** yang membenarkan petempatan British dibina di Singapura (Sultan Hussein dibayar **5,000 dolar Sepanyol** setahun, Temenggung **3,000 dolar Sepanyol** setahun, dan **William Farquhar** dilantik **Residen pertama**).',
          zh: '1819年两份关键条约：莱佛士先于1月30日迫使天猛公阿都拉曼签下初步协议；因缺乏苏丹批准无效，莱佛士遂从廖内接来东姑胡先册封为苏丹胡先，并于1819年2月6日签署正式条约获准在新加坡设港（苏丹年领5,000银元、天猛公3,000银元，法夸尔出任首任驻扎官）。',
        },
        {
          tag: 'CONTOH',
          bm: '**Perjanjian 2 Ogos 1824 (John Crawfurd)**: Residen kedua Singapura, **John Crawfurd**, menandatangani perjanjian baharu dengan **Sultan Hussein** dan **Temenggung Abdul Rahman** pada **2 Ogos 1824** yang menyebabkan **Singapura dan pulau-pulau dalam lingkungan 10 batu diserahkan kepada SHTI untuk selama-lamanya**, manakala Sultan dan Temenggung hilang kedaulatan ke atas Singapura.',
          zh: '1824年8月2日克劳福条约：第二任驻扎官约翰·克劳福威逼利诱苏丹胡先与天猛公签署《1824年8月2日条约》，将新加坡及周边10英里内岛屿永久割让给英国东印度公司（SHTI）！',
        },
      ],
    },
    {
      sectionCode: '2.1(d)',
      headingBm: 'Peluasan Kuasa British di Melaka melalui Pakatan',
      headingZh: '英国通过大国结盟策略获取马六甲',
      leadParagraphBm:
        'Penguasaan British ke atas **Melaka** pada tahun **1824** berlaku tanpa pertumpahan darah menerusi strategi **pakatan** dan rundingan diplomatik antara kerajaan Britain dengan kerajaan Belanda di Eropah.',
      leadParagraphZh:
        '英国于1824年夺得马六甲并未动用一兵一卒，而是通过英荷两国政府在欧洲的政治结盟与外交利益交换实现的。',
      bullets: [
        {
          tag: 'HURAIAN',
          bm: '**(1) Menamatkan pertikaian British dan Belanda di Alam Melayu**: Belanda membantah keras pembukaan petempatan British di **Singapura** kerana mendakwa Singapura berada di bawah lingkungan pengaruhnya, manakala British bertegas mempertahankan Singapura yang pesat maju; kedua-dua pihak mahu mengelakkan peperangan terbuka.',
          zh: '（1）平息马来世界争端：荷兰强烈抗议莱佛士占领新加坡，声称新加坡属荷兰势力范围，而英国坚决不肯放弃极具商业潜力的新加坡；双方皆希望通过谈判避免开战。',
        },
        {
          tag: 'HURAIAN',
          bm: '**(2) Dasar persahabatan British dan Belanda di Eropah**: Kerajaan Britain amat memerlukan Belanda sebagai sekutu dan **negara penampan (buffer state)** di benua Eropah bagi menyekat kebangkitan semula ancaman kuasa luar terutamanya Perancis.',
          zh: '（2）欧洲地缘友好政策：英国在欧洲大陆迫切需要荷兰作为盟友与战略缓冲国（negara penampan），以防范法国等欧洲强权再次威胁英国本土安全。',
        },
        {
          tag: 'HURAIAN',
          bm: '**(3) Masalah kewangan Belanda selepas Perang Napoleon**: Kerajaan Belanda mengalami kemelesetan ekonomi dan menanggung beban **hutang perang** yang besar kepada Britain, menyebabkan Belanda sedia bertolak ansur di meja rundingan.',
          zh: '（3）战后荷兰财政枯竭：拿破仑战争导致荷兰经济重创并背负欠英国的巨额战争债务，迫使荷兰愿意在殖民地谈判桌上作出妥协。',
        },
        {
          tag: 'FAKTA',
          bm: 'Hasil pakatan tersebut dimuktamadkan dalam **Perjanjian London 1824** yang menyerahkan **Melaka** kepada British sebagai pertukaran dengan pelabuhan British di **Bangkahulu**, Sumatera.',
          zh: '双方最终签署《1824年伦敦条约》，荷兰正式将马六甲移交给英国，换取英国在苏门答腊的明古连（Bangkahulu）据点。',
        },
      ],
    },
  ],
  comparisonTables: [
    {
      titleBm: 'Perbandingan Strategi Pendudukan British di Pulau Pinang, Singapura dan Melaka',
      titleZh: '英国占领槟城、新加坡与马六甲的策略、人物及关键条约总对比表',
      headers: [
        { bm: 'Wilayah Sasaran', zh: '目标地区' },
        { bm: 'Strategi Utama & Tokoh British', zh: '核心策略与英国关键人物' },
        { bm: 'Peristiwa & Perjanjian Penting', zh: '关键历史事件与条约' },
      ],
      rows: [
        [
          { bm: '**Pulau Pinang (1786) & Seberang Perai (1800)**', zh: '槟城（1786）与威省（1800）' },
          {
            bm: '**Tipu Helah** — **Francis Light** & **George Leith**',
            zh: '欺骗手段（Tipu helah）——莱特与乔治·利斯',
          },
          {
            bm: 'Janji palsu bantuan tentera kepada **Sultan Abdullah** (Kedah); bendera Union Jack dinaikkan **11 Ogos 1786**; **Perjanjian 1 Mei 1791** (6,000 dolar Sepanyol) & **Perjanjian 1800** (10,000 dolar Sepanyol)',
            zh: '假军援承诺骗取登陆（1786年8月11日升旗）；《1791年条约》占槟城（6,000银元）与《1800年条约》占威省（10,000银元）',
          },
        ],
        [
          { bm: '**Singapura (1819–1824)**', zh: '新加坡（1819–1824）' },
          {
            bm: '**Manipulasi** — **Stamford Raffles**, **William Farquhar** & **John Crawfurd**',
            zh: '操纵危机（Manipulasi）——莱佛士、法夸尔与克劳福',
          },
          {
            bm: 'Memanipulasi isu takhta antara **Tengku Hussein** dengan **Tengku Abdul Rahman**; **Perjanjian 30 Januari 1819**, **Perjanjian 6 Februari 1819** & **Perjanjian 2 Ogos 1824** (milik kekal SHTI)',
            zh: '操纵柔佛廖内王位继承争议；签署《1819年1月30日初步协议》、《1819年2月6日条约》及《1824年8月2日永久割让条约》',
          },
        ],
        [
          { bm: '**Melaka (1824)**', zh: '马六甲（1824）' },
          {
            bm: '**Pakatan** — Kerajaan **British** dan Kerajaan **Belanda**',
            zh: '大国结盟（Pakatan）——英荷两国政府',
          },
          {
            bm: 'Menamatkan pertikaian Singapura dan menjadikan Belanda negara penampan di Eropah melalui **Perjanjian London 1824 (17 Mac 1824)** — Melaka ditukar dengan **Bangkahulu**',
            zh: '为解决远东争端与维持欧洲缓冲国同盟，签署《1824年3月17日伦敦条约》，以明古连换取马六甲',
          },
        ],
      ],
    },
  ],
  dialogues: [
    {
      speakerBm: 'Sultan Abdullah Mukarram Shah',
      roleBm: 'Sultan Kedah (1778–1798)',
      roleZh: '吉打苏丹阿都拉',
      emoji: '👑',
      lineBm:
        '**Francis Light** telah memungkiri janji! Beta membenarkan beliau menduduki **Pulau Pinang** pada tahun 1786 dengan syarat SHTI memberi **bantuan ketenteraan** menghadapi ancaman **Siam**, tetapi apabila Siam mengancam Kedah, SHTI berlepas tangan!',
      lineZh:
        '弗朗西斯·莱特背信弃义！朕在1786年准许他立足槟城，前提是东印度公司出兵协助吉打抵御暹罗，结果暹罗大军压境时他们竟袖手旁观！',
    },
    {
      speakerBm: 'Stamford Raffles',
      roleBm: 'Pegawai British di Bangkahulu & Singapura',
      roleZh: '英国殖民官员莱佛士',
      emoji: '🎩',
      lineBm:
        'Peluang keemasan! Putera sulung **Tengku Hussein** diketepikan semasa **Sultan Mahmud Shah III** mangkat pada tahun 1812! Saya akan mengiktiraf baginda sebagai **Sultan Johor** supaya baginda menandatangani **Perjanjian 6 Februari 1819** di **Singapura**!',
      lineZh:
        '天赐良机！长子东姑胡先在1812年老苏丹驾崩时错失王位！我只要册封他为柔佛苏丹，他就会和我在新加坡签下《1819年2月6日条约》！',
    },
    {
      speakerBm: 'John Crawfurd',
      roleBm: 'Residen Kedua Singapura (1823–1826)',
      roleZh: '新加坡第二任驻扎官克劳福',
      emoji: '🖋️',
      lineBm:
        'Melalui **Perjanjian 2 Ogos 1824**, Sultan Hussein dan Temenggung Abdul Rahman akhirnya menyerahkan **Singapura** dan pulau-pulau dalam lingkungan 10 batu kepada **SHTI untuk selama-lamanya**!',
      lineZh:
        '通过《1824年8月2日条约》，苏丹胡先与天猛公终于把新加坡及周边10英里岛屿的主权永久割让给英国东印度公司了！',
    },
  ],
  memoryHackBm:
    'Formula **3 Pelabuhan 3 Strategi**: **Pulau Pinang = Tipu Helah** (Francis Light 1786 → Perjanjian 1791 → George Leith Seberang Perai 1800); **Singapura = Manipulasi** (Raffles 30 Jan & 6 Feb 1819 → Crawfurd 2 Ogos 1824); **Melaka = Pakatan** (Perjanjian London 17 Mac 1824)!',
  memoryHackZh:
    '【三港三招时间轴口诀】槟城 = 骗（Tipu helah：1786莱特升旗 → 1791赔6千 → 1800利斯占威省赔1万）；新加坡 = 操（Manipulasi：1812驾崩争位 → 1819莱佛士立苏丹胡先 → 1824克劳福永久吞并）；马六甲 = 盟（Pakatan：1824英荷条约明古连换马六甲）！',
  subtopicMcqs: [
    {
      id: '2.1_mcq_1',
      spCode: 'SP 7.2.1',
      questionBm:
        'Mengapakah **Syarikat Hindia Timur Inggeris (SHTI)** memerlukan barangan seperti emas, perak, bijih timah dan lada hitam dari Kepulauan Melayu pada abad ke-18?',
      questionZh: '为什么英国东印度公司（SHTI）在18世纪迫切需要搜集马来群岛的黄金、白银、锡米与黑胡椒？',
      options: [
        {
          id: 'A',
          textBm: 'Untuk dijadikan hantaran ufti tahunan kepada kerajaan Perancis',
          textZh: '作为每年向法国政府进贡的贡品',
        },
        {
          id: 'B',
          textBm: 'Untuk ditukarkan dengan **teh** dari **China** yang mendapat pasaran luas di Eropah',
          textZh: '用来交换在欧洲拥有庞大市场的中国茶叶',
        },
        {
          id: 'C',
          textBm: 'Untuk membina landasan kereta api merentasi Segenting Kra',
          textZh: '用来修建横跨克拉地峡的铁路',
        },
        {
          id: 'D',
          textBm: 'Untuk menggantikan mata wang Rupee di pelabuhan Bombay',
          textZh: '用来取代孟买港口的卢比货币',
        },
      ],
      correctId: 'B',
      explanationBm:
        '**Teh** dari China mendapat permintaan amat tinggi di Eropah, tetapi China tidak memerlukan barangan Britain dan hanya mahukan **emas, perak, bijih timah serta lada hitam** dari Kepulauan Melayu.',
      explanationZh:
        '当时中国茶叶风靡欧洲，但清朝不缺英国工业品，只接受金、银、锡米与胡椒交换茶叶，故英国需在槟城设立货物集散中心。',
    },
    {
      id: '2.1_mcq_2',
      spCode: 'SP 7.2.1',
      questionBm:
        'Apakah faktor utama yang mendorong **Sultan Abdullah Mukarram Shah** menawarkan **Pulau Pinang** kepada SHTI pada tahun 1786?',
      questionZh: '促使吉打苏丹阿都拉于1786年提议让英国东印度公司（SHTI）进驻槟城的最主要原因是什么？',
      options: [
        {
          id: 'A',
          textBm: 'Mendapatkan bantuan ketenteraan SHTI bagi melindungi Kedah daripada ancaman **Siam**',
          textZh: '换取东印度公司的军事援助，以保护吉打免受暹罗（Siam）的入侵威胁',
        },
        {
          id: 'B',
          textBm: 'Meminjam modal bagi membiayai pembinaan Terusan Wan Muhammad Saman',
          textZh: '借贷资金以兴建旺莫哈末沙曼运河',
        },
        {
          id: 'C',
          textBm: 'Menyerahkan pentadbiran kutipan cukai negeri Kedah kepada Residen British',
          textZh: '将吉打全州征税行政权移交给英国参政司',
        },
        {
          id: 'D',
          textBm: 'Membantu Belanda menewaskan tentera Perancis dalam Perang Napoleon',
          textZh: '协助荷兰在拿破仑战争中击败法国军队',
        },
      ],
      correctId: 'A',
      explanationBm:
        '**Siam** menuntut Kedah menghantar semula bunga emas, wang dan tenaga manusia; bimbang akan keselamatan Kedah, **Sultan Abdullah** memohon **bantuan ketenteraan** SHTI dengan menawarkan Pulau Pinang.',
      explanationZh:
        '面对暹罗索讨金银花与人力的军事威胁（注：苏丹莫哈末吉瓦时期主要是武吉士威胁，苏丹阿都拉1786年时期主要是暹罗威胁），苏丹阿都拉遂向 SHTI 求援。',
    },
    {
      id: '2.1_mcq_3',
      spCode: 'SP 7.2.1',
      questionBm:
        'Apakah kesan **Perjanjian Persahabatan dan Perikatan** yang ditandatangani antara **George Leith** dengan **Sultan Dhiauddin** pada bulan Jun **1800**?',
      questionZh: '1800年6月乔治·利斯（George Leith）与吉打苏丹迪亚乌丁签署《友好与同盟条约》产生了什么结果？',
      options: [
        {
          id: 'A',
          textBm: 'British memulangkan semula Pulau Pinang kepada Kesultanan Kedah',
          textZh: '英国将槟城归还给吉打苏丹王朝',
        },
        {
          id: 'B',
          textBm: 'British menduduki **Seberang Perai** yang dinamakan **Province Wellesley**',
          textZh: '英国占领威省（Seberang Perai），并将其命名为威斯利省（Province Wellesley）',
        },
        {
          id: 'C',
          textBm: 'SHTI menghantar angkatan tentera laut menewaskan Siam di Bangkok',
          textZh: '东印度公司派海军舰队赴曼谷击败暹罗',
        },
        {
          id: 'D',
          textBm: 'Pulau Pinang diserahkan kepada Belanda sebagai pertukaran dengan Melaka',
          textZh: '槟城移交给荷兰以换取马六甲',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Melalui **Perjanjian 1800**, **George Leith** berjaya menduduki **Seberang Perai (Province Wellesley)** sebagai benteng pertahanan dan kawasan pertanian makanan bagi Pulau Pinang.',
      explanationZh:
        '1800年条约使英国进一步侵占对岸大陆的威省（改称 Province Wellesley），作为槟城的安全防线与粮食供应基地。',
    },
    {
      id: '2.1_mcq_4',
      spCode: 'SP 7.2.1',
      questionBm:
        'Mengapakah **Tengku Hussein (Tengku Long)** tidak ditabalkan sebagai Sultan Johor Riau apabila ayahandanya **Sultan Mahmud Shah III** mangkat pada tahun **1812**?',
      questionZh: '为什么1812年父王苏丹马末沙三世驾崩时，身为长子的东姑胡先（Tengku Long）未能继任柔佛廖内苏丹？',
      options: [
        {
          id: 'A',
          textBm: 'Baginda sedang melanjutkan pelajaran tinggi di London',
          textZh: '殿下当时正在伦敦深造留学',
        },
        {
          id: 'B',
          textBm: 'Baginda tidak hadir semasa pemakaman kerana berada di **Pahang** untuk berkahwin',
          textZh: '殿下当时远在彭亨（Pahang）完婚而未出席葬礼，按传统须立在场王子继位',
        },
        {
          id: 'C',
          textBm: 'Baginda telah dilantik oleh Belanda sebagai Gabenor di Betawi',
          textZh: '殿下已被荷兰委任为巴达维亚总督',
        },
        {
          id: 'D',
          textBm: 'Baginda menolak takhta kerana mahu menetap di Pulau Pinang',
          textZh: '殿下因想移居槟城而主动放弃王位',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Semasa pemakaman Sultan Mahmud Shah III pada tahun 1812, **Tengku Hussein** berada di **Pahang** kerana berkahwin; mengikut adat Melayu, bakal pengganti sultan perlu hadir semasa pemakaman, lalu **Tengku Abdul Rahman** ditabalkan dengan sokongan Bugis dan Belanda.',
      explanationZh:
        '马来王室习俗规定新君必须在先王下葬前即位；因东姑胡先当时身在彭亨完婚未赶回，武吉士大臣遂拥立幼子东姑阿都拉曼登基。',
    },
    {
      id: '2.1_mcq_5',
      spCode: 'SP 7.2.1',
      questionBm:
        'Perjanjian manakah yang menyebabkan **Sultan Hussein** dan **Temenggung Abdul Rahman** kehilangan kedaulatan sepenuhnya apabila **Singapura** diserahkan kepada SHTI untuk **selama-lamanya**?',
      questionZh: '哪一份条约迫使苏丹胡先与天猛公阿都拉曼彻底丧失主权，将新加坡永久割让给英国东印度公司？',
      options: [
        {
          id: 'A',
          textBm: '**Surat Kew (1795)**',
          textZh: '《1795年邱园信函》',
        },
        {
          id: 'B',
          textBm: '**Perjanjian 30 Januari 1819**',
          textZh: '《1819年1月30日初步条约》',
        },
        {
          id: 'C',
          textBm: '**Perjanjian 6 Februari 1819**',
          textZh: '《1819年2月6日条约》',
        },
        {
          id: 'D',
          textBm: '**Perjanjian 2 Ogos 1824 (Perjanjian Crawfurd)**',
          textZh: '《1824年8月2日条约》（克劳福条约）',
        },
      ],
      correctId: 'D',
      explanationBm:
        'Perjanjian 6 Februari 1819 hanya membenarkan British membina petempatan; hanya melalui **Perjanjian 2 Ogos 1824** oleh Residen **John Crawfurd**, Singapura diserahkan kepada SHTI untuk **selama-lamanya**.',
      explanationZh:
        '易混必考题：1819年2月6日莱佛士条约仅准许英国设立贸易据点；真正把新加坡主权「永久割让（selama-lamanya）」给英国的是1824年8月2日克劳福条约！',
    },
  ],
  strukturQuestion: {
    id: '2.1_struktur_1',
    spCode: 'SP 7.2.1 / K7.2.5',
    stimulusBm:
      'Antara tahun 1786 hingga 1824, pihak British telah berjaya menduduki tiga buah pelabuhan strategik di Selat Melaka iaitu **Pulau Pinang**, **Singapura** dan **Melaka**.',
    stimulusZh:
      '在1786年至1824年间，英国先后成功占领马六甲海峡沿岸三大战略港口：槟城、新加坡与马六甲。',
    parts: [
      {
        partLabel: '(a)',
        marks: 3,
        questionBm:
          'Nyatakan **tiga** kepentingan **Pulau Pinang** yang menarik minat Syarikat Hindia Timur Inggeris (SHTI) pada abad ke-18.',
        questionZh: '写出18世纪槟城吸引英国东印度公司（SHTI）的三项重要战略价值。[3分]',
        expectedKeywordsBm: [
          'Pusat pengumpulan barang',
          'Pelabuhan persinggahan',
          'Pangkalan tentera',
        ],
        modelAnswerBm:
          'Tiga kepentingan Pulau Pinang kepada SHTI ialah sebagai **pusat pengumpulan barang** (untuk ditukar dengan teh China), **pelabuhan persinggahan** (menunggu peralihan angin monsun dan membaiki kapal), serta **pangkalan tentera** (mempertahankan petempatan British di India daripada serangan Perancis).',
        modelAnswerZh:
          '槟城对 SHTI 的三项战略价值为：（1）货物集散中心（搜集锡米香料以交换中国茶叶）；（2）中途停靠港（等待季候风转换、修船及补给）；（3）军事基地（保护英属印度据点免遭法国袭击）。',
      },
      {
        partLabel: '(b)',
        marks: 3,
        questionBm:
          'Jelaskan bagaimana **Stamford Raffles** menggunakan strategi **manipulasi** untuk menduduki **Singapura** pada tahun 1819.',
        questionZh: '说明斯坦福·莱佛士在1819年如何运用「操纵（manipulasi）」策略占领新加坡。[3分]',
        expectedKeywordsBm: [
          'isu pewarisan takhta',
          'Tengku Hussein',
          'Sultan Hussein',
          'Temenggung Abdul Rahman',
          'Perjanjian 6 Februari 1819',
        ],
        modelAnswerBm:
          'Stamford Raffles memanipulasi **isu pewarisan takhta Kesultanan Johor Riau** selepas kemangkatan Sultan Mahmud Shah III. Beliau memujuk **Temenggung Abdul Rahman** menjemput putera sulung iaitu **Tengku Hussein** ke Singapura dan mengiktirafnya sebagai **Sultan Johor** (Sultan Hussein), lalu menandatangani **Perjanjian 6 Februari 1819** yang mengesahkan petempatan British di Singapura.',
        modelAnswerZh:
          '莱佛士操纵柔佛廖内王朝的王位继承危机：他拉拢天猛公阿都拉曼从廖内接来长子东姑胡先，册封其为柔佛苏丹（苏丹胡先），并签署《1819年2月6日条约》，使英国在新加坡的据点合法化。',
      },
      {
        partLabel: '(c)',
        marks: 4,
        questionBm:
          'Berdasarkan peristiwa kehilangan Pulau Pinang dan Singapura, apakah iktibar yang wajar diambil oleh pemimpin negara ketika membuat perjanjian dengan kuasa luar?',
        questionZh: '借鉴槟城与新加坡丧失主权的历史教训，国家领导人在与外国签署协议时应秉持哪些谨慎原则？（KBAT 高思维题）[4分]',
        expectedKeywordsBm: [
          'berhati-hati',
          'perjanjian bertulis yang sah',
          'meneliti syarat perjanjian',
          'mempertahankan kedaulatan',
        ],
        modelAnswerBm:
          'Pemimpin hendaklah sentiasa **berhati-hati dan berwaspada** terhadap janji manis pihak luar (F). Setiap rundingan mestilah dimeterai melalui **perjanjian bertulis yang rasmi dan jelas** serta **meneliti setiap syarat perjanjian** bersama pakar undang-undang (H), contohnya dalam perjanjian perdagangan antarabangsa atau pelaburan maritim (C), agar **kedaulatan dan hak negara** tidak tergadai kepada kuasa asing (I).',
        modelAnswerZh:
          '国家领导人必须时刻对外部势力的口头承诺保持高度警惕与审慎（F）。任何合作都必须签署具备法律效力的正式书面条约，并偕同法律专家严密审查每一项条款（H），例如在签署国际贸易或港口投资协定时坚守底线（C），确保国家主权与核心利益绝不受损（I）。',
      },
    ],
  },
};

const SUBTOPIC_2_2: OfficialSubtopic = {
  subtopicCode: '2.2',
  babNumber: 2,
  babTitleBm: 'Pentadbiran Negeri-negeri Selat',
  babTitleZh: '海峡殖民地的行政管理',
  skCode: 'SK 7.2',
  spCodes: ['SP 7.2.2', 'K7.2.6'],
  titleBm: 'Perjanjian London 1824 dan Kesannya Terhadap Alam Melayu',
  titleZh: '1824年伦敦条约及其对马来世界的深远影响',
  heroImages: [
    {
      imageKey: 'bab2_straits_settlements',
      captionBm:
        '**Perjanjian London 1824 (17 Mac 1824)** membahagikan Alam Melayu kepada dua lingkungan pengaruh Barat merentasi **Selat Melaka** dan **Selat Singapura** tanpa pengetahuan Raja-raja Melayu.',
      captionZh:
        '《1824年3月17日伦敦条约》在马来统治者毫不知情下，以马六甲海峡与新加坡海峡为界将马来世界一分为二。',
      hotspots: [
        {
          x: 48,
          y: 44,
          termBm: 'Sempadan Selat Melaka & Selat Singapura',
          meaningZh: '分界线：马六甲海峡与新加坡海峡',
          detailBm:
            'Utara garisan (**Tanah Melayu & Singapura**) menjadi lingkungan pengaruh **British**; selatan garisan (**Kepulauan Riau Lingga & Hindia Timur**) menjadi lingkungan pengaruh **Belanda**.',
          detailZh:
            '海峡以北（马来半岛与新加坡）划归英国势力范围；海峡以南（廖内林加群岛与东印度群岛）划归荷兰势力范围。',
        },
        {
          x: 34,
          y: 30,
          termBm: 'Melaka Diserahkan kepada British',
          meaningZh: '荷兰将马六甲移交英国',
          detailBm:
            'Belanda menyerahkan **Melaka** dan jajahan takluknya kepada British serta berjanji tidak membuka petempatan baharu di **Tanah Melayu**.',
          detailZh:
            '荷兰将马六甲及其属地移交英国，承认英占新加坡，并承诺绝不在马来半岛开辟新据点。',
        },
        {
          x: 22,
          y: 72,
          termBm: 'Bangkahulu Diserahkan kepada Belanda',
          meaningZh: '英国撤出苏门答腊并移交明古连',
          detailBm:
            'British berundur dari **Sumatera**, menyerahkan **Bangkahulu** kepada Belanda, dan tidak membuka petempatan di selatan Singapura.',
          detailZh:
            '英国撤出苏门答腊、将明古连移交荷兰，并承诺不在廖内林加群岛及新加坡以南岛屿设港。',
        },
        {
          x: 74,
          y: 66,
          termBm: 'Perpecahan Empayar Johor Riau',
          meaningZh: '柔佛廖内帝国永久分裂为三部分',
          detailBm:
            '**Johor & Singapura** di bawah pengaruh British, **Kepulauan Riau Lingga** di bawah pengaruh Belanda, dan **Pahang** bebas di bawah Bendahara Tun Ali (1853).',
          detailZh:
            '传承数百年的柔佛廖内帝国彻底瓦解：柔佛与新加坡归英系、廖内林加归荷系、彭亨于1853年自立。',
        },
      ],
    },
    {
      imageKey: 'bab2_singapura_raffles',
      captionBm:
        'Tindakan kuasa Barat memeterai **Perjanjian Inggeris-Belanda 1824** di London menamatkan keutuhan empayar warisan Kesultanan Melayu Melaka.',
      captionZh:
        '英荷列强在伦敦私下瓜分领土，终结了自马六甲王朝延续下来的柔佛廖内海洋帝国统一版图。',
    },
  ],
  sections: [
    {
      sectionCode: '2.2(a)',
      headingBm: 'Latar Belakang dan Syarat-syarat Perjanjian London 1824',
      headingZh: '1824年伦敦条约的签署背景与英荷双方条款',
      leadParagraphBm:
        'Persaingan perdagangan dan pertikaian sengit mengenai kedudukan **Singapura** akhirnya diselesaikan apabila **British** dan **Belanda** menandatangani **Perjanjian London 1824** (juga dikenali sebagai **Perjanjian Inggeris-Belanda 1824**) pada **17 Mac 1824** di London tanpa merujuk Raja-raja Melayu.',
      leadParagraphZh:
        '围绕东方贸易与新加坡归属的激烈争执，最终促使英荷两国于1824年3月17日在伦敦签署《1824年伦敦条约》（又称《英荷条约》），全程完全排除了马来统治者的参与。',
      diagramKey: 'diag_2_2_perjanjian_london',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Syarat terhadap British (1) & (2)**: British bersetuju **berundur dari Sumatera** dan menyerahkan pelabuhan **Bangkahulu (Bencoolen)** serta semua petempatan SHTI di Sumatera kepada **Belanda**.',
          zh: '对英国的条款（1）与（2）：英国同意撤出苏门答腊（Sumatera），并将明古连（Bangkahulu）及东印度公司在苏门答腊的所有据点移交给荷兰。',
        },
        {
          tag: 'FAKTA',
          bm: '**Syarat terhadap British (3)**: British berjanji **tidak akan membuka petempatan baharu** di **Kepulauan Riau Lingga** dan kepulauan lain di bahagian **selatan Singapura**, serta tidak membuat sebarang perjanjian dengan pemerintah tempatan di wilayah tersebut.',
          zh: '对英国的条款（3）：英国承诺不在廖内林加群岛（Kepulauan Riau Lingga）及新加坡以南的其他岛屿建立新据点，也不与当地统治者签署任何条约。',
        },
        {
          tag: 'FAKTA',
          bm: '**Syarat terhadap Belanda (1) & (2)**: Belanda secara rasmi **mengiktiraf petempatan British di Singapura** serta menyerahkan **Melaka** dan jajahan takluknya kepada **British**.',
          zh: '对荷兰的条款（1）与（2）：荷兰正式承认英国在新加坡的殖民据点，并将马六甲（Melaka）及其属地移交给英国。',
        },
        {
          tag: 'FAKTA',
          bm: '**Syarat terhadap Belanda (3)**: Belanda berjanji **tidak akan membuka petempatan baharu** atau membuat sebarang perjanjian di wilayah **Tanah Melayu**.',
          zh: '对荷兰的条款（3）：荷兰承诺不在马来半岛（Tanah Melayu）开辟任何新据点或签署条约。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Cermin simetri untuk mudah hafal syarat **17 Mac 1824**: **British serah Bangkahulu + keluar Sumatera + jangan kacau Riau Lingga** ↔ **Belanda serah Melaka + iktiraf Singapura + jangan kacau Tanah Melayu**!',
          zh: '对称镜像秒记法：英国交出明古连、退出苏门答腊、不碰廖内林加 ↔ 荷兰交出马六甲、承认英占新加坡、不碰马来半岛！',
        },
      ],
    },
    {
      sectionCode: '2.2(b)',
      headingBm: 'Kesan 1 dan Kesan 2: Pembahagian Alam Melayu serta Perpecahan Empayar Johor Riau',
      headingZh: '影响一与影响二：马来世界被瓜分及柔佛廖内帝国解体',
      leadParagraphBm:
        '**Perjanjian London 1824** meninggalkan kesan geopolitik yang amat mendalam kerana membelah dua kebudayaan serumpun Alam Melayu dan meruntuhkan kesatuan **Empayar Kesultanan Johor Riau**.',
      leadParagraphZh:
        '《1824年伦敦条约》带来了极其深远的地缘政治剧变，生生割裂了同宗同源的马来世界，并导致柔佛廖内帝国彻底解体。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Kesan 1 — Pembahagian Alam Melayu kepada Dua Lingkungan Pengaruh Barat**: **Selat Melaka** dan **Selat Singapura** dijadikan sempadan yang memisahkan lingkungan pengaruh **British** (Tanah Melayu dan Singapura) dengan lingkungan pengaruh **Belanda** (Hindia Timur / Indonesia).',
          zh: '影响一——马来世界被划分为两大西方势力范围：马六甲海峡与新加坡海峡沦为人为分界线，海峡以北归英国势力范围，海峡以南归荷兰势力范围。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Pembahagian oleh dua kuasa Barat yang mementingkan keuntungan sendiri tanpa kerelaan Raja-raja Melayu ini telah mewujudkan dua entiti politik berbeza yang akhirnya membentuk sempadan negara moden **Malaysia** dan **Indonesia**.',
          zh: '英荷列强罔顾本土统治者意愿的私相授受，将原本往来密切的海洋文化圈拆成两个独立政治实体，奠定了今日马来西亚与印度尼西亚的国界雏形。',
        },
        {
          tag: 'FAKTA',
          bm: '**Kesan 2 — Perpecahan Empayar Kesultanan Johor Riau**: Empayar Johor Riau yang merangkumi Johor, Pahang, Singapura dan Kepulauan Riau Lingga berpecah belah secara kekal kepada tiga bahagian.',
          zh: '影响二——柔佛廖内苏丹帝国分裂：原本统辖柔佛大陆、彭亨、新加坡与廖内林加群岛的庞大帝国永久分裂为三块。',
        },
        {
          tag: 'CONTOH',
          bm: '**(a) Singapura dan Johor di bawah pengaruh British**: Singapura menjadi tanah jajahan British sepenuhnya melalui Perjanjian 2 Ogos 1824; **Sultan Hussein** berpindah dari istana Kampung Gelam ke **Bandar Hilir, Melaka** sehingga mangkat pada tahun 1835, manakala Johor diperintah oleh keturunan Temenggung di bawah pengaruh British.',
          zh: '（a）新加坡与柔佛归入英国势力：新加坡彻底沦为英国殖民地；苏丹胡先被迫离开甘榜格南王宫迁居马六甲怡力并在1835年驾崩，柔佛大陆则由天猛公家族在英国影响下治理。',
        },
        {
          tag: 'CONTOH',
          bm: '**(b) Berakhirnya Kesultanan Riau Lingga di bawah Belanda**: Wilayah **Kepulauan Riau Lingga** diperintah oleh **Sultan Abdul Rahman** di bawah penguasaan **Belanda** sehinggalah institusi Kesultanan Riau Lingga dihapuskan oleh Belanda pada tahun **1911**.',
          zh: '（b）廖内林加苏丹国沦入荷兰控制：廖内林加群岛由苏丹阿都拉曼在荷兰操控下统治，直至1911年荷兰正式废除廖内林加苏丹制度。',
        },
        {
          tag: 'CONTOH',
          bm: '**(c) Pengisytiharan kedaulatan Pahang (1853)**: Perpecahan empayar menyebabkan **Bendahara Tun Ali** di **Pahang** membebaskan Pahang daripada Kesultanan Johor Riau dan mengisytiharkan Pahang sebagai negeri yang bebas serta berdaulat pada tahun **1853**.',
          zh: '（c）彭亨宣布独立自主（1853年）：随着宗主帝国瓦解，驻守彭亨的宰相敦阿里（Bendahara Tun Ali）脱离柔佛廖内王朝，于1853年正式宣布彭亨为独立主权州属。',
        },
      ],
    },
    {
      sectionCode: '2.2(c)',
      headingBm: 'Kesan 3: Selat Melaka di Bawah Penguasaan British',
      headingZh: '影响三：英国全面独霸马六甲海峡',
      leadParagraphBm:
        'Selain memecahbelahkan Alam Melayu dan Empayar Johor Riau, Perjanjian London 1824 mengukuhkan kedudukan maritim dan perdagangan **British** sebagai kuasa tunggal di sepanjang **Selat Melaka**.',
      leadParagraphZh:
        '除了瓜分马来世界与拆散柔佛廖内帝国，《1824年伦敦条约》还使英国成为马六甲海峡唯一的主宰强权。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Kesan 3 — Selat Melaka di bawah penguasaan British**: Pengunduran Belanda dari Semenanjung Tanah Melayu membolehkan perdagangan di **Selat Melaka** dikuasai sepenuhnya oleh pihak **British**.',
          zh: '影响三——马六甲海峡落入英国全面掌控：随着荷兰彻底撤出马来半岛，整条马六甲海峡国际黄金航道完全由英国独霸。',
        },
        {
          tag: 'HURAIAN',
          bm: 'British kini memiliki **tiga buah pelabuhan strategik** yang saling melengkapi di sepanjang Selat Melaka iaitu **Pulau Pinang** (utara), **Melaka** (tengah) dan **Singapura** (selatan).',
          zh: '英国由此坐拥马六甲海峡北、中、南三座连成一线的战略港口——槟城、马六甲与新加坡。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Ketiadaan saingan kuasa Barat lain memberikan ruang seluas-luasnya kepada British untuk menguasai hasil ekonomi dan kemudiannya meluaskan kuasa politik ke **Negeri-negeri Melayu**.',
          zh: '在没有其他欧洲列强竞争的情况下，英国得以放手垄断贸易，并为日后进一步吞并半岛内陆各马来州属铺平道路。',
        },
      ],
    },
  ],
  comparisonTables: [
    {
      titleBm: 'Syarat-syarat Perjanjian London 1824 dan Tiga Kesan Utamanya',
      titleZh: '《1824年伦敦条约》双方条款与三大历史影响总表',
      headers: [
        { bm: 'Komponen Perjanjian', zh: '条约核心部分' },
        { bm: 'Pihak **British**', zh: '英国方面（British）' },
        { bm: 'Pihak **Belanda**', zh: '荷兰方面（Belanda）' },
      ],
      rows: [
        [
          { bm: 'Penyerahan Wilayah', zh: '领土移交与撤出' },
          {
            bm: 'Berundur dari **Sumatera** dan menyerahkan **Bangkahulu** kepada Belanda',
            zh: '撤出苏门答腊，并将明古连（Bangkahulu）移交给荷兰',
          },
          {
            bm: 'Menyerahkan **Melaka** dan jajahan takluknya kepada British',
            zh: '将马六甲（Melaka）及其属地移交给英国',
          },
        ],
        [
          { bm: 'Kedudukan Singapura', zh: '新加坡地位' },
          {
            bm: 'Mengekalkan penguasaan penuh ke atas pelabuhan **Singapura**',
            zh: '保有对新加坡港口的完全统治权',
          },
          {
            bm: '**Mengiktiraf** petempatan British di **Singapura** dan menarik balik bantahan',
            zh: '正式承认英国占领新加坡并撤回抗议',
          },
        ],
        [
          { bm: 'Sempadan Larangan Peluasan', zh: '禁止扩张界限' },
          {
            bm: 'Tidak membuka petempatan baharu di **Kepulauan Riau Lingga** dan kepulauan di **selatan Singapura**',
            zh: '不在廖内林加群岛及新加坡以南岛屿开辟据点或签约',
          },
          {
            bm: 'Tidak membuka petempatan baharu di **Tanah Melayu**',
            zh: '不在马来半岛（Tanah Melayu）开辟据点或签约',
          },
        ],
        [
          { bm: 'Tiga Kesan Utama kepada Alam Melayu', zh: '对马来世界的三大影响' },
          {
            bm: '1. **Pembahagian Alam Melayu** kepada dua lingkungan pengaruh Barat\n2. **Perpecahan Empayar Johor Riau** (Johor/Singapura, Riau Lingga, Pahang 1853)\n3. **Selat Melaka** dikuasai sepenuhnya oleh British',
            zh: '1. 马来世界被一分为二（形成日后马印边界）\n2. 柔佛廖内帝国一分为三（柔新、廖内林加、1853彭亨自立）\n3. 英国凭借槟甲新三港独霸马六甲海峡',
          },
          {
            bm: 'Belanda mengukuhkan monopoli di **Hindia Timur (Indonesia)** dan menghapuskan Kesultanan Riau Lingga pada tahun **1911**',
            zh: '荷兰巩固对荷属东印度（印尼）的统治，并于1911年废除廖内林加苏丹国',
          },
        ],
      ],
    },
  ],
  dialogues: [
    {
      speakerBm: 'Wakil Kerajaan Britain (London, 17 Mac 1824)',
      roleBm: 'Perunding Perjanjian Inggeris-Belanda',
      roleZh: '1824年伦敦谈判英方代表',
      emoji: '📜',
      lineBm:
        'Kami bersetuju berundur dari **Sumatera**, menyerahkan **Bangkahulu** kepada Belanda dan tidak mengganggu **Kepulauan Riau Lingga** — asalkan Belanda mengiktiraf **Singapura** milik kami dan menyerahkan **Melaka**!',
      lineZh:
        '我们同意撤出苏门答腊、把明古连交给贵国并绝不染指廖内林加——条件是荷兰必须承认新加坡归英国，并把马六甲交给我们！',
    },
    {
      speakerBm: 'Sultan Abdul Rahman & Sultan Hussein',
      roleBm: 'Pemerintah Warisan Kesultanan Johor Riau',
      roleZh: '被迫分隔两地的柔佛廖内王室兄弟',
      emoji: '💔',
      lineBm:
        'Kuasa Barat melukis garisan sempadan di **Selat Melaka** dan **Selat Singapura** tanpa pengetahuan kami! Akibatnya **Empayar Kesultanan Johor Riau** berpecah — Riau Lingga jatuh di bawah Belanda, manakala Johor dan Singapura di bawah pengaruh British!',
      lineZh:
        '西方列强竟背着我们在马六甲海峡和新加坡海峡画下分界线！先祖创立的柔佛廖内帝国从此撕裂——廖内林加归荷兰管，柔佛与新加坡归英国管！',
    },
    {
      speakerBm: 'Bendahara Tun Ali (Pahang, 1853)',
      roleBm: 'Pemerintah Negeri Pahang',
      roleZh: '彭亨宰相敦阿里',
      emoji: '🛡️',
      lineBm:
        'Memandangkan Kesultanan Johor Riau telah berpecah belah akibat campur tangan British dan Belanda, hamba mengisytiharkan **Pahang** sebagai negeri yang **bebas dan berdaulat** pada tahun **1853**!',
      lineZh:
        '既然柔佛廖内苏丹国已在英荷瓜分下分崩离析，老夫于1853年正式宣告彭亨脱离旧帝国，成为独立自主的主权州属！',
    },
  ],
  memoryHackBm:
    'Formula **17 Mac 1824 = Tukar Baju "B-M" & 3P Kesan**: **British serah Bangkahulu ↔ Belanda serah Melaka (+ iktiraf Singapura)**. Tiga Kesan **3P**: **Pembahagian** Alam Melayu, **Perpecahan** Empayar Johor Riau (Johor/Singapura, Riau Lingga, Pahang 1853), **Penguasaan** penuh British di Selat Melaka!',
  memoryHackZh:
    '【1824伦敦条约秒记法】交换口诀「英交明古连（Bangkahulu）↔ 荷交马六甲（Melaka）+ 认新加坡」。三大影响「三裂变」：（1）马来世界裂成英北荷南两半；（2）柔佛廖内帝国裂成柔新、廖内林加、彭亨（1853自立）三块；（3）马六甲海峡由英国一家独霸！',
  subtopicMcqs: [
    {
      id: '2.2_mcq_1',
      spCode: 'SP 7.2.2',
      questionBm:
        'Mengikut syarat **Perjanjian London 1824 (17 Mac 1824)**, apakah wilayah yang diserahkan oleh pihak **British** kepada **Belanda**?',
      questionZh: '根据《1824年伦敦条约》的条款，英国将哪一个地区移交给荷兰？',
      options: [
        {
          id: 'A',
          textBm: '**Melaka**',
          textZh: '马六甲（Melaka）',
        },
        {
          id: 'B',
          textBm: '**Bangkahulu** di Sumatera',
          textZh: '苏门答腊的明古连（Bangkahulu）',
        },
        {
          id: 'C',
          textBm: '**Seberang Perai**',
          textZh: '威省（Seberang Perai）',
        },
        {
          id: 'D',
          textBm: '**Singapura**',
          textZh: '新加坡（Singapura）',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Dalam **Perjanjian London 1824**, **British** berundur dari Sumatera dan menyerahkan **Bangkahulu** kepada Belanda, manakala Belanda menyerahkan **Melaka** kepada British.',
      explanationZh:
        '牢记领土互换：英国把苏门答腊的明古连（Bangkahulu）交给荷兰；荷兰把马来半岛的马六甲（Melaka）交给英国。',
    },
    {
      id: '2.2_mcq_2',
      spCode: 'SP 7.2.2',
      questionBm:
        'Apakah perairan yang dijadikan garisan sempadan bagi memisahkan lingkungan pengaruh **British** dengan lingkungan pengaruh **Belanda** melalui Perjanjian London 1824?',
      questionZh: '《1824年伦敦条约》以哪一片海域作为划分英国势力范围与荷兰势力范围的分界线？',
      options: [
        {
          id: 'A',
          textBm: '**Selat Sunda** dan **Laut Jawa**',
          textZh: '巽他海峡与爪哇海',
        },
        {
          id: 'B',
          textBm: '**Selat Melaka** dan **Selat Singapura**',
          textZh: '马六甲海峡与新加坡海峡',
        },
        {
          id: 'C',
          textBm: '**Laut Sulu** dan **Laut Sulawesi**',
          textZh: '苏禄海与苏拉威西海',
        },
        {
          id: 'D',
          textBm: '**Teluk Siam** dan **Sungai Golok**',
          textZh: '暹罗湾与哥乐河',
        },
      ],
      correctId: 'B',
      explanationBm:
        '**Selat Melaka** dan **Selat Singapura** ditetapkan sebagai garisan pemisah antara lingkungan pengaruh British di utara dengan lingkungan pengaruh Belanda di selatan.',
      explanationZh:
        '课本明确指出：马六甲海峡（Selat Melaka）与新加坡海峡（Selat Singapura）成为英荷两大殖民势力范围的分界线。',
    },
    {
      id: '2.2_mcq_3',
      spCode: 'SP 7.2.2',
      questionBm:
        'Apakah kesan langsung **Perjanjian London 1824** terhadap keutuhan politik **Kesultanan Johor Riau**?',
      questionZh: '《1824年伦敦条约》对柔佛廖内苏丹国（Kesultanan Johor Riau）的政治完整造成了什么直接影响？',
      options: [
        {
          id: 'A',
          textBm: 'Empayar Kesultanan Johor Riau berpecah belah kepada Johor-Singapura, Kepulauan Riau Lingga dan Pahang',
          textZh: '柔佛廖内帝国永久分裂为柔新、廖内林加群岛及彭亨各自独立的部分',
        },
        {
          id: 'B',
          textBm: 'Pusat pemerintahan Kesultanan Johor Riau dipindahkan semula ke Kota Melaka',
          textZh: '柔佛廖内王朝首都重新迁回马六甲古城',
        },
        {
          id: 'C',
          textBm: 'Kesultanan Johor Riau berjaya menakluki seluruh pulau Sumatera daripada Belanda',
          textZh: '柔佛廖内王朝成功从荷兰手中夺回整个苏门答腊岛',
        },
        {
          id: 'D',
          textBm: 'Sultan Abdul Rahman ditabalkan menjadi Gabenor Negeri-negeri Selat',
          textZh: '苏丹阿都拉曼受封为海峡殖民地总督',
        },
      ],
      correctId: 'A',
      explanationBm:
        '**Empayar Kesultanan Johor Riau** berpecah belah apabila Singapura dan Tanah Besar Johor berada di bawah pengaruh British, **Kepulauan Riau Lingga** berada di bawah pengaruh Belanda, dan **Pahang** membebaskan diri di bawah Bendahara Tun Ali (1853).',
      explanationZh:
        '英荷划界直接把横跨海峡两岸的柔佛廖内帝国拦腰斩断，造成柔佛与新加坡、廖内林加群岛及彭亨三地分家。',
    },
    {
      id: '2.2_mcq_4',
      spCode: 'SP 7.2.2',
      questionBm:
        'Siapakah pembesar yang mengisytiharkan **Pahang** sebagai negeri yang bebas dan berdaulat pada tahun **1853** ekoran perpecahan Kesultanan Johor Riau?',
      questionZh: '在柔佛廖内王朝分裂后，哪一位大臣于1853年正式宣布彭亨为独立自主的主权州属？',
      options: [
        {
          id: 'A',
          textBm: '**Temenggung Abdul Rahman**',
          textZh: '天猛公阿都拉曼',
        },
        {
          id: 'B',
          textBm: '**Bendahara Tun Ali**',
          textZh: '宰相敦阿里（Bendahara Tun Ali）',
        },
        {
          id: 'C',
          textBm: '**Dato\' Maharaja Lela**',
          textZh: '拿督马哈拉惹里拉',
        },
        {
          id: 'D',
          textBm: '**Laksamana Tun Abdul Jamil**',
          textZh: '海军统帅敦阿都贾米尔',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Pada tahun **1853**, **Bendahara Tun Ali** mengisytiharkan **Pahang** sebagai negeri yang bebas dan berdaulat selepas menyaksikan perpecahan Kesultanan Johor Riau.',
      explanationZh:
        '彭亨原本由柔佛廖内帝国的宰相（Bendahara）家族世袭管辖；1853年宰相敦阿里（Bendahara Tun Ali）正式宣布彭亨独立自主。',
    },
    {
      id: '2.2_mcq_5',
      spCode: 'K7.2.6',
      questionBm:
        'Mengapakah pemeteraian **Perjanjian London 1824** dianggap mencabuli kedaulatan negeri-negeri Melayu?',
      questionZh: '为什么《1824年伦敦条约》的签署被视为公然践踏马来各州的主权？',
      options: [
        {
          id: 'A',
          textBm: 'Ditandatangani dalam bahasa Inggeris dan bahasa Belanda sahaja',
          textZh: '仅以英文与荷兰文两种文字书写',
        },
        {
          id: 'B',
          textBm: 'Dibuat oleh dua kuasa Barat bagi membahagikan wilayah Alam Melayu **tanpa pengetahuan dan persetujuan Raja-raja Melayu**',
          textZh: '由两个西方列强在马来统治者毫不知情且未经同意的情况下擅自瓜分本土领土',
        },
        {
          id: 'C',
          textBm: 'Menghapuskan penggunaan mata wang emas di pelabuhan Eropah',
          textZh: '废除了欧洲港口的金币流通',
        },
        {
          id: 'D',
          textBm: 'Memaksa semua pedagang Cina berpindah keluar dari Melaka',
          textZh: '强迫所有华商迁出马六甲',
        },
      ],
      correctId: 'B',
      explanationBm:
        'British dan Belanda membahagikan wilayah kedaulatan Alam Melayu demi kepentingan ekonomi dan politik mereka sendiri **tanpa merujuk atau mendapat persetujuan Raja-raja Melayu**.',
      explanationZh:
        '英荷在伦敦私相授受，完全无视当地合法主权统治者的知情权与同意权，凸显殖民主义的霸道本质。',
    },
  ],
  strukturQuestion: {
    id: '2.2_struktur_1',
    spCode: 'SP 7.2.2 / K7.2.6',
    stimulusBm:
      'Pada **17 Mac 1824**, **Perjanjian London 1824 (Perjanjian Inggeris-Belanda)** telah ditandatangani bagi menamatkan persaingan antara British dengan Belanda di Alam Melayu.',
    stimulusZh:
      '1824年3月17日，英荷签署《1824年伦敦条约（英荷条约）》以解决两国在马来世界的殖民纷争。',
    parts: [
      {
        partLabel: '(a)',
        marks: 3,
        questionBm:
          'Nyatakan **tiga** syarat Perjanjian London 1824 yang perlu dipatuhi oleh pihak **Belanda**.',
        questionZh: '写出《1824年伦敦条约》中荷兰（Belanda）必须遵守的三项条款。[3分]',
        expectedKeywordsBm: [
          'mengiktiraf petempatan British di Singapura',
          'menyerahkan Melaka',
          'tidak membuka petempatan baharu di Tanah Melayu',
        ],
        modelAnswerBm:
          'Tiga syarat terhadap Belanda ialah:\n(i) Belanda **mengiktiraf petempatan British di Singapura**.\n(ii) Belanda **menyerahkan Melaka** dan jajahan takluknya kepada British.\n(iii) Belanda berjanji **tidak akan membuka petempatan baharu di Tanah Melayu**.',
        modelAnswerZh:
          '荷兰须遵守的三项条款为：（i）正式承认英国在新加坡的据点；（ii）将马六甲及其属地移交给英国；（iii）承诺不在马来半岛开辟新据点。',
      },
      {
        partLabel: '(b)',
        marks: 3,
        questionBm:
          'Jelaskan kesan Perjanjian London 1824 terhadap **Empayar Kesultanan Johor Riau** dan penguasaan perdagangan di **Selat Melaka**.',
        questionZh: '说明《1824年伦敦条约》对「柔佛廖内帝国」以及「马六甲海峡贸易控制权」造成的影响。[3分]',
        expectedKeywordsBm: [
          'berpecah belah',
          'Singapura',
          'Kepulauan Riau Lingga',
          'Pahang',
          'Selat Melaka dikuasai British',
        ],
        modelAnswerBm:
          '**Empayar Kesultanan Johor Riau berpecah belah** apabila Johor dan **Singapura** dikuasai British, **Kepulauan Riau Lingga** dikuasai Belanda, dan **Pahang** mengisytiharkan kedaulatan bebas pada tahun 1853. Selain itu, laluan perdagangan **Selat Melaka dikuasai sepenuhnya oleh British** selepas pengunduran Belanda.',
        modelAnswerZh:
          '柔佛廖内帝国彻底分裂：柔佛与新加坡受英国控制，廖内林加群岛受荷兰控制，彭亨则于1853年宣布独立。此外，随着荷兰撤离半岛，马六甲海峡贸易完全由英国独霸。',
      },
      {
        partLabel: '(c)',
        marks: 4,
        questionBm:
          'Perjanjian London 1824 ditandatangani tanpa penglibatan pemerintah tempatan. Apakah kepentingan mempertahankan **kedaulatan sempadan negara** kita pada masa kini?',
        questionZh: '当年《伦敦条约》在排除本土统治者的情况下瓜分了国土。试论述今日我们坚决捍卫「国家疆界主权」的重要性。（KBAT 高思维题）[4分]',
        expectedKeywordsBm: [
          'keselamatan rakyat',
          'mencengah pencerobohan',
          'sumber ekonomi maritim',
          'maruah negara',
        ],
        modelAnswerBm:
          'Mempertahankan kedaulatan sempadan negara amat penting bagi menjamin **keselamatan rakyat** dan mengelakkan **pencerobohan kuasa asing** atau anasir jenayah rentas sempadan (F/H). Sebagai contoh, kawalan ketat perairan di Selat Melaka dan Laut China Selatan melindungi **sumber ekonomi maritim** seperti petroleum dan perikanan negara (C). Kesannya, **maruah dan kemerdekaan negara** akan terus dihormati di persada antarabangsa (I).',
        modelAnswerZh:
          '捍卫国家疆界主权对于保障人民安全、防止外国势力入侵及打击跨国犯罪至关重要（F/H）。例如严密巡逻马六甲海峡与南中国海海域，能有效保护我国的海洋石油与渔业资源（C）。如此一来，国家的尊严、完整与独立才能在国际舞台上受人敬重（I）。',
      },
    ],
  },
};

const SUBTOPIC_2_3: OfficialSubtopic = {
  subtopicCode: '2.3',
  babNumber: 2,
  babTitleBm: 'Pentadbiran Negeri-negeri Selat',
  babTitleZh: '海峡殖民地的行政管理',
  skCode: 'SK 7.2',
  spCodes: ['SP 7.2.3', 'K7.2.7'],
  titleBm: 'Pembentukan Negeri-negeri Selat (NNS)',
  titleZh: '海峡殖民地（NNS）的成立及其与马来各州的经济关系',
  heroImages: [
    {
      imageKey: 'bab2_straits_settlements',
      captionBm:
        'Penggabungan **Pulau Pinang**, **Singapura** dan **Melaka** pada tahun **1826** membentuk **Negeri-negeri Selat (NNS)** sebagai pelabuhan bebas dan pusat perdagangan utama British.',
      captionZh:
        '1826年英国将槟城、新加坡与马六甲合并为海峡殖民地（NNS），打造免税自由港与远东贸易枢纽。',
      hotspots: [
        {
          x: 24,
          y: 28,
          termBm: 'Pulau Pinang (Presidensi Keempat 1805)',
          meaningZh: '槟城：1805年曾升格为印度第四管辖区',
          detailBm:
            'Ditadbir oleh Pesuruhjaya Francis Light sebelum dinaikkan taraf menjadi **Presidensi keempat** pada tahun **1805** dengan **Philip Dundas** sebagai Gabenor pertama.',
          detailZh:
            '最初由专员莱特管辖，1805年升格为英属印度第四管辖区（Presidensi keempat），由菲利普·邓达斯任首任总督。',
        },
        {
          x: 48,
          y: 52,
          termBm: 'Melaka (Residen Konsular & Sistem Kapitan)',
          meaningZh: '马六甲：参政领事官与甲必丹制度',
          detailBm:
            'Selepas 1824 ditadbir oleh **Residen Konsular**; **Sistem Kapitan** diteruskan bagi mengekalkan keharmonian kaum.',
          detailZh:
            '1824年英接管后由参政领事官（Residen Konsular）治理，并沿用甲必丹（Kapitan）制度管理各族社区。',
        },
        {
          x: 74,
          y: 72,
          termBm: 'Singapura (Pelabuhan Bebas Entrepot)',
          meaningZh: '新加坡：驻扎官治理的繁荣免税自由港',
          detailBm:
            'Ditadbir oleh **Residen** (**William Farquhar** kemudian **John Crawfurd**) dan berkembang pesat sebagai **pelabuhan bebas** utama di Alam Melayu.',
          detailZh:
            '先后由驻扎官法夸尔与克劳福治理，凭借免税自由港（pelabuhan bebas）优势迅速崛起为区域商贸龙头。',
        },
        {
          x: 62,
          y: 36,
          termBm: 'Hubungan Ekonomi NNS ↔ Negeri-negeri Melayu',
          meaningZh: '海峡殖民地与马来各州唇齿相依的经济纽带',
          detailBm:
            '**NNS** melabur modal dan memerlukan **hasil bumi** Negeri-negeri Melayu; **NNM** pula memerlukan pelabuhan NNS untuk memasarkan hasil.',
          detailZh:
            '海峡殖民地向马来各州投入巨额锡矿资本并收购原料，而马来各州则依赖海峡殖民地港口出口矿产。',
        },
      ],
    },
    {
      imageKey: 'bab2_pulau_pinang_light',
      captionBm:
        'Pembentukan **Negeri-negeri Selat pada tahun 1826** bertujuan **menjimatkan perbelanjaan** dan **menyeragamkan pentadbiran** tiga pelabuhan British.',
      captionZh:
        '1826年合并成立海峡殖民地，核心目的在于削减高昂行政开销并统一三大港口的管理与法律。',
    },
  ],
  sections: [
    {
      sectionCode: '2.3(a)',
      headingBm: 'Latar Belakang Pulau Pinang, Singapura dan Melaka Sebelum Pembentukan NNS',
      headingZh: '1826年合并前槟城、新加坡与马六甲各自的行政背景',
      leadParagraphBm:
        'Sebelum digabungkan pada tahun **1826**, petempatan British di **Pulau Pinang**, **Singapura** dan **Melaka** mempunyai struktur pentadbiran tersendiri yang berasingan.',
      leadParagraphZh:
        '在1826年正式合并之前，槟城、新加坡与马六甲三个英属据点各自为政，实行截然不同的行政架构。',
      bullets: [
        {
          tag: 'CONTOH',
          bm: '**Pulau Pinang (1786–1826)**: Pada peringkat awal ditadbir oleh **Francis Light** sebagai **Pesuruhjaya**; pada tahun **1805**, Pulau Pinang dinaikkan taraf menjadi **Presidensi keempat** selepas **Benggala**, **Madras** dan **Bombay** di India serta diketuai oleh seorang **Gabenor** pertama iaitu **Philip Dundas**.',
          zh: '槟城（1786–1826）：初期由弗朗西斯·莱特以专员（Pesuruhjaya）身份管辖；1805年升格为继孟加拉、马德拉斯与孟买之后的英属印度「第四管辖区（Presidensi keempat）」，委任菲利普·邓达斯（Philip Dundas）为首任总督。',
        },
        {
          tag: 'CONTOH',
          bm: '**Singapura (1819–1826)**: Ditadbir oleh seorang **Residen** (bermula dengan **William Farquhar** dan digantikan oleh **John Crawfurd**) yang bertanggungjawab kepada **Leftenan Gabenor British di Bangkahulu** (**Stamford Raffles**) sehingga tahun 1823; Singapura diisytiharkan sebagai **pelabuhan bebas** yang berjaya memajukan perdagangan dengan pesat.',
          zh: '新加坡（1819–1826）：由驻扎官（Residen，先后为法夸尔与克劳福）负责治理，早期隶属驻明古连副总督莱佛士管辖；新加坡被宣布为免税自由港（pelabuhan bebas），迅速吸引各国商船云集。',
        },
        {
          tag: 'CONTOH',
          bm: '**Melaka (1824–1826)**: Selepas diambil alih daripada Belanda melalui Perjanjian London 1824, Melaka ditadbir oleh seorang **Residen Konsular**; sistem **Kapitan** diteruskan bagi mewujudkan keamanan dan keharmonian dalam kalangan masyarakat berbilang kaum di bawah ketua suku kaum masing-masing.',
          zh: '马六甲（1824–1826）：1824年自荷兰接管后由参政领事官（Residen Konsular）管理；英国继续沿用荷兰时期的甲必丹制度（Sistem Kapitan），委任各族侨领维护社区和谐与治安。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Pentadbiran secara berasingan ini terutamanya status Presidensi di Pulau Pinang telah menelan kos gaji pegawai yang amat tinggi sehingga membebankan kewangan **SHTI**.',
          zh: '三地各自维持独立官僚体系（尤其是槟城第四管辖区庞大的高薪官员编制），造成财政开支沉重，令东印度公司不堪重负。',
        },
      ],
    },
    {
      sectionCode: '2.3(b)',
      headingBm: 'Pembentukan Negeri-negeri Selat (1826) dan Kepentingannya kepada British',
      headingZh: '1826年海峡殖民地（NNS）的成立与五大战略利益',
      leadParagraphBm:
        'Pada tahun **1826**, Pulau Pinang, Singapura dan Melaka digabungkan menjadi satu unit pentadbiran tunggal yang dinamakan **Negeri-negeri Selat (NNS)** (**Straits Settlements**).',
      leadParagraphZh:
        '1826年，英国正式将槟城、新加坡与马六甲合并为一个统一的行政单位，称为海峡殖民地（Negeri-negeri Selat, 简称 NNS）。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**(1) Menjimatkan perbelanjaan** dan **(2) Menyeragamkan pentadbiran**: Tujuan utama pembentukan NNS pada tahun 1826 ialah mengurangkan kos pengurusan pentadbiran SHTI serta menyeragamkan sistem pentadbiran dan undang-undang di ketiga-tiga pelabuhan.',
          zh: '（1）节省行政开销与（2）统一行政管理：1826年合并成立 NNS 的两大首要行政目标，就是裁减重叠冗员以节省开支，并统一三港的行政与司法制度。',
        },
        {
          tag: 'HURAIAN',
          bm: '**(3) Menguasai keseluruhan Selat Melaka**: Melalui gabungan tiga pangkalan strategik dari utara ke selatan, British dapat mengawal laluan utama perdagangan Timur–Barat sepenuhnya.',
          zh: '（3）全面控制马六甲海峡：串联北、中、南三座据点，使英国牢牢掌控东西方海上贸易咽喉。',
        },
        {
          tag: 'HURAIAN',
          bm: '**(4) Taraf pelabuhan bebas dan pusat pengumpulan hasil**: Pelabuhan NNS yang mengamalkan dasar **pelabuhan bebas** berjaya menarik kedatangan pedagang tempatan dan kapal dagang luar serta menjadi **pusat pengumpulan hasil** dari Kepulauan Melayu (terutamanya **bijih timah**) untuk mengimbangi kuasa monopoli Belanda di Hindia Timur.',
          zh: '（4）免税自由港与物产集散中心：NNS 实行免征关税的自由港政策，成功吸引本土与外国商船汇聚，成为收购马来群岛锡米等特产的核心转口港，有效抗衡荷属东印度的贸易垄断。',
        },
        {
          tag: 'FAKTA',
          bm: '**(5) Pintu masuk buruh luar**: Negeri-negeri Selat turut berperanan sebagai pintu masuk utama kemasukan **buruh luar** (terutamanya dari China dan India) yang mempercepat pembangunan ekonomi British serta melahirkan **masyarakat berbilang kaum**.',
          zh: '（5）外籍劳工入境门户：海峡殖民地成为华工与印工进入马来亚的主要门户，加速了殖民地经济开发，并促成多元族群社会的形成。',
        },
      ],
    },
    {
      sectionCode: '2.3(c)',
      headingBm: 'Hubungan Negeri-negeri Selat dengan Negeri-negeri Melayu',
      headingZh: '海峡殖民地（NNS）与马来各州（NNM）相互依存的经济关系',
      leadParagraphBm:
        'Kemajuan perdagangan **Negeri-negeri Selat (NNS)** mewujudkan jalinan pergantungan ekonomi dua hala yang amat erat dengan **Negeri-negeri Melayu (NNM)** di Semenanjung Tanah Melayu.',
      leadParagraphZh:
        '海峡殖民地转口贸易的繁荣，促成了它与半岛内陆各马来州属（NNM）之间密不可分的双向经济依存关系。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**Kepentingan Negeri-negeri Melayu kepada NNS (1) — Bekalan hasil bumi**: Pelabuhan NNS memerlukan bekalan **hasil bumi** secara berterusan daripada Negeri-negeri Melayu terutamanya **bijih timah**, emas dan hasil hutan untuk diperdagangkan ke pasaran antarabangsa.',
          zh: '马来各州对 NNS 的重要性（1）——提供地下矿产与原料：NNS 本身缺乏腹地资源，必须依赖马来各州源源不断供应锡米、黄金与森林特产以维持转口贸易。',
        },
        {
          tag: 'HURAIAN',
          bm: '**Kepentingan Negeri-negeri Melayu kepada NNS (2) — Kawasan pelaburan modal**: Pedagang dan pemodal di **Negeri-negeri Selat** melaburkan **modal** yang besar untuk memajukan perusahaan **perlombongan bijih timah** di Negeri-negeri Melayu seperti di Perak, Selangor dan Sungai Ujong.',
          zh: '马来各州对 NNS 的重要性（2）——资本投资重镇：海峡殖民地的欧美与华裔富商向霹雳、雪兰莪与双溪芙蓉等马来州属投入巨额资金开发锡矿业。',
        },
        {
          tag: 'FAKTA',
          bm: '**Kepentingan NNS kepada Negeri-negeri Melayu — Pelabuhan pemasaran hasil**: Sebaliknya, **Negeri-negeri Melayu** memerlukan pelabuhan antarabangsa **Negeri-negeri Selat** yang efisien untuk **memasarkan hasil ekonomi** mereka ke pasaran dunia serta mengimport barangan keperluan.',
          zh: 'NNS 对马来各州的重要性——出口贸易门户：相对地，内陆马来各州需要借助海峡殖民地现代化的国际自由港，将本州生产的锡米与农林物产销往全球市场。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Fahami kaitan sebab-akibat menuju Bab 3: Oleh sebab pemodal NNS melabur berjuta-juta dolar dalam lombong bijih timah NNM, sebarang kekacauan di Perak atau Selangor akan merugikan pedagang NNS — lalu mereka mendesak British **campur tangan**!',
          zh: '衔接第三章的因果钥匙：正因为海峡殖民地商人在马来各州锡矿砸下重金投资，一旦霹雳或雪兰莪爆发内乱影响锡米出口，NNS 商会便强烈施压英国政府出兵干预！',
        },
      ],
    },
  ],
  comparisonTables: [
    {
      titleBm: 'Profil Tiga Negeri dalam Negeri-negeri Selat (Pulau Pinang, Singapura, Melaka)',
      titleZh: '海峡殖民地三州合并前概况与合并后功能总览表',
      headers: [
        { bm: 'Negeri dalam NNS', zh: '海峡殖民地成员' },
        { bm: 'Pentadbiran Sebelum 1826', zh: '1826年合并前行政制度' },
        { bm: 'Ciri Khas & Peranan dalam NNS (1826)', zh: '合并后特色与核心功能' },
      ],
      rows: [
        [
          { bm: '**Pulau Pinang**', zh: '槟城（含威省）' },
          {
            bm: 'Pesuruhjaya (1786); dinaikkan taraf menjadi **Presidensi keempat** di India pada tahun **1805** diketuai **Gabenor (Philip Dundas)**',
            zh: '1786年由专员治理；1805年升格为英属印度第四管辖区，由总督菲利普·邓达斯统辖',
          },
          {
            bm: 'Menjadi **pusat pentadbiran pertama NNS (1826–1832)** serta pintu dagangan utara Selat Melaka dan Perak/Kedah',
            zh: '担任海峡殖民地首个行政首都（1826–1832），辐射马六甲海峡北部及吉打、霹雳贸易',
          },
        ],
        [
          { bm: '**Singapura**', zh: '新加坡' },
          {
            bm: 'Ditadbir oleh **Residen** (**William Farquhar**, kemudian **John Crawfurd**) di bawah pengawasan Bangkahulu/India',
            zh: '由驻扎官（法夸尔、克劳福）管辖，早期向驻明古连副总督负责',
          },
          {
            bm: 'Pelabuhan bebas paling maju di selatan Selat Melaka; menjadi **pusat pentadbiran baharu NNS mulai tahun 1832**',
            zh: '最繁荣的免税自由港，扼守海峡南端；1832年起取代槟城成为 NNS 新首都',
          },
        ],
        [
          { bm: '**Melaka**', zh: '马六甲' },
          {
            bm: 'Ditadbir oleh **Residen Konsular** selepas Perjanjian London 1824; meneruskan **Sistem Kapitan**',
            zh: '1824年英接管后由参政领事官管理，保留甲必丹制度管理各族事务',
          },
          {
            bm: 'Pelabuhan pengumpulan hasil pertanian dan bijih timah dari pedalaman Negeri Sembilan dan Selangor',
            zh: '收集森美兰与雪兰莪内陆农产品及锡米的区域港口（因河口淤积地位次于新槟）',
          },
        ],
      ],
    },
  ],
  dialogues: [
    {
      speakerBm: 'Pengarah SHTI di Calcutta',
      roleBm: 'Pentadbir Kewangan Syarikat Hindia Timur Inggeris',
      roleZh: '驻印度加尔各答的东印度公司董事',
      emoji: '💼',
      lineBm:
        'Kos mentadbir Pulau Pinang sebagai **Presidensi keempat** sejak 1805 terlalu mahal! Pada tahun **1826**, kita gabungkan **Pulau Pinang, Singapura dan Melaka** menjadi **Negeri-negeri Selat** supaya dapat **menjimatkan perbelanjaan** dan **menyeragamkan pentadbiran**!',
      lineZh:
        '槟城自1805年升格为第四管辖区后行政开支太昂贵了！1826年我们把槟城、新加坡和马六甲合并为海峡殖民地（NNS），既省钱又能统一管理！',
    },
    {
      speakerBm: 'Saudagar Dewan Perniagaan NNS',
      roleBm: 'Pemodal & Pedagang Pelabuhan Bebas',
      roleZh: '海峡殖民地商会富商',
      emoji: '💰',
      lineBm:
        'Taraf **pelabuhan bebas** NNS menarik ribuan kapal dagang! Kami juga melaburkan **modal** besar dalam lombong **bijih timah** di **Negeri-negeri Melayu** dan mengumpulkan hasilnya untuk dieksport ke Eropah!',
      lineZh:
        'NNS 的免税自由港地位吸引了成千上万艘商船！我们还把巨额资金投进马来各州的锡矿，再通过槟城和新加坡把锡米远销欧洲！',
    },
    {
      speakerBm: 'Pembesar Negeri Melayu',
      roleBm: 'Pengeluar Bijih Timah di Semenanjung',
      roleZh: '马来州属锡矿产区大臣',
      emoji: '⛏️',
      lineBm:
        'Hubungan ekonomi kami saling memerlukan: **Negeri-negeri Selat** memerlukan hasil bumi kami, manakala **Negeri-negeri Melayu** pula memerlukan pelabuhan NNS untuk memasarkan bijih timah ke pasaran dunia!',
      lineZh:
        '我们的经济合作是双向互利的：海峡殖民地需要我们的锡米货源，而我们马来各州也需要借助 NNS 的国际大港把矿产卖向全世界！',
    },
  ],
  memoryHackBm:
    'Formula **NNS 1826 = "2J-2P-1B"**: **Jimat belanja**, **Jadikan pentadbiran seragam**, **Pelabuhan bebas** lawan monopoli Belanda, **Penguasaan Selat Melaka**, dan **Buruh luar masuk**! Hubungan NNS ↔ NNM: **NNS beri Modal & Pelabuhan; NNM beri Hasil Bumi (Bijih Timah)**!',
  memoryHackZh:
    '【1826海峡殖民地成立五字诀】「省（省开支）、统（统一行政）、控（控马六甲海峡）、免（免税自由港抗荷）、劳（引进外劳门户）」！NNS 与马来各州关系：「NNS 出资金与港口 ↔ NNM 出锡米与物产」！',
  subtopicMcqs: [
    {
      id: '2.3_mcq_1',
      spCode: 'SP 7.2.3',
      questionBm:
        'Pada tahun **1805**, petempatan British manakah yang telah dinaikkan taraf menjadi **Presidensi keempat** selepas Benggala, Madras dan Bombay di India?',
      questionZh: '1805年，哪一个英国据点被升格为继印度孟加拉、马德拉斯和孟买之后的「第四管辖区（Presidensi keempat）」？',
      options: [
        {
          id: 'A',
          textBm: '**Bangkahulu**',
          textZh: '明古连（Bangkahulu）',
        },
        {
          id: 'B',
          textBm: '**Pulau Pinang**',
          textZh: '槟城（Pulau Pinang）',
        },
        {
          id: 'C',
          textBm: '**Singapura**',
          textZh: '新加坡（Singapura）',
        },
        {
          id: 'D',
          textBm: '**Melaka**',
          textZh: '马六甲（Melaka）',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Pada tahun **1805**, **Pulau Pinang** dinaikkan taraf menjadi **Presidensi keempat** kerajaan SHTI di India dengan **Philip Dundas** dilantik sebagai Gabenor pertama.',
      explanationZh:
        '1805年时新加坡（1819）与英属马六甲（1824）尚未归属英国，唯有槟城被升格为印度第四管辖区（Presidensi keempat）。',
    },
    {
      id: '2.3_mcq_2',
      spCode: 'SP 7.2.3',
      questionBm:
        'Apakah **dua** tujuan pentadbiran utama British menggabungkan Pulau Pinang, Singapura dan Melaka menjadi **Negeri-negeri Selat (NNS)** pada tahun **1826**?',
      questionZh: '1826年英国将槟城、新加坡与马六甲合并为海峡殖民地（NNS）的两项主要行政目的是什么？',
      options: [
        {
          id: 'A',
          textBm: 'Menyerahkan kuasa kepada Raja-raja Melayu dan menghapuskan jawatan Gabenor',
          textZh: '将权力交还马来统治者并废除总督职位',
        },
        {
          id: 'B',
          textBm: '**Menjimatkan perbelanjaan** dan **menyeragamkan pentadbiran**',
          textZh: '节省行政开销（menjimatkan perbelanjaan）与统一行政管理（menyeragamkan pentadbiran）',
        },
        {
          id: 'C',
          textBm: 'Mengenakan cukai pelabuhan yang tinggi dan menghalang kemasukan kapal asing',
          textZh: '征收高额港口税并阻止外国商船进入',
        },
        {
          id: 'D',
          textBm: 'Menjadikan Melaka sebagai pangkalan utama tentera laut Perancis',
          textZh: '将马六甲建设成法国海军主要基地',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Penggabungan tiga petempatan menjadi **NNS pada tahun 1826** bertujuan **menjimatkan perbelanjaan** pengurusan SHTI dan **menyeragamkan pentadbiran**.',
      explanationZh:
        '1826年成立海峡殖民地最经典的两大必背答案就是：menjimatkan perbelanjaan（节省开支）与 menyeragamkan pentadbiran（统一行政）。',
    },
    {
      id: '2.3_mcq_3',
      spCode: 'SP 7.2.3',
      questionBm:
        'Selepas British mengambil alih **Melaka** pada tahun 1824, institusi tradisional manakah yang diteruskan bagi mengekalkan keharmonian dalam kalangan masyarakat berbilang kaum?',
      questionZh: '1824年英国接管马六甲后，继续沿用哪一项传统制度来维持多元族群社会的和谐与秩序？',
      options: [
        {
          id: 'A',
          textBm: '**Sistem Kapitan**',
          textZh: '甲必丹制度（Sistem Kapitan）',
        },
        {
          id: 'B',
          textBm: '**Sistem Ketua Bebas**',
          textZh: '独立首领制度（Sistem Ketua Bebas）',
        },
        {
          id: 'C',
          textBm: '**Sistem Residen Jeneral**',
          textZh: '总参政司制度（Sistem Residen Jeneral）',
        },
        {
          id: 'D',
          textBm: '**Majlis Persekutuan**',
          textZh: '联邦议会制度（Majlis Persekutuan）',
        },
      ],
      correctId: 'A',
      explanationBm:
        'Di **Melaka**, British meneruskan **Sistem Kapitan** (ketua suku kaum) bagi memastikan keamanan dan keharmonian masyarakat berbilang kaum.',
      explanationZh:
        '英国在马六甲保留了自葡荷时期行之有效的甲必丹制度（Sistem Kapitan），由各族侨领调解族群内部事务。',
    },
    {
      id: '2.3_mcq_4',
      spCode: 'SP 7.2.3',
      questionBm:
        'Apakah peranan penting pelabuhan **Negeri-negeri Selat** kepada ekonomi **Negeri-negeri Melayu** pada abad ke-19?',
      questionZh: '19世纪海峡殖民地（NNS）的港口对马来各州（NNM）的经济发挥了什么重要作用？',
      options: [
        {
          id: 'A',
          textBm: 'Menjadi saluran pelabuhan utama untuk **memasarkan hasil bumi** Negeri-negeri Melayu dan melabur **modal** perlombongan',
          textZh: '成为销售马来各州矿产的主要出口港，并提供锡矿开发资本',
        },
        {
          id: 'B',
          textBm: 'Membekalkan bunga emas kepada Negeri-negeri Melayu untuk dihantar ke Siam',
          textZh: '向马来各州提供进贡暹罗所需的金银花',
        },
        {
          id: 'C',
          textBm: 'Menyekat semua eksport bijih timah daripada dijual ke pasaran Eropah',
          textZh: '封锁所有锡米出口，禁止销往欧洲市场',
        },
        {
          id: 'D',
          textBm: 'Menggantikan sistem pemerintahan beraja di semua Negeri-negeri Melayu pada tahun 1826',
          textZh: '在1826年废除所有马来州属的君主统治制度',
        },
      ],
      correctId: 'A',
      explanationBm:
        '**Negeri-negeri Melayu** memerlukan pelabuhan bebas **NNS** untuk memasarkan hasil bumi seperti bijih timah, manakala pedagang NNS pula melaburkan **modal** memajukan perlombongan di NNM.',
      explanationZh:
        'NNS 与 NNM 互利共生：NNS 提供雄厚资金与国际化免税出口港，NNM 则提供丰富的锡米等矿产货源。',
    },
    {
      id: '2.3_mcq_5',
      spCode: 'K7.2.7',
      questionBm:
        'Bagaimanakah dasar **pelabuhan bebas** yang diamalkan di Negeri-negeri Selat menyumbang kepada kemakmuran perdagangan rantau ini?',
      questionZh: '海峡殖民地实行的「免税自由港（pelabuhan bebas）」政策如何促进本区域的商业繁荣？',
      options: [
        {
          id: 'A',
          textBm: 'Hanya membenarkan kapal milik Syarikat Hindia Timur Inggeris berlabuh',
          textZh: '只准许英国东印度公司旗下的船只停靠',
        },
        {
          id: 'B',
          textBm: 'Menarik kedatangan ramai pedagang Alam Melayu serta antarabangsa tanpa beban cukai pelabuhan yang tinggi',
          textZh: '免除高昂港口税，成功吸引大批马来群岛与世界各地商船前来自由贸易',
        },
        {
          id: 'C',
          textBm: 'Mewajibkan semua urusan jual beli menggunakan sistem barter sahaja',
          textZh: '强制规定所有买卖只能采用物物交换',
        },
        {
          id: 'D',
          textBm: 'Menutup pelabuhan pada musim tiupan angin Monsun Timur Laut',
          textZh: '在东北季候风期间全面关闭港口',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Taraf **pelabuhan bebas** (bebas daripada cukai pelabuhan) menarik pedagang dari seluruh Alam Melayu, China, India, Arab dan Eropah, sekali gus mengimbangi monopoli Belanda yang mengenakan cukai tinggi.',
      explanationZh:
        '相比荷兰在东印度群岛的高关税垄断政策，新加坡等 NNS 港口实行免税自由贸易，因而迅速汇聚八方商旅。',
    },
  ],
  strukturQuestion: {
    id: '2.3_struktur_1',
    spCode: 'SP 7.2.3 / K7.2.7',
    stimulusBm:
      'Pada tahun **1826**, pihak British telah menyatukan pentadbiran **Pulau Pinang**, **Singapura** dan **Melaka** di bawah satu unit pentadbiran yang dikenali sebagai **Negeri-negeri Selat (NNS)**.',
    stimulusZh:
      '1826年，英国将槟城、新加坡与马六甲统一合并为名为「海峡殖民地（NNS）」的行政单位。',
    parts: [
      {
        partLabel: '(a)',
        marks: 3,
        questionBm:
          'Nyatakan **tiga** kepentingan pembentukan **Negeri-negeri Selat (1826)** kepada pihak British.',
        questionZh: '写出1826年成立海峡殖民地（NNS）对英国的三项重要性。[3分]',
        expectedKeywordsBm: [
          'menjimatkan perbelanjaan',
          'menyeragamkan pentadbiran',
          'menguasai Selat Melaka',
          'pelabuhan bebas',
          'pintu masuk buruh luar',
        ],
        modelAnswerBm:
          'Tiga kepentingan pembentukan NNS kepada British ialah:\n(i) Dapat **menjimatkan perbelanjaan** pentadbiran SHTI.\n(ii) Dapat **menyeragamkan pentadbiran** ketiga-tiga pelabuhan.\n(iii) Dapat **menguasai keseluruhan laluan perdagangan Selat Melaka** serta menjadi **pelabuhan bebas** bagi mengimbangi monopoli Belanda.',
        modelAnswerZh:
          '成立海峡殖民地对英国的三项重要性：（i）节省东印度公司的行政开销；（ii）统一三座港口的行政与法律制度；（iii）全面掌控马六甲海峡贸易航道，并以免税自由港抗衡荷兰垄断。',
      },
      {
        partLabel: '(b)',
        marks: 3,
        questionBm:
          'Jelaskan hubungan ekonomi dua hala yang saling bergantung antara **Negeri-negeri Selat (NNS)** dengan **Negeri-negeri Melayu (NNM)**.',
        questionZh: '说明海峡殖民地（NNS）与马来各州（NNM）之间相互依存的双向经济关系。[3分]',
        expectedKeywordsBm: [
          'hasil bumi',
          'bijih timah',
          'melaburkan modal',
          'pelabuhan',
          'memasarkan hasil',
        ],
        modelAnswerBm:
          '**Negeri-negeri Selat** memerlukan bekalan **hasil bumi** seperti **bijih timah** daripada Negeri-negeri Melayu untuk diperdagangkan serta **melaburkan modal** memajukan perlombongan di NNM. Sebaliknya, **Negeri-negeri Melayu** memerlukan **pelabuhan** NNS untuk **memasarkan hasil ekonomi** mereka ke pasaran antarabangsa.',
        modelAnswerZh:
          '海峡殖民地需要马来各州持续供应锡米等矿产以供转口贸易，并向马来各州的矿场投入巨额资金；而马来各州则需要借助海峡殖民地的国际港口将矿产销往世界市场。',
      },
      {
        partLabel: '(c)',
        marks: 4,
        questionBm:
          'Pada pendapat anda, bagaimanakah Malaysia boleh meningkatkan daya saing pelabuhan-pelabuhan negara kita supaya kekal menjadi tumpuan perdagangan dunia hari ini?',
        questionZh: '依你之见，当今马来西亚应如何提升我国各大港口的国际竞争力，使其继续成为全球航运与贸易焦点？（KBAT 高思维题）[4分]',
        expectedKeywordsBm: [
          'infrastruktur moden',
          'teknologi digital',
          'pengurusan cekap',
          'keselamatan perairan',
          'cukai kompetitif',
        ],
        modelAnswerBm:
          'Kerajaan dan pengendali pelabuhan hendaklah menyediakan **infrastruktur pelabuhan yang moden** serta mengaplikasikan **teknologi automasi dan digital** (F) supaya urusan pemunggahan kargo dan pelepasan kastam berjalan dengan **pantas serta cekap** (H). Contohnya menaik taraf kemudahan kontena pintar di Pelabuhan Klang dan Pelabuhan Tanjung Pelepas serta menjamin **keselamatan perairan** Selat Melaka (C). Langkah ini akan menarik lebih banyak syarikat perkapalan gergasi dunia berlabuh di negara kita (I).',
        modelAnswerZh:
          '政府与港务机构应建设现代化的港口基础设施，并广泛应用自动化与数码科技（F），使货物装卸与清关流程更加快速高效（H）。例如升级巴生港与丹绒帕拉帕斯港的智能集装箱码头，并确保马六甲海峡航道安全（C），从而吸引全球大型航运巨头持续停靠我国港口（I）。',
      },
    ],
  },
};

const SUBTOPIC_2_4: OfficialSubtopic = {
  subtopicCode: '2.4',
  babNumber: 2,
  babTitleBm: 'Pentadbiran Negeri-negeri Selat',
  babTitleZh: '海峡殖民地的行政管理',
  skCode: 'SK 7.2',
  spCodes: ['SP 7.2.4', 'K7.2.8'],
  titleBm: 'Pentadbiran Negeri-negeri Selat',
  titleZh: '海峡殖民地的行政演变：从英属印度管辖到伦敦皇家殖民地',
  heroImages: [
    {
      imageKey: 'bab2_straits_settlements',
      captionBm:
        'Perubahan pentadbiran **Negeri-negeri Selat** daripada kawalan **SHTI (1826–1857)** dan **Pejabat India (1858–1867)** kepada **Pejabat Tanah Jajahan di London** pada **1 April 1867**.',
      captionZh:
        '海峡殖民地行政隶属的三阶段演变：从东印度公司（1826–1857）与印度事务部（1858–1867），于1867年4月1日移交伦敦殖民地部成为皇家殖民地。',
      hotspots: [
        {
          x: 24,
          y: 30,
          termBm: 'Pemindahan Ibu Negeri ke Singapura (1832)',
          meaningZh: '1832年首府从槟城迁往新加坡',
          detailBm:
            'Pusat pentadbiran NNS dipindahkan dari **Pulau Pinang** ke **Singapura** pada tahun **1832** kerana Singapura lebih strategik dan pesat maju.',
          detailZh:
            '1832年 NNS 行政中心由槟城南迁新加坡，因新加坡地理位置更具战略优势且贸易发展更为迅猛。',
        },
        {
          x: 52,
          y: 26,
          termBm: 'Pentadbiran SHTI & Pejabat India (1826–1867)',
          meaningZh: '1826–1867年：隶属英属印度管辖时期',
          detailBm:
            'Diketuai oleh **Gabenor NNS** dengan bantuan **Residen Konsular** di setiap negeri di bawah kawalan Gabenor Jeneral British di India.',
          detailZh:
            '由海峡殖民地总督统领、三州参政领事官辅佐，但一切大权受驻印度的英国总督远距离控制。',
        },
        {
          x: 78,
          y: 54,
          termBm: '5 Faktor Bantahan Pedagang NNS',
          meaningZh: '引发 NNS 商人强烈抗议的五大弊政',
          detailBm:
            'Tiada wakil perundangan, isu **rompakan & kongsi gelap**, mata wang **Rupee India**, cadangan **cukai pelabuhan**, dan **tempat buangan banduan**!',
          detailZh:
            '立法议会无代表、无法平息海盗与私会党械斗、强推印度卢比取代西班牙银元、拟征港口税及充当印度囚犯流放地！',
        },
        {
          x: 46,
          y: 80,
          termBm: 'Tanah Jajahan Mahkota British (1 April 1867)',
          meaningZh: '1867年4月1日：成为伦敦直辖皇家殖民地',
          detailBm:
            'NNS diletakkan di bawah **Pejabat Tanah Jajahan London**; Gabenor dibantu oleh **Majlis Eksekutif** dan **Majlis Perundangan**.',
          detailZh:
            'NNS 改归伦敦殖民地部直辖成为皇家殖民地（Crown Colony），总督获行政议会与本地立法议会协助施政。',
        },
      ],
    },
  ],
  sections: [
    {
      sectionCode: '2.4(a)',
      headingBm: 'Pentadbiran NNS di Bawah SHTI (1826–1857) dan Pejabat India (1858–1867)',
      headingZh: '受英属印度管辖阶段：东印度公司（1826–1857）与印度事务部（1858–1867）',
      leadParagraphBm:
        'Sejak ditubuhkan pada tahun **1826** sehingga Mac **1867**, pentadbiran **Negeri-negeri Selat** diletakkan di bawah pengawasan kerajaan British di **India**, mula-mula melalui **SHTI** dan kemudiannya **Pejabat India**.',
      leadParagraphZh:
        '从1826年成立直至1867年3月，海峡殖民地在长达41年间一直隶属英属印度政府管辖，先后由英国东印度公司与印度事务部负责监督。',
      diagramKey: 'diag_2_4_pentadbiran_nns',
      bullets: [
        {
          tag: 'FAKTA',
          bm: '**NNS di bawah SHTI (1826–1857)**: Pentadbiran NNS diketuai oleh **Gabenor Negeri-negeri Selat** yang menerima arahan daripada **Gabenor Jeneral SHTI di India**, manakala di Pulau Pinang, Singapura dan Melaka dilantik seorang **Residen Konsular** bagi membantu Gabenor menjalankan pentadbiran harian.',
          zh: 'SHTI 管辖期（1826–1857）：由海峡殖民地总督（Gabenor NNS）领导，听命于驻印度的东印度公司总督；槟城、新加坡与马六甲三州则各设一名参政领事官（Residen Konsular）协助日常政务。',
        },
        {
          tag: 'CONTOH',
          bm: '**Pemindahan pusat pentadbiran ke Singapura (1832)**: **Pulau Pinang** menjadi pusat pentadbiran pertama NNS pada tahun 1826; namun pada tahun **1832**, pusat pentadbiran dipindahkan ke **Singapura** kerana kedudukannya yang **lebih strategik** dan kemajuan perdagangannya yang melebihi Pulau Pinang.',
          zh: '1832年迁都新加坡：1826年槟城原本是 NNS 首任行政中心；但因新加坡地理位置更优越且商贸发展远超槟城，英国遂于1832年将行政首都迁往新加坡。',
        },
        {
          tag: 'FAKTA',
          bm: '**NNS di bawah Pejabat India / India Office (1858–1867)**: Selepas tercetusnya **Dahagi India pada tahun 1857** (pemberontakan tentera upahan India menentang SHTI), kerajaan British membubarkan SHTI pada tahun **1858** dan meletakkan NNS di bawah kawalan **Pejabat India (India Office)**.',
          zh: '印度事务部管辖期（1858–1867）：1857年爆发印度民族大起义（Dahagi India）后，英国政府于1858年解散东印度公司，改由伦敦的印度事务部（Pejabat India）通过驻印度总督管辖 NNS。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Sepanjang tempoh di bawah Pejabat India, **Undang-undang British** dikuatkuasakan di NNS, tetapi pentadbiran di India mengabaikan kebajikan NNS kerana jarak yang jauh serta perbezaan latar belakang sosioekonomi antara India dengan NNS.',
          zh: '在印度事务部管辖期间，虽然实施英国法律，但远在印度的官员根本不了解海峡殖民地的商业环境与多元社会需求，导致施政弊端丛生。',
        },
      ],
    },
    {
      sectionCode: '2.4(b)',
      headingBm: 'Faktor Pemindahan Pentadbiran NNS ke Pejabat Tanah Jajahan di London (1867)',
      headingZh: '1867年海峡殖民地要求移交伦敦殖民地部管辖的五大原因',
      leadParagraphBm:
        'Kelemahan pentadbiran **Pejabat India** telah mencetuskan rasa tidak puas hati yang mendalam dalam kalangan golongan **pedagang** dan penduduk tempatan NNS sehingga mereka menuntut pentadbiran dipindahkan terus ke **London**.',
      leadParagraphZh:
        '印度事务部的一系列昏庸措施激起了海峡殖民地商界与居民的强烈不满，促使新加坡商会等团体不断向英国国会请愿要求改归伦敦直辖。',
      bullets: [
        {
          tag: 'HURAIAN',
          bm: '**(1) Tiada wakil NNS dalam Majlis Perundangan di India**: Majlis Perundangan di India yang meluluskan undang-undang bagi NNS **tidak mempunyai wakil daripada Negeri-negeri Selat**, menyebabkan undang-undang yang digubal tidak sesuai dengan keadaan tempatan.',
          zh: '（1）印度立法议会缺乏 NNS 代表：负责为海峡殖民地制定法律的印度立法议会中没有任何来自 NNS 的代表，所立法规往往脱离当地实情。',
        },
        {
          tag: 'HURAIAN',
          bm: '**(2) Kegagalan mengawal masalah rompakan dan pertelingkahan kongsi gelap**: Pejabat India gagal membanteras kegiatan **rompakan (lanun)** terhadap kapal dagang di Selat Melaka dan gagal mengawal **pergaduhan kumpulan kongsi gelap Cina** yang mengancam keselamatan nyawa serta harta benda pedagang.',
          zh: '（2）无力遏制海盗劫掠与华人私会党械斗：印度事务部未能派遣足够警力剿灭马六甲海峡猖獗的海盗抢劫，也无法平息华人私会党流血冲突，严重破坏治安与商业秩序。',
        },
        {
          tag: 'CONTOH',
          bm: '**(3) Isu mata wang Rupee India menggantikan Dolar Sepanyol**: Tindakan Pejabat India mahu menjadikan mata wang **Rupee India** sebagai mata wang rasmi NNS bagi menggantikan **Dolar Sepanyol** yang telah lama mantap dalam perdagangan serantau ditentang hebat oleh golongan pedagang.',
          zh: '（3）强推印度卢比取代西班牙银元：印度事务部企图废除区域商贸早已通用的西班牙银元（Dolar Sepanyol），改以印度卢比（Rupee India）作为法定货币，引发商界强烈反弹。',
        },
        {
          tag: 'CONTOH',
          bm: '**(4) Cadangan mengenakan cukai pelabuhan**: Pejabat India mencadangkan pengenaan **cukai pelabuhan** di NNS untuk menampung kos pentadbiran, yang dikhuatiri akan menjejaskan kemakmuran taraf **pelabuhan bebas** terutamanya di Singapura.',
          zh: '（4）拟征收港口税危及自由港地位：印度事务部提议向进出船只征收港口税（cukai pelabuhan），商界担心此举将彻底摧毁新加坡赖以繁荣的免税自由港优势。',
        },
        {
          tag: 'CONTOH',
          bm: '**(5) NNS dijadikan tempat buangan banduan**: Tindakan Pejabat India menghantar **banduan** dari India ke NNS menjejaskan imej baik NNS sebagai pusat perdagangan antarabangsa serta membebankan kewangan NNS untuk membiayai kos sara hidup banduan tersebut.',
          zh: '（5）沦为印度囚犯流放地：印度当局将大批印度重刑囚犯（banduan）流放至槟城、马六甲与新加坡服苦役，不仅严重损害商业港口的国际声誉，还迫使当地承担养囚经费。',
        },
        {
          tag: 'PERHATIAN',
          bm: 'Lima faktor pemindahan 1867 ini ialah soalan kegemaran Bahagian B & C UASA! Ingat kata kunci: **Tiada Wakil**, **Rompakan & Kongsi Gelap**, **Rupee ganti Dolar Sepanyol**, **Cukai Pelabuhan**, dan **Tempat Buangan Banduan**!',
          zh: 'UASA 主观题超级重点！1867年移交伦敦五大原因必背：无立法代表、海盗与私会党乱局、卢比换西班牙银元、拟收港口税、沦为囚犯流放地！',
        },
      ],
    },
    {
      sectionCode: '2.4(c)',
      headingBm: 'Struktur Pentadbiran NNS sebagai Tanah Jajahan Mahkota British Mulai 1 April 1867',
      headingZh: '1867年4月1日起成为英国皇家殖民地（Crown Colony）的新行政架构',
      leadParagraphBm:
        'Pada **1 April 1867**, pentadbiran Negeri-negeri Selat dipindahkan secara rasmi daripada Pejabat India ke **Pejabat Tanah Jajahan (Colonial Office) di London** dan diisytiharkan sebagai **Tanah Jajahan Mahkota British (Crown Colony)**.',
      leadParagraphZh:
        '1867年4月1日，英国国会将海峡殖民地正式从印度事务部移交伦敦殖民地部直辖，宣布 NNS 成为英国皇家殖民地（Tanah Jajahan Mahkota British / Crown Colony）。',
      bullets: [
        {
          tag: 'FAKTA',
          bm: 'Di bawah struktur baharu mulai **1 April 1867**, pentadbiran NNS diketuai oleh seorang **Gabenor Negeri-negeri Selat** (Gabenor pertama ialah **Sir Harry Ord**) yang bertanggungjawab terus kepada **Setiausaha Tanah Jajahan** di **Pejabat Tanah Jajahan London**.',
          zh: '自1867年4月1日起，NNS 由海峡殖民地总督（首任为哈里·奥德爵士 Sir Harry Ord）统领，直接向伦敦殖民地部大臣负责，彻底脱离印度管辖。',
        },
        {
          tag: 'FAKTA',
          bm: 'Gabenor NNS dibantu oleh **Majlis Eksekutif** yang bertanggungjawab **menguruskan hal pentadbiran** harian Negeri-negeri Selat.',
          zh: '总督之下设立行政议会（Majlis Eksekutif），专门负责处理与执行海峡殖民地的日常行政事务。',
        },
        {
          tag: 'FAKTA',
          bm: 'Gabenor NNS turut dibantu oleh **Majlis Perundangan** (dianggotai ahli rasmi kerajaan dan ahli tidak rasmi yang mewakili pedagang tempatan) yang berperanan **menggubal undang-undang** sendiri yang sesuai untuk Negeri-negeri Selat.',
          zh: '同时设立立法议会（Majlis Perundangan，包含官方议员与代表本地商界的非官方议员），专门负责制定符合海峡殖民地自身利益的法律。',
        },
        {
          tag: 'HURAIAN',
          bm: 'Pemindahan ke London ini membolehkan suara pedagang NNS didengari secara langsung dan mempercepat perubahan dasar British ke arah **campur tangan** di Negeri-negeri Melayu menjelang tahun 1874.',
          zh: '移交伦敦直辖后，本地商界拥有了直接发言权，为日后1874年推动英国全面干预马来各州政局奠定了制度基础。',
        },
      ],
    },
  ],
  comparisonTables: [
    {
      titleBm: 'Perubahan Pentadbiran Negeri-negeri Selat (Sebelum vs Selepas 1 April 1867)',
      titleZh: '海峡殖民地行政体制改革前后对比表（1867年4月1日前 vs 后）',
      headers: [
        { bm: 'Aspek Pentadbiran', zh: '行政比较维度' },
        { bm: 'Sebelum 1 April 1867 (**SHTI & Pejabat India**)', zh: '1867年4月1日前（驻印度管辖期）' },
        {
          bm: 'Mulai 1 April 1867 (**Pejabat Tanah Jajahan London**)',
          zh: '1867年4月1日起（伦敦殖民地部直辖期）',
        },
      ],
      rows: [
        [
          { bm: 'Pihak Berkuasa Tertinggi', zh: '最高管辖机构' },
          {
            bm: '**SHTI (1826–1857)** diikuti **Pejabat India (1858–1867)** melalui Gabenor Jeneral di India',
            zh: '东印度公司（1826–1857）及印度事务部（1858–1867），受驻印度总督控制',
          },
          {
            bm: '**Pejabat Tanah Jajahan (Colonial Office)** di **London** melalui Setiausaha Tanah Jajahan',
            zh: '伦敦殖民地部（Pejabat Tanah Jajahan），直接向殖民地大臣负责',
          },
        ],
        [
          { bm: 'Taraf Pentadbiran', zh: '殖民地法律地位' },
          {
            bm: 'Petempatan sampingan di bawah pentadbiran British di India',
            zh: '附属于英属印度的外围据点',
          },
          {
            bm: '**Tanah Jajahan Mahkota British (Crown Colony)**',
            zh: '英国皇家殖民地（Crown Colony）',
          },
        ],
        [
          { bm: 'Penggubalan Undang-undang', zh: '立法权与代表性' },
          {
            bm: 'Diluluskan oleh Majlis Perundangan di India **tanpa sebarang wakil NNS**',
            zh: '由远在印度的立法议会制定，完全没有 NNS 本地代表',
          },
          {
            bm: 'Digubal sendiri oleh **Majlis Perundangan NNS** dengan penyertaan wakil tempatan, dibantu **Majlis Eksekutif** dalam pentadbiran',
            zh: '由设有本地非官方代表的 NNS 立法议会自行立法，并设行政议会协助施政',
          },
        ],
        [
          { bm: 'Pusat Pentadbiran Tempatan', zh: '本地行政首府' },
          {
            bm: '**Pulau Pinang (1826–1832)** kemudian berpindah ke **Singapura (mulai 1832)**',
            zh: '槟城（1826–1832），1832年起迁往新加坡',
          },
          {
            bm: 'Kekal berpusat di **Singapura**',
            zh: '继续设于新加坡',
          },
        ],
      ],
    },
  ],
  dialogues: [
    {
      speakerBm: 'Pengerusi Dewan Perniagaan Singapura (1860-an)',
      roleBm: 'Wakil Pedagang Negeri-negeri Selat',
      roleZh: '新加坡商会主席（NNS 商界代表）',
      emoji: '📢',
      lineBm:
        'Kami membantah pentadbiran **Pejabat India**! Kami **tiada wakil** dalam Majlis Perundangan India, kapal kami diserang **perompak**, **kongsi gelap** bergaduh, mereka mahu tukar **Dolar Sepanyol** kepada **Rupee India**, mahu kenakan **cukai pelabuhan**, malah menghantar **banduan** ke sini!',
      lineZh:
        '我们强烈抗议印度事务部的昏庸统治！我们在印度立法会毫无代表，海峡海盗横行、私会党火拼没人管，他们竟还想用印度卢比取代西班牙银元、征收港口税，甚至把囚犯流放到这里！',
    },
    {
      speakerBm: 'Setiausaha Tanah Jajahan di London',
      roleBm: 'Menteri Pejabat Tanah Jajahan Britain',
      roleZh: '伦敦英国殖民地部大臣',
      emoji: '🏛️',
      lineBm:
        'Tuntutan pedagang NNS diterima oleh Parlimen Britain! Mulai **1 April 1867**, Negeri-negeri Selat dipindahkan ke bawah **Pejabat Tanah Jajahan di London** sebagai **Tanah Jajahan Mahkota British (Crown Colony)**!',
      lineZh:
        '英国议会已批准你们的请愿！自1867年4月1日起，海峡殖民地正式移交伦敦殖民地部直辖，升格为英国皇家殖民地（Crown Colony）！',
    },
    {
      speakerBm: 'Sir Harry Ord',
      roleBm: 'Gabenor NNS Pertama di Bawah Crown Colony (1867)',
      roleZh: '皇家殖民地首任总督哈里·奥德爵士',
      emoji: '🎖️',
      lineBm:
        'Di Singapura, pentadbiran saya kini dibantu oleh dua badan utama: **Majlis Eksekutif** untuk **mengurus pentadbiran** dan **Majlis Perundangan** untuk **menggubal undang-undang** NNS!',
      lineZh:
        '在新加坡，我的总督施政如今有两大机构辅佐：行政议会（Majlis Eksekutif）负责管理日常行政，立法议会（Majlis Perundangan）专门为海峡殖民地制定法律！',
    },
  ],
  memoryHackBm:
    'Formula **3 Fasa NNS**: **1826–1857 (SHTI; 1832 pindah ibu negeri ke Singapura) → 1858–1867 (Pejabat India selepas Dahagi India 1857) → 1 April 1867 (Pejabat Tanah Jajahan London / Crown Colony)**. Lima Bantahan **"W-R-R-C-B"**: **Wakil tiada, Rompakan/Kongsi gelap, Rupee ganti Dolar Sepanyol, Cukai pelabuhan, Banduan India**!',
  memoryHackZh:
    '【NNS 三阶段 + 五大抗议口诀】三阶段：1826 SHTI（1832迁都新加坡）→ 1858 印度事务部（因1857印度大起义）→ 1867年4月1日 伦敦殖民地部（皇家殖民地，设行政议会 + 立法议会）。五大抗议「无代、盗党、卢比、港税、流放囚犯」（W-R-R-C-B）！',
  subtopicMcqs: [
    {
      id: '2.4_mcq_1',
      spCode: 'SP 7.2.4',
      questionBm:
        'Mengapakah pusat pentadbiran Negeri-negeri Selat dipindahkan dari **Pulau Pinang** ke **Singapura** pada tahun **1832**?',
      questionZh: '为什么海峡殖民地的行政中心会于1832年从槟城迁往新加坡？',
      options: [
        {
          id: 'A',
          textBm: 'Pulau Pinang telah diserahkan semula kepada Kesultanan Kedah',
          textZh: '槟城已归还给吉打苏丹王朝',
        },
        {
          id: 'B',
          textBm: 'Kedudukan **Singapura** lebih strategik dan kemajuan ekonominya berkembang lebih pesat',
          textZh: '新加坡地理位置更具战略优势，且经贸发展比槟城更加迅猛',
        },
        {
          id: 'C',
          textBm: 'Tentera Perancis berjaya menawan pelabuhan Georgetown di Pulau Pinang',
          textZh: '法国军队攻占了槟城乔治市港口',
        },
        {
          id: 'D',
          textBm: 'Pejabat Tanah Jajahan di London mengarahkan penutupan pelabuhan Pulau Pinang',
          textZh: '伦敦殖民地部下令关闭槟城港口',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Pada tahun **1832**, pusat pentadbiran NNS dipindahkan dari Pulau Pinang ke **Singapura** kerana kedudukan Singapura di selatan Selat Melaka **lebih strategik** dan ekonominya jauh lebih maju.',
      explanationZh:
        '新加坡扼守马六甲海峡与南海交汇处，地理位置比偏居北部的槟城更优越，商贸额迅速超越槟城，故于1832年成为新首府。',
    },
    {
      id: '2.4_mcq_2',
      spCode: 'SP 7.2.4',
      questionBm:
        'Apakah isu kewangan yang menimbulkan bantahan keras golongan pedagang Negeri-negeri Selat terhadap pentadbiran **Pejabat India** sebelum tahun 1867?',
      questionZh: '1867年之前，印度事务部的哪一项货币政策引发了海峡殖民地商人的强烈抗议？',
      options: [
        {
          id: 'A',
          textBm: 'Menjadikan mata wang **Rupee India** menggantikan penggunaan **Dolar Sepanyol**',
          textZh: '企图以印度卢比（Rupee India）取代商界惯用的西班牙银元（Dolar Sepanyol）',
        },
        {
          id: 'B',
          textBm: 'Mewajibkan penggunaan Dinar Emas Kijang di semua bank Eropah',
          textZh: '强制所有欧洲银行使用吉兰丹鹿纹金币',
        },
        {
          id: 'C',
          textBm: 'Mengharamkan semua pelaburan modal pedagang di lombong bijih timah',
          textZh: '禁止商人向锡矿投入任何资金',
        },
        {
          id: 'D',
          textBm: 'Memindahkan semua rizab perak Singapura ke pelabuhan Betawi',
          textZh: '将新加坡所有白银储备转移至巴达维亚港',
        },
      ],
      correctId: 'A',
      explanationBm:
        'Pejabat India mahu menggantikan mata wang **Dolar Sepanyol** yang telah lama diterima pakai dalam perdagangan NNS dan Alam Melayu dengan mata wang **Rupee India**, sehingga menyukarkan urusan pedagang.',
      explanationZh:
        '当时整个东南亚与对华贸易皆通行西班牙银元（Dolar Sepanyol），印度事务部强推印度卢比严重扰乱商业结算，招致猛烈抨击。',
    },
    {
      id: '2.4_mcq_3',
      spCode: 'SP 7.2.4',
      questionBm:
        'Mengapakah cadangan **Pejabat India** untuk mengenakan **cukai pelabuhan** di Negeri-negeri Selat ditentang hebat oleh Dewan Perniagaan Singapura?',
      questionZh: '为什么印度事务部拟在海峡殖民地征收「港口税（cukai pelabuhan）」的提议遭到新加坡商会的激烈反对？',
      options: [
        {
          id: 'A',
          textBm: 'Akan menyebabkan banduan dari India dibebaskan serta-merta',
          textZh: '会导致来自印度的囚犯被立即释放',
        },
        {
          id: 'B',
          textBm: 'Akan menjejaskan kemakmuran taraf **pelabuhan bebas** Singapura dan mengurangkan kedatangan kapal dagang',
          textZh: '将破坏新加坡免税自由港（pelabuhan bebas）的繁荣地位，导致外国商船流失',
        },
        {
          id: 'C',
          textBm: 'Akan memaksa Belanda menyerahkan Sumatera kepada British',
          textZh: '会迫使荷兰把苏门答腊交给英国',
        },
        {
          id: 'D',
          textBm: 'Akan menghapuskan jawatan Residen Konsular di Melaka',
          textZh: '会废除马六甲参政领事官的职位',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Kemajuan pesat NNS terutamanya Singapura bergantung pada taraf **pelabuhan bebas** tanpa cukai pelabuhan; pengenaan cukai akan menghalau pedagang asing dan merugikan perniagaan.',
      explanationZh:
        '新加坡之所以能击败荷属港口全靠免税自由港优势；一旦开征港口税无异于自毁长城，因此遭到商界坚决抵制。',
    },
    {
      id: '2.4_mcq_4',
      spCode: 'SP 7.2.4',
      questionBm:
        'Pada **1 April 1867**, pentadbiran Negeri-negeri Selat telah dipindahkan daripada Pejabat India kepada...',
      questionZh: '1867年4月1日，海峡殖民地的行政管辖权正式从印度事务部移交给哪一个机构？',
      options: [
        {
          id: 'A',
          textBm: '**Syarikat Borneo Utara British (SBUB)**',
          textZh: '英属北婆罗洲渣打公司（SBUB）',
        },
        {
          id: 'B',
          textBm: '**Pejabat Tanah Jajahan (Colonial Office) di London**',
          textZh: '设于伦敦的英国殖民地部（Pejabat Tanah Jajahan）',
        },
        {
          id: 'C',
          textBm: '**Pentadbiran Tentera British di Madras**',
          textZh: '驻马德拉斯的英国军政府',
        },
        {
          id: 'D',
          textBm: '**Majlis Raja-Raja Melayu Bersekutu**',
          textZh: '马来联邦统治者会议',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Mulai **1 April 1867**, pentadbiran NNS diletakkan terus di bawah **Pejabat Tanah Jajahan (Colonial Office) di London** dan diisytiharkan sebagai **Tanah Jajahan Mahkota British (Crown Colony)**.',
      explanationZh:
        '1867年4月1日是关键历史转折点：NNS 正式改由伦敦殖民地部（Pejabat Tanah Jajahan）直辖，成为皇家殖民地（Crown Colony）。',
    },
    {
      id: '2.4_mcq_5',
      spCode: 'SP 7.2.4',
      questionBm:
        'Apakah peranan utama **Majlis Perundangan** yang ditubuhkan membantu Gabenor NNS selepas Negeri-negeri Selat menjadi **Tanah Jajahan Mahkota British** pada tahun 1867?',
      questionZh: '1867年海峡殖民地成为英国皇家殖民地后，协助总督的「立法议会（Majlis Perundangan）」主要职责是什么？',
      options: [
        {
          id: 'A',
          textBm: 'Menguruskan kutipan bunga emas di negeri-negeri utara Tanah Melayu',
          textZh: '管理马来半岛北部各州的金银花进贡事务',
        },
        {
          id: 'B',
          textBm: '**Menggubal undang-undang** khusus untuk Negeri-negeri Selat',
          textZh: '专门为海峡殖民地制定法律（menggubal undang-undang）',
        },
        {
          id: 'C',
          textBm: 'Melantik Gabenor Jeneral Syarikat Hindia Timur Inggeris di Calcutta',
          textZh: '委任驻加尔各答的东印度公司总督',
        },
        {
          id: 'D',
          textBm: 'Mengetuai angkatan tentera laut British di Laut Mediterranean',
          textZh: '统帅英国驻地中海海军舰队',
        },
      ],
      correctId: 'B',
      explanationBm:
        'Selepas 1 April 1867, Gabenor NNS dibantu oleh **Majlis Eksekutif** (menguruskan hal pentadbiran) dan **Majlis Perundangan** (**menggubal undang-undang** bagi NNS).',
      explanationZh:
        '严格区分两大议会职责：Majlis Eksekutif（行政议会）负责管理日常行政；Majlis Perundangan（立法议会）负责制定法律（menggubal undang-undang）。',
    },
  ],
  strukturQuestion: {
    id: '2.4_struktur_1',
    spCode: 'SP 7.2.4 / K7.2.8',
    stimulusBm:
      'Pada **1 April 1867**, pentadbiran **Negeri-negeri Selat (NNS)** telah dipindahkan daripada kawalan **Pejabat India** kepada **Pejabat Tanah Jajahan di London** dan dijadikan **Tanah Jajahan Mahkota British**.',
    stimulusZh:
      '1867年4月1日，海峡殖民地（NNS）脱离印度事务部管辖，正式移交伦敦殖民地部并成为英国皇家殖民地。',
    parts: [
      {
        partLabel: '(a)',
        marks: 2,
        questionBm:
          'Namakan **dua** buah majlis yang ditubuhkan untuk membantu **Gabenor Negeri-negeri Selat** selepas 1 April 1867 serta nyatakan fungsinya secara ringkas.',
        questionZh: '写出1867年4月1日后成立以协助海峡殖民地总督的两个议会名称，并简述其职能。[2分]',
        expectedKeywordsBm: [
          'Majlis Eksekutif',
          'mengurus pentadbiran',
          'Majlis Perundangan',
          'menggubal undang-undang',
        ],
        modelAnswerBm:
          '(i) **Majlis Eksekutif** — berperanan **menguruskan hal pentadbiran** NNS.\n(ii) **Majlis Perundangan** — berperanan **menggubal undang-undang** bagi NNS.',
        modelAnswerZh:
          '（i）行政议会（Majlis Eksekutif）——负责管理日常行政事务；（ii）立法议会（Majlis Perundangan）——负责制定海峡殖民地法律。',
      },
      {
        partLabel: '(b)',
        marks: 4,
        questionBm:
          'Terangkan **empat** faktor yang menyebabkan golongan pedagang dan penduduk tempatan tidak berpuas hati terhadap pentadbiran **Pejabat India** sehingga menuntut pemindahan pentadbiran pada tahun 1867.',
        questionZh: '说明导致海峡殖民地商人与居民不满印度事务部统治、进而要求在1867年移交管辖权的四项原因。[4分]',
        expectedKeywordsBm: [
          'tiada wakil NNS',
          'Majlis Perundangan',
          'rompakan',
          'kongsi gelap',
          'Rupee India',
          'Dolar Sepanyol',
          'cukai pelabuhan',
          'banduan',
        ],
        modelAnswerBm:
          'Empat faktor tersebut ialah:\n(i) **Tiada wakil NNS** dalam **Majlis Perundangan di India** yang meluluskan undang-undang untuk NNS.\n(ii) Pejabat India gagal mengawal masalah **rompakan** di Selat Melaka dan pergaduhan **kongsi gelap** Cina.\n(iii) Percubaan menggantikan mata wang **Dolar Sepanyol** dengan mata wang **Rupee India** menyukarkan pedagang.\n(iv) Cadangan mengenakan **cukai pelabuhan** yang menjejaskan taraf pelabuhan bebas serta tindakan menjadikan NNS **tempat buangan banduan** dari India.',
        modelAnswerZh:
          '四项原因包括：（i）印度立法议会中没有 NNS 代表；（ii）印度事务部无力遏制马六甲海峡海盗抢劫与华人私会党械斗；（iii）企图用印度卢比取代通用的西班牙银元；（iv）提议征收港口税威胁自由港地位，并将 NNS 当作印度囚犯流放地。',
      },
      {
        partLabel: '(c)',
        marks: 4,
        questionBm:
          'Pentadbiran yang cekap dan peka terhadap suara rakyat amat penting bagi kemajuan sesebuah negeri. Berikan hujah anda untuk menyokong pernyataan ini.',
        questionZh: '高效且倾听民意的行政管理对一个地区的繁荣发展至关重要。请提出你的论据支持这一观点。（KBAT 高思维题）[4分]',
        expectedKeywordsBm: [
          'undang-undang yang adil',
          'keamanan terjamin',
          'keyakinan pelabur',
          'kesejahteraan rakyat',
        ],
        modelAnswerBm:
          'Pentadbiran yang cekap dan peka terhadap suara rakyat membolehkan kerajaan menggubal **dasar serta undang-undang yang adil** mengikut keperluan sebenar masyarakat tempatan (F/H). Sebagai contoh, penguatkuasaan keselamatan yang tegas dan dasar cukai yang mesra perniagaan akan menjamin **ketenteraman awam** serta meningkatkan **keyakinan pelabur** (C). Kesannya, ekonomi negeri berkembang pesat dan **kesejahteraan hidup rakyat** sentiasa terbela (I).',
        modelAnswerZh:
          '高效且倾听民意的政府能够根据当地社会的真实需求，制定公正合理的政策与法律（F/H）。例如严明维护社会治安并推行亲商税务政策，能保障公共安全并增强投资者信心（C）。最终将带动经济蓬勃发展，全面保障人民的福祉与安居乐业（I）。',
      },
    ],
  },
};

export const TEXTBOOK_BAB_1_2: OfficialSubtopic[] = [
  SUBTOPIC_1_1,
  SUBTOPIC_1_2,
  SUBTOPIC_1_3,
  SUBTOPIC_1_4,
  SUBTOPIC_2_1,
  SUBTOPIC_2_2,
  SUBTOPIC_2_3,
  SUBTOPIC_2_4,
];

import React from 'react';
import { DiagramKey } from '../types/textbook';

interface Props {
  diagramKey: DiagramKey;
  showChineseHelper?: boolean;
}

const DIAGRAM_DATA: Record<
  DiagramKey,
  {
    badge: string;
    titleBm: string;
    titleZh: string;
    themeBg: string;
    themeBorder: string;
    themeAccent: string;
    cards: {
      stepOrTag: string;
      headingBm: string;
      headingZh: string;
      itemsBm: string[];
      itemsZh: string[];
      colorBg: string;
      colorText: string;
    }[];
  }
> = {
  diag_1_1_hierarki_adat: {
    badge: 'RAJAH BUKU TEKS 1.1(A)',
    titleBm: 'Perbandingan Hierarki Sistem Pemerintahan Beraja & Hierarki Adat Perpatih',
    titleZh: '传统马来君主统治金字塔 vs 森美兰母系佩帕提民主推选阶层图',
    themeBg: '#FFFBEB',
    themeBorder: '#F59E0B',
    themeAccent: '#B45309',
    cards: [
      {
        stepOrTag: 'SISTEM BERAJA (NEGERI MELAYU)',
        headingBm: '1. Sultan / Raja (Peringkat Negeri)',
        headingZh: '州级最高统治者：苏丹／拉惹',
        itemsBm: [
          'Lambang kedaulatan & perpaduan rakyat',
          '2. Pembesar (Peringkat Jajahan / Daerah) — kutip cukai & jaga keamanan',
          '3. Penghulu / Penggawa (Peringkat Kampung / Mukim) — perantara rakyat',
        ],
        itemsZh: [
          '国家主权与人民团结最高象征',
          '2. 大臣（县区级）— 获委任状征税与维持治安',
          '3. 村长（甘榜级）— 统治阶层与村民的沟通桥梁',
        ],
        colorBg: '#FEF3C7',
        colorText: '#78350F',
      },
      {
        stepOrTag: 'ADAT PERPATIH (NEGERI SEMBILAN)',
        headingBm: 'Pemilihan Pemimpin Dari Bawah Ke Atas ↑',
        headingZh: '森美兰母系由下而上民主推举制 ↑',
        itemsBm: [
          'Anak Buah & Ibu Soko → memilih Buapak (Ketua Perut)',
          'Buapak → memilih Lembaga (Ketua Suku)',
          'Lembaga → memilih empat orang Undang (Ketua Luak) → memilih Yamtuan Besar!',
        ],
        itemsZh: [
          '族人与母系长老 Ibu Soko → 选出腹地首领 Buapak',
          'Buapak → 选出氏族长 Lembaga',
          'Lembaga → 选出四大酋长 Undang → 共同推选最高统治者严端 Yamtuan Besar！',
        ],
        colorBg: '#ECFDF5',
        colorText: '#065F46',
      },
    ],
  },
  diag_1_1_timbangan_wang: {
    badge: 'RAJAH BUKU TEKS 1.1(B)',
    titleBm: 'Sistem Sukatan, Timbangan, Ukuran & Mata Wang Tradisional',
    titleZh: '传统度量衡（容量、重量、长度）与各州金币锡币图鉴',
    themeBg: '#F0FDF4',
    themeBorder: '#10B981',
    themeAccent: '#047857',
    cards: [
      {
        stepOrTag: 'SUKATAN & UKURAN',
        headingBm: 'Sukatan Bijirin & Ukuran Panjang Badan',
        headingZh: '谷物容量单位与身体长度单位',
        itemsBm: [
          'Sukatan: Kepul → Leng → Kal → Cupak → Gantang (1 Gantang = 4 Cupak)',
          'Ukuran: Jengkal (虎口) → Hasta (前臂) → Depa (双臂平伸)',
        ],
        itemsZh: [
          '容量（量米／香料）：Kepul → Leng → Kal → Cupak → Gantang',
          '长度：Jengkal → Hasta → Depa',
        ],
        colorBg: '#DCFCE7',
        colorText: '#14532D',
      },
      {
        stepOrTag: 'TIMBANGAN (CHINA & INDIA)',
        headingBm: 'Timbangan Barang Dagangan & Emas/Perak',
        headingZh: '中式大宗商品秤重 vs 印式金银秤重',
        itemsBm: [
          'Dari pedagang China (Dacing): Tahil (两) → Kati (斤) → Pikul (担)',
          'Dari pedagang India (Emas/Perak): Saga → Mayam → Bungkal → Kati',
        ],
        itemsZh: [
          '源自中国商人秤杆：Tahil → Kati（16两）→ Pikul（100斤）',
          '源自印度商人称黄金白银：Saga（相思豆）→ Mayam → Bungkal',
        ],
        colorBg: '#FEF9C3',
        colorText: '#713F12',
      },
      {
        stepOrTag: 'MATA WANG NEGERI MELAYU',
        headingBm: 'Mata Wang Emas & Timah Berukir Indah',
        headingZh: '马来各州精美的黄金与锡制钱币',
        itemsBm: [
          'Kelantan: Wang Emas Kijang (鹿纹金币) | Terengganu: Kupang Emas Segi Lapan',
          'Kedah: Mata Wang Ayam Jantan (公鸡币) | Pahang: Jongkong Tampang (锡锭币)',
        ],
        itemsZh: [
          '吉兰丹：Kijang 鹿纹金币 ｜ 登嘉楼：八角形 Kupang 金币',
          '吉打：公鸡造型钱币 ｜ 彭亨：鳄鱼背／金字塔形 Tampang 锡币',
        ],
        colorBg: '#E0F2FE',
        colorText: '#0C4A6E',
      },
    ],
  },
  diag_1_2_faktor_barat: {
    badge: 'RAJAH BUKU TEKS 1.2',
    titleBm: 'Evolusi Faktor Kedatangan Kuasa Barat (Abad ke-16 hingga Abad ke-20)',
    titleZh: '16世纪至20世纪西方列强东来动机演变时间轴',
    themeBg: '#EFF6FF',
    themeBorder: '#3B82F6',
    themeAccent: '#1D4ED8',
    cards: [
      {
        stepOrTag: 'ABAD KE-16',
        headingBm: '3G: Barangan Mewah, Pelabuhan & Agama Kristian',
        headingZh: '16世纪（葡、西）：香料奢侈品、季候风中转港与传教',
        itemsBm: [
          'Rempah-ratus (cengkih, buah pala, kulit kayu manis), teh & sutera China',
          'Pusat pengumpulan barang & pelabuhan persinggahan angin monsun',
          'Matlamat Kekayaan (Gold), Keagamaan (Gospel) & Kemasyhuran (Glory)',
        ],
        itemsZh: [
          '争夺丁香、豆蔻、肉桂等香料与中国丝绸茶叶',
          '位于印中航线中点的集散中心与季候风避风港',
          '3G 口号：财富、基督教传播与帝国荣耀',
        ],
        colorBg: '#DBEAFE',
        colorText: '#1E3A8A',
      },
      {
        stepOrTag: 'ABAD KE-17 & KE-18',
        headingBm: 'Revolusi Perindustrian di Britain & Eropah',
        headingZh: '17至18世纪：英国与欧洲爆发工业革命',
        itemsBm: [
          'Kilang mengeluarkan barangan secara besar-besaran (mass production)',
          'Memerlukan bahan mentah berterusan & kawasan pasaran baharu yang luas',
        ],
        itemsZh: [
          '机器取代手工大规模生产工业制品',
          '迫切需要稳定的原料供应地与广阔的海外倾销市场',
        ],
        colorBg: '#E0E7FF',
        colorText: '#312E81',
      },
      {
        stepOrTag: 'ABAD KE-19 & KE-20',
        headingBm: 'Kereta, Mengetin, Terusan Suez 1869, Kapal Wap & Telegraf',
        headingZh: '19至20世纪：汽车橡胶、罐头锡米、苏伊士运河与殖民口号',
        itemsBm: [
          'Industri kereta (getah asli untuk tayar & penebat elektrik) & industri mengetin (bijih timah)',
          'Terusan Suez (1869), kapal wap & ciptaan telegraf mempercepat penjajahan',
          'Slogan "Beban Orang Putih" (British/Belanda) & "Tugas Menyebarkan Tamadun" (Perancis)',
        ],
        itemsZh: [
          '汽车轮胎急需天然橡胶，美国食品罐头业急需锡米',
          '1869年苏伊士运河、蒸汽船与电报大幅缩短航程与指令时间',
          '高喊「白人的负担」与「传播文明的使命」合理化侵略',
        ],
        colorBg: '#FEF3C7',
        colorText: '#78350F',
      },
    ],
  },
  diag_1_4_strategi_barat: {
    badge: 'RAJAH BUKU TEKS 1.4',
    titleBm: 'Perbandingan 3 Strategi Belanda vs 7 Strategi Licik British',
    titleZh: '荷兰 3 大扩张策略 vs 英国 7 大软硬兼施策略对照图',
    themeBg: '#FDF2F8',
    themeBorder: '#EC4899',
    themeAccent: '#BE185D',
    cards: [
      {
        stepOrTag: 'BELANDA (3 STRATEGI)',
        headingBm: 'Serangan Fizikal · Perjanjian · Pakatan',
        headingZh: '荷兰三大手段：武力攻击、条约、结盟',
        itemsBm: [
          'Serangan Fizikal: Pulau Pangkor (1650), Kuala Perak (1651), Selangor & Johor',
          'Perjanjian: Perak (1650) & Selangor (1786) bagi memonopoli bijih timah',
          'Pakatan: Bersama Johor kalahkan Portugis (1641) & bersama British (1824)',
        ],
        itemsZh: [
          '武力进攻：攻打邦咯岛、霹雳河口、雪兰莪与柔佛',
          '签订条约：逼霹雳与雪兰莪签署垄断锡米条约',
          '政治结盟：1641联手柔佛击败葡萄牙；1824与英国瓜分势力',
        ],
        colorBg: '#FCE7F3',
        colorText: '#831843',
      },
      {
        stepOrTag: 'BRITISH (7 STRATEGI)',
        headingBm: 'Manipulasi · Tipu Helah · Pakatan · Ugutan · Perjanjian · Pajakan · Serangan',
        headingZh: '英国七大手段：操纵内乱、欺骗、结盟、恐吓、条约、租借、武力',
        itemsBm: [
          'Tipu Helah: Francis Light menduduki Pulau Pinang (1786)',
          'Manipulasi: Singapura (1819), Perak, Selangor & Negeri Sembilan (1874)',
          'Ugutan/Desakan: Selangor & Pahang (kes Goh Hui 1888), James Brooke di Sarawak',
          'Pajakan: Sabah (SBUB) | Serangan Fizikal: Naning (1831–1832) & Terengganu',
        ],
        itemsZh: [
          '欺骗：莱特骗取槟城（1786）',
          '操纵内乱：莱佛士操纵柔佛王位（1819）及霹雪森内乱（1874）',
          '恐吓施压：雪兰莪海盗案、彭亨吴辉命案（1888）、砂拉越炮舰威胁',
          '租借特许：沙巴 SBUB ｜ 武力进攻：攻打南宁 Dol Said（1831–1832）',
        ],
        colorBg: '#EFF6FF',
        colorText: '#1E3A8A',
      },
    ],
  },
  diag_2_2_perjanjian_london: {
    badge: 'PETA KONSEP BUKU TEKS 2.2',
    titleBm: 'Perjanjian London 1824 (Perjanjian Inggeris-Belanda) & Pembahagian Alam Melayu',
    titleZh: '1824年《伦敦条约》马六甲海峡分割线与柔佛廖内帝国分裂图',
    themeBg: '#EFF6FF',
    themeBorder: '#2563EB',
    themeAccent: '#1E40AF',
    cards: [
      {
        stepOrTag: 'ZON PENGARUH BRITISH (UTARA SELAT)',
        headingBm: 'Tanah Melayu, Pulau Pinang, Melaka & Singapura',
        headingZh: '英国势力范围（马六甲海峡以北）：马来半岛与新加坡',
        itemsBm: [
          'Belanda menyerahkan Melaka kepada British & mengiktiraf Singapura milik British',
          'Belanda berjanji tidak membuka petempatan baharu di Tanah Melayu',
          'Tanah Besar Johor (Temenggung Ibrahim) & Pahang (Bendahara Tun Ali) bebas dari Riau',
        ],
        itemsZh: [
          '荷兰把马六甲交给英国，并正式承认英国占领新加坡',
          '荷兰承诺不在马来半岛开辟任何新据点',
          '柔佛大陆与彭亨脱离廖内苏丹统治，昔日柔佛廖内大帝国一分为二',
        ],
        colorBg: '#DBEAFE',
        colorText: '#1E3A8A',
      },
      {
        stepOrTag: 'ZON PENGARUH BELANDA (SELATAN SELAT)',
        headingBm: 'Sumatera, Bangkahulu & Kepulauan Riau Lingga',
        headingZh: '荷兰势力范围（新加坡海峡以南）：苏门答腊与廖内林加群岛',
        itemsBm: [
          'British berundur dari Sumatera & menyerahkan Bangkahulu (Bencoolen) kepada Belanda',
          'British tidak membuka petempatan atau membuat perjanjian di Kepulauan Riau Lingga',
          'Kepulauan Riau Lingga (Sultan Abdul Rahman) jatuh ke bawah pengaruh Belanda',
        ],
        itemsZh: [
          '英国撤出苏门答腊，并将明古连（Bangkahulu）移交给荷兰',
          '英国承诺不在廖内林加群岛设据点或签条约',
          '廖内林加群岛（苏丹阿都拉曼）沦入荷兰殖民势力范围',
        ],
        colorBg: '#FFEDD5',
        colorText: '#7C2D12',
      },
    ],
  },
  diag_2_4_pentadbiran_nns: {
    badge: 'RAJAH BUKU TEKS 2.4',
    titleBm: 'Evolusi Pentadbiran Negeri-negeri Selat (1826 → 1 April 1867)',
    titleZh: '海峡殖民地（槟城、新加坡、马六甲）行政管辖权演变图',
    themeBg: '#F0F9FF',
    themeBorder: '#0284C7',
    themeAccent: '#0369A1',
    cards: [
      {
        stepOrTag: '1826 – 1867 (DI BAWAH INDIA)',
        headingBm: 'SHTI (1826–1857) & Pejabat India / India Office (1858–1867)',
        headingZh: '早期由印度东印度公司与印度事务部遥距管辖',
        itemsBm: [
          '1832: Ibu negeri NNS dipindahkan dari Pulau Pinang ke Singapura',
          'Kelemahan: Tiada wakil NNS, gagal kawal lanun & kongsi gelap',
          'Bantahan pedagang: Isu mata wang Rupee, cadangan cukai pelabuhan & tempat banduan!',
        ],
        itemsZh: [
          '1832年首府从槟城迁往地理位置更优越的新加坡',
          '弊端：立法议会无本地代表，无法平定海盗与私会党械斗',
          '商人愤怒抗议：企图用印度卢比取代西班牙银元、征港口税及流放囚犯',
        ],
        colorBg: '#E0F2FE',
        colorText: '#0C4A6E',
      },
      {
        stepOrTag: 'MULAI 1 APRIL 1867 (LONDON)',
        headingBm: 'Tanah Jajahan Mahkota British (Pejabat Tanah Jajahan London)',
        headingZh: '1867年4月1日起直属伦敦殖民地部（皇家殖民地 Crown Colony）',
        itemsBm: [
          'Diketuai oleh Gabenor Negeri-negeri Selat',
          'Dibantu oleh Majlis Eksekutif (mengurus pentadbiran)',
          'Dibantu oleh Majlis Perundangan (menggubal undang-undang NNS sendiri!)',
        ],
        itemsZh: [
          '由海峡殖民地总督（Gabenor NNS）统领',
          '下设行政议会（Majlis Eksekutif）负责日常行政',
          '下设立法议会（Majlis Perundangan）自行制定符合海峡商贸利益的法律',
        ],
        colorBg: '#DCFCE7',
        colorText: '#14532D',
      },
    ],
  },
  diag_3_2_sistem_residen: {
    badge: 'RAJAH BUKU TEKS 3.2',
    titleBm: '4 Negeri Sistem Residen: Strategi Campur Tangan & Residen Pertama',
    titleZh: '四大马来州属接受英国参政司制度（Sistem Residen）总表图',
    themeBg: '#FFF7ED',
    themeBorder: '#EA580C',
    themeAccent: '#C2410C',
    cards: [
      {
        stepOrTag: 'PERAK (1874) & SELANGOR (1874)',
        headingBm: 'J.W.W. Birch (Perak) & J.G. Davidson (Selangor)',
        headingZh: '霹雳（毕治 Birch）与雪兰莪（戴维森 Davidson）',
        itemsBm: [
          'Perak: Perang Larut (Ghee Hin vs Hai San) + Perebutan Takhta → Perjanjian Pangkor 1874',
          'Selangor: Perang Klang (Raja Abdullah/Tengku Kudin vs Raja Mahadi) + Rompakan Kuala Langat & Rumah Api Tanjung Rachado',
        ],
        itemsZh: [
          '霹雳：拉律战争＋王位争夺 → 1874年 HMS Pluto 军舰签署《邦咯条约》',
          '雪兰莪：巴生战争＋瓜拉冷岳商船劫案与丹绒拉查多灯塔袭击案',
        ],
        colorBg: '#FFEDD5',
        colorText: '#7C2D12',
      },
      {
        stepOrTag: 'N. SEMBILAN (1874–1895) & PAHANG (1888)',
        headingBm: 'Martin Lister (N. Sembilan) & J.P. Rodger (Pahang)',
        headingZh: '森美兰（马丁·李斯特）与彭亨（罗杰 Rodger）',
        itemsBm: [
          "N. Sembilan: Dato' Kelana vs Dato' Syahbandar di Sg. Linggi (P.J. Murray di Sg. Ujong 1874 → Martin Lister seluruh N.S. 1895)",
          'Pahang: Kematian lelaki Cina berkerakyatan British bernama Goh Hui di Pekan (1888)',
        ],
        itemsZh: [
          '森美兰：双溪芙蓉宁宜河征税权之争，逐步吞并至1895年全州统一设参政司',
          '彭亨：1888年英籍华人吴辉（Goh Hui）在北根王宫附近遇刺成为借口',
        ],
        colorBg: '#FEF3C7',
        colorText: '#78350F',
      },
    ],
  },
  diag_3_4_nnmb_durbar: {
    badge: 'RAJAH BUKU TEKS 3.3 & 3.4',
    titleBm: 'Struktur Pentadbiran NNMB (1896), Durbar (1897/1903) & MMP (1909)',
    titleZh: '马来联邦（NNMB）集权架构、统治者会议（Durbar）与联邦议会演变',
    themeBg: '#FEF2F2',
    themeBorder: '#EF4444',
    themeAccent: '#B91C1C',
    cards: [
      {
        stepOrTag: 'NNMB 1896 (PUSAT: KUALA LUMPUR)',
        headingBm: 'Pesuruhjaya Tinggi British → Residen Jeneral (Frank Swettenham)',
        headingZh: '最高专员 → 总参政司瑞天咸坐镇吉隆坡总揽大权',
        itemsBm: [
          '4 Negeri: Perak, Selangor, Negeri Sembilan & Pahang (Bendera Putih-Merah-Kuning-Hitam)',
          'Kuasa Sultan & Majlis Mesyuarat Negeri diambil alih oleh Residen Jeneral',
        ],
        itemsZh: [
          '四州合并（白红黄黑四色旗），富裕的霹雪补贴负债的彭亨',
          '各州苏丹与州议会实权被总参政司（Residen Jeneral）架空',
        ],
        colorBg: '#FEE2E2',
        colorText: '#7F1D1D',
      },
      {
        stepOrTag: 'DURBAR (1897 & 1903) → MMP (1909)',
        headingBm: 'Kritikan Berani Sultan Idris Perak & Penubuhan MMP 1909',
        headingZh: '霹雳苏丹依德利斯痛批集权 vs 1909联邦议会换汤不换药',
        itemsBm: [
          'Durbar 1897 (Kuala Kangsar) & Durbar 1903 (KL): Sultan Idris tuntut kuasa Raja, pegawai Melayu & Bahasa Melayu bahasa rasmi',
          'MMP 1909: Jawatan Residen Jeneral diganti Ketua Setiausaha, tetapi kuasa berpusat pada Pesuruhjaya Tinggi British!',
        ],
        itemsZh: [
          '1903吉隆坡 Durbar：苏丹依德利斯严词要求归还君权、重用巫裔官员及恢复马来文官方地位',
          '1909联邦议会：总参政司改称政务司长，但大权集中在英国最高专员手中，苏丹仅沦为普通议员',
        ],
        colorBg: '#FEF9C3',
        colorText: '#713F12',
      },
    ],
  },
  diag_4_2_perjanjian_bangkok: {
    badge: 'RAJAH BUKU TEKS 4.2',
    titleBm: 'Rentetan Perjanjian British–Siam ke Arah Perjanjian Bangkok 1909',
    titleZh: '英暹秘密交易时间线与1909年《曼谷条约》北方四州移交图',
    themeBg: '#F5F3FF',
    themeBorder: '#8B5CF6',
    themeAccent: '#6D28D9',
    cards: [
      {
        stepOrTag: 'ANCAMAN KUASA BARAT LAIN',
        headingBm: 'Mengapa British Cemas Mahu Menguasai NNMU?',
        headingZh: '英国为何急于控制北方马来四州？阻止列强插足！',
        itemsBm: [
          'Perancis: Merancang membina terusan melintasi Segenting Kra',
          'Jerman: Berusaha mendapatkan Pulau Langkawi | Rusia: Ujung Salang | Amerika: Terengganu',
        ],
        itemsZh: [
          '法国：企图开凿克拉地峡运河威胁新加坡港口地位',
          '德国：觊觎浮罗交怡 ｜ 俄国：觊觎普吉岛 Ujung Salang ｜ 美国：觊觎登嘉楼棉兰岛',
        ],
        colorBg: '#EDE9FE',
        colorText: '#4C1D95',
      },
      {
        stepOrTag: 'KRONOLOGI 1826 → 10 MAC 1909',
        headingBm: 'Burney (1826) → Sulit (1897) → Pengisytiharan (1902) → Bangkok (1909)',
        headingZh: '四步蚕食直达1909年《曼谷条约》正式移交四州',
        itemsBm: [
          'Siam menyerahkan Perlis, Kedah, Kelantan & Terengganu kepada British tanpa rundingan Raja Melayu',
          'British menyerahkan Hak Wilayah Asingan di Siam kembali kepada kerajaan Siam',
        ],
        itemsZh: [
          '暹罗未经马来统治者同意，将玻璃市、吉打、吉兰丹、登嘉楼移交英国',
          '交换条件：英国放弃在暹罗享有的治外法权（Hak Wilayah Asingan）',
        ],
        colorBg: '#DBEAFE',
        colorText: '#1E3A8A',
      },
    ],
  },
  diag_4_4_nnmtb_vs_nnmb: {
    badge: 'RAJAH BUKU TEKS 4.4',
    titleBm: 'Perbandingan Pentadbiran NNMB (4 Negeri) vs NNMTB (5 Negeri)',
    titleZh: '马来联邦（NNMB）与马来属邦（NNMTB）核心制度终极对比',
    themeBg: '#ECFDF5',
    themeBorder: '#059669',
    themeAccent: '#047857',
    cards: [
      {
        stepOrTag: 'NNMTB (5 NEGERI BERASINGAN)',
        headingBm: 'Perlis, Kedah, Kelantan, Terengganu & Johor',
        headingZh: '五大独立州属（非中央集权联邦），保留深厚马来主权色彩',
        itemsBm: [
          'Menerima Penasihat British (Meadow Frost, W.G. Maxwell, J.S. Mason, J.L. Humphreys, Douglas Campbell)',
          'Bahasa Melayu & tulisan Jawi bahasa rasmi, cuti Jumaat, elit Melayu mentadbir bersama Majlis Mesyuarat Negeri',
        ],
        itemsZh: [
          '接受英国顾问官（Penasihat British），但苏丹与州议会保有比 NNMB 更大的实权',
          '官方语文维持马来文与爪夷文、周五公休、大批马来精英担任州政府要职',
        ],
        colorBg: '#D1FAE5',
        colorText: '#064E3B',
      },
      {
        stepOrTag: 'BEZA UTAMA DENGAN NNMB',
        headingBm: 'Pentadbiran Longgar vs Persekutuan Berpusat di Kuala Lumpur',
        headingZh: '松散独立州属 vs 吉隆坡高度中央集权',
        itemsBm: [
          'NNMTB tiada pusat pentadbiran bersama & tiada Residen Jeneral',
          'Undang-Undang Tubuh Johor (1895) & Terengganu (1911) memperkukuh kedaulatan Raja Berperlembagaan',
        ],
        itemsZh: [
          'NNMTB 没有共同首都，也不受总参政司统辖',
          '柔佛1895成文宪法与登嘉楼1911成文宪法成为捍卫君主立宪主权的坚实盾牌',
        ],
        colorBg: '#FEF3C7',
        colorText: '#78350F',
      },
    ],
  },
  diag_5_2_brooke_sarawak: {
    badge: 'PETA KRONOLOGI BUKU TEKS 5.2',
    titleBm: '4 Strategi James Brooke & Peluasan Wilayah Dinasti Brooke (1841–1905)',
    titleZh: '布洛克王朝四大夺权手段与砂拉越领土六阶段向北扩张图',
    themeBg: '#FFFBEB',
    themeBorder: '#D97706',
    themeAccent: '#B45309',
    cards: [
      {
        stepOrTag: '4 STRATEGI JAMES BROOKE',
        headingBm: 'Rundingan → Ugutan → Perjanjian (1841 & 1842) → Ketenteraan',
        headingZh: '谈判 → 炮舰恐吓 → 1841/1842条约 → HMS Dido 海军镇压',
        itemsBm: [
          'Pangeran Raja Muda Hashim minta bantuan Brooke tamatkan kebangkitan Datu Patinggi Ali',
          'Kapal perang Royalist mengugut Kuching → Sultan Omar Ali Saifuddien II iktiraf Brooke (1842)',
        ],
        itemsZh: [
          '哈希姆王储请布洛克平定拿督巴丁宜阿里反抗因德拉玛哥打暴政的起义',
          '布洛克调动 Royalist 炮口对准古晋逼签条约，1842获汶莱苏丹承认为砂拉越白人拉惹',
        ],
        colorBg: '#FEF3C7',
        colorText: '#78350F',
      },
      {
        stepOrTag: 'PELUASAN WILAYAH (1841–1905)',
        headingBm: 'Dari Tanjung Datu–Samarahan Sehingga Lawas (5 Bahagian)',
        headingZh: '从古晋一路鲸吞汶莱领土直至1905年老越（Lawas）定型',
        itemsBm: [
          '1841: Kuching (Tg. Datu–Sg. Samarahan) → 1853: Batang Lupar & Saribas → 1861: Sg. Rajang (sagu)',
          '1883: Baram → 1885: Trusan → 1890: Limbang → 1905: Lawas (sempadan Sarawak kekal hingga kini!)',
        ],
        itemsZh: [
          '1841古晋 → 1853峇当鲁巴与砂里ibas → 1861拉让江硕莪产区',
          '1883峇南 → 1885特鲁山 → 1890林梦 → 1905向 SBUB 购入老越，奠定今日砂拉越版图',
        ],
        colorBg: '#DCFCE7',
        colorText: '#14532D',
      },
    ],
  },
  diag_5_3_sbub_sabah: {
    badge: 'RAJAH BUKU TEKS 5.3 & 5.4',
    titleBm: 'Pertapakan SBUB di Sabah (Piagam Diraja 1881) & Hierarki Pentadbiran',
    titleZh: '沙巴英属北婆罗洲渣打公司（SBUB）成立经过与五大皇家特许条件',
    themeBg: '#EFF6FF',
    themeBorder: '#0284C7',
    themeAccent: '#0369A1',
    cards: [
      {
        stepOrTag: 'KRONOLOGI PAJAKAN (1865–1881)',
        headingBm: 'Moses (1865) → Torrey/Harris → Overbeck & Dent (1877/1878) → SBUB (1881)',
        headingZh: '从美国人租借到奥弗贝克与登特兄弟取得汶莱及苏禄苏丹特许权',
        itemsBm: [
          'Kekayaan sarang burung, sagu, rotan, getah perca, tembakau & teluk pelabuhan strategik',
          'Kerajaan British menganugerahkan Piagam Diraja (Royal Charter) pada tahun 1881 (Gabenor pertama: W.H. Treacher)',
        ],
        itemsZh: [
          '燕窝、硕莪、藤、古塔胶、烟草与天然深水良港吸引西方财团',
          '1881年英政府颁发皇家特许状（Piagam Diraja），首任总督特里彻（W.H. Treacher）',
        ],
        colorBg: '#E0F2FE',
        colorText: '#0C4A6E',
      },
      {
        stepOrTag: '5 SYARAT PIAGAM DIRAJA 1881',
        headingBm: 'Syarat Wajib Kerajaan British Kepada SBUB',
        headingZh: '必背考题：英国政府对 SBUB 设下的五大皇家特许条件',
        itemsBm: [
          '1. Menerima Penasihat British | 2. Memelihara adat resam, agama & undang-undang tempatan',
          '3. Memerintah dengan adil | 4. Lantik Pegawai Tadbir diakui British | 5. Dilarang serah Sabah kepada pihak lain tanpa izin British!',
        ],
        itemsZh: [
          '1. 接受英国顾问 ｜ 2. 尊重并保护原住民习俗、宗教与法律',
          '3. 公正统治 ｜ 4. 官员须经英国批准 ｜ 5. 未经英国同意严禁将沙巴转让他人！',
        ],
        colorBg: '#FEF9C3',
        colorText: '#713F12',
      },
    ],
  },
  diag_6_2_bijih_getah: {
    badge: 'RAJAH BUKU TEKS 6.1 & 6.2',
    titleBm: 'Teknologi Ekonomi Moden, Perundangan Tanah & Sistem Buruh Luar',
    titleZh: '采锡铁船与人字形割胶技术、三大地区土地法令与华印劳工制度',
    themeBg: '#F0FDF4',
    themeBorder: '#16A34A',
    themeAccent: '#15803D',
    cards: [
      {
        stepOrTag: 'TEKNOLOGI LOMBONG & GETAH',
        headingBm: 'Kapal Korek (1912) & Torehan Sistem Ibedem H.N. Ridley',
        headingZh: '1912年华都牙也首艘采锡铁船 vs 莱特利鱼骨形（人字形）割胶法',
        itemsBm: [
          'Bijih Timah: Kapal korek pertama oleh Malayan Tin Dredging di Batu Gajah, Perak (1912)',
          'Getah: H.N. Ridley memperkenalkan Sistem Ibedem (Tulang Ikan Hering) yang memanjangkan hayat pokok getah',
          'Petroleum: The Anglo-Saxon Petroleum Company di Miri, Sarawak (telaga Grand Old Lady 1910)',
        ],
        itemsZh: [
          '锡矿：1912年霹雳华都牙也启用第一艘巨型采锡铁船，西方资本反超华商',
          '橡胶：莱特利发明鱼骨形（Sistem Ibedem）割胶法不伤树皮，带动橡胶园狂潮',
          '石油：1910年砂拉越美里钻出第一口油井「老妇人号」（Grand Old Lady）',
        ],
        colorBg: '#DCFCE7',
        colorText: '#14532D',
      },
      {
        stepOrTag: 'TANAH & TENAGA BURUH',
        headingBm: 'Undang-undang Tanah & Sistem Kontrak (Cina) vs Sistem Kangani (India)',
        headingZh: '三大土地法令 vs 华人契约工（猪仔制）与印裔工头制（Kangani）',
        itemsBm: [
          'Tanah: Akta Tanah Simpanan Melayu (1913), Land Order (1931) & Land Settlement Order (1933) Sarawak, Proklamasi III Perlindungan Hak Peribumi (1889) Sabah',
          'Buruh: Sistem Kontrak (buruh Cina di lombong bijih timah) & Sistem Kangani (buruh India di estet getah)',
        ],
        itemsZh: [
          '土地法：1913马来保留地法令、砂拉越1931/1933土地令、沙巴1889第三号原住民权益保护令',
          '劳工制：华人经契约制（Sistem Kontrak）入锡矿；印裔经工头制（Sistem Kangani）入胶园',
        ],
        colorBg: '#FEF3C7',
        colorText: '#78350F',
      },
    ],
  },
  diag_6_4_masyarakat_pendidikan: {
    badge: 'RAJAH BUKU TEKS 6.3 & 6.4',
    titleBm: 'Landasan Kereta Api Awal & Sistem Pendidikan Vernakular (4 Aliran)',
    titleZh: '早期铁路港口网络与四大源流学校（巫、华、淡、英）分化图',
    themeBg: '#FDF4FF',
    themeBorder: '#A855F7',
    themeAccent: '#7E22CE',
    cards: [
      {
        stepOrTag: 'PENGANGKUTAN & KESIHATAN',
        headingBm: 'Kereta Api Pertama Taiping–Port Weld (1885) & Institut Penyelidikan Perubatan (1900)',
        headingZh: '1885年太平至砵威首条运锡铁路与现代医院防疫机构',
        itemsBm: [
          '1885: Taiping–Port Weld | 1886: KL–Port Swettenham | 1891: Seremban–Port Dickson | Sabah: Bukau–Weston (1896)',
          'Kesihatan: Hospital Taiping & KL (1878), IMR Kuala Lumpur (1900), Hospital Tung Shin & Sanitary Board',
        ],
        itemsZh: [
          '铁路首阶段专为把内陆锡矿运往沿海港口而建；沙巴首条铁路为 Bukau 至 Weston',
          '医疗：1878太平与吉隆坡政府医院、1900吉隆坡医学研究院（IMR）与吉隆坡同善医院',
        ],
        colorBg: '#F3E8FF',
        colorText: '#581C87',
      },
      {
        stepOrTag: 'PENDIDIKAN VERNAKULAR & MASYARAKAT MAJMUK',
        headingBm: 'Sekolah Melayu (SITC & MCKK), Cina, Tamil & Inggeris',
        headingZh: '四大源流学校各自采用不同母语课程，阻碍国民团结',
        itemsBm: [
          'Melayu: SITC Tanjung Malim (1922) lahirkan guru/nasionalis; MCKK Kuala Kangsar (1905) khusus anak bangsawan',
          'Cina: Guru/buku dari China → dikawal melalui Enakmen Pendaftaran Sekolah 1920 | Tamil: Di estet getah | Inggeris: Di bandar (Penang Free School 1816)',
        ],
        itemsZh: [
          '马来教育：SITC 培养师资与民族觉醒知识分子，MCKK 专训马来贵族子弟任公务员',
          '华校：教材师资源自中国（1920学校注册法令管制）｜ 淡校设于胶园 ｜ 英校设于城市',
        ],
        colorBg: '#DBEAFE',
        colorText: '#1E3A8A',
      },
    ],
  },
  diag_7_1_peta_pahlawan: {
    badge: 'PETA PERJUANGAN BUKU TEKS 7.1',
    titleBm: 'Peta Induk 10 Tokoh Pahlawan Tempatan Menentang Kuasa Barat',
    titleZh: '全马 10 大本土抗英民族英雄分布、口号与核心战役总览图',
    themeBg: '#FEF2F2',
    themeBorder: '#DC2626',
    themeAccent: '#991B1B',
    cards: [
      {
        stepOrTag: 'TANAH MELAYU (6 TOKOH)',
        headingBm: "Dol Said · Dato' Maharaja Lela · Yamtuan Antah · Dato' Bahaman · Tok Janggut · Hj. Abdul Rahman Limbong",
        headingZh: '马来半岛六大抗英领袖：从南宁战争到登嘉楼法庭抗辩',
        itemsBm: [
          "Naning: Dol Said (ufti 1/10, 1831–1832) | Perak: Dato' Maharaja Lela (Pasir Salak bunuh Birch 1875)",
          "N. Sembilan: Yamtuan Antah (Terachi/Paroi 1875) | Pahang: Dato' Bahaman, Tok Gajah & Mat Kilau (Lubuk Terua & Jeram Ampai)",
          'Kelantan: Tok Janggut (Pasir Puteh 1915) | Terengganu: Hj. Abdul Rahman Limbong ("Tanah ialah hak Allah", 1922–1928)',
        ],
        itemsZh: [
          '南宁：Dol Said 拒缴十分一税 ｜ 霹雳：Dato Maharaja Lela 在巴西沙叻刺杀毕治',
          '森美兰：Yamtuan Antah 保卫 Terachi ｜ 彭亨：Dato Bahaman 攻打 Lubuk Terua 警局与 Jeram Ampai',
          '吉兰丹：Tok Janggut 抗新税壮烈牺牲 ｜ 登嘉楼：Limbong 出任律师以「土地属真主」为农民辩护',
        ],
        colorBg: '#FEE2E2',
        colorText: '#7F1D1D',
      },
      {
        stepOrTag: 'SARAWAK & SABAH (4 TOKOH)',
        headingBm: 'Rentap · Sharif Masahor (Sarawak) | Mat Salleh · Antenom (Sabah)',
        headingZh: '砂拉越与沙巴四大抗殖英雄：武吉沙ok炮台与地下堡垒',
        itemsBm: [
          'Rentap ("Agi Idup Agi Ngelaban"): Kubu Bukit Sadok & meriam Bujang Timpang Berang (1853–1861)',
          'Sharif Masahor & Datu Patinggi Abdul Gapur: Serang Kubu Kanowit (1859)',
          'Mat Salleh: Bakar Pulau Gaya, Perjanjian Menggatal & Kubu Teboh Tambunan (1900) | Antenom: Kubu bawah tanah Sg. Selangit Rundum (1915)',
        ],
        itemsZh: [
          'Rentap（「一息尚存战斗到底」）：坚守武吉沙督堡垒与大炮 Bujang Timpang Berang',
          'Sharif Masahor 与 Abdul Gapur：攻打加拿逸堡垒反抗布洛克夺取拉让江税权',
          'Mat Salleh：火烧加雅岛与担布南保卫战 ｜ Antenom：姆律族地下堡垒与舍己救族大义',
        ],
        colorBg: '#FFEDD5',
        colorText: '#7C2D12',
      },
    ],
  },
  diag_8_2_perlembagaan_askar: {
    badge: 'RAJAH BUKU TEKS 8.2, 8.3 & 8.4',
    titleBm: 'Kebijaksanaan Raja & Pembesar: Perlembagaan Bertulis, Pemodenan & Askar Melayu 1933',
    titleZh: '马来君主与大臣智慧结晶：两大成文宪法、万穆罕默德沙曼运河与1933马来军团',
    themeBg: '#FFFBEB',
    themeBorder: '#D97706',
    themeAccent: '#92400E',
    cards: [
      {
        stepOrTag: '2 PERLEMBAGAAN BERTULIS',
        headingBm: 'Undang-Undang Tubuh Johor (1895) & Undang-Undang Bagi Diri Terengganu (1911)',
        headingZh: '柔佛（1895）与登嘉楼（1911）两大成文宪法严禁割让国土',
        itemsBm: [
          'Johor (Sultan Abu Bakar, 1895): Raja Melayu Islam, Raja & Menteri DILARANG menyerahkan negeri kepada kuasa asing!',
          'Terengganu (Sultan Zainal Abidin III, 1911): Itqan al-muluk bi ta’dil al-suluk — melambatkan Penasihat British sehingga 1919!',
        ],
        itemsZh: [
          '柔佛1895宪法（苏丹阿布峇卡）：明文严禁君主与内阁大臣把柔佛割让予任何外国势力',
          '登嘉楼1911宪法（苏丹再纳阿比丁三世）：确立君主立宪，成功推迟英国顾问官至1919年',
        ],
        colorBg: '#FEF3C7',
        colorText: '#78350F',
      },
      {
        stepOrTag: 'PEMODENAN & PERTAHANAN (1933)',
        headingBm: 'Terusan Wan Muhammad Saman (36 km) & Rejimen Askar Melayu (1 Mac 1933)',
        headingZh: '36公里吉打稻米运河、柔佛现代城市测绘与1933马来军团诞生',
        itemsBm: [
          "Kedah: Wan Muhammad Saman bina terusan 36 km (Jelapang Padi) | Johor: Dato' Salleh Perang lukis peta lengkap Johor, Dato' Jaafar & Dato' Abdul Rahman Andak",
          '1 Mac 1933: Kompeni Percubaan Askar Melayu (25 pemuda) di Haig Lines, Port Dickson hasil desakan Raja Chulan & Raja-raja Melayu!',
        ],
        itemsZh: [
          '吉打首相开凿36公里运河成就「马来西亚米仓」；柔佛沙礼北랑绘制首幅爪夷文柔佛地图',
          '1933年3月1日：在 Raja Chulan 等极力争取下，波德申成立首支25人马来实验连（马来皇家军团前身）！',
        ],
        colorBg: '#DCFCE7',
        colorText: '#14532D',
      },
    ],
  },
};

export const TextbookSvgAtlas: React.FC<Props> = ({
  diagramKey,
  showChineseHelper = true,
}) => {
  const info = DIAGRAM_DATA[diagramKey];
  if (!info) return null;

  return (
    <div
      style={{
        background: info.themeBg,
        border: `2px solid ${info.themeBorder}`,
        borderRadius: '16px',
        padding: '18px',
        margin: '16px 0',
        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.05)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            background: info.themeAccent,
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '11px',
            padding: '4px 10px',
            borderRadius: '999px',
            letterSpacing: '0.04em',
          }}
        >
          📊 {info.badge}
        </span>
        <div>
          <div style={{ fontWeight: 900, fontSize: '16px', color: '#0F172A' }}>
            {info.titleBm}
          </div>
          {showChineseHelper && (
            <div style={{ fontSize: '13px', color: '#475569', fontWeight: 600 }}>
              {info.titleZh}
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '12px',
        }}
      >
        {info.cards.map((card, idx) => (
          <div
            key={idx}
            style={{
              background: '#FFFFFF',
              border: `1.5px solid ${info.themeBorder}`,
              borderRadius: '12px',
              padding: '14px',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                background: card.colorBg,
                color: card.colorText,
                fontWeight: 800,
                fontSize: '11px',
                padding: '3px 8px',
                borderRadius: '6px',
                marginBottom: '6px',
              }}
            >
              {card.stepOrTag}
            </div>
            <div style={{ fontWeight: 800, fontSize: '15px', color: '#0F172A' }}>
              {card.headingBm}
            </div>
            {showChineseHelper && (
              <div
                style={{
                  fontSize: '12.5px',
                  color: '#64748B',
                  marginBottom: '8px',
                  fontWeight: 600,
                }}
              >
                {card.headingZh}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
              {card.itemsBm.map((bmLine, lineIdx) => (
                <div
                  key={lineIdx}
                  style={{
                    background: '#F8FAFC',
                    borderLeft: `3.5px solid ${info.themeBorder}`,
                    padding: '7px 10px',
                    borderRadius: '0 8px 8px 0',
                  }}
                >
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0F172A' }}>
                    {bmLine}
                  </div>
                  {showChineseHelper && card.itemsZh[lineIdx] && (
                    <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                      🇨🇳 {card.itemsZh[lineIdx]}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

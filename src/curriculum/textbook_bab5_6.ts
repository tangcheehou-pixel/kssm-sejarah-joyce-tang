import { OfficialSubtopic } from '../types/textbook';

export const TEXTBOOK_BAB_5_6: OfficialSubtopic[] = [
  // ============================================================================
  // BAB 5.1 — Latar Belakang Pemerintahan Tempatan di Sarawak dan Sabah
  // ============================================================================
  {
    subtopicCode: '5.1',
    babNumber: 5,
    babTitleBm: 'Pentadbiran Barat di Sarawak dan Sabah',
    babTitleZh: '西方势力在砂拉越与沙巴的行政管理',
    skCode: '7.5',
    spCodes: ['7.5.1', 'K7.5.5'],
    titleBm: 'Latar Belakang Pemerintahan Tempatan di Sarawak dan Sabah',
    titleZh: '砂拉越与沙巴当地统治制度的背景',
    heroImages: [
      {
        imageKey: 'bab5_sarawak_sabah',
        captionBm:
          'Gambaran kehidupan masyarakat peribumi di rumah panjang pedalaman dan perkampungan pesisir pantai Sarawak serta Sabah sebelum perluasan kuasa Barat.',
        captionZh:
          '西方势力扩张前，砂拉越与沙巴内陆长屋原住民社群及沿海聚落的传统社会与统治风貌。',
        hotspots: [
          {
            x: 18,
            y: 66,
            termBm: 'Sistem Kesukuan di Pedalaman',
            meaningZh: '内陆部族首长制度',
            detailBm:
              'Diamalkan oleh masyarakat Iban (**Tuai Rumah**), Bidayuh (**Tua Kapung**), Kenyah (**Peran Lepo**), Kayan (**Kelunan Maren**), Kadazandusun dan Murut (**Orang Tua**) berasaskan **adat resam**.',
            detailZh:
              '由伊班族（Tuai Rumah）、比达友族（Tua Kapung）、肯雅族、加央族、卡达山杜顺族及姆律族（Orang Tua）依各自习俗法实行的基层自治制度。',
          },
          {
            x: 43,
            y: 72,
            termBm: 'Lembangan Sungai & Pembesar Tempatan',
            meaningZh: '河流域与当地贵族大臣',
            detailBm:
              'Di lembangan sungai Sarawak, pentadbiran dijalankan oleh pembesar tempatan bergelar **Datu Patinggi**, **Datu Bandar**, dan **Datu Temenggung** sebagai wakil **Kesultanan Brunei**.',
            detailZh:
              '在砂拉越主要河流域，由受封 Datu Patinggi、Datu Bandar 及 Datu Temenggung 衔头的当地马来大臣代表文莱苏丹国治理。',
          },
          {
            x: 75,
            y: 63,
            termBm: 'Sistem Kesultanan di Pesisir Pantai',
            meaningZh: '沿海苏丹王朝统治制度',
            detailBm:
              'Pantai Barat Sabah dikuasai oleh **Kesultanan Brunei** (melalui **Pangeran**), manakala Pantai Timur Sabah dikuasai oleh **Kesultanan Sulu** (melalui golongan **Datu**).',
            detailZh:
              '沙巴西海岸归属文莱苏丹国（透过 Pangeran 管辖），东海岸则受苏禄苏丹国控制（由 Datu 贵族按随从与奴隶人数划分势力）。',
          },
          {
            x: 72,
            y: 26,
            termBm: 'Kawasan Pedalaman & Sistem Ketua Bebas',
            meaningZh: '山脉内陆与独立首领制度',
            detailBm:
              'Di kawasan Sabah yang lemah kawalan Kesultanan Brunei dan Sulu, muncul **Ketua Bebas** berani seperti **Syarif Osman** di Marudu dan **Datu Kurunding** di Tungku.',
            detailZh:
              '在文莱与苏禄苏丹控制力薄弱的沙巴地区，崛起了拥有王室血统、自设法律与追随者的独立首领，如马鲁都的 Syarif Osman 与东古的 Datu Kurunding。',
          },
        ],
      },
      {
        imageKey: 'bab5_sabah_kinabalu_port',
        captionBm:
          'Perdagangan maritim tradisional dan petempatan pesisir pantai di Sabah yang menghubungkan masyarakat pedalaman dengan pedagang luar.',
        captionZh:
          '沙巴沿海聚落与传统海上贸易景象，将内陆原住民社群与外来商船紧密相连。',
      },
    ],
    sections: [
      {
        sectionCode: '5.1(a)',
        headingBm: 'Sistem Pemerintahan Tempatan di Sarawak',
        headingZh: '砂拉越的当地传统统治制度',
        leadParagraphBm:
          'Sebelum kedatangan kuasa Barat, masyarakat di **Sarawak** telah mempunyai sistem pemerintahan yang teratur dan terbahagi kepada dua bentuk utama, iaitu **Sistem Kesukuan** di kawasan pedalaman serta **Sistem Pentadbiran Tempatan** yang dipengaruhi oleh **Kesultanan Brunei** di kawasan lembangan sungai.',
        leadParagraphZh:
          '在西方势力到来之前，砂拉越社会早已拥有井然有序的政治组织，主要分为两大形态：内陆原住民实行的“部族制度”（Sistem Kesukuan），以及河流域受文莱苏丹国影响的“地方行政制度”（Sistem Pentadbiran Tempatan）。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Sistem Kesukuan** diamalkan oleh masyarakat peribumi mengikut suku kaum masing-masing dengan memberikan penekanan utama kepada kepatuhan terhadap **adat resam**.',
            zh: '【部族制度】由各原住民族群按部落推行，核心原则是严格遵守各族世代相传的传统习俗（adat resam）。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Pemilihan pemimpin dalam **Sistem Kesukuan** bukan sekadar faktor keturunan semata-mata, malah mengutamakan **kebolehan peribadi**, kepahlawanan, dan pengetahuan mendalam tentang adat.',
            zh: '在部族制度中，首领的遴选不仅看血统出身，更重视个人才能、武勇威望以及对部族习俗法的精通程度，首领负责调解纠纷与维护长屋和谐。',
          },
          {
            tag: 'CONTOH',
            bm: 'Gelaran ketua mengikut kaum di Sarawak ialah **Tuai Rumah** (kaum **Iban**), **Tua Kapung** (kaum **Bidayuh**), **Peran Lepo** (kaum **Kenyah**), **Kelunan Maren** (kaum **Kayan**), dan **Menteri** (kaum **Melanau**).',
            zh: '砂拉越各族首领的官方课本专属称谓必须熟记：伊班族称 Tuai Rumah（长屋屋长）、比达友族称 Tua Kapung、肯雅族称 Peran Lepo、加央族称 Kelunan Maren、马兰诺族则称 Menteri。',
          },
          {
            tag: 'FAKTA',
            bm: '**Sistem Pentadbiran Tempatan** di kawasan lembangan sungai Sarawak pula menerima pengaruh langsung daripada **Kesultanan Brunei** yang membahagikan pentadbiran kepada **Sungai Kerajaan**, **Sungai Tulin**, dan **Sungai Kuripan**.',
            zh: '【河流域地方行政制度】砂拉越主要河口与流域受文莱苏丹国管辖，行政上划分为苏丹直辖河（Sungai Kerajaan）、世袭私产河（Sungai Tulin）及官职封地河（Sungai Kuripan）。',
          },
          {
            tag: 'CONTOH',
            bm: 'Kawasan di **Sungai Sarawak** ditadbir oleh pembesar Melayu tempatan yang dikurniakan gelaran **Datu Patinggi**, **Datu Bandar**, dan **Datu Temenggung** (seperti tokoh **Datu Patinggi Ali**) bagi mewakili Sultan Brunei memungut cukai tanpa campur tangan langsung pada peringkat awal.',
            zh: '砂拉越河（Sungai Sarawak）流域最初由受封 Datu Patinggi、Datu Bandar 及 Datu Temenggung 官衔的当地马来贵族（如著名领袖 Datu Patinggi Ali）代表文莱苏丹征税与治理。',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Selain pembesar tempatan bergelar **Datu**, kawasan strategik tertentu turut ditadbir secara langsung oleh wakil kerabat Sultan Brunei yang bergelar **Pangeran**, contohnya **Pangeran Indera Mahkota** yang dihantar ke Kuching.',
            zh: '⚠️ 考官常考对比：除了当地马来领袖（Datu 阶层），文莱苏丹后来也直接派遣王室代表（Pangeran 阶层，如 Pangeran Indera Mahkota）前往古晋掌权，这正是引发 5.2 节砂拉越动乱的导火线！',
          },
        ],
      },
      {
        sectionCode: '5.1(b)',
        headingBm: 'Sistem Pemerintahan Tempatan di Sabah',
        headingZh: '沙巴的当地传统统治制度',
        leadParagraphBm:
          'Masyarakat tempatan di **Sabah** pula mengamalkan tiga bentuk pemerintahan yang disesuaikan dengan keadaan geografi dan pegangan sosiobudaya setempat, iaitu **Sistem Kesukuan**, **Sistem Kesultanan**, dan **Sistem Ketua Bebas**.',
        leadParagraphZh:
          '沙巴当地社群则依据地理环境与社会结构，发展出三大传统统治体系：内陆的“部族制度”（Sistem Kesukuan）、东西海岸的“苏丹王朝制度”（Sistem Kesultanan），以及边缘地区的“独立首领制度”（Sistem Ketua Bebas）。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Sistem Kesukuan** menjadi pegangan utama masyarakat peribumi di kawasan pedalaman Sabah seperti kaum **Kadazandusun**, **Murut**, dan **Bajau** dengan **adat** sebagai alat kawalan sosial yang paling berkesan.',
            zh: '【部族制度】流行于沙巴内陆与部分沿海原住民族群，包括卡达山杜顺族（Kadazandusun）、姆律族（Murut）及巴瑶族（Bajau），传统习俗法是维系社会秩序的最高准则。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Pentadbiran kampung dalam Sistem Kesukuan di Sabah diketuai oleh **Orang Tua (Ketua Kampung)** yang dibantu oleh **Majlis Kampung** (mengurus pentadbiran harian) serta **Tukang-tukang Adat**.',
            zh: '沙巴部族制度由“长老/村长”（Orang Tua / Ketua Kampung）领导，并由两大机构辅佐：“乡村议会”（Majlis Kampung，管理村务）与“习俗祭司”（Tukang-tukang Adat）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Tukang-tukang Adat** seperti **Bobohizan / Bobolian** (dalam masyarakat Kadazandusun) memastikan setiap upacara adat dijalankan dengan betul bagi mengelakkan bencana alam atau wabak penyakit, manakala masyarakat **Bajau** di pantai timur mempunyai pemimpin adat bergelar **Matto’a**.',
            zh: '例如卡达山杜顺族的祭司 Bobohizan / Bobolian 负责确保传统祭祀仪式准确无误，以免招致天灾瘟疫；而东海岸巴瑶族社群则推举称为 Matto’a 的领袖来守护族人利益与习俗。',
          },
          {
            tag: 'FAKTA',
            bm: '**Sistem Kesultanan** di kawasan pesisir pantai Sabah terbahagi kepada dua kuasa besar, iaitu **Kesultanan Brunei** yang menguasai **Pantai Barat Sabah** dan **Kesultanan Sulu** yang menguasai **Pantai Timur Sabah**.',
            zh: '【苏丹王朝制度】沙巴沿海地带分为两大势力范围：西海岸归属“文莱苏丹国”（Kesultanan Brunei），东海岸则受“苏禄苏丹国”（Kesultanan Sulu）统治。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Di **Kesultanan Brunei**, kuasa Sultan bergantung pada penguasaan tanah dan sungai yang ditadbir melalui wakil **Pangeran**, manakala di **Kesultanan Sulu**, kuasa sebenar terletak pada golongan **Datu** yang diukur mengikut jumlah **hamba (pengikut)** yang dimiliki serta kemampuan menghantar ufti kepada Sultan.',
            zh: '文莱苏丹的权力建立在对土地与河流的控制上（派驻 Pangeran 管辖）；而苏禄苏丹国的实际地方权力掌握在贵族 Datu 手中，Datu 的地位高低取决于其拥有的奴隶与追随者人数！',
          },
          {
            tag: 'CONTOH',
            bm: '**Sistem Ketua Bebas** muncul di kawasan muara sungai yang lemah kuasa kawalan Sultan Brunei dan Sultan Sulu, dipimpin oleh tokoh berani berketurunan kerabat diraja seperti **Syarif Osman** di daerah **Marudu** dan **Datu Kurunding** di daerah **Tungku** yang menegakkan undang-undang serta memungut cukai sendiri.',
            zh: '【独立首领制度】在文莱与苏禄苏丹鞭长莫及的地区，崛起了具有王室血统、骁勇善战的独立首领，课本必背两大代表人物是：马鲁都（Marudu）的 Syarif Osman，以及东古（Tungku）的 Datu Kurunding！',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Kewujudan sistem pemerintahan tempatan yang mantap membuktikan bahawa Sarawak dan Sabah **bukanlah wilayah tanpa pentadbiran** sebelum kedatangan kuasa Barat (`K7.5.5`: sikap siap siaga dan muafakat mempertahankan kedaulatan tanah air).',
            zh: '⚠️ 核心公民价值观（K7.5.5）：砂拉越与沙巴在西方殖民者到来前早已具备完整的行政与司法体系，绝非西方借口宣称的“无主荒蛮之地”，国民应团结一致守护国家主权。',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Perbandingan Sistem Pemerintahan Tempatan di Sarawak dan Sabah Sebelum Kedatangan Kuasa Barat',
        titleZh: '西方势力到来前砂拉越与沙巴当地传统统治制度对比表',
        headers: [
          { bm: 'Aspek Pemerintahan', zh: '统治层面' },
          { bm: 'Sarawak', zh: '砂拉越 (Sarawak)' },
          { bm: 'Sabah', zh: '沙巴 (Sabah)' },
        ],
        rows: [
          [
            { bm: '**Sistem Kesukuan (Pedalaman)**', zh: '内陆部族制度' },
            {
              bm: 'Diketuai mengikut kaum: Iban (**Tuai Rumah**), Bidayuh (**Tua Kapung**), Kenyah (**Peran Lepo**), Kayan (**Kelunan Maren**), Melanau (**Menteri**).',
              zh: '按族群设首领：伊班族 (Tuai Rumah)、比达友族 (Tua Kapung)、肯雅族 (Peran Lepo)、加央族 (Kelunan Maren)、马兰诺族 (Menteri)。',
            },
            {
              bm: 'Diamalkan oleh Kadazandusun, Murut, Bajau; diketuai **Orang Tua (Ketua Kampung)** dibantu **Majlis Kampung** dan **Tukang-tukang Adat (Bobohizan/Bobolian)** serta **Matto’a**.',
              zh: '由卡达山杜顺、姆律、巴瑶族实行；由村长 (Orang Tua) 领导，并获乡村议会 (Majlis Kampung)、祭司 (Bobohizan/Bobolian) 及 Matto’a 协助。',
            },
          ],
          [
            { bm: '**Sistem Kesultanan / Pembesar**', zh: '苏丹王朝与贵族制度' },
            {
              bm: 'Lembangan sungai di bawah pengaruh **Kesultanan Brunei**; ditadbir oleh pembesar tempatan (**Datu Patinggi**, **Datu Bandar**, **Datu Temenggung**) atau wakil Brunei (**Pangeran**).',
              zh: '河流域受文莱苏丹国影响；由当地贵族大臣（Datu Patinggi、Datu Bandar、Datu Temenggung）或文莱王室代表（Pangeran）治理。',
            },
            {
              bm: '**Pantai Barat** dikuasai **Kesultanan Brunei** (wakil **Pangeran**); **Pantai Timur** dikuasai **Kesultanan Sulu** (golongan **Datu** berasaskan bilangan pengikut/hamba).',
              zh: '西海岸受文莱苏丹国管辖（派驻 Pangeran）；东海岸归苏禄苏丹国统治（由贵族 Datu 依追随者与奴隶人数掌权）。',
            },
          ],
          [
            { bm: '**Sistem Ketua Bebas**', zh: '独立首领制度' },
            {
              bm: 'Tiada kategori khusus Ketua Bebas seperti di Sabah (pentadbiran tertumpu kepada ketua suku dan pembesar sungai).',
              zh: '无沙巴式的独立首领分类（权力集中于内陆部族首领与河口马来大臣）。',
            },
            {
              bm: 'Wujud di kawasan yang lemah kawalan Brunei & Sulu; dipimpin oleh **Syarif Osman** (Marudu) dan **Datu Kurunding** (Tungku).',
              zh: '出现于文莱与苏禄控制薄弱地区；著名首领包括马鲁都的 Syarif Osman 与东古的 Datu Kurunding。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Tuai Rumah Gading',
        roleBm: 'Ketua Rumah Panjang Iban di Pedalaman Sarawak',
        roleZh: '砂拉越内陆伊班族长屋屋长',
        emoji: '🛡️',
        lineBm:
          'Di rumah panjang kami, **adat resam** ialah tiang seri keamanan! Sebagai **Tuai Rumah**, saya menyelesaikan pertikaian anak buah secara muafakat supaya tiada siapa melanggar pantang larang.',
        lineZh:
          '在我们的长屋里，传统习俗就是和平的顶梁柱！身为屋长（Tuai Rumah），我靠协商公正解决族人纠纷，谁也不能触犯祖宗禁忌！',
      },
      {
        speakerBm: 'Datu Patinggi Ali',
        roleBm: 'Pembesar Melayu Tempatan di Sungai Sarawak',
        roleZh: '砂拉越河流域当地马来贵族领袖',
        emoji: '⚔️',
        lineBm:
          'Kami bergelar **Datu Patinggi**, **Datu Bandar**, dan **Datu Temenggung** telah lama mentadbir lembangan **Sungai Sarawak** dengan aman mewakili **Kesultanan Brunei**!',
        lineZh:
          '我们受封 Datu Patinggi、Datu Bandar 和 Datu Temenggung 官衔，世代代表文莱苏丹国把砂拉越河流域治理得井井有条！',
      },
      {
        speakerBm: 'Orang Tua Sompong',
        roleBm: 'Ketua Kampung Kadazandusun di Pedalaman Sabah',
        roleZh: '沙巴内陆卡达山杜顺族村长',
        emoji: '🌾',
        lineBm:
          'Di Sabah pula, saya mentadbir kampung bersama **Majlis Kampung**, manakala **Bobohizan** sebagai **Tukang Adat** memastikan upacara adat dipatuhi agar kampung dijauhi malapetaka!',
        lineZh:
          '在沙巴，我和乡村议会（Majlis Kampung）一起管理村务，而祭司 Bobohizan 则确保每场传统仪式准确进行，保佑村子风调雨顺、远离灾祸！',
      },
      {
        speakerBm: 'Syarif Osman',
        roleBm: 'Ketua Bebas di Daerah Marudu, Sabah',
        roleZh: '沙巴马鲁都独立首领',
        emoji: '⛵',
        lineBm:
          'Di **Teluk Marudu**, kuasa Brunei dan Sulu tidak sampai ke sini. Saya dan sahabat seperjuangan seperti **Datu Kurunding** di **Tungku** menegakkan undang-undang dan mengutip cukai di wilayah kami sendiri!',
        lineZh:
          '在马鲁都湾，文莱和苏禄苏丹管不到这儿！我和东古（Tungku）的战友 Datu Kurunding 凭实力自立门户，在自己的地盘制定法律、征收税务！',
      },
    ],
    memoryHackBm:
      'Formula Ketua Suku Sarawak **"I-Tuai, Bi-Tua, Ke-Peran, Ka-Maren, Me-Menteri"** + Sabah **3K**: **Kesukuan** (Orang Tua + Majlis Kampung + Tukang Adat), **Kesultanan** (Barat = Brunei, Timur = Sulu), **Ketua Bebas** (**Syarif Osman** Marudu & **Datu Kurunding** Tungku)!',
    memoryHackZh:
      '🧠 王牌秒记口诀：【砂拉越五族首领】伊班住长屋叫 Tuai Rumah、比达友叫 Tua Kapung、肯雅演戏（Peran Lepo）、加央玛伦（Kelunan Maren）、马兰诺当部长（Menteri）！【沙巴西文东苏 + 双侠】西海岸归文莱（西文）、东海岸归苏禄（东苏）；独立首领记住“马鲁都奥斯曼（Syarif Osman），东古古伦丁（Datu Kurunding）”！',
    subtopicMcqs: [
      {
        id: '5.1-mcq-1',
        spCode: '7.5.1',
        questionBm:
          'Apakah gelaran ketua bagi masyarakat **Kenyah** dalam **Sistem Kesukuan** di Sarawak?',
        questionZh: '在砂拉越的部族制度中，肯雅族（Kenyah）的首领称为什么？',
        options: [
          { id: 'A', textBm: '**Tuai Rumah**', textZh: 'Tuai Rumah（伊班族长屋屋长）' },
          { id: 'B', textBm: '**Tua Kapung**', textZh: 'Tua Kapung（比达友族村长）' },
          { id: 'C', textBm: '**Peran Lepo**', textZh: 'Peran Lepo（肯雅族首领）' },
          { id: 'D', textBm: '**Kelunan Maren**', textZh: 'Kelunan Maren（加央族首领）' },
        ],
        correctId: 'C',
        explanationBm:
          'Dalam Sistem Kesukuan di Sarawak, ketua masyarakat **Kenyah** digelar **Peran Lepo**, manakala **Tuai Rumah** ialah ketua Iban, **Tua Kapung** ketua Bidayuh, dan **Kelunan Maren** ketua Kayan.',
        explanationZh:
          '肯雅族（Kenyah）首领的官方称谓是 Peran Lepo；Tuai Rumah 属伊班族，Tua Kapung 属比达友族，Kelunan Maren 则属加央族。',
      },
      {
        id: '5.1-mcq-2',
        spCode: '7.5.1',
        questionBm:
          'Siapakah pembesar tempatan yang diberi tanggungjawab oleh **Kesultanan Brunei** untuk mentadbir kawasan di **Sungai Sarawak**?',
        questionZh: '文莱苏丹国委任哪些当地贵族大臣管理砂拉越河（Sungai Sarawak）地区？',
        options: [
          {
            id: 'A',
            textBm: '**Orang Kaya-Kaya** dan **Orang Tua**',
            textZh: 'Orang Kaya-Kaya 与 Orang Tua',
          },
          {
            id: 'B',
            textBm: '**Datu Patinggi**, **Datu Bandar**, dan **Datu Temenggung**',
            textZh: 'Datu Patinggi、Datu Bandar 与 Datu Temenggung',
          },
          {
            id: 'C',
            textBm: '**Syarif Osman** dan **Datu Kurunding**',
            textZh: 'Syarif Osman 与 Datu Kurunding',
          },
          {
            id: 'D',
            textBm: '**Temenggung**, **Bendahara**, dan **Laksamana**',
            textZh: 'Temenggung、Bendahara 与 Laksamana',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Kawasan lembangan **Sungai Sarawak** ditadbir oleh pembesar Melayu tempatan yang memakai gelaran **Datu Patinggi**, **Datu Bandar**, dan **Datu Temenggung** bagi pihak Sultan Brunei.',
        explanationZh:
          '文莱苏丹授权当地马来贵族以 Datu Patinggi、Datu Bandar 及 Datu Temenggung 官衔治理砂拉越河流域。',
      },
      {
        id: '5.1-mcq-3',
        spCode: '7.5.1',
        questionBm:
          'Apakah peranan utama **Tukang-tukang Adat** seperti **Bobohizan / Bobolian** dalam pentadbiran masyarakat peribumi di Sabah?',
        questionZh: '在沙巴原住民的基层统治中，像 Bobohizan / Bobolian 这样的“习俗祭司”主要扮演什么角色？',
        options: [
          {
            id: 'A',
            textBm: 'Memungut cukai pelabuhan bagi pihak **Sultan Sulu**',
            textZh: '代表苏禄苏丹征收港口税',
          },
          {
            id: 'B',
            textBm: 'Memimpin angkatan tentera laut menentang lanun di pantai timur',
            textZh: '率领海军舰队在东海岸清剿海盗',
          },
          {
            id: 'C',
            textBm: 'Memastikan setiap upacara adat dilakukan dengan betul bagi mengelakkan malapetaka',
            textZh: '确保每项传统习俗仪式正确举行，以免招致灾祸与瘟疫',
          },
          {
            id: 'D',
            textBm: 'Menandatangani perjanjian pajakan tanah dengan pelabur Eropah',
            textZh: '与欧洲投资者签署土地租借条约',
          },
        ],
        correctId: 'C',
        explanationBm:
          '**Tukang-tukang Adat** (**Bobohizan / Bobolian**) membantu **Orang Tua** dengan memastikan setiap upacara adat dijalankan dengan betul mengikut aturan tradisi bagi mengelakkan bencana seperti wabak penyakit atau kerosakan tanaman.',
        explanationZh:
          'Bobohizan / Bobolian 等习俗祭司协助村长（Orang Tua），确保各项祭祀与习俗仪式严格依规举行，以防天灾或瘟疫降临村落。',
      },
      {
        id: '5.1-mcq-4',
        spCode: '7.5.1',
        questionBm:
          'Bagaimanakah kedudukan dan kuasa seseorang **Datu** ditentukan dalam sistem pemerintahan **Kesultanan Sulu** di Pantai Timur Sabah?',
        questionZh: '在沙巴东海岸的苏禄苏丹国统治体系中，一位贵族“Datu”的地位与权力是如何决定的？',
        options: [
          {
            id: 'A',
            textBm: 'Berasaskan bilangan **hamba (pengikut)** yang dimiliki dan kemampuan menghantar ufti',
            textZh: '取决于其拥有的奴隶（追随者）人数以及向苏丹进贡的能力',
          },
          {
            id: 'B',
            textBm: 'Melalui undian tahunan dalam kalangan ahli **Majlis Negeri**',
            textZh: '通过州议会成员的年度投票选举产生',
          },
          {
            id: 'C',
            textBm: 'Berdasarkan kelulusan peperiksaan perkhidmatan awam Barat',
            textZh: '依据西方文官制度考试的合格成绩',
          },
          {
            id: 'D',
            textBm: 'Mengikut keluasan ladang getah dan lombong antimoni yang diusahakan',
            textZh: '根据所经营的橡胶园与锑矿面积大小',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Di Pantai Timur Sabah di bawah pengaruh **Kesultanan Sulu**, kuasa sebenar golongan **Datu** bergantung pada jumlah **hamba (pengikut)** yang dimiliki serta keupayaan menghantar ufti tetap kepada Sultan Sulu.',
        explanationZh:
          '在苏禄苏丹国体制下，地方贵族 Datu 的实力直接取决于其麾下奴隶与追随者的数量，以及定期向苏禄苏丹进贡的能力。',
      },
      {
        id: '5.1-mcq-5',
        spCode: '7.5.1',
        questionBm:
          'Pasangan tokoh dan kawasan pentadbiran manakah yang **betul** mengenai **Sistem Ketua Bebas** di Sabah?',
        questionZh: '关于沙巴的“独立首领制度”（Sistem Ketua Bebas），下列哪项人物与管辖地区的配对是正确的？',
        options: [
          {
            id: 'A',
            textBm: '**Datu Patinggi Ali** — Kuching',
            textZh: 'Datu Patinggi Ali —— 古晋',
          },
          {
            id: 'B',
            textBm: '**Tuai Rumah** — Sandakan',
            textZh: 'Tuai Rumah —— 山打根 (Sandakan)',
          },
          {
            id: 'C',
            textBm: '**Pangeran Indera Mahkota** — Kimanis',
            textZh: 'Pangeran Indera Mahkota —— 金马利 (Kimanis)',
          },
          {
            id: 'D',
            textBm: '**Syarif Osman** — Marudu',
            textZh: 'Syarif Osman —— 马鲁都 (Marudu)',
          },
        ],
        correctId: 'D',
        explanationBm:
          'Dua tokoh **Ketua Bebas** yang terkenal di Sabah ialah **Syarif Osman** yang mentadbir daerah **Marudu** dan **Datu Kurunding** yang mentadbir daerah **Tungku**.',
        explanationZh:
          '沙巴最著名的两位独立首领是管辖马鲁都（Marudu）的 Syarif Osman，以及管辖东古（Tungku）的 Datu Kurunding。',
      },
    ],
    strukturQuestion: {
      id: '5.1-struktur',
      spCode: '7.5.1',
      stimulusBm:
        'Sebelum kedatangan kuasa Barat, masyarakat tempatan di Sarawak dan Sabah telah mempunyai sistem pemerintahan yang tersendiri seperti **Sistem Kesukuan**, **Sistem Kesultanan / Pentadbiran Tempatan**, dan **Sistem Ketua Bebas**.',
      stimulusZh:
        '在西方势力到来之前，砂拉越与沙巴当地社会早已拥有各自的传统统治制度，如部族制度、苏丹王朝/地方行政制度，以及独立首领制度。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Senaraikan **tiga** gelaran ketua suku kaum dalam **Sistem Kesukuan** di Sarawak.',
          questionZh: '列出砂拉越“部族制度”（Sistem Kesukuan）中的三个族群首领称谓。（3分）',
          expectedKeywordsBm: [
            'Tuai Rumah',
            'Tua Kapung',
            'Peran Lepo',
            'Kelunan Maren',
            'Menteri',
          ],
          modelAnswerBm:
            'Tiga gelaran ketua suku kaum di Sarawak ialah **Tuai Rumah** (kaum Iban), **Tua Kapung** (kaum Bidayuh), dan **Peran Lepo** (kaum Kenyah) [atau **Kelunan Maren** bagi kaum Kayan / **Menteri** bagi kaum Melanau].',
          modelAnswerZh:
            '砂拉越部族首领的三个称谓是：伊班族的 Tuai Rumah、比达友族的 Tua Kapung，以及肯雅族的 Peran Lepo（或加央族的 Kelunan Maren / 马兰诺族的 Menteri）。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Jelaskan struktur pentadbiran kampung di bawah **Sistem Kesukuan** di Sabah.',
          questionZh: '说明沙巴“部族制度”下的乡村行政管理结构。（3分）',
          expectedKeywordsBm: [
            'Orang Tua',
            'Ketua Kampung',
            'Majlis Kampung',
            'Tukang-tukang Adat',
            'Bobohizan',
            'adat',
          ],
          modelAnswerBm:
            'Pentadbiran kampung diketuai oleh seorang **Orang Tua (Ketua Kampung)** yang mahir tentang adat resam (**Fakta**). Beliau dibantu oleh **Majlis Kampung** dalam pengurusan hal ehwal pentadbiran kampung (**Huraian**), manakala **Tukang-tukang Adat** seperti **Bobohizan / Bobolian** memastikan upacara adat dijalankan dengan betul bagi mengelakkan malapetaka (**Contoh**).',
          modelAnswerZh:
            '乡村行政由精通习俗的村长 Orang Tua 领导（Fakta）。他在处理日常村务时获乡村议会 Majlis Kampung 协助（Huraian），而 Bobohizan / Bobolian 等习俗祭司 Tukang-tukang Adat 则确保传统祭祀仪式正确执行以防灾祸（Contoh）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Mengapakah kita perlu menghargai dan mempertahankan warisan kepimpinan masyarakat tempatan di negara kita? (`KBAT` — `K7.5.5`)',
          questionZh: '为什么我们必须珍惜并捍卫我国当地社会的传统领导遗产？（高思维 KBAT — 4分）',
          expectedKeywordsBm: [
            'kedaulatan',
            'perpaduan',
            'jati diri',
            'keharmonian',
            'muafakat',
            'penjajahan',
          ],
          modelAnswerBm:
            'Kita perlu menghargainya kerana sistem kepimpinan tempatan membuktikan negara kita telah mempunyai **pentadbiran yang teratur dan berdaulat** sebelum kedatangan Barat (**Fakta**). Amalan **muafakat** dan kepatuhan kepada undang-undang adat memupuk **keharmonian serta perpaduan masyarakat** (**Huraian**), contohnya kerjasama antara ketua kampung dengan anak buah dalam menyelesaikan pertikaian (**Contoh**). Kesannya, **jati diri bangsa** dapat diperkukuh agar kedaulatan negara tidak mudah dicerobohi kuasa asing (**Inferens**).',
          modelAnswerZh:
            '我们必须珍惜它，因为传统领导制度证明我国在西方到来前已拥有井然有序且具主权的行政体系（Fakta）。协商精神与遵守习俗法能促进社会和谐与团结（Huraian），例如村长与族人合作化解纠纷（Contoh）。由此可巩固民族认同感，确保国家主权不易遭外来势力侵犯（Inferens）。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 5.2 — Peluasan Kuasa Dinasti Brooke di Sarawak
  // ============================================================================
  {
    subtopicCode: '5.2',
    babNumber: 5,
    babTitleBm: 'Pentadbiran Barat di Sarawak dan Sabah',
    babTitleZh: '西方势力在砂拉越与沙巴的行政管理',
    skCode: '7.5',
    spCodes: ['7.5.2', 'K7.5.6'],
    titleBm: 'Peluasan Kuasa Dinasti Brooke di Sarawak',
    titleZh: '布洛克王朝在砂拉越的势力扩张',
    heroImages: [
      {
        imageKey: 'bab5_sarawak_astana_fort',
        captionBm:
          'Kubu pertahanan dan pusat pentadbiran Dinasti Brooke di tebing Sungai Sarawak, Kuching yang menjadi tapak pengukuhan kuasa Raja Putih Sarawak.',
        captionZh:
          '古晋砂拉越河畔的布洛克王朝防御堡垒与行政官邸（Astana），见证砂拉越“白人拉惹”巩固统治权的历史。',
        hotspots: [
          {
            x: 22,
            y: 31,
            termBm: 'Kubu Pertahanan Dinasti Brooke',
            meaningZh: '布洛克王朝军事堡垒',
            detailBm:
              'Kubu seperti **Fort Margherita** di Kuching dibina di lokasi strategik berbukit bagi mengawal laluan sungai dan mematahkan penentangan penduduk tempatan.',
            detailZh:
              '如古晋玛格丽特堡（Fort Margherita）建于河岸制高点，用以监控河道交通并镇压当地民众的反抗。',
          },
          {
            x: 82,
            y: 47,
            termBm: 'Astana Kuching (Kediaman Raja Putih)',
            meaningZh: '古晋王宫（白人拉惹官邸）',
            detailBm:
              'Pusat pemerintahan rasmi **Dinasti Brooke** (**James Brooke**, **Charles Brooke**, dan **Charles Vyner Brooke**) yang memerintah Sarawak dari tahun **1841 hingga 1946**.',
            detailZh:
              '布洛克王朝三代“白人拉惹”（詹姆士·布洛克、查尔斯·布洛克、查尔斯·维纳·布洛克，1841–1946）统治砂拉越的最高权力中心。',
          },
          {
            x: 43,
            y: 66,
            termBm: 'Sungai Sarawak (Kuching)',
            meaningZh: '砂拉越河（盛产锑矿与黄金）',
            detailBm:
              'Kawasan lembangan sungai yang kaya dengan **antimoni** dan **emas** sehingga menarik minat **Sultan Omar Ali Saifuddien II** dan pedagang British **James Brooke**.',
            detailZh:
              '富含锑矿（antimoni）与黄金（emas）的富庶河谷，吸引了文莱苏丹奥玛阿里赛夫丁二世与英国冒险家詹姆士·布洛克觊觎。',
          },
          {
            x: 18,
            y: 60,
            termBm: 'Kebangkitan Datu Patinggi Ali (1836)',
            meaningZh: '1836年拿督巴丁宜阿里起义',
            detailBm:
              'Pembesar Melayu dan orang Bidayuh bangkit menentang kezaliman **Pangeran Indera Mahkota** yang mengenakan **cukai tinggi** serta **kerahan tenaga tanpa upah**.',
            detailZh:
              '当地马来贵族与比达友族奋起反抗文莱代表 Pangeran Indera Mahkota 强征重税与无薪强迫劳役的暴政。',
          },
        ],
      },
      {
        imageKey: 'bab5_sarawak_sabah',
        captionBm:
          'Peluasan kuasa Dinasti Brooke secara berperingkat dari Tanjung Datu hingga merangkumi Lawas pada tahun 1905.',
        captionZh:
          '布洛克王朝从丹绒拿督（Tanjung Datu）起步，逐步蚕食文莱领土直至 1905 年并吞老越（Lawas）的扩张历程。',
      },
    ],
    sections: [
      {
        sectionCode: '5.2(a)',
        headingBm: 'Sarawak ketika Kehadiran James Brooke (1839–1841)',
        headingZh: '詹姆士·布洛克到来时的砂拉越政局（1839–1841年）',
        leadParagraphBm:
          'Pada awal abad ke-19, kawasan **Sungai Sarawak (Kuching)** berkembang sebagai pusat ekonomi yang amat penting kerana kekayaan hasil buminya, terutamanya **antimoni** dan **emas** serta hasil hutan seperti **sagu**.',
        leadParagraphZh:
          '19世纪初，砂拉越河流域（古晋）因盛产高价值的锑矿（antimoni）、黄金（emas）以及硕莪（sagu）等森林资源，崛起成为极重要的经济中心。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: 'Melihat kekayaan **antimoni** dan **emas** di Sarawak, **Sultan Omar Ali Saifuddien II** (Sultan Brunei) menghantar **Pangeran Indera Mahkota** pada tahun 1820-an untuk menguasai pentadbiran dan ekonomi Sarawak secara langsung.',
            zh: '眼见砂拉越的锑矿与黄金利润丰厚，文莱苏丹奥玛阿里赛夫丁二世派遣王室代表 Pangeran Indera Mahkota 前往砂拉越（设立行政中心于古晋），企图直接垄断当地政经大权。',
          },
          {
            tag: 'HURAIAN',
            bm: '**Pangeran Indera Mahkota** merampas kuasa pentadbiran dan perdagangan antimoni daripada pembesar Melayu tempatan, mengenakan **cukai yang tinggi**, serta menindas orang **Bidayuh** di lombong antimoni melalui **kerahan tenaga tanpa diberikan upah**.',
            zh: 'Pangeran Indera Mahkota 不仅夺走当地马来贵族的行政与矿产贸易权，还横征暴敛（征收重税），并强迫比达友族（Bidayuh）在锑矿场进行无薪苦役！',
          },
          {
            tag: 'CONTOH',
            bm: 'Penindasan ini mencetuskan kebangkitan pembesar dan penduduk tempatan yang dipimpin oleh **Datu Patinggi Ali** pada tahun **1836** bagi membebaskan Sarawak daripada cengkaman **Pangeran Indera Mahkota**.',
            zh: '残酷压迫引爆了 1836 年由当地马来领袖 Datu Patinggi Ali 领导的反抗起义，旨在推翻 Pangeran Indera Mahkota 的暴政。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Sultan Brunei menghantar bapa saudaranya, **Pangeran Raja Muda Hashim**, untuk menamatkan kebangkitan tersebut namun beliau gagal, lalu meminta bantuan bekas tentera SHTI, **James Brooke**, yang tiba di Sarawak dengan kapal layar ***Royalist*** pada tahun **1839**.',
            zh: '文莱苏丹派叔父 Pangeran Raja Muda Hashim 前去平乱却束手无策；恰逢英国前东印度公司军人詹姆士·布洛克（James Brooke）于 1839 年驾驶武装帆船 Royalist 号抵达古晋，Hashim 便向他求助，并许诺事成后将砂拉越统治权交给他。',
          },
        ],
      },
      {
        sectionCode: '5.2(b)',
        headingBm: 'Empat Strategi James Brooke Mendapatkan Kuasa Pemerintahan',
        headingZh: '詹姆士·布洛克夺取砂拉越统治权的四大策略',
        leadParagraphBm:
          'Bagi memastikan cita-citanya menjadi pemerintah Sarawak tercapai, **James Brooke** telah menggunakan **empat strategi licik** iaitu **rundingan**, **ugutan**, **perjanjian**, dan **ketenteraan**.',
        leadParagraphZh:
          '为了实现入主砂拉越的野心，詹姆士·布洛克交替施展了四大狡猾手段：谈判（Rundingan）、武力恐吓（Ugutan）、签署条约（Perjanjian）以及军事镇压（Ketenteraan）。',
        diagramKey: 'diag_5_2_brooke_sarawak',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Strategi 1 — Rundingan**: **James Brooke** berunding dengan **Pangeran Raja Muda Hashim** apabila diminta menyelesaikan kebangkitan penduduk tempatan dan ditawarkan jawatan pemerintah Sarawak sebanyak dua kali sebelum bersetuju.',
            zh: '【策略一：谈判】布洛克与 Pangeran Raja Muda Hashim 展开谈判，以平息 Datu Patinggi Ali 起义作为交换砂拉越统治权的条件。',
          },
          {
            tag: 'FAKTA',
            bm: '**Strategi 2 — Ugutan**: Apabila **Pangeran Raja Muda Hashim** cuba melengah-lengahkan penyerahan kuasa selepas kebangkitan tamat, **James Brooke** mengugut untuk membedil kediaman Hashim di Kuching menggunakan meriam kapal perang ***Royalist***!',
            zh: '【策略二：武力恐吓】起义平息后，Hashim 因顾虑文莱苏丹怪罪而拖延交权；布洛克立即把 Royalist 号大炮对准古晋王府发出炮轰威胁，逼使 Hashim 屈服！第二次恐吓则是 1842 年布洛克率英国海军军舰前往文莱面见苏丹施压。',
          },
          {
            tag: 'CONTOH',
            bm: '**Strategi 3 — Perjanjian (1841 & 1842)**: Melalui **Perjanjian 1841** dengan Pangeran Raja Muda Hashim, James Brooke memerintah Sarawak dan menguasai hasilnya; manakala melalui **Perjanjian 1842** dengan **Sultan Omar Ali Saifuddien II**, Sultan Brunei mengiktiraf James Brooke sebagai **Raja Putih Sarawak** dari **Tanjung Datu ke Sungai Samarahan** dengan bayaran ufti tahunan **2,500 dolar Sepanyol**.',
            zh: '【策略三：条约（1841 与 1842）】1841年条约迫使 Hashim 交出砂拉越政经大权；1842年条约则获文莱苏丹奥玛阿里赛夫丁二世正式承认为“砂拉越白人拉惹”，管辖丹绒拿督（Tanjung Datu）至三马拉汉河（Sungai Samarahan）地区，布洛克每年向苏丹缴纳 2,500 西班牙银元贡金，并承诺不干涉当地宗教与习俗。',
          },
          {
            tag: 'CONTOH',
            bm: '**Strategi 4 — Ketenteraan**: **James Brooke** memperoleh bantuan ketenteraan tentera laut British terutamanya kapal perang **HMS *Dido*** pimpinan **Kapten Henry Keppel** bagi memerangi ancaman **lanun** serta membedil kubu masyarakat Iban di **Sungai Saribas** dan **Sungai Skrang**.',
            zh: '【策略四：军事力量】布洛克借助英国皇家海军军舰 HMS Dido 号（由舰长 Henry Keppel 率领）的强大炮火，以“剿灭海盗、保护商船”为借口，进攻砂拉越萨里巴斯河（Saribas）与斯可让河（Skrang）的伊班族聚落。',
          },
        ],
      },
      {
        sectionCode: '5.2(c)',
        headingBm: 'Kronologi Pengukuhan dan Peluasan Kuasa Dinasti Brooke (1841–1905)',
        headingZh: '布洛克王朝巩固与扩张砂拉越领土编年史（1841–1905年）',
        leadParagraphBm:
          'Kuasa pemerintahan **Dinasti Brooke** diterajui oleh tiga orang Raja Putih iaitu **James Brooke** (1841–1868), anak saudaranya **Charles Brooke** (1868–1917), dan **Charles Vyner Brooke** (1917–1946) yang meluaskan wilayah Sarawak secara berperingkat daripada **Kesultanan Brunei** sehingga tahun **1905**.',
        leadParagraphZh:
          '布洛克王朝历经三代白人拉惹——詹姆士·布洛克、外甥查尔斯·布洛克及查尔斯·维纳·布洛克。他们从 1841 年至 1905 年间分阶段蚕食文莱苏丹国领土，最终奠定了今日砂拉越的版图边界！',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Tahun 1841 / 1842**: **James Brooke** memperoleh kawasan asal Sarawak dari **Tanjung Datu ke Sungai Samarahan** (merangkumi Kuching, Lundu, dan Bau).',
            zh: '【1841/1842年】詹姆士·布洛克取得砂拉越最初领地：从丹绒拿督（Tanjung Datu）延伸至三马拉汉河（Sungai Samarahan），涵盖古晋、伦乐与石隆门。',
          },
          {
            tag: 'CONTOH',
            bm: '**Tahun 1853**: Sultan Abdul Momin menyerahkan kawasan **Sadong, Batang Lupar, Saribas, dan Kalaka** kepada James Brooke selepas Brooke membantu menghapuskan kebangkitan peribumi, dengan pampasan **1,500 dolar Sepanyol** setahun.',
            zh: '【1853年】文莱苏丹阿都慕敏将沙隆（Sadong）、鲁巴河（Batang Lupar）、萨里巴斯（Saribas）及卡拉卡（Kalaka）割让予詹姆士·布洛克，每年获赔 1,500 西班牙银元。',
          },
          {
            tag: 'CONTOH',
            bm: '**Tahun 1861**: Sultan Abdul Momin menyerahkan kawasan **Sungai Rajang** (Oya, Mukah, Tatau, dan Bintulu — kawasan utama pengeluaran **sagu**) kepada James Brooke dengan bayaran **4,500 dolar Sepanyol** setahun.',
            zh: '【1861年】因盛产硕莪（sagu）贸易极其重要，布洛克以平乱为名取得拉让江流域（Sungai Rajang，含沐胶 Mukah、民都鲁 Bintulu 等硕莪重镇），每年支付苏丹 4,500 西班牙银元。',
          },
          {
            tag: 'CONTOH',
            bm: '**Tahun 1883 & Tahun 1885**: Di bawah pemerintahan **Charles Brooke**, lembangan **Sungai Baram** (termasuk Miri) diperoleh pada **1883** (bayaran 4,200 dolar Sepanyol setahun), diikuti kawasan **Sungai Trusan** pada **1885** (bayaran 4,500 dolar Sepanyol kepada Temenggung Brunei) ekoran isu pembunuhan peniaga Sarawak oleh orang Murut.',
            zh: '【1883年与1885年】第二代拉惹查尔斯·布洛克（Charles Brooke）借口砂拉越商人在当地遇害，先后于 1883 年吞并峇南河流域（Sungai Baram，含美里），并于 1885 年取得特鲁山河（Sungai Trusan）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Tahun 1890 & Tahun 1905**: Pada tahun **1890**, Charles Brooke menduduki **Limbang** apabila penduduk tempatan bangkit menentang kezaliman pemerintah Brunei (pampasan 6,000 dolar Sepanyol); dan pada **12 Januari 1905**, daerah **Lawas** dibeli daripada **Syarikat Borneo Utara British (SBUB)**, sekali gus **melengkapkan sempadan negeri Sarawak** sehingga hari ini!',
            zh: '【1890年与1905年】1890 年查尔斯·布洛克强占林梦（Limbang）；1905 年从沙巴英属北婆罗洲公司（SBUB）手中购入老越（Lawas），正式完成今日砂拉越州的全部边界版图！',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Kelemahan pentadbiran dan perpecahan dalaman membuka ruang kepada campur tangan orang asing (`K7.5.6`: kepentingan sikap berwaspada terhadap unsur luar yang boleh menggugat kedaulatan negara).',
            zh: '⚠️ 考试必考教训（K7.5.6）：内部纷争与引狼入室（轻信外来势力调停）会导致国家领土一步步丧失，国民必须时刻对外部干预保持高度警惕！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Ringkasan 4 Strategi James Brooke dan Kronologi Peluasan Wilayah Dinasti Brooke (1841–1905)',
        titleZh: '詹姆士·布洛克四大夺权策略与布洛克王朝扩张编年总表（1841–1905）',
        headers: [
          { bm: 'Strategi / Tahun', zh: '策略 / 年份' },
          { bm: 'Pihak / Wilayah Terlibat', zh: '涉及对象 / 扩张地区' },
          { bm: 'Huraian & Kesan Penting', zh: '关键经过与历史影响' },
        ],
        rows: [
          [
            { bm: '**Rundingan & Ugutan (1840–1841)**', zh: '谈判与武力恐吓 (1840–1841)' },
            { bm: '**Pangeran Raja Muda Hashim** di Kuching', zh: '古晋的 Pangeran Raja Muda Hashim' },
            {
              bm: 'James Brooke membantu menamatkan kebangkitan **Datu Patinggi Ali** lalu mengugut membedil Kuching dengan kapal ***Royalist*** sehingga termeterai **Perjanjian 1841**.',
              zh: '布洛克协助平息 Datu Patinggi Ali 起义后，以 Royalist 号炮轰相威胁，逼签《1841年条约》。',
            },
          ],
          [
            { bm: '**Perjanjian 1842 & Ketenteraan**', zh: '《1842年条约》与军事行动' },
            {
              bm: '**Sultan Omar Ali Saifuddien II** & Kapal **HMS *Dido***',
              zh: '文莱苏丹奥玛阿里赛夫丁二世与 HMS Dido 军舰',
            },
            {
              bm: 'Diiktiraf sebagai **Raja Putih Sarawak** (**Tanjung Datu ke Sungai Samarahan**) dengan ufti 2,500 dolar Sepanyol; **HMS *Dido*** (Kapten Henry Keppel) menyerang Saribas & Skrang.',
              zh: '获承认为白人拉惹（丹绒拿督至三马拉汉河），年缴 2,500 西班牙银元；借 HMS Dido 号进攻萨里巴斯与斯可让。',
            },
          ],
          [
            { bm: '**Tahun 1853 & 1861** (James Brooke)', zh: '1853年与1861年（詹姆士时期）' },
            {
              bm: '**1853**: Sadong, Batang Lupar, Saribas, Kalaka\n**1861**: **Sungai Rajang** (Oya, Mukah, Bintulu)',
              zh: '1853：沙隆、鲁巴河、萨里巴斯、卡拉卡\n1861：拉让江流域（沐胶、民都鲁）',
            },
            {
              bm: 'Diserahkan oleh **Sultan Abdul Momin**; penguasaan kawasan pengeluaran **sagu** utama di Mukah dan Oya mengukuhkan ekonomi Brooke.',
              zh: '由文莱苏丹阿都慕敏割让；掌控沐胶等核心硕莪（sagu）产区，大幅增强布洛克财政收入。',
            },
          ],
          [
            { bm: '**Tahun 1883, 1885, 1890 & 1905** (Charles Brooke)', zh: '1883、1885、1890及1905年（查尔斯时期）' },
            {
              bm: '**1883**: Sungai Baram | **1885**: Sungai Trusan\n**1890**: Limbang | **1905**: **Lawas**',
              zh: '1883：峇南河 | 1885：特鲁山河\n1890：林梦 | 1905：老越（Lawas）',
            },
            {
              bm: 'Perolehan **Lawas** daripada **SBUB** pada tahun **1905** melengkapkan sempadan negeri Sarawak yang kekal sehingga kini.',
              zh: '1905 年向沙巴 SBUB 购入老越（Lawas），正式完成延续至今的砂拉越完整州界！',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Datu Patinggi Ali',
        roleBm: 'Pemimpin Kebangkitan Masyarakat Tempatan Sarawak (1836)',
        roleZh: '1836年砂拉越当地反抗军领袖',
        emoji: '🔥',
        lineBm:
          '**Pangeran Indera Mahkota** merampas kuasa kami, mengenakan cukai melampau dan memaksa orang Bidayuh melombong **antimoni** tanpa upah! Kami bangkit menentang kezaliman ini!',
        lineZh:
          'Pangeran Indera Mahkota 夺走我们的权力、征收苛捐杂税，还强迫比达友族无薪开采锑矿！我们绝不向暴政低头！',
      },
      {
        speakerBm: 'Pangeran Raja Muda Hashim',
        roleBm: 'Bapa Saudara Sultan Brunei di Kuching',
        roleZh: '驻古晋的文莱苏丹叔父',
        emoji: '😰',
        lineBm:
          'Tuan **James Brooke**, tolonglah saya tamatkan kebangkitan ini! Jika berjaya, saya berjanji akan menyerahkan pemerintahan **Sarawak** kepada tuan!',
        lineZh:
          '詹姆士·布洛克先生，求求你帮我平息这场起义吧！如果成功，我答应把砂拉越的统治权交给你！',
      },
      {
        speakerBm: 'James Brooke',
        roleBm: 'Raja Putih Pertama Sarawak (Kapal Royalist)',
        roleZh: '砂拉越第一任白人拉惹（Royalist 号船主）',
        emoji: '🚢',
        lineBm:
          'Jangan cuba berdolak-dalik, Hashim! Meriam kapal ***Royalist*** saya sudah dihalakan ke istana tuan. Tandatangani **Perjanjian 1841** sekarang, dan seterusnya **Sultan Omar Ali Saifuddien II** akan mengiktiraf saya melalui **Perjanjian 1842**!',
        lineZh:
          '别想反悔拖延，Hashim！我的 Royalist 号大炮已经瞄准你的官邸了。马上签下《1841年条约》，接着我还要让文莱苏丹签《1842年条约》正式封我为白人拉惹！',
      },
      {
        speakerBm: 'Charles Brooke',
        roleBm: 'Raja Putih Kedua Sarawak (1868–1917)',
        roleZh: '砂拉越第二任白人拉惹（1868–1917）',
        emoji: '🗺️',
        lineBm:
          'Selepas bapa saudara saya memperoleh Rajang pada 1861, saya meluaskan lagi Sarawak ke **Baram (1883)**, **Trusan (1885)**, **Limbang (1890)**, dan akhirnya **Lawas (1905)** daripada SBUB!',
        lineZh:
          '继我舅舅在 1861 年拿下拉让江后，我继续把砂拉越版图扩张到峇南（1883）、特鲁山（1885）、林梦（1890），并在 1905 年从 SBUB 手中买下老越，大功告成！',
      },
    ],
    memoryHackBm:
      '4 Strategi Brooke = **"R.U.P.K."** (**Rundingan, Ugutan, Perjanjian, Ketenteraan**). Kronologi Wilayah Sarawak (1841–1905) = **"Sa-Ra-Ba-Tru-Lim-Law"**: **Sa**dong/Saribas (1853) -> **Ra**jang (1861) -> **Ba**ram (1883) -> **Tru**san (1885) -> **Lim**bang (1890) -> **Law**as (1905)!',
    memoryHackZh:
      '🧠 王牌秒记口诀：【布洛克夺权四招 R.U.P.K.】先礼后兵：Rundingan（谈）→ Ugutan（吓：Royalist 炮指古晋）→ Perjanjian（签：1841 Hashim、1842 苏丹）→ Ketenteraan（打：HMS Dido 军舰）！【领土扩张顺口溜】“五三沙鲁萨（1853）、六一拉让硕莪发（1861）、八三峇南（1883）、八五特鲁山（1885）、九零林梦（1890）、零五老越（1905 Lawas）封疆定天下”！',
    subtopicMcqs: [
      {
        id: '5.2-mcq-1',
        spCode: '7.5.2',
        questionBm:
          'Mengapakah masyarakat tempatan di bawah pimpinan **Datu Patinggi Ali** bangkit menentang **Pangeran Indera Mahkota** pada tahun 1836?',
        questionZh: '为什么当地民众在 Datu Patinggi Ali 领导下于 1836 年起义反抗 Pangeran Indera Mahkota？',
        options: [
          {
            id: 'A',
            textBm: 'Pengharaman tanaman lada hitam dan gambir di Kuching',
            textZh: '禁止在古晋种植黑胡椒与甘蜜',
          },
          {
            id: 'B',
            textBm: 'Rampasan kuasa pembesar tempatan, cukai tinggi, dan kerahan tenaga tanpa upah',
            textZh: '夺取当地贵族权力、征收重税以及强迫无薪劳役',
          },
          {
            id: 'C',
            textBm: 'Penyerahan daerah Lawas kepada Syarikat Borneo Utara British',
            textZh: '将老越地区割让给英属北婆罗洲渣打公司',
          },
          {
            id: 'D',
            textBm: 'Pengenalan Akta Tanah Simpanan Peribumi di lembangan sungai',
            textZh: '在河流域推行原住民保留地法令',
          },
        ],
        correctId: 'B',
        explanationBm:
          '**Pangeran Indera Mahkota** mengambil alih kuasa pentadbiran serta perdagangan antimoni dan emas daripada pembesar Melayu, mengenakan **cukai tinggi**, dan menindas orang Bidayuh melalui **kerahan tenaga tanpa upah**.',
        explanationZh:
          'Pangeran Indera Mahkota 剥夺马来贵族政经权力、征收重税，并强迫比达友族在锑矿无薪劳作，引发 1836 年 Datu Patinggi Ali 起义。',
      },
      {
        id: '5.2-mcq-2',
        spCode: '7.5.2',
        questionBm:
          'Apakah kandungan utama **Perjanjian 1842** antara **James Brooke** dengan **Sultan Omar Ali Saifuddien II**?',
        questionZh: '詹姆士·布洛克与文莱苏丹奥玛阿里赛夫丁二世签署的《1842年条约》主要内容是什么？',
        options: [
          {
            id: 'A',
            textBm: 'James Brooke memerintah Sarawak dari **Tanjung Datu ke Sungai Samarahan** dan membayar ufti tahunan **2,500 dolar Sepanyol**',
            textZh: '布洛克统治从丹绒拿督至三马拉汉河的砂拉越地区，并每年缴纳 2,500 西班牙银元贡金',
          },
          {
            id: 'B',
            textBm: 'James Brooke diberikan Piagam Diraja oleh kerajaan British di London',
            textZh: '布洛克获得伦敦英国政府颁发的皇家特许状',
          },
          {
            id: 'C',
            textBm: 'Seluruh Kesultanan Brunei diletakkan di bawah Sistem Residen British',
            textZh: '整个文莱苏丹国被置于英国参政司制度之下',
          },
          {
            id: 'D',
            textBm: 'Sungai Rajang dan Limbang diserahkan tanpa sebarang bayaran pampasan',
            textZh: '拉让江与林梦无偿割让给布洛克',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Melalui **Perjanjian 1842**, **Sultan Omar Ali Saifuddien II** mengiktiraf James Brooke sebagai Raja Putih Sarawak yang memerintah kawasan dari **Tanjung Datu ke Sungai Samarahan** dengan bayaran ufti **2,500 dolar Sepanyol** setahun.',
        explanationZh:
          '根据《1842年条约》，文莱苏丹正式承认詹姆士·布洛克统治丹绒拿督至三马拉汉河地带，布洛克则每年进贡 2,500 西班牙银元。',
      },
      {
        id: '5.2-mcq-3',
        spCode: '7.5.2',
        questionBm:
          'Kapal perang tentera laut British manakah yang membantu **James Brooke** memerangi ancaman lanun dan masyarakat tempatan di Saribas serta Skrang?',
        questionZh: '哪一艘英国皇家海军军舰协助詹姆士·布洛克攻打萨里巴斯（Saribas）与斯可让（Skrang）？',
        options: [
          { id: 'A', textBm: '**HMS *Malaya***', textZh: 'HMS Malaya 号' },
          { id: 'B', textBm: '**HMS *Repulse***', textZh: 'HMS Repulse 号' },
          { id: 'C', textBm: '**HMS *Dido***', textZh: 'HMS Dido 号' },
          { id: 'D', textBm: '**SS *Diana***', textZh: 'SS Diana 号' },
        ],
        correctId: 'C',
        explanationBm:
          'Dalam strategi **ketenteraan**, James Brooke mendapat bantuan kapal perang tentera laut British iaitu **HMS *Dido*** yang dipimpin oleh **Kapten Henry Keppel**.',
        explanationZh:
          '在军事策略中，詹姆士·布洛克获得由舰长 Henry Keppel 率领的英国皇家海军军舰 HMS Dido 号武力支援。',
      },
      {
        id: '5.2-mcq-4',
        spCode: '7.5.2',
        questionBm:
          'Mengapakah kawasan **Sungai Rajang** (termasuk Oya dan Mukah) yang diperoleh oleh James Brooke pada tahun **1861** amat penting dari segi ekonomi?',
        questionZh: '为什么詹姆士·布洛克于 1861 年取得的拉让江流域（含乌也与沐胶）在经济上极为重要？',
        options: [
          {
            id: 'A',
            textBm: 'Merupakan pusat pengeluaran **petroleum** terbesar di Asia Tenggara',
            textZh: '是东南亚最大的石油产区',
          },
          {
            id: 'B',
            textBm: 'Merupakan kawasan utama pengeluaran tanaman **sagu** untuk eksport',
            textZh: '是出口硕莪（sagu）的核心产区',
          },
          {
            id: 'C',
            textBm: 'Mempunyai ladang **kelapa sawit** komersial yang pertama',
            textZh: '拥有第一座商业油棕种植园',
          },
          {
            id: 'D',
            textBm: 'Menjadi pusat pengumpulan **sarang burung** bagi Kesultanan Sulu',
            textZh: '是苏禄苏丹国的燕窝集散中心',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Kawasan **Oya dan Mukah** di lembangan **Sungai Rajang** (diperoleh pada tahun **1861**) merupakan kawasan pengeluar **sagu** yang utama bagi perdagangan eksport Sarawak.',
        explanationZh:
          '1861 年并入的拉让江流域（特别是沐胶 Mukah 与乌也 Oya）是砂拉越最重要的硕莪（sagu）出口产地。',
      },
      {
        id: '5.2-mcq-5',
        spCode: '7.5.2',
        questionBm:
          'Apakah kesan penting pemerolehan daerah **Lawas** daripada **SBUB** oleh **Charles Brooke** pada tahun **1905**?',
        questionZh: '1905 年查尔斯·布洛克从 SBUB 手中取得老越（Lawas）带来了什么重要历史影响？',
        options: [
          {
            id: 'A',
            textBm: 'Menamatkan pemerintahan Kesultanan Sulu di Pantai Timur Sabah',
            textZh: '终结苏禄苏丹国在沙巴东海岸的统治',
          },
          {
            id: 'B',
            textBm: 'Menjadikan Lawas sebagai ibu negeri baharu menggantikan Kuching',
            textZh: '使老越取代古晋成为新首府',
          },
          {
            id: 'C',
            textBm: 'Memulakan pentadbiran tentera Jepun di Pulau Borneo',
            textZh: '开启日本在婆罗洲岛的军事统治',
          },
          {
            id: 'D',
            textBm: 'Melengkapkan sempadan wilayah negeri **Sarawak** yang kekal sehingga hari ini',
            textZh: '完成了延续至今的砂拉越州完整边界版图',
          },
        ],
        correctId: 'D',
        explanationBm:
          'Penyerahan **Lawas** oleh SBUB kepada **Charles Brooke** pada tahun **1905** merupakan peluasan wilayah terakhir Dinasti Brooke yang **melengkapkan sempadan negeri Sarawak** seperti yang wujud pada hari ini.',
        explanationZh:
          '1905 年查尔斯·布洛克取得老越（Lawas）是布洛克王朝最后一次领土扩张，正式确立了今日砂拉越州的完整边界。',
      },
    ],
    strukturQuestion: {
      id: '5.2-struktur',
      spCode: '7.5.2',
      stimulusBm:
        '**James Brooke** tiba di Sarawak pada tahun 1839 dengan kapal layar ***Royalist*** dan berjaya mengasaskan pemerintahan **Dinasti Brooke** melalui beberapa strategi sebelum wilayah Sarawak diluaskan sehingga tahun 1905.',
      stimulusZh:
        '詹姆士·布洛克于 1839 年乘 Royalist 号帆船抵达砂拉越，通过多种策略成功建立布洛克王朝，并持续扩张领土至 1905 年。',
      parts: [
        {
          partLabel: '(a)',
          marks: 2,
          questionBm:
            'Nyatakan **dua** hasil bumi utama di kawasan **Sungai Sarawak** yang menarik perhatian **Pangeran Indera Mahkota** dan **James Brooke**.',
          questionZh: '写出砂拉越河地区吸引 Pangeran Indera Mahkota 与詹姆士·布洛克的两种主要矿产资源。（2分）',
          expectedKeywordsBm: ['antimoni', 'emas'],
          modelAnswerBm:
            'Dua hasil bumi utama di Sungai Sarawak ialah **antimoni** dan **emas**.',
          modelAnswerZh: '砂拉越河地区的两种主要矿产资源是锑矿（antimoni）与黄金（emas）。',
        },
        {
          partLabel: '(b)',
          marks: 4,
          questionBm:
            'Terangkan **dua** strategi yang digunakan oleh **James Brooke** untuk mendapatkan kuasa pemerintahan di Sarawak.',
          questionZh: '说明詹姆士·布洛克用来夺取砂拉越统治权的其中两种策略。（4分）',
          expectedKeywordsBm: [
            'Rundingan',
            'Ugutan',
            'Perjanjian 1841',
            'Perjanjian 1842',
            'Ketenteraan',
            'HMS Dido',
          ],
          modelAnswerBm:
            'Pertama ialah strategi **ugutan** (**Fakta**), iaitu James Brooke mengugut untuk membedil Kuching dengan kapal perang ***Royalist*** apabila **Pangeran Raja Muda Hashim** melengah-lengahkan penyerahan Sarawak (**Huraian**). Kedua ialah strategi **perjanjian** (**Fakta**), iaitu menandatangani **Perjanjian 1841** dengan Hashim dan **Perjanjian 1842** dengan **Sultan Omar Ali Saifuddien II** yang mengiktiraf beliau sebagai Raja Putih Sarawak (**Huraian/Contoh**).',
          modelAnswerZh:
            '第一是“武力恐吓”策略（Fakta），即当 Pangeran Raja Muda Hashim 拖延移交砂拉越政权时，布洛克威胁用 Royalist 号炮轰古晋（Huraian）。第二是“条约”策略（Fakta），即先后与 Hashim 签署《1841年条约》及与文莱苏丹奥玛阿里赛夫丁二世签署《1842年条约》，获正式承认为砂拉越白人拉惹（Huraian/Contoh）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Peristiwa peluasan kuasa Dinasti Brooke membuktikan bahaya melibatkan kuasa asing dalam menyelesaikan masalah dalaman negara. Berikan ulasan anda. (`KBAT` — `K7.5.6`)',
          questionZh: '布洛克王朝扩张事件证明了引入外国势力解决国家内部问题的危险性。请发表你的评论。（高思维 KBAT — 4分）',
          expectedKeywordsBm: [
            'peluang',
            'campur tangan',
            'kedaulatan',
            'muafakat',
            'waspada',
            'kepentingan sendiri',
          ],
          modelAnswerBm:
            'Kuasa asing sentiasa mengutamakan **kepentingan ekonomi dan politik mereka sendiri** melebihi kebajikan penduduk tempatan (**Fakta**). Tindakan meminta bantuan luar membuka ruang kepada **campur tangan dan penjajahan asing** (**Huraian**), seperti tindakan Pangeran Raja Muda Hashim meminta bantuan James Brooke yang akhirnya menyebabkan Brunei kehilangan wilayah Sarawak (**Contoh**). Oleh itu, pemimpin dan rakyat wajib menyelesaikan konflik dalaman secara **rundingan serta muafakat** demi mempertahankan **kedaulatan negara** (**Inferens**).',
          modelAnswerZh:
            '外来势力总是将自身的经济与政治利益置于当地人民福祉之上（Fakta）。向外求援无异于引狼入室，为外国干预与殖民统治敞开大门（Huraian），正如 Hashim 求助布洛克最终导致文莱丧失整个砂拉越领土（Contoh）。因此，领导人与国民必须通过内部协商与团结化解分歧，以捍卫国家主权（Inferens）。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 5.3 — Peluasan Kuasa Syarikat Borneo Utara British (SBUB) di Sabah
  // ============================================================================
  {
    subtopicCode: '5.3',
    babNumber: 5,
    babTitleBm: 'Pentadbiran Barat di Sarawak dan Sabah',
    babTitleZh: '西方势力在砂拉越与沙巴的行政管理',
    skCode: '7.5',
    spCodes: ['7.5.3', 'K7.5.7'],
    titleBm: 'Peluasan Kuasa Syarikat Borneo Utara British (SBUB) di Sabah',
    titleZh: '英属北婆罗洲渣打公司（SBUB）在沙巴的势力扩张',
    heroImages: [
      {
        imageKey: 'bab5_sabah_kinabalu_port',
        captionBm:
          'Pelabuhan semula jadi yang strategik di Sabah berlatarbelakangkan Gunung Kinabalu menjadi tumpuan kapal dagang dan pelabur Barat sehingga tertubuhnya SBUB.',
        captionZh:
          '背靠神山（京那巴鲁山）的沙巴天然深水良港，吸引欧美商船与投资者纷至沓来，最终促成英属北婆罗洲公司（SBUB）的统治。',
        hotspots: [
          {
            x: 84,
            y: 42,
            termBm: 'Laluan Maritim Strategik Antarabangsa',
            meaningZh: '国际黄金海运航道',
            detailBm:
              'Sabah terletak di pertengahan laluan perdagangan maritim antara **China, Singapura, dan Australia** serta berhampiran laluan **Pulau Palawan**.',
            detailZh:
              '沙巴坐落于中国、新加坡与澳洲海上贸易航线中枢，且紧邻前往中日两国的巴拉望岛（Pulau Palawan）要道。',
          },
          {
            x: 46,
            y: 78,
            termBm: 'Kekayaan Hasil Ekonomi Sabah',
            meaningZh: '沙巴丰饶的海陆经济特产',
            detailBm:
              'Sabah mengeksport hasil bernilai tinggi seperti **sarang burung**, **sagu**, **rotan**, **getah perca**, **gamat**, **sirip ikan yu**, **mutiara**, **tembakau**, dan **kayu balak**.',
            detailZh:
              '沙巴盛产高价值出口商品：燕窝、硕莪、藤条、古塔胶、海参、鱼翅、珍珠、优质烟草及木材。',
          },
          {
            x: 29,
            y: 44,
            termBm: 'Piagam Diraja 1881 & Penubuhan SBUB',
            meaningZh: '1881年皇家特许状与 SBUB 成立',
            detailBm:
              'Kerajaan British menganugerahkan **Piagam Diraja (*Royal Charter*)** pada tahun **1881** kepada syarikat adik-beradik Dent lalu membentuk **SBUB** dengan **William Hood Treacher** sebagai Gabenor pertama.',
            detailZh:
              '英国政府于 1881 年颁发《皇家特许状》予邓特兄弟的公司，正式组建 SBUB，并委任 William Hood Treacher 为首任总督。',
          },
          {
            x: 60,
            y: 56,
            termBm: 'Pelabuhan Semula Jadi (Teluk Gaya & Sandakan)',
            meaningZh: '避风天然良港（加雅湾与山打根）',
            detailBm:
              'Kawasan teluk di **Teluk Gaya** dan **Sandakan** terlindung daripada tiupan angin monsun, menjadikannya pelabuhan berlabuh yang amat selamat.',
            detailZh:
              '加雅湾（Teluk Gaya）与山打根（Sandakan）港阔水深且免受季候风吹袭，是极安全的天然船只停泊港。',
          },
        ],
      },
      {
        imageKey: 'bab5_sarawak_sabah',
        captionBm:
          'Peralihan hak konsesi Sabah daripada pelabur Amerika dan Austria kepada syarikat berpiagam British (SBUB).',
        captionZh:
          '沙巴租借特许权从美国、奥地利投资者层层转手，最终落入英国特许公司（SBUB）手中的历史进程。',
      },
    ],
    sections: [
      {
        sectionCode: '5.3(a)',
        headingBm: 'Kemakmuran Sabah Menarik Pelabur Barat',
        headingZh: '沙巴的繁荣富庶吸引西方投资者',
        leadParagraphBm:
          'Keistimewaan **Sabah** daripada aspek **kedudukan geografi yang strategik** dan **kekayaan hasil ekonomi** yang melimpah-ruah telah menarik perhatian pelabur-pelabur Barat dari Amerika Syarikat, Austria-Hungary, dan Britain sejak pertengahan abad ke-19.',
        leadParagraphZh:
          '自19世纪中叶起，沙巴凭借得天独厚的“战略地理位置”与极其丰富的“海陆经济资源”，吸引了来自美国、奥匈帝国及英国的西方资本家争相觊觎。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Kedudukan Strategik**: Sabah terletak di tengah-tengah laluan perdagangan maritim antara **China, Singapura, dan Australia**, selain berdekatan dengan laluan **Pulau Palawan** bagi kapal dagang yang belayar ke China dan Jepun.',
            zh: '【战略位置优越】沙巴地处中国、新加坡与澳洲三大航线的中心交汇点，同时靠近商船前往中国与日本必经的巴拉望岛（Pulau Palawan）水道。',
          },
          {
            tag: 'CONTOH',
            bm: 'Sabah memiliki deretan **pelabuhan semula jadi** di kawasan teluk yang dalam dan terlindung daripada tiupan angin monsun seperti **Teluk Gaya**, **Kudat**, dan **Sandakan** yang selamat untuk kapal wap berlabuh serta membaiki kapal.',
            zh: '【天然避风良港】沙巴海岸线拥有多个免受季候风侵袭的天然海湾良港，如加雅湾（Teluk Gaya）、古达（Kudat）及山打根（Sandakan），极适合蒸汽船安全停泊与补给。',
          },
          {
            tag: 'CONTOH',
            bm: '**Kekayaan Hasil Ekonomi**: Hasil hutan dan hasil laut Sabah seperti **sarang burung** (di Gua Gomantong yang mendapat permintaan tinggi di pasaran China), **sagu**, **rotan**, **getah perca**, **gamat**, **sirip ikan yu**, dan **mutiara** telah lama memasuki pasaran antarabangsa.',
            zh: '【丰富海陆特产】沙巴盛产享誉国际的森林与海洋珍品：燕窝（哥曼东洞出产，畅销中国市场）、硕莪、藤条、古塔胶（getah perca）、海参（gamat）、鱼翅及珍珠。',
          },
          {
            tag: 'CONTOH',
            bm: 'Tanah Sabah yang subur juga amat sesuai untuk tanaman komersial berskala besar terutamanya **indigo**, **kapas**, **tembakau**, dan pembalakan **kayu balak** berkualiti tinggi.',
            zh: '此外，沙巴肥沃的土壤非常适合大规模商业种植，尤其是蓝靛（indigo）、棉花、顶级雪茄烟草（tembakau）以及高价值热带硬木伐木业（kayu balak）。',
          },
        ],
      },
      {
        sectionCode: '5.3(b)',
        headingBm: 'Pertapakan Pelabur Barat Sebelum Penubuhan SBUB (1865–1880)',
        headingZh: 'SBUB 成立前西方投资者在沙巴的接力盘踞（1865–1880年）',
        leadParagraphBm:
          'Sebelum **Syarikat Borneo Utara British (SBUB)** ditubuhkan secara rasmi, hak pajakan ke atas wilayah Sabah telah berpindah tangan melalui siri perjanjian antara pelabur asing dengan **Kesultanan Brunei** dan **Kesultanan Sulu**.',
        leadParagraphZh:
          '在英属北婆罗洲公司（SBUB）正式成立之前，沙巴的租借开发权经历了多名欧美投资者的层层转卖，并与文莱苏丹及苏禄苏丹分别签署了租借条约。',
        diagramKey: 'diag_5_3_sbub_sabah',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Julai 1865 — Charles Lee Moses**: Konsul Amerika Syarikat di Brunei, **Charles Lee Moses**, menyewa wilayah Sabah daripada **Sultan Abdul Momin** (Sultan Brunei) selama **10 tahun**.',
            zh: '【1865年7月 —— 摩西（Charles Lee Moses）】美国驻文莱领事摩西向文莱苏丹阿都慕敏租借沙巴领土，为期 10 年。',
          },
          {
            tag: 'CONTOH',
            bm: '**September 1865 — J.W. Torrey dan T.B. Harris**: Moses menjual hak konsesi tersebut kepada dua pedagang Amerika iaitu **J.W. Torrey** dan **T.B. Harris** yang menubuhkan *American Trading Company* serta membuka penempatan kopi dan tebu di **Kimanis**, namun usaha itu gagal.',
            zh: '【1865年9月 —— 托里与哈里斯】摩西火速将特许权转卖给美国商人 J.W. Torrey 与 T.B. Harris；两人在金马利（Kimanis）成立美国贸易公司试种咖啡与甘蔗，但因资金短缺与水土不服而倒闭。',
          },
          {
            tag: 'CONTOH',
            bm: '**1875–1878 — Baron von Overbeck & Adik-beradik Dent**: **Baron von Overbeck** (Konsul Jeneral Austria-Hungary di Hong Kong) membeli hak Torrey lalu bekerjasama dengan pemodal British, **Alfred Dent dan Edward Dent**.',
            zh: '【1875–1878年 —— 奥弗贝克男爵与邓特兄弟】奥匈帝国驻香港总领事 Baron von Overbeck 买下 Torrey 的特许权，并联合资金雄厚的英国商人邓特兄弟（Alfred Dent 与 Edward Dent）注资开发。',
          },
          {
            tag: 'FAKTA',
            bm: 'Bagi mengesahkan penguasaan seluruh Sabah, Overbeck dan Dent menandatangani perjanjian baharu dengan **Sultan Abdul Momin (Brunei) pada Disember 1877** (bayaran 15,000 dolar Sepanyol setahun) serta perjanjian dengan **Sultan Jamalul Alam (Sulu) pada Januari 1878** (bayaran 5,000 dolar Sepanyol setahun) kerana sebahagian pantai timur Sabah di bawah pengaruh Sulu.',
            zh: '为取得合法控制权，Overbeck 与 Dent 先于 1877 年 12 月同文莱苏丹阿都慕敏签约（年付 15,000 西班牙银元）；因东海岸属苏禄势力范围，两人又于 1878 年 1 月同苏禄苏丹嘉马鲁阿兰（Sultan Jamalul Alam）签约（年付 5,000 西班牙银元）。',
          },
          {
            tag: 'HURAIAN',
            bm: 'Pada tahun **1880**, Overbeck menjual semua sahamnya kepada **Alfred dan Edward Dent**, yang kemudiannya menubuhkan *British North Borneo Provisional Association Ltd.* dan memohon **Piagam Diraja** daripada kerajaan British.',
            zh: '1880 年 Overbeck 退出并将全部股份卖给邓特兄弟；邓特兄弟随即组建临时协会，向伦敦英国政府申请《皇家特许状》以提升投资者信心与公司股价。',
          },
        ],
      },
      {
        sectionCode: '5.3(c)',
        headingBm: 'Pemberian Piagam Diraja (1881) dan Lima Syarat kepada SBUB',
        headingZh: '1881年颁发《皇家特许状》与 SBUB 必须遵守的五大条件',
        leadParagraphBm:
          'Pada **November 1881**, kerajaan British menganugerahkan **Piagam Diraja (*Royal Charter*)** yang memberikan kuasa rasmi kepada **Syarikat Borneo Utara British (SBUB)** untuk mentadbir Sabah dengan **William Hood Treacher** dilantik sebagai **Gabenor Sabah yang pertama**.',
        leadParagraphZh:
          '1881年11月，英国政府正式颁发《皇家特许状》（Royal Charter），授权英属北婆罗洲渣打公司（SBUB）统治沙巴，并委任 William Hood Treacher 出任沙巴首任总督；英国政府亦借此间接把势力延伸至沙巴！',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Syarat 1 Piagam Diraja**: **SBUB hendaklah menerima Penasihat British** dalam urusan pentadbiran.',
            zh: '【皇家特许状条件一】SBUB 必须接受英国顾问（Penasihat British）的指导。',
          },
          {
            tag: 'FAKTA',
            bm: '**Syarat 2 Piagam Diraja**: **SBUB wajib memelihara adat resam, agama, dan undang-undang penduduk tempatan** di Sabah.',
            zh: '【皇家特许状条件二】SBUB 必须尊重并维护沙巴当地居民的风俗习惯、宗教信仰与传统法律。',
          },
          {
            tag: 'FAKTA',
            bm: '**Syarat 3 Piagam Diraja**: **SBUB mesti memerintah Sabah dengan adil dan saksama**.',
            zh: '【皇家特许状条件三】SBUB 必须以公正与公平（adil dan saksama）的原则治理沙巴。',
          },
          {
            tag: 'FAKTA',
            bm: '**Syarat 4 Piagam Diraja**: **SBUB mesti melantik Pegawai Tadbir yang diakui oleh kerajaan British**.',
            zh: '【皇家特许状条件四】SBUB 委任的高级行政官员（如总督）必须获得英国政府的认可与批准。',
          },
          {
            tag: 'FAKTA',
            bm: '**Syarat 5 Piagam Diraja**: **SBUB tidak dibenarkan menyerahkan wilayah Sabah kepada pihak atau kuasa asing lain tanpa mendapat kebenaran kerajaan British**.',
            zh: '【皇家特许状条件五】未经英国政府事先批准，SBUB 严禁将沙巴领土转让或割让给任何其他外国势力！',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Melalui **Piagam Diraja 1881** (diikuti **Perjanjian Perlindungan British 1888**), kerajaan British berjaya mengawal dasar luar dan pertahanan Sabah tanpa perlu mengeluarkan belanja pentadbiran sendiri (`K7.5.7`: kebijaksanaan mempertahankan maruah dan hak bangsa).',
            zh: '⚠️ 满分高阶分析（K7.5.7）：英国政府通过《皇家特许状》五大条件玩了一招“借鸡生蛋”——不用自己掏一分钱行政费，就成功锁死沙巴不落入德、美、荷等竞争对手手中！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Kronologi Pertapakan Kuasa Asing di Sabah (1865–1881) & Lima Syarat Piagam Diraja SBUB',
        titleZh: '外国势力盘踞沙巴编年史（1865–1881）与 SBUB 皇家特许状五大条件总表',
        headers: [
          { bm: 'Tahun / Aspek', zh: '年份 / 关键项目' },
          { bm: 'Tokoh / Pihak Terlibat', zh: '涉及人物 / 机构' },
          { bm: 'Peristiwa & Syarat Utama', zh: '核心历史事件与条规内容' },
        ],
        rows: [
          [
            { bm: '**1865**', zh: '1865年' },
            {
              bm: '**Charles Lee Moses** -> **J.W. Torrey & T.B. Harris**',
              zh: '摩西 → 托里与哈里斯（美国商人）',
            },
            {
              bm: 'Moses menyewa Sabah daripada Sultan Brunei selama **10 tahun**, kemudian menjual hak kepada Torrey & Harris (*American Trading Company* di **Kimanis**).',
              zh: '摩西向文莱苏丹租借沙巴 10 年，旋即转卖予托里与哈里斯（在金马利 Kimanis 开辟种植地但失败）。',
            },
          ],
          [
            { bm: '**1877 & 1878**', zh: '1877年与1878年' },
            {
              bm: '**Baron von Overbeck** + **Alfred & Edward Dent**',
              zh: '奥弗贝克男爵 + 邓特兄弟',
            },
            {
              bm: 'Menandatangani perjanjian dengan **Sultan Abdul Momin Brunei (Dis 1877)** dan **Sultan Jamalul Alam Sulu (Jan 1878)** untuk menguasai seluruh pantai barat dan timur Sabah.',
              zh: '分别与文莱苏丹阿都慕敏（1877年12月）及苏禄苏丹嘉马鲁阿兰（1878年1月）签约，取得沙巴东西海岸租借权。',
            },
          ],
          [
            { bm: '**1881 (Piagam Diraja)**', zh: '1881年（皇家特许状）' },
            {
              bm: 'Kerajaan British -> **SBUB** (**William Hood Treacher**)',
              zh: '英国政府 → SBUB（首任总督 Treacher）',
            },
            {
              bm: '**5 Syarat Piagam Diraja**: (1) Terima **Penasihat British**, (2) Pelihara **adat/agama/undang-undang tempatan**, (3) Perintah secara **adil & saksama**, (4) Lantik **Pegawai Tadbir diakui British**, (5) **Dilarang serah Sabah** kepada pihak lain tanpa izin British.',
              zh: '五大条件：(1) 接受英国顾问、(2) 维护当地习俗宗教法律、(3) 公正治理、(4) 委任获英方认可官员、(5) 未经英方批准不得转让沙巴。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Charles Lee Moses',
        roleBm: 'Konsul Amerika Syarikat di Brunei (1865)',
        roleZh: '1865年美国驻文莱领事',
        emoji: '📜',
        lineBm:
          'Pada tahun **1865**, saya menyewa Sabah daripada Sultan Brunei selama **10 tahun**, kemudian saya terus menjual hak konsesi ini kepada **J.W. Torrey** dan **T.B. Harris** untuk mendapat untung segera!',
        lineZh:
          '1865 年我向文莱苏丹租下沙巴 10 年，转头就把特许权卖给 J.W. Torrey 和 T.B. Harris 赚了一笔快钱！',
      },
      {
        speakerBm: 'Baron von Overbeck',
        roleBm: 'Konsul Jeneral Austria-Hungary di Hong Kong',
        roleZh: '奥匈帝国驻香港总领事',
        emoji: '🤝',
        lineBm:
          'Penempatan Torrey di **Kimanis** gagal! Saya membeli haknya dan bergabung modal dengan **Alfred serta Edward Dent**, lalu mengikat perjanjian dengan **Sultan Brunei (1877)** dan **Sultan Sulu (1878)**.',
        lineZh:
          'Torrey 在金马利的开发失败了！我买下他的特许权，联手英国富商邓特兄弟，先后在 1877 年与文莱苏丹、1878 年与苏禄苏丹签下新约！',
      },
      {
        speakerBm: 'Alfred Dent',
        roleBm: 'Pengasas Syarikat Borneo Utara British (SBUB)',
        roleZh: '英属北婆罗洲公司（SBUB）创办人',
        emoji: '🏛️',
        lineBm:
          'Selepas membeli semua saham Overbeck, kami memohon **Piagam Diraja 1881** daripada kerajaan British supaya nilai saham syarikat melonjak dan tertubuhlah **SBUB** secara rasmi!',
        lineZh:
          '买断 Overbeck 的股份后，我们向英国政府申请到《1881年皇家特许状》，不仅让公司身价暴涨，更正式成立了 SBUB！',
      },
      {
        speakerBm: 'William Hood Treacher',
        roleBm: 'Gabenor Pertama SBUB di Sabah (1881–1887)',
        roleZh: '沙巴首任 SBUB 总督',
        emoji: '🎖️',
        lineBm:
          'Sebagai **Gabenor pertama**, pentadbiran SBUB terikat dengan **5 Syarat Piagam Diraja** — termasuk wajib memelihara **adat tempatan** dan **tidak boleh menyerahkan Sabah** kepada kuasa lain tanpa kebenaran British!',
        lineZh:
          '身为首任总督，我们 SBUB 必须严格遵守《皇家特许状》五大条件——包括维护当地传统习俗，且未经英国政府批准绝不能把沙巴转让给外国！',
      },
    ],
    memoryHackBm:
      'Rantaian Pelabur Sabah (**1865–1881**) = **"M -> T -> O -> D -> SBUB"**: **M**oses (1865) -> **T**orrey & Harris (Kimanis) -> **O**verbeck + **D**ent (1877 Brunei, 1878 Sulu) -> **SBUB** (Piagam Diraja 1881, Gabenor **Treacher**)! 5 Syarat Piagam = **"P.A.A.P.T."** (**P**enasihat, **A**dat, **A**dil, **P**egawai diakui, **T**idak serah Sabah)!',
    memoryHackZh:
      '🧠 王牌秒记口诀：【沙巴转手五部曲 M-T-O-D-S】摩西租十年（Moses 1865）→ 托里金马利败北（Torrey Kimanis）→ 奥弗贝克找邓特（Overbeck + Dent，77文莱、78苏禄）→ 1881 皇家特许状变 SBUB（首任总督 Treacher）！【皇家特许状五条件 P.A.A.P.T.】一听英国顾问（Penasihat）、二护习俗宗教（Adat）、三要公平执政（Adil）、四用英认可官员（Pegawai）、五禁私自转让沙巴（Tidak serah）！',
    subtopicMcqs: [
      {
        id: '5.3-mcq-1',
        spCode: '7.5.3',
        questionBm:
          'Mengapakah pelabuhan **Teluk Gaya** dan **Sandakan** di Sabah dianggap sangat strategik oleh pedagang Barat?',
        questionZh: '为什么沙巴的加雅湾（Teluk Gaya）与山打根（Sandakan）港口被西方商人视为极具战略价值？',
        options: [
          {
            id: 'A',
            textBm: 'Terletak bersebelahan dengan Terusan Suez di Mesir',
            textZh: '紧邻埃及苏伊士运河',
          },
          {
            id: 'B',
            textBm: 'Merupakan pelabuhan semula jadi di kawasan teluk yang terlindung daripada angin monsun',
            textZh: '属于免受季候风吹袭的天然深水海湾良港',
          },
          {
            id: 'C',
            textBm: 'Bebas sepenuhnya daripada sebarang cukai kastam Kesultanan Johor',
            textZh: '完全免除柔佛苏丹国的任何关税',
          },
          {
            id: 'D',
            textBm: 'Menjadi pusat peleburan bijih timah terbesar di dunia',
            textZh: '是全球最大的锡矿冶炼中心',
          },
        ],
        correctId: 'B',
        explanationBm:
          '**Teluk Gaya** dan **Sandakan** ialah pelabuhan semula jadi yang terletak di kawasan teluk yang dalam serta terlindung daripada tiupan angin monsun, menjadikannya tempat berlabuh yang selamat di laluan China–Singapura–Australia.',
        explanationZh:
          '加雅湾与山打根位于避风海湾内，免受季候风风浪侵袭，是中国—新加坡—澳洲国际航线上的天然安全良港。',
      },
      {
        id: '5.3-mcq-2',
        spCode: '7.5.3',
        questionBm:
          'Apakah urutan peralihan hak konsesi pelabur Barat di Sabah yang **betul** sebelum penubuhan **SBUB**?',
        questionZh: '在 SBUB 成立之前，西方投资者在沙巴的特许权转手顺序哪一项是正确的？',
        options: [
          {
            id: 'A',
            textBm: '**James Brooke** -> **Charles Brooke** -> **Alfred Dent**',
            textZh: 'James Brooke → Charles Brooke → Alfred Dent',
          },
          {
            id: 'B',
            textBm: '**Baron von Overbeck** -> **Charles Lee Moses** -> **J.W. Torrey**',
            textZh: 'Baron von Overbeck → Charles Lee Moses → J.W. Torrey',
          },
          {
            id: 'C',
            textBm: '**Charles Lee Moses** -> **J.W. Torrey & T.B. Harris** -> **Baron von Overbeck & Adik-beradik Dent**',
            textZh: 'Charles Lee Moses → J.W. Torrey & T.B. Harris → Baron von Overbeck & 邓特兄弟',
          },
          {
            id: 'D',
            textBm: '**William Hood Treacher** -> **Charles Lee Moses** -> **Sultan Jamalul Alam**',
            textZh: 'William Hood Treacher → Charles Lee Moses → Sultan Jamalul Alam',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Kronologi tepat bermula dengan **Charles Lee Moses (Julai 1865)**, dijual kepada **J.W. Torrey & T.B. Harris (September 1865)** di Kimanis, kemudian dibeli oleh **Baron von Overbeck** yang bekerjasama dengan **Alfred dan Edward Dent** sebelum tertubuhnya SBUB.',
        explanationZh:
          '正确顺序为：1865年7月摩西租借 → 1865年9月卖给 Torrey 与 Harris（金马利）→ 1875年起由 Overbeck 联手邓特兄弟接管，最终成立 SBUB。',
      },
      {
        id: '5.3-mcq-3',
        spCode: '7.5.3',
        questionBm:
          'Mengapakah **Baron von Overbeck** dan **Alfred Dent** perlu menandatangani perjanjian kedua dengan **Sultan Jamalul Alam (Kesultanan Sulu)** pada Januari 1878 selepas menandatangani perjanjian dengan Sultan Brunei pada Disember 1877?',
        questionZh: '为什么 Overbeck 与 Alfred Dent 在 1877 年 12 月与文莱苏丹签约后，又必须在 1878 年 1 月与苏禄苏丹嘉马鲁阿兰签署第二份条约？',
        options: [
          {
            id: 'A',
            textBm: 'Kerana sebahagian wilayah Pantai Timur Sabah berada di bawah kekuasaan **Kesultanan Sulu**',
            textZh: '因为沙巴东海岸部分领土实际处于苏禄苏丹国的控制之下',
          },
          {
            id: 'B',
            textBm: 'Kerana Sultan Brunei telah membatalkan perjanjian tahun 1877 serta-merta',
            textZh: '因为文莱苏丹立即废除了 1877 年的条约',
          },
          {
            id: 'C',
            textBm: 'Kerana mahu membeli pulau Singapura daripada Kesultanan Sulu',
            textZh: '因为想向苏禄苏丹购买新加坡岛',
          },
          {
            id: 'D',
            textBm: 'Kerana diarahkan oleh kerajaan Amerika Syarikat di Kimanis',
            textZh: '因为受到驻金马利的美国政府指示',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Walaupun Sultan Brunei menyerahkan wilayah di Sabah pada Disember 1877, sebahagian kawasan **Pantai Timur Sabah** (antara Sungai Pandasan hingga Sungai Sibuko) berada di bawah pengaruh **Kesultanan Sulu**, maka perjanjian Januari 1878 dimeterai dengan **Sultan Jamalul Alam**.',
        explanationZh:
          '虽然文莱苏丹于 1877 年签约转让沙巴，但沙巴东海岸实际上由苏禄苏丹国控制，因此两人必须于 1878 年 1 月再与苏禄苏丹嘉马鲁阿兰签约。',
      },
      {
        id: '5.3-mcq-4',
        spCode: '7.5.3',
        questionBm:
          'Siapakah tokoh yang dilantik sebagai **Gabenor pertama** Sabah selepas **SBUB** menerima **Piagam Diraja** pada tahun 1881?',
        questionZh: '1881 年 SBUB 获得《皇家特许状》后，谁被委任为沙巴第一任总督（Gabenor pertama）？',
        options: [
          { id: 'A', textBm: '**Frank Swettenham**', textZh: 'Frank Swettenham（瑞天咸）' },
          { id: 'B', textBm: '**Hugh Clifford**', textZh: 'Hugh Clifford（休·克利福德）' },
          { id: 'C', textBm: '**Charles Vyner Brooke**', textZh: 'Charles Vyner Brooke（查尔斯·维纳·布洛克）' },
          { id: 'D', textBm: '**William Hood Treacher**', textZh: 'William Hood Treacher（特里彻）' },
        ],
        correctId: 'D',
        explanationBm:
          '**William Hood Treacher** telah dilantik sebagai **Gabenor pertama** di Sabah (1881–1887) bagi mengetuai pentadbiran Syarikat Borneo Utara British (SBUB).',
        explanationZh:
          'William Hood Treacher 于 1881 年受委为英属北婆罗洲公司（SBUB）驻沙巴的首任总督。',
      },
      {
        id: '5.3-mcq-5',
        spCode: '7.5.3',
        questionBm:
          'Antara berikut, yang manakah merupakan salah satu daripada **lima syarat Piagam Diraja 1881** yang perlu dipatuhi oleh **SBUB**?',
        questionZh: '下列哪一项属于 SBUB 必须遵守的《1881年皇家特许状》五大条件之一？',
        options: [
          {
            id: 'A',
            textBm: 'SBUB bebas menjual wilayah Sabah kepada kuasa Jerman atau Belanda pada bila-bila masa',
            textZh: 'SBUB 可随时自由将沙巴领土出售给德国或荷兰',
          },
          {
            id: 'B',
            textBm: 'SBUB wajib menghapuskan semua mahkamah adat peribumi di pedalaman Sabah',
            textZh: 'SBUB 必须废除沙巴内陆所有原住民习俗法庭',
          },
          {
            id: 'C',
            textBm: 'SBUB tidak dibenarkan menyerahkan Sabah kepada pihak lain tanpa kebenaran kerajaan British',
            textZh: '未经英国政府批准，SBUB 不得将沙巴转让给任何其他势力',
          },
          {
            id: 'D',
            textBm: 'SBUB mesti membayar ufti tahunan kepada Dinasti Brooke di Kuching',
            textZh: 'SBUB 必须每年向古晋的布洛克王朝进贡',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Antara syarat utama **Piagam Diraja 1881** ialah **SBUB tidak dibenarkan menyerahkan wilayah Sabah kepada pihak lain tanpa mendapat kebenaran kerajaan British**, selain wajib memelihara adat tempatan dan menerima Penasihat British.',
        explanationZh:
          '《皇家特许状》明确规定：未经英国政府同意，SBUB 绝不能擅自将沙巴转让予他国，借此保障大英帝国的战略利益。',
      },
    ],
    strukturQuestion: {
      id: '5.3-struktur',
      spCode: '7.5.3',
      stimulusBm:
        'Kedudukan strategik dan kekayaan hasil bumi Sabah menarik minat pelabur Barat sehingga membawa kepada penganugerahan **Piagam Diraja** oleh kerajaan British kepada **Syarikat Borneo Utara British (SBUB)** pada tahun 1881.',
      stimulusZh:
        '沙巴优越的地理位置与丰富物产吸引了西方投资者，最终促成英国政府于 1881 年向英属北婆罗洲公司（SBUB）颁发《皇家特许状》。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Senaraikan **tiga** hasil ekonomi utama di Sabah yang menjadi tarikan pelabur Barat pada abad ke-19.',
          questionZh: '列出 19 世纪沙巴吸引西方投资者的三种主要经济特产。（3分）',
          expectedKeywordsBm: [
            'sarang burung',
            'sagu',
            'rotan',
            'getah perca',
            'gamat',
            'tembakau',
            'kayu balak',
            'mutiara',
          ],
          modelAnswerBm:
            'Tiga hasil ekonomi utama di Sabah ialah **sarang burung**, **sagu**, dan **tembakau** (atau **rotan**, **getah perca**, **gamat**, **sirip ikan yu**, **mutiara**, serta **kayu balak**).',
          modelAnswerZh:
            '沙巴的三种主要经济特产包括：燕窝（sarang burung）、硕莪（sagu）及烟草（tembakau）（或藤条、古塔胶、海参、鱼翅、珍珠与木材）。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Nyatakan **tiga** syarat dalam **Piagam Diraja 1881** yang mesti dipatuhi oleh **SBUB** untuk mentadbir Sabah.',
          questionZh: '写出《1881年皇家特许状》规定 SBUB 治理沙巴时必须遵守的其中三项条件。（3分）',
          expectedKeywordsBm: [
            'Penasihat British',
            'adat resam',
            'adil dan saksama',
            'Pegawai Tadbir',
            'tidak dibenarkan menyerahkan Sabah',
          ],
          modelAnswerBm:
            'Pertama, SBUB hendaklah menerima **Penasihat British**. Kedua, SBUB wajib memelihara **adat resam, agama, dan undang-undang penduduk tempatan**. Ketiga, SBUB **tidak dibenarkan menyerahkan Sabah kepada pihak lain** tanpa kebenaran kerajaan British (selain memerintah dengan **adil dan saksama** serta melantik **Pegawai Tadbir yang diakui British**).',
          modelAnswerZh:
            '第一，SBUB 必须接受英国顾问（Penasihat British）；第二，SBUB 必须维护当地居民的习俗、宗教与法律；第三，未经英国政府批准，SBUB 不得将沙巴转让给其他势力（此外还包括公正治理及委任获英国认可的行政官员）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Bagaimanakah generasi muda hari ini dapat memanfaatkan kekayaan sumber alam negara supaya tidak dikuasai oleh pihak asing? (`KBAT` — `K7.5.7`)',
          questionZh: '当今青年一代应如何善用国家丰富的自然资源，以免受外国势力操控？（高思维 KBAT — 4分）',
          expectedKeywordsBm: [
            'ilmu pengetahuan',
            'teknologi moden',
            'penyelidikan',
            'industri hiliran',
            'kedaulatan ekonomi',
          ],
          modelAnswerBm:
            'Generasi muda hendaklah menguasai **ilmu sains dan teknologi moden** supaya mampu meneroka serta mengurus sumber alam secara berdikari (**Fakta**). Kita perlu menjalankan **penyelidikan dan pembangunan (R&D)** untuk menghasilkan produk bernilai tambah tinggi melalui industri pembuatan tempatan (**Huraian**), contohnya memproses hasil kayu balak, kelapa sawit, dan petroleum menjadi barangan siap berjenama Malaysia (**Contoh**). Langkah ini dapat mengukuhkan **kedaulatan ekonomi negara** tanpa bergantung pada syarikat asing (**Inferens**).',
          modelAnswerZh:
            '青年一代必须掌握现代科学与技术知识，以便自主勘探与管理国家自然资源（Fakta）。我们应积极开展研发（R&D），通过本土制造业生产高附加值产品（Huraian），例如将木材、油棕与石油深加工为马来西亚自主品牌成品（Contoh）。此举能巩固国家经济主权，摆脱对外国跨国企业的依赖（Inferens）。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 5.4 — Bentuk Pentadbiran Barat di Sarawak dan Sabah
  // ============================================================================
  {
    subtopicCode: '5.4',
    babNumber: 5,
    babTitleBm: 'Pentadbiran Barat di Sarawak dan Sabah',
    babTitleZh: '西方势力在砂拉越与沙巴的行政管理',
    skCode: '7.5',
    spCodes: ['7.5.4', 'K7.5.8'],
    titleBm: 'Bentuk Pentadbiran Barat di Sarawak dan Sabah',
    titleZh: '砂拉越与沙巴的西方行政管理形式',
    heroImages: [
      {
        imageKey: 'bab5_sarawak_astana_fort',
        captionBm:
          'Sistem pentadbiran berhierarki Dinasti Brooke di Sarawak yang menggabungkan pegawai Eropah dengan pembesar tempatan bagi melicinkan pemerintahan.',
        captionZh:
          '砂拉越布洛克王朝的层级行政体系，结合欧洲官员与当地传统领袖以推行低成本的间接统治。',
        hotspots: [
          {
            x: 82,
            y: 47,
            termBm: 'Raja Sarawak, Majlis Tertinggi & Majlis Negeri',
            meaningZh: '砂拉越拉惹、最高议会与州议会',
            detailBm:
              '**Raja Sarawak** memegang kuasa tertinggi dibantu oleh **Majlis Tertinggi (1855)** dan **Majlis Negeri (1867)** yang turut dianggotai pembesar tempatan.',
            detailZh:
              '砂拉越拉惹掌握最高权力，由 1855 年设立的最高议会（Majlis Tertinggi）与 1867 年设立的州议会（Majlis Negeri）辅佐。',
          },
          {
            x: 22,
            y: 31,
            termBm: 'Pembahagian 5 Bahagian Sarawak',
            meaningZh: '砂拉越五大省（5 Bahagian）行政区划',
            detailBm:
              'Charles Brooke membahagikan Sarawak kepada **Lima Bahagian** (Pertama hingga Kelima), setiap satunya diketuai oleh seorang **Residen** dan dipecahkan kepada **Daerah** serta **Kampung**.',
            detailZh:
              '查尔斯·布洛克将砂拉越划分为五个省（Bahagian Pertama–Kelima），每省由一名参政司（Residen）统辖，下设县（Daerah）与村（Kampung）。',
          },
          {
            x: 18,
            y: 60,
            termBm: 'Pengekalan Pembesar Elit Tempatan',
            meaningZh: '保留当地传统精英阶层',
            detailBm:
              'Gelaran **Datu Patinggi**, **Datu Bandar**, **Datu Temenggung**, **Datu Imam**, dan **Datu Hakim** dikekalkan di Sarawak; manakala di Sabah dikekalkan **Ketua Anak Negeri (OKK)**.',
            detailZh:
              '砂拉越保留并增设 Datu Patinggi、Datu Imam、Datu Hakim 等职；沙巴则委任原住民首领为享有 OKK（Orang Kaya-Kaya）头衔的土著酋长。',
          },
          {
            x: 56,
            y: 74,
            termBm: 'Pentadbiran Berasaskan Kaum & Mahkamah',
            meaningZh: '按族群分治与双轨法庭制度',
            detailBm:
              'Penduduk ditadbir mengikut kaum (Melayu, Iban, Cina di bawah **Kapitan/Kangchu**) serta tertakluk kepada **Mahkamah Adat / Mahkamah Anak Negeri** dan **Mahkamah Majistret**.',
            detailZh:
              '实行按族群分而治之政策（马来人从政、伊班人从军、华人设甲必丹与港主经商），并设立民事推事庭与原住民习俗法庭。',
          },
        ],
      },
      {
        imageKey: 'bab5_sabah_kinabalu_port',
        captionBm:
          'Pentadbiran SBUB di Sabah yang diketuai oleh Gabenor dan bertanggungjawab terus kepada Lembaga Pengarah di London.',
        captionZh:
          '沙巴 SBUB 的行政架构：由驻沙巴总督领导，直接向伦敦董事会（Lembaga Pengarah）负责，并下辖五个驻扎区（Residensi）。',
      },
    ],
    sections: [
      {
        sectionCode: '5.4(a)',
        headingBm: 'Pemantapan Pentadbiran (Pembahagian Wilayah dan Hierarki)',
        headingZh: '强化行政体系（行政区划与官僚层级）',
        leadParagraphBm:
          'Bagi memastikan penguasaan politik dan kutipan hasil berjalan lancar, **Dinasti Brooke di Sarawak** dan **SBUB di Sabah** melaksanakan penyusunan semula pentadbiran secara sistematik melalui **pembahagian wilayah** serta **hierarki pentadbiran** yang jelas.',
        leadParagraphZh:
          '为了巩固政治控制并高效征税，砂拉越布洛克王朝与沙巴 SBUB 双双推行制度化的行政改革，建立清晰的“区域划分”与“金字塔官僚层级”。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Pembahagian Wilayah di Sarawak**: Raja Brooke membahagikan Sarawak kepada tiga bahagian pada awalnya sebelum **Charles Brooke** menambahkannya menjadi **Lima Bahagian** (*Bahagian Pertama, Kedua, Ketiga, Keempat, dan Kelima*), yang setiap satunya dipecahkan kepada **Daerah** dan **Kampung**.',
            zh: '【砂拉越五省区划】布洛克王朝最初设三省，后由查尔斯·布洛克扩编为“五大省”（Bahagian Pertama 至 Kelima），每省再细分为县（Daerah）与村（Kampung）。',
          },
          {
            tag: 'HURAIAN',
            bm: '**Hierarki Pentadbiran Sarawak**: Kuasa tertinggi dipegang oleh **Raja Sarawak** -> **Residen** (mengetuai Bahagian) -> **Pegawai Daerah** (mengetuai Daerah) -> **Pegawai Anak Negeri** -> **Ketua Masyarakat / Penghulu / Tuai Rumah** (mengetuai Kampung).',
            zh: '【砂拉越行政层级】最高统治者为砂拉越拉惹（Raja）→ 省参政司（Residen）→ 县官（Pegawai Daerah）→ 原住民事务官（Pegawai Anak Negeri）→ 村长/彭古鲁/屋长（Tuai Rumah）。',
          },
          {
            tag: 'FAKTA',
            bm: '**Pembahagian Wilayah di Sabah**: SBUB membahagikan Sabah kepada **Lima Residensi** (bermula dengan Pantai Timur dan Pantai Barat, berkembang menjadi **Pantai Barat, Kudat, Sandakan, Tawau, dan Pedalaman**) serta dipecahkan kepada **Daerah** (17 Daerah menjelang 1922).',
            zh: '【沙巴五驻扎区区划】SBUB 将沙巴划分为“五大驻扎区/省”（5 Residensi：西海岸 Pantai Barat、古达 Kudat、山打根 Sandakan、斗湖 Tawau 及内陆 Pedalaman），下辖各县（Daerah）。',
          },
          {
            tag: 'HURAIAN',
            bm: '**Hierarki Pentadbiran Sabah**: **Lembaga Pengarah** di London (pemegang saham) -> **Gabenor** di Sabah -> **Setiausaha Kerajaan / Ketua Jabatan** -> **Residen** (mengetuai Residensi) -> **Pegawai Daerah** (pegawai Eropah) -> **Ketua Anak Negeri** (bergelar **Orang Kaya-Kaya / OKK**) -> **Ketua Kampung (Orang Tua)**.',
            zh: '【沙巴行政层级】伦敦董事会（Lembaga Pengarah）→ 沙巴总督（Gabenor）→ 政府秘书与部门主管 → 驻扎官（Residen）→ 县官（Pegawai Daerah）→ 原住民酋长（Ketua Anak Negeri，受封 OKK 衔头）→ 村长（Orang Tua）。',
          },
        ],
      },
      {
        sectionCode: '5.4(b)',
        headingBm: 'Pengekalan Golongan Elit Tempatan (Pentadbiran Tidak Langsung)',
        headingZh: '保留当地传统精英阶层（间接统治政策）',
        leadParagraphBm:
          'Kedua-dua **Dinasti Brooke** dan **SBUB** mengamalkan dasar **pentadbiran berasaskan peribumi (*Indirect Rule*)** dengan mengekalkan golongan pembesar tempatan kerana **bilangan pegawai Eropah yang terhad**, **kekurangan dana kewangan**, dan bagi **mengelakkan kebangkitan penduduk tempatan**.',
        leadParagraphZh:
          '布洛克王朝与 SBUB 皆采取“以夷制夷”的间接统治（Indirect Rule）策略，继续任用当地贵族与原住民首领——主因是欧洲官员人数不足、节省行政经费开支，以及安抚民心避免引发大规模反抗！',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Elit Tempatan di Sarawak**: James Brooke melibatkan pembesar Melayu dengan mengekalkan gelaran **Datu Patinggi**, **Datu Bandar**, dan **Datu Temenggung**, serta memperkenalkan jawatan baharu seperti **Datu Imam**, **Datu Hakim**, **Datu Menteri**, dan **Datu Pahlawan**, selain gelaran **Temenggung** serta **Penghulu** bagi ketua kaum peribumi.',
            zh: '【砂拉越保留传统领袖】布洛克保留马来贵族的 Datu Patinggi、Datu Bandar 与 Datu Temenggung 官职，并新设 Datu Imam（宗教）、Datu Hakim（司法）等职；对伊班等内陆原住民则设立天猛公（Temenggung）与彭古鲁（Penghulu）职位，发给固定俸禄但剥夺其自行征税权。',
          },
          {
            tag: 'CONTOH',
            bm: '**Majlis Pentadbiran di Sarawak**: Dinasti Brooke menubuhkan **Majlis Tertinggi (1855)** (dianggotai Raja Sarawak, Residen Bahagian Pertama, dan pembesar Melayu untuk meluluskan dasar) serta **Majlis Negeri (1867)** (bersidang tiga tahun sekali memberi ruang pemimpin semua kaum menyuarakan pandangan).',
            zh: '【砂拉越两大议会】1855 年设立最高议会（Majlis Tertinggi，由拉惹、第一省参政司及马来拿督组成）；1867 年由查尔斯·布洛克设立州议会（Majlis Negeri，每三年召开一次，汇聚各族首领发表意见）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Elit Tempatan & Majlis di Sabah**: SBUB menubuhkan **Majlis Penasihat (1883)** untuk menasihati Gabenor, serta membahagikan ketua peribumi kepada kategori **Ketua yang Diakui** (bergaji, iaitu **Ketua Anak Negeri / OKK** seperti **OKK Mohammad Arshad** yang membantu Pegawai Daerah dalam kehakiman adat dan kutipan cukai kepala) dan **Ketua yang Tidak Diakui** (**Ketua Kampung / Orang Tua** yang menjaga keamanan kampung).',
            zh: '【沙巴保留原住民领袖与咨询议会】SBUB 于 1883 年设立咨询议会（Majlis Penasihat）辅佐总督；基层则委任受薪的“原住民酋长”（Ketua Anak Negeri，封号 Orang Kaya-Kaya / OKK，如著名的 OKK Mohammad Arshad）协助县官处理习俗审判与征税，以及管理村务的村长（Orang Tua）。',
          },
        ],
      },
      {
        sectionCode: '5.4(c)',
        headingBm: 'Pentadbiran Berasaskan Kaum serta Sistem Perundangan dan Kehakiman',
        headingZh: '按族群分治政策及法律与司法审判制度',
        leadParagraphBm:
          'Pentadbiran Barat di Sarawak dan Sabah turut mengamalkan dasar **pecah dan perintah mengikut kaum** serta memperkenalkan **sistem perundangan dan mahkamah berperingkat** yang menggabungkan undang-undang Barat dengan undang-undang adat tempatan.',
        leadParagraphZh:
          '砂拉越与沙巴的西方统治者同时推行按族群划分职能的“分而治之”策略，并建立融合西方法律与当地伊斯兰法/习俗法的双轨法庭制度。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Pentadbiran Berasaskan Kaum**: Di Sarawak, masyarakat **Melayu** dilibatkan dalam **pentadbiran**, masyarakat **Iban** dalam bidang **keselamatan dan ketenteraan** (*Sarawak Rangers*), manakala masyarakat **Cina** dalam sektor **ekonomi/perdagangan** di bawah ketua bergelar **Kapitan** dan **Kangchu**; di Sabah pula pentadbiran berasaskan peribumi dikawal oleh Penolong Pegawai Daerah dan diwujudkan jawatan **Kapitan Cina**.',
            zh: '【按族群分而治之】在砂拉越，布洛克刻意划分三大族群职能：马来人负责行政（pentadbiran）、伊班人负责治安与军警（keselamatan/ketenteraan）、华人则专注经济农商并设“甲必丹”（Kapitan）与“港主”（Kangchu）管理；沙巴同样对原住民与华人实行分族管理。',
          },
          {
            tag: 'CONTOH',
            bm: '**Perundangan dan Kehakiman di Sarawak**: James Brooke memperkenalkan **Undang-Undang Delapan Perkara** (Januari 1842). Kes jenayah berat dan sivil diadili oleh **Raja Sarawak** dan Ketua Majistret; kes adat kaum peribumi dibicarakan di **Mahkamah Adat** oleh ketua kaum masing-masing; manakala **Mahkamah Cina** ditubuhkan di Kuching pada tahun **1911** bagi mengurus kes masyarakat Cina.',
            zh: '【砂拉越法律与法庭】詹姆士·布洛克于 1842 年颁布《八条法令》（Undang-Undang Delapan Perkara）。重大民刑案件由拉惹与首席推事审理；各族传统习俗案件交由《习俗法庭》（Mahkamah Adat）审理；1911 年更在古晋设立《华人法庭》（Mahkamah Cina）专门处理华社事务。',
          },
          {
            tag: 'CONTOH',
            bm: '**Perundangan dan Kehakiman di Sabah**: SBUB mewujudkan dua mahkamah utama iaitu **(1) Mahkamah Majistret** yang dihakimi oleh **Pegawai Daerah** menggunakan **undang-undang Barat** (kes berat seperti rompakan, culik, dan bunuh), serta **(2) Mahkamah Anak Negeri** yang dihakimi oleh **Ketua Anak Negeri (OKK)** bagi kes berkaitan **undang-undang Islam dan hukum adat tempatan**.',
            zh: '【沙巴双轨法庭制度 —— 高频必考！】SBUB 设立两大法庭：(1) 推事庭（Mahkamah Majistret）：由县官（Pegawai Daerah）依西方法律审理抢劫、绑架、谋杀等重案；(2) 原住民法庭（Mahkamah Anak Negeri）：由原住民酋长（Ketua Anak Negeri / OKK）主持，专门审理涉及伊斯兰法与当地原住民习俗法的案件！',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Walaupun pemimpin tempatan dikekalkan dalam jawatan dan mahkamah adat, **kuasa tertinggi tetap berada di tangan Raja Brooke dan Gabenor SBUB** (`K7.5.8`: keupayaan berfikiran kritis dan berpandangan jauh agar tidak terpedaya dengan muslihat pentadbiran luar).',
            zh: '⚠️ 考官陷阱提醒（K7.5.8）：表面上传统领袖被保留官衔并参与议会，实际上最高立法、财政与土地大权完全垄断在白人拉惹与 SBUB 英国官员手中！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Perbandingan Lengkap Pentadbiran Dinasti Brooke di Sarawak dengan Pentadbiran SBUB di Sabah',
        titleZh: '砂拉越布洛克王朝与沙巴 SBUB 行政管理体系全面对比表',
        headers: [
          { bm: 'Aspek Pentadbiran', zh: '行政维度' },
          { bm: 'Sarawak (Dinasti Brooke)', zh: '砂拉越（布洛克王朝）' },
          { bm: 'Sabah (SBUB)', zh: '沙巴（英属北婆罗洲公司 SBUB）' },
        ],
        rows: [
          [
            { bm: '**Ketua Tertinggi & Majlis**', zh: '最高首脑与辅助议会' },
            {
              bm: '**Raja Putih Sarawak** dibantu oleh **Majlis Tertinggi (1855)** dan **Majlis Negeri (1867)**.',
              zh: '砂拉越白人拉惹；由最高议会（1855）及州议会（1867）辅佐。',
            },
            {
              bm: '**Gabenor** (bertanggungjawab kepada **Lembaga Pengarah di London**) dibantu oleh **Majlis Penasihat (1883)**.',
              zh: '总督（向伦敦董事会负责）；由咨询议会（1883）辅佐。',
            },
          ],
          [
            { bm: '**Pembahagian Wilayah**', zh: '地方行政区划' },
            {
              bm: 'Dibahagikan kepada **5 Bahagian** (Pertama–Kelima) -> **Daerah** -> **Kampung**.',
              zh: '划分为 5 大省（Bahagian）→ 县（Daerah）→ 村（Kampung）。',
            },
            {
              bm: 'Dibahagikan kepada **5 Residensi** (Pantai Barat, Kudat, Sandakan, Tawau, Pedalaman) -> **Daerah** -> **Kampung**.',
              zh: '划分为 5 大驻扎区（Residensi：西海岸、古达、山打根、斗湖、内陆）→ 县 → 村。',
            },
          ],
          [
            { bm: '**Golongan Elit Tempatan**', zh: '受委任的当地精英' },
            {
              bm: '**Datu Patinggi, Datu Bandar, Datu Temenggung, Datu Imam, Datu Hakim**, **Temenggung**, **Penghulu**, **Tuai Rumah**, serta **Kapitan / Kangchu** Cina.',
              zh: '马来各 Datu 大臣、原住民天猛公与彭古鲁、长屋屋长，以及华人甲必丹与港主。',
            },
            {
              bm: '**Ketua Anak Negeri** bergelar **Orang Kaya-Kaya (OKK)**, **Ketua Kampung (Orang Tua)**, dan **Kapitan Cina**.',
              zh: '受封 OKK（Orang Kaya-Kaya）的原住民酋长（Ketua Anak Negeri）、村长（Orang Tua）及华人甲必丹。',
            },
          ],
          [
            { bm: '**Perundangan & Kehakiman**', zh: '法律与司法法庭' },
            {
              bm: '**Undang-Undang Delapan Perkara**, Mahkamah Raja/Majistret, **Mahkamah Adat**, dan **Mahkamah Cina (1911)**.',
              zh: '《八条法令》、拉惹/推事法庭、习俗法庭（Mahkamah Adat）及华人法庭（1911）。',
            },
            {
              bm: '**Mahkamah Majistret** (undang-undang Barat oleh Pegawai Daerah) dan **Mahkamah Anak Negeri** (undang-undang Islam & adat oleh **OKK**).',
              zh: '推事庭（县官依西方法审重案）与原住民法庭（OKK 依伊斯兰法及习俗法审理）。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Charles Brooke',
        roleBm: 'Raja Putih Kedua Sarawak',
        roleZh: '砂拉越第二任白人拉惹',
        emoji: '👑',
        lineBm:
          'Saya memantapkan pentadbiran Sarawak kepada **5 Bahagian**, menubuhkan **Majlis Negeri (1867)**, mewujudkan **Mahkamah Cina (1911)**, serta mengasingkan peranan kaum Melayu, Iban, dan Cina!',
        lineZh:
          '我将砂拉越整合为五大省，创立 1867 年州议会与 1911 年华人法庭，并让马来人从政、伊班人当兵、华人经商，各司其职！',
      },
      {
        speakerBm: 'Datu Hakim',
        roleBm: 'Pembesar Melayu dalam Pentadbiran Brooke',
        roleZh: '布洛克体制下的马来司法大臣',
        emoji: '⚖️',
        lineBm:
          'Walaupun gelaran **Datu Patinggi**, **Datu Imam**, dan **Datu Hakim** dikekalkan dalam **Majlis Tertinggi**, segala keputusan muktamad dan hasil cukai negeri kini dikawal oleh Raja Brooke!',
        lineZh:
          '虽然我们的 Datu Patinggi、Datu Imam 与 Datu Hakim 官衔被保留在最高议会里，但最终决策权与全州税收大权全都掌握在拉惹手中！',
      },
      {
        speakerBm: 'OKK Mohammad Arshad',
        roleBm: 'Ketua Anak Negeri dalam Pentadbiran SBUB di Sabah',
        roleZh: '沙巴 SBUB 体制下的原住民酋长（OKK）',
        emoji: '🏛️',
        lineBm:
          'Di Sabah pula, saya dilantik sebagai **Ketua Anak Negeri** bergelar **Orang Kaya-Kaya (OKK)** untuk menghakimi kes hukum adat dan Islam di **Mahkamah Anak Negeri**, manakala kes berat diadili Pegawai Daerah di **Mahkamah Majistret**!',
        lineZh:
          '在沙巴，我受委为拥有 OKK 头衔的原住民酋长，负责在原住民法庭（Mahkamah Anak Negeri）审理伊斯兰法与习俗案件；至于抢劫谋杀等重案则由英国县官在推事庭审理！',
      },
    ],
    memoryHackBm:
      '4 Tonggak Pentadbiran Barat (Bab 5.4) = **"W.E.K.M."**: **W**ilayah (5 Bahagian Sarawak vs 5 Residensi Sabah), **E**lit Tempatan (Datu/Penghulu vs **OKK**/Orang Tua), **K**aum (Melayu=Tadbir, Iban=Tentera, Cina=Ekonomi/Kapitan/Kangchu), **M**ahkamah (Sarawak: Adat + Cina 1911; Sabah: **Majistret** [Pegawai Daerah] vs **Anak Negeri** [OKK])!',
    memoryHackZh:
      '🧠 王牌秒记口诀：【5.4 四大行政支柱 W-E-K-M】① 区划（Wilayah）：砂 5 省（Bahagian）对沙 5 驻扎区（Residensi）；② 精英（Elit）：砂拉越找 Datu，沙巴找 OKK；③ 族群（Kaum）：马来行政、伊班军警、华人甲必丹经商；④ 法庭（Mahkamah）：沙巴必考对比——县官坐推事庭（Majistret 审西方法重案），OKK 坐原住民庭（Anak Negeri 审伊斯兰与习俗法）！',
    subtopicMcqs: [
      {
        id: '5.4-mcq-1',
        spCode: '7.5.4',
        questionBm:
          'Mengapakah **Dinasti Brooke** di Sarawak dan **SBUB** di Sabah mengekalkan golongan pembesar serta pemimpin elit tempatan dalam pentadbiran mereka?',
        questionZh: '为什么砂拉越布洛克王朝与沙巴 SBUB 在行政管理中保留当地贵族与传统精英领袖？',
        options: [
          {
            id: 'A',
            textBm: 'Untuk menyerahkan semula kemerdekaan penuh kepada penduduk peribumi dalam masa lima tahun',
            textZh: '为了在五年内将完全独立权归还给原住民',
          },
          {
            id: 'B',
            textBm: 'Kerana bilangan pegawai Eropah yang tidak mencukupi, menjimatkan kos, dan mengelakkan penentangan tempatan',
            textZh: '因为欧洲官员人数不足、可节省行政经费，并避免引发当地民众反抗',
          },
          {
            id: 'C',
            textBm: 'Kerana dipaksa oleh Kesultanan Melaka melalui undang-undang laut',
            textZh: '因为受到马六甲苏丹国海事法的强制要求',
          },
          {
            id: 'D',
            textBm: 'Untuk melatih pembesar tempatan menjadi ahli Lembaga Pengarah di London',
            textZh: '为了培训当地贵族成为伦敦董事会成员',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Kekurangan pegawai Eropah, kekangan kewangan syarikat/kerajaan, serta keperluan memahami adat tempatan bagi mengelakkan penentangan mendorong Brooke dan SBUB mengekalkan pemimpin tempatan.',
        explanationZh:
          '欧洲官员人手短缺、行政经费有限，加上借重熟悉习俗的本土领袖可减少民怨与反抗，促使布洛克与 SBUB 采取间接统治。',
      },
      {
        id: '5.4-mcq-2',
        spCode: '7.5.4',
        questionBm:
          'Apakah gelaran rasmi yang diberikan kepada **Ketua Anak Negeri** yang membantu Pegawai Daerah dalam pentadbiran **SBUB** di Sabah?',
        questionZh: '在沙巴 SBUB 行政体制中，协助县官的原住民酋长（Ketua Anak Negeri）获授予什么官方头衔？',
        options: [
          { id: 'A', textBm: '**Orang Kaya-Kaya (OKK)**', textZh: 'Orang Kaya-Kaya (OKK)' },
          { id: 'B', textBm: '**Peran Lepo**', textZh: 'Peran Lepo' },
          { id: 'C', textBm: '**Datu Bandar**', textZh: 'Datu Bandar' },
          { id: 'D', textBm: '**Kangchu**', textZh: 'Kangchu（港主）' },
        ],
        correctId: 'A',
        explanationBm:
          'Di Sabah, **Ketua Anak Negeri** yang diakui oleh SBUB diberikan gelaran **Orang Kaya-Kaya (OKK)**, contohnya **OKK Mohammad Arshad**.',
        explanationZh:
          '在沙巴 SBUB 体制下，受认可的原住民酋长（Ketua Anak Negeri）获封 Orang Kaya-Kaya（简称 OKK）头衔，代表人物如 OKK Mohammad Arshad。',
      },
      {
        id: '5.4-mcq-3',
        spCode: '7.5.4',
        questionBm:
          'Apakah fungsi **Mahkamah Cina** yang diwujudkan di Kuching oleh pentadbiran Dinasti Brooke pada tahun **1911**?',
        questionZh: '布洛克王朝于 1911 年在古晋设立的“华人法庭”（Mahkamah Cina）具有什么职能？',
        options: [
          {
            id: 'A',
            textBm: 'Menggubal perlembagaan baharu bagi Kesultanan Brunei',
            textZh: '为文莱苏丹国起草新宪法',
          },
          {
            id: 'B',
            textBm: 'Mengutip cukai eksport petroleum di Miri',
            textZh: '征收美里的石油出口税',
          },
          {
            id: 'C',
            textBm: 'Mengurus dan mengadili kes-kes yang melibatkan adat serta masyarakat Cina',
            textZh: '审理并处理涉及华人社群习俗与纠纷的案件',
          },
          {
            id: 'D',
            textBm: 'Melantik Gabenor SBUB di Sandakan',
            textZh: '委任驻山打根的 SBUB 总督',
          },
        ],
        correctId: 'C',
        explanationBm:
          '**Mahkamah Cina** ditubuhkan di Kuching pada tahun **1911** khusus untuk menangani dan mengadili kes-kes sivil serta adat yang melibatkan masyarakat Cina yang semakin bertambah di Sarawak.',
        explanationZh:
          '1911 年在古晋设立的华人法庭（Mahkamah Cina），专门审理砂拉越日益庞大的华人社群内部的习俗、婚姻与商业纠纷案件。',
      },
      {
        id: '5.4-mcq-4',
        spCode: '7.5.4',
        questionBm:
          'Bagaimanakah pembahagian bidang kuasa antara **Mahkamah Majistret** dengan **Mahkamah Anak Negeri** di Sabah semasa pentadbiran SBUB?',
        questionZh: '在 SBUB 统治沙巴时期，“推事庭”（Mahkamah Majistret）与“原住民法庭”（Mahkamah Anak Negeri）的司法管辖权是如何划分的？',
        options: [
          {
            id: 'A',
            textBm: 'Mahkamah Majistret mengadili kes adat peribumi, manakala Mahkamah Anak Negeri mengadili kes perkapalan Eropah',
            textZh: '推事庭审理原住民习俗案，原住民法庭审理欧洲海事案',
          },
          {
            id: 'B',
            textBm: 'Mahkamah Majistret menggunakan undang-undang Barat bagi kes berat, manakala Mahkamah Anak Negeri membicarakan kes undang-undang Islam dan adat tempatan',
            textZh: '推事庭依西方法律审理重案，原住民法庭则审理涉及伊斯兰法与当地习俗法的案件',
          },
          {
            id: 'C',
            textBm: 'Kedua-dua mahkamah dihakimi sepenuhnya oleh peguam dari Amerika Syarikat',
            textZh: '两个法庭皆完全由来自美国的律师担任法官',
          },
          {
            id: 'D',
            textBm: 'Mahkamah Anak Negeri hanya membicarakan kes pekerja lombong Cina di Bau',
            textZh: '原住民法庭只审理石隆门华人矿工案件',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Di Sabah, **Mahkamah Majistret** dikendalikan oleh **Pegawai Daerah** menggunakan undang-undang Barat bagi kes berat (rompakan, culik, bunuh), manakala **Mahkamah Anak Negeri** diketuai **Ketua Anak Negeri (OKK)** bagi kes undang-undang Islam dan hukum adat.',
        explanationZh:
          '沙巴推事庭由县官依西方法律审理抢劫、绑架、谋杀等重罪；原住民法庭则由原住民酋长（OKK）审理伊斯兰法与传统习俗案件。',
      },
      {
        id: '5.4-mcq-5',
        spCode: '7.5.4',
        questionBm:
          'Dalam dasar pentadbiran berasaskan kaum oleh **Dinasti Brooke** di Sarawak, apakah bidang pengkhususan yang diberikan kepada masyarakat **Iban**?',
        questionZh: '在布洛克王朝按族群分治的政策下，砂拉越伊班族（Iban）被分配专注于哪个领域？',
        options: [
          { id: 'A', textBm: 'Perbankan dan kewangan antarabangsa', textZh: '国际银行业与金融业' },
          { id: 'B', textBm: 'Pengurusan lombong emas di Bau', textZh: '管理石隆门金矿开采' },
          { id: 'C', textBm: 'Perdagangan eksport-import di pelabuhan', textZh: '港口进出口商业贸易' },
          { id: 'D', textBm: 'Keselamatan dan ketenteraan', textZh: '治安防卫与军事力量' },
        ],
        correctId: 'D',
        explanationBm:
          'Dinasti Brooke melibatkan orang **Melayu** dalam **pentadbiran**, orang **Cina** dalam **ekonomi**, dan orang **Iban** dalam bidang **keselamatan serta ketenteraan** (seperti pasukan *Sarawak Rangers*).',
        explanationZh:
          '布洛克实行分而治之：马来人参与行政、华人从事经济开发，而骁勇善战的伊班人则被编入治安与军事部队（如 Sarawak Rangers）。',
      },
    ],
    strukturQuestion: {
      id: '5.4-struktur',
      spCode: '7.5.4',
      stimulusBm:
        '**Dinasti Brooke** di Sarawak dan **Syarikat Borneo Utara British (SBUB)** di Sabah melaksanakan perubahan pentadbiran melalui pembahagian wilayah, pengekalan golongan elit tempatan, pentadbiran berasaskan kaum, serta sistem perundangan.',
      stimulusZh:
        '砂拉越布洛克王朝与沙巴 SBUB 通过区域划分、保留当地精英、按族群分治及建立司法制度推行行政改革。',
      parts: [
        {
          partLabel: '(a)',
          marks: 2,
          questionBm:
            'Namakan **dua** majlis pentadbiran yang ditubuhkan oleh **Dinasti Brooke** di Sarawak.',
          questionZh: '写出布洛克王朝在砂拉越设立的两个行政议会名称。（2分）',
          expectedKeywordsBm: ['Majlis Tertinggi', 'Majlis Negeri'],
          modelAnswerBm:
            'Dua majlis pentadbiran yang ditubuhkan oleh Dinasti Brooke di Sarawak ialah **Majlis Tertinggi (1855)** dan **Majlis Negeri (1867)**.',
          modelAnswerZh:
            '布洛克王朝在砂拉越设立的两个行政议会是：最高议会（Majlis Tertinggi, 1855）与州议会（Majlis Negeri, 1867）。',
        },
        {
          partLabel: '(b)',
          marks: 4,
          questionBm:
            'Bandingkan sistem kehakiman antara **Mahkamah Majistret** dengan **Mahkamah Anak Negeri** di Sabah semasa pentadbiran SBUB.',
          questionZh: '比较沙巴在 SBUB 统治时期的“推事庭”与“原住民法庭”司法制度。（4分）',
          expectedKeywordsBm: [
            'Mahkamah Majistret',
            'Pegawai Daerah',
            'undang-undang Barat',
            'Mahkamah Anak Negeri',
            'Ketua Anak Negeri',
            'undang-undang Islam',
            'adat',
          ],
          modelAnswerBm:
            '**Mahkamah Majistret** dihakimi oleh **Pegawai Daerah** (**Fakta**) yang menggunakan **undang-undang Barat** untuk mengadili kes-kes berat seperti rompakan, culik, dan bunuh (**Huraian**). Sebaliknya, **Mahkamah Anak Negeri** diketuai oleh **Ketua Anak Negeri (OKK)** (**Fakta**) untuk membicarakan kes-kes yang berkaitan dengan **undang-undang Islam dan hukum adat tempatan** (**Huraian**).',
          modelAnswerZh:
            '推事庭（Mahkamah Majistret）由县官（Pegawai Daerah）担任法官（Fakta），采用西方法律审理抢劫、绑架与谋杀等重案（Huraian）；相反地，原住民法庭（Mahkamah Anak Negeri）由原住民酋长（Ketua Anak Negeri / OKK）主持（Fakta），专门审理涉及伊斯兰法与当地传统习俗法的案件（Huraian）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Pada pendapat anda, apakah kesan negatif dasar pentadbiran berasaskan kaum yang diamalkan oleh kuasa Barat terhadap masyarakat di negara kita? (`KBAT` — `K7.5.8`)',
          questionZh: '依你之见，西方势力推行的“按族群分治”政策对我国社会造成了什么负面影响？（高思维 KBAT — 4分）',
          expectedKeywordsBm: [
            'perpaduan',
            'jurang ekonomi',
            'interaksi',
            'prasangka',
            'pecah dan perintah',
          ],
          modelAnswerBm:
            'Dasar pentadbiran berasaskan kaum mewujudkan **pemisahan tempat tinggal dan bidang pekerjaan** mengikut etnik (**Fakta**). Keadaan ini mengurangkan **interaksi sosial** serta persefahaman antara kaum dan melebarkan **jurang ekonomi** (**Huraian**), contohnya orang Cina tertumpu dalam perdagangan manakala peribumi kekal dalam ekonomi sara diri atau pentadbiran bawahan (**Contoh**). Kesannya, proses membina **perpaduan dan integrasi nasional** menjadi lebih sukar (**Inferens**).',
          modelAnswerZh:
            '按族群分治政策导致各族在居住地区与职业领域上被人为割裂（Fakta）。这种状况减少了跨族群的社会互动与相互理解，并拉大了族群间的经济鸿沟（Huraian），例如华人集中于商贸，而原住民则局限于传统生计或基层职务（Contoh）。其结果是严重阻碍了国民团结与国家融合的进程（Inferens）。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 6.1 — Pengenalan Ekonomi Moden oleh Kuasa Barat di Negara Kita
  // ============================================================================
  {
    subtopicCode: '6.1',
    babNumber: 6,
    babTitleBm: 'Kesan Pentadbiran Barat Terhadap Ekonomi dan Sosial',
    babTitleZh: '西方行政管理对我国经济与社会的影响',
    skCode: '7.6',
    spCodes: ['7.6.1', 'K7.6.5'],
    titleBm: 'Pengenalan Ekonomi Moden oleh Kuasa Barat di Negara Kita',
    titleZh: '西方势力在我国推行现代经济',
    heroImages: [
      {
        imageKey: 'bab6_economy_society',
        captionBm:
          'Transformasi landskap ekonomi negara kita melalui pembukaan estet getah, kelapa sawit, perlombongan moden, dan jaringan pengangkutan eksport.',
        captionZh:
          '西方殖民统治下我国经济面貌的剧变：大规模橡胶与油棕种植园、现代采矿业及出口铁路网的兴起。',
        hotspots: [
          {
            x: 18,
            y: 60,
            termBm: 'Pertanian Komersial Berskala Besar (Estet)',
            meaningZh: '大规模商业种植园（Estet）',
            detailBm:
              'Pembukaan ladang luas bagi tanaman eksport seperti **getah**, **kelapa sawit** (Estet Tenammaram, Kuala Selangor 1917), **tembakau** di Sabah, dan **sagu** di Sarawak.',
            detailZh:
              '开辟辽阔园丘种植出口作物，如橡胶、油棕（1917年瓜拉雪兰莪 Tenammaram 园丘）、沙巴烟草及砂拉越硕莪。',
          },
          {
            x: 44,
            y: 56,
            termBm: 'Ekonomi Berorientasikan Eksport',
            meaningZh: '出口导向型现代经济',
            detailBm:
              'Hasil **bijih timah**, **petroleum** (Miri 1910), dan **getah** diangkut terus dari kawasan pedalaman ke pelabuhan untuk dieksport ke Eropah dan Amerika Syarikat.',
            detailZh:
              '锡矿、石油（1910年美里）与天然胶从内陆产地直运港口，源源不断输往欧美工业国。',
          },
          {
            x: 76,
            y: 76,
            termBm: 'Tenaga Buruh yang Ramai',
            meaningZh: '庞大外来劳动力',
            detailBm:
              'Kemasukan buruh luar dari **China**, **India**, dan **Jawa** menampung keperluan tenaga kerja yang tinggi di lombong bijih timah dan estet getah.',
            detailZh:
              '引进大批中国、印度与爪哇劳工，以满足锡矿场与橡胶种植园对庞大劳动力的需求。',
          },
          {
            x: 60,
            y: 26,
            termBm: 'Pelabuhan & Perdagangan Antarabangsa',
            meaningZh: '现代港口与国际贸易连接',
            detailBm:
              'Pelaburan **modal yang besar** oleh syarikat Eropah menghubungkan ekonomi Tanah Melayu, Sarawak, dan Sabah dengan pasaran komoditi dunia.',
            detailZh:
              '欧洲跨国企业投入巨额资本，将马来亚、砂拉越与沙巴紧密纳入全球大宗商品供应链。',
          },
        ],
      },
      {
        imageKey: 'bab6_kapal_korek_getah',
        captionBm:
          'Penggunaan teknologi kapal korek dalam perlombongan bijih timah dan teknik torehan moden di ladang getah.',
        captionZh:
          '采锡业引入巨型采锡铁船（Kapal Korek）与橡胶园科学割胶技术的现代经济双引擎。',
      },
    ],
    sections: [
      {
        sectionCode: '6.1(a)',
        headingBm: 'Empat Ciri Utama Ekonomi Moden di Negara Kita',
        headingZh: '我国现代经济的四大核心特征',
        leadParagraphBm:
          'Selepas mengukuhkan kuasa politik di Negeri-negeri Melayu, Sarawak, dan Sabah, kuasa Barat memperkenalkan **sistem ekonomi moden berorientasikan eksport** yang mempunyai **empat ciri utama** iaitu **modal yang besar**, **penggunaan teknologi moden**, **tenaga buruh yang ramai**, serta **pengeluaran berskala besar dan tanah yang luas**.',
        leadParagraphZh:
          '西方势力在稳固政治控制权后，全面推行以满足欧美工业原料需求为目标的“出口导向型现代经济”，具备四大鲜明特征：巨额资本、现代科技、庞大劳力，以及大规模生产与广袤土地。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Ciri 1 — Modal yang Besar**: Kegiatan perlombongan dan perladangan komersial memerlukan suntikan **modal yang besar** daripada pelabur Eropah dan Cina bagi membeli jentera berat, membina kilang pemprosesan, serta membuka estet.',
            zh: '【特征一：巨额资本（Modal yang Besar）】现代采矿与商业种植需投入巨额资金（主要来自欧洲股份公司与华人资本家），以购置重型机械、兴建加工厂及开辟大型园丘。',
          },
          {
            tag: 'FAKTA',
            bm: '**Ciri 2 — Penggunaan Teknologi Moden**: Sektor perlombongan menggunakan **kapal korek (*tin dredge*)** dan **pam kelikir / melombong secara hidraulik**, manakala sektor perladangan menggunakan kaedah pembiakan baka dan torehan saintifik.',
            zh: '【特征二：采用现代科技（Teknologi Moden）】矿业采用采锡铁船（kapal korek）与水力砂泵法；种植业则引入优良品种培育与科学割胶技术以倍增产量。',
          },
          {
            tag: 'FAKTA',
            bm: '**Ciri 3 — Penggunaan Tenaga Buruh yang Ramai**: Kerana skala operasi yang amat besar, kuasa Barat membawa masuk **tenaga buruh luar secara ramai** terutamanya buruh **Cina** di lombong dan buruh **India** serta **Jawa** di ladang estet.',
            zh: '【特征三：庞大劳动力（Tenaga Buruh yang Ramai）】因生产规模空前庞大，殖民政府大量引进外来劳工——华工集中于矿场，印裔与爪哇劳工则集中于橡胶与烟草园丘。',
          },
          {
            tag: 'FAKTA',
            bm: '**Ciri 4 — Pengeluaran Berskala Besar & Tanah yang Luas**: Pembukaan beribu-ribu hektar hutan untuk dijadikan **estet tanaman komersial** dan kawasan konsesi lombong bertujuan menghasilkan komoditi **berskala besar** bagi pasaran eksport antarabangsa.',
            zh: '【特征四：大规模生产与广袤土地（Pengeluaran Berskala Besar）】动辄开辟数千公顷热带雨林作为种植园（estet）与采矿特许地，产品全部供应国际出口市场。',
          },
        ],
      },
      {
        sectionCode: '6.1(b)',
        headingBm: 'Kegiatan Perlombongan Moden (Tanah Melayu, Sarawak dan Sabah)',
        headingZh: '现代采矿业的发展（马来亚、砂拉越与沙巴）',
        leadParagraphBm:
          'Kekayaan hasil galian di perut bumi negara kita dieksploitasi secara komersial oleh syarikat-syarikat Barat merangkumi **bijih timah**, **emas**, **arang batu**, **antimoni**, dan **petroleum**.',
        leadParagraphZh:
          '我国地下蕴藏的丰富矿产遭西方企业大规模商业开采，核心矿产涵盖锡矿、黄金、煤炭、锑矿与石油。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Perlombongan di Negeri-negeri Melayu**: **Bijih timah** dilombong secara giat di **Perak** (Larut, Lembah Kinta — Ipoh, Batu Gajah, Gopeng), **Selangor** (Kuala Lumpur, Ampang, Lukut, Jugra), **Negeri Sembilan** (Sungai Ujong), dan **Pahang** (**Sungai Lembing** — lombong bijih timah bawah tanah oleh *Pahang Consolidated Company Limited*); **emas** dilombong secara komersial di **Raub, Pahang** (*Raub Australian Gold Mining Company*); manakala **arang batu** dilombong di **Batu Arang, Selangor**.',
            zh: '【马来亚三大矿产】① 锡矿：霹雳（拉律、近打河谷）、雪兰莪（吉隆坡、安邦、芦骨）、森美兰（双溪芙蓉）及彭亨林明（Sungai Lembing，世界著名地下深井锡矿）；② 黄金：彭亨劳勿（Raub，由澳洲金矿公司开采）；③ 煤炭：雪兰莪煤炭山（Batu Arang）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Perlombongan di Sarawak**: **Antimoni** dan **emas** dilombong di **Bau** (diusahakan secara moden oleh ***Borneo Company Limited***), **arang batu** di **Sadong**, manakala **petroleum** ditemui di **Miri** pada tahun **1910** dan diusahakan oleh ***The Anglo-Saxon Petroleum Company*** dengan telaga minyak pertama bernama ***The Grand Old Lady*** di Bukit Kanada serta kilang penapis minyak di **Lutong**.',
            zh: '【砂拉越矿产与石油 —— 必考地标！】石隆门（Bau）盛产锑矿与黄金（由慕娘公司 Borneo Company 开采），沙隆（Sadong）产煤；而美里（Miri）于 1910 年由盎格鲁-撒克逊石油公司钻探出第一口油井“老妇人”（The Grand Old Lady），并在罗东（Lutong）建立炼油厂！',
          },
          {
            tag: 'CONTOH',
            bm: '**Perlombongan di Sabah**: Kegiatan melombong **emas** dijalankan di **Sungai Segama**, manakala **arang batu** dilombong secara komersial di **Silimpopon** (Tawau), **Sandakan**, dan **Pulau Labuan** oleh ***Cowie Harbour Coal Company***.',
            zh: '【沙巴矿产】黄金主要在东海岸的西加麦河（Sungai Segama）开采；煤炭则在斗湖附近的西林波旁（Silimpopon）、山打根及纳闽岛（Labuan）由 Cowie Harbour 煤矿公司开采。',
          },
        ],
      },
      {
        sectionCode: '6.1(c)',
        headingBm: 'Kegiatan Pertanian Komersial dan Kemuncak Tanaman Getah',
        headingZh: '商业农业的扩张与橡胶种植业的巅峰',
        leadParagraphBm:
          'Selain perlombongan, pentadbiran Barat menggalakkan penanaman pelbagai **tanaman komersial** untuk eksport sebelum industri **getah (*Hevea brasiliensis*)** muncul sebagai komoditi terpenting negara pada awal abad ke-20.',
        leadParagraphZh:
          '除采矿业外，西方政府大力推广各类出口导向的商业农作物；到了20世纪初，随着欧美汽车工业爆发，橡胶（Getah）一跃成为我国最赚钱的经济支柱！',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Pertanian Komersial di Negeri-negeri Melayu**: **Lada hitam, buah pala, dan cengkih** ditanam di Pulau Pinang dan Singapura; **lada hitam dan gambir** di Johor (Sistem Kangchu); **tebu** di **Seberang Perai** dan **Kerian, Perak**; **ubi kayu** di **Melaka**, Negeri Sembilan, dan Selangor; serta **kopi** di Perak, Selangor, Negeri Sembilan, dan Johor.',
            zh: '【马来亚早期商业作物】槟城与新加坡种黑胡椒、豆蔻与丁香；柔佛通过“港主制度”大种黑胡椒与甘蜜；威省（Seberang Perai）与霹雳吉辇（Kerian）种甘蔗；马六甲种木薯（ubi kayu）；霹雪森柔亦曾广种咖啡。',
          },
          {
            tag: 'CONTOH',
            bm: '**Kelapa Sawit Komersial Pertama (1917)**: Tanaman **kelapa sawit** diperkenalkan secara komersial oleh pengusaha Perancis, **Henri Fauconnier**, di **Estet Tenammaram, Batang Berjuntai (Kuala Selangor), Selangor pada tahun 1917** sebelum meluas ke Johor dan Perak, di samping industri pengetinan **nanas** dan tanaman **teh** di *Cameron Highlands*.',
            zh: '【必背第一座商业油棕园：1917】法国企业家 Henri Fauconnier 于 1917 年在雪兰莪瓜拉雪兰莪（八丁燕带）开辟“Tenammaram 园丘”，开启我国商业油棕种植史！',
          },
          {
            tag: 'CONTOH',
            bm: '**Pertanian Komersial di Sarawak & Sabah**: Di **Sarawak**, tanaman komersial utama ialah **sagu** (Oya, Mukah, Bintulu), **lada hitam**, dan **getah**; manakala di **Sabah**, daun **tembakau** berkualiti tinggi diusahakan di **Pulau Banggi, Teluk Marudu, Lahad Datu, Tawau, dan Sandakan** untuk pasaran cerut di **Amsterdam (Belanda)**, diikuti tanaman **getah** di sepanjang laluan kereta api Beaufort–Jesselton–Tenom.',
            zh: '【砂沙商业农业】砂拉越以硕莪（沐胶、民都鲁）、黑胡椒与橡胶为主；沙巴则以顶级雪茄烟草（tembakau，产于邦耳岛、拿笃、斗湖、山打根，远销荷兰阿姆斯特丹）及西海岸铁路沿线的橡胶园最为著名。',
          },
          {
            tag: 'HURAIAN',
            bm: '**Kemuncak Industri Getah**: Permintaan dunia terhadap **getah asli** melonjak secara mendadak pada awal abad ke-20 berikutan perkembangan pesat **industri pembuatan kereta** (penciptaan tayar pneumatik), kasut, penebat kabel elektrik, dan peralatan perubatan di Eropah serta Amerika Syarikat (`K7.6.5`: memanfaatkan kekayaan hasil bumi demi kemajuan negara).',
            zh: '【橡胶崛起原因】20世纪初欧美汽车工业（充气轮胎需求暴增）、电器绝缘电缆、胶鞋与医疗用品工业迅猛发展，推动天然胶价格飙升，促使马来亚、砂拉越与沙巴掀起种胶热潮！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Taburan Kegiatan Perlombongan dan Pertanian Komersial Mengikut Wilayah (Tanah Melayu, Sarawak & Sabah)',
        titleZh: '马来亚、砂拉越与沙巴现代采矿业及商业农业分布总览表',
        headers: [
          { bm: 'Wilayah', zh: '地区' },
          { bm: 'Kegiatan Perlombongan Utama', zh: '主要采矿活动与著名地点' },
          { bm: 'Kegiatan Pertanian Komersial Utama', zh: '主要商业农作物与著名地点' },
        ],
        rows: [
          [
            { bm: '**Negeri-negeri Melayu**', zh: '马来诸邦（半岛）' },
            {
              bm: '• **Bijih Timah**: Larut, Lembah Kinta (Perak); KL, Ampang, Lukut (Selangor); Sungai Ujong (N.S.); **Sungai Lembing** (Pahang)\n• **Emas**: **Raub, Pahang** (*Raub Australian Gold Mining*)\n• **Arang Batu**: **Batu Arang, Selangor**',
              zh: '• 锡矿：拉律、近打河谷、吉隆坡、双溪芙蓉、彭亨林明\n• 黄金：彭亨劳勿（澳洲金矿公司）\n• 煤炭：雪兰莪煤炭山（Batu Arang）',
            },
            {
              bm: '• **Getah**: Perak, Selangor, N.S., Johor\n• **Kelapa Sawit**: **Estet Tenammaram, Kuala Selangor (1917, Henri Fauconnier)**\n• **Tebu**: Seberang Perai & Kerian | **Ubi Kayu**: Melaka\n• **Lada Hitam & Gambir**: Johor | **Kopi, Nanas, Teh**',
              zh: '• 橡胶：霹、雪、森、柔各大园丘\n• 油棕：1917年瓜雪 Tenammaram 园丘（Henri Fauconnier）\n• 甘蔗：威省与吉辇 | 木薯：马六甲 | 胡椒甘蜜：柔佛',
            },
          ],
          [
            { bm: '**Sarawak**', zh: '砂拉越 (Sarawak)' },
            {
              bm: '• **Petroleum**: **Miri (1910)** — *The Anglo-Saxon Petroleum Company*, telaga ***Grand Old Lady*** & penapis Lutong\n• **Emas & Antimoni**: **Bau** (*Borneo Company*)\n• **Arang Batu**: **Sadong**',
              zh: '• 石油：美里（1910，盎格鲁-撒克逊石油公司，“老妇人”一号油井及罗东炼油厂）\n• 黄金与锑矿：石隆门（Bau）\n• 煤炭：沙隆（Sadong）',
            },
            {
              bm: '• **Sagu**: Oya, Mukah, Bintulu (pengeluar utama dunia)\n• **Lada Hitam**: Kuching–Serian, Sarikei–Meradong\n• **Getah**: Eksport kedua terpenting selepas petroleum',
              zh: '• 硕莪：乌也、沐胶、民都鲁（占全球过半产量）\n• 黑胡椒：古晋—西连、泗里街\n• 橡胶：仅次于石油的第二大出口品',
            },
          ],
          [
            { bm: '**Sabah**', zh: '沙巴 (Sabah)' },
            {
              bm: '• **Emas**: **Sungai Segama**\n• **Arang Batu**: **Silimpopon** (Tawau), Sandakan & **Labuan** (*Cowie Harbour Coal Company*)\n• **Mangan**: Teluk Marudu',
              zh: '• 黄金：西加麦河（Sungai Segama）\n• 煤炭：西林波旁（Silimpopon）、山打根、纳闽岛\n• 锰矿：马鲁都湾',
            },
            {
              bm: '• **Tembakau**: Pulau Banggi, Teluk Marudu, Lahad Datu, Tawau, Sandakan (dieksport ke Amsterdam)\n• **Getah**: Beaufort, Jesselton, Tenom\n• **Sagu**',
              zh: '• 烟草：邦耳岛、拿笃、斗湖、山打根（远销荷兰阿姆斯特丹）\n• 橡胶：保佛、亚庇、丹南铁路沿线\n• 硕莪',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Jurutera The Anglo-Saxon Petroleum',
        roleBm: 'Peneroka Telaga Minyak Miri, Sarawak (1910)',
        roleZh: '1910年砂拉越美里油田工程师',
        emoji: '🛢️',
        lineBm:
          'Berita gempar pada Disember **1910**! Telaga minyak pertama kami di Bukit Kanada, **Miri** yang digelar ***The Grand Old Lady*** berjaya mengeluarkan **petroleum** secara komersial!',
        lineZh:
          '1910年12月特大喜讯！我们在美里加拿大山钻探的第一口油井“老妇人”（The Grand Old Lady）成功喷出商业石油啦！',
      },
      {
        speakerBm: 'Henri Fauconnier',
        roleBm: 'Pengasas Estet Kelapa Sawit Pertama (1917)',
        roleZh: '1917年马来亚首座商业油棕园创办人',
        emoji: '🌴',
        lineBm:
          'Saya membawa benih **kelapa sawit** dari Sumatera dan membuka ladang komersial pertama di **Estet Tenammaram, Kuala Selangor pada tahun 1917**. Tanaman ini bakal menjadi emas hijau negara!',
        lineZh:
          '我从苏门答腊引进油棕树苗，于 1917 年在瓜拉雪兰莪开辟了全马第一座商业油棕园——Tenammaram 园丘！这可是未来的绿色黄金！',
      },
      {
        speakerBm: 'Peladang Estet Getah',
        roleBm: 'Pengusaha Ladang Getah Eropah',
        roleZh: '欧洲橡胶种植园园主',
        emoji: '🚗',
        lineBm:
          'Dengan **modal besar**, **teknologi moden**, **tanah estet yang luas**, dan **buruh yang ramai**, kami membekalkan **getah** untuk kilang tayar kereta di Eropah dan Amerika Syarikat!',
        lineZh:
          '凭借巨额资本、现代科技、广袤园丘与大批劳工，我们的橡胶源源不断供应欧美汽车轮胎工厂，赚得盆满钵满！',
      },
    ],
    memoryHackBm:
      '4 Ciri Ekonomi Moden = **"M.T.B.S."** (**M**odal besar, **T**eknologi moden, **B**uruh ramai, **S**kala besar / Tanah luas)! Lokasi Wajib Ingat: **Raub** = Emas Pahang, **Batu Arang** = Arang Batu Selangor, **Miri 1910** = Petroleum (*Grand Old Lady*), **Silimpopon** = Arang Batu Sabah, **Tenammaram 1917** = Kelapa Sawit (**Henri Fauconnier**)!',
    memoryHackZh:
      '🧠 王牌秒记口诀：【现代经济四特征 M-T-B-S】大资本（Modal）、高科技（Teknologi）、多劳工（Buruh）、大规模广土地（Skala besar）！【五大黄金考点地标】彭亨劳勿挖黄金（Raub）、雪州煤炭山挖煤（Batu Arang）、砂州美里 1910 钻出“老妇人”石油（Miri Grand Old Lady）、沙巴西林波旁挖煤（Silimpopon）、1917 法国人 Fauconnier 在瓜雪 Tenammaram 种下第一棵商业油棕！',
    subtopicMcqs: [
      {
        id: '6.1-mcq-1',
        spCode: '7.6.1',
        questionBm:
          'Antara berikut, yang manakah merupakan **empat ciri utama** ekonomi moden yang diperkenalkan oleh kuasa Barat di negara kita?',
        questionZh: '下列哪一项准确概括了西方势力在我国推行的“现代经济”四大主要特征？',
        options: [
          {
            id: 'A',
            textBm: 'Modal kecil, peralatan tradisional, buruh keluarga, dan sara diri',
            textZh: '小额资本、传统农具、家庭劳力与自给自足',
          },
          {
            id: 'B',
            textBm: 'Modal yang besar, teknologi moden, tenaga buruh yang ramai, dan pengeluaran berskala besar',
            textZh: '巨额资本、现代科技、庞大劳动力与大规模生产',
          },
          {
            id: 'C',
            textBm: 'Sistem barter, cukai kepala, kerahan tenaga, dan tanaman pindah',
            textZh: '以物易物、人头税、强迫劳役与游耕农业',
          },
          {
            id: 'D',
            textBm: 'Monopoli pembesar tempatan, perahu layar, modal sederhana, dan pasaran kampung',
            textZh: '当地贵族垄断、帆船运输、中等资本与乡村市场',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Ekonomi moden berorientasikan eksport yang diperkenalkan oleh kuasa Barat memerlukan **modal yang besar**, **penggunaan teknologi moden**, **tenaga buruh yang ramai**, serta **pengeluaran berskala besar dan tanah yang luas**.',
        explanationZh:
          '西方现代出口经济的四大核心支柱即：巨额资本（Modal besar）、现代科技（Teknologi moden）、庞大劳动力（Buruh ramai）及大规模生产与广袤土地。',
      },
      {
        id: '6.1-mcq-2',
        spCode: '7.6.1',
        questionBm:
          'Syarikat manakah yang mengusahakan telaga minyak pertama ***The Grand Old Lady*** di **Miri, Sarawak** pada tahun **1910**?',
        questionZh: '哪一家公司于 1910 年在砂拉越美里（Miri）成功开采第一口油井“老妇人”（The Grand Old Lady）？',
        options: [
          {
            id: 'A',
            textBm: '***Raub Australian Gold Mining Company***',
            textZh: '劳勿澳洲金矿公司',
          },
          {
            id: 'B',
            textBm: '***Cowie Harbour Coal Company***',
            textZh: 'Cowie Harbour 煤矿公司',
          },
          {
            id: 'C',
            textBm: '***The Anglo-Saxon Petroleum Company***',
            textZh: '盎格鲁-撒克逊石油公司 (The Anglo-Saxon Petroleum Company)',
          },
          {
            id: 'D',
            textBm: '***Pahang Consolidated Company Limited***',
            textZh: '彭亨综合有限公司',
          },
        ],
        correctId: 'C',
        explanationBm:
          'Kegiatan perlombongan petroleum komersial di Bukit Kanada, **Miri** dimulakan pada tahun **1910** oleh ***The Anglo-Saxon Petroleum Company*** menerusi telaga minyak pertama ***The Grand Old Lady***.',
        explanationZh:
          '1910 年，盎格鲁-撒克逊石油公司（The Anglo-Saxon Petroleum Company）在美里加拿大山钻探出砂拉越第一口油井 The Grand Old Lady。',
      },
      {
        id: '6.1-mcq-3',
        spCode: '7.6.1',
        questionBm:
          'Di manakah lokasi penanaman **kelapa sawit** secara komersial yang pertama di Tanah Melayu pada tahun **1917** oleh **Henri Fauconnier**?',
        questionZh: '法国企业家 Henri Fauconnier 于 1917 年在马来亚哪里开辟了第一座商业油棕种植园？',
        options: [
          {
            id: 'A',
            textBm: '**Estet Tenammaram, Kuala Selangor**',
            textZh: '雪兰莪瓜拉雪兰莪 Tenammaram 园丘',
          },
          {
            id: 'B',
            textBm: '**Lembah Kinta, Perak**',
            textZh: '霹雳近打河谷',
          },
          {
            id: 'C',
            textBm: '**Silimpopon, Sabah**',
            textZh: '沙巴西林波旁',
          },
          {
            id: 'D',
            textBm: '**Seberang Perai, Pulau Pinang**',
            textZh: '槟城威省',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Tanaman **kelapa sawit** komersial pertama diusahakan oleh warga Perancis, **Henri Fauconnier**, di **Estet Tenammaram, Batang Berjuntai (Kuala Selangor), Selangor** pada tahun **1917**.',
        explanationZh:
          '1917 年 Henri Fauconnier 在雪兰莪瓜拉雪兰莪的 Tenammaram 园丘开启了我国商业化油棕种植业。',
      },
      {
        id: '6.1-mcq-4',
        spCode: '7.6.1',
        questionBm:
          'Apakah hasil perlombongan utama yang diusahakan oleh ***Cowie Harbour Coal Company*** di **Silimpopon** dan **Labuan**, Sabah?',
        questionZh: 'Cowie Harbour Coal Company 在沙巴西林波旁（Silimpopon）与纳闽（Labuan）主要开采什么矿产？',
        options: [
          { id: 'A', textBm: '**Antimoni**', textZh: '锑矿' },
          { id: 'B', textBm: '**Arang batu**', textZh: '煤炭 (Arang batu)' },
          { id: 'C', textBm: '**Bijih timah**', textZh: '锡矿' },
          { id: 'D', textBm: '**Bauksit**', textZh: '铝土矿' },
        ],
        correctId: 'B',
        explanationBm:
          '**Arang batu** dilombong secara komersial di **Silimpopon**, Sandakan, dan **Labuan** di Sabah oleh syarikat ***Cowie Harbour Coal Company***, manakala di Selangor ia dilombong di **Batu Arang**.',
        explanationZh:
          '西林波旁与纳闽是沙巴著名的煤炭（arang batu）产区，由 Cowie Harbour Coal Company 负责商业开采。',
      },
      {
        id: '6.1-mcq-5',
        spCode: '7.6.1',
        questionBm:
          'Apakah faktor utama di Eropah dan Amerika Syarikat yang mendorong peningkatan mendadak permintaan terhadap **getah asli** pada awal abad ke-20?',
        questionZh: '20 世纪初欧美国家出现什么关键发展，导致对天然橡胶的需求急剧飙升？',
        options: [
          {
            id: 'A',
            textBm: 'Kemerosotan industri tekstil bulu biri-biri di Britain',
            textZh: '英国羊毛纺织业的衰退',
          },
          {
            id: 'B',
            textBm: 'Penggunaan getah sebagai bahan api utama lokomotif wap',
            textZh: '使用橡胶作为蒸汽火车头的主要燃料',
          },
          {
            id: 'C',
            textBm: 'Penutupan semua laluan perdagangan laut melalui Terusan Suez',
            textZh: '苏伊士运河所有海上贸易航线关闭',
          },
          {
            id: 'D',
            textBm: 'Perkembangan pesat industri pembuatan kereta, tayar, kasut, dan barangan elektrik',
            textZh: '汽车制造业（轮胎）、胶鞋与电器工业的迅猛发展',
          },
        ],
        correctId: 'D',
        explanationBm:
          'Perkembangan pesat **industri pembuatan kereta** (yang memerlukan tayar getah pneumatik), pembuatan kasut, peralatan perubatan, serta penebat barangan elektrik di Eropah dan AS menyebabkan harga dan permintaan getah melambung tinggi.',
        explanationZh:
          '欧美汽车工业（充气轮胎）、电器绝缘材料及胶鞋制造业的爆发式增长，使天然橡胶成为全球炙手可热的工业原料。',
      },
    ],
    strukturQuestion: {
      id: '6.1-struktur',
      spCode: '7.6.1',
      stimulusBm:
        'Kuasa Barat memperkenalkan sistem ekonomi moden yang berorientasikan eksport dalam sektor **perlombongan** dan **pertanian komersial** di Negeri-negeri Melayu, Sarawak, dan Sabah.',
      stimulusZh:
        '西方势力在马来诸邦、砂拉越与沙巴的采矿业及商业农业领域推行出口导向型的现代经济体系。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Senaraikan **tiga** ciri utama ekonomi moden yang diperkenalkan oleh kuasa Barat di negara kita.',
          questionZh: '列出西方势力在我国推行的现代经济的其中三个主要特征。（3分）',
          expectedKeywordsBm: [
            'Modal yang besar',
            'Teknologi moden',
            'Tenaga buruh yang ramai',
            'Pengeluaran berskala besar',
            'Tanah yang luas',
          ],
          modelAnswerBm:
            'Tiga ciri utama ekonomi moden ialah memerlukan **modal yang besar**, menggunakan **teknologi moden**, dan menggunakan **tenaga buruh yang ramai** (serta **pengeluaran berskala besar / tanah yang luas**).',
          modelAnswerZh:
            '现代经济的三个主要特征是：需要巨额资本（modal yang besar）、使用现代科技（teknologi moden），以及雇用庞大劳动力（tenaga buruh yang ramai）（外加大规模生产/广袤土地）。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Jelaskan perkembangan kegiatan perlombongan moden di **Sarawak** dan **Sabah** semasa pentadbiran Barat.',
          questionZh: '说明西方行政管理时期砂拉越与沙巴现代采矿业的发展情况。（3分）',
          expectedKeywordsBm: [
            'petroleum',
            'Miri',
            'The Anglo-Saxon Petroleum Company',
            'emas',
            'Bau',
            'Sungai Segama',
            'arang batu',
            'Silimpopon',
          ],
          modelAnswerBm:
            'Di Sarawak, **emas** dan **antimoni** dilombong secara komersial di **Bau** oleh *Borneo Company* (**Fakta**), manakala **petroleum** dilombong di **Miri (1910)** oleh ***The Anglo-Saxon Petroleum Company*** melalui telaga minyak ***The Grand Old Lady*** (**Contoh**). Di Sabah pula, **emas** dilombong di **Sungai Segama** dan **arang batu** diusahakan di **Silimpopon** serta Labuan oleh *Cowie Harbour Coal Company* (**Contoh**).',
          modelAnswerZh:
            '在砂拉越，石隆门（Bau）商业开采黄金与锑矿（Fakta），而美里（Miri）则于 1910 年由盎格鲁-撒克逊石油公司通过“老妇人”油井开采石油（Contoh）；在沙巴，西加麦河开采黄金，西林波旁与纳闽则开采煤炭（Contoh）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Pada pandangan anda, bagaimanakah negara kita pada hari ini dapat meningkatkan daya saing sektor pertanian dan komoditi di peringkat global? (`KBAT` — `K7.6.5`)',
          questionZh: '依你之见，当今我国应如何提升农业与大宗商品领域在国际市场上的竞争力？（高思维 KBAT — 4分）',
          expectedKeywordsBm: [
            'teknologi pintar',
            'penyelidikan',
            'produk hiliran',
            'mesra alam',
            'pasaran baharu',
          ],
          modelAnswerBm:
            'Negara kita perlu mengaplikasikan **teknologi pertanian pintar** seperti automasi, dron, dan kecerdasan buatan bagi meningkatkan hasil pengeluaran (**Fakta**). Selain itu, institusi penyelidikan perlu menghasilkan **baka tanaman bermutu tinggi** dan memajukan **industri hiliran** bernilai tambah (**Huraian**), contohnya memproses minyak sawit dan getah menjadi produk farmaseutikal, oleokimia, serta sarung tangan perubatan berkualiti eksport (**Contoh**). Langkah ini akan menjamin **kemampanan ekonomi negara** di pasaran dunia (**Inferens**).',
          modelAnswerZh:
            '我国应广泛应用自动化、无人机与人工智能等智慧农业科技以提高生产效率（Fakta）。此外，科研机构需培育高产优质品种并大力发展高附加值下游工业（Huraian），例如将棕油与橡胶深加工为医药品、油脂化工品及高品质医用手套出口全球（Contoh）。这将确保我国经济在国际市场持续稳健增长（Inferens）。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 6.2 — Pentadbiran Barat Berkaitan dengan Ekonomi
  // ============================================================================
  {
    subtopicCode: '6.2',
    babNumber: 6,
    babTitleBm: 'Kesan Pentadbiran Barat Terhadap Ekonomi dan Sosial',
    babTitleZh: '西方行政管理对我国经济与社会的影响',
    skCode: '7.6',
    spCodes: ['7.6.2', 'K7.6.6'],
    titleBm: 'Pentadbiran Barat Berkaitan dengan Ekonomi',
    titleZh: '与经济相关的西方行政管理措施',
    heroImages: [
      {
        imageKey: 'bab6_kapal_korek_getah',
        captionBm:
          'Pengenalan Kapal Korek (1912) dalam perlombongan bijih timah dan teknik torehan Sistem Ibedem oleh H.N. Ridley di estet getah berserta kemasukan buruh luar.',
        captionZh:
          '1912年采锡铁船（Kapal Korek）的引入、H.N. Ridley 研发的鱼骨形割胶法（Sistem Ibedem），以及契约制与甘加以制度下的外来劳工潮。',
        hotspots: [
          {
            x: 28,
            y: 52,
            termBm: 'Kapal Korek Pertama (Batu Gajah, 1912)',
            meaningZh: '第一艘采锡铁船（1912年霹雳华都牙也）',
            detailBm:
              'Diperkenalkan oleh ***Malayan Tin Dredging*** di **Batu Gajah, Perak (1912)**, membolehkan pelombong Eropah menguasai pengeluaran bijih timah mengatasi pelombong Cina.',
            detailZh:
              '1912 年由马来亚采锡公司在霹雳华都牙也率先启用，使资本雄厚的欧洲矿商一举超越传统华人矿主，主导马来亚锡产量。',
          },
          {
            x: 64,
            y: 68,
            termBm: 'Sistem Ibedem (Tulang Ikan Hering) — H.N. Ridley',
            meaningZh: '鱼骨形割胶法（H.N. Ridley 发明）',
            detailBm:
              '**H.N. Ridley** (Pengarah Taman Botanikal Singapura 1888) memperkenalkan torehan **Sistem Ibedem (*Herringbone*)** yang tidak merosakkan pokok getah serta memanjangkan hayat pokok.',
            detailZh:
              '新加坡植物园园长 H.N. Ridley 推广“鱼骨形割胶法”（Sistem Ibedem），不伤树皮形成层且大幅延长橡胶树产胶寿命。',
          },
          {
            x: 80,
            y: 68,
            termBm: 'Sistem Kangani & Sistem Kontrak',
            meaningZh: '印裔甘加以制度与华工契约制度',
            detailBm:
              'Buruh **India** dibawa ke estet getah melalui **Sistem Kangani** (**Tabung Imigran India 1907**), manakala buruh **Cina** dibawa ke lombong melalui **Sistem Kontrak**.',
            detailZh:
              '印裔劳工通过工头返乡招工的“甘加以制度”（Sistem Kangani）进入胶园；华工则通过雇主垫付船费的“契约制度”（Sistem Kontrak）进入锡矿场。',
          },
          {
            x: 14,
            y: 74,
            termBm: 'Perundangan Tanah & Syarikat Perwakilan',
            meaningZh: '土地法令与洋行代理公司',
            detailBm:
              'British menggubal **Akta Tanah Simpanan Melayu 1913**, **Land Order 1931/1933** (Sarawak), dan **Proklamasi III 1889** (Sabah) serta menyokong *Agency Houses* seperti **Guthrie** dan **Sime Darby**.',
            detailZh:
              '殖民当局颁布各项土地法令管控土地买卖，并扶持牙直利（Guthrie）、森那美（Sime Darby）等大型洋行垄断进出口与园丘管理。',
          },
        ],
      },
      {
        imageKey: 'bab6_economy_society',
        captionBm:
          'Penubuhan jabatan kerajaan seperti Jabatan Pertanian dan Institut Penyelidikan Getah Malaya (RRIM) memacu ekonomi eksport Barat.',
        captionZh:
          '农业局与马来亚橡胶研究院（RRIM, 1926）等政府专业机构的设立，全面护航西方殖民出口经济。',
      },
    ],
    sections: [
      {
        sectionCode: '6.2(a)',
        headingBm: 'Perkembangan Industri Getah, Kapal Korek dan Syarikat Pelaburan',
        headingZh: '橡胶工业突破、采锡铁船技术与欧洲投资巨头',
        leadParagraphBm:
          'Kejayaan kuasa Barat menguasai pengeluaran **getah** dan **bijih timah** dunia didorong oleh inovasi teknologi saintifik seperti sumbangan **H.N. Ridley**, pengenalan **Kapal Korek (1912)**, serta suntikan modal syarikat perladangan Eropah.',
        leadParagraphZh:
          '西方势力之所以能称霸全球橡胶与锡矿市场，关键在于科学技术的突破——特别是“橡胶之父” H.N. Ridley 的革新、1912 年采锡铁船的启用，以及欧洲种植园跨国巨头的巨额投资。',
        diagramKey: 'diag_6_2_bijih_getah',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Peranan H.N. Ridley (1888)**: Dilantik sebagai **Pengarah Taman Botanikal Singapura**, **H.N. Ridley** meyakinkan para peladang menanam getah dengan mengagihkan anak benih secara percuma serta menemukan kaedah **pembungkusan anak benih di dalam arang yang lembap** bagi penghantaran jarak jauh.',
            zh: '【H.N. Ridley 的两大贡献之一】1888 年出任新加坡植物园园长的 H.N. Ridley 极力游说园主改种橡胶、免费派发树苗，并发明用“潮湿木炭包裹树苗”的方法，使树苗能长途海运而不枯死。',
          },
          {
            tag: 'CONTOH',
            bm: '**Sistem Torehan Ibedem (*Herringbone*)**: Pada tahun 1897, **H.N. Ridley** memperkenalkan teknik torehan **Sistem Ibedem** atau **Sistem Tulang Ikan Hering** yang menghasilkan susu getah secara berterusan tanpa merosakkan kulit pokok getah.',
            zh: '【鱼骨形割胶法（Sistem Ibedem）】H.N. Ridley 于 1897 年研发“鱼骨形割胶法”（Tulang Ikan Hering），既能稳定采收胶汁，又不会割伤树干形成层，大幅延长橡胶树寿命！',
          },
          {
            tag: 'CONTOH',
            bm: '**Syarikat Pelaburan Eropah**: Modal besar dilaburkan oleh syarikat gergasi Eropah seperti ***Guthrie***, ***Sime Darby***, ***Harrisons & Crosfield***, dan ***Boustead Buttery Estate*** untuk membuka estet getah luas di Tanah Melayu (serta *British North Borneo Para Rubber* di Sabah).',
            zh: '【四大欧洲种植巨头】牙直利（Guthrie）、森那美（Sime Darby）、哈里森与克罗斯菲尔德（Harrisons & Crosfield）及宝实得（Boustead Buttery Estate）投入巨资开辟大型橡胶园。',
          },
          {
            tag: 'CONTOH',
            bm: '**Teknologi Kapal Korek (1912)**: Dalam industri bijih timah, penggunaan **Kapal Korek (*Tin Dredge*)** pertama oleh syarikat ***Malayan Tin Dredging*** di **Batu Gajah, Perak pada tahun 1912** membolehkan pelombong Eropah memonopoli pengeluaran bijih timah mengatasi pelombong Cina pada abad ke-20.',
            zh: '【1912年第一艘采锡铁船】马来亚采锡公司（Malayan Tin Dredging）于 1912 年在霹雳华都牙也（Batu Gajah）启用首艘巨型采锡铁船，可全天候挖掘沼泽深层锡苗，使欧洲矿商在20世纪彻底反超华人矿家！',
          },
        ],
      },
      {
        sectionCode: '6.2(b)',
        headingBm: 'Perundangan Tanah di Tanah Melayu, Sarawak dan Sabah',
        headingZh: '马来亚、砂拉越与沙巴的土地法令',
        leadParagraphBm:
          'Pentadbiran Barat menggubal **undang-undang tanah bertulis** yang baharu di Tanah Melayu, Sarawak, dan Sabah dengan alasan melindungi hak milik peribumi, namun pada masa yang sama mengawal penggunaan tanah komersial.',
        leadParagraphZh:
          '西方殖民政府在马来亚、砂拉越与沙巴相继制定成文土地法令，表面上宣称保护原住民土地不被变卖，实际上亦借此严格管控商业农业用地以维护殖民经济利益。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Tanah Melayu — Akta Tanah Simpanan Melayu (1913)**: Diluluskan oleh Majlis Mesyuarat Persekutuan pada **25 November 1913**, memberi kuasa kepada **Residen** untuk mengisytiharkan mana-mana tanah dalam sesebuah negeri sebagai **Tanah Simpanan Melayu** yang tidak boleh dijual, dipajak gadai, atau dipindah milik kepada orang bukan Melayu.',
            zh: '【马来亚：《1913年马来保留地法令》】授权参政司（Residen）将州内特定土地宪报为“马来保留地”（Tanah Simpanan Melayu），严禁出售、抵押或转让予非马来人。',
          },
          {
            tag: 'PERHATIAN',
            bm: '**Hakikat Sebenar Akta Tanah Simpanan Melayu 1913**: Walaupun kelihatan melindungi orang Melayu, akta ini sebenarnya menjaga kepentingan ekonomi penjajah British kerana kebanyakan kawasan Tanah Simpanan Melayu **tidak subur**, berbukit, tidak sesuai untuk perladangan, dan penduduk Melayu dilarang menanam tanaman komersial seperti getah di atasnya!',
            zh: '⚠️ 高频 KBAT 必考揭秘：《1913年马来保留地法令》实为保护英国大园主利益（防止马来人种胶竞争或把好地卖给其他资本家），因为被划入保留地的往往是贫瘠山地，且严禁改种商业橡胶！',
          },
          {
            tag: 'CONTOH',
            bm: '**Sarawak — Land Order 1931 & Land Settlement Order 1933**: Diperkenalkan oleh Dinasti Brooke bagi melindungi tanah peribumi daripada dicerobohi pengusaha pertanian asing; **Land Settlement Order 1933** membahagikan tanah Sarawak kepada **5 kawasan** iaitu *Kawasan Tanah Campuran* (boleh dimiliki imigran), *Kawasan Tanah Peribumi*, *Kawasan Tanah Adat Peribumi*, *Kawasan Tanah Simpanan*, dan *Kawasan Tanah Pedalaman*.',
            zh: '【砂拉越：1931年土地令与1933年土地安置令】布洛克颁布这两项法令保护原住民土地免遭外来垦殖者侵占，并将全砂土地划分为 5 类区域（仅“混合区 Tanah Campuran”允许外来移民合法购买，其余严加保护原住民权益）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Sabah — Proklamasi III Perlindungan Hak Peribumi (1889)**: Diwartakan oleh SBUB dengan menetapkan bahawa semua urus niaga tanah dan kepentingan dengan orang Eropah **wajib dimaklumkan dan melalui Ketua Peribumi** terlebih dahulu, Pegawai Daerah berkuasa menjaga hak tanah peribumi, dan penduduk berhak menuntut ganti rugi.',
            zh: '【沙巴：《1889年第三号保护原住民权益公告》】SBUB 规定凡涉及欧洲人的土地交易必须事先通报并经由“原住民首领”（Ketua Peribumi）审核，县官负责监督原住民地权与赔偿事务。',
          },
        ],
      },
      {
        sectionCode: '6.2(c)',
        headingBm: 'Kemasukan Tenaga Buruh Luar (Sistem Kontrak dan Sistem Kangani)',
        headingZh: '引进外来劳动力制度（华工契约制与印裔甘加以制）',
        leadParagraphBm:
          'Bagi mengatasi kekurangan pekerja di lombong bijih timah dan estet getah, pentadbiran Barat menggalakkan kemasukan beramai-ramai buruh dari **China** melalui **Sistem Kontrak** dan buruh dari **India** melalui **Sistem Kangani**, selain kemasukan buruh di Sarawak serta Sabah.',
        leadParagraphZh:
          '为解决矿场与种植园严重的劳工荒，殖民当局有组织地从中国（通过契约制 Sistem Kontrak）与印度（通过甘加以制 Sistem Kangani）大规模招募廉价劳工。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Buruh Cina — Sistem Kontrak (Sektor Perlombongan)**: Buruh dari China (*Sinkheh*) dibawa masuk ke negara kita oleh pihak **majikan / agensi rumah kongsi** yang membayar tambang perjalanan serta menyediakan makanan, pakaian, dan tempat tinggal; sebagai balasan, buruh wajib bekerja dengan majikan sehingga hutang tambangnya selesai (dihapuskan pada tahun **1914** kerana penindasan).',
            zh: '【华工：契约制度（Sistem Kontrak —— 俗称卖猪仔）】由雇主或会馆苦力间预先垫付船票并提供食宿衣物，新客（Sinkheh）抵马后必须在锡矿场无偿或低薪劳作直至还清船债为止（因剥削严重于 1914 年废除）。',
          },
          {
            tag: 'FAKTA',
            bm: '**Buruh India — Sistem Kangani (Sektor Estet Getah)**: Perkataan ***Kangani*** bermaksud **ketua, tandil, atau mandur**. Pemilik estet menghantar *Kangani* pulang ke kampung halamannya di India untuk mencari buruh baharu dan membayar **komisen** berdasarkan bilangan buruh yang dibawa masuk; pada tahun **1907**, **Tabung Imigran India (*Indian Immigration Fund*)** ditubuhkan bagi membiayai tambang pelayaran percuma buruh India.',
            zh: '【印裔劳工：甘加以制度（Sistem Kangani）】Kangani 意为“工头/领班”。橡胶园主派信任的印裔工头回印度家乡招工并按人头支领佣金；1907 年政府更设立“印度移民基金”（Tabung Imigran India）提供免费船票吸引印裔劳工来马割胶。',
          },
          {
            tag: 'CONTOH',
            bm: '**Buruh Luar di Sarawak dan Sabah**: Di **Sarawak**, **Charles Brooke** menandatangani perjanjian dengan pemimpin Cina **Wong Nai Siong** pada tahun **1901** bagi membawa masuk buruh Cina keturunan **Foochow** secara berkumpulan untuk membangunkan pertanian di **Sibu** (selain orang Jawa di ladang getah); manakala di **Sabah**, SBUB membawa masuk buruh Cina dan Jawa untuk ladang tembakau serta menubuhkan **Lembaga Penasihat Orang Cina (1890)** di **Sandakan**.',
            zh: '【砂拉越与沙巴劳工】在砂拉越，查尔斯·布洛克于 1901 年与华侨领袖黄乃裳（Wong Nai Siong）签约，引进大批福州籍（Foochow）垦民开发诗巫（Sibu，“新福州”）；在沙巴，SBUB 引进华工与爪哇劳工开发烟草及橡胶园，并于 1890 年在山打根设立“华人咨询局”（Lembaga Penasihat Orang Cina）。',
          },
        ],
      },
      {
        sectionCode: '6.2(d)',
        headingBm: 'Penubuhan Jabatan Kerajaan dan Syarikat Perwakilan (Agency Houses)',
        headingZh: '设立政府技术部门与英资代理洋行（Agency Houses）',
        leadParagraphBm:
          'Pentadbiran British turut menubuhkan pelbagai **jabatan kerajaan**, **institusi penyelidikan saintifik**, dan **Syarikat Perwakilan (*Agency Houses*)** bagi menyokong kelancaran eksploitasi ekonomi moden.',
        leadParagraphZh:
          '英国殖民政府同步设立多个专业行政部门、国家级科研机构以及实力雄厚的英资代理洋行（Agency Houses），构建起完整的现代殖民经济支撑体系。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Jabatan Kerajaan**: Penubuhan **Jabatan Kerja Raya (1872)** untuk membina bangunan awam dan jalan raya, **Jabatan Pertanian (1905)** bagi memajukan tanaman komersial, serta **Jabatan Parit dan Tali Air (1932)** bagi sistem pengairan.',
            zh: '【政府工程与农业部门】设立公共工程局（Jabatan Kerja Raya, 1872）建设道路与官署、农业局（Jabatan Pertanian, 1905）改良经济作物，以及水利灌溉局（1932）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Institusi Penyelidikan Khusus**: British menubuhkan **Institut Penyelidikan Getah Malaya (*Rubber Research Institute of Malaya* — RRIM) pada tahun 1926** untuk penyelidikan baka dan mutu getah, serta **Institut Penyelidikan Perhutanan (*Forest Research Institute* — FRI) pada tahun 1929** bagi pengurusan kayu balak.',
            zh: '【国家级科研机构】1926 年成立马来亚橡胶研究院（RRIM）专研高产树胶品种与加工技术；1929 年成立森林研究院（FRI）推动林木研究。',
          },
          {
            tag: 'CONTOH',
            bm: '**Syarikat Perwakilan (*Agency Houses* / Gedung Perwakilan)**: Pemodal British menguasai perdagangan import-eksport, perkapalan, insurans, dan pengurusan estet/lombong melalui gedung perwakilan besar seperti ***Boustead and Company***, ***Boustead Buttery Estate***, ***Guthrie & Co.***, ***Harrisons & Crosfield***, dan ***Sime Darby*** (`K7.6.6`: kecekalan mengusahakan sumber ekonomi tempatan).',
            zh: '【代理洋行（Agency Houses）】宝实得（Boustead）、牙直利（Guthrie）、哈里森（Harrisons & Crosfield）及森那美（Sime Darby）等英资洋行集资本、管理、航运、保险与进出口贸易于一身，牢牢掌控国家经济命脉。',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Perbandingan Perundangan Tanah dan Sistem Kemasukan Buruh di Tanah Melayu, Sarawak dan Sabah',
        titleZh: '马来亚、砂拉越与沙巴土地法令及外来劳工制度对比总表',
        headers: [
          { bm: 'Wilayah', zh: '地区' },
          { bm: 'Perundangan Tanah Utama', zh: '核心土地法令与内容' },
          { bm: 'Sistem Kemasukan Tenaga Buruh Luar', zh: '外来劳工引进制度与特色' },
        ],
        rows: [
          [
            { bm: '**Tanah Melayu**', zh: '马来亚（半岛）' },
            {
              bm: '**Akta Tanah Simpanan Melayu (1913)**: Residen berkuasa mengisytiharkan Tanah Simpanan Melayu supaya tidak dijual kepada bukan Melayu (tetapi kebanyakan tanah tidak subur & dilarang tanam getah).',
              zh: '《1913年马来保留地法令》：参政司可宪报保留地禁售非马来人（但多属贫瘠土地且禁种商业橡胶）。',
            },
            {
              bm: '• **Buruh Cina** (lombong bijih timah): **Sistem Kontrak** (tambang dibiayai majikan)\n• **Buruh India** (estet getah): **Sistem Kangani** (mandur cari buruh + **Tabung Imigran India 1907**)',
              zh: '• 华工（锡矿场）：契约制（Sistem Kontrak）\n• 印裔劳工（橡胶园）：甘加以制（Sistem Kangani + 1907年印度移民基金）',
            },
          ],
          [
            { bm: '**Sarawak**', zh: '砂拉越 (Sarawak)' },
            {
              bm: '**Land Order 1931** & **Land Settlement Order 1933**: Melindungi tanah peribumi daripada pencerobohan pelabur asing; tanah dibahagi kepada **5 kawasan** (imigran hanya boleh miliki *Tanah Campuran*).',
              zh: '《1931年土地令》与《1933年土地安置令》：保护原住民土地；划分 5 类土地区（外来移民仅可拥有混合区土地）。',
            },
            {
              bm: '• **Buruh Cina Foochow**: Dibawa masuk ke **Sibu (1901)** melalui perjanjian **Charles Brooke** dengan **Wong Nai Siong**\n• Buruh Cina di lombong Bau & buruh **Jawa** di ladang getah',
              zh: '• 福州垦民：1901年查尔斯·布洛克与黄乃裳签约引进开发诗巫（Sibu）\n• 石隆门华工与橡胶园爪哇劳工',
            },
          ],
          [
            { bm: '**Sabah**', zh: '沙巴 (Sabah)' },
            {
              bm: '**Proklamasi III Perlindungan Hak Peribumi (1889)**: Semua urus niaga tanah dengan orang Eropah mesti dimaklumkan dan melalui **Ketua Peribumi**; diselia Pegawai Daerah.',
              zh: '《1889年第三号保护原住民权益公告》：一切涉及欧洲人的土地交易必须经过原住民首领（Ketua Peribumi）并受县官监督。',
            },
            {
              bm: '• **Buruh Cina** (ladang tembakau): SBUB menubuhkan **Lembaga Penasihat Orang Cina (1890)** di **Sandakan**\n• **Buruh Jawa** di estet tembakau dan getah',
              zh: '• 华工（烟草园）：SBUB 于 1890 年在山打根设立华人咨询局\n• 烟草园与橡胶园爪哇劳工',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'H.N. Ridley',
        roleBm: 'Pengarah Taman Botanikal Singapura (1888)',
        roleZh: '1888年新加坡植物园园长（“疯狂里德利”）',
        emoji: '🌳',
        lineBm:
          'Orang menggelar saya *Mad Ridley* kerana asyik memujuk peladang menanam getah! Lihatlah teknik torehan **Sistem Ibedem (Tulang Ikan Hering)** ciptaan saya — pokok tidak rosak dan susu getah mengalir deras!',
        lineZh:
          '大家笑我是“橡皮疯子里德利”，因为我天天塞橡胶籽劝人种胶！瞧瞧我研发的“鱼骨形割胶法”（Sistem Ibedem）——既不伤树干，胶汁还哗哗流！',
      },
      {
        speakerBm: 'Kangani Muthu',
        roleBm: 'Penyelia / Mandur Estet Getah',
        roleZh: '橡胶园印裔工头（Kangani）',
        emoji: '📋',
        lineBm:
          'Melalui **Sistem Kangani**, majikan estet menghantar saya pulang ke kampung halaman di selatan India untuk merekrut pekerja. Tambang kapal mereka dibiayai oleh **Tabung Imigran India (1907)**!',
        lineZh:
          '在甘加以制度（Sistem Kangani）下，园主派我回南印度老家招募同乡来割胶，他们的船票还有 1907 年成立的“印度移民基金”免费赞助呢！',
      },
      {
        speakerBm: 'Wong Nai Siong',
        roleBm: 'Pemimpin Masyarakat Cina Foochow di Sibu (1901)',
        roleZh: '1901年诗巫福州垦场领袖黄乃裳',
        emoji: '🚢',
        lineBm:
          'Di Sarawak pula, saya menandatangani perjanjian dengan **Charles Brooke** pada tahun **1901** untuk membawa masuk lebih seribu petani **Foochow** bagi membangunkan pertanian di lembangan Rajang, **Sibu**!',
        lineZh:
          '在砂拉越，我于 1901 年同查尔斯·布洛克签约，率领上千名福州同胞远渡重洋来到诗巫拉让江畔垦荒务农，开创“新福州”！',
      },
    ],
    memoryHackBm:
      '4 Instrumen Pentadbiran Ekonomi (Bab 6.2) = **"T.T.B.J."**: **T**eknologi (**H.N. Ridley** = *Sistem Ibedem*; **Kapal Korek 1912** = *Batu Gajah*), **T**anah (TM = *Akta Tanah Simpanan Melayu 1913*; Sarawak = *Land Order 1931 & Land Settlement 1933*; Sabah = *Proklamasi III 1889*), **B**uruh (Cina = *Kontrak* + **Wong Nai Siong Sibu 1901**; India = *Kangani*), **J**abatan (**JKR 1872**, **Pertanian 1905**, **RRIM 1926**)!',
    memoryHackZh:
      '🧠 王牌秒记口诀：【6.2 四大经济政策工具 T-T-B-J】① 科技：Ridley 鱼骨割胶（Ibedem）+ 1912 华都牙也首艘铁船（Batu Gajah）；② 土地法三兄弟：半岛 1913 马来保留地、砂拉越 1931/1933 Land Order（分5区）、沙巴 1889 第三号公告（Proklamasi III）；③ 劳工双制：华工矿场契约制（Kontrak，另记 1901 黄乃裳诗巫福州人）、印工胶园甘加以制（Kangani = 工头返乡招工）；④ 科研王牌：1926 橡胶研究院（RRIM）！',
    subtopicMcqs: [
      {
        id: '6.2-mcq-1',
        spCode: '7.6.2',
        questionBm:
          'Apakah keistimewaan teknik torehan **Sistem Ibedem (Sistem Tulang Ikan Hering)** yang diperkenalkan oleh **H.N. Ridley**?',
        questionZh: 'H.N. Ridley 推广的“鱼骨形割胶法”（Sistem Ibedem）具有什么独特优势？',
        options: [
          {
            id: 'A',
            textBm: 'Membolehkan pokok getah ditebang selepas setahun ditanam',
            textZh: '让橡胶树在种植一年后即可砍伐',
          },
          {
            id: 'B',
            textBm: 'Tidak merosakkan pokok getah dan memanjangkan tempoh pengeluaran susu getah',
            textZh: '不会损伤橡胶树，并能延长产胶寿命',
          },
          {
            id: 'C',
            textBm: 'Menggantikan tenaga penoreh manusia sepenuhnya dengan jentera kapal korek',
            textZh: '用采锡铁船机械完全取代人工割胶',
          },
          {
            id: 'D',
            textBm: 'Menukar susu getah menjadi minyak kelapa sawit secara automatik',
            textZh: '将胶汁自动转化为棕油',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Teknik torehan **Sistem Ibedem (*Herringbone*)** oleh **H.N. Ridley** tidak merosakkan lapisan kambium pokok getah, sekali gus memanjangkan hayat pokok dan meningkatkan pengeluaran lateks.',
        explanationZh:
          '鱼骨形割胶法（Sistem Ibedem）科学控制切割深度，不伤及树干形成层，使橡胶树得以长期持续产胶。',
      },
      {
        id: '6.2-mcq-2',
        spCode: '7.6.2',
        questionBm:
          'Mengapakah pelombong Eropah berjaya mengambil alih penguasaan pengeluaran bijih timah daripada pelombong Cina pada abad ke-20?',
        questionZh: '为什么欧洲矿商能在 20 世纪成功取代华人矿主，主导马来亚的锡矿产量？',
        options: [
          {
            id: 'A',
            textBm: 'Penggunaan teknologi **Kapal Korek** dengan modal yang besar bermula di **Batu Gajah, Perak (1912)**',
            textZh: '凭借雄厚资本，自 1912 年在霹雳华都牙也引入高效率的“采锡铁船”（Kapal Korek）技术',
          },
          {
            id: 'B',
            textBm: 'Penggunaan kaedah mendulang secara tradisional di sungai cetek',
            textZh: '在浅河滩广泛采用传统琉琅洗锡法',
          },
          {
            id: 'C',
            textBm: 'Pengharaman semua buruh Cina bekerja di Negeri-negeri Melayu Bersekutu',
            textZh: '禁止所有华工在马来联邦工作',
          },
          {
            id: 'D',
            textBm: 'Penemuan telaga bijih timah cecair di Bukit Kanada, Miri',
            textZh: '在美里加拿大山发现液态锡井',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Pengenalan **Kapal Korek (*Tin Dredge*)** pertama oleh ***Malayan Tin Dredging*** di **Batu Gajah, Perak pada tahun 1912** memerlukan modal besar tetapi mampu melombong bijih timah berskala gergasi, membolehkan syarikat Eropah mengatasi pelombong Cina.',
        explanationZh:
          '1912 年霹雳华都牙也启用首艘采锡铁船，凭借巨额资本与重型机械化优势，欧洲锡矿公司产量迅速超越传统华人矿场。',
      },
      {
        id: '6.2-mcq-3',
        spCode: '7.6.2',
        questionBm:
          'Apakah matlamat penggubalan **Land Order 1931** dan **Land Settlement Order 1933** di Sarawak?',
        questionZh: '砂拉越颁布《1931年土地令》（Land Order 1931）与《1933年土地安置令》的主要目的是什么？',
        options: [
          {
            id: 'A',
            textBm: 'Merampas semua tanah rumah panjang untuk diserahkan kepada syarikat Amerika',
            textZh: '没收所有长屋土地以移交给美国公司',
          },
          {
            id: 'B',
            textBm: 'Menyerahkan pentadbiran tanah Sarawak kepada Residen Jeneral di Kuala Lumpur',
            textZh: '将砂拉越土地管理权移交给驻吉隆坡的总参政司',
          },
          {
            id: 'C',
            textBm: 'Mewajibkan semua penduduk Sarawak menanam tebu dan kopi sahaja',
            textZh: '强制所有砂拉越居民只能种植甘蔗与咖啡',
          },
          {
            id: 'D',
            textBm: 'Melindungi hak milik tanah masyarakat peribumi daripada dicerobohi pengusaha asing',
            textZh: '保护原住民社群的土地所有权，防止遭外来垦殖与投资者侵占',
          },
        ],
        correctId: 'D',
        explanationBm:
          '**Land Order 1931** dan **Land Settlement Order 1933** diperkenalkan oleh Dinasti Brooke bagi melindungi tanah masyarakat peribumi daripada dicerobohi pelabur luar serta mengiktiraf hak tanah adat melalui pembahagian 5 kawasan tanah.',
        explanationZh:
          '布洛克政府制定 1931 与 1933 年土地法令，旨在防止外来农业资本家鲸吞原住民习俗地，并将土地严格划分为 5 类区域。',
      },
      {
        id: '6.2-mcq-4',
        spCode: '7.6.2',
        questionBm:
          'Bagaimanakah **Sistem Kangani** berfungsi dalam membawa masuk tenaga buruh dari **India** ke estet getah di Tanah Melayu?',
        questionZh: '在引进印度劳工前往马来亚橡胶园的“甘加以制度”（Sistem Kangani）中，招募机制是如何运作的？',
        options: [
          {
            id: 'A',
            textBm: 'Ketua/mandur (*Kangani*) dihantar pulang ke kampung halamannya di India untuk mencari buruh dan dibayar komisen',
            textZh: '园主派工头（Kangani）返回印度家乡招募劳工，并按人数支付佣金',
          },
          {
            id: 'B',
            textBm: 'Buruh India ditangkap secara paksa oleh kapal perang HMS Dido di Lautan Hindi',
            textZh: '由英国军舰在印度洋强行抓捕劳工',
          },
          {
            id: 'C',
            textBm: 'Wong Nai Siong mengetuai kemasukan buruh India ke lembangan Sungai Rajang',
            textZh: '由黄乃裳率领印度劳工前往拉让江垦荒',
          },
          {
            id: 'D',
            textBm: 'Semua buruh India diwajibkan membayar sendiri cukai tanah sebelum menaiki kapal',
            textZh: '所有印裔劳工登船前必须自费缴纳高额地税',
          },
        ],
        correctId: 'A',
        explanationBm:
          'Dalam **Sistem Kangani**, majikan estet memberi lesen dan wang pendahuluan kepada seorang *Kangani* (mandur/ketua) yang dipercayai untuk pulang ke kampungnya di India bagi memujuk buruh datang bekerja di estet getah.',
        explanationZh:
          'Kangani 意为工头；园主资助老工头返回印度老家招募亲友同乡来马割胶，工头可按招工人数领取佣金。',
      },
      {
        id: '6.2-mcq-5',
        spCode: '7.6.2',
        questionBm:
          'Apakah institusi khusus yang ditubuhkan oleh British pada tahun **1926** untuk meningkatkan mutu dan produktiviti tanaman getah di negara kita?',
        questionZh: '英国于 1926 年设立了哪一所专门科研机构，以提升我国橡胶的品质与产量？',
        options: [
          {
            id: 'A',
            textBm: '**Institut Penyelidikan Perubatan (IMR)**',
            textZh: '医学研究院 (IMR)',
          },
          {
            id: 'B',
            textBm: '**Maktab Perguruan Sultan Idris (SITC)**',
            textZh: '苏丹依德利斯师范学院 (SITC)',
          },
          {
            id: 'C',
            textBm: '**Institut Penyelidikan Getah Malaya (RRIM)**',
            textZh: '马来亚橡胶研究院 (RRIM)',
          },
          {
            id: 'D',
            textBm: '**Lembaga Penasihat Orang Cina Sandakan**',
            textZh: '山打根华人咨询局',
          },
        ],
        correctId: 'C',
        explanationBm:
          '**Institut Penyelidikan Getah Malaya (*Rubber Research Institute of Malaya* — RRIM)** ditubuhkan pada tahun **1926** khusus untuk menjalankan penyelidikan saintifik berkaitan tanaman dan pemprosesan getah.',
        explanationZh:
          '1926 年成立的马来亚橡胶研究院（RRIM）专门负责橡胶树良种选育、病虫害防治及乳胶加工研究。',
      },
    ],
    strukturQuestion: {
      id: '6.2-struktur',
      spCode: '7.6.2',
      stimulusBm:
        'Bagi mengukuhkan eksploitasi ekonomi moden, pentadbiran Barat memperkenalkan **perundangan tanah** seperti **Akta Tanah Simpanan Melayu (1913)** dan menggalakkan kemasukan buruh luar melalui **Sistem Kontrak** serta **Sistem Kangani**.',
      stimulusZh:
        '为了强化现代经济开发，西方殖民当局制定了如《1913年马来保留地法令》等土地法，并通过契约制与甘加以制度引进大批外来劳工。',
      parts: [
        {
          partLabel: '(a)',
          marks: 2,
          questionBm:
            'Nyatakan **dua** undang-undang tanah yang diperkenalkan oleh pentadbiran Barat di **Sarawak** dan **Sabah** untuk melindungi tanah peribumi.',
          questionZh: '写出西方殖民当局在砂拉越与沙巴颁布以保护原住民土地的两项法令名称。（2分）',
          expectedKeywordsBm: [
            'Land Order 1931',
            'Land Settlement Order 1933',
            'Proklamasi III Perlindungan Hak Peribumi',
          ],
          modelAnswerBm:
            'Di Sarawak diperkenalkan **Land Order 1931** (atau **Land Settlement Order 1933**), manakala di Sabah diwartakan **Proklamasi III Perlindungan Hak Peribumi (1889)**.',
          modelAnswerZh:
            '砂拉越颁布了《1931年土地令》（或《1933年土地安置令》），沙巴则颁布了《1889年第三号保护原住民权益公告》。',
        },
        {
          partLabel: '(b)',
          marks: 4,
          questionBm:
            'Bandingkan cara kemasukan buruh melalui **Sistem Kontrak** dengan **Sistem Kangani** di Tanah Melayu.',
          questionZh: '比较马来亚通过“契约制”（Sistem Kontrak）与“甘加以制”（Sistem Kangani）引进外来劳工的方式。（4分）',
          expectedKeywordsBm: [
            'Sistem Kontrak',
            'Cina',
            'majikan',
            'hutang tambang',
            'Sistem Kangani',
            'India',
            'mandur',
            'komisen',
          ],
          modelAnswerBm:
            'Melalui **Sistem Kontrak**, buruh dari **China** dibawa masuk ke lombong bijih timah oleh **majikan atau agensi rumah kongsi** yang membiayai tambang, dan buruh wajib bekerja sehingga **hutang tambangnya selesai** (**Fakta + Huraian**). Sebaliknya melalui **Sistem Kangani**, pemilik estet getah menghantar seorang ***Kangani* (ketua/mandur)** pulang ke kampungnya di **India** untuk merekrut buruh baharu dengan bayaran **komisen** serta sokongan **Tabung Imigran India 1907** (**Fakta + Huraian**).',
          modelAnswerZh:
            '在契约制（Sistem Kontrak）下，华工由雇主或苦力间垫付船费引进锡矿场，劳工必须低薪工作直至还清船债（Fakta + Huraian）。相反地，在甘加以制（Sistem Kangani）下，橡胶园主派印裔工头（Kangani）回印度家乡招工并支付佣金，且获 1907 年印度移民基金资助船费（Fakta + Huraian）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Sejauh manakah **Akta Tanah Simpanan Melayu 1913** benar-benar membela nasib ekonomi masyarakat Melayu ketika zaman penjajahan British? Berikan hujah anda. (`KBAT` — `K7.6.6`)',
          questionZh: '在英国殖民时期，《1913年马来保留地法令》在多大程度上真正维护了马来社会的经济利益？请提出你的论据。（高思维 KBAT — 4分）',
          expectedKeywordsBm: [
            'melindungi kepentingan British',
            'tidak subur',
            'dilarang menanam getah',
            'ekonomi sara diri',
            'tidak terjual',
          ],
          modelAnswerBm:
            'Dari satu sudut, akta ini mengelakkan tanah milik orang Melayu daripada **terjual atau berpindah milik kepada orang asing** (**Fakta**). Walau bagaimanapun, hakikatnya akta ini lebih **melindungi kepentingan ekonomi penjajah British** kerana kebanyakan kawasan Tanah Simpanan Melayu terletak di kawasan pedalaman yang **tidak subur dan tidak sesuai untuk perladangan** (**Huraian**). Tambahan pula, orang Melayu **dilarang menanam tanaman komersial seperti getah** di tanah tersebut (**Contoh**), menyebabkan mereka terus terpinggir dalam ekonomi sara diri tradisional (**Inferens**).',
          modelAnswerZh:
            '一方面，该法令确实防止了马来人土地被变卖或转让给外族（Fakta）。然而实质上，它更偏重维护英国殖民者的经济利益，因为被宪报为保留地的地段大多贫瘠偏僻，根本不适合商业种植（Huraian）。更有甚者，殖民政府严禁农民在保留地上改种橡胶等高收益商业作物（Contoh），导致马来农民长期被困在传统自给自足农业中，无缘分享现代经济红利（Inferens）。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 6.3 — Kesan Ekonomi Akibat Pentadbiran Barat di Negara Kita
  // ============================================================================
  {
    subtopicCode: '6.3',
    babNumber: 6,
    babTitleBm: 'Kesan Pentadbiran Barat Terhadap Ekonomi dan Sosial',
    babTitleZh: '西方行政管理对我国经济与社会的影响',
    skCode: '7.6',
    spCodes: ['7.6.3', 'K7.6.7'],
    titleBm: 'Kesan Ekonomi Akibat Pentadbiran Barat di Negara Kita',
    titleZh: '西方行政管理对我国造成的经济影响',
    heroImages: [
      {
        imageKey: 'bab6_kereta_api_sekolah',
        captionBm:
          'Pembinaan landasan kereta api wap dan pemasangan talian telegraf di sepanjang laluan pengangkutan mempercepat pengeksportan bijih timah dan getah ke pelabuhan.',
        captionZh:
          '蒸汽火车铁路建设与沿线电报网络铺设，极大加速了内陆锡矿与橡胶运往沿海港口出口的效率。',
        hotspots: [
          {
            x: 28,
            y: 62,
            termBm: 'Landasan Kereta Api Pertama (Taiping–Port Weld, 1885)',
            meaningZh: '全马第一条铁路（1885年太平至钵威）',
            detailBm:
              'Dibina pada tahun **1885** menghubungkan kawasan lombong bijih timah di **Taiping** terus ke pelabuhan **Port Weld (Kuala Sepetang)** di Perak.',
            detailZh:
              '建于 1885 年，将霹雳太平（Taiping）锡矿区直接连接至沿海港口钵威（Port Weld / 十八丁）。',
          },
          {
            x: 11,
            y: 24,
            termBm: 'Kemudahan Telekomunikasi (Telegraf & Telefon)',
            meaningZh: '现代电讯设施（电报与电话）',
            detailBm:
              'Tiang **telegraf** dipasang selari dengan landasan kereta api bagi menghubungkan pusat pentadbiran dengan kawasan lombong, estet, dan pelabuhan dunia.',
            detailZh:
              '电报线杆沿铁路架设，使殖民行政中心与矿区、胶园及新加坡、伦敦国际市场实现即时通讯。',
          },
          {
            x: 13,
            y: 52,
            termBm: 'Stesen Kereta Api & Pengangkutan Awam',
            meaningZh: '火车站与客货运网络',
            detailBm:
              'Menjelang tahun **1931**, jaringan kereta api menghubungkan seluruh Tanah Melayu kecuali **Terengganu**, selain laluan **Bukau–Weston (1896)** di Sabah dan **Kuching–Batu 10 (1917)** di Sarawak.',
            detailZh:
              '至 1931 年，铁路网已贯通除登嘉楼外的整个马来半岛；沙巴亦有保佛—威士顿铁路（1896），砂拉越则有古晋—十哩铁路（1917）。',
          },
          {
            x: 42,
            y: 56,
            termBm: 'Integrasi ke Pelabuhan Eksport & Bank Moden',
            meaningZh: '衔接现代港口与金融银行体系',
            detailBm:
              'Kereta api membawa muatan komoditi terus ke pelabuhan seperti **Port Swettenham** dan **Pulau Pinang**, disokong pembiayaan bank seperti ***Mercantile Bank* (1859)**.',
            detailZh:
              '火车将大宗商品直运瑞天咸港（巴生港）与槟城港装船出口，背后更有 1859 年有利银行等现代金融机构提供信贷支持。',
          },
        ],
      },
      {
        imageKey: 'bab6_kapal_korek_getah',
        captionBm:
          'Kepesatan pengeluaran bijih timah dan getah mendorong pemodenan pelabuhan, perkapalan wap, telekomunikasi, serta sistem perbankan.',
        captionZh:
          '锡矿与橡胶产量的激增，直接带动现代深水港口、蒸汽轮船航运、电讯以及现代银行金融业的全面兴起。',
      },
    ],
    sections: [
      {
        sectionCode: '6.3(a)',
        headingBm: 'Perkembangan Sistem Pengangkutan (Kereta Api, Jalan Raya, Udara dan Laut)',
        headingZh: '现代交通系统的发展（铁路、公路、航空与海运）',
        leadParagraphBm:
          'Keuntungan besar daripada eksport **bijih timah** dan **getah** mendorong pentadbiran British membina jaringan **pengangkutan moden** bagi mempercepat penghantaran hasil komoditi dari kawasan pengeluaran di pedalaman ke pelabuhan.',
        leadParagraphZh:
          '为了把内陆矿场与种植园的锡米、橡胶以最快速度运往海港装船出口，英国殖民政府投入重金建设铁路、柏油公路、海运与商业航空网。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Landasan Kereta Api Fasa Pertama (1885–1896)**: Dibina pendek khusus menghubungkan kawasan lombong bijih timah ke pelabuhan — bermula dengan landasan pertama negara dari **Taiping ke Port Weld (1885)**, diikuti **Kuala Lumpur ke Port Swettenham / Bukit Kuda (1886)**, **Seremban ke Port Dickson (1891)**, dan **Ipoh ke Teluk Anson (1895)**.',
            zh: '【铁路第一阶段（1885–1896）：矿区通港口】专为运锡而建的短途铁路——全马第一条铁路是 1885 年太平至钵威（Taiping–Port Weld），随后依次为吉隆坡至瑞天咸港（1886）、芙蓉至波德申（1891）及怡保至安顺（1895）。',
          },
          {
            tag: 'HURAIAN',
            bm: '**Landasan Kereta Api Fasa Kedua (1897–1909) & Fasa Ketiga (1910–1931)**: **Fasa Kedua** menghubungkan kawasan utara ke selatan **Negeri-negeri Melayu Bersekutu (NNMB)** bagi melicinkan pentadbiran dan ekonomi; manakala **Fasa Ketiga** menghubungkan **seluruh Tanah Melayu** (termasuk NNMTB dan membawa penumpang) **kecuali negeri Terengganu**!',
            zh: '【铁路第二与第三阶段】第二阶段（1897–1909）贯通马来联邦（NNMB）南北干线；第三阶段（1910–1931）连接除登嘉楼（Terengganu）以外的整个马来半岛，并兼顾载客功能！',
          },
          {
            tag: 'CONTOH',
            bm: '**Kereta Api di Sabah dan Sarawak**: Di **Sabah**, pembinaan bermula pada tahun **1896** dari **Bukau ke Weston**, kemudian disambung menghubungkan **Jesselton ke Beaufort dan Tenom** untuk mengangkut hasil getah serta tembakau; manakala di **Sarawak**, landasan pendek dibina menghubungkan **Kuching ke Batu 10 (1917)** (serta Bau ke Kuching).',
            zh: '【沙巴与砂拉越铁路】沙巴于 1896 年兴建首条保佛区 Bukau 至 Weston 铁路，后延伸连接亚庇（Jesselton）—保佛—丹南（Tenom）以运送内陆橡胶；砂拉越则建有古晋至十哩（Kuching–Batu 10, 1917）短途铁路。',
          },
          {
            tag: 'CONTOH',
            bm: '**Jalan Raya, Udara & Laut**: Jalan raya berturap dibina menghubungkan lombong bijih timah dan estet getah (Kuala Lumpur–Port Swettenham, Perai–Singapura); pengangkutan udara awam dimulakan oleh ***Wearne Air Service* (1937)** (Singapura–KL–Pulau Pinang); manakala pengangkutan laut dimajukan oleh ***Straits Steamship Company* (1890)**.',
            zh: '【公路、航空与海运】铺设柏油公路连接胶园矿区；1937 年 Wearne Air Service 开通新—隆—槟民航航线；海运则有 1890 年成立的海峡轮船公司（Straits Steamship Company）川行各港。',
          },
        ],
      },
      {
        sectionCode: '6.3(b)',
        headingBm: 'Kemudahan Pelabuhan Moden',
        headingZh: '现代港口设施的崛起',
        leadParagraphBm:
          'Peningkatan mendadak eksport bijih timah, getah, petroleum, dan kayu balak membawa kepada kemunculan **pelabuhan-pelabuhan moden** yang menggantikan pelabuhan tradisional sungai.',
        leadParagraphZh:
          '随着锡、胶、石油与木材出口量暴增，配备深水码头与仓库的现代化海港迅速取代了昔日的传统河口小港。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Pelabuhan di Tanah Melayu**: Muncul pelabuhan eksport utama seperti **Pulau Pinang**, **Port Weld** (Kuala Sepetang), **Teluk Anson** (Teluk Intan), **Port Swettenham** (Pelabuhan Klang), **Port Dickson**, dan pelabuhan entrepot dunia **Singapura**.',
            zh: '【马来亚现代港口】兴起槟城港、钵威港（十八丁）、安顺港、瑞天咸港（今巴生港 Port Klang）、波德申港及世界级转口港新加坡。',
          },
          {
            tag: 'CONTOH',
            bm: '**Pelabuhan di Sarawak dan Sabah**: Di Sarawak berkembang pelabuhan **Kuching**, **Sibu**, dan **Miri** (eksport petroleum); manakala di Sabah berkembang pelabuhan **Labuan**, **Jesselton (Kota Kinabalu)**, **Kudat**, **Tawau**, dan **Sandakan**.',
            zh: '【砂沙现代港口】砂拉越主要港口为古晋、诗巫与美里；沙巴则发展出纳闽、亚庇、古达、斗湖及山打根等重要良港。',
          },
        ],
      },
      {
        sectionCode: '6.3(c)',
        headingBm: 'Perkembangan Sistem Telekomunikasi',
        headingZh: '现代电讯与邮政系统的发展',
        leadParagraphBm:
          'Kemudahan **telekomunikasi** seperti **telegraf**, **telefon**, perkhidmatan **pos**, dan **radio** diperkenalkan bagi menghubungkan pusat pentadbiran dengan kawasan kegiatan ekonomi serta pusat perdagangan antarabangsa dengan pantas.',
        leadParagraphZh:
          '电报、电话、现代邮政与无线电的引入，使殖民政府能够即时掌控各地矿区、园丘动态，并与伦敦及新加坡国际市场无缝对接。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Di Tanah Melayu**: Pada tahun **1886**, talian **telegraf** dipasang menghubungkan antara **Kuala Lumpur dan Melaka**, manakala perkhidmatan pos moden dimulakan di Kuala Lumpur sejak tahun 1880-an.',
            zh: '【马来亚电报与邮政】1886 年架设连接吉隆坡与马六甲的电报线，吉隆坡亦于 1880 年代起设立现代邮政服务。',
          },
          {
            tag: 'CONTOH',
            bm: '**Di Sarawak dan Sabah**: Di Sarawak, perkhidmatan telegraf dipasang menghubungkan **Kuching dengan Singapura pada tahun 1897** bagi melicinkan pentadbiran dan perdagangan; manakala di Sabah, SBUB memperkenalkan telegraf dan radio di bandar-bandar utama untuk berhubung dengan dunia luar.',
            zh: '【砂拉越与沙巴电讯】1897 年铺设连接古晋与新加坡的海底电报线；沙巴 SBUB 则在各大城镇设立电报与无线电台与国际接轨。',
          },
        ],
      },
      {
        sectionCode: '6.3(d)',
        headingBm: 'Sistem Kewangan dan Institusi Perbankan Moden',
        headingZh: '现代金融体系与商业银行的出现',
        leadParagraphBm:
          'Kepesatan pelaburan asing dan perdagangan eksport-import memerlukan penubuhan **bank moden** bagi menyalurkan modal pinjaman, mengurus kiriman wang ke luar negara, serta melicinkan urus niaga antarabangsa.',
        leadParagraphZh:
          '外资涌入与繁忙的进出口贸易催生了现代商业银行，以提供大额信贷资金、跨国汇兑与海事保险服务。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Bank Eropah Terawal**: Bank pertama di Tanah Melayu ialah ***Mercantile Bank*** yang ditubuhkan pada tahun **1859** (di Pulau Pinang), diikuti oleh ***The Chartered Bank*** (**1875**) dan ***Hongkong and Shanghai Bank (HSBC)***.',
            zh: '【早期外资银行 —— 必背年份！】马来亚第一家现代银行是 1859 年设立的有利银行（Mercantile Bank），随后有 1875 年的渣打银行（The Chartered Bank）及汇丰银行（HSBC）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Bank Tempatan**: Pedagang tempatan kaum Cina turut menubuhkan bank sendiri untuk kemudahan komuniti peniaga tempatan, contohnya ***Kwong Yik Bank*** yang ditubuhkan di **Kuala Lumpur pada tahun 1913** (serta *Ban Hin Lee Bank* di Pulau Pinang 1918).',
            zh: '【本土华资银行】本地华人商界亦集资创办银行服务华商，代表例子是 1913 年在吉隆坡成立的广益银行（Kwong Yik Bank）。',
          },
          {
            tag: 'PERHATIAN',
            bm: 'Walaupun prasarana pengangkutan dan perbankan moden dibina dengan pesat, pembangunannya **berat sebelah** kerana hanya tertumpu di kawasan pantai barat yang kaya dengan bijih timah dan getah (`K7.6.7`: kepentingan pembangunan seimbang demi kesejahteraan rakyat).',
            zh: '⚠️ 关键历史评价（K7.6.7）：殖民时期的铁路、公路与银行建设高度集中在盛产锡胶的半岛西海岸，东海岸与内陆严重滞后，造成区域发展极度不平衡！',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Kronologi Pembinaan Landasan Kereta Api Awal di Tanah Melayu, Sabah dan Sarawak',
        titleZh: '马来亚、沙巴与砂拉越早期铁路建设阶段与路线总表',
        headers: [
          { bm: 'Wilayah / Fasa', zh: '地区 / 建设阶段' },
          { bm: 'Tempoh & Laluan Utama', zh: '年份与核心铁路路线' },
          { bm: 'Tujuan & Ciri Utama', zh: '建设目的与关键特点' },
        ],
        rows: [
          [
            { bm: '**Tanah Melayu — Fasa 1**', zh: '马来亚 —— 第一阶段' },
            {
              bm: '**1885–1896**: **Taiping–Port Weld (1885)**, KL–Port Swettenham (1886), Seremban–Port Dickson (1891), Ipoh–Teluk Anson (1895).',
              zh: '1885–1896：太平—钵威（1885 全马首条）、吉隆坡—瑞天咸港（1886）、芙蓉—波德申（1891）、怡保—安顺（1895）。',
            },
            {
              bm: 'Menghubungkan terus **kawasan lombong bijih timah** di pedalaman dengan **pelabuhan eksport** di pantai barat.',
              zh: '直接连接内陆锡矿产区与西海岸出口港口。',
            },
          ],
          [
            { bm: '**Tanah Melayu — Fasa 2 & 3**', zh: '马来亚 —— 第二与第三阶段' },
            {
              bm: '• **Fasa 2 (1897–1909)**: Utara ke selatan **NNMB**\n• **Fasa 3 (1910–1931)**: Seluruh Tanah Melayu **kecuali Terengganu**',
              zh: '• 第二阶段（1897–1909）：贯通马来联邦南北\n• 第三阶段（1910–1931）：连接除登嘉楼外的全马各州',
            },
            {
              bm: 'Memudahkan pentadbiran NNMB, mengangkut bijih timah & **getah**, serta menyediakan pengangkutan awam penumpang.',
              zh: '便利联邦行政管理、大量运送橡胶与锡矿，并兼办客运服务。',
            },
          ],
          [
            { bm: '**Sabah & Sarawak**', zh: '沙巴与砂拉越' },
            {
              bm: '• **Sabah**: **Bukau–Weston (1896)**, Jesselton–Beaufort–Tenom\n• **Sarawak**: **Kuching–Batu 10 (1917)** & Bau–Kuching',
              zh: '• 沙巴：Bukau—Weston（1896）、亚庇—保佛—丹南\n• 砂拉越：古晋—十哩（1917）及石隆门—古晋',
            },
            {
              bm: 'Di Sabah tertumpu di pantai barat/pedalaman untuk pembukaan **estet getah**; di Sarawak tertumpu di sekitar pusat pentadbiran Kuching.',
              zh: '沙巴铁路带动西海岸与内陆橡胶园开发；砂拉越因多依赖河运，仅在古晋周边建短途铁路。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Ketua Stesen Taiping',
        roleBm: 'Pegawai Kereta Api Perak (1885)',
        roleZh: '1885年霹雳太平火车站站长',
        emoji: '🚂',
        lineBm:
          'Wisel berbunyi! Landasan kereta api pertama negara kita dari **Taiping ke Port Weld (1885)** sudah siap! Bijih timah Larut kini sampai ke pelabuhan dalam masa singkat sahaja!',
        lineZh:
          '汽笛鸣响！1885 年我国第一条从太平通往钵威（Port Weld）的铁路正式通车！拉律锡米眨眼工夫就能运抵码头装船啦！',
      },
      {
        speakerBm: 'Pegawai Telegraf Kuching',
        roleBm: 'Pengendali Talian Telekomunikasi Sarawak (1897)',
        roleZh: '1897年古晋电报局官员',
        emoji: '📠',
        lineBm:
          'Mulai tahun **1897**, talian **telegraf** menghubungkan **Kuching terus ke Singapura**, sama seperti talian **Kuala Lumpur–Melaka (1886)** yang mempercepat urusan pentadbiran dan harga pasaran!',
        lineZh:
          '从 1897 年起，海底电报线把古晋与新加坡直接连线，就像 1886 年吉隆坡—马六甲电报线一样，国际市场行情一秒掌握！',
      },
      {
        speakerBm: 'Pengurus Kwong Yik Bank',
        roleBm: 'Usahawan Perbankan Tempatan di Kuala Lumpur (1913)',
        roleZh: '1913年吉隆坡广益银行经理',
        emoji: '🏦',
        lineBm:
          'Selepas bank Eropah seperti ***Mercantile Bank* (1859)** dan ***The Chartered Bank* (1875)** bertapak, kami menubuhkan ***Kwong Yik Bank* pada tahun 1913** untuk membantu peniaga tempatan!',
        lineZh:
          '继 1859 年有利银行与 1875 年渣打银行等英资银行进驻后，我们华商也在 1913 年于吉隆坡创办了广益银行（Kwong Yik Bank），全力支持本地商家！',
      },
    ],
    memoryHackBm:
      '4 Kesan Ekonomi (Bab 6.3) = **"P.P.T.B."**: **P**engangkutan (**Taiping–Port Weld 1885** pertama! Fasa 3 seluruh TM kecuali **Terengganu**; Sabah **Bukau–Weston 1896**), **P**elabuhan (Port Weld, Port Swettenham, Teluk Anson, Sandakan), **T**elekomunikasi (Telegraf KL–Melaka 1886, Kuching–Singapura 1897), **B**ank (***Mercantile Bank* 1859** pertama, *Chartered Bank* 1875, ***Kwong Yik Bank* 1913**)!',
    memoryHackZh:
      '🧠 王牌秒记口诀：【6.3 四大经济影响 P-P-T-B】① 交通（Pengangkutan）：1885 太平到钵威（Taiping–Port Weld）全马第一条铁路，1931 全马通车唯独漏掉登嘉楼（Terengganu），沙巴首条记住 1896 Bukau–Weston；② 港口（Pelabuhan）：瑞天咸港即巴生港；③ 电讯（Telekomunikasi）：沿着铁路架电报；④ 银行（Bank）：1859 Mercantile Bank 全马最早外资银行，1913 Kwong Yik Bank 吉隆坡本土华资银行！',
    subtopicMcqs: [
      {
        id: '6.3-mcq-1',
        spCode: '7.6.3',
        questionBm:
          'Apakah landasan kereta api yang **pertama** dibina di negara kita pada tahun **1885**?',
        questionZh: '我国于 1885 年兴建的第一条铁路连接哪两个地点？',
        options: [
          {
            id: 'A',
            textBm: '**Kuala Lumpur ke Port Swettenham**',
            textZh: '吉隆坡至瑞天咸港',
          },
          {
            id: 'B',
            textBm: '**Taiping ke Port Weld**',
            textZh: '太平至钵威 (Taiping ke Port Weld)',
          },
          {
            id: 'C',
            textBm: '**Seremban ke Port Dickson**',
            textZh: '芙蓉至波德申',
          },
          {
            id: 'D',
            textBm: '**Ipoh ke Teluk Anson**',
            textZh: '怡保至安顺',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Landasan kereta api pertama di negara kita dibina pada tahun **1885** menghubungkan kawasan lombong bijih timah di **Taiping** dengan pelabuhan **Port Weld (Kuala Sepetang)** di Perak.',
        explanationZh:
          '1885 年通车的太平至钵威（Taiping–Port Weld）铁路是我国历史上第一条铁路，旨在加速拉律锡矿出口。',
      },
      {
        id: '6.3-mcq-2',
        spCode: '7.6.3',
        questionBm:
          'Menjelang tahun 1931 (Fasa Ketiga), jaringan landasan kereta api telah menghubungkan seluruh Tanah Melayu **kecuali** sebuah negeri. Apakah negeri tersebut?',
        questionZh: '到了 1931 年（铁路建设第三阶段），铁路网已连接马来半岛各州，唯独哪一个州属例外？',
        options: [
          { id: 'A', textBm: '**Perlis**', textZh: '玻璃市' },
          { id: 'B', textBm: '**Kelantan**', textZh: '吉兰丹' },
          { id: 'C', textBm: '**Terengganu**', textZh: '登嘉楼 (Terengganu)' },
          { id: 'D', textBm: '**Johor**', textZh: '柔佛' },
        ],
        correctId: 'C',
        explanationBm:
          'Pada Fasa Ketiga (1910–1931), pembinaan landasan kereta api telah menghubungkan seluruh Tanah Melayu kecuali negeri **Terengganu**.',
        explanationZh:
          '1910–1931 年第三阶段铁路扩建后，马来半岛除登嘉楼（Terengganu）外的所有州属皆已通火车。',
      },
      {
        id: '6.3-mcq-3',
        spCode: '7.6.3',
        questionBm:
          'Di manakah landasan kereta api pertama di **Sabah** dibina pada tahun **1896**?',
        questionZh: '1896 年沙巴兴建的第一条铁路位于哪一段路线？',
        options: [
          { id: 'A', textBm: '**Bukau ke Weston**', textZh: 'Bukau 至 Weston' },
          { id: 'B', textBm: '**Sandakan ke Tawau**', textZh: '山打根至斗湖' },
          { id: 'C', textBm: '**Kuching ke Batu 10**', textZh: '古晋至十哩' },
          { id: 'D', textBm: '**Kudat ke Lahad Datu**', textZh: '古达至拿笃' },
        ],
        correctId: 'A',
        explanationBm:
          'Pembinaan landasan kereta api di Sabah bermula pada tahun **1896** menghubungkan **Bukau ke Weston**, sebelum disambung antara Jesselton, Beaufort, dan Tenom.',
        explanationZh:
          '沙巴铁路始建于 1896 年的 Bukau 至 Weston 路段，随后才扩建连接亚庇、保佛与丹南的西海岸铁路网。',
      },
      {
        id: '6.3-mcq-4',
        spCode: '7.6.3',
        questionBm:
          'Apakah institusi perbankan moden yang **pertama** ditubuhkan di Tanah Melayu pada tahun **1859**?',
        questionZh: '1859 年在马来亚设立的第一家现代银行是哪一家？',
        options: [
          { id: 'A', textBm: '***Kwong Yik Bank***', textZh: '广益银行 (1913)' },
          { id: 'B', textBm: '***The Chartered Bank***', textZh: '渣打银行 (1875)' },
          { id: 'C', textBm: '***Mercantile Bank***', textZh: '有利银行 (Mercantile Bank, 1859)' },
          { id: 'D', textBm: '***Bank Negara Malaysia***', textZh: '马来西亚国家银行' },
        ],
        correctId: 'C',
        explanationBm:
          '***Mercantile Bank*** yang dibuka pada tahun **1859** merupakan bank pertama di Tanah Melayu, diikuti oleh ***The Chartered Bank*** pada tahun **1875**.',
        explanationZh:
          '1859 年开业的有利银行（Mercantile Bank）是马来亚最早的现代银行；广益银行（Kwong Yik Bank）则于 1913 年在吉隆坡创立。',
      },
      {
        id: '6.3-mcq-5',
        spCode: '7.6.3',
        questionBm:
          'Mengapakah sistem telekomunikasi seperti **telegraf** dipasang selari dengan jaringan jalan raya dan landasan kereta api semasa pentadbiran Barat?',
        questionZh: '为什么西方殖民统治时期会沿着公路与铁路网同步架设电报（telegraf）等电讯系统？',
        options: [
          {
            id: 'A',
            textBm: 'Untuk menyiarkan rancangan hiburan radio ke semua rumah panjang secara percuma',
            textZh: '为了免费向所有长屋播放娱乐广播节目',
          },
          {
            id: 'B',
            textBm: 'Untuk membekalkan kuasa elektrik kepada jentera kapal korek',
            textZh: '为了向采锡铁船提供电力供应',
          },
          {
            id: 'C',
            textBm: 'Untuk menggantikan sepenuhnya penggunaan kapal wap di Selat Melaka',
            textZh: '为了完全取代马六甲海峡的蒸汽船航运',
          },
          {
            id: 'D',
            textBm: 'Untuk menghubungkan pusat pentadbiran dengan kawasan kegiatan ekonomi dan pelabuhan dengan pantas',
            textZh: '为了将行政中心与矿区、胶园经济区及港口快速连接起来',
          },
        ],
        correctId: 'D',
        explanationBm:
          'Talian **telegraf** dan telefon dibangunkan bagi mempercepat hubungan maklumat antara **pusat pentadbiran** dengan **kawasan perlombongan, perladangan, serta pelabuhan eksport**.',
        explanationZh:
          '电报与电话网旨在让殖民行政中枢与内陆锡矿、橡胶园及沿海出口港之间实现即时指令传达与商情沟通。',
      },
    ],
    strukturQuestion: {
      id: '6.3-struktur',
      spCode: '7.6.3',
      stimulusBm:
        'Perkembangan pesat industri perlombongan bijih timah dan perladangan getah membawa kepada pemodenan **sistem pengangkutan**, **kemudahan pelabuhan**, **telekomunikasi**, dan **sistem perbankan** di negara kita.',
      stimulusZh:
        '锡矿开采业与橡胶种植业的蓬勃发展，推动了我国交通系统、港口设施、电讯网络与银行体系的现代化。',
      parts: [
        {
          partLabel: '(a)',
          marks: 3,
          questionBm:
            'Senaraikan **tiga** laluan landasan kereta api yang dibina pada **Fasa Pertama (1885–1896)** di Tanah Melayu.',
          questionZh: '列出马来亚在第一阶段（1885–1896年）兴建的其中三条铁路路线。（3分）',
          expectedKeywordsBm: [
            'Taiping ke Port Weld',
            'Kuala Lumpur ke Port Swettenham',
            'Seremban ke Port Dickson',
            'Ipoh ke Teluk Anson',
          ],
          modelAnswerBm:
            'Tiga laluan landasan kereta api Fasa Pertama ialah dari **Taiping ke Port Weld (1885)**, dari **Kuala Lumpur ke Port Swettenham (1886)**, dan dari **Seremban ke Port Dickson (1891)** [atau **Ipoh ke Teluk Anson (1895)**].',
          modelAnswerZh:
            '第一阶段的三条铁路路线是：太平至钵威（1885）、吉隆坡至瑞天咸港（1886），以及芙蓉至波德申（1891）［或怡保至安顺（1895）］。',
        },
        {
          partLabel: '(b)',
          marks: 3,
          questionBm:
            'Terangkan tujuan utama kuasa Barat membina jaringan pengangkutan dan kemudahan pelabuhan moden di negara kita.',
          questionZh: '说明西方势力在我国大力建设交通网络与现代港口设施的主要目的。（3分）',
          expectedKeywordsBm: [
            'mempercepat penghantaran',
            'bijih timah',
            'getah',
            'pelabuhan',
            'dieksport',
            'melicinkan pentadbiran',
          ],
          modelAnswerBm:
            'Tujuan utamanya adalah untuk **mempercepat pengangkutan hasil ekonomi** seperti **bijih timah** dan **getah** dari kawasan pengeluaran di pedalaman ke **pelabuhan** untuk **dieksport** ke Eropah (**Fakta + Huraian**). Selain itu, jaringan ini memudahkan kemasukan buruh serta jentera berat dan **melicinkan urusan pentadbiran British** (**Contoh/Huraian**).',
          modelAnswerZh:
            '主要目的是加快将内陆产区的锡矿与橡胶等经济资源运往沿海港口，以便装船出口至欧美市场（Fakta + Huraian）。此外，这也方便运入重型机械与劳工，并提高英国殖民政府的行政效率（Contoh/Huraian）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Mengapakah kerajaan perlu memastikan pembangunan infrastruktur pengangkutan dilaksanakan secara seimbang antara bandar dengan luar bandar pada masa kini? (`KBAT` — `K7.6.7`)',
          questionZh: '为什么当今政府必须确保城乡之间的交通基础设施建设保持均衡发展？（高思维 KBAT — 4分）',
          expectedKeywordsBm: [
            'merapatkan jurang ekonomi',
            'kesejahteraan rakyat',
            'memasarkan hasil',
            'peluang pekerjaan',
            'keadilan sosial',
          ],
          modelAnswerBm:
            'Pembangunan pengangkutan yang seimbang penting untuk **merapatkan jurang kemajuan ekonomi** antara penduduk bandar dengan penduduk luar bandar (**Fakta**). Jaringan jalan raya dan rel yang baik memudahkan penduduk pedalaman **memasarkan hasil pertanian** serta menikmati kemudahan pendidikan dan kesihatan yang setara (**Huraian**), contohnya pembinaan Lebuhraya Pan Borneo di Sarawak dan Sabah serta projek ECRL di Pantai Timur (**Contoh**). Kesannya, **kesejahteraan hidup seluruh rakyat** dapat ditingkatkan secara adil (**Inferens**).',
          modelAnswerZh:
            '均衡的交通建设对于缩小城乡经济发展差距至关重要（Fakta）。完善的公路与铁路网不仅方便内陆居民将农产品运往市场销售，也能让他们平等享有医疗与教育服务（Huraian），例如东马泛婆罗洲大道及东海岸铁路（ECRL）计划（Contoh）。由此可公平提升全民生活福祉与社会和谐（Inferens）。',
        },
      ],
    },
  },

  // ============================================================================
  // BAB 6.4 — Kesan Sosial Akibat Pentadbiran Barat di Negara Kita
  // ============================================================================
  {
    subtopicCode: '6.4',
    babNumber: 6,
    babTitleBm: 'Kesan Pentadbiran Barat Terhadap Ekonomi dan Sosial',
    babTitleZh: '西方行政管理对我国经济与社会的影响',
    skCode: '7.6',
    spCodes: ['7.6.4', 'K7.6.8'],
    titleBm: 'Kesan Sosial Akibat Pentadbiran Barat di Negara Kita',
    titleZh: '西方行政管理对我国造成的社会影响',
    heroImages: [
      {
        imageKey: 'bab6_kereta_api_sekolah',
        captionBm:
          'Perkembangan institusi pendidikan seperti Kolej Melayu Kuala Kangsar (MCKK) dan kemunculan bandar baharu yang dihubungkan oleh pengangkutan kereta api.',
        captionZh:
          '江沙马来学院（MCKK）等教育机构的兴起，以及随铁路交通枢纽而蓬勃发展的新兴城镇。',
        hotspots: [
          {
            x: 78,
            y: 42,
            termBm: 'Kolej Melayu Kuala Kangsar (MCKK, 1905)',
            meaningZh: '江沙马来学院（1905年创立）',
            detailBm:
              'Ditubuhkan khusus untuk anak-anak raja dan golongan **bangsawan Melayu** bagi melatih mereka menyertai perkhidmatan awam pentadbiran British.',
            detailZh:
              '专为马来王室与贵族子弟设立的精英英语寄宿学府，旨在培养效忠英殖民政府的基层行政官员。',
          },
          {
            x: 68,
            y: 74,
            termBm: 'Pendidikan Vernakular & Inggeris Berasingan',
            meaningZh: '分源流母语学校与英校制度',
            detailBm:
              'Wujud empat aliran sekolah terpisah (**Melayu, Cina, Tamil, dan Inggeris**) dengan kurikulum berbeza serta penubuhan **SITC Tanjung Malim (1922)** untuk melatih guru Melayu.',
            detailZh:
              '形成马来文、华文、淡米尔文与英文四大互不统属的学校体系，并于 1922 年在丹绒马林设立苏丹依德利斯师范学院（SITC）。',
          },
          {
            x: 13,
            y: 52,
            termBm: 'Kemunculan Bandar Baharu',
            meaningZh: '新兴城市的崛起',
            detailBm:
              'Bandar seperti **Kuala Lumpur, Ipoh, Taiping, Seremban**, **Miri** (petroleum), dan **Jesselton** berkembang sebagai pusat pentadbiran, perdagangan, serta kewangan.',
            detailZh:
              '吉隆坡、怡保、太平、芙蓉、美里（因石油兴起）及亚庇（Jesselton）崛起成为行政、商业与金融中心。',
          },
          {
            x: 45,
            y: 58,
            termBm: 'Perkhidmatan Kesihatan & Penjara Moden',
            meaningZh: '现代医疗卫生与监狱制度',
            detailBm:
              'Pembinaan hospital pertama di **Taiping & Kuala Lumpur (1878)**, **IMR (1900)**, **Hospital Tung Shin**, *Sanitary Board*, serta **Penjara Taiping (1879)** dan **Rumah Pasong Sibu (1890)**.',
            detailZh:
              '1878 年在太平与吉隆坡建首批政府医院、1900 年设医学研究院（IMR）、华人创办同善医院，并兴建太平监狱与诗巫“枷椗屋”（Rumah Pasong）。',
          },
        ],
      },
      {
        imageKey: 'bab6_economy_society',
        captionBm:
          'Pembentukan masyarakat berbilang kaum (masyarakat majmuk) yang terpisah mengikut petempatan dan kegiatan ekonomi di bawah pentadbiran Barat.',
        captionZh:
          '西方殖民统治下多元族群社会（Masyarakat Majmuk）的形成：巫、华、印三大族群在居住地与职业上被分隔。',
      },
    ],
    sections: [
      {
        sectionCode: '6.4(a)',
        headingBm: 'Perkembangan Bandar Baharu',
        headingZh: '新兴城镇的崛起与发展',
        leadParagraphBm:
          'Kepesatan kegiatan perlombongan, perladangan, dan sistem pengangkutan telah melahirkan **bandar-bandar baharu** yang berfungsi sebagai **pusat pentadbiran, pusat perniagaan, pusat perbankan, serta pusat pendidikan dan kesihatan**.',
        leadParagraphZh:
          '采矿、种植园与铁路交通的飞速发展催生了大批新兴城市，成为各地的政治行政、商业贸易、金融银行及教育医疗中心。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Bandar Baharu di Negeri-negeri Melayu**: Muncul bandar perlombongan bijih timah yang pesat seperti **Kuala Lumpur** (ibu negeri NNMB), **Ipoh** (Lembah Kinta), **Taiping** (nama asal Klian Pauh di Larut), dan **Seremban** (Sungai Ujong).',
            zh: '【马来半岛新兴城市】因锡矿而兴起的代表城市包括：吉隆坡（Kuala Lumpur）、怡保（Ipoh）、太平（Taiping，原名吉辇包 Klian Pauh）以及芙蓉（Seremban）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Bandar Baharu di Sarawak**: Tertumpu di kawasan muara sungai dan sumber ekonomi aktif iaitu **Kuching** (ibu negeri sejak 1841), **Sibu** (berkembang pesat selepas kemasukan petani Cina Foochow pada 1901), dan **Miri** (muncul sebagai bandar moden berikutan penemuan **petroleum pada tahun 1910**).',
            zh: '【砂拉越三大城市】古晋（1841年起为首府）、诗巫（Sibu，1901年福州垦民迁入后繁荣）以及美里（Miri，因 1910 年发现石油而迅速崛起的新兴油城）。',
          },
          {
            tag: 'CONTOH',
            bm: '**Bandar Baharu di Sabah**: Muncul pusat pentadbiran dan pelabuhan eksport SBUB seperti **Jesselton** (kini **Kota Kinabalu**, pusat perdagangan getah dan terminal kereta api), **Sandakan**, **Kudat**, dan **Tawau**.',
            zh: '【沙巴新兴港口与行政城】亚庇（原名 Jesselton，橡胶贸易中心与铁路总站，今称哥打京那巴鲁 Kota Kinabalu）、山打根（Sandakan）、古达（Kudat）及斗湖（Tawau）。',
          },
        ],
      },
      {
        sectionCode: '6.4(b)',
        headingBm: 'Pembentukan Masyarakat Berbilang Kaum (Masyarakat Majmuk)',
        headingZh: '多元族群社会（Masyarakat Majmuk）的形成',
        leadParagraphBm:
          'Kemasukan buruh **Cina** dan **India** secara besar-besaran telah membentuk **masyarakat berbilang kaum (masyarakat majmuk)** yang tinggal di bawah satu unit politik yang sama tetapi **terpisah dari segi petempatan, pekerjaan, bahasa, dan budaya**.',
        leadParagraphZh:
          '大批华工与印工的涌入彻底改变了我国的人口结构，形成了同处一个政治实体下，却在居住地、职业、语言与文化上彼此隔离的“多元社会”（Masyarakat Majmuk）。',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Pemisahan Petempatan dan Pekerjaan Mengikut Kaum**: Masyarakat **Melayu** kekal tinggal di kawasan **kampung / luar bandar** sebagai **petani dan nelayan**; masyarakat **Cina** tertumpu di kawasan **bandar dan lombong** sebagai **peniaga dan pelombong**; manakala masyarakat **India** tinggal di kawasan **estet (ladang getah)** sebagai **penoreh getah**.',
            zh: '【族群居住地与职业割裂 —— 必背铁律！】马来人多居乡村务农捕鱼；华人聚居城镇与矿区经商采锡；印裔则集中居住在郊外橡胶园丘（estet）割胶。',
          },
          {
            tag: 'PERHATIAN',
            bm: '**Kesan terhadap Perpaduan**: Dasar pentadbiran British yang mengasingkan kaum mengikut fungsi ekonomi menyebabkan **kurangnya interaksi dan persefahaman antara kaum**, sekali gus **menyukarkan usaha memupuk perpaduan nasional** (`K7.6.8`).',
            zh: '⚠️ 核心历史影响（K7.6.8）：这种按经济职能划分族群的“分而治之”格局，导致各族日常缺乏接触与了解，成为日后国家实现民族团结的一大挑战！',
          },
        ],
      },
      {
        sectionCode: '6.4(c)',
        headingBm: 'Perkembangan Pendidikan Vernakular dan Pendidikan Inggeris',
        headingZh: '各源流母语教育（Pendidikan Vernakular）与英文教育的发展',
        leadParagraphBm:
          'Pentadbiran Barat mewujudkan sistem pendidikan yang **tidak seragam** dan terpecah kepada **empat aliran sekolah**, iaitu **Sekolah Vernakular Melayu**, **Sekolah Vernakular Cina**, **Sekolah Vernakular Tamil**, dan **Sekolah Inggeris**.',
        leadParagraphZh:
          '西方殖民时期并未建立统一的国民教育体系，而是放任形成互不衔接的四大教育源流：马来母语学校、华文学校、淡米尔文学校与英文学校。',
        diagramKey: 'diag_6_4_masyarakat_pendidikan',
        bullets: [
          {
            tag: 'FAKTA',
            bm: '**Sekolah Vernakular Melayu**: Hanya disediakan setakat **peringkat sekolah rendah** dengan matlamat sekadar menjadikan anak Melayu **petani dan nelayan yang sedikit lebih baik daripada bapa mereka**; bagi melatih guru sekolah Melayu ditubuhkan **Maktab Perguruan Sultan Idris (SITC) di Tanjung Malim (1922)**, manakala **Kolej Melayu Kuala Kangsar (MCKK) (1905)** ditubuhkan khusus untuk anak **bangsawan Melayu**.',
            zh: '【马来学校 + SITC 与 MCKK 双子星】殖民政府仅为普通马来平民提供小学教育（旨在让他们安于当比父辈稍好的农民渔夫）；1922 年在丹绒马林设苏丹依德利斯师范学院（SITC）培养马来师资；1905 年则在江沙设马来学院（MCKK）专门培训马来王公贵族子弟担任初级官员！',
          },
          {
            tag: 'FAKTA',
            bm: '**Sekolah Vernakular Cina**: Dibiayai sendiri oleh masyarakat pedagang Cina di bandar dengan menggunakan **buku teks, sukatan pelajaran, dan guru yang dibawa dari negara China**; pada tahun **1920**, British mewartakan **Enakmen Pendaftaran Sekolah** bagi mengawal penyebaran ideologi politik luar dan sentimen anti-British di sekolah Cina.',
            zh: '【华文学校 + 《1920年学校注册法令》】由华社与华商在城镇自资兴办，教材、课程与师资皆直接取自中国；英殖民政府为防范中国革命思潮与反英情绪传入校园，遂于 1920 年颁布《学校注册法令》（Enakmen Pendaftaran Sekolah）严加监管！',
          },
          {
            tag: 'FAKTA',
            bm: '**Sekolah Vernakular Tamil**: Dibuka oleh majikan di kawasan **estet getah** (diwajibkan melalui Kod Buruh 1912) hanya setakat peringkat rendah, serba kekurangan kemudahan, serta berorientasikan negara India dari segi **sukatan pelajaran, buku teks, dan guru dari India**.',
            zh: '【淡米尔文学校】由橡胶园雇主依劳工法在园丘内设立，仅限小学程度、设备简陋，课程、课本与教师均来自印度。',
          },
          {
            tag: 'CONTOH',
            bm: '**Sekolah Inggeris serta Pendidikan di Sarawak & Sabah**: Sekolah Inggeris didirikan oleh mubaligh Kristian dan kerajaan di **bandar** seperti ***Penang Free School* (1816 — pertama!)** dan ***Malacca High School* (1826)** (peluang ke *Kolej Perubatan King Edward VII* & *Raffles College*); di **Sarawak** muncul sekolah mubaligh seperti ***Sekolah St. Thomas* (Kuching)** dan *Madrasah Melayu Sarawak*, manakala di **Sabah** muncul ***Sekolah St. Michael* (Sandakan)** serta Sekolah Melayu Kota Belud.',
            zh: '【英校与东马教育】英校多设于城市（如 1816 年全马最早的槟城大英义学 Penang Free School、1826 年马六甲高等中学），毕业生可升读爱德华七世医学院或莱佛士学院并担任政府文员；砂拉越有古晋圣多玛中学（St. Thomas），沙巴则有山打根圣迈克中学（St. Michael）等教会学校。',
          },
        ],
      },
      {
        sectionCode: '6.4(d)',
        headingBm: 'Perkhidmatan Kesihatan Moden',
        headingZh: '现代医疗卫生服务的建立',
        leadParagraphBm:
          'Kepadatan penduduk dan kekurangan bekalan air bersih di kawasan lombong serta estet menyebabkan wabak penyakit berjangkit seperti **malaria, beri-beri, taun (kolera), dan tibi (batuk kering)** merebak, mendorong penubuhan hospital serta institusi penyelidikan perubatan.',
        leadParagraphZh:
          '矿场与园丘劳工密集且缺乏净水，导致疟疾（malaria）、脚气病（beri-beri）、霍乱（taun）与肺痨（tibi）肆虐，迫使殖民当局与民间社团兴建现代医院及医学研究机构。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Hospital Kerajaan & Penyelidikan (IMR)**: Hospital kerajaan pertama dibina di **Taiping dan Kuala Lumpur pada tahun 1878** untuk merawat buruh asing dan pegawai British; diikuti penubuhan **Institut Penyelidikan Perubatan (*Institute for Medical Research* — IMR) di Kuala Lumpur pada tahun 1900** bagi mengkaji punca penyakit tropika (malaria dan beri-beri) serta langkah pencegahannya.',
            zh: '【政府医院（1878）与医学研究院（IMR 1900）】1878 年在太平与吉隆坡建立首批政府医院；1900 年更在吉隆坡成立医学研究院（IMR），专门研究疟疾与脚气病等热带传染病的病因与预防措施。',
          },
          {
            tag: 'CONTOH',
            bm: '**Hospital Persendirian & Sanitary Board**: Pemimpin masyarakat Cina **Yap Kwan Seng** mengasaskan hospital kebajikan ***Pooi Shin Thong*** (kemudian dikenali sebagai **Hospital Tung Shin**) di Kuala Lumpur bagi merawat buruh Cina miskin; manakala pada tahun **1890-an**, **Sanitary Board (Lembaga Kesihatan)** ditubuhkan untuk mengawasi kebersihan dan kesihatan bandar (di Sarawak dan Sabah turut dibina hospital di Kuching, Sibu, Miri, Jesselton, dan Sandakan).',
            zh: '【同善医院与卫生局（Sanitary Board）】吉隆坡华人甲必丹叶观盛（Yap Kwan Seng）创办培善堂（今吉隆坡同善医院 Hospital Tung Shin）免费救治贫困华工；政府亦于 1890 年代设立卫生局（Sanitary Board）监管市容环境卫生。',
          },
        ],
      },
      {
        sectionCode: '6.4(e)',
        headingBm: 'Pembinaan Penjara Moden',
        headingZh: '现代监狱制度的设立',
        leadParagraphBm:
          'Pentadbiran Barat turut membina institusi **penjara moden** bagi menahan pesalah jenayah, banduan kerja buruh awam, serta pejuang tempatan yang menentang penjajah.',
        leadParagraphZh:
          '西方殖民政府在各地兴建现代化监狱，以关押刑事罪犯、充当公共工程廉价劳力的囚犯以及反殖民起义志士。',
        bullets: [
          {
            tag: 'CONTOH',
            bm: '**Penjara di Tanah Melayu**: Francis Light menjadikan **Fort Cornwallis di Pulau Pinang** sebagai penjara menempatkan banduan dari India (dijadikan buruh murah membina jalan dan pelabuhan); diikuti pembinaan **Penjara Taiping (1879)** sebagai pusat tahanan banduan hukuman lama terbesar bagi NNMB serta **Penjara Pudu di Kuala Lumpur (1895)**.',
            zh: '【马来亚现代监狱】槟城康华丽堡（Fort Cornwallis）最早收押印度籍囚犯充当筑路修港苦力；1879 年兴建的太平监狱（Penjara Taiping）成为马来联邦最大的重刑犯监狱，吉隆坡半山芭监狱（Penjara Pudu）则建于 1895 年。',
          },
          {
            tag: 'CONTOH',
            bm: '**Penjara di Sarawak dan Sabah**: Di Sarawak, Dinasti Brooke membina **Penjara Sibu pada tahun 1890** yang dikenali oleh masyarakat tempatan sebagai **Rumah Pasong** (ditadbir oleh Pegawai Daerah), manakala di Sabah dibina ***The Jesselton Goal*** semasa pentadbiran SBUB.',
            zh: '【砂拉越“枷椗屋”与沙巴监狱】布洛克王朝于 1890 年在诗巫兴建俗称“Rumah Pasong”（枷椗屋）的诗巫监狱；沙巴 SBUB 则在亚庇设立 The Jesselton Goal 监狱。',
          },
        ],
      },
    ],
    comparisonTables: [
      {
        titleBm:
          'Perbandingan Sistem Pendidikan Vernakular (Melayu, Cina, Tamil) dan Pendidikan Inggeris Semasa Pentadbiran Barat',
        titleZh: '西方行政管理时期四大教育源流（巫、华、淡、英）全面对比表',
        headers: [
          { bm: 'Aliran Sekolah', zh: '学校源流' },
          { bm: 'Bahasa, Pembiayaan & Orientasi Kurikulum', zh: '教学媒介语、经费来源与课程取向' },
          { bm: 'Institusi Penting, Undang-Undang & Kesan', zh: '代表学府、关键法令与历史影响' },
        ],
        rows: [
          [
            { bm: '**Sekolah Vernakular Melayu**', zh: '马来母语学校' },
            {
              bm: 'Bahasa Melayu; dibina kerajaan British di kampung hanya setakat **peringkat rendah** (membaca, menulis, mengira, berkebun, anyaman).',
              zh: '马来语教学；由殖民政府设于乡村，仅限小学程度（读写算、园艺与编织）。',
            },
            {
              bm: '• **SITC Tanjung Malim (1922)**: Melatih guru Melayu\n• **MCKK Kuala Kangsar (1905)**: Khusus anak raja & **bangsawan Melayu** jadi pentadbir bawahan.',
              zh: '• 1922 丹绒马林师训学院（SITC）：培养马来师资\n• 1905 江沙马来学院（MCKK）：专训马来贵族子弟。',
            },
          ],
          [
            { bm: '**Sekolah Vernakular Cina**', zh: '华文母语学校' },
            {
              bm: 'Dialek Cina / Mandarin; dibiayai saudagar & masyarakat Cina di bandar/lombong; **sukatan pelajaran, buku teks & guru dari China**.',
              zh: '方言/华语教学；由华商与华社在城镇矿区自资兴办；课程、课本与教师均来自中国。',
            },
            {
              bm: '**Enakmen Pendaftaran Sekolah (1920)** diperkenalkan oleh British untuk menyekat pengaruh politik luar dari China.',
              zh: '英政府颁布《1920年学校注册法令》严控校园受中国政治思潮影响。',
            },
          ],
          [
            { bm: '**Sekolah Vernakular Tamil**', zh: '淡米尔文母语学校' },
            {
              bm: 'Bahasa Tamil; disediakan oleh majikan di **estet getah** (Kod Buruh 1912) setakat peringkat rendah; **sukatan, buku teks & guru dari India**.',
              zh: '淡米尔语教学；由园主在橡胶园设立，仅限小学程度；课程、课本与师资来自印度。',
            },
            {
              bm: 'Kemudahan serba kekurangan; kanak-kanak estet kekal menjadi buruh ladang seperti ibu bapa mereka.',
              zh: '师资与设备匮乏，园丘子弟毕业后大多继续留在胶园当劳工。',
            },
          ],
          [
            { bm: '**Sekolah Aliran Inggeris**', zh: '英文源流学校' },
            {
              bm: 'Bahasa Inggeris; dibuka oleh **mubaligh Kristian** dan kerajaan di kawasan **bandar** mengikut kurikulum Britain.',
              zh: '英语教学；由基督教传教士与政府在城市开办，采用英国课程体系。',
            },
            {
              bm: '***Penang Free School* (1816)**, ***Malacca High School* (1826)**, ***St. Thomas* (Kuching)**, ***St. Michael* (Sandakan)**; lulusan layak ke *Raffles College* & jawatan kerani kerajaan.',
              zh: '槟城大英义学（1816 全马最早）、马六甲高等中学、古晋圣多玛、山打根圣迈克；毕业生可升读学院或任职政府文员。',
            },
          ],
        ],
      },
    ],
    dialogues: [
      {
        speakerBm: 'Pelajar SITC Tanjung Malim',
        roleBm: 'Bakal Guru Melayu di Maktab Perguruan Sultan Idris (1922)',
        roleZh: '1922年丹绒马林苏丹依德利斯师训学院学员',
        emoji: '📚',
        lineBm:
          'Sekolah Melayu biasa hanya di peringkat rendah, manakala **MCKK (1905)** khusus untuk anak bangsawan. Di **SITC Tanjung Malim (1922)** inilah kami dilatih menjadi guru untuk menyedarkan anak bangsa!',
        lineZh:
          '普通马来学校只有小学程度，而江沙马来学院（MCKK）只收贵族子弟。在 1922 年成立的丹绒马林师训学院（SITC），我们立志成为唤醒民族意识的教师！',
      },
      {
        speakerBm: 'Lembaga Pengurus Sekolah Cina',
        roleBm: 'Penyokong Pendidikan Masyarakat Cina (1920)',
        roleZh: '1920年华校董事代表',
        emoji: '🏫',
        lineBm:
          'Kami membiayai sendiri sekolah Cina dan membawa buku teks serta guru dari China, tetapi British mula mengawal ketat semua sekolah melalui **Enakmen Pendaftaran Sekolah 1920**!',
        lineZh:
          '我们华社出钱出力办校，从中国聘请老师、买课本，没想到英殖民政府在 1920 年搬出《学校注册法令》来严密管制我们！',
      },
      {
        speakerBm: 'Yap Kwan Seng',
        roleBm: 'Kapitan Cina & Pengasas Hospital Tung Shin, Kuala Lumpur',
        roleZh: '吉隆坡华人甲必丹兼同善医院创办人叶观盛',
        emoji: '🏥',
        lineBm:
          'Ramai buruh lombong menghidap **malaria dan beri-beri**! Selain hospital kerajaan di **Taiping dan KL (1878)** serta **IMR (1900)**, saya menubuhkan ***Pooi Shin Thong* (Hospital Tung Shin)** untuk merawat mereka secara percuma!',
        lineZh:
          '大批矿工染上疟疾与脚气病！除了 1878 年太平与吉隆坡政府医院及 1900 年医学研究院（IMR）外，我创办了培善堂（同善医院）免费为贫苦同胞治病！',
      },
    ],
    memoryHackBm:
      '5 Kesan Sosial (Bab 6.4) = **"B.M.P.K.P."**: **B**andar baharu (KL, Ipoh, Taiping, **Miri=Petroleum**, **Jesselton**), **M**asyarakat Majmuk (Melayu=Kampung, Cina=Bandar/Lombong, India=Estet), **P**endidikan (**MCKK 1905** bangsawan, **SITC 1922** guru, **Enakmen Pendaftaran Sekolah 1920** Cina, ***Penang Free School* 1816**), **K**esihatan (Hospital Taiping/KL 1878, **IMR 1900**, **Hospital Tung Shin / Yap Kwan Seng**, *Sanitary Board*), **P**enjara (**Taiping 1879**, Pudu 1895, **Rumah Pasong Sibu 1890**)!',
    memoryHackZh:
      '🧠 王牌秒记口诀：【6.4 五大社会影响 B-M-P-K-P】① 城市（Bandar）：美里靠石油、怡保太平靠锡米、亚庇靠橡胶铁路；② 多元社会（Majmuk）：巫住乡村、华居城镇矿区、印留胶园；③ 教育四大名捕：1816 槟城大英义学最早、1905 MCKK 训贵族、1920 学校注册法令管华校、1922 SITC 训马来老师；④ 医疗：1878 太平吉隆坡医院、1900 IMR 研究疟疾脚气病、叶观盛办同善医院（Tung Shin）；⑤ 监狱：1879 太平监狱最大、1890 诗巫叫 Rumah Pasong！',
    subtopicMcqs: [
      {
        id: '6.4-mcq-1',
        spCode: '7.6.4',
        questionBm:
          'Apakah faktor utama yang mendorong kemunculan pesat bandar **Miri** di Sarawak pada awal abad ke-20?',
        questionZh: '20 世纪初推动砂拉越美里（Miri）迅速崛起为新兴城市的主要因素是什么？',
        options: [
          {
            id: 'A',
            textBm: 'Pembukaan estet kelapa sawit oleh Henri Fauconnier',
            textZh: 'Henri Fauconnier 开辟油棕园',
          },
          {
            id: 'B',
            textBm: 'Penemuan dan perlombongan **petroleum** pada tahun **1910**',
            textZh: '1910 年发现并商业开采石油（petroleum）',
          },
          {
            id: 'C',
            textBm: 'Pembinaan Maktab Perguruan Sultan Idris (SITC)',
            textZh: '兴建苏丹依德利斯师范学院',
          },
          {
            id: 'D',
            textBm: 'Kemasukan pelombong bijih timah bawah tanah dari Sungai Lembing',
            textZh: '林明地下锡矿矿工迁入',
          },
        ],
        correctId: 'B',
        explanationBm:
          'Bandar **Miri** di Sarawak muncul dan berkembang pesat selepas penemuan telaga minyak (**petroleum**) pada tahun **1910** oleh *The Anglo-Saxon Petroleum Company*.',
        explanationZh:
          '美里（Miri）因 1910 年钻探出砂拉越第一口商业油井而迅速发展成为现代化石油城市。',
      },
      {
        id: '6.4-mcq-2',
        spCode: '7.6.4',
        questionBm:
          'Mengapakah kerajaan British memperkenalkan **Enakmen Pendaftaran Sekolah** pada tahun **1920**?',
        questionZh: '英国殖民政府为什么在 1920 年颁布《学校注册法令》（Enakmen Pendaftaran Sekolah）？',
        options: [
          {
            id: 'A',
            textBm: 'Untuk memberikan biasiswa percuma kepada semua pelajar sekolah vernakular ke London',
            textZh: '为了向所有母语学校学生提供赴伦敦免费奖学金',
          },
          {
            id: 'B',
            textBm: 'Untuk menyeragamkan bahasa Melayu sebagai bahasa pengantar tunggal di semua sekolah Inggeris',
            textZh: '为了将马来语统一为所有英校的唯一教学媒介语',
          },
          {
            id: 'C',
            textBm: 'Untuk mengawal sekolah vernakular Cina daripada pengaruh politik luar dan sentimen anti-British',
            textZh: '为了管制华文学校，防范外来政治思潮与反英情绪在校园传播',
          },
          {
            id: 'D',
            textBm: 'Untuk mewajibkan anak-anak bangsawan Melayu belajar di estet getah',
            textZh: '为了强制马来贵族子弟前往橡胶园就读',
          },
        ],
        correctId: 'C',
        explanationBm:
          '**Enakmen Pendaftaran Sekolah 1920** digubal oleh British untuk mengawal selia guru, buku teks, dan pentadbiran sekolah (khususnya **Sekolah Vernakular Cina**) bagi menyekat pengaruh politik luar dari negara China.',
        explanationZh:
          '鉴于华校师资与教材皆来自中国，英政府于 1920 年颁布《学校注册法令》严密监控课程与教师，压制反殖民政治思想。',
      },
      {
        id: '6.4-mcq-3',
        spCode: '7.6.4',
        questionBm:
          'Apakah matlamat penubuhan **Kolej Melayu Kuala Kangsar (MCKK)** di Perak pada tahun **1905**?',
        questionZh: '1905 年在霹雳设立江沙马来学院（MCKK）的主要目的是什么？',
        options: [
          {
            id: 'A',
            textBm: 'Melatih anak-anak raja dan golongan **bangsawan Melayu** untuk berkhidmat dalam pentadbiran British',
            textZh: '专门培训马来王室与贵族子弟进入英国殖民行政体系任职',
          },
          {
            id: 'B',
            textBm: 'Melatih guru-guru sekolah vernakular Tamil di seluruh estet getah',
            textZh: '培训全马橡胶园淡米尔文学校的师资',
          },
          {
            id: 'C',
            textBm: 'Menjalankan penyelidikan penyakit tropika seperti malaria dan beri-beri',
            textZh: '开展疟疾与脚气病等热带疾病研究',
          },
          {
            id: 'D',
            textBm: 'Menjadi pusat tahanan pesalah jenayah berat di Negeri-negeri Melayu Bersekutu',
            textZh: '作为马来联邦重刑犯的关押中心',
          },
        ],
        correctId: 'A',
        explanationBm:
          '**Kolej Melayu Kuala Kangsar (MCKK)** ditubuhkan pada tahun **1905** khusus untuk menarik dan melatih golongan **anak raja serta bangsawan Melayu** dalam aliran Inggeris supaya dapat diserapkan ke dalam perkhidmatan awam British, manakala **SITC (1922)** pula melatih guru sekolah Melayu.',
        explanationZh:
          '1905 年创立的江沙马来学院（MCKK）专为马来王公贵族子弟提供精英英语教育以培养基层行政官；培养马来教师的则是 1922 年丹绒马林的 SITC。',
      },
      {
        id: '6.4-mcq-4',
        spCode: '7.6.4',
        questionBm:
          'Apakah peranan **Institut Penyelidikan Perubatan (IMR)** yang ditubuhkan di Kuala Lumpur pada tahun **1900**?',
        questionZh: '1900 年在吉隆坡成立的“医学研究院”（IMR）主要负责什么工作？',
        options: [
          {
            id: 'A',
            textBm: 'Menguji kualiti daun tembakau Sabah untuk pasaran Amsterdam',
            textZh: '检测销往阿姆斯特丹的沙巴烟草品质',
          },
          {
            id: 'B',
            textBm: 'Mengawasi kebersihan jalan raya menggantikan Jabatan Kerja Raya',
            textZh: '取代公共工程局监管道路清洁',
          },
          {
            id: 'C',
            textBm: 'Menguruskan pendaftaran kemasukan buruh Sistem Kontrak di pelabuhan',
            textZh: '管理港口契约制劳工的入境登记',
          },
          {
            id: 'D',
            textBm: 'Mengkaji punca penyakit tropika seperti **beri-beri** dan **malaria** serta langkah pencegahannya',
            textZh: '研究脚气病（beri-beri）与疟疾（malaria）等热带疾病的病因及预防方法',
          },
        ],
        correctId: 'D',
        explanationBm:
          '**Institut Penyelidikan Perubatan (*Institute for Medical Research* — IMR)** ditubuhkan pada tahun **1900** di Kuala Lumpur bagi menjalankan kajian saintifik terhadap punca penyakit berjangkit tropika terutamanya **beri-beri** dan **malaria**.',
        explanationZh:
          '1900 年吉隆坡医学研究院（IMR）专门研究肆虐矿工与园丘工人的疟疾、脚气病等热带疾病成因，推动从治疗转向预防医学。',
      },
      {
        id: '6.4-mcq-5',
        spCode: '7.6.4',
        questionBm:
          'Apakah nama tempatan bagi **Penjara Sibu** yang dibina oleh pentadbiran Dinasti Brooke di Sarawak pada tahun **1890**?',
        questionZh: '布洛克王朝于 1890 年在砂拉越兴建的诗巫监狱（Penjara Sibu），在当地俗称为什么？',
        options: [
          { id: 'A', textBm: '**Fort Cornwallis**', textZh: '康华丽堡' },
          { id: 'B', textBm: '**Pooi Shin Thong**', textZh: '培善堂（同善医院前身）' },
          { id: 'C', textBm: '**Rumah Pasong**', textZh: 'Rumah Pasong（枷椗屋）' },
          { id: 'D', textBm: '**Astana Margherita**', textZh: '玛格丽特王宫' },
        ],
        correctId: 'C',
        explanationBm:
          '**Penjara Sibu** yang dibina pada tahun **1890** dikenali sebagai **Rumah Pasong** oleh masyarakat tempatan di Sarawak dan ditadbir oleh Pegawai Daerah.',
        explanationZh:
          '建于 1890 年的诗巫监狱在当地被称为 Rumah Pasong（意即上枷锁的拘留屋），由县官负责管理。',
      },
    ],
    strukturQuestion: {
      id: '6.4-struktur',
      spCode: '7.6.4',
      stimulusBm:
        'Pentadbiran Barat meninggalkan kesan sosial yang mendalam kepada negara kita, terutamanya melalui pembentukan **masyarakat berbilang kaum**, perkembangan **sistem pendidikan vernakular**, serta penyediaan **perkhidmatan kesihatan**.',
      stimulusZh:
        '西方行政管理对我国留下了深远的社会影响，尤其是形成多元族群社会、发展分源流母语教育体系，以及建立现代医疗卫生服务。',
      parts: [
        {
          partLabel: '(a)',
          marks: 2,
          questionBm:
            'Namakan **dua** hospital terawal (kerajaan atau persendirian) yang ditubuhkan di Tanah Melayu semasa pentadbiran British.',
          questionZh: '写出英国统治时期在马来亚设立的两所早期医院（政府医院或民间医院皆可）。（2分）',
          expectedKeywordsBm: [
            'Hospital Taiping',
            'Hospital Kuala Lumpur',
            'Hospital Tung Shin',
            'Pooi Shin Thong',
          ],
          modelAnswerBm:
            'Dua hospital terawal ialah **Hospital Kerajaan Taiping (1878)** dan **Hospital Tung Shin** (*Pooi Shin Thong* yang diasaskan oleh **Yap Kwan Seng**) di Kuala Lumpur [atau **Hospital Kerajaan Kuala Lumpur (1878)**].',
          modelAnswerZh:
            '两所早期医院是：1878 年设立的太平政府医院（Hospital Taiping），以及叶观盛在吉隆坡创办的同善医院（Hospital Tung Shin / 培善堂）［或 1878 年吉隆坡政府医院］。',
        },
        {
          partLabel: '(b)',
          marks: 4,
          questionBm:
            'Mengapakah sistem **pendidikan vernakular** semasa pentadbiran Barat dikatakan gagal memupuk perpaduan kaum di negara kita?',
          questionZh: '为什么说西方殖民统治时期的“分源流母语教育制度”（pendidikan vernakular）未能促进我国各族群的团结？（4分）',
          expectedKeywordsBm: [
            'terpisah',
            'bahasa pengantar berbeza',
            'sukatan pelajaran',
            'buku teks',
            'negara asal',
            'kurang interaksi',
          ],
          modelAnswerBm:
            'Sistem pendidikan vernakular memisahkan murid mengikut kaum ke dalam **empat aliran sekolah yang berasingan** (Melayu, Cina, Tamil, dan Inggeris) menggunakan **bahasa pengantar masing-masing** (**Fakta**). Selain itu, **sukatan pelajaran, buku teks, dan guru** bagi sekolah vernakular Cina serta Tamil dibawa masuk dari **negara asal (China dan India)** (**Huraian/Contoh**). Keadaan ini menyebabkan generasi muda **kurang berinteraksi** dan tidak mempunyai identiti kebangsaan yang sepunya (**Inferens**).',
          modelAnswerZh:
            '分源流教育制度将各族学生分隔在马来校、华校、淡小与英校四种互不往来的学校体系中，各自使用不同的教学媒介语（Fakta）。此外，华校与淡米尔学校的课程纲要、课本与教师皆直接引自祖籍国（中国与印度）（Huraian/Contoh）。这导致年轻一代缺乏跨族群交流，难以建立共同的国家认同感（Inferens）。',
        },
        {
          partLabel: '(c)',
          marks: 4,
          questionBm:
            'Sebagai warganegara Malaysia hari ini, cadangkan langkah-langkah berkesan untuk memperkukuh perpaduan dalam kalangan masyarakat berbilang kaum di sekolah dan komuniti. (`KBAT` — `K7.6.8`)',
          questionZh: '作为当今马来西亚公民，请建议在校园与社区中巩固多元族群团结的有效措施。（高思维 KBAT — 4分）',
          expectedKeywordsBm: [
            'kurikulum kebangsaan',
            'bahasa kebangsaan',
            'aktiviti kokurikulum',
            'hormat-menghormati',
            'rumah terbuka',
            'Rukun Negara',
          ],
          modelAnswerBm:
            'Di peringkat sekolah, perpaduan dapat diperkukuh dengan menghayati **kurikulum kebangsaan yang seragam**, memartabatkan **Bahasa Melayu sebagai bahasa perpaduan**, serta melibatkan murid pelbagai kaum secara bersama dalam **aktiviti sukan dan kokurikulum** seperti RIMUP (**Fakta + Huraian**). Di peringkat komuniti pula, rakyat hendaklah mengamalkan sikap **hormat-menghormati** adat budaya kaum lain dan menganjurkan **amalan rumah terbuka** semasa musim perayaan (**Contoh**). Usaha berterusan ini akan menjamin **keharmonian dan kestabilan negara** berteraskan **Rukun Negara** (**Inferens**).',
          modelAnswerZh:
            '在学校层面，可通过落实统一的国家课程纲要、尊崇国语马来语作为团结桥梁，以及让各族学生共同参与运动与课外活动交融计划（RIMUP）来巩固团结（Fakta + Huraian）。在社区层面，国民应互相尊重彼此的宗教习俗，并在佳节期间举办门户开放活动增进感情（Contoh）。唯有持续携手努力，才能在《国家原则》基础上保障马来西亚长治久安与社会和谐（Inferens）。',
        },
      ],
    },
  },
];

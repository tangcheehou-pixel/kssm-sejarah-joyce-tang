export type ImageKey =
  | 'bab1_west_arrival'
  | 'bab1_istana_melayu'
  | 'bab1_hasil_bumi_pelabuhan'
  | 'bab1_pendidikan_pondok'
  | 'bab1_terusan_suez_kapal_wap'
  | 'bab2_pulau_pinang_light'
  | 'bab2_singapura_raffles'
  | 'bab2_straits_settlements'
  | 'bab3_perlombongan_larut'
  | 'bab3_pangkor_tin'
  | 'bab3_durbar_kuala_kangsar'
  | 'bab4_kedah_terusan'
  | 'bab4_johor_abu_bakar'
  | 'bab4_nnmtb_johor'
  | 'bab5_sarawak_sabah'
  | 'bab5_sarawak_astana_fort'
  | 'bab5_sabah_kinabalu_port'
  | 'bab6_economy_society'
  | 'bab6_kapal_korek_getah'
  | 'bab6_kereta_api_sekolah'
  | 'bab7_local_heroes'
  | 'bab7_kubu_rentap_sadok'
  | 'bab8_rulers_wisdom'
  | 'bab8_terengganu_askar_melayu';

export type DiagramKey =
  | 'diag_1_1_hierarki_adat'
  | 'diag_1_1_timbangan_wang'
  | 'diag_1_2_faktor_barat'
  | 'diag_1_4_strategi_barat'
  | 'diag_2_2_perjanjian_london'
  | 'diag_2_4_pentadbiran_nns'
  | 'diag_3_2_sistem_residen'
  | 'diag_3_4_nnmb_durbar'
  | 'diag_4_2_perjanjian_bangkok'
  | 'diag_4_4_nnmtb_vs_nnmb'
  | 'diag_5_2_brooke_sarawak'
  | 'diag_5_3_sbub_sabah'
  | 'diag_6_2_bijih_getah'
  | 'diag_6_4_masyarakat_pendidikan'
  | 'diag_7_1_peta_pahlawan'
  | 'diag_8_2_perlembagaan_askar';

export interface BilingualBullet {
  tag: 'FAKTA' | 'HURAIAN' | 'CONTOH' | 'PERHATIAN';
  /** PRIMARY: Complete, authentic KSSM Bahasa Melayu textbook sentence/point (use **term** to highlight key BM phrases) */
  bm: string;
  /** SECONDARY: Malaysian Simplified Chinese (简体中文) translation & explanation right beside or directly underneath */
  zh: string;
}

export interface ImageHotspot {
  x: number;
  y: number;
  termBm: string;
  meaningZh: string;
  detailBm: string;
  detailZh: string;
}

export interface SubtopicHeroImage {
  imageKey: ImageKey;
  captionBm: string;
  captionZh: string;
  hotspots?: ImageHotspot[];
}

export interface TextbookSectionBlock {
  sectionCode: string;
  headingBm: string;
  headingZh: string;
  leadParagraphBm: string;
  leadParagraphZh: string;
  imageKey?: ImageKey;
  imageCaptionBm?: string;
  imageCaptionZh?: string;
  diagramKey?: DiagramKey;
  bullets: BilingualBullet[];
}

export interface BilingualTable {
  titleBm: string;
  titleZh: string;
  headers: { bm: string; zh: string }[];
  rows: { bm: string; zh: string }[][];
}

export interface BilingualDialogue {
  speakerBm: string;
  roleBm: string;
  roleZh: string;
  emoji: string;
  /** PRIMARY: Authentic Bahasa Melayu historical speech */
  lineBm: string;
  /** SECONDARY: Malaysian Simplified Chinese translation underneath */
  lineZh: string;
}

export interface SubtopicMcq {
  id: string;
  spCode: string;
  questionBm: string;
  questionZh: string;
  options: {
    id: 'A' | 'B' | 'C' | 'D';
    textBm: string;
    textZh: string;
  }[];
  correctId: 'A' | 'B' | 'C' | 'D';
  explanationBm: string;
  explanationZh: string;
}

export interface SubtopicStrukturPart {
  partLabel: string; // "(a)", "(b)", "(c)"
  marks: number;
  questionBm: string;
  questionZh: string;
  expectedKeywordsBm: string[];
  modelAnswerBm: string;
  modelAnswerZh: string;
}

export interface SubtopicStrukturQuestion {
  id: string;
  spCode: string;
  stimulusBm: string;
  stimulusZh: string;
  parts: SubtopicStrukturPart[];
}

export interface OfficialSubtopic {
  subtopicCode: string; // "1.1" .. "8.4"
  babNumber: number;    // 1 .. 8
  babTitleBm: string;
  babTitleZh: string;
  skCode: string;
  spCodes: string[];
  titleBm: string;
  titleZh: string;
  heroImages: SubtopicHeroImage[];
  sections: TextbookSectionBlock[];
  comparisonTables: BilingualTable[];
  dialogues: BilingualDialogue[];
  memoryHackBm: string;
  memoryHackZh: string;
  subtopicMcqs: SubtopicMcq[];
  strukturQuestion?: SubtopicStrukturQuestion;
}

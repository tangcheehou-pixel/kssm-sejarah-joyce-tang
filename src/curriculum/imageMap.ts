import { ImageKey } from '../types/textbook';

export const IMAGE_PATHS: Record<ImageKey, string> = {
  bab1_west_arrival: './images/bab1_west_arrival.jpg',
  bab1_istana_melayu: './images/bab1_istana_melayu.jpg',
  bab1_hasil_bumi_pelabuhan: './images/bab1_hasil_bumi_pelabuhan.jpg',
  bab1_pendidikan_pondok: './images/bab1_pendidikan_pondok.jpg',
  bab1_terusan_suez_kapal_wap: './images/bab1_terusan_suez_kapal_wap.jpg',
  bab2_pulau_pinang_light: './images/bab2_pulau_pinang_light.jpg',
  bab2_singapura_raffles: './images/bab2_singapura_raffles.jpg',
  bab2_straits_settlements: './images/bab2_straits_settlements.jpg',
  bab3_perlombongan_larut: './images/bab3_perlombongan_larut.jpg',
  bab3_pangkor_tin: './images/bab3_pangkor_tin.jpg',
  bab3_durbar_kuala_kangsar: './images/bab3_durbar_kuala_kangsar.jpg',
  bab4_kedah_terusan: './images/bab4_kedah_terusan.jpg',
  bab4_johor_abu_bakar: './images/bab4_johor_abu_bakar.jpg',
  bab4_nnmtb_johor: './images/bab4_nnmtb_johor.jpg',
  bab5_sarawak_sabah: './images/bab5_sarawak_sabah.jpg',
  bab5_sarawak_astana_fort: './images/bab5_sarawak_astana_fort.jpg',
  bab5_sabah_kinabalu_port: './images/bab5_sabah_kinabalu_port.jpg',
  bab6_economy_society: './images/bab6_economy_society.jpg',
  bab6_kapal_korek_getah: './images/bab6_kapal_korek_getah.jpg',
  bab6_kereta_api_sekolah: './images/bab6_kereta_api_sekolah.jpg',
  bab7_local_heroes: './images/bab7_local_heroes.jpg',
  bab7_kubu_rentap_sadok: './images/bab7_kubu_rentap_sadok.jpg',
  bab8_rulers_wisdom: './images/bab8_rulers_wisdom.jpg',
  bab8_terengganu_askar_melayu: './images/bab8_terengganu_askar_melayu.jpg',
};

export function resolveImageSrc(keyOrLegacy: string): string {
  if (keyOrLegacy in IMAGE_PATHS) {
    return IMAGE_PATHS[keyOrLegacy as ImageKey];
  }
  const legacyMap: Record<string, ImageKey> = {
    bab1: 'bab1_west_arrival',
    bab2: 'bab2_straits_settlements',
    bab3: 'bab3_pangkor_tin',
    bab4: 'bab4_nnmtb_johor',
    bab5: 'bab5_sarawak_sabah',
    bab6: 'bab6_economy_society',
    bab7: 'bab7_local_heroes',
    bab8: 'bab8_rulers_wisdom',
  };
  const mapped = legacyMap[keyOrLegacy] || 'bab1_west_arrival';
  return IMAGE_PATHS[mapped];
}

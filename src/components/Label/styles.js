// @TODO NEEDS CLEAN UP
import {
  StyleSheet,
} from 'react-native';

import {
  HEROES_COLORS, TEXT
} from '../../constants/colors';

export default StyleSheet.create({
  listElementTypeContainer: {
    borderRadius: 0,
  },
  listElementType: {
    fontSize: 12,
    color: TEXT.TEXT_1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  twelve_titan: {
    backgroundColor: HEROES_COLORS.TITAN_BACKGROUND,
  },
  titan: {
    backgroundColor: HEROES_COLORS.TITAN_BACKGROUND,
  },
  king: {
    backgroundColor: HEROES_COLORS.KING_BACKGROUND,
    borderRadius: 6,
  },
  demigod: {
    backgroundColor: HEROES_COLORS.DEMIGOD_BACKGROUND,
  },
  deity: {
    backgroundColor: HEROES_COLORS.DEITY_BACKGROUND,
  },
  deity_text: {
    color: TEXT.TEXT_2,
  },
  other_deity: {
    backgroundColor: HEROES_COLORS.DEITY_BACKGROUND,
  },
  other_deity_text: {
    color: TEXT.TEXT_2,
  },
  sea_deity: {
    backgroundColor: HEROES_COLORS.SEA_DEITY_BACKGROUND,
  },
  sky_deity: {
    backgroundColor: HEROES_COLORS.SKY_DEITY_BACKGROUND,
  },
  sky_deity_text: {
    color: TEXT.TEXT_2,
  },
  chthonic_deity: {
    backgroundColor: HEROES_COLORS.CHTHONIC_DEITY_BACKGROUND,
  },
  rustic_deity: {
    backgroundColor: HEROES_COLORS.RUSTIC_DEITY_BACKGROUND,
  },
  agricultural_deity: {
    backgroundColor: HEROES_COLORS.RUSTIC_DEITY_BACKGROUND,
  },
  major_olympian: {
    backgroundColor: HEROES_COLORS.GOD_BACKGROUND,
  },
  giant: {
    backgroundColor: HEROES_COLORS.GIANT_BACKGOURND,
  },
  giant_text: {
    color: TEXT.TEXT_2,
  },
  nymph: {
    backgroundColor: HEROES_COLORS.NYMPH_BACKGROUND,
  },
  hero: {
    backgroundColor: HEROES_COLORS.HERO_BACKGROUND,
  },
  hero_text: {
    color: TEXT.TEXT_2,
  },
  deified_mortal: {
    backgroundColor: HEROES_COLORS.DEIFIED_MORTAL_BACKGROUND,
  },
  deified_mortal_text: {
    color: TEXT.TEXT_2,
  },
  minor_figure: {
    backgroundColor: HEROES_COLORS.MINOR_FIGURE_BACKGROUND,
  },
  minor_figure_text: {
    color: TEXT.TEXT_2,
  },
  health_deity: {
    backgroundColor: HEROES_COLORS.HEALTH_DEITY_BACKGROUND,
  },
  creature: {
    backgroundColor: HEROES_COLORS.CREATURE_BACKGROUND,
  },
  amazon: {
    backgroundColor: HEROES_COLORS.AMAZON_BACKGROUND,
  },
  seer_oracle: {
    backgroundColor: HEROES_COLORS.SEER_ORACLE_BACKGROUND,
  },
  primordial_deity: {
    backgroundColor: HEROES_COLORS.PRIMORDIAL_DEITY_BACKGROUND,
  },
});

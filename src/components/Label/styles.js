import {
  StyleSheet,
} from 'react-native';

import {
  FONT,
  HEROES_COLORS, TEXT
} from '../../constants/colors';

export default StyleSheet.create({
  listElementTypeContainer: {
    borderRadius: 0,
  },
  listElementType: {
    fontSize: FONT.SIZE.XS,
    color: TEXT.TEXT_1,
    backgroundColor: 'transparent',
  },
  twelve_titan_text: { color: HEROES_COLORS.TITAN_PRIMARY, },
  titan_text: { color: HEROES_COLORS.TITAN_PRIMARY, },
  king_text: { color: HEROES_COLORS.KING_PRIMARY },
  demigod_text: { color: HEROES_COLORS.DEMIGOD_PRIMARY, },

  deity: { color: HEROES_COLORS.DEITY_PRIMARY, },
  deity_text: { color: HEROES_COLORS.DEITY_PRIMARY, },

  other_deity: { color: HEROES_COLORS.DEITY_PRIMARY, },
  other_deity_text: { color: TEXT.TEXT_2, },

  sea_deity_text: { color: HEROES_COLORS.SEA_DEITY_PRIMARY, },

  sky_deity: { color: HEROES_COLORS.SKY_DEITY_PRIMARY, },
  sky_deity_text: { color: HEROES_COLORS.SKY_DEITY_PRIMARY, },

  chthonic_deity_text: { color: HEROES_COLORS.CHTHONIC_DEITY_PRIMARY, },
  rustic_deity_text: { color: HEROES_COLORS.RUSTIC_DEITY_PRIMARY, },
  agricultural_deity: { color: HEROES_COLORS.RUSTIC_DEITY_PRIMARY, },
  major_olympian_text: { color: HEROES_COLORS.GOD_PRIMARY, },

  giant: { color: HEROES_COLORS.GIANT_PRIMARY, },
  giant_text: { color: HEROES_COLORS.GIANT_PRIMARY, },

  nymph_text: { color: HEROES_COLORS.NYMPH_PRIMARY, },

  hero: { color: HEROES_COLORS.HERO_PRIMARY, },
  hero_text: { color: HEROES_COLORS.HERO_PRIMARY, },

  deified_mortal: { color: HEROES_COLORS.DEIFIED_MORTAL_PRIMARY, },
  deified_mortal_text: { color: HEROES_COLORS.DEIFIED_MORTAL_PRIMARY, },

  minor_figure: { color: HEROES_COLORS.MINOR_FIGURE_PRIMARY, },
  minor_figure_text: { color: HEROES_COLORS.MINOR_FIGURE_PRIMARY, },

  health_deity_text: { color: HEROES_COLORS.HEALTH_DEITY_PRIMARY, },
  creature_text: { color: HEROES_COLORS.CREATURE_PRIMARY, },
  amazon_text: { color: HEROES_COLORS.AMAZON_PRIMARY, },
  seer_oracle_text: { color: HEROES_COLORS.SEER_ORACLE_PRIMARY, },
  primordial_deity_text: { color: HEROES_COLORS.PRIMORDIAL_DEITY_PRIMARY, },
});

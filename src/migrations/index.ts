import * as migration_20250316_211306_initial from './20250316_211306_initial';

export const migrations = [
  {
    up: migration_20250316_211306_initial.up,
    down: migration_20250316_211306_initial.down,
    name: '20250316_211306_initial'
  },
];

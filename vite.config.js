import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        daftar: resolve(__dirname, 'daftar.html'),
        cekStatus: resolve(__dirname, 'cek-status.html'),
        verify: resolve(__dirname, 'verify.html'),
        login: resolve(__dirname, 'login.html'),
        konfirmasi: resolve(__dirname, 'konfirmasi.html'),
        adminIndex: resolve(__dirname, 'admin/index.html'),
        adminPendaftar: resolve(__dirname, 'admin/pendaftar.html'),
        adminProgram: resolve(__dirname, 'admin/program.html'),
        adminInstruktur: resolve(__dirname, 'admin/instruktur.html'),
        adminLaporan: resolve(__dirname, 'admin/laporan.html'),
        adminSertifikasi: resolve(__dirname, 'admin/sertifikasi.html'),
      },
    },
  },
});

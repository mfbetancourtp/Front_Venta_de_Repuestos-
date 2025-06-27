import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',        // Para tests de Angular y DOM
        globals: true,               // ¡Esto habilita describe, it, expect como globales!
        setupFiles: ['./src/setup-vitest.ts'], // Puedes agregar setup extra aquí si lo necesitas
        coverage: {
            reporter: ['text', 'lcov'],
            reportsDirectory: './coverage',
        },
    },
});

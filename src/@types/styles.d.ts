// códigos de DEFINIÇÃO DE TIPOS para typescript

import "styled-components";
import { defaultTheme } from '../styles/themes/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
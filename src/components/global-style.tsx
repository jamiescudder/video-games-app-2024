import { createGlobalStyle } from 'styled-components'
import { DM_Sans, Spectral } from 'next/font/google'
import { colors } from 'video-games-app/theme'
import { NextFont } from 'next/dist/compiled/@next/font'
import { NamedExoticComponent } from 'react'

const DMSans: NextFont = DM_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: 'normal',
})

const SpectralFont: NextFont = Spectral({
  weight: ['200', '700'],
  subsets: ['latin'],
  style: 'normal',
})

const createCssVariable = (items: any): string[] => {
  return Object.keys(items).flatMap((key: string): string => `--${key}: ${items[key]};`)
}

const GlobalStyle: NamedExoticComponent = createGlobalStyle`

    :root {
        -webkit-font-smoothing: antialiased;
        ${createCssVariable(colors)}

        --font-spectral: ${SpectralFont.style.fontFamily};
        --font-dm-sans: ${DMSans.style.fontFamily};

        --h1-min-size: 37.00px;
        --h1-max-size: 81.00px;
        --h1-font-size: clamp(var(--h1-min-size), 5.5vw, var(--h1-max-size));

        --h2-min-size: 30.00px;
        --h2-max-size: 54.00px;
        --h2-font-size: clamp(var(--h2-min-size), 5.5vw, var(--h2-max-size));

        --h3-min-size: 25.00px;
        --h3-max-size: 37.00px;
        --h3-font-size: clamp(var(--h3-min-size), 5.5vw, var(--h3-max-size));

        --h4-min-size: 20.00px;
        --h4-max-size: 25.00px;
        --h4-font-size: clamp(var(--h4-min-size), 5.5vw, var(--h4-max-size));

        --h5-min-size: 16.00px;
        --h5-max-size: 20.00px;
        --h5-font-size: clamp(var(--h5-min-size), 5.5vw, var(--h5-max-size));
        
        --p-min-size: 16.00px;
        --p-max-size: 18.00px;
        --p-font-size: clamp(var(--p-min-size), 5.5vw, var(--p-max-size));

        --subtitle-min-size: 16.00px;
        --subtitle-max-size: 17.00px;
        --subtitle-font-size: clamp(var(--subtitle-min-size), 5.5vw, var(--subtitle-max-size));

        --opacity-hover: 0.65;

        --max-width:  48.75rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-spectral);
        font-weight: 200;
    }

    p, a, button, input, label {
        font-family: var(--font-dm-sans);
    }

    a {
      color: inherit;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  
    html {
      -moz-text-size-adjust: none;
      -webkit-text-size-adjust: none;
      text-size-adjust: none;
      color: #fff !important;
    }
  
    :focus-visible {
      outline-color: var(--link);
      outline-style: solid;
      outline-width: 1px;
    }

    body {
      background-color: var(--backgroundGrey);
    }
  
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }
  
    ul,
    ol {
      list-style: none;
      margin: 0;
    }
  
    html {
      font-family: var(--font-maven);
      font-weight: var(--font-weight-regular);
      font-size: inherit;
      color: inherit;
    }
  
    body {
      min-height: 150vh;
      line-height: 1.5;
      height: 100%;
      font-size: 16px;
    }
  
    h1,
    h2,
    h3,
    h4,
    button,
    input,
    label {
      line-height: 1.1;
    }
  
    a:not([class]) {
      text-decoration-skip-ink: auto;
      color: currentColor;
    }
    
    img,
    picture {
      max-width: 100%;
      display: block;
    }
  
    input,
    button,
    textarea,
    select {
      font: inherit;
    }
  `

export default GlobalStyle

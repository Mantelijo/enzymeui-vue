/**
 * This is helper file for sidebar svg icons.
 */

const size = 22;

export default {
    Dashboard: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="3" y="12" width="6" height="8" rx="1" />
            <rect x="9" y="8" width="6" height="12" rx="1" />
            <rect x="15" y="4" width="6" height="16" rx="1" />
            <line x1="4" y1="20" x2="18" y2="20" />
        </svg>
    `,
    Charts: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="19" x2="20" y2="19" />
            <polyline points="4 15 8 9 12 11 16 6 20 10" />
        </svg>
    `,
    Components: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="4" width="6" height="6" rx="1" />
            <rect x="14" y="4" width="6" height="6" rx="1" />
            <rect x="4" y="14" width="6" height="6" rx="1" />
            <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
    `,
    Forms: `
        <svg xmlns="http://www.w3.org/2000/svg"  class="stroke-default" width="${size}" height="${size}"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <line x1="9" y1="9" x2="10" y2="9" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
    `,
    Typography: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="18" cy="16" r="3" />
            <line x1="21" y1="13" x2="21" y2="19" />
            <path d="M3 19l5 -13l5 13" />
            <line x1="5" y1="14" x2="11" y2="14" />
        </svg>
    `,
    Tables: `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-default" width="${size}" height="${size}"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#607D8B" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="4" y1="10" x2="20" y2="10" />
            <line x1="10" y1="4" x2="10" y2="20" />
        </svg>
    `,
    Triangle: `
       <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-caret-down fa-w-10 sort-icon">
           <path data-v-abf7e44e="" data-v-7a2409dd="" fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" class="">
           </path>
       </svg>
    `,
}
import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: [
        'Roboto',
    ],
    bodyFontFamily: [
        'Montserrat',
    ],
    googleFonts: [
        {
            name: 'Roboto',
            styles: [
                '400',
                '700'
            ],
        },
        {
            name: 'Montserrat',
            styles: [
                '400',
                '700'
            ],
        },
    ],
})

export default typography
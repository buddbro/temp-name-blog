import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: [
        'Roboto', 'Roboto Slab',
    ],
    bodyFontFamily: [
        'Montserrat',
    ],
    googleFonts: [
        {
            name: 'Roboto',
            styles: [
                '400',
                '500',
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
        {
            name: 'Roboto Slab',
            styles: [
                '400',
                '500',
                '700'
            ],
        },
    ],
})

export default typography
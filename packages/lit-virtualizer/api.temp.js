html`
    <lit-virtualizer 
        .layout=${{
            type: Layout1dNaturalSizeGrid,
            itemSize: {
                width: 300,
                height: 300
            }
        }}
        .items=${this.data}
        .renderItem=${this._renderItem}>
    </lit-virtualizer>
`

html`
    <lit-virtualizer 
        .layout=${layout1dSquareGrid({
            idealSize: 300,
            spacing: 8
        })}
        .items=${this.data}
        .renderItem=${this._renderContact}>
    </lit-virtualizer>
`

///

html`
    <lit-virtualizer 
        .layout=${grid({
            itemSize: '300px' | { width: '400px', height: '300px' },
            flex: true | false | { preserve: 'aspect-ratio' | 'width' | 'height' | 'area' },
            gap: '8px' | '8px 0',
            padding: 'match-gap' | '8px' | '8px 0' | '8px 0 16px' | '8px 0 8px match-gap',
            justifyContent: 'start' | 'end' | 'center',
        })}
        .items=${this.data}
        .renderItem=${this._renderContact}>
    </lit-virtualizer>
`

1000

w: 600, h: 100
height

500x100 1000x100
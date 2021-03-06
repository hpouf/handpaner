import * as DATA from './data'
import { Handpan } from './models'

// A => A
// A# => Bb
// Bb => A#
export function alternateFlatSharp(noteName: string): string {
    const indexSharp = DATA.notesSharp.indexOf(noteName)
    const indexFlat = DATA.notesFlat.indexOf(noteName)
    return indexSharp !== -1 ? DATA.notesFlat[indexSharp] : DATA.notesSharp[indexFlat]
}

// A, 3m => C
// A, 3 => Db
export function relToAbsFlat(rootName: string, relDiff: any): string {
    const rootIndex = DATA.notesSharp.indexOf(rootName) !== -1 ? DATA.notesSharp.indexOf(rootName) : DATA.notesFlat.indexOf(rootName)
    if (rootIndex === -1) {
        throw new Error('Unknown note: ' + rootName)
    }
    const ecartIndex = DATA.ecarts.indexOf(relDiff)
    if (ecartIndex === -1) {
        throw new Error('Unknown interval: ' + relDiff)
    }
    return DATA.notesFlat[(rootIndex + ecartIndex + 12) % 12]
}

// A, 3m => C
// A, 3 => C♯
export function relToAbsSharp(rootName: string, relDiff: any): string {
    const rootIndex = DATA.notesSharp.indexOf(rootName) !== -1 ? DATA.notesSharp.indexOf(rootName) : DATA.notesFlat.indexOf(rootName)
    if (rootIndex === -1) {
        throw new Error('Unknown note: ' + rootName)
    }
    const ecartIndex = DATA.ecarts.indexOf(relDiff)
    if (ecartIndex === -1) {
        throw new Error('Unknown interval: ' + relDiff)
    }
    return DATA.notesSharp[(rootIndex + ecartIndex + 12) % 12]
}

// A, A / B C D => 1 / 2 3m 4
export function absToRel(ding: string, notesAsStringClean: string): string {
    let indexOfDing = DATA.notesSharp.indexOf(ding)
    if (indexOfDing === -1) {
        indexOfDing = DATA.notesFlat.indexOf(ding)
    }
    const relatives = []
    for (let i = 0; i < 12; i++) {
        relatives.push(DATA.ecarts[(12 - indexOfDing + i) % 12])
    }
    let relStr = notesAsStringClean + ' '
    for (let i = 0; i < 12; i++) {
        relStr = relStr.replace(new RegExp(DATA.notesSharp[i] + '([^♯♭])', 'g'), relatives[i] + '$1')
        relStr = relStr.replace(new RegExp(DATA.notesFlat[i] + '([^♯♭])', 'g'), relatives[i] + '$1')
    }
    return relStr.trim()
}

export const genChords = (uniqueNotes: any): any => {
    return DATA.chords.map(chordType => {
        const chordsFound: any[] = []
        uniqueNotes.forEach((note: any) => {
            chordType.chords.forEach(chord => {
                const chordNotes = chord.val.split(' ')
                const every = chordNotes.every(chordNote => {
                    return (
                        uniqueNotes.indexOf(relToAbsSharp(note, chordNote)) >= 0 || uniqueNotes.indexOf(relToAbsFlat(note, chordNote)) >= 0
                    )
                })
                if (every) {
                    chordsFound.push({
                        root: note,
                        notes: chordNotes,
                        label: note + chord.abbr,
                    })
                }
            })
        })
        return { type: chordType.type, chords: chordsFound }
    })
}

export const genPanScales = (handpans: Handpan[]): any[] => {
    const panScalesAbsolute = handpans.flatMap(handpan =>
        DATA.panScales.map(panScale => {
            const pan = new Handpan()
            pan.loadFromRelNotation(handpan.ding, panScale.val)
            return {
                ding: handpan.ding,
                name: panScale.name,
                notesAll: pan.notesAll,
            }
        }),
    )
    return panScalesAbsolute.filter(panScale => {
        return panScale.notesAll.every(panNote => {
            return handpans
                .flatMap(handpan => handpan.notesAll)
                .some(handpanNote => {
                    // Car la génération de relatif => absolu ne génère que des # pour l'instant
                    const flatIndex = DATA.notesFlat.indexOf(handpanNote.name)
                    const sharpedNoteName = flatIndex !== -1 ? DATA.notesSharp[flatIndex] : handpanNote.name
                    return panNote.octave === handpanNote.octave && panNote.name === sharpedNoteName
                })
        })
    })
}

export const genScales = (handpans: Handpan[]): any[] => {
    const notesAllPans = handpans.flatMap(handpan => [handpan.ding, ...handpan.notesAll.map(note => note.name)]) // En attendant le ding dans notesAll
    const uniqueNotesAllPans = [...new Set(notesAllPans)]
    return uniqueNotesAllPans.flatMap(tonic => {
        const scalesWithAbs = DATA.scales.map(scale => {
            return { ...scale, absSharp: scale.ecarts.map(ecart => relToAbsSharp(tonic, ecart)) }
        })
        return scalesWithAbs
            .filter(scale => {
                return scale.absSharp.every(note => {
                    const otherNote = alternateFlatSharp(note)
                    return uniqueNotesAllPans.indexOf(note) !== -1 || uniqueNotesAllPans.indexOf(otherNote) !== -1
                })
            })
            .filter(scale => {
                const otherTonic = alternateFlatSharp(tonic)
                return notesAllPans.filter(n => n === tonic || n === otherTonic).length >= 2
            })
            .map(scale => ({
                id: tonic + ' ' + scale.name,
                tonic,
                noteNames: scale.absSharp,
                name: scale.name,
                totalNotes: handpans
                    .flatMap(handpan => [handpan.ding, ...handpan.notesAll.map(note => note.name)])
                    .filter(note => {
                        // En attendant le ding dans notesAll
                        const otherNote = alternateFlatSharp(note)
                        return scale.absSharp.indexOf(note) !== -1 || scale.absSharp.indexOf(otherNote) !== -1
                    }).length,
                special: scale.special ? relToAbsSharp(tonic, scale.special) : null,
            }))
    })
}

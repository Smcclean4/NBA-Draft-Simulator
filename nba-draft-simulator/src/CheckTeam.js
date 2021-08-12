import React from 'react'
import * as NBAIcons from 'react-nba-logos'

const CheckTeam = (t, r) => {
    if (t.data[`${r}`].abbreviation === 'TOR') {
         return <NBAIcons.TOR />
    } else if (t.data[`${r}`].abbreviation === 'LAL') {
        return <NBAIcons.LAL />
    } else if (t.data[`${r}`].abbreviation === 'ATL') {
        return <NBAIcons.ATL />
    } else if (t.data[`${r}`].abbreviation === 'BOS') {
        return <NBAIcons.BOS />
    } else if (t.data[`${r}`].abbreviation === 'BKN') {
        return <NBAIcons.BKN />
    } else if (t.data[`${r}`].abbreviation === 'CHA') {
        return <NBAIcons.CHA />
    } else if (t.data[`${r}`].abbreviation === 'CHI') {
        return <NBAIcons.CHI />
    } else if (t.data[`${r}`].abbreviation === 'CLE') {
        return <NBAIcons.CLE />
    } else if (t.data[`${r}`].abbreviation === 'DAL') {
        return <NBAIcons.DAL />
    } else if (t.data[`${r}`].abbreviation === 'DEN') {
        return <NBAIcons.DEN />
    } else if (t.data[`${r}`].abbreviation === 'DET') {
        return <NBAIcons.DET />
    } else if (t.data[`${r}`].abbreviation === 'GSW') {
        return <NBAIcons.GSW />
    } else if (t.data[`${r}`].abbreviation === 'HOU') {
        return <NBAIcons.HOU />
    } else if (t.data[`${r}`].abbreviation === 'IND') {
        return <NBAIcons.IND />
    } else if (t.data[`${r}`].abbreviation === 'LAC') {
        return <NBAIcons.LAC />
    } else if (t.data[`${r}`].abbreviation === 'LAL') {
        return <NBAIcons.LAL />
    } else if (t.data[`${r}`].abbreviation === 'MEM') {
        return <NBAIcons.MEM />
    } else if (t.data[`${r}`].abbreviation === 'MIA') {
        return <NBAIcons.MIA />
    } else if (t.data[`${r}`].abbreviation === 'MIL') {
        return <NBAIcons.MIL />
    } else if (t.data[`${r}`].abbreviation === 'MIN') {
        return <NBAIcons.MIN />
    } else if (t.data[`${r}`].abbreviation === 'NOP') {
        return <NBAIcons.NOP />
    } else if (t.data[`${r}`].abbreviation === 'NYK') {
        return <NBAIcons.NYK />
    } else if (t.data[`${r}`].abbreviation === 'OKC') {
        return <NBAIcons.OKC />
    } else if (t.data[`${r}`].abbreviation === 'ORL') {
        return <NBAIcons.ORL />
    } else if (t.data[`${r}`].abbreviation === 'PHI') {
        return <NBAIcons.PHI />
    } else if (t.data[`${r}`].abbreviation === 'PHX') {
        return <NBAIcons.PHX />
    } else if (t.data[`${r}`].abbreviation === 'POR') {
        return <NBAIcons.POR />
    } else if (t.data[`${r}`].abbreviation === 'SAC') {
        return <NBAIcons.SAC />
    } else if (t.data[`${r}`].abbreviation === 'SAS') {
        return <NBAIcons.SAS />
    } else if (t.data[`${r}`].abbreviation === 'TOR') {
        return <NBAIcons.TOR />
    } else if (t.data[`${r}`].abbreviation === 'UTA') {
        return <NBAIcons.UTA />
    } else if (t.data[`${r}`].abbreviation === 'WAS') {
        return <NBAIcons.WAS />
    }
}

export default CheckTeam
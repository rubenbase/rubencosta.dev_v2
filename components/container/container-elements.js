import styled from '@emotion/styled'

const EM = 'em'

const MARGIN_UNIT = EM
const MAX_WIDTH_UNIT = EM

function getMarginStyles({ mt, mb, ml, mr }) {
  return `
    ${mt && `margin-top: ${mt + MARGIN_UNIT};`}
    ${mb && `margin-bottom: ${mb + MARGIN_UNIT};`}
    ${ml && `margin-left: ${ml + MARGIN_UNIT};`}
    ${mr && `margin-right: ${mr + MARGIN_UNIT};`}
    `
}

// function getMaxWidthStyles({w}) {
//     return `
//     ${w && `max-width:  ${w + MAX_WIDTH_UNIT }}
//     `
// }

export const StyledContainer = styled.section`
  box-sizing: border-box;
  ${(props) => getMarginStyles(props)}
`
/* ${(props) => getMaxWidthStyles(props)} */

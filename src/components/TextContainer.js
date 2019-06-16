import styled from 'styled-components';

import { textWidth, grays } from '../theme';

export const TextContainer = styled.div`
  color: ${grays.black};
  line-height: 1.5em;
  max-width: ${textWidth};
  padding: 0 2em;
`

export const CenteredTextContainer = styled(TextContainer)`
  margin: 0 auto;
`
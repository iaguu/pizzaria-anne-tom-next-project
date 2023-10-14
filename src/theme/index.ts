import colors from 'theme/colors'
import typography from 'theme/typography'
import breakpoints from 'theme/breakpoints'
import animations from 'theme/animations'
import layouts from 'theme/layouts'

const s = {
  ...colors,
  ...typography,
  ...breakpoints,
  ...animations
}

const c = {
  ...layouts
}

export { s, c }

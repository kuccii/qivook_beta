// ** React Import
import { ReactNode } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
  verticalNavMenuBranding?: (props?: any) => ReactNode
}

// ** Styled Components
const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const VerticalNavHeader = (props: Props) => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper className='nav-header' sx={{ pl: 6 }}>
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <StyledLink>
            <svg
  width={50}
  height={50}
  version='1.1'
  viewBox='0 0 50 50'
  xmlns='http://www.w3.org/2000/svg'
  xmlnsXlink='http://www.w3.org/1999/xlink'
>
  <path
    fill={theme.palette.primary.main}
    d='M25,2.5 C14.283,2.5 6.5,10.283 6.5,21 C6.5,31.717 14.283,39.5 25,39.5 C35.717,39.5 43.5,31.717 43.5,21 C43.5,10.283 35.717,2.5 25,2.5 Z M25,38 C15.611,38 8.5,30.889 8.5,21.5 C8.5,12.111 15.611,5 25,5 C34.389,5 41.5,12.111 41.5,21.5 C41.5,30.889 34.389,38 25,38 Z M25,10 C18.935,10 14,14.935 14,21 C14,27.065 18.935,32 25,32 C31.065,32 36,27.065 36,21 C36,14.935 31.065,10 25,10 Z M25,15 C22.239,15 20,17.239 20,20 C20,22.761 22.239,25 25,25 C27.761,25 30,22.761 30,20 C30,17.239 27.761,15 25,15 Z'
  />
</svg>
            <HeaderTitle variant='h6' sx={{ ml: 3 }}>
              {themeConfig.templateName}
            </HeaderTitle>
          </StyledLink>
        </Link>
      )}
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader

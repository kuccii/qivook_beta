// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardAppleWatch = () => {
  const handleViewContact = () => {
    window.open('/supplier-profile', '_blank') // Open the supplier-profile page in a new tab or window
  }

  return (
    <Card>
      <CardMedia sx={{ height: '9.375rem' }} image='' />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Simra Limited
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>Great supplier from East Africa</Typography>
        <Typography variant='body2'>
          
        </Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }} onClick={handleViewContact}>
        View Contact
      </Button>
    </Card>
  )
}

export default CardAppleWatch
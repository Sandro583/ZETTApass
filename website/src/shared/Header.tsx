import { AppBar, Toolbar, Typography, Button, Box, Link as MuiLink } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isOnUploadPage = location.pathname.includes('upload');
  const base = process.env.PUBLIC_URL || '';
  const home = base + '/#/';
  const upload = base + '/#/upload';

  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <MuiLink href={home} color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            sx={{
              width: '40px',
              height: '40px',
              marginRight: '8px',
            }}
            alt=""
            src="zettapass.svg"
          />
          <Typography variant="h6" component="div">
            ZETTApass
          </Typography>
        </MuiLink>
        <Box sx={{ marginLeft: 'auto' }}>
          <Button
            component={MuiLink}
            href={isOnUploadPage ? home : upload}
            variant="contained"
            color="primary"
            underline="none"
          >
            {isOnUploadPage ? t('header.buttonHome') : t('header.buttonUpload')}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

import { useState } from 'react';
import { Button, ListItemIcon, ListItemText, MenuItem, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import { languages } from 'data/languages';
import IconifyIcon from 'components/base/IconifyIcon';

const LanguageMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button color="neutral" variant="text" shape="circle" onClick={handleMenuOpen}>
        <IconifyIcon icon={languages[0].icon} sx={{ fontSize: 24 }} />
      </Button>

      <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={menuOpen}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.shortLabel}
            onClick={handleMenuClose}
            selected={language.locale === 'en-US'}
            sx={{ minWidth: 200 }}
          >
            <ListItemIcon>
              <IconifyIcon icon={language.icon} sx={{ fontSize: 24 }} />
            </ListItemIcon>

            <ListItemText
              primary={language.label}
              slotProps={{
                primary: { sx: { fontSize: 14 } },
              }}
            />

            <Typography
              variant="subtitle2"
              sx={{
                color: 'text.secondary',
                fontWeight: 'normal',
              }}
            >
              {language.currencySymbol}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageMenu;

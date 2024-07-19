import { Box, Radio, RadioGroup, Typography } from '@mui/joy'
import React from 'react'

const Danne = () => {
  const [justify, setJustify] = React.useState('flex-start');

  return (
    <>
    <div className="orders__page">
      <div className="orders__content">
        <form action="">
           <div className="danne__df">
              <span>
                    <label htmlFor="">Фамилия*</label>
                    <input type="text" />
                </span>
                <span>
                    <label htmlFor="">Имя* </label>
                    <input type="text" />
                </span>
                <span>
                    <label htmlFor="">Отчество</label>
                    <input type="text" />
                </span>
           </div>
           <div className="danne__df">
              <div className="dfc">
                    <label htmlFor="">Дата рождения*</label>
                    <input type="date" />
              </div>
                  <Box className="box" sx={{ display: 'flex',  alignItems: '', gap: 1 }}>
    <label htmlFor=""> поль </label>
    <RadioGroup
      orientation="horizontal"
      aria-labelledby="segmented-controls-example"
      name="justify"
      value={justify}
      onChange={(event) => setJustify(event.target.value)}
      sx={{
        minHeight: 48,
        padding: '4px',
        borderRadius: '12px',
        bgcolor: 'neutral.softBg',
        '--RadioGroup-gap': '4px',
        '--Radio-actionRadius': '8px',
      }}
    >
      {['мужкой ', 'женский '].map((item) => (
        <Radio
          key={item}
          color="neutral"
          value={item}
          disableIcon
          label={item}
          variant="plain"
          sx={{
            px: 2,
            alignItems: 'center',
          }}
          slotProps={{
            action: ({ checked }) => ({
              sx: {
                ...(checked && {
                  bgcolor: 'background.surface',
                  boxShadow: 'sm',
                  '&:hover': {
                    bgcolor: 'background.surface',
                  },
                }),
              },
            }),
          }}
        />
      ))}
    </RadioGroup>
                  </Box>    
           </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Danne
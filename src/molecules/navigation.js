import {Tabs, Tab, Box} from '@material-ui/core'

const Navigation = ({value, valueArr, onChangeTabs}) => {
  return (
    <Box
      sx={{
        padding: '30px 0',
      }}
    >
      <Tabs
        value={value}
        onChange={onChangeTabs}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        aria-label="scrollable auto tabs example"
      >
        <Tab label={valueArr[0]} />
        <Tab label={valueArr[1]} />
        <Tab label={valueArr[2]} />
        <Tab label={valueArr[3]} />
      </Tabs>
    </Box>
  )
}

export default Navigation

import { makeStyles} from '@material-ui/core/styles' 
import { Title, MDLayout } from 'components/Layout'
import { 
  H1, H2, H3, H4, H5, H6, 
  Subtitle1, Subtitle2, 
  Body1, Body2, P,
  Button as TypographyButton, Caption, Overline
} from 'mui/Typography'
import Button, { 
  Contained as ContainedButton,
  Outlined as OutlinedButton, 
  Small as SmallButton, 
  Medium as MediumButton, 
  Large as LargeButton
} from 'mui/Button'

const useStyles = makeStyles(theme => ({
  roomToBreath: {
    margin: theme.spacing(2)
  },
  customColor: {
    background: `-webkit-linear-gradient(45deg,${theme.palette.primary.main},${theme.palette.secondary.main})`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  }
}))

const MUI = () => {
  const classes = useStyles()
  return (
    <MDLayout>
      <Title>Material-UI “Kitchen Sink”</Title>
      <P>Get an idea of what you can expect your theme to look like out of the box</P>
      <H1 gutterBottom className={classes.customColor}>h1. Typography</H1>
      <H2 gutterBottom>h2. Typography</H2>
      <H3 gutterBottom>h3. Typography</H3>
      <H4 gutterBottom>h4. Typography</H4>
      <H5 gutterBottom>h5. Typography</H5>
      <H6 gutterBottom>h6. Typography</H6>
      <Subtitle1 gutterBottom>subtitle1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum egestas quam a condimentum. Quisque ligula tortor, mollis ut imperdiet eu, vehicula et leo. Maecenas risus tellus, vehicula id porttitor in, gravida sed tortor. Fusce lectus purus, faucibus id tellus et, vestibulum tincidunt augue. Fusce elementum diam arcu, a fermentum lectus suscipit et. Quisque elementum eros tortor, ac tempus libero egestas pulvinar.</Subtitle1>
      <Subtitle2 gutterBottom>subtitle2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum egestas quam a condimentum. Quisque ligula tortor, mollis ut imperdiet eu, vehicula et leo. Maecenas risus tellus, vehicula id porttitor in, gravida sed tortor. Fusce lectus purus, faucibus id tellus et, vestibulum tincidunt augue. Fusce elementum diam arcu, a fermentum lectus suscipit et. Quisque elementum eros tortor, ac tempus libero egestas pulvinar.</Subtitle2>
      <Body1 gutterBottom>body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum egestas quam a condimentum. Quisque ligula tortor, mollis ut imperdiet eu, vehicula et leo. Maecenas risus tellus, vehicula id porttitor in, gravida sed tortor. Fusce lectus purus, faucibus id tellus et, vestibulum tincidunt augue. Fusce elementum diam arcu, a fermentum lectus suscipit et. Quisque elementum eros tortor, ac tempus libero egestas pulvinar. Vestibulum pretium nisi sed eleifend rhoncus. Nam fringilla ornare mi, vel commodo metus sagittis in.</Body1>
      <Body2 gutterBottom>body2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum egestas quam a condimentum. Quisque ligula tortor, mollis ut imperdiet eu, vehicula et leo. Maecenas risus tellus, vehicula id porttitor in, gravida sed tortor. Fusce lectus purus, faucibus id tellus et, vestibulum tincidunt augue. Fusce elementum diam arcu, a fermentum lectus suscipit et. Quisque elementum eros tortor, ac tempus libero egestas pulvinar. Vestibulum pretium nisi sed eleifend rhoncus. Nam fringilla ornare mi, vel commodo metus sagittis in.</Body2>
      <TypographyButton gutterBottom>button.</TypographyButton>
      <Caption gutterBottom>caption. Lorem ipsum dolor sit amet</Caption>
      <Overline gutterBottom>overline.</Overline>
      <H4>Buttons</H4>
      <div>
        <Subtitle1>Standard</Subtitle1>
        <Button className={classes.roomToBreath}>Default</Button>
        <Button color="primary" className={classes.roomToBreath}>Primary</Button>
        <Button color="secondary" className={classes.roomToBreath}>Secondary</Button>
      </div>
      <div>
        <Subtitle1>Contained</Subtitle1>
        <ContainedButton className={classes.roomToBreath}>Default</ContainedButton>
        <ContainedButton color="primary" className={classes.roomToBreath}>Primary</ContainedButton>
        <ContainedButton color="secondary" className={classes.roomToBreath}>Secondary</ContainedButton>
      </div>
      <div>
        <Subtitle1>Outlined</Subtitle1>
        <OutlinedButton className={classes.roomToBreath}>Default</OutlinedButton>
        <OutlinedButton color="primary" className={classes.roomToBreath}>Primary</OutlinedButton>
        <OutlinedButton color="secondary" className={classes.roomToBreath}>Secondary</OutlinedButton>
      </div>
      <div>
        <Subtitle1>Size</Subtitle1>
        <SmallButton variant="contained" className={classes.roomToBreath}>Small</SmallButton>
        <MediumButton variant="contained" className={classes.roomToBreath}>Medium</MediumButton>
        <LargeButton variant="contained" className={classes.roomToBreath}>Large</LargeButton>
      </div>
      <div>
        <Subtitle1>Medium</Subtitle1>
        <MediumButton className={classes.roomToBreath}>Default</MediumButton>
        <MediumButton variant="contained" className={classes.roomToBreath}>Contained</MediumButton>
        <MediumButton variant="outlined" className={classes.roomToBreath}>Outlined</MediumButton>
      </div>
      <div>
        <Subtitle1>Large</Subtitle1>
        <LargeButton className={classes.roomToBreath}>Default</LargeButton>
        <LargeButton variant="contained" className={classes.roomToBreath}>Contained</LargeButton>
        <LargeButton variant="outlined" className={classes.roomToBreath}>Outlined</LargeButton>
      </div>
    </MDLayout>
  )
}

export default MUI